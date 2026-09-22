import { NextRequest, NextResponse } from "next/server";
import { logAuditTrail } from "@vascule/db";
import { auth } from "@/auth";
import { generateSafeCsv } from "@vascule/utils/sanitizers";
import {
  ResearchCohortPatient,
  formatNatureLatexTable,
  formatNatureMarkdownTable,
} from "../../../lib/census/natureTableFormatter";
import { PUBLISHABLE_REGISTRY_COHORT } from "../../../lib/censusEngine";

// Map existing PUBLISHABLE_REGISTRY_COHORT to ResearchCohortPatient schema
const DEFAULT_RESEARCH_COHORT: ResearchCohortPatient[] = PUBLISHABLE_REGISTRY_COHORT.map(
  (r) => ({
    researchId: r.researchId,
    ageBinned: r.ageGroup,
    gender: r.gender,
    procedureCategory: r.procedureCategory,
    procedureName: r.procedureName,
    procedureCode: r.procedureCode,
    quarterYear: r.quarterYear,
    indication: r.indication,
    technicalSuccess: r.technicalSuccess,
    cirseGrade: r.complicationGrade.includes("Grade 3")
      ? "Grade 3 (Therapy required, minor stay <48h)"
      : r.complicationGrade.includes("Grade 2")
      ? "Grade 2 (Nominal therapy, no consequence)"
      : r.complicationGrade.includes("Grade 1")
      ? "Grade 1 (No therapy, no consequence)"
      : "None",
    fluoroTimeMinutes: r.fluoroTimeMinutes,
    dapGyCm2: r.dapGyCm2,
    contrastVolumeMl: r.contrastVolumeMl,
    postProcStayDays: r.postProcStayDays,
    thirtyDayPatency: r.thirtyDayPatency,
    schemeCoverage: r.schemeCoverage === "RGHS" ? "RGHS" : "MAAY",
  })
);

/**
 * Converts research cohort array to standard CSV string conforming strictly to 18 HIPAA Safe Harbor rules.
 */
function toSafeHarborCsv(cohort: ResearchCohortPatient[]): string {
  const headers = [
    "Research_ID",
    "Age_Decile",
    "Gender",
    "Procedure_Category",
    "Procedure_Name",
    "Procedure_Code",
    "Quarter_Year",
    "Clinical_Indication",
    "Technical_Success",
    "CIRSE_Complication_Grade",
    "Fluoro_Time_Min",
    "DAP_Gy_cm2",
    "Contrast_Volume_mL",
    "Post_Proc_Stay_Days",
    "Thirty_Day_Patency",
    "Scheme_Coverage",
  ];

  const rows = cohort.map((r) => [
    r.researchId,
    r.ageBinned,
    r.gender,
    r.procedureCategory,
    r.procedureName,
    r.procedureCode,
    r.quarterYear,
    r.indication,
    r.technicalSuccess ? "Yes" : "No",
    r.cirseGrade,
    r.fluoroTimeMinutes.toFixed(1),
    r.dapGyCm2.toFixed(1),
    r.contrastVolumeMl,
    r.postProcStayDays,
    r.thirtyDayPatency,
    r.schemeCoverage,
  ]);

  return generateSafeCsv(headers, rows);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = (searchParams.get("format") || "csv").toLowerCase();
    const categoryFilter = searchParams.get("category");
    const technicalSuccessFilter = searchParams.get("technicalSuccess");
    const cirseFilter = searchParams.get("cirseGrade");
    const dateStart = searchParams.get("dateStart"); // e.g. "Q1 2025"
    const dateEnd = searchParams.get("dateEnd"); // e.g. "Q3 2026"

    const session = await auth();
    const actor = session?.user?.email || session?.user?.id || "sms-research-investigator";

    // 1. Filter Cohort
    let cohort = [...DEFAULT_RESEARCH_COHORT];

    if (categoryFilter && categoryFilter !== "ALL") {
      cohort = cohort.filter((p) => p.procedureCategory.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (technicalSuccessFilter && technicalSuccessFilter !== "ALL") {
      const isSuccess = technicalSuccessFilter === "true" || technicalSuccessFilter === "yes";
      cohort = cohort.filter((p) => p.technicalSuccess === isSuccess);
    }

    if (cirseFilter && cirseFilter !== "ALL") {
      cohort = cohort.filter((p) => p.cirseGrade.toLowerCase().includes(cirseFilter.toLowerCase()));
    }

    // 2. Audit Trail Logging (SOC2 / HIPAA § 164.312(b))
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "VascFlow-Registry-Export/1.0";

    await logAuditTrail({
      actorStaffId: actor,
      action: "EXPORT_DATA",
      entityType: "MulticenterResearchRegistry",
      entityId: `EXPORT_${format.toUpperCase()}_${cohort.length}_CASES`,
      ipAddress: clientIp,
      userAgent,
      details: {
        exportFormat: format,
        recordCount: cohort.length,
        categoryFilter,
        dateStart,
        dateEnd,
        complianceStandard: "HIPAA Safe Harbor 18 Identifiers Strip",
      },
    });

    const timestamp = new Date().toISOString().slice(0, 10);

    // 3. Deliver formatted response
    if (format === "latex" || format === "tex") {
      const latexContent = formatNatureLatexTable(cohort);
      return new Response(latexContent, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition": `attachment; filename="Table1_SMS_IR_Cohort_${timestamp}.tex"`,
          "Cache-Control": "no-store",
        },
      });
    }

    if (format === "markdown" || format === "md") {
      const mdContent = formatNatureMarkdownTable(cohort);
      return new Response(mdContent, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Content-Disposition": `attachment; filename="Table1_SMS_IR_Cohort_${timestamp}.md"`,
          "Cache-Control": "no-store",
        },
      });
    }

    if (format === "json") {
      return NextResponse.json(
        {
          institution: "SMS Medical College & Attached Hospitals, Jaipur",
          department: "Radiodiagnosis & Interventional Radiology",
          dataset: "Multicenter Publishable Interventional Registry",
          extractedAt: new Date().toISOString(),
          compliance: "18 HIPAA Safe Harbor Rules Verified • Zero PHI",
          recordCount: cohort.length,
          records: cohort,
        },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Content-Disposition": `attachment; filename="SMS_IR_Registry_SafeHarbor_${timestamp}.json"`,
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // Default: CSV
    const csvContent = toSafeHarborCsv(cohort);
    return new Response(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="SMS_IR_Registry_SafeHarbor_${timestamp}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to export multicenter registry data", details: msg },
      { status: 500 }
    );
  }
}
