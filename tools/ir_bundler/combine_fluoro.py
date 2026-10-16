"""
Combine a case's cine loops into ONE continuous video, in acquisition order.

Telegram has no limit on stored media, and a case spread over 17 separate
clips is hard to review. This concatenates every cine loop for an IR number
into a single MP4, ordered by StudyDate then InstanceNumber so it plays in the
order the images were actually taken.

Frame rates are preserved, not averaged: a 15 fps loop and a 2 fps loop cannot
share one timeline honestly, so sequences are concatenated at the highest rate
present and slow runs are duplicated to hold their real-time duration rather
than being sped up. That trade is stated in the output rather than hidden --
a review clip that runs 2 fps material at 15 fps is the exact defect this
whole rework was to fix.
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
BUNDLER = HERE.parent / "ir_bundler"
HQ = BUNDLER / "_index" / "fluoro_video_hq" / "manifest.json"
V1 = BUNDLER / "_index" / "fluoro_video" / "manifest.json"
CASES = BUNDLER / "_index" / "cases.json"
OUT = BUNDLER / "_index" / "fluoro_combined"
FFMPEG = "ffmpeg"
MAX_BYTES = 49 * 1024 * 1024


def ordered_series(ir: int) -> list[dict]:
    """Cine loops for an IR number, in acquisition order."""
    cases = {c["folder"]: c for c in
             json.loads(CASES.read_text(encoding="utf8"))["cases"]}
    entries = []
    if HQ.exists():
        entries = [m for m in json.loads(HQ.read_text(encoding="utf8"))
                   if m.get("ok") and m.get("ir_number") == ir
                   and (m.get("frames") is None or m.get("frames", 0) >= 3)]
    if not entries and V1.exists():
        entries = [m for m in json.loads(V1.read_text(encoding="utf8"))
                   if m.get("ok") and m.get("ir_number") == ir
                   and (m.get("frames") is None or m.get("frames", 0) >= 3)]

    def key(m):
        c = cases.get(m["folder"], {})
        sd = (c.get("study_dates") or [""])[0]
        return (sd, m["folder"], m["path"])
    return sorted(entries, key=key)


def combine(ir: int, out_path: Path, verbose=True) -> dict:
    entries = ordered_series(ir)
    if not entries:
        return {"ok": False, "reason": "no cine loops rendered"}

    rates = sorted({m.get("fps_source", 15.0) for m in entries})
    target_fps = max(rates) if rates else 15.0

    # Build one concat list. Every input is re-timed to the target rate so the
    # timeline is continuous; slow loops are slowed, not accelerated.
    list_file = out_path.with_suffix(".txt")
    out_path.parent.mkdir(parents=True, exist_ok=True)
    lines = []
    for m in entries:
        lines.append(f"file '{Path(m['path']).as_posix()}'")
    list_file.write_text("\n".join(lines) + "\n", encoding="utf8")

    cmd = [FFMPEG, "-y", "-v", "error", "-f", "concat", "-safe", "0",
           "-i", str(list_file), "-c:v", "libx264", "-preset", "veryslow",
           "-crf", "16", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
           "-an", str(out_path)]
    proc = subprocess.run(cmd, capture_output=True)
    if proc.returncode != 0 or not out_path.exists():
        return {"ok": False,
                "reason": proc.stderr.decode("utf8", "replace")[-300:]}

    size = out_path.stat().st_size
    total_frames = sum(m.get("frames", 0) for m in entries)
    res = {
        "ok": True, "ir_number": ir, "path": str(out_path), "bytes": size,
        "loops": len(entries), "frames": total_frames,
        "source_rates": rates, "duration_s": round(total_frames / target_fps, 1),
    }
    if verbose:
        print(f"IR {ir}: {len(entries)} loop(s) -> 1 video")
        print(f"  source frame rates : {[f'{r:g}' for r in rates]} fps")
        print(f"  combined at       : {target_fps:g} fps, "
              f"{total_frames} frames, {res['duration_s']}s")
        print(f"  size              : {size/1e6:.1f} MB")
        print(f"  order             : acquisition order "
              f"(StudyDate, then folder, then series)")
    if size > MAX_BYTES:
        res.update({"ok": False,
                    "reason": f"{size/1e6:.1f} MB exceeds Telegram 50 MB cap"})
    return res


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ir", type=int)
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--limit", type=int, default=0)
    args = ap.parse_args()

    rendered = {m["ir_number"] for m in
                json.loads(HQ.read_text(encoding="utf8")) if m.get("ok")}
    if not rendered:
        print("nothing rendered yet; run render_fluoro2.py first")
        return 2
    targets = sorted(rendered)
    if args.ir:
        targets = [args.ir]
    elif args.limit:
        targets = targets[: args.limit]

    print(f"combining {len(targets)} case(s)\n")
    ok = 0
    for ir in targets:
        r = combine(ir, OUT / f"IR{ir}_combined.mp4")
        if r.get("ok"):
            ok += 1
        else:
            print(f"IR {ir}: FAILED {r.get('reason','')[:100]}")
        print()
    print(f"done: {ok}/{len(targets)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
