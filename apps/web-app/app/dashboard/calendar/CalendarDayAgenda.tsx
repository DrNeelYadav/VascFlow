"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  AlertTriangle,
  AlertCircle,
  CalendarPlus,
  CheckCircle2,
  FileText,
  User,
} from "lucide-react";
import type { useOtCalendar } from "./useOtCalendar";

interface CalendarDayAgendaProps {
  cal: ReturnType<typeof useOtCalendar>;
}

export function CalendarDayAgenda({ cal }: CalendarDayAgendaProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs p-4 sm:p-5 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 border border-blue-200 dark:border-blue-800">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {cal.selectedDateFormatted}
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Angiosuite procedure schedule &amp; clinical pre-op readiness
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
              cal.selectedDayCases.length > 0
                ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
            }`}
          >
            {cal.selectedDayCases.length} {cal.selectedDayCases.length === 1 ? "Procedure Scheduled" : "Procedures Scheduled"}
          </span>
        </div>
      </div>

      {cal.selectedDayHoliday.isHoliday && (
        <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-800 dark:text-rose-300 flex items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
          <div>
            <strong className="font-semibold">{cal.selectedDayHoliday.name} ({cal.selectedDayHoliday.type} Holiday):</strong> Routine elective cath-lab slots are closed. Emergency and STAT table overbookings remain active with on-call team.
          </div>
        </div>
      )}

      {cal.selectedDayHoliday.isSunday && !cal.selectedDayHoliday.isHoliday && (
        <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <div>
            <strong className="font-semibold">Sunday Routine Maintenance:</strong> Regular elective angiography slots are not scheduled. Angiosuite table available for emergency interventions only.
          </div>
        </div>
      )}

      {cal.selectedDayCases.length === 0 ? (
        <div className="py-8 text-center rounded-lg border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2.5">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            No elective cases scheduled for {cal.selectedDateStr}.
          </p>
          <div>
            <Link
              href="/dashboard/op-clinic"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs transition-colors"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-blue-600" />
              <span>Book Procedure for this Date</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {cal.selectedDayCases.map((c, idx) => (
            <div
              key={c.id || idx}
              className="p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3.5 shadow-2xs"
            >
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    Slot #{String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                    {c.patientName}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    ({c.age}y / {c.sex})
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    {c.ssoNumber}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-blue-700 dark:text-blue-400">
                    {c.procedureTitle}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {c.location || "Cath-Lab"}
                  </span>
                  {c.bookedBy && (
                    <>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 dark:text-slate-400">
                        Booked by: {c.bookedBy}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>NPO Checked</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Labs Cleared</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <span>MAAY / RGHS Pre-Auth</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-800">
                <Link
                  href="/dashboard/operative-notes"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold shadow-2xs transition-colors active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>Operative Note</span>
                </Link>
                <Link
                  href="/dashboard/discharge"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold shadow-2xs transition-colors active:scale-95"
                >
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dossier</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
