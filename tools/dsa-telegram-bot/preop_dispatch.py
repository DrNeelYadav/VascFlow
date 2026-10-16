"""
Pre-Op Patient Admission Dispatcher for SMS Jaipur IR.

Generates standardized bilingual (Hindi & English) pre-admission call scripts,
WhatsApp messages, and SMS admission reminders for scheduled Cath Lab patients.
Coordinates fasting instructions, MAAY/RGHS scheme document checklists,
and admission time/ward details.
"""

from __future__ import annotations

import json
import urllib.parse
from datetime import datetime
from pathlib import Path

# Sample scheduled patients awaiting D-1 admission notification
# (Can be synced directly from EndoFlow bookedCases / ScheduleSlot)
DEFAULT_SCHEDULED_PATIENTS = [
    {
        "id": "PREOP-001",
        "name": "KAMLA DEVI SHARMA",
        "age": 62,
        "sex": "Female",
        "crNo": "SMS-2026-092",
        "phone": "9414098765",
        "procedure": "Peripheral Angioplasty & Stenting",
        "date": "Tomorrow (08:00 AM)",
        "ward": "IR Ward D-Block",
        "scheme": "RGHS",
        "npo_hours": 6,
        "call_done": False,
    },
    {
        "id": "PREOP-002",
        "name": "MANGI LAL KUMAWAT",
        "age": 52,
        "sex": "Male",
        "crNo": "SMS-2026-077",
        "phone": "9829567123",
        "procedure": "PTBD & Biliary Stenting",
        "date": "Tomorrow (08:30 AM)",
        "ward": "Gastro Ward / IR ICU",
        "scheme": "MAAY (Chiranjeevi)",
        "npo_hours": 8,
        "call_done": False,
    },
    {
        "id": "PREOP-003",
        "name": "SHANTI BAI",
        "age": 49,
        "sex": "Female",
        "crNo": "SMS-2026-115",
        "phone": "9829554433",
        "procedure": "Image-Guided Hepatic Biopsy",
        "date": "Tomorrow (09:00 AM)",
        "ward": "IR Day Care / Ward D-Block",
        "scheme": "MAAY (Chiranjeevi)",
        "npo_hours": 6,
        "call_done": False,
    },
]

CALL_LOG_FILE = Path(__file__).parent / "preop_calls.json"


def load_preop_patients() -> list[dict]:
    """Load scheduled cases with persistent call status."""
    patients = [dict(p) for p in DEFAULT_SCHEDULED_PATIENTS]
    if CALL_LOG_FILE.exists():
        try:
            done_map = json.loads(CALL_LOG_FILE.read_text(encoding="utf-8"))
            for p in patients:
                if p["id"] in done_map:
                    p["call_done"] = bool(done_map[p["id"]])
        except Exception:
            pass
    return patients


def mark_preop_call_done(patient_id: str, done: bool = True) -> None:
    """Persist D-1 call status."""
    done_map = {}
    if CALL_LOG_FILE.exists():
        try:
            done_map = json.loads(CALL_LOG_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    done_map[patient_id] = done
    CALL_LOG_FILE.write_text(json.dumps(done_map, indent=2), encoding="utf-8")


def format_admission_message(p: dict) -> str:
    """Generate authentic SMS / WhatsApp admission notification."""
    npo_h = p.get("npo_hours", 6)
    name = p.get("name", "Patient")
    cr = p.get("crNo", "")
    proc = p.get("procedure", "IR Procedure")
    date_str = p.get("date", "Tomorrow 8:00 AM")
    ward = p.get("ward", "IR Ward (D-Block)")
    scheme = p.get("scheme", "MAAY")

    return (
        f"🏥 *सवाई मानसिंह अस्पताल (SMS Hospital), जयपुर*\n"
        f"*डिपार्टमेंट ऑफ इंटरवेन्शनल रेडियोलॉजी (IR)*\n\n"
        f"प्रिय मरीज / Dear *{name}* (CR: {cr}),\n\n"
        f"आपकी प्रक्रिया (*{proc}*) दिनांक *{date_str}* को निर्धारित है।\n"
        f"कृपया भर्ती (Admission) हेतु समय पर *{ward}* में पहुंचे।\n\n"
        f"📌 *आवश्यक निर्देश (Important Instructions):*\n"
        f"1. *खाली पेट (Fasting):* प्रक्रिया से {npo_h} घंटे पहले कुछ भी खाना या पीना नहीं है (No food/water).\n"
        f"2. *आवश्यक दस्तावेज़:* {scheme} कार्ड, जन आधार / आधार कार्ड, पिछली CT / MRI जांच रिपोर्ट व फिल्में साथ लाएं।\n"
        f"3. *दवाइयां:* यदि आप खून पतला करने वाली दवा (Aspirin, Clopidogrel, Warfarin) ले रहे हैं, तो तुरंत डॉक्टर को बताएं।\n"
        f"4. एक वयस्क तीमारदार (Attendant) का साथ होना अनिवार्य है।\n\n"
        f"📞 *सहायता हेल्पलाइन (IR Cath-Lab Helpdesk):* 0141-2518228"
    )


def get_whatsapp_link(phone: str, message: str) -> str:
    """Generate click-to-send WhatsApp API link."""
    clean_p = "".join(c for c in phone if c.isdigit())
    if len(clean_p) == 10:
        clean_p = f"91{clean_p}"
    encoded = urllib.parse.quote(message)
    return f"https://wa.me/{clean_p}?text={encoded}"
