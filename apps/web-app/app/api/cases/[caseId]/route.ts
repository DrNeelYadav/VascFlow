import { NextRequest, NextResponse } from "next/server";
import { getAdminFirestore } from "@/app/lib/firebaseAdmin";
import {
  canViewIdentifiableClinicalData,
  getVerifiedStaff,
  redactClinicalRecord,
} from "@/app/lib/auth/clinicalAccess";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function privateJson(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "private, no-store" },
  });
}

/**
 * GET /api/cases/[caseId]
 * Retrieves a single clinical case by its ID from Google Cloud Firestore.
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ caseId: string }> }
) {
  try {
    const staff = await getVerifiedStaff();
    if (!staff) {
      return privateJson({ error: "Unauthorized: Active authenticated session required." }, 401);
    }

    const { caseId } = await context.params;
    const db = getAdminFirestore();
    const docSnap = await db.collection("cases").doc(caseId).get();

    if (!docSnap.exists) {
      return privateJson({ error: "Case not found." }, 404);
    }

    const doctor = canViewIdentifiableClinicalData(staff);
    const record = { id: docSnap.id, ...docSnap.data() };
    const result = doctor ? record : redactClinicalRecord(record);

    return privateJson(result);
  } catch (error: any) {
    console.error("[Firestore /api/cases/[caseId] GET] Live read failed:", error?.message);
    return privateJson({ error: "Live case data is unavailable." }, 503);
  }
}
