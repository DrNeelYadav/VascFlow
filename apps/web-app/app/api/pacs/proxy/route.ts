/**
 * GET /api/pacs/proxy -- authenticated streaming proxy for WADO-RS pixel data.
 *
 * Why this exists
 * ---------------
 * Cornerstone's `wadors:` loader has to fetch instance bytes from somewhere.
 * Pointing it at http://127.0.0.1:8042 would put the PACS address in the page,
 * require CORS on the Orthanc side, and leave the read unaudited. This route
 * terminates the request on the Next.js origin instead, so the browser only
 * ever talks to its own application.
 *
 * Upstream route shape
 * --------------------
 * This Orthanc build serves pixel data ONLY on the fully-qualified DICOMweb
 * route:
 *
 *   /dicom-web/studies/{studyUID}/series/{seriesUID}/instances/{sopUID}
 *
 * The flat `/dicom-web/instances/{uid}` route and WADO-URI
 * `/wado/instances/{uuid}` both return 404 here, so the three UIDs are required
 * and are combined by this route rather than by the caller.
 *
 * Byte fidelity
 * -------------
 * The upstream body is streamed straight through. It is never read into a
 * buffer, so a multiframe series does not have to fit in memory on the server,
 * and the bytes the viewport decodes are exactly the bytes the scanner wrote.
 * Content-Type is forwarded verbatim, which means the `multipart/related`
 * boundary Orthanc generated is preserved: Cornerstone's loader parses that
 * boundary natively, so stripping it here would break decoding.
 *
 * Not an open relay
 * -----------------
 * The upstream host comes only from the environment (see
 * `getOrthancBaseUrl()`), never from a request parameter or header. The only
 * caller-controlled input that reaches the URL is three DICOM UIDs, each
 * checked against a digits-and-dots pattern, so a caller cannot traverse out of
 * the DICOMweb route or redirect the request to another host. The permitted
 * upstream paths are a fixed set: one instance retrieve and one frame retrieve.
 *
 * Query parameters
 *   studyUID  (required) study instance UID
 *   seriesUID (required) series instance UID
 *   sopUID    (required) SOP instance UID
 *   frame     (optional) 1-based frame number; requests .../frames/{frame}
 *                      instead of the whole instance
 */

import { NextRequest, NextResponse } from "next/server";
import {
  ORTHANC_PIXEL_TIMEOUT_MS,
  auditDicomReadAsync,
  clientIpOf,
  clientUserAgentOf,
  getDicomWebBaseUrl,
  isDicomUid,
  normalizeFrameAccept,
  normalizeWadoAccept,
} from "../_lib/orthanc";
import { pacsBadRequest, requirePacsSession } from "../_lib/session";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Marks a response as having been served by this proxy, for client-side logs. */
const PROXY_SOURCE_HEADER = "X-PACS-Source";
const PROXY_SOURCE_VALUE = "DEPARTMENTAL_ORTHANC_PROXY";

/** Marks which upstream route was used, so a caller can tell whole from frame. */
const PROXY_KIND_HEADER = "X-PACS-Proxy-Kind";

/** Parses a 1-based frame number. Rejects zero, negatives and non-integers. */
function parseFrame(raw: string | null): number | null | undefined {
  if (raw === null) return null;
  if (!/^\d+$/.test(raw)) return undefined;
  const frame = Number(raw);
  if (frame < 1) return undefined;
  return frame;
}

export async function GET(request: NextRequest) {
  const gate = await requirePacsSession();
  if (!gate.ok) return gate.response;

  const params = request.nextUrl.searchParams;

  const studyUID = params.get("studyUID") ?? params.get("StudyInstanceUID");
  const seriesUID = params.get("seriesUID") ?? params.get("SeriesInstanceUID");
  const sopUID = params.get("sopUID") ?? params.get("SOPInstanceUID");

  const missing: string[] = [];
  if (!studyUID) missing.push("studyUID");
  if (!seriesUID) missing.push("seriesUID");
  if (!sopUID) missing.push("sopUID");
  if (missing.length > 0) {
    return pacsBadRequest(
      `Missing required query parameter${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}. ` +
        "This Orthanc build only serves pixel data on the fully-qualified " +
        "/dicom-web/studies/{studyUID}/series/{seriesUID}/instances/{sopUID} route.",
    );
  }

  if (!isDicomUid(studyUID) || !isDicomUid(seriesUID) || !isDicomUid(sopUID)) {
    return pacsBadRequest(
      "studyUID, seriesUID and sopUID must each be a DICOM UID: digits separated by dots, " +
        "at most 64 characters.",
    );
  }

  const frame = parseFrame(params.get("frame"));
  if (frame === undefined) {
    return pacsBadRequest("frame must be a positive whole number (frames are 1-based).");
  }

  // The two upstream routes this proxy is allowed to reach. The base host is
  // fixed by configuration; only these two path shapes are reachable.
  const instancePath =
    `/studies/${encodeURIComponent(studyUID)}` +
    `/series/${encodeURIComponent(seriesUID)}` +
    `/instances/${encodeURIComponent(sopUID)}`;

  const upstreamPath = frame === null ? instancePath : `${instancePath}/frames/${frame}`;
  const targetUrl = `${getDicomWebBaseUrl()}${upstreamPath}`;
  const proxyKind = frame === null ? "INSTANCE" : "FRAME";

  // Orthanc answers 400 to a bare `Accept: application/dicom`; it only serves
  // the multipart wrapper. Repair the header rather than surfacing a 400.
  const accept = request.headers.get("accept");
  const upstreamAccept =
    frame === null ? normalizeWadoAccept(accept) : normalizeFrameAccept(accept);

  const timeout = AbortSignal.timeout(ORTHANC_PIXEL_TIMEOUT_MS);
  const clientSignal = request.signal;
  const signal = clientSignal ? AbortSignal.any([timeout, clientSignal]) : timeout;

  let upstream: Response;
  try {
    upstream = await fetch(targetUrl, {
      method: "GET",
      headers: { Accept: upstreamAccept },
      signal,
      cache: "no-store",
      // Redirects are refused so the proxy cannot be bounced off the fixed
      // upstream host onto a third party.
      redirect: "error",
    });
  } catch (error) {
    const aborted =
      (error instanceof Error && error.name === "AbortError") ||
      (error instanceof Error && error.name === "TimeoutError");
    const detail = error instanceof Error ? error.message : "unknown transport failure";
    console.error(`[PACS] Upstream pixel fetch failed (${proxyKind}):`, detail);

    return NextResponse.json(
      {
        error: aborted ? "Gateway Timeout" : "Bad Gateway",
        message: aborted
          ? "The departmental PACS did not finish sending the instance within the transfer timeout."
          : `The departmental PACS could not be reached: ${detail}`,
      },
      { status: aborted ? 504 : 502 },
    );
  }

  if (!upstream.ok) {
    const upstreamStatus = upstream.status;
    const upstreamStatusText = upstream.statusText;
    // The upstream error body is small and diagnostic; it is safe to read and
    // include so the viewer can distinguish "no such instance" from a real fault.
    const upstreamBody = await upstream.text().catch(() => "");

    auditDicomReadAsync({
      actorStaffId: gate.session.actorStaffId,
      entityType: "DicomInstance",
      entityId: `${sopUID}#${frame ?? "all"}`,
      ipAddress: clientIpOf(request),
      userAgent: clientUserAgentOf(request),
      details: { outcome: "UPSTREAM_ERROR", upstreamStatus, proxyKind },
    });

    return NextResponse.json(
      {
        error: upstreamStatus === 404 ? "Not Found" : "Upstream PACS Error",
        message:
          upstreamStatus === 404
            ? `The departmental PACS has no ${proxyKind.toLowerCase()} for SOP instance UID ${sopUID}` +
              (frame === null ? "." : ` at frame ${frame}.`)
            : `The departmental PACS returned HTTP ${upstreamStatus} ${upstreamStatusText}.`,
        upstreamStatus,
        upstreamDetail: upstreamBody.slice(0, 500),
      },
      { status: upstreamStatus === 404 ? 404 : 502 },
    );
  }

  const headers = new Headers();

  // Forward Content-Type verbatim. The multipart boundary Orthanc generated is
  // part of that value and is required for the body to be parseable.
  const contentType = upstream.headers.get("content-type");
  if (contentType) headers.set("Content-Type", contentType);

  // Forward Content-Length when present so the client can size the download.
  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers.set("Content-Length", contentLength);

  const upstreamCacheControl = upstream.headers.get("cache-control");
  headers.set("Cache-Control", upstreamCacheControl || "private, max-age=300");
  headers.set(PROXY_SOURCE_HEADER, PROXY_SOURCE_VALUE);
  headers.set(PROXY_KIND_HEADER, proxyKind);
  headers.set("X-Content-Type-Options", "nosniff");

  auditDicomReadAsync({
    actorStaffId: gate.session.actorStaffId,
    entityType: "DicomInstance",
    entityId: `${sopUID}#${frame ?? "all"}`,
    ipAddress: clientIpOf(request),
    userAgent: clientUserAgentOf(request),
    details: {
      outcome: "STREAMED",
      proxyKind,
      contentType: contentType ?? null,
      bytes: contentLength ? Number(contentLength) : null,
    },
  });

  // Stream the body without buffering it. `upstream.body` is the untouched
  // byte stream, so a large multiframe instance is relayed chunk by chunk and
  // never held in memory on the server.
  return new NextResponse(upstream.body, { status: 200, headers });
}
