"""Confirm Orthanc's native REST API is sufficient for the Cornerstone viewer.

The DICOMweb plugin has not loaded on this build. Before spending more time on
it, verify what Orthanc 1.12.9 CAN do natively: list studies/series/instances,
read instance metadata, and stream pixel data per frame.

Those four capabilities are exactly what a Cornerstone viewport needs over
WADO-RS, so this decides whether the plugin is required at all.
"""

from __future__ import annotations

import json
import subprocess
import sys
import time
import urllib.error
import urllib.request

BASE = "http://127.0.0.1:8042"


def get(path: str, raw: bool = False):
    req = urllib.request.Request(BASE + path)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            body = resp.read()
            return resp.status, (body if raw else json.loads(body or b"null"))
    except urllib.error.HTTPError as exc:
        return exc.code, exc.read()[:400]
    except Exception as exc:  # noqa: BLE001
        return 0, str(exc).encode()


def main() -> int:
    status, sysinfo = get("/system")
    print(f"/system                 -> {status}")
    if status != 200:
        print("   Orthanc is not answering. Start it first.")
        return 1
    print(f"   version={sysinfo.get('Version')} api={sysinfo.get('ApiVersion')}")

    for path in ("/studies", "/series", "/instances", "/patients"):
        st, body = get(path)
        n = len(body) if isinstance(body, list) else "n/a"
        print(f"{path:25s} -> {st}   entries={n}")

    st, body = get("/studies")
    if st != 200 or not isinstance(body, list) or not body:
        print("\nNo studies stored yet. Upload one with:")
        print("  curl -X POST --data-binary @file.dcm http://127.0.0.1:8042/instances")
        return 0

    study = body[0]
    print(f"\nfirst study: {study}")

    st, series = get(f"/studies/{study}/series")
    print(f"\n/studies/<id>/series    -> {st}   count={len(series) if isinstance(series, list) else 'n/a'}")
    if st != 200 or not series:
        return 0

    series_id = series[0]["ID"]
    print(f"first series: {series[0]}")

    st, insts = get(f"/series/{series_id}/instances")
    print(f"/series/<id>/instances  -> {st}   count={len(insts) if isinstance(insts, list) else 'n/a'}")
    if st != 200 or not insts:
        return 0

    inst = insts[0]
    print(f"first instance: {inst}")

    # Per-instance metadata: the DICOM tags the overlay needs.
    st, tags = get(f"/instances/{inst['ID']}/tags")
    print(f"/instances/<id>/tags    -> {st}")
    if st == 200 and isinstance(tags, dict):
        wanted = [
            "PatientName", "PatientID", "PatientBirthDate", "PatientSex",
            "StudyDate", "StudyDescription", "SeriesDescription",
            "Modality", "Rows", "Columns", "NumberOfFrames",
            "WindowCenter", "WindowWidth", "BitsAllocated", "BitsStored",
            "PixelRepresentation", "PhotometricInterpretation",
            "SliceLocation", "InstanceNumber", "TransferSyntaxUID",
        ]
        print("   clinically relevant tags actually present:")
        for w in wanted:
            if w in tags:
                print(f"      {w:28s} {tags[w]}")

    # The decisive capability: raw pixel data for a frame, which is what a
    # viewport actually paints.
    for suffix in (
        f"/instances/{inst['ID']}/frames/1",
        f"/instances/{inst['ID']}/frame/1",
        f"/instances/{inst['ID']}/preview",
    ):
        st, body = get(suffix, raw=True)
        n = len(body) if isinstance(body, bytes) else 0
        head = ""
        if st == 200 and n > 8:
            head = f" first8={body[:8].hex()}"
        print(f"{suffix:52s} -> {st} bytes={n}{head}")

    return 0


if __name__ == "__main__":
    sys.exit(main())