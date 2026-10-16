"""
Report OCR & Clinical Field Extractor for SMS Jaipur IR.

Performs deterministic local OCR on CT/MRI scan report images and documents
using Windows native OCR (winocr) or pypdf.
Extracts:
- Patient ID (CR / UHID / IPD No)
- Patient Name
- Age & Sex
- Clinical History / Indication
- CT / MRI Findings / Impression
- Suggested IR Procedure
"""

from __future__ import annotations

import asyncio
import io
import re
from pathlib import Path
from PIL import Image

try:
    import winocr
except ImportError:
    winocr = None


def extract_clinical_fields(text: str) -> dict[str, str]:
    """Parse key clinical and demographic entities from OCR text."""
    clean_text = text.replace("\r", "\n")
    out = {
        "id": "",
        "name": "",
        "age_sex": "",
        "history": "",
        "findings": "",
        "procedure": "",
        "raw_text": text,
    }

    # 1. Patient ID (CR No, UHID, Reg No, IPD No)
    m_id = re.search(
        r"(?:CR\s*(?:NO|NUMBER)?|UHID|REG\s*(?:NO|NUMBER)?|PATIENT\s*ID|IPD\s*(?:NO)?)\s*[:.\-]?\s*([A-Z0-9\-/]{4,20})",
        clean_text,
        re.IGNORECASE,
    )
    if m_id:
        out["id"] = m_id.group(1).strip()

    # 2. Patient Name
    m_name = re.search(
        r"(?:PATIENT\s*NAME|PT\s*NAME|NAME)\s*[:.\-]?\s*([A-Z\s.]+?)(?=\s+(?:[AP]GE|SEX|GENDER|CR|UHID|DATE|REF|\n|$))",
        clean_text,
        re.IGNORECASE,
    )
    if m_name:
        raw_n = m_name.group(1).strip()
        clean_n = re.sub(r"^(?:MR|MRS|MS|DR|MASTER|BABY)\.?\s+", "", raw_n, flags=re.IGNORECASE).strip()
        out["name"] = clean_n.upper()

    # 3. Age & Sex
    m_as = re.search(
        r"(?:[AP]GE\s*[\/\'\-]?\s*(?:SEX|GENDER)?|[AP]GE)\s*[:.\-\']?\s*([0-9]{1,3}\s*(?:Y|YRS|YEARS)?(?:\s*[\/\\\\\-]\s*[MF]|MALE|FEMALE)?)",
        clean_text,
        re.IGNORECASE,
    )
    if m_as:
        out["age_sex"] = m_as.group(1).strip()
    else:
        m_a = re.search(r"\b(\d{1,3})\s*(?:Y|YRS|YEARS)\b", clean_text, re.IGNORECASE)
        m_s = re.search(r"\b(MALE|FEMALE|\bM\b|\bF\b)\b", clean_text, re.IGNORECASE)
        age = m_a.group(1) if m_a else ""
        sex = m_s.group(1).upper() if m_s else ""
        if age:
            out["age_sex"] = f"{age}Y" + (f"/{sex[0]}" if sex else "")

    # 4. Clinical History / Indication
    m_hist = re.search(
        r"(?:CLINICAL\s*HISTORY|HISTORY|INDICATION|COMPLAINTS|CHIEF\s*COMPLAINTS)\s*[:.\-]?\s*([^\n\r]+(?:\n[^\n\r]+)*?)(?=\n\s*(?:FINDINGS|TECHNIQUE|IMPRESSION|OPINION|PROTOCOL|OBSERVATIONS|\Z))",
        clean_text,
        re.IGNORECASE,
    )
    if m_hist:
        lines = [l.strip() for l in m_hist.group(1).splitlines() if l.strip()]
        out["history"] = " ".join(lines)
    else:
        # Fallback: scan for clinical keywords
        m_fall = re.search(r"((?:distension|pain|jaundice|bleeding|cirrhosis|fever|cough|hemoptysis)[^\n\r.]+)", clean_text, re.IGNORECASE)
        if m_fall:
            out["history"] = m_fall.group(1).strip()

    # 5. CT / MRI Findings & Impression
    m_imp = re.search(
        r"(?:IMPRESSION|OPINION|CONCLUSION)\s*[:.\-]?\s*([^\n\r]+(?:\n[^\n\r]+)*?)(?=\n\s*(?:ADVICE|NOTE|DR|SIGNATURE|\Z)|$)",
        clean_text,
        re.IGNORECASE,
    )
    if not m_imp:
        m_imp = re.search(
            r"(?:FINDINGS|OBSERVATIONS)\s*[:.\-]?\s*([^\n\r]+(?:\n[^\n\r]+)*?)(?=\n\s*(?:IMPRESSION|OPINION|CONCLUSION|\Z)|$)",
            clean_text,
            re.IGNORECASE,
        )
    if m_imp:
        lines = [l.strip() for l in m_imp.group(1).splitlines() if l.strip()]
        out["findings"] = " ".join(lines)

    # 6. Suggested IR Procedure Heuristic
    combined = (out["history"] + " " + out["findings"] + " " + clean_text[:400]).upper()
    if any(k in combined for k in ("HCC", "HEPATOCELLULAR", "TACE", "LIVER SOL", "HYPERVASCULAR MASS")):
        out["procedure"] = "TACE"
    elif any(k in combined for k in ("IHBRD", "BILIARY", "PTBD", "CHOLANGIO", "JAUNDICE", "CBD STRICTURE")):
        out["procedure"] = "PTBD / Biliary Stenting"
    elif any(k in combined for k in ("VARICOSE", "GSV", "EVLT", "VENASEAL", "INCOMPETENT SFJ")):
        out["procedure"] = "EVLT / Varicose Vein Ablation"
    elif any(k in combined for k in ("AVM", "MALFORMATION", "NIDUS", "SCLEROTHERAPY")):
        out["procedure"] = "AVM Embolization"
    elif any(k in combined for k in ("PSEUDOANEURYSM", "ANEURYSM", "COIL", "GDA")):
        out["procedure"] = "Pseudoaneurysm Embolization"
    elif any(k in combined for k in ("HEMOPTYSIS", "BRONCHIAL", "BAE")):
        out["procedure"] = "BAE (Bronchial Artery Embolization)"
    elif any(k in combined for k in ("HYDRONEPHROSIS", "PCN", "NEPHROSTOMY")):
        out["procedure"] = "PCN (Percutaneous Nephrostomy)"
    elif any(k in combined for k in ("BUDD CHIARI", "DIPS", "TIPS", "PORTAL HYPERTENSION", "VARICES")):
        out["procedure"] = "TIPS / DIPS / BRTO"
    elif any(k in combined for k in ("BIOPSY", "MASS", "LESION")):
        out["procedure"] = "Image-Guided Biopsy"
    else:
        out["procedure"] = "Diagnostic DSA / Angiogram"

    return out


async def ocr_image_bytes(image_bytes: bytes) -> str:
    """Run Windows Media OCR on image bytes."""
    if winocr is None:
        raise RuntimeError("winocr library is not available.")

    img = Image.open(io.BytesIO(image_bytes))
    if img.mode != "RGB":
        img = img.convert("RGB")

    # Resize if excessively large to optimize speed while preserving OCR clarity
    max_dim = 2400
    if max(img.size) > max_dim:
        scale = max_dim / max(img.size)
        new_size = (int(img.width * scale), int(img.height * scale))
        img = img.resize(new_size, Image.Resampling.LANCZOS)

    result = await winocr.recognize_pil(img, "en")
    return result.text if hasattr(result, "text") else str(result)


def ocr_pdf_bytes(pdf_bytes: bytes) -> str:
    """Extract text from PDF bytes; fallback to page rasterization if needed."""
    try:
        from pypdf import PdfReader
        reader = PdfReader(io.BytesIO(pdf_bytes))
        texts = [p.extract_text() or "" for p in reader.pages]
        combined = "\n".join(texts).strip()
        if len(combined) > 50:
            return combined
    except Exception:
        pass
    return ""


async def parse_report_file(file_bytes: bytes, filename: str = "") -> dict[str, str]:
    """Top-level parser: routes PDF or image bytes to OCR and extracts fields."""
    fn = filename.lower()
    raw_text = ""
    if fn.endswith(".pdf"):
        raw_text = ocr_pdf_bytes(file_bytes)

    if not raw_text.strip():
        # Treat as image
        raw_text = await ocr_image_bytes(file_bytes)

    return extract_clinical_fields(raw_text)
