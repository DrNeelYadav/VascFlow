"""
Reconciliation & Discrepancy Audit:
Grounds the SMS Jaipur Cath-Lab Logbook (IR #1 to #1090) in the DSA Book
and audits against the Gold Standard Handwritten OCR Logbook Photos.
"""

import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
import json
import re
from pathlib import Path

# Paths
GT_PATH = Path(r"D:\01_Clinical_IR_Registry_&_Cases\03_Master_Census_&_Logbooks\SMS_Jaipur_IR_Master_Ground_Truth_1089.xlsx")
DSA_PATH = Path(r"D:\01_Clinical_IR_Registry_&_Cases\03_Master_Census_&_Logbooks\DSA DATA SHEET.xlsx")
OUT_XLSX = Path(r"C:\Users\NEEL\Downloads\SMS_Jaipur_IR_Master_Audited_GoldStandard_1090.xlsx")
OUT_CSV = Path(r"C:\Users\NEEL\Downloads\SMS_Jaipur_IR_Master_Audited_GoldStandard_1090.csv")
OUT_JSON = Path(r"c:\SSO\tools\ir_bundler\_index\logbook_goldstandard_audited_1090.json")

print("1. Loading baseline records from DSA Book (Ground Truth 1089)...")
wb_gt = openpyxl.load_workbook(GT_PATH, data_only=True)
ws_gt = wb_gt.active

book_records = {}
for r in ws_gt.iter_rows(values_only=True):
    if r[0] and str(r[0]).isdigit():
        ir = int(r[0])
        book_records[ir] = {
            "ir_no": ir,
            "name": str(r[1] or '').strip(),
            "date": str(r[2] or '').strip(),
            "age": str(r[3] or '').strip(),
            "gender": str(r[4] or '').strip(),
            "ward_unit": str(r[5] or '').strip(),
            "uhid": str(r[6] or '').strip() if r[6] is not None and str(r[6]).lower() != 'none' else '',
            "mobile": str(r[7] or '').strip() if r[7] is not None and str(r[7]).lower() != 'none' else '',
            "category": str(r[9] or '').strip() if r[9] is not None else '',
            "proc": str(r[10] or '').strip() if r[10] is not None else '',
            "diag": str(r[11] or '').strip() if r[11] is not None else '',
        }

print(f"Loaded {len(book_records)} baseline records from Ground Truth 1089.")

# 2. Enrich from DSA DATA SHEET (all years)
print("2. Enriching from DSA DATA SHEET...")
wb_dsa = openpyxl.load_workbook(DSA_PATH, data_only=True)
for sname in ["2022-23-24", "2025", "2026"]:
    if sname not in wb_dsa.sheetnames:
        continue
    ws = wb_dsa[sname]
    rows = list(ws.iter_rows(values_only=True))
    headers = [str(h or '').strip().upper() for h in rows[0]]
    dsa_col = next((i for i, h in enumerate(headers) if "DSA NO" in h), None)
    cr_col = next((i for i, h in enumerate(headers) if "CR NO" in h), None)
    mob_col = next((i for i, h in enumerate(headers) if "MOBILE" in h or "PHONE" in h), None)
    dose_col = next((i for i, h in enumerate(headers) if "DOSE" in h), None)
    
    for r in rows[1:]:
        if not r or dsa_col is None or r[dsa_col] is None:
            continue
        val = str(r[dsa_col]).strip()
        if val.isdigit():
            ir = int(val)
            if ir in book_records:
                b = book_records[ir]
                if not b["uhid"] and cr_col is not None and r[cr_col]:
                    b["uhid"] = str(r[cr_col]).strip()
                if not b["mobile"] and mob_col is not None and r[mob_col]:
                    b["mobile"] = str(r[mob_col]).strip()
                if dose_col is not None and r[dose_col] and str(r[dose_col]).strip():
                    b["dose_book"] = str(r[dose_col]).strip()

# 3. Gold Standard Verified Handwriting Extractions (from visual audit)
# Specific verified mappings from actual ledger photographs
GOLD_STANDARD_VERIFIED = {
    # Image 57: July 2022
    1: {"name": "Bhawana Mahawar", "date": "21/07/22", "uhid": "1012209177511", "contact": "742862", "contrast": "40", "dose": "40.6", "img": "Image 57"},
    2: {"name": "Kamla devi", "date": "21/07/22", "uhid": "101220923962", "contact": "072200744749", "contrast": "60", "dose": "2790", "img": "Image 57"},
    3: {"name": "Pushpendra S/o Ratan lal", "date": "22/07/22", "uhid": "1012206394325", "contact": "072200749619", "contrast": "20", "dose": "81.3", "img": "Image 57"},
    4: {"name": "Rohit", "date": "22/07/22", "uhid": "1012211037905", "contact": "072200752413", "contrast": "60", "dose": "1118", "img": "Image 57"},
    5: {"name": "Neny / Vijay ram", "date": "23/07/22", "uhid": "1012241511950", "contact": "0722007755722", "contrast": "100", "dose": "1405", "img": "Image 57"},
    6: {"name": "Mushkan Khan D/o Sakir Khan", "date": "23/07/22", "uhid": "1012211659621", "contact": "072200758432", "contrast": "160", "dose": "1089", "img": "Image 57"},
    7: {"name": "Hamid Khan S/o Nizal mohamad", "date": "26/07/22", "uhid": "1012211658161", "contact": "072200722671", "contrast": "120", "dose": "933", "img": "Image 57"},
    8: {"name": "Sagar Brijwani", "date": "26/07/22", "uhid": "1012211139643", "contact": "072200775420", "contrast": "20", "dose": "0", "img": "Image 57"},

    # Image 58: July - August 2022
    9: {"name": "Kavita", "date": "26/07/22", "uhid": "1012211325145", "contact": "072200775090", "contrast": "20", "dose": "280.1", "img": "Image 58"},
    10: {"name": "Laxmi devi S/o Mukesh Chand", "date": "02/08/22", "uhid": "1012211974517", "contact": "082200821035", "contrast": "160", "dose": "2758", "img": "Image 58"},
    11: {"name": "Rajesh S/o Hari Singh", "date": "03/08/22", "uhid": "1012211585228", "contact": "082200828696", "contrast": "160", "dose": "912", "img": "Image 58"},
    12: {"name": "Dimple Saini W/o Chotu Lal", "date": "04/08/22", "uhid": "102212053688", "contact": "082200836501", "contrast": "40", "dose": "10.3", "img": "Image 58"},
    13: {"name": "Kishan S/o Vikas Prajapati", "date": "04/08/22", "uhid": "101221304273", "contact": "082200838010", "contrast": "120", "dose": "110", "img": "Image 58"},
    14: {"name": "Kishan", "date": "04/08/22", "uhid": "1012211965951", "contact": "082200842387", "contrast": "150", "dose": "632", "img": "Image 58"},
    15: {"name": "Harsh S/o Shiv Narayan", "date": "06/08/22", "uhid": "1018312053831", "contact": "082200850738", "contrast": "150", "dose": "1227", "img": "Image 58"},
    16: {"name": "Mahesh S/o Ram Kumar", "date": "10/08/22", "uhid": "1012212285261", "contact": "082200871299", "contrast": "100", "dose": "76.7", "img": "Image 58"},
    17: {"name": "Jagnaram S/o Amar Chand", "date": "23/08/22", "uhid": "1012209056431", "contact": "082200945548", "contrast": "10", "dose": "7.53", "img": "Image 58"},
    18: {"name": "Divya D/o Naveen Agarwal", "date": "23/08/22", "uhid": "1012209056432", "contact": "082200945549", "contrast": "10", "dose": "3.16", "img": "Image 58"},
    19: {"name": "Khushboo D/o Vishnu", "date": "25/08/22", "uhid": "1012213276699", "contact": "082200957444", "contrast": "50", "dose": "500", "img": "Image 58"},
    20: {"name": "Monika D/o Babulal", "date": "26/08/22", "uhid": "1012213294153", "contact": "082200967354", "contrast": "100", "dose": "1605", "img": "Image 58"},
    21: {"name": "Shakuntala", "date": "27/08/22", "uhid": "1012213347979", "contact": "082200972749", "contrast": "100", "dose": "280", "img": "Image 58"},

    # Image 56: August - September 2022
    22: {"name": "Khushboo", "date": "27/08/22", "uhid": "1012213276699", "contact": "082200957444", "contrast": "90", "dose": "584", "img": "Image 56"},
    23: {"name": "Ritika", "date": "27/08/22", "uhid": "1012211698316", "contact": "082200983539", "contrast": "50", "dose": "1607", "img": "Image 56"},
    24: {"name": "Balram Koli", "date": "30/08/22", "uhid": "1012214016895", "contact": "082200995308", "contrast": "10", "dose": "8.69", "img": "Image 56"},
    25: {"name": "Ramjilal Gurjar", "date": "31/08/22", "uhid": "1012214023671", "contact": "082201001759", "contrast": "200", "dose": "4093", "img": "Image 56"},
    26: {"name": "Priyanshu", "date": "02/09/22", "uhid": "1012214157324", "contact": "092201013057", "contrast": "200", "dose": "116", "img": "Image 56"},
    27: {"name": "Mahesh", "date": "03/09/22", "uhid": "1012213892217", "contact": "092201019972", "contrast": "20", "dose": "3.95", "img": "Image 56"},
    28: {"name": "Rameshwar", "date": "03/09/22", "uhid": "10122141013152", "contact": "092201021175", "contrast": "30", "dose": "1.85", "img": "Image 56"},
    29: {"name": "Udalal", "date": "05/09/22", "uhid": "1012214079844", "contact": "092201035918", "contrast": "200", "dose": "3208", "img": "Image 56"},
    30: {"name": "Manju Kumari", "date": "08/09/22", "uhid": "1012214406791", "contact": "092201043186", "contrast": "150", "dose": "3083", "img": "Image 56"},
    31: {"name": "Khem Chand", "date": "13/09/22", "uhid": "1012214751676", "contact": "092201082664", "contrast": "150", "dose": "3870", "img": "Image 56"},
    32: {"name": "Kavita", "date": "15/09/22", "uhid": "1012215042837", "contact": "092201101969", "contrast": "20", "dose": "26.1", "img": "Image 56"},
    33: {"name": "Khushboo", "date": "16/09/22", "uhid": "1012214935742", "contact": "092201106767", "contrast": "10", "dose": "50", "img": "Image 56"},
    34: {"name": "Sachin", "date": "16/09/22", "uhid": "1012215112162", "contact": "092201108504", "contrast": "20", "dose": "11.3", "img": "Image 56"},
    35: {"name": "Godawari", "date": "19/09/22", "uhid": "10122124551", "contact": "092201124405", "contrast": "150", "dose": "2687", "img": "Image 56"},
    36: {"name": "Bina Devi", "date": "21/09/22", "uhid": "1012213942940", "contact": "092201139025", "contrast": "150", "dose": "3292", "img": "Image 56"},
    37: {"name": "Samant", "date": "24/09/22", "uhid": "1012215640762", "contact": "092201161646", "contrast": "150", "dose": "3253", "img": "Image 56"},

    # Image 29: Mid 2024 (IR 434 to 459)
    434: {"name": "Gopi Devi", "date": "13/06/24", "uhid": "2912221414124420", "contact": "382436133", "contrast": "50", "dose": "2670", "img": "Image 29"},
    435: {"name": "Sohan Lal Yadav", "date": "14/06/24", "uhid": "68102013622032", "contact": "382384319", "contrast": "30", "dose": "2640", "img": "Image 29"},
    436: {"name": "Kaluwa Ram", "date": "14/06/24", "uhid": "010124190704448", "contact": "382905301", "contrast": "80", "dose": "2560", "img": "Image 29"},
    437: {"name": "Kapil", "date": "14/06/24", "uhid": "140524207526076", "contact": "382994546", "contrast": "0", "dose": "2560", "img": "Image 29"},
    438: {"name": "Sumit", "date": "15/06/24", "uhid": "230823173529511", "contact": "38332475", "contrast": "30", "dose": "2530", "img": "Image 29"},
    439: {"name": "Dhanesh", "date": "18/06/24", "uhid": "120224195665759", "contact": "383821016", "contrast": "100", "dose": "2430", "img": "Image 29"},
    440: {"name": "Sukhram Gurjar", "date": "20/06/24", "uhid": "170624211365837", "contact": "384654420", "contrast": "50", "dose": "2380", "img": "Image 29"},
    441: {"name": "Amit Rathore", "date": "21/06/24", "uhid": "140624211082757", "contact": "385104489", "contrast": "30", "dose": "2350", "img": "Image 29"},
    442: {"name": "Teena", "date": "22/01/24", "uhid": "280624211956572", "contact": "385260446", "contrast": "110", "dose": "2240", "img": "Image 29"},
    443: {"name": "Jitendra Gurjar", "date": "24/01/24", "uhid": "1703211035832707", "contact": "385696692", "contrast": "0", "dose": "2240", "img": "Image 29"},
    444: {"name": "Amit Rathore", "date": "24/01/24", "uhid": "010624", "contact": "386187410", "contrast": "0", "dose": "2240", "img": "Image 29"},
    445: {"name": "Phul Chand Kumawat", "date": "24/01/24", "uhid": "250624212272617", "contact": "388424134", "contrast": "100", "dose": "2140", "img": "Image 29"},
    446: {"name": "Rajkumar Atal", "date": "24/01/24", "uhid": "19022131170458", "contact": "388424134", "contrast": "0", "dose": "2140", "img": "Image 29"},
    447: {"name": "Anoop Singh", "date": "27/01/24", "uhid": "260624212482728", "contact": "389447349", "contrast": "150", "dose": "1990", "img": "Image 29"},
    448: {"name": "Ashwani Soni", "date": "27/01/24", "uhid": "090223159294372", "contact": "389669548", "contrast": "10", "dose": "1980", "img": "Image 29"},
    449: {"name": "Taufeeq", "date": "01/07/24", "uhid": "010424202315646", "contact": "389812399", "contrast": "30", "dose": "1950", "img": "Image 29"},
    450: {"name": "Uday Singh", "date": "02/07/24", "uhid": "040724213333684", "contact": "390875767", "contrast": "50", "dose": "1900", "img": "Image 29"},
    451: {"name": "Ganga", "date": "04/07/24", "uhid": "160724214008677", "contact": "391095325", "contrast": "210", "dose": "1690", "img": "Image 29"},
    452: {"name": "Vishnu Mahawar", "date": "04/07/24", "uhid": "300524209446881", "contact": "39193880", "contrast": "50", "dose": "1640", "img": "Image 29"},
    453: {"name": "Omprakash", "date": "04/07/24", "uhid": "250624212287395", "contact": "393245619", "contrast": "0", "dose": "1640", "img": "Image 29"},
    454: {"name": "Mandeep", "date": "06/07/24", "uhid": "160724214900513", "contact": "394722427", "contrast": "40", "dose": "1600", "img": "Image 29"},
    455: {"name": "Rukmoni Devi", "date": "07/07/24", "uhid": "120623163425945", "contact": "395511317", "contrast": "200", "dose": "1400", "img": "Image 29"},
    456: {"name": "Sachin Kumar", "date": "07/07/24", "uhid": "240724215833376", "contact": "396374878", "contrast": "100", "dose": "1300", "img": "Image 29"},
    457: {"name": "Betal", "date": "08/07/24", "uhid": "281021020510337", "contact": "396626707", "contrast": "50", "dose": "1250", "img": "Image 29"},
    458: {"name": "Sushil Kumar", "date": "08/07/24", "uhid": "180724215042051", "contact": "397103533", "contrast": "30", "dose": "1220", "img": "Image 29"},
    459: {"name": "Krishan", "date": "09/07/24", "uhid": "0507242134705561220", "contact": "397220759", "contrast": "0", "dose": "1220", "img": "Image 29"},

    # Image 02: September 2026 (IR 1065 to 1083)
    1065: {"name": "Hemlata", "date": "12/09/26", "uhid": "41024225764793", "contact": "714862132", "contrast": "50", "dose": "1900", "img": "Image 02"},
    1066: {"name": "Himani Bansal", "date": "12/09/26", "uhid": "50224194613817", "contact": "714918077", "contrast": "70", "dose": "1830", "img": "Image 02"},
    1067: {"name": "Neelam Dabani", "date": "12/09/26", "uhid": "250723169033137", "contact": "71491907", "contrast": "20", "dose": "1820", "img": "Image 02"},
    1068: {"name": "Vijay Singh", "date": "14/09/26", "uhid": "30822119883883", "contact": "715922699", "contrast": "180", "dose": "1670", "img": "Image 02"},
    1069: {"name": "Pappu Sahariya", "date": "14/09/26", "uhid": "50224194695113", "contact": "716013524", "contrast": "160", "dose": "1510", "img": "Image 02"},
    1070: {"name": "Rajendra Prasad", "date": "15/09/26", "uhid": "1109220090118428", "contact": "7165549262", "contrast": "20", "dose": "1490", "img": "Image 02"},
    1071: {"name": "Kamal", "date": "15/09/26", "uhid": "250325246946777", "contact": "716657432", "contrast": "80", "dose": "1410", "img": "Image 02"},
    1072: {"name": "Rajkumar", "date": "16/09/26", "uhid": "210726298011846", "contact": "717297899", "contrast": "20", "dose": "1390", "img": "Image 02"},
    1073: {"name": "Raju Devi", "date": "18/09/26", "uhid": "210422095254988", "contact": "717323409", "contrast": "110", "dose": "1280", "img": "Image 02"},
    1074: {"name": "Laxmi Devi", "date": "18/09/26", "uhid": "11022128913191", "contact": "718383408", "contrast": "150", "dose": "1130", "img": "Image 02"},
    1075: {"name": "Dilkesh Saini", "date": "18/09/26", "uhid": "141022130952048", "contact": "718549707", "contrast": "50", "dose": "1080", "img": "Image 02"},
    1076: {"name": "Suman", "date": "19/09/26", "uhid": "220724215607022", "contact": "718782425", "contrast": "20", "dose": "1060", "img": "Image 02"},
    1077: {"name": "Santosh", "date": "19/09/26", "uhid": "100623163248022", "contact": "719129778", "contrast": "20", "dose": "1040", "img": "Image 02"},
    1078: {"name": "Babu Lal", "date": "22/09/26", "uhid": "080423155213004", "contact": "720756900", "contrast": "10", "dose": "1030", "img": "Image 02"},
    1079: {"name": "Shashi Gupta", "date": "23/09/26", "uhid": "030221115357299", "contact": "720981298", "contrast": "40", "dose": "990", "img": "Image 02"},
    1080: {"name": "Choti Devi", "date": "23/09/26", "uhid": "30012682868170", "contact": "721359475", "contrast": "80", "dose": "910", "img": "Image 02"},
    1081: {"name": "Divesh Sharma", "date": "24/09/26", "uhid": "210726283033732", "contact": "721650770", "contrast": "120", "dose": "790", "img": "Image 02"},
    1082: {"name": "Manoj Kumar", "date": "24/09/26", "uhid": "020526291280888", "contact": "772077192", "contrast": "120", "dose": "670", "img": "Image 02"},
    1083: {"name": "Mahesh Chand", "date": "25/09/26", "uhid": "180324200374192", "contact": "772077192", "contrast": "120", "dose": "670", "img": "Image 02"},

    # Image 01: September - October 2026 (IR 1084 to 1090)
    1084: {"name": "Pappu Sharma", "date": "26/09/26", "uhid": "100622112377120", "contact": "723360180", "contrast": "10", "dose": "660", "img": "Image 01"},
    1085: {"name": "Gopal Lal Meena", "date": "28/09/26", "uhid": "181122135465552", "contact": "72369365", "contrast": "110", "dose": "550", "img": "Image 01"},
    1086: {"name": "Vimlesh", "date": "28/09/26", "uhid": "220822122540181", "contact": "72422697", "contrast": "20", "dose": "530", "img": "Image 01"},
    1087: {"name": "Uma Agarwal", "date": "29/09/26", "uhid": "250522085431608", "contact": "72458768", "contrast": "30", "dose": "500", "img": "Image 01"},
    1088: {"name": "Ramgopal", "date": "30/09/26", "uhid": "250622114416488", "contact": "725451800", "contrast": "200", "dose": "300", "img": "Image 01"},
    1089: {"name": "Sachin Kr. Parewa", "date": "01/10/26", "uhid": "61222138040384", "contact": "725451800", "contrast": "100", "dose": "200", "img": "Image 01"},
    1090: {"name": "Shivika", "date": "01/10/26", "uhid": "140223147568818", "contact": "72539872", "contrast": "20", "dose": "180", "img": "Image 01"},
}

def clean_str(s):
    return re.sub(r'[^A-Z0-9]', '', str(s or '').upper())

def check_discrepancy(book_val, ocr_val, kind="name"):
    b_c = clean_str(book_val)
    o_c = clean_str(ocr_val)
    if not o_c:
        return "PENDING_OCR_AUDIT"
    if not b_c:
        return "NEW_FROM_OCR_IMAGE"
    if b_c == o_c:
        return "EXACT_MATCH"
    if kind == "name":
        # Check substring (e.g. father relation added in OCR)
        if b_c in o_c or o_c in b_c:
            return "MATCH_WITH_RELATION_EXTENDED"
        return f"DISCREPANCY: Book='{book_val}' vs OCR='{ocr_val}'"
    elif kind == "uhid":
        if b_c in o_c or o_c in b_c:
            return "MATCH_PREFIX_SUFFIX"
        return f"DISCREPANCY: Book='{book_val}' vs OCR='{ocr_val}'"
    elif kind == "contact":
        if b_c in o_c or o_c in b_c:
            return "MATCH"
        return f"DISCREPANCY: Book='{book_val}' vs OCR='{ocr_val}'"
    return "UNKNOWN"

final_audited = []
for ir in range(1, 1091):
    b = book_records.get(ir, {
        "ir_no": ir, "name": "", "date": "", "age": "", "gender": "",
        "ward_unit": "", "uhid": "", "mobile": "", "category": "",
        "proc": "", "diag": ""
    })
    
    ocr = GOLD_STANDARD_VERIFIED.get(ir, {})
    
    ocr_name = ocr.get("name", "")
    ocr_date = ocr.get("date", "")
    ocr_uhid = ocr.get("uhid", "")
    ocr_contact = ocr.get("contact", "")
    ocr_contrast = ocr.get("contrast", "")
    ocr_dose = ocr.get("dose", "")
    source_img = ocr.get("img", "")
    
    # Run discrepancy checks
    name_audit = check_discrepancy(b["name"], ocr_name, "name")
    uhid_audit = check_discrepancy(b["uhid"], ocr_uhid, "uhid")
    contact_audit = check_discrepancy(b["mobile"], ocr_contact, "contact")
    
    # Priority for final master view: OCR is gold standard when present!
    final_name = ocr_name if ocr_name else b["name"]
    final_uhid = ocr_uhid if ocr_uhid else b["uhid"]
    final_contact = ocr_contact if ocr_contact else b["mobile"]
    final_date = ocr_date if ocr_date else b["date"]
    
    final_audited.append({
        "IR_No": ir,
        "Procedure_Date": final_date,
        "Patient_Name_GoldStandard": final_name,
        "Patient_Name_DSA_Book": b["name"],
        "Name_Audit_Status": name_audit,
        "UHID_GoldStandard": final_uhid,
        "UHID_DSA_Book": b["uhid"],
        "UHID_Audit_Status": uhid_audit,
        "Contact_Number_GoldStandard": final_contact,
        "Mobile_Number_DSA_Book": b["mobile"],
        "Contact_Audit_Status": contact_audit,
        "Contrast_Volume_Given_mL": ocr_contrast,
        "Radiation_Dose_mGy": ocr_dose,
        "Procedure_From_DSA_Book": b["proc"],
        "Diagnosis_From_DSA_Book": b["diag"],
        "Age_Gender": f"{b['age']} / {b['gender']}".strip(" /"),
        "Ward_Unit": b["ward_unit"],
        "Source_Photograph": source_img
    })

# 4. Save JSON
OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
with open(OUT_JSON, "w", encoding="utf-8") as f:
    json.dump(final_audited, f, indent=2, ensure_ascii=False)
print(f"Saved JSON: {OUT_JSON}")

# 5. Save CSV
import csv
with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=list(final_audited[0].keys()))
    writer.writeheader()
    writer.writerows(final_audited)
print(f"Saved CSV: {OUT_CSV}")

# 6. Save Formatted Excel
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "IR_Logbook_Audited_1090"

headers = list(final_audited[0].keys())
ws.append(headers)

# Styling
header_fill = PatternFill(start_color="0D47A1", end_color="0D47A1", fill_type="solid")
header_font = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
border_thin = Side(border_style="thin", color="DADCE0")
box_border = Border(left=border_thin, right=border_thin, top=border_thin, bottom=border_thin)

fill_match = PatternFill(start_color="E6F4EA", end_color="E6F4EA", fill_type="solid") # light green
fill_disc = PatternFill(start_color="FCE8E6", end_color="FCE8E6", fill_type="solid")  # light red
fill_new = PatternFill(start_color="FEF7E0", end_color="FEF7E0", fill_type="solid")   # light yellow

for col_num in range(1, len(headers) + 1):
    cell = ws.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    cell.border = box_border

for r_idx, r_data in enumerate(final_audited, start=2):
    for c_idx, h in enumerate(headers, start=1):
        val = r_data[h]
        cell = ws.cell(row=r_idx, column=c_idx, value=val)
        cell.font = Font(name="Calibri", size=10)
        cell.border = box_border
        
        # Center align codes, numbers, dates
        if h in ("IR_No", "Procedure_Date", "Contrast_Volume_Given_mL", "Radiation_Dose_mGy", "Age_Gender"):
            cell.alignment = Alignment(horizontal="center")
        elif h in ("UHID_GoldStandard", "UHID_DSA_Book", "Contact_Number_GoldStandard", "Mobile_Number_DSA_Book"):
            cell.alignment = Alignment(horizontal="center")
            cell.number_format = '@'
        else:
            cell.alignment = Alignment(horizontal="left")
            
        # Color coding audit columns
        if "Audit_Status" in h:
            if "EXACT_MATCH" in str(val) or "MATCH" in str(val):
                cell.fill = fill_match
            elif "DISCREPANCY" in str(val):
                cell.fill = fill_disc
            elif "NEW" in str(val):
                cell.fill = fill_new

for col in ws.columns:
    max_len = max(len(str(cell.value or '')) for cell in col)
    col_letter = get_column_letter(col[0].column)
    ws.column_dimensions[col_letter].width = min(max(max_len + 3, 12), 40)

wb.save(OUT_XLSX)
print(f"Saved Beautiful Audited Master Excel: {OUT_XLSX}")
print("RECONCILIATION COMPLETE!")
