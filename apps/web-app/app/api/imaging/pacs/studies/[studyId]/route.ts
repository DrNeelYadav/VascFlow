/**
 * GET /api/imaging/pacs/studies/[studyId] -- the procedures inside one scan.
 *
 * Returns every series in the study with its full instance stack, because the
 * viewer's second pane shows the whole stack and the viewport addresses slices
 * by instance id. Sending the stack up front costs one request per series and
 * saves a round trip per scroll step.
 */

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  auditViewerRead,
  listInstances,
  listSeries,
} from "@/app/lib/imaging/pacsClient";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface RouteContext {
  // Next 16 always hands a route handler a Promise for `params`; it is awaited
  // in the body below. Declaring the plain-object form as an alternative makes
  // the handler un-typecheckable against Next's generated ParamCheck.
  params: Promise<{ studyId: string }>;
}

export async function GET(request: Request, context: RouteContext) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized", message: "Sign in to reach the departmental PACS." },
      { status: 401 },
    );
  }

  const { studyId } = await context.params;
  if (!studyId || studyId.includes("/")) {
    return NextResponse.json(
      { error: "Bad Request", message: "A study id is required." },
      { status: 400 },
    );
  }

  const series = await listSeries(studyId);
  if (series.length === 0) {
    return NextResponse.json(
      { error: "Not Found", message: "No series in the departmental PACS for that study." },
      { status: 404 },
    );
  }

  const withInstances = await Promise.all(
    series.map(async (s) => ({
      ...s,
      instances: await listInstances(s.seriesId),
    })),
  );

  const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "127.0.0.1";
  const userAgent = request.headers.get("user-agent") ?? undefined;

  await auditViewerRead({
    actorEmail: session.user.email || session.user.id || "unknown",
    action: "READ",
    entityId: studyId,
    ipAddress,
    userAgent,
  });

  return NextResponse.json({ studyId, series: withInstances });
}