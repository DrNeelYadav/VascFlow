"""Rebuild the Orthanc SQLite tag index for every stored resource.

Why this exists
---------------
orthanc.json sets "ExtraMainDicomTags" so that PatientName, PatientID,
Modality and SeriesDescription are stored on the instance row itself rather
than only on their native patient/series rows. Orthanc records the set of
indexed tags as a per-resource "MainDicomTags signature" in SQLite. Changing
ExtraMainDicomTags changes that signature, so resources stored under the old
signature do not gain the new tags until they are reconstructed.

POST /{patients|studies|series|instances}/{id}/reconstruct rebuilds the index
rows for one resource from the DICOM file already on disk. It is idempotent
and never re-transfers image data.

This script calls reconstruct at every level, bottom-up, and then verifies
that the four fields are actually readable through both supported surfaces:
  * the REST human-readable route  /instances/{id}/simplified-tags
  * the DICOMweb QIDO-RS route     /dicom-web/studies/{s}/series/{se}/instances

Usage:
    python rebuild_tag_index.py            # rebuild everything, then verify
    python rebuild_tag_index.py --verify   # verify only, change nothing
"""

from __future__ import annotations

import argparse
import sys

import requests

ORTHANC = "http://127.0.0.1:8042"
LEVELS = ["instances", "series", "studies", "patients"]

# The four fields the workstation overlay must always be able to read.
REQUIRED_FIELDS = ["PatientName", "PatientID", "Modality", "SeriesDescription"]

# DICOMweb QIDO-RS uses lowercase hex with no comma and no zero padding.
QIDO_TAGS = {
    "PatientName": "00100010",
    "PatientID": "00100020",
    "Modality": "00080060",
    "SeriesDescription": "0008103e",
}


def get(path: str):
    r = requests.get(f"{ORTHANC}{path}", timeout=60)
    r.raise_for_status()
    return r.json()


def post(path: str):
    r = requests.post(f"{ORTHANC}{path}", timeout=600)
    r.raise_for_status()
    return r


def reconstruct_all() -> dict[str, int]:
    """Rebuild every resource, deepest level first. Returns counts per level."""
    counts: dict[str, int] = {}
    for level in LEVELS:
        ids = get(f"/{level}")
        for n, rid in enumerate(ids, 1):
            post(f"/{level}/{rid}/reconstruct")
            if n % 50 == 0:
                print(f"  {level}: {n}/{len(ids)}")
        counts[level] = len(ids)
        print(f"  {level}: rebuilt {len(ids)}")
    return counts


def qido_value(item: dict, field: str):
    """Pull one field out of a DICOMweb QIDO-RS JSON item."""
    entry = item.get(QIDO_TAGS[field])
    if not entry:
        return None
    values = entry.get("Value")
    if not values:
        return None
    value = values[0]
    # PersonName comes back as a component group, not a bare string.
    if isinstance(value, dict):
        return value.get("Alphabetic")
    return value


def verify() -> int:
    """Check all four fields through both surfaces. Returns a failure count."""
    failures = 0
    instances = get("/instances")

    rest_bad: list[str] = []
    for iid in instances:
        tags = get(f"/instances/{iid}/simplified-tags")
        missing = [f for f in REQUIRED_FIELDS if not tags.get(f)]
        if missing:
            rest_bad.append(f"{iid}: {','.join(missing)}")

    print(f"\nREST /instances/{{id}}/simplified-tags")
    print(f"  instances checked : {len(instances)}")
    print(f"  all four fields   : {len(instances) - len(rest_bad)}/{len(instances)}")
    for line in rest_bad[:10]:
        print(f"    MISSING {line}")

    studies = get("/studies")
    qido_checked = 0
    qido_bad: list[str] = []
    for sid in studies:
        study_uid = get(f"/studies/{sid}")["MainDicomTags"]["StudyInstanceUID"]
        for seid in get(f"/studies/{sid}/series"):
            series = get(f"/series/{seid}")
            series_uid = series["MainDicomTags"]["SeriesInstanceUID"]
            items = get(
                f"/dicom-web/studies/{study_uid}/series/{series_uid}/instances"
            )
            for item in items:
                qido_checked += 1
                missing = [f for f in REQUIRED_FIELDS if not qido_value(item, f)]
                if missing:
                    qido_bad.append(f"{series_uid}: {','.join(missing)}")

    print(f"\nDICOMweb QIDO-RS")
    print(f"  instances checked : {qido_checked}")
    print(f"  all four fields   : {qido_checked - len(qido_bad)}/{qido_checked}")
    for line in qido_bad[:10]:
        print(f"    MISSING {line}")

    failures = len(rest_bad) + len(qido_bad)
    print(f"\nRESULT: {'PASS' if failures == 0 else f'FAIL ({failures} problems)'}")
    return failures


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--verify", action="store_true")
    args = ap.parse_args()

    try:
        get("/system")
    except requests.RequestException as exc:
        print(f"Orthanc is not answering on {ORTHANC}: {type(exc).__name__}")
        print(r"Start it first: C:\SSO\tools\departmental-pacs\start-orthanc.cmd")
        return 1

    if not args.verify:
        print("Reconstructing every resource (this rewrites SQLite index rows)")
        reconstruct_all()

    return 1 if verify() else 0


if __name__ == "__main__":
    sys.exit(main())