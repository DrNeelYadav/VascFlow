/**
 * GET /api/pacs/status -- Orthanc health for the viewer's status bar.
 *
 * The status bar must show the real connection state, including when the PACS
 * is down, so this route never throws a 500 on an unreachable PACS. It probes
 * the Orthanc REST `/system` and `/plugins` routes and then the DICOMweb study
 * collection, each under its own short timeout, and reports what it found.
 *
 * The PACS address itself is deliberately not echoed in the response: the
 * browser is never meant to know where the PACS lives, and the viewer's status
 * bar renders the state, not the address.
 */

import { NextRequest, NextResponse } from "next/server";
import {
  DICOMWEB_JSON_ACCEPT,
  ORTHANC_STATUS_TIMEOUT_MS,
  auditDicomRead,
  clientIpOf,
  clientUserAgentOf,
  getSystemInfo,
  getPluginNames,
  hasDicomWebPlugin,
  isPacsConfigured,
  queryStudies,
} from "../_lib/orthanc";
import { requirePacsSession } from "../_lib/session";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** What the viewer status bar renders. Every field is measured, never assumed. */
export interface PacsStatusResponse {
  /** True only when Orthanc answered `/system` in time. */
  reachable: boolean;
  /** True when the `dicom-web` plugin is registered. Null when unmeasurable. */
  dicomWebAvailable: boolean | null;
  /** Installed Orthanc version, e.g. "1.13.0". Null when unmeasurable. */
  orthancVersion: string | null;
  /** The configured PACS name. Null when unmeasurable. */
  orthancName: string | null;
  /** Registered plugin identifiers, as reported by Orthanc. Null when unmeasurable. */
  plugins: string[] | null;
  /** Studies returned by the DICOMweb study query. Null when unmeasurable. */
  studyCount: number | null;
  /** Round-trip time of the reachability probe, in milliseconds. */
  probeLatencyMs: number;
  /** True when the PACS address came from configuration rather than the default. */
  pacsConfigured: boolean;
  /** Plain-English summary for the status bar. */
  message: string;
  /** ISO timestamp of the probe, so the viewer can show staleness. */
  checkedAt: string;
}

export async function GET(request: NextRequest) {
  const gate = await requirePacsSession();
  if (!gate.ok) return gate.response;

  const startedAt = Date.now();
  const checkedAt = new Date(startedAt).toISOString();
  const pacsConfigured = isPacsConfigured();

  const system = await getSystemInfo(ORTHANC_STATUS_TIMEOUT_MS);
  const probeLatencyMs = Date.now() - startedAt;

  // Orthanc is down. Report it as a state, not an error, so the status bar can
  // render "PACS offline" instead of the viewer showing a broken request.
  if (!system) {
    const body: PacsStatusResponse = {
      reachable: false,
      dicomWebAvailable: null,
      orthancVersion: null,
      orthancName: null,
      plugins: null,
      studyCount: null,
      probeLatencyMs,
      pacsConfigured,
      message:
        "The departmental PACS is not answering on its loopback address. " +
        "Start Orthanc from tools/departmental-pacs, then reload the viewer.",
      checkedAt,
    };
    return NextResponse.json(body, { status: 200 });
  }

  const plugins = await getPluginNames(ORTHANC_STATUS_TIMEOUT_MS);
  const dicomWebAvailable = plugins === null ? null : hasDicomWebPlugin(plugins);

  // Only query studies when the plugin is actually registered; otherwise the
  // count would be a misleading zero rather than a real "unavailable".
  let studyCount: number | null = null;
  if (dicomWebAvailable) {
    const studies = await queryStudies({
      accept: DICOMWEB_JSON_ACCEPT,
      timeoutMs: ORTHANC_STATUS_TIMEOUT_MS * 2,
    });
    studyCount = Array.isArray(studies) ? studies.length : null;
  }

  await auditDicomRead({
    actorStaffId: gate.session.actorStaffId,
    entityType: "DicomQidoSearch",
    entityId: "PACS_STATUS",
    ipAddress: clientIpOf(request),
    userAgent: clientUserAgentOf(request),
    details: {
      reachable: true,
      dicomWebAvailable,
      orthancVersion: system.version,
      studyCount,
      probeLatencyMs,
    },
  });

  let message: string;
  if (dicomWebAvailable === false) {
    message =
      "Orthanc is running but the dicom-web plugin is not registered, " +
      "so no DICOM studies can be read. Check the Plugins list in orthanc.json.";
  } else if (dicomWebAvailable === null) {
    message =
      `Orthanc ${system.version ?? "(version unknown)"} is running, but the plugin list ` +
      "could not be read, so DICOMweb availability is unconfirmed.";
  } else if (studyCount === null) {
    message =
      `Orthanc ${system.version ?? "(version unknown)"} is running with the dicom-web plugin, ` +
      "but the study query did not return, so the study count is unconfirmed.";
  } else {
    message =
      `Connected to Orthanc ${system.version ?? "(version unknown)"} with the dicom-web plugin. ` +
      `${studyCount} ${studyCount === 1 ? "study" : "studies"} available.`;
  }

  const body: PacsStatusResponse = {
    reachable: true,
    dicomWebAvailable,
    orthancVersion: system.version,
    orthancName: system.name,
    plugins,
    studyCount,
    probeLatencyMs,
    pacsConfigured,
    message,
    checkedAt,
  };

  return NextResponse.json(body, { status: 200 });
}
