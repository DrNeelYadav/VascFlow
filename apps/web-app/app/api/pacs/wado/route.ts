import { NextRequest, NextResponse } from "next/server";
import { logAuditTrail } from "@vascule/db";
import { auth } from "@/auth";

/**
 * GET /api/pacs/wado
 * WADO-RS / QIDO-RS Proxy Endpoint for DICOM studies, instances, and metadata.
 * 
 * Proxies strictly to upstream hospital DICOMweb / PACS endpoint (e.g. Orthanc).
 * If no upstream PACS is configured, truthfully reports service unavailability.
 */
export async function GET(request: NextRequest) {
  const upstreamPacsUrl =
    process.env.ORTHANC_URL ||
    process.env.DICOMWEB_URL ||
    process.env.PACS_DICOMWEB_URL ||
    process.env.PACS_WADO_BASE_URL;

  if (!upstreamPacsUrl) {
    return NextResponse.json(
      {
        error: "Service Unavailable",
        message: "Upstream PACS DICOMweb endpoint is not configured.",
      },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const studyUid =
    searchParams.get("studyUID") ||
    searchParams.get("studyInstanceUid") ||
    searchParams.get("StudyInstanceUID");
  const seriesUid =
    searchParams.get("seriesUID") ||
    searchParams.get("seriesInstanceUid") ||
    searchParams.get("SeriesInstanceUID");
  const objectUid =
    searchParams.get("objectUID") ||
    searchParams.get("sopInstanceUid") ||
    searchParams.get("SOPInstanceUID");
  const patientId =
    searchParams.get("crNo") ||
    searchParams.get("patientId") ||
    searchParams.get("PatientID");
  const requestType = searchParams.get("requestType") || "wado";

  const normalizedBase = upstreamPacsUrl.replace(/\/+$/, "");
  const dicomWebBase = normalizedBase.endsWith("/dicom-web")
    ? normalizedBase
    : `${normalizedBase}/dicom-web`;

  let targetUrl: string;

  if (requestType === "qido" || (!studyUid && patientId)) {
    const query = patientId ? `?PatientID=${encodeURIComponent(patientId)}` : "";
    targetUrl = `${dicomWebBase}/studies${query}`;
  } else if (studyUid) {
    if (requestType === "metadata" || searchParams.get("format") === "json") {
      targetUrl = `${dicomWebBase}/studies/${studyUid}/metadata`;
    } else if (seriesUid && objectUid) {
      targetUrl = `${dicomWebBase}/studies/${studyUid}/series/${seriesUid}/instances/${objectUid}`;
    } else if (seriesUid) {
      targetUrl = `${dicomWebBase}/studies/${studyUid}/series/${seriesUid}`;
    } else {
      targetUrl = `${dicomWebBase}/studies/${studyUid}`;
    }
  } else {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Missing studyUID or PatientID query parameter.",
      },
      { status: 400 }
    );
  }

  try {
    const session = await auth();
    const actorStaff = session?.user?.email || session?.user?.id || "pacs-client-workstation";

    await logAuditTrail({
      actorStaffId: actorStaff,
      action: "READ",
      entityType: requestType === "qido" ? "DicomQidoSearch" : "DicomStudy",
      entityId: studyUid || patientId || "DICOMWEB_PROXY",
      ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1",
      userAgent: request.headers.get("user-agent") || "EndoFlow-RIS-Viewer",
      details: { queryPatientId: patientId, studyUid, requestType, targetUrl },
    });
  } catch {
    // Non-blocking audit trail fallback
  }

  try {
    const pacsResponse = await fetch(targetUrl, {
      headers: {
        Accept: request.headers.get("accept") || (requestType === "qido" ? "application/json" : "*/*"),
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!pacsResponse.ok) {
      return NextResponse.json(
        {
          error: "Upstream PACS Error",
          message: `Upstream PACS returned HTTP ${pacsResponse.status}: ${pacsResponse.statusText}`,
        },
        { status: pacsResponse.status }
      );
    }

    const bodyBuffer = await pacsResponse.arrayBuffer();
    const headers = new Headers();
    const contentType = pacsResponse.headers.get("content-type");
    if (contentType) headers.set("Content-Type", contentType);
    headers.set("Cache-Control", pacsResponse.headers.get("cache-control") || "private, max-age=3600");
    headers.set("X-PACS-Source", "UPSTREAM_HOSPITAL_PACS");

    return new NextResponse(bodyBuffer, {
      status: pacsResponse.status,
      headers,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: "Bad Gateway",
        message: err?.message || "Failed to reach upstream PACS endpoint",
      },
      { status: 502 }
    );
  }
}
