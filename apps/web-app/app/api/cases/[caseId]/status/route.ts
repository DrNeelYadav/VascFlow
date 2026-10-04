import { NextRequest, NextResponse } from "next/server";
import { CaseStatus } from "@vascule/db";
import { getAdminFirestore } from "@/app/lib/firebaseAdmin";
import {
  canViewIdentifiableClinicalData,
  getVerifiedStaff,
} from "@/app/lib/auth/clinicalAccess";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VALID_STATUSES: CaseStatus[] = [
  CaseStatus.SCHEDULED,
  CaseStatus.ADMITTED_PREPPED,
  CaseStatus.IN_PROCEDURE,
  CaseStatus.POST_OP_HOLDING,
  CaseStatus.REPORT_DRAFTED,
  CaseStatus.FINALIZED_SIGNED,
  CaseStatus.DISCHARGED,
];

function privateJson(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "private, no-store" },
  });
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ caseId: string }> }
) {
  const staff = await getVerifiedStaff();
  if (!staff) return privateJson({ error: "Authentication required." }, 401);
  if (!canViewIdentifiableClinicalData(staff)) {
    return privateJson({ error: "Physician access is required." }, 403);
  }

  const { caseId } = await context.params;
  try {
    const snapshot = await getAdminFirestore().collection("cases").doc(caseId).get();
    if (!snapshot.exists) return privateJson({ error: "Case not found." }, 404);
    const data = snapshot.data() || {};
    return privateJson({
      success: true,
      caseId,
      status: data.status || CaseStatus.SCHEDULED,
      updatedAt: data.updatedAt || data.createdAt || null,
      history: Array.isArray(data.statusHistory) ? data.statusHistory : [],
    });
  } catch (error) {
    console.error("[Case status GET] Live cloud read failed:", error);
    return privateJson({ error: "Live case status is unavailable." }, 503);
  }
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ caseId: string }> }
) {
  const staff = await getVerifiedStaff();
  if (!staff) return privateJson({ error: "Authentication required." }, 401);
  if (!canViewIdentifiableClinicalData(staff)) {
    return privateJson({ error: "Physician access is required." }, 403);
  }

  const { caseId } = await context.params;
  let body: Record<string, unknown>;
  try {
    const value: unknown = await request.json();
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return privateJson({ error: "Invalid status update." }, 400);
    }
    body = value as Record<string, unknown>;
  } catch {
    return privateJson({ error: "Invalid request body." }, 400);
  }

  const nextStatus = ((body.nextStatus || body.status) as CaseStatus);
  if (!VALID_STATUSES.includes(nextStatus)) {
    return privateJson({ error: "Invalid case status." }, 400);
  }

  const staffId = staff.id || staff.email;
  if (!staffId) return privateJson({ error: "Verified staff identity is missing." }, 401);

  try {
    const db = getAdminFirestore();
    const caseRef = db.collection("cases").doc(caseId);
    const auditRef = db.collection("audit_logs").doc();
    const now = new Date().toISOString();
    const result = await db.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(caseRef);
      if (!snapshot.exists) return null;

      const current = snapshot.data() || {};
      const previousStatus = current.status || null;
      const entry = {
        status: nextStatus,
        timestamp: now,
        actor: staffId,
        ...(typeof body.notes === "string" && body.notes.trim()
          ? { notes: body.notes.trim().slice(0, 2000) }
          : {}),
      };
      const priorHistory = Array.isArray(current.statusHistory)
        ? current.statusHistory
        : [];

      transaction.update(caseRef, {
        status: nextStatus,
        updatedAt: now,
        statusHistory: [...priorHistory.slice(-99), entry],
      });
      transaction.create(auditRef, {
        action: "STATUS_TRANSITION",
        entityType: "ProcedureCase",
        entityId: caseId,
        actorStaffId: staffId,
        previousStatus,
        nextStatus,
        timestamp: now,
        ...(body.isEmergencyOverride === true && typeof body.overrideReason === "string"
          ? { emergencyOverrideReason: body.overrideReason.trim().slice(0, 1000) }
          : {}),
      });

      return { previousStatus, history: [...priorHistory.slice(-99), entry] };
    });

    if (!result) return privateJson({ error: "Case not found." }, 404);
    return privateJson({
      success: true,
      caseId,
      status: nextStatus,
      updatedAt: now,
      history: result.history,
    });
  } catch (error) {
    console.error("[Case status PATCH] Live cloud update failed:", error);
    return privateJson({ error: "Case status could not be saved to the live record." }, 503);
  }
}

export const POST = PATCH;
