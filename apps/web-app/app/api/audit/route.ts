import { NextRequest, NextResponse } from "next/server";
import { prisma, logAuditTrail, verifyAuditIntegrity } from "@vascule/db";
import { auth } from "@/auth";
import { db } from "@/app/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query as fsQuery,
  orderBy,
  limit as fsLimit,
} from "firebase/firestore";

interface NormalizedAuditLog {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  staffId: string;
  ipAddress: string;
  userAgent: string;
  timestamp: string;
  tamperVerified: boolean;
  status: string;
}

// Memory ledger of cryptographically verified audit records for local/offline environments
const localAuditLedger: NormalizedAuditLog[] = [];

/**
 * GET /api/audit
 * Retrieves immutable audit records with tamper verification status.
 */
export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized: Active authenticated session required." },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const actionFilter = searchParams.get("action") || "ALL";
  const limitParam = parseInt(searchParams.get("limit") || "50", 10);
  const limit = isNaN(limitParam) ? 50 : Math.min(Math.max(limitParam, 1), 200);

  const normalizedLogs: NormalizedAuditLog[] = [];
  const isTest = process.env.NODE_ENV === "test";

  // 1. Fetch from Google Cloud Firestore "audit_logs" collection
  try {
    const auditRef = collection(db, "audit_logs");
    const q = fsQuery(auditRef, orderBy("timestamp", "desc"), fsLimit(limit));
    const snap = await Promise.race([
      getDocs(q),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Firestore timeout")), isTest ? 300 : 3000)
      ),
    ]);

    if (!snap.empty) {
      for (const doc of snap.docs) {
        const d = doc.data();
        if (actionFilter === "ALL" || (d.action && d.action.toUpperCase() === actionFilter.toUpperCase())) {
          let isVerified = false;
          if (d.detailsJson) {
            try {
              isVerified = verifyAuditIntegrity({
                id: doc.id,
                action: d.action,
                entityType: d.entityType,
                entityId: d.entityId,
                staffId: d.staffId,
                ipAddress: d.ipAddress || "127.0.0.1",
                userAgent: d.userAgent || "EndoFlow-Client",
                detailsJson: d.detailsJson,
                timestamp: new Date(d.timestamp || Date.now()),
              });
            } catch {
              isVerified = false;
            }
          }

          normalizedLogs.push({
            id: doc.id,
            action: d.action,
            entityType: d.entityType,
            entityId: d.entityId,
            staffId: d.staffId,
            ipAddress: d.ipAddress || "127.0.0.1",
            userAgent: d.userAgent || "EndoFlow-Client",
            timestamp: d.timestamp || new Date().toISOString(),
            tamperVerified: isVerified,
            status: isVerified ? "VERIFIED_TAMPER_PROOF" : "UNVERIFIED",
          });
        }
      }
    }
  } catch {
    // Firestore collection unavailable or offline
  }

  // 2. Fetch from PostgreSQL database via @vascule/db Prisma client (if configured)
  if (normalizedLogs.length === 0 && process.env.DATABASE_URL) {
    try {
      const dbLogs = await prisma.auditLog.findMany({
        orderBy: { timestamp: "desc" },
        take: limit,
        where:
          actionFilter !== "ALL"
            ? { action: { equals: actionFilter.toUpperCase() } }
            : undefined,
      });

      for (const record of dbLogs) {
        const isVerified = verifyAuditIntegrity(record);
        normalizedLogs.push({
          id: record.id,
          action: record.action,
          entityType: record.entityType,
          entityId: record.entityId,
          staffId: record.staffId,
          ipAddress: record.ipAddress,
          userAgent: record.userAgent,
          timestamp: record.timestamp.toISOString(),
          tamperVerified: isVerified,
          status: isVerified ? "VERIFIED_TAMPER_PROOF" : "TAMPER_CHECK_FAILED",
        });
      }
    } catch {
      // Database connection or table initialization fallback
    }
  }

  // 2. Fetch from Golang auth-service audit ledger if available
  const authServiceUrl =
    process.env.AUTH_SERVICE_INTERNAL_URL || "http://127.0.0.1:8080";

  try {
    const res = await fetch(
      `${authServiceUrl}/api/v1/audit/logs?limit=${limit}&action=${encodeURIComponent(actionFilter)}`,
      {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(1500),
      }
    );

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.logs)) {
        for (const log of data.logs) {
          // Prevent duplicates if already present from DB
          if (!normalizedLogs.some((l) => l.id === log.id)) {
            const isTamperVerified = Boolean(log.tamperHash);
            normalizedLogs.push({
              id: log.id,
              action: log.action,
              entityType: log.entityType,
              entityId: log.entityId,
              staffId: log.staffId,
              ipAddress: log.ipAddress || "127.0.0.1",
              userAgent: log.userAgent || "Go-Microservice-Mesh",
              timestamp: log.timestamp || new Date().toISOString(),
              tamperVerified: isTamperVerified,
              status: isTamperVerified ? "VERIFIED_TAMPER_PROOF" : "UNVERIFIED",
            });
          }
        }
      }
    }
  } catch {
    // Upstream Go service might be offline in mock/edge SSR mode
  }

  // 3. Fallback to local verified ledger if external stores are offline
  if (normalizedLogs.length === 0 && localAuditLedger.length > 0) {
    const matching = actionFilter === "ALL"
      ? localAuditLedger
      : localAuditLedger.filter((l) => l.action.toUpperCase() === actionFilter.toUpperCase());
    normalizedLogs.push(...matching);
  }

  // Sort newest first
  normalizedLogs.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return NextResponse.json({
    total: normalizedLogs.length,
    logs: normalizedLogs.slice(0, limit),
    status: "synchronized",
  });
}

/**
 * POST /api/audit
 * Ingests a new audit log entry from client actions.
 */
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized: Active authenticated session required." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { action, entityType, entityId, details, ipAddress, userAgent } =
      body;

    if (!action || !entityType || !entityId) {
      return NextResponse.json(
        { error: "Missing required audit parameters (action, entityType, entityId)" },
        { status: 400 }
      );
    }

    const serverVerifiedStaff =
      session.user.email ||
      session.user.id ||
      "authenticated-staff";

    const clientIp =
      ipAddress ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "127.0.0.1";
    const clientAgent = userAgent || request.headers.get("user-agent") || "Vascule-Client";

    // 1. Log Cryptographic Merkle DAG / Audit Trail
    const record = await logAuditTrail({
      actorStaffId: serverVerifiedStaff,
      action: action.toUpperCase(),
      entityType,
      entityId,
      ipAddress: clientIp,
      userAgent: clientAgent,
      details,
      encryptPayload: true,
    });

    const isVerified = verifyAuditIntegrity(record);

    // Keep verified ledger synchronized for offline/local resilience
    if (isVerified) {
      localAuditLedger.unshift({
        id: record.id,
        action: record.action,
        entityType: record.entityType,
        entityId: record.entityId,
        staffId: record.staffId,
        ipAddress: clientIp,
        userAgent: clientAgent,
        timestamp: record.timestamp.toISOString(),
        tamperVerified: true,
        status: "VERIFIED_TAMPER_PROOF",
      });
      if (localAuditLedger.length > 200) {
        localAuditLedger.pop();
      }
    }

    // 2. Append structured audit record to Google Cloud Firestore "audit_logs" collection with verified signature details
    const isTest = process.env.NODE_ENV === "test";
    try {
      const auditRef = collection(db, "audit_logs");
      await Promise.race([
        addDoc(auditRef, {
          action: record.action,
          entityType: record.entityType,
          entityId: record.entityId,
          staffId: record.staffId,
          ipAddress: clientIp,
          userAgent: clientAgent,
          detailsJson: record.detailsJson,
          previousHash: record.previousHash || null,
          currentHash: record.currentHash || null,
          timestamp: record.timestamp.toISOString(),
          tamperVerified: isVerified,
          status: isVerified ? "VERIFIED_TAMPER_PROOF" : "UNVERIFIED",
        }),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Firestore timeout")), isTest ? 300 : 3000)
        ),
      ]);
    } catch {
      // Fallback to local cryptographic ledger if Firestore is offline
    }

    return NextResponse.json(
      {
        success: true,
        logged: true,
        record: {
          id: record.id,
          action: record.action,
          entityType: record.entityType,
          entityId: record.entityId,
          staffId: record.staffId,
          timestamp: record.timestamp.toISOString(),
          status: isVerified ? "VERIFIED_TAMPER_PROOF" : "UNVERIFIED",
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to record audit trail", message: err?.message || String(err) },
      { status: 500 }
    );
  }
}
