"use client";

import React from "react";
import { FileText, Printer, ShieldCheck } from "lucide-react";
import { INITIAL_RIS_WORKLIST_CASES } from "../worklist/worklistData";
import type { useConsentStudio } from "./useConsentStudio";

interface ConsentHeaderProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function ConsentHeader({ studio }: ConsentHeaderProps) {
  return (
    <div className="print:hidden flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl border border-zinc-200 dark:border-slate-800 shadow-2xs">
      <div className="flex items-center gap-3.5">
        <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Informed Consent &amp; Nursing Pre-Op
            </h1>
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 dark:bg-slate-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-slate-700">
              Bilingual (हिंदी / English)
            </span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Department of Interventional Radiology, SMS Medical College &amp; Hospitals, Jaipur
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {/* Tab Switcher */}
        <div className="flex rounded-lg border border-zinc-200 dark:border-slate-700 p-0.5 bg-zinc-100 dark:bg-slate-800 text-xs font-medium">
          <button
            type="button"
            onClick={() => studio.setActiveTab("CONSENT")}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              studio.activeTab === "CONSENT"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
            }`}
          >
            Informed Consent
          </button>
          <button
            type="button"
            onClick={() => studio.setActiveTab("PREPARATION")}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
              studio.activeTab === "PREPARATION"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Nursing Pre-Op</span>
          </button>
        </div>

        {/* Quick Pre-fill from Worklist */}
        <select
          onChange={(e) => studio.handleLoadPresetPatient(e.target.value)}
          defaultValue=""
          className="text-xs border border-zinc-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 bg-white dark:bg-slate-900 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="" disabled>Pre-fill from Worklist</option>
          {INITIAL_RIS_WORKLIST_CASES.map((c) => (
            <option key={c.caseId} value={c.caseId}>
              {c.patientName} ({c.procedureName})
            </option>
          ))}
        </select>

        {/* Print Button */}
        <button
          type="button"
          onClick={studio.handlePrint}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print Document</span>
        </button>
      </div>
    </div>
  );
}
