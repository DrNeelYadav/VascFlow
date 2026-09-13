import fitz
import re
import json
import os

print("Extracting RGHS packages from rghs_all.json...")
with open("c:/SSO/rghs_all.json", "r", encoding="utf-8") as f:
    raw_rghs = json.load(f)

MASTER_IMPLANTS = {
    "LIP_01": { "implantCode": "LIP_01", "name": "Lipiodol Ultra-Fluid (10ml)", "category": "Lipiodol", "cappedPriceINR": 12500 },
    "MIC_01": { "implantCode": "MIC_01", "name": "Microcatheter 2.7F Progreat/Renegade", "category": "Microcatheter", "cappedPriceINR": 18000 },
    "SEMS_01": { "implantCode": "SEMS_01", "name": "Biliary Uncovered SEMS (10mm x 80mm)", "category": "SEMS", "cappedPriceINR": 38000 },
    "COIL_01": { "implantCode": "COIL_01", "name": "Controlled Detachable Hydrogel Coil", "category": "Coil", "cappedPriceINR": 22000 },
    "COIL_02": { "implantCode": "COIL_02", "name": "Pushable Platinum Fiber Coil", "category": "Coil", "cappedPriceINR": 8500 },
}

rghs_packages = []
for item in raw_rghs:
    code = f"RGHS-{item['code']}"
    name = item["name"].strip()
    nabh_rate = item.get("nabhRate", 0)
    non_nabh_rate = item.get("nonNabhRate", 0)
    
    specialty = "General Interventional / Medical"
    name_lower = name.lower()
    if any(x in name_lower for x in ["angio", "arter", "vascular", "stent", "emboli", "dips", "aort"]):
        specialty = "Interventional Radiology / Vascular"
    elif any(x in name_lower for x in ["biopsy", "fnac"]):
        specialty = "Image-Guided Interventions / Biopsy"
    elif any(x in name_lower for x in ["biliary", "ptbd", "drainage", "cholecyst"]):
        specialty = "Hepatobiliary Interventions"
    elif any(x in name_lower for x in ["nephrostomy", "pcn", "ureter"]):
        specialty = "Uroradiology & Renal Interventions"
    elif any(x in name_lower for x in ["cardiac", "coronary", "echo", "tavi"]):
        specialty = "Cardiology & Cath-Lab"
    elif any(x in name_lower for x in ["ct", "mri", "x-ray", "usg", "ultrasound", "scan"]):
        specialty = "Radiodiagnosis & Imaging"

    implants = []
    if "sems" in name_lower or "biliary stent" in name_lower or item['code'] in ["1308"]:
        implants.append(MASTER_IMPLANTS["SEMS_01"])

    rghs_packages.append({
        "packageCode": code,
        "packageName": name,
        "scheme": "RGHS",
        "specialty": specialty,
        "baseTariffINR": nabh_rate,
        "nonNabhTariffINR": non_nabh_rate,
        "implantsIncluded": len(implants) > 0,
        "authorizedImplants": implants,
        "preAuthRequired": nabh_rate > 5000,
        "requiredDocuments": [
            "RGHS Card / Jan Aadhaar",
            "Doctor Prescription / Admission Slip",
            "Investigation Report & DICOM Film",
            "Patient Photo Verification"
        ]
    })

print(f"Prepared {len(rghs_packages)} RGHS packages.")

print("Parsing MAA Yojana PDF...")
doc = fitz.open("C:/Users/NEEL/Downloads/MAA-Yojana-New-Package-Master-MDP.pdf")
code_pattern = re.compile(r"^([12]\d{3}-[A-Z]{2}\d{3}[A-Z0-9]*(?:RJ)?)$")

maay_packages = []
seen_codes = set()

for page_idx in range(len(doc)):
    page_text = doc[page_idx].get_text()
    lines = [l.strip() for l in page_text.split("\n") if l.strip()]
    
    for idx, line in enumerate(lines):
        m = code_pattern.match(line)
        if m:
            code = m.group(1)
            if code in seen_codes:
                continue
            seen_codes.add(code)
            
            specialty = "General & Specialized Surgery"
            if idx >= 1:
                cand = lines[idx-1]
                if not cand.isdigit() and cand not in ["Secondary", "Tertiary"]:
                    specialty = cand
            if idx >= 2 and specialty in ["Phase 3", "Phase 4", "Phase 1", "Phase 2"]:
                specialty = f"{lines[idx-2]} - {specialty}"

            name = ""
            if idx + 1 < len(lines):
                name = lines[idx+1]
                if "|" in name:
                    name = name.split("|")[0].strip()
                elif idx + 2 < len(lines) and "|" in lines[idx+2]:
                    name = f"{name} {lines[idx+2].split('|')[0].strip()}"

            rate = 0
            for k in range(idx+2, min(idx+8, len(lines))):
                if lines[k].isdigit():
                    rate = int(lines[k])
                    break

            pre_auth = []
            for k in range(idx+4, min(idx+22, len(lines))):
                if "ALL INVESTIGATIONS REPORTS" in lines[k] or "DETAILED DISCHARGE" in lines[k]:
                    break
                if len(lines[k]) > 4 and not lines[k].isdigit() and lines[k] not in ["NO", "YES", "BP", "NO IMPLANT", "NO STRATIFICATION"]:
                    items = [x.strip() for x in lines[k].split(";") if len(x.strip()) > 3]
                    pre_auth.extend(items)

            implants = []
            name_lower = name.lower()
            if "chemoembolization" in name_lower or code in ["2849-IN061A", "2849-IN061B"]:
                implants.extend([MASTER_IMPLANTS["LIP_01"], MASTER_IMPLANTS["MIC_01"]])
                if "Transcatheter Arterial Chemoembolization" not in name:
                    name = "Transcatheter Arterial Chemoembolization (TACE) - " + name
            elif "sems" in name_lower or code in ["2849-IN006A", "2858-IN006A"]:
                implants.append(MASTER_IMPLANTS["SEMS_01"])
                if "Percutaneous Biliary SEMS" not in name:
                    name = "Percutaneous Biliary SEMS Stenting - " + name

            maay_packages.append({
                "packageCode": code,
                "packageName": name or "Specialized Clinical Procedure",
                "scheme": "MAAY",
                "specialty": specialty,
                "baseTariffINR": rate,
                "nonNabhTariffINR": rate,
                "implantsIncluded": len(implants) > 0,
                "authorizedImplants": implants,
                "preAuthRequired": True,
                "requiredDocuments": pre_auth[:4] if pre_auth else [
                    "Jan Aadhaar Card",
                    "Clinical History & Admission Note",
                    "Pre-procedure Diagnostic Imaging (CT/USG/MRI)",
                    "Informed Consent Form"
                ]
            })

print(f"Prepared {len(maay_packages)} MAAY packages.")

all_packages = rghs_packages + maay_packages
output_path = "c:/SSO/packages/features/scheme-billing/src/officialSchemePackages.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(all_packages, f, indent=2)

print(f"Successfully written {len(all_packages)} total packages to {output_path}!")
