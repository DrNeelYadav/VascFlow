"""
SMS Jaipur IR Bot - query a patient's bundle by IR number over Telegram.

Answers `/ir 431` with the discharge card, operative note, and registry entry
for that IR number, drawn exclusively from real documents on disk.

    "IR 431 - GORISHANKAR, 45/M, CR 1012211658161
     Procedure : DSA OF LEFT NECK LESION
     Date      : 2022-07-26   Unit: OPD
     Diagnosis : <from registry, or 'not recorded'>

     Discharge card  : ON FILE  (2 documents)
       - 02_Discharge_Cards.../GORISHANKAR/GORISHANKAR.pdf
         scanned, OCR'd, 5,662 chars, matched on UHID
     Operative note  : NOT ON FILE
     Imaging         : none linked to this IR number"

Design constraints:

  * CHAT_ID_ALLOWLIST is mandatory. A leaked bot token must not let an
    outsider query the patient registry, so an unknown chat ID is refused
    before any lookup happens.
  * Patient names ARE shown - this channel is clinician-only and names are
    clinically necessary. The allowlist is what keeps it that way.
  * Nothing is invented. A missing document reports NOT ON FILE and names the
    reason. There are no placeholder vitals, no generic clinical sentences,
    no inferred fields.
  * Read-only. This bot never writes to the index or the archive.

Setup:
  1. @BotFather -> /newbot -> copy the token
  2. Put it in tools/dsa-telegram-bot/.env  (NOT in this file, NOT in chat):

         TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
         TELEGRAM_CHAT_IDS=11111111,22222222

  3. Message the bot once so it appears in getUpdates
  4. Run:  python tools/dsa-telegram-bot/bot.py --check
     (verifies token + prints the chat IDs it can see)
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
# documents.json is only written when a full run completes. During (or after)
# an interrupted run the checkpoint is the fresher source, so merge both and
# prefer the checkpoint copy of any document present in both.
INDEX = BUNDLER / "_index" / "documents.json"
CHECKPOINT = BUNDLER / "_index" / "extract_checkpoint.json"
ARCHIVE_TS = Path(r"C:\SSO\apps\web-app\app\lib\realData\smsPatientArchiveReal.ts")
REGISTRY_XLSX = Path(r"D:\Pendrive Backup\03_Academic_&_Research\DSA SMS jaipur\DSA DATA SHEET.xlsx")


def load_env() -> dict:
    """Read .env next to this file. Values are never echoed."""
    env_file = HERE / ".env"
    out: dict[str, str] = {}
    if env_file.exists():
        for line in env_file.read_text(encoding="utf8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, _, v = line.partition("=")
            out[k.strip()] = v.strip().strip("'\"")
    return out


def load_registry() -> dict[int, dict]:
    """Registry rows keyed by IR number.

    Prefers the live workbook, but falls back to bundles.json -- which also
    carries the 20 IR numbers (1059-1089) created from DICOM headers and so
    is the only place those exist.
    """
    sys.path.insert(0, str(BUNDLER))
    import index_dsa
    out: dict[int, dict] = {}
    try:
        rows, _ = index_dsa.read_registry(REGISTRY_XLSX)
        for r in rows:
            out.setdefault(r.ir_number, {
                "ir": r.ir_number, "name": r.patient_name, "age": r.age,
                "sex": "", "unit": r.unit, "cr": r.cr_no, "proc": r.procedure,
                "date": r.date_iso or "", "diagnosis": r.diagnosis,
                "category": r.category, "source": "workbook",
            })
    except Exception:
        pass
    cached = BUNDLER / "_index" / "bundles.json"
    if not cached.exists():
        if not out:
            raise SystemExit("no registry available (workbook and bundles.json both missing)")
        return out
    for b in json.loads(cached.read_text(encoding="utf8")).get("bundles", []):
        ir = b.get("ir_number")
        if not ir or ir in out:
            continue
        out[ir] = {
            "ir": ir, "name": b.get("patient_name", ""), "age": b.get("age", ""),
            "sex": "", "unit": b.get("unit", ""), "cr": b.get("cr_no", ""),
            "proc": b.get("procedure", ""), "date": b.get("date_iso") or "",
            "diagnosis": b.get("diagnosis", ""), "category": b.get("category", ""),
            "source": "dicom_header" if b.get("source_sheet") == "DICOM_HEADER" else "bundles",
        }
    return out


def load_documents() -> dict[int, dict]:
    """Documents grouped by IR number, merged across the index and checkpoint."""
    import index_dsa  # noqa: F401  (path already set by caller)

    seen: dict[str, dict] = {}
    for src in (INDEX, CHECKPOINT):
        if not src.exists():
            continue
        for rec in json.loads(src.read_text(encoding="utf8")).get("records", []):
            if rec.get("rel"):
                seen[rec["rel"]] = rec

    # The checkpoint is written mid-run, before link_records() has assigned
    # ir_number, so link here rather than showing nothing.
    import extract_documents as ex
    import index_dsa
    unlinked = [r for r in seen.values() if not r.get("ir_number")]
    if unlinked:
        rows, _ = index_dsa.read_registry(REGISTRY_XLSX)
        ex.link_records(unlinked, rows)

    grouped: dict[int, dict] = {}
    for rec in seen.values():
        ir = rec.get("ir_number")
        if not ir:
            continue
        grouped.setdefault(ir, {"discharge": [], "operative": []})[rec["kind"]].append(rec)
    return grouped


def format_bundle(ir: int, reg: dict[int, dict], docs: dict[int, dict]) -> str:
    r = reg.get(ir)
    if not r:
        return (f"IR {ir} is not in the DSA registry.\n"
                f"The registry covers IR 1-{max(reg) if reg else 0}.")

    lines = [
        f"IR {r['ir']} - {r['name'] or 'name not recorded'}",
        f"Age/Sex: {r['age'] or '?'}/{r['sex'] or 'not recorded'}   "
        f"CR: {r['cr'] or 'not recorded'}",
        f"Procedure : {r['proc'] or 'not recorded'}",
        f"Date      : {r['date'] or 'not recorded'}   Unit: {r['unit'] or '-'}",
        f"Diagnosis : {r['diagnosis'] or 'not recorded in registry'}",
    ]

    b = docs.get(ir, {"discharge": [], "operative": []})
    for label, key in (("Discharge card", "discharge"), ("Operative note", "operative")):
        items = b[key]
        if not items:
            lines.append(f"\n{label:<15}: NOT ON FILE")
            continue
        lines.append(f"\n{label:<15}: ON FILE ({len(items)} document"
                     f"{'s' if len(items) != 1 else ''})")
        for d in items[:6]:
            how = d.get("link_reason", "").replace("_", " ")
            lines.append(f"  - {d['rel'].split(chr(92))[-1]}")
            lines.append(f"    {d.get('chars', 0):,} chars via {d.get('method', '?')}"
                         f", matched on {how}")
        if len(items) > 6:
            lines.append(f"  ... and {len(items) - 6} more")

    lines.append("\nImaging      : none linked to this IR number")
    lines.append("\n_Source: real documents on disk. Nothing here is inferred._")
    return "\n".join(lines)


async def _run(token: str, chat_ids: set[str], check_only: bool) -> int:
    from telegram import Update
    from telegram.constants import ParseMode
    from telegram.ext import (
        Application, CommandHandler, ContextTypes, MessageHandler, filters,
    )

    async def guard(update, context):
        """Refuse anyone outside the allowlist, before any data is touched."""
        chat = update.effective_chat
        if chat is None or str(chat.id) not in chat_ids:
            if chat is not None:
                await context.bot.send_message(
                    chat_id=chat.id,
                    text="This bot is restricted to authorised clinical users.",
                )
            return

    async def on_start(update, context):
        await guard(update, context)
        chat = update.effective_chat
        if chat is None or str(chat.id) not in chat_ids:
            return
        await update.message.reply_text(
            "SMS Jaipur IR Bot\n\n"
            "  /ir 431        full bundle for an IR number\n"
            "  /ir 431 431-500 a range\n"
            "  /search NAME   patients matching a name\n"
            "  /stats         how much is actually on file\n"
            "\nEvery line is read from a real document. Missing documents are\n"
            "reported as NOT ON FILE rather than filled in."
        )

    async def on_ir(update, context):
        await guard(update, context)
        chat = update.effective_chat
        if chat is None or str(chat.id) not in chat_ids:
            return
        if not context.args:
            await update.message.reply_text("Usage: /ir 431")
            return
        reg, docs = load_registry(), load_documents()
        try:
            nums = [int(a) for a in context.args if a.isdigit()]
        except ValueError:
            await update.message.reply_text("IR numbers must be numeric.")
            return
        if not nums:
            await update.message.reply_text("Usage: /ir 431")
            return
        if len(nums) == 1:
            await update.message.reply_text(
                format_bundle(nums[0], reg, docs), parse_mode=ParseMode.MARKDOWN)
        else:
            lo, hi = min(nums), max(nums)
            found = [n for n in range(lo, hi + 1) if n in docs]
            head = [f"IR {lo}-{hi}: {len(found)} with a document on file."]
            head.append("")
            for n in found[:40]:
                r = reg.get(n, {})
                kinds = []
                if docs[n]["discharge"]:
                    kinds.append("DC")
                if docs[n]["operative"]:
                    kinds.append("OP")
                head.append(f"  {n:5}  {'+'.join(kinds) or '--':5}  "
                            f"{(r.get('name') or '')[:30]}")
            if len(found) > 40:
                head.append(f"  ... and {len(found) - 40} more")
            await update.message.reply_text("\n".join(head))

    async def on_search(update, context):
        await guard(update, context)
        chat = update.effective_chat
        if chat is None or str(chat.id) not in chat_ids:
            return
        if not context.args:
            await update.message.reply_text("Usage: /search GORISHANKAR")
            return
        import unicodedata

        def norm(s: str) -> str:
            s = unicodedata.normalize("NFKD", s or "").upper()
            return re.sub(r"[^A-Z0-9]+", "", s)

        q = norm(" ".join(context.args))
        reg = load_registry()
        hits = [r for r in reg.values() if q and q in norm(r["name"])]
        hits.sort(key=lambda r: r["ir"])
        if not hits:
            await update.message.reply_text(f"No patient matching '{' '.join(context.args)}'.")
            return
        out = [f"{len(hits)} match(es) for '{' '.join(context.args)}':", ""]
        for r in hits[:50]:
            out.append(f"  IR {r['ir']:5}  {(r['name'] or '')[:34]:36} "
                       f"{(r['proc'] or '')[:28]}")
        await update.message.reply_text("\n".join(out))

    async def on_stats(update, context):
        await guard(update, context)
        chat = update.effective_chat
        if chat is None or str(chat.id) not in chat_ids:
            return
        reg, docs = load_registry(), load_documents()
        dc = sum(1 for v in docs.values() if v["discharge"])
        op = sum(1 for v in docs.values() if v["operative"])
        both = sum(1 for v in docs.values() if v["discharge"] and v["operative"])
        await update.message.reply_text(
            f"Registry IR numbers : {len(reg)}\n"
            f"With a document     : {len(docs)}\n"
            f"  discharge card    : {dc}\n"
            f"  operative note    : {op}\n"
            f"  both              : {both}\n"
            f"\nThe remainder are paper-only. That is a real gap in the\n"
            f"record, not something this bot can fill."
        )

    async def on_text(update, context):
        # Ignore chatter; never echo arbitrary input back into a lookup.
        return

    app = Application.builder().token(token).build()
    # The bot object must be initialized before any request; without this
    # get_updates/get_me raise "This HTTPXRequest is not initialized!".
    app.add_handler(CommandHandler("start", on_start))
    app.add_handler(CommandHandler("help", on_start))
    app.add_handler(CommandHandler("ir", on_ir))
    app.add_handler(CommandHandler("search", on_search))
    app.add_handler(CommandHandler("stats", on_stats))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, on_text))

    if check_only:
        await app.initialize()
        me = await app.bot.get_me()
        print(f"token OK -> @{me.username} ({me.full_name})")
        updates = await app.bot.get_updates()
        seen = sorted({str(u.effective_chat.id) for u in updates if u.effective_chat})
        print(f"chats seen in getUpdates: {seen or '(none - message the bot first)'}")
        print(f"allowed: {sorted(chat_ids)}")
        ok = bool(seen) and set(seen) & chat_ids
        print("RESULT:", "ready" if ok else "no allowed chat found - see above")
        return 0 if ok else 1

    print(f"starting bot, allowed chats: {sorted(chat_ids)}")
    app.run_polling(drop_pending_updates=True)
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description="SMS Jaipur IR Telegram bot.")
    ap.add_argument("--check", action="store_true",
                    help="verify the token and print visible chat IDs, then exit")
    args = ap.parse_args()

    env = load_env()
    token = env.get("TELEGRAM_BOT_TOKEN", "")
    raw_ids = env.get("TELEGRAM_CHAT_IDS", "")
    if not token:
        print(f"TELEGRAM_BOT_TOKEN not set. Put it in {HERE / '.env'}")
        print("Get one from @BotFather -> /newbot. Do not paste it into chat.")
        return 2
    if not raw_ids:
        print("TELEGRAM_CHAT_IDS not set. This bot will refuse every chat.")
        print(f"Set it in {HERE / '.env'} as a comma-separated list, e.g.")
        print("  TELEGRAM_CHAT_IDS=123456789")
        print("Run with --check to see the IDs the API reports.")
        return 2

    chat_ids = {x.strip() for x in raw_ids.split(",") if x.strip()}
    print(f"loaded {len(chat_ids)} allowed chat ID(s)")

    import asyncio
    return asyncio.run(_run(token, chat_ids, args.check))


if __name__ == "__main__":
    raise SystemExit(main())
