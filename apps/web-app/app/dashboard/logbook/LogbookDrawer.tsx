"use client";

import React, { useEffect } from "react";
import { X, Copy, Check } from "lucide-react";
import type { useLogbookDesk } from "./useLogbookDesk";

interface LogbookDrawerProps {
  desk: ReturnType<typeof useLogbookDesk>;
}

export function LogbookDrawer({ desk }: LogbookDrawerProps) {
  const { selectedCase, setSelectedCase, hasCopied, handleCopySummary } = desk;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCase(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSelectedCase]);

  if (!selectedCase) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setSelectedCase(null)}
        className="fixed inset-0 z-40 bg-black/25 backdrop-blur-2xs cursor-pointer"
        aria-hidden="true"
      />

      {/* Slide-Over Drawer Panel */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full sm:w-[380px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                DSA #{selectedCase.dsaNo || "—"}
              </span>
              <span className="ml-2 text-xs text-slate-500 font-mono">
                {selectedCase.date}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedCase(null)}
              className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
              aria-label="Close detail drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Patient Demographics */}
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {selectedCase.patientName}
            </h2>
            <div className="text-xs text-slate-500 font-mono">
              {selectedCase.age} Years • {selectedCase.gender} • CR: {selectedCase.crNumber}
            </div>
          </div>

          {/* Clinical Details */}
          <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Intervention Procedure</span>
              <p className="font-semibold text-blue-700 dark:text-sky-300 mt-0.5">
                {selectedCase.procedureName}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Clinical Diagnosis</span>
              <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">
                {selectedCase.diagnosis}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Admitting Ward</span>
                <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                  {selectedCase.unit || "Cath Lab Unit"}
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Scheme Tariff</span>
                <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                  {selectedCase.schemeType || "MAAY"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Radiation Dose</span>
                <p className="font-mono text-slate-800 dark:text-slate-200 mt-0.5">
                  {selectedCase.radiationDose || "—"}
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Operating Faculty</span>
                <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                  {selectedCase.primaryOperator || "IR Faculty / Fellow"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => handleCopySummary(selectedCase)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            {hasCopied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied to Clipboard</span>
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
  );
}
