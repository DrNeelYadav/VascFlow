"use client";

import React from "react";
import { DrugProtocol } from "../../lib/types/clinical";
import { ChevronRight } from "lucide-react";

interface ProtocolSidebarProps {
  protocols: DrugProtocol[];
  selectedProtocolId: string;
  onSelectProtocol: (id: string) => void;
}

export function ProtocolSidebar({
  protocols,
  selectedProtocolId,
  onSelectProtocol,
}: ProtocolSidebarProps) {
  return (
    <div className="w-full lg:w-80 shrink-0 space-y-1.5 max-h-[800px] overflow-y-auto pr-1">
      {protocols.length === 0 ? (
        <div className="p-4 text-center text-xs text-slate-400 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          No matching clinical protocols found.
        </div>
      ) : (
        protocols.map((p) => {
          const isSelected = p.id === selectedProtocolId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectProtocol(p.id)}
              className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                isSelected
                  ? "bg-blue-50/70 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700 text-blue-950 dark:text-blue-100 shadow-2xs"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200"
              }`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded font-mono ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {p.shortName || p.id.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-400 truncate">
                    {p.system}
                  </span>
                </div>
                <h4 className="text-xs font-bold truncate leading-tight">{p.name}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {p.indication}
                </p>
              </div>
              <ChevronRight
                className={`w-4 h-4 shrink-0 transition-transform ${
                  isSelected ? "text-blue-600 translate-x-0.5" : "text-slate-300"
                }`}
              />
            </button>
          );
        })
      )}
    </div>
  );
}
