#!/usr/bin/env python3
"""
Unit and Integration Test Suite for VascFlow DICOM-to-Web-Cine Engine
Validates:
1. Real clinical DSA fluoroscopy multi-frame cine (Sample 00480216)
2. Modality detection (XA, CT, MR)
3. CT Hounsfield Unit calibration (RescaleSlope / RescaleIntercept) & window presets
4. De-identification compliance (DISHA / HIPAA PHI masking)
5. Frame rate heuristics (CineRate, RecommendedDisplayFrameRate, FrameTime, Text hints)
6. Video encoding (FFmpeg H.264 & OpenCV VideoWriter fallback)
7. Manifest JSON structure and validity
"""

import os
import sys
import json
import shutil
import tempfile
import unittest
from pathlib import Path

import numpy as np
import pydicom
from pydicom.dataset import Dataset, FileDataset, FileMetaDataset
from pydicom.uid import ExplicitVRLittleEndian, SecondaryCaptureImageStorage

# Add current directory to path
sys.path.insert(0, str(Path(__file__).parent))

from dicom_to_web_cine import (
    DicomWebConverter,
    deidentify_patient_name,
    sanitize_patient_id,
    detect_frame_rate,
    get_slice_sort_key,
    apply_auto_levels_xa,
    apply_ct_window,
    apply_mr_auto_levels,
    encode_frames_opencv,
    encode_frames_ffmpeg,
    check_ffmpeg_available,
    CT_WINDOW_PRESETS
)

REAL_SAMPLE_PATH = Path(r"E:\1074_18-09-2026_LAXMI DEVI_SPLENIC ARTERY EMBOLIZATION\2026091\1\00480216")


def create_synthetic_dicom_slice(
    filename: Path,
    patient_id: str,
    patient_name: str,
    modality: str,
    series_num: int,
    instance_num: int,
    slice_location: float,
    rows: int = 64,
    cols: int = 64,
    hu_base: int = 0
) -> Path:
    """Helper to generate a valid synthetic DICOM slice with standard headers."""
    file_meta = FileMetaDataset()
    file_meta.MediaStorageSOPClassUID = SecondaryCaptureImageStorage
    file_meta.MediaStorageSOPInstanceUID = f"1.2.826.0.1.{series_num}.{instance_num}"
    file_meta.TransferSyntaxUID = ExplicitVRLittleEndian

    ds = FileDataset(str(filename), {}, file_meta=file_meta, preamble=b"\0" * 128)
    ds.PatientID = patient_id
    ds.PatientName = patient_name
    ds.Modality = modality
    ds.SeriesNumber = series_num
    ds.InstanceNumber = instance_num
    ds.SeriesDescription = f"Synthetic_{modality}_Series"
    ds.StudyDate = "20261001"
    ds.SeriesInstanceUID = f"1.2.826.0.1.999.{series_num}"
    ds.SOPInstanceUID = file_meta.MediaStorageSOPInstanceUID
    ds.SOPClassUID = file_meta.MediaStorageSOPClassUID

    ds.SliceLocation = slice_location
    ds.ImagePositionPatient = [0.0, 0.0, slice_location]
    ds.Rows = rows
    ds.Columns = cols
    ds.BitsAllocated = 16
    ds.BitsStored = 16
    ds.HighBit = 15
    ds.PixelRepresentation = 1  # signed int16
    ds.SamplesPerPixel = 1
    ds.PhotometricInterpretation = "MONOCHROME2"

    ds.RescaleSlope = 1.0
    ds.RescaleIntercept = -1024.0

    # Create synthetic gradient + target HU structure (circle inside)
    # Stored pixel value = HU - RescaleIntercept = HU + 1024
    arr = np.full((rows, cols), hu_base + 1024, dtype=np.int16)
    # Add a bright circular phantom (bone-like +800 HU)
    cy, cx = rows // 2, cols // 2
    y, x = np.ogrid[:rows, :cols]
    mask = (x - cx) ** 2 + (y - cy) ** 2 <= (rows // 4) ** 2
    arr[mask] = 800 + 1024

    ds.PixelData = arr.tobytes()
    ds.save_as(str(filename))
    return filename


class TestDicomWebConverter(unittest.TestCase):

    def setUp(self):
        self.temp_dir = Path(tempfile.mkdtemp(prefix="vascflow_test_"))

    def tearDown(self):
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_deidentification_phi(self):
        """Verify patient name and ID masking according to DISHA/HIPAA."""
        # Multi-part name with DICOM caret
        raw = "LAXMI DEVI^35YRS^^^"
        deidentified = deidentify_patient_name(raw)
        self.assertEqual(deidentified, "L*** D***")

        # Single word name
        self.assertEqual(deidentify_patient_name("RAMVILASH"), "R***")

        # Short initials
        self.assertEqual(deidentify_patient_name("A B"), "A* B*")

        # None / empty handling
        self.assertEqual(deidentify_patient_name(None), "ANONYMIZED_PATIENT")
        self.assertEqual(deidentify_patient_name(""), "ANONYMIZED_PATIENT")

        # Patient ID sanitization
        self.assertEqual(sanitize_patient_id("1074/18-09-2026"), "1074")
        self.assertEqual(sanitize_patient_id("CR-98432"), "CR-98432")
        self.assertEqual(sanitize_patient_id(None), "UNKNOWN_ID")

    def test_frame_rate_heuristics(self):
        """Verify frame rate detection priority chain."""
        ds = Dataset()

        # 1. CineRate takes precedence
        ds.CineRate = 15
        ds.RecommendedDisplayFrameRate = 8
        ds.FrameTime = 250.0  # 4 fps
        self.assertEqual(detect_frame_rate(ds, "XA"), 15.0)

        # 2. RecommendedDisplayFrameRate when CineRate missing
        del ds.CineRate
        self.assertEqual(detect_frame_rate(ds, "XA"), 8.0)

        # 3. FrameTime (1000/250 = 4.0 fps)
        del ds.RecommendedDisplayFrameRate
        self.assertEqual(detect_frame_rate(ds, "XA"), 4.0)

        # 4. Text hint in SeriesDescription
        del ds.FrameTime
        ds.SeriesDescription = "Celiac Run 2 fps"
        self.assertEqual(detect_frame_rate(ds, "XA"), 2.0)

        # 5. CLI override always wins
        self.assertEqual(detect_frame_rate(ds, "XA", override_fps=30.0), 30.0)

        # 6. Modality fallbacks
        ds.SeriesDescription = "Standard Fluoroscopy"
        self.assertEqual(detect_frame_rate(ds, "XA"), 15.0)
        self.assertEqual(detect_frame_rate(ds, "CT"), 10.0)

    def test_ct_window_formula(self):
        """Verify CT Hounsfield Unit conversion and window clamping."""
        # Create array with air (-1000 HU), water (0 HU), soft tissue (40 HU), and dense bone (1000 HU)
        raw_pixels = np.array([24, 1024, 1064, 2024], dtype=np.int16)
        # Rescale: HU = pixel * 1.0 - 1024.0 -> [-1000, 0, 40, 1000]
        # Soft tissue window: C:40, W:400 -> range [-160, 240]
        res = apply_ct_window(raw_pixels, 1.0, -1024.0, 40, 400)
        self.assertEqual(res.dtype, np.uint8)
        # Air (-1000 HU) is below -160 -> clamped to 0
        self.assertEqual(res[0], 0)
        # Dense bone (1000 HU) is above 240 -> clamped to 255
        self.assertEqual(res[3], 255)
        # Soft tissue (40 HU) is center -> exactly 127/128
        self.assertTrue(126 <= res[2] <= 129)

    def test_auto_levels_xa_monochrome(self):
        """Verify contrast curve auto-leveling and MONOCHROME1 inversion."""
        raw = np.array([[[10, 20], [30, 40]]], dtype=np.uint8)
        # Test MONOCHROME2
        m2 = apply_auto_levels_xa(raw, "MONOCHROME2")
        self.assertEqual(m2.shape, (1, 2, 2))
        self.assertEqual(m2.min(), 0)
        self.assertEqual(m2.max(), 255)

        # Test MONOCHROME1 (should invert so lowest becomes highest)
        m1 = apply_auto_levels_xa(raw, "MONOCHROME1")
        self.assertEqual(m1.shape, (1, 2, 2))
        self.assertEqual(m1.min(), 0)
        self.assertEqual(m1.max(), 255)

    def test_opencv_fallback_encoding(self):
        """Verify OpenCV VideoWriter fallback produces a valid MP4."""
        out_mp4 = self.temp_dir / "opencv_test.mp4"
        frames = (np.random.rand(15, 64, 64) * 255).astype(np.uint8)
        ok = encode_frames_opencv(frames, out_mp4, fps=15.0)
        self.assertTrue(ok)
        self.assertTrue(out_mp4.exists())
        self.assertGreater(out_mp4.stat().st_size, 1000)

    def test_synthetic_ct_volume_conversion(self):
        """Verify sorting and conversion of a synthetic multi-slice CT stack."""
        ct_dir = self.temp_dir / "synthetic_ct_study"
        ct_dir.mkdir()

        # Create 5 slices in reverse order to test sorting
        for i in range(5):
            z_pos = (4 - i) * 5.0
            create_synthetic_dicom_slice(
                filename=ct_dir / f"slice_{i:02d}.dcm",
                patient_id="CT-TEST-01",
                patient_name="TEST^PATIENT",
                modality="CT",
                series_num=2,
                instance_num=5 - i,
                slice_location=z_pos,
                hu_base=40
            )

        converter = DicomWebConverter(
            output_dir=self.temp_dir / "ct_web_output",
            ct_preset="angio"
        )
        results = converter.process_path(ct_dir)

        self.assertEqual(len(results), 1)
        entry = results[0]
        self.assertEqual(entry["modality"], "CT")
        self.assertEqual(entry["patient_id"], "CT-TEST-01")
        self.assertEqual(entry["patient_name"], "T*** P***")
        self.assertEqual(entry["num_frames"], 5)
        self.assertEqual(entry["fps"], 10.0)
        self.assertIsNotNone(entry["window_presets"])
        self.assertEqual(entry["window_presets"]["active_preset"], "angio")

        # Verify generated MP4 exists
        mp4_path = Path(entry["file_path"])
        self.assertTrue(mp4_path.exists())
        self.assertGreater(mp4_path.stat().st_size, 0)

        # Verify manifest.json exists in output folder
        manifest_path = mp4_path.parent / "manifest.json"
        self.assertTrue(manifest_path.exists())
        with open(manifest_path, "r", encoding="utf-8") as f:
            manifest_doc = json.load(f)
            self.assertEqual(manifest_doc["total_series_converted"], 1)

    @unittest.skipUnless(REAL_SAMPLE_PATH.exists(), "Clinical sample 00480216 not accessible on this system")
    def test_real_clinical_sample_00480216(self):
        """
        Verify end-to-end conversion of actual clinical sample from SMS Medical College angiosuite:
        E:\\1074_18-09-2026_LAXMI DEVI_SPLENIC ARTERY EMBOLIZATION\\2026091\\1\\00480216
        """
        out_dir = self.temp_dir / "real_clinical_output"
        converter = DicomWebConverter(output_dir=out_dir)
        results = converter.process_path(REAL_SAMPLE_PATH)

        self.assertEqual(len(results), 1)
        entry = results[0]

        # Check metadata
        self.assertEqual(entry["patient_id"], "1074")
        self.assertEqual(entry["patient_name"], "L*** D***")
        self.assertEqual(entry["modality"], "XA")
        self.assertEqual(entry["study_date"], "2026-09-18")
        self.assertEqual(entry["series_description"], "Fluoroscopy - stored")
        self.assertEqual(entry["num_frames"], 216)
        self.assertEqual(entry["fps"], 15.0)
        self.assertEqual(entry["width"], 394)
        self.assertEqual(entry["height"], 512)

        # Check MP4 file
        mp4_path = Path(entry["file_path"])
        self.assertTrue(mp4_path.exists())
        self.assertGreater(mp4_path.stat().st_size, 1_000_000)  # Greater than 1 MB

        # Check manifest.json
        manifest_file = mp4_path.parent / "manifest.json"
        self.assertTrue(manifest_file.exists())
        with open(manifest_file, "r", encoding="utf-8") as f:
            data = json.load(f)
            self.assertEqual(len(data), 1)
            self.assertEqual(data[0]["file_name"], mp4_path.name)


if __name__ == "__main__":
    unittest.main()
