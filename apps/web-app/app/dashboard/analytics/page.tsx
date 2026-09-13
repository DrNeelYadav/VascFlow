"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Card } from "@vascule/ui-kit";
import {
  computeDepartmentAnalytics,
  generateBiopsyCsv,
  generateOtMetricsCsv,
  type BiopsyRecord,
  type MonthlyOtMetrics,
} from "./analyticsUtils";
import {
  Activity,
  BarChart3,
  Download,
  AlertTriangle,
  Building2,
  Calendar,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  Percent,
  TrendingUp,
} from "lucide-react";

// Mock data reflecting active SMS Medical College Interventional Radiology logs
const MOCK_BIOPSIES: BiopsyRecord[] = [
  { id: "BX-001", procedureDate: "2026-09-01", room: "CT D9211", lesionSite: "Lung Mass RUL", needleGauge: "18G", coresObtained: 3, adequateDiagnosticTissue: true, operator: "Dr. Sharma" },
  { id: "BX-002", procedureDate: "2026-09-02", room: "CT D9211", lesionSite: "Retroperitoneal Node", needleGauge: "18G", coresObtained: 4, adequateDiagnosticTissue: true, operator: "Dr. Roy" },
  { id: "BX-003", procedureDate: "2026-09-03", room: "Room 922 USG", lesionSite: "Liver Segment VI", needleGauge: "18G", coresObtained: 3, adequateDiagnosticTissue: true, operator: "Dr. Chen" },
  { id: "BX-004", procedureDate: "2026-09-04", room: "Room 922 USG", lesionSite: "Thyroid Nodule", needleGauge: "20G", coresObtained: 2, adequateDiagnosticTissue: false, operator: "Dr. Sharma" },
  { id: "BX-005", procedureDate: "2026-09-05", room: "CT D9211", lesionSite: "Vertebral L3 Lesion", needleGauge: "11G Bone", coresObtained: 2, adequateDiagnosticTissue: true, operator: "Dr. Roy" },
  { id: "BX-006", procedureDate: "2026-09-06", room: "Room 922 USG", lesionSite: "Native Renal Cortex", needleGauge: "16G", coresObtained: 2, adequateDiagnosticTissue: true, operator: "Dr. Chen" },
  { id: "BX-007", procedureDate: "2026-09-08", room: "CT D9211", lesionSite: "Mediastinal Mass", needleGauge: "18G", coresObtained: 3, adequateDiagnosticTissue: true, operator: "Dr. Sharma" },
  { id: "BX-008", procedureDate: "2026-09-09", room: "Room 922 USG", lesionSite: "Submandibular Mass", needleGauge: "20G", coresObtained: 3, adequateDiagnosticTissue: true, operator: "Dr. Chen" },
  { id: "BX-009", procedureDate: "2026-09-10", room: "CT D9211", lesionSite: "Pelvic Bone Lesion", needleGauge: "11G Bone", coresObtained: 1, adequateDiagnosticTissue: false, operator: "Dr. Roy" },
  { id: "BX-010", procedureDate: "2026-09-11", room: "Room 922 USG", lesionSite: "Allograft Kidney", needleGauge: "16G", coresObtained: 2, adequateDiagnosticTissue: true, operator: "Dr. Sharma" },
];

const MOCK_MONTHLY_OT: MonthlyOtMetrics[] = [
  { month: "May", year: 2026, angioSuite1Cases: 54, angioSuite2Cases: 42, hybridOr3Cases: 18, totalProcedures: 114, contrastVolumeExceededCases: 2, radiationDoseAlertCount: 1 },
  { month: "June", year: 2026, angioSuite1Cases: 62, angioSuite2Cases: 48, hybridOr3Cases: 22, totalProcedures: 132, contrastVolumeExceededCases: 1, radiationDoseAlertCount: 0 },
  { month: "July", year: 2026, angioSuite1Cases: 58, angioSuite2Cases: 51, hybridOr3Cases: 19, totalProcedures: 128, contrastVolumeExceededCases: 3, radiationDoseAlertCount: 2 },
  { month: "August", year: 2026, angioSuite1Cases: 66, angioSuite2Cases: 55, hybridOr3Cases: 24, totalProcedures: 145, contrastVolumeExceededCases: 2, radiationDoseAlertCount: 1 },
  { month: "September", year: 2026, angioSuite1Cases: 34, angioSuite2Cases: 28, hybridOr3Cases: 12, totalProcedures: 74, contrastVolumeExceededCases: 0, radiationDoseAlertCount: 0 },
];

export default function AnalyticsDashboardPage() {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const stats = computeDepartmentAnalytics(MOCK_BIOPSIES, MOCK_MONTHLY_OT);

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(type);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handleExportBiopsyCsv = () => {
    const csv = generateBiopsyCsv(MOCK_BIOPSIES);
    downloadFile(csv, `SMS_IR_Biopsy_Diagnostic_Yield_${new Date().toISOString().slice(0, 10)}.csv`, "Biopsy");
  };

  const handleExportOtCsv = () => {
    const csv = generateOtMetricsCsv(MOCK_MONTHLY_OT);
    downloadFile(csv, `SMS_IR_Monthly_OT_Activity_${new Date().toISOString().slice(0, 10)}.csv`, "OT");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Header */}
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <Building2 className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                SMS Medical College & Hospital — Clinical Intelligence
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Departmental Quality & Procedure Analytics
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Real-time biopsy diagnostic yield tracking, Angio OT monthly case volumes, and contrast nephroprotection compliance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/dashboard/schemes">
              <Button className="px-3.5 py-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded border border-gray-300">
                Schemes & Tariffs
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="px-3.5 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded">
                Clinical Workstation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">
        {/* Export Notification */}
        {downloadSuccess && (
          <div className="bg-green-50 border border-green-200 p-3 rounded-lg flex items-center gap-2 text-xs text-green-800">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>{downloadSuccess} dataset exported successfully to CSV. Ready for departmental audit submission.</span>
          </div>
        )}

        {/* Top Metric Cards: 4 Key Health Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Overall Yield */}
          <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-500 text-xs">
              <span className="font-semibold uppercase tracking-wider">Diagnostic Yield %</span>
              <Percent className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900" data-testid="metric-overall-yield">
              {stats.overallDiagnosticYieldPct}%
            </div>
            <p className="text-xs text-gray-500">
              {stats.adequateBiopsies} of {stats.totalBiopsies} cores adequate for histopathology
            </p>
          </Card>

          {/* CT D9211 Yield */}
          <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-500 text-xs">
              <span className="font-semibold uppercase tracking-wider">CT D9211 Yield</span>
              <Layers className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900" data-testid="metric-ct-yield">
              {stats.ctYieldPct}%
            </div>
            <p className="text-xs text-gray-500">
              {stats.ctD9211Adequate} of {stats.ctD9211Biopsies} deep organ/bone biopsies
            </p>
          </Card>

          {/* Room 922 USG Yield */}
          <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-500 text-xs">
              <span className="font-semibold uppercase tracking-wider">Room 922 USG Yield</span>
              <Activity className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900" data-testid="metric-usg-yield">
              {stats.usgYieldPct}%
            </div>
            <p className="text-xs text-gray-500">
              {stats.room922Adequate} of {stats.room922Biopsies} superficial & renal biopsies
            </p>
          </Card>

          {/* Contrast Violations */}
          <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-500 text-xs">
              <span className="font-semibold uppercase tracking-wider">Contrast Exceedance Rate</span>
              <AlertTriangle className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900" data-testid="metric-contrast-violation-rate">
              {stats.contrastViolationRatePct}%
            </div>
            <p className="text-xs text-gray-500">
              {stats.totalContrastViolations} MACD alerts across {stats.totalMonthlyOtCases} procedures
            </p>
          </Card>
        </div>

        {/* Section 1: Monthly Angio Suite Operational Volumes */}
        <Card className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Monthly Angio OT Procedure Volumes
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Breakdown across Angio Suite 1, Suite 2, and Hybrid OR 3. Total active cases: {stats.totalMonthlyOtCases}.
              </p>
            </div>

            <Button
              onClick={handleExportOtCsv}
              data-testid="btn-export-ot-csv"
              className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded border border-gray-300 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Export OT Volume CSV
            </Button>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3">Month / Year</th>
                  <th className="px-4 py-3">Angio Suite 1</th>
                  <th className="px-4 py-3">Angio Suite 2</th>
                  <th className="px-4 py-3">Hybrid OR 3</th>
                  <th className="px-4 py-3 font-bold text-gray-900">Total Procedures</th>
                  <th className="px-4 py-3">Contrast Alerts</th>
                  <th className="px-4 py-3">Radiation Alerts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_MONTHLY_OT.map((m) => (
                  <tr key={`${m.month}-${m.year}`} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">{m.month} {m.year}</td>
                    <td className="px-4 py-3">{m.angioSuite1Cases}</td>
                    <td className="px-4 py-3">{m.angioSuite2Cases}</td>
                    <td className="px-4 py-3">{m.hybridOr3Cases}</td>
                    <td className="px-4 py-3 font-mono font-bold text-blue-700">{m.totalProcedures}</td>
                    <td className="px-4 py-3">
                      {m.contrastVolumeExceededCases > 0 ? (
                        <span className="text-amber-700 font-semibold">{m.contrastVolumeExceededCases}</span>
                      ) : (
                        <span className="text-gray-400">0</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {m.radiationDoseAlertCount > 0 ? (
                        <span className="text-amber-700 font-semibold">{m.radiationDoseAlertCount}</span>
                      ) : (
                        <span className="text-gray-400">0</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Section 2: Biopsy Log & Diagnostic Yield Verification */}
        <Card className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                Biopsy Log & Diagnostic Adequacy
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Diagnostic tissue adequacy tracking for CT D9211 and Room 922 USG interventions.
              </p>
            </div>

            <Button
              onClick={handleExportBiopsyCsv}
              data-testid="btn-export-biopsy-csv"
              className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded border border-gray-300 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Export Biopsy CSV
            </Button>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3">Biopsy ID</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Room</th>
                  <th className="px-4 py-3">Lesion Site</th>
                  <th className="px-4 py-3">Needle</th>
                  <th className="px-4 py-3">Cores</th>
                  <th className="px-4 py-3">Adequacy</th>
                  <th className="px-4 py-3">Operator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_BIOPSIES.map((bx) => (
                  <tr key={bx.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono font-bold text-gray-900">{bx.id}</td>
                    <td className="px-4 py-3 text-gray-600">{bx.procedureDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        bx.room === "CT D9211" ? "bg-purple-100 text-purple-800" : "bg-emerald-100 text-emerald-800"
                      }`}>
                        {bx.room}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-800">{bx.lesionSite}</td>
                    <td className="px-4 py-3 text-gray-600">{bx.needleGauge}</td>
                    <td className="px-4 py-3 font-semibold">{bx.coresObtained}</td>
                    <td className="px-4 py-3">
                      {bx.adequateDiagnosticTissue ? (
                        <span className="text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200 text-[10px] font-bold">
                          ADEQUATE
                        </span>
                      ) : (
                        <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200 text-[10px] font-bold">
                          INADEQUATE
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{bx.operator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
