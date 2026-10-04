/**
 * API surface over the departmental Orthanc PACS.
 *
 * Routes:
 *   GET /api/imaging/pacs/status                 PACS reachability + counts
 *   GET /api/imaging/pacs/studies                study list for the left panel
 *   GET /api/imaging/pacs/studies/[studyId]      series ("procedures") + one instance each
 *
 * The viewer never talks to Orthanc directly from the browser. Keeping every
 * request on the server means the PACS URL, the audit trail and the allowlist
 * stay in one place, and the browser is not exposed to a loopback address.
 */

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  getOrthancBaseUrl,
  isPacsReachable,
  listStudies,
} from "@/app/lib/imaging/pacsClient";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Refuses the request when there is no authenticated session.
 *
 * This route exposes real patient data, so an unauthenticated caller gets a
 * 401 rather than an empty study list that could be mistaken for "no studies".
 */
async function requireSession(): Promise<
  { ok: true; email: string } | { ok: false; response: NextResponse }
> {
  const session = await auth();
  if (!session?.user) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Unauthorized", message: "Sign in to reach the departmental PACS." },
        { status: 401 },
      ),
    };
  }
  return { ok: true, email: session.user.email || session.user.id || "unknown" };
}

/** GET /api/imaging/pacs/status */
export async function GET() {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;

  const reachable = await isPacsReachable();
  if (!reachable) {
    return NextResponse.json(
      {
        reachable: false,
        baseUrl: getOrthancBaseUrl(),
        studyCount: 0,
        message:
          "The departmental PACS is not answering. Start Orthanc on this workstation " +
          "(tools/departmental-pacs) and reload.",
      },
      { status: 200 },
    );
  }

  const studies = await listStudies(200);
  return NextResponse.json({
    reachable: true,
    baseUrl: getOrthancBaseUrl(),
    studyCount: studies.length,
    patientCount: new Set(studies.map((s) => s.patientId || s.patientName)).size,
  });
}
