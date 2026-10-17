"use client";

import React from "react";
import { User, Stethoscope, CalendarClock, FileCheck, FileSignature, LogOut } from "lucide-react";
import { MultiDeviceSyncBadge } from "./MultiDeviceSyncBadge";

export type ClinicalWorkflowStage =
  | "op-clinic"
  | "pre-booking"
  | "consent"
  | "operative-notes"
  | "discharge";

interface ClinicalPipelineHeaderProps {
  currentStage: ClinicalWorkflowStage;
  title: string;
  subtitle: string;
  activePatient?: {
    name?: string;
    crUhid?: string;
    ageSex?: string;
    procedure?: string;
  };
  actions?: React.ReactNode;
}

const STAGE_CONFIG: Record<
  ClinicalWorkflowStage,
  { step: number; label: string; icon: React.ComponentType<{ className?: string }> }
> = {
  "op-clinic": { step: 1, label: "Booking Clinic", icon: Stethoscope },
  "pre-booking": { step: 2, label: "Dating Form", icon: CalendarClock },
  consent: { step: 3, label: "Informed Consent", icon: FileCheck },
  "operative-notes": { step: 4, label: "Post-Operative Note", icon: FileSignature },
  discharge: { step: 5, label: "Discharge Card", icon: LogOut },
};

export const ClinicalPipelineHeader: React.FC<ClinicalPipelineHeaderProps> = ({
  currentStage,
  title,
  subtitle,
  activePatient,
  actions,
}) => {
  const current = STAGE_CONFIG[currentStage] || STAGE_CONFIG["op-clinic"];
  const StageIcon = current.icon;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-2xs print:hidden mb-4 space-y-3">
      {/* Top Row: Stage Indicator Pill & Active Patient */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-[11px] font-semibold">
          <StageIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>OPD Pipeline &bull; Step {current.step} of 5: {current.label}</span>
        </div>

        {activePatient?.name && (
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
            <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-slate-900 dark:text-slate-100 truncate max-w-[160px]">
              {activePatient.name}
            </span>
            {activePatient.crUhid && (
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                CR: {activePatient.crUhid}
              </span>
            )}
            {activePatient.ageSex && (
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                ({activePatient.ageSex})
              </span>
            )}
          </div>
        )}
      </div>

      {/* Main Row: Title, Subtitle, Sync Badge & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-end shrink-0">
          <MultiDeviceSyncBadge />
          {actions}
        </div>
      </div>
    </div>
  );
};

export default ClinicalPipelineHeader;
