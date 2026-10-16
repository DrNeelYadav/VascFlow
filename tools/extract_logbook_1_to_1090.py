"""
SMS Jaipur Cath-Lab Master Logbook OCR & Register Extractor (IR #1 to #1090)

Processes all 58 images from WhatsApp zip:
1. Auto-detects 0, 90, 180, 270 deg orientation
2. Handles 2-page open spreads vs single page
3. Groups OCR text boxes into rows
4. Extracts: IR_No, Date, Patient_Name, HID, Contact_No, Contrast_mL, Radiation_Dose
5. Cross-references against SMS_Jaipur_IR_Master_Analysis.xlsx for official procedures
6. Emits formatted Excel (.xlsx), CSV, and JSON
"""

import os
import sys
import re
import json
import time
from pathlib import Path
import cv2
import numpy as np
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from rapidocr_onnxruntime import RapidOCR

ocr = RapidOCR()

IMAGE_DIR = Path(r"C:\Users\NEEL\Downloads\whatsapp_ir_extracted")
MASTER_EXCEL = Path(r"c:\SSO\SMS_Jaipur_IR_Master_Analysis.xlsx")
OUT_XLSX = Path(r"C:\Users\NEEL\Downloads\SMS_Jaipur_IR_Logbook_1_to_1090.xlsx")
OUT_CSV = Path(r"C:\Users\NEEL\Downloads\SMS_Jaipur_IR_Logbook_1_to_1090.csv")
OUT_JSON = Path(r"c:\SSO\tools\ir_bundler\_index\logbook_1_to_1090.json")

# 1. Load Master Excel Cases for ground-truth cross-referencing
print("Loading existing SMS Master Excel for cross-referencing...")
master_cases = []
if MASTER_EXCEL.exists():
    wb_m = openpyxl.load_workbook(MASTER_EXCEL, read_only=True)
    sheet_m = wb_m.active
    rows_m = list(sheet_m.iter_rows(values_only=True))
    headers_m = [str(h) if h else "" for h in rows_m[0]]
    for r in rows_m[1:]:
        d = dict(zip(headers_m, r))
        master_cases.append(d)
    print(f"Loaded {len(master_cases)} reference cases from Master Excel.")
else:
    print("Warning: Master Excel not found at specified path.")

def find_master_match(name, hid, date_str):
    """Find matching case from official master Excel."""
    clean_hid = re.sub(r'\D', '', str(hid or ''))
    clean_name = re.sub(r'[^A-Z]', '', str(name or '').upper())
    
    # 1. Exact or suffix match on HID (at least 8 digits)
    if len(clean_hid) >= 8:
        for c in master_cases:
            c_hid = re.sub(r'\D', '', str(c.get("Registration_No_HID_CR") or ''))
            if c_hid and (clean_hid in c_hid or c_hid in clean_hid):
                return c
                
    # 2. Match by Name + approximate date
    if len(clean_name) >= 4:
        for c in master_cases:
            c_name = re.sub(r'[^A-Z]', '', str(c.get("Patient_Name") or '').upper())
            if c_name and (clean_name in c_name or c_name in clean_name):
                return c
    return None

def score_orientation(img):
    """Score an orientation based on recognizable register keywords and patterns."""
    h, w = img.shape[:2]
    scale = 900.0 / max(h, w)
    small = cv2.resize(img, (int(w * scale), int(h * scale)))
    res, _ = ocr(small)
    if not res:
        return 0
    score = 0
    keywords = ["NAME", "DATE", "BILL", "CONTRAST", "UNIT", "ML", "DOSE", "MGY", "RAD", "CR", "NO", "DEVI", "SINGH", "KUMAR", "RAM", "LAL", "SHARMA"]
    for _, text, conf in res:
        txt = text.upper()
        if any(k in txt for k in keywords):
            score += 10
        if re.search(r'\d{1,2}/\d{1,2}/\d{2,4}', txt):
            score += 15
        if re.search(r'\d{10,15}', txt):
            score += 20
        if re.search(r'[06-9]\d{9}', txt):
            score += 15
        if conf > 0.8:
            score += 1
    return score

def get_best_orientation(img):
    best_rot = 0
    best_score = -1
    for rot in [0, 90, 180, 270]:
        if rot == 0:
            rotated = img
        elif rot == 90:
            rotated = cv2.rotate(img, cv2.ROTATE_90_CLOCKWISE)
        elif rot == 180:
            rotated = cv2.rotate(img, cv2.ROTATE_180)
        elif rot == 270:
            rotated = cv2.rotate(img, cv2.ROTATE_90_COUNTERCLOCKWISE)
        score = score_orientation(rotated)
        if score > best_score:
            best_score = score
            best_rot = rot
    return best_rot

def cluster_rows(dets):
    """Group bounding boxes by y-coordinate into table rows."""
    if not dets:
        return []
    clean = sorted(dets, key=lambda d: d[0][0][1])
    bands = []
    curr_band = []
    curr_y = None
    for bbox, text, conf in clean:
        y = bbox[0][1]
        x = bbox[0][0]
        # Ignore top keyboard or background noise if text is trivial
        if y < 140 and text.lower() in ("ctrl", "alt", "shift", "fn"):
            continue
        if curr_y is None:
            curr_y = y
            curr_band = [(x, y, text, conf)]
        elif abs(y - curr_y) < 55:
            curr_band.append((x, y, text, conf))
            curr_y = sum(item[1] for item in curr_band) / len(curr_band)
        else:
            bands.append(curr_band)
            curr_band = [(x, y, text, conf)]
            curr_y = y
    if curr_band:
        bands.append(curr_band)
    return bands

def parse_row(row_items, img_name):
    """Parse row items into structured fields."""
    row_sorted = sorted(row_items, key=lambda x: x[0])
    row_text = " ".join(item[2] for item in row_sorted)
    
    # Skip clear header rows
    if any(h in row_text.upper() for h in ["USED CONTRAST", "RADIAHIO DOSE", "RADIATION DOSE", "PT. NAME", "CR NO", "RN. NO", "RECEIVING"]):
        return None

    entry = {
        "ir_no": None,
        "date": "",
        "patient_name": "",
        "age_sex": "",
        "hid": "",
        "contact_no": "",
        "contrast_ml": "",
        "radiation_mgy": "",
        "image_file": img_name,
        "raw_text": row_text
    }

    # 1. Extract IR No (e.g. "1/1", "10/10", "1084", "434")
    m_ir = re.search(r'\b(\d{1,4})\s*(?:/\s*\d{1,4})\b', row_text)
    if m_ir:
        entry["ir_no"] = int(m_ir.group(1))
    else:
        # Check first token
        first_token = row_sorted[0][2]
        m_num = re.match(r'^(\d{1,4})$', first_token)
        if m_num and 1 <= int(m_num.group(1)) <= 1200:
            entry["ir_no"] = int(m_num.group(1))

    # 2. Extract Date (DD/MM/YY or DD/MM/YYYY)
    m_date = re.search(r'\b(\d{1,2}[\./\-]\d{1,2}[\./\-]\d{2,4})\b', row_text)
    if m_date:
        entry["date"] = m_date.group(1).replace(".", "/").replace("-", "/")

    # 3. Extract HID / Registration No (10-15 digits)
    m_hid = re.search(r'\b(\d{10,15})\b', row_text)
    if m_hid:
        entry["hid"] = m_hid.group(1)

    # 4. Extract Contact / Mobile No (10-12 digits starting with 0,6,7,8,9)
    # Exclude the HID if it matched already
    all_num_tokens = re.findall(r'\b(0?[6-9]\d{9}|072\d{8,9}|082\d{8,9})\b', row_text)
    for num in all_num_tokens:
        if num != entry["hid"]:
            entry["contact_no"] = num
            break

    # 5. Extract Contrast Volume (e.g. 10ml, 20ml, 100ml, 160ml)
    m_contrast = re.search(r'\b(\d{1,3})\s*(?:ml|ML|mL)\b', row_text)
    if m_contrast:
        entry["contrast_ml"] = m_contrast.group(1)
    else:
        # Check column position: contrast is typically around middle-right
        for x, y, t, _ in row_sorted:
            if re.match(r'^(10|20|30|40|50|60|70|80|90|100|110|120|130|140|150|160|180|200)$', t):
                entry["contrast_ml"] = t
                break

    # 6. Extract Radiation Dose (e.g. 40.6mGy, 2790mgy, 81.3)
    m_rad = re.search(r'\b(\d+(?:\.\d+)?)\s*(?:mGy|mgy|may|mey)\b', row_text, re.IGNORECASE)
    if m_rad:
        entry["radiation_mgy"] = m_rad.group(1)

    # 7. Extract Age/Sex if written (e.g. "65 yrs F", "24 y M", "60/F")
    m_age = re.search(r'\b(\d{1,2})\s*(?:yrs|yr|y)?\s*([MF])\b', row_text, re.IGNORECASE)
    if m_age:
        entry["age_sex"] = f"{m_age.group(1)} / {m_age.group(2).upper()}"

    # 8. Extract Patient Name
    name_parts = []
    stop_words = {"UNIT", "UNITS", "ML", "MGY", "MAY", "MEY", "CONTRAST", "DOSE", "BILL", "NO", "CR", "DSA"}
    for x, y, t, _ in row_sorted:
        t_clean = re.sub(r'[^A-Za-z\s\./]', '', t).strip()
        t_upper = t_clean.upper()
        if not t_clean or len(t_clean) < 2 or t_upper in stop_words:
            continue
        if re.search(r'\d', t):
            continue
        name_parts.append(t_clean)
        
    if name_parts:
        entry["patient_name"] = " ".join(name_parts[:3])

    return entry

print("\nStarting batch processing across all 58 logbook images...")
all_extracted = []
image_files = sorted(os.listdir(IMAGE_DIR))

start_time = time.time()
for idx, fn in enumerate(image_files):
    if not fn.lower().endswith((".jpg", ".jpeg", ".png")):
        continue
    img_path = IMAGE_DIR / fn
    img = cv2.imread(str(img_path))
    if img is None:
        continue
        
    print(f"[{idx+1}/{len(image_files)}] Processing {fn}...")
    rot = get_best_orientation(img)
    if rot == 90:
        upright = cv2.rotate(img, cv2.ROTATE_90_CLOCKWISE)
    elif rot == 180:
        upright = cv2.rotate(img, cv2.ROTATE_180)
    elif rot == 270:
        upright = cv2.rotate(img, cv2.ROTATE_90_COUNTERCLOCKWISE)
    else:
        upright = img
        
    h, w = upright.shape[:2]
    # Check if 2-page spread (w / h > 1.2)
    pages = []
    if (w / h) > 1.25:
        mid = w // 2
        pages = [("Left", upright[:, :mid]), ("Right", upright[:, mid:])]
    else:
        pages = [("Full", upright)]
        
    img_records = 0
    for page_name, p_img in pages:
        res, _ = ocr(p_img)
        bands = cluster_rows(res)
        for band in bands:
            rec = parse_row(band, f"{fn} ({page_name})")
            if rec and (rec["ir_no"] is not None or rec["hid"] or rec["patient_name"]):
                all_extracted.append(rec)
                img_records += 1
                
    print(f"   -> Found {img_records} patient entries.")

elapsed = time.time() - start_time
print(f"\nProcessing complete in {elapsed:.1f}s! Total raw entries extracted: {len(all_extracted)}")

# Deduplicate and sort by IR Number
print("Cross-referencing and deduplicating entries...")
records_by_ir = {}
unindexed = []

for rec in all_extracted:
    ir = rec["ir_no"]
    if ir is not None and 1 <= ir <= 1200:
        if ir not in records_by_ir:
            records_by_ir[ir] = rec
        else:
            # Merge fields if missing
            existing = records_by_ir[ir]
            for k in ["date", "patient_name", "hid", "contact_no", "contrast_ml", "radiation_mgy"]:
                if not existing[k] and rec[k]:
                    existing[k] = rec[k]
    else:
        unindexed.append(rec)

print(f"Unique IR Numbers successfully indexed: {len(records_by_ir)}")

# Match against Master Excel
final_rows = []
for ir in range(1, 1091):
    rec = records_by_ir.get(ir, {
        "ir_no": ir,
        "date": "",
        "patient_name": "",
        "age_sex": "",
        "hid": "",
        "contact_no": "",
        "contrast_ml": "",
        "radiation_mgy": "",
        "image_file": "",
        "raw_text": ""
    })
    
    # Try cross-reference with official master cases
    matched = find_master_match(rec["patient_name"], rec["hid"], rec["date"])
    proc_name = ""
    diag = ""
    catheter = ""
    embolic = ""
    if matched:
        proc_name = matched.get("Procedure_Name_Exact") or matched.get("Master_Procedure_Category") or ""
        diag = matched.get("Primary_Diagnosis") or matched.get("Clinical_Indication") or ""
        catheter = matched.get("Diagnostic_Catheter") or ""
        embolic = matched.get("Embolic_Agent_Type") or ""
        if not rec["patient_name"] and matched.get("Patient_Name"):
            rec["patient_name"] = matched.get("Patient_Name")
        if not rec["hid"] and matched.get("Registration_No_HID_CR"):
            rec["hid"] = str(matched.get("Registration_No_HID_CR"))
        if not rec["age_sex"] and matched.get("Age_Years"):
            rec["age_sex"] = f"{matched.get('Age_Years')} / {matched.get('Gender') or ''}"
        if not rec["contrast_ml"] and matched.get("Contrast_Volume_mL"):
            rec["contrast_ml"] = str(matched.get("Contrast_Volume_mL"))

    final_rows.append({
        "IR_No": ir,
        "Date": rec["date"],
        "Patient_Name": rec["patient_name"],
        "Age_Sex": rec["age_sex"],
        "HID_CR_No": rec["hid"],
        "Contact_Number": rec["contact_no"],
        "Contrast_Given_mL": rec["contrast_ml"],
        "Radiation_Dose_mGy": rec["radiation_mgy"],
        "Matched_Procedure": proc_name,
        "Primary_Diagnosis": diag,
        "Diagnostic_Hardware": catheter,
        "Embolic_Agent": embolic,
        "Source_Image": rec["image_file"]
    })

# Save JSON
OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
with open(OUT_JSON, "w", encoding="utf-8") as f:
    json.dump(final_rows, f, indent=2, ensure_ascii=False)
print(f"Saved structured JSON database: {OUT_JSON}")

# Save CSV
import csv
with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=list(final_rows[0].keys()))
    writer.writeheader()
    writer.writerows(final_rows)
print(f"Saved CSV spreadsheet: {OUT_CSV}")

# Save Beautiful Formatted Excel
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "SMS_IR_Master_Logbook_1090"

# Header styling
headers = list(final_rows[0].keys())
ws.append(headers)

header_fill = PatternFill(start_color="1A73E8", end_color="1A73E8", fill_type="solid")
header_font = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
border_thin = Side(border_style="thin", color="DADCE0")
box_border = Border(left=border_thin, right=border_thin, top=border_thin, bottom=border_thin)

for col_num in range(1, len(headers) + 1):
    cell = ws.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal="center", vertical="center")
    cell.border = box_border

for r_idx, r_data in enumerate(final_rows, start=2):
    for c_idx, h in enumerate(headers, start=1):
        val = r_data[h]
        cell = ws.cell(row=r_idx, column=c_idx, value=val)
        cell.font = Font(name="Calibri", size=10)
        cell.border = box_border
        if h in ("IR_No", "Date", "Contrast_Given_mL", "Radiation_Dose_mGy"):
            cell.alignment = Alignment(horizontal="center")
        elif h in ("HID_CR_No", "Contact_Number"):
            cell.alignment = Alignment(horizontal="center")
            cell.number_format = '@'  # Text format for phone/HID to preserve leading zeros
        else:
            cell.alignment = Alignment(horizontal="left")

# Auto-adjust column widths
for col in ws.columns:
    max_len = max(len(str(cell.value or '')) for cell in col)
    col_letter = get_column_letter(col[0].column)
    ws.column_dimensions[col_letter].width = max(max_len + 3, 12)

wb.save(OUT_XLSX)
print(f"Saved formatted Excel spreadsheet: {OUT_XLSX}")
print("ALL DONE SUCCESSFULLY!")
