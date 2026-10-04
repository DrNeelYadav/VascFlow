/**
 * GET /api/imaging/pacs/frame -- streams one DICOM instance to the viewport.
 *
 * The browser fetches this rather than the Orthanc URL directly so that the
 * PACS address never leaves the server and the read is auditable. The response
 * is the original DICOM file, byte-identical to what the scanner wrote, which
 * is what Cornerstone's dicom-image-loader needs to decode a frame.
 *
 * Query: instanceId=<orthanc instance uuid>
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { auditViewerRead, getOrthancBaseUrl } from "@/app/lib/imaging/pacsClient";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const INSTANCE_ID_PATTERN = /^[0-9a-fA-F-]{8,64}$/;

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const instanceId = request.nextUrl.searchParams.get("instanceId") ?? "";
  if (!INSTANCE_ID_PATTERN.test(instanceId)) {
    return NextResponse.json(
      { error: "Bad Request", message: "A valid instanceId is required." },
      { status: 400 },
    );
  }

  const upstream = `${getOrthancBaseUrl()}/instances/${instanceId}/file`;

  try {
    const upstreamRes = await fetch(upstream, {
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });

    if (!upstreamRes.ok) {
      return NextResponse.json(
        {
          error: "Upstream PACS Error",
          message: `The departmental PACS returned HTTP ${upstreamRes.status} for that instance.`,
        },
        { status: upstreamRes.status === 404 ? 404 : 502 },
      );
    }

    const buffer = await upstreamRes.arrayBuffer();

    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "127.0.0.1";
    const userAgent = request.headers.get("user-agent") ?? undefined;
    await auditViewerRead({
      actorEmail: session.user.email || session.user.id || "unknown",
      action: "READ",
      entityId: `INSTANCE[${instanceId}]`,
      ipAddress,
      userAgent,
    });

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/dicom",
        "Cache-Control": "private, max-age=300",
        "X-PACS-Source": "DEPARTMENTAL_ORTHANC",
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Bad Gateway",
        message:
          err instanceof Error
            ? `Could not reach the departmental PACS: ${err.message}`
            : "Could not reach the departmental PACS.",
      },
      { status: 502 },
    );
  }
}