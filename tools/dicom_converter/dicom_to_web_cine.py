#!/usr/bin/env python3
"""
VascFlow — DICOM to Web Cine Conversion & Departmental Watcher Engine
Institution: SMS Medical College & Attached Hospitals, Jaipur / AIIMS IR Vault
Domain: Interventional Radiology (XA/DSA Fluoroscopy Cine & CT/MR Cross-Sectional Volumes)

Author: Dr. Neel Yadav / VascFlow Engineering Team
License: Apache-2.0
"""

import os
import sys
import time
import json
import shutil
import logging
import argparse
import subprocess
import re
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple, Union
from datetime import datetime, timezone
from collections import defaultdict

import numpy as np
import pydicom
from pydicom.dataset import FileDataset
import cv2

# Rich terminal formatting if available
try:
    from rich.console import Console
    from rich.table import Table
    from rich.progress import Progress, SpinnerColumn, TextColumn, BarColumn, TimeRemainingColumn
    from rich.panel import Panel
    CONSOLE = Console()
    HAS_RICH = True
except ImportError:
    CONSOLE = None
    HAS_RICH = False

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S"
)
logger = logging.getLogger("VascFlow-DICOM")

# ==============================================================================
# CLINICAL PRESETS & CONSTANTS
# ==============================================================================

# Standard Clinical CT Window Presets (Hounsfield Units: Center, Width)
CT_WINDOW_PRESETS: Dict[str, Dict[str, Any]] = {
    "angio": {"center": 200, "width": 600, "desc": "Vascular / Angiography (Contrast & Vessels)"},
    "soft_tissue": {"center": 40, "width": 400, "desc": "Abdominal / Soft Tissue Parenchyma"},
    "bone": {"center": 400, "width": 1800, "desc": "Bone & High Density Structures"},
    "lung": {"center": -600, "width": 1500, "desc": "Pulmonary Parenchyma"},
    "brain": {"center": 40, "width": 80, "desc": "Cranial / Soft Tissue Contrast"},
    "abdomen": {"center": 50, "width": 350, "desc": "Visceral Abdominal Organs"},
}

FFMPEG_DEFAULT_CRF = 18
FFMPEG_PRESET = "fast"
DEFAULT_XA_FPS = 15.0
DEFAULT_CT_FPS = 10.0


# ==============================================================================
# DE-IDENTIFICATION & DISHA / PHI COMPLIANCE
# ==============================================================================

def deidentify_patient_name(raw_name: Optional[Any]) -> str:
    """
    De-identify patient name according to DISHA & HIPAA PHI guidelines.
    Masks internal name characters while retaining first letters or initials.
    Handles standard DICOM 'Last^First^Middle' and hospital 'Name^Age' schemas.
    e.g., 'LAXMI DEVI^35YRS^^^' -> 'L*** D***'
          'TEST^PATIENT' -> 'T*** P***'
    """
    if not raw_name:
        return "ANONYMIZED_PATIENT"
    name_str = str(raw_name).strip()
    if not name_str:
        return "ANONYMIZED_PATIENT"

    components = name_str.split('^')
    words = []
    for comp in components:
        comp = comp.strip()
        if not comp:
            continue
        # Filter out age / sex annotations like '35YRS', '40Y', '28M', '65F'
        if re.match(r'^\d{1,3}\s*(?:YRS?|Y|M|F)?$', comp, re.IGNORECASE):
            continue
        words.extend(comp.split())

    masked = []
    for w in words:
        cleaned = "".join(c for c in w if c.isalnum())
        if cleaned:
            if len(cleaned) <= 2:
                masked.append(cleaned[0] + "*")
            else:
                masked.append(cleaned[0] + "***")
    return " ".join(masked) if masked else "ANONYMIZED_PATIENT"


def sanitize_patient_id(raw_id: Optional[Any]) -> str:
    """
    Sanitizes patient ID for file system and clinical reference.
    e.g., '1074/18-09-2026' -> '1074'
    """
    if not raw_id:
        return "UNKNOWN_ID"
    s = str(raw_id).strip()
    parts = s.split('/')
    if parts:
        case_num = parts[0].strip()
        cleaned = re.sub(r'[^\w\-]', '_', case_num)
        return cleaned if cleaned else "ANON_ID"
    return re.sub(r'[^\w\-]', '_', s)


def sanitize_filename(name: str) -> str:
    """Sanitize string for file names."""
    clean = re.sub(r'[^\w\-]', '_', name)
    clean = re.sub(r'_+', '_', clean).strip('_')
    return clean.lower() if clean else "cine"


# ==============================================================================
# DICOM PARSING & MODALITY DETECTION
# ==============================================================================

def is_dicom_file(filepath: Union[str, Path]) -> bool:
    """
    Check if a file is a valid DICOM file without reading all pixel data.
    Inspects DICOM preamble ('DICM' at byte 128) or pydicom header parsing.
    """
    p = Path(filepath)
    if not p.is_file():
        return False
    if p.name.upper() == "DICOMDIR":
        return False

    try:
        with open(p, "rb") as f:
            f.seek(128)
            preamble = f.read(4)
            if preamble == b"DICM":
                return True
        # Try reading DICOM header
        ds = pydicom.dcmread(str(p), stop_before_pixels=True, force=False)
        return hasattr(ds, "SOPClassUID") or hasattr(ds, "Modality")
    except Exception:
        try:
            ds = pydicom.dcmread(str(p), stop_before_pixels=True, force=True)
            return hasattr(ds, "SOPClassUID") or hasattr(ds, "Modality")
        except Exception:
            return False


def get_first_value(val: Any) -> Any:
    """Extract first value if pydicom returns MultiValue or list."""
    if val is None:
        return None
    if isinstance(val, (list, tuple, pydicom.multival.MultiValue)):
        return val[0] if len(val) > 0 else None
    return val


def detect_frame_rate(ds: FileDataset, modality: str, override_fps: Optional[float] = None) -> float:
    """
    Detect frame rate with intelligent clinical heuristic fallbacks:
    1. CLI Override (--fps)
    2. CineRate (0018, 0040)
    3. RecommendedDisplayFrameRate (0008, 2144)
    4. FrameTime (0018, 1063) -> fps = 1000.0 / FrameTime
    5. SeriesDescription hint (e.g. 'Lungs 2 fps' -> 2.0 fps)
    6. Modality standard default (XA -> 15.0 fps, CT/MR -> 10.0 fps)
    """
    if override_fps and override_fps > 0:
        return float(override_fps)

    # 1. CineRate
    cine_rate = get_first_value(getattr(ds, "CineRate", None))
    if cine_rate is not None:
        try:
            r = float(cine_rate)
            if r > 0:
                return r
        except (ValueError, TypeError):
            pass

    # 2. RecommendedDisplayFrameRate
    rec_rate = get_first_value(getattr(ds, "RecommendedDisplayFrameRate", None))
    if rec_rate is not None:
        try:
            r = float(rec_rate)
            if r > 0:
                return r
        except (ValueError, TypeError):
            pass

    # 3. FrameTime (milliseconds per frame)
    frame_time = get_first_value(getattr(ds, "FrameTime", None))
    if frame_time is not None:
        try:
            ft = float(frame_time)
            if ft > 0:
                return round(1000.0 / ft, 2)
        except (ValueError, TypeError):
            pass

    # 4. Text hint in SeriesDescription (e.g. 'Lungs 2 fps', 'DSA 4fps', '7.5 fps')
    desc = str(getattr(ds, "SeriesDescription", "")).lower()
    match = re.search(r"(\d+(?:\.\d+)?)\s*fps", desc)
    if match:
        try:
            hint_rate = float(match.group(1))
            if 0.5 <= hint_rate <= 60.0:
                return hint_rate
        except ValueError:
            pass

    # 5. Default modality fallbacks
    if modality.upper() in ("XA", "RF"):
        return DEFAULT_XA_FPS
    elif modality.upper() in ("CT", "MR"):
        return DEFAULT_CT_FPS
    return 10.0


def get_slice_sort_key(ds: FileDataset) -> Tuple[int, float]:
    """
    Sorting key for CT/MR axial slice stacks:
    1. ImagePositionPatient[2] (Z coordinate in mm)
    2. SliceLocation (mm)
    3. InstanceNumber
    """
    ipp = getattr(ds, "ImagePositionPatient", None)
    if ipp is not None and len(ipp) >= 3:
        try:
            return (0, float(ipp[2]))
        except (ValueError, TypeError):
            pass

    loc = getattr(ds, "SliceLocation", None)
    if loc is not None:
        try:
            return (1, float(loc))
        except (ValueError, TypeError):
            pass

    inst = getattr(ds, "InstanceNumber", None)
    if inst is not None:
        try:
            return (2, float(inst))
        except (ValueError, TypeError):
            pass

    return (3, 0.0)


def standardize_pixel_array(raw_array: np.ndarray, num_frames_tag: Optional[int] = None) -> np.ndarray:
    """
    Standardize pixel array shape into either:
    - (num_frames, height, width) for grayscale
    - (num_frames, height, width, 3) for RGB/BGR
    """
    if raw_array.ndim == 2:
        # Single frame grayscale (height, width)
        return np.expand_dims(raw_array, axis=0)

    if raw_array.ndim == 3:
        # Could be (frames, height, width) OR (height, width, 3)
        if raw_array.shape[2] == 3 and (num_frames_tag is None or num_frames_tag == 1):
            return np.expand_dims(raw_array, axis=0)
        # Default: (frames, height, width)
        return raw_array

    return raw_array


# ==============================================================================
# IMAGE PROCESSING & CONTRAST NORMALIZATION
# ==============================================================================

def apply_auto_levels_xa(frames: np.ndarray, photometric: str = "MONOCHROME2") -> np.ndarray:
    """
    Auto-level contrast curve for XA (DSA & Fluoroscopy cine runs):
    - Respects PhotometricInterpretation (MONOCHROME1 inverted vs MONOCHROME2 standard)
    - Computes robust dynamic range percentiles across full run to prevent inter-frame flicker
    - Stretches contrast to [0, 255] uint8 with enhanced vessel opacity
    """
    arr = frames.astype(np.float32)

    # Invert if MONOCHROME1 (0 is maximum brightness, 255 is dark)
    if photometric.upper() == "MONOCHROME1":
        arr = np.max(arr) - arr

    # Calculate global 0.5% and 99.5% percentiles across sampled frames
    if arr.ndim >= 3 and arr.shape[0] > 10:
        sample_indices = np.linspace(0, arr.shape[0] - 1, 10, dtype=int)
        sample = arr[sample_indices]
    else:
        sample = arr

    p_low = float(np.percentile(sample, 0.5))
    p_high = float(np.percentile(sample, 99.5))

    if p_high > p_low:
        stretched = np.clip((arr - p_low) / (p_high - p_low) * 255.0, 0.0, 255.0)
    else:
        min_v = float(np.min(arr))
        max_v = float(np.max(arr))
        if max_v > min_v:
            stretched = ((arr - min_v) / (max_v - min_v) * 255.0)
        else:
            stretched = np.zeros_like(arr)

    return stretched.astype(np.uint8)


def apply_ct_window(
    pixel_array: np.ndarray,
    rescale_slope: float,
    rescale_intercept: float,
    window_center: float,
    window_width: float
) -> np.ndarray:
    """
    Convert raw CT pixel array to calibrated Hounsfield Units (HU) and apply windowing:
    HU = pixel * RescaleSlope + RescaleIntercept
    Clips to [Center - Width/2, Center + Width/2] and scales to [0, 255] uint8.
    """
    hu = pixel_array.astype(np.float32) * float(rescale_slope) + float(rescale_intercept)

    lower = float(window_center) - 0.5 - (float(window_width) - 1.0) / 2.0
    upper = float(window_center) - 0.5 + (float(window_width) - 1.0) / 2.0

    if upper <= lower:
        upper = lower + 1.0

    clipped = np.clip(hu, lower, upper)
    norm = ((clipped - lower) / (upper - lower) * 255.0).astype(np.uint8)
    return norm


def apply_mr_auto_levels(pixel_array: np.ndarray) -> np.ndarray:
    """
    Normalize MR volume slices to 8-bit using robust percentile stretching.
    """
    arr = pixel_array.astype(np.float32)
    p_low = float(np.percentile(arr, 1.0))
    p_high = float(np.percentile(arr, 99.0))
    if p_high > p_low:
        norm = np.clip((arr - p_low) / (p_high - p_low) * 255.0, 0.0, 255.0)
    else:
        norm = np.zeros_like(arr)
    return norm.astype(np.uint8)


# ==============================================================================
# VIDEO ENCODING ENGINE (FFMPEG CLI + OPENCV FALLBACK)
# ==============================================================================

def check_ffmpeg_available() -> bool:
    """Check if ffmpeg executable is available in PATH."""
    return shutil.which("ffmpeg") is not None


def encode_frames_ffmpeg(
    frames: np.ndarray,
    output_path: Path,
    fps: float,
    crf: int = FFMPEG_DEFAULT_CRF
) -> bool:
    """
    Fast hardware-accelerated H.264 MP4 encoding with FFmpeg CLI:
    - Input: raw uint8 byte stream piped directly via stdin
    - Output: H.264 MP4 with yuv420p pixel format
    - Handles odd dimensions via padding: -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2"
    - Flags: -movflags +faststart for instantaneous web streaming playback
    """
    if frames.ndim == 3:
        num_frames, height, width = frames.shape
        pix_fmt_in = "gray"
    elif frames.ndim == 4:
        num_frames, height, width, channels = frames.shape
        pix_fmt_in = "bgr24" if channels == 3 else "gray"
    else:
        logger.error(f"Unsupported frame array dimensions: {frames.shape}")
        return False

    output_path.parent.mkdir(parents=True, exist_ok=True)

    cmd = [
        "ffmpeg", "-y",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", f"{width}x{height}",
        "-pix_fmt", pix_fmt_in,
        "-r", str(fps),
        "-i", "-",
        "-vf", "pad=ceil(iw/2)*2:ceil(ih/2)*2",
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-crf", str(crf),
        "-preset", FFMPEG_PRESET,
        "-movflags", "+faststart",
        str(output_path)
    ]

    try:
        proc = subprocess.Popen(
            cmd,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        proc.stdin.write(frames.tobytes())
        proc.stdin.close()
        _, stderr_data = proc.communicate()

        if proc.returncode != 0:
            logger.warning(f"FFmpeg returned code {proc.returncode}: {stderr_data.decode('utf-8', errors='ignore')[:300]}")
            return False
        return True
    except Exception as e:
        logger.warning(f"FFmpeg encoding encountered error: {e}")
        return False


def encode_frames_opencv(
    frames: np.ndarray,
    output_path: Path,
    fps: float
) -> bool:
    """
    Robust fallback encoding using OpenCV VideoWriter:
    - Ensures dimensions are even
    - Converts grayscale frames to 3-channel BGR
    - Tries 'avc1' first, then 'mp4v'
    """
    if frames.ndim == 3:
        num_frames, height, width = frames.shape
        is_gray = True
    elif frames.ndim == 4:
        num_frames, height, width, _ = frames.shape
        is_gray = False
    else:
        return False

    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Dimension hygiene: pad to even width and height
    pad_h = height + (height % 2)
    pad_w = width + (width % 2)

    fourcc_options = [
        cv2.VideoWriter_fourcc(*"avc1"),
        cv2.VideoWriter_fourcc(*"mp4v"),
        cv2.VideoWriter_fourcc(*"H264"),
    ]

    writer = None
    for fourcc in fourcc_options:
        writer = cv2.VideoWriter(str(output_path), fourcc, float(fps), (pad_w, pad_h), isColor=True)
        if writer.isOpened():
            break

    if not writer or not writer.isOpened():
        logger.error(f"OpenCV VideoWriter failed to open for {output_path}")
        return False

    for i in range(num_frames):
        frame = frames[i]
        if (height, width) != (pad_h, pad_w):
            frame = cv2.copyMakeBorder(
                frame, 0, pad_h - height, 0, pad_w - width, cv2.BORDER_CONSTANT, value=0
            )
        if is_gray:
            bgr = cv2.cvtColor(frame, cv2.COLOR_GRAY2BGR)
        else:
            bgr = frame
        writer.write(bgr)

    writer.release()
    return output_path.exists() and output_path.stat().st_size > 0


def encode_frames_to_mp4(
    frames: np.ndarray,
    output_path: Path,
    fps: float,
    crf: int = FFMPEG_DEFAULT_CRF
) -> Tuple[bool, str, np.ndarray]:
    """
    Unified encoding dispatcher:
    Repeats single-frame images to 1.0 second duration so players can scrub them.
    Tries FFmpeg CLI first; seamlessly falls back to OpenCV VideoWriter.
    Returns (success, encoder_used, encoded_frames_array).
    """
    # Ensure standard frame dimension
    frames = standardize_pixel_array(frames)

    # If single frame, repeat for 1 second of video playback
    if frames.shape[0] == 1:
        repeat_count = max(int(round(fps)), 1)
        frames_to_encode = np.repeat(frames, repeat_count, axis=0)
    else:
        frames_to_encode = frames

    if check_ffmpeg_available():
        ok = encode_frames_ffmpeg(frames_to_encode, output_path, fps, crf)
        if ok and output_path.exists() and output_path.stat().st_size > 0:
            return True, "ffmpeg_libx264", frames_to_encode
        logger.warning(f"FFmpeg encoding failed for {output_path.name}; falling back to OpenCV VideoWriter.")

    ok = encode_frames_opencv(frames_to_encode, output_path, fps)
    if ok:
        return True, "opencv_videowriter", frames_to_encode
    return False, "none", frames_to_encode


# ==============================================================================
# MANIFEST GENERATOR
# ==============================================================================

def create_manifest_entry(
    mp4_path: Path,
    metadata: Dict[str, Any],
    original_frame_count: int,
    dimensions: Tuple[int, int],
    fps: float,
    encoder: str,
    window_presets_info: Optional[Dict[str, Any]] = None
) -> Dict[str, Any]:
    """Constructs compliant manifest dictionary."""
    width, height = dimensions
    file_size_mb = round(mp4_path.stat().st_size / (1024.0 * 1024.0), 2)
    duration_sec = round(original_frame_count / float(fps), 2)

    entry = {
        "file_name": mp4_path.name,
        "file_path": str(mp4_path.resolve()),
        "file_size_mb": file_size_mb,
        "patient_id": metadata.get("patient_id", "UNKNOWN_ID"),
        "patient_name": metadata.get("patient_name", "ANONYMIZED_PATIENT"),
        "modality": metadata.get("modality", "XA"),
        "study_date": metadata.get("study_date", ""),
        "series_description": metadata.get("series_description", ""),
        "series_number": metadata.get("series_number", 0),
        "num_frames": int(original_frame_count),
        "fps": float(fps),
        "duration_seconds": duration_sec,
        "width": int(width),
        "height": int(height),
        "encoder": encoder,
        "window_presets": window_presets_info,
        "source_uid": metadata.get("series_instance_uid", ""),
        "converted_at": datetime.now(timezone.utc).isoformat()
    }
    return entry


# ==============================================================================
# CORE CONVERSION WORKFLOWS
# ==============================================================================

class DicomWebConverter:
    """Core DICOM to Web Cine and Cross-Sectional MP4 Converter Engine."""

    def __init__(
        self,
        output_dir: Union[str, Path],
        override_fps: Optional[float] = None,
        crf_quality: int = FFMPEG_DEFAULT_CRF,
        ct_preset: str = "angio",
    ):
        self.output_dir = Path(output_dir)
        self.override_fps = override_fps
        self.crf_quality = crf_quality
        self.ct_preset = ct_preset.lower()
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def convert_multiframe_file(
        self,
        dicom_path: Path,
        dest_dir: Path,
        file_suffix: str = ""
    ) -> Optional[Dict[str, Any]]:
        """Converts a multi-frame DICOM file (or single DICOM run) to Web MP4."""
        try:
            ds = pydicom.dcmread(str(dicom_path))
        except Exception as e:
            logger.error(f"Failed to read DICOM file {dicom_path}: {e}")
            return None

        modality = str(getattr(ds, "Modality", "XA")).upper()
        patient_name = deidentify_patient_name(getattr(ds, "PatientName", None))
        patient_id = sanitize_patient_id(getattr(ds, "PatientID", None))
        series_desc = str(getattr(ds, "SeriesDescription", "Fluoroscopy"))
        series_num = getattr(ds, "SeriesNumber", 1)
        study_date_raw = str(getattr(ds, "StudyDate", ""))
        study_date = (
            f"{study_date_raw[:4]}-{study_date_raw[4:6]}-{study_date_raw[6:8]}"
            if len(study_date_raw) == 8 else study_date_raw
        )
        series_uid = str(getattr(ds, "SeriesInstanceUID", dicom_path.stem))

        metadata = {
            "patient_name": patient_name,
            "patient_id": patient_id,
            "modality": modality,
            "series_description": series_desc,
            "series_number": int(series_num) if str(series_num).isdigit() else 1,
            "study_date": study_date,
            "series_instance_uid": series_uid
        }

        # Extract frames
        try:
            raw_pixel_array = ds.pixel_array
        except Exception as e:
            logger.error(f"Cannot extract pixel array from {dicom_path}: {e}")
            return None

        num_frames_tag = getattr(ds, "NumberOfFrames", None)
        num_frames_tag = int(num_frames_tag) if num_frames_tag else None
        standard_array = standardize_pixel_array(raw_pixel_array, num_frames_tag)
        orig_frames_count = standard_array.shape[0]
        orig_height = standard_array.shape[1]
        orig_width = standard_array.shape[2]

        photometric = str(getattr(ds, "PhotometricInterpretation", "MONOCHROME2"))

        # Process frames based on modality
        if modality in ("XA", "RF"):
            processed_frames = apply_auto_levels_xa(standard_array, photometric)
            window_info = None
        elif modality == "CT":
            slope = float(get_first_value(getattr(ds, "RescaleSlope", 1.0)) or 1.0)
            intercept = float(get_first_value(getattr(ds, "RescaleIntercept", 0.0)) or 0.0)
            preset_data = CT_WINDOW_PRESETS.get(self.ct_preset, CT_WINDOW_PRESETS["angio"])
            center = preset_data["center"]
            width = preset_data["width"]
            processed_frames = apply_ct_window(standard_array, slope, intercept, center, width)
            window_info = {
                "active_preset": self.ct_preset,
                "center": center,
                "width": width,
                "description": preset_data["desc"]
            }
        else:
            # MR or other modalities
            processed_frames = apply_mr_auto_levels(standard_array)
            window_info = None

        fps = detect_frame_rate(ds, modality, self.override_fps)

        # Output MP4 filename
        clean_desc = sanitize_filename(series_desc)
        base_name = f"series_{metadata['series_number']:02d}_{clean_desc}"
        if file_suffix:
            base_name = f"{base_name}_{file_suffix}"

        # Prevent collision if file already exists
        if (dest_dir / f"{base_name}.mp4").exists():
            base_name = f"{base_name}_{sanitize_filename(dicom_path.stem)}"

        mp4_path = dest_dir / f"{base_name}.mp4"
        meta_json_path = dest_dir / f"{base_name}.json"

        # Encode video
        success, encoder, _ = encode_frames_to_mp4(
            processed_frames,
            mp4_path,
            fps,
            self.crf_quality
        )

        if not success:
            logger.error(f"Encoding failed for {mp4_path.name}")
            return None

        manifest_entry = create_manifest_entry(
            mp4_path,
            metadata,
            orig_frames_count,
            (orig_width, orig_height),
            fps,
            encoder,
            window_info
        )

        # Write per-cine json metadata
        with open(meta_json_path, "w", encoding="utf-8") as f:
            json.dump(manifest_entry, f, indent=2)

        return manifest_entry

    def convert_slice_stack(
        self,
        slice_files: List[Path],
        dest_dir: Path
    ) -> List[Dict[str, Any]]:
        """
        Converts a collection of individual DICOM slices (CT / MR volume) to Web MP4.
        Supports presets including 'all' to export multiple windows.
        """
        if not slice_files:
            return []

        # Load first slice for metadata
        try:
            first_ds = pydicom.dcmread(str(slice_files[0]))
        except Exception as e:
            logger.error(f"Failed to read first slice {slice_files[0]}: {e}")
            return []

        modality = str(getattr(first_ds, "Modality", "CT")).upper()
        patient_name = deidentify_patient_name(getattr(first_ds, "PatientName", None))
        patient_id = sanitize_patient_id(getattr(first_ds, "PatientID", None))
        series_desc = str(getattr(first_ds, "SeriesDescription", f"{modality}_Volume"))
        series_num = getattr(first_ds, "SeriesNumber", 1)
        study_date_raw = str(getattr(first_ds, "StudyDate", ""))
        study_date = (
            f"{study_date_raw[:4]}-{study_date_raw[4:6]}-{study_date_raw[6:8]}"
            if len(study_date_raw) == 8 else study_date_raw
        )
        series_uid = str(getattr(first_ds, "SeriesInstanceUID", "stack"))

        metadata = {
            "patient_name": patient_name,
            "patient_id": patient_id,
            "modality": modality,
            "series_description": series_desc,
            "series_number": int(series_num) if str(series_num).isdigit() else 1,
            "study_date": study_date,
            "series_instance_uid": series_uid
        }

        # Read and sort all slices
        loaded_slices: List[Tuple[Tuple[int, float], FileDataset]] = []
        for sf in slice_files:
            try:
                ds = pydicom.dcmread(str(sf))
                sort_key = get_slice_sort_key(ds)
                loaded_slices.append((sort_key, ds))
            except Exception as e:
                logger.warning(f"Skipping corrupt slice {sf.name}: {e}")

        if not loaded_slices:
            return []

        # Sort along scan axis
        loaded_slices.sort(key=lambda x: x[0])

        slope = float(get_first_value(getattr(first_ds, "RescaleSlope", 1.0)) or 1.0)
        intercept = float(get_first_value(getattr(first_ds, "RescaleIntercept", 0.0)) or 0.0)
        fps = detect_frame_rate(first_ds, modality, self.override_fps)

        # Collect raw pixel slices
        raw_slices = []
        for _, ds in loaded_slices:
            try:
                pix = ds.pixel_array
                if pix.ndim == 2:
                    raw_slices.append(pix)
            except Exception as e:
                logger.warning(f"Error extracting pixel slice: {e}")

        if not raw_slices:
            return []

        raw_volume = np.stack(raw_slices, axis=0) # shape (slices, H, W)
        num_slices, height, width = raw_volume.shape

        clean_desc = sanitize_filename(series_desc)
        results: List[Dict[str, Any]] = []

        # Determine presets to render
        if modality == "CT":
            presets_to_render = (
                list(CT_WINDOW_PRESETS.keys())
                if self.ct_preset == "all"
                else [self.ct_preset if self.ct_preset in CT_WINDOW_PRESETS else "angio"]
            )
        else:
            presets_to_render = ["default"]

        for preset_name in presets_to_render:
            if modality == "CT":
                p_cfg = CT_WINDOW_PRESETS[preset_name]
                volume = apply_ct_window(raw_volume, slope, intercept, p_cfg["center"], p_cfg["width"])
                window_info = {
                    "active_preset": preset_name,
                    "center": p_cfg["center"],
                    "width": p_cfg["width"],
                    "description": p_cfg["desc"],
                    "available_presets": list(CT_WINDOW_PRESETS.keys())
                }
                preset_suffix = f"_{preset_name}" if len(presets_to_render) > 1 or self.ct_preset != "angio" else ""
            elif modality == "MR":
                volume = apply_mr_auto_levels(raw_volume)
                window_info = None
                preset_suffix = ""
            else:
                volume = apply_auto_levels_xa(raw_volume)
                window_info = None
                preset_suffix = ""

            base_name = f"series_{metadata['series_number']:02d}_{clean_desc}{preset_suffix}"
            mp4_path = dest_dir / f"{base_name}.mp4"
            meta_json_path = dest_dir / f"{base_name}.json"

            success, encoder, _ = encode_frames_to_mp4(
                volume,
                mp4_path,
                fps,
                self.crf_quality
            )

            if not success:
                logger.error(f"Failed to encode volume stack to {mp4_path.name}")
                continue

            manifest_entry = create_manifest_entry(
                mp4_path,
                metadata,
                num_slices,
                (width, height),
                fps,
                encoder,
                window_info
            )

            with open(meta_json_path, "w", encoding="utf-8") as f:
                json.dump(manifest_entry, f, indent=2)

            results.append(manifest_entry)

        return results

    def process_path(self, input_path: Union[str, Path]) -> List[Dict[str, Any]]:
        """
        Recursively scans input path (single file or patient folder),
        identifies all cine runs and slice stacks, and converts them to web MP4s.
        """
        target = Path(input_path)
        if not target.exists():
            logger.error(f"Input path does not exist: {target}")
            return []

        # Case 1: Target is a single DICOM file
        if target.is_file():
            if not is_dicom_file(target):
                logger.error(f"Specified file is not a valid DICOM file: {target}")
                return []
            patient_dest = self.output_dir / "single_conversions"
            patient_dest.mkdir(parents=True, exist_ok=True)
            result = self.convert_multiframe_file(target, patient_dest)
            if result:
                master_manifest = patient_dest / "manifest.json"
                with open(master_manifest, "w", encoding="utf-8") as f:
                    json.dump([result], f, indent=2)
                return [result]
            return []

        # Case 2: Target is a patient directory
        logger.info(f"Scanning patient directory: {target}")
        dicom_files: List[Path] = []
        for root, _, files in os.walk(target):
            for f in files:
                fp = Path(root) / f
                if is_dicom_file(fp):
                    dicom_files.append(fp)

        if not dicom_files:
            logger.warning(f"No DICOM files found in {target}")
            return []

        logger.info(f"Found {len(dicom_files)} DICOM files. Grouping series...")

        # Group files by SeriesInstanceUID
        series_groups: Dict[str, List[Path]] = defaultdict(list)
        for df in dicom_files:
            try:
                ds = pydicom.dcmread(str(df), stop_before_pixels=True)
                s_uid = getattr(ds, "SeriesInstanceUID", df.parent.name)
            except Exception:
                s_uid = df.parent.name
            series_groups[s_uid].append(df)

        patient_folder_name = sanitize_filename(target.name)
        patient_dest = self.output_dir / patient_folder_name
        patient_dest.mkdir(parents=True, exist_ok=True)

        manifest_entries: List[Dict[str, Any]] = []

        for s_uid, files in series_groups.items():
            # Check files in this series
            multiframe_files = []
            single_slice_files = []

            for f in files:
                try:
                    ds = pydicom.dcmread(str(f), stop_before_pixels=True)
                    num_frames = getattr(ds, "NumberOfFrames", 1)
                    num_frames = int(num_frames) if num_frames else 1
                except Exception:
                    num_frames = 1

                if num_frames > 1:
                    multiframe_files.append(f)
                else:
                    single_slice_files.append(f)

            # Convert multi-frame cine runs
            for idx, mf in enumerate(multiframe_files):
                suffix = f"run_{idx+1:02d}" if len(multiframe_files) > 1 else ""
                entry = self.convert_multiframe_file(mf, patient_dest, file_suffix=suffix)
                if entry:
                    manifest_entries.append(entry)

            # Convert single slices
            if len(single_slice_files) > 1:
                # Cross-sectional volume stack
                stack_entries = self.convert_slice_stack(single_slice_files, patient_dest)
                manifest_entries.extend(stack_entries)
            elif len(single_slice_files) == 1:
                # Single snapshot/image
                entry = self.convert_multiframe_file(single_slice_files[0], patient_dest, file_suffix=single_slice_files[0].stem)
                if entry:
                    manifest_entries.append(entry)

        # Write consolidated master manifest.json in the patient folder
        if manifest_entries:
            master_manifest_path = patient_dest / "manifest.json"
            summary_doc = {
                "patient_folder": patient_folder_name,
                "total_series_converted": len(manifest_entries),
                "patient_id": manifest_entries[0]["patient_id"],
                "patient_name": manifest_entries[0]["patient_name"],
                "study_date": manifest_entries[0]["study_date"],
                "series": manifest_entries,
                "generated_at": datetime.now(timezone.utc).isoformat()
            }
            with open(master_manifest_path, "w", encoding="utf-8") as f:
                json.dump(summary_doc, f, indent=2)
            logger.info(f"Generated patient master manifest: {master_manifest_path}")

        return manifest_entries


# ==============================================================================
# RCLONE CLOUD VAULT SYNCHRONIZER
# ==============================================================================

def sync_to_rclone(
    local_path: Path,
    rclone_dest: str,
    patient_subfolder: Optional[str] = None
) -> bool:
    """
    Synchronize converted web MP4s to AIIMS Google Drive or cloud PACS vault via rclone.
    Gracefully handles absence of rclone with informative diagnostic feedback.
    """
    if not shutil.which("rclone"):
        logger.warning(
            f"rclone executable not found in system PATH. Cannot sync to remote vault '{rclone_dest}'. "
            f"Local files remain safely saved at {local_path}."
        )
        return False

    target_remote = f"{rclone_dest.rstrip('/')}/{patient_subfolder}" if patient_subfolder else rclone_dest
    logger.info(f"Initiating rclone sync: {local_path} -> {target_remote}")

    cmd = [
        "rclone", "copy",
        str(local_path),
        str(target_remote),
        "--transfers", "4",
        "--checkers", "8",
        "--fast-list"
    ]

    try:
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0:
            logger.info(f"Successfully uploaded to rclone vault: {target_remote}")
            return True
        else:
            logger.error(f"rclone upload failed (code {res.returncode}): {res.stderr[:300]}")
            return False
    except Exception as e:
        logger.error(f"Error invoking rclone process: {e}")
        return False


# ==============================================================================
# DEPARTMENTAL WATCHER ENGINE
# ==============================================================================

def check_directory_stable(folder: Path, wait_sec: float = 3.0) -> bool:
    """
    Verifies that files in a newly discovered folder have finished copying
    from the angiosuite acquisition workstation by checking size stability.
    """
    try:
        def get_total_size(p: Path) -> int:
            return sum(f.stat().st_size for f in p.rglob("*") if f.is_file())

        s1 = get_total_size(folder)
        time.sleep(wait_sec)
        s2 = get_total_size(folder)
        return s1 == s2 and s1 > 0
    except Exception:
        return False


def run_watch_mode(
    watch_dir: Path,
    output_dir: Path,
    poll_interval: int,
    override_fps: Optional[float],
    crf: int,
    preset: str,
    rclone_dest: Optional[str]
):
    """
    Continuous departmental watcher loop for hospital angiosuite workstations.
    Polls watch_dir for newly arriving patient folders, converts them,
    and uploads them automatically to Google Drive.
    """
    logger.info(f"Starting departmental watch mode on: {watch_dir}")
    logger.info(f"Output directory: {output_dir}")
    logger.info(f"Polling interval: {poll_interval}s | Quality CRF: {crf}")
    if rclone_dest:
        logger.info(f"Rclone Cloud Vault Target: {rclone_dest}")

    state_file = output_dir / ".converter_watch_state.json"
    processed_folders = set()

    if state_file.exists():
        try:
            with open(state_file, "r", encoding="utf-8") as f:
                saved = json.load(f)
                processed_folders = set(saved.get("processed", []))
                logger.info(f"Loaded {len(processed_folders)} previously processed studies from state file.")
        except Exception as e:
            logger.warning(f"Failed to read watch state file: {e}")

    converter = DicomWebConverter(
        output_dir=output_dir,
        override_fps=override_fps,
        crf_quality=crf,
        ct_preset=preset
    )

    try:
        while True:
            subdirectories = [p for p in watch_dir.iterdir() if p.is_dir() and not p.name.startswith(".")]

            for patient_dir in subdirectories:
                dir_id = patient_dir.name
                if dir_id in processed_folders:
                    continue

                logger.info(f"Detected new patient directory: {patient_dir.name}")
                if not check_directory_stable(patient_dir, wait_sec=2.5):
                    logger.info(f"Directory {patient_dir.name} is still being written to. Will retry next cycle.")
                    continue

                # Convert
                entries = converter.process_path(patient_dir)
                if entries:
                    logger.info(f"Successfully converted {len(entries)} runs for {patient_dir.name}.")
                    processed_folders.add(dir_id)

                    # Save updated state
                    with open(state_file, "w", encoding="utf-8") as f:
                        json.dump({
                            "processed": sorted(list(processed_folders)),
                            "last_updated": datetime.now(timezone.utc).isoformat()
                        }, f, indent=2)

                    # Optional Rclone Sync
                    if rclone_dest:
                        patient_dest = output_dir / sanitize_filename(patient_dir.name)
                        sync_to_rclone(patient_dest, rclone_dest, patient_dest.name)

            time.sleep(poll_interval)
    except KeyboardInterrupt:
        logger.info("Watcher stopped by user (SIGINT). Exiting cleanly.")
        sys.exit(0)


# ==============================================================================
# CLI COMMAND LINE INTERFACE
# ==============================================================================

def print_rich_summary(entries: List[Dict[str, Any]]):
    """Render high-contrast summary table in console using rich."""
    if not HAS_RICH or not entries:
        for e in entries:
            logger.info(f"Converted: {e['file_name']} | {e['modality']} | {e['num_frames']} frames @ {e['fps']} fps | {e['file_size_mb']} MB")
        return

    table = Table(title="VascFlow — Converted Web Cine & Stack Inventory", show_header=True, header_style="bold cyan")
    table.add_column("Series", style="dim", width=8)
    table.add_column("Modality", style="magenta", width=10)
    table.add_column("Description", style="white")
    table.add_column("Frames", justify="right", style="green")
    table.add_column("FPS", justify="right", style="yellow")
    table.add_column("Dimensions", justify="center")
    table.add_column("Size (MB)", justify="right", style="cyan")
    table.add_column("File Name", style="bold green")

    for e in entries:
        s_num = f"#{e.get('series_number', 0)}"
        mod = e.get("modality", "XA")
        desc = e.get("series_description", "")[:28]
        n_frames = str(e.get("num_frames", 0))
        fps = f"{e.get('fps', 0):.1f}"
        dim = f"{e.get('width', 0)}x{e.get('height', 0)}"
        sz = f"{e.get('file_size_mb', 0):.2f}"
        fname = e.get("file_name", "")
        table.add_row(s_num, mod, desc, n_frames, fps, dim, sz, fname)

    CONSOLE.print(table)


def build_parser() -> argparse.ArgumentParser:
    """Configures CLI arguments."""
    parser = argparse.ArgumentParser(
        description="VascFlow DICOM-to-Web-Cine Conversion & Watcher Engine (XA/DSA Fluoroscopy & CT/MR Volumes)"
    )
    parser.add_argument(
        "--input", "-i",
        required=True,
        help="Path to DICOM file or patient study directory (e.g. E:\\1074_18-09-2026_LAXMI DEVI_...)"
    )
    parser.add_argument(
        "--output", "-o",
        default="./converted_cine",
        help="Destination directory for web MP4 videos and manifest.json (default: ./converted_cine)"
    )
    parser.add_argument(
        "--fps",
        type=float,
        default=None,
        help="Override frame rate (e.g. 15, 7.5, 4, 2, 10). If omitted, automatically detected from DICOM."
    )
    parser.add_argument(
        "--quality", "-q",
        type=int,
        default=FFMPEG_DEFAULT_CRF,
        help=f"H.264 CRF quality level (lower is higher quality, default: {FFMPEG_DEFAULT_CRF})"
    )
    parser.add_argument(
        "--preset",
        default="angio",
        choices=["angio", "soft_tissue", "bone", "lung", "brain", "abdomen", "all"],
        help="Window center/width preset for CT volumes (default: angio, or 'all' to export all standard presets)"
    )
    parser.add_argument(
        "--watch",
        action="store_true",
        help="Run in continuous watch mode, polling --input directory for incoming patient studies"
    )
    parser.add_argument(
        "--poll-interval",
        type=int,
        default=10,
        help="Polling interval in seconds for watch mode (default: 10s)"
    )
    parser.add_argument(
        "--rclone-dest",
        default=None,
        help="Optional rclone remote destination (e.g. aiims_gdrive:VascFlow_Imaging_Vault)"
    )
    return parser


def main():
    parser = build_parser()
    args = parser.parse_args()

    input_path = Path(args.input)
    output_path = Path(args.output)

    if not input_path.exists():
        logger.error(f"Input path does not exist: {input_path}")
        sys.exit(1)

    if args.watch:
        if not input_path.is_dir():
            logger.error("Watch mode requires --input to be a directory, not a single file.")
            sys.exit(1)
        run_watch_mode(
            watch_dir=input_path,
            output_dir=output_path,
            poll_interval=args.poll_interval,
            override_fps=args.fps,
            crf=args.quality,
            preset=args.preset,
            rclone_dest=args.rclone_dest
        )
        return

    # Single Execution
    logger.info("Initializing VascFlow DICOM Web Converter...")
    converter = DicomWebConverter(
        output_dir=output_path,
        override_fps=args.fps,
        crf_quality=args.quality,
        ct_preset=args.preset
    )

    t0 = time.time()
    results = converter.process_path(input_path)
    elapsed = time.time() - t0

    if not results:
        logger.warning("No cine runs or volume stacks were successfully converted.")
        sys.exit(1)

    logger.info(f"Conversion complete! Converted {len(results)} series in {elapsed:.2f}s.")
    print_rich_summary(results)

    # Optional Rclone Sync for one-shot conversion
    if args.rclone_dest:
        patient_folder_name = sanitize_filename(input_path.name if input_path.is_dir() else input_path.stem)
        target_dir = output_path / patient_folder_name if input_path.is_dir() else output_path / "single_conversions"
        sync_to_rclone(target_dir, args.rclone_dest, patient_folder_name)

    sys.exit(0)


if __name__ == "__main__":
    main()
