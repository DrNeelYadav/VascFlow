# -*- coding: utf-8 -*-
"""
Generator for Category 16 (Neurovascular - 35 items) & Category 17 (Endocrine/Head/Neck - 16 items)
Total 51 procedures
"""
import json
import os

PROCS = []
CONSENTS = {}

def add_p(p_id, name, cat, code, rghs, icd, ind, pre, hw, steps, comp, tariff, consent):
    p = {
        "id": p_id,
        "name": name,
        "category": cat,
        "code": code,
        "rghsCode": rghs,
        "icd10": icd,
        "indications": ind,
        "preOpCriteria": pre,
        "hardware": hw,
        "techniqueSteps": steps,
        "complications": comp,
        "maayTariffInr": tariff,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "Stryker Neurovascular (+91 98294 22334)",
            "MicroVention Terumo (+91 98296 44556)"
        ]
    }
    c = {
        "id": p_id,
        "category": cat,
        "nameEn": name,
        "nameHi": consent["nameHi"],
        "indicationEn": consent["indEn"],
        "indicationHi": consent["indHi"],
        "descriptionEn": consent["descEn"],
        "descriptionHi": consent["descHi"],
        "benefitsEn": consent["benEn"],
        "benefitsHi": consent["benHi"],
        "specificRisksEn": consent["riskEn"],
        "specificRisksHi": consent["riskHi"],
        "alternativesEn": consent["altEn"],
        "alternativesHi": consent["altHi"],
        "sedationTypeEn": consent["sedEn"],
        "sedationTypeHi": consent["sedHi"]
    }
    PROCS.append(p)
    CONSENTS[p_id] = c

# We will populate all 51 procedures below
print("Ready to populate procedures")
