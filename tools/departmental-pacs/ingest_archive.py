"""Ingest real DICOM from the D: imaging archive into the local Orthanc PACS.

Orthanc's REST API accepts a DICOM file POSTed to /instances. This walks the
archive on D: and POSTs each file, then reports what actually landed.

Nothing here invents metadata: every field comes from the DICOM header via
Orthanc's own parser. A file that does not parse is reported, not skipped
silently.

Paths. The archive lives on D:. The volume root folder is named
"02_Medical_Imaging_&_DICOM_Cases" -- verified by listing the drive, not
assumed. An earlier revision of this script pointed at a
"03_Patient_Imaging_&_DICOM_Cases" folder that does not exist on this machine,
so the walk silently collected nothing and ingest appeared to do nothing.
Roots are therefore probed in order and every existing tree is used;
--root overrides everything.

Usage:
    python ingest_archive.py --limit 40          # small smoke batch
    python ingest_archive.py --all               # full archive
    python ingest_archive.py --root <dir> --all  # explicit tree
    python ingest_archive.py --list-roots        # show resolved roots, ingest nothing
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import time
from pathlib import Path

import requests

HERE = Path(__file__).resolve().parent
LOCKFILE = HERE / ".ingest.lock"

ORTHANC = "http://127.0.0.1:8042"
# Candidate archive roots, most specific first. Probed, not assumed.
CANDIDATE_ROOTS = [
    Path(r"D:\02_Medical_Imaging_&_DICOM_Cases\01_Active_Inpatient_Angiosuite_Cases"),
    Path(r"D:\02_Medical_Imaging_&_DICOM_Cases\02_Named_Patient_DICOM_Exports"),
    Path(r"D:\02_Medical_Imaging_&_DICOM_Cases\03_Procedural_Research_DICOM_Series"),
    Path(r"D:\02_Medical_Imaging_&_DICOM_Cases\04_Neel_Clinical_DICOM_Archive"),
    # Legacy names, kept so an older layout still resolves.
    Path(r"D:\03_Patient_Imaging_&_DICOM_Cases\Clinical_Case_Series"),
    Path(r"D:\03_Patient_Imaging_&_DICOM_Cases\Neel_Clinical_DICOM_Archive"),
    Path(r"D:\03_Patient_Imaging_&_DICOM_Cases\Extracted_Datasets_&_Tests"),
]


def orthanc_up() -> bool:
    try:
        r = requests.get(f"{ORTHANC}/system", timeout=5)
        return r.ok
    except requests.RequestException:
        return False


def resolve_roots(explicit: list[str] | None) -> list[Path]:
    """Return the roots to walk. Never returns a path that does not exist."""
    if explicit:
        return [Path(p) for p in explicit]

    found = [p for p in CANDIDATE_ROOTS if p.is_dir()]
    if not found:
        print("No archive root found. Probed:")
        for p in CANDIDATE_ROOTS:
            print(f"  absent: {p}")
        print("\nPass --root <dir> to point at the archive explicitly.")
        return []
    return found


def count_dicom(roots: list[Path]) -> int:
    return sum(1 for r in roots for _ in r.rglob("*.dcm"))


def collect(roots: list[Path], limit: int | None) -> list[Path]:
    files: list[Path] = []
    for root in roots:
        print(f"  scanning: {root}")
        for p in sorted(root.rglob("*.dcm")):
            files.append(p)
            if limit and len(files) >= limit:
                return files
    return files


def report() -> None:
    """Print what Orthanc actually holds, straight from its own index."""
    pats = requests.get(f"{ORTHANC}/patients", timeout=30).json()
    studies = requests.get(f"{ORTHANC}/studies", timeout=30).json()
    series = requests.get(f"{ORTHANC}/series", timeout=30).json()
    insts = requests.get(f"{ORTHANC}/instances", timeout=30).json()
    print(
        f"\nPACS now holds: patients={len(pats)} studies={len(studies)} "
        f"series={len(series)} instances={len(insts)}"
    )
    for p in pats:
        info = requests.get(f"{ORTHANC}/patients/{p}", timeout=30).json()
        t = info.get("MainDicomTags", {})
        name = t.get("PatientName") or "Not on file"
        pid = t.get("PatientID") or "Not on file"
        sex = t.get("PatientSex") or "Not on file"
        print(f"  {name}  id={pid}  sex={sex}")


def acquire_lock() -> int | None:
    """Take the single-instance ingest lock, or return the live PID if held.

    Two concurrent `--all` runs corrupt Orthanc's SQLite index: each build
    observed an empty patient/study tag index because the other was writing.
    Only one ingest may run at a time.
    """
    try:
        fd = os.open(str(LOCKFILE), os.O_CREAT | os.O_EXCL | os.O_WRONLY)
    except FileExistsError:
        try:
            stale = int(LOCKFILE.read_text().strip() or "0")
        except (ValueError, OSError):
            stale = 0
        if stale and _pid_alive(stale):
            return stale
        # The holder is gone; reclaim the lock rather than refusing forever.
        LOCKFILE.unlink(missing_ok=True)
        try:
            fd = os.open(str(LOCKFILE), os.O_CREAT | os.O_EXCL | os.O_WRONLY)
        except FileExistsError:
            return None
    with os.fdopen(fd, "w") as fh:
        fh.write(str(os.getpid()))
    return os.getpid()


def release_lock() -> None:
    LOCKFILE.unlink(missing_ok=True)


def _pid_alive(pid: int) -> bool:
    if pid <= 0:
        return False
    try:
        if pid == os.getpid():
            return True
    except OSError:
        pass
    # Windows has no os.kill(pid, 0); tasklist is the portable check here.
    try:
        out = subprocess.run(
            ["tasklist", "/FI", f"PID eq {pid}", "/NH"],
            capture_output=True,
            text=True,
            timeout=20,
        ).stdout
    except (OSError, subprocess.SubprocessError):
        return False
    return str(pid) in out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", action="append", default=None)
    ap.add_argument("--limit", type=int, default=None)
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--list-roots", action="store_true")
    args = ap.parse_args()

    roots = resolve_roots(args.root)
    if args.list_roots:
        for r in roots:
            print(f"root OK   : {r}  ({count_dicom([r])} .dcm)")
        return 0

    if not orthanc_up():
        print(f"Orthanc is not answering on {ORTHANC}")
        print(r"Start it first: C:\SSO\tools\departmental-pacs\start-orthanc.cmd")
        return 1

    if not roots:
        return 1

    holder = acquire_lock()
    if holder is None or holder != os.getpid():
        print(f"another ingest is already running (pid {holder}); refusing to start a second.")
        return 1

    try:
        return run_ingest(args, roots)
    finally:
        release_lock()


def run_ingest(args: argparse.Namespace, roots: list[Path]) -> int:
    limit = None if args.all else (args.limit or 40)

    t0 = time.time()
    files = collect(roots, limit)
    print(f"\ncollected {len(files)} DICOM files in {time.time() - t0:.1f}s")
    print(f"total available across roots: {count_dicom(roots)}")

    if not files:
        print("nothing to ingest")
        return 1

    ok = failed = 0
    for i, f in enumerate(files, 1):
        try:
            with open(f, "rb") as fh:
                r = requests.post(
                    f"{ORTHANC}/instances",
                    files={"file": (f.name, fh, "application/dicom")},
                    timeout=60,
                )
            if r.status_code in (200, 409):  # 409 = already stored
                ok += 1
            else:
                failed += 1
                if failed <= 5:
                    print(f"  HTTP {r.status_code} on {f.name}")
        except Exception as exc:  # noqa: BLE001
            failed += 1
            if failed <= 5:
                print(f"  {type(exc).__name__}: {f.name}")

        if i % 100 == 0:
            print(f"  ... {i}/{len(files)} (ok={ok} failed={failed})")

    print(f"\ningest complete: ok={ok} failed={failed}")

    try:
        report()
    except (requests.RequestException, json.JSONDecodeError) as exc:
        print(f"could not read back PACS state: {type(exc).__name__}")

    return 0


if __name__ == "__main__":
    sys.exit(main())