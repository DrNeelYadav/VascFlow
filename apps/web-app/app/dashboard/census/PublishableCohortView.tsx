"use client";

import React, { useState, useMemo } from "react";
import {
  Download,
  Filter,
  Search,
  FileCode,
  FileText,
  BarChart3,
  Check,
} from "lucide-react";
import {
  ResearchCohortPatient,
  formatNatureLatexTable,
  formatNatureMarkdownTable,
  computeCohortSummary,
} from "../../lib/census/natureTableFormatter";
import { PUBLISHABLE_REGISTRY_COHORT } from "../../lib/censusEngine";

// Seed research cohort
const SEED_COHORT: ResearchCohortPatient[] = PUBLISHABLE_REGISTRY_COHORT.map((r) => ({
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
}));

export function PublishableCohortView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedQuarter, setSelectedQuarter] = useState<string>("ALL");
  const [selectedAgeDecile, setSelectedAgeDecile] = useState<string>("ALL");
  const [selectedSuccess, setSelectedSuccess] = useState<string>("ALL");
  const [selectedCirse, setSelectedCirse] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedFormat, setCopiedFormat] = useState<"latex" | "markdown" | null>(null);

  // Filter cohort dynamically based on interactive query builder
  const filteredCohort = useMemo(() => {
    return SEED_COHORT.filter((p) => {
      if (selectedCategory !== "ALL" && p.procedureCategory !== selectedCategory) return false;
      if (selectedQuarter !== "ALL" && p.quarterYear !== selectedQuarter) return false;
      if (selectedAgeDecile !== "ALL" && p.ageBinned !== selectedAgeDecile) return false;
      if (selectedSuccess === "SUCCESS" && !p.technicalSuccess) return false;
      if (selectedSuccess === "FAILURE" && p.technicalSuccess) return false;

      if (selectedCirse !== "ALL") {
        if (selectedCirse === "NONE" && p.cirseGrade !== "None") return false;
        if (selectedCirse === "ANY_COMPLICATION" && p.cirseGrade === "None") return false;
        if (selectedCirse === "GRADE_1" && !p.cirseGrade.startsWith("Grade 1")) return false;
        if (selectedCirse === "GRADE_2" && !p.cirseGrade.startsWith("Grade 2")) return false;
        if (selectedCirse === "GRADE_3" && !p.cirseGrade.startsWith("Grade 3")) return false;
        if (selectedCirse === "GRADE_4" && !p.cirseGrade.startsWith("Grade 4")) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matches =
          p.researchId.toLowerCase().includes(q) ||
          p.procedureName.toLowerCase().includes(q) ||
          p.indication.toLowerCase().includes(q) ||
          p.procedureCode.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [
    selectedCategory,
    selectedQuarter,
    selectedAgeDecile,
    selectedSuccess,
    selectedCirse,
    searchQuery,
  ]);

  const summary = useMemo(() => computeCohortSummary(filteredCohort), [filteredCohort]);

  const handleCopyLatex = async () => {
    const latex = formatNatureLatexTable(filteredCohort);
    try {
      await navigator.clipboard.writeText(latex);
      setCopiedFormat("latex");
      setTimeout(() => setCopiedFormat(null), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyMarkdown = async () => {
    const md = formatNatureMarkdownTable(filteredCohort);
    try {
      await navigator.clipboard.writeText(md);
      setCopiedFormat("markdown");
      setTimeout(() => setCopiedFormat(null), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownloadFile = (format: "csv" | "json") => {
    const params = new URLSearchParams();
    params.set("format", format);
    if (selectedCategory !== "ALL") params.set("category", selectedCategory);
    if (selectedSuccess !== "ALL") params.set("technicalSuccess", selectedSuccess === "SUCCESS" ? "true" : "false");
    window.open(`/api/census/export?${params.toString()}`, "_blank");
  };

  return (
    <div className="flex flex-col gap-5 max-w-7xl mx-auto font-sans text-[#202124]">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-[#DADCE0]">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-[#202124]">
                Research Registry &amp; Table 1 Pipeline
              </h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                HIPAA Safe Harbor
              </span>
            </div>
            <p className="text-xs text-[#5F6368] mt-0.5">
              SMS Medical College IR Research Division • Publication Table 1 Generator
            </p>
          </div>
        </div>

        {/* Export Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLatex}
            className="px-3 py-1.5 rounded-md bg-white hover:bg-gray-50 text-[#3C4043] border border-[#DADCE0] text-xs font-medium flex items-center gap-1.5 transition"
          >
            {copiedFormat === "latex" ? <Check className="w-3.5 h-3.5 text-[#137333]" /> : <FileCode className="w-3.5 h-3.5" />}
            <span>{copiedFormat === "latex" ? "Copied!" : "LaTeX"}</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="px-3 py-1.5 rounded-md bg-white hover:bg-gray-50 text-[#3C4043] border border-[#DADCE0] text-xs font-medium flex items-center gap-1.5 transition"
          >
            {copiedFormat === "markdown" ? <Check className="w-3.5 h-3.5 text-[#137333]" /> : <FileText className="w-3.5 h-3.5" />}
            <span>{copiedFormat === "markdown" ? "Copied!" : "Markdown"}</span>
          </button>

          <button
            onClick={() => handleDownloadFile("csv")}
            className="px-3 py-1.5 rounded-md bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-medium flex items-center gap-1.5 transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CSV</span>
          </button>
        </div>
      </div>

      {/* Metrics Summary Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
          <span className="text-xs text-[#5F6368]">Total Cohort</span>
          <div className="text-lg font-semibold font-mono text-[#202124] mt-0.5">{summary.totalPatients}</div>
          <span className="text-[11px] text-[#5F6368]">De-Identified</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
          <span className="text-xs text-[#5F6368]">Technical Success</span>
          <div className="text-lg font-semibold font-mono text-[#137333] mt-0.5">
            {summary.technicalSuccessRate}%
          </div>
          <span className="text-[11px] text-[#5F6368]">SIR Target &gt;90%</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
          <span className="text-xs text-[#5F6368]">Mean Fluoro Time</span>
          <div className="text-lg font-semibold font-mono text-[#202124] mt-0.5">
            {summary.meanFluoroTime} min
          </div>
          <span className="text-[11px] text-[#5F6368]">Benchmark &lt;25m</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
          <span className="text-xs text-[#5F6368]">Mean DAP</span>
          <div className="text-lg font-semibold font-mono text-[#202124] mt-0.5">
            {summary.meanDap}
          </div>
          <span className="text-[11px] text-[#5F6368]">Gy·cm²</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
          <span className="text-xs text-[#5F6368]">CIRSE Grade 3+</span>
          <div className="text-lg font-semibold font-mono text-[#C5221F] mt-0.5">
            {summary.cirseBreakdown.grade3 + summary.cirseBreakdown.grade4}
          </div>
          <span className="text-[11px] text-[#5F6368]">Major Complications</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
          <span className="text-xs text-[#5F6368]">Mean Contrast</span>
          <div className="text-lg font-semibold font-mono text-[#202124] mt-0.5">
            {summary.meanContrast} mL
          </div>
          <span className="text-[11px] text-[#5F6368]">Within MACD</span>
        </div>
      </div>

      {/* Cohort Query Builder & Filter Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex flex-col gap-3.5 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-medium text-[#3C4043] flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-gray-500" />
            Cohort Filters
          </span>
          <span className="text-[11px] text-[#5F6368] font-mono">
            {filteredCohort.length} of {SEED_COHORT.length} Records
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {/* Category Filter */}
          <div>
            <label className="text-[11px] text-[#5F6368] mb-1 block">Procedure Cohort</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-[#DADCE0] rounded-md px-2 py-1 text-xs text-[#202124] outline-none focus:border-blue-500"
            >
              <option value="ALL">All Cohorts</option>
              <option value="Aortic">Aortic (EVAR/TEVAR)</option>
              <option value="Visceral Embolization">Visceral Embolization (TACE/BAE)</option>
              <option value="Peripheral Arterial">Peripheral Arterial (DCB/Stent)</option>
              <option value="Venous & Dialysis">Venous & Dialysis (TIPS/DIPS)</option>
              <option value="Hepatobiliary / Non-Vascular">Hepatobiliary (PTBD/SEMS)</option>
              <option value="Percutaneous Biopsy">Percutaneous Biopsy</option>
            </select>
          </div>

          {/* Date Bounds / Quarter Filter */}
          <div>
            <label className="text-[11px] text-[#5F6368] mb-1 block">Quarter-Year</label>
            <select
              value={selectedQuarter}
              onChange={(e) => setSelectedQuarter(e.target.value)}
              className="w-full bg-white border border-[#DADCE0] rounded-md px-2 py-1 text-xs text-[#202124] outline-none focus:border-blue-500"
            >
              <option value="ALL">All Quarters</option>
              <option value="Q1 2026">Q1 2026</option>
              <option value="Q2 2026">Q2 2026</option>
              <option value="Q3 2026">Q3 2026</option>
              <option value="Q4 2025">Q4 2025</option>
            </select>
          </div>

          {/* Age Decile Filter */}
          <div>
            <label className="text-[11px] text-[#5F6368] mb-1 block">Age Decile</label>
            <select
              value={selectedAgeDecile}
              onChange={(e) => setSelectedAgeDecile(e.target.value)}
              className="w-full bg-white border border-[#DADCE0] rounded-md px-2 py-1 text-xs text-[#202124] outline-none focus:border-blue-500"
            >
              <option value="ALL">All Ages</option>
              <option value="20-29">20 - 29</option>
              <option value="30-39">30 - 39</option>
              <option value="40-49">40 - 49</option>
              <option value="50-59">50 - 59</option>
              <option value="60-69">60 - 69</option>
              <option value="70-79">70 - 79</option>
              <option value="80+">80+ (Capped at 89)</option>
            </select>
          </div>

          {/* Technical Success */}
          <div>
            <label className="text-[11px] text-[#5F6368] mb-1 block">Success</label>
            <select
              value={selectedSuccess}
              onChange={(e) => setSelectedSuccess(e.target.value)}
              className="w-full bg-white border border-[#DADCE0] rounded-md px-2 py-1 text-xs text-[#202124] outline-none focus:border-blue-500"
            >
              <option value="ALL">All Outcomes</option>
              <option value="SUCCESS">Success Only</option>
              <option value="FAILURE">Complications / Failure</option>
            </select>
          </div>

          {/* CIRSE Complication Grade Filter */}
          <div>
            <label className="text-[11px] text-[#5F6368] mb-1 block">CIRSE Classification</label>
            <select
              value={selectedCirse}
              onChange={(e) => setSelectedCirse(e.target.value)}
              className="w-full bg-white border border-[#DADCE0] rounded-md px-2 py-1 text-xs text-[#202124] outline-none focus:border-blue-500"
            >
              <option value="ALL">All (Grades 1–6 + None)</option>
              <option value="NONE">No Complications</option>
              <option value="ANY_COMPLICATION">Any Complication</option>
              <option value="GRADE_1">Grade 1 (Minor)</option>
              <option value="GRADE_2">Grade 2 (Moderate)</option>
              <option value="GRADE_3">Grade 3 (Major)</option>
              <option value="GRADE_4">Grade 4 (Critical)</option>
            </select>
          </div>
        </div>

        {/* Free Text Search Bar */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by ID, procedure name, indication..."
            className="w-full bg-white border border-[#DADCE0] focus:border-blue-500 rounded-md pl-8 pr-3 py-1 text-xs text-[#202124] outline-none"
          />
        </div>
      </div>

      {/* Dynamic Table 1: Baseline Patient Characteristics */}
      <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden">
        <div className="px-4 py-2.5 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <h2 className="text-xs font-semibold text-[#202124]">
            Table 1: Baseline Demographics &amp; Procedural Outcomes
          </h2>
          <span className="text-[11px] font-mono text-[#5F6368]">
            N = {summary.totalPatients} Patients
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#3C4043]">
            <thead className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368]">
              <tr>
                <th className="px-4 py-2">Parameter</th>
                <th className="px-4 py-2">Department Cohort</th>
                <th className="px-4 py-2 text-right">Benchmark</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0] font-mono text-xs">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-sans font-medium text-[#202124]">Sex, Male / Female (%)</td>
                <td className="px-4 py-2">
                  {summary.males} ({summary.malePercentage}%) / {summary.females} ({summary.femalePercentage}%)
                </td>
                <td className="px-4 py-2 text-right text-[#5F6368]">—</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-sans font-medium text-[#202124]">Technical Success Rate</td>
                <td className="px-4 py-2 text-[#137333] font-semibold">
                  {summary.technicalSuccessCount}/{summary.totalPatients} ({summary.technicalSuccessRate}%)
                </td>
                <td className="px-4 py-2 text-right text-[#137333]">&gt;90.0% (SIR)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-sans font-medium text-[#202124]">Mean Fluoroscopy Time (min)</td>
                <td className="px-4 py-2">{summary.meanFluoroTime} ± {summary.sdFluoroTime} min</td>
                <td className="px-4 py-2 text-right text-[#5F6368]">&lt;25.0 min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-sans font-medium text-[#202124]">Mean Dose Area Product (Gy·cm²)</td>
                <td className="px-4 py-2">{summary.meanDap} ± {summary.sdDap}</td>
                <td className="px-4 py-2 text-right text-[#5F6368]">&lt;250.0 Gy·cm²</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-sans font-medium text-[#202124]">Mean Contrast Volume (mL)</td>
                <td className="px-4 py-2">{summary.meanContrast} ± {summary.sdContrast} mL</td>
                <td className="px-4 py-2 text-right text-[#5F6368]">Within MACD</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-sans font-medium text-[#202124]">CIRSE Major Complications (Grade 3/4)</td>
                <td className="px-4 py-2 text-[#137333]">
                  {summary.cirseBreakdown.grade3 + summary.cirseBreakdown.grade4} (
                  {(
                    ((summary.cirseBreakdown.grade3 + summary.cirseBreakdown.grade4) /
                      (summary.totalPatients || 1)) *
                    100
                  ).toFixed(1)}
                  %)
                </td>
                <td className="px-4 py-2 text-right text-[#137333]">&lt;3.0% (CIRSE)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Individual Cohort Cases Table */}
      <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden">
        <div className="px-4 py-2.5 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <span className="text-xs font-semibold text-[#202124]">
            De-Identified Individual Cohort Cases
          </span>
          <span className="text-[11px] font-mono text-[#5F6368]">
            HIPAA Compliant
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#3C4043]">
            <thead className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368]">
              <tr>
                <th className="px-4 py-2">Research ID</th>
                <th className="px-4 py-2">Age / Sex</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Procedure Name</th>
                <th className="px-4 py-2">Quarter</th>
                <th className="px-4 py-2 text-center">Success</th>
                <th className="px-4 py-2">CIRSE Complication</th>
                <th className="px-4 py-2 text-right">DAP (Gy·cm²)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0]">
              {filteredCohort.map((p) => (
                <tr key={p.researchId} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2.5 font-mono font-medium text-[#202124]">
                    {p.researchId}
                  </td>
                  <td className="px-4 py-2.5 font-mono text-[#5F6368]">
                    {p.ageBinned} / {p.gender === "Male" ? "M" : "F"}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                      {p.procedureCategory}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="font-medium text-[#202124]">{p.procedureName}</div>
                    <div className="text-[10px] text-[#5F6368] truncate max-w-xs">
                      {p.indication}
                    </div>
                  </td>
                  <td className="px-4 py-2.5 font-mono text-[#5F6368]">{p.quarterYear}</td>
                  <td className="px-4 py-2.5 text-center">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                        p.technicalSuccess
                          ? "bg-emerald-50 text-[#137333]"
                          : "bg-red-50 text-[#C5221F]"
                      }`}
                    >
                      {p.technicalSuccess ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`text-[11px] ${
                        p.cirseGrade === "None"
                          ? "text-[#5F6368]"
                          : p.cirseGrade.includes("Grade 3")
                          ? "text-[#C5221F] font-medium"
                          : "text-[#B06000]"
                      }`}
                    >
                      {p.cirseGrade}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-[#202124]">
                    {p.dapGyCm2.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
