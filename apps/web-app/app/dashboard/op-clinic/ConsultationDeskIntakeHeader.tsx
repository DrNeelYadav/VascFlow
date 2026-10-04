"use client";

import React, { useMemo } from "react";
import { Button, Card, Badge } from "@vascule/ui-kit";
import { Stethoscope, RotateCcw } from "lucide-react";
import type { UseOpClinicDeskReturn } from "./useOpClinicDesk";

interface ConsultationDeskIntakeHeaderProps {
  desk: UseOpClinicDeskReturn;
}

export function ConsultationDeskIntakeHeader({ desk }: ConsultationDeskIntakeHeaderProps) {
  const reviewPatients = useMemo(
    () => desk.availablePatients.filter((p) => p.type === "review"),
    [desk.availablePatients]
  );

  const admittedPatients = useMemo(
    () => desk.availablePatients.filter((p) => p.type === "admitted"),
    [desk.availablePatients]
  );

  return (
    <Card variant="flat" className="p-4 sm:p-5 border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shrink-0">
            <Stethoscope className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                Consultation Desk &amp; Procedural Registration
              </h2>
              {desk.selectedPatientKey === "new" ? (
                <Badge tone="verified">New Patient Intake</Badge>
              ) : desk.selectedPatientKey.startsWith("CT-REV") ? (
                <Badge tone="info">CT Review #{desk.selectedPatientKey}</Badge>
              ) : (
                <Badge tone="verified">Admitted IPD #{desk.selectedPatientKey}</Badge>
              )}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Single-sheet clinical triage, multi-track disposition matrix, and Cath-Lab scheduling
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2">
            <label
              htmlFor="patient-intake-select"
              className="text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap hidden sm:inline"
            >
              Intake:
            </label>
            <select
              id="patient-intake-select"
              value={desk.selectedPatientKey}
              onChange={(e) => desk.loadPatientIntoDesk(e.target.value)}
              className="max-w-xs sm:max-w-sm px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-slate-100 font-medium focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 focus:outline-none transition-colors"
            >
              <option value="new">+ Start New Patient Consultation</option>
              {reviewPatients.length > 0 && (
                <optgroup label={`Review Queue (${reviewPatients.length} Active Records)`}>
                  {reviewPatients.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </optgroup>
              )}
              {admittedPatients.length > 0 && (
                <optgroup label={`Inpatient Wards (${admittedPatients.length} Patients)`}>
                  {admittedPatients.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </optgroup>
              )}
            </select>
          </div>

          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => desk.loadPatientIntoDesk("new")}
            title="Reset desk to clean blank intake"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
            <span>Blank Form</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
