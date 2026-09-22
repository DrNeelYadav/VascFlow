import { NextRequest, NextResponse } from "next/server";
import { logAuditTrail } from "@vascule/db";
import { auth } from "@/auth";
import {
  buildPreAuthDossierPdf,
  PreAuthDossierInput,
} from "../../../lib/schemes/pdfPacketBuilder";

/**
 * POST /api/schemes/generate-packet
 * Synthesizes a cryptographically verified, multi-page Pre-Auth PDF Dossier for Rajasthan MAAY / RGHS.
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PreAuthDossierInput & {
      format?: "pdf" | "json";
    };

    if (!body.caseId || !body.patientCrNo || !body.packageCode) {
      return NextResponse.json(
        {
          error: "Missing mandatory dossier fields: caseId, patientCrNo, packageCode",
        },
        { status: 400 }
      );
    }

    const session = await auth();
    const actorStaff =
      session?.user?.email ||
      session?.user?.id ||
      body.consultant?.medicalRegNo;

    if (!actorStaff) {
      return NextResponse.json(
        {
          error:
            "Unauthorized: Verified clinical consultant session or medical council registration number required.",
        },
        { status: 401 }
      );
    }

    if (!body.consultant?.medicalRegNo || !body.consultant?.name) {
      return NextResponse.json(
        {
          error:
            "Invalid pre-auth payload: Verified consultant name and Rajasthan/National Medical Council registration number (medicalRegNo) are mandatory.",
        },
        { status: 400 }
      );
    }

    // Ensure consultant metadata is present
    const dossierInput: PreAuthDossierInput = {
      ...body,
      consultant: body.consultant,
      approvedImplants: body.approvedImplants || [],
    };

    // Build the tamper-proof signed PDF dossier
    const result = buildPreAuthDossierPdf(dossierInput);

    // Audit trail logging
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "VascFlow-PreAuth-Generator/1.0";

    const auditEntry = await logAuditTrail({
      actorStaffId: actorStaff,
      action: "GENERATE_PREAUTH_PACKET",
      entityType: "PreAuthDossier",
      entityId: dossierInput.caseId,
      ipAddress: clientIp,
      userAgent,
      details: {
        patientCrNo: dossierInput.patientCrNo,
        packageCode: dossierInput.packageCode,
        scheme: dossierInput.scheme,
        baseTariff: dossierInput.baseTariffInr,
        implantCount: dossierInput.approvedImplants.length,
        signatureHash: result.verificationHash,
        fileSizeBytes: result.contentLength,
      },
    });

    // Check if client requested direct binary stream
    if (body.format === "pdf" || request.headers.get("accept")?.includes("application/pdf")) {
      return new Response(Buffer.from(result.pdfBuffer), {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${result.fileName}"`,
          "Content-Length": String(result.contentLength),
          "X-VascFlow-Verification-Hash": result.verificationHash,
          "X-VascFlow-Audit-ID": auditEntry.id,
        },
      });
    }

    // Default: JSON response with base64 for immediate client-side preview and download
    const base64Pdf = Buffer.from(result.pdfBuffer).toString("base64");

    return NextResponse.json(
      {
        success: true,
        fileName: result.fileName,
        fileSizeBytes: result.contentLength,
        verificationHash: result.verificationHash,
        verificationPayload: result.verificationPayload,
        auditLogId: auditEntry.id,
        pdfBase64: base64Pdf,
        generatedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to generate Pre-Auth clinical dossier", details: message },
      { status: 500 }
    );
  }
}
