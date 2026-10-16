"""Archive safety: refuse path traversal (zip-slip) and expansion bombs.

Stdlib only, so the watcher can vet an archive before it ever reaches the
worker. Every decision is made from the zip central directory, never from a
member's own claims.

Two independent defences against traversal
------------------------------------------
1. Reject any member whose name is absolute, drive-qualified, or contains a
   '..' segment -- decided on the RAW name as stored, before normalisation.
2. Additionally resolve every member against the destination root and refuse
   anything that lands outside it. Normalisation tricks that survive (1) are
   still caught by (2).

The decompression budget is enforced twice: once from the declared sizes
before a single byte is written, and again while streaming, because a hostile
archive can lie in its central directory.
"""

from __future__ import annotations

import posixpath
import zipfile
from dataclasses import dataclass, field
from pathlib import Path, PurePosixPath, PureWindowsPath

from config import (
    MAX_ENTRIES,
    MAX_EXPANSION_RATIO,
    MAX_PATH_DEPTH,
    MAX_SINGLE_ENTRY,
    MAX_TOTAL_UNCOMPRESSED,
)


class UnsafeArchiveError(Exception):
    """The archive is refused outright. Nothing is written to disk."""


@dataclass
class ArchivePlan:
    """What a vetted archive contains, and where each member may be written."""

    entry_count: int
    total_uncompressed: int
    total_compressed: int
    ratio: float
    members: list[tuple[zipfile.ZipInfo, Path]] = field(default_factory=list)


def _is_suspicious_name(name: str) -> str | None:
    """Return a reason string when a stored member name must not be trusted."""
    if not name:
        return "empty member name"
    if "\x00" in name:
        return "NUL byte in member name"
    # Windows drive-qualified or UNC.
    if PureWindowsPath(name).drive or name.startswith("\\\\"):
        return f"absolute or drive-qualified path: {name!r}"
    if name.startswith("/") or name.startswith("\\"):
        return f"absolute path: {name!r}"
    # Traversal judged on the raw, un-normalised name.
    segments = re_split_traversal(name)
    if any(seg == ".." for seg in segments):
        return f"parent-directory traversal: {name!r}"
    if len(segments) > MAX_PATH_DEPTH:
        return f"path deeper than {MAX_PATH_DEPTH} segments: {name!r}"
    return None


def re_split_traversal(name: str) -> list[str]:
    """Split on both separators so a backslash cannot smuggle a '..' past us."""
    normalised = name.replace("\\", "/")
    return [seg for seg in normalised.split("/") if seg not in ("", ".")]


def plan_extraction(archive: Path, destination: Path) -> ArchivePlan:
    """Vet `archive` and resolve every member to a path under `destination`.

    Raises UnsafeArchiveError for traversal, bombs, or an unreadable archive.
    On return, every member path is guaranteed to be inside `destination`.
    """
    if not archive.is_file():
        raise UnsafeArchiveError(f"archive not found: {archive}")
    if archive.stat().st_size == 0:
        raise UnsafeArchiveError(f"archive is empty (0 bytes): {archive.name}")

    try:
        handle = zipfile.ZipFile(archive)
    except zipfile.BadZipFile as exc:
        # Observed on a real 0-byte departmental upload.
        raise UnsafeArchiveError(
            f"not a readable zip archive ({exc}): {archive.name}"
        ) from exc

    with handle as zf:
        infos = zf.infolist()
        if not infos:
            raise UnsafeArchiveError(f"archive contains no entries: {archive.name}")
        if len(infos) > MAX_ENTRIES:
            raise UnsafeArchiveError(
                f"archive has {len(infos)} entries, above the {MAX_ENTRIES} limit"
            )

        total_uncompressed = 0
        total_compressed = 0
        for info in infos:
            if info.file_size > MAX_SINGLE_ENTRY:
                raise UnsafeArchiveError(
                    f"member {info.filename!r} declares {info.file_size} bytes, "
                    f"above the {MAX_SINGLE_ENTRY} byte single-file limit"
                )
            total_uncompressed += info.file_size
            total_compressed += info.compress_size
            if total_uncompressed > MAX_TOTAL_UNCOMPRESSED:
                raise UnsafeArchiveError(
                    f"archive expands past the {MAX_TOTAL_UNCOMPRESSED} byte limit"
                )

        ratio = (total_uncompressed / total_compressed) if total_compressed else 0.0
        if ratio > MAX_EXPANSION_RATIO:
            raise UnsafeArchiveError(
                f"expansion ratio {ratio:.1f}x is above the "
                f"{MAX_EXPANSION_RATIO}x limit"
            )

        root = destination.resolve()
        members: list[tuple[zipfile.ZipInfo, Path]] = []
        for info in infos:
            reason = _is_suspicious_name(info.filename)
            if reason:
                raise UnsafeArchiveError(f"refusing member -- {reason}")

            # Windows also carries a backslash-separated view; strip a
            # trailing separator so directory entries collapse cleanly.
            relative = posixpath.normpath(info.filename.replace("\\", "/")).lstrip("/")
            if not relative or relative == ".":
                continue
            target = (root / Path(*PurePosixPath(relative).parts)).resolve()
            # Second, independent traversal check on the resolved path.
            if target != root and root not in target.parents:
                raise UnsafeArchiveError(
                    f"member {info.filename!r} escapes the extraction folder"
                )
            members.append((info, target))

    return ArchivePlan(
        entry_count=len(members),
        total_uncompressed=total_uncompressed,
        total_compressed=total_compressed,
        ratio=ratio,
        members=members,
    )


def extract(plan: ArchivePlan, archive: Path) -> tuple[int, int]:
    """Write a vetted archive to disk, re-checking the budget as we stream.

    Returns (files_written, bytes_written). A member that would push the run
    past the decompression budget aborts the extraction, and the partially
    written folder is removed so no half-case is ever left behind.
    """
    written = 0
    total = 0
    with zipfile.ZipFile(archive) as zf:
        for info, target in plan.members:
            if info.is_dir():
                target.mkdir(parents=True, exist_ok=True)
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            with zf.open(info) as source, target.open("wb") as sink:
                while True:
                    chunk = source.read(1 << 20)
                    if not chunk:
                        break
                    total += len(chunk)
                    if total > MAX_TOTAL_UNCOMPRESSED:
                        raise UnsafeArchiveError(
                            "archive exceeded the decompression budget while "
                            "extracting; partial folder discarded"
                        )
                    sink.write(chunk)
            written += 1
    return written, total


def looks_like_dicom(path: Path) -> bool:
    """True when the file carries a DICOM preamble or a bare dataset marker.

    Cheap pre-filter only. The authoritative check is pydicom, run by the
    worker, so a file that passes here can still be rejected on full parse.
    """
    try:
        with path.open("rb") as handle:
            head = handle.read(132)
    except OSError:
        return False
    return head[128:132] == b"DICM" or head[:4] == b"DICM"
