"""Telegram watcher for SMS Hospital IR case intake.

Runs on the dsa-telegram-bot virtual environment interpreter, the only one
with python-telegram-bot 22.6. It never imports pydicom; all DICOM work is
delegated to ingest_worker.py on the Python312 interpreter as a subprocess.

Security posture
----------------
A leaked bot token must not let an outsider pull clinical studies into the
PACS, so every message passes the TELEGRAM_CHAT_IDS allowlist BEFORE any
download begins. The check is in one place (`_authorised`) and every handler
calls it first; an unauthorised chat is refused and the download never runs.

Modes
-----
--check   validate the token, print the chats it can see (masked), exit
--once    process whatever is already pending, then exit  (testable)
default   poll continuously for new case archives

Commands
--------
/download [n]  ingest pending case archives (default 5, or the last n)
/status        what is in the index and in Orthanc
/help          usage
"""

from __future__ import annotations

import argparse
import asyncio
import json
import subprocess
import sys
from pathlib import Path
from typing import Any

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import config
from archive_guard import UnsafeArchiveError, plan_extraction
from config import (
    CREDENTIAL_PY,
    DICOM_PY,
    TELEGRAM_MAX_DOWNLOAD_BYTES,
    allowed_chat_ids,
    load_env,
    mask_secret,
)
from state_store import default_store

#: Catch-up limit: how many recent messages a /download will consider.
DEFAULT_CATCHUP = 5
#: Cap on a single /download N argument.
MAX_CATCHUP = 50
#: Telegram caps bot downloads at 20 MB; a larger archive cannot be fetched.
TELEGRAM_DOWNLOAD_LIMIT = TELEGRAM_MAX_DOWNLOAD_BYTES


def _import_telegram():
    """Import python-telegram-bot lazily so --check reports a clean error."""
    try:
        from telegram import Update
        from telegram.ext import (
            Application, CommandHandler, MessageHandler, filters,
        )
    except ImportError as exc:  # pragma: no cover - environment problem
        raise SystemExit(
            "python-telegram-bot is not importable by this interpreter.\n"
            f"Run the watcher with: {CREDENTIAL_PY}\n"
            f"({exc})"
        )
    return Update, Application, CommandHandler, MessageHandler, filters


def _zip_suffixes() -> tuple[str, ...]:
    return (".zip",)


def _is_case_archive(document) -> bool:
    """True when a Telegram document looks like a case archive."""
    name = (getattr(document, "file_name", "") or "").lower()
    return name.endswith(_zip_suffixes())


def _run_worker(archive: Path, case_name: str, origin: str) -> dict[str, Any]:
    """Hand one downloaded archive to the DICOM worker and read its result.

    The worker runs on the Python312 interpreter (pydicom 3.0.1). Its stdout
    is JSON so the result can be reported faithfully rather than paraphrased.
    """
    command = [
        str(DICOM_PY), str(HERE / "ingest_worker.py"),
        "--archive", str(archive),
        "--case-name", case_name,
        "--origin", origin,
        "--json",
    ]
    try:
        completed = subprocess.run(
            command, capture_output=True, text=True, timeout=3600,
        )
    except subprocess.TimeoutExpired:
        return {"ok": False, "reason": "worker-timeout",
                "detail": "the ingest worker did not finish in an hour"}
    except OSError as exc:
        return {"ok": False, "reason": "worker-unavailable",
                "detail": f"{type(exc).__name__}: {exc}"}

    if completed.returncode not in (0, 1, 2, 3):
        return {"ok": False, "reason": "worker-failed",
                "detail": (completed.stderr or "").strip()[-400:]}

    try:
        return json.loads(completed.stdout)
    except ValueError:
        return {"ok": False, "reason": "worker-unreadable",
                "detail": (completed.stdout or completed.stderr or "").strip()[-400:]}


def _precheck_archive(path: Path) -> str | None:
    """Vet an archive in this interpreter before spawning the worker.

    Catches traversal and bomb archives here, where the plan can be shown
    without extracting anything, so a hostile archive is refused with a
    specific reason rather than a generic worker error.
    """
    try:
        plan_extraction(path, config.CASES_DIR / "__precheck__")
    except UnsafeArchiveError as exc:
        return str(exc)
    return None


class CaseWatcher:
    """The polling service. Owns authorisation, download and reporting."""

    def __init__(self, token: str, chat_ids: set[int]) -> None:
        self.token = token
        self.chat_ids = chat_ids
        self.store = default_store()
        self._busy = asyncio.Lock()

    # -- authorisation -----------------------------------------------------

    def _authorised(self, update) -> bool:
        """The single gate every message passes.

        Returns False for a chat outside the allowlist. No download, no
        lookup, and no patient data leaves this point.
        """
        chat = update.effective_chat
        if chat is None:
            return False
        return chat.id in self.chat_ids

    async def _refuse(self, update) -> None:
        chat = update.effective_chat
        config.log_line(
            f"REFUSED update from unauthorised chat {mask_secret(str(chat.id))}"
            if chat else "REFUSED update with no chat context"
        )
        if chat is not None and chat.type == "private":
            # Only answer private chats; never post into a stranger's group.
            try:
                await update.get_bot().send_message(
                    chat_id=chat.id,
                    text="This service is restricted to authorised clinical users.",
                )
            except Exception as exc:  # noqa: BLE001
                config.log_line(f"  refusal notice not sent: {type(exc).__name__}")

    # -- ingest ------------------------------------------------------------

    async def _process_document(self, bot, chat, document,
                                store_message: bool = True) -> dict[str, Any]:
        """Download one case archive and run the DICOM pipeline on it."""
        message_id = getattr(document, "message_id", 0) or 0
        file_name = getattr(document, "file_name", "") or "case.zip"
        size = getattr(document, "file_size", None)

        if store_message and self.store.is_message_handled(chat.id, message_id):
            config.log_line(
                f"skip message {message_id}: already processed "
                f"({file_name})"
            )
            return {"ok": True, "reason": "already-processed",
                    "archive": file_name}

        if size is not None and size > TELEGRAM_DOWNLOAD_LIMIT:
            detail = (f"{file_name} is {size:,} bytes, above Telegram's "
                      f"{TELEGRAM_DOWNLOAD_LIMIT:,} byte download limit")
            config.log_line(f"  too large: {detail}")
            if store_message:
                self.store.note_message(chat.id, message_id, "too-large",
                                        archive_name=file_name)
                self.store.save()
            return {"ok": False, "reason": "too-large", "detail": detail}

        target = config.DOWNLOAD_DIR / f"{message_id}_{config.sanitise_case_name(file_name)}"
        config.log_line(f"downloading {file_name} (message {message_id})")

        try:
            handle = await bot.get_file(document.file_id)
            await handle.download_to_drive(custom_path=str(target))
        except Exception as exc:  # noqa: BLE001 - network/Telegram errors
            detail = f"{type(exc).__name__}: {exc}"
            config.log_line(f"  download failed: {detail}")
            return {"ok": False, "reason": "download-failed", "detail": detail}

        reason = _precheck_archive(target)
        if reason:
            config.log_line(f"  REFUSED {file_name}: {reason}")
            self.store.note_message(chat.id, message_id, "refused-unsafe",
                                    archive_name=file_name)
            self.store.save()
            return {"ok": False, "reason": "unsafe-archive", "detail": reason}

        origin = f"telegram:{config.chat_key(chat.id)}:{message_id}"
        result = _run_worker(target, Path(file_name).stem, origin)

        if store_message:
            self.store.note_message(
                chat.id, message_id,
                result.get("reason", "unknown"),
                case_id=result.get("case_id"),
                archive_name=file_name,
                archive_sha256=result.get("archive_sha256"),
            )
            # Only advance the cursor past a message we have finished with.
            if message_id:
                self.store.set_cursor(message_id)
            self.store.save()

        config.log_line(f"  {file_name}: {result.get('reason')} -- "
                        f"{result.get('summary', result.get('detail', ''))}")
        return result

    async def _catch_up(self, bot, chat, limit: int) -> list[dict[str, Any]]:
        """Ingest pending case archives already sitting in the chat.

        Walks recent chat history for documents that look like case archives
        and have not been processed yet. Telegram only exposes history the bot
        can see, so this catches what arrived while the service was down.
        """
        results: list[dict[str, Any]] = []
        found = 0
        try:
            async for message in bot.get_chat_history(
                chat_id=chat.id, limit=limit * 4
            ):
                document = getattr(message, "document", None)
                if document is None or not _is_case_archive(document):
                    continue
                found += 1
                if len(results) >= limit:
                    break
                async with self._busy:
                    results.append(
                        await self._process_document(bot, chat, document)
                    )
        except Exception as exc:  # noqa: BLE001
            config.log_line(f"  catch-up scan failed: {type(exc).__name__}: {exc}")
        return results

    # -- formatting --------------------------------------------------------

    def _format_result(self, result: dict[str, Any]) -> str:
        """Turn a worker result into a short, honest Telegram reply."""
        if not result.get("ok"):
            reason = result.get("reason", "failed")
            detail = result.get("detail", "")
            return f"Could not ingest that archive.\n  reason: {reason}" + (
                f"\n  {detail}" if detail else "")

        if result.get("reason") == "already-processed":
            return f"{result.get('archive', 'that archive')} was already ingested."

        if result.get("reason") == "no-dicom":
            index = result.get("index") or {}
            return (
                "Archive contained no readable DICOM.\n"
                f"  files seen: {index.get('dicom_file_count', 0)} DICOM, "
                f"{index.get('non_dicom_file_count', 0)} not DICOM"
            )

        upload = result.get("upload") or {}
        lines = [result.get("summary", "case indexed"), ""]
        lines.append(
            f"  instances   : {index_count(result)} stored "
            f"({upload.get('stored', 0)} sent this run, "
            f"{upload.get('skipped_already_known', 0)} already held)"
        )
        if upload.get("orthanc_instance_count") is not None:
            lines.append(
                f"  in Orthanc  : {upload['orthanc_instance_count']} instance(s) "
                f"in {upload.get('orthanc_series_count', 0)} series"
            )
        rejected = int(upload.get("rejected") or 0)
        if rejected:
            lines.append(f"  rejected    : {rejected} file(s) Orthanc refused")
        non_dicom = int((result.get("index") or {}).get("non_dicom_file_count") or 0)
        if non_dicom:
            lines.append(f"  not DICOM   : {non_dicom} file(s), listed in the index")
        lines.append(f"  case id     : {result.get('case_id')}")
        lines.append("\nEvery field above is read from the DICOM headers.")
        return "\n".join(lines)

    def _status_text(self) -> str:
        totals = self.store.totals()
        orthanc_up = "reachable" if _orthanc_reachable() else "NOT answering"
        lines = [
            "Case intake status",
            f"  cases indexed   : {totals['cases']}",
            f"  instances       : {totals['instances']} ({totals['frames']} frames)",
            f"  files stored    : {totals['stored']}",
            f"  files rejected  : {totals['rejected']}",
            f"  messages handled: {len(self.store.handled)}",
            f"  Orthanc         : {orthanc_up} on {config.ORTHANC_BASE}",
        ]
        if self.store.cases:
            lines.append("\nRecent cases:")
            for case in self.store.cases[-5:]:
                upload = case.get("upload") or {}
                lines.append(
                    f"  {case.get('case_name', '?')[:34]:36} "
                    f"{case.get('instance_count', 0):>5} inst  "
                    f"stored {upload.get('stored', 0)}"
                )
        return "\n".join(lines)

    # -- handlers ----------------------------------------------------------

    async def _on_start(self, update, context) -> None:
        if not self._authorised(update):
            await self._refuse(update)
            return
        await update.message.reply_text(
            "SMS Hospital case intake\n\n"
            "  /download [n]   ingest case archives already in this chat (default 5)\n"
            "  /status         what has been indexed and stored\n"
            "  /help           this message\n\n"
            "Send a .zip of a case as a document, then run /download.\n"
            "Metadata comes from the DICOM headers; absent fields are reported\n"
            "as not on file rather than filled in."
        )

    async def _on_download(self, update, context) -> None:
        if not self._authorised(update):
            await self._refuse(update)
            return
        limit = DEFAULT_CATCHUP
        if context.args:
            try:
                limit = max(1, min(MAX_CATCHUP, int(context.args[0])))
            except ValueError:
                await update.message.reply_text("/download takes a count, e.g. /download 3")
                return

        chat = update.effective_chat
        await update.message.reply_text(
            f"Looking for {limit} pending case archive(s)..."
        )
        results = await self._catch_up(context.bot, chat, limit)
        if not results:
            await update.message.reply_text(
                "No unprocessed .zip case archives in the recent history.\n"
                "Send the archive as a document, then run /download again."
            )
            return

        for result in results:
            await update.message.reply_text(self._format_result(result))
        await update.message.reply_text(self._status_text())

    async def _on_status(self, update, context) -> None:
        if not self._authorised(update):
            await self._refuse(update)
            return
        await update.message.reply_text(self._status_text())

    async def _on_document(self, update, context) -> None:
        """A bare .zip with no command: tell the user, do not auto-ingest.

        Ingest is on demand by design, so a clinician's accidental send does
        not silently push a study into the PACS.
        """
        if not self._authorised(update):
            await self._refuse(update)
            return
        document = getattr(update.message, "document", None)
        if document is None or not _is_case_archive(document):
            return
        await update.message.reply_text(
            f"Received {document.file_name}.\nRun /download to extract, index "
            "and send it to the PACS."
        )

    async def _on_text(self, update, context) -> None:
        """Ignore chatter from authorised chats; refuse everyone else."""
        if not self._authorised(update):
            await self._refuse(update)
        return

    # -- wiring ------------------------------------------------------------

    def build_application(self):
        Update, Application, CommandHandler, MessageHandler, filters = _import_telegram()
        app = Application.builder().token(self.token).build()
        app.add_handler(CommandHandler("start", self._on_start))
        app.add_handler(CommandHandler("help", self._on_start))
        app.add_handler(CommandHandler("download", self._on_download))
        app.add_handler(CommandHandler("status", self._on_status))
        app.add_handler(
            MessageHandler(filters.Document.ALL, self._on_document)
        )
        app.add_handler(
            MessageHandler(filters.TEXT & ~filters.COMMAND, self._on_text)
        )
        return app

    async def run_check(self) -> int:
        """Validate the token and report visible chats. Mirrors bot.py --check."""
        Update, Application, CommandHandler, MessageHandler, filters = _import_telegram()
        app = Application.builder().token(self.token).build()
        await app.initialize()
        try:
            me = await app.bot.get_me()
            print(f"token OK -> @{me.username} ({me.full_name})")
        except Exception as exc:  # noqa: BLE001
            print(f"token REJECTED by Telegram: {type(exc).__name__}: {exc}")
            return 2

        updates = await app.bot.get_updates(timeout=0, limit=100)
        seen: dict[int, str] = {}
        for update in updates:
            chat = update.effective_chat
            if chat is None:
                continue
            seen[chat.id] = chat.type or "unknown"
        print(f"chats seen in getUpdates: "
              f"{[(mask_config_id(cid), kind) for cid, kind in sorted(seen.items())] or '(none - message the bot first)'}")
        print(f"allowed ({len(self.chat_ids)}): "
              f"{[mask_config_id(cid) for cid in sorted(self.chat_ids)]}")

        matched = [cid for cid in seen if cid in self.chat_ids]
        unknown = [cid for cid in seen if cid not in self.chat_ids]
        if unknown:
            print(f"chats NOT on the allowlist (ignored): "
                  f"{[mask_config_id(cid) for cid in sorted(unknown)]}")
        if not self.chat_ids:
            print("RESULT: no allowlist configured - every chat would be refused")
            return 2
        if not seen:
            print("RESULT: no allowed chat found - message the bot first")
            return 1
        if not matched:
            print("RESULT: chats are visible but none is on the allowlist")
            return 1
        print(f"RESULT: ready ({len(matched)} allowed chat(s) visible)")
        return 0

    async def run_once(self) -> int:
        """Process pending items for every allowed chat, then exit."""
        Update, Application, CommandHandler, MessageHandler, filters = _import_telegram()
        app = Application.builder().token(self.token).build()
        await app.initialize()
        try:
            await app.bot.get_me()
        except Exception as exc:  # noqa: BLE001
            print(f"token REJECTED by Telegram: {type(exc).__name__}: {exc}")
            return 2

        total = 0
        for chat_id in sorted(self.chat_ids):
            config.log_line(f"once: scanning chat {mask_config_id(chat_id)}")
            try:
                results = await self._catch_up(app.bot, _ChatRef(chat_id), DEFAULT_CATCHUP)
            except Exception as exc:  # noqa: BLE001
                config.log_line(f"  chat scan failed: {type(exc).__name__}: {exc}")
                continue
            for result in results:
                total += 1
                print(self._format_result(result))
                print()
        self.store.save()
        print(f"--once finished: {total} archive(s) processed")
        print(self._status_text())
        return 0

    async def run_forever(self) -> int:
        """Poll continuously.

        drop_pending_updates is False so the cursor in state.json, not
        Telegram's transient buffer, decides what has been seen: a restart
        must not lose a case that arrived while the service was down.
        """
        app = self.build_application()
        config.log_line(
            f"watcher starting, {len(self.chat_ids)} allowed chat(s), "
            f"Orthanc on {config.ORTHANC_BASE}"
        )
        if not _orthanc_reachable():
            config.log_line("  Orthanc is not answering; ingest will fail until it is up")
        # `Application.run_polling()` is SYNCHRONOUS: it creates and owns its own
        # asyncio loop. Calling it from `run_forever`, which asyncio.run() is
        # already driving, raises "This event loop is already running" and then
        # "Cannot close a running event loop" on shutdown. The async equivalent
        # in python-telegram-bot 22.6 is Updater.start_polling(), reached via
        # Application.run_polling's own updater -- there is no
        # Application.start_polling.
        await app.initialize()
        try:
            await app.updater.start_polling(drop_pending_updates=False)
            # start_polling only schedules the updater; this await is what keeps
            # the loop alive until the process is stopped.
            await asyncio.Event().wait()
        finally:
            await app.shutdown()
        return 0


class _ChatRef:
    """Minimal stand-in so catch-up can be driven by a bare chat id."""

    def __init__(self, chat_id: int) -> None:
        self.id = chat_id
        self.type = "group"


def mask_config_id(chat_id: int) -> str:
    """Render a chat id for display without disclosing it."""
    return config.mask_secret(str(chat_id))


def index_count(result: dict[str, Any]) -> int:
    return int((result.get("index") or {}).get("instance_count") or 0)


def _orthanc_reachable() -> bool:
    """Check Orthanc without importing the DICOM-side client."""
    import urllib.error
    import urllib.request
    try:
        with urllib.request.urlopen(f"{config.ORTHANC_BASE}/system", timeout=5) as resp:
            return 200 <= resp.status < 300
    except (urllib.error.URLError, OSError, ValueError):
        return False


async def _amain(args: argparse.Namespace) -> int:
    env = load_env()
    token = env.get("TELEGRAM_BOT_TOKEN", "")
    if not token:
        print(f"TELEGRAM_BOT_TOKEN not set in {config.ENV_FILE}")
        print("Get one from @BotFather -> /newbot. Never paste it into chat.")
        return 2
    chat_ids = allowed_chat_ids(env)
    if not chat_ids:
        print(f"TELEGRAM_CHAT_IDS not set or empty in {config.ENV_FILE}.")
        print("The watcher will refuse every chat until it is set.")
        return 2
    print(f"loaded {len(chat_ids)} allowed chat id(s)")

    config.ensure_dirs()
    watcher = CaseWatcher(token, chat_ids)
    if args.check:
        return await watcher.run_check()
    if args.once:
        return await watcher.run_once()
    return await watcher.run_forever()


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="SMS Hospital Telegram DICOM case intake.")
    parser.add_argument("--check", action="store_true",
                        help="verify the token and print visible chat ids, then exit")
    parser.add_argument("--once", action="store_true",
                        help="process pending case archives and exit")
    args = parser.parse_args(argv)
    try:
        return asyncio.run(_amain(args))
    except KeyboardInterrupt:
        config.log_line("interrupted; stopping")
        return 0


if __name__ == "__main__":
    raise SystemExit(main())
