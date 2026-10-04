"use client";

import React from "react";
import { Pill, Search } from "lucide-react";

export const PROTOCOL_SYSTEMS = [
  "ALL",
  "Hepatobiliary & Portal",
  "Vascular & Arterial",
  "Oncology & Ablation",
  "Genitourinary & Pelvic",
  "Venous & Lymphatic",
  "Neuro & Head/Neck",
  "Thoracic & Pulmonology",
  "Musculoskeletal & Pain",
  "Dialysis & Access",
] as const;

interface ProtocolHeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeSystem: string;
  setActiveSystem: (s: string) => void;
  totalCount: number;
}

export function ProtocolHeader({
  searchQuery,
  setSearchQuery,
  activeSystem,
  setActiveSystem,
  totalCount,
}: ProtocolHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
            <Pill className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Clinical IR Protocols &amp; RMSCL Formularies
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Department of Interventional Radiology, SMS Medical College, Jaipur
            </p>
          </div>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search protocol, drug, ICD-10 or tariff..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
          />
        </div>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        {PROTOCOL_SYSTEMS.map((sys) => (
          <button
            key={sys}
            type="button"
            onClick={() => setActiveSystem(sys)}
            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeSystem === sys
                ? "bg-blue-600 text-white shadow-2xs"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {sys} {sys === activeSystem && `(${totalCount})`}
          </button>
        ))}
      </div>
    </div>
  );
}
