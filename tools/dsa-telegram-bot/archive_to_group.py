"""
Archive the fluoro corpus into a Telegram group, and remember what went where.

Design
------
The group is the off-site copy: if this machine dies, the imaging is still in
Telegram's cloud. The bot stays the interface -- ask it for IR 999 and it
replies with the case.

Telegram rate limit
--------------------
Bots may post about 20 messages per minute in a group. Albums carry 10 videos
each, so a 10-clip album costs 10 messages of quota. With 2088 clips that is
~209 albums at a 30 s spacing -- roughly 1h45m. That floor is arithmetic, not
an implementation limit, so this script paces to it and resumes where it
stopped.

file_id, and why it matters
---------------------------
Once uploaded, Telegram returns a permanent `file_id`. The bot records
file_id -> IR number, so it can re-send an archived clip directly from
Telegram without the local file. If the local render is later deleted, the
archive is still reachable. That index is what makes the group a store rather
than a write-only dump.

Resumable
---------
_progress.json records every clip already uploaded, keyed by file_id. Re-running
after an interruption skips what is already there and never double-posts.
"""

from __future__ import annotations

import argparse
import asyncio
import json
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
sys.path.insert(0, str(BUNDLER))
sys.path.insert(0, str(HERE))

import bot as botmod  # noqa: E402
import identity  # noqa: E402

HQ = BUNDLER / "_index" / "fluoro_video_hq" / "manifest.json"
PROGRESS = HERE / "_archive_progress.json"
ALBUM = 10

# 20 messages/min in a group; an album of 10 spends 10 of them.
SECONDS_PER_ALBUM = 32.0


def load_progress() -> dict:
    if PROGRESS.exists():
        try:
            return json.loads(PROGRESS.read_text(encoding="utf8"))
        except Exception:
            return {}
    return {}


def save_progress(p: dict) -> None:
    tmp = PROGRESS.with_suffix(".tmp")
    tmp.write_text(json.dumps(p, indent=1), encoding="utf8")
    tmp.replace(PROGRESS)


def clean(s: str) -> str:
    return (s or "").split("^")[0].strip()


async def run(ir_filter, limit_irs: int, delay: float) -> int:
    env = botmod.load_env()
    token = env.get("TELEGRAM_BOT_TOKEN", "")
    groups = [g for g in identity.load_users().values() if g["role"] == "group"]
    if not token or not groups:
        print("need TELEGRAM_BOT_TOKEN and a group in users.json")
        return 2
    group_id = int(groups[0]["id"])
    print(f"archiving into {groups[0]['name']} ({group_id})")

    from telegram import Bot, InputMediaVideo
    from telegram.error import RetryAfter, TimedOut, NetworkError
    from telegram.request import HTTPXRequest

    all_entries = [m for m in json.loads(HQ.read_text(encoding="utf8"))
                   if m.get("ok") and Path(m["path"]).exists()]
    # Clips with no IR number have no archive slot -- a folder that never
    # resolved to a case cannot be addressed in the group. Sorting mixed
    # None/int keys raises, so drop them here rather than crashing the run.
    entries = [m for m in all_entries if m.get("ir_number") is not None]
    skipped = len(all_entries) - len(entries)
    if skipped:
        print(f"skipping {skipped} clip(s) with no IR number")
    if ir_filter:
        entries = [m for m in entries if m.get("ir_number") in ir_filter]
    by_ir: dict[int, list] = {}
    for m in entries:
        if (m.get("frames") is None) or m.get("frames", 0) >= 3:
            by_ir.setdefault(m["ir_number"], []).append(m)
    irs = sorted(by_ir)
    if limit_irs:
        irs = irs[:limit_irs]

    progress = load_progress()
    done = sum(1 for k in progress if k.endswith(".mp4"))
    todo_irs = []
    total_clips = 0
    for ir in irs:
        pending = [m for m in by_ir[ir]
                   if Path(m["path"]).name not in progress]
        if pending:
            todo_irs.append((ir, pending))
            total_clips += len(pending)
    print(f"{len(irs)} cases, {len(entries)} clips total")
    print(f"already archived: {done}   remaining: {total_clips} "
          f"across {len(todo_irs)} cases")
    if not todo_irs:
        print("nothing to do")
        return 0

    req = HTTPXRequest(connection_pool_size=2, connect_timeout=30.0,
                       read_timeout=300.0, write_timeout=600.0,
                       media_write_timeout=900.0, pool_timeout=30.0)

    async with Bot(token, request=req) as tg:
        # Pin an index card so the group is navigable without the bot.
        await tg.send_message(
            chat_id=group_id,
            text=("📁 *SMS Jaipur IR — Fluoro Archive*\n\n"
                  "Ask the bot for any case in this group:\n"
                  "`IR 999` · `TACE` · `patient name AASIN` · `21-07-2026`\n\n"
                  "The bot replies with the case record and its cine loops. "
                  "Archive is uploaded here continuously; index below."))

        t0 = time.time()
        for n, (ir, clips) in enumerate(todo_irs, 1):
            head = (f"IR {ir} — {clean(clips[0].get('patient_name',''))}\n"
                    f"{len(clips)} cine loop(s) · native resolution · "
                    f"DICOM frame rate")
            try:
                await tg.send_message(chat_id=group_id, text=head)
            except RetryAfter as exc:
                w = exc.retry_after
                secs = w.total_seconds() if hasattr(w, "total_seconds") else float(w)
                await asyncio.sleep(secs + 2)

            for i in range(0, len(clips), ALBUM):
                group = clips[i:i + ALBUM]
                media = [InputMediaVideo(open(m["path"], "rb")) for m in group]
                for attempt in range(1, 4):
                    try:
                        sent = await tg.send_media_group(
                            chat_id=group_id, media=media)
                        for msg, m in zip(sent or [], group):
                            name = Path(m["path"]).name
                            vid = getattr(msg, "video", None)
                            progress[name] = {
                                "ir": ir,
                                "file_id": getattr(vid, "file_id", None),
                                "bytes": m.get("bytes"),
                                "frames": m.get("frames"),
                                "fps": m.get("fps_source"),
                                "at": time.strftime("%Y-%m-%dT%H:%M:%S"),
                            }
                        save_progress(progress)
                        print(f"  [{n}/{len(todo_irs)}] IR {ir} "
                              f"album {i//ALBUM+1}: {len(group)} uploaded",
                              flush=True)
                        break
                    except (TimedOut, NetworkError) as exc:
                        print(f"  retry {attempt}: {type(exc).__name__}", flush=True)
                        await asyncio.sleep(6.0 * attempt)
                    except RetryAfter as exc:
                        w = exc.retry_after
                        secs = (w.total_seconds() if hasattr(w, "total_seconds")
                                else float(w))
                        print(f"  rate limited {secs}s", flush=True)
                        await asyncio.sleep(secs + 2)
                    except Exception as exc:
                        print(f"  album FAILED: {type(exc).__name__} {exc}",
                              flush=True)
                        break
                await asyncio.sleep(delay)

            el = (time.time() - t0) / 60
            done_n = sum(1 for k in progress if k.endswith(".mp4"))
            print(f"  case {n}/{len(todo_irs)} done — {done_n} clips, "
                  f"{el:.1f} min elapsed", flush=True)

    total = sum(1 for k in progress if k.endswith(".mp4"))
    print(f"\narchive complete: {total} clips stored in Telegram")
    print(f"index: {PROGRESS}")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ir", type=int, action="append",
                    help="archive one IR number (repeatable)")
    ap.add_argument("--limit-irs", type=int, default=0)
    ap.add_argument("--delay", type=float, default=SECONDS_PER_ALBUM)
    args = ap.parse_args()
    return asyncio.run(run(set(args.ir) if args.ir else None,
                          args.limit_irs, args.delay))


if __name__ == "__main__":
    raise SystemExit(main())
