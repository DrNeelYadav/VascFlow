import type {
  HorosMenuAvailability,
  HorosMenuCommand,
  PacsConnectionStatus,
} from "@/app/components/imaging/horos/horosTypes";

export const STATUS_ROUTE = "/api/pacs/status";
export const STUDIES_ROUTE = "/api/pacs/studies";
export const STUDY_LIMIT = 200;

export const studyRoute = (studyInstanceUID: string): string =>
  `/api/pacs/study/${encodeURIComponent(studyInstanceUID)}`;

export const instanceMetadataRoute = (studyInstanceUID: string): string =>
  `/api/pacs/wado?studyUID=${encodeURIComponent(studyInstanceUID)}&requestType=metadata`;

export function buildImageId(
  studyInstanceUID: string,
  seriesInstanceUID: string,
  sopInstanceUID: string,
  frame: number,
): string {
  const query = new URLSearchParams({
    studyUID: studyInstanceUID,
    seriesUID: seriesInstanceUID,
    sopUID: sopInstanceUID,
    frame: String(Math.max(1, Math.trunc(frame))),
  });
  return `wadors:/api/pacs/proxy?${query.toString()}`;
}

export const ENGINE_ID_PREFIX = "horos-viewport-engine";
export const MAX_VIEWPORT_SLOTS = 9;

export interface DicomJsonElement {
  Value?: string[] | number[] | Record<string, string>[];
  vr?: string;
}

export type DicomJsonRecord = Record<string, DicomJsonElement | null>;

export interface PacsStatusBody {
  reachable: boolean;
  dicomWebAvailable: boolean | null;
  orthancVersion: string | null;
  orthancName: string | null;
  message: string;
  checkedAt: string;
}

export interface PacsStudySummary {
  patientName: string | null;
  patientId: string | null;
  sex: string | null;
  birthDate: string | null;
  studyDate: string | null;
  studyInstanceUID: string;
  reportedSeriesCount: number | null;
  reportedInstanceCount: number | null;
  modalities: string[];
  studyDescription: string | null;
  accessionNumber: string | null;
}

export interface PacsSeriesSummary {
  seriesInstanceUID: string;
  modality: string | null;
  seriesDescription: string | null;
  seriesNumber: number | null;
  instanceCount: number;
  reportedInstanceCount: number | null;
  seriesDate: string | null;
  bodyPartExamined: string | null;
  manufacturer: string | null;
  protocolName: string | null;
}

export interface PacsStudyDetailBody {
  series: PacsSeriesSummary[];
}

export const UNPROBED_CONNECTION: PacsConnectionStatus = {
  state: "unknown",
  baseUrl: "",
  version: null,
  checkedAt: null,
  error: null,
};

export const UNNAMED_PACS = "the departmental PACS";

export class PacsReadError extends Error {}

export async function readJson<T>(url: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(url, { cache: "no-store", signal });
  if (!response.ok) {
    let detail = `HTTP ${response.status}`;
    try {
      const body = (await response.json()) as { message?: unknown };
      if (typeof body.message === "string" && body.message.trim().length > 0) {
        detail = body.message.trim();
      }
    } catch {
      // non-JSON error
    }
    throw new PacsReadError(detail);
  }
  return (await response.json()) as T;
}

export function describeFailure(cause: unknown): string {
  if (cause instanceof PacsReadError) return cause.message;
  if (cause instanceof Error) {
    if (cause.name === "AbortError") return "";
    return cause.message;
  }
  return "The departmental PACS could not be reached.";
}

const UNAVAILABLE_MENU_COMMANDS: readonly HorosMenuCommand[] = [
  "file.openStudy",
  "query.patient",
  "query.accession",
  "import.dicomFolder",
  "import.orthanc",
  "export.dicom",
  "export.image",
  "export.studyListCsv",
  "send.study",
  "send.series",
  "send.report",
];

export const MENU_AVAILABILITY: HorosMenuAvailability = Object.fromEntries(
  UNAVAILABLE_MENU_COMMANDS.map((command) => [command, false]),
) as HorosMenuAvailability;
