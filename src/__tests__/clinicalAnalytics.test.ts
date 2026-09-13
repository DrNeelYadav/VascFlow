import { describe, it, expect } from "vitest";
import {
  computeDepartmentAnalytics,
  generateBiopsyCsv,
  generateOtMetricsCsv,
  type BiopsyRecord,
  type MonthlyOtMetrics,
} from "../../apps/web-app/app/dashboard/analytics/analyticsUtils";

describe("Clinical Analytics Aggregators Suite", () => {
  const sampleBiopsies: BiopsyRecord[] = [
    { id: "B1", procedureDate: "2026-09-01", room: "CT D9211", lesionSite: "Lung", needleGauge: "18G", coresObtained: 3, adequateDiagnosticTissue: true, operator: "Dr. A" },
    { id: "B2", procedureDate: "2026-09-02", room: "CT D9211", lesionSite: "Bone", needleGauge: "11G", coresObtained: 2, adequateDiagnosticTissue: false, operator: "Dr. B" },
    { id: "B3", procedureDate: "2026-09-03", room: "Room 922 USG", lesionSite: "Liver", needleGauge: "18G", coresObtained: 3, adequateDiagnosticTissue: true, operator: "Dr. C" },
    { id: "B4", procedureDate: "2026-09-04", room: "Room 922 USG", lesionSite: "Renal", needleGauge: "16G", coresObtained: 2, adequateDiagnosticTissue: true, operator: "Dr. A" },
  ];

  const sampleOtMetrics: MonthlyOtMetrics[] = [
    { month: "June", year: 2026, angioSuite1Cases: 50, angioSuite2Cases: 30, hybridOr3Cases: 20, totalProcedures: 100, contrastVolumeExceededCases: 2, radiationDoseAlertCount: 1 },
    { month: "July", year: 2026, angioSuite1Cases: 60, angioSuite2Cases: 40, hybridOr3Cases: 20, totalProcedures: 120, contrastVolumeExceededCases: 4, radiationDoseAlertCount: 2 },
  ];

  it("calculates diagnostic yield % correctly for departmental rooms", () => {
    const summary = computeDepartmentAnalytics(sampleBiopsies, sampleOtMetrics);

    // 3 adequate out of 4 total = 75%
    expect(summary.totalBiopsies).toBe(4);
    expect(summary.adequateBiopsies).toBe(3);
    expect(summary.overallDiagnosticYieldPct).toBe(75.0);

    // CT: 1 adequate out of 2 total = 50%
    expect(summary.ctD9211Biopsies).toBe(2);
    expect(summary.ctD9211Adequate).toBe(1);
    expect(summary.ctYieldPct).toBe(50.0);

    // USG: 2 adequate out of 2 total = 100%
    expect(summary.room922Biopsies).toBe(2);
    expect(summary.room922Adequate).toBe(2);
    expect(summary.usgYieldPct).toBe(100.0);
  });

  it("aggregates monthly OT volumes and contrast safety violation rates", () => {
    const summary = computeDepartmentAnalytics(sampleBiopsies, sampleOtMetrics);

    // Total cases = 100 + 120 = 220
    expect(summary.totalMonthlyOtCases).toBe(220);
    // Contrast violations = 2 + 4 = 6
    expect(summary.totalContrastViolations).toBe(6);
    // 6 / 220 = 2.7%
    expect(summary.contrastViolationRatePct).toBe(2.7);
  });

  it("serializes biopsy logs into standard RFC 4180 CSV format", () => {
    const csv = generateBiopsyCsv(sampleBiopsies);

    expect(csv).toContain("ID,Date,Room,Lesion Site,Needle Gauge,Cores Obtained,Adequate Tissue,Operator");
    expect(csv).toContain('B1,2026-09-01,"CT D9211","Lung",18G,3,YES,"Dr. A"');
    expect(csv).toContain('B2,2026-09-02,"CT D9211","Bone",11G,2,NO,"Dr. B"');
  });

  it("serializes OT metrics into standard CSV format", () => {
    const csv = generateOtMetricsCsv(sampleOtMetrics);

    expect(csv).toContain("Month,Year,Suite 1 Cases,Suite 2 Cases,Hybrid OR Cases,Total Cases,Contrast Violations,Radiation Alerts");
    expect(csv).toContain("June,2026,50,30,20,100,2,1");
    expect(csv).toContain("July,2026,60,40,20,120,4,2");
  });

  it("handles zero/empty datasets safely without NaN or division by zero", () => {
    const emptySummary = computeDepartmentAnalytics([], []);

    expect(emptySummary.totalBiopsies).toBe(0);
    expect(emptySummary.overallDiagnosticYieldPct).toBe(0);
    expect(emptySummary.ctYieldPct).toBe(0);
    expect(emptySummary.usgYieldPct).toBe(0);
    expect(emptySummary.contrastViolationRatePct).toBe(0);
  });
});
