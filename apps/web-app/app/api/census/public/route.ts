import { NextResponse } from "next/server";
import {
  MONTHLY_INTERVENTION_VOLUMES_2026,
  DEPARTMENT_SAFETY_BENCHMARKS,
  PUBLISHABLE_REGISTRY_COHORT,
} from "@/app/lib/censusEngine";

/**
 * Public Read-Only Census Endpoint (/api/census/public)
 * Stripped of all 18 HIPAA Safe Harbor identifiers (PHI).
 * Provides aggregated caseload distributions, procedural safety metrics,
 * and high-level technical success benchmarks for research collaboration.
 */
export async function GET() {
  const totalCases2026 = MONTHLY_INTERVENTION_VOLUMES_2026.reduce(
    (acc, m) => acc + m.total,
    0
  );

  const categoryTotals = {
    aortic: MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.aortic, 0),
    visceralEmbolization: MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.visceralEmbolization, 0),
    peripheralArterial: MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.peripheralArterial, 0),
    venousAndDialysis: MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.venousAndDialysis, 0),
    hepatobiliaryNonVasc: MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.hepatobiliaryNonVasc, 0),
    percutaneousBiopsy: MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.percutaneousBiopsy, 0),
  };

  return NextResponse.json(
    {
      institution: "SMS Medical College & Attached Hospitals, Jaipur",
      department: "Radiodiagnosis & Interventional Radiology",
      division: "Division of Interventional Radiology & Endovascular Surgery",
      censusYear: 2026,
      generatedAt: new Date().toISOString(),
      standardsCompliance: [
        "HIPAA Safe Harbor De-Identification (45 CFR § 164.514(b)(2))",
        "CIRSE Quality Improvement Guidelines for Registry Reporting",
        "SIR Safety & Radiation Protection Quality Matrix"
      ],
      annualSummary: {
        totalInterventions: totalCases2026,
        categoryBreakdown: categoryTotals,
        monthlyTrends: MONTHLY_INTERVENTION_VOLUMES_2026,
      },
      proceduralSafetyAndQuality: DEPARTMENT_SAFETY_BENCHMARKS,
      cohortSampleCount: PUBLISHABLE_REGISTRY_COHORT.length,
      sampleAnonymizedRecords: PUBLISHABLE_REGISTRY_COHORT.slice(0, 3),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
    }
  );
}
