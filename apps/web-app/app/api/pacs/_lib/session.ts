/**
 * Session gate shared by the /api/pacs routes.
 *
 * Every route under /api/pacs returns real patient data, so an unauthenticated
 * caller must get a 401 rather than an empty result that a viewer could
 * mistake for "this PACS has no studies". The gate lives here so the status
 * bar, the study list, the series tree and the pixel proxy cannot drift apart
 * on who they admit.
 */

import { NextResponse } from "next/server";
import type { Session } from "next-auth";
import { auth } from "@/auth";

/** The identity recorded against every DICOM read in the audit trail. */
export interface PacsSession {
  /** Email when the session carries one, otherwise the Auth.js subject id. */
  actorStaffId: string;
}

/** Either an admitted session or the response to send instead. */
export type PacsSessionResult =
  | { ok: true; session: PacsSession }
  | { ok: false; response: NextResponse };

/**
 * Admits an authenticated clinical session, or returns a 401.
 *
 * The actor is the staff email where available. It falls back to the Auth.js
 * subject id rather than a shared placeholder, so an audit entry always names
 * the session that performed the DICOM read.
 */
export async function requirePacsSession(): Promise<PacsSessionResult> {
  let session: Session | null = null;

  try {
    session = await auth();
  } catch (error) {
    console.error("[PACS] Session lookup failed:", error);
    return {
      ok: false,
      response: NextResponse.json(
        {
          error: "Unauthorized",
          message: "The clinical session could not be verified. Sign in again to reach the PACS.",
        },
        { status: 401 },
      ),
    };
  }

  if (!session?.user) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Unauthorized", message: "Sign in to reach the departmental PACS." },
        { status: 401 },
      ),
    };
  }

  const actorStaffId = session.user.email || session.user.id;
  if (!actorStaffId) {
    return {
      ok: false,
      response: NextResponse.json(
        {
          error: "Unauthorized",
          message: "This session carries no staff identity, so the DICOM read cannot be attributed.",
        },
        { status: 401 },
      ),
    };
  }

  return { ok: true, session: { actorStaffId } };
}

/** The 502 returned when the PACS cannot be reached. */
export function pacsUnreachable(reason: string): NextResponse {
  return NextResponse.json(
    {
      error: "Bad Gateway",
      message: `The departmental PACS could not be reached: ${reason}`,
    },
    { status: 502 },
  );
}

/** The 400 returned for a malformed or missing DICOM identifier. */
export function pacsBadRequest(message: string): NextResponse {
  return NextResponse.json({ error: "Bad Request", message }, { status: 400 });
}
