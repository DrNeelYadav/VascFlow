"use client";

import React from "react";
import { Search, Download, ArrowUpDown, X } from "lucide-react";
import { WARD_FILTER_OPTIONS } from "./wardFilterOptions";
import type { useLogbookDesk } from "./useLogbookDesk";

interface LogbookFilterBarProps {
  desk: ReturnType<typeof useLogbookDesk>;
}

export function LogbookFilterBar({ desk }: LogbookFilterBarProps) {
  return (
    <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-md p-3 rounded-xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xs space-y-3">
      {/* Search Input & Action Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="relative w-full sm:flex-1">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={desk.searchQuery}
            onChange={(e) => desk.setSearchQuery(e.target.value)}
            placeholder="Search 1,090 DSA records by Patient Name, CR Number, Diagnosis, or Procedure..."
            className="w-full pl-8.5 pr-8 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors"
          />
          {desk.searchQuery && (
            <button
              onClick={() => desk.setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
          <button
            type="button"
            onClick={desk.toggleSortOrder}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <ArrowUpDown className="w-3 h-3 text-slate-400" />
            <span className="capitalize">{desk.sortOrder} First</span>
          </button>

          <button
            type="button"
            onClick={desk.handleExportCsv}
            disabled={desk.isExporting}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{desk.isExporting ? "Exporting..." : "Export CSV"}</span>
          </button>
        </div>
      </div>

      {/* Filter Row: Ward Dropdown, Scheme & Year Filters */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Ward Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Ward:</span>
            <select
              value={desk.wardFilter}
              onChange={(e) => desk.setWardFilter(e.target.value)}
              className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
            >
              {WARD_FILTER_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Scheme Pills */}
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1">Scheme:</span>
            {["ALL", "MAAY", "RGHS", "PMJAY", "CASH"].map((scheme) => (
              <button
                key={scheme}
                onClick={() => desk.setSchemeFilter(scheme)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  desk.schemeFilter === scheme
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {scheme}
              </button>
            ))}
          </div>
        </div>

        {/* Year Pills */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Year:</span>
          {["ALL", "2026", "2025", "2024"].map((year) => (
            <button
              key={year}
              onClick={() => desk.setYearFilter(year)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer ${
                desk.yearFilter === year
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
