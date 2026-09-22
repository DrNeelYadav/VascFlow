import { NextRequest, NextResponse } from "next/server";
import { db, isFirebaseConfigured } from "@/app/lib/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

// Fallback seed worklist cases for unseeded or offline environments
const INITIAL_FALLBACK_CASES: Array<Record<string, any>> = [];

const inMemoryCases: Array<Record<string, any>> = [...INITIAL_FALLBACK_CASES];

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

    if (isFirebaseConfigured() && db) {
      const casesRef = collection(db, "cases");
      let snapshot;
      try {
        const q = query(casesRef, orderBy("createdAt", "desc"), limit(limitCount));
        snapshot = await getDocs(q);
      } catch {
        const q = query(casesRef, limit(limitCount));
        snapshot = await getDocs(q);
      }

      if (!snapshot.empty) {
        const data = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        return NextResponse.json(data);
      }
    }

    // Return fallback cases if collection is not yet populated or offline
    return NextResponse.json(inMemoryCases.slice(0, limitCount));
  } catch (error: any) {
    console.warn("[Firestore /api/cases GET] Falling back to memory:", error?.message);
    return NextResponse.json(inMemoryCases);
  }
}

/**
 * POST /api/cases
 * Adds or updates a clinical procedure case in Google Cloud Firestore.
 * Preserves custom case IDs to prevent split-brain mismatches with status routes.
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

    const nowIso = new Date().toISOString();
    const targetId = body.id || body.caseId || `case_${Date.now()}`;
    const newRecord = {
      ...body,
      id: targetId,
      createdAt: body.createdAt || nowIso,
      updatedAt: nowIso,
    };

    if (isFirebaseConfigured() && db) {
      try {
        await setDoc(doc(db, "cases", targetId), newRecord, { merge: true });
      } catch (fbErr: any) {
        console.warn("[Firestore /api/cases POST] Failed to save to Firestore, using memory fallback:", fbErr?.message);
      }
    }

    // Keep in-memory cache in sync
    const existingIndex = inMemoryCases.findIndex((c) => c.id === targetId);
    if (existingIndex >= 0) {
      inMemoryCases[existingIndex] = { ...inMemoryCases[existingIndex], ...newRecord };
    } else {
      inMemoryCases.unshift(newRecord);
    }

    return NextResponse.json(
      newRecord,
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
