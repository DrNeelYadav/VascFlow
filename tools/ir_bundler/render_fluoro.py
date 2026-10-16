"""
Fluoro study renderer: DICOM series -> MP4 (or PNG frames) for Telegram.

Why MP4
-------
Telegram's Bot API caps sendDocument at 50 MB and sendPhoto at 10 MB. This
corpus is 13.19 GB across 2,097 series; the single largest patient folder is
807 MB. Raw DICOM cannot be uploaded at any fidelity, so each series is
rendered to an H.264 MP4 sized to stay under the limit. The result is
scrubbable in the Telegram client, which keyframe photos are not.

Usage
-----
  python tools/ir_bundler/render_fluoro.py --ir 431
  python tools/ir_bundler/render_fluoro.py --folder KHUSHPR
  python tools/ir_bundler/render_fluoro.py --unresolved        # dry report
  python tools/ir_bundler/render_fluoro.py --all --limit 5     # sample render

Output lands in _index/fluoro_video/<IR or folder>/<series>.mp4 plus a
manifest recording exactly which series produced which file, so a sent file
can always be traced back to its source objects.
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
FLUORO_INDEX = HERE / "_index" / "fluoro.json"
OUT_ROOT = HERE / "_index" / "fluoro_video"
ROOT = Path("E:\\")
FFMPEG = shutil.which("ffmpeg") or r"C:\ffmpeg\bin\ffmpeg.exe"

# 48 MB keeps a safe margin under the 50 MB Bot API cap.
MAX_BYTES = 48 * 1024 * 1024
MAX_FRAMES = 900          # ~30 s at 30 fps
FPS = 20


def _enable_cuda_env() -> None:
    """Load the pip CUDA wheels onto PATH so onnxruntime can use the GPU."""
    import pathlib
    try:
        import nvidia
    except ImportError:
        return
    root = pathlib.Path(nvidia.__file__).parent
    for pkg in ("cuda_runtime", "cudnn", "cublas", "cufft", "curand", "nvjitlink"):
        d = root / pkg / "bin"
        if d.exists():
            try:
                os.add_dll_directory(str(d))
            except Exception:
                pass
            os.environ["PATH"] = str(d) + ";" + os.environ.get("PATH", "")


_ocr = None


def _get_ocr():
    global _ocr
    if _ocr is None:
        from rapidocr_onnxruntime import RapidOCR
        _enable_cuda_env()
        cuda = "CUDAExecutionProvider" in __import__(
            "onnxruntime").get_available_providers()
        _ocr = RapidOCR(det_use_cuda=cuda, cls_use_cuda=cuda, rec_use_cuda=cuda)
    return _ocr


def instances_of(series: dict) -> list[Path]:
    """All objects belonging to one series, in InstanceNumber order."""
    import pydicom
    import warnings
    warnings.filterwarnings("ignore")

    folder = series["folder"]
    out = []
    base = ROOT / "Scans" / folder if (ROOT / "Scans" / folder).exists() else (ROOT / folder)
    for dirpath, _d, files in os.walk(base):
        for fn in files:
            if fn.upper() == "DICOMDIR" or fn.startswith("."):
                continue
            p = Path(dirpath) / fn
            try:
                ds = pydicom.dcmread(p, stop_before_pixels=True, force=True)
            except Exception:
                continue
            if str(getattr(ds, "SeriesInstanceUID", "")) == series["series_uid"]:
                out.append(p)
    return out


def to_frames(series: dict, limit: int = MAX_FRAMES) -> list:
    """Decode a series into a list of PIL images, downscaled for transport.

    These are X-Ray Angiographic cine loops: one object carries hundreds of
    frames (e.g. 512x394 x 275). Note these files have no file_meta, so a
    stop_before_pixels read does not surface PixelData -- the 'PixelData' in
    ds test is therefore unreliable here and decoding is attempted directly.
    """
    import numpy as np
    import pydicom
    from PIL import Image
    import warnings
    warnings.filterwarnings("ignore")

    paths = instances_of(series)
    frames = []
    for p in paths:
        try:
            ds = pydicom.dcmread(p)
            arr = ds.pixel_array
        except Exception:
            continue
        if arr.ndim == 3:
            # (frames, rows, cols) or (rows, cols, samples)
            if arr.shape[-1] in (3, 4):
                seq = [arr[:, :, :3]]
            else:
                seq = list(arr)
        else:
            seq = [arr]
        for f in seq:
            a = f.astype(float)
            lo, hi = a.min(), a.max()
            if hi > lo:
                a = (a - lo) / (hi - lo) * 255.0
            img = Image.fromarray(a.astype("uint8"))
            if img.width > 900:
                h = int(img.height * 900 / img.width)
                img = img.resize((900, h), Image.Resampling.LANCZOS)
            frames.append(img.convert("L"))
        if len(frames) >= limit:
            break
    return frames[:limit]


def write_mp4(frames: list, dest: Path, fps: int = FPS) -> dict:
    """Encode frames to H.264. Returns size info, or an error dict."""
    import numpy as np
    from PIL import Image

    if not frames:
        return {"ok": False, "reason": "no frames decoded"}
    if not Path(FFMPEG).exists() and not shutil.which("ffmpeg"):
        return {"ok": False, "reason": "ffmpeg not found"}

    dest.parent.mkdir(parents=True, exist_ok=True)
    h, w = frames[0].height, frames[0].width
    # even dimensions required by libx264
    w -= w % 2
    h -= h % 2
    # Pillow 11 exposes resampling filters as enum members, not callables.
    resample = Image.Resampling.LANCZOS
    raw = b"".join(
        np.asarray(f.resize((w, h), resample)).astype("uint8").tobytes()
        for f in frames
    )
    cmd = [FFMPEG, "-y", "-f", "rawvideo", "-pix_fmt", "gray",
           "-s", f"{w}x{h}", "-r", str(fps), "-i", "-",
           "-c:v", "libx264", "-preset", "veryfast", "-crf", "28",
           "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(dest)]
    proc = subprocess.run(cmd, input=raw, capture_output=True)
    if proc.returncode != 0 or not dest.exists():
        return {"ok": False,
                "reason": proc.stderr.decode("utf8", "replace")[-300:]}
    size = dest.stat().st_size
    if size > MAX_BYTES:
        return {"ok": False, "reason": f"{size} exceeds {MAX_BYTES}", "bytes": size}
    return {"ok": True, "bytes": size, "frames": len(frames),
            "w": w, "h": h, "path": str(dest)}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ir", type=int)
    ap.add_argument("--folder")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--unresolved", action="store_true",
                    help="list folders with no IR number and exit")
    ap.add_argument("--limit", type=int, default=0)
    args = ap.parse_args()

    if not FLUORO_INDEX.exists():
        print(f"missing {FLUORO_INDEX}; run index_fluoro.py first")
        return 2
    data = json.loads(FLUORO_INDEX.read_text(encoding="utf8"))
    series = data["studies"]

    folders = {}
    for s in series:
        folders.setdefault(s["folder"], s)

    if args.unresolved:
        bad = [s for s in folders.values() if not s["ir_number"]]
        print(f"{len(bad)} folders with no IR number:\n")
        for s in sorted(bad, key=lambda x: x["folder"]):
            n = s["patient_name"].split("^")[0]
            print(f"  {s['folder'][:16]:18} {n[:24]:26} {s['study_desc'][:32]}")
        return 0

    if args.ir:
        sel = [s for s in series if s["ir_number"] == args.ir]
        label = f"IR-{args.ir}"
    elif args.folder:
        sel = [s for s in series if s["folder"] == args.folder]
        label = args.folder
    elif args.all:
        sel = series
        label = "all"
    else:
        print("need --ir N, --folder NAME, --all, or --unresolved")
        return 2

    if args.limit:
        sel = sorted(sel, key=lambda s: -s["bytes"])[: args.limit]

    total_bytes = sum(s["bytes"] for s in sel)
    print(f"selected {len(sel)} series, {total_bytes/1e9:.2f} GB source")
    if not Path(FFMPEG).exists() and not shutil.which("ffmpeg"):
        print(f"ffmpeg not found (looked for {FFMPEG}).")
        print("Install ffmpeg and put it on PATH, then re-run.")
        return 2

    # Written after every item so a long render can be shipped from the
    # manifest while it is still running.
    manifest = []

    def flush() -> None:
        mf.parent.mkdir(parents=True, exist_ok=True)
        prev = json.loads(mf.read_text(encoding="utf8")) if mf.exists() else []
        by_path = {m.get("path"): m for m in prev}
        for m in manifest:
            by_path[m.get("path")] = m
        mf.write_text(json.dumps(list(by_path.values()), indent=1), encoding="utf8")

    for i, s in enumerate(sel, 1):
        out_dir = OUT_ROOT / (str(s["ir_number"]) if s["ir_number"] else s["folder"])
        dest = out_dir / f'{s["modality"]}_{s["series_uid"][-12:] or i}.mp4'
        print(f"[{i}/{len(sel)}] {s['folder']} {s['modality']} "
              f"{s['instances']} inst -> {dest.name}", flush=True)
        res = write_mp4(to_frames(s), dest)
        res.update({"folder": s["folder"], "ir_number": s["ir_number"],
                    "series_uid": s["series_uid"],
                    "patient_name": s["patient_name"],
                    "study_desc": s["study_desc"],
                    "source_bytes": s["bytes"]})
        manifest.append(res)
        flush()
        print(f"    {'OK' if res.get('ok') else 'FAIL'} "
              f"{res.get('bytes', 0)/1e6:.1f} MB {res.get('reason','')}", flush=True)

    flush()
    ok = sum(1 for m in manifest if m.get("ok"))
    print(f"\nrendered {ok}/{len(manifest)}; manifest at {mf}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
