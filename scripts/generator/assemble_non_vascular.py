# -*- coding: utf-8 -*-
"""
Assemble Non-Vascular Procedures (104 procedures) and Consent Templates
Outputs:
1. C:/SSO/apps/web-app/app/lib/data/procedures/nonVascularBiopsies.ts
2. C:/SSO/apps/web-app/app/lib/consent/procedures/nonVascularConsent.ts
"""

import json
import os
import sys

# Import generator parts
import part1a
import part1b
import part1c
import part1d
import part2a
import part2b
import part2c
import part2d
import part20

def main():
    parts = [
        ("part1a", part1a.DATA_PART1A),
        ("part1b", part1b.DATA_PART1B),
        ("part1c", part1c.DATA_PART1C),
        ("part1d", part1d.DATA_PART1D),
        ("part2a", part2a.DATA_PART2A),
        ("part2b", part2b.DATA_PART2B),
        ("part2c", part2c.DATA_PART2C),
        ("part2d", part2d.DATA_PART2D),
        ("part20", part20.DATA_PART20),
    ]

    all_procs = []
    for name, data in parts:
        print(f"Loaded {name}: {len(data)} procedures")
        all_procs.extend(data)

    print(f"\nTotal assembled procedures: {len(all_procs)}")
    assert len(all_procs) == 104, f"Expected 104 procedures, got {len(all_procs)}"

    # Check unique IDs and codes
    seen_ids = set()
    seen_codes = set()
    for p in all_procs:
        pid = p["id"]
        code = p["code"]
        assert pid not in seen_ids, f"Duplicate ID: {pid}"
        assert code not in seen_codes, f"Duplicate code: {code}"
        seen_ids.add(pid)
        seen_codes.add(code)

    print("All 104 procedures verified unique in ID and Code.")

    # 1. Generate nonVascularBiopsies.ts
    blueprints = []
    for p in all_procs:
        bp = {
            "id": p["id"],
            "name": p["name"],
            "category": p["category"],
            "code": p["code"],
            "rghsCode": p.get("rghsCode", "693 / 41"),
            "icd10": p["icd10"],
            "indications": p["indications"],
            "preOpCriteria": p["preOpCriteria"],
            "hardware": p["hardware"],
            "techniqueSteps": p["techniqueSteps"],
            "complications": p["complications"],
            "maayTariffInr": p["maayTariffInr"],
            "vendorContacts": p["vendorContacts"],
        }
        blueprints.append(bp)

    bp_ts_path = "C:/SSO/apps/web-app/app/lib/data/procedures/nonVascularBiopsies.ts"
    bp_content = """import { ProcedureBlueprint } from '../../types/clinical';

/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Master Catalog of 104 Non-Vascular Procedures:
 * - Category 1: Image-Guided Percutaneous Biopsies & Cytology (Procedures 1 to 53)
 * - Category 2: Catheter Drainages, Fluid Aspiration & Stenting (Procedures 54 to 91)
 * - Category 20: Gastrointestinal & Enteric Interventions (Procedures 92 to 104)
 */

export const NON_VASCULAR_BIOPSY_PROCEDURES: ProcedureBlueprint[] = """ + json.dumps(blueprints, indent=2, ensure_ascii=False) + """;

export function getNonVascularBiopsyProcedure(id: string): ProcedureBlueprint | undefined {
  return NON_VASCULAR_BIOPSY_PROCEDURES.find((p) => p.id === id);
}

export default NON_VASCULAR_BIOPSY_PROCEDURES;
"""

    with open(bp_ts_path, "w", encoding="utf-8") as f:
        f.write(bp_content)
    print(f"Wrote {bp_ts_path} ({os.path.getsize(bp_ts_path)} bytes)")

    # 2. Generate nonVascularConsent.ts
    consent_templates = {}
    for p in all_procs:
        c = p["consent"]
        template = {
            "id": p["id"],
            "category": p["category"],
            "nameEn": p["name"],
            "nameHi": c["nameHi"],
            "indicationEn": c["indicationEn"],
            "indicationHi": c["indicationHi"],
            "descriptionEn": c["descriptionEn"],
            "descriptionHi": c["descriptionHi"],
            "benefitsEn": c["benefitsEn"],
            "benefitsHi": c["benefitsHi"],
            "specificRisksEn": c["specificRisksEn"],
            "specificRisksHi": c["specificRisksHi"],
            "alternativesEn": c["alternativesEn"],
            "alternativesHi": c["alternativesHi"],
            "sedationTypeEn": c["sedationTypeEn"],
            "sedationTypeHi": c["sedationTypeHi"],
        }
        consent_templates[p["id"]] = template

    consent_ts_path = "C:/SSO/apps/web-app/app/lib/consent/procedures/nonVascularConsent.ts"
    consent_content = """/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Statutory Bilingual (Hindi & English) Informed Consent Templates
 * for 104 Non-Vascular Interventional Radiology Procedures:
 * - Category 1: Image-Guided Percutaneous Biopsies & Cytology (1 to 53)
 * - Category 2: Catheter Drainages, Fluid Aspiration & Stenting (54 to 91)
 * - Category 20: Gastrointestinal & Enteric Interventions (92 to 104)
 *
 * Compliant with National Medical Commission (NMC), Indian Medical Council,
 * and Supreme Court Guidelines (Samira Kohli vs. Dr. Prabha Manchanda Standard).
 */

import { ProcedureConsentTemplate } from '../consentData';

export const NON_VASCULAR_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = """ + json.dumps(consent_templates, indent=2, ensure_ascii=False) + """;

export function getNonVascularConsentTemplate(id: string): ProcedureConsentTemplate | undefined {
  return NON_VASCULAR_CONSENT_TEMPLATES[id];
}

export default NON_VASCULAR_CONSENT_TEMPLATES;
"""

    with open(consent_ts_path, "w", encoding="utf-8") as f:
        f.write(consent_content)
    print(f"Wrote {consent_ts_path} ({os.path.getsize(consent_ts_path)} bytes)")

if __name__ == "__main__":
    main()
