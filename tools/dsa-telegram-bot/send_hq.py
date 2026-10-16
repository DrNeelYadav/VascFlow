"""
Send the high-quality fluoro renders to the authorised chat.

Same allowlist and rate limiting as send_fluoro.py, but reads the v2 manifest
(native resolution, real frame rate, collimation handled).
"""
from __future__ import annotations
import argparse, asyncio, json, sys, time
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
sys.path.insert(0, str(BUNDLER)); sys.path.insert(0, str(HERE))
import bot as botmod  # noqa: E402

HQ = BUNDLER / "_index" / "fluoro_video_hq" / "manifest.json"
SKIP_IR = {123}

def clean(s): return (s or "").split("^")[0].strip()

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ir", type=int, required=True)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--min-frames", type=int, default=3,
                    help="skip series with fewer frames (not cine loops)")
    ap.add_argument("--include-stills", action="store_true",
                    help="send 1-2 frame series as photos instead")
    ap.add_argument("--retries", type=int, default=4)
    ap.add_argument("--delay", type=float, default=2.0)
    args = ap.parse_args()

    if not HQ.exists():
        print(f"missing {HQ}"); return 2
    all_entries = [m for m in json.loads(HQ.read_text(encoding="utf8"))
                   if m.get("ok") and m.get("ir_number") == args.ir
                   and m["ir_number"] not in SKIP_IR]
    # A 1-2 frame "series" is a still, not a cine loop. Sent as video it
    # plays for one second and looks like a white/blank screen. Those are
    # delivered as photos instead, or skipped if --min-frames excludes them.
    entries = [m for m in all_entries if m.get("frames", 0) >= args.min_frames]
    dropped = [m for m in all_entries if m.get("frames", 0) < args.min_frames]
    if dropped and not args.include_stills:
        print(f"skipping {len(dropped)} single-frame still(s) "
              f"(use --include-stills to send them as photos):")
        for m in dropped[:8]:
            print(f"    {m['frames']}f  {m['path'].split(chr(92))[-1]}")
    if not entries:
        print(f"no playable renders for IR {args.ir}"); return 2

    reg = botmod.load_registry()
    r = reg.get(args.ir, {})
    name = clean(entries[0].get("patient_name", "")) or r.get("name", "")
    total = sum(m["bytes"] for m in entries) / 1e6
    print(f"IR {args.ir} - {name}")
    print(f"  {r.get('proc') or entries[0].get('study_desc','')}")
    print(f"  {len(entries)} videos, {total:.1f} MB")
    for m in entries[:6]:
        print(f"    {m['bytes']/1e6:5.2f}MB {m.get('size_after')} "
              f"{m['frames']}f @ {m.get('fps_source')}fps")
    if args.dry_run:
        print("DRY RUN"); return 0

    env = botmod.load_env()
    token = env.get("TELEGRAM_BOT_TOKEN", "")
    ids = [x.strip() for x in env.get("TELEGRAM_CHAT_IDS", "").split(",") if x.strip()]
    if not token or not ids:
        print("token or chat IDs missing"); return 2
    target = int(ids[0])

    async def run():
        from telegram import Bot
        from telegram.error import TimedOut, NetworkError, RetryAfter
        # Default read/write timeouts are far too short for multi-MB video
        # uploads on a slow link -- that is what produced 24 "Timed out".
        from telegram.request import HTTPXRequest
        # The default media_write_timeout is 20 s, which aborts any multi-MB
        # video upload mid-flight. That -- not concurrency -- is what produced
        # the 24 "Timed out" failures.
        req = HTTPXRequest(
            connection_pool_size=4,
            connect_timeout=30.0,
            read_timeout=300.0,
            write_timeout=300.0,
            media_write_timeout=600.0,
            pool_timeout=30.0)
        async with Bot(token, request=req) as tg:
            sent = fail = 0
            head = (f"IR {args.ir} - {name}\n"
                    f"Procedure : {r.get('proc') or entries[0].get('study_desc','')}\n"
                    f"Date      : {r.get('date') or 'not recorded'}\n"
                    f"Fluoro    : {len(entries)} studies, native resolution, "
                    f"true frame rate\n"
                    f"Folder    : {entries[0]['folder']}")
            try:
                await tg.send_message(chat_id=target, text=head)
                sent += 1
                await asyncio.sleep(args.delay)
            except Exception as exc:
                print("header failed:", exc); fail += 1

            for m in entries:
                p = Path(m["path"])
                if not p.exists():
                    print("missing", p); fail += 1; continue
                cap = (f"IR {args.ir} | {name} | "
                       f"{m['modality']} {m['frames']}f @ {m.get('fps_source')}fps "
                       f"| {m.get('size_after',[0,0])[1]}x{m.get('size_after',[0,0])[0]}")
                for attempt in range(1, args.retries + 1):
                    try:
                        with p.open("rb") as fh:
                            await tg.send_video(chat_id=target, video=fh,
                                                filename=p.name, caption=cap,
                                                supports_streaming=True)
                        sent += 1
                        print(f"  sent {p.name} {m['bytes']/1e6:.2f} MB", flush=True)
                        break
                    except (TimedOut, NetworkError) as exc:
                        wait = 3.0 * attempt
                        print(f"  retry {attempt}/{args.retries} {p.name}: "
                              f"{type(exc).__name__}, waiting {wait:.0f}s", flush=True)
                        await asyncio.sleep(wait)
                    except RetryAfter as exc:
                        wait = exc.retry_after
                        secs = wait.total_seconds() if hasattr(wait, "total_seconds") else float(wait)
                        print(f"  rate limited, waiting {secs:.0f}s", flush=True)
                        await asyncio.sleep(secs + 1)
                    except Exception as exc:
                        print(f"  FAIL {p.name}: {type(exc).__name__} {exc}")
                        fail += 1
                        break
                else:
                    print(f"  GAVE UP {p.name} after {args.retries} attempts")
                    fail += 1
                await asyncio.sleep(args.delay)
            print(f"\ndone: {sent} sent, {fail} failed")
            return fail
    return asyncio.run(run())

if __name__ == "__main__":
    raise SystemExit(main())
