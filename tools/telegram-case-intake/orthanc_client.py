"""Orthanc REST client for case ingest.

Runs on the Python312 interpreter (the one that has `requests`). Stdlib HTTP
would work too, but the working reference -- tools/departmental-pacs/
ingest_archive.py -- uses requests, and matching it keeps the multipart
encoding and the error reporting identical to code already proven against
this server.

Three verified quirks of THIS Orthanc 1.13.0 instance shape this module
----------------------------------------------------------------------------
1. `POST /instances` answers HTTP 200 with an EMPTY body. The instance id is
   not returned. Store outcomes are therefore confirmed by querying the study
   afterwards, not by reading a response payload.
2. The main-DicomTag query filter is broken: `GET /instances?SOPInstanceUID=X`
   returns every instance whether or not X is present. It must not be used to
   decide whether something is already stored.
3. Full tags are keyed `GGGG,EEEE` in LOWERCASE hex (`0020,000e`), not
   `0020000E`. Reading them with the wrong key silently yields nulls -- which
   is exactly the "empty DB tag index" defect the contract warns about.

Because of (2), idempotency is established from DICOMweb QIDO, which filters
correctly, and corroborated by counting instances in the study.
"""

from __future__ import annotations

import json
import mimetypes
import uuid
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable

import requests

from config import ORTHANC_BASE, ORTHANC_TIMEOUT

#: DICOM part-10 media type. Sent explicitly because .dcm is not in the
#: system mimetypes database and requests would otherwise guess text/plain.
DICOM_MEDIA_TYPE = "application/dicom"


@dataclass
class StoreOutcome:
    """Result of uploading one DICOM file."""

    path: str
    status: int
    stored: bool
    error: str | None = None
    instance_id: str | None = None


@dataclass
class StudyReport:
    """What Orthanc reports for a study after ingest."""

    study_instance_uid: str
    exists: bool
    instance_count: int | None = None
    series_uids: list[str] = field(default_factory=list)
    detail: str = ""


def _tag_key(group: int, element: int) -> str:
    """Orthanc full-tag key: 'GGGG,EEEE' in lowercase hex."""
    return f"{group:04x},{element:04x}"


def _unwrap(value: Any) -> str | None:
    """Pull a plain string out of Orthanc's several value encodings.

    Verified shapes seen on this server:
      {'Value': 'KASHISH 19/F RD'}                  -- scalar
      {'Value': ['1.2.3']}                         -- multi-valued
      {'Alphabetic': 'AISHA 35/F'}                 -- person name
    An empty string means the element is present but carries no value, which
    is reported as absent (None) rather than as an empty field.
    """
    if value is None:
        return None
    if isinstance(value, str):
        return value.strip() or None
    if isinstance(value, dict):
        for key in ("Alphabetic", "Value"):
            if key in value:
                return _unwrap(value[key])
        return None
    if isinstance(value, (list, tuple)):
        for item in value:
            text = _unwrap(item)
            if text:
                return text
        return None
    return str(value)


class OrthancClient:
    """Thin, honest wrapper over the subset of the Orthanc REST API used here."""

    def __init__(self, base_url: str = ORTHANC_BASE) -> None:
        self.base_url = base_url.rstrip("/")

    # -- connectivity ------------------------------------------------------

    def is_up(self) -> bool:
        """True when /system answers. Never raises."""
        try:
            response = requests.get(f"{self.base_url}/system", timeout=5)
        except requests.RequestException:
            return False
        return response.ok

    def version(self) -> str | None:
        """Orthanc version string, or None if it cannot be read."""
        try:
            response = requests.get(f"{self.base_url}/system", timeout=5)
        except requests.RequestException:
            return None
        if not response.ok:
            return None
        try:
            return str(response.json().get("Version"))
        except (ValueError, AttributeError):
            return None

    # -- upload ------------------------------------------------------------

    def store_instance(self, path: Path) -> StoreOutcome:
        """POST one DICOM file to /instances.

        HTTP 200 means accepted. HTTP 409 means already stored. HTTP 400 means
        Orthanc's own parser refused the bytes -- the documented outcome for a
        file named *.dcm that is not real DICOM. That is reported, never
        dropped. A 400 body carries Orthanc's reason and is preserved.
        """
        try:
            with path.open("rb") as handle:
                response = requests.post(
                    f"{self.base_url}/instances",
                    files={"file": (path.name, handle, DICOM_MEDIA_TYPE)},
                    timeout=ORTHANC_TIMEOUT,
                )
        except requests.RequestException as exc:
            return StoreOutcome(
                path=str(path), status=0, stored=False,
                error=f"{type(exc).__name__}: {exc}",
            )

        status = response.status_code
        if status in (200, 409):
            # Body is empty on 200 for this build, so the id is left None
            # rather than guessed at.
            return StoreOutcome(path=str(path), status=status, stored=True)

        return StoreOutcome(
            path=str(path),
            status=status,
            stored=False,
            error=_error_message(response),
        )

    def store_many(self, paths: Iterable[Path], progress_every: int = 100
                   ) -> tuple[list[StoreOutcome], int]:
        """Upload many files, returning every outcome.

        Nothing is summarised away: a rejected file is as visible as a stored
        one, because a silent drop is indistinguishable from a lost study.
        """
        outcomes: list[StoreOutcome] = []
        for index, path in enumerate(paths, 1):
            outcomes.append(self.store_instance(path))
            if progress_every and index % progress_every == 0:
                stored = sum(1 for o in outcomes if o.stored)
                print(f"  ... {index} files sent, {stored} stored", flush=True)
        return outcomes, sum(1 for o in outcomes if o.stored)

    # -- read-back ---------------------------------------------------------

    def study_exists(self, study_instance_uid: str) -> bool:
        """True when the study is present, via DICOMweb QIDO.

        QIDO is used rather than the REST study filter because the REST
        main-DicomTag index is unreliable on this build while QIDO filters
        correctly (verified: present -> 1 result, absent -> 0 results).
        """
        if not study_instance_uid:
            return False
        try:
            response = requests.get(
                f"{self.base_url}/dicom-web/studies",
                params={"StudyInstanceUID": study_instance_uid},
                timeout=30,
            )
        except requests.RequestException:
            return False
        if not response.ok:
            return False
        try:
            return len(response.json()) > 0
        except ValueError:
            return False

    def instance_present(self, study_uid: str, series_uid: str,
                         sop_instance_uid: str) -> bool:
        """True when this exact SOP Instance UID is stored in that series."""
        if not (study_uid and series_uid and sop_instance_uid):
            return False
        url = (f"{self.base_url}/dicom-web/studies/{study_uid}"
               f"/series/{series_uid}/instances")
        try:
            response = requests.get(
                url, params={"SOPInstanceUID": sop_instance_uid}, timeout=30
            )
        except requests.RequestException:
            return False
        if not response.ok:
            return False
        try:
            return len(response.json()) > 0
        except ValueError:
            return False

    def study_report(self, study_instance_uid: str) -> StudyReport:
        """Count what Orthanc actually holds for a study.

        Series and instance counts come from DICOMweb, which reflects the
        files on disk rather than the summary index.
        """
        if not self.study_exists(study_instance_uid):
            return StudyReport(study_instance_uid, exists=False)

        series_uids: list[str] = []
        total = 0
        try:
            response = requests.get(
                f"{self.base_url}/dicom-web/studies/{study_instance_uid}/series",
                timeout=30,
            )
            if response.ok:
                for series in response.json():
                    uid = (series.get("0020000E", {}).get("Value") or [None])[0]
                    if not uid:
                        continue
                    series_uids.append(str(uid))
                    try:
                        inst = requests.get(
                            f"{self.base_url}/dicom-web/studies/"
                            f"{study_instance_uid}/series/{uid}/instances",
                            timeout=60,
                        )
                        if inst.ok:
                            total += len(inst.json())
                    except requests.RequestException:
                        continue
        except requests.RequestException as exc:
            return StudyReport(
                study_instance_uid, exists=True,
                detail=f"{type(exc).__name__}: {exc}",
            )

        return StudyReport(
            study_instance_uid, exists=True, instance_count=total,
            series_uids=sorted(series_uids),
        )

    def read_instance_tags(self, instance_id: str) -> dict[str, str]:
        """Read an instance's full tags.

        Uses the lowercase comma key form this build actually returns. The
        summary endpoint is deliberately not used: on this Orthanc it answers
        404 for stored instances, which is the defect the contract flags.
        """
        try:
            response = requests.get(
                f"{self.base_url}/instances/{instance_id}/tags", timeout=30
            )
        except requests.RequestException:
            return {}
        if not response.ok:
            return {}
        try:
            raw = response.json()
        except ValueError:
            return {}
        if not isinstance(raw, dict):
            return {}
        out: dict[str, str] = {}
        for key, entry in raw.items():
            if not isinstance(entry, dict):
                continue
            text = _unwrap(entry.get("Value"))
            if text is not None:
                out[key.lower()] = text
        return out

    def find_instance_by_sop(self, sop_instance_uid: str) -> str | None:
        """Locate a stored instance id by SOP Instance UID.

        The REST ?SOPInstanceUID= filter is broken on this build, so the whole
        instance list is walked and each entry's full tags are read. Exact and
        slow, which is the correct trade for a correctness check.
        """
        if not sop_instance_uid:
            return None
        try:
            ids = requests.get(f"{self.base_url}/instances", timeout=120).json()
        except (requests.RequestException, ValueError):
            return None
        for instance_id in ids:
            tags = self.read_instance_tags(instance_id)
            if tags.get(_tag_key(0x0008, 0x0018)) == sop_instance_uid:
                return str(instance_id)
        return None


def _error_message(response: requests.Response) -> str:
    """Preserve Orthanc's own explanation of a rejection."""
    try:
        payload = response.json()
    except ValueError:
        text = (response.text or "").strip()
        return text[:300] or f"HTTP {response.status_code} with no body"
    if isinstance(payload, dict):
        for key in ("Message", "Details", "OrthancError", "HttpError"):
            if payload.get(key):
                return f"{key}: {payload[key]}"
    return json.dumps(payload)[:300] or f"HTTP {response.status_code}"


def guess_media_type(path: Path) -> str:
    """Media type for an upload; DICOM part 10 unless the OS knows better."""
    guessed, _ = mimetypes.guess_type(path.name)
    return guessed or DICOM_MEDIA_TYPE


def new_boundary() -> str:
    """A fresh multipart boundary (kept for callers building bodies by hand)."""
    return f"----smscase{uuid.uuid4().hex}"
