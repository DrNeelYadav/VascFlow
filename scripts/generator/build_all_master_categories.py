# -*- coding: utf-8 -*-
"""
Master Interventional Radiology Catalog Builder
Generates Category 03 through Category 22 and master index.ts for EndoFlow.
Strictly complies with Rajasthan MAAY / RGHS naming and SMS Medical College protocols.
"""

import os
import json

BASE_DIR = r"c:\SSO\apps\web-app\app\lib\masterCatalog"

def escape_ts(s: str) -> str:
    if not isinstance(s, str):
        return str(s)
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('`', '\\`').replace('${', '\\${')

def serialize_proc(p: dict) -> str:
    immo = p.get('postOpCare', {})
    meds_str = json.dumps(immo.get('medications', []))
    red_str = json.dumps(immo.get('redFlags', []))
    anat_str = json.dumps(p.get('targetAnatomy', []))
    
    micro = f"\n    microcatheterSystem: '{escape_ts(p['microcatheterSystem'])}'," if p.get('microcatheterSystem') else ""
    embolic = f"\n    embolicOrImplants: '{escape_ts(p['embolicOrImplants'])}'," if p.get('embolicOrImplants') else ""
    calc = f"\n    calculatorId: '{escape_ts(p['calculatorId'])}'," if p.get('calculatorId') else ""
    req_img = f"\n      requiredImaging: '{escape_ts(immo['requiredImaging'])}'," if immo.get('requiredImaging') else ""
    tariff = f"\n      tariffInr: {p['maayRghsCompatibility']['tariffInr']}," if p['maayRghsCompatibility'].get('tariffInr') else ""

    return f"""  {{
    id: '{p['id']}',
    categoryNumber: {p['categoryNumber']},
    categoryName: '{escape_ts(p['categoryName'])}',
    title: '{escape_ts(p['title'])}',
    maayRghsCompatibility: {{
      schemeName: '{p['maayRghsCompatibility']['schemeName']}',
      packageName: '{escape_ts(p['maayRghsCompatibility']['packageName'])}',
      packageCode: '{escape_ts(p['maayRghsCompatibility']['packageCode'])}',
      icd10: '{escape_ts(p['maayRghsCompatibility']['icd10'])}',{tariff}
    }},
    modality: '{p['modality']}',
    targetAnatomy: {anat_str},
    sedation: '{escape_ts(p['sedation'])}',
    accessSiteDefault: '{escape_ts(p['accessSiteDefault'])}',
    sheathDefault: '{escape_ts(p['sheathDefault'])}',
    cathetersAndWires: '{escape_ts(p['cathetersAndWires'])}',{micro}{embolic}
    proceduralNarrativeTemplate:
      '{escape_ts(p['proceduralNarrativeTemplate'])}',
    postOpCare: {{
      immobilizationHours: {immo.get('immobilizationHours', 6)},
      immobilizationInstructions: '{escape_ts(immo.get('immobilizationInstructions', 'Strict bedrest; do not flex access limb.'))}',
      hematomaChecks: '{escape_ts(immo.get('hematomaChecks', 'Check puncture site and distal pulses q15m x 1h, q30m x 2h, then q1h.'))}',{req_img}
      hydrationProtocol: '{escape_ts(immo.get('hydrationProtocol', 'IV Normal Saline 75-100 mL/hr for contrast elimination.'))}',
      medications: {meds_str},
      redFlags: {red_str},
    }},
    consentId: '{escape_ts(p['consentId'])}',{calc}
  }},"""

def write_category_file(filename: str, const_name: str, cat_num: int, cat_title: str, procedures: list):
    filepath = os.path.join(BASE_DIR, filename)
    lines = [
        "import { MasterProcedure } from './types';",
        "",
        "/**",
        f" * Category {cat_num:02d}: {cat_title} ({len(procedures)} Procedures)",
        " * Strict Rajasthan MAAY / RGHS compatibility and SMS Medical College clinical protocols.",
        " */",
        f"export const {const_name}: MasterProcedure[] = [",
    ]
    for p in procedures:
        lines.append(serialize_proc(p))
    lines.append("];")
    lines.append("")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {filepath} with {len(procedures)} procedures.")

if __name__ == "__main__":
    print("Base directory:", BASE_DIR)
