"""
Fluoro renderer v2 -- clinically faithful playback.

The first renderer had four defects, all visible in the videos it produced:

  1. Downscaled every frame to 900 px wide. Fluoro is 512x394 here, so this
     threw away detail for no reason and re-introduced resampling softness.
  2. Encoded at CRF 28, which is a heavy, visibly lossy setting.
  3. Played EVERY series at a fixed 20 fps. A real 2 fps cine loop
     (FrameTimeVector = 500 ms) was sped up 10x, which is why clips looked
     frantic and unreadable.
  4. Left the collimated black border in frame, so the anatomy occupied a
     small square in a large black field and looked "zoomed out".

This version:

  * NO downscaling. Native pixel dimensions are preserved (and only ever
    scaled UP if the source is smaller than the output target).
  * CRF 16 (near-visually-lossless) with yuv444p so chroma detail is not
    thrown away on a grayscale source. Falls back to yuv420p if libx264
    rejects it.
  * Per-series frame timing taken from the DICOM itself: CineRate /
    RecommendedDisplayFrameRate / FrameTimeVector. Playback is real-time, so
    a 2 fps loop plays at 2 fps and a 15 fps loop at 15 fps. Extremely slow
    sources are floored at 1 fps so a 0.5 fps frame does not stall.
  * Automatic collimation detection: the uniform black border is found by
    scanning in from each edge for the first row/column that carries signal,
    then cropping to it with a small margin. Only crops when a real border
    exists.
  * A quality report per file, so the caller can verify what happened rather
    than assume.

Usage:
    python tools/ir_bundler/render_fluoro2.py --ir 409
    python tools/ir_bundler/render_fluoro2.py --all --limit 20
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path

HERE = Path(__file__).parent
ROOT = Path("E:\\")
OUT_ROOT = HERE / "_index" / "fluoro_video_hq"
MANIFEST = OUT_ROOT / "manifest.json"
FFMPEG = shutil.which("ffmpeg") or r"C:\ffmpeg\bin\ffmpeg.exe"

# No cap: Telegram's real limit is 50 MB via Bot API, and the user has
# confirmed storage is not the constraint. We only reject what cannot send.
MAX_BYTES = 49 * 1024 * 1024
CRF = 16
MIN_FPS = 1.0
MAX_FPS = 30.0
MARGIN = 4          # px of black border left in place, to avoid clipping anatomy


def dicom_timing(ds) -> float:
    """Real playback rate in frames/second, from the DICOM's own tags."""
    for tag in ("CineRate", "RecommendedDisplayFrameRate"):
        v = getattr(ds, tag, None)
        if v:
            try:
                f = float(v)
                if f > 0:
                    return f
            except (TypeError, ValueError):
                pass
    ft = getattr(ds, "FrameTime", None)
    if ft:
        try:
            f = float(ft)
            if f > 0:
                return 1000.0 / f
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
    return 0.0


def find_series(folder: str, series_uid: str) -> list[Path]:
    import pydicom
    import warnings
    warnings.filterwarnings("ignore")
    out = []
    base = next((p for p in (ROOT / "Scans" / folder, ROOT / "New Scans" / folder,
                       ROOT / folder) if p.exists()), ROOT / folder)
    for dirpath, _d, files in os.walk(base):
        for fn in files:
            if fn.upper() == "DICOMDIR" or fn.startswith("."):
                continue
            p = Path(dirpath) / fn
            try:
                ds = pydicom.dcmread(p, stop_before_pixels=True, force=True)
            except Exception:
                continue
            if str(getattr(ds, "SeriesInstanceUID", "")) == series_uid:
                out.append(p)
    return out


def collimation_box(frames) -> tuple[int, int, int, int] | None:
    """Find the collimated field: the smallest box containing real signal.

    Uses a threshold on the brightest pixel per row/column, which is robust
    to fluoroscopy mottle (there is always some noise) while ignoring the
    truly black border. Returns (top, left, bottom, right) or None if the
    frame is already full-bleed.
    """
    import numpy as np

    if not frames:
        return None
    a = np.asarray(frames[0])
    if a.ndim != 2:
        return None
    h, w = a.shape
    # Threshold relative to the frame's own dynamic range.
    hi = float(a.max())
    if hi <= 0:
        return None
    thr = max(hi * 0.06, 4.0)

    row_max = a.max(axis=1)
    col_max = a.max(axis=0)
    rows = np.where(row_max > thr)[0]
    cols = np.where(col_max > thr)[0]
    if rows.size == 0 or cols.size == 0:
        return None
    t, b = int(rows[0]), int(rows[-1])
    l, r = int(cols[0]), int(cols[-1])

    # Only crop if there is a meaningful border to remove.
    if t <= 1 and b >= h - 2 and l <= 1 and r >= w - 2:
        return None
    t = max(0, t - MARGIN)
    l = max(0, l - MARGIN)
    b = min(h - 1, b + MARGIN)
    r = min(w - 1, r + MARGIN)
    if (b - t) < 32 or (r - l) < 32:
        return None
    return t, l, b, r


def render_one(series: dict, out_dir: Path) -> dict:
    import numpy as np
    import pydicom
    from PIL import Image
    import warnings
    warnings.filterwarnings("ignore")

    result = {
        "ok": False, "folder": series["folder"],
        "ir_number": series.get("ir_number"),
        "series_uid": series["series_uid"],
        "modality": series["modality"],
        "patient_name": series.get("patient_name", ""),
        "study_desc": series.get("study_desc", ""),
        "source_bytes": series.get("bytes", 0),
    }

    paths = find_series(series["folder"], series["series_uid"])
    if not paths:
        result["reason"] = "series not found on disk"
        return result

    frames, fps = [], None
    src_w = src_h = None
    for p in paths:
        try:
            ds = pydicom.dcmread(p)
            arr = ds.pixel_array
        except Exception as exc:
            result.setdefault("warnings", []).append(f"{p.name}: {exc}")
            continue
        if fps is None:
            fps = dicom_timing(ds)
        if src_w is None:
            src_w, src_h = int(getattr(ds, "Columns", 0)), int(getattr(ds, "Rows", 0))
        if arr.ndim == 3:
            seq = list(arr) if arr.shape[-1] not in (3, 4) else [arr[:, :, :3]]
        else:
            seq = [arr]
        for f in seq:
            a = f.astype(float)
            lo, hi = a.min(), a.max()
            if hi > lo:
                a = (a - lo) / (hi - lo) * 255.0
            # Native resolution only -- no downscaling.
            frames.append(Image.fromarray(a.astype("uint8")).convert("L"))

    if not frames:
        result["reason"] = "no frames decoded"
        return result

    if not fps or fps <= 0:
        fps = 15.0
        result.setdefault("warnings", []).append(
            "no frame timing in DICOM; assumed 15 fps")
    fps = max(MIN_FPS, min(MAX_FPS, fps))
    result["fps_source"] = round(fps, 3)
    result["frames"] = len(frames)

    box = collimation_box(frames)
    if box:
        t, l, b, r = box
        frames = [f.crop((l, t, r + 1, b + 1)) for f in frames]
        result["collimation_cropped"] = True
        result["crop_box"] = [t, l, b, r]
        result["size_before"] = [src_h, src_w]
    else:
        result["collimation_cropped"] = False
    w, h = frames[0].width, frames[0].height
    w -= w % 2
    h -= h % 2
    result["size_after"] = [h, w]

    out_dir.mkdir(parents=True, exist_ok=True)
    dest = out_dir / f'{series["modality"]}_{series["series_uid"][-12:]}.mp4'

    raw = b"".join(
        np.asarray(f if f.size == (w, h) else f.resize((w, h))).astype("uint8").tobytes()
        for f in frames
    )
    common = [FFMPEG, "-y", "-f", "rawvideo", "-pix_fmt", "gray",
              "-s", f"{w}x{h}", "-r", f"{fps:g}", "-i", "-",
              "-c:v", "libx264", "-preset", "veryslow", "-crf", str(CRF),
              "-movflags", "+faststart", "-an"]
    # yuv444p keeps all luma detail; fall back if this build refuses it.
    proc = subprocess.run(common + ["-pix_fmt", "yuv444p", str(dest)],
                          input=raw, capture_output=True)
    if proc.returncode != 0 or not dest.exists():
        proc = subprocess.run(common + ["-pix_fmt", "yuv420p", str(dest)],
                              input=raw, capture_output=True)
    if proc.returncode != 0 or not dest.exists():
        result["reason"] = proc.stderr.decode("utf8", "replace")[-300:]
        return result

    size = dest.stat().st_size
    result.update({"ok": True, "bytes": size, "path": str(dest),
                   "duration_s": round(len(frames) / fps, 2)})
    if size > MAX_BYTES:
        result.update({"ok": False,
                       "reason": f"{size/1e6:.1f} MB exceeds Telegram 50 MB cap"})
    return result


def flush(manifest: list) -> None:
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    prev = json.loads(MANIFEST.read_text(encoding="utf8")) if MANIFEST.exists() else []
    by = {m.get("path") or f"{m.get('folder')}{m.get('series_uid')}": m for m in prev}
    for m in manifest:
        by[m.get("path") or f"{m.get('folder')}{m.get('series_uid')}"] = m
    MANIFEST.write_text(json.dumps(list(by.values()), indent=1), encoding="utf8")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ir", type=int)
    ap.add_argument("--folder")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--cases", default=str(HERE / "_index" / "cases.json"))
    args = ap.parse_args()
    cases = json.loads(Path(args.cases).read_text(encoding="utf8"))

    # cases.json is one record per PATIENT FOLDER holding a series[] list;
    # the renderer works per SERIES, so flatten and carry the case fields down.
    series = []
    for c in cases["cases"]:
        for s in c.get("series", []):
            series.append({
                "folder": c["folder"],
                "ir_number": c.get("ir_number"),
                "patient_name": c.get("dicom_name", ""),
                "study_desc": c.get("procedure_from_folder", ""),
                "series_uid": s["uid"],
                "modality": s["modality"],
                "declared_frames": s.get("frames", 0),
                "bytes": c.get("bytes", 0),
            })

    if args.ir:
        sel = [s for s in series if s.get("ir_number") == args.ir]
    elif args.folder:
        sel = [s for s in series if s["folder"] == args.folder]
    elif args.all:
        sel = series
    else:
        print("need --ir N, --folder NAME, or --all")
        return 2
    if args.limit:
        sel = sel[: args.limit]

    print(f"series: {len(sel)}  ffmpeg: {'ok' if Path(FFMPEG).exists() else shutil.which('ffmpeg')}")
    manifest = []
    t0 = time.time()
    for i, s in enumerate(sel, 1):
        print(f"[{i}/{len(sel)}] IR{s.get('ir_number')} {s['folder'][:34]}", flush=True)
        res = render_one(s, OUT_ROOT / str(s.get("ir_number") or s["folder"]))
        manifest.append(res)
        flush(manifest)
        if res["ok"]:
            print(f"    {res['bytes']/1e6:6.2f} MB  {res.get('size_after')}  "
                  f"{res['frames']}f @ {res['fps_source']}fps  "
                  f"crop={res['collimation_cropped']}  "
                  f"{res['duration_s']}s", flush=True)
        else:
            print(f"    FAIL {res.get('reason','')[:120]}", flush=True)
    ok = sum(1 for m in manifest if m.get("ok"))
    mb = sum(m.get("bytes", 0) for m in manifest) / 1e6
    print(f"\nrendered {ok}/{len(manifest)} in {(time.time()-t0)/60:.1f} min, "
          f"{mb:.1f} MB total")
    print(f"manifest: {MANIFEST}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
