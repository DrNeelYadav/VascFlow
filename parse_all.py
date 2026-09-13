import pypdf
import json
import re

print("[1/3] Parsing Rajasthan 2026 Calendar...")
cal_reader = pypdf.PdfReader(r"C:\Users\NEEL\Downloads\Government calendar 2026 rajasthan.pdf")
cal_text = ""
for i, page in enumerate(cal_reader.pages):
    cal_text += f"\n--- Page {i+1} ---\n" + (page.extract_text() or "")

with open("c:/SSO/calendar_text.txt", "w", encoding="utf-8") as f:
    f.write(cal_text)
print(f"Calendar text saved ({len(cal_text)} chars)")

print("[2/3] Parsing RGHS Code Master...")
rghs_reader = pypdf.PdfReader(r"C:\Users\NEEL\Downloads\RGHS_PACKAGE_CODE_MASTER_07_01_2025_250208_135048.pdf")
rghs_items = []
for page in rghs_reader.pages:
    text = page.extract_text() or ""
    lines = text.split("\n")
    for line in lines:
        # Match "code description nabh non-nabh"
        m = re.match(r"^(\d+)\s+(.+?)\s+(\d+)\s+(\d+)$", line.strip())
        if m:
            rghs_items.append({
                "code": m.group(1),
                "name": m.group(2).strip(),
                "nabhRate": int(m.group(3)),
                "nonNabhRate": int(m.group(4))
            })

with open("c:/SSO/rghs_all.json", "w", encoding="utf-8") as f:
    json.dump(rghs_items, f, indent=2)
print(f"RGHS parsed: {len(rghs_items)} items")

print("[3/3] Parsing MAAY Package Master...")
maay_reader = pypdf.PdfReader(r"C:\Users\NEEL\Downloads\MAA-Yojana-New-Package-Master-MDP.pdf")
print(f"Total MAAY pages: {len(maay_reader.pages)}")

# Keywords for IR & relevant surgical/intervention procedures
ir_keywords = [
    r"2849-", r"1849-", r"Interventional Radiology", r"TACE", r"Embolis", r"Emboliz", 
    r"PTBD", r"Nephrostomy", r"Biopsy", r"Angioplasty", r"BRTO", r"PARTO", r"TJLB", 
    r"HVPG", r"Permacath", r"Fistuloplasty", r"SEMS", r"Radiofrequency Ablation", 
    r"Microwave Ablation", r"Bleomycin", r"Varicose", r"IVC Filter", r"Thrombolysis",
    r"Thrombectomy", r"Drainage", r"Cholecystostomy", r"Stenting", r"Sclerotherapy"
]

ir_regex = re.compile("|".join(ir_keywords), re.IGNORECASE)
maay_matches = []

for idx, page in enumerate(maay_reader.pages):
    text = page.extract_text() or ""
    if ir_regex.search(text):
        maay_matches.append({
            "page": idx + 1,
            "text": text
        })

with open("c:/SSO/maay_ir_matches.json", "w", encoding="utf-8") as f:
    json.dump(maay_matches, f, indent=2)

print(f"MAAY IR Matching Pages: {len(maay_matches)}")
print("All extraction completed!")
