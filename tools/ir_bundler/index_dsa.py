"""
IR Bundler - Stage 1: Index the SMS Jaipur DSA registry into a per-IR-number bundle map.

Reads:
  - DSA DATA SHEET.xlsx          (master registry, DSA NO. 1..1058)
  - 01_Clinical_Operative...     (operative notes, .docx)
  - 02_Discharge_Cards...        (discharge cards / summaries, .pdf)
  - 03_Patient_DICOM_Imaging...  (DICOM studies, extensionless files)

Emits: _index/bundles.json  (one record per DSA number)

Design rules:
  - Never invent a link. A file attaches to an IR number only on a real key match
    (CR number, or normalized patient name). Anything else is recorded as UNLINKED
    with the reason, so gaps are visible rather than silently dropped.
  - Ambiguity is a first-class outcome: a name matching >1 IR number links to
    none and is reported, never guessed.
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import re
import unicodedata
from collections import Counter, defaultdict
from dataclasses import dataclass, field, asdict
from pathlib import Path

DEFAULT_ROOT = Path(r"E:\03_Academic_&_Research\DSA SMS jaipur")
REGISTRY_FILE = "DSA DATA SHEET.xlsx"

FOLDER_OPERATIVE = "01_Clinical_Operative_Cases_and_Reports"
FOLDER_DISCHARGE = "02_Discharge_Cards_and_Summaries"
FOLDER_IMAGING = "03_Patient_DICOM_Imaging_Datasets"


# --------------------------------------------------------------------------
# Normalization
# --------------------------------------------------------------------------

_NON_ALNUM = re.compile(r"[^A-Z0-9]+")


def norm_key(value: object) -> str:
    """Fold a name to a comparison key: uppercase, strip accents, drop punctuation.

    Handles the DICOM '\\' family-name separator and Excel float-int coercion,
    both of which show up in the source files.
    """
    text = "" if value is None else str(value)
    text = unicodedata.normalize("NFKD", text)
    text = text.replace("\\", " ")
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return _NON_ALNUM.sub("", text.upper())


def parse_date(value: object) -> tuple[str | None, str]:
    """Return (ISO date, note). The source mixes real datetimes with dd.mm.yy
    and dd/mm/yy strings, and '26.06.23' style values appear in a NAME column
    on some rows -- so anything unparseable is flagged, not coerced."""
    if value is None:
        return None, "missing"
    if isinstance(value, dt.datetime):
        return value.date().isoformat(), "datetime"
    if isinstance(value, dt.date):
        return value.isoformat(), "date"
    text = str(value).strip()
    if not text:
        return None, "blank"
    for fmt in ("%Y-%m-%d", "%d.%m.%y", "%d/%m/%y", "%d.%m.%Y", "%d-%m-%Y", "%d/%m/%Y"):
        try:
            return dt.datetime.strptime(text[:10], fmt).date().isoformat(), fmt
        except ValueError:
            continue
    return None, f"unparsed:{text[:24]}"


def as_int(value: object) -> int | None:
    if value is None:
        return None
    if isinstance(value, (int, float)):
        return int(value)
    text = str(value).strip()
    if text.isdigit():
        return int(text)
    return None


# --------------------------------------------------------------------------
# Registry
# --------------------------------------------------------------------------

@dataclass
class RegistryRow:
    ir_number: int
    year: str
    year_seq: str
    date_iso: str | None
    date_note: str
    patient_name: str
    name_key: str
    age: str
    unit: str
    cr_no: str
    mobile: str
    category: str
    procedure: str
    diagnosis: str
    followup: str
    source_sheet: str
    row_number: int


def _header_map(header: list[object]) -> dict[str, int]:
    """Map logical field -> column index from the actual header row.

    The three sheets do NOT share a layout: '2022-23-24' carries an extra
    'S.NO.' column, so DATE sits at index 3 and NAME at 4, while '2025' and
    '2026' put DATE at 2 and NAME at 3. Positional assumptions silently
    mis-read 517 patients, so every column is resolved by name instead.
    """
    def find(*needles: str) -> int | None:
        for i, cell in enumerate(header):
            text = "".join(ch for ch in str(cell or "") if ch.isalnum()).upper()
            if any(n in text for n in needles):
                return i
        return None

    return {
        "ir": find("DSANO"),
        "year_seq": find("YEARSDSA"),
        "date": find("DATE"),
        "name": find("PATIENTSNAME", "PATIENTSAME"),
        "age": find("AGE"),
        "unit": find("UNIT"),
        "cr_no": find("CRNO"),
        "mobile": find("MOBILENO"),
        "category": find("CATEGORY"),
        "procedure": find("PROCEDURE"),
        "diagnosis": find("DIAGNOSIS"),
        "followup": find("FOLLOWUP"),
    }


def read_registry(xlsx: Path) -> tuple[list[RegistryRow], list[dict]]:
    import openpyxl

    wb = openpyxl.load_workbook(xlsx, read_only=True, data_only=True)
    rows: list[RegistryRow] = []
    anomalies: list[dict] = []

    for sheet in wb.sheetnames:
        ws = wb[sheet]
        # Sheet4 is a leftover empty tab; skip it and any other empty sheet.
        first = next(ws.iter_rows(max_row=1), None)
        if not first or all(c.value is None for c in first):
            anomalies.append({"sheet": sheet, "issue": "empty_sheet"})
            continue
        cols = _header_map([c.value for c in first])
        required = ("ir", "name", "date")
        if any(cols[f] is None for f in required):
            anomalies.append({
                "sheet": sheet, "issue": "unmapped_required_columns",
                "found": {f: cols[f] for f in required},
            })
            continue

        def cell(raw, field: str):
            i = cols[field]
            if i is None or i >= len(raw):
                return None
            return raw[i]

        for n, raw in enumerate(ws.iter_rows(min_row=2, values_only=True), start=2):
            ir = as_int(cell(raw, "ir"))
            if ir is None:
                continue
            raw_name = str(cell(raw, "name") or "").strip()
            name_key = norm_key(raw_name)
            # A date where a name should be means the row is shifted.
            if not name_key or parse_date(raw_name)[0] is not None:
                anomalies.append({
                    "ir_number": ir, "sheet": sheet, "row": n,
                    "issue": "name_column_not_a_name",
                    "value": raw_name[:60],
                })
            d_iso, d_note = parse_date(cell(raw, "date"))
            rows.append(RegistryRow(
                ir_number=ir,
                year=str(cell(raw, "year_seq") or "").strip(),
                year_seq=str(sheet),
                date_iso=d_iso,
                date_note=d_note,
                patient_name=raw_name,
                name_key=name_key,
                age=str(cell(raw, "age") or "").strip(),
                unit=str(cell(raw, "unit") or "").strip(),
                cr_no=str(cell(raw, "cr_no") or "").strip(),
                mobile=str(cell(raw, "mobile") or "").strip(),
                category=str(cell(raw, "category") or "").strip(),
                procedure=str(cell(raw, "procedure") or "").strip(),
                diagnosis=str(cell(raw, "diagnosis") or "").strip(),
                followup=str(cell(raw, "followup") or "").strip(),
                source_sheet=sheet,
                row_number=n,
            ))
    return rows, anomalies


# --------------------------------------------------------------------------
# Linker
# --------------------------------------------------------------------------

@dataclass
class Bundle:
    ir_number: int
    patient_name: str = ""
    age: str = ""
    sex: str = ""
    unit: str = ""
    cr_no: str = ""
    mobile: str = ""
    category: str = ""
    procedure: str = ""
    procedure_date: str | None = None
    operative_notes: list[str] = field(default_factory=list)
    discharge_cards: list[str] = field(default_factory=list)
    imaging_studies: list[dict] = field(default_factory=list)
    followup: str = ""
    diagnosis: str = ""
    date_note: str = ""
    link_confidence: str = "registry"
    warnings: list[str] = field(default_factory=list)


def name_tokens(name: str) -> set[str]:
    """Word tokens of a patient name, minus honorifics and size words."""
    stop = {"DEVI", "KUMAR", "KUMARI", "LAL", "BEGUM", "BAI", "BIR", "SINGH",
            "SHARMA", "VERMA", "YADAV", "GUPTA", "KHAN", "KUMARR", "MR", "MRS",
            "DR", "SAHIB", "BABU", "DAS", "DEV", "JI", "BEN"}
    raw = re.split(r"[\s_\-.,()\[\]]+", (name or "").upper())
    return {w for w in raw if w and w not in stop and any(c.isalpha() for c in w)}


def build_key_index(rows: list[RegistryRow]) -> dict[str, list[int]]:
    index: dict[str, list[int]] = defaultdict(list)
    for r in rows:
        if r.cr_no and r.cr_no not in ("None",):
            index[f"CR:{r.cr_no}"].append(r.ir_number)
        if r.name_key:
            index[f"NAME:{r.name_key}"].append(r.ir_number)
    return dict(index)


def resolve(
    candidates: list[int],
    key_index: dict[str, list[int]],
    cr_no: str | None,
    name_key: str | None,
) -> tuple[int | None, str]:
    """Resolve an attachment to one IR number.

    CR number wins when it is unambiguous. Otherwise fall back to the name key,
    and only accept it when it maps to exactly one IR number.
    """
    if cr_no:
        hit = key_index.get(f"CR:{cr_no}", [])
        if len(set(hit)) == 1:
            return hit[0], "cr_no"
        if len(set(hit)) > 1:
            return None, f"ambiguous_cr:{sorted(set(hit))}"
    if name_key:
        hit = key_index.get(f"NAME:{name_key}", [])
        if len(set(hit)) == 1:
            return hit[0], "name"
        if len(set(hit)) > 1:
            return None, f"ambiguous_name:{sorted(set(hit))}"
    return None, "no_key_match"


DATE_RE = re.compile(r"\b(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{2,4})\b")


def extract_date_token(path_text: str) -> str:
    """First dd.mm.yy-looking token in a path, as 'dd.mm.yy' for parse_date."""
    m = DATE_RE.search(os.path.basename(path_text))
    return m.group(0).replace("/", ".").replace("-", ".") if m else ""


def tokenize(path_text: str) -> tuple[str, set[str]]:
    """Pull a candidate patient name from a filename/folder path."""
    stem = os.path.splitext(os.path.basename(path_text))[0]
    stem = re.sub(r"[\d]{1,2}[-.\/]\d{1,2}[-.\/]\d{2,4}", " ", stem)
    words = [w for w in re.split(r"[\s_\-.,()\[\]]+", stem) if w]
    generic = {
        "REPORT", "REPORTS", "OP", "OPD", "NOTE", "NOTES", "OPNOTE", "DISCHARGE",
        "SUMMARY", "CASE", "COPY", "DOC", "DOCX", "PDF", "IPD", "IR", "UNIT",
        "THE", "AND", "A", "OF", "NEW", "EXPORT", "DICOM", "USRFILES", "IMAGE",
    }
    kept = [w for w in words if w.upper() not in generic]
    return norm_key(" ".join(kept)), set(kept)


def best_name_match(
    file_tokens: set[str],
    registry_tokens: dict[int, set[str]],
    procedure_date: str | None = None,
    doc_date: str | None = None,
) -> tuple[int | None, str]:
    """Match a document to a patient by token containment.

    A registry name matches when every one of its meaningful name tokens
    appears in the file tokens -- so 'BANWARI LAL' matches 'BANWARI LAL Endo
    Vascular Laser Ablation...' but a bare 'LAL' will not, because 'LAL' is a
    stop word. Ties are broken by an exact procedure-date match; anything
    still tied is reported ambiguous rather than guessed.
    """
    candidates: list[tuple[int, int, int]] = []  # (score, date_bonus, ir)
    for ir, reg_toks in registry_tokens.items():
        if not reg_toks or not reg_toks.issubset(file_tokens):
            continue
        bonus = 1 if (doc_date and procedure_date and doc_date == procedure_date) else 0
        candidates.append((len(reg_toks), bonus, ir))
    if not candidates:
        return None, "no_token_match"
    top = max(c[0] for c in candidates)
    pool = [c for c in candidates if c[0] == top]
    dated = [c for c in pool if c[1]]
    if dated:
        pool = dated
    irs = sorted({c[2] for c in pool})
    if len(irs) > 1:
        return None, f"ambiguous_token:{irs[:6]}"
    return irs[0], "name_tokens"


def scan_documents(
    root: Path, key_index, registry_tokens, bundles, unlinked, kinds
) -> None:
    """Walk operative-note and discharge-card trees, attaching what links."""
    ignore_names = {"~$", ".DS_Store"}
    for folder, bucket in ((FOLDER_OPERATIVE, "operative"), (FOLDER_DISCHARGE, "discharge")):
        base = root / folder
        if not base.exists():
            continue
        for dirpath, _dirnames, filenames in os.walk(base):
            for fname in filenames:
                if fname.startswith("~$") or fname in ignore_names:
                    continue
                if fname.lower().endswith((".docx", ".pdf", ".zip", ".xlsx")) and \
                        not kinds.matches(fname):
                    continue
                full = Path(dirpath) / fname
                key, tokens = tokenize(str(full))
                # Discharge cards sit in patient-named folders, so the folder
                # is a second name source. Month/date folders contribute
                # nothing and are skipped by the generic-token filter.
                parent = Path(dirpath).name
                if parent and not DATE_RE.search(parent):
                    _, parent_tokens = tokenize(parent)
                    tokens |= parent_tokens
                # Many filenames carry the procedure date, which disambiguates
                # patients who share a name across years.
                doc_date, _ = parse_date(extract_date_token(str(full)))
                ir, how = resolve([], key_index, None, key)
                if ir is None:
                    ir, how = best_name_match(tokens, registry_tokens)
                rel = str(full.relative_to(root))
                if ir is None:
                    unlinked.append({
                        "folder": folder, "file": rel, "reason": how,
                        "tokens": sorted(tokens),
                    })
                    continue
                b = bundles[ir]
                b.link_confidence = "matched"
                if bucket == "operative":
                    b.operative_notes.append(rel)
                else:
                    b.discharge_cards.append(rel)


class DocumentKindFilter:
    """Discharge cards are PDFs/photos; operative notes are .docx. A PDF in the
    operative folder is a report, a .docx in the discharge folder is a summary.
    Both are kept, tagged by folder, since the source trees disagree."""

    def matches(self, fname: str) -> bool:
        return True


def scan_imaging(root: Path, key_index, registry_tokens, bundles, unlinked) -> None:
    """Index DICOM studies. Metadata comes from the DICOMDIR / headers; the
    study itself stays on disk and is rendered on demand, never eagerly."""
    import pydicom

    base = root / FOLDER_IMAGING
    if not base.exists():
        return
    for dirpath, _dirnames, filenames in os.walk(base):
        for fname in filenames:
            if fname.upper() == "DICOMDIR":
                continue
            full = Path(dirpath) / fname
            try:
                ds = pydicom.dcmread(full, stop_before_pixels=True, force=True)
            except Exception:
                continue
            name = str(getattr(ds, "PatientName", ""))
            pid = str(getattr(ds, "PatientID", ""))
            study_uid = str(getattr(ds, "StudyInstanceUID", ""))
            series_uid = str(getattr(ds, "SeriesInstanceUID", ""))
            modality = str(getattr(ds, "Modality", ""))
            frames = int(getattr(ds, "NumberOfFrames", 1) or 1)
            ir, how = resolve([], key_index, pid, norm_key(name))
            rel = str(full.relative_to(root))
            if ir is None:
                # Study folder is named for the patient, e.g. 'Dinesh_Export'.
                _, folder_tokens = tokenize(Path(dirpath).name)
                _, file_tokens = tokenize(str(full))
                ir, how = best_name_match(folder_tokens | file_tokens, registry_tokens)
            record = {
                "path": rel,
                "patient_name": name,
                "patient_id": pid,
                "study_uid": study_uid,
                "series_uid": series_uid,
                "modality": modality,
                "frames": frames,
                "study_date": str(getattr(ds, "StudyDate", "")),
                "sop_class": str(getattr(ds, "SOPClassUID", "")),
                "link_reason": how,
            }
            if ir is None:
                unlinked.append({
                    "folder": FOLDER_IMAGING, "file": rel,
                    "reason": how, "dicom_patient": name, "dicom_id": pid,
                })
                continue
            b = bundles[ir]
            b.link_confidence = "matched"
            if not any(s["study_uid"] == study_uid for s in b.imaging_studies):
                b.imaging_studies.append({
                    "study_uid": study_uid, "modality": modality,
                    "patient_name": name, "patient_id": pid,
                    "study_date": str(getattr(ds, "StudyDate", "")),
                    "series": [],
                })
            series = b.imaging_studies[-1]["series"]
            if not any(s["series_uid"] == series_uid for s in series):
                series.append({
                    "series_uid": series_uid,
                    "instances": [],
                    "frames_total": frames,
                    "label": str(getattr(ds, "SeriesDescription", "")),
                })
            series[-1]["instances"].append({
                "path": rel, "frames": frames, "sop_class": record["sop_class"],
            })


def main() -> int:
    ap = argparse.ArgumentParser(description="Index SMS Jaipur DSA registry into per-IR bundles.")
    ap.add_argument("--root", default=str(DEFAULT_ROOT))
    ap.add_argument("--out", default=str(Path(__file__).parent / "_index"))
    args = ap.parse_args()

    root = Path(args.root)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    rows, anomalies = read_registry(root / REGISTRY_FILE)

    # Deduplicate only genuine repeats of the SAME IR number. Matching on
    # patient/date/procedure content instead would silently collapse distinct
    # patients who share a name and procedure (GUDDI DEVI appears 5x), which
    # is how an earlier version dropped 20 real IR numbers.
    by_ir: dict[int, RegistryRow] = {}
    dupes: list[int] = []
    collisions: list[dict] = []
    for r in rows:
        prior = by_ir.get(r.ir_number)
        if prior is None:
            by_ir[r.ir_number] = r
            continue
        sig = (r.patient_name, r.date_iso, r.procedure, r.cr_no)
        prior_sig = (prior.patient_name, prior.date_iso, prior.procedure, prior.cr_no)
        if sig == prior_sig:
            dupes.append(r.ir_number)
        else:
            collisions.append({
                "ir_number": r.ir_number,
                "first": {"sheet": prior.source_sheet, "row": prior.row_number,
                          "name": prior.patient_name, "date": prior.date_iso},
                "second": {"sheet": r.source_sheet, "row": r.row_number,
                           "name": r.patient_name, "date": r.date_iso},
            })
    unique = sorted(by_ir.values(), key=lambda r: r.ir_number)

    key_index = build_key_index(unique)
    name_index: dict[str, list[RegistryRow]] = defaultdict(list)
    for r in unique:
        if r.name_key:
            name_index[r.name_key].append(r)

    bundles: dict[int, Bundle] = {}
    for r in unique:
        b = Bundle(ir_number=r.ir_number)
        b.patient_name = r.patient_name
        b.age = r.age
        b.unit = r.unit
        b.cr_no = r.cr_no
        b.mobile = r.mobile
        b.category = r.category
        b.procedure = r.procedure
        b.procedure_date = r.date_iso
        b.date_note = r.date_note
        b.diagnosis = r.diagnosis
        b.followup = r.followup
        if r.date_note.startswith("unparsed") or r.date_note == "missing":
            b.warnings.append(f"date:{r.date_note}")
        bundles[r.ir_number] = b

    registry_tokens = {r.ir_number: name_tokens(r.patient_name) for r in unique}

    unlinked: list[dict] = []
    scan_documents(root, key_index, registry_tokens, bundles, unlinked, DocumentKindFilter())
    scan_imaging(root, key_index, registry_tokens, bundles, unlinked)

    ordered = [asdict(bundles[k]) for k in sorted(bundles)]
    payload = {
        "generated_at": dt.datetime.now().isoformat(timespec="seconds"),
        "registry_file": REGISTRY_FILE,
        "ir_range": [min(bundles), max(bundles)],
        "registry_rows_raw": len(rows),
        "registry_rows_unique": len(unique),
        "duplicate_ir_numbers": sorted(set(dupes)),
        "ir_number_collisions": collisions,
        "missing_ir_numbers": [n for n in range(min(bundles), max(bundles) + 1) if n not in bundles],
        "registry_anomalies": anomalies,
        "bundles": ordered,
        "unlinked": unlinked,
    }
    (out / "bundles.json").write_text(json.dumps(payload, indent=1, default=str), encoding="utf-8")

    with_notes = sum(1 for b in ordered if b["operative_notes"])
    with_dc = sum(1 for b in ordered if b["discharge_cards"])
    with_img = sum(1 for b in ordered if b["imaging_studies"])
    full = sum(1 for b in ordered if b["operative_notes"] and b["discharge_cards"])
    print(f"registry          : {len(rows)} rows -> {len(unique)} unique IR numbers "
          f"({min(bundles)}-{max(bundles)})")
    print(f"duplicates dropped: {sorted(set(dupes))}")
    print(f"IR collisions     : {len(collisions)}")
    print(f"missing IR numbers: {payload['missing_ir_numbers']}")
    print(f"registry anomalies: {len(anomalies)}")
    print(f"operative notes   : {with_notes} IR numbers")
    print(f"discharge cards   : {with_dc} IR numbers")
    print(f"imaging           : {with_img} IR numbers")
    print(f"notes + discharge : {full} IR numbers")
    print(f"unlinked files    : {len(unlinked)}")
    print(f"wrote             : {out / 'bundles.json'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
