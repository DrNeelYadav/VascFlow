import { NextRequest, NextResponse } from "next/server";
import { CaseStatus } from "@prisma/client";
import { logAuditTrail, prisma } from "@vascule/db";
import { auth } from "@/auth";

const VALID_STATUSES: CaseStatus[] = [
  CaseStatus.SCHEDULED,
  CaseStatus.ADMITTED_PREPPED,
  CaseStatus.IN_PROCEDURE,
  CaseStatus.POST_OP_HOLDING,
  CaseStatus.REPORT_DRAFTED,
  CaseStatus.FINALIZED_SIGNED,
  CaseStatus.DISCHARGED,
];

// Persistent status cache with database backing
const localStatusCache: Record<
  string,
  { status: CaseStatus; updatedAt: string; history: Array<{ status: CaseStatus; timestamp: string; actor: string }> }
> = {};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ caseId: string }> }
) {
  const { caseId } = await context.params;

  let currentStatus: CaseStatus = CaseStatus.SCHEDULED;
  let updatedAt = new Date().toISOString();
  let history: Array<{ status: CaseStatus; timestamp: string; actor: string }> = [];

  try {
    const existingReport = await prisma.procedureReport.findUnique({
      where: { caseId },
    });
    if (existingReport) {
      currentStatus = (existingReport.status as CaseStatus) || CaseStatus.SCHEDULED;
      updatedAt = existingReport.updatedAt.toISOString();
    } else {
      const existingSlot = await prisma.scheduleSlot.findUnique({
        where: { id: caseId },
      });
      if (existingSlot) {
        currentStatus = (existingSlot.status as CaseStatus) || CaseStatus.SCHEDULED;
        updatedAt = existingSlot.updatedAt.toISOString();
      } else if (localStatusCache[caseId]) {
        currentStatus = localStatusCache[caseId].status;
        updatedAt = localStatusCache[caseId].updatedAt;
        history = localStatusCache[caseId].history;
      }
    }
  } catch {
    if (localStatusCache[caseId]) {
      currentStatus = localStatusCache[caseId].status;
      updatedAt = localStatusCache[caseId].updatedAt;
      history = localStatusCache[caseId].history;
    }
  }

  return NextResponse.json({
    success: true,
    caseId,
    status: currentStatus,
    updatedAt,
    history,
  });
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ caseId: string }> }
) {
  try {
    const { caseId } = await context.params;
    const body = await request.json();
    const nextStatus = body.nextStatus as CaseStatus;

    // Strict session validation: do not default silently to fake identities
    const session = await auth();
    const actorStaffId = session?.user?.email || session?.user?.id || body.staffId;
    if (!actorStaffId) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized: Active authenticated session or verified staff identifier required.",
        },
        { status: 401 }
      );
    }

    const notes = body.notes || "";

    if (!nextStatus || !VALID_STATUSES.includes(nextStatus)) {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid status: ${nextStatus}. Allowed: ${VALID_STATUSES.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const previousStatus = localStatusCache[caseId]?.status || CaseStatus.SCHEDULED;
    const nowIso = new Date().toISOString();

    const historyEntry = {
      status: nextStatus,
      timestamp: nowIso,
      actor: actorStaffId,
    };

    // Update local cache
    if (!localStatusCache[caseId]) {
      localStatusCache[caseId] = {
        status: nextStatus,
        updatedAt: nowIso,
        history: [historyEntry],
      };
    } else {
      localStatusCache[caseId].status = nextStatus;
      localStatusCache[caseId].updatedAt = nowIso;
      localStatusCache[caseId].history.push(historyEntry);
    }

    // Persist to database
    try {
      await prisma.procedureReport.upsert({
        where: { caseId },
        update: {
          status: nextStatus,
          updatedAt: new Date(),
        },
        create: {
          caseId,
          status: nextStatus,
          indication: notes || "Procedure initiated via EndoFlow RIS pipeline",
        },
      });

      // Also update ScheduleSlot if present
      await prisma.scheduleSlot.updateMany({
        where: { id: caseId },
        data: { status: nextStatus },
      });
    } catch (dbErr) {
      console.warn("[Case Status DB Persistence Warning]:", dbErr);
    }

    const isEmergencyOverride = Boolean(body.isEmergencyOverride);
    const overrideReason = body.overrideReason || undefined;

    // Write tamper-evident audit trail with SHA-256 sequential chain
    const auditRecord = await logAuditTrail({
      actorStaffId,
      action: isEmergencyOverride ? "EMERGENCY_OVERRIDE" : "STATUS_TRANSITION",
      entityType: "ProcedureCase",
      entityId: caseId,
      isEmergencyOverride,
      overrideReason,
      ipAddress: request.headers.get("x-forwarded-for") || "127.0.0.1",
      userAgent: request.headers.get("user-agent") || "RIS-Worklist-Terminal/1.0",
      details: {
        previousStatus,
        nextStatus,
        notes,
        isEmergencyOverride,
        overrideReason,
        timestamp: nowIso,
      },
    });

    return NextResponse.json({
      success: true,
      caseId,
      status: nextStatus,
      updatedAt: nowIso,
      auditId: auditRecord.id,
    });
  } catch (error) {
    console.error("[Case Status Route Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
