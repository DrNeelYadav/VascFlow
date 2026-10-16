"""Throwaway probe: confirm the D: DICOM archive is readable and clinically real."""

import glob
import os
import sys

import pydicom
from pydicom import dcmread

print("pydicom", pydicom.__version__)

PATTERNS = [
    r"D:\03_Patient_Imaging_&_DICOM_Cases\Clinical_Case_Series\new\DICOM_Series_Img0000*.dcm",
    r"D:\03_Patient_Imaging_&_DICOM_Cases\Neel_Clinical_DICOM_Archive\DICOM_Series_Img0000*.dcm",
    r"D:\03_Patient_Imaging_&_DICOM_Cases\Clinical_Case_Series\Baidyanath\*\**\*.dcm",
]

for pat in PATTERNS:
    files = glob.glob(pat, recursive=True)
    print("\n==", pat, "->", len(files), "files")
    for f in files[:6]:
        try:
            ds = dcmread(f, stop_before_pixels=True, force=True)
        except Exception as exc:  # noqa: BLE001
            print("  FAIL", os.path.basename(f), exc)
            continue
        print(
            "  ",
            os.path.basename(f)[:42],
            "| mod", ds.get("Modality"),
            "| sop", str(ds.get("SOPClassUID"))[-28:],
            "| frames", ds.get("NumberOfFrames"),
            "| size", ds.get("Rows"), "x", ds.get("Columns"),
            "| name", str(ds.get("PatientName")),
            "| id", str(ds.get("PatientID")),
        )