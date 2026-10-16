"""
Case index for the E:\\ fluoro exports, keyed on the self-describing folder
names:  <IR>_<dd-mm-yyyy>_<PATIENT>_<PROCEDURE>

The folder name is the primary key because it states the IR number outright
(1000_22-07-2026_PINKY SEN_VARICOSE VEIN GLUE EMBOLIZATION). The DICOM header
supplies everything the folder name omits: age, sex, study date, series
description and per-series frame counts.

Name/procedure splitting: the folder concatenates them with no delimiter, so
the DICOM PatientName is used to find the boundary -- the procedure is
whatever follows the name in the folder string. That avoids the mid-word cuts
a keyword search produces ('MANISH_VARIPCOSE VEIN' for 'MANISH /
VARICOSE VEIN...').

Writes _index/cases.json.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path

HERE = Path(__file__).parent
ROOT = Path("E:\\")
OUT = HERE / "_index" / "cases.json"
BUNDLES = HERE / "_index" / "bundles.json"

# Two date styles exist in the wild: the 2026 export pads ("22-07-2026") and
# the historical E:\\New Scans tree does not ("21-7-2022"). Requiring two
# digits silently dropped the date on every historical folder, which then fell
# through to a registry row and showed the wrong date -- IR 1 read 2025-12-12
# instead of 2022-07-21.
FOLDER_RE = re.compile(r"^(\d{1,4})_(\d{1,2})-(\d{1,2})-(\d{4})_(.+)$")
SKIP_DIRS = {"System Volume Information", "$RECYCLE.BIN", ".Spotlight-V100"}


def norm(s: str) -> str:
    t = unicodedata.normalize("NFKD", str(s or "")).replace("\\", " ")
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.sub(r"[^A-Z0-9]+", "", t.upper())


def clean_dicom_name(raw: str) -> str:
    t = str(raw or "")
    if "^" in t:
        t = t.split("^", 1)[0]
    return re.sub(r"\s*\d+\s*(?:YRS?|Y|M|F)\b.*$", "", t, flags=re.I).strip()


def parse_age_sex(raw: str) -> tuple[str, str]:
    """DICOM suffix groups carry the age and sex: 'ABHISHEK YADAV^20 YRS^M'."""
    parts = str(raw or "").split("^")
    age, sex = "", ""
    for p in parts[1:]:
        m = re.match(r"\s*(\d{1,3})\s*(?:YRS?|Y)\b", p, re.I)
        if m:
            age = m.group(1)
        if p.strip().upper() in ("M", "F", "O"):
            sex = p.strip().upper()
    return age, sex


def split_name_proc(rest: str, dicom_name: str) -> tuple[str, str]:
    """Folder names run name straight into procedure. Use the DICOM name as
    the boundary marker; fall back to the whole string."""
    rest = rest.strip(" _-")
    if not dicom_name or not rest:
        return rest, ""
    key = norm(dicom_name)
    flat = norm(rest)
    if key and flat.startswith(key):
        # walk the original string to the end of the matched name
        count = 0
        idx = 0
        for i, ch in enumerate(rest):
            if ch.isalnum():
                count += 1
                if count == len(key):
                    idx = i + 1
                    break
        return rest[:idx].strip(" _-"), rest[idx:].strip(" _-")
    return rest, ""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=str(ROOT))
    ap.add_argument("--out", default=str(OUT))
    args = ap.parse_args()

    import pydicom
    import warnings
    warnings.filterwarnings("ignore")

    root = Path(args.root)
    folders = sorted(d for d in os.listdir(root)
                     if os.path.isdir(root / d) and d not in SKIP_DIRS)
    print(f"folders on {root}: {len(folders)}")

    registry = {}
    if BUNDLES.exists():
        for b in json.loads(BUNDLES.read_text(encoding="utf8")).get("bundles", []):
            registry[b["ir_number"]] = b

    cases: dict[str, dict] = {}
    unreadable = 0
    t0 = time.time()
    for n, folder in enumerate(folders, 1):
        m = FOLDER_RE.match(folder)
        ir = int(m.group(1)) if m else None
        date_iso = (f"{m.group(4)}-{m.group(3)}-{m.group(2)}" if m else "")
        rest = m.group(5) if m else folder

        rec = cases.setdefault(folder, {
            "folder": folder,
            "ir_number": ir,
            "procedure_date": date_iso,
            "name_from_folder": "", "procedure_from_folder": "",
            "dicom_name": "", "age": "", "sex": "", "dicom_patient_id": "",
            "study_dates": set(), "series": [],
            "instances": 0, "frames": 0, "bytes": 0,
        })

        seen_series = {s["uid"] for s in rec["series"]}
        for dirpath, _d, files in os.walk(root / folder):
            for fn in files:
                if fn.upper() == "DICOMDIR" or fn.startswith("."):
                    continue
                p = Path(dirpath) / fn
                try:
                    ds = pydicom.dcmread(p, stop_before_pixels=True, force=True)
                except Exception:
                    unreadable += 1
                    continue
                age, sex = parse_age_sex(str(getattr(ds, "PatientName", "")))
                rec["dicom_name"] = rec["dicom_name"] or clean_dicom_name(
                    getattr(ds, "PatientName", ""))
                rec["age"] = rec["age"] or age
                rec["sex"] = rec["sex"] or sex
                rec["dicom_patient_id"] = rec["dicom_patient_id"] or str(
                    getattr(ds, "PatientID", ""))
                sd = str(getattr(ds, "StudyDate", ""))
                if sd:
                    rec["study_dates"].add(sd)
                uid = str(getattr(ds, "SeriesInstanceUID", ""))
                if uid not in seen_series:
                    seen_series.add(uid)
                    rec["series"].append({
                        "uid": uid,
                        "modality": str(getattr(ds, "Modality", "")),
                        "description": str(getattr(ds, "SeriesDescription", "")
                                           or getattr(ds, "StudyDescription", "")),
                        "frames": int(getattr(ds, "NumberOfFrames", 1) or 1),
                        "rows": int(getattr(ds, "Rows", 0) or 0),
                        "cols": int(getattr(ds, "Columns", 0) or 0),
                    })
                rec["instances"] += 1
                try:
                    rec["bytes"] += p.stat().st_size
                except OSError:
                    pass
        if n % 25 == 0:
            print(f"  {n}/{len(folders)} folders", flush=True)

    out_records = []
    for rec in cases.values():
        # group(5) of FOLDER_RE is the whole "<name>_<procedure>" tail.
        m = FOLDER_RE.match(rec["folder"])
        rest = m.group(5) if m else rec["folder"]
        name, proc = split_name_proc(rest, rec["dicom_name"])
        rec["name_from_folder"] = name
        rec["procedure_from_folder"] = proc
        reg = registry.get(rec["ir_number"] or -1, {})
        rec["registry_name"] = reg.get("patient_name", "")
        rec["registry_procedure"] = reg.get("procedure", "")
        rec["registry_cr"] = reg.get("cr_no", "")
        rec["in_registry"] = bool(reg)
        rec["study_dates"] = sorted(rec["study_dates"])
        rec["name_agrees_with_registry"] = (
            norm(rec["dicom_name"]) == norm(reg.get("patient_name", ""))
            if reg and rec["dicom_name"] else None)
        rec["folder_matches_registry"] = (
            norm(name) == norm(reg.get("patient_name", ""))
            if reg and name else None)
        out_records.append(rec)

    payload = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "root": str(root),
        "folder_count": len(folders),
        "case_count": len(out_records),
        "total_bytes": sum(r["bytes"] for r in out_records),
        "total_frames": sum(s["frames"] for r in out_records for s in r["series"]),
        "modalities": dict(Counter(s["modality"] for r in out_records
                                   for s in r["series"])),
        "unreadable_objects": unreadable,
        "cases": out_records,
    }
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(payload, indent=1), encoding="utf8")

    inreg = sum(1 for r in out_records if r["in_registry"])
    agree = sum(1 for r in out_records if r["folder_matches_registry"] is True)
    print(f"\ncases            : {len(out_records)}")
    print(f"total frames     : {payload['total_frames']}")
    print(f"total size       : {payload['total_bytes']/1e9:.2f} GB")
    print(f"modalities       : {payload['modalities']}")
    print(f"in registry      : {inreg}")
    print(f"folder name == registry name: {agree}")
    print(f"unreadable       : {unreadable}")
    print(f"wrote            : {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
