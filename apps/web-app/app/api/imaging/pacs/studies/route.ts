/**
 * GET /api/imaging/pacs/studies -- the study list for the viewer's left panel.
 */

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { auditViewerRead, listStudies } from "@/app/lib/imaging/pacsClient";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function listStudiesFor(request: Request): Promise<NextResponse> {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized", message: "Sign in to reach the departmental PACS." },
      { status: 401 },
    );
  }

  const studies = await listStudies(200);
  const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "127.0.0.1";
  const userAgent = request.headers.get("user-agent") ?? undefined;

  // Audited once per study-list read rather than once per study: a list read is
  // the disclosure, and per-study entries would be noise at departmental scale.
  await auditViewerRead({
    actorEmail: session.user.email || session.user.id || "unknown",
    action: "READ",
    entityId: `STUDY_LIST[${studies.length}]`,
    ipAddress,
    userAgent,
  });

  return NextResponse.json({ studies });
}

export async function GET(request: Request) {
  return listStudiesFor(request);
}

export async function POST(request: Request) {
  return listStudiesFor(request);
}