"""
Fluoro study indexer for the E:\\ patient folders.

Reads the 114 per-patient DICOM export trees at the root of E:, and records
what each one actually contains so studies can be found by IR number, patient
name, or procedure.

Writes _index/fluoro.json -- one record per study:
  folder, patient name, patient id, study/series UID, modality, study date,
  description, instance count, frames, and a link to the IR number when the
  folder name or the DICOM header resolves to one.

Notes
-----
* These are 13 GB of extensionless objects in DICOMDIR trees, so the header is
  read with stop_before_pixels and force=True; anything that is not DICOM
  (macOS Spotlight indexes, .DS_Store) is skipped rather than guessed at.
* Folder names are truncated to 8 characters (KHUSHPR, AASIN_5) so they are
  a weak join key. The registry name and the DICOM PatientName are both tried,
  and an unresolved folder is reported rather than attached by prefix alone.
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
DEFAULT_ROOT = Path("E:\\")
REGISTRY = Path(r"D:\Pendrive Backup\03_Academic_&_Research\DSA SMS jaipur\DSA DATA SHEET.xlsx")
OUT = HERE / "_index" / "fluoro.json"

SKIP_DIRS = {".Spotlight-V100", "System Volume Information", "$RECYCLE.BIN",
             "boot", "Cache_Data", "DCIM", "Alarms", "Audiobooks", "25100311",
             "_Pruned_Non_IR_and_Duplicate_Archive", ".fseventsd"}
IMAGE_SOP = {"1.2.840.10008.5.1.4.1.1.2"}          # CT Image Storage
XA_SOP = {"1.2.840.10008.5.1.4.1.1.1",             # Computed Radiography
          "1.2.840.10008.5.1.4.1.1.1.1",          # Digital X-Ray
          "1.2.840.10008.5.1.4.1.1.12.1",         # X-Ray Angiographic
          "1.2.840.10008.5.1.4.1.1.12.2",         # X-Ray Radiofluoroscopic
          "1.2.840.10008.5.1.4.1.1.12.2.1",
          "1.2.840.10008.5.1.4.1.1.3.1",
          "1.2.840.10008.5.1.4.1.1.66",           # Raw Data
          "1.2.840.10008.5.1.4.1.1.66.1",
          "1.2.840.10008.5.1.4.1.1.66.2"}


def norm(s: str) -> str:
    t = unicodedata.normalize("NFKD", str(s or "")).replace("\\", " ")
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.sub(r"[^A-Z0-9]+", "", t.upper())


def clean_dicom_name(raw: str) -> str:
    """DICOM names carry age/sex suffixes as caret groups:
    'ABHISHEK YADAV^20 YRS^^^' -> 'ABHISHEK YADAV'. Without this the name
    never matches the registry and 77 of 113 folders went unresolved."""
    t = str(raw or "")
    if "^" in t:
        t = t.split("^", 1)[0]
    return re.sub(r"\s*\d+\s*(?:YRS?|Y|M|F)\b.*$", "", t, flags=re.I).strip()


class Row:
    """Minimal stand-in for index_dsa.RegistryRow, so the fluoro indexer does
    not depend on the source workbook being present on disk."""
    __slots__ = ("ir_number", "patient_name", "name_key", "cr_no")

    def __init__(self, ir, name, cr):
        self.ir_number, self.patient_name = ir, name
        self.name_key, self.cr_no = norm(name), cr


def load_registry() -> list[Row]:
    """Prefer the live workbook; fall back to the extracted bundles.json.

    E: was re-partitioned and DSA DATA SHEET.xlsx went with it, so the
    workbook is no longer a reliable dependency. bundles.json preserves every
    IR number with its name, CR number, procedure and dates, which is all the
    fluoro join needs.
    """
    if REGISTRY.exists():
        try:
            sys.path.insert(0, str(HERE))
            import index_dsa
            rows, _ = index_dsa.read_registry(REGISTRY)
            if rows:
                return rows
        except Exception as exc:
            print(f"  workbook unreadable ({type(exc).__name__}), using bundles.json")
    cached = HERE / "_index" / "bundles.json"
    if not cached.exists():
        raise SystemExit(
            f"Neither {REGISTRY} nor {cached} is available; cannot map folders "
            f"to IR numbers.")
    print(f"  using extracted registry: {cached}")
    payload = json.loads(cached.read_text(encoding="utf8"))
    return [Row(b["ir_number"], b["patient_name"], b["cr_no"])
            for b in payload["bundles"]]


def build_lookups(rows) -> tuple[dict, dict, dict]:
    """(full name key -> IR, first-token key -> [IR], CR -> IR)."""
    by_name: dict[str, int] = {}
    by_first: dict[str, set[int]] = defaultdict(set)
    by_cr: dict[str, int] = {}
    for r in rows:
        if r.name_key and r.name_key not in by_name:
            by_name[r.name_key] = r.ir_number
        toks = [w for w in re.split(r"[\s_\-.]+", (r.patient_name or "").upper()) if w]
        if toks:
            by_first[norm(toks[0])].add(r.ir_number)
        if r.cr_no and r.cr_no.isdigit():
            by_cr[r.cr_no] = r.ir_number
    return by_name, {k: sorted(v) for k, v in by_first.items()}, by_cr


def resolve(ir_hint: str, folder: str, dicom_name: str, dicom_id: str,
            by_name, by_first, by_cr, ir_set) -> tuple[int | None, str]:
    """IR number for a folder, or None with the reason it could not be settled.

    PatientID here is a LOCAL accession ('999-21/07/2026'), not the hospital
    CR number, so it is checked but almost never resolves; the registry name
    carried in the DICOM header is the reliable key.
    """
    # PatientID is '<IR>/<dd-mm-yyyy>' or '<IR>-<dd-mm-yyyy>' -- the leading
    # integer IS the IR number, written at the cath lab when the study was
    # acquired. This is authoritative and must win over any name matching:
    # name-only matching picked the FIRST same-name patient and got 36 of 91
    # folders wrong (GEETA -> IR 165 when the study says 966, MONIKA -> IR 20
    # when it says 948, LAXMI DEVI -> IR 10 when it says 1074).
    m = re.match(r"^\s*(\d{1,4})\s*[-/]", str(dicom_id or ""))
    if not m:
        m = re.match(r"^\s*(\d{1,4})\s*$", str(dicom_id or ""))
    if m:
        cand = int(m.group(1))
        if cand in ir_set:
            return cand, "patientid_ir"

    if dicom_id and dicom_id in by_cr:
        return by_cr[dicom_id], "dicom_patient_id"
    clean = clean_dicom_name(dicom_name)
    for cand in (clean, folder):
        k = norm(cand)
        if not k:
            continue
        if k in by_name:
            return by_name[k], "name_exact"
        # Folder names are truncated to 8 chars, so match on the first token
        # only when it is unambiguous across the whole registry.
        if len(k) >= 4:
            first = k[:8] if len(k) > 8 else k
            hits = by_first.get(first, [])
            if len(hits) == 1:
                return hits[0], "folder_prefix_unique"

    # Conservative fuzzy pass. Common first names (PAPPU, NITIN, VISHAL,
    # RAVINA, RAMSWAROOP) match several registry rows, so a candidate set is
    # only accepted when it resolves to exactly ONE IR number. Anything else
    # stays unresolved -- a wrong IR number on a fluoro study is worse than
    # an honest gap.
    k = norm(clean)
    if len(k) >= 6:
        hits = sorted({ir for name, ir in by_name.items()
                       if len(name) >= 4 and (name.startswith(k[:8]) or k in name
                                              or name in k)})
        if len(hits) == 1:
            return hits[0], "name_fuzzy_unique"
        if len(hits) > 1:
            return None, f"ambiguous_name:{hits[:6]}"
    return None, "unresolved"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=str(DEFAULT_ROOT))
    ap.add_argument("--out", default=str(OUT))
    args = ap.parse_args()

    import pydicom
    import warnings
    warnings.filterwarnings("ignore")

    root = Path(args.root)
    rows = load_registry()
    by_ir = {r.ir_number: r for r in rows}
    by_name, by_first, by_cr = build_lookups(rows)
    ir_set = {r.ir_number for r in rows}
    print(f"registry: {len(rows)} IR numbers")

    folders = sorted(d for d in os.listdir(root)
                     if os.path.isdir(root / d) and d not in SKIP_DIRS
                     and not d.startswith("."))
    print(f"patient folders: {len(folders)}")

    studies: dict[tuple, dict] = {}
    unreadable = 0
    t0 = time.time()
    for n, folder in enumerate(folders, 1):
        base = root / folder
        for dirpath, _d, files in os.walk(base):
            for fn in files:
                if fn.upper() == "DICOMDIR" or fn.startswith("."):
                    continue
                full = Path(dirpath) / fn
                try:
                    ds = pydicom.dcmread(full, stop_before_pixels=True, force=True)
                except Exception:
                    unreadable += 1
                    continue
                study = str(getattr(ds, "StudyInstanceUID", ""))
                series = str(getattr(ds, "SeriesInstanceUID", ""))
                key = (folder, study, series)
                rec = studies.get(key)
                if rec is None:
                    rec = {
                        "folder": folder,
                        "patient_name": str(getattr(ds, "PatientName", "")),
                        "patient_id": str(getattr(ds, "PatientID", "")),
                        "study_uid": study,
                        "series_uid": series,
                        "modality": str(getattr(ds, "Modality", "")),
                        "study_date": str(getattr(ds, "StudyDate", "")),
                        "study_desc": str(getattr(ds, "StudyDescription", "")),
                        "series_desc": str(getattr(ds, "SeriesDescription", "")),
                        "instances": 0, "frames": 0,
                        "bytes": 0, "path": str(full.relative_to(root)),
                    }
                    studies[key] = rec
                rec["instances"] += 1
                try:
                    rec["frames"] += int(getattr(ds, "NumberOfFrames", 1) or 1)
                except (TypeError, ValueError):
                    pass
                rec["bytes"] += full.stat().st_size
        if n % 20 == 0:
            print(f"  {n}/{len(folders)} folders, {len(studies)} series so far",
                  flush=True)

    records = list(studies.values())

    for r in records:
        r["clean_name"] = clean_dicom_name(r["patient_name"])
        ir, how = resolve("", r["folder"], r["patient_name"], r["patient_id"],
                          by_name, by_first, by_cr, ir_set)

        # Flag, do not silently accept, a match the name does not support.
        # Folder '1235725' parses to IR 123 but its header name is just the
        # number and its study date is 2026 against a 2023 registry row.
        if ir is not None and by_ir:
            row = by_ir.get(ir)
            cn = norm(r["clean_name"])
            rn = norm(row.patient_name if row else "")
            supported = bool(cn) and (
                cn == rn or rn.startswith(cn) or cn.startswith(rn)
                or (len(cn) >= 4 and cn in rn))
            r["name_supports_link"] = supported
            if not supported:
                r["link_conflict"] = (
                    f"PatientID says IR {ir} ({row.patient_name if row else '?'})"
                    f" but the header reads '{r['clean_name']}'")
        else:
            r["name_supports_link"] = None

        r["ir_number"] = ir
        r["link_reason"] = how

    payload = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "root": str(root),
        "folder_count": len(folders),
        "series_count": len(records),
        "total_bytes": sum(r["bytes"] for r in records),
        "unreadable_objects": unreadable,
        "modalities": dict(Counter(r["modality"] for r in records)),
        "studies": records,
    }
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(payload, indent=1), encoding="utf8")

    linked = [r for r in records if r["ir_number"]]
    folders_linked = {r["folder"] for r in linked}
    unresolved = sorted({r["folder"] for r in records if not r["ir_number"]})
    print(f"\nseries/studies     : {len(records)}")
    print(f"total size         : {payload['total_bytes']/1e9:.2f} GB")
    print(f"modalities         : {payload['modalities']}")
    print(f"unreadable objects : {unreadable}")
    print(f"linked to an IR    : {len(linked)} series across {len(folders_linked)} folders")
    print(f"unresolved folders : {len(unresolved)}")
    for f in unresolved[:20]:
        print(f"    {f}")
    print(f"wrote              : {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
