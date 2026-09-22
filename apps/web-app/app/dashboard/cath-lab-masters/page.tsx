"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  UNIFIED_CATH_LAB_DATASET,
  PARSED_2025_CASES,
  PARSED_2026_CASES,
  PARSED_ALL_DSA_CASES,
  UnifiedCathCase,
  CathProcedureCategory,
  MONTH_NAMES,
} from "../../lib/realData/unifiedCathLabDataset";
import {
  Activity,
  Layers,
  Calendar,
  Users,
  PieChart,
  BarChart3,
  TrendingUp,
  Filter,
  Search,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Stethoscope,
  ChevronRight,
  Sparkles,
  Info,
  Clock,
  Building,
  Hash,
} from "lucide-react";

const PROCEDURE_COLORS: Record<CathProcedureCategory, { bg: string; text: string; fill: string }> = {
  TACE: { bg: "bg-amber-500/10 dark:bg-amber-500/20", text: "text-amber-700 dark:text-amber-400", fill: "#f59e0b" },
  BAE: { bg: "bg-rose-500/10 dark:bg-rose-500/20", text: "text-rose-700 dark:text-rose-400", fill: "#f43f5e" },
  PTBD: { bg: "bg-emerald-500/10 dark:bg-emerald-500/20", text: "text-emerald-700 dark:text-emerald-400", fill: "#10b981" },
  VenaSeal: { bg: "bg-cyan-500/10 dark:bg-cyan-500/20", text: "text-cyan-700 dark:text-cyan-400", fill: "#06b6d4" },
  PCD: { bg: "bg-blue-500/10 dark:bg-blue-500/20", text: "text-blue-700 dark:text-blue-400", fill: "#3b82f6" },
  TIPS: { bg: "bg-purple-500/10 dark:bg-purple-500/20", text: "text-purple-700 dark:text-purple-400", fill: "#a855f7" },
  "AV Fistuloplasty": { bg: "bg-indigo-500/10 dark:bg-indigo-500/20", text: "text-indigo-700 dark:text-indigo-400", fill: "#6366f1" },
  JNA: { bg: "bg-orange-500/10 dark:bg-orange-500/20", text: "text-orange-700 dark:text-orange-400", fill: "#f97316" },
  "Varicocele Embolization": { bg: "bg-teal-500/10 dark:bg-teal-500/20", text: "text-teal-700 dark:text-teal-400", fill: "#14b8a6" },
  "Diagnostic Angiography": { bg: "bg-slate-500/10 dark:bg-slate-500/20", text: "text-slate-700 dark:text-slate-400", fill: "#64748b" },
  "Other IR": { bg: "bg-violet-500/10 dark:bg-violet-500/20", text: "text-violet-700 dark:text-violet-400", fill: "#8b5cf6" },
};

export default function CathLabMastersPage() {
  const [selectedYearFilter, setSelectedYearFilter] = useState<"COMBINED" | "2026" | "2025" | "ALL_HISTORICAL">("COMBINED");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("ALL");
  const [selectedGenderFilter, setSelectedGenderFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // 1. Filter dataset by year selection
  const rawDatasetByYear = useMemo(() => {
    switch (selectedYearFilter) {
      case "2026":
        return PARSED_2026_CASES;
      case "2025":
        return PARSED_2025_CASES;
      case "COMBINED":
        return UNIFIED_CATH_LAB_DATASET;
      case "ALL_HISTORICAL":
        return [...PARSED_ALL_DSA_CASES, ...PARSED_2026_CASES];
      default:
        return UNIFIED_CATH_LAB_DATASET;
    }
  }, [selectedYearFilter]);

  // 2. Apply interactive filters (Category, Gender, Search)
  const filteredCases = useMemo(() => {
    return rawDatasetByYear.filter((c) => {
      if (selectedCategoryFilter !== "ALL" && c.procedureCategory !== selectedCategoryFilter) return false;
      if (selectedGenderFilter !== "ALL" && c.gender !== selectedGenderFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = c.patientName.toLowerCase().includes(q);
        const matchCr = c.crNo.toLowerCase().includes(q);
        const matchProc = c.procedureName.toLowerCase().includes(q);
        const matchDiag = c.diagnosis.toLowerCase().includes(q);
        if (!matchName && !matchCr && !matchProc && !matchDiag) return false;
      }
      return true;
    });
  }, [rawDatasetByYear, selectedCategoryFilter, selectedGenderFilter, searchQuery]);

  // 3. Caseload metrics
  const totalVolume = filteredCases.length;
  const count2026 = useMemo(() => rawDatasetByYear.filter((c) => c.year === 2026).length, [rawDatasetByYear]);
  const count2025 = useMemo(() => rawDatasetByYear.filter((c) => c.year === 2025).length, [rawDatasetByYear]);

  // 4. Monthly Caseload by Year (Jan-Dec for 2025 vs 2026)
  const monthlyComparisonData = useMemo(() => {
    return MONTH_NAMES.map((mName, idx) => {
      const monthNum = idx + 1;
      const count25 = PARSED_2025_CASES.filter((c) => {
        if (selectedCategoryFilter !== "ALL" && c.procedureCategory !== selectedCategoryFilter) return false;
        if (selectedGenderFilter !== "ALL" && c.gender !== selectedGenderFilter) return false;
        return c.month === monthNum;
      }).length;

      const count26 = PARSED_2026_CASES.filter((c) => {
        if (selectedCategoryFilter !== "ALL" && c.procedureCategory !== selectedCategoryFilter) return false;
        if (selectedGenderFilter !== "ALL" && c.gender !== selectedGenderFilter) return false;
        return c.month === monthNum;
      }).length;

      return {
        monthIndex: monthNum,
        monthName: mName,
        year2025: count25,
        year2026: count26,
        total: count25 + count26,
      };
    });
  }, [selectedCategoryFilter, selectedGenderFilter]);

  const maxMonthlyVal = useMemo(() => {
    const maxVal = Math.max(...monthlyComparisonData.map((d) => Math.max(d.year2025, d.year2026)), 10);
    return Math.ceil(maxVal / 5) * 5;
  }, [monthlyComparisonData]);

  // 5. Procedure Distribution Breakdown
  const procedureBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredCases.forEach((c) => {
      counts[c.procedureCategory] = (counts[c.procedureCategory] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([cat, count]) => ({
        category: cat as CathProcedureCategory,
        count,
        percentage: totalVolume > 0 ? ((count / totalVolume) * 100).toFixed(1) : "0",
        colorInfo: PROCEDURE_COLORS[cat as CathProcedureCategory] || PROCEDURE_COLORS["Other IR"],
      }))
      .sort((a, b) => b.count - a.count);
  }, [filteredCases, totalVolume]);

  // 6. Demographics: Age Cohorts & Gender Split
  const demographicsData = useMemo(() => {
    const cohorts: Record<string, { male: number; female: number; total: number }> = {
      "<20": { male: 0, female: 0, total: 0 },
      "20-29": { male: 0, female: 0, total: 0 },
      "30-39": { male: 0, female: 0, total: 0 },
      "40-49": { male: 0, female: 0, total: 0 },
      "50-59": { male: 0, female: 0, total: 0 },
      "60-69": { male: 0, female: 0, total: 0 },
      "70+": { male: 0, female: 0, total: 0 },
    };

    let maleCount = 0;
    let femaleCount = 0;

    filteredCases.forEach((c) => {
      if (c.gender === "Female") {
        femaleCount++;
        if (cohorts[c.ageCohort]) cohorts[c.ageCohort].female++;
      } else {
        maleCount++;
        if (cohorts[c.ageCohort]) cohorts[c.ageCohort].male++;
      }
      if (cohorts[c.ageCohort]) cohorts[c.ageCohort].total++;
    });

    const maxCohortVal = Math.max(...Object.values(cohorts).map((c) => c.total), 5);

    return {
      cohorts: Object.entries(cohorts).map(([label, vals]) => ({
        cohort: label,
        male: vals.male,
        female: vals.female,
        total: vals.total,
        percentage: totalVolume > 0 ? ((vals.total / totalVolume) * 100).toFixed(1) : "0",
      })),
      maleCount,
      femaleCount,
      maleRatio: totalVolume > 0 ? ((maleCount / totalVolume) * 100).toFixed(1) : "0",
      femaleRatio: totalVolume > 0 ? ((femaleCount / totalVolume) * 100).toFixed(1) : "0",
      maxCohortVal,
    };
  }, [filteredCases, totalVolume]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 md:p-6 lg:p-8 space-y-6">
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Authentic SMS Hospital Datasets
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              Interventional Radiology Masters
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Cath-Lab Masters & Longitudinal Analytics
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-3xl">
            Ingesting verified clinical procedural discharges &amp; DSA Cath-Lab logbooks from SMS Hospital.
            Interactive comparative analysis across 2025 and 2026 caseloads, intervention categories, and patient demographics.
          </p>
        </div>

        {/* Global Action Links */}
        <div className="flex flex-wrap items-center gap-2.5 self-start md:self-center">
          <Link
            href="/dashboard/logbook"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            DSA Master Logbook
          </Link>
          <Link
            href="/dashboard/discharge"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-indigo-600" />
            Discharge Summaries
          </Link>
        </div>
      </div>

      {/* 2. Interactive KPI Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* KPI: Total Filtered Cases */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Filtered Cases</span>
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{totalVolume}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">procedures</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Real authentic clinical records
          </p>
        </div>

        {/* KPI: 2026 Discharge Volume */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">2026 Discharges</span>
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{count2026}</span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">104 SMS authentic</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Ward &amp; ICU discharge ledger
          </p>
        </div>

        {/* KPI: 2025 DSA Registry Volume */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">2025 Cath-Lab Cases</span>
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{count2025}</span>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">239 cases benchmark</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            From DSA cath-lab computer
          </p>
        </div>

        {/* KPI: Gender Ratio */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Gender Ratio</span>
            <div className="p-2 rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              {demographicsData.maleRatio}% <span className="text-sm font-normal text-slate-500">M</span>
            </span>
            <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
              {demographicsData.femaleRatio}% <span className="text-xs font-normal text-slate-500">F</span>
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {demographicsData.maleCount} Male / {demographicsData.femaleCount} Female
          </p>
        </div>
      </div>

      {/* 3. Global Filter Controls */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by patient name, CR/UHID, procedure, or diagnosis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Controls: Year Selector & Reset */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setSelectedYearFilter("COMBINED")}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedYearFilter === "COMBINED"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                2025 + 2026 ({UNIFIED_CATH_LAB_DATASET.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedYearFilter("2026")}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedYearFilter === "2026"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                2026 Only ({PARSED_2026_CASES.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedYearFilter("2025")}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedYearFilter === "2025"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                2025 Only ({PARSED_2025_CASES.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedYearFilter("ALL_HISTORICAL")}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedYearFilter === "ALL_HISTORICAL"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                All Years ({PARSED_ALL_DSA_CASES.length + PARSED_2026_CASES.length})
              </button>
            </div>

            {/* Gender filter */}
            <select
              value={selectedGenderFilter}
              onChange={(e) => setSelectedGenderFilter(e.target.value)}
              aria-label="Filter by gender"
              className="text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Genders</option>
              <option value="Male">Male Only</option>
              <option value="Female">Female Only</option>
            </select>

            {(selectedCategoryFilter !== "ALL" || selectedGenderFilter !== "ALL" || searchQuery.trim() !== "") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryFilter("ALL");
                  setSelectedGenderFilter("ALL");
                  setSearchQuery("");
                }}
                className="text-xs text-rose-600 dark:text-rose-400 hover:underline px-2 py-1"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-medium text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Procedures:
          </span>
          <button
            type="button"
            onClick={() => setSelectedCategoryFilter("ALL")}
            className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
              selectedCategoryFilter === "ALL"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            All Procedures
          </button>
          {Object.keys(PROCEDURE_COLORS).map((catKey) => {
            const isSelected = selectedCategoryFilter === catKey;
            const style = PROCEDURE_COLORS[catKey as CathProcedureCategory];
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setSelectedCategoryFilter(isSelected ? "ALL" : catKey)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "ring-2 ring-indigo-500 bg-indigo-500 text-white"
                    : `${style.bg} ${style.text} hover:opacity-80`
                }`}
              >
                {catKey}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Interactive Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CHART 1: Longitudinal Caseload (Monthly 2025 vs 2026 SVG Chart) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Caseload Volume Over Time (Monthly 2025 vs 2026)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dual-year grouped comparison. Hover over any month to inspect exact monthly volume.
                </p>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-indigo-500 inline-block" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">2025 Cases</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">2026 Discharges</span>
                </div>
              </div>
            </div>

            {/* Interactive SVG Grouped Bar Chart */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px] h-64 relative">
                <svg viewBox="0 0 720 220" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                    const y = 180 - ratio * 150;
                    const val = Math.round(maxMonthlyVal * ratio);
                    return (
                      <g key={idx}>
                        <line
                          x1={40}
                          y1={y}
                          x2={710}
                          y2={y}
                          stroke="currentColor"
                          className="text-slate-100 dark:text-slate-800 stroke-[1]"
                          strokeDasharray={idx === 0 ? "none" : "3,3"}
                        />
                        <text
                          x={32}
                          y={y + 4}
                          textAnchor="end"
                          className="text-[10px] fill-slate-400 font-mono select-none"
                        >
                          {val}
                        </text>
                      </g>
                    );
                  })}

                  {/* Bars for Each Month */}
                  {monthlyComparisonData.map((d, i) => {
                    const groupWidth = 52;
                    const barWidth = 16;
                    const groupX = 50 + i * groupWidth;
                    const h25 = (d.year2025 / maxMonthlyVal) * 150;
                    const h26 = (d.year2026 / maxMonthlyVal) * 150;
                    const isHovered = hoveredMonth === d.monthIndex;

                    return (
                      <g
                        key={d.monthIndex}
                        onMouseEnter={() => setHoveredMonth(d.monthIndex)}
                        onMouseLeave={() => setHoveredMonth(null)}
                        className="cursor-pointer transition-opacity"
                        opacity={hoveredMonth !== null && !isHovered ? 0.45 : 1}
                      >
                        {/* Hover Backing Pill */}
                        {isHovered && (
                          <rect
                            x={groupX - 6}
                            y={20}
                            width={barWidth * 2 + 16}
                            height={165}
                            rx={6}
                            className="fill-slate-100 dark:fill-slate-800/80 transition-all"
                          />
                        )}

                        {/* 2025 Bar (Indigo) */}
                        <rect
                          x={groupX}
                          y={180 - h25}
                          width={barWidth}
                          height={Math.max(h25, 2)}
                          rx={3}
                          className="fill-indigo-500 hover:fill-indigo-600 transition-colors"
                        />
                        {d.year2025 > 0 && (
                          <text
                            x={groupX + barWidth / 2}
                            y={180 - h25 - 4}
                            textAnchor="middle"
                            className="text-[9px] fill-indigo-600 dark:fill-indigo-400 font-bold select-none"
                          >
                            {d.year2025}
                          </text>
                        )}

                        {/* 2026 Bar (Emerald) */}
                        <rect
                          x={groupX + barWidth + 4}
                          y={180 - h26}
                          width={barWidth}
                          height={Math.max(h26, 2)}
                          rx={3}
                          className="fill-emerald-500 hover:fill-emerald-600 transition-colors"
                        />
                        {d.year2026 > 0 && (
                          <text
                            x={groupX + barWidth + 4 + barWidth / 2}
                            y={180 - h26 - 4}
                            textAnchor="middle"
                            className="text-[9px] fill-emerald-600 dark:fill-emerald-400 font-bold select-none"
                          >
                            {d.year2026}
                          </text>
                        )}

                        {/* Month Label */}
                        <text
                          x={groupX + barWidth + 2}
                          y={198}
                          textAnchor="middle"
                          className={`text-[11px] select-none font-medium ${
                            isHovered
                              ? "fill-indigo-600 dark:fill-indigo-400 font-bold"
                              : "fill-slate-500 dark:fill-slate-400"
                          }`}
                        >
                          {d.monthName}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Hover detail tooltip strip */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            {hoveredMonth ? (
              <div className="flex items-center gap-4">
                <span className="font-semibold text-slate-900 dark:text-white">
                  Month of {MONTH_NAMES[hoveredMonth - 1]}:
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  2025: {monthlyComparisonData[hoveredMonth - 1]?.year2025} cases
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  2026: {monthlyComparisonData[hoveredMonth - 1]?.year2026} cases
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Combined: {monthlyComparisonData[hoveredMonth - 1]?.total} procedures
                </span>
              </div>
            ) : (
              <span className="flex items-center gap-1.5 text-slate-400">
                <Info className="w-3.5 h-3.5" /> Hover on any monthly bar to inspect case breakdown
              </span>
            )}
            <span className="font-mono text-[11px] text-slate-400">SMS Jaipur IR Registry</span>
          </div>
        </div>

        {/* CHART 2: Procedure Distribution Breakdown */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Procedure Distribution
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Categorized intervention volume &amp; share
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {procedureBreakdown.length} Types
              </span>
            </div>

            {/* List with Progress Bars */}
            <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
              {procedureBreakdown.map((item) => {
                const isHovered = hoveredCategory === item.category;
                const isSelected = selectedCategoryFilter === item.category;
                return (
                  <div
                    key={item.category}
                    onMouseEnter={() => setHoveredCategory(item.category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onClick={() =>
                      setSelectedCategoryFilter(isSelected ? "ALL" : item.category)
                    }
                    className={`p-2 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? "bg-indigo-50 dark:bg-indigo-950/40 ring-1 ring-indigo-500"
                        : isHovered
                        ? "bg-slate-50 dark:bg-slate-800/60"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: item.colorInfo.fill }}
                        />
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white font-mono">
                          {item.count}
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">
                          ({item.percentage}%)
                        </span>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.colorInfo.fill,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Click any procedure to filter</span>
            {selectedCategoryFilter !== "ALL" && (
              <button
                type="button"
                onClick={() => setSelectedCategoryFilter("ALL")}
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 5. Demographics Section: Age Cohorts & Gender Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Age Cohorts Distribution */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                Demographics: Age Cohorts
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Patient volume segmented by standard clinical decades
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-indigo-500 inline-block" /> Male
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-pink-500 inline-block" /> Female
              </span>
            </div>
          </div>

          {/* Age Cohorts Horizontal Bar Chart */}
          <div className="space-y-3">
            {demographicsData.cohorts.map((cohort) => {
              const maleWidth = demographicsData.maxCohortVal > 0 ? (cohort.male / demographicsData.maxCohortVal) * 100 : 0;
              const femaleWidth = demographicsData.maxCohortVal > 0 ? (cohort.female / demographicsData.maxCohortVal) * 100 : 0;

              return (
                <div key={cohort.cohort} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 w-12 font-mono">
                      {cohort.cohort}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                      {cohort.total} cases ({cohort.percentage}%) &bull; {cohort.male}M / {cohort.female}F
                    </span>
                  </div>
                  {/* Stacked bar */}
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-indigo-500 transition-all duration-300"
                      style={{ width: `${maleWidth}%` }}
                      title={`Male: ${cohort.male}`}
                    />
                    <div
                      className="h-full bg-pink-500 transition-all duration-300"
                      style={{ width: `${femaleWidth}%` }}
                      title={`Female: ${cohort.female}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gender Ratio Card */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-1">
              <PieChart className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              Gender Distribution
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Longitudinal Interventional Radiology sex ratio split
            </p>

            {/* Visual Donut / Radial Representation */}
            <div className="flex flex-col items-center justify-center p-4">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background Circle */}
                  <path
                    className="text-slate-100 dark:text-slate-800 stroke-current"
                    strokeWidth="3.8"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Male Segment (Indigo) */}
                  <path
                    className="text-indigo-500 stroke-current transition-all duration-500"
                    strokeDasharray={`${demographicsData.maleRatio}, 100`}
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Female Segment (Pink) */}
                  <path
                    className="text-pink-500 stroke-current transition-all duration-500"
                    strokeDasharray={`${demographicsData.femaleRatio}, 100`}
                    strokeDashoffset={`-${demographicsData.maleRatio}`}
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                {/* Center text */}
                <div className="absolute text-center">
                  <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                    {totalVolume}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-medium">TOTAL CASES</span>
                </div>
              </div>

              {/* Legends with counts */}
              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-3 text-center">
                  <span className="text-xs text-indigo-700 dark:text-indigo-400 font-medium block">
                    Male Patients
                  </span>
                  <span className="text-xl font-bold text-indigo-950 dark:text-indigo-200 font-mono">
                    {demographicsData.maleCount}
                  </span>
                  <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold block">
                    {demographicsData.maleRatio}%
                  </span>
                </div>
                <div className="bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/50 rounded-xl p-3 text-center">
                  <span className="text-xs text-pink-700 dark:text-pink-400 font-medium block">
                    Female Patients
                  </span>
                  <span className="text-xl font-bold text-pink-950 dark:text-pink-200 font-mono">
                    {demographicsData.femaleCount}
                  </span>
                  <span className="text-[11px] text-pink-600 dark:text-pink-400 font-semibold block">
                    {demographicsData.femaleRatio}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 text-center">
            Consistent with typical hepatic, biliary, &amp; vascular IR referral profiles at SMS Hospital.
          </div>
        </div>
      </div>

      {/* 6. Authentic Clinical Case Ledger / Searchable Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Integrated Cath-Lab Procedure Ledger ({filteredCases.length} Cases)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Showing authentic procedural records across 2025 and 2026. Filtered in real-time.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Source: SMS Jaipur Cath-Lab &amp; Discharge Archive
          </span>
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3 px-4">Date / Year</th>
                <th className="py-3 px-4">Patient Name &amp; CR</th>
                <th className="py-3 px-4">Age / Sex</th>
                <th className="py-3 px-4">Procedure Classification</th>
                <th className="py-3 px-4">Procedure Details &amp; Diagnosis</th>
                <th className="py-3 px-4">Ward / Unit</th>
                <th className="py-3 px-4">Source Record</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {filteredCases.slice(0, 50).map((c) => {
                const colorInfo = PROCEDURE_COLORS[c.procedureCategory] || PROCEDURE_COLORS["Other IR"];
                return (
                  <tr
                    key={c.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-850/50 transition-colors"
                  >
                    <td className="py-3 px-4 font-mono whitespace-nowrap">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {c.dateDisplay}
                      </div>
                      <span className="text-[10px] text-slate-400">Year {c.year}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {c.patientName}
                      </div>
                      <span className="font-mono text-[10px] text-slate-400">
                        CR: {c.crNo || "N/A"}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="font-mono font-medium">{c.age} Y</span>
                      <span className="ml-1 text-[11px] font-semibold text-slate-500">
                        ({c.gender === "Male" ? "M" : "F"})
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${colorInfo.bg} ${colorInfo.text}`}
                      >
                        {c.procedureCategory}
                      </span>
                    </td>
                    <td className="py-3 px-4 max-w-xs truncate">
                      <div className="font-medium text-slate-900 dark:text-slate-100 truncate" title={c.procedureName}>
                        {c.procedureName}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate" title={c.diagnosis}>
                        {c.diagnosis || "Interventional procedure"}
                      </div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-slate-500 dark:text-slate-400">
                      {c.unitOrWard}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium font-mono ${
                          c.source === "2026_DISCHARGES"
                            ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                            : "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                        }`}
                      >
                        {c.source === "2026_DISCHARGES" ? "2026 Discharge" : "DSA Logbook"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredCases.length > 50 && (
            <div className="p-3 text-center bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-500 border-t border-slate-100 dark:border-slate-800">
              Showing top 50 of {filteredCases.length} filtered cases. Use the search bar above to pinpoint specific patients or procedures.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
