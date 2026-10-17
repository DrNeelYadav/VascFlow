"use client";

import React from "react";
import { Scissors } from "lucide-react";

interface PageBreakDividerProps {
  label?: string;
  pageNumber?: number;
  totalPages?: number;
}

export const PageBreakDivider: React.FC<PageBreakDividerProps> = ({
  label,
  pageNumber = 2,
  totalPages = 2,
}) => {
  return (
    <>
      {/* On-screen visual separator */}
      <div className="print:hidden my-6 select-none flex items-center justify-center gap-3">
        <div className="flex-1 border-t-2 border-dashed border-slate-300 dark:border-slate-700" />
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[10.5px] font-bold text-slate-600 dark:text-slate-300 shadow-2xs">
          <Scissors className="w-3 h-3 text-slate-400" />
          <span>
            Page Break &bull; Page {pageNumber} of {totalPages}
            {label ? ` (${label})` : ""}
          </span>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-slate-300 dark:border-slate-700" />
      </div>

      {/* Robust CSS print page break rule for Chromium & Firefox */}
      <div
        className="hidden print:block print-break-before page-break"
        style={{
          breakBefore: "page",
          pageBreakBefore: "always",
          clear: "both",
          height: "1px",
          margin: 0,
          padding: 0,
          visibility: "hidden",
        }}
      />
    </>
  );
};
