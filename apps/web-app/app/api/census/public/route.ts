import { NextRequest, NextResponse } from "next/server";
import {
  MONTHLY_INTERVENTION_VOLUMES_2026,
  DEPARTMENT_SAFETY_BENCHMARKS,
  PUBLISHABLE_REGISTRY_COHORT,
} from "@/app/lib/censusEngine";

/**
 * Public Aggregated Departmental Census Endpoint (/api/census/public)
 * 
 * Provides aggregated departmental metrics, procedural volumes, and clinical safety
 * benchmarks for institutional reporting and research collaboration.
 * 
 * NOTE: All data returned by this endpoint represents aggregated departmental metrics
 * and de-identified summary distributions.
 */

function resolveAllowedOrigin(request: NextRequest): string | null {
  const origin = request.headers.get("origin");
  if (!origin) return null;

  const configured = (process.env.ALLOWED_ORIGINS || process.env.CORS_ALLOWED_ORIGINS || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);

  if (configured.includes(origin)) {
    return origin;
  }

  try {
    const reqUrl = new URL(request.url);
    const originUrl = new URL(origin);

    // Direct same-origin
    if (originUrl.origin === reqUrl.origin) {
      return origin;
    }

    const hostname = originUrl.hostname.toLowerCase();
    // Trusted institutional hospital domains and subnets
    if (
      hostname === "vascule.sms.rajasthan.gov.in" ||
      hostname.endsWith(".sms.rajasthan.gov.in") ||
      hostname === "hospital.lan" ||
      hostname.endsWith(".hospital.lan") ||
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.startsWith("10.200.") ||
      hostname.startsWith("10.201.") ||
      hostname.startsWith("192.168.100.")
    ) {
      return origin;
    }
  } catch {
    return null;
  }

  return null;
}

export async function GET(request: NextRequest) {
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

  const allowedOrigin = resolveAllowedOrigin(request);

  const headers: Record<string, string> = {
    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
  };

  if (allowedOrigin) {
    headers["Access-Control-Allow-Origin"] = allowedOrigin;
    headers["Vary"] = "Origin";
  }

  return NextResponse.json(
    {
      institution: "SMS Medical College & Attached Hospitals, Jaipur",
      department: "Radiodiagnosis & Interventional Radiology",
      division: "Division of Interventional Radiology & Endovascular Surgery",
      censusYear: 2026,
      generatedAt: new Date().toISOString(),
      metricType: "Aggregated Departmental Metrics",
      documentation: "Aggregated departmental procedural volumes and clinical quality benchmarks for institutional reporting.",
      standardsCompliance: [
        "CIRSE Quality Improvement Guidelines for Registry Reporting",
        "SIR Safety & Radiation Protection Quality Matrix",
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
      headers,
    }
  );
}

export async function OPTIONS(request: NextRequest) {
  const allowedOrigin = resolveAllowedOrigin(request);
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  if (allowedOrigin) {
    headers["Access-Control-Allow-Origin"] = allowedOrigin;
    headers["Vary"] = "Origin";
  }
  return new NextResponse(null, { status: 204, headers });
}
