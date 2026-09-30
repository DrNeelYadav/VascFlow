"""
Generate a REAL patient archive dataset for the SSO discharge dossier.

Replaces the deleted synthetic smsPatientArchiveDataset.ts. Every field is
derived from authentic sources:

  - Identity, procedure, scheme, unit  <- DSA DATA SHEET.xlsx (IR 1-1058)
  - Presence of a discharge card / operative note, and the file paths
                                         <- scanned E:\\ trees, linked by the
                                            identifiers found inside each
                                            document (see extract_documents.py)

Rule: where a structured field cannot be sourced from real data it is emitted
as an empty string / null, never a plausible-looking placeholder. The UI reads
these as "not on file".
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

HERE = Path(__file__).parent
DEFAULT_ROOT = Path(r"E:\03_Academic_&_Research\DSA SMS jaipur")
INDEX_DIR = HERE / "_index"
OUT_TS = Path(r"C:\SSO\apps\web-app\app\lib\realData\smsPatientArchiveReal.ts")

MONTHS = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"]


def norm(s: str) -> str:
    t = unicodedata.normalize("NFKD", str(s or "")).replace("\\", " ")
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.sub(r"[^A-Z0-9]+", "", t.upper())


def categorize(procedure: str, diagnosis: str = "") -> str:
    p = f"{procedure} {diagnosis}".lower()
    table = [
        ("VenaSeal", ("venaseal", "venaseal", "evlt", "varicose vein glue", "varicose")),
        ("TACE", ("tace", "transarterial chemo")),
        ("BAE", ("bronchial artery", " bae", "bae ")),
        ("PTBD", ("ptbd", "biliary stent", "sems", "metallic stent")),
        ("PCD", ("pcd", "drainage", "abscess")),
        ("TIPS", ("tips", "dvt")),
        ("AV Fistuloplasty", ("fistuloplasty", "av fistula", "permcath", "perm cath")),
        ("Varicocele Embolization", ("varicocele",)),
        ("UAE", ("uterine artery", "u.e")),
        ("JNA", ("jna", "jugular", "epistaxis")),
        ("Diagnostic Angiography", ("dsa", "angiograph", "diagnostic")),
    ]
    for label, needles in table:
        if any(n in p for n in needles):
            return label
    return "Other IR"


def js_str(value) -> str:
    """JSON-encode a string as a TypeScript literal, unicode-escaped so the
    generated file is pure ASCII and cannot carry a broken glyph."""
    if value is None:
        return '""'
    return json.dumps(str(value), ensure_ascii=True)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=str(DEFAULT_ROOT))
    ap.add_argument("--index", default=str(INDEX_DIR))
    ap.add_argument("--out", default=str(OUT_TS))
    args = ap.parse_args()

    sys.path.insert(0, str(HERE))
    import index_dsa
    import extract_documents as ex

    root = Path(args.root)
    index_dir = Path(args.index)

    rows, _ = index_dsa.read_registry(root / index_dsa.REGISTRY_FILE)
    by_ir = {}
    for r in rows:
        by_ir.setdefault(r.ir_number, r)

    docs_path = index_dir / "documents.json"
    docs: list[dict] = []
    if docs_path.exists():
        docs = json.loads(docs_path.read_text(encoding="utf8")).get("records", [])
    else:
        print("WARNING: documents.json not found; "
              "archive will contain registry rows with no documents")

    # group linked documents by IR number
    by_ir_docs: dict[int, dict[str, list[dict]]] = defaultdict(
        lambda: {"discharge": [], "operative": []})
    for d in docs:
        ir = d.get("ir_number")
        if not ir:
            continue
        by_ir_docs[ir][d["kind"]].append(d)

    records = []
    for ir in sorted(by_ir):
        reg = by_ir[ir]
        if not (reg.patient_name or reg.name_key):
            continue
        dc = by_ir_docs[ir]["discharge"]
        op = by_ir_docs[ir]["operative"]
        if not dc and not op:
            continue  # only patients with a real document are archived

        iso = reg.date_iso or ""
        try:
            d_obj = dt.date.fromisoformat(iso) if iso else None
        except ValueError:
            d_obj = None

        # Pull whatever real text the documents yielded. No structured vitals
        # or medication lists are synthesised: those simply do not exist in a
        # reliable machine-readable form across this corpus.
        dc_head = max((d.get("chars", 0) for d in dc), default=0)
        op_head = max((d.get("chars", 0) for d in op), default=0)

        records.append({
            "irNumber": f"IR-{ir}",
            "dsaNo": str(ir),
            "irNumberValue": ir,
            "year": d_obj.year if d_obj else 0,
            "month": MONTHS[d_obj.month - 1] if d_obj else "",
            "monthNum": d_obj.month if d_obj else 0,
            "patientName": reg.patient_name,
            "age": reg.age,
            "gender": "Unknown",
            "crNo": reg.cr_no,
            "admissionNo": "",
            "procedureName": reg.procedure,
            "procedureCategory": categorize(reg.procedure, reg.diagnosis),
            "diagnosis": reg.diagnosis,
            "scheme": reg.category,
            "unitOrWard": reg.unit,
            "procedureDate": iso,
            "folderPath": "",
            "filesAvailable": [d["rel"].split("\\")[-1] for d in (dc + op)],
            "hasDischargeCard": bool(dc),
            "hasOperativeNote": bool(op),
            "dischargeDocuments": [
                {"path": d["rel"], "method": d["method"],
                 "chars": d.get("chars", 0), "linkReason": d.get("link_reason", "")}
                for d in dc
            ],
            "operativeDocuments": [
                {"path": d["rel"], "method": d["method"],
                 "chars": d.get("chars", 0), "linkReason": d.get("link_reason", "")}
                for d in op
            ],
            "provenance": "authentic",
            "dischargeChars": dc_head,
            "operativeChars": op_head,
        })

    lines = [
        "/**",
        " * AUTHENTIC SMS Hospital IR Patient Archive",
        " *",
        " * GENERATED FILE -- do not edit by hand.",
        " * Regenerate with:  python C:/SSO/tools/ir_bundler/build_real_archive.py",
        " *",
        f" * Source registry : DSA DATA SHEET.xlsx (IR 1-1058)",
        f" * Documents linked: {len(docs)} scanned/extracted files, matched to",
        " *                   IR numbers by identifiers found INSIDE each document",
        f" * Patients with a real document on file: {len(records)}",
        " *",
        " * This replaces the deleted synthetic archive. Every field here traces to a",
        " * real record. Structured vitals, medication lists and operator rosters are",
        " * deliberately ABSENT -- they are not reliably machine-readable across this",
        " * corpus, so they are omitted rather than invented. The UI shows the",
        " * document file and its on-disk location instead.",
        " */",
        "",
        "export interface ArchiveDocumentRef {",
        "  path: string;",
        "  method: string;",
        "  chars: number;",
        "  linkReason: string;",
        "}",
        "",
        "export interface ArchivedPatientRecord {",
        "  irNumber: string;",
        "  dsaNo: string;",
        "  irNumberValue: number;",
        "  year: number;",
        "  month: string;",
        "  monthNum: number;",
        "  patientName: string;",
        "  age: number | string;",
        "  gender: \"Male\" | \"Female\" | \"Unknown\";",
        "  crNo: string;",
        "  admissionNo?: string;",
        "  procedureName: string;",
        "  procedureCategory: string;",
        "  diagnosis: string;",
        "  scheme: string;",
        "  unitOrWard: string;",
        "  procedureDate: string;",
        "  folderPath?: string | null;",
        "  filesAvailable: string[];",
        "  hasDischargeCard: boolean;",
        "  hasOperativeNote: boolean;",
        "  dischargeDocuments: ArchiveDocumentRef[];",
        "  operativeDocuments: ArchiveDocumentRef[];",
        "  provenance: \"authentic\";",
        "  dischargeChars: number;",
        "  operativeChars: number;",
        "}",
        "",
        "export const SMS_PATIENT_ARCHIVE_REAL: ArchivedPatientRecord[] = [",
    ]

    for r in records:
        lines.append("  {")
        for k in ("irNumber", "dsaNo", "irNumberValue", "year", "month", "monthNum",
                  "patientName", "crNo", "procedureName", "procedureCategory",
                  "diagnosis", "scheme", "unitOrWard", "procedureDate",
                  "hasDischargeCard", "hasOperativeNote", "provenance",
                  "dischargeChars", "operativeChars"):
            v = r[k]
            if isinstance(v, bool):
                lines.append(f'    {k}: {str(v).lower()},')
            elif isinstance(v, int):
                lines.append(f"    {k}: {v},")
            else:
                lines.append(f"    {k}: {js_str(v)},")
        lines.append(f'    age: {js_str(r["age"])},')
        lines.append(f'    gender: {js_str(r["gender"])},')
        lines.append('    folderPath: "",')
        lines.append(f'    admissionNo: "",')
        lines.append(f"    filesAvailable: [{', '.join(js_str(x) for x in r['filesAvailable'])}],")
        for key in ("dischargeDocuments", "operativeDocuments"):
            refs = ", ".join(
                "{path: %s, method: %s, chars: %d, linkReason: %s}"
                % (js_str(d["path"]), js_str(d["method"]), d["chars"], js_str(d["linkReason"]))
                for d in r[key]
            )
            lines.append(f"    {key}: [{refs}],")
        lines.append("  },")

    lines.append("];")
    lines.append("")
    lines.append("export default SMS_PATIENT_ARCHIVE_REAL;")
    lines.append("")

    out = Path(args.out)
    out.write_text("\n".join(lines), encoding="utf8")
    print(f"patients with real documents : {len(records)}")
    print(f"  with discharge card        : {sum(1 for r in records if r['hasDischargeCard'])}")
    print(f"  with operative note        : {sum(1 for r in records if r['hasOperativeNote'])}")
    print(f"  with both                  : {sum(1 for r in records if r['hasDischargeCard'] and r['hasOperativeNote'])}")
    print(f"wrote                         : {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
