"use client";

import React, { useState, useMemo, useEffect } from "react";
import { generateSafeCsv } from "@vascule/utils/sanitizers";
import {
  RealSmsPatientCase,
  REAL_SMS_PATIENT_REGISTRY,
} from "../../lib/realData/smsCathLabRealData";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../lib/realData/smsMasterAnalysisCases";
import { GOLD_STANDARD_1090_CASES } from "../../lib/realData/goldStandard1090Cases";
import {
  Search,
  Download,
  X,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
} from "lucide-react";

import {
  WARD_FILTER_OPTIONS,
  matchWardFilter,
  getWardBadgeStyle,
} from "./wardFilterOptions";

// ============================================================================
// MAIN COMPONENT: CATH-LAB MASTER REGISTRY
// Enterprise Compact Standard: 28px controls, 32px table rows, 360px detail drawer
// ============================================================================
export default function CathLabMasterLogbookPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [schemeFilter, setSchemeFilter] = useState<string>("ALL");
  const [yearFilter, setYearFilter] = useState<string>("ALL");
  const [wardFilter, setWardFilter] = useState<string>("ALL");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 50;

  // Selected patient for slide-over drawer
  const [selectedCase, setSelectedCase] = useState<RealSmsPatientCase | null>(null);
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCase(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Primary dataset: All 1,090 Audited Gold-Standard SMS Cases
  const allCases: RealSmsPatientCase[] = useMemo(() => {
    return GOLD_STANDARD_1090_CASES?.length > 0
      ? GOLD_STANDARD_1090_CASES
      : AUTHENTIC_SMS_MASTER_CASES;
  }, []);

  // Filtered dataset
  const filteredCases = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allCases.filter((c) => {
      // Text search
      if (q) {
        const match =
          c.patientName.toLowerCase().includes(q) ||
          String(c.dsaNo).includes(q) ||
          c.crNumber.toLowerCase().includes(q) ||
          c.procedureName.toLowerCase().includes(q) ||
          c.diagnosis.toLowerCase().includes(q) ||
          c.unit.toLowerCase().includes(q) ||
          (c.primaryOperator && c.primaryOperator.toLowerCase().includes(q));
        if (!match) return false;
      }

      // Scheme filter
      if (schemeFilter !== "ALL" && c.schemeType !== schemeFilter) return false;

      // Ward filter
      if (wardFilter !== "ALL" && !matchWardFilter(c.unit, wardFilter)) return false;

      // Year filter
      if (yearFilter !== "ALL") {
        if (!c.date || !c.date.includes(yearFilter)) return false;
      }

      return true;
    });
  }, [allCases, searchQuery, schemeFilter, wardFilter, yearFilter]);

  // Sorted dataset
  const sortedCases = useMemo(() => {
    return [...filteredCases].sort((a, b) => {
      const numA = Number(a.dsaNo) || 0;
      const numB = Number(b.dsaNo) || 0;
      return sortOrder === "newest" ? numB - numA : numA - numB;
    });
  }, [filteredCases, sortOrder]);

  // Paginated dataset
  const totalPages = Math.max(1, Math.ceil(sortedCases.length / pageSize));
  const paginatedCases = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedCases.slice(start, start + pageSize);
  }, [sortedCases, currentPage, pageSize]);

  // Export CSV
  const handleExportCsv = () => {
    const headers = [
      "IR No",
      "Date",
      "Patient Name",
      "Age",
      "Gender",
      "CR Number",
      "Scheme",
      "Procedure",
      "Diagnosis",
      "Ward / Unit",
      "Radiation Dose",
      "Primary Operator",
    ];
    const rows = sortedCases.map((c) => [
      c.dsaNo,
      c.date,
      c.patientName,
      c.age,
      c.gender,
      c.crNumber,
      c.schemeType,
      c.procedureName,
      c.diagnosis,
      c.unit,
      c.radiationDose,
      c.primaryOperator || "",
    ]);
    const csvContent = generateSafeCsv(headers, rows);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `SMS_Jaipur_IR_Master_Registry_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Copy patient summary to clipboard
  const handleCopySummary = (c: RealSmsPatientCase) => {
    const text = `SMS JAIPUR CATH-LAB RECORD
IR No: #${c.dsaNo} | Date: ${c.date}
Patient: ${c.patientName} (${c.age}y / ${c.gender})
CR / UHID: ${c.crNumber} | Ward: ${c.unit}
Scheme: ${c.schemeType}
Procedure: ${c.procedureName}
Diagnosis: ${c.diagnosis}
Radiation Dose: ${c.radiationDose}
Operator: ${c.primaryOperator || "IR Team"}`;
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="space-y-3 max-w-[1700px] mx-auto pb-12 select-none">
      {/* Compact Header & Controls Toolbar */}
      <div className="card-compact p-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Title & Count */}
        <div className="flex items-center gap-2.5">
          <h1 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Cath-Lab Master Registry
          </h1>
          <span className="badge-compact">
            {sortedCases.length.toLocaleString()} of {allCases.length.toLocaleString()} Cases
          </span>
        </div>

        {/* Toolbar: Search, Filters, Export Button (Strict 28px height) */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Live Search */}
          <div className="relative min-w-[200px] max-w-[280px]">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search name, IR#, UHID, procedure..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="input-compact pl-7 w-full"
            />
          </div>

          {/* Year Filter */}
          <select
            value={yearFilter}
            onChange={(e) => {
              setYearFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="select-compact w-24"
            aria-label="Filter by year"
          >
            <option value="ALL">All Years</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          {/* Scheme Filter */}
          <select
            value={schemeFilter}
            onChange={(e) => {
              setSchemeFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="select-compact w-24"
            aria-label="Filter by scheme"
          >
            <option value="ALL">All Schemes</option>
            <option value="MAAY">MAAY</option>
            <option value="RGHS">RGHS</option>
            <option value="PAID">General / Paid</option>
          </select>

          {/* Ward Filter */}
          <select
            value={wardFilter}
            onChange={(e) => {
              setWardFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="select-compact w-32"
            aria-label="Filter by ward"
          >
            {WARD_FILTER_OPTIONS.map((w) => (
              <option key={w.value} value={w.value}>
                {w.label}
              </option>
            ))}
          </select>

          {/* Sort Order Toggle */}
          <button
            type="button"
            onClick={() => setSortOrder((o) => (o === "newest" ? "oldest" : "newest"))}
            className="btn btn-secondary"
            title={`Sorting: ${sortOrder === "newest" ? "Newest First" : "Oldest First"}`}
          >
            <ArrowUpDown className="w-3 h-3 text-slate-500" />
            <span>{sortOrder === "newest" ? "Newest" : "Oldest"}</span>
          </button>

          {/* Action Budget: Single Export CSV Button */}
          <button
            type="button"
            onClick={handleExportCsv}
            className="btn btn-primary"
            title="Download CSV report of filtered cases"
          >
            <Download className="w-3 h-3" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* High-Density Data Grid (Strict 32px rows) */}
      <div className="card-compact overflow-hidden">
        <div className="overflow-x-auto max-h-[calc(100vh-210px)] overflow-y-auto" style={{ WebkitOverflowScrolling: "touch" }}>
          <table className="table-compact">
            <thead>
              <tr>
                <th className="w-16 text-center"># IR</th>
                <th className="w-24">Date</th>
                <th className="min-w-[180px] max-w-[240px]">Patient Name</th>
                <th className="w-32 font-mono">UHID / CR</th>
                <th className="min-w-[200px]">Procedure</th>
                <th className="w-28">Ward</th>
                <th className="w-20 text-center">Scheme</th>
                <th className="w-24 text-center">Dose / mL</th>
                <th className="w-32">Operator</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCases.length === 0 ? (
                <tr>
                  <td colSpan={9} className="h-16 text-center text-xs text-slate-400 font-mono">
                    No matching clinical records found.
                  </td>
                </tr>
              ) : (
                paginatedCases.map((c, idx) => {
                  const isSelected = selectedCase?.dsaNo === c.dsaNo;
                  const wardStyle = getWardBadgeStyle(c.unit);
                  return (
                    <tr
                      key={`${c.dsaNo}-${idx}`}
                      onClick={() => setSelectedCase(c)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-slate-100 dark:bg-slate-800 font-medium"
                          : ""
                      }`}
                    >
                      {/* # IR */}
                      <td className="text-center font-mono font-bold text-slate-900 dark:text-slate-100">
                        #{c.dsaNo}
                      </td>

                      {/* Date */}
                      <td className="text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                        {c.date}
                      </td>

                      {/* Patient Name & Demographics */}
                      <td className="truncate">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {c.patientName}
                        </span>
                        <span className="ml-1.5 text-[10px] text-slate-500 font-mono">
                          {c.age}y/{c.gender?.[0] || "U"}
                        </span>
                      </td>

                      {/* UHID / CR */}
                      <td className="font-mono text-slate-600 dark:text-slate-400 text-[11px] truncate">
                        {c.crNumber}
                      </td>

                      {/* Procedure */}
                      <td className="truncate text-slate-800 dark:text-slate-200" title={c.procedureName}>
                        {c.procedureName}
                      </td>

                      {/* Ward */}
                      <td className="truncate">
                        <span
                          className={`inline-block px-1.5 py-0.2 rounded text-[10px] truncate max-w-[100px] border ${wardStyle.bg} ${wardStyle.text} ${wardStyle.border}`}
                          title={c.unit}
                        >
                          {c.unit}
                        </span>
                      </td>

                      {/* Scheme */}
                      <td className="text-center">
                        <span className="badge-compact text-[9px]">
                          {c.schemeType}
                        </span>
                      </td>

                      {/* Dose / Contrast */}
                      <td className="text-center font-mono text-[11px] text-slate-600 dark:text-slate-400">
                        {c.radiationDose || "—"}
                      </td>

                      {/* Operator */}
                      <td className="truncate text-[11px] text-slate-600 dark:text-slate-400">
                        {c.primaryOperator || "IR Team"}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Compact Pagination Bar */}
        <div className="h-8 px-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
          <div>
            Showing {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, sortedCases.length)} of {sortedCases.length}
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="p-1 rounded text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="px-1 text-slate-800 dark:text-slate-200 font-medium">
              {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="p-1 rounded text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-Over Right Detail Drawer (360px) */}
      {selectedCase && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-2xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <aside className="fixed inset-y-0 right-0 z-50 w-full sm:w-[360px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between p-4 overflow-y-auto">
            <div className="space-y-4">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="badge-compact font-bold text-slate-900 dark:text-slate-100">
                    DSA #{selectedCase.dsaNo}
                  </span>
                  <span className="ml-2 text-xs text-slate-500 font-mono">
                    {selectedCase.date}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  className="p-1 rounded text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                  aria-label="Close detail drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Patient Demographics */}
              <div className="space-y-1">
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {selectedCase.patientName}
                </h2>
                <div className="text-xs text-slate-500 font-mono">
                  {selectedCase.age} Years • {selectedCase.gender} • CR: {selectedCase.crNumber}
                </div>
              </div>

              {/* Clinical Details */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Procedure</span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {selectedCase.procedureName}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Diagnosis / Indication</span>
                  <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {selectedCase.diagnosis}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Admitting Ward</span>
                    <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                      {selectedCase.unit}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Scheme Tariff</span>
                    <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                      {selectedCase.schemeType}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Radiation Dose</span>
                    <p className="font-mono text-slate-800 dark:text-slate-200 mt-0.5">
                      {selectedCase.radiationDose || "—"}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Operator</span>
                    <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                      {selectedCase.primaryOperator || "IR Team"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => handleCopySummary(selectedCase)}
                className="btn btn-primary w-full"
              >
                {hasCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied Summary</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Case Summary</span>
                  </>
                )}
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
