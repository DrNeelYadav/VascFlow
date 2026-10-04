import { NextRequest, NextResponse } from "next/server";
import { getAdminFirestore } from "@/app/lib/firebaseAdmin";
import {
  canViewIdentifiableClinicalData,
  getVerifiedStaff,
  redactClinicalRecord,
} from "@/app/lib/auth/clinicalAccess";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/patients
 * Retrieves patients from Google Cloud Firestore collection "patients".
 * Protects clinical data with RBAC: non-physicians receive redacted records.
 */
export async function GET(request: NextRequest) {
  try {
    const staff = await getVerifiedStaff();
    if (!staff) {
      return NextResponse.json(
        { error: "Unauthorized: Active authenticated session required." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const limitCount = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "50", 10) || 50)
    );

    const db = getAdminFirestore();
    const snapshot = await db.collection("patients").limit(limitCount).get();
    const doctor = canViewIdentifiableClinicalData(staff);
    const data = snapshot.docs.map((docSnap) => {
      const record = { id: docSnap.id, ...docSnap.data() };
      return doctor ? record : redactClinicalRecord(record);
    });

    return NextResponse.json(data, {
      headers: { "Cache-Control": "private, no-store" },
    });
  } catch (error: any) {
    console.error("[Firestore /api/patients GET] Live read failed:", error?.message);
    return NextResponse.json(
      { error: "Live patient data is unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }
}

/**
 * POST /api/patients
 * Adds or updates a patient record in Google Cloud Firestore.
 * Requires verified clinician / physician role permissions.
 */
export async function POST(req: Request) {
  try {
    const staff = await getVerifiedStaff();
    if (!staff) {
      return NextResponse.json(
        { error: "Unauthorized: Active authenticated session required." },
        { status: 401 }
      );
    }

    if (!canViewIdentifiableClinicalData(staff)) {
      return NextResponse.json(
        { error: "Physician access is required to create or update patient records." },
        { status: 403 }
      );
    }

    const body = await req.json();

    if (!body || typeof body !== "object" || Array.isArray(body) || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "Invalid payload: Request body must be a non-empty object" },
        { status: 400 }
      );
    }

    const nowIso = new Date().toISOString();
    const targetId = body.id || body.patientId || body.uhid || `pat_${Date.now()}`;
    const newRecord = {
      ...body,
      id: targetId,
      createdAt: body.createdAt || nowIso,
      updatedAt: nowIso,
    };

    const db = getAdminFirestore();
    await db.collection("patients").doc(String(targetId)).set(newRecord, { merge: true });

    return NextResponse.json(
      newRecord,
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[Firestore /api/patients POST] Live write failed:", error?.message);
    return NextResponse.json(
      { error: "Live patient data could not be saved." },
      { status: 503 }
    );
  }
}
