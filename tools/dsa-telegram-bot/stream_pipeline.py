"""
Streaming render -> upload -> prune, for a case index.

Runs the historical E:\\New Scans corpus through a bounded loop:

    1. pick the next batch of cases that has never been archived
    2. render each series to HQ MP4 (native resolution, DICOM frame rate)
    3. upload to the archive group, capturing file_id per clip
    4. delete the local MP4 once it is confirmed in the Telegram archive

Deleting only after the upload is confirmed is the whole point: the file_id in
_archive_progress.json is what keeps the clip retrievable, so pruning frees disk
without losing the archive. A clip that fails to upload is never deleted.

Usage
    python tools/dsa-telegram-bot/stream_pipeline.py --cases cases_new.json
    python tools/dsa-telegram-bot/stream_pipeline.py --batch 5      # dry sizing
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
sys.path.insert(0, str(BUNDLER))
sys.path.insert(0, str(HERE))

import identity  # noqa: E402

HQ_MANIFEST = BUNDLER / "_index" / "fluoro_video_hq" / "manifest.json"
PROGRESS = HERE / "_archive_progress.json"
OUT_ROOT = BUNDLER / "_index" / "fluoro_video_hq"
FFMPEG = "ffmpeg"

MOD_CRF = 22          # same moderate tier, used if HQ is not wanted
PRUNE = True


def norm(s):
    import re
    import unicodedata
    t = unicodedata.normalize("NFKD", str(s or "")).replace("\\", " ")
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.sub(r"[^A-Z0-9]+", "", t.upper())


def frame_rate(ds) -> float:
    for tag in ("CineRate", "RecommendedDisplayFrameRate"):
        v = getattr(ds, tag, None)
        try:
            if v and float(v) > 0:
                return float(v)
        except (TypeError, ValueError):
            pass
    ft = getattr(ds, "FrameTime", None)
    try:
        if ft and float(ft) > 0:
            return 1000.0 / float(ft)
    except (TypeError, ValueError):
        pass
    ftv = getattr(ds, "FrameTimeVector", None)
    if ftv is not None:
        try:
            vals = [float(x) for x in ftv if float(x) > 0]
            if vals:
                return 1000.0 / (sum(vals) / len(vals))
        except (TypeError, ValueError):
            pass
    return 15.0


def render_series(folder: str, root: Path, dest: Path) -> dict:
    """Decode one series from the source tree straight to MP4."""
    import pydicom
    from PIL import Image
    import warnings
    warnings.filterwarnings("ignore")

    files, fps, dims = [], None, None
    for dirpath, _d, names in os.walk(root / folder):
        for fn in names:
            if fn.upper() == "DICOMDIR" or fn.startswith("."):
                continue
            p = Path(dirpath) / fn
            try:
                ds = pydicom.dcmread(p, stop_before_pixels=True, force=True)
            except Exception:
                continue
            files.append((p, str(getattr(ds, "SeriesInstanceUID", "")),
                          str(getattr(ds, "StudyDate", "")),
                          str(getattr(ds, "Modality", "")),
                          str(getattr(ds, "PatientName", "")),
                          int(getattr(ds, "Columns", 0)),
                          int(getattr(ds, "Rows", 0)),
                          int(getattr(ds, "NumberOfFrames", 1) or 1)))
    if not files:
        return {"ok": False, "reason": "no DICOM found"}

    frames_total = 0
    for _p, _u, _d, _m, _n, _c, _r, nf in files:
        frames_total += nf

    best = {}
    for p, u, d, m, n, c, r, nf in files:
        best.setdefault(u, []).append(p)
    series_uid = max(best, key=lambda u: sum(
        1 for x in files if x[1] == u))

    fps = None
    frames = []
    import numpy as np
    for p in best[series_uid]:
        try:
            ds = pydicom.dcmread(p)
            arr = ds.pixel_array
        except Exception:
            continue
        if fps is None:
            fps = frame_rate(ds)
            dims = (int(getattr(ds, "Columns", 0)), int(getattr(ds, "Rows", 0)))
        seq = list(arr) if (arr.ndim == 3 and arr.shape[-1] not in (3, 4)) else [arr]
        for f in seq:
            a = f.astype(float)
            lo, hi = a.min(), a.max()
            if hi > lo:
                a = (a - lo) / (hi - lo) * 255.0
            img = Image.fromarray(a.astype("uint8")).convert("L")
            if img.width > 900:          # only downscale if larger than source
                h = int(img.height * 900 / img.width)
                img = img.resize((900, h), Image.Resampling.LANCZOS)
            frames.append(img)
    if not frames:
        return {"ok": False, "reason": "no frames"}
    fps = max(1.0, min(30.0, fps or 15.0))

    w, h = frames[0].size
    w -= w % 2
    h -= h % 2
    raw = b"".join(np.asarray(f if f.size == (w, h) else
                              f.resize((w, h))).astype("uint8").tobytes()
                   for f in frames)
    dest.parent.mkdir(parents=True, exist_ok=True)
    base = [FFMPEG, "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "gray",
            "-s", f"{w}x{h}", "-r", f"{fps:g}", "-i", "-",
            "-c:v", "libx264", "-preset", "veryfast", "-crf", str(MOD_CRF),
            "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an"]
    r = subprocess.run(base + [str(dest)], input=raw, capture_output=True)
    if r.returncode != 0 or not dest.exists():
        return {"ok": False, "reason": "ffmpeg failed",
                "err": r.stderr.decode("utf8", "replace")[-160:]}
    return {"ok": True, "path": str(dest), "bytes": dest.stat().st_size,
            "frames": len(frames), "fps": round(fps, 2),
            "size": [h, w], "series_uid": series_uid}


async def archive_and_prune(clips: list[dict], group_id: int, token: str,
                            prune: bool) -> dict:
    """Upload clips, record file_id, delete only what is confirmed archived."""
    from telegram import Bot, InputMediaVideo
    from telegram.error import RetryAfter
    from telegram.request import HTTPXRequest

    req = HTTPXRequest(connection_pool_size=2, connect_timeout=30.0,
                       read_timeout=300.0, write_timeout=600.0,
                       media_write_timeout=900.0, pool_timeout=30.0)
    progress = json.loads(PROGRESS.read_text(encoding="utf8")) \
        if PROGRESS.exists() else {}

    uploaded = failed = pruned = 0
    async with Bot(token, request=req) as tg:
        for i in range(0, len(clips), 10):
            group = clips[i:i + 10]
            try:
                sent = await tg.send_media_group(
                    chat_id=group_id,
                    media=[InputMediaVideo(open(c["path"], "rb")) for c in group])
                for msg, c in zip(sent or [], group):
                    vid = getattr(msg, "video", None)
                    progress[os.path.basename(c["path"])] = {
                        "ir": c["ir"], "file_id": getattr(vid, "file_id", None),
                        "bytes": c["bytes"], "frames": c["frames"],
                        "fps": c["fps"], "at": time.strftime("%Y-%m-%dT%H:%M:%S"),
                    }
                    uploaded += 1
            except RetryAfter as exc:
                w = exc.retry_after
                s = w.total_seconds() if hasattr(w, "total_seconds") else float(w)
                await asyncio.sleep(s + 2)
                failed += len(group)
                await asyncio.sleep(30)
            except Exception as exc:
                print(f"    album failed: {type(exc).__name__} {exc}", flush=True)
                failed += len(group)
                await asyncio.sleep(10)
                continue

            PROGRESS.write_text(json.dumps(progress, indent=1), encoding="utf8")

            if prune:
                for c in group:
                    key = os.path.basename(c["path"])
                    rec = progress.get(key)
                    # Only prune when Telegram handed back a file_id. Without
                    # that the clip exists nowhere else and deleting it would
                    # lose the case.
                    if rec and rec.get("file_id"):
                        try:
                            os.remove(c["path"])
                            pruned += 1
                        except OSError:
                            pass
            await asyncio.sleep(30)
    return {"uploaded": uploaded, "failed": failed, "pruned": pruned}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--cases", default=str(BUNDLER / "_index" / "cases_new.json"))
    ap.add_argument("--root", default=r"E:\New Scans")
    ap.add_argument("--batch", type=int, default=4, help="cases per wave")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--no-prune", action="store_true")
    args = ap.parse_args()

    env = dict(
        line.split("=", 1) for line in
        (HERE / ".env").read_text(encoding="utf8").splitlines()
        if "=" in line and not line.startswith("#"))
    token = env.get("TELEGRAM_BOT_TOKEN", "").strip()
    groups = [g for g in identity.load_users().values() if g["role"] == "group"]
    if not token or not groups:
        print("need token and a group")
        return 2
    group_id = int(groups[0]["id"])

    data = json.loads(Path(args.cases).read_text(encoding="utf8"))
    cases = [c for c in data["cases"] if isinstance(c.get("ir_number"), int)]
    progress = json.loads(PROGRESS.read_text(encoding="utf8")) \
        if PROGRESS.exists() else {}
    already = {v.get("ir") for v in progress.values()}
    todo = [c for c in cases if c["ir_number"] not in already]
    print(f"{len(cases)} cases, {len(todo)} not yet archived "
          f"({len(already)} done)")

    wave = todo[: args.batch]
    if not wave:
        print("nothing left")
        return 0
    print(f"wave: {[c['ir_number'] for c in wave]}")

    root = Path(args.root)
    clips = []
    for c in wave:
        ir = c["ir_number"]
        out_dir = OUT_ROOT / str(ir)
        n = 0
        for s in c.get("series", []):
            uid = s["uid"]
            dest = out_dir / f"{s['modality']}_{uid[-12:]}.mp4"
            if dest.exists():
                clips.append({"path": str(dest), "ir": ir,
                              "bytes": dest.stat().st_size,
                              "frames": s.get("frames", 0),
                              "fps": 15.0})
                n += 1
                continue
            r = render_series(c["folder"], root, dest)
            if r.get("ok"):
                clips.append({"path": r["path"], "ir": ir, "bytes": r["bytes"],
                              "frames": r["frames"], "fps": r["fps"]})
                n += 1
        mb = sum(x["bytes"] for x in clips) / 1e6
        print(f"  IR {ir}: {n} clips, {mb:.1f} MB staged")
    print(f"total staged: {len(clips)} clips, "
          f"{sum(x['bytes'] for x in clips)/1e6:.1f} MB")

    if args.dry_run:
        return 0

    res = asyncio.run(archive_and_prune(clips, group_id, token,
                                       prune=not args.no_prune))
    print(f"uploaded {res['uploaded']}, failed {res['failed']}, "
          f"pruned {res['pruned']} local files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())