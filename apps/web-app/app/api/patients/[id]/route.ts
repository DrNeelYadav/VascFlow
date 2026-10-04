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
 * GET /api/patients/[id]
 * Retrieves a single patient record by ID from Google Cloud Firestore.
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const staff = await getVerifiedStaff();
    if (!staff) {
      return privateJson({ error: "Unauthorized: Active authenticated session required." }, 401);
    }

    const { id } = await context.params;
    const db = getAdminFirestore();
    const docSnap = await db.collection("patients").doc(id).get();

    if (!docSnap.exists) {
      return privateJson({ error: "Patient not found." }, 404);
    }

    const doctor = canViewIdentifiableClinicalData(staff);
    const record = { id: docSnap.id, ...docSnap.data() };
    const result = doctor ? record : redactClinicalRecord(record);

    return privateJson(result);
  } catch (error: any) {
    console.error("[Firestore /api/patients/[id] GET] Live read failed:", error?.message);
    return privateJson({ error: "Live patient data is unavailable." }, 503);
  }
}
