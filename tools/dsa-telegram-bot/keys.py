"""
Inline keyboard layer for the SMS Jaipur IR search board.

Turns the typed question flow into tap-to-select buttons. Typing still works
everywhere -- the buttons are an addition, not a replacement.

Screens
  menu        choose what to search by
  term        common values for that mode
  date_year   select year (2026, 2025, etc.)
  date_month  select month
  date_day    select day with case counts
  pick        numbered buttons for matching cases
  case        patient-specific action buttons (only what exists on disk)
"""

from __future__ import annotations

import re

PREFIX = "ir:"

SUGGESTIONS = {
    "procedure": [
        "TACE", "PTBD", "SEMS", "JNA", "BAE", "PCN", "PERMACATH",
        "SCLERO", "VENASEAL", "AVM", "DSA", "VENA"
    ],
    "ir": [],
    "name": [],
}


def fmt_date_dmy(d: str) -> str:
    """Format date string as DD/MM/YY."""
    s = str(d or "").strip()
    if not s or s.lower() == "not recorded":
        return "--/--/--"
    m = re.match(r"^(\d{4})-(\d{2})-(\d{2})", s)
    if m:
        y, mo, day = m.groups()
        return f"{day}/{mo}/{y[2:]}"
    m = re.match(r"^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})", s)
    if m:
        day, mo, y = m.groups()
        y = y[2:] if len(y) == 4 else y
        return f"{int(day):02d}/{int(mo):02d}/{y}"
    return s[:8]


def board():
    """Build the static inline keyboards."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup

    def grid(values, screen, per_row=2):
        out = []
        for i in range(0, len(values), per_row):
            out.append([
                InlineKeyboardButton(v, callback_data=f"{PREFIX}term:{screen}:{v}")
                for v in values[i:i + per_row]
            ])
        return out

    def kb(rows):
        return InlineKeyboardMarkup(
            [[InlineKeyboardButton(t, callback_data=d)] for t, d in rows]
        )

    return {
        # ---- main menu --------------------------------------------------
        "menu": kb([
            ("1  Case / IR number", f"{PREFIX}mode:ir"),
            ("2  Procedure", f"{PREFIX}mode:procedure"),
            ("3  Date (Year / Month / Day)", f"{PREFIX}date:years"),
            ("4  Patient name", f"{PREFIX}mode:name"),
            ("5  All cases", f"{PREFIX}all"),
            ("📢 Pre-Op Admission Calls", f"{PREFIX}preop:list"),
            ("🧹 Clear screen", f"{PREFIX}clear"),
        ]),

        # ---- common values for chosen mode ------------------------------
        "term:procedure": InlineKeyboardMarkup(
            grid(SUGGESTIONS["procedure"], "procedure", 2)
            + [[InlineKeyboardButton("🔙 Back to Menu", callback_data=f"{PREFIX}menu")]]
        ),

        "term:ir": kb([
            ("Recently rendered cases", f"{PREFIX}recent"),
            ("🔙 Back to Menu", f"{PREFIX}menu"),
        ]),

        "term:name": kb([
            ("Type patient name (e.g. AAS, RAJ, GOP)", f"{PREFIX}typehint:name"),
            ("🔙 Back to Menu", f"{PREFIX}menu"),
        ]),
    }


def dynamic_case_keyboard(ir: int, assets: dict, renders_count: int = 0, has_combined: bool = False):
    """Patient-specific action buttons: only show options for documents/imaging
    that are actually on disk for this patient."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup

    rows = []

    # Imaging buttons
    img_row = []
    if renders_count > 0:
        img_row.append(InlineKeyboardButton("📹 Cine Loops (HQ)",
                                            callback_data=f"{PREFIX}deliver:{ir}"))
        img_row.append(InlineKeyboardButton("🎞 Cine Loops (moderate)",
                                            callback_data=f"{PREFIX}moderate:{ir}"))
        img_row.append(InlineKeyboardButton("🗜 All as ZIP",
                                            callback_data=f"{PREFIX}zip:{ir}"))
    if has_combined:
        img_row.append(InlineKeyboardButton("🎬 Combined Video",
                                            callback_data=f"{PREFIX}onevideo:{ir}"))
    if img_row:
        rows.append(img_row)

    # Document buttons
    doc_row = []
    if assets.get("op_note"):
        doc_row.append(InlineKeyboardButton("📝 Operative Note", callback_data=f"{PREFIX}opnote:{ir}"))
    if assets.get("discharge"):
        doc_row.append(InlineKeyboardButton("📄 Discharge Card", callback_data=f"{PREFIX}discharge:{ir}"))
    if doc_row:
        rows.append(doc_row)

    # Pre-op scan button
    if assets.get("preop"):
        rows.append([InlineKeyboardButton("📑 Pre-Op Scans", callback_data=f"{PREFIX}scans:{ir}")])

    # Navigation row
    rows.append([
        InlineKeyboardButton("🔙 New Search", callback_data=f"{PREFIX}menu"),
        InlineKeyboardButton("🧹 Clear", callback_data=f"{PREFIX}clear"),
    ])

    return InlineKeyboardMarkup(rows)


def year_keyboard(years: list[str]):
    """Select a year."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup
    rows = []
    for i in range(0, len(years), 2):
        rows.append([
            InlineKeyboardButton(f"📅 {y}", callback_data=f"{PREFIX}date:year:{y}")
            for y in years[i:i + 2]
        ])
    rows.append([InlineKeyboardButton("🔙 Back to Menu", callback_data=f"{PREFIX}menu")])
    return InlineKeyboardMarkup(rows)


def month_keyboard(year: str, months: list[tuple[str, str]]):
    """Select a month (e.g. [('07', 'July'), ...])."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup
    rows = []
    for i in range(0, len(months), 2):
        rows.append([
            InlineKeyboardButton(f"🗓 {label}", callback_data=f"{PREFIX}date:month:{year}:{code}")
            for code, label in months[i:i + 2]
        ])
    rows.append([InlineKeyboardButton("🔙 Back to Years", callback_data=f"{PREFIX}date:years")])
    return InlineKeyboardMarkup(rows)


def day_keyboard(year: str, month: str, days: list[tuple[str, int]]):
    """Select a day with case count (e.g. [('21', 2), ...])."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup
    rows = []
    for i in range(0, len(days), 3):
        rows.append([
            InlineKeyboardButton(f"{d} ({cnt})", callback_data=f"{PREFIX}date:day:{year}:{month}:{d}")
            for d, cnt in days[i:i + 3]
        ])
    rows.append([InlineKeyboardButton(f"🔙 Back to Months", callback_data=f"{PREFIX}date:year:{year}")])
    return InlineKeyboardMarkup(rows)


def pick_keyboard(results, page: int = 0, per_page: int = 8):
    """One button per case in clean single-line format, paged."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup

    start = page * per_page
    chunk = results[start:start + per_page]
    rows = []
    for r in chunk:
        d_str = fmt_date_dmy(r.get("date", ""))
        name = (r.get("name") or "Unknown")[:14].strip()
        label = f"IR {r['ir']} | {d_str} | {name}"
        rows.append([InlineKeyboardButton(label, callback_data=f"{PREFIX}open:{r['ir']}")])

    nav = []
    total = (len(results) + per_page - 1) // per_page
    if page > 0:
        nav.append(InlineKeyboardButton("< Prev", callback_data=f"{PREFIX}page:{page-1}"))
    nav.append(InlineKeyboardButton(f"Page {page+1}/{total}", callback_data=f"{PREFIX}noop"))
    if (page + 1) * per_page < len(results):
        nav.append(InlineKeyboardButton("Next >", callback_data=f"{PREFIX}page:{page+1}"))
    rows.append(nav)

    rows.append([
        InlineKeyboardButton("🔙 New Search", callback_data=f"{PREFIX}menu"),
        InlineKeyboardButton("🧹 Clear", callback_data=f"{PREFIX}clear"),
    ])
    return InlineKeyboardMarkup(rows)


def screen_for(mode: str):
    return f"term:{mode}" if mode in ("procedure", "ir", "name") else "menu"


def preop_list_keyboard(patients: list[dict]):
    """Keyboard listing scheduled patients awaiting admission calls."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup

    rows = []
    for p in patients:
        status_icon = "✅" if p.get("call_done") else "⚠️"
        label = f"{status_icon} {p['name'][:16]} | {p.get('date', 'Tomorrow')[:10]}"
        rows.append([InlineKeyboardButton(label, callback_data=f"{PREFIX}preop:detail:{p['id']}")])

    rows.append([
        InlineKeyboardButton("🔙 Main Menu", callback_data=f"{PREFIX}menu"),
        InlineKeyboardButton("🧹 Clear", callback_data=f"{PREFIX}clear"),
    ])
    return InlineKeyboardMarkup(rows)


def preop_detail_keyboard(p: dict, wa_url: str = ""):
    """Action buttons for a scheduled patient: Call, WhatsApp, Toggle Done."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup

    rows = []
    action_row = []
    if wa_url:
        action_row.append(InlineKeyboardButton("📲 WhatsApp Notification", url=wa_url))
    phone = p.get("phone", "")
    if phone:
        action_row.append(InlineKeyboardButton(f"📞 Call {phone}", url=f"tel:+91{phone}"))
    if action_row:
        rows.append(action_row)

    call_label = "↩️ Mark Call Pending" if p.get("call_done") else "✅ Mark Call Done (D-1)"
    rows.append([
        InlineKeyboardButton(call_label, callback_data=f"{PREFIX}preop:toggle:{p['id']}"),
        InlineKeyboardButton("🔙 Pre-Op List", callback_data=f"{PREFIX}preop:list"),
    ])
    rows.append([
        InlineKeyboardButton("🏠 Main Menu", callback_data=f"{PREFIX}menu"),
    ])
    return InlineKeyboardMarkup(rows)


def ocr_confirm_keyboard(draft_id: str):
    """Confirm or discard adding case extracted from CT/MRI report OCR."""
    from telegram import InlineKeyboardButton, InlineKeyboardMarkup

    return InlineKeyboardMarkup([
        [InlineKeyboardButton("✅ Confirm & Add to EndoFlow Worklist", callback_data=f"{PREFIX}addcase:{draft_id}")],
        [InlineKeyboardButton("❌ Discard Draft", callback_data=f"{PREFIX}discard:{draft_id}")],
    ])
