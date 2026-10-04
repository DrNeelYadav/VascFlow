/**
 * GET /api/pacs/studies -- the study list for the viewer's left panel.
 *
 * Normalises Orthanc's DICOMweb JSON into one flat, strictly typed record per
 * study so the viewer never has to know a DICOM tag number. Every field is
 * either the value the PACS returned or null: an absent attribute stays null
 * and the panel renders it as "Not on file". Nothing is defaulted, inferred
 * from a sibling study, or filled in from the archive.
 *
 * Filters (all optional): patientId, modality, dateFrom, dateTo, limit.
 * They are applied here rather than pushed upstream, because the native REST
 * filters on this Orthanc build are non-functional: `/instances?StudyInstanceUID=`
 * returns the whole collection even for a UID that exists nowhere. Filtering
 * client-side over a full QIDO read is the only way a filtered result is
 * guaranteed to be complete.
 */

import { NextRequest, NextResponse } from "next/server";
import {
  DICOMWEB_JSON_ACCEPT,
  DicomResource,
  ENRICH_CONCURRENCY,
  auditDicomRead,
  clientIpOf,
  clientUserAgentOf,
  enrichStudyFromFirstInstance,
  filterStudies,
  formatDicomTime,
  isDicomUid,
  mapWithConcurrency,
  queryStudies,
  readTag,
  readTagList,
  readTagNumber,
  sortStudiesByRecency,
} from "../_lib/orthanc";
import { pacsBadRequest, pacsUnreachable, requirePacsSession } from "../_lib/session";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Default and maximum number of studies returned in one response. */
const DEFAULT_LIMIT = 200;
const MAX_LIMIT = 1000;

/**
 * One study as the study-browser panel renders it.
 *
 * `null` means the PACS did not supply the attribute. It is never a default.
 */
export interface PacsStudySummary {
  patientName: string | null;
  patientId: string | null;
  sex: string | null;
  birthDate: string | null;
  studyDate: string | null;
  studyTime: string | null;
  /** HH:MM:SS rendering of `studyTime`; null when the study is undated. */
  studyTimeFormatted: string | null;
  studyInstanceUID: string;
  /** From NumberOfStudyRelatedSeries (0020,1206). Null when the index is empty. */
  reportedSeriesCount: number | null;
  /** From NumberOfStudyRelatedInstances (0020,1208). Null when the index is empty. */
  reportedInstanceCount: number | null;
  /** ModalitiesInStudy (0008,0061), split on the DICOM multi-value delimiter. */
  modalities: string[];
  studyDescription: string | null;
  institutionName: string | null;
  referringPhysician: string | null;
  accessionNumber: string | null;
  /** Accession number read at instance level; null when unavailable. */
  accessionNumberFromInstance: string | null;
  /**
   * Where the instance-level enrichment came from, for honest diagnostics.
   *
   * `NOT_REQUESTED` is distinct from `UNAVAILABLE` on purpose: on the default
   * (non-enriched) path the PACS was never asked, which is a different fact
   * from "we asked and the PACS had nothing". Both leave the affected fields
   * null so the UI renders "Not on file" either way.
   */
  detailSource: "INSTANCE_METADATA" | "UNAVAILABLE" | "NOT_REQUESTED";
}

/** The study list response envelope. */
export interface PacsStudyListResponse {
  studies: PacsStudySummary[];
  /** Studies matching the filters before `limit` was applied. */
  matchedCount: number;
  /** Studies present in the PACS before filtering. */
  totalCount: number;
  limit: number;
  filters: {
    patientId: string | null;
    modality: string | null;
    dateFrom: string | null;
    dateTo: string | null;
  };
  message: string;
}

/**
 * Resolves whether `?enrich=1` was passed.
 *
 * Enrichment is OPT-IN. It costs one metadata read per study (two or three
 * round trips to Orthanc each: series, then instances, then the instance
 * metadata document), so running it over a full worklist is what made this
 * route take minutes against a populated PACS: 160 studies at
 * ENRICH_CONCURRENCY is dozens of sequential rounds of HTTP, and the cost
 * grows linearly with the archive rather than staying flat.
 *
 * The study-level QIDO document already carries everything the study list
 * actually draws - patient identity, StudyDate, StudyTime, ModalitiesInStudy
 * and the NumberOfStudyRelated* counts. Measured over the 160 studies in the
 * departmental PACS: PatientName, StudyDate, StudyTime, ModalitiesInStudy,
 * NumberOfStudyRelatedSeries and NumberOfStudyRelatedInstances are all present
 * on 160/160; AccessionNumber on 41/160; ReferringPhysicianName on 21/160.
 *
 * Only StudyDescription (0008,1030) and InstitutionName (0008,0080) are absent
 * from the study level on 0/160, and neither is needed to draw a study row.
 * So the default path reads only what QIDO already gave us: no per-study HTTP,
 * and the two unmeasured fields come back null so the panel renders its
 * existing "Not on file" state rather than a fabrication.
 *
 * A caller that genuinely needs those two fields asks for them explicitly with
 * `?enrich=1` and pays for them knowingly.
 */
function wantsEnrichment(request: NextRequest): boolean {
  return request.nextUrl.searchParams.get("enrich") === "1";
}

/** Parses `?limit=`, rejecting values that are not a positive integer. */
function parseLimit(raw: string | null): number | null {
  if (raw === null) return DEFAULT_LIMIT;
  if (!/^\d+$/.test(raw)) return null;
  const parsed = Number(raw);
  if (parsed < 1) return null;
  return Math.min(parsed, MAX_LIMIT);
}

/** Validates an optional `YYYYMMDD` date filter. */
function parseDateFilter(raw: string | null): string | null | undefined {
  if (raw === null || raw === "") return null;
  if (!/^\d{8}$/.test(raw)) return undefined;
  return raw;
}

/**
 * Orthanc serialises ModalitiesInStudy as either a real JSON array or a single
 * backslash-delimited string depending on the value count, so both are split
 * here rather than assuming one shape.
 */
function readModalities(resource: DicomResource): string[] {
  const values = readTagList(resource, "00080061");
  const flattened = values
    .flatMap((value) => value.split("\\"))
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
  return Array.from(new Set(flattened));
}

export async function GET(request: NextRequest) {
  const gate = await requirePacsSession();
  if (!gate.ok) return gate.response;

  const params = request.nextUrl.searchParams;

  const limit = parseLimit(params.get("limit"));
  if (limit === null) {
    return pacsBadRequest(`limit must be a whole number between 1 and ${MAX_LIMIT}.`);
  }

  const dateFrom = parseDateFilter(params.get("dateFrom"));
  if (dateFrom === undefined) return pacsBadRequest("dateFrom must be an 8-digit YYYYMMDD date.");
  const dateTo = parseDateFilter(params.get("dateTo"));
  if (dateTo === undefined) return pacsBadRequest("dateTo must be an 8-digit YYYYMMDD date.");
  if (dateFrom && dateTo && dateFrom > dateTo) {
    return pacsBadRequest("dateFrom must not be later than dateTo.");
  }

  const allStudies = await queryStudies({ accept: DICOMWEB_JSON_ACCEPT });
  if (!allStudies) {
    return pacsUnreachable("the DICOMweb study query did not return.");
  }

  const filters = {
    patientId: params.get("patientId"),
    modality: params.get("modality"),
    dateFrom,
    dateTo,
  };

  const matched = filterStudies(allStudies, filters);
  const ordered = sortStudiesByRecency(matched);
  const page = ordered.slice(0, limit);
  const enrich = wantsEnrichment(request);

  // Studies whose UID Orthanc returned in a form this app will not put in a
  // URL are dropped rather than echoed, so every returned record is fetchable.
  const addressable = page.filter((study) => isDicomUid(readTag(study, "0020000D")));

  const enriched = await mapWithConcurrency(
    addressable,
    ENRICH_CONCURRENCY,
    async (study): Promise<PacsStudySummary> => {
      const studyInstanceUID = readTag(study, "0020000D") as string;
      const detail = enrich
        ? await enrichStudyFromFirstInstance(studyInstanceUID)
        : {
            studyDescription: null,
            institutionName: null,
            accessionNumber: null,
            referringPhysician: null,
            // The PACS was not asked on this path. Saying "UNAVAILABLE" would
            // claim a read that never happened.
            source: "NOT_REQUESTED" as const,
          };

      const studyTime = readTag(study, "00080030");

      return {
        patientName: readTag(study, "00100010"),
        patientId: readTag(study, "00100020"),
        sex: readTag(study, "00100040"),
        birthDate: readTag(study, "00100030"),
        studyDate: readTag(study, "00080020"),
        studyTime,
        studyTimeFormatted: formatDicomTime(studyTime),
        studyInstanceUID,
        reportedSeriesCount: readTagNumber(study, "00201206"),
        reportedInstanceCount: readTagNumber(study, "00201208"),
        modalities: readModalities(study),
        studyDescription: detail.studyDescription,
        institutionName: detail.institutionName,
        referringPhysician: readTag(study, "00080090"),
        accessionNumber: readTag(study, "00080050") ?? detail.accessionNumber,
        accessionNumberFromInstance: detail.accessionNumber,
        detailSource: detail.source,
      };
    },
  );

  await auditDicomRead({
    actorStaffId: gate.session.actorStaffId,
    entityType: "DicomQidoSearch",
    entityId: `STUDY_LIST[${enriched.length}]`,
    ipAddress: clientIpOf(request),
    userAgent: clientUserAgentOf(request),
    details: {
      totalCount: allStudies.length,
      matchedCount: matched.length,
      returnedCount: enriched.length,
      limit,
      filters,
      enriched: enrich,
    },
  });

  const body: PacsStudyListResponse = {
    studies: enriched,
    matchedCount: matched.length,
    totalCount: allStudies.length,
    limit,
    filters: {
      patientId: filters.patientId,
      modality: filters.modality,
      dateFrom,
      dateTo,
    },
    message:
      enriched.length === 0
        ? allStudies.length === 0
          ? "The PACS holds no studies."
          : "No study matches these filters."
        : `${enriched.length} of ${allStudies.length} studies returned${
            enrich
              ? ""
              : ", without study description or institution detail, which the PACS only reports at instance level (request ?enrich=1 to include them)"
          }.`,
  };

  return NextResponse.json(body, { status: 200 });
}
