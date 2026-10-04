"use client";

import React from "react";
import { Search } from "lucide-react";
import type { OperativeRegistryPatient } from "./useOperativeNoteState";

interface RegistryPatientSearchProps {
  patientSearch: string;
  setPatientSearch: (val: string) => void;
  patientSearchResults: OperativeRegistryPatient[];
  onSelectPatient: (p: OperativeRegistryPatient) => void;
}

export function RegistryPatientSearch({
  patientSearch,
  setPatientSearch,
  patientSearchResults,
  onSelectPatient,
}: RegistryPatientSearchProps) {
  return (
    <div className="card-compact p-3 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Registry Patient Pre-Fill
        </span>
        <span className="text-[10px] text-slate-400 font-mono">1,090 cases</span>
      </div>

      <div className="relative">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
        <input
          type="text"
          placeholder="Search patient name, CR or IR#..."
          value={patientSearch}
          onChange={(e) => setPatientSearch(e.target.value)}
          className="input-compact pl-7 w-full"
        />
      </div>

      {patientSearchResults.length > 0 && (
        <div className="border border-slate-200 dark:border-slate-800 rounded bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 text-xs shadow-md max-h-48 overflow-y-auto">
          {patientSearchResults.map((p) => (
            <button
              key={p.dsaNo}
              type="button"
              onClick={() => onSelectPatient(p)}
              className="w-full text-left p-2 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between cursor-pointer"
            >
              <div>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{p.patientName}</span>
                <span className="ml-1 text-slate-400 font-mono text-[10px]">({p.age}y/{p.gender?.[0]})</span>
                <div className="text-[10px] text-slate-500 font-mono">CR: {p.crNumber} • #{p.dsaNo}</div>
              </div>
              <span className="badge-compact text-[9px]">{p.unit}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
