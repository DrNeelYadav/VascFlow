import { NextRequest, NextResponse } from "next/server";
import { generateDiagnosticReportBundle, IrCaseClinicalData } from "@vascule/utils";
import { prisma } from "@vascule/db";

/**
 * ABDM FHIR R4 DiagnosticReport for a single interventional case.
 *
 * This endpoint previously synthesised a full clinical record - patient name,
 * operator, air kerma, fluoroscopy time and contrast volume - for any
 * identifier beginning `CASE-` or `IR-`, and emitted it as a national
 * health-exchange bundle. Invented dose metrics in a FHIR resource are not a
 * display defect: they are fabricated patient data that a downstream
 * compliance or registry system would ingest as fact.
 *
 * A DiagnosticReport is therefore returned only when a real procedure record
 * backs it. Anything else is a 404 OperationOutcome, which is the correct FHIR
 * answer for "no such record".
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ caseId: string }> }
) {
  const { caseId } = await context.params;

  let caseData: IrCaseClinicalData | null = null;

  // 1. Database lookup. Patient-identifying fields are only populated from the
  //    stored record; nothing is substituted when a column is null.
  try {
    const report = await prisma.procedureReport.findUnique({
      where: { caseId },
    });

    if (report) {
      caseData = {
        caseId: report.caseId,
        patientId: `PT-${report.caseId}`,
        // patientName is intentionally left undefined. This table does not
        // carry a name column, and inventing "Interventional Patient" would
        // put a fabricated identity into an exchange payload.
        patientName: undefined,
        procedureName: report.indication || undefined,
        diagnosis: report.indication || undefined,
        operatorName: undefined,
        dateTime: report.createdAt || new Date(),
        airKermaGy: report.dapDose ? report.dapDose / 100 : undefined,
        fluoroTimeMinutes: report.fluoroscopyTime || undefined,
        contrastVolumeMl: report.contrastVolumeMl || undefined,
        findings: report.technicalFindings || undefined,
        conclusion: report.complications
          ? `Complications: ${report.complications}`
          : undefined,
        accessSite: report.accessSite || undefined,
      };
    }
  } catch {
    // Database may be offline during development / disconnected cath lab.
    // Falling through to a 404 is correct: no record means no record.
  }

  if (!caseData) {
    return NextResponse.json(
      {
        resourceType: "OperationOutcome",
        issue: [
          {
            severity: "error",
            code: "not-found",
            diagnostics: `No interventional procedure record found for identifier: ${caseId}`,
          },
        ],
      },
      {
        status: 404,
        headers: { "Content-Type": "application/fhir+json" },
      }
    );
  }

  const bundle = generateDiagnosticReportBundle(caseData);

  return NextResponse.json(bundle, {
    status: 200,
    headers: {
      "Content-Type": "application/fhir+json; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300",
    },
  });
}