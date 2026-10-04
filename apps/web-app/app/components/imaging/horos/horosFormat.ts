/**
 * Null-guarding formatters for the HOROS chrome.
 *
 * Every DICOM attribute in this app can be null, and the known Orthanc
 * 1.12.9 to 1.13.0 upgrade defect makes them null in bulk: instances ingested
 * after the upgrade have an empty DB tag index, so a whole series can arrive
 * with no description, no series number and no modality while the pixels are
 * fine.
 *
 * These helpers are the single place that decides what "absent" looks like, so
 * the answer is the same in the study list, the series tree, the tool panel and
 * the status bar: a field the scanner did not write shows a dash, and a field
 * the radiologist must not be left guessing about shows `Not on file`.
 */

/** The dash shown for any absent numeric or short value. */
export const HOROS_DASH = "—";

/** The words shown for any absent value a clinician must not guess at. */
export const HOROS_NOT_ON_FILE = "Not on file";

/** True when a DICOM string attribute is absent or holds only whitespace. */
export function isAbsent(
  value: string | number | null | undefined,
): value is null | undefined {
  if (value === null || value === undefined) return true;
  return String(value).trim().length === 0;
}

/**
 * Renders a DICOM attribute, or the dash when it is absent.
 *
 * Accepts numbers as well as strings: the chrome types the numeric tags -
 * series number, instance number, WW/WL - as `number | null`, and they should
 * print through the same absent-value rule as everything else.
 *
 * Used for the values where a dash is unambiguous: a modality, a date, a UID
 * tail. Patient identity uses `patientNameOrMissing`, because a blank patient
 * name in a worklist is a patient-safety problem, not a cosmetic one.
 */
export function text(
  value: string | number | null | undefined,
  fallback: string = HOROS_DASH,
): string {
  if (isAbsent(value)) return fallback;
  const trimmed = String(value).trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

/** Renders a numeric attribute, or the dash when it is absent or not finite. */
export function numberText(
  value: number | null | undefined,
  digits = 0,
  fallback: string = HOROS_DASH,
): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return fallback;
  return value.toFixed(digits);
}

/**
 * Renders a counter. Counts are never hidden behind a dash: zero studies really
 * is zero, and a zero that renders as a dash is a lie about the PACS.
 */
export function countText(value: number | null | undefined): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return HOROS_DASH;
  return String(Math.trunc(value));
}

/**
 * Formats a DICOM DA value (YYYYMMDD) as YYYY-MM-DD.
 *
 * A DA that is not eight digits is returned exactly as the scanner sent it,
 * because it may be a partial or non-conformant date and silently mangling it
 * would be worse than showing it raw.
 */
export function formatDicomDate(da: string | null | undefined): string {
  if (isAbsent(da)) return HOROS_DASH;
  const value = da.trim();
  if (!/^\d{8}$/.test(value)) return value;
  return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
}

/**
 * Formats a DICOM TM value (HHMMSS.FFFFFF) as HH:MM:SS.
 *
 * Truncates fractional seconds, which no viewer in a reading room has use for.
 * A malformed TM is returned raw, for the same reason a malformed DA is.
 */
export function formatDicomTime(tm: string | null | undefined): string {
  if (isAbsent(tm)) return HOROS_DASH;
  const value = tm.trim();
  if (!/^\d{2}/.test(value)) return value;
  const hh = value.slice(0, 2);
  const mm = value.length >= 4 ? value.slice(2, 4) : "--";
  const ss = value.length >= 6 ? value.slice(4, 6) : "--";
  return `${hh}:${mm}:${ss}`;
}

/** Formats an ISO timestamp as a local wall clock, for the connection probe. */
export function formatClockTime(iso: string | null | undefined): string {
  if (isAbsent(iso)) return HOROS_DASH;
  const parsed = new Date(iso);
  const ms = parsed.getTime();
  if (Number.isNaN(ms)) return iso;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(parsed.getHours())}:${pad(parsed.getMinutes())}:${pad(parsed.getSeconds())}`;
}

/**
 * Formats the one-based position within a stack: `27/240`.
 *
 * A zero-length stack renders as `—/—`, not `1/0`, because there is no first
 * image to be on.
 */
export function positionLabel(index: number | null | undefined, total: number | null | undefined): string {
  if (total === null || total === undefined || !Number.isFinite(total) || total <= 0) {
    return `${HOROS_DASH}/${HOROS_DASH}`;
  }
  if (index === null || index === undefined || !Number.isFinite(index)) {
    return `${HOROS_DASH}/${Math.trunc(total)}`;
  }
  return `${Math.trunc(index) + 1}/${Math.trunc(total)}`;
}

/** Joins a multi-valued DICOM attribute with a backslash, as PACS systems do. */
export function joinValues(values: readonly (string | number)[] | null | undefined): string {
  if (!values || values.length === 0) return HOROS_DASH;
  const parts = values.map((v) => String(v).trim()).filter((v) => v.length > 0);
  return parts.length > 0 ? parts.join("\\") : HOROS_DASH;
}

/**
 * The primary modality of a study, for the badge.
 *
 * When the study genuinely has no modality the badge is not drawn at all; this
 * returns null so the caller can leave the space empty rather than print a
 * placeholder letter.
 */
export function primaryModality(modalities: readonly string[] | null | undefined): string | null {
  if (!modalities || modalities.length === 0) return null;
  const first = modalities.find((m) => !isAbsent(m));
  return first ? first.trim().toUpperCase() : null;
}

/** The badge label, capped so a malformed modality cannot break the row. */
export function modalityBadge(modalities: readonly string[] | null | undefined): string | null {
  const modality = primaryModality(modalities);
  if (!modality) return null;
  return modality.length > 3 ? modality.slice(0, 3) : modality;
}

/**
 * The tail of a DICOM UID, for a dense row where the full UID will not fit.
 *
 * The tail is the discriminating part: two series UIDs from the same study
 * share a long prefix, so a truncated UID must keep the end, not the start.
 */
export function uidTail(uid: string | null | undefined, length = 8): string {
  if (isAbsent(uid)) return HOROS_DASH;
  const value = uid.trim();
  return value.length <= length ? value : value.slice(value.length - length);
}

/** The patient name, or an explicit marker when the PACS has none on file. */
export function patientNameOrMissing(name: string | null | undefined): string {
  return text(name, HOROS_NOT_ON_FILE);
}

/**
 * Patient demographics as the worklist shows them: `35/F`, or a partial when
 * the scanner only wrote one half. Never guesses the missing half.
 */
export function demographics(
  birthDate: string | null | undefined,
  sex: string | null | undefined,
): string {
  const born = isAbsent(birthDate) ? HOROS_DASH : formatDicomDate(birthDate);
  const sexText = isAbsent(sex) ? HOROS_DASH : sex.trim().toUpperCase();
  return `${born}  ${sexText}`;
}

/** Groups studies by patient, preserving the incoming order of the groups. */
export function groupStudiesByPatient<T extends {
  patientId: string | null;
  patientName: string | null;
}>(studies: readonly T[]): Map<string, T[]> {
  const groups = new Map<string, T[]>();
  for (const study of studies) {
    const key = isAbsent(study.patientId)
      ? isAbsent(study.patientName)
        ? "__unidentified__"
        : `name:${study.patientName.trim()}`
      : `id:${study.patientId.trim()}`;
    const bucket = groups.get(key);
    if (bucket) bucket.push(study);
    else groups.set(key, [study]);
  }
  return groups;
}
