"""Trace exactly why Orthanc will not load the DICOMweb plugin.

Orthanc needs the plugin DLL discoverable and the built-in DICOMweb routes
registered. This prints the plugin-load errors rather than guessing at config.
"""

from __future__ import annotations

import json
import os
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ORTHANC = HERE / "bin" / "Orthanc.exe"
PLUGINS = HERE / "plugins"
CFG = HERE / "orthanc.json"


def main() -> int:
    if not ORTHANC.exists():
        print("Orthanc.exe missing at", ORTHANC)
        return 1

    print("== plugin dir contents ==")
    for p in sorted(PLUGINS.glob("*")):
        print(f"   {p.name}  {p.stat().st_size} bytes")

    # Verify the DLL is genuinely a PE image and not an error page.
    dll = PLUGINS / "OrthancDicomWeb-1.20.dll"
    head = dll.read_bytes()[:2]
    print("\n== DLL magic ==")
    print("   first bytes:", head, "-> MZ" if head == b"MZ" else "-> NOT a PE image")

    print("\n== plugin list as Orthanc sees it ==")
    env = dict(os.environ)
    proc = subprocess.run(
        [str(ORTHANC), "--list-plugins"],
        cwd=str(HERE),
        capture_output=True,
        text=True,
        env=env,
    )
    print(proc.stdout.strip() or "(no stdout)")
    if proc.stderr.strip():
        print("stderr:", proc.stderr.strip()[:2000])

    print("\n== full boot log, plugin-relevant lines ==")
    proc = subprocess.run(
        [str(ORTHANC), str(CFG), "--verbose"],
        cwd=str(HERE),
        capture_output=True,
        text=True,
        timeout=45,
    )
    lines = (proc.stdout + proc.stderr).splitlines()
    for ln in lines:
        low = ln.lower()
        if "plugin" in low or "dicomweb" in low or "error" in low or "warning" in low:
            print("  ", ln)

    print("\n== orthanc.json PluginsDirectory ==")
    cfg = json.loads(CFG.read_text())
    print("   ", cfg.get("PluginsDirectory"))
    print("    resolved:", (HERE / str(cfg.get("PluginsDirectory"))).resolve())
    return 0


if __name__ == "__main__":
    sys.exit(main())