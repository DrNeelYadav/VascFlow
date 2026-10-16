"""
Send a case to Telegram as ONE grouped message.

Layout
------
  1 header message   - the full case detail, sent once
  2 video albums     - up to 10 cine loops per album, NO per-item captions
  3 photo album(s)   - single-frame stills delivered as IMAGES, never as
                       one-second videos (which just look like a white flash)

Telegram caps a media group at 10 items, so longer cases are chunked. Photos
and videos cannot share one album, so stills go in their own group.

The point of stripping captions is that the album reads as a single grouped
result: the header carries the identity, the media carries the imaging.
"""

from __future__ import annotations

import argparse
import asyncio
import json
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
sys.path.insert(0, str(BUNDLER))
sys.path.insert(0, str(HERE))

import bot as botmod  # noqa: E402
from clinical_summary import format_clinical_card  # noqa: E402

CASES = BUNDLER / "_index" / "cases.json"
HQ = BUNDLER / "_index" / "fluoro_video_hq" / "manifest.json"
V1 = BUNDLER / "_index" / "fluoro_video" / "manifest.json"
STILL_DIR = BUNDLER / "_index" / "fluoro_stills"
FFMPEG = "ffmpeg"
SKIP_IR = {123}          # 1235725 folder, explicitly excluded
ALBUM_MAX = 10           # Telegram media group limit


def clean(s: str) -> str:
    return (s or "").split("^")[0].strip()


def chunk(items: list, size: int = ALBUM_MAX):
    for i in range(0, len(items), size):
        yield items[i:i + size]


def still_to_photo(mp4: Path, dest: Path) -> Path | None:
    """Pull frame 0 out of a single-frame render and save it as a PNG."""
    if dest.exists():
        return dest
    dest.parent.mkdir(parents=True, exist_ok=True)
    proc = subprocess.run(
        [FFMPEG, "-y", "-v", "error", "-i", str(mp4),
         "-frames:v", "1", "-pix_fmt", "rgb24", str(dest)],
        capture_output=True)
    if proc.returncode != 0 or not dest.exists():
        return None
    return dest


def build_header(ir: int, reg: dict, movies: list, stills: list) -> str:
    name = clean(movies[0].get("patient_name", "")) if movies else reg.get("name", "")
    proc = reg.get("proc") or (movies[0].get("study_desc", "") if movies else "")
    date = reg.get("date") or ""
    age = str(reg.get("age") or "")
    sex = str(reg.get("sex") or "")

    if CASES.exists():
        try:
            for c in json.loads(CASES.read_text(encoding="utf8")).get("cases", []):
                if c.get("ir_number") == ir:
                    if not date:
                        date = c.get("procedure_date") or (c.get("study_dates") or [""])[0]
                    if not proc:
                        proc = c.get("procedure_from_folder") or ""
                    if not sex and c.get("sex"):
                        sex = c.get("sex")
                    if not age and c.get("age"):
                        age = str(c.get("age"))
                    break
        except Exception:
            pass

    return format_clinical_card(ir=ir, name=name, age=age, sex=sex, procedure=proc, date=date)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ir", type=int, required=True)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--delay", type=float, default=3.0)
    ap.add_argument("--retries", type=int, default=4)
    args = ap.parse_args()

    all_entries = []
    if HQ.exists():
        all_entries = [m for m in json.loads(HQ.read_text(encoding="utf8"))
                       if m.get("ok") and m.get("ir_number") == args.ir
                       and m["ir_number"] not in SKIP_IR]
    if not all_entries and V1.exists():
        all_entries = [m for m in json.loads(V1.read_text(encoding="utf8"))
                       if m.get("ok") and m.get("ir_number") == args.ir
                       and m["ir_number"] not in SKIP_IR]

    movies = [m for m in all_entries if m.get("frames") is None or m.get("frames", 0) >= 3]
    stills = [m for m in all_entries if m.get("frames") is not None and m.get("frames", 0) < 3]

    if not movies and not stills:
        print(f"nothing to send for IR {args.ir}"); return 2

    reg = botmod.load_registry().get(args.ir, {})
    header = build_header(args.ir, reg, movies, stills)
    mb = sum(m["bytes"] for m in movies) / 1e6

    print(header)
    print()
    print(f"  {len(movies)} video(s) in {len(list(chunk(movies)))} album(s), {mb:.1f} MB")
    print(f"  {len(stills)} still(s) as images")

    if args.dry_run:
        print("\nDRY RUN - nothing sent.")
        return 0

    env = botmod.load_env()
    token = env.get("TELEGRAM_BOT_TOKEN", "")
    ids = [x.strip() for x in env.get("TELEGRAM_CHAT_IDS", "").split(",") if x.strip()]
    if not token or not ids:
        print("token or chat IDs missing"); return 2
    target = int(ids[0])

    async def run():
        from telegram import Bot, InputMediaVideo, InputMediaPhoto
        from telegram.error import TimedOut, NetworkError, RetryAfter
        from telegram.request import HTTPXRequest

        req = HTTPXRequest(connection_pool_size=4, connect_timeout=30.0,
                           read_timeout=300.0, write_timeout=300.0,
                           media_write_timeout=600.0, pool_timeout=30.0)
        fail = 0
        async with Bot(token, request=req) as tg:
            # 1. single header message
            await tg.send_message(chat_id=target, text=header)
            await asyncio.sleep(args.delay)

            # 2. video albums, no captions
            for n, group in enumerate(chunk(movies), 1):
                media = [InputMediaVideo(open(m["path"], "rb")) for m in group]
                for attempt in range(1, args.retries + 1):
                    try:
                        await tg.send_media_group(chat_id=target, media=media)
                        print(f"  album {n}: {len(group)} video(s) sent", flush=True)
                        break
                    except (TimedOut, NetworkError) as exc:
                        print(f"  album {n} retry {attempt}: {type(exc).__name__}",
                              flush=True)
                        await asyncio.sleep(4.0 * attempt)
                    except RetryAfter as exc:
                        w = exc.retry_after
                        s = w.total_seconds() if hasattr(w, "total_seconds") else float(w)
                        print(f"  album {n} rate limited {s:.0f}s", flush=True)
                        await asyncio.sleep(s + 1)
                    except Exception as exc:
                        print(f"  album {n} FAILED: {type(exc).__name__} {exc}")
                        fail += 1
                        break
                else:
                    print(f"  album {n} gave up")
                    fail += 1
                await asyncio.sleep(args.delay)

            # 3. stills as images, grouped
            photos = []
            for m in stills:
                dest = STILL_DIR / f"IR{args.ir}" / (Path(m["path"]).stem + ".png")
                p = still_to_photo(Path(m["path"]), dest)
                if p:
                    photos.append(p)
            if photos:
                for n, group in enumerate(chunk(photos), 1):
                    media = [InputMediaPhoto(open(p, "rb")) for p in group]
                    for attempt in range(1, args.retries + 1):
                        try:
                            await tg.send_media_group(chat_id=target, media=media)
                            print(f"  stills {n}: {len(group)} image(s) sent",
                                  flush=True)
                            break
                        except (TimedOut, NetworkError):
                            await asyncio.sleep(4.0 * attempt)
                        except Exception as exc:
                            print(f"  stills {n} FAILED: {exc}")
                            fail += 1
                            break
                    else:
                        fail += 1
                    await asyncio.sleep(args.delay)
        return fail

    rc = asyncio.run(run())
    print(f"\n{'complete' if not rc else f'{rc} group(s) failed'}")
    return rc


if __name__ == "__main__":
    raise SystemExit(main())
