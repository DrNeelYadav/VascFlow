// ---------------------------------------------------------------------------
// Vascule OS Clinical Analytics Aggregators & CSV Serializer
// ---------------------------------------------------------------------------

export interface BiopsyRecord {
  id: string;
  procedureDate: string;
  room: "CT D9211" | "Room 922 USG";
  lesionSite: string;
  needleGauge: string;
  coresObtained: number;
  adequateDiagnosticTissue: boolean;
  operator: string;
}

export interface MonthlyOtMetrics {
  month: string;
  year: number;
  angioSuite1Cases: number;
  angioSuite2Cases: number;
  hybridOr3Cases: number;
  totalProcedures: number;
  contrastVolumeExceededCases: number;
  radiationDoseAlertCount: number;
}

export interface DepartmentAnalyticsSummary {
  totalBiopsies: number;
  adequateBiopsies: number;
  ctD9211Biopsies: number;
  ctD9211Adequate: number;
  room922Biopsies: number;
  room922Adequate: number;
  overallDiagnosticYieldPct: number;
  ctYieldPct: number;
  usgYieldPct: number;
  totalMonthlyOtCases: number;
  totalContrastViolations: number;
  contrastViolationRatePct: number;
}

/**
 * Computes diagnostic yield percentages and aggregated metrics across departmental records.
 */
export function computeDepartmentAnalytics(
  biopsies: BiopsyRecord[],
  otMetrics: MonthlyOtMetrics[]
): DepartmentAnalyticsSummary {
  const totalBiopsies = biopsies.length;
  const adequateBiopsies = biopsies.filter((b) => b.adequateDiagnosticTissue).length;

  const ctBiopsies = biopsies.filter((b) => b.room === "CT D9211");
  const ctAdequate = ctBiopsies.filter((b) => b.adequateDiagnosticTissue).length;

  const usgBiopsies = biopsies.filter((b) => b.room === "Room 922 USG");
  const usgAdequate = usgBiopsies.filter((b) => b.adequateDiagnosticTissue).length;

  const overallDiagnosticYieldPct =
    totalBiopsies > 0 ? Math.round((adequateBiopsies / totalBiopsies) * 1000) / 10 : 0;

  const ctYieldPct =
    ctBiopsies.length > 0 ? Math.round((ctAdequate / ctBiopsies.length) * 1000) / 10 : 0;

  const usgYieldPct =
    usgBiopsies.length > 0 ? Math.round((usgAdequate / usgBiopsies.length) * 1000) / 10 : 0;

  const totalMonthlyOtCases = otMetrics.reduce((sum, m) => sum + m.totalProcedures, 0);
  const totalContrastViolations = otMetrics.reduce(
    (sum, m) => sum + m.contrastVolumeExceededCases,
    0
  );

  const contrastViolationRatePct =
    totalMonthlyOtCases > 0
      ? Math.round((totalContrastViolations / totalMonthlyOtCases) * 1000) / 10
      : 0;

  return {
    totalBiopsies,
    adequateBiopsies,
    ctD9211Biopsies: ctBiopsies.length,
    ctD9211Adequate: ctAdequate,
    room922Biopsies: usgBiopsies.length,
    room922Adequate: usgAdequate,
    overallDiagnosticYieldPct,
    ctYieldPct,
    usgYieldPct,
    totalMonthlyOtCases,
    totalContrastViolations,
    contrastViolationRatePct,
  };
}

/**
 * Serializes biopsy records into standard RFC 4180 CSV format.
 */
export function generateBiopsyCsv(records: BiopsyRecord[]): string {
  const headers = ["ID,Date,Room,Lesion Site,Needle Gauge,Cores Obtained,Adequate Tissue,Operator"];
  const rows = records.map((r) =>
    [
      r.id,
      r.procedureDate,
      `"${r.room}"`,
      `"${r.lesionSite}"`,
      r.needleGauge,
      r.coresObtained,
      r.adequateDiagnosticTissue ? "YES" : "NO",
      `"${r.operator}"`,
    ].join(",")
  );
  return [headers, ...rows].join("\n");
}

/**
 * Serializes monthly OT activity metrics into CSV format.
 */
export function generateOtMetricsCsv(metrics: MonthlyOtMetrics[]): string {
  const headers = [
    "Month,Year,Suite 1 Cases,Suite 2 Cases,Hybrid OR Cases,Total Cases,Contrast Violations,Radiation Alerts",
  ];
  const rows = metrics.map((m) =>
    [
      m.month,
      m.year,
      m.angioSuite1Cases,
      m.angioSuite2Cases,
      m.hybridOr3Cases,
      m.totalProcedures,
      m.contrastVolumeExceededCases,
      m.radiationDoseAlertCount,
    ].join(",")
  );
  return [headers, ...rows].join("\n");
}
