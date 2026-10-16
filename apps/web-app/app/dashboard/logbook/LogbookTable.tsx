"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getWardBadgeStyle } from "./wardFilterOptions";
import { LogbookDocumentCells } from "./LogbookDocumentCells";
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
        <table className="w-full text-left border-collapse min-w-[1380px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 select-none">
              <th className="py-2 px-3 w-14">DSA #</th>
              <th className="py-2 px-3 w-20">Date</th>
              <th className="py-2 px-3 w-40">Patient Name</th>
              <th className="py-2 px-3 w-32">UHID</th>
              <th className="py-2 px-3 w-28">CR / HID</th>
              <th className="py-2 px-3 w-28">Mobile #</th>
              <th className="py-2 px-3 w-20">Age / Sex</th>
              <th className="py-2 px-3 w-44">Diagnosis</th>
              <th className="py-2 px-3 w-32">CT #</th>
              <th className="py-2 px-3 w-48">Intervention Procedure</th>
              <th className="py-2 px-3 w-24">Scheme</th>
              <th className="py-2 px-3 w-24">Bill #</th>
              <th className="py-2 px-3 w-24">Ward</th>
              <th className="py-2 px-2 text-center w-20">Fluoro</th>
              <th className="py-2 px-2 text-center w-20">Op Note</th>
              <th className="py-2 px-2 text-center w-20">Discharge</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs text-slate-800 dark:text-slate-200">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <tr key={i} className="animate-pulse h-10">
                  <td colSpan={16} className="py-2 px-3">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700/60 rounded w-full" />
                  </td>
                </tr>
              ))
            ) : cases.length === 0 ? (
              <tr>
                <td colSpan={16} className="py-12 text-center text-slate-400 dark:text-slate-500">
                  No matching records found for the selected criteria.
                </td>
              </tr>
            ) : (
              cases.map((c: RealSmsPatientCase, idx: number) => {
                const wardStyle = getWardBadgeStyle(c.unit || "");
                return (
                  <tr
                    key={c.dsaNo || idx}
                    onClick={() => setSelectedCase(c)}
                    className="h-10 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                  >
                    <td className="py-1.5 px-3 font-mono font-semibold text-slate-900 dark:text-slate-100">
                      {c.dsaNo || "—"}
                    </td>
                    <td className="py-1.5 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {c.date || "—"}
                    </td>
                    <td className="py-1.5 px-3">
                      <span className="font-medium text-slate-900 dark:text-white truncate block max-w-[170px]" title={c.patientName}>
                        {c.patientName || "—"}
                      </span>
                    </td>
                    <td className="py-1.5 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {c.uhid && c.uhid !== "—" ? c.uhid : "—"}
                    </td>
                    <td className="py-1.5 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {c.crNumber && c.crNumber !== "—" ? c.crNumber : "—"}
                    </td>
                    <td className="py-1.5 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {c.contactNo && c.contactNo !== "—" ? c.contactNo : "—"}
                    </td>
                    <td className="py-1.5 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {c.age && c.age !== "—" ? `${c.age}Y` : "—"} • {c.gender === "Female" ? "F" : c.gender === "Male" ? "M" : "—"}
                    </td>
                    <td className="py-1.5 px-3 max-w-[200px]">
                      <span className="text-slate-700 dark:text-slate-300 truncate block" title={c.diagnosis || "—"}>
                        {c.diagnosis && c.diagnosis !== "—" ? c.diagnosis : "—"}
                      </span>
                    </td>
                    <td className="py-1.5 px-3 max-w-[150px]">
                      {c.ctNumber && c.ctNumber !== "—" ? (
                        <span className="inline-block text-[10px] font-mono font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-1 rounded border border-amber-200 dark:border-amber-800 truncate max-w-full" title={c.ctNumber}>
                          {c.ctNumber}
                        </span>
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600 font-mono">—</span>
                      )}
                    </td>
                    <td className="py-1.5 px-3 font-medium text-blue-700 dark:text-sky-300 truncate max-w-[210px]" title={c.procedureName || "—"}>
                      {c.procedureName && c.procedureName !== "—" ? c.procedureName : "—"}
                    </td>
                    <td className="py-1.5 px-3 whitespace-nowrap">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 w-fit inline-block">
                        {c.schemeType && c.schemeType !== "—" ? c.schemeType : "—"}
                      </span>
                    </td>
                    <td className="py-1.5 px-3 font-mono text-[10px] text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {c.billNo && c.billNo !== "—" ? c.billNo : "—"}
                    </td>
                    <td className="py-1.5 px-3 whitespace-nowrap">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium border truncate block max-w-[110px] ${wardStyle.bg} ${wardStyle.text} ${wardStyle.border}`} title={c.unit || "—"}>
                        {c.unit && c.unit !== "—" ? c.unit : "—"}
                      </span>
                    </td>

                    {/* Dedicated 3 Document & Media Columns */}
                    <LogbookDocumentCells patientCase={c} />
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
