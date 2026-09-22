# -*- coding: utf-8 -*-
"""
Neurovascular & Head/Neck Procedures Generator (Categories 16 & 17 - 51 procedures)
Outputs:
- C:/SSO/apps/web-app/app/lib/data/procedures/neuroAndHeadNeck.ts
- C:/SSO/scripts/generator/temp_consents_neuro.json
"""

import json
import os

# Helper to construct procedure blueprint and consent
def make_proc(
    id, name, category, code, rghsCode, icd10, indications, preOpCriteria,
    hardware, techniqueSteps, complications, maayTariffInr, vendorContacts,
    consent_data
):
    proc = {
        "id": id,
        "name": name,
        "category": category,
        "code": code,
        "rghsCode": rghsCode,
        "icd10": icd10,
        "indications": indications,
        "preOpCriteria": preOpCriteria,
        "hardware": hardware,
        "techniqueSteps": techniqueSteps,
        "complications": complications,
        "maayTariffInr": maayTariffInr,
        "vendorContacts": vendorContacts
    }
    
    consent = {
        "id": id,
        "category": category,
        "nameEn": name,
        "nameHi": consent_data["nameHi"],
        "indicationEn": consent_data["indicationEn"],
        "indicationHi": consent_data["indicationHi"],
        "descriptionEn": consent_data["descriptionEn"],
        "descriptionHi": consent_data["descriptionHi"],
        "benefitsEn": consent_data["benefitsEn"],
        "benefitsHi": consent_data["benefitsHi"],
        "specificRisksEn": consent_data["specificRisksEn"],
        "specificRisksHi": consent_data["specificRisksHi"],
        "alternativesEn": consent_data["alternativesEn"],
        "alternativesHi": consent_data["alternativesHi"],
        "sedationTypeEn": consent_data["sedationTypeEn"],
        "sedationTypeHi": consent_data["sedationTypeHi"]
    }
    return proc, consent

# Standard vendors
V_NEURO = [
    "Medtronic Neurovascular India (+91 98293 11223)",
    "Stryker Neurovascular (+91 98294 22334)",
    "MicroVention Terumo (+91 98296 44556)",
    "Penumbra India (+91 98295 33445)"
]
V_HEAD_NECK = [
    "Terumo India Interventional (+91 98291 55678)",
    "Cook Medical India (+91 98292 34567)",
    "Boston Scientific (+91 98293 66554)"
]

print("Script framework initialized")
