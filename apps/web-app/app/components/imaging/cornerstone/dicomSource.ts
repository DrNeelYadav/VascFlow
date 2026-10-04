/**
 * DICOMweb data source for the departmental PACS.
 *
 * Everything goes through the Next.js origin
 * ------------------------------------------------
 * The viewer never contacts 127.0.0.1:8042 directly. Pixel data and metadata
 * are fetched from same-origin `/api/pacs/dicom-web/...` routes (Agent 3),
 * which proxy to the local Orthanc. That keeps the PACS address off the client,
 * avoids a CORS preflight on every frame, and puts the read on the audited
 * path. An absolute Orthanc URL is still configurable for a PACS reached over
 * the LAN, but it is never the default.
 *
 * Routes actually verified against the live server
 * --------------------------------------------------
 * Measured, not assumed, against Orthanc 1.13.0 with the `dicom-web` plugin on
 * the same port as its REST API (there is no working 8043 listener):
 *
 *   GET /dicom-web/studies                                     200, real studies
 *   GET /dicom-web/studies/{studyUID}/series                   200
 *   GET /dicom-web/studies/{studyUID}/series/{se}/instances    200
 *   GET /dicom-web/studies/{studyUID}/series/{se}/instances/{sop}/frames/{n}  200
 *   GET /dicom-web/instances/{uid}                             404 (flat route unsupported)
 *
 * Two measured quirks are handled below and are the reason this file exists:
 *
 *   1. `?includefields=` is silently ignored by this plugin build. A study
 *      query with it returns byte-identical output to one without, so payload
 *      trimming is left to the proxy rather than pretended at here.
 *
 *   2. The `Accept` header Cornerstone's wadors loader hardcodes,
 *      `multipart/related; type=application/octet-stream; transfer-syntax=*`,
 *      is rejected by this Orthanc build with HTTP 400 on the instance-level
 *      retrieve: "This WADO-RS plugin only supports application/dicom return
 *      type for DICOM retrieval". The frame-level retrieve accepts it, because
 *      a frame *is* an octet-stream part. So the frame route is the one this
 *      source builds imageIds from, and `configureAcceptOverride` exists for
 *      deployments behind a proxy that rewrites it.
 *
 * The frame route also reports the transfer syntax in its own Content-Type
 * (`application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1`), which is
 * what Cornerstone parses to choose a decoder. The instance route reports a
 * bare `application/dicom`, from which Cornerstone cannot tell Explicit VR LE
 * from Implicit VR LE and falls back to assuming Implicit VR LE.
 */

import type { Types as DicomWebTypes } from '@cornerstonejs/dicom-image-loader';

/**
 * The loader options this viewer passes to `dicom-image-loader`'s `init`.
 *
 * Re-exported from the package's `Types` namespace: it has no root named
 * export. Aliased so the call sites in `init.ts` read as loader options rather
 * than as a nested type lookup.
 */
export type LoaderOptions = DicomWebTypes.LoaderOptions;

/** A DICOMweb JSON element: an optional Value plus its VR. */
export interface DicomJsonElement {
  /** Absent when the archive has no value for the attribute. */
  Value?: string[] | number[] | Record<string, string>[];
  vr?: string;
}

/** One DICOMweb JSON record, keyed by 8-hex-digit tag. */
export type DicomJsonRecord = Record<string, DicomJsonElement | null>;

/** Fully-qualified identity of a DICOM instance in the hierarchy. */
export interface InstanceRef {
  studyInstanceUID: string;
  seriesInstanceUID: string;
  sopInstanceUID: string;
}

/** Configuration for the data source. */
export interface DicomWebConfig {
  /**
   * Base path for DICOMweb requests, relative to the Next.js origin.
   *
   * Defaults to `/api/pacs/dicom-web`, Agent 3's proxy prefix. May be an
   * absolute URL when the PACS is reached directly, in which case that origin
   * must send CORS headers for this application's origin.
   */
  baseUrl?: string;
  /**
   * Accept header to force on WADO-RS retrieves.
   *
   * Unset by default because the frame route accepts the loader's own header.
   * Set it to `multipart/related` when a proxy in front of the PACS rejects
   * the loader default, which is the failure the live Orthanc build shows for
   * instance-level retrieves.
   */
  acceptOverride?: string;
  /** Milliseconds before a QIDO or metadata request aborts. */
  requestTimeoutMs?: number;
}

const DEFAULT_BASE_URL = '/api/pacs/dicom-web';
const DEFAULT_TIMEOUT_MS = 15000;

/**
 * Reads a DICOMweb JSON attribute as a string.
 *
 * Returns null for every form of absence the defect in CONTRACT.md section 2
 * produces: a null element, an element with no `Value`, an empty array, or a
 * blank string. Callers render `Not on file` for null; nothing here substitutes
 * a default.
 */
export function readTagString(
  record: DicomJsonRecord | null | undefined,
  tag: string,
): string | null {
  const element = record?.[tag];
  if (!element || !Array.isArray(element.Value)) return null;
  for (const entry of element.Value) {
    if (typeof entry === 'string') {
      const trimmed = entry.trim();
      if (trimmed.length > 0) return trimmed;
      continue;
    }
    // PersonName arrives as [{ Alphabetic: "..." }].
    if (entry && typeof entry === 'object') {
      const personName = entry as Record<string, string | undefined>;
      const value = personName.Alphabetic ?? personName.Ideographic ?? personName.Phonetic;
      if (typeof value === 'string' && value.trim().length > 0) return value.trim();
    }
  }
  return null;
}

/** Reads a DICOMweb JSON attribute as a number, or null when absent. */
export function readTagNumber(
  record: DicomJsonRecord | null | undefined,
  tag: string,
): number | null {
  const raw = readTagString(record, tag);
  if (raw === null) return null;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

/** Reads a DICOMweb JSON attribute as a fixed-length tuple, or null. */
export function readTagTuple<T extends number>(
  record: DicomJsonRecord | null | undefined,
  tag: string,
  length: number,
): T[] | null {
  const element = record?.[tag];
  if (!element || !Array.isArray(element.Value)) return null;
  const numbers: number[] = [];
  for (const entry of element.Value) {
    const parsed = typeof entry === 'number' ? entry : Number(entry);
    if (!Number.isFinite(parsed)) return null;
    numbers.push(parsed);
  }
  if (numbers.length < length) return null;
  return numbers.slice(0, length) as T[];
}

/**
 * Reads (0028,0008) NumberOfFrames.
 *
 * A single-frame object legitimately omits the attribute, so absent is
 * reported as 1 rather than null: DICOM defines the absence of NumberOfFrames
 * to mean one frame, and reporting 0 would make a valid CR series look
 * unplayable. This is the standard's own definition, not an invented default.
 */
export function readNumberOfFrames(record: DicomJsonRecord | null | undefined): number {
  const frames = readTagNumber(record, '00280008');
  if (frames === null || frames < 1) return 1;
  return Math.floor(frames);
}

/** Reads the file-meta transfer syntax, which the `/metadata` route omits. */
export function readTransferSyntaxUID(record: DicomJsonRecord | null | undefined): string | null {
  return readTagString(record, '00020010') ?? readTagString(record, '00083002');
}

/** Mutable source state. One instance per viewer. */
class DicomWebDataSource {
  private baseUrl: string;
  private acceptOverride: string | null;
  private requestTimeoutMs: number;

  constructor(config: DicomWebConfig = {}) {
    this.baseUrl = normaliseBaseUrl(config.baseUrl ?? DEFAULT_BASE_URL);
    this.acceptOverride = config.acceptOverride ?? null;
    this.requestTimeoutMs = config.requestTimeoutMs ?? DEFAULT_TIMEOUT_MS;
  }

  /** The DICOMweb base this source talks to, for display in diagnostics. */
  getBaseUrl(): string {
    return this.baseUrl;
  }

  /** The forced Accept header, or null when the loader's own header is used. */
  getAcceptOverride(): string | null {
    return this.acceptOverride;
  }

  /**
   * Re-points the source at a different DICOMweb base.
   *
   * Intended for the LAN-PACS case and for tests. Does not invalidate any
   * already-registered Cornerstone metadata: those are keyed by imageId, and
   * changing the base produces different imageIds, so callers must reload the
   * stack rather than expect the change to apply in place.
   */
  configure(config: DicomWebConfig): void {
    this.baseUrl = normaliseBaseUrl(config.baseUrl ?? this.baseUrl);
    this.acceptOverride = config.acceptOverride ?? null;
    this.requestTimeoutMs = config.requestTimeoutMs ?? this.requestTimeoutMs;
  }

  /**
   * The `wadors:` imageId for one frame.
   *
   * Fully qualified through study and series because this plugin build has no
   * flat `/dicom-web/instances/{uid}` route (measured 404). The frame route
   * is used rather than the instance route because it returns an octet-stream
   * part whose Content-Type carries the real transfer syntax, which is what
   * Cornerstone parses to select a decoder.
   */
  buildFrameImageId(ref: InstanceRef, frame: number): string {
    const frameNumber = Math.max(1, Math.floor(frame));
    return (
      `wadors:${this.baseUrl}` +
      `/studies/${encodeURIComponent(ref.studyInstanceUID)}` +
      `/series/${encodeURIComponent(ref.seriesInstanceUID)}` +
      `/instances/${encodeURIComponent(ref.sopInstanceUID)}` +
      `/frames/${frameNumber}`
    );
  }

  /** The `wadors:` imageId for frame 1 of an instance. */
  buildInstanceImageId(ref: InstanceRef): string {
    return this.buildFrameImageId(ref, 1);
  }

  /**
   * URL for a QIDO query at one level of the hierarchy.
   *
   * Only the three levels this plugin build serves are addressable: studies,
   * the series within a study, and the instances within a series. A series UID
   * without its study cannot address a QIDO query at all, so that combination
   * is rejected rather than silently returning the whole archive.
   */
  buildQueryUrl(ref: Partial<InstanceRef>): string {
    if (ref.seriesInstanceUID && !ref.studyInstanceUID) {
      throw new Error(
        'QIDO-RS on this PACS is study-scoped: querying a series requires its ' +
          'studyInstanceUID as well as its seriesInstanceUID.',
      );
    }
    if (!ref.studyInstanceUID) return `${this.baseUrl}/studies`;
    const studyPath = `${this.baseUrl}/studies/${encodeURIComponent(ref.studyInstanceUID)}`;
    if (!ref.seriesInstanceUID) return `${studyPath}/series`;
    return `${studyPath}/series/${encodeURIComponent(ref.seriesInstanceUID)}/instances`;
  }

  /** URL for the DICOMweb JSON metadata of one instance. */
  buildMetadataUrl(ref: InstanceRef): string {
    return (
      `${this.baseUrl}/studies/${encodeURIComponent(ref.studyInstanceUID)}` +
      `/series/${encodeURIComponent(ref.seriesInstanceUID)}` +
      `/instances/${encodeURIComponent(ref.sopInstanceUID)}` +
      `/metadata`
    );
  }

  /** Fetches one QIDO level as DICOMweb JSON records. */
  async query(ref: Partial<InstanceRef>): Promise<DicomJsonRecord[]> {
    const url = this.buildQueryUrl(ref);
    const response = await this.fetchJson(url, 'application/dicom+json');
    if (!Array.isArray(response)) return [];
    return response as DicomJsonRecord[];
  }

  /** Fetches the full DICOMweb JSON attribute set for one instance. */
  async instanceMetadata(ref: InstanceRef): Promise<DicomJsonRecord | null> {
    const url = this.buildMetadataUrl(ref);
    const response = await this.fetchJson(url, 'application/dicom+json');
    // The endpoint answers with a one-element array per instance.
    if (Array.isArray(response)) {
      const first = response[0];
      return first && typeof first === 'object' ? (first as DicomJsonRecord) : null;
    }
    if (response && typeof response === 'object') return response as DicomJsonRecord;
    return null;
  }

  /**
   * Fetches metadata and registers it with Cornerstone for `imageId`.
   *
   * Cornerstone's wadors loader resolves rows, columns, pixel spacing and VOI
   * through this store rather than by parsing the pixel response, so a stack
   * whose imageIds are not registered here renders with no geometry at all.
   *
   * Returns the record that was registered, or null when the PACS returned
   * nothing usable, so the caller can render `Not on file` rather than assume.
   */
  async registerInstanceMetadata(
    ref: InstanceRef,
    loader: { wadors: { metaDataManager: { add: (id: string, md: DicomWebTypes.WADORSMetaData) => void } } },
    imageId?: string,
    frame?: number,
  ): Promise<DicomJsonRecord | null> {
    const record = await this.instanceMetadata(ref);
    if (!record) return null;
    const targetImageId = imageId ?? this.buildFrameImageId(ref, frame ?? 1);
    // The store is typed as requiring a Value on every element; the live
    // server returns elements with a vr and no Value for absent attributes,
    // so the null entries are dropped here rather than passed through.
    loader.wadors.metaDataManager.add(targetImageId, withoutNullElements(record));
    return record;
  }

  /** Performs the fetch and parses DICOMweb JSON, with an explicit timeout. */
  private async fetchJson(url: string, accept: string): Promise<unknown> {
    const headers: Record<string, string> = { Accept: accept };
    if (this.acceptOverride) headers.Accept = this.acceptOverride;
    const response = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(this.requestTimeoutMs),
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`PACS returned HTTP ${response.status} for ${url}`);
    }
    return response.json();
  }
}

/** Trims trailing slashes so path joins do not double up. */
function normaliseBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

/** Drops null elements, which the live server returns for absent attributes. */
function withoutNullElements(record: DicomJsonRecord): DicomWebTypes.WADORSMetaData {
  const cleaned: DicomWebTypes.WADORSMetaData = {};
  for (const [tag, element] of Object.entries(record)) {
    if (element && typeof element === 'object') {
      cleaned[tag] = element as DicomWebTypes.WADORSMetaDataElement;
    }
  }
  return cleaned;
}

/** The source the viewer uses. Replace via `configureDicomWebSource`. */
let activeSource: DicomWebDataSource | null = null;

/**
 * Returns the shared data source, creating it on first use.
 *
 * The instance is module-level rather than per-call so the base URL is
 * configured once and every component reads the same one; a second source
 * would silently issue imageIds the loader has no metadata for.
 */
export function getDicomWebSource(config?: DicomWebConfig): DicomWebDataSource {
  if (!activeSource) activeSource = new DicomWebDataSource(config ?? {});
  return activeSource;
}

/** Replaces the shared source. Intended for the LAN-PACS switch and tests. */
export function configureDicomWebSource(config: DicomWebConfig): DicomWebDataSource {
  activeSource = new DicomWebDataSource(config);
  return activeSource;
}
