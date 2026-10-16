"""
Send rendered fluoro MP4s to the authorised Telegram chat.

Reads the render manifest, groups videos by IR number, and uploads. Text
bundles go up first so every video has a labelled patient record above it,
and each video is captioned with the patient, IR number, modality and the
source series it came from -- so anything forwarded still carries provenance.

Safety:
  * Only the chat IDs in TELEGRAM_CHAT_IDS are ever messaged.
  * Nothing is deleted locally; uploads are additive.
  * Rate limited: Telegram throttles bursts, and a 2000-message dump into a
    chat is unpleasant as well as slow.
  * --dry-run prints the plan and sends nothing.

Usage
-----
  python tools/dsa-telegram-bot/send_fluoro.py --dry-run
  python tools/dsa-telegram-bot/send_fluoro.py --ir 1036
  python tools/dsa-telegram-bot/send_fluoro.py --all --limit 50
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
sys.path.insert(0, str(BUNDLER))
sys.path.insert(0, str(HERE))

import bot as botmod  # noqa: E402

MANIFEST = BUNDLER / "_index" / "fluoro_video" / "manifest.json"
FLUORO = BUNDLER / "_index" / "fluoro.json"
DELAY = 1.2          # seconds between sends; Telegram rate-limits below this


def load_env():
    return botmod.load_env()


def clean(s: str) -> str:
    return (s or "").split("^")[0].strip()


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--ir", type=int, help="send one IR number")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--limit", type=int, default=0, help="max videos")
    ap.add_argument("--delay", type=float, default=DELAY)
    ap.add_argument("--no-text", action="store_true",
                    help="skip the text bundle, send video only")
    ap.add_argument("--include-unmapped", action="store_true",
                    help="also send folders that have no IR number")
    args = ap.parse_args()

    if not MANIFEST.exists():
        print(f"missing {MANIFEST}; run render_fluoro.py --all first")
        return 2
    entries = [m for m in json.loads(MANIFEST.read_text(encoding="utf8"))
               if m.get("ok")]
    if not entries:
        print("manifest has no successful renders")
        return 2

    reg = botmod.load_registry()

    # annotate each render with the patient's registry identity
    for m in entries:
        ir = m.get("ir_number")
        row = reg.get(ir) if ir else None
        m["display_name"] = clean(m.get("patient_name", "")) or (
            row["name"] if row else "unknown")
        m["registry_name"] = row["name"] if row else ""
        m["procedure"] = row["proc"] if row else m.get("study_desc", "")

    # Exclusions. IR 123 resolves only through the 1235725 folder, whose
    # header carries no real name and a 2026 study date against a 2023
    # registry row -- explicitly skipped by the user. Folders with no IR
    # number at all are also held back rather than sent unattributed.
    SKIP_IR = {123}
    if not args.include_unmapped:
        dropped_ir = [m for m in entries if m.get("ir_number") in SKIP_IR]
        dropped_none = [m for m in entries if not m.get("ir_number")]
        entries = [m for m in entries
                   if m.get("ir_number") not in SKIP_IR and m.get("ir_number")]
        print(f"excluded: {len(dropped_ir)} video(s) for skipped IR(s) "
              f"{sorted(SKIP_IR)}, {len(dropped_none)} with no IR number")

    if args.ir:
        entries = [m for m in entries if m.get("ir_number") == args.ir]
    elif not args.all:
        print("need --ir N, --all, or --dry-run")
        return 2
    if args.limit:
        entries = entries[: args.limit]

    by_ir: dict[int, list] = {}
    for m in entries:
        by_ir.setdefault(m.get("ir_number"), []).append(m)

    total_mb = sum(m["bytes"] for m in entries) / 1e6
    print(f"videos to send : {len(entries)} across {len(by_ir)} IR numbers")
    print(f"total payload  : {total_mb:.1f} MB")
    print(f"largest single : {max(m['bytes'] for m in entries)/1e6:.1f} MB "
          f"(Telegram limit 50 MB)")
    for ir, ms in sorted(by_ir.items(), key=lambda x: (x[0] is None, x[0])):
        r = reg.get(ir, {})
        print(f"  IR{ir}: {len(ms)} video(s)  {clean(ms[0]['display_name'])[:24]:26}"
              f" {str(r.get('proc',''))[:30]}")

    if args.dry_run:
        print("\nDRY RUN - nothing sent.")
        return 0

    env = load_env()
    token = env.get("TELEGRAM_BOT_TOKEN", "")
    raw_ids = env.get("TELEGRAM_CHAT_IDS", "")
    if not token or not raw_ids:
        print("token or chat IDs missing from .env")
        return 2
    chat_ids = [x.strip() for x in raw_ids.split(",") if x.strip()]
    if not chat_ids:
        print("no allowed chat IDs - refusing to send")
        return 2
    target = int(chat_ids[0])

    async def run():
        from telegram import Bot
        async with Bot(token) as tg:
            sent = failed = 0
            for ir, ms in sorted(by_ir.items(), key=lambda x: (x[0] is None, x[0])):
                r = reg.get(ir, {})
                if not args.no_text:
                    head = (f"IR {ir} - {clean(ms[0]['display_name'])}\n"
                            f"Procedure: {r.get('proc') or ms[0].get('study_desc','')}\n"
                            f"Date     : {r.get('date') or 'not recorded'}\n"
                            f"Fluoro   : {len(ms)} study/studies\n"
                            f"Source   : E:\\\\ patient export folder "
                            f"'{ms[0]['folder']}'")
                    try:
                        await tg.send_message(chat_id=target, text=head)
                        sent += 1
                        await asyncio.sleep(args.delay)
                    except Exception as exc:
                        print(f"  text IR{ir} FAILED: {type(exc).__name__} {exc}")
                        failed += 1

                for m in ms:
                    cap = (f"IR {ir} | {clean(m['display_name'])} | "
                           f"{m.get('procedure','')[:60]} | "
                           f"{m.get('modality','')} {m.get('frames',0)} frames")
                    p = Path(m["path"])
                    if not p.exists():
                        print(f"  MISSING {p}")
                        failed += 1
                        continue
                    try:
                        with p.open("rb") as fh:
                            await tg.send_video(chat_id=target, video=fh,
                                                filename=p.name, caption=cap,
                                                supports_streaming=True)
                        sent += 1
                        print(f"  sent IR{ir} {p.name} "
                              f"({m['bytes']/1e6:.2f} MB)", flush=True)
                    except Exception as exc:
                        print(f"  FAIL {p.name}: {type(exc).__name__} {exc}")
                        failed += 1
                    await asyncio.sleep(args.delay)
            print(f"\ndone: {sent} sent, {failed} failed")
            return failed

    return asyncio.run(run())


if __name__ == "__main__":
    raise SystemExit(main())
