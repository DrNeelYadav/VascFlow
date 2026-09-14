"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  DeIdentifiedPatientRecord,
  MONTHLY_INTERVENTION_VOLUMES_2026,
  DEPARTMENT_SAFETY_BENCHMARKS,
  PUBLISHABLE_REGISTRY_COHORT,
  exportCohortAsCsv,
  exportCohortAsJson,
  generatePublicationSummaryTable,
} from "../../lib/censusEngine";
import {
  Layers,
  Activity,
  ShieldCheck,
  Download,
  FileText,
  Filter,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Calendar,
  Sparkles,
  Search,
  ExternalLink,
  Copy,
  Check,
  Radiation,
  Droplet,
  HeartPulse,
} from "lucide-react";

export default function DepartmentalCensusPage() {
  const [activeTab, setActiveTab] = useState<"volume" | "metrics" | "cohort">("volume");

  // Cohort Exporter State & Filters
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [successFilter, setSuccessFilter] = useState<string>("all");
  const [schemeFilter, setSchemeFilter] = useState<string>("all");
  const [copiedTable, setCopiedTable] = useState<boolean>(false);

  // Filtered Cohort Calculation
  const filteredCohort = useMemo(() => {
    return PUBLISHABLE_REGISTRY_COHORT.filter((r) => {
      if (categoryFilter !== "all" && r.procedureCategory !== categoryFilter) {
        return false;
      }
      if (successFilter === "success" && !r.technicalSuccess) return false;
      if (successFilter === "complication" && r.complicationGrade === "None") return false;
      if (schemeFilter !== "all" && r.schemeCoverage !== schemeFilter) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          r.researchId.toLowerCase().includes(q) ||
          r.procedureName.toLowerCase().includes(q) ||
          r.indication.toLowerCase().includes(q) ||
          r.procedureCode.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, categoryFilter, successFilter, schemeFilter]);

  // Aggregate Volume Totals
  const totalCases2026 = useMemo(() => {
    return MONTHLY_INTERVENTION_VOLUMES_2026.reduce((acc, m) => acc + m.total, 0);
  }, []);

  const maxMonthVolume = useMemo(() => {
    return Math.max(...MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => m.total));
  }, []);

  // Handlers for Exports
  const handleDownloadCsv = () => {
    const csvData = exportCohortAsCsv(filteredCohort);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `VascFlow_Census_Cohort_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadJson = () => {
    const jsonData = exportCohortAsJson(filteredCohort);
    const blob = new Blob([jsonData], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `VascFlow_Registry_Export_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyPublicationTable = () => {
    const tableText = generatePublicationSummaryTable(filteredCohort);
    navigator.clipboard.writeText(tableText);
    setCopiedTable(true);
    setTimeout(() => setCopiedTable(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* 1. Header Banner */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC] flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-base sm:text-lg font-bold text-[#202124] tracking-tight">
                Departmental Census &amp; Publishable Registry Engine
              </h1>
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                HIPAA Safe Harbor De-Identified
              </span>
            </div>
            <p className="text-xs text-[#5F6368] mt-0.5">
              SMS Medical College &amp; Attached Hospitals, Jaipur • Division of Interventional Radiology
            </p>
          </div>
        </div>

        {/* Public Endpoint Badge & Links */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          <Link
            href="/api/census/public"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] transition-colors cursor-pointer"
          >
            <span>/api/census/public</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#1A73E8]" />
          </Link>
          <Link
            href="/dashboard"
            className="px-3.5 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] transition-colors cursor-pointer"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>

      {/* 2. Architecture Notice Callout */}
      <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] text-xs text-[#5F6368] flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#137333] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#202124]">Dual-Layer Architectural Pipeline Active: </span>
            <span>
              Direct identifiable clinical logs are processed through automated de-identification, stripping all 18 HIPAA identifiers. Cases receive permanent research identifiers (e.g. <code>VF-2026-xxx</code>) for audit, residency census, and CVIR/JVIR publication.
            </span>
          </div>
        </div>
        <span className="text-[11px] font-mono text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-1 rounded-md shrink-0 border border-[#D2E3FC]">
          Cohort N = {PUBLISHABLE_REGISTRY_COHORT.length} Cases • 2026 Caseload Projected: {totalCases2026}
        </span>
      </div>

      {/* 3. Sub-View Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#DADCE0] pb-2">
        <button
          onClick={() => setActiveTab("volume")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            activeTab === "volume"
              ? "bg-[#1A73E8] text-white shadow-xs"
              : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:text-[#202124]"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>1. Aggregate Volume &amp; Heatmaps</span>
        </button>

        <button
          onClick={() => setActiveTab("metrics")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            activeTab === "metrics"
              ? "bg-[#1A73E8] text-white shadow-xs"
              : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:text-[#202124]"
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>2. Procedural &amp; Radiation Safety Metrics</span>
        </button>

        <button
          onClick={() => setActiveTab("cohort")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            activeTab === "cohort"
              ? "bg-[#1A73E8] text-white shadow-xs"
              : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:text-[#202124]"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>3. Publishable Cohort Exporter</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* SUB-VIEW 1: AGGREGATE INTERVENTION VOLUMES & INTERACTIVE HEATMAP */}
      {/* ========================================================================= */}
      {activeTab === "volume" && (
        <div className="space-y-6">
          {/* Summary Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
              <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Total 2026 Interventions</p>
              <p className="text-2xl font-bold text-[#202124] mt-0.5">{totalCases2026}</p>
              <p className="text-[10px] text-[#137333] font-medium mt-1">↑ 18.2% YoY growth</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
              <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Visceral Embolizations</p>
              <p className="text-2xl font-bold text-[#1A73E8] mt-0.5">
                {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.visceralEmbolization, 0)}
              </p>
              <p className="text-[10px] text-[#5F6368] mt-1">TACE, BAE, PAE, UAE</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
              <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Venous &amp; Portosystemic</p>
              <p className="text-2xl font-bold text-[#B06000] mt-0.5">
                {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.venousAndDialysis, 0)}
              </p>
              <p className="text-[10px] text-[#5F6368] mt-1">TIPS, DIPS, BRTO, Fistula</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
              <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Percutaneous Biopsies</p>
              <p className="text-2xl font-bold text-[#137333] mt-0.5">
                {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.percutaneousBiopsy, 0)}
              </p>
              <p className="text-[10px] text-[#5F6368] mt-1">Coaxial Core Needle</p>
            </div>
          </div>

          {/* Month-by-Month Intervention Volume Bar Chart */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#DADCE0] pb-3">
              <div>
                <h3 className="font-bold text-sm text-[#202124] flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#1A73E8]" />
                  Month-by-Month Intervention Volume Trends (2026)
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Consolidated departmental caseload across Cath-Lab 1, Cath-Lab 2, and CT Intervention Bay
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#F1F3F4] text-[#3C4043] rounded-full border border-[#DADCE0]">
                Monthly Avg: {Math.round(totalCases2026 / 12)} cases/mo
              </span>
            </div>

            {/* Custom SVG / Pure CSS Bar Visualization */}
            <div className="pt-2">
              <div className="grid grid-cols-12 gap-2 sm:gap-3 items-end h-56 border-b border-[#DADCE0] pb-2">
                {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => {
                  const heightPercent = Math.round((m.total / maxMonthVolume) * 100);
                  return (
                    <div key={m.month} className="flex flex-col items-center h-full justify-end group">
                      <span className="text-[10px] font-bold text-[#202124] opacity-0 group-hover:opacity-100 transition-opacity mb-1">
                        {m.total}
                      </span>
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className="w-full bg-gradient-to-t from-[#1A73E8] to-[#669DF6] rounded-t-md group-hover:from-[#1557B0] group-hover:to-[#4285F4] transition-all relative cursor-pointer"
                        title={`${m.month} 2026: ${m.total} Interventions`}
                      />
                      <span className="text-[11px] font-semibold text-[#5F6368] mt-2 group-hover:text-[#1A73E8]">
                        {m.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Procedural Category Heatmap */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-4">
            <div className="border-b border-[#DADCE0] pb-3">
              <h3 className="font-bold text-sm text-[#202124] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#1A73E8]" />
                Procedural Subtype Distribution &amp; Seasonality Heatmap
              </h3>
              <p className="text-xs text-[#5F6368]">
                Density indicates monthly intervention frequency by anatomical organ territory
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-[#DADCE0] text-[#5F6368] font-semibold">
                    <th className="py-2 px-3">Anatomic Category</th>
                    {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => (
                      <th key={m.month} className="py-2 px-2 text-center font-bold">
                        {m.month}
                      </th>
                    ))}
                    <th className="py-2 px-3 text-right">Annual Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">Aortic (EVAR / TEVAR)</td>
                    {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => (
                      <td key={m.month} className="py-2.5 px-2 text-center">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#E8F0FE] text-[#1A73E8]">
                          {m.aortic}
                        </span>
                      </td>
                    ))}
                    <td className="py-2.5 px-3 text-right font-bold text-[#1A73E8]">
                      {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.aortic, 0)}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">Visceral Embolization (TACE/BAE/PAE)</td>
                    {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => (
                      <td key={m.month} className="py-2.5 px-2 text-center">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#E6F4EA] text-[#137333]">
                          {m.visceralEmbolization}
                        </span>
                      </td>
                    ))}
                    <td className="py-2.5 px-3 text-right font-bold text-[#137333]">
                      {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.visceralEmbolization, 0)}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">Peripheral Arterial (DCB/Stents)</td>
                    {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => (
                      <td key={m.month} className="py-2.5 px-2 text-center">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FEF7E0] text-[#B06000]">
                          {m.peripheralArterial}
                        </span>
                      </td>
                    ))}
                    <td className="py-2.5 px-3 text-right font-bold text-[#B06000]">
                      {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.peripheralArterial, 0)}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">Venous &amp; Dialysis (TIPS/DIPS/Fistula)</td>
                    {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => (
                      <td key={m.month} className="py-2.5 px-2 text-center">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#E8F0FE] text-[#1A73E8]">
                          {m.venousAndDialysis}
                        </span>
                      </td>
                    ))}
                    <td className="py-2.5 px-3 text-right font-bold text-[#1A73E8]">
                      {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.venousAndDialysis, 0)}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">Hepatobiliary / Non-Vasc (PTBD/SEMS)</td>
                    {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => (
                      <td key={m.month} className="py-2.5 px-2 text-center">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#F1F3F4] text-[#3C4043]">
                          {m.hepatobiliaryNonVasc}
                        </span>
                      </td>
                    ))}
                    <td className="py-2.5 px-3 text-right font-bold text-[#3C4043]">
                      {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.hepatobiliaryNonVasc, 0)}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">Percutaneous Biopsies</td>
                    {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => (
                      <td key={m.month} className="py-2.5 px-2 text-center">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#E6F4EA] text-[#137333]">
                          {m.percutaneousBiopsy}
                        </span>
                      </td>
                    ))}
                    <td className="py-2.5 px-3 text-right font-bold text-[#137333]">
                      {MONTHLY_INTERVENTION_VOLUMES_2026.reduce((a, b) => a + b.percutaneousBiopsy, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 2: PROCEDURAL & RADIATION SAFETY METRICS */}
      {/* ========================================================================= */}
      {activeTab === "metrics" && (
        <div className="space-y-6">
          {/* Radiation & Contrast Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Fluoroscopy Time & DAP */}
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1A73E8]">
                <Radiation className="w-5 h-5" />
                <h4 className="font-bold text-sm text-[#202124]">Fluoroscopy &amp; Dose Area Product (DAP)</h4>
              </div>
              <div className="space-y-2 text-xs pt-1">
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">Mean Fluoro Time:</span>
                  <span className="font-bold text-[#202124]">{DEPARTMENT_SAFETY_BENCHMARKS.meanFluoroTimeMinutes} min</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">Median Fluoro Time:</span>
                  <span className="font-bold text-[#202124]">{DEPARTMENT_SAFETY_BENCHMARKS.medianFluoroTimeMinutes} min</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">Mean DAP:</span>
                  <span className="font-bold text-[#1A73E8]">{DEPARTMENT_SAFETY_BENCHMARKS.meanDapGyCm2} Gy·cm²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5F6368]">High-Dose Alert (&gt; 500 Gy·cm²):</span>
                  <span className="font-bold text-[#137333]">{DEPARTMENT_SAFETY_BENCHMARKS.highDapAlertPercentage}% of cases</span>
                </div>
              </div>
            </div>

            {/* Card 2: Contrast Media & CI-AKI */}
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#137333]">
                <Droplet className="w-5 h-5" />
                <h4 className="font-bold text-sm text-[#202124]">Contrast Stewardship &amp; CI-AKI</h4>
              </div>
              <div className="space-y-2 text-xs pt-1">
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">Mean Contrast Volume:</span>
                  <span className="font-bold text-[#202124]">{DEPARTMENT_SAFETY_BENCHMARKS.meanContrastVolumeMl} mL</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">Mean MACD Ratio:</span>
                  <span className="font-bold text-[#137333]">{DEPARTMENT_SAFETY_BENCHMARKS.meanMacdRatio} (Safe &lt; 1.0)</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">CI-AKI Incidence:</span>
                  <span className="font-bold text-[#137333]">{DEPARTMENT_SAFETY_BENCHMARKS.contrastInducedAkiRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5F6368]">Protocol:</span>
                  <span className="text-[11px] font-semibold text-[#5F6368]">Pre-hydration 1mL/kg/hr</span>
                </div>
              </div>
            </div>

            {/* Card 3: Technical Success & Complications */}
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#B06000]">
                <HeartPulse className="w-5 h-5" />
                <h4 className="font-bold text-sm text-[#202124]">CIRSE Quality &amp; Outcomes</h4>
              </div>
              <div className="space-y-2 text-xs pt-1">
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">Technical Success Rate:</span>
                  <span className="font-bold text-[#137333]">{DEPARTMENT_SAFETY_BENCHMARKS.technicalSuccessRate}%</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">SIR Benchmark:</span>
                  <span className="text-[11px] font-semibold text-[#5F6368]">&gt; 90.0% expected</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DADCE0] pb-1.5">
                  <span className="text-[#5F6368]">Major Complications (Grade 3):</span>
                  <span className="font-bold text-[#202124]">{DEPARTMENT_SAFETY_BENCHMARKS.majorComplicationRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5F6368]">Audit Cycle:</span>
                  <span className="text-[11px] font-semibold text-[#1A73E8]">Monthly Morbidity &amp; Mortality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnostic & Radiation Audit Table */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-3">
            <h3 className="font-bold text-sm text-[#202124]">
              Interventional Radiology Diagnostic Reference Levels (DRL) vs Department Averages
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-[#DADCE0] text-[#5F6368] font-semibold">
                    <th className="py-2.5 px-3">Procedure Cluster</th>
                    <th className="py-2.5 px-3">National DRL DAP (Gy·cm²)</th>
                    <th className="py-2.5 px-3">SMS IR Mean DAP</th>
                    <th className="py-2.5 px-3">National DRL Fluoro (min)</th>
                    <th className="py-2.5 px-3">SMS IR Mean Fluoro</th>
                    <th className="py-2.5 px-3">Compliance Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">TACE / Chemoembolization</td>
                    <td className="py-2.5 px-3 font-mono text-[#5F6368]">180.0</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#137333]">114.0</td>
                    <td className="py-2.5 px-3 font-mono text-[#5F6368]">20.0</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#137333]">16.2</td>
                    <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E6F4EA] text-[#137333]">Within DRL (Optimal)</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">TIPS / DIPS Portosystemic Shunt</td>
                    <td className="py-2.5 px-3 font-mono text-[#5F6368]">250.0</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#137333]">198.4</td>
                    <td className="py-2.5 px-3 font-mono text-[#5F6368]">35.0</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#137333]">28.5</td>
                    <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E6F4EA] text-[#137333]">Within DRL (Optimal)</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">Bronchial Artery Embolization (BAE)</td>
                    <td className="py-2.5 px-3 font-mono text-[#5F6368]">120.0</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#137333]">92.5</td>
                    <td className="py-2.5 px-3 font-mono text-[#5F6368]">18.0</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#137333]">12.8</td>
                    <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E6F4EA] text-[#137333]">Within DRL (Optimal)</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#202124]">Dialysis Fistuloplasty</td>
                    <td className="py-2.5 px-3 font-mono text-[#5F6368]">60.0</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#137333]">42.0</td>
                    <td className="py-2.5 px-3 font-mono text-[#5F6368]">12.0</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#137333]">9.4</td>
                    <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E6F4EA] text-[#137333]">Within DRL (Optimal)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 3: PUBLISHABLE COHORT EXPORTER */}
      {/* ========================================================================= */}
      {activeTab === "cohort" && (
        <div className="space-y-4">
          {/* Controls Bar & One-Click Exporters */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-4 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-3">
            <div className="relative w-full lg:max-w-xs">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6368]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Research ID, procedure, indication..."
                className="w-full bg-[#F1F3F4] text-xs rounded-full pl-9 pr-4 py-2 border border-transparent focus:border-[#1A73E8] focus:bg-[#FFFFFF] focus:outline-none"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-xs font-semibold text-[#3C4043] focus:outline-none"
              >
                <option value="all">All Anatomic Categories</option>
                <option value="Visceral Embolization">Visceral Embolization</option>
                <option value="Venous & Dialysis">Venous &amp; Dialysis</option>
                <option value="Peripheral Arterial">Peripheral Arterial</option>
                <option value="Hepatobiliary / Non-Vascular">Hepatobiliary / Non-Vasc</option>
                <option value="Aortic">Aortic (EVAR)</option>
                <option value="Percutaneous Biopsy">Percutaneous Biopsy</option>
              </select>

              <select
                value={successFilter}
                onChange={(e) => setSuccessFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-xs font-semibold text-[#3C4043] focus:outline-none"
              >
                <option value="all">All Outcomes</option>
                <option value="success">Technical Success (100%)</option>
                <option value="complication">Reported Complication</option>
              </select>

              <select
                value={schemeFilter}
                onChange={(e) => setSchemeFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-xs font-semibold text-[#3C4043] focus:outline-none"
              >
                <option value="all">All Schemes</option>
                <option value="MAAY">MAAY (Chiranjeevi)</option>
                <option value="RGHS">RGHS</option>
              </select>
            </div>

            {/* 1-Click Export Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleDownloadCsv}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-bold shadow-xs cursor-pointer"
                title="Download de-identified dataset as CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV</span>
              </button>

              <button
                onClick={handleDownloadJson}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] cursor-pointer"
                title="Download de-identified dataset as JSON"
              >
                <Download className="w-3.5 h-3.5 text-[#5F6368]" />
                <span>JSON</span>
              </button>

              <button
                onClick={handleCopyPublicationTable}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#137333] cursor-pointer"
                title="Copy formatted Table 1 in markdown for journal manuscripts"
              >
                {copiedTable ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTable ? "Copied!" : "Copy Table 1"}</span>
              </button>
            </div>
          </div>

          {/* De-Identified Cohort Data Table */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl overflow-hidden shadow-xs">
            <div className="p-3.5 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between text-xs font-semibold text-[#5F6368]">
              <span>Showing {filteredCohort.length} of {PUBLISHABLE_REGISTRY_COHORT.length} De-Identified Research Records</span>
              <span className="text-[11px] text-[#137333] font-bold">Safe Harbor Compliant • Zero Direct PHI</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-[#DADCE0] bg-[#FFFFFF] text-[#5F6368] font-semibold">
                    <th className="py-2.5 px-3">Research ID</th>
                    <th className="py-2.5 px-3">Demographics</th>
                    <th className="py-2.5 px-3">Procedure Name &amp; Code</th>
                    <th className="py-2.5 px-3">Clinical Indication</th>
                    <th className="py-2.5 px-3">Timeframe</th>
                    <th className="py-2.5 px-3">Fluoro (min)</th>
                    <th className="py-2.5 px-3">DAP (Gy·cm²)</th>
                    <th className="py-2.5 px-3">Contrast (mL)</th>
                    <th className="py-2.5 px-3">CIRSE Outcome</th>
                    <th className="py-2.5 px-3">Scheme</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  {filteredCohort.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="py-8 text-center text-[#5F6368]">
                        No records match the current filters.
                      </td>
                    </tr>
                  ) : (
                    filteredCohort.map((r) => (
                      <tr key={r.researchId} className="hover:bg-[#F8F9FA] transition-colors">
                        <td className="py-2.5 px-3 font-mono font-bold text-[#1A73E8]">
                          {r.researchId}
                        </td>
                        <td className="py-2.5 px-3 text-[#3C4043]">
                          {r.ageGroup} / {r.gender}
                        </td>
                        <td className="py-2.5 px-3">
                          <p className="font-semibold text-[#202124]">{r.procedureName}</p>
                          <span className="text-[10px] font-mono text-[#5F6368]">[{r.procedureCode}]</span>
                        </td>
                        <td className="py-2.5 px-3 text-[#5F6368] max-w-xs truncate" title={r.indication}>
                          {r.indication}
                        </td>
                        <td className="py-2.5 px-3 text-[#3C4043] font-medium">
                          {r.quarterYear}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-[#202124]">
                          {r.fluoroTimeMinutes.toFixed(1)}
                        </td>
                        <td className="py-2.5 px-3 font-mono font-semibold text-[#1A73E8]">
                          {r.dapGyCm2.toFixed(1)}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-[#202124]">
                          {r.contrastVolumeMl}
                        </td>
                        <td className="py-2.5 px-3">
                          {r.technicalSuccess ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#137333] bg-[#E6F4EA] px-2 py-0.5 rounded">
                              <CheckCircle2 className="w-3 h-3" />
                              Success
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C5221F] bg-[#FCE8E6] px-2 py-0.5 rounded">
                              <AlertTriangle className="w-3 h-3" />
                              Failed
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]">
                            {r.schemeCoverage}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
