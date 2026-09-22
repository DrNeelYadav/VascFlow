import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

// Fallback seed worklist cases for unseeded or offline environments
const INITIAL_FALLBACK_CASES = [
  {
    id: "case_sms_001",
    uhid: "SMS-2026-CR-001",
    patientName: "Ramesh Sharma",
    age: 58,
    sex: "Male",
    diagnosis: "Hepatocellular Carcinoma (Segment VII) • Post-Hepatitis B",
    procedure: "cTACE Chemoembolization",
    status: "IN_PROCEDURE",
    room: "Cath Lab 1",
    createdAt: new Date().toISOString(),
  },
  {
    id: "case_sms_002",
    uhid: "SMS-2026-CR-002",
    patientName: "Kamla Devi",
    age: 44,
    sex: "Female",
    diagnosis: "Symptomatic Uterine Fibroids (FIGO 3/4)",
    procedure: "Uterine Artery Embolization (UAE)",
    status: "SCHEDULED",
    room: "Cath Lab 2",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
];

/**
 * GET /api/cases
 * Retrieves cases from Google Cloud Firestore collection "cases".
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limitCount = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "50", 10) || 50)
    );

    const casesRef = collection(db, "cases");
    const q = query(casesRef, orderBy("createdAt", "desc"), limit(limitCount));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return NextResponse.json(data);
    }

    // Return fallback cases if collection is not yet populated
    return NextResponse.json(INITIAL_FALLBACK_CASES);
  } catch (error: any) {
    console.warn("[Firestore /api/cases GET] Falling back to memory:", error?.message);
    return NextResponse.json(INITIAL_FALLBACK_CASES);
  }
}

/**
 * POST /api/cases
 * Adds a new clinical procedure case into Google Cloud Firestore.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid payload: Request body is required" },
        { status: 400 }
      );
    }

    const newRecord = {
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "cases"), newRecord);

    return NextResponse.json(
      { id: docRef.id, ...newRecord },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[Firestore /api/cases POST] Error adding document:", error?.message);
    return NextResponse.json(
      { error: error?.message || "Failed to create case in Firestore" },
      { status: 500 }
    );
  }
}
