"""
On-demand delivery variants: moderate-quality video, and a ZIP of everything.

Why on demand rather than pre-rendered
--------------------------------------
The HQ set is 2.8 GB and the C: drive has ~5 GB free. Pre-rendering a second
moderate copy would fill the disk, so variants are produced when a case is
actually opened and cached after that.

Moderate = CRF 30 yuv420p at native resolution. The HQ set is CRF 16 yuv444p;
CRF 30 lands roughly a quarter to a third of the size and is still visibly
better than the original CRF 28 pass that was too soft. Resolution is never
reduced -- the softness the user objected to came from downscaling, not from
the codec.

ZIP = every cine loop plus every still for one IR number, as a single
archive. Telegram caps sendDocument at 50 MB, so a case whose archive exceeds
that is reported rather than silently split.
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
BUNDLER = HERE.parent / "ir_bundler"
HQ = BUNDLER / "_index" / "fluoro_video_hq" / "manifest.json"
MOD_DIR = BUNDLER / "_index" / "fluoro_video_mod"
ZIP_DIR = BUNDLER / "_index" / "fluoro_zip"
FFMPEG = "ffmpeg"

# HQ is CRF 16 yuv444p. CRF 30 was measured destroying this content -- a
# 148-frame clip collapsed from 5.19 MB to 0.02 MB (0.4%), because
# fluoroscopy is mostly quantum noise and high CRF throws exactly that away.
# Measured on the same clip: CRF 30 -> 0.4%, CRF 23 -> 17%, CRF 22 -> 23%,
# CRF 20 -> 42%. 22 keeps visible detail at roughly a quarter of the size.
MOD_CRF = 22
MAX_ZIP_BYTES = 49 * 1024 * 1024


def mod_path(hq_path: str) -> Path:
    return MOD_DIR / Path(hq_path).relative_to(BUNDLER / "_index")


def build_moderate(hq_path: Path) -> tuple[Path | None, str]:
    """Transcode one HQ clip to the moderate tier. Returns (path, note)."""
    dest = mod_path(str(hq_path))
    if dest.exists() and dest.stat().st_size:
        return dest, "cached"
    dest.parent.mkdir(parents=True, exist_ok=True)
    cmd = [FFMPEG, "-y", "-v", "error", "-i", str(hq_path),
           "-c:v", "libx264", "-preset", "veryfast", "-crf", str(MOD_CRF),
           "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", str(dest)]
    proc = subprocess.run(cmd, capture_output=True)
    if proc.returncode != 0 or not dest.exists():
        dest.unlink(missing_ok=True)
        return None, proc.stderr.decode("utf8", "replace")[-160:]
    return dest, "built"


def moderate_for_ir(ir: int) -> tuple[list[dict], list[str]]:
    """Moderate clips for an IR number, plus notes on anything skipped."""
    entries = [m for m in json.loads(HQ.read_text(encoding="utf8"))
               if m.get("ok") and m.get("ir_number") == ir]
    out, notes = [], []
    for m in entries:
        src = Path(m["path"])
        if not src.exists():
            notes.append(f"missing {src.name}")
            continue
        p, note = build_moderate(src)
        if p is None:
            notes.append(f"{src.name}: {note}")
            continue
        rec = dict(m)
        rec["path"] = str(p)
        rec["bytes"] = p.stat().st_size
        rec["tier"] = "moderate"
        out.append(rec)
    return out, notes


def build_zip(ir: int, movie_entries: list[dict], still_files: list[Path]) -> dict:
    """One archive per case: cine loops + stills + a manifest."""
    dest = ZIP_DIR / f"IR{ir}.zip"
    manifest = {
        "ir_number": ir,
        "built": len(movie_entries),
        "clips": [{"file": Path(m["path"]).name,
                   "frames": m.get("frames"),
                   "fps": m.get("fps_source"),
                   "bytes": Path(m["path"]).stat().st_size}
                  for m in movie_entries if Path(m["path"]).exists()],
        "stills": [p.name for p in still_files],
    }
    dest.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
        z.writestr("manifest.json", json.dumps(manifest, indent=1))
        for m in movie_entries:
            p = Path(m["path"])
            if p.exists():
                z.write(p, f"clips/{p.name}")
        for p in still_files:
            if p.exists():
                z.write(p, f"stills/{p.name}")
    size = dest.stat().st_size
    return {"path": str(dest), "bytes": size,
            "ok": size <= MAX_ZIP_BYTES,
            "reason": "" if size <= MAX_ZIP_BYTES else
                      f"{size/1e6:.1f} MB exceeds the 50 MB Telegram cap"}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ir", type=int, help="build moderate + zip for one case")
    ap.add_argument("--zip-only", action="store_true")
    args = ap.parse_args()

    if not args.ir:
        print("need --ir N")
        return 2
    entries = [m for m in json.loads(HQ.read_text(encoding="utf8"))
               if m.get("ok") and m.get("ir_number") == args.ir]
    if not entries:
        print(f"no rendered clips for IR {args.ir}")
        return 2

    movies = [m for m in entries if m.get("frames") is not None and m["frames"] >= 3]
    stills = [m for m in entries if m.get("frames") is not None and m["frames"] < 3]

    still_files = []
    for m in stills:
        p = MOD_DIR / Path(m["path"]).relative_to(BUNDLER / "_index").with_suffix(".png")
        if not p.exists():
            png = MOD_DIR / Path(m["path"]).relative_to(BUNDLER / "_index")
            png = png.with_suffix(".png")
            png.parent.mkdir(parents=True, exist_ok=True)
            r = subprocess.run([FFMPEG, "-y", "-v", "error", "-i", m["path"],
                                "-frames:v", "1", str(png)], capture_output=True)
            if r.returncode == 0 and p.exists():
                still_files.append(p)
        else:
            still_files.append(p)

    if not args.zip_only:
        mods, notes = moderate_for_ir(args.ir)
        hq_mb = sum(m["bytes"] for m in movies) / 1e6
        mod_mb = sum(m["bytes"] for m in mods) / 1e6
        print(f"IR {args.ir}: {len(mods)}/{len(movies)} moderate clips")
        print(f"  HQ       {hq_mb:7.1f} MB")
        print(f"  moderate {mod_mb:7.1f} MB  "
              f"({(mod_mb/hq_mb*100) if hq_mb else 0:.0f}% of HQ)")
        for n in notes[:5]:
            print(f"  note: {n}")

    z = build_zip(args.ir, movies, still_files)
    print(f"\nZIP: {Path(z['path']).name}  {z['bytes']/1e6:.1f} MB  "
          f"{'OK' if z['ok'] else z['reason']}")
    print(f"  {z['path']}")
    return 0 if z["ok"] else 1


if __name__ == "__main__":
    raise SystemExit(main())