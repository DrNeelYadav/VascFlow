"""
Clinical Summary Extractor for SMS Jaipur IR Telegram Bot.

Extracts authentic clinical profiles, discharge diagnoses, patient complaints,
operative notes, and post-procedure orders strictly from real documents on disk
(DOCX operative notes and PDF discharge cards).

Safety & Integrity:
- NO hallucinated or AI-invented text. If a section is absent, it is omitted.
- Deterministic extraction using regex and standard parsers.
"""

from __future__ import annotations

import json
import re
import zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
DOCS_JSON = BUNDLER / "_index" / "documents.json"
OCR_CACHE = BUNDLER / "_index" / "ocr_cache"
LIBRARY_ROOT = Path(r"D:\04_Interventional_Radiology_&_Academics\DSA_SMS_Jaipur_Library\DSA SMS jaipur")
PREOP_ROOT = Path(r"E:\Scans\00_PreOp_CT_MRI_Matched_Telegram_Scans")


def get_patient_assets(ir: int) -> dict[str, Path | None]:
    """Return paths to actual clinical files on disk for this IR number."""
    assets: dict[str, Path | None] = {"op_note": None, "discharge": None, "preop": None}
    if not DOCS_JSON.exists():
        return assets
    try:
        data = json.loads(DOCS_JSON.read_text(encoding="utf-8"))
        records = [r for r in data.get("records", []) if r.get("ir_number") == ir]
    except Exception:
        return assets

    for r in records:
        if r.get("kind") == "operative" and not assets["op_note"]:
            p = LIBRARY_ROOT / r.get("rel", "")
            if p.exists():
                assets["op_note"] = p
        elif r.get("kind") == "discharge" and not assets["discharge"]:
            p = LIBRARY_ROOT / r.get("rel", "")
            if p.exists():
                assets["discharge"] = p

    if PREOP_ROOT.exists():
        for d in PREOP_ROOT.glob("*"):
            if f"-{ir:04d}_" in d.name or f"-{ir}_" in d.name or f"_{ir}_" in d.name:
                assets["preop"] = d
                break

    return assets


def read_doc_text(path: Path) -> str:
    """Extract plain text from .docx via standard zipfile or .pdf via pypdf."""
    if not path.exists():
        return ""
    ext = path.suffix.lower()
    if ext == ".docx":
        try:
            with zipfile.ZipFile(path) as z:
                body = [n for n in z.namelist() if n.startswith("word/document")]
                if not body:
                    return ""
                xml = z.read(body[0]).decode("utf8", "replace")
            xml = re.sub(r"<w:tab[^>]*/>", "\t", xml)
            xml = re.sub(r"<w:br[^>]*/>", "\n", xml)
            xml = re.sub(r"</w:p>", "\n", xml)
            xml = re.sub(r"<[^>]+>", "", xml)
            return xml.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
        except Exception:
            return ""
    elif ext == ".pdf":
        try:
            import logging
            logging.getLogger("pypdf").setLevel(logging.ERROR)
            from pypdf import PdfReader
            reader = PdfReader(path)
            return "\n".join(page.extract_text() or "" for page in reader.pages)
        except Exception:
            return ""
    return ""


_OCR_MAP = None

def get_ocr_text(rel: str) -> str:
    global _OCR_MAP
    if _OCR_MAP is None:
        _OCR_MAP = {}
        if OCR_CACHE.exists():
            for cf in OCR_CACHE.glob("*.json"):
                try:
                    cd = json.loads(cf.read_text(encoding="utf-8"))
                    if cd.get("rel"):
                        _OCR_MAP[cd["rel"]] = cd.get("text", "")
                except Exception:
                    pass
    return _OCR_MAP.get(rel, "")


def get_record_text(r: dict) -> str:
    """Read text from file, then OCR cache, then text_head."""
    p = LIBRARY_ROOT / r.get("rel", "")
    txt = read_doc_text(p)
    if len(txt.strip()) > 50:
        return txt
    ocr = get_ocr_text(r.get("rel", ""))
    if ocr:
        return ocr
    return r.get("text_head", "")


def get_clinical_details(ir: int) -> dict[str, str]:
    """Retrieve verified clinical summary from real documents for an IR number."""
    if not DOCS_JSON.exists():
        return {}

    try:
        data = json.loads(DOCS_JSON.read_text(encoding="utf-8"))
        records = [r for r in data.get("records", []) if r.get("ir_number") == ir]
    except Exception:
        return {}

    if not records:
        return {}

    out = {
        "diagnosis": "",
        "clinical_profile": "",
        "history": "",
        "procedure_gist": "",
        "post_op": "",
        "biomarkers": "",
    }

    dc_texts = []
    # 1. Discharge summaries
    for r in [x for x in records if x.get("kind") == "discharge"]:
        txt = get_record_text(r)
        if not txt:
            continue
        dc_texts.append(txt)

        # Primary diagnosis (exclude ICD Diagnosis)
        m_diag = re.search(r"(?<!ICD\s)Diagnosis\s*:\s*([^\n\r]+)", txt, re.IGNORECASE)
        if m_diag and not out["diagnosis"]:
            val = re.sub(r"^[?\s:.-]+", "", m_diag.group(1)).strip()
            if not val.startswith("("):
                out["diagnosis"] = val

        # ICD Diagnosis fallback
        m_icd = re.search(r"ICD\s*Diagnosis\s*:\s*([^\n\r]+)", txt, re.IGNORECASE)
        if m_icd and not out["diagnosis"]:
            out["diagnosis"] = m_icd.group(1).strip()

        # Complaints & past history
        complaints, past = "", ""
        m_comp = re.search(r"Complaints\s*:\s*([^\n\r]+)", txt, re.IGNORECASE)
        if m_comp:
            complaints = m_comp.group(1).strip()

        m_past = re.search(r"Past\s*History\s*:\s*([^\n\r]+)", txt, re.IGNORECASE)
        if m_past:
            past = m_past.group(1).strip()

        hist = " | ".join(x for x in [complaints, past] if x)
        if hist and not out["history"]:
            out["history"] = hist

    # 2. Operative notes
    for r in [x for x in records if x.get("kind") == "operative"]:
        txt = get_record_text(r)
        if not txt:
            continue

        m_prof = re.search(r"Clinical\s*profile\s*[:-]\s*([^\n\r]+)", txt, re.IGNORECASE)
        if m_prof and not out["clinical_profile"]:
            out["clinical_profile"] = m_prof.group(1).strip()

        m_tech = re.search(
            r"(Under strict aseptic [^\n\r]+(?:\n[^\n\r]+)+?)(?=\n\s*(?:Post procedure|Dr\b|\Z))",
            txt,
            re.IGNORECASE,
        )
        if m_tech and not out["procedure_gist"]:
            lines = [l.strip() for l in m_tech.group(1).splitlines() if l.strip()]
            out["procedure_gist"] = " ".join(lines)

        m_plan = re.search(
            r"Post procedure plan:\s*([^\n\r]+(?:\n[^\n\r]+)+?)(?=\n\s*(?:Dr\b|\Z))",
            txt,
            re.IGNORECASE,
        )
        if m_plan and not out["post_op"]:
            lines = [l.strip() for l in m_plan.group(1).splitlines() if l.strip()]
            out["post_op"] = " ".join(lines)

    # 3. Targeted biomarker extraction from discharge records
    combined_dc = "\n".join(dc_texts)
    if combined_dc:
        bio_items = []
        # HBsAg
        m_hbs_pos = re.search(r"HBS\s*AG[^\n\r]*(?:Positive|Reactive|\+ve)", combined_dc, re.IGNORECASE)
        m_hbs_neg = re.search(r"HBS\s*AG[^\n\r]*(?:Negative|Non[- ]Reactive)", combined_dc, re.IGNORECASE)
        if m_hbs_pos:
            bio_items.append("HBsAg: Positive")
        elif m_hbs_neg:
            bio_items.append("HBsAg: Negative")
        elif re.search(r"Hepatitis\s*B\s*(?:Positive|\+ve)", combined_dc, re.IGNORECASE):
            bio_items.append("HBsAg: Positive")

        # AFP value
        m_afp = re.search(r"(?:S\.?\s*)?AFP\s*(?:level|value)?\s*[:\-\s]*([><~]?\s*\d+(?:\.\d+)?(?:\s*(?:ng\/ml|IU\/ml))?)", combined_dc, re.IGNORECASE)
        m_afp_paren = re.search(r"(?:raised\s*)?(?:S\.?\s*)?AFP\s*\(([><~]?\s*\d+[^)]*)\)", combined_dc, re.IGNORECASE)
        if m_afp_paren:
            bio_items.append(f"AFP: {m_afp_paren.group(1).strip()}")
        elif m_afp:
            bio_items.append(f"AFP: {m_afp.group(1).strip()}")

        if bio_items:
            out["biomarkers"] = " | ".join(bio_items)

    return out


def format_clinical_card(ir: int, name: str, age: str, sex: str, procedure: str, date: str) -> str:
    """Format a clean, concise, clinical-first card for Telegram."""
    # Header line: IR 999 — AASIN, 50Y/M
    demo_parts = []
    if age:
        demo_parts.append(f"{age}Y" if not str(age).endswith("Y") else str(age))
    if sex:
        demo_parts.append(sex)
    demo_str = f", {'/'.join(demo_parts)}" if demo_parts else ""

    lines = [f"IR {ir} — {name or 'Name not recorded'}{demo_str}"]

    if procedure:
        lines.append(f"Procedure  : {procedure}")

    # Only show date if recorded
    if date and date.strip() and "not recorded" not in date.lower():
        lines.append(f"Date       : {date}")

    # Clinical details from real documents
    clin = get_clinical_details(ir)

    # Combine Diagnosis and Clinical Profile
    diag_parts = []
    if clin.get("diagnosis"):
        diag_parts.append(clin["diagnosis"])
    if clin.get("clinical_profile") and clin["clinical_profile"] not in diag_parts:
        diag_parts.append(clin["clinical_profile"])

    if diag_parts:
        lines.append(f"\nDiagnosis  : {' | '.join(diag_parts)}")

    if clin.get("history"):
        lines.append(f"History    : {clin['history']}")

    if clin.get("biomarkers"):
        lines.append(f"Biomarkers : {clin['biomarkers']}")

    if clin.get("procedure_gist"):
        lines.append(f"\nOperative Gist:\n{clin['procedure_gist']}")

    if clin.get("post_op"):
        lines.append(f"\nPost-Op Orders:\n{clin['post_op']}")

    return "\n".join(lines)
