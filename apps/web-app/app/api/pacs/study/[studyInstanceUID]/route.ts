/**
 * GET /api/pacs/study/[studyInstanceUID] -- one study plus its series tree.
 *
 * This is what the left panel's series tree renders: the study header, then
 * every series with the modality, description, number and the instance count
 * the viewer needs to decide whether a series is worth opening.
 *
 * `instancesUrl` is the Orthanc-relative path the viewer needs in order to
 * reach the instances of a series. It is deliberately relative, not an
 * absolute upstream URL: the browser must not learn the PACS address, and the
 * actual pixel bytes are fetched through `/api/pacs/proxy`, which audits the
 * read.
 *
 * Series and instance counts are counted from the QIDO result sets rather than
 * read from NumberOfStudyRelatedInstances (0020,1208), because the empty tag
 * index can leave those counts stale or absent. The values Orthanc reported are
 * still passed through as `reportedInstanceCount` so the caller can see both.
 */

import { NextRequest, NextResponse } from "next/server";
import {
  DICOMWEB_JSON_ACCEPT,
  DicomResource,
  auditDicomRead,
  clientIpOf,
  clientUserAgentOf,
  enrichStudyFromFirstInstance,
  formatDicomTime,
  isDicomUid,
  querySeries,
  querySeriesInstances,
  queryStudies,
  readTag,
  readTagList,
  readTagNumber,
} from "../../_lib/orthanc";
import { pacsBadRequest, pacsUnreachable, requirePacsSession } from "../../_lib/session";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** One series as the left-panel series tree renders it. */
export interface PacsSeriesSummary {
  seriesInstanceUID: string;
  modality: string | null;
  seriesDescription: string | null;
  seriesNumber: number | null;
  /** Instances counted from the QIDO instance result set. */
  instanceCount: number;
  /** From NumberOfSeriesRelatedInstances (0020,1209); null when the index is empty. */
  reportedInstanceCount: number | null;
  seriesDate: string | null;
  seriesTime: string | null;
  performedProcedureStepStartDate: string | null;
  performedProcedureStepStartTime: string | null;
  bodyPartExamined: string | null;
  patientPosition: string | null;
  manufacturer: string | null;
  protocolName: string | null;
  /**
   * Orthanc-relative path to this series' instances. Call it through
   * `/api/pacs/proxy` rather than against the PACS directly.
   */
  instancesUrl: string;
}

/** The study header, plus the fields only instance metadata carries. */
export interface PacsStudyDetail {
  patientName: string | null;
  patientId: string | null;
  sex: string | null;
  birthDate: string | null;
  studyDate: string | null;
  studyTime: string | null;
  studyTimeFormatted: string | null;
  studyInstanceUID: string;
  studyId: string | null;
  modalities: string[];
  studyDescription: string | null;
  institutionName: string | null;
  referringPhysician: string | null;
  accessionNumber: string | null;
  accessionNumberFromInstance: string | null;
  manufacturer: string | null;
  manufacturerModelName: string | null;
  protocolName: string | null;
  bodyPartExamined: string | null;
  seriesCount: number;
  instanceCount: number;
  detailSource: "INSTANCE_METADATA" | "UNAVAILABLE";
}

/** The full response envelope. */
export interface PacsStudyDetailResponse {
  study: PacsStudyDetail;
  series: PacsSeriesSummary[];
  message: string;
}

/**
 * Splits ModalitiesInStudy, which Orthanc may serialise as a JSON array or as
 * a single backslash-delimited string.
 */
function readModalities(resource: DicomResource): string[] {
  const flattened = readTagList(resource, "00080061")
    .flatMap((value) => value.split("\\"))
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
  return Array.from(new Set(flattened));
}

/** Reads a DA value as-is; null when the attribute is absent or blank. */
function readDate(resource: DicomResource, tag: string): string | null {
  return readTag(resource, tag);
}

interface RouteContext {
  params: Promise<{ studyInstanceUID: string }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  const gate = await requirePacsSession();
  if (!gate.ok) return gate.response;

  const { studyInstanceUID } = await context.params;
  const decoded = decodeURIComponent(studyInstanceUID ?? "");

  if (!isDicomUid(decoded)) {
    return pacsBadRequest(
      "studyInstanceUID must be a DICOM UID: digits separated by dots, at most 64 characters.",
    );
  }

  // Locate the study in the QIDO result set so the header comes from the same
  // document the study list was built from, rather than a second source that
  // could disagree with it.
  const allStudies = await queryStudies({ accept: DICOMWEB_JSON_ACCEPT });
  if (!allStudies) {
    return pacsUnreachable("the DICOMweb study query did not return.");
  }

  const studyResource =
    allStudies.find((candidate) => readTag(candidate, "0020000D") === decoded) ?? null;

  if (!studyResource) {
    return NextResponse.json(
      {
        error: "Not Found",
        message: `No study with instance UID ${decoded} exists in the departmental PACS.`,
      },
      { status: 404 },
    );
  }

  const seriesResources = await querySeries(decoded, { accept: DICOMWEB_JSON_ACCEPT });
  if (!seriesResources) {
    return pacsUnreachable(`the series query for study ${decoded} did not return.`);
  }

  // Only series with a usable UID can be addressed by the viewer, so an
  // unaddressable series is reported in the counts rather than silently listed
  // as a row that cannot be opened.
  const series: PacsSeriesSummary[] = [];
  let totalInstances = 0;

  for (const seriesResource of seriesResources) {
    const seriesInstanceUID = readTag(seriesResource, "0020000E");
    if (!isDicomUid(seriesInstanceUID)) continue;

    const instanceResources = await querySeriesInstances(decoded, seriesInstanceUID, {
      accept: DICOMWEB_JSON_ACCEPT,
    });
    const instanceCount = Array.isArray(instanceResources) ? instanceResources.length : 0;
    totalInstances += instanceCount;

    const seriesTime = readTag(seriesResource, "00080031");

    series.push({
      seriesInstanceUID,
      modality: readTag(seriesResource, "00080060"),
      seriesDescription: readTag(seriesResource, "0008103E"),
      seriesNumber: readTagNumber(seriesResource, "00200011"),
      instanceCount,
      reportedInstanceCount: readTagNumber(seriesResource, "00201209"),
      seriesDate: readDate(seriesResource, "00080021"),
      seriesTime,
      performedProcedureStepStartDate: readDate(seriesResource, "00400244"),
      performedProcedureStepStartTime: readDate(seriesResource, "00400245"),
      bodyPartExamined: readTag(seriesResource, "00180015"),
      patientPosition: readTag(seriesResource, "00180050"),
      manufacturer: readTag(seriesResource, "00080070"),
      protocolName: readTag(seriesResource, "00181030"),
      instancesUrl: `/dicom-web/studies/${decoded}/series/${seriesInstanceUID}/instances`,
    });
  }

  series.sort((left, right) => {
    const leftNumber = left.seriesNumber;
    const rightNumber = right.seriesNumber;
    if (leftNumber !== null && rightNumber !== null && leftNumber !== rightNumber) {
      return leftNumber - rightNumber;
    }
    if (leftNumber !== null && rightNumber === null) return -1;
    if (leftNumber === null && rightNumber !== null) return 1;
    return left.seriesInstanceUID.localeCompare(right.seriesInstanceUID);
  });

  const detail = await enrichStudyFromFirstInstance(decoded);
  const studyTime = readTag(studyResource, "00080030");

  const study: PacsStudyDetail = {
    patientName: readTag(studyResource, "00100010"),
    patientId: readTag(studyResource, "00100020"),
    sex: readTag(studyResource, "00100040"),
    birthDate: readTag(studyResource, "00100030"),
    studyDate: readTag(studyResource, "00080020"),
    studyTime,
    studyTimeFormatted: formatDicomTime(studyTime),
    studyInstanceUID: decoded,
    studyId: readTag(studyResource, "00200010"),
    modalities: readModalities(studyResource),
    studyDescription: detail.studyDescription,
    institutionName: detail.institutionName,
    referringPhysician: readTag(studyResource, "00080090") ?? detail.referringPhysician,
    accessionNumber: readTag(studyResource, "00080050") ?? detail.accessionNumber,
    accessionNumberFromInstance: detail.accessionNumber,
    manufacturer: detail.manufacturer,
    manufacturerModelName: detail.manufacturerModelName,
    protocolName: detail.protocolName,
    bodyPartExamined: detail.bodyPartExamined,
    seriesCount: series.length,
    instanceCount: totalInstances,
    detailSource: detail.source,
  };

  await auditDicomRead({
    actorStaffId: gate.session.actorStaffId,
    entityType: "DicomStudy",
    entityId: decoded,
    ipAddress: clientIpOf(request),
    userAgent: clientUserAgentOf(request),
    details: {
      seriesCount: series.length,
      instanceCount: totalInstances,
      patientId: study.patientId,
    },
  });

  const body: PacsStudyDetailResponse = {
    study,
    series,
    message:
      series.length === 0
        ? "This study reports no series with a usable series instance UID."
        : `${series.length} ${series.length === 1 ? "series" : "series"}, ${totalInstances} ${
            totalInstances === 1 ? "instance" : "instances"
          }.`,
  };

  return NextResponse.json(body, { status: 200 });
}
