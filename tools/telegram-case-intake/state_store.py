"""Durable state: the case index and the cursor that prevents re-downloading.

Stdlib only, so both the watcher and the worker can read it.

Two files, with different jobs:

  case_index.json  the machine-readable record of every case ingested, with
                   the DICOM metadata read from its headers.
  state.json       operational state: the Telegram update offset cursor, the
                   per-message record of what was already handled, and the
                   set of SOP Instance UIDs known to be in Orthanc.

Writes go through a temporary file and os.replace, so an interrupted run
leaves the previous good file intact rather than a truncated one.
"""

from __future__ import annotations

import json
import os
import tempfile
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from config import (
    INDEX_JSON,
    SCHEMA_VERSION,
    STATE_JSON,
    STATE_DIR,
    chat_key,
    utc_now_iso,
)


def _atomic_write_json(path: Path, payload: Any) -> None:
    """Write JSON atomically: temp file in the same dir, then replace."""
    path.parent.mkdir(parents=True, exist_ok=True)
    handle = tempfile.NamedTemporaryFile(
        mode="w", encoding="utf8", dir=str(path.parent),
        prefix=path.name + ".", suffix=".tmp", delete=False,
    )
    try:
        with handle:
            json.dump(payload, handle, indent=2, sort_keys=False, default=str)
            handle.write("\n")
            handle.flush()
            os.fsync(handle.fileno())
        os.replace(handle.name, path)
    except BaseException:
        Path(handle.name).unlink(missing_ok=True)
        raise


def _read_json(path: Path, fallback: Any) -> Any:
    if not path.exists():
        return fallback
    try:
        return json.loads(path.read_text(encoding="utf8"))
    except (OSError, ValueError):
        # A corrupt state file must not stop the service. The caller decides
        # whether that means starting over.
        return fallback


@dataclass
class HandledItem:
    """A Telegram message already processed, keyed for restart safety."""

    chat_key: str
    message_id: int
    case_id: str | None
    outcome: str
    processed_at: str
    archive_name: str | None = None
    archive_sha256: str | None = None

    @property
    def key(self) -> str:
        return f"{self.chat_key}:{self.message_id}"

    def as_dict(self) -> dict[str, Any]:
        return {
            "chat_key": self.chat_key,
            "message_id": self.message_id,
            "case_id": self.case_id,
            "outcome": self.outcome,
            "processed_at": self.processed_at,
            "archive_name": self.archive_name,
            "archive_sha256": self.archive_sha256,
        }


@dataclass
class CaseRecord:
    """One ingested case as it appears in case_index.json."""

    case_id: str
    case_name: str
    ingested_at: str
    source_archive: str
    index: dict[str, Any]
    upload: dict[str, Any]

    def as_dict(self) -> dict[str, Any]:
        record = self.index
        record.update({
            "case_id": self.case_id,
            "case_name": self.case_name,
            "ingested_at": self.ingested_at,
            "source_archive": self.source_archive,
            "upload": self.upload,
        })
        return record


class CaseStore:
    """The index and the cursor, kept in step with each other."""

    def __init__(self, index_path: Path = INDEX_JSON,
                 state_path: Path = STATE_JSON) -> None:
        self.index_path = index_path
        self.state_path = state_path
        self._load()

    # -- loading -----------------------------------------------------------

    def _load(self) -> None:
        state = _read_json(self.state_path, {})
        if not isinstance(state, dict):
            state = {}
        self.cursor: int = int(state.get("telegram_update_cursor", 0) or 0)
        self.handled: dict[str, dict[str, Any]] = {
            k: v for k, v in (state.get("handled_messages") or {}).items()
            if isinstance(v, dict)
        }
        self.known_sops: set[str] = set(state.get("known_sop_instance_uids") or [])
        self.case_summaries: dict[str, dict[str, Any]] = {
            k: v for k, v in (state.get("cases") or {}).items()
            if isinstance(v, dict)
        }

        index = _read_json(self.index_path, {})
        if not isinstance(index, dict):
            index = {}
        self.cases: list[dict[str, Any]] = [
            c for c in (index.get("cases") or []) if isinstance(c, dict)
        ]
        self.index_written_at: str | None = index.get("updated_at")

    # -- idempotency helpers ----------------------------------------------

    def is_message_handled(self, chat_id: int | str, message_id: int) -> bool:
        """True when this exact message has already been processed."""
        return f"{chat_key(chat_id)}:{message_id}" in self.handled

    def is_case_known(self, case_id: str) -> bool:
        return case_id in self.case_summaries or any(
            c.get("case_id") == case_id for c in self.cases
        )

    def known_sop(self, sop_instance_uid: str) -> bool:
        return sop_instance_uid in self.known_sops

    # -- mutation ----------------------------------------------------------

    def note_message(self, chat_id: int | str, message_id: int, outcome: str,
                     case_id: str | None = None, archive_name: str | None = None,
                     archive_sha256: str | None = None) -> None:
        item = HandledItem(
            chat_key=chat_key(chat_id),
            message_id=message_id,
            case_id=case_id,
            outcome=outcome,
            processed_at=utc_now_iso(),
            archive_name=archive_name,
            archive_sha256=archive_sha256,
        )
        self.handled[item.key] = item.as_dict()

    def set_cursor(self, update_id: int) -> None:
        """Advance the Telegram offset. Never moves backwards."""
        if update_id and update_id > self.cursor:
            self.cursor = update_id

    def add_case(self, record: CaseRecord) -> None:
        """Insert or replace a case by case_id, then rewrite the index."""
        self.cases = [c for c in self.cases if c.get("case_id") != record.case_id]
        self.cases.append(record.as_dict())
        self.case_summaries[record.case_id] = {
            "case_id": record.case_id,
            "case_name": record.case_name,
            "ingested_at": record.ingested_at,
            "patient_name": record.index.get("patient_name"),
            "instance_count": record.index.get("instance_count"),
            "stored": record.upload.get("stored"),
            "rejected": record.upload.get("rejected"),
        }

    def remember_sops(self, sop_instance_uids: list[str]) -> None:
        for uid in sop_instance_uids:
            if uid:
                self.known_sops.add(uid)

    # -- persistence -------------------------------------------------------

    def save(self) -> None:
        """Write both files. Index first: it is the durable clinical record."""
        self.index_written_at = utc_now_iso()
        _atomic_write_json(self.index_path, {
            "schema_version": SCHEMA_VERSION,
            "updated_at": self.index_written_at,
            "orthanc": "http://127.0.0.1:8042",
            "case_count": len(self.cases),
            "cases": self.cases,
        })
        _atomic_write_json(self.state_path, {
            "schema_version": SCHEMA_VERSION,
            "updated_at": self.index_written_at,
            "telegram_update_cursor": self.cursor,
            "handled_message_count": len(self.handled),
            "handled_messages": self.handled,
            "known_sop_instance_uid_count": len(self.known_sops),
            "known_sop_instance_uids": sorted(self.known_sops),
            "cases": self.case_summaries,
        })

    # -- reporting ---------------------------------------------------------

    def totals(self) -> dict[str, int]:
        instances = sum(int(c.get("instance_count") or 0) for c in self.cases)
        frames = sum(int(c.get("frame_count") or 0) for c in self.cases)
        stored = sum(int((c.get("upload") or {}).get("stored") or 0) for c in self.cases)
        rejected = sum(int((c.get("upload") or {}).get("rejected") or 0) for c in self.cases)
        return {
            "cases": len(self.cases),
            "instances": instances,
            "frames": frames,
            "stored": stored,
            "rejected": rejected,
        }


def default_store() -> CaseStore:
    """The store for the configured state directory."""
    STATE_DIR.mkdir(parents=True, exist_ok=True)
    return CaseStore()
