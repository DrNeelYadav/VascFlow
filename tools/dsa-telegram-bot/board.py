"""
SMS Jaipur IR — conversational search board.

A clean, interactive Telegram dashboard for querying interventional radiology
patients, clinical documents, and fluoroscopy imaging.

Features:
- In-place message updates (no duplicate menus or double-printing).
- 3-step date hierarchy (Year -> Month -> Day).
- Single-line numbered case listings (IR | DD/MM/YY | Name | Procedure).
- Patient-specific dynamic action buttons (only shows buttons for assets on disk).
- Substring name matching (2-3 letters).
- Clear screen / reset option.
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import re
import sys
import unicodedata
from datetime import datetime
from pathlib import Path

LOCK = HERE_LOCK = Path(__file__).resolve().parent / ".board.lock"

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
sys.path.insert(0, str(BUNDLER))
sys.path.insert(0, str(HERE))

import bot as botmod  # noqa: E402
import keys  # noqa: E402
import identity  # noqa: E402
import report_ocr  # noqa: E402
import preop_dispatch  # noqa: E402
from send_case import still_to_photo  # noqa: E402
from clinical_summary import format_clinical_card, get_patient_assets  # noqa: E402

CASES = BUNDLER / "_index" / "cases.json"
# The historical corpus, E:\New Scans, indexed separately: 376 cases from
# IR 1 (2022) onward. It is a separate tree on E:, so it gets its own index
# file rather than being merged into the 2026 set.
CASES_NEW = BUNDLER / "_index" / "cases_new.json"
HQ = BUNDLER / "_index" / "fluoro_video_hq" / "manifest.json"
V1 = BUNDLER / "_index" / "fluoro_video" / "manifest.json"
DOCS = BUNDLER / "_index" / "documents.json"
COMBINED = BUNDLER / "_index" / "fluoro_combined"
SKIP_IR = {123}

MODE_WORDS = {
    "case": "ir", "ir": "ir", "id": "ir", "number": "ir", "no": "ir",
    "procedure": "procedure", "operation": "procedure",
    "date": "date", "day": "date", "when": "date",
    "name": "name", "patient": "name", "who": "name",
    "all": "all", "everything": "all", "list": "all",
}

PROCEDURE_HINTS = [
    "TACE", "PTBD", "SEMS", "JNA", "BAE", "PCN", "PICC", "PERMACATH",
    "SCLERO", "VENASEAL", "VENOPLASTY", "DSA", "AVM", "COIL", "STENT",
    "ANGIO", "EMBOLIZATION", "SPLENIC", "VARICOSE", "BRONCHIAL",
    "UTERINE", "GLUE", "FISTULO", "DRAINAGE", "BILIARY", "THROMBECTOMY",
    "PSEUDOANEURYSM", "GDA", "CHOLANGIO", "PARTO", "THROMBO",
]


def norm(s: str) -> str:
    t = unicodedata.normalize("NFKD", str(s or "")).replace("\\", " ")
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.sub(r"[^A-Z0-9]+", "", t.upper())


def clean(s: str) -> str:
    return (s or "").split("^")[0].strip()


def _iso(d: str) -> str:
    s = str(d or "").strip()
    if len(s) == 8 and s.isdigit():
        return f"{s[:4]}-{s[4:6]}-{s[6:]}"
    return ""


MONTHS = {m.lower(): i for i, m in enumerate(
    ["January", "February", "March", "April", "May", "June", "July",
     "August", "September", "October", "November", "December"], 1)}


def parse_when(term: str) -> str:
    t = (term or "").strip().lower()
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", t):
        return t
    m = re.fullmatch(r"(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})", t)
    if m:
        d, mo, y = m.groups()
        y = int(y) + 2000 if len(y) == 2 else int(y)
        return f"{y:04d}-{int(mo):02d}-{int(d):02d}"
    m = re.fullmatch(r"(\d{1,2})[./-](\d{1,2})", t)
    if m:
        return f"{m.group(2):0>2}-{m.group(1):0>2}"
    for name, num in MONTHS.items():
        if t.startswith(name):
            m2 = re.search(r"(\d{4})", t)
            if m2:
                return f"{m2.group(1)}-{num:02d}-01"
    if re.fullmatch(r"\d{4}", t):
        return t
    return ""


def detect_mode(text: str) -> str | None:
    t = (text or "").strip().lower()
    if t in MODE_WORDS:
        return MODE_WORDS[t]
    for word, mode in MODE_WORDS.items():
        if word in t:
            return mode
    return None


class Store:
    def __init__(self) -> None:
        self.cases = json.loads(CASES.read_text(encoding="utf8"))["cases"]
        if CASES_NEW.exists():
            # Tagged so the UI can say which tree a case came from, and so a
            # case present in both is not silently overwritten by one.
            new = json.loads(CASES_NEW.read_text(encoding="utf8"))["cases"]
            known = {c.get("folder") for c in self.cases}
            added = 0
            for c in new:
                if c.get("folder") in known:
                    continue
                c["corpus"] = "new_scans"
                self.cases.append(c)
                added += 1
            print(f"  + {added} cases from E:\\New Scans")
        self.renders: dict[int, list] = {}
        if HQ.exists():
            for m in json.loads(HQ.read_text(encoding="utf8")):
                if m.get("ok") and m.get("ir_number") not in SKIP_IR:
                    self.renders.setdefault(m["ir_number"], []).append(m)
        hq_irs = set(self.renders.keys())
        if V1.exists():
            for m in json.loads(V1.read_text(encoding="utf8")):
                ir = m.get("ir_number")
                if m.get("ok") and ir not in SKIP_IR and ir not in hq_irs:
                    self.renders.setdefault(ir, []).append(m)
        try:
            self.registry = botmod.load_registry()
        except Exception:
            self.registry = {}
        self.docs: dict[int, dict] = {}
        self.doc_dates: dict[int, str] = {}
        if DOCS.exists():
            for rec in json.loads(DOCS.read_text(encoding="utf8")).get("records", []):
                ir = rec.get("ir_number")
                if not ir:
                    continue
                slot = self.docs.setdefault(ir, {"dc": [], "op": []})
                slot["dc" if rec["kind"] == "discharge" else "op"].append(rec)
                iso = rec.get("identifiers", {}).get("doc_date_iso", "")
                if iso and len(iso) == 10 and ir not in self.doc_dates:
                    self.doc_dates[ir] = iso
        self.by_ir: dict[int, dict] = {}
        for c in self.cases:
            ir = c.get("ir_number")
            if isinstance(ir, int) and ir > 0 and ir not in SKIP_IR:
                self.by_ir[ir] = self._enrich(c)

        # Include patients from registry / renders / docs
        for ir, reg in self.registry.items():
            if isinstance(ir, int) and ir > 0 and ir not in self.by_ir and ir not in SKIP_IR:
                self.by_ir[ir] = {
                    "ir": ir,
                    "name": clean(reg.get("name", "")),
                    "age": reg.get("age", ""),
                    "sex": reg.get("sex", ""),
                    "date": reg.get("date", "") or self.doc_dates.get(ir, ""),
                    "procedure": reg.get("proc", "") or "IR Procedure",
                    "diagnosis": reg.get("diagnosis", ""),
                    "cr": reg.get("cr", ""),
                    "unit": reg.get("unit", ""),
                    "folder": "",
                    "series": 0,
                    "frames": 0,
                    "rendered": len(self.renders.get(ir, [])),
                    "has_fluoro": False,
                }
        for ir in set(self.renders.keys()) | set(self.docs.keys()):
            if isinstance(ir, int) and ir > 0 and ir not in self.by_ir and ir not in SKIP_IR:
                self.by_ir[ir] = {
                    "ir": ir,
                    "name": f"Patient {ir}",
                    "age": "",
                    "sex": "",
                    "date": self.doc_dates.get(ir, ""),
                    "procedure": "IR Procedure",
                    "diagnosis": "",
                    "cr": "",
                    "unit": "",
                    "folder": "",
                    "series": 0,
                    "frames": 0,
                    "rendered": len(self.renders.get(ir, [])),
                    "has_fluoro": False,
                }

    def _enrich(self, c: dict) -> dict:
        ir = c["ir_number"]
        reg = self.registry.get(ir, {})
        date = c.get("procedure_date") or ""
        if not date and c.get("study_dates"):
            date = _iso(c["study_dates"][0])
        if not date:
            date = reg.get("date") or self.doc_dates.get(ir, "")
        return {
            "ir": ir,
            "name": clean(c.get("dicom_name") or "") or reg.get("name", ""),
            "age": c.get("age") or reg.get("age", ""),
            "sex": c.get("sex") or "",
            "date": date,
            "procedure": (c.get("procedure_from_folder")
                          or c.get("registry_procedure") or reg.get("proc", "")),
            "diagnosis": reg.get("diagnosis", ""),
            "cr": reg.get("cr") or "",
            "unit": reg.get("unit", ""),
            "folder": c["folder"],
            "series": len(c.get("series", [])),
            "frames": sum(s.get("frames", 0) for s in c.get("series", [])),
            "rendered": len(self.renders.get(ir, [])),
            "has_fluoro": bool(c.get("series")),
        }

    def by_case_id(self, term):
        n = re.sub(r"\D", "", term)
        if not n:
            return []
        n = int(n)
        out = [self.by_ir[n]] if n in self.by_ir else []
        pref = str(n)
        out += sorted((r for k, r in self.by_ir.items()
                       if k != n and str(k).startswith(pref)),
                      key=lambda r: r["ir"])
        return out

    def by_name(self, term):
        q = norm(term)
        if not q:
            return []
        starts = [r for r in self.by_ir.values() if norm(r["name"]).startswith(q)]
        rest = [r for r in self.by_ir.values() if q in norm(r["name"]) and r not in starts]
        return sorted(starts + rest, key=lambda r: r["ir"])

    def by_procedure(self, term):
        q = term.upper().strip()
        if not q:
            return []
        return sorted((r for r in self.by_ir.values()
                       if q in (r["procedure"] or "").upper()), key=lambda r: r["ir"])

    def by_date(self, term):
        d = parse_when(term)
        return sorted((r for r in self.by_ir.values() if r["date"] == d),
                      key=lambda r: r["ir"]) if d else []

    def get_years(self) -> list[str]:
        from collections import Counter
        counts = Counter(r.get("date", "")[:4] for r in self.by_ir.values() if r.get("date"))
        ys = [y for y, c in counts.items() if y.isdigit() and int(y) >= 2022 and c >= 5]
        return sorted(ys, reverse=True) or ["2026", "2025", "2024", "2023"]

    def get_months_for_year(self, year: str) -> list[tuple[str, str]]:
        MONTH_NAMES = {
            "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun",
            "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
        }
        ms = set()
        for r in self.by_ir.values():
            d = r.get("date", "")
            if d.startswith(f"{year}-") and len(d) >= 7:
                mo = d[5:7]
                ms.add((mo, f"{mo} ({MONTH_NAMES.get(mo, mo)})"))
        if not ms:
            ms = {(f"{i:02d}", f"{i:02d} ({MONTH_NAMES[f'{i:02d}']})") for i in range(1, 13)}
        return sorted(ms)

    def get_days_for_month(self, year: str, month: str) -> list[tuple[str, int]]:
        day_counts: dict[str, int] = {}
        prefix = f"{year}-{month}-"
        for r in self.by_ir.values():
            d = r.get("date", "")
            if d.startswith(prefix) and len(d) >= 10:
                day = d[8:10]
                day_counts[day] = day_counts.get(day, 0) + 1
        return sorted(day_counts.items())

    def get_cases_for_day(self, year: str, month: str, day: str) -> list[dict]:
        target = f"{year}-{month}-{day}"
        return sorted((r for r in self.by_ir.values() if r.get("date") == target), key=lambda r: r["ir"])

    def all_cases(self):
        return sorted(self.by_ir.values(), key=lambda r: r["ir"])

    def search(self, mode, term):
        return {"ir": self.by_case_id, "name": self.by_name,
                "procedure": self.by_procedure, "date": self.by_date,
                "all": lambda _t: self.all_cases()}[mode](term)


def results_block(results, title, limit=30):
    lines = [title, ""]
    for i, r in enumerate(results[:limit], 1):
        d_str = keys.fmt_date_dmy(r.get("date", ""))
        name = clean(r.get("name", "")) or "Unknown"
        proc = r.get("procedure", "") or "IR Procedure"
        lines.append(f"{i}. IR {r['ir']} | {d_str} | {name} | {proc}")
    if len(results) > limit:
        lines.append(f"\n... and {len(results) - limit} more cases")
    return "\n".join(lines)


def case_header(store: Store, ir: int) -> str:
    r = store.by_ir[ir]
    return format_clinical_card(
        ir=ir,
        name=r.get("name", ""),
        age=str(r.get("age") or ""),
        sex=str(r.get("sex") or ""),
        procedure=r.get("procedure", ""),
        date=r.get("date", "")
    )


WELCOME = (
    "SMS Jaipur IR — Clinical Search Board\n\n"
    "Tap an option below, or type your query directly:"
)

PROMPTS = {
    "ir": "Which case / IR number?\n\nType the number (e.g. 999, 985, 409).",
    "procedure": "Which procedure?\n\nTap one below or type it (e.g. TACE, PTBD, SEMS, VENASEAL).",
    "date": "Select procedural date:",
    "name": "Which patient name?\n\nType 2-3 letters of the patient name (e.g. AAS, RAJ, BAN).",
}


class Session:
    def __init__(self):
        self.mode: str | None = None
        self.pending: list = []
        self.awaiting: str | None = None
        self.last_ir: int | None = None
        self.page: int = 0
        self.last_screen: str = "menu"
        self.pending_draft: dict | None = None
        self.pending_draft_bytes: bytes | None = None


def looks_like_query(text: str, upd, bot_username: str | None = None) -> bool:
    """In a group, should the bot answer this message?

    True for an explicit mention, a reply to the bot, a bare IR number, a
    known mode word, or anything containing a procedure keyword. False for
    ordinary chatter, so the bot does not interject into a conversation it is
    not part of.
    """
    t = (text or "").strip()
    low = t.lower()
    if not t:
        return False
    if bot_username and bot_username.lower() in low:
        return True
    # replied directly to the bot
    msg = getattr(upd, "message", None)
    if msg is not None:
        reply_to = getattr(msg, "reply_to_message", None)
        if reply_to is not None:
            frm = getattr(reply_to, "from_user", None)
            uname = getattr(frm, "username", None) if frm else None
            if bot_username and uname == bot_username:
                return True
    # Substring matching on mode words gives false positives -- "patient"
    # contains "name". Require a whole word, so the bot does not answer when
    # someone is merely talking about a patient.
    # "patient" alone is too common in clinical chatter to count as a query;
    # "patient name" and "whose patient" still do.
    mode_words = [w for w in MODE_WORDS if w != "patient"]
    if re.search(r"\b(" + "|".join(re.escape(w) for w in mode_words) + r")\b", low):
        return True
    if re.search(r"\b(patient\s+name|which\s+patient|whose\s+patient)\b", low):
        return True
    if re.fullmatch(r"[0-9]{1,4}", t):
        return True
    # An IR number inside a sentence: "post op notes for 999", "IR 999?" etc.
    if re.search(r"\b(ir|case|dna)\s*#?\s*[0-9]{1,4}\b", low) \
            or re.search(r"\b(for|of)\s+(ir|case)\s+[0-9]{1,4}\b", low):
        return True
    if any(h in t.upper() for h in PROCEDURE_HINTS):
        return True
    return False


def keyboard_for(reply: str, store: Store, sess: Session):
    b = keys.board()
    if sess.awaiting == "pick" and sess.pending:
        return keys.pick_keyboard(sess.pending, page=sess.page)
    if sess.mode is not None:
        return b.get(keys.screen_for(sess.mode), b["menu"])
    if sess.last_ir is not None:
        assets = get_patient_assets(sess.last_ir)
        renders_cnt = len(store.renders.get(sess.last_ir, []))
        has_comb = (COMBINED / f"IR{sess.last_ir}_combined.mp4").exists()
        return keys.dynamic_case_keyboard(sess.last_ir, assets, renders_cnt, has_comb)
    return b["menu"]


async def handle(text, store: Store, sess: Session) -> str:
    t = (text or "").strip()
    low = t.lower()

    if low in ("start", "/start", "menu", "help", "/help", "new", "again", "clear", "/clear"):
        sess.__init__()
        sess.page = 0
        return WELCOME
    if low in ("all", "all cases", "everything", "list", "list all",
               "show all", "all cases on file"):
        allc = store.all_cases()
        sess.__init__()
        sess.pending = allc
        sess.awaiting = "pick"
        sess.page = 0
        return results_block(allc, f"All {len(allc)} cases on file:") + \
            "\n\nTap a case button below to open:"
    if low in ("cancel", "stop", "quit", "back"):
        sess.__init__()
        sess.page = 0
        return "Cancelled.\n\n" + WELCOME

    if sess.awaiting == "pick":
        n = re.sub(r"\D", "", t)
        if n and int(n) in [r["ir"] for r in sess.pending]:
            ir = int(n)
            sess.awaiting = None
            sess.last_ir = ir
            return case_header(store, ir)
        if detect_mode(t) is not None:
            sess.__init__()
            return await handle(t, store, sess)
        sess.awaiting = None
        return f"'{t}' is not one of those IR numbers.\n\n" + WELCOME

    if sess.mode is None:
        mode = detect_mode(t)
        if mode is not None:
            sess.mode = mode
            if mode == "all":
                allc = store.all_cases()
                sess.pending = allc
                sess.awaiting = "pick"
                sess.page = 0
                return results_block(allc, f"All {len(allc)} cases on file:") + \
                    "\n\nTap a case button below to open:"
            return PROMPTS[mode]

        # Direct search query typed without selecting a mode button
        if re.fullmatch(r"\d+", t):
            mode = "ir"
        elif any(h in t.upper() for h in PROCEDURE_HINTS):
            mode = "procedure"
        else:
            mode = "name"
        results = store.search(mode, t)
        if not results:
            return (f"No match for '{t}' by {mode}.\n\n"
                    f"Try another term, or /start to search differently.")
        if len(results) == 1:
            ir = results[0]["ir"]
            sess.last_ir = ir
            return case_header(store, ir)
        sess.pending = results
        sess.awaiting = "pick"
        sess.page = 0
        return (results_block(results, f"{len(results)} cases match '{t}':")
                + "\n\nTap a case button below to open:")

    detected = detect_mode(t)
    if detected is not None and (detected != sess.mode or detected == "all"):
        return await handle(t, store, Session())

    mode, term = sess.mode, t
    sess.mode = None
    results = store.search(mode, term)

    if not results:
        return (f"No match for '{term}' by {mode}.\n\n"
                f"Try another term, or NEW to search differently.")

    if len(results) == 1:
        ir = results[0]["ir"]
        sess.last_ir = ir
        return case_header(store, ir)

    label = {"ir": "case", "procedure": "procedure", "date": "date",
             "name": "name"}.get(mode, mode)
    sess.pending = results
    sess.awaiting = "pick"
    sess.page = 0
    return (results_block(results, f"{len(results)} cases match '{term}':")
            + "\n\nTap a case button below to open:")


async def on_callback(update, store: Store, sessions: dict, ids: list) -> None:
    """Route an inline button press with in-place message editing."""
    q = update.callback_query
    await q.answer()
    cid = update.effective_chat.id if update.effective_chat else None
    if cid is None or str(cid) not in ids:
        return
    sess = sessions.setdefault(cid, Session())
    data = q.data or ""
    if not data.startswith(keys.PREFIX):
        return

    # Split: ir:<screen>:<payload...>
    payload = data[len(keys.PREFIX):]
    screen, _, value = payload.partition(":")
    b = keys.board()

    async def say(text, kb=None):
        """In-place message edit to eliminate duplicate menus and double-printing."""
        try:
            if q.message:
                await q.message.edit_text(
                    text, reply_markup=kb, disable_web_page_preview=True)
            else:
                await q.edit_message_text(text, reply_markup=kb)
        except Exception as exc:
            if "Message is not modified" in str(exc):
                return
            try:
                if q.message:
                    await q.message.reply_text(
                        text, reply_markup=kb, disable_web_page_preview=True)
            except Exception as e2:
                print(f"say fallback failed: {e2}")

    if screen == "noop":
        return

    if screen in ("menu", "clear", "cancel"):
        sess.__init__()
        await say(WELCOME, b["menu"])

    elif screen == "mode":
        sess.__init__()
        sess.mode = value
        await say(PROMPTS.get(value, WELCOME), b.get(keys.screen_for(value), b["menu"]))

    elif screen == "all":
        allc = store.all_cases()
        sess.__init__()
        sess.pending = allc
        sess.awaiting = "pick"
        sess.page = 0
        await say(results_block(allc, f"All {len(allc)} cases on file:") +
                  "\n\nSelect a case to open:", keys.pick_keyboard(allc, page=0))

    elif screen == "date":
        # 3-step hierarchy: date:years -> date:year:<y> -> date:month:<y>:<m> -> date:day:<y>:<m>:<d>
        parts = value.split(":")
        sub = parts[0]
        if sub == "years":
            await say("Select Year:", keys.year_keyboard(store.get_years()))
        elif sub == "year":
            year = parts[1]
            months = store.get_months_for_year(year)
            await say(f"Year {year} — Select Month:", keys.month_keyboard(year, months))
        elif sub == "month":
            year, month = parts[1], parts[2]
            days = store.get_days_for_month(year, month)
            if not days:
                await say(f"No cases found in {month}/{year}.", keys.year_keyboard(store.get_years()))
            else:
                await say(f"Year {year}, Month {month} — Select Day (case count):",
                          keys.day_keyboard(year, month, days))
        elif sub == "day":
            year, month, day = parts[1], parts[2], parts[3]
            cases = store.get_cases_for_day(year, month, day)
            sess.pending = cases
            sess.page = 0
            sess.awaiting = "pick"
            title = f"{len(cases)} case(s) on {day}/{month}/{year}:"
            await say(results_block(cases, title) + "\n\nSelect a case to open:",
                      keys.pick_keyboard(cases, page=0))

    elif screen == "term":
        sess.mode = value
        reply_txt = await handle(value, store, sess)
        await say(reply_txt, keyboard_for("", store, sess))

    elif screen == "typehint":
        await say("Type patient name in chat (e.g. AAS, RAJ, BAN):", b["menu"])

    elif screen == "recent":
        recents = sorted((r for r in store.by_ir.values() if r["rendered"]),
                         key=lambda r: -r["ir"])[:8]
        sess.pending = recents
        sess.page = 0
        sess.awaiting = "pick"
        await say(results_block(recents, "Recently rendered cases:") +
                  "\n\nSelect a case to open:", keys.pick_keyboard(recents))

    elif screen == "page":
        sess.page = max(0, int(value or 0))
        await say(results_block(sess.pending, f"{len(sess.pending)} matches — Page {sess.page + 1}")
                  + "\n\nSelect a case to open:",
                  keys.pick_keyboard(sess.pending, page=sess.page))

    elif screen == "open":
        ir = int(value)
        sess.last_ir = ir
        sess.awaiting = None
        assets = get_patient_assets(ir)
        renders_cnt = len(store.renders.get(ir, []))
        has_comb = (COMBINED / f"IR{ir}_combined.mp4").exists()
        await say(case_header(store, ir),
                  keys.dynamic_case_keyboard(ir, assets, renders_cnt, has_comb))

    elif screen == "opnote":
        target_ir = int(value) if (value and value.isdigit()) else sess.last_ir
        if not target_ir:
            await say("Open a case first.", b["menu"])
            return
        sess.last_ir = target_ir
        assets = get_patient_assets(target_ir)
        p = assets.get("op_note")
        if p and p.exists():
            await q.answer("Sending Operative Note...")
            with open(p, "rb") as fh:
                await update.get_bot().send_document(
                    chat_id=cid, document=fh, filename=p.name,
                    caption=f"IR {target_ir} — Operative Note ({p.name})")
        else:
            await q.answer("No operative note file found on disk.", show_alert=True)

    elif screen == "discharge":
        target_ir = int(value) if (value and value.isdigit()) else sess.last_ir
        if not target_ir:
            await say("Open a case first.", b["menu"])
            return
        sess.last_ir = target_ir
        assets = get_patient_assets(target_ir)
        p = assets.get("discharge")
        if p and p.exists():
            await q.answer("Sending Discharge Summary...")
            with open(p, "rb") as fh:
                await update.get_bot().send_document(
                    chat_id=cid, document=fh, filename=p.name,
                    caption=f"IR {target_ir} — Discharge Summary ({p.name})")
        else:
            await q.answer("No discharge summary file found on disk.", show_alert=True)

    elif screen == "scans":
        target_ir = int(value) if (value and value.isdigit()) else sess.last_ir
        if not target_ir:
            await say("Open a case first.", b["menu"])
            return
        sess.last_ir = target_ir
        assets = get_patient_assets(target_ir)
        p = assets.get("preop")
        if p and p.exists():
            await q.answer("Sending Pre-Op Scans...")
            files = [f for f in p.glob("*") if f.suffix.lower() in (".png", ".jpg", ".jpeg", ".mp4", ".pdf")][:6]
            for f in files:
                with open(f, "rb") as fh:
                    await update.get_bot().send_document(chat_id=cid, document=fh, filename=f.name)
        else:
            await q.answer("No pre-op scan folder found on disk.", show_alert=True)

    elif screen == "deliver":
        target_ir = int(value) if (value and value.isdigit()) else sess.last_ir
        if not target_ir:
            await say("Open a case first.", b["menu"])
            return
        sess.last_ir = target_ir
        await q.answer(f"Sending cine loops for IR {target_ir}...")
        await deliver(store, target_ir, update.get_bot(), cid)

    elif screen == "onevideo":
        target_ir = int(value) if (value and value.isdigit()) else sess.last_ir
        if not target_ir:
            await say("Open a case first.", b["menu"])
            return
        sess.last_ir = target_ir
        await q.answer(f"Sending combined video for IR {target_ir}...")
        await deliver(store, target_ir, update.get_bot(), cid, as_one=True)

    elif screen == "moderate":
        target_ir = int(value) if (value and value.isdigit()) else sess.last_ir
        if not target_ir:
            await say("Open a case first.", b["menu"])
            return
        sess.last_ir = target_ir
        await q.answer(f"Building moderate clips for IR {target_ir}...")
        await say(f"Building moderate-quality clips for IR {target_ir}. "
                  f"One moment.")
        await deliver_variants(store, target_ir, update.get_bot(), cid,
                               mode="moderate")

    elif screen == "zip":
        target_ir = int(value) if (value and value.isdigit()) else sess.last_ir
        if not target_ir:
            await say("Open a case first.", b["menu"])
            return
        sess.last_ir = target_ir
        await q.answer(f"Packaging IR {target_ir}...")
        await say(f"Packing IR {target_ir} into a ZIP archive...")
        await deliver_variants(store, target_ir, update.get_bot(), cid, mode="zip")

    elif screen == "preop":
        parts = value.split(":")
        sub = parts[0]
        patients = preop_dispatch.load_preop_patients()
        if sub == "list":
            text = (
                "📢 *Pre-Op Cath Lab Admission Dispatch*\n\n"
                "Tap a scheduled patient below to view admission instructions, "
                "send WhatsApp notification, or mark call complete:"
            )
            await say(text, keys.preop_list_keyboard(patients))
        elif sub == "detail" and len(parts) > 1:
            pid = parts[1]
            p = next((x for x in patients if x["id"] == pid), None)
            if p:
                msg_text = preop_dispatch.format_admission_message(p)
                wa_link = preop_dispatch.get_whatsapp_link(p.get("phone", ""), msg_text)
                await say(msg_text, keys.preop_detail_keyboard(p, wa_url=wa_link))
        elif sub == "toggle" and len(parts) > 1:
            pid = parts[1]
            p = next((x for x in patients if x["id"] == pid), None)
            if p:
                new_state = not p.get("call_done")
                preop_dispatch.mark_preop_call_done(pid, new_state)
                p["call_done"] = new_state
                msg_text = preop_dispatch.format_admission_message(p)
                wa_link = preop_dispatch.get_whatsapp_link(p.get("phone", ""), msg_text)
                await q.answer("Call Marked DONE ✅" if new_state else "Call Marked PENDING ⚠️")
                await say(msg_text, keys.preop_detail_keyboard(p, wa_url=wa_link))

    elif screen == "addcase":
        if not sess.pending_draft:
            await q.answer("No active report draft found.", show_alert=True)
            return
        draft = sess.pending_draft
        all_irs = [k for k in store.by_ir.keys() if isinstance(k, int)]
        next_ir = max(all_irs) + 1 if all_irs else 1090
        pt_name = draft.get("name") or f"Patient {next_ir}"
        proc = draft.get("procedure") or "IR Procedure"
        new_entry = {
            "ir": next_ir,
            "name": pt_name,
            "age": draft.get("age_sex") or "",
            "sex": "",
            "date": datetime.now().strftime("%Y-%m-%d"),
            "procedure": proc,
            "diagnosis": draft.get("findings") or "",
            "cr": draft.get("id") or "",
            "unit": "IR SMS Jaipur",
            "folder": "",
            "series": 0,
            "frames": 0,
            "rendered": 0,
            "has_fluoro": False,
        }
        store.by_ir[next_ir] = new_entry

        # Save preop report image if bytes were kept
        if sess.pending_draft_bytes:
            try:
                preop_dir = Path(r"E:\Scans\00_PreOp_CT_MRI_Matched_Telegram_Scans")
                folder_name = f"SMS-IR-2026-{next_ir:04d}_{pt_name.replace(' ', '_')}_{proc.replace(' ', '_')}"
                case_dir = preop_dir / folder_name
                case_dir.mkdir(parents=True, exist_ok=True)
                (case_dir / "CT_MRI_Report.png").write_bytes(sess.pending_draft_bytes)
            except Exception as e:
                print(f"preop save error: {e}")

        sess.pending_draft = None
        sess.pending_draft_bytes = None
        sess.last_ir = next_ir
        await q.answer(f"Case Added as IR {next_ir}! ✅")
        assets = get_patient_assets(next_ir)
        header = f"✅ Case Added to EndoFlow & Registry!\n\n" + case_header(store, next_ir)
        await say(header, keys.dynamic_case_keyboard(next_ir, assets, 0, False))

    elif screen == "discard":
        sess.pending_draft = None
        sess.pending_draft_bytes = None
        await q.answer("Draft discarded.")
        sess.__init__()
        await say(WELCOME, b["menu"])


async def deliver_variants(store, ir, tg, chat_id, mode="moderate", delay=2.0):
    """Send the moderate-quality tier, or a single ZIP of the whole case.

    Both are built on demand: the C: drive had ~5 GB free against a 2.9 GB HQ
    corpus, so pre-rendering a second full copy would fill the disk.
    """
    import sys as _sys
    _sys.path.insert(0, str(BUNDLER))
    import variants

    entries = [m for m in store.renders.get(ir, []) if m.get("frames") is not None]
    movies = [m for m in entries if m["frames"] >= 3]
    if not movies:
        await tg.send_message(chat_id=chat_id,
                              text=f"No cine loops rendered for IR {ir}.")
        return

    if mode == "moderate":
        mods, notes = variants.moderate_for_ir(ir)
        if not mods:
            await tg.send_message(chat_id=chat_id,
                                  text=f"Could not build moderate clips for IR "
                                       f"{ir}. {notes[:1]}")
            return
        hq_mb = sum(m["bytes"] for m in movies) / 1e6
        mod_mb = sum(m["bytes"] for m in mods) / 1e6
        await tg.send_message(
            chat_id=chat_id,
            text=f"IR {ir} — {len(mods)} moderate clips\n"
                 f"HQ {hq_mb:.1f} MB -> moderate {mod_mb:.1f} MB "
                 f"({mod_mb/hq_mb*100:.0f}%)")
        for i in range(0, len(mods), 10):
            group = mods[i:i + 10]
            try:
                from telegram import InputMediaVideo
                await tg.send_media_group(
                    chat_id=chat_id,
                    media=[InputMediaVideo(open(m["path"], "rb")) for m in group])
                print(f"  moderate album {i//10+1}: {len(group)}", flush=True)
            except Exception as exc:
                print(f"  moderate album {i//10+1} FAILED: "
                      f"{type(exc).__name__}", flush=True)
            await asyncio.sleep(delay)
        try:
            identity.log_send(chat_id, ir, len(mods), 0, note="moderate")
        except Exception:
            pass
        return

    # mode == "zip"
    still_files = []
    for m in entries:
        if m["frames"] >= 3:
            continue
        src = Path(m["path"])
        png = (variants.MOD_DIR
               / Path(m["path"]).relative_to(BUNDLER / "_index")).with_suffix(".png")
        if not png.exists():
            import subprocess
            png.parent.mkdir(parents=True, exist_ok=True)
            r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", str(src),
                                "-frames:v", "1", str(png)], capture_output=True)
            if r.returncode != 0:
                continue
        still_files.append(png)

    z = variants.build_zip(ir, movies, still_files)
    if not z["ok"]:
        await tg.send_message(chat_id=chat_id,
                              text=f"IR {ir} archive is {z['bytes']/1e6:.0f} MB, "
                                   f"over Telegram's 50 MB cap. Use the "
                                   f"moderate clips instead.")
        return
    with open(z["path"], "rb") as fh:
        await tg.send_document(chat_id=chat_id, document=fh,
                               filename=f"IR{ir}_fluoro.zip",
                               caption=f"IR {ir} — all cine loops and stills "
                                       f"({z['bytes']/1e6:.1f} MB)")
    print(f"  ZIP sent: {z['bytes']/1e6:.1f} MB", flush=True)
    try:
        identity.log_send(chat_id, ir, len(movies), len(still_files), note="zip")
    except Exception:
        pass


async def deliver(store, ir, tg, chat_id, as_one=False, delay=3.0):
    from telegram import InputMediaVideo, InputMediaPhoto
    movies = [m for m in store.renders.get(ir, []) if m.get("frames") is None or m.get("frames", 0) >= 3]
    stills = [m for m in store.renders.get(ir, []) if m.get("frames") is not None and m.get("frames", 0) < 3]

    combined = COMBINED / f"IR{ir}_combined.mp4"
    if as_one and movies and combined.exists():
        with open(combined, "rb") as fh:
            await tg.send_video(chat_id=chat_id, video=fh, filename=combined.name,
                                caption=f"IR {ir} — Combined Procedure Video", supports_streaming=True)
        print(f"  combined video sent ({combined.stat().st_size/1e6:.1f} MB)")
        return

    if not movies and not stills:
        await tg.send_message(
            chat_id=chat_id,
            text=f"Note: Fluoro video files are not yet rendered for IR {ir}.\nAll indexed documents are available via the document buttons.")
        return

    for i in range(0, len(movies), 10):
        group = movies[i:i + 10]
        try:
            await tg.send_media_group(
                chat_id=chat_id,
                media=[InputMediaVideo(open(m["path"], "rb")) for m in group])
            print(f"  album {i//10+1}: {len(group)} video(s) sent", flush=True)
        except Exception as exc:
            # One bad album must not abandon the rest of the case.
            print(f"  album {i//10+1} FAILED: {type(exc).__name__} {exc}",
                  flush=True)
        await asyncio.sleep(delay)

    if stills:
        photos = []
        for m in stills:
            dest = (BUNDLER / "_index" / "fluoro_stills" / f"IR{ir}"
                    / (Path(m["path"]).stem + ".png"))
            p = still_to_photo(Path(m["path"]), dest)
            if p:
                photos.append(p)
        for i in range(0, len(photos), 10):
            group = photos[i:i + 10]
            try:
                await tg.send_media_group(
                    chat_id=chat_id,
                    media=[InputMediaPhoto(open(p, "rb")) for p in group])
                print(f"  stills {i//10+1}: {len(group)} image(s) sent", flush=True)
            except Exception as exc:
                print(f"  stills {i//10+1} FAILED: "
                      f"{type(exc).__name__} {exc}", flush=True)
            await asyncio.sleep(delay)
    print(f"  IR {ir} delivery complete: {len(movies)} video(s), "
          f"{len(stills)} still(s)", flush=True)
    # 6 named clinicians pull this data; a forwarded screenshot should still
    # be traceable to whoever opened the case.
    try:
        identity.log_send(chat_id, ir, len(movies), len(stills),
                          note="one_video" if as_one else "albums")
    except Exception:
        pass


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--self-test", action="store_true")
    args = ap.parse_args()

    store = Store()
    n_rendered = sum(len(v) for v in store.renders.values())
    n_cases_rendered = len(store.renders)
    print(f"cases {len(store.by_ir)} | videos rendered {n_rendered} "
          f"across {n_cases_rendered} case(s) -- {len(store.by_ir)-n_cases_rendered} "
          f"case(s) have no video yet")

    # Telegram allows ONE getUpdates consumer per token. An OS socket bind
    # prevents multiple polling processes from conflicting with each other.
    _lock_sock = None
    if not args.self_test:
        import socket
        try:
            _lock_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            _lock_sock.bind(("127.0.0.1", 49151))
        except OSError:
            print("ERROR: Another instance of board.py is already active on port 49151.")
            print("Terminating duplicate process to prevent polling conflicts.")
            return 3
        try:
            LOCK.write_text(str(os.getpid()))
        except Exception:
            pass

    if args.self_test:
        async def self_test():
            s = Session()
            steps = ["start", "procedure", "TACE", "name", "AAS", "all", "ir", "999"]
            for step in steps:
                out = await handle(step, store, s)
                print(f"\n>>> {step}\n{out[:300]}")
        asyncio.run(self_test())
        return 0

    env = botmod.load_env()
    token = env.get("TELEGRAM_BOT_TOKEN", "")
    ids = identity.allowed_ids(env)
    if not token or not ids:
        print("token or chat IDs missing from .env")
        return 2
    target = int(ids[0])

    if args.check:
        async def ck():
            from telegram import Bot
            async with Bot(token) as tg:
                me = await tg.get_me()
                print(f"bot @{me.username} ({me.full_name}) | chat {target}")
        asyncio.run(ck())
        return 0

    async def run():
        from telegram import Bot
        from telegram.request import HTTPXRequest

        req = HTTPXRequest(connection_pool_size=4, connect_timeout=30.0,
                           read_timeout=120.0, write_timeout=600.0,
                           media_write_timeout=600.0, pool_timeout=30.0)
        sessions: dict[int, Session] = {}
        groups: set[int] = set()
        bot_username = None
        print(f"polling, {len(store.by_ir)} cases, chat {target}")
        print(f"authorised ({len(ids)}):\n{identity.roster()}")

        async with Bot(token, request=req) as tg:
            try:
                bot_username = (await tg.get_me()).username
            except Exception:
                pass
            await tg.delete_webhook(drop_pending_updates=True)
            offset = 0
            while True:
                conflicts = 0
                try:
                    batch = await tg.get_updates(offset=offset, timeout=45)
                    conflicts = 0
                except Exception as exc:
                    if "Conflict" in str(exc):
                        conflicts += 1
                        print(f"getUpdates conflict {conflicts}/5 -- another "
                              f"instance is polling with this token")
                        if conflicts >= 5:
                            print("giving up; stop the other instance and restart")
                            return 3
                    else:
                        print(f"poll error: {type(exc).__name__}: {exc}")
                    await asyncio.sleep(5 if conflicts else 4)
                    continue
                for upd in batch:
                    offset = upd.update_id + 1
                    cid = upd.effective_chat.id if upd.effective_chat else None
                    if cid is None:
                        continue
                    if str(cid) not in ids:
                        # An unknown chat reached the bot -- typically someone
                        # adding it to a new group. Previously this was a
                        # silent discard, which made a group's ID impossible
                        # to discover. Record it instead.
                        ch = upd.effective_chat
                        print(f"  unknown chat {cid} "
                              f"({ch.type if ch else '?'}: "
                              f"{getattr(ch, 'title', None) or getattr(ch, 'first_name', '')})"
                              f" -- add with: identity.add_group('{cid}', ...)",
                              flush=True)
                        continue
                    try:
                        if upd.callback_query is not None:
                            await on_callback(upd, store, sessions, ids)
                            continue
                    except Exception as exc:
                        print(f"callback error: {type(exc).__name__}: {exc}")
                        continue

                    # A group chat ID is negative; remember the ones we see so
                    # the bot only answers real queries there, not all chatter.
                    is_group = str(cid).startswith("-")
                    if is_group:
                        groups.add(cid)
                    msg = upd.message
                    if not msg:
                        continue
                    sess = sessions.setdefault(cid, Session())

                    # Check for photo or document (CT/MRI scan report)
                    is_image_doc = bool(msg.document and msg.document.mime_type and any(t in msg.document.mime_type for t in ("image", "pdf")))
                    if msg.photo or is_image_doc:
                        status_msg = await msg.reply_text("🔍 Running OCR on CT/MRI scan report...")
                        try:
                            if msg.photo:
                                file_obj = await msg.photo[-1].get_file()
                                fn = "report.jpg"
                            else:
                                file_obj = await msg.document.get_file()
                                fn = msg.document.file_name or "report.pdf"
                            file_bytes = await file_obj.download_as_bytearray()
                            fields = await report_ocr.parse_report_file(bytes(file_bytes), fn)
                            sess.pending_draft = fields
                            sess.pending_draft_bytes = bytes(file_bytes)
                            card = (
                                "📋 *New Case Draft from CT/MRI Report:*\n"
                                "━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
                                f"👤 *Patient Name* : {fields.get('name') or 'Not detected'}\n"
                                f"🆔 *CR / UHID No* : {fields.get('id') or 'Not detected'}\n"
                                f"🎂 *Age / Sex*    : {fields.get('age_sex') or 'Not detected'}\n"
                                f"📜 *History*      : {fields.get('history') or 'Not detected'}\n"
                                f"🩻 *CT Finding*   : {fields.get('findings') or 'Not detected'}\n\n"
                                f"🎯 *Suggested Procedure*: {fields.get('procedure') or 'IR Intervention'}\n"
                                "━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
                                "Tap below to add this patient to the EndoFlow Case List:"
                            )
                            await status_msg.edit_text(card, reply_markup=keys.ocr_confirm_keyboard("draft"), parse_mode="Markdown")
                        except Exception as exc:
                            print(f"OCR Error: {exc}")
                            await status_msg.edit_text(f"⚠️ OCR processing failed: {exc}\nPlease ensure image is clear.")
                        continue

                    if not msg.text:
                        continue
                    t = msg.text.strip()
                    low = t.lower()
                    try:
                        if low in ("preop", "/preop", "admission", "calls"):
                            patients = preop_dispatch.load_preop_patients()
                            text = (
                                "📢 *Pre-Op Cath Lab Admission Dispatch:*\n\n"
                                "Tap a scheduled patient below to view admission instructions, "
                                "send WhatsApp notification, or mark call complete:"
                            )
                            await msg.reply_text(text, reply_markup=keys.preop_list_keyboard(patients), parse_mode="Markdown")
                            continue
                        elif low in ("clear", "/clear", "reset"):
                            sess.__init__()
                            await msg.reply_text(WELCOME, reply_markup=keys.board()["menu"])
                        elif low in ("deliver", "send", "send images") and sess.last_ir:
                            await msg.reply_text(f"Sending cine loop videos for IR {sess.last_ir}...")
                            await deliver(store, sess.last_ir, tg, cid)
                        elif low in ("onevideo", "one video", "combined", "combine") and sess.last_ir:
                            await msg.reply_text(f"Sending combined video for IR {sess.last_ir}...")
                            await deliver(store, sess.last_ir, tg, cid, as_one=True)
                        elif low in ("start", "/start", "menu", "help", "/help", "new", "again"):
                            sess.__init__()
                            await msg.reply_text(WELCOME, reply_markup=keys.board()["menu"])
                        else:
                            reply = await handle(t, store, sess)
                            # In a group the bot must not answer every
                            # message in the room -- it stays quiet unless the
                            # text looks like a case query or addresses it.
                            if is_group and not looks_like_query(t, upd, bot_username):
                                continue
                            await msg.reply_text(reply, reply_markup=keyboard_for(reply, store, sess))
                    except Exception as exc:
                        print(f"handler error: {type(exc).__name__}: {exc}")
                await asyncio.sleep(0.3)

    try:
        return asyncio.run(run())
    except KeyboardInterrupt:
        return 0


if __name__ == "__main__":
    raise SystemExit(main())
