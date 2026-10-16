"""Shared configuration for the SMS Hospital Telegram case-intake service.

Stdlib only. This module is imported by BOTH interpreters:

  * the watcher  (python-telegram-bot 22.6 lives in the dsa-telegram-bot venv)
  * the worker   (pydicom 3.0.1 lives in the Python312 interpreter)

so it must never import telegram, pydicom or requests.

Two interpreters, two responsibilities
--------------------------------------
The contract pins pydicom 3.0.1 to the Python312 interpreter and forbids
installing it anywhere else, while python-telegram-bot 22.6 is only present in
the dsa-telegram-bot virtual environment. Neither interpreter can see the
other's packages. Rather than install anything, the watcher drives the worker
as a subprocess: the watcher owns the Telegram conversation, the worker owns
every byte of DICOM. Each side therefore imports only what it truly has.

Credentials
-----------
TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_IDS are read at runtime from the existing
dsa-telegram-bot .env file, which this service only ever reads. Their values
are never printed, logged, written to disk, or returned by any function here.
See mask_secret() for the only sanctioned way to refer to them.
"""

from __future__ import annotations

import hashlib
import os
import re
import sys
import unicodedata
from datetime import datetime, timezone
from pathlib import Path

# --------------------------------------------------------------------------
# Locations
# --------------------------------------------------------------------------

HERE = Path(__file__).resolve().parent
TOOLS = HERE.parent
BOT_DIR = TOOLS / "dsa-telegram-bot"

#: Credential file. READ ONLY. This service never writes to dsa-telegram-bot.
ENV_FILE = BOT_DIR / ".env"

#: Interpreter that owns the Telegram session (has python-telegram-bot 22.6).
CREDENTIAL_PY = BOT_DIR / ".venv" / "Scripts" / "python.exe"

#: Interpreter that owns DICOM work (has pydicom 3.0.1 + requests).
DICOM_PY = Path(r"C:\Users\NEEL\AppData\Local\Programs\Python\Python312\python.exe")

ORTHANC_BASE = "http://127.0.0.1:8042"

# --------------------------------------------------------------------------
# Runtime state written by this service (and by nothing else)
# --------------------------------------------------------------------------

STATE_DIR = HERE / "state"
INDEX_JSON = STATE_DIR / "case_index.json"
STATE_JSON = STATE_DIR / "state.json"
LOG_FILE = STATE_DIR / "intake.log"
DOWNLOAD_DIR = STATE_DIR / "downloads"
CASES_DIR = STATE_DIR / "cases"

SCHEMA_VERSION = 1

# --------------------------------------------------------------------------
# Archive safety limits
# --------------------------------------------------------------------------
# Calibrated against the 55 real case archives on
# D:\02_Medical_Imaging_&_DICOM_Cases\05_Archived_Study_Zips\Telegram_Patient_Zips
# (largest: 6,389 entries, 4.41 GiB uncompressed, 11.3x expansion). Every limit
# below sits far above the worst real case, so ordinary clinical archives are
# never refused; the limits exist to stop a deliberate or corrupt bomb.

MAX_ENTRIES = 200_000            # real worst case: 6,389
MAX_TOTAL_UNCOMPRESSED = 64 * 2**30   # real worst case: 4.41 GiB
MAX_SINGLE_ENTRY = 8 * 2**30     # a single DICOM instance above 8 GiB is not real
MAX_EXPANSION_RATIO = 200.0      # real worst case: 11.3x
MAX_PATH_DEPTH = 32              # real worst case: 5
MAX_CASE_NAME_LEN = 80

#: Telegram's Bot API refuses to download files larger than this. Several real
#: departmental archives exceed it, so the size is checked up front and the
#: operator is told plainly rather than being left with an opaque failure.
TELEGRAM_MAX_DOWNLOAD_BYTES = 20 * 2**20

#: Seconds to wait on the Orthanc REST API.
ORTHANC_TIMEOUT = 120

USER_AGENT = "sms-telegram-case-intake/1.0"

# --------------------------------------------------------------------------
# Credential loading
# --------------------------------------------------------------------------


def load_env(path: Path | None = None) -> dict[str, str]:
    """Parse the dsa-telegram-bot .env file. Values are never echoed.

    Supports the usual KEY=VALUE form with optional quoting and #-comments.
    A missing file yields an empty mapping rather than raising, so the caller
    can report a single clear message.
    """
    env_path = path or ENV_FILE
    values: dict[str, str] = {}
    if not env_path.exists():
        return values
    for raw_line in env_path.read_text(encoding="utf8", errors="replace").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        if line.startswith("export "):
            line = line[len("export "):]
        key, _, value = line.partition("=")
        value = value.strip()
        if len(value) >= 2 and value[0] == value[-1] and value[0] in "'\"":
            value = value[1:-1]
        values[key.strip()] = value
    return values


def allowed_chat_ids(env: dict[str, str] | None = None) -> set[int]:
    """Parse TELEGRAM_CHAT_IDS into a set of ints.

    Ints, not strings: a group id may be written as '-1001234' and must not
    silently fail to match the int Telegram reports. Malformed entries are
    dropped; nothing here prints a chat id.
    """
    raw = (env if env is not None else load_env()).get("TELEGRAM_CHAT_IDS", "")
    out: set[int] = set()
    for chunk in re.split(r"[,\s]+", raw.strip()):
        if not chunk:
            continue
        try:
            out.add(int(chunk))
        except ValueError:
            continue
    return out


def mask_secret(value: str, keep: int = 4) -> str:
    """Render a secret as a short fingerprint that cannot be replayed.

    Used for chat ids in --check output. The contract forbids printing the
    values, so operators identify their chats by a stable non-reversible tag
    instead. The token itself is never passed here; it is never displayed at
    all.
    """
    text = str(value or "")
    if not text:
        return "(empty)"
    return f"id#{hashlib.sha256(text.encode('utf8')).hexdigest()[:8]}"


def chat_key(chat_id: int | str) -> str:
    """Non-reversible, stable key for a chat id, safe for logs and state keys."""
    return f"chat#{hashlib.sha256(str(chat_id).encode('utf8')).hexdigest()[:12]}"


# --------------------------------------------------------------------------
# Case folder naming
# --------------------------------------------------------------------------

_WINDOWS_RESERVED = {
    "CON", "PRN", "AUX", "NUL",
    *(f"COM{i}" for i in range(1, 10)),
    *(f"LPT{i}" for i in range(1, 10)),
}


def sanitise_case_name(raw: str) -> str:
    """Turn an arbitrary archive/file name into a safe single folder segment.

    The departmental archives use names like 'BO_SHILA__11_M__M' and
    'uday singh'. Underscores, spaces, digits and letters survive; everything
    else collapses to a space. The result is never empty, never a Windows
    reserved device name, never a hidden file, and never longer than
    MAX_CASE_NAME_LEN.
    """
    stem = str(raw or "").strip()
    if stem.lower().endswith(".zip"):
        stem = stem[:-4]
    stem = unicodedata.normalize("NFKD", stem)
    stem = "".join(ch for ch in stem if not unicodedata.combining(ch))
    stem = re.sub(r"[^A-Za-z0-9 _-]+", " ", stem)
    stem = re.sub(r"\s+", " ", stem).strip(" ._-")
    stem = stem.lstrip(".")  # never create a hidden folder
    if not stem:
        stem = "case"
    if stem.split(" ")[0].upper() in _WINDOWS_RESERVED:
        stem = "_" + stem
    return stem[:MAX_CASE_NAME_LEN].rstrip(" ._-") or "case"


def case_id_for(slug: str, content_sha256: str) -> str:
    """Deterministic, collision-free case id.

    Folding the content hash in means re-downloading the identical archive
    resolves to the identical folder, so a restart cannot leave two copies of
    one case on disk.
    """
    digest = hashlib.sha256(content_sha256.encode("utf8")).hexdigest()[:8]
    return f"{slug}__{digest}"


# --------------------------------------------------------------------------
# Time / logging
# --------------------------------------------------------------------------


def utc_now_iso() -> str:
    """Current UTC time, second precision, as an ISO-8601 string."""
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def ensure_dirs() -> None:
    """Create the state tree this service owns."""
    for directory in (STATE_DIR, DOWNLOAD_DIR, CASES_DIR):
        directory.mkdir(parents=True, exist_ok=True)


def log_line(message: str) -> None:
    """Write one timestamped line to stdout and to the service log file."""
    stamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"{stamp}  {message}"
    print(line, flush=True)
    try:
        STATE_DIR.mkdir(parents=True, exist_ok=True)
        with LOG_FILE.open("a", encoding="utf8") as handle:
            handle.write(line + "\n")
    except OSError:
        # A read-only disk must not take the service down mid-case; the
        # console line above is still emitted.
        pass


def describe_environment() -> str:
    """One line naming the interpreter and which half of the stack it owns."""
    if "pydicom" in sys.modules:
        return f"worker (python {sys.version.split()[0]}, pydicom loaded)"
    return f"watcher (python {sys.version.split()[0]}, telegram loaded)"
