"use client";

import React from "react";
import { CalendarClock, FileCheck, FileSignature, LogOut } from "lucide-react";

export type ProcedureDossierStage = "dating" | "consent" | "op_note" | "discharge";

interface ProcedureDossierStagesBarProps {
  activeStage: ProcedureDossierStage;
  onStageChange: (stage: ProcedureDossierStage) => void;
}

const DOSSIER_STAGES = [
  {
    id: "dating" as const,
    label: "1. OPD Dating Form",
    sublabel: "A4 Pre-Booking Sheet & Anatomy",
    icon: CalendarClock,
  },
  {
    id: "consent" as const,
    label: "2. Informed Consent",
    sublabel: "Statutory Bilingual Authorization",
    icon: FileCheck,
  },
  {
    id: "op_note" as const,
    label: "3. Post-Operative Notes",
    sublabel: "WordPad Official Protocol",
    icon: FileSignature,
  },
  {
    id: "discharge" as const,
    label: "4. Discharge Card",
    sublabel: "IHMS Summary & Recall Ledger",
    icon: LogOut,
  },
];

export const ProcedureDossierStagesBar: React.FC<ProcedureDossierStagesBarProps> = ({
  activeStage,
  onStageChange,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1.5 shadow-2xs print:hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
        {DOSSIER_STAGES.map((s) => {
          const Icon = s.icon;
          const isActive = activeStage === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onStageChange(s.id)}
              className={`flex items-center gap-2.5 p-2.5 rounded-lg text-left transition-all cursor-pointer border ${
                isActive
                  ? "bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700 text-blue-900 dark:text-blue-100 shadow-xs"
                  : "bg-slate-50/60 dark:bg-slate-800/40 border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="truncate min-w-0">
                <div className="text-xs font-bold truncate leading-tight">
                  {s.label}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {s.sublabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
