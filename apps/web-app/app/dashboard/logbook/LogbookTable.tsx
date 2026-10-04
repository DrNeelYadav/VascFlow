"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getWardBadgeStyle } from "./wardFilterOptions";
import type { useLogbookDesk } from "./useLogbookDesk";
import type { RealSmsPatientCase } from "../../lib/realData/smsCathLabRealData";

interface LogbookTableProps {
  desk: ReturnType<typeof useLogbookDesk>;
}

export function LogbookTable({ desk }: LogbookTableProps) {
  const { cases, isLoading, totalCases, currentPage, totalPages, pageSize, setCurrentPage, setSelectedCase } = desk;

  return (
    <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xs overflow-hidden flex flex-col">
      {/* Scrollable Cath-Lab Logbook Table */}
      <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <table className="w-full text-left border-collapse min-w-[840px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 select-none">
              <th className="py-2 px-3 w-16">DSA #</th>
              <th className="py-2 px-3 w-24">Date</th>
              <th className="py-2 px-3 w-44">Patient Name</th>
              <th className="py-2 px-3 w-28">Demographics</th>
              <th className="py-2 px-3">Diagnosis / Indication</th>
              <th className="py-2 px-3">Intervention Procedure</th>
              <th className="py-2 px-3 w-24">Scheme</th>
              <th className="py-2 px-3 w-32">Admitting Ward</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs text-slate-800 dark:text-slate-200">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <tr key={i} className="animate-pulse h-8">
                  <td colSpan={8} className="py-2 px-3">
                    <div className="h-3.5 bg-slate-200 dark:bg-slate-700/60 rounded w-full" />
                  </td>
                </tr>
              ))
            ) : cases.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-12 text-center text-slate-400 dark:text-slate-500">
                  No matching cath-lab records found for the selected criteria.
                </td>
              </tr>
            ) : (
              cases.map((c: RealSmsPatientCase, idx: number) => {
                const wardStyle = getWardBadgeStyle(c.unit || "");
                return (
                  <tr
                    key={c.dsaNo || idx}
                    onClick={() => setSelectedCase(c)}
                    className="h-8 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                  >
                    <td className="py-1.5 px-3 font-mono font-semibold text-slate-900 dark:text-slate-100">
                      {c.dsaNo || "—"}
                    </td>
                    <td className="py-1.5 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                      {c.date}
                    </td>
                    <td className="py-1.5 px-3 font-medium text-slate-900 dark:text-white truncate max-w-[170px]">
                      {c.patientName}
                    </td>
                    <td className="py-1.5 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                      {c.age}Y • {c.gender === "Female" ? "F" : "M"}
                    </td>
                    <td className="py-1.5 px-3 text-slate-700 dark:text-slate-300 truncate max-w-[200px]" title={c.diagnosis}>
                      {c.diagnosis}
                    </td>
                    <td className="py-1.5 px-3 font-medium text-blue-700 dark:text-sky-300 truncate max-w-[220px]" title={c.procedureName}>
                      {c.procedureName}
                    </td>
                    <td className="py-1.5 px-3">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {c.schemeType || "MAAY"}
                      </span>
                    </td>
                    <td className="py-1.5 px-3">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium border truncate block max-w-[120px] ${wardStyle.bg} ${wardStyle.text} ${wardStyle.border}`} title={c.unit}>
                        {c.unit || "Cath Lab"}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-xs text-slate-500 dark:text-slate-400">
        <div>
          Showing <span className="font-semibold text-slate-800 dark:text-slate-200">{Math.min(totalCases, (currentPage - 1) * pageSize + 1)}</span> to{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">{Math.min(totalCases, currentPage * pageSize)}</span> of{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">{totalCases}</span> verified cases
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={currentPage <= 1 || isLoading}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-1 rounded text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-1.5 text-slate-800 dark:text-slate-200 font-medium">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            disabled={currentPage >= totalPages || isLoading}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="p-1 rounded text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
