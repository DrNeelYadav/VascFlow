import { NextResponse } from "next/server";
import { getAdminFirestore } from "@/app/lib/firebaseAdmin";
import {
  canViewIdentifiableClinicalData,
  getVerifiedStaff,
} from "@/app/lib/auth/clinicalAccess";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COLLECTION_LIMITS = {
  patients: 150,
  cases: 250,
  beds: 30,
  ctReviews: 200,
  bookedCases: 250,
} as const;

async function readCollection(
  db: ReturnType<typeof getAdminFirestore>,
  name: keyof typeof COLLECTION_LIMITS
) {
  const snapshot = await db.collection(name).limit(COLLECTION_LIMITS[name]).get();
  return snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }));
}

function workView(record: Record<string, any>, collection: string) {
  if (collection === "beds") {
    return {
      id: record.id,
      type: record.type,
      title: record.title,
      status: record.status,
    };
  }

  if (collection === "patients") {
    return {
      id: record.id,
      procedure: record.procedure,
      procedureKey: record.procedureKey,
      modality: record.modality,
      status: record.status,
      ipd: record.ipd
        ? { ward: record.ipd.ward, bed: record.ipd.bed, podDay: record.ipd.podDay }
        : undefined,
      preOp: record.preOp
        ? { calledToLab: record.preOp.calledToLab, labCleared: record.preOp.labCleared }
        : undefined,
    };
  }

  if (collection === "ctReviews") {
    return {
      id: record.id,
      date: record.date,
      modality: record.modality,
      status: record.status,
    };
  }

  return {
    id: record.id,
    status: record.status,
    procedureType: record.procedureType || record.procedure,
    priority: record.priority,
    suiteName: record.suiteName || record.room,
    scheduledTime: record.scheduledTime || record.date,
    slotTime: record.slotTime,
    isEmergency: record.isEmergency,
  };
}

export async function GET() {
  const staff = await getVerifiedStaff();
  if (!staff) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  try {
    const db = getAdminFirestore();
    const [patients, cases, beds, ctReviews, bookedCases] = await Promise.all(
      (Object.keys(COLLECTION_LIMITS) as Array<keyof typeof COLLECTION_LIMITS>).map(
        (name) => readCollection(db, name)
      )
    );
    const doctor = canViewIdentifiableClinicalData(staff);
    const select = (records: Array<Record<string, any>>, collection: string) =>
      doctor ? records : records.map((record) => workView(record, collection));

    return NextResponse.json(
      {
        patients: select(patients, "patients"),
        cases: select(cases, "cases"),
        beds: select(beds, "beds"),
        ctReviews: select(ctReviews, "ctReviews"),
        bookedCases: select(bookedCases, "bookedCases"),
        access: doctor ? "clinical" : "worklist",
        fetchedAt: new Date().toISOString(),
      },
      { headers: { "Cache-Control": "private, no-store" } }
    );
  } catch (error) {
    console.error("[Clinical sync] Firestore read failed:", error);
    return NextResponse.json(
      { error: "Live clinical data is currently unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }
}
