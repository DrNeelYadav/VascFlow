"""Case ingest worker: zip -> extract -> index DICOM -> Orthanc -> index file.

Runs on the Python312 interpreter, the one the contract pins to pydicom 3.0.1.
The watcher invokes it as a subprocess:

    python312 ingest_worker.py --archive <path> --case-name <name> \
                              --origin telegram:<chat_key>:<message_id>

It does not import telegram and does not read credentials. It also runs
standalone against any local archive, which is how the pipeline is tested
without fabricating a Telegram event.

Exit codes
----------
0  the case was processed (with per-file rejections reported, not hidden)
2  the archive was refused as unsafe, or was unreadable
3  Orthanc was unreachable, so nothing was sent
"""

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import sys
from pathlib import Path

# Allow `python ingest_worker.py` from anywhere to import its siblings.
sys.path.insert(0, str(Path(__file__).resolve().parent))

import config
from archive_guard import UnsafeArchiveError, extract, plan_extraction
from dicom_index import CaseIndex, index_tree, summarise_line
from orthanc_client import OrthancClient, StoreOutcome
from state_store import CaseRecord, default_store


def sha256_of(path: Path, chunk: int = 1 << 20) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        while True:
            block = handle.read(chunk)
            if not block:
                break
            digest.update(block)
    return digest.hexdigest()


def _prepare_case_dir(case_id: str, reuse: bool) -> Path:
    """Return the extraction folder for a case, clearing any stale copy."""
    target = config.CASES_DIR / case_id
    if target.exists():
        if not reuse:
            shutil.rmtree(target, ignore_errors=True)
        else:
            return target
    target.mkdir(parents=True, exist_ok=True)
    return target


def ingest_archive(archive: Path, case_name: str, origin: str,
                   store=None, client: OrthancClient | None = None,
                   skip_upload: bool = False) -> dict:
    """Run the full pipeline for one archive and return a result record.

    The returned dict is the machine-readable outcome: everything the caller
    needs to report, and everything needed to make a re-run idempotent.
    """
    store = store or default_store()
    client = client or OrthancClient()

    config.log_line(f"case start: {case_name} (origin {origin})")

    if not archive.is_file():
        return {
            "ok": False,
            "reason": "archive-not-found",
            "detail": str(archive),
            "case_name": case_name,
        }

    archive_sha = sha256_of(archive)
    slug = config.sanitise_case_name(case_name or archive.stem)
    case_id = config.case_id_for(slug, archive_sha)
    case_dir = _prepare_case_dir(case_id, reuse=store.is_case_known(case_id))

    # -- vet the archive BEFORE writing anything ---------------------------
    try:
        plan = plan_extraction(archive, case_dir)
    except UnsafeArchiveError as exc:
        config.log_line(f"  REFUSED {archive.name}: {exc}")
        shutil.rmtree(case_dir, ignore_errors=True)
        return {
            "ok": False,
            "reason": "unsafe-archive",
            "detail": str(exc),
            "case_name": case_name,
            "archive": str(archive),
        }

    config.log_line(
        f"  archive vetted: {plan.entry_count} entries, "
        f"{plan.total_uncompressed:,} bytes uncompressed, "
        f"{plan.ratio:.1f}x expansion"
    )

    # -- extract -----------------------------------------------------------
    try:
        files_written, bytes_written = extract(plan, archive)
    except UnsafeArchiveError as exc:
        config.log_line(f"  EXTRACTION ABORTED: {exc}")
        shutil.rmtree(case_dir, ignore_errors=True)
        return {
            "ok": False,
            "reason": "unsafe-archive",
            "detail": str(exc),
            "case_name": case_name,
            "archive": str(archive),
        }
    except (OSError, zipfile_error()) as exc:
        config.log_line(f"  EXTRACTION FAILED: {type(exc).__name__}: {exc}")
        shutil.rmtree(case_dir, ignore_errors=True)
        return {
            "ok": False,
            "reason": "extraction-failed",
            "detail": f"{type(exc).__name__}: {exc}",
            "case_name": case_name,
            "archive": str(archive),
        }

    config.log_line(f"  extracted {files_written} file(s), {bytes_written:,} bytes")

    # -- index real DICOM headers -----------------------------------------
    index: CaseIndex = index_tree(case_id, slug, str(archive), case_dir)
    config.log_line(f"  indexed: {summarise_line(index)}")
    for rejection in index.rejected:
        config.log_line(
            f"    rejected (not DICOM): {rejection.path} -- {rejection.reason}"
        )

    if index.dicom_file_count == 0:
        config.log_line("  no DICOM found in this archive; nothing to send")
        result = {
            "ok": True,
            "reason": "no-dicom",
            "case_id": case_id,
            "case_name": slug,
            "summary": summarise_line(index),
            "index": index.as_dict(),
            "upload": {"attempted": 0, "stored": 0, "rejected": 0,
                       "skipped_already_known": 0, "outcomes": []},
        }
        _persist(store, case_id, slug, archive, index, result["upload"])
        return result

    # -- send to Orthanc ---------------------------------------------------
    upload_summary: dict = {
        "attempted": 0,
        "stored": 0,
        "rejected": 0,
        "skipped_already_known": 0,
        "outcomes": [],
    }

    if skip_upload:
        upload_summary["note"] = "upload skipped (--no-upload)"
    elif not client.is_up():
        config.log_line("  Orthanc is not answering; DICOM left on disk, not sent")
        return {
            "ok": False,
            "reason": "orthanc-down",
            "detail": "Orthanc did not answer on " + client.base_url,
            "case_id": case_id,
            "case_name": slug,
            "summary": summarise_line(index),
            "index": index.as_dict(),
            "upload": upload_summary,
        }
    else:
        # Idempotency, part 1: skip anything this service already knows is in
        # Orthanc, or that is already in the local index.
        to_send: list[Path] = []
        sop_by_path: dict[Path, str] = {}
        for path, sop in zip(index.dicom_files, index.sop_instance_uids):
            if sop and store.known_sop(sop):
                upload_summary["skipped_already_known"] += 1
                continue
            to_send.append(path)
            if sop:
                sop_by_path[path] = sop

        if upload_summary["skipped_already_known"]:
            config.log_line(
                f"  {upload_summary['skipped_already_known']} file(s) already "
                "recorded as stored; not re-sending"
            )

        upload_summary["attempted"] = len(to_send)
        outcomes: list[StoreOutcome] = []
        confirmed: list[str] = []
        for path in to_send:
            outcome = client.store_instance(path)
            outcomes.append(outcome)
            sop = sop_by_path.get(path)
            if outcome.stored:
                upload_summary["stored"] += 1
                if sop:
                    confirmed.append(sop)
            else:
                upload_summary["rejected"] += 1
                config.log_line(
                    f"    REJECTED by Orthanc: {path.name} "
                    f"HTTP {outcome.status} -- {outcome.error}"
                )
            if len(outcomes) % 200 == 0:
                config.log_line(
                    f"    ... {len(outcomes)}/{len(to_send)} sent, "
                    f"{upload_summary['stored']} stored"
                )

        upload_summary["outcomes"] = [
            {"file": Path(o.path).name, "status": o.status,
             "stored": o.stored, "error": o.error}
            for o in outcomes
        ]

        # Idempotency, part 2: confirm against the PACS rather than trusting
        # the HTTP code alone, then remember what is there.
        if index.study_instance_uid:
            report = client.study_report(index.study_instance_uid)
            upload_summary["orthanc_study_present"] = report.exists
            upload_summary["orthanc_instance_count"] = report.instance_count
            upload_summary["orthanc_series_count"] = len(report.series_uids)
            config.log_line(
                f"  Orthanc now holds {report.instance_count} instance(s) in "
                f"{len(report.series_uids)} series for this study"
            )
        store.remember_sops(confirmed or index.sop_instance_uids)

    result = {
        "ok": True,
        "reason": "ingested",
        "case_id": case_id,
        "case_name": slug,
        "case_dir": str(case_dir),
        "archive_sha256": archive_sha,
        "summary": summarise_line(index),
        "index": index.as_dict(),
        "upload": upload_summary,
    }
    _persist(store, case_id, slug, archive, index, upload_summary)
    return result


def _persist(store, case_id: str, slug: str, archive: Path,
             index: CaseIndex, upload: dict) -> None:
    record = CaseRecord(
        case_id=case_id,
        case_name=slug,
        ingested_at=config.utc_now_iso(),
        source_archive=archive.name,
        index=index.as_dict(),
        upload=upload,
    )
    store.add_case(record)
    store.save()


def zipfile_error() -> type[Exception]:
    """zipfile.BadZipFile, imported lazily to keep the top of file clean."""
    import zipfile
    return zipfile.BadZipFile


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Extract, index and send one DICOM case archive to Orthanc."
    )
    parser.add_argument("--archive", required=True,
                        help="path to the .zip archive to ingest")
    parser.add_argument("--case-name", default="",
                        help="display name for the case (defaults to file stem)")
    parser.add_argument("--origin", default="local",
                        help="provenance label, e.g. telegram:<key>:<message_id>")
    parser.add_argument("--no-upload", action="store_true",
                        help="extract and index only; do not contact Orthanc")
    parser.add_argument("--json", action="store_true",
                        help="print the result record as JSON on stdout")
    args = parser.parse_args(argv)

    config.ensure_dirs()
    archive = Path(args.archive)
    name = args.case_name or archive.stem

    result = ingest_archive(
        archive=archive,
        case_name=name,
        origin=args.origin,
        skip_upload=args.no_upload,
    )

    if args.json:
        print(json.dumps(result, indent=2, default=str))

    if not result.get("ok"):
        reason = result.get("reason")
        detail = result.get("detail", "")
        if reason == "orthanc-down":
            return 3
        if reason in ("unsafe-archive", "archive-not-found", "extraction-failed"):
            return 2
        return 1

    if reason_reports_nothing(result):
        return 0
    return 0


def reason_reports_nothing(result: dict) -> bool:
    """True when a 'successful' run sent nothing (no DICOM in the archive)."""
    return result.get("reason") == "no-dicom"


if __name__ == "__main__":
    raise SystemExit(main())
