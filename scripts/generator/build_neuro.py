# -*- coding: utf-8 -*-
"""
Build Neuro & Head/Neck Procedures (51 procedures)
Category 16 (Neurovascular - 35 items)
Category 17 (Endocrine/Head/Neck - 16 items)
"""
import json
import os

OUTPUT_PROC_TS = "C:/SSO/apps/web-app/app/lib/data/procedures/neuroAndHeadNeck.ts"
OUTPUT_CONSENT_JSON = "C:/SSO/scripts/generator/temp_consents_neuro.json"

procs = []
consents = {}

def add_item(
    p_id, name, cat, code, rghs, icd10, ind, pre, hw, steps, comp, tariff,
    name_hi, ind_en, ind_hi, desc_en, desc_hi, ben_en, ben_hi,
    risk_en, risk_hi, alt_en, alt_hi, sed_en, sed_hi
):
    proc = {
        "id": p_id,
        "name": name,
        "category": cat,
        "code": code,
        "rghsCode": rghs,
        "icd10": icd10,
        "indications": ind,
        "preOpCriteria": pre,
        "hardware": hw,
        "techniqueSteps": steps,
        "complications": comp,
        "maayTariffInr": tariff,
        "vendorContacts": [
            "Medtronic Neurovascular India (+91 98293 11223)",
            "Stryker Neurovascular (+91 98294 22334)",
            "MicroVention Terumo (+91 98296 44556)",
            "Penumbra India (+91 98295 33445)"
        ]
    }
    consent = {
        "id": p_id,
        "category": cat,
        "nameEn": name,
        "nameHi": name_hi,
        "indicationEn": ind_en,
        "indicationHi": ind_hi,
        "descriptionEn": desc_en,
        "descriptionHi": desc_hi,
        "benefitsEn": ben_en,
        "benefitsHi": ben_hi,
        "specificRisksEn": risk_en,
        "specificRisksHi": risk_hi,
        "alternativesEn": alt_en,
        "alternativesHi": alt_hi,
        "sedationTypeEn": sed_en,
        "sedationTypeHi": sed_hi
    }
    procs.append(proc)
    consents[p_id] = consent

# Hardware definitions for neuro
HW_ACCESS_5F = [
    { "category": "Vascular Access", "name": "5F Radiofocus Introducer Sheath", "spec": "11 cm length, 0.035 in wire compatible", "standardStore": "Angio Suite Store" },
    { "category": "Diagnostic Catheter", "name": "5F Simmons-2 / Berenstein Diagnostic Catheter", "spec": "100 cm length, hydrophilic coated tip", "standardStore": "Neuro IR Store" },
    { "category": "Guidewire", "name": "0.035 in Radiofocus Glidewire", "spec": "150-180 cm length, angled hydrophilic tip", "standardStore": "Angio Suite Store" },
    { "category": "Contrast Media", "name": "Iso-osmolar Non-ionic Contrast (Iodixanol 320)", "spec": "100 mL bottle, low neurotoxicity", "standardStore": "SMS Pharmacy DDC-14" },
    { "category": "Closure Device", "name": "Angio-Seal VIP 6F Vascular Closure Device", "spec": "Bioresorbable collagen plug and anchor system", "standardStore": "Neuro IR Store" }
]

HW_MT_STENT = [
    { "category": "Vascular Access", "name": "8F Radiofocus Introducer Sheath", "spec": "11 cm length, high-flow hemostatic valve", "standardStore": "Angio Suite Store" },
    { "category": "Balloon Guide Catheter", "name": "8F Balloon Guide Catheter (FlowGate2 / Cello)", "spec": "90-95 cm length, 0.084 in inner lumen, compliant occlusion balloon", "standardStore": "Neuro IR Store" },
    { "category": "Microcatheter", "name": "0.021 in Trevo Trak 21 / Marksman Microcatheter", "spec": "150 cm length, dual radiopaque marker", "standardStore": "Neuro IR Store" },
    { "category": "Microguidewire", "name": "0.014 in Synchro-14 Steerable Microguidewire", "spec": "200 cm length, shapeable platinum tip", "standardStore": "Neuro IR Store" },
    { "category": "Stent Retriever", "name": "Solitaire Platinum / Trevo NXT Stent Retriever", "spec": "4 mm x 40 mm or 6 mm x 40 mm self-expanding nitinol retrieval stent", "standardStore": "Neuro IR Store" },
    { "category": "Aspiration Tubing", "name": "60 mL VacLok Syringe / Direct Aspiration Tubing", "spec": "Vacuum lock aspiration unit", "standardStore": "Angio Suite Store" }
]

HW_MT_ASPIRATION = [
    { "category": "Vascular Access", "name": "6F Long Guiding Sheath (Neuron MAX 088)", "spec": "90 cm length, 0.088 in inner diameter", "standardStore": "Neuro IR Store" },
    { "category": "Large-Bore Aspiration Catheter", "name": "Sofia Plus / React 71 / Penumbra RED 72 Aspiration Catheter", "spec": "0.068 - 0.072 in inner diameter, 132 cm length", "standardStore": "Neuro IR Store" },
    { "category": "Microcatheter / Wire", "name": "Velocity / 3MAX Microcatheter and 0.014 in Glidewire GT", "spec": "150 cm length, hydrophilic coated", "standardStore": "Neuro IR Store" },
    { "category": "Aspiration Pump", "name": "Penumbra Engine / Continuous Vacuum Aspiration System", "spec": "-29 inHg continuous mechanical vacuum pressure", "standardStore": "Neuro IR Store" }
]

HW_ANEURYSM_COIL = [
    { "category": "Vascular Access", "name": "6F Introducer Sheath", "spec": "11 cm length, hemostatic valve", "standardStore": "Angio Suite Store" },
    { "category": "Guiding Catheter", "name": "6F Guider Softip / Envoy MP Catheter", "spec": "95 cm length, 0.070 in ID", "standardStore": "Neuro IR Store" },
    { "category": "Microcatheter", "name": "Excelsior SL-10 / Headway 17 Microcatheter", "spec": "150 cm length, pre-shaped 45 deg or 90 deg tip", "standardStore": "Neuro IR Store" },
    { "category": "Microguidewire", "name": "0.014 in Synchro-14 / Traxcess Wire", "spec": "200 cm length, shapeable tip", "standardStore": "Neuro IR Store" },
    { "category": "Detachable Coils", "name": "Target 360 / Axium Prime Detachable Platinum Coils", "spec": "Framing, filling, and finishing bare platinum coils (2 mm to 14 mm)", "standardStore": "Neuro IR Store" },
    { "category": "Coil Detachment System", "name": "Electronic / Mechanical Coil Detachment Controller", "spec": "Instantaneous thermal/electrolytic detachment wand", "standardStore": "Neuro IR Store" }
]

HW_FLOW_DIVERTER = [
    { "category": "Vascular Access", "name": "8F Long Guiding Sheath (Neuron MAX 088)", "spec": "90 cm length, 0.088 in inner diameter", "standardStore": "Neuro IR Store" },
    { "category": "Intermediate Catheter", "name": "Navien 058 / Sofia 5F Distal Access Catheter", "spec": "115-125 cm length, flexible tip", "standardStore": "Neuro IR Store" },
    { "category": "Flow Diverter Delivery Catheter", "name": "Phenom 27 / Marksman Microcatheter", "spec": "150 cm length, 0.027 in inner lumen", "standardStore": "Neuro IR Store" },
    { "category": "Microguidewire", "name": "0.014 in Synchro-14 Guidewire", "spec": "200 cm length, shapeable tip", "standardStore": "Neuro IR Store" },
    { "category": "Flow Diverter Stent", "name": "Pipeline Vantage / Surpass Evolve / FRED Device", "spec": "Braided 48-64 nitinol/platinum wire stent (2.5 - 5.0 mm x 12 - 35 mm)", "standardStore": "Neuro IR Store" }
]

HW_CAS = [
    { "category": "Vascular Access", "name": "8F Radiofocus Introducer Sheath", "spec": "11 cm length, 0.035 in valve", "standardStore": "Angio Suite Store" },
    { "category": "Guiding Sheath", "name": "6F / 8F Vista Brite Tip / Shuttle Sheath", "spec": "90 cm length, multipurpose curve", "standardStore": "Angio Suite Store" },
    { "category": "Distal Embolic Protection", "name": "SpiderFX / FilterWire EZ Embolic Protection Device", "spec": "Filter basket 3.0-7.0 mm vessel diameter on 0.014 in wire", "standardStore": "Neuro IR Store" },
    { "category": "Carotid Stent", "name": "Carotid Wallstent / Precise Pro Nitinol Stent", "spec": "7-10 mm diameter x 30-40 mm length", "standardStore": "Neuro IR Store" },
    { "category": "PTA Balloon Catheter", "name": "Submax / Ultraverse Monorail Balloon", "spec": "3.5-5.0 mm x 20 mm post-dilation balloon", "standardStore": "Neuro IR Store" }
]

HW_MMA = [
    { "category": "Vascular Access", "name": "5F / 6F Introducer Sheath", "spec": "11 cm length", "standardStore": "Angio Suite Store" },
    { "category": "Guiding Catheter", "name": "5F / 6F Envoy / Guider Catheter", "spec": "95-100 cm length", "standardStore": "Neuro IR Store" },
    { "category": "Microcatheter", "name": "Headway Duo / Marathon Microcatheter", "spec": "150 cm, 1.5F DMSO-compatible tip", "standardStore": "Neuro IR Store" },
    { "category": "Microguidewire", "name": "0.010 in / 0.014 in Hybrid Microguidewire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
    { "category": "Liquid Embolic / Particles", "name": "Onyx 18 / Squid 12 / PVA Particles 150-250 um", "spec": "Non-adhesive liquid embolic or calibrated microparticles", "standardStore": "Neuro IR Store" }
]

HW_THYROID_RFA = [
    { "category": "RFA Generator & Probe", "name": "Dedicated Internally Cooled Thyroid RF Electrode (STARmed / RF Medical)", "spec": "18G x 7 cm length, 7 mm active tip, peristaltic cold saline perfusion", "standardStore": "Endocrine IR Store" },
    { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Small-Parts Transducer", "spec": "10-15 MHz multi-frequency linear probe", "standardStore": "Room 922 USG Suite" },
    { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% with Adrenaline", "spec": "30 mL for perithyroidal cuff hydrodissection", "standardStore": "SMS Pharmacy DDC-14" },
    { "category": "Hydrodissection Solution", "name": "5% Dextrose in Water (D5W)", "spec": "500 mL sterile infusion bag", "standardStore": "SMS Pharmacy DDC-14" }
]

print("Hardware presets ready")
