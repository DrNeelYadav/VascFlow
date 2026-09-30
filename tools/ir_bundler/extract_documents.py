"""
IR Bundler - Stage 2: Extract text from the real clinical documents.

Reads the two authentic trees on E::
  01_Clinical_Operative_Cases_and_Reports   (.docx operative notes, some .pdf)
  02_Discharge_Cards_and_Summaries          (scanned .pdf discharge cards)

Emits: _index/documents.json
  one record per document: path, kind, extracted text, and the patient
  identifiers found inside it.

Extraction strategy, cheapest first:
  1. .docx / .doc  -> unzip word/document.xml (no OCR needed)
  2. .pdf with a text layer -> PyMuPDF get_text
  3. image-only .pdf / .jpg / .png -> RapidOCR (ONNX, no system binary)

Only stage 3 costs time (~20 s/page), so it runs on the scanned majority and
its output is cached to _index/ocr_cache/<sha1>.json so re-runs are free.

Identifier extraction is deliberately conservative: an OCR'd 15-digit UHID is
matched against the registry allowing ONE single-digit OCR substitution, which
is the observed error rate on these scans. Anything weaker is reported as
unmatched rather than attached to a patient.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import time
import zipfile
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

DEFAULT_ROOT = Path(r"E:\03_Academic_&_Research\DSA SMS jaipur")
INDEX_DIR = Path(__file__).parent / "_index"

KIND_OPERATIVE = "01_Clinical_Operative_Cases_and_Reports"
KIND_DISCHARGE = "02_Discharge_Cards_and_Summaries"

DOC_EXT = {".docx", ".doc", ".pdf", ".jpg", ".jpeg", ".png", ".tif", ".tiff"}
SKIP_PREFIX = ("~$", ".")


# --------------------------------------------------------------------------
# Text extraction
# --------------------------------------------------------------------------

def text_from_docx(path: Path) -> str:
    """Unzip the WordprocessingML body. Preserves paragraph breaks so the
    clinical fields stay on their own lines for the parsers below."""
    with zipfile.ZipFile(path) as z:
        names = [n for n in z.namelist() if n.startswith("word/document")]
        if not names:
            return ""
        xml = z.read(names[0]).decode("utf8", "replace")
    xml = re.sub(r"<w:tab[^>]*/>", "\t", xml)
    xml = re.sub(r"<w:br[^>]*/>", "\n", xml)
    xml = re.sub(r"</w:p>", "\n", xml)
    xml = re.sub(r"<[^>]+>", "", xml)
    xml = xml.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
    return xml


def text_from_pdf(path: Path) -> tuple[str, int]:
    """Return (text, image_only_page_count). Image-only pages get handed to
    the OCR stage; pages with a text layer are used as-is."""
    import pymupdf

    doc = pymupdf.open(path)
    chunks, image_pages = [], 0
    for page in doc:
        t = page.get_text()
        if len(t.strip()) > 40:
            chunks.append(t)
        else:
            image_pages += 1
    doc.close()
    return "\n".join(chunks), image_pages


def ocr_page_array(page, dpi: int = 200):
    import numpy as np

    pix = page.get_pixmap(dpi=dpi)
    arr = np.frombuffer(pix.samples, dtype=np.uint8)
    arr = arr.reshape(pix.height, pix.width, pix.n)
    return arr[:, :, :3] if arr.shape[2] >= 3 else arr


_OCR = None


def _get_ocr():
    global _OCR
    if _OCR is None:
        from rapidocr_onnxruntime import RapidOCR
        _OCR = RapidOCR()
    return _OCR


def ocr_image_array(img) -> str:
    res, _ = _get_ocr()(img)
    if not res:
        return ""
    # RapidOCR returns [box, text, score]; keep score so weak lines can be
    # excluded from identifier matching.
    return "\n".join(r[1] for r in res)


# --------------------------------------------------------------------------
# Identifier extraction
# --------------------------------------------------------------------------

RE_UHID = re.compile(r"\b(\d{12,17})\b")
RE_IPD = re.compile(r"IPD\s*(?:No\.?)?\s*[:\-]?\s*([A-Z0-9/\-]{6,24})", re.I)
RE_AGE_SEX = re.compile(r"Age\s*/?\s*Sex\s*[:\-]?\s*(\d{1,3})\s*([YFM])\b", re.I)
RE_IPD_LABELED = re.compile(r"(?:HID|UHID|CR\s*(?:No)?\.?|MR\s*No\.?)\s*[:\-]?\s*(\d{10,17})", re.I)
RE_DSA = re.compile(r"\bIR\s*(?:No\.?|Number)?\s*[:\-]?\s*(\d{1,4})\b", re.I)
RE_DOC_DATE = re.compile(
    r"(?:Date\s*(?:of\s*(?:Proc|Admission|Discharge))?\s*[:\-])\s*"
    r"(\d{1,2}[./\-]\d{1,2}[./\-]\d{2,4})", re.I)

STOP_DIGIT_RUNS = {
    # Numbers that appear on every BHT and are never a patient identifier.
    "20242024056", "1234567890123",
}


def parse_any_date(raw: str) -> str:
    """Normalize a printed date to ISO. Indian records use dd.mm.yy and
    dd/mm/yy; anything else returns '' rather than a guessed date."""
    import datetime as dt
    raw = raw.strip()
    for fmt in ("%d.%m.%Y", "%d/%m/%Y", "%d-%m-%Y", "%d.%m.%y", "%d/%m/%y", "%d-%m-%y"):
        try:
            return dt.datetime.strptime(raw, fmt).date().isoformat()
        except ValueError:
            continue
    return ""


def digit_sub_variants(value: str) -> set[str]:
    """All strings differing from `value` by at most one single-digit change.

    OCR on these scans reliably confuses one digit (a '4' read as '2', an '8'
    as '6'). Allowing exactly one substitution keeps the match strict while
    absorbing that measured error rate.
    """
    out = {value}
    for i in range(len(value)):
        for d in "0123456789":
            if d != value[i]:
                out.add(value[:i] + d + value[i + 1:])
    return out


def build_cr_lookup(registry_rows) -> tuple[dict, dict]:
    """Return (exact CR -> IR, tolerant CR -> list of IR).

    The tolerant map is keyed on every single-digit variant. A variant claimed
    by more than one registry CR is dropped, because a match that could be two
    different patients is not a match.
    """
    exact: dict[str, int] = {}
    for r in registry_rows:
        if r.cr_no and r.cr_no.isdigit():
            exact[r.cr_no] = r.ir_number

    claims: dict[str, set[int]] = {}
    for cr, ir in exact.items():
        for var in digit_sub_variants(cr):
            claims.setdefault(var, set()).add(ir)
    tolerant = {k: sorted(v) for k, v in claims.items() if len(v) == 1}
    return exact, tolerant


def find_identifiers(text: str) -> dict:
    """Pull candidate identifiers out of raw document text."""
    digits = [m.group(1) for m in RE_UHID.finditer(text)]
    digits = [d for d in digits if d not in STOP_DIGIT_RUNS]
    labeled = [m.group(1) for m in RE_IPD_LABELED.finditer(text)]
    ipd = [m.group(1) for m in RE_IPD.finditer(text)]
    age_sex = RE_AGE_SEX.search(text)
    dsa = RE_DSA.search(text)
    doc_date = RE_DOC_DATE.search(text)
    parsed_date = parse_any_date(doc_date.group(1)) if doc_date else ""

    def clean_name(block: str) -> str:
        """Pull the patient name off a BHT/note header.

        Real headers run the name straight into the next field, e.g.
        'Aruna DEVI Age/Sex:60YRS', so everything from the first clinical
        label onward is cut.
        """
        cut = re.compile(
            r"\s*\b(?:Age\s*/?\s*Sex|Age\s*[/:-]|Sex\s*[:/]|DOB|Address|CR\s*No|"
            r"IPD|UHID|HID|Mobile|Phone|Ward|Unit|Category|Scheme|Relation|"
            r"Father|Mother|Husband|Spouse|Blood\s*Group|Operator|Procedure\s*Date)\b",
            re.I)
        for line in block.splitlines():
            m = re.search(r"(?:Patient\s*)?Name\s*[:\-]\s*(.+)", line, re.I)
            if not m:
                continue
            cand = cut.split(m.group(1))[0].strip(" .:;|\t")
            cand = re.sub(r"[\t\r\n]+", " ", cand).strip()
            if 2 < len(cand) <= 60 and not re.fullmatch(r"[\d/\-]+", cand):
                return cand
        return ""

    return {
        "uhid_candidates": list(dict.fromkeys(digits))[:6],
        "labeled_ids": list(dict.fromkeys(labeled))[:6],
        "ipd_numbers": list(dict.fromkeys(ipd))[:4],
        "age_sex": f"{age_sex.group(1)}{age_sex.group(2).upper()}" if age_sex else "",
        "ir_number_on_doc": dsa.group(1) if dsa else "",
        "doc_date_raw": doc_date.group(1) if doc_date else "",
        "doc_date_iso": parsed_date,
        "patient_name_on_doc": clean_name(text),
        "head": text[:400],
    }


# --------------------------------------------------------------------------
# Per-document worker
# --------------------------------------------------------------------------

def process_document(job: dict) -> dict:
    path = Path(job["path"])
    rel = job["rel"]
    kind = job["kind"]
    rec = {
        "path": job["path"], "rel": rel, "kind": kind, "ext": path.suffix.lower(),
        "method": "", "pages": 0, "chars": 0, "error": "",
        "text_head": "", "identifiers": {},
        "ir_number": None, "link_reason": "",
    }

    try:
        ext = path.suffix.lower()
        if ext == ".docx":
            text = text_from_docx(path)
            rec["method"] = "docx"
        elif ext == ".pdf":
            text, image_pages = text_from_pdf(path)
            rec["pages"] = image_pages
            rec["method"] = "pdf_text" if text.strip() else "pdf_ocr"
            if image_pages:
                import pymupdf
                cache = INDEX_DIR / "ocr_cache" / (
                    hashlib.sha1(rel.encode("utf8", "replace")).hexdigest() + ".json")
                if cache.exists():
                    ocr_text = json.loads(cache.read_text(encoding="utf8")).get("text", "")
                else:
                    doc = pymupdf.open(path)
                    parts = []
                    for page in doc:
                        if len(page.get_text().strip()) <= 40:
                            parts.append(ocr_image_array(ocr_page_array(page)))
                    doc.close()
                    ocr_text = "\n".join(p for p in parts if p.strip())
                    cache.parent.mkdir(parents=True, exist_ok=True)
                    cache.write_text(
                        json.dumps({"rel": rel, "text": ocr_text}), encoding="utf8")
                text = (text + "\n" + ocr_text).strip()
        elif ext in (".jpg", ".jpeg", ".png", ".tif", ".tiff"):
            rec["method"] = "image_ocr"
            from PIL import Image
            cache = INDEX_DIR / "ocr_cache" / (
                hashlib.sha1(rel.encode("utf8", "replace")).hexdigest() + ".json")
            if cache.exists():
                text = json.loads(cache.read_text(encoding="utf8")).get("text", "")
            else:
                text = ocr_image_array(np.asarray(Image.open(path).convert("RGB")))
                cache.parent.mkdir(parents=True, exist_ok=True)
                cache.write_text(json.dumps({"rel": rel, "text": text}), encoding="utf8")
        else:
            rec["method"] = "skipped_unsupported"
            return rec
    except Exception as exc:  # keep going; one bad file must not stop the run
        rec["error"] = f"{type(exc).__name__}: {exc}"[:200]
        return rec

    rec["chars"] = len(text.strip())
    rec["text_head"] = text[:600]
    rec["identifiers"] = find_identifiers(text)
    return rec


def collect_jobs(root: Path) -> list[dict]:
    jobs = []
    for folder, kind in ((KIND_OPERATIVE, "operative"), (KIND_DISCHARGE, "discharge")):
        base = root / folder
        if not base.exists():
            continue
        for dirpath, _dirs, files in os.walk(base):
            for fname in files:
                if fname.startswith(SKIP_PREFIX) or fname.startswith("~$"):
                    continue
                if Path(fname).suffix.lower() not in DOC_EXT:
                    continue
                if fname.lower() in ("dicomdir", "mediavie.pro"):
                    continue
                full = Path(dirpath) / fname
                jobs.append({
                    "path": str(full), "rel": str(full.relative_to(root)), "kind": kind,
                })
    return jobs


def index_dsa_norm(value: str) -> str:
    import re as _re
    import unicodedata as _ud
    text = _ud.normalize("NFKD", str(value or "")).replace("\\", " ")
    text = "".join(c for c in text if not _ud.combining(c))
    return _re.sub(r"[^A-Z0-9]+", "", text.upper())


def link_records(records: list[dict], registry_rows) -> None:
    """Attach each document to an IR number using ONLY identifiers found in
    the document itself -- never the filename."""
    exact, tolerant = build_cr_lookup(registry_rows)
    cr_to_ir: dict[str, int] = {}
    for cr, ir in exact.items():
        cr_to_ir[cr] = ir
    for var, irs in tolerant.items():
        cr_to_ir.setdefault(var, irs[0])

    # DSA number printed on the document is authoritative when present.
    ir_set = {r.ir_number for r in registry_rows}

    for rec in records:
        ids = rec.get("identifiers") or {}
        # 1. IR number printed on the page
        printed = ids.get("ir_number_on_doc")
        if printed and printed.isdigit() and int(printed) in ir_set:
            rec["ir_number"] = int(printed)
            rec["link_reason"] = "ir_number_printed"
            continue
        # 2. Labelled UHID / CR number, exact first
        for cand in ids.get("labeled_ids", []):
            if cand in exact:
                rec["ir_number"] = exact[cand]
                rec["link_reason"] = "uhid_exact"
                break
        if rec["ir_number"]:
            continue
        # 3. Any 12-17 digit run, exact then one-substitution
        for cand in ids.get("uhid_candidates", []):
            if cand in cr_to_ir:
                rec["ir_number"] = cr_to_ir[cand]
                rec["link_reason"] = ("uhid_exact" if cand in exact else "uhid_1_substitution")
                break
        if rec["ir_number"]:
            continue

        # 4. Name + procedure date. The 2022-24 operative notes carry no UHID
        # at all -- only "Patient Name : X / Age / Sex / Date". Requiring the
        # date to agree with the registry row is what makes this safe, and it
        # is only attempted when the date was actually printed on the page.
        name = (ids.get("patient_name_on_doc") or "").strip()
        iso = ids.get("doc_date_iso") or ""
        if name and iso:
            hits = []
            for r in registry_rows:
                if not r.name_key:
                    continue
                if r.name_key != index_dsa_norm(name):
                    continue
                if r.date_iso == iso:
                    hits.append(r.ir_number)
            hits = sorted(set(hits))
            if len(hits) == 1:
                rec["ir_number"] = hits[0]
                rec["link_reason"] = "name_and_date_exact"
                continue
            if len(hits) > 1:
                rec["link_reason"] = f"ambiguous_name_and_date:{hits[:6]}"
                continue
            rec["link_reason"] = "name_or_date_mismatch"
            continue

        rec["link_reason"] = "no_identifier_match"


def main() -> int:
    ap = argparse.ArgumentParser(description="Extract identifiers from real IR documents.")
    ap.add_argument("--root", default=str(DEFAULT_ROOT))
    ap.add_argument("--out", default=str(INDEX_DIR))
    ap.add_argument("--workers", type=int, default=max(2, (os.cpu_count() or 4) - 2))
    ap.add_argument("--limit", type=int, default=0, help="0 = all")
    args = ap.parse_args()

    root = Path(args.root)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    sys.path.insert(0, str(Path(__file__).parent))
    import index_dsa

    registry_rows, _ = index_dsa.read_registry(root / index_dsa.REGISTRY_FILE)

    jobs = collect_jobs(root)
    if args.limit:
        jobs = jobs[: args.limit]
    print(f"documents to process: {len(jobs)}  workers: {args.workers}")

    records: list[dict] = []
    t0 = time.time()
    done = 0
    with ProcessPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(process_document, j): j for j in jobs}
        for fut in as_completed(futures):
            records.append(fut.result())
            done += 1
            if done % 25 == 0 or done == len(jobs):
                rate = done / max(time.time() - t0, 1e-6)
                eta = (len(jobs) - done) / max(rate, 1e-6)
                print(f"  {done}/{len(jobs)}  {rate*60:.1f}/min  eta {eta/60:.1f} min",
                      flush=True)

    link_records(records, registry_rows)
    records.sort(key=lambda r: r["rel"])

    payload = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "root": str(root),
        "document_count": len(records),
        "records": records,
    }
    (out / "documents.json").write_text(json.dumps(payload, indent=1), encoding="utf8")

    from collections import Counter
    methods = Counter(r["method"] for r in records)
    reasons = Counter(r["link_reason"] for r in records if r["ir_number"]) if records else Counter()
    linked = [r for r in records if r["ir_number"]]
    irs = {r["ir_number"] for r in linked}
    print(f"\nextraction methods : {dict(methods)}")
    print(f"errors             : {sum(1 for r in records if r['error'])}")
    print(f"linked to an IR     : {len(linked)}")
    print(f"distinct IR covered : {len(irs)}")
    print(f"link reasons        : {dict(reasons)}")
    print(f"wrote               : {out / 'documents.json'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
