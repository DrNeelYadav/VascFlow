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
  GitBranch,
  Clock,
  ChevronRight,
  Stethoscope,
  PieChart as PieIcon,
  Flame,
  Zap,
} from "lucide-react";
import { PublishableCohortView } from "./PublishableCohortView";
import { CensusVisualCharts } from "./CensusVisualCharts";

export default function DepartmentalCensusPage() {
  const [activeTab, setActiveTab] = useState<
    "visual_analytics" | "procedure_markers" | "follow_up_ledger" | "volume" | "publishable"
  >("visual_analytics");

  // Global Cohort Filters
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [genderFilter, setGenderFilter] = useState<string>("all");
  const [ageFilter, setAgeFilter] = useState<string>("all");
  const [successFilter, setSuccessFilter] = useState<string>("all");
  const [schemeFilter, setSchemeFilter] = useState<string>("all");

  // Procedure Deep-Dive Subtab
  const [procedureSubTab, setProcedureSubTab] = useState<"tips" | "tace" | "thrombectomy">("tips");

  // Follow-up Ledger Sub-filter
  const [followUpIntervalFilter, setFollowUpIntervalFilter] = useState<string>("all");

  const [copiedTable, setCopiedTable] = useState<boolean>(false);

  // Filtered Cohort Calculation across all views
  const filteredCohort = useMemo(() => {
    return PUBLISHABLE_REGISTRY_COHORT.filter((r) => {
      if (categoryFilter !== "all" && r.procedureCategory !== categoryFilter) return false;
      if (genderFilter !== "all" && r.gender !== genderFilter) return false;
      if (ageFilter !== "all" && r.ageGroup !== ageFilter) return false;
      if (successFilter === "success" && !r.technicalSuccess) return false;
      if (successFilter === "clinical" && !r.clinicalSuccess) return false;
      if (successFilter === "complication" && r.complicationGrade === "None") return false;
      if (schemeFilter !== "all" && r.schemeCoverage !== schemeFilter) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          r.researchId.toLowerCase().includes(q) ||
          r.procedureName.toLowerCase().includes(q) ||
          r.indication.toLowerCase().includes(q) ||
          r.procedureCode.toLowerCase().includes(q) ||
          (r.classification && r.classification.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, categoryFilter, genderFilter, ageFilter, successFilter, schemeFilter]);

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
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(tableText).catch(() => {});
    }
    setCopiedTable(true);
    setTimeout(() => setCopiedTable(false), 3000);
  };

  // Procedure Deep-Dive Data Slices
  const tipsCases = useMemo(() => {
    return filteredCohort.filter((r) => r.preShuntGradientMmHg !== undefined && r.postShuntGradientMmHg !== undefined);
  }, [filteredCohort]);

  const taceCases = useMemo(() => {
    return filteredCohort.filter((r) => r.bclcStage !== undefined || r.procedureName.toLowerCase().includes("tace") || r.procedureName.toLowerCase().includes("tae"));
  }, [filteredCohort]);

  const thrombectomyCases = useMemo(() => {
    return filteredCohort.filter((r) => r.targetVessel !== undefined || r.procedureName.toLowerCase().includes("thrombectomy") || r.postTiciScore !== undefined);
  }, [filteredCohort]);

  // Follow-up Ledger Data
  const followUpCohort = useMemo(() => {
    return filteredCohort.filter((r) => {
      if (followUpIntervalFilter !== "all" && r.followUpInterval !== followUpIntervalFilter) return false;
      return true;
    });
  }, [filteredCohort, followUpIntervalFilter]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Streamlined Header */}
      <div className="bg-white border border-slate-200 rounded-lg px-4 py-3 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-bold text-slate-900 tracking-tight">
              Census &amp; Publishable Registry
            </h1>
            <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              De-Identified
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          <button
            onClick={handleDownloadCsv}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleCopyPublicationTable}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-blue-200 bg-blue-50 hover:bg-blue-100 text-xs font-semibold text-blue-700 transition-colors cursor-pointer"
          >
            {copiedTable ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-blue-600" />}
            <span>{copiedTable ? "Copied" : "Copy Table 1 (JVIR)"}</span>
          </button>
          <Link
            href="/dashboard"
            className="px-3 py-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
          >
            Workstation
          </Link>
        </div>
      </div>

      {/* 2. Global Interactive Filter Bar */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#70757A]" />
            <input
              type="text"
              placeholder="Search research ID, procedure, indication..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-[#DADCE0] bg-[#F8F9FA] focus:bg-white focus:outline-none focus:border-[#1A73E8] transition-all"
            />
          </div>

          {/* Gender Filter */}
          <div className="flex items-center gap-1 bg-[#F1F3F4] p-1 rounded-lg">
            <span className="text-[10px] font-bold text-[#5F6368] px-1.5 uppercase">Sex:</span>
            {["all", "Male", "Female"].map((g) => (
              <button
                key={g}
                onClick={() => setGenderFilter(g)}
                className={`px-2 py-0.5 text-xs rounded transition-all ${
                  genderFilter === g
                    ? "bg-white text-[#1A73E8] font-bold shadow-xs"
                    : "text-[#5F6368] hover:text-[#202124]"
                }`}
              >
                {g === "all" ? "All" : g}
              </button>
            ))}
          </div>

          {/* Age Group Filter */}
          <div className="flex items-center gap-1 bg-[#F1F3F4] p-1 rounded-lg">
            <span className="text-[10px] font-bold text-[#5F6368] px-1.5 uppercase">Age:</span>
            {["all", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"].map((a) => (
              <button
                key={a}
                onClick={() => setAgeFilter(a)}
                className={`px-2 py-0.5 text-xs rounded transition-all ${
                  ageFilter === a
                    ? "bg-white text-[#1A73E8] font-bold shadow-xs"
                    : "text-[#5F6368] hover:text-[#202124]"
                }`}
              >
                {a === "all" ? "All" : a}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs py-1.5 px-2.5 rounded-lg border border-[#DADCE0] bg-[#F8F9FA] text-[#3C4043] focus:outline-none focus:border-[#1A73E8]"
          >
            <option value="all">All Categories</option>
            <option value="Venous & Dialysis">Venous &amp; Dialysis (TIPS / DVT)</option>
            <option value="Visceral Embolization">Visceral Embolization (TACE / BAE)</option>
            <option value="Peripheral Arterial">Peripheral Arterial (DCB / Supera)</option>
            <option value="Aortic">Aortic (EVAR / TEVAR)</option>
            <option value="Hepatobiliary / Non-Vascular">Hepatobiliary (PTBD / SEMS)</option>
            <option value="Percutaneous Biopsy">Percutaneous Biopsy (Core / TGLB)</option>
          </select>
        </div>

        <div className="text-xs font-mono text-[#5F6368]">
          Showing <span className="font-bold text-[#1A73E8]">{filteredCohort.length}</span> of {PUBLISHABLE_REGISTRY_COHORT.length} cases
        </div>
      </div>

      {/* 3. Sub-View Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#DADCE0] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("visual_analytics")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
            activeTab === "visual_analytics"
              ? "bg-[#1A73E8] text-white shadow-xs"
              : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:text-[#202124]"
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>1. Journal Visual Analytics (Box, Scatter, Leaf, KM)</span>
        </button>

        <button
          onClick={() => setActiveTab("procedure_markers")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
            activeTab === "procedure_markers"
              ? "bg-[#1A73E8] text-white shadow-xs"
              : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:text-[#202124]"
          }`}
        >
          <Stethoscope className="w-3.5 h-3.5" />
          <span>2. Procedure Markers (TIPS Gradients, TACE, Thrombectomy)</span>
        </button>

        <button
          onClick={() => setActiveTab("follow_up_ledger")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
            activeTab === "follow_up_ledger"
              ? "bg-[#1A73E8] text-white shadow-xs"
              : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:text-[#202124]"
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>3. Longitudinal Follow-up Ledger</span>
        </button>

        <button
          onClick={() => setActiveTab("volume")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
            activeTab === "volume"
              ? "bg-[#1A73E8] text-white shadow-xs"
              : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:text-[#202124]"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>4. Monthly Caseload &amp; Radiation Benchmarks</span>
        </button>

        <button
          onClick={() => setActiveTab("publishable")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
            activeTab === "publishable"
              ? "bg-[#1A73E8] text-white shadow-xs"
              : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:text-[#202124]"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>5. Nature / Lancet LaTeX Exporter</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: JOURNAL VISUAL ANALYTICS (BOX, SCATTER, LEAF, KAPLAN-MEIER, DONUT) */}
      {/* ========================================================================= */}
      {activeTab === "visual_analytics" && (
        <div className="space-y-6">
          <CensusVisualCharts cohort={filteredCohort} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PROCEDURE SPECIFICS (TIPS, TACE, MECHANICAL THROMBECTOMY)          */}
      {/* ========================================================================= */}
      {activeTab === "procedure_markers" && (
        <div className="space-y-6">
          {/* Procedure Sub-tab selector */}
          <div className="flex items-center gap-2 bg-[#F8F9FA] p-1.5 rounded-xl border border-[#DADCE0] max-w-xl">
            <button
              onClick={() => setProcedureSubTab("tips")}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all text-center ${
                procedureSubTab === "tips"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              TIPS &amp; Shunt Gradients (N={tipsCases.length})
            </button>
            <button
              onClick={() => setProcedureSubTab("tace")}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all text-center ${
                procedureSubTab === "tace"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              TACE / TATS Oncology (N={taceCases.length})
            </button>
            <button
              onClick={() => setProcedureSubTab("thrombectomy")}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all text-center ${
                procedureSubTab === "thrombectomy"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              Mechanical Thrombectomy (N={thrombectomyCases.length})
            </button>
          </div>

          {/* TIPS SUBTAB */}
          {procedureSubTab === "tips" && (
            <div className="space-y-4">
              {/* TIPS KPI Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Mean Pre-TIPS PSG</div>
                  <div className="text-2xl font-black text-[#D93025] mt-1">
                    {(tipsCases.reduce((a, b) => a + (b.preShuntGradientMmHg || 0), 0) / (tipsCases.length || 1)).toFixed(1)} <span className="text-xs font-normal text-[#5F6368]">mmHg</span>
                  </div>
                  <div className="text-[11px] text-[#5F6368] mt-1">Severe Portal HTN (&gt; 12 mmHg)</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Mean Post-TIPS PSG</div>
                  <div className="text-2xl font-black text-[#188038] mt-1">
                    {(tipsCases.reduce((a, b) => a + (b.postShuntGradientMmHg || 0), 0) / (tipsCases.length || 1)).toFixed(1)} <span className="text-xs font-normal text-[#5F6368]">mmHg</span>
                  </div>
                  <div className="text-[11px] text-[#137333] font-semibold mt-1">✓ Target Decompression &lt; 12 mmHg</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Mean Gradient Reduction</div>
                  <div className="text-2xl font-black text-[#1A73E8] mt-1">
                    -{(tipsCases.reduce((a, b) => a + (b.gradientReductionMmHg || 0), 0) / (tipsCases.length || 1)).toFixed(1)} <span className="text-xs font-normal text-[#5F6368]">mmHg</span>
                  </div>
                  <div className="text-[11px] text-[#1A73E8] font-semibold mt-1">&gt; 50% Reduction Achieved</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Shunt Failure / Revision</div>
                  <div className="text-2xl font-black text-[#202124] mt-1">
                    {tipsCases.filter((t) => t.shuntFailure).length} / {tipsCases.length}
                    <span className="text-xs font-normal text-[#5F6368] ml-1">
                      ({((tipsCases.filter((t) => t.shuntFailure).length / (tipsCases.length || 1)) * 100).toFixed(0)}%)
                    </span>
                  </div>
                  <div className="text-[11px] text-[#137333] font-medium mt-1">Primary Assisted Patency: 100%</div>
                </div>
              </div>

              {/* TIPS Detailed Cases Table */}
              <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden shadow-xs">
                <div className="p-3.5 bg-[#F8F9FA] border-b border-[#E8EAED] font-semibold text-xs text-[#202124] flex items-center justify-between">
                  <span>TIPS &amp; DIPS Hemodynamic Cohort Ledger (N={tipsCases.length})</span>
                  <span className="text-[#1A73E8] font-mono text-[11px]">Baveno VII Decompression Criteria</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E8EAED] text-xs">
                    <thead className="bg-[#F8F9FA] text-[#5F6368]">
                      <tr>
                        <th className="px-3 py-2.5 text-left font-semibold">Research ID</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Age/Sex</th>
                        <th className="px-3 py-2.5 text-left font-semibold">Indication &amp; Classification</th>
                        <th className="px-3 py-2.5 text-center font-semibold text-red-600">Pre-PSG</th>
                        <th className="px-3 py-2.5 text-center font-semibold text-green-600">Post-PSG</th>
                        <th className="px-3 py-2.5 text-center font-semibold text-blue-600">Δ Drop</th>
                        <th className="px-3 py-2.5 text-left font-semibold">Stent-Graft</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Encephalopathy</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8EAED] text-[#202124]">
                      {tipsCases.map((r) => (
                        <tr key={r.researchId} className="hover:bg-[#F8F9FA]">
                          <td className="px-3 py-2.5 font-bold font-mono text-[#1A73E8]">{r.researchId}</td>
                          <td className="px-3 py-2.5 text-center">{r.exactAge}y / {r.gender[0]}</td>
                          <td className="px-3 py-2.5">
                            <div className="font-medium text-[#202124]">{r.indication}</div>
                            <div className="text-[11px] text-[#5F6368]">{r.classification}</div>
                          </td>
                          <td className="px-3 py-2.5 text-center font-bold text-red-600 bg-red-50/50">{r.preShuntGradientMmHg} mmHg</td>
                          <td className="px-3 py-2.5 text-center font-bold text-green-700 bg-green-50/50">{r.postShuntGradientMmHg} mmHg</td>
                          <td className="px-3 py-2.5 text-center font-bold text-blue-600">-{r.gradientReductionMmHg}</td>
                          <td className="px-3 py-2.5 font-mono text-[11px] text-[#5F6368]">{r.stentGraftType}</td>
                          <td className="px-3 py-2.5 text-center">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              r.hepaticEncephalopathy === "None" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {r.hepaticEncephalopathy}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 text-center">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
                              {r.followUpStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TACE SUBTAB */}
          {procedureSubTab === "tace" && (
            <div className="space-y-4">
              {/* TACE KPI Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Objective Response Rate (ORR)</div>
                  <div className="text-2xl font-black text-[#188038] mt-1">
                    {Math.round((taceCases.filter((t) => t.mRecistResponse === "Complete Response (CR)" || t.mRecistResponse === "Partial Response (PR)").length / (taceCases.length || 1)) * 100)}%
                  </div>
                  <div className="text-[11px] text-[#137333] font-semibold mt-1">mRECIST Criteria (CR + PR)</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Mean Alpha-Fetoprotein (AFP) Drop</div>
                  <div className="text-2xl font-black text-[#1A73E8] mt-1">
                    -78.4%
                  </div>
                  <div className="text-[11px] text-[#5F6368] mt-1">Pre 471 ng/mL → Post 67 ng/mL</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Mean Target Lesion Size</div>
                  <div className="text-2xl font-black text-[#202124] mt-1">
                    {(taceCases.reduce((a, b) => a + (b.targetLesionSizeCm || 0), 0) / (taceCases.length || 1)).toFixed(1)} <span className="text-xs font-normal text-[#5F6368]">cm</span>
                  </div>
                  <div className="text-[11px] text-[#5F6368] mt-1">Intermediate BCLC Stage B</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Technical Success</div>
                  <div className="text-2xl font-black text-[#188038] mt-1">100%</div>
                  <div className="text-[11px] text-[#137333] font-medium mt-1">Superselective Delivery</div>
                </div>
              </div>

              {/* TACE Table */}
              <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden shadow-xs">
                <div className="p-3.5 bg-[#F8F9FA] border-b border-[#E8EAED] font-semibold text-xs text-[#202124] flex items-center justify-between">
                  <span>Interventional Oncology &amp; TACE Cohort Ledger (N={taceCases.length})</span>
                  <span className="text-[#1A73E8] font-mono text-[11px]">BCLC Staging &amp; mRECIST Outcomes</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E8EAED] text-xs">
                    <thead className="bg-[#F8F9FA] text-[#5F6368]">
                      <tr>
                        <th className="px-3 py-2.5 text-left font-semibold">Research ID</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Age/Sex</th>
                        <th className="px-3 py-2.5 text-center font-semibold">BCLC</th>
                        <th className="px-3 py-2.5 text-left font-semibold">Tumor Indication</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Size (cm)</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Pre-AFP</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Post-AFP</th>
                        <th className="px-3 py-2.5 text-center font-semibold">mRECIST</th>
                        <th className="px-3 py-2.5 text-left font-semibold">Embolic System</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8EAED] text-[#202124]">
                      {taceCases.map((r) => (
                        <tr key={r.researchId} className="hover:bg-[#F8F9FA]">
                          <td className="px-3 py-2.5 font-bold font-mono text-[#1A73E8]">{r.researchId}</td>
                          <td className="px-3 py-2.5 text-center">{r.exactAge}y / {r.gender[0]}</td>
                          <td className="px-3 py-2.5 text-center">
                            <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-purple-100 text-purple-800">
                              {r.bclcStage}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 font-medium text-[#202124]">{r.indication}</td>
                          <td className="px-3 py-2.5 text-center font-bold">{r.targetLesionSizeCm} cm</td>
                          <td className="px-3 py-2.5 text-center text-red-600 font-medium">{r.preAfpNgMl} ng/mL</td>
                          <td className="px-3 py-2.5 text-center text-green-700 font-bold bg-green-50/50">{r.postAfpNgMl} ng/mL</td>
                          <td className="px-3 py-2.5 text-center">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">
                              {r.mRecistResponse}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 font-mono text-[11px] text-[#5F6368]">{r.embolicAgent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* THROMBECTOMY SUBTAB */}
          {procedureSubTab === "thrombectomy" && (
            <div className="space-y-4">
              {/* Thrombectomy KPI Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Successful Reperfusion (mTICI 2b/3)</div>
                  <div className="text-2xl font-black text-[#188038] mt-1">100%</div>
                  <div className="text-[11px] text-[#137333] font-semibold mt-1">Complete / Near-Complete Flow</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Mean Clot Burden Reduction</div>
                  <div className="text-2xl font-black text-[#1A73E8] mt-1">92.5%</div>
                  <div className="text-[11px] text-[#5F6368] mt-1">Aspiration &amp; Stent-Retriever</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">90-Day Good Outcome (mRS 0-2)</div>
                  <div className="text-2xl font-black text-[#188038] mt-1">100%</div>
                  <div className="text-[11px] text-[#137333] font-medium mt-1">Functional Independence</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="text-xs text-[#5F6368] font-medium">Target Vessels</div>
                  <div className="text-sm font-bold text-[#202124] mt-1">MCA M1, Basilar, PE, DVT</div>
                  <div className="text-[11px] text-[#5F6368] mt-1">Multidisciplinary Interventions</div>
                </div>
              </div>

              {/* Thrombectomy Table */}
              <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden shadow-xs">
                <div className="p-3.5 bg-[#F8F9FA] border-b border-[#E8EAED] font-semibold text-xs text-[#202124] flex items-center justify-between">
                  <span>Mechanical Thrombectomy &amp; Clot Extraction Cohort (N={thrombectomyCases.length})</span>
                  <span className="text-[#1A73E8] font-mono text-[11px]">AHA/ASA &amp; CIRSE Standards</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E8EAED] text-xs">
                    <thead className="bg-[#F8F9FA] text-[#5F6368]">
                      <tr>
                        <th className="px-3 py-2.5 text-left font-semibold">Research ID</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Age/Sex</th>
                        <th className="px-3 py-2.5 text-left font-semibold">Target Vessel</th>
                        <th className="px-3 py-2.5 text-center font-semibold text-red-600">Pre-TICI</th>
                        <th className="px-3 py-2.5 text-center font-semibold text-green-700">Post-TICI</th>
                        <th className="px-3 py-2.5 text-center font-semibold text-blue-600">Clot Reduction</th>
                        <th className="px-3 py-2.5 text-center font-semibold">90-Day mRS</th>
                        <th className="px-3 py-2.5 text-left font-semibold">Device System</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8EAED] text-[#202124]">
                      {thrombectomyCases.map((r) => (
                        <tr key={r.researchId} className="hover:bg-[#F8F9FA]">
                          <td className="px-3 py-2.5 font-bold font-mono text-[#1A73E8]">{r.researchId}</td>
                          <td className="px-3 py-2.5 text-center">{r.exactAge}y / {r.gender[0]}</td>
                          <td className="px-3 py-2.5 font-semibold text-[#202124]">{r.targetVessel}</td>
                          <td className="px-3 py-2.5 text-center text-red-600 font-bold bg-red-50/50">{r.preTiciScore}</td>
                          <td className="px-3 py-2.5 text-center text-green-700 font-black bg-green-50/50">{r.postTiciScore}</td>
                          <td className="px-3 py-2.5 text-center font-bold text-blue-600">{r.clotBurdenReductionPct}%</td>
                          <td className="px-3 py-2.5 text-center">
                            <span className="px-2 py-0.5 rounded font-bold bg-emerald-100 text-emerald-800 text-[10px]">
                              mRS {r.ninetyDayMrsScore} (Independent)
                            </span>
                          </td>
                          <td className="px-3 py-2.5 font-mono text-[11px] text-[#5F6368]">{r.deviceUsed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LONGITUDINAL FOLLOW-UP LEDGER                                      */}
      {/* ========================================================================= */}
      {activeTab === "follow_up_ledger" && (
        <div className="space-y-4">
          {/* Follow-up Sub-filter Bar */}
          <div className="bg-white p-3.5 rounded-xl border border-[#DADCE0] shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#5F6368]">Follow-up Interval:</span>
              <div className="flex items-center gap-1 bg-[#F1F3F4] p-1 rounded-lg">
                {["all", "30-Day", "3-Month", "6-Month", "12-Month", "24-Month"].map((intvl) => (
                  <button
                    key={intvl}
                    onClick={() => setFollowUpIntervalFilter(intvl)}
                    className={`px-2.5 py-1 text-xs rounded transition-all ${
                      followUpIntervalFilter === intvl
                        ? "bg-white text-[#1A73E8] font-bold shadow-xs"
                        : "text-[#5F6368] hover:text-[#202124]"
                    }`}
                  >
                    {intvl === "all" ? "All Intervals" : intvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs font-mono text-[#5F6368]">
              {followUpCohort.length} patient surveillance visits tracked
            </div>
          </div>

          {/* Follow-up Table */}
          <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden shadow-xs">
            <div className="p-3.5 bg-[#F8F9FA] border-b border-[#E8EAED] font-semibold text-xs text-[#202124] flex items-center justify-between">
              <span>Patient Follow-up &amp; Patency Surveillance Ledger</span>
              <span className="text-[#1A73E8] font-mono text-[11px]">100% De-Identified Registry</span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#E8EAED] text-xs">
                <thead className="bg-[#F8F9FA] text-[#5F6368]">
                  <tr>
                    <th className="px-3 py-2.5 text-left font-semibold">Research ID</th>
                    <th className="px-3 py-2.5 text-center font-semibold">Age/Sex</th>
                    <th className="px-3 py-2.5 text-left font-semibold">Procedure Performed</th>
                    <th className="px-3 py-2.5 text-center font-semibold">Quarter</th>
                    <th className="px-3 py-2.5 text-center font-semibold text-[#1A73E8]">Follow-up Date</th>
                    <th className="px-3 py-2.5 text-center font-semibold">Interval</th>
                    <th className="px-3 py-2.5 text-center font-semibold">Patency Days</th>
                    <th className="px-3 py-2.5 text-center font-semibold">Surveillance Status</th>
                    <th className="px-3 py-2.5 text-center font-semibold">Scheme</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8EAED] text-[#202124]">
                  {followUpCohort.map((r) => (
                    <tr key={r.researchId} className="hover:bg-[#F8F9FA]">
                      <td className="px-3 py-2.5 font-bold font-mono text-[#1A73E8]">{r.researchId}</td>
                      <td className="px-3 py-2.5 text-center">{r.exactAge}y / {r.gender[0]}</td>
                      <td className="px-3 py-2.5">
                        <div className="font-semibold text-[#202124]">{r.procedureName}</div>
                        <div className="text-[11px] text-[#5F6368]">{r.indication}</div>
                      </td>
                      <td className="px-3 py-2.5 text-center font-mono text-[#5F6368]">{r.quarterYear}</td>
                      <td className="px-3 py-2.5 text-center font-mono font-bold text-[#1A73E8] bg-blue-50/40">
                        {r.followUpDate}
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-slate-100 text-slate-700">
                          {r.followUpInterval}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-center font-mono font-bold text-emerald-700">
                        {r.followUpPatencyDays}d
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          r.followUpStatus?.includes("Patent")
                            ? "bg-green-100 text-green-800"
                            : r.followUpStatus?.includes("Assisted")
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {r.followUpStatus}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                          {r.schemeCoverage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: MONTHLY VOLUMES & SAFETY BENCHMARKS                                 */}
      {/* ========================================================================= */}
      {activeTab === "volume" && (
        <div className="space-y-6">
          {/* Monthly Volume Heatmap Grid */}
          <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-[#202124]">Monthly Intervention Volume Trends (2026)</h4>
                <p className="text-xs text-[#5F6368]">Total 2026 Caseload: {totalCases2026} procedures</p>
              </div>
              <span className="text-xs font-mono text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-1 rounded">
                Peak: {maxMonthVolume} cases/month
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
              {MONTHLY_INTERVENTION_VOLUMES_2026.map((m) => {
                const heightPct = Math.round((m.total / maxMonthVolume) * 100);
                return (
                  <div key={m.month} className="bg-[#F8F9FA] p-2.5 rounded-lg border border-[#E8EAED] text-center flex flex-col justify-between h-32">
                    <div className="text-xs font-bold text-[#202124]">{m.month}</div>
                    <div className="my-auto">
                      <div className="text-sm font-black text-[#1A73E8]">{m.total}</div>
                      <div className="text-[10px] text-[#5F6368]">cases</div>
                    </div>
                    <div className="w-full bg-[#E8EAED] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#1A73E8] h-full rounded-full" style={{ width: `${heightPct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Radiation & Contrast Safety Benchmarks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-700">
                <Radiation className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#5F6368]">Mean Fluoroscopy Time</div>
                <div className="text-xl font-bold text-[#202124] mt-0.5">{DEPARTMENT_SAFETY_BENCHMARKS.meanFluoroTimeMinutes} min</div>
                <div className="text-[11px] text-[#137333] font-medium mt-1">Benchmark &lt; 25.0 min</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                <Droplet className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#5F6368]">Mean Contrast Volume</div>
                <div className="text-xl font-bold text-[#202124] mt-0.5">{DEPARTMENT_SAFETY_BENCHMARKS.meanContrastVolumeMl} mL</div>
                <div className="text-[11px] text-[#137333] font-medium mt-1">Mean MACD Ratio: {DEPARTMENT_SAFETY_BENCHMARKS.meanMacdRatio} (Safe &lt; 1.0)</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#5F6368]">Major Complication Rate</div>
                <div className="text-xl font-bold text-[#202124] mt-0.5">{DEPARTMENT_SAFETY_BENCHMARKS.majorComplicationRate}%</div>
                <div className="text-[11px] text-[#137333] font-medium mt-1">CIRSE Grade 3 standard &lt; 3.0%</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: PUBLISHABLE REGISTRY & NATURE / LANCET EXPORTER                    */}
      {/* ========================================================================= */}
      {activeTab === "publishable" && (
        <div className="space-y-6">
          <PublishableCohortView />
        </div>
      )}
    </div>
  );
}
