"""DICOM header indexing for an extracted case.

Runs on the Python312 interpreter (pydicom 3.0.1).

Nothing here is inferred or defaulted. Every field is copied from a tag that
was genuinely present in the header; a tag that is absent, empty, or
unreadable becomes None, and the caller renders that as "not on file" rather
than filling in a plausible value.

Fields captured per case: patient name, patient id, sex, birth date, study
date, study/series UIDs, modality, series description, institution, instance
count and frame count -- plus per-series detail and a per-file rejection list
for anything that is not parseable DICOM.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import pydicom
from pydicom.errors import InvalidDicomError

#: Tags read from the patient/study modules. Keywords, not numbers, so the
#: code stays readable and pydicom resolves the VR.
PATIENT_FIELDS = (
    "PatientName",
    "PatientID",
    "PatientSex",
    "PatientBirthDate",
)

STUDY_FIELDS = (
    "StudyDate",
    "StudyTime",
    "StudyDescription",
    "AccessionNumber",
    "ReferringPhysicianName",
)

SERIES_FIELDS = (
    "SeriesDescription",
    "SeriesNumber",
    "ProtocolName",
)

EQUIPMENT_FIELDS = (
    "InstitutionName",
    "InstitutionAddress",
    "Manufacturer",
    "ManufacturerModelName",
    "StationName",
)


@dataclass
class FileRejection:
    """A file that is not usable DICOM, with the reason it failed."""

    path: str
    reason: str

    def as_dict(self) -> dict[str, str]:
        return {"path": self.path, "reason": self.reason}


@dataclass
class SeriesInfo:
    """One series within a case."""

    series_instance_uid: str
    series_description: str | None
    series_number: str | None
    modality: str | None
    instance_count: int
    frame_count: int
    instance_numbers: list[str] = field(default_factory=list)

    def as_dict(self) -> dict[str, Any]:
        return {
            "series_instance_uid": self.series_instance_uid,
            "series_description": self.series_description,
            "series_number": self.series_number,
            "modality": self.modality,
            "instance_count": self.instance_count,
            "frame_count": self.frame_count,
        }


@dataclass
class CaseIndex:
    """Everything known about one case, all of it read from DICOM headers."""

    case_id: str
    case_name: str
    source_archive: str
    patient_name: str | None = None
    patient_id: str | None = None
    patient_sex: str | None = None
    patient_birth_date: str | None = None
    patient_age: str | None = None
    study_instance_uid: str | None = None
    study_date: str | None = None
    study_time: str | None = None
    study_description: str | None = None
    accession_number: str | None = None
    referring_physician: str | None = None
    institution_name: str | None = None
    institution_address: str | None = None
    manufacturer: str | None = None
    manufacturer_model: str | None = None
    station_name: str | None = None
    modalities: list[str] = field(default_factory=list)
    series: list[SeriesInfo] = field(default_factory=list)
    instance_count: int = 0
    frame_count: int = 0
    dicom_file_count: int = 0
    non_dicom_count: int = 0
    rejected: list[FileRejection] = field(default_factory=list)
    dicom_files: list[Path] = field(default_factory=list)
    sop_instance_uids: list[str] = field(default_factory=list)
    study_uid_candidates: list[str] = field(default_factory=list)
    series_uid_candidates: list[str] = field(default_factory=list)
    conflicting_patient_names: list[str] = field(default_factory=list)

    def as_dict(self) -> dict[str, Any]:
        return {
            "case_id": self.case_id,
            "case_name": self.case_name,
            "source_archive": self.source_archive,
            "patient_name": self.patient_name,
            "patient_id": self.patient_id,
            "patient_sex": self.patient_sex,
            "patient_birth_date": self.patient_birth_date,
            "patient_age": self.patient_age,
            "study_instance_uid": self.study_instance_uid,
            "study_date": self.study_date,
            "study_time": self.study_time,
            "study_description": self.study_description,
            "accession_number": self.accession_number,
            "referring_physician_name": self.referring_physician,
            "institution_name": self.institution_name,
            "institution_address": self.institution_address,
            "manufacturer": self.manufacturer,
            "manufacturer_model_name": self.manufacturer_model,
            "station_name": self.station_name,
            "modalities": sorted(set(self.modalities)),
            "series": [s.as_dict() for s in self.series],
            "series_count": len(self.series),
            "instance_count": self.instance_count,
            "frame_count": self.frame_count,
            "dicom_file_count": self.dicom_file_count,
            "non_dicom_file_count": self.non_dicom_count,
            "rejected": [r.as_dict() for r in self.rejected],
            "conflicting_patient_names": sorted(set(self.conflicting_patient_names)),
        }


def _text(dataset: Any, keyword: str) -> str | None:
    """Read one tag as trimmed text, or None when absent or empty.

    A tag that exists but holds '' is reported as absent: the header records
    no value, and inventing an empty-looking field would be a fabrication.
    """
    try:
        value = dataset.get(keyword, None)
    except Exception:  # noqa: BLE001 - a malformed element must not abort a case
        return None
    if value is None:
        return None
    text = str(value).strip()
    return text or None


def _frames(dataset: Any) -> int:
    """Frame count for one instance.

    NumberOfFrames is authoritative when present and > 1. A single-frame
    image has no NumberOfFrames element at all, which is 1 frame by the
    standard -- not an absent value, and not a guess.
    """
    raw = _text(dataset, "NumberOfFrames")
    if raw:
        try:
            value = int(float(raw))
            return value if value > 0 else 1
        except ValueError:
            return 1
    return 1


def read_header(path: Path) -> Any:
    """Parse a DICOM header, pixel data excluded.

    stop_before_pixels keeps a multi-hundred-megabyte instance cheap; every
    tag this module records lives before the pixel data.
    """
    return pydicom.dcmread(str(path), stop_before_pixels=True)


def index_tree(case_id: str, case_name: str, source_archive: str,
               root: Path) -> CaseIndex:
    """Walk an extracted case folder and build its index from real headers.

    Files that are not DICOM are recorded as rejected with the parser's own
    message. They are never counted as instances and never silently dropped.
    """
    index = CaseIndex(
        case_id=case_id, case_name=case_name, source_archive=source_archive
    )

    series_buckets: dict[str, SeriesInfo] = {}
    seen_patients: set[str] = set()

    for path in sorted(_iter_files(root)):
        try:
            dataset = read_header(path)
        except InvalidDicomError as exc:
            index.non_dicom_count += 1
            index.rejected.append(FileRejection(str(path), str(exc)))
            continue
        except Exception as exc:  # noqa: BLE001 - report, never abort the case
            index.non_dicom_count += 1
            index.rejected.append(
                FileRejection(str(path), f"{type(exc).__name__}: {exc}")
            )
            continue

        index.dicom_file_count += 1
        index.dicom_files.append(path)

        _accumulate(index, dataset, series_buckets, seen_patients)

    index.series = [series_buckets[key] for key in sorted(series_buckets)]
    return index


def _accumulate(index: CaseIndex, dataset: Any,
                series_buckets: dict[str, SeriesInfo],
                seen_patients: set[str]) -> None:
    """Fold one instance's header into the running case index."""
    # -- patient ---------------------------------------------------------
    name = _text(dataset, "PatientName")
    if name and name not in seen_patients:
        seen_patients.add(name)
        if index.patient_name is None:
            index.patient_name = name
        elif index.patient_name != name:
            # Two names in one archive is a real finding; record it rather than
            # silently picking a winner.
            index.conflicting_patient_names.append(name)
    for keyword, attribute in (
        ("PatientID", "patient_id"),
        ("PatientSex", "patient_sex"),
        ("PatientBirthDate", "patient_birth_date"),
        ("PatientAge", "patient_age"),
    ):
        if getattr(index, attribute) is None:
            setattr(index, attribute, _text(dataset, keyword))

    # -- study -----------------------------------------------------------
    study_uid = _text(dataset, "StudyInstanceUID")
    if study_uid:
        if study_uid not in index.study_uid_candidates:
            index.study_uid_candidates.append(study_uid)
        if index.study_instance_uid is None:
            index.study_instance_uid = study_uid
    for keyword, attribute in (
        ("StudyDate", "study_date"),
        ("StudyTime", "study_time"),
        ("StudyDescription", "study_description"),
        ("AccessionNumber", "accession_number"),
        ("ReferringPhysicianName", "referring_physician"),
    ):
        if getattr(index, attribute) is None:
            setattr(index, attribute, _text(dataset, keyword))

    # -- equipment -------------------------------------------------------
    for keyword, attribute in (
        ("InstitutionName", "institution_name"),
        ("InstitutionAddress", "institution_address"),
        ("Manufacturer", "manufacturer"),
        ("ManufacturerModelName", "manufacturer_model"),
        ("StationName", "station_name"),
    ):
        if getattr(index, attribute) is None:
            setattr(index, attribute, _text(dataset, keyword))

    # -- instance / series ----------------------------------------------
    sop = _text(dataset, "SOPInstanceUID")
    if sop:
        index.sop_instance_uids.append(sop)

    frames = _frames(dataset)
    index.frame_count += frames
    index.instance_count += 1

    modality = _text(dataset, "Modality")
    if modality:
        index.modalities.append(modality)

    series_uid = _text(dataset, "SeriesInstanceUID")
    if not series_uid:
        # No SeriesInstanceUID is a malformed header. Bucket it under a
        # clearly synthetic key so its instances are still counted and visible
        # instead of vanishing.
        series_uid = "NO-SERIES-UID"
    else:
        if series_uid not in index.series_uid_candidates:
            index.series_uid_candidates.append(series_uid)

    bucket = series_buckets.get(series_uid)
    if bucket is None:
        bucket = SeriesInfo(
            series_instance_uid=series_uid,
            series_description=_text(dataset, "SeriesDescription"),
            series_number=_text(dataset, "SeriesNumber"),
            modality=modality,
            instance_count=0,
            frame_count=0,
        )
        series_buckets[series_uid] = bucket
    else:
        # First non-null value wins, so a later instance missing the tag does
        # not erase a real description.
        if bucket.series_description is None:
            bucket.series_description = _text(dataset, "SeriesDescription")
        if bucket.series_number is None:
            bucket.series_number = _text(dataset, "SeriesNumber")
        if bucket.modality is None:
            bucket.modality = modality

    bucket.instance_count += 1
    bucket.frame_count += frames
    instance_number = _text(dataset, "InstanceNumber")
    if instance_number:
        bucket.instance_numbers.append(instance_number)


def _iter_files(root: Path):
    """Yield every regular file under root, in a stable order."""
    for path in sorted(root.rglob("*")):
        if path.is_file():
            yield path


def summarise_line(index: CaseIndex) -> str:
    """One-line human summary of a case, for the log and the Telegram reply.

    Absent fields read as 'not on file'. Nothing is defaulted.
    """

    def show(value: str | None) -> str:
        return value if value else "not on file"

    modalities = ", ".join(sorted(set(index.modalities))) or "not on file"
    return (
        f"{show(index.patient_name)} "
        f"[id {show(index.patient_id)}, {show(index.patient_sex)}] "
        f"{modalities} study {show(index.study_date)} "
        f"{index.instance_count} instance(s) in {len(index.series)} series, "
        f"{index.frame_count} frame(s) at {show(index.institution_name)}"
    )
