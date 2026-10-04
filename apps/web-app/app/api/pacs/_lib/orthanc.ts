/**
 * Typed Orthanc DICOMweb client shared by every route under /api/pacs.
 *
 * Why the browser never sees this module
 * --------------------------------------
 * The viewer must not talk to 127.0.0.1:8042 directly. Doing so would expose
 * the PACS address to any script running in the page, would need CORS on the
 * Orthanc side, and would bypass the audit trail. Every DICOM read therefore
 * crosses this module on the server, where the base URL stays in an
 * environment variable and the read is written to the audit log.
 *
 * Verified upstream behaviour (Orthanc 1.13.0, `dicom-web` mainline plugin)
 * -----------------------------------------------------------------------
 * Measured against the live server, not assumed. These are the facts this
 * module is built around:
 *
 *  - DICOMweb is served on the SAME port as the REST API, under `/dicom-web/`.
 *    `DicomWebServerPort: 8043` is configured in orthanc.json but nothing is
 *    listening there, so the base URL defaults to `http://127.0.0.1:8042` and
 *    every path below is prefixed with `/dicom-web`.
 *  - `GET /dicom-web/studies` (QIDO) returns real studies. DICOMweb JSON keys
 *    have NO comma: `00080020`, not `0008,0020`.
 *  - `GET /dicom-web/studies/{study}/series` and
 *    `.../series/{series}/instances` (QIDO) return the series and instance
 *    trees. `?includefields=` is accepted but ignored by this plugin build, so
 *    the full main-tag set comes back regardless.
 *  - `?limit=` on the QIDO study route returns an EMPTY BODY. The limit is
 *    therefore applied in this module after parsing, never pushed upstream.
 *  - QIDO tag filtering (`?PatientID=`) does work, but the native REST
 *    `/instances?StudyInstanceUID=` filters do NOT: a deliberately bogus UID
 *    still returns the whole collection. All filtering in this module is
 *    therefore done client-side over a full QIDO read, so a result is never
 *    silently over-inclusive.
 *  - WADO-RS pixel retrieve works ONLY on the fully-qualified route
 *    `/dicom-web/studies/{study}/series/{series}/instances/{sop}`. The flat
 *    `/dicom-web/instances/{uid}` route and WADO-URI `/wado/instances/{uuid}`
 *    both return 404 on this build.
 *  - That WADO-RS route rejects `Accept: application/dicom` with HTTP 400 and
 *    requires a `multipart/related` accept header (a bare wildcard works too).
 *    `normalizeWadoAccept()` below repairs the header rather than letting a 400
 *    reach the viewport.
 *  - `GET /dicom-web/studies/{study}` with no series segment returns the
 *    ENTIRE STUDY as one 27 MB multipart body. Nothing in this module calls
 *    it; metadata is read from QIDO instead.
 *  - Study-level QIDO does not carry StudyDescription (0008,1030) or
 *    InstitutionName (0008,0080). Those live at instance level, so
 *    `enrichStudyFromFirstInstance()` reads them from the per-instance
 *    `/metadata` document, which does carry them.
 *
 * Absent means null
 * -----------------
 * The instances ingested after the 1.12.9 -> 1.13.0 upgrade can have an empty
 * database tag index, so a QIDO main tag may come back with a `vr` and no
 * `Value`. Every reader in this module returns `null` for an absent, empty or
 * malformed value and never substitutes a default, so the viewer can render an
 * explicit "Not on file" state instead of a plausible-looking fabrication.
 */

import { logAuditTrail, dispatchAuditTrailAsync } from "@vascule/db";

/**
 * Loopback default. The departmental PACS runs on the same PC as the app, and
 * Orthanc binds to 127.0.0.1 only, so this is reachable and not LAN-exposed.
 * Override with ORTHANC_URL when the PACS moves.
 */
const DEFAULT_ORTHANC_BASE_URL = "http://127.0.0.1:8042";

/** Metadata reads: QIDO JSON, small documents. */
export const ORTHANC_METADATA_TIMEOUT_MS = 10_000;

/** Health probes: must fail fast so a status bar never hangs. */
export const ORTHANC_STATUS_TIMEOUT_MS = 2_500;

/**
 * Pixel streams. Longer than metadata because a multiframe series can be
 * hundreds of megabytes; the timeout has to clear a legitimate transfer
 * without cutting a cine playback off mid-series.
 */
export const ORTHANC_PIXEL_TIMEOUT_MS = 120_000;

/** Upper bound on entries pulled from a QIDO collection in one request. */
const QIDO_MAX_RESULTS = 5_000;

/** How many studies may be enriched concurrently. */
export const ENRICH_CONCURRENCY = 4;

/**
 * A single DICOM attribute as DICOMweb JSON serialises it.
 *
 * `Value` is absent (not null) when the tag is empty, which is exactly the
 * shape the empty-tag-index defect produces.
 */
export interface DicomAttribute {
  vr?: string;
  Value?: unknown;
  InlineBinary?: string;
  BulkDataURI?: string;
}

/** One DICOM object: attribute tag -> attribute. */
export type DicomResource = Record<string, DicomAttribute>;

/** A QIDO result set or a metadata document. */
export type DicomResourceList = DicomResource[];

/**
 * A DICOM UID as a path segment.
 *
 * DICOM UIDs are digits and dots only. Validating against this before a UID is
 * interpolated into a URL is what makes the proxy safe: a UID cannot contain
 * `/`, `..`, `?`, `#` or a scheme, so it can neither escape the intended
 * Orthanc route nor redirect the request to another host.
 */
const DICOM_UID_PATTERN = /^\d+(\.\d+)*$/;

/** True when `value` is a syntactically valid DICOM UID of legal length. */
export function isDicomUid(value: string | null | undefined): value is string {
  if (typeof value !== "string") return false;
  if (value.length === 0 || value.length > 64) return false;
  return DICOM_UID_PATTERN.test(value);
}

/**
 * The base URL of the Orthanc HTTP server, with no trailing slash and no
 * `/dicom-web` suffix.
 *
 * Accepts the same environment variable names the existing
 * `/api/pacs/wado` route honours, and tolerates a value that already includes
 * the `/dicom-web` prefix so that either form works.
 */
export function getOrthancBaseUrl(): string {
  const configured =
    process.env.ORTHANC_URL ||
    process.env.PACS_ORTHANC_URL ||
    process.env.DICOMWEB_URL ||
    process.env.PACS_DICOMWEB_URL ||
    process.env.PACS_WADO_BASE_URL;

  const raw = (configured || DEFAULT_ORTHANC_BASE_URL).trim();
  const withoutTrailingSlash = raw.replace(/\/+$/, "");
  return withoutTrailingSlash.replace(/\/dicom-web$/i, "");
}

/** The DICOMweb root, i.e. the base URL with the `/dicom-web` prefix. */
export function getDicomWebBaseUrl(): string {
  return `${getOrthancBaseUrl()}/dicom-web`;
}

/** True when the PACS address came from configuration rather than the default. */
export function isPacsConfigured(): boolean {
  return Boolean(
    process.env.ORTHANC_URL ||
      process.env.PACS_ORTHANC_URL ||
      process.env.DICOMWEB_URL ||
      process.env.PACS_DICOMWEB_URL ||
      process.env.PACS_WADO_BASE_URL,
  );
}

/**
 * Normalises attribute keys so a reader works against either serialisation.
 *
 * DICOMweb JSON uses `00080020`; Orthanc's native REST `/tags` uses
 * `0008,0020`. Both forms are indexed, so the same reader call works whichever
 * endpoint a document came from.
 */
const normalisedKeyCache = new WeakMap<DicomResource, Map<string, DicomAttribute>>();

function buildIndex(resource: DicomResource): Map<string, DicomAttribute> {
  const index = new Map<string, DicomAttribute>();
  for (const [rawKey, attribute] of Object.entries(resource)) {
    if (attribute === null || typeof attribute !== "object") continue;
    const key = rawKey.toUpperCase();
    index.set(key, attribute);
    // DICOM tags arrive as eight hex digits ("00100010") but are conventionally
// written grouped ("0010,0010"). Insert the comma so one lookup serves both.
//
// Written as an ASCII class rather than `\p{Hex}` with the /u flag: the app
// still compiles to ES5, where neither the u flag nor a Unicode property
// escape is available. For a DICOM tag the two are equivalent - tags are ASCII
// by specification - and this keeps the build target untouched.
const grouped = key.replace(/^([0-9A-Fa-f]{4})([0-9A-Fa-f]{4})$/, "$1,$2");
    if (grouped !== key) index.set(grouped, attribute);
  }
  return index;
}

function lookup(resource: DicomResource, tag: string): DicomAttribute | undefined {
  let index = normalisedKeyCache.get(resource);
  if (!index) {
    index = buildIndex(resource);
    normalisedKeyCache.set(resource, index);
  }
  return index.get(tag.toUpperCase());
}

/**
 * Unwraps one `Value` entry.
 *
 * Person names (VR `PN`) serialise as `{ Alphabetic: "..." }` rather than a
 * bare string, and the other component groups can hold the ideographic or
 * phonetic form, so they are consulted in the order a reader expects.
 */
function unwrapPersonName(value: unknown): string | null {
  if (typeof value === "string") return value.trim() || null;
  if (value === null || typeof value !== "object") return null;
  const groups = value as Record<string, unknown>;
  for (const group of ["Alphabetic", "Ideographic", "Phonetic"]) {
    const candidate = groups[group];
    if (typeof candidate === "string" && candidate.trim()) return candidate.trim();
  }
  return null;
}

/**
 * Unwraps one `Value` entry to a scalar, or null when it carries no value.
 *
 * Orthanc always sends `Value` as an array, even for a single-valued tag such
 * as StudyInstanceUID, so an array is unwrapped to its first scalar here. The
 * tags this app reads as single values (UID, DA, TM, CS, LO, SH) are all
 * single-valued in DICOM, so taking the first entry discards nothing.
 */
function unwrapScalar(value: unknown): string | null {
  if (Array.isArray(value)) {
    for (const entry of value) {
      const scalar = unwrapScalar(entry);
      if (scalar !== null) return scalar;
    }
    return null;
  }
  if (value === null || value === undefined) return null;
  if (typeof value === "string") return value.trim() || null;
  if (typeof value === "number") return Number.isFinite(value) ? String(value) : null;
  if (typeof value === "boolean") return String(value);
  return unwrapPersonName(value);
}

/** Every scalar in a `Value` array, with blanks and person names resolved. */
function unwrapList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    const single = unwrapScalar(value);
    return single === null ? [] : [single];
  }
  const out: string[] = [];
  for (const entry of value) {
    const scalar = unwrapScalar(entry);
    if (scalar !== null) out.push(scalar);
  }
  return out;
}

/**
 * Reads one tag as a display string, or null when it is absent or empty.
 *
 * Never throws. This is the single guarantee the viewer relies on to tell a
 * genuinely empty attribute apart from a failed read: both are null, and both
 * render as an explicit "not on file" state.
 */
export function readTag(resource: DicomResource | null | undefined, tag: string): string | null {
  if (!resource) return null;
  const attribute = lookup(resource, tag);
  if (!attribute) return null;
  return unwrapScalar(attribute.Value);
}

/** Reads one tag as a number, or null when absent or not numeric. */
export function readTagNumber(
  resource: DicomResource | null | undefined,
  tag: string,
): number | null {
  const raw = readTag(resource, tag);
  if (raw === null) return null;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

/**
 * Reads a multi-valued tag such as ModalitiesInStudy (0008,0061).
 *
 * A single-valued response is normalised to a one-element array. An absent
 * tag yields an empty array, which reads as "the scanner recorded none" rather
 * than as a failure.
 */
export function readTagList(resource: DicomResource | null | undefined, tag: string): string[] {
  if (!resource) return [];
  const attribute = lookup(resource, tag);
  if (!attribute) return [];
  return unwrapList(attribute.Value);
}

/**
 * Renders a DICOM TM value as HH:MM:SS.
 *
 * This is a lossless presentation transform of the digits the scanner wrote,
 * not a guess: `132726` becomes `13:27:26`. A value that is not a valid TM
 * string is returned unchanged so nothing is silently reinterpreted.
 */
export function formatDicomTime(value: string | null): string | null {
  if (value === null) return null;
  const digits = value.trim();
  if (!/^\d{2,14}$/.test(digits)) return value;
  const padded = digits.padEnd(6, "0").slice(0, 6);
  const hours = padded.slice(0, 2);
  const minutes = padded.slice(2, 4);
  const seconds = padded.slice(4, 6);
  return `${hours}:${minutes}:${seconds}`;
}

/** True when `value` is an ISO `YYYYMMDD` date, which DICOM `DA` requires. */
function isDicomDate(value: string | null): value is string {
  return value !== null && /^\d{8}$/.test(value);
}

/**
 * `mapWithConcurrency` runs `worker` over `items` with a bounded number in
 * flight.
 *
 * Enriching a study list means one metadata request per study. Without a cap a
 * 200-study list would open 200 sockets against a PACS configured for two
 * concurrent jobs, and the status bar would report the PACS as unreachable.
 */
export async function mapWithConcurrency<T, R>(
  items: readonly T[],
  limit: number,
  worker: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  const bounded = Math.max(1, Math.min(limit, items.length));
  let cursor = 0;

  async function drain(): Promise<void> {
    for (;;) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: bounded }, drain));
  return results;
}

/** Options accepted by the low-level fetch helpers. */
interface OrthancRequestOptions {
  accept?: string;
  timeoutMs?: number;
  /** Aborts the upstream call when the browser hangs up. */
  clientSignal?: AbortSignal;
}

/**
 * Performs one upstream GET and returns the raw response, or null when the
 * PACS could not be reached or answered with a non-2xx status.
 *
 * Null is returned rather than thrown so a stopped PACS surfaces as a truthful
 * "unreachable" state instead of a 500.
 */
export async function orthancGet(
  path: string,
  options: OrthancRequestOptions = {},
): Promise<Response | null> {
  const timeout = AbortSignal.timeout(options.timeoutMs ?? ORTHANC_METADATA_TIMEOUT_MS);
  const signal = options.clientSignal ? AbortSignal.any([timeout, options.clientSignal]) : timeout;

  try {
    const response = await fetch(`${getOrthancBaseUrl()}${path}`, {
      method: "GET",
      headers: options.accept ? { Accept: options.accept } : undefined,
      signal,
      cache: "no-store",
    });
    return response.ok ? response : null;
  } catch {
    return null;
  }
}

/** Performs one upstream DICOMweb GET, returning null on any non-2xx or error. */
export async function dicomWebGet(
  path: string,
  options: OrthancRequestOptions = {},
): Promise<Response | null> {
  const timeout = AbortSignal.timeout(options.timeoutMs ?? ORTHANC_METADATA_TIMEOUT_MS);
  const signal = options.clientSignal ? AbortSignal.any([timeout, options.clientSignal]) : timeout;

  try {
    const response = await fetch(`${getDicomWebBaseUrl()}${path}`, {
      method: "GET",
      headers: { Accept: options.accept ?? "application/dicom+json" },
      signal,
      cache: "no-store",
    });
    return response.ok ? response : null;
  } catch {
    return null;
  }
}

/**
 * Fetches and parses one DICOMweb JSON document.
 *
 * Returns null when the PACS is down, the route is 404, or the body is not the
 * JSON array or object the caller expects.
 */
export async function dicomWebJson<T extends DicomResource | DicomResourceList>(
  path: string,
  options: OrthancRequestOptions = {},
): Promise<T | null> {
  const response = await dicomWebGet(path, options);
  if (!response) return null;
  try {
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

/** Shape of the subset of `GET /system` the status route reports. */
export interface OrthancSystemInfo {
  version: string | null;
  name: string | null;
  apiVersion: number | null;
  dicomPort: number | null;
}

/** Reads `GET /system`, or null when Orthanc does not answer. */
export async function getSystemInfo(timeoutMs = ORTHANC_STATUS_TIMEOUT_MS): Promise<OrthancSystemInfo | null> {
  const response = await orthancGet("/system", { accept: "application/json", timeoutMs });
  if (!response) return null;
  try {
    const body = (await response.json()) as Record<string, unknown>;
    const apiVersion = Number(body.ApiVersion);
    const dicomPort = Number(body.DicomPort);
    return {
      version: typeof body.Version === "string" ? body.Version : null,
      name: typeof body.Name === "string" ? body.Name : null,
      apiVersion: Number.isFinite(apiVersion) ? apiVersion : null,
      dicomPort: Number.isFinite(dicomPort) ? dicomPort : null,
    };
  } catch {
    return null;
  }
}

/**
 * Reads `GET /plugins`.
 *
 * This is how the `dicom-web` plugin proves it is registered: Orthanc answers
 * `["explorer.js", "dicom-web"]` on this machine. Returns null when the route
 * is unavailable, which is distinct from an empty plugin list.
 */
export async function getPluginNames(
  timeoutMs = ORTHANC_STATUS_TIMEOUT_MS,
): Promise<string[] | null> {
  const response = await orthancGet("/plugins", { accept: "application/json", timeoutMs });
  if (!response) return null;
  try {
    const body: unknown = await response.json();
    if (!Array.isArray(body)) return null;
    return body.filter((entry): entry is string => typeof entry === "string");
  } catch {
    return null;
  }
}

/** True when the DICOMweb plugin is registered and serving `/dicom-web`. */
export function hasDicomWebPlugin(pluginNames: string[] | null): boolean {
  if (!pluginNames) return false;
  return pluginNames.some((name) => name.trim().toLowerCase() === "dicom-web");
}

/** QIDO study level. `limit` is applied here because upstream ignores it. */
export async function queryStudies(options: OrthancRequestOptions = {}): Promise<DicomResourceList | null> {
  const body = await dicomWebJson<DicomResourceList>("/studies", {
    accept: "application/dicom+json",
    ...options,
  });
  if (!Array.isArray(body)) return null;
  return body.slice(0, QIDO_MAX_RESULTS);
}

/** QIDO series level for one study. */
export async function querySeries(
  studyInstanceUid: string,
  options: OrthancRequestOptions = {},
): Promise<DicomResourceList | null> {
  if (!isDicomUid(studyInstanceUid)) return null;
  const body = await dicomWebJson<DicomResourceList>(
    `/studies/${encodeURIComponent(studyInstanceUid)}/series`,
    { accept: "application/dicom+json", ...options },
  );
  return Array.isArray(body) ? body : null;
}

/** QIDO instance level for one series. */
export async function querySeriesInstances(
  studyInstanceUid: string,
  seriesInstanceUid: string,
  options: OrthancRequestOptions = {},
): Promise<DicomResourceList | null> {
  if (!isDicomUid(studyInstanceUid) || !isDicomUid(seriesInstanceUid)) return null;
  const body = await dicomWebJson<DicomResourceList>(
    `/studies/${encodeURIComponent(studyInstanceUid)}/series/${encodeURIComponent(
      seriesInstanceUid,
    )}/instances`,
    { accept: "application/dicom+json", ...options },
  );
  return Array.isArray(body) ? body : null;
}

/** QIDO instance level for a whole study, when the series tree is not known. */
export async function queryStudyInstances(
  studyInstanceUid: string,
  options: OrthancRequestOptions = {},
): Promise<DicomResourceList | null> {
  if (!isDicomUid(studyInstanceUid)) return null;
  const body = await dicomWebJson<DicomResourceList>(
    `/studies/${encodeURIComponent(studyInstanceUid)}/instances`,
    { accept: "application/dicom+json", ...options },
  );
  return Array.isArray(body) ? body : null;
}

/** The single-instance metadata document, which carries the instance-level tags. */
export async function queryInstanceMetadata(
  studyInstanceUid: string,
  seriesInstanceUid: string,
  sopInstanceUid: string,
  options: OrthancRequestOptions = {},
): Promise<DicomResourceList | null> {
  if (!isDicomUid(studyInstanceUid) || !isDicomUid(seriesInstanceUid) || !isDicomUid(sopInstanceUid)) {
    return null;
  }
  const body = await dicomWebJson<DicomResourceList>(
    `/studies/${encodeURIComponent(studyInstanceUid)}/series/${encodeURIComponent(
      seriesInstanceUid,
    )}/instances/${encodeURIComponent(sopInstanceUid)}/metadata`,
    { accept: "application/dicom+json", ...options },
  );
  return Array.isArray(body) ? body : null;
}

/**
 * Reads the tags that study-level QIDO omits.
 *
 * StudyDescription (0008,1030) and InstitutionName (0008,0080) are study-level
 * attributes, but this Orthanc build does not include them in the QIDO study
 * result. They are present in the per-instance metadata document, and every
 * instance in a study carries the same values, so the first instance of the
 * first series is an authoritative source. A study with no instances, or a
 * failed read, yields nulls rather than guesses.
 */
export interface StudyDetailTags {
  studyDescription: string | null;
  institutionName: string | null;
  manufacturer: string | null;
  manufacturerModelName: string | null;
  protocolName: string | null;
  bodyPartExamined: string | null;
  /**
   * AccessionNumber and ReferringPhysicianName, read at instance level.
   *
   * Study-level QIDO returns these as a `vr` with no `Value` on this build even
   * where the scanner did write them, so the instance document is the only
   * place they can be read from. They are reported separately from the
   * study-level values so the caller can show the study-level reading and the
   * instance-level one without either masking the other.
   */
  accessionNumber: string | null;
  referringPhysician: string | null;
  /** True when the values above came from real instance metadata. */
  source: "INSTANCE_METADATA" | "UNAVAILABLE";
}

export async function enrichStudyFromFirstInstance(
  studyInstanceUid: string,
  options: OrthancRequestOptions = {},
): Promise<StudyDetailTags> {
  const unavailable: StudyDetailTags = {
    studyDescription: null,
    institutionName: null,
    manufacturer: null,
    manufacturerModelName: null,
    protocolName: null,
    bodyPartExamined: null,
    accessionNumber: null,
    referringPhysician: null,
    source: "UNAVAILABLE",
  };
  if (!isDicomUid(studyInstanceUid)) return unavailable;

  const series = await querySeries(studyInstanceUid, options);
  const firstSeries = series?.[0];
  const seriesInstanceUid = readTag(firstSeries ?? null, "0020000E");
  if (!isDicomUid(seriesInstanceUid)) return unavailable;

  const instances = await querySeriesInstances(studyInstanceUid, seriesInstanceUid, options);
  const firstInstance = instances?.[0];
  const sopInstanceUid = readTag(firstInstance ?? null, "00080018");
  if (!isDicomUid(sopInstanceUid)) return unavailable;

  const metadata = await queryInstanceMetadata(
    studyInstanceUid,
    seriesInstanceUid,
    sopInstanceUid,
    options,
  );
  const resource = metadata?.[0];
  if (!resource) return unavailable;

  return {
    studyDescription: readTag(resource, "00081030"),
    institutionName: readTag(resource, "00080080"),
    manufacturer: readTag(resource, "00080070"),
    manufacturerModelName: readTag(resource, "00081090"),
    protocolName: readTag(resource, "00181030"),
    bodyPartExamined: readTag(resource, "00180015"),
    accessionNumber: readTag(resource, "00080050"),
    referringPhysician: readTag(resource, "00080090"),
    source: "INSTANCE_METADATA",
  };
}

/**
 * Repairs the Accept header for a WADO-RS pixel retrieve.
 *
 * This plugin build answers `400 Parameter out of range` to
 * `Accept: application/dicom` and only serves the multipart wrapper, so a
 * header that asks for a bare DICOM stream is rewritten to the equivalent
 * multipart form. A header that already asks for `multipart/related`, or that
 * accepts anything, is passed through untouched. Cornerstone's `wadors:` loader
 * sends `multipart/related` and parses the boundary itself.
 */
export function normalizeWadoAccept(requestAccept: string | null): string {
  const fallback = 'multipart/related; type="application/dicom"';
  if (!requestAccept) return fallback;
  const lowered = requestAccept.toLowerCase();
  if (lowered.includes("multipart/related")) return requestAccept;
  if (lowered.includes("*/*")) return requestAccept;
  return fallback;
}

/**
 * Repairs the Accept header for a WADO-RS frame retrieve.
 *
 * Verified: the frames route rejects `image/jpeg` and
 * `multipart/related; type="application/dicom"` with HTTP 400, and serves
 * `multipart/related; type="application/octet-stream"`. The frame bytes are
 * therefore returned in the instance's own transfer syntax, which is what the
 * dicom-image-loader decodes locally.
 */
export function normalizeFrameAccept(requestAccept: string | null): string {
  const fallback = 'multipart/related; type="application/octet-stream"';
  if (!requestAccept) return fallback;
  const lowered = requestAccept.toLowerCase();
  if (lowered.includes('type="application/octet-stream"')) return requestAccept;
  if (lowered.includes("multipart/related")) return requestAccept;
  if (lowered.includes("*/*")) return requestAccept;
  return fallback;
}

/** The DICOMweb JSON media type, used for every QIDO read. */
export const DICOMWEB_JSON_ACCEPT = "application/dicom+json";

/** Audit entity types, matching the vocabulary already used by /api/pacs/wado. */
export type PacsAuditEntity = "DicomStudy" | "DicomSeries" | "DicomInstance" | "DicomQidoSearch";

/** Request attributes worth recording against a DICOM read. */
export interface PacsAuditContext {
  actorStaffId: string;
  entityType: PacsAuditEntity;
  entityId: string;
  ipAddress: string | null;
  userAgent: string | null;
  details: Record<string, unknown>;
}

/** Extracts the client address the same way the existing PACS route does. */
export function clientIpOf(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first;
  return request.headers.get("x-real-ip")?.trim() || "127.0.0.1";
}

/** Extracts the user agent, falling back to the viewer's own identifier. */
export function clientUserAgentOf(request: Request): string {
  return request.headers.get("user-agent") || "VascFlow-ImagingViewer";
}

/**
 * Writes a DICOM read to the tamper-evident audit trail.
 *
 * `logAuditTrail` throws if `AUDIT_HMAC_SECRET` or `PHI_ENCRYPTION_KEY` is
 * missing, and returns a fallback record if the database is offline, so the
 * call is guarded exactly as the existing `/api/pacs/wado` route guards it: a
 * failed audit must not take the viewer down mid-read, but the failure is
 * logged rather than swallowed silently.
 */
export async function auditDicomRead(context: PacsAuditContext): Promise<void> {
  try {
    await logAuditTrail({
      actorStaffId: context.actorStaffId,
      action: "READ",
      entityType: context.entityType,
      entityId: context.entityId,
      ipAddress: context.ipAddress || "127.0.0.1",
      userAgent: context.userAgent || "VascFlow-ImagingViewer",
      details: { source: "DEPARTMENTAL_ORTHANC", ...context.details },
    });
  } catch (error) {
    console.error("[PACS] Audit write failed for a DICOM read:", error);
  }
}

/**
 * Fire-and-forget variant for the pixel proxy.
 *
 * A cine playback pulls one instance per frame; awaiting a database write on
 * every one of them would gate the viewport on audit latency. This dispatches
 * the identical `logAuditTrail` write off the response path so the read is
 * still recorded, just not blocking the stream.
 */
export function auditDicomReadAsync(context: PacsAuditContext): void {
  try {
    dispatchAuditTrailAsync({
      actorStaffId: context.actorStaffId,
      action: "READ",
      entityType: context.entityType,
      entityId: context.entityId,
      ipAddress: context.ipAddress || "127.0.0.1",
      userAgent: context.userAgent || "VascFlow-ImagingViewer",
      details: { source: "DEPARTMENTAL_ORTHANC", ...context.details },
    });
  } catch (error) {
    console.error("[PACS] Audit dispatch failed for a DICOM read:", error);
  }
}

/**
 * Study-level fields that study-level QIDO does not populate.
 *
 * NumberOfStudyRelatedSeries (0020,1206) and NumberOfStudyRelatedInstances
 * (0020,1208) are accepted when present, but they are read straight out of the
 * QIDO document and are reported as null when absent, because the empty tag
 * index can suppress them. The series tree is counted independently, so the
 * viewer always has a verified count.
 */
export interface StudyListFilters {
  /** Exact PatientID match (0010,0020). Null disables the filter. */
  patientId?: string | null;
  /** Case-insensitive match against ModalitiesInStudy (0008,0061). */
  modality?: string | null;
  /** Inclusive lower bound on StudyDate (0008,0020), as YYYYMMDD. */
  dateFrom?: string | null;
  /** Inclusive upper bound on StudyDate (0008,0020), as YYYYMMDD. */
  dateTo?: string | null;
}

/** Applies the study-browser filters over a full QIDO result set. */
export function filterStudies(
  studies: DicomResourceList,
  filters: StudyListFilters,
): DicomResourceList {
  const wantedModality = filters.modality?.trim().toUpperCase();
  const from = isDicomDate(filters.dateFrom ?? null) ? (filters.dateFrom as string) : null;
  const to = isDicomDate(filters.dateTo ?? null) ? (filters.dateTo as string) : null;

  return studies.filter((study) => {
    const patientId = readTag(study, "00100020");
    if (filters.patientId && patientId !== filters.patientId) return false;

    if (wantedModality) {
      const modalities = readTagList(study, "00080061").map((m) => m.toUpperCase());
      if (!modalities.includes(wantedModality)) return false;
    }

    const studyDate = readTag(study, "00080020");
    if (from && (!studyDate || studyDate < from)) return false;
    if (to && (!studyDate || studyDate > to)) return false;

    return true;
  });
}

/** Newest study first, with undated studies last and ties broken by UID. */
export function sortStudiesByRecency(studies: DicomResourceList): DicomResourceList {
  return [...studies].sort((left, right) => {
    const leftKey = `${readTag(left, "00080020") ?? ""}${readTag(left, "00080030") ?? ""}`;
    const rightKey = `${readTag(right, "00080020") ?? ""}${readTag(right, "00080030") ?? ""}`;
    if (leftKey !== rightKey) return rightKey.localeCompare(leftKey);
    return (readTag(left, "0020000D") ?? "").localeCompare(readTag(right, "0020000D") ?? "");
  });
}
