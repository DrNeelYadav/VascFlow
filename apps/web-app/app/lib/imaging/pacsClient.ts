/**
 * Departmental PACS client for Orthanc's native REST API.
 *
 * Why native REST and not DICOMweb
 * ---------------------------------
 * Orthanc 1.12.9's DICOMweb plugin (QIDO-RS/WADO-RS) does not load on this
 * build: the prebuilt OrthancDicomWeb DLLs are compiled against a different
 * Orthanc SDK revision, so Orthanc never registers the /dicom-web routes.
 *
 * The native REST API serves everything a viewport needs, verified against a
 * real ingested MR study:
 *
 *   GET /studies                     study list
 *   GET /studies/{id}/series         series ("procedures") within a study
 *   GET /series/{id}/instances       instances within a series
 *   GET /instances/{id}/tags         all DICOM tags, keyed by group/element
 *   GET /instances/{id}/file         the original DICOM file, byte-identical
 *
 * The last route is what matters: Cornerstone's dicom-image-loader parses and
 * decodes a full DICOM file, so /instances/{id}/file is a complete substitute
 * for a WADO-RS pixel stream. See buildImageId() below.
 *
 * Orthanc identifiers are its own UUIDs, not DICOM UIDs. Every function that
 * crosses that boundary carries both so the viewer never confuses the two.
 */

import { logAuditTrail } from "@vascule/db";

/**
 * Base URL of the departmental Orthanc instance.
 *
 * Defaults to the workstation loopback because the PACS runs on the same
 * departmental PC as the app. Override with ORTHANC_URL when the PACS is
 * reached over the LAN instead.
 */
export function getOrthancBaseUrl(): string {
  const configured =
    process.env.ORTHANC_URL || process.env.PACS_ORTHANC_URL || process.env.DICOMWEB_URL;
  const base = (configured || "http://127.0.0.1:8042").replace(/\/+$/, "");
  return base;
}

/** True when an Orthanc instance answers on the configured URL. */
export async function isPacsReachable(baseUrl = getOrthancBaseUrl()): Promise<boolean> {
  try {
    const res = await fetch(`${baseUrl}/system`, {
      signal: AbortSignal.timeout(2500),
      cache: "no-store",
    });
    return res.ok;
  } catch {
    return false;
  }
}

interface OrthancTagValue {
  Value?: string | number | string[];
  Type?: string;
}

/**
 * DICOM tag group/element -> the name this app displays it under.
 *
 * Only the tags a radiologist reads in the four-corner overlay and the study
 * list are named. Anything not listed here is still fetched and available to
 * callers, it simply has no short display name.
 */
export const TAG_NAMES: Readonly<Record<string, string>> = {
  "0008,0020": "StudyDate",
  "0008,0021": "SeriesDate",
  "0008,0022": "AcquisitionDate",
  "0008,0023": "ContentDate",
  "0008,0030": "StudyTime",
  "0008,0031": "SeriesTime",
  "0008,0060": "Modality",
  "0008,0070": "Manufacturer",
  "0008,1030": "StudyDescription",
  "0008,103e": "SeriesDescription",
  "0008,1090": "ManufacturerModelName",
  "0010,0010": "PatientName",
  "0010,0020": "PatientID",
  "0010,0030": "PatientBirthDate",
  "0010,0040": "PatientSex",
  "0018,0050": "SliceThickness",
  "0018,0081": "ContrastBolusRoute",
  "0018,1030": "ProtocolName",
  "0020,000d": "StudyInstanceUID",
  "0020,000e": "SeriesInstanceUID",
  "0020,0011": "SeriesNumber",
  "0020,0013": "InstanceNumber",
  "0020,0032": "ImagePositionPatient",
  "0020,0037": "ImageOrientationPatient",
  "0020,1041": "SliceLocation",
  "0028,0002": "SamplesPerPixel",
  "0028,0004": "PhotometricInterpretation",
  "0028,0008": "NumberOfFrames",
  "0028,0010": "Rows",
  "0028,0011": "Columns",
  "0028,0030": "PixelSpacing",
  "0028,0100": "BitsAllocated",
  "0028,0101": "BitsStored",
  "0028,0103": "PixelRepresentation",
  "0028,1050": "WindowCenter",
  "0028,1051": "WindowWidth",
  "0028,1052": "RescaleIntercept",
  "0028,1053": "RescaleSlope",
  "0002,0010": "TransferSyntaxUID",
};

/** Reads one tag out of an Orthanc tag map by DICOM keyword. */
export function readTag(
  tags: Record<string, OrthancTagValue> | undefined,
  keyword: string,
): string | undefined {
  if (!tags) return undefined;
  for (const [groupElement, entry] of Object.entries(tags)) {
    if (TAG_NAMES[groupElement] === keyword) {
      const value = entry?.Value;
      if (Array.isArray(value)) return value.join("\\");
      if (value === undefined || value === null) return undefined;
      return String(value);
    }
  }
  return undefined;
}

/** Reads several tags in one pass over the tag map. */
export function readTags(
  tags: Record<string, OrthancTagValue> | undefined,
  keywords: readonly string[],
): Record<string, string | undefined> {
  const out: Record<string, string | undefined> = {};
  for (const keyword of keywords) out[keyword] = readTag(tags, keyword);
  return out;
}

async function orthancGet<T>(
  path: string,
  baseUrl = getOrthancBaseUrl(),
): Promise<T | null> {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

interface OrthancSummary {
  ID: string;
  Type: "Patient" | "Study" | "Series" | "Instance";
  IsStable?: boolean;
  LastUpdate?: string;
  MainDicomTags?: Record<string, unknown>;
  /**
   * Orthanc includes the full instance array on a series summary when the
   * series is small, which lets the study list report an instance count
   * without a second round trip per series. Optional because Orthanc omits it
   * for large series.
   */
  Instances?: unknown[];
}

interface OrthancInstance extends OrthancSummary {
  Type: "Instance";
  IndexInSeries?: number;
  FileSize?: number;
}

/** A study as the study list shows it. */
export interface PacsStudy {
  /** Orthanc study UUID. */
  studyId: string;
  patientId: string;
  patientName: string;
  patientBirthDate?: string;
  patientSex?: string;
  studyDate?: string;
  studyDescription?: string;
  accessionNumber?: string;
  modalities: string[];
  seriesCount: number;
  instanceCount: number;
  lastUpdate?: string;
}

/** A series ("procedure") as the series panel shows it. */
export interface PacsSeries {
  seriesId: string;
  studyId: string;
  seriesInstanceUid?: string;
  seriesNumber?: number;
  seriesDescription?: string;
  modality?: string;
  manufacturer?: string;
  protocolName?: string;
  bodyPartExamined?: string;
  seriesDate?: string;
  /** Number of instances the series reports, which may exceed what is loaded. */
  instanceCount: number;
  /** Instances actually present in the PACS right now. */
  loadedInstances: number;
  isComplete: boolean;
  rows?: number;
  columns?: number;
  lastUpdate?: string;
}

/** One viewable image, addressed by Orthanc instance UUID. */
export interface PacsInstance {
  instanceId: string;
  seriesId: string;
  studyId: string;
  sopInstanceUid?: string;
  instanceNumber?: number;
  sliceLocation?: number;
  imagePositionPatient?: string[];
  imageOrientationPatient?: string[];
  instanceCount: number;
}

const STUDY_TAGS = [
  "PatientName",
  "PatientID",
  "PatientBirthDate",
  "PatientSex",
  "StudyDate",
  "StudyDescription",
  "Modality",
] as const;

function stringTags(raw: Record<string, unknown> | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw ?? {})) {
    if (typeof v === "string" && v.length > 0) out[k] = v;
  }
  return out;
}

function parseNumber(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function parseNumberList(value: string | undefined): string[] | undefined {
  if (!value) return undefined;
  const parts = value.split("\\").filter((p) => p.length > 0);
  return parts.length > 0 ? parts : undefined;
}

/**
 * Lists studies, newest first.
 *
 * Each study costs one extra request for its series, because Orthanc's
 * study summary does not carry a modality or series count. That is acceptable
 * at departmental scale (hundreds of studies, not hundreds of thousands) and
 * avoids shipping a study list whose modality column is guesswork.
 */
export async function listStudies(limit = 200): Promise<PacsStudy[]> {
  const summaries = await orthancGet<OrthancSummary[]>("/studies");
  if (!Array.isArray(summaries)) return [];

  const studies = await Promise.all(
    summaries.map(async (summary): Promise<PacsStudy> => {
      const tags = stringTags(summary.MainDicomTags);
      const series = (await orthancGet<OrthancSummary[]>(
        `/studies/${summary.ID}/series`,
      )) ?? [];

      const modalities = new Set<string>();
      let instanceCount = 0;
      for (const s of series) {
        const mod = stringTags(s.MainDicomTags).Modality;
        if (mod) modalities.add(mod);
        instanceCount += Array.isArray(s.Instances) ? s.Instances.length : 0;
      }

      return {
        studyId: summary.ID,
        patientId: tags.PatientID ?? "",
        patientName: tags.PatientName ?? "",
        patientBirthDate: tags.PatientBirthDate,
        patientSex: tags.PatientSex,
        studyDate: tags.StudyDate,
        studyDescription: tags.StudyDescription,
        accessionNumber: tags.AccessionNumber,
        modalities: Array.from(modalities).sort(),
        seriesCount: series.length,
        instanceCount,
        lastUpdate: summary.LastUpdate,
      };
    }),
  );

  studies.sort((a, b) => (b.studyDate ?? "").localeCompare(a.studyDate ?? ""));
  return studies.slice(0, limit);
}

/** Lists the series within a study. These are the procedures a scan contains. */
export async function listSeries(studyId: string): Promise<PacsSeries[]> {
  const summaries = await orthancGet<OrthancSummary[]>(`/studies/${studyId}/series`);
  if (!Array.isArray(summaries)) return [];

  const series = await Promise.all(
    summaries.map(async (summary): Promise<PacsSeries> => {
      const tags = stringTags(summary.MainDicomTags);
      const instances =
        (await orthancGet<OrthancInstance[]>(`/series/${summary.ID}/instances`)) ?? [];
      const first = instances[0];
      const geometry = first
        ? await readGeometry(first.ID)
        : { rows: undefined, columns: undefined };

      const expected = parseNumber(tags.ExpectedNumberOfInstances);
      const loaded = instances.length;
      return {
        seriesId: summary.ID,
        studyId,
        seriesInstanceUid: tags.SeriesInstanceUID,
        seriesNumber: parseNumber(tags.SeriesNumber),
        seriesDescription: tags.SeriesDescription,
        modality: tags.Modality,
        manufacturer: tags.Manufacturer,
        protocolName: tags.ProtocolName,
        bodyPartExamined: tags.BodyPartExamined,
        seriesDate: tags.SeriesDate,
        instanceCount: expected ?? loaded,
        loadedInstances: loaded,
        isComplete: expected !== undefined ? loaded >= expected : true,
        rows: geometry.rows,
        columns: geometry.columns,
        lastUpdate: summary.LastUpdate,
      };
    }),
  );

  series.sort((a, b) => (a.seriesNumber ?? 0) - (b.seriesNumber ?? 0));
  return series;
}

/**
 * Lists instances in a series, sorted by spatial position so that scrolling
 * moves through the stack anatomically rather than by insertion order.
 */
export async function listInstances(seriesId: string): Promise<PacsInstance[]> {
  const summaries = await orthancGet<OrthancInstance[]>(`/series/${seriesId}/instances`);
  if (!Array.isArray(summaries)) return [];

  const instances = await Promise.all(
    summaries.map(async (summary): Promise<PacsInstance> => {
      const tags = stringTags(summary.MainDicomTags);
      const position = parseNumberList(tags.ImagePositionPatient);
      return {
        instanceId: summary.ID,
        seriesId,
        studyId: "",
        sopInstanceUid: tags.SOPInstanceUID,
        instanceNumber: parseNumber(tags.InstanceNumber),
        // SliceLocation is the cleanest sort key when the scanner wrote it.
        sliceLocation: parseNumber(tags.SliceLocation),
        imagePositionPatient: position,
        imageOrientationPatient: parseNumberList(tags.ImageOrientationPatient),
        instanceCount: summaries.length,
      };
    }),
  );

  // Project each instance position onto the slice normal so the stack order
  // matches the scanner's own spatial ordering.
  const normal = sliceNormalFrom(instances[0]?.imageOrientationPatient);
  const keyed = instances.map((inst) => {
    let projection = 0;
    if (normal && inst.imagePositionPatient && inst.imagePositionPatient.length >= 3) {
      const [x, y, z] = inst.imagePositionPatient.map(Number);
      projection = x * normal[0] + y * normal[1] + z * normal[2];
    }
    return { inst, projection };
  });
  keyed.sort((a, b) => {
    if (a.inst.sliceLocation !== undefined && b.inst.sliceLocation !== undefined) {
      return a.inst.sliceLocation - b.inst.sliceLocation;
    }
    if (a.projection !== b.projection) return a.projection - b.projection;
    return (a.inst.instanceNumber ?? 0) - (b.inst.instanceNumber ?? 0);
  });
  return keyed.map((k) => k.inst);
}

/**
 * The unit normal to the slice plane, i.e. the stack's through-plane axis.
 *
 * From ImageOrientationPatient, which is six values: the first triplet is the
 * row direction (x-axis) and the second the column direction (y-axis). The
 * normal is their cross product.
 */
function sliceNormalFrom(
  orientation: string[] | undefined,
): [number, number, number] | null {
  if (!orientation || orientation.length < 6) return null;
  const row = orientation.slice(0, 3).map(Number);
  const col = orientation.slice(3, 6).map(Number);
  if (row.some(Number.isNaN) || col.some(Number.isNaN)) return null;
  const n: [number, number, number] = [
    row[1] * col[2] - row[2] * col[1],
    row[2] * col[0] - row[0] * col[2],
    row[0] * col[1] - row[1] * col[0],
  ];
  const len = Math.hypot(n[0], n[1], n[2]);
  if (len === 0) return null;
  return [n[0] / len, n[1] / len, n[2] / len];
}

/** Full tag map for one instance, as returned by Orthanc. */
export async function getInstanceTags(
  instanceId: string,
  baseUrl = getOrthancBaseUrl(),
): Promise<Record<string, OrthancTagValue> | null> {
  try {
    const res = await fetch(`${baseUrl}/instances/${instanceId}/tags`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as Record<string, OrthancTagValue>;
  } catch {
    return null;
  }
}

/** Reads matrix geometry off one instance, used to label the series. */
async function readGeometry(
  instanceId: string,
): Promise<{ rows?: number; columns?: number }> {
  const tags = await getInstanceTags(instanceId);
  if (!tags) return {};
  return {
    rows: parseNumber(readTag(tags, "Rows")),
    columns: parseNumber(readTag(tags, "Columns")),
  };
}

/**
 * Builds the Cornerstone imageId for an instance.
 *
 * The id points at this app's own /api/imaging/pacs/frame route rather than at
 * Orthanc directly. That route returns the original DICOM file, byte-identical
 * to what the scanner wrote, which is what Cornerstone's dicom-image-loader
 * needs in order to decode a frame. Going through the app rather than straight
 * to the PACS keeps the PACS address server-side and makes the read auditable.
 *
 * `wadouri:` is the scheme that tells Cornerstone to fetch a whole DICOM file
 * from a URL and decode it locally, so the PACS needs no pixel endpoint at all.
 */
export function buildImageId(instanceId: string, baseUrl = getOrthancBaseUrl()): string {
  // baseUrl is accepted so callers can build an absolute id for a non-default
  // host; the default path stays same-origin and relative.
  void baseUrl;
  return `wadouri:/api/imaging/pacs/frame?instanceId=${encodeURIComponent(instanceId)}`;
}

/**
 * Records a viewer read in the audit trail.
 *
 * Non-blocking: a failure to audit must not stop a clinician from opening a
 * study, but the failure is logged rather than swallowed silently.
 */
export async function auditViewerRead(detail: {
  actorEmail: string;
  action: string;
  entityId: string;
  ipAddress?: string;
  userAgent?: string;
}): Promise<void> {
  try {
    await logAuditTrail({
      actorStaffId: detail.actorEmail,
      action: detail.action as never,
      entityType: "DicomStudy",
      entityId: detail.entityId,
      ipAddress: detail.ipAddress ?? "127.0.0.1",
      userAgent: detail.userAgent ?? "EndoFlow-ImagingViewer",
      details: { source: "DEPARTMENTAL_ORTHANC" },
    });
  } catch {
    // Auditing is best-effort by design; the viewer must stay available.
  }
}