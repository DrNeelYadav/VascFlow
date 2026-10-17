import { NextRequest, NextResponse } from "next/server";
import {
  canViewIdentifiableClinicalData,
  getVerifiedStaff,
} from "@/app/lib/auth/clinicalAccess";
import { ClinicalDataGateway } from "@/app/lib/server/clinicalDataGateway";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/patients
 * Retrieves patients via ClinicalDataGateway (PostgreSQL -> Firestore -> In-Memory).
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
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "50", 10) || 50)
    );
    const cursor = searchParams.get("cursor") || undefined;

    const data = await ClinicalDataGateway.getPatients({ limit, cursor }, staff);

    return NextResponse.json(data, {
      headers: { "Cache-Control": "private, no-store" },
    });
  } catch (error: any) {
    console.error("[ClinicalDataGateway /api/patients GET] Read failed:", error?.message);
    return NextResponse.json(
      { error: "Patient records are currently unavailable." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

/**
 * POST /api/patients
 * Adds or updates a patient record via ClinicalDataGateway.
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

    const savedRecord = await ClinicalDataGateway.savePatient(body, staff);

    return NextResponse.json(savedRecord, { status: 201 });
  } catch (error: any) {
    console.error("[ClinicalDataGateway /api/patients POST] Save failed:", error?.message);
    return NextResponse.json(
      { error: "Patient data could not be saved." },
      { status: 500 }
    );
  }
}

