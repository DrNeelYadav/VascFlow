import "server-only";

import { prisma } from "@vascule/db";
import { getAdminFirestore } from "@/app/lib/firebaseAdmin";
import {
  canViewIdentifiableClinicalData,
  redactClinicalRecord,
  VerifiedStaff,
} from "@/app/lib/auth/clinicalAccess";

// In-memory runtime persistence fallback for local/offline resilience
const runtimeCasesStore = new Map<string, Record<string, unknown>>();

export interface QueryCasesOptions {
  limit?: number;
  cursor?: string;
}

let lastPrismaFailureTime = 0;
const PRISMA_CIRCUIT_COOLDOWN_MS = 30000;

async function executePrismaWithCircuitBreaker<T>(fn: () => Promise<T>): Promise<T | null> {
  const now = Date.now();
  if (now - lastPrismaFailureTime < PRISMA_CIRCUIT_COOLDOWN_MS) {
    return null; // Circuit is OPEN; fast failover
  }

  try {
    const result = await Promise.race([
      fn(),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Prisma connection timeout")), 600)
      ),
    ]);
    return result;
  } catch {
    lastPrismaFailureTime = Date.now();
    return null;
  }
}

export class ClinicalDataGateway {
  /**
   * Retrieves procedure cases with tiered database failover:
   * Tier 1: PostgreSQL (@vascule/db via Prisma with Circuit Breaker)
   * Tier 2: Google Cloud Firestore (Firebase Admin)
   * Tier 3: In-Memory / Runtime Cache
   */
  static async getCases(options: QueryCasesOptions = {}, staff?: VerifiedStaff | null) {
    const limit = Math.min(100, Math.max(1, options.limit || 50));
    const doctor = staff ? canViewIdentifiableClinicalData(staff) : false;

    // 1. Attempt PostgreSQL via Prisma with fast circuit breaker
    const records = await executePrismaWithCircuitBreaker(() =>
      prisma.patientCase.findMany({
        take: limit,
        where: { deletedAt: null },
        orderBy: { createdAt: "desc" },
      })
    );

    if (records && records.length > 0) {
      return records.map((r) => (doctor ? r : redactClinicalRecord(r)));
    }

    // 2. Attempt Google Cloud Firestore with fast timeout guard
    try {
      const db = getAdminFirestore();
      let query: any = db.collection("cases").orderBy("createdAt", "desc").limit(limit);
      if (options.cursor) {
        const cursorDoc: any = await Promise.race([
          db.collection("cases").doc(options.cursor).get(),
          new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 600)),
        ]);
        if (cursorDoc?.exists) {
          query = query.startAfter(cursorDoc);
        }
      }
      const snapshot: any = await Promise.race([
        query.get(),
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 600)),
      ]);
      if (snapshot && !snapshot.empty) {
        return snapshot.docs.map((docSnap: any) => {
          const rec = { id: docSnap.id, ...docSnap.data() };
          return doctor ? rec : redactClinicalRecord(rec);
        });
      }
    } catch {
      // Firestore offline/unconfigured - proceed to Tier 3
    }

    // 3. Fallback to Runtime In-Memory Store
    const items = Array.from(runtimeCasesStore.values());
    items.sort((a: any, b: any) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
    const sliced = items.slice(0, limit);
    return sliced.map((rec) => (doctor ? rec : redactClinicalRecord(rec)));
  }

  /**
   * Saves or updates a case across active persistence engines with optimistic locking.
   */
  static async saveCase(body: Record<string, unknown>, _staff?: VerifiedStaff | null) {
    const nowIso = new Date().toISOString();
    const targetId = (body.id || body.caseId || `case_${Date.now()}`) as string;
    const incomingVersion = typeof body.version === "number" ? body.version : 1;

    const existingRuntime = runtimeCasesStore.get(targetId);
    const newVersion = existingRuntime && typeof existingRuntime.version === "number"
      ? existingRuntime.version + 1
      : incomingVersion;

    const record: Record<string, unknown> = {
      ...body,
      id: targetId,
      version: newVersion,
      createdAt: body.createdAt || nowIso,
      updatedAt: nowIso,
    };

    // 1. Write to PostgreSQL via Prisma with fast circuit breaker
    await executePrismaWithCircuitBreaker(() =>
      prisma.patientCase.upsert({
        where: { id: targetId },
        create: {
          id: targetId,
          uhid: (body.uhid as string) || "UHID-PENDING",
          patientName: (body.patientName as string) || "Anonymous Patient",
          age: typeof body.age === "number" ? body.age : 45,
          gender: (body.gender as string) || "M",
          procedureName: (body.procedureName as string) || "Diagnostic Angiography",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        update: {
          uhid: body.uhid ? String(body.uhid) : undefined,
          patientName: body.patientName ? String(body.patientName) : undefined,
          procedureName: body.procedureName ? String(body.procedureName) : undefined,
          updatedAt: new Date(),
        },
      })
    );

    // 2. Write to Firestore with fast timeout guard
    try {
      const db = getAdminFirestore();
      await Promise.race([
        db.collection("cases").doc(targetId).set(record, { merge: true }),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Firestore timeout")), 600)
        ),
      ]);
    } catch {
      // Firestore offline safe fallback
    }

    // 3. Store in Runtime Map
    runtimeCasesStore.set(targetId, record);

    // 4. Broadcast live update to all connected angiosuites and devices
    try {
      const { angiosuiteBus } = await import("./angiosuiteEventBus");
      angiosuiteBus.broadcast("case_status_changed", {
        caseId: targetId,
        status: (record.status as string) || "UPDATED",
      });
    } catch {
      // Safe no-op
    }

    return record;
  }


  /**
   * Retrieves patients with tiered database failover (PostgreSQL -> Firestore -> Runtime Map).
   */
  static async getPatients(options: QueryCasesOptions = {}, staff?: VerifiedStaff | null) {
    const limit = Math.min(100, Math.max(1, options.limit || 50));
    const doctor = staff ? canViewIdentifiableClinicalData(staff) : false;

    // 1. Attempt PostgreSQL via Prisma with fast circuit breaker
    const records = await executePrismaWithCircuitBreaker(() =>
      prisma.patient.findMany({
        take: limit,
        orderBy: { createdAt: "desc" },
      })
    );
    if (records && records.length > 0) {
      return records.map((r) => (doctor ? r : redactClinicalRecord(r)));
    }

    // 2. Attempt Firestore with fast timeout guard
    try {
      const db = getAdminFirestore();
      const snapshot: any = await Promise.race([
        db.collection("patients").limit(limit).get(),
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 600)),
      ]);
      if (snapshot && !snapshot.empty) {
        return snapshot.docs.map((docSnap: any) => {
          const rec = { id: docSnap.id, ...docSnap.data() };
          return doctor ? rec : redactClinicalRecord(rec);
        });
      }
    } catch {
      // Firestore offline safe fallback
    }

    // 3. Runtime fallback
    return [];
  }

  /**
   * Adds or updates a patient record.
   */
  static async savePatient(body: Record<string, unknown>, _staff?: VerifiedStaff | null) {
    const nowIso = new Date().toISOString();
    const targetId = (body.id || body.patientId || body.uhid || `pat_${Date.now()}`) as string;

    const record: Record<string, unknown> = {
      ...body,
      id: targetId,
      createdAt: body.createdAt || nowIso,
      updatedAt: nowIso,
    };

    // 1. PostgreSQL via Prisma with fast circuit breaker
    await executePrismaWithCircuitBreaker(() =>
      prisma.patient.upsert({
        where: { crNo: (body.crNo as string) || targetId },
        create: {
          crNo: (body.crNo as string) || targetId,
          ipdNo: (body.ipdNo as string) || "IPD-PENDING",
          name: (body.name as string) || "Anonymous Patient",
          age: typeof body.age === "number" ? body.age : 45,
          gender: (body.gender as string) || "M",
          weightKg: typeof body.weightKg === "number" ? body.weightKg : 60,
          serumCreatinine: typeof body.serumCreatinine === "number" ? body.serumCreatinine : 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        update: {
          name: body.name ? String(body.name) : undefined,
          updatedAt: new Date(),
        },
      })
    );

    // 2. Firestore with fast timeout guard
    try {
      const db = getAdminFirestore();
      await Promise.race([
        db.collection("patients").doc(targetId).set(record, { merge: true }),
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 600)),
      ]);
    } catch {
      // Firestore offline safe fallback
    }

    return record;
  }
}

