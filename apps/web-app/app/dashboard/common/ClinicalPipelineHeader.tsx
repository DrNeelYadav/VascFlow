"use client";

import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  CalendarClock,
  FileCheck,
  FileSignature,
  LogOut,
  User,
} from "lucide-react";
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

const STAGES: {
  id: ClinicalWorkflowStage;
  label: string;
  shortLabel: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "op-clinic",
    label: "1. OPD Clinic",
    shortLabel: "1. OPD",
    href: "/dashboard/op-clinic",
    icon: Stethoscope,
  },
  {
    id: "pre-booking",
    label: "2. Booking Clinic",
    shortLabel: "2. Dating",
    href: "/dashboard/pre-booking",
    icon: CalendarClock,
  },
  {
    id: "consent",
    label: "3. Informed Consent",
    shortLabel: "3. Consent",
    href: "/dashboard/consent",
    icon: FileCheck,
  },
  {
    id: "operative-notes",
    label: "4. Operative Notes",
    shortLabel: "4. Op Notes",
    href: "/dashboard/operative-notes",
    icon: FileSignature,
  },
  {
    id: "discharge",
    label: "5. Discharge Card",
    shortLabel: "5. Discharge",
    href: "/dashboard/discharge",
    icon: LogOut,
  },
];

export const ClinicalPipelineHeader: React.FC<ClinicalPipelineHeaderProps> = ({
  currentStage,
  title,
  subtitle,
  activePatient,
  actions,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs print:hidden mb-5 space-y-3.5">
      {/* 1. Stage Stepper Navigation */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-1.5 min-w-max">
          <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mr-1 hidden sm:inline">
            Workflow:
          </span>
          {STAGES.map((s, index) => {
            const Icon = s.icon;
            const isActive = currentStage === s.id;
            return (
              <React.Fragment key={s.id}>
                <Link
                  href={s.href}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">{s.label}</span>
                  <span className="md:hidden">{s.shortLabel}</span>
                </Link>
                {index < STAGES.length - 1 && (
                  <span className="text-slate-300 dark:text-slate-700 text-xs select-none">
                    &rarr;
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {activePatient?.name && (
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs shrink-0">
            <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-slate-900 dark:text-slate-100 truncate max-w-[130px]">
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

      {/* 2. Page Identity & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <MultiDeviceSyncBadge />
          {actions}
        </div>
      </div>
    </div>
  );
};
