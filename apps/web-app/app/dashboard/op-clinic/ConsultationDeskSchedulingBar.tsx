"use client";

import React from "react";
import { Button, Card } from "@vascule/ui-kit";
import {
  Calendar,
  AlertTriangle,
  Clock,
  CheckCircle2,
  BedDouble,
  CalendarPlus,
} from "lucide-react";
import type { UseOpClinicDeskReturn } from "./useOpClinicDesk";

interface ConsultationDeskSchedulingBarProps {
  desk: UseOpClinicDeskReturn;
  vacantBedsCount: number;
  onAdmitToWardClick: () => void;
}

export function ConsultationDeskSchedulingBar({
  desk,
  vacantBedsCount,
  onAdmitToWardClick,
}: ConsultationDeskSchedulingBarProps) {
  return (
    <>
      <Card variant="flat" className="p-4 sm:p-5 border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              4. Procedural Date &amp; Standby Configuration
            </h3>
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-400">
            Cath-Lab slot reservation or On-Call standby roster
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-8 space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="cath-lab-date-input"
                className="text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Target Cath-Lab Date:
              </label>
              <div className="flex items-center gap-1">
                {[
                  { label: "Today", days: 0 },
                  { label: "Tmrw", days: 1 },
                  { label: "+2d", days: 2 },
                  { label: "+3d", days: 3 },
                  { label: "+1w", days: 7 },
                ].map((preset) => {
                  const targetD = new Date(Date.now() + preset.days * 86400000)
                    .toISOString()
                    .split("T")[0];
                  return (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => desk.setBookingDate(targetD)}
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                        desk.bookingDate === targetD
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="cath-lab-date-input"
                type="date"
                value={desk.bookingDate}
                disabled={desk.isOnCallBooking || desk.selectedBedId === "on_call"}
                onChange={(e) => desk.setBookingDate(e.target.value)}
                min="2026-01-01"
                max="2026-12-31"
                className="flex-1 h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-slate-100 disabled:opacity-40 focus:border-blue-600 focus:outline-none transition-colors"
              />
              <label className="flex items-center gap-1.5 px-3 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-900 dark:text-slate-300 cursor-pointer select-none shrink-0">
                <input
                  type="checkbox"
                  checked={desk.isOnCallBooking || desk.selectedBedId === "on_call"}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    desk.setIsOnCallBooking(checked);
                    if (checked) {
                      desk.setSelectedBedId("on_call");
                      desk.setDisposition("DEFERRED_REVIEW_SOS");
                    } else if (desk.selectedBedId === "on_call") {
                      desk.setSelectedBedId("none");
                      desk.setDisposition("ELECTIVE_OUTPATIENT");
                    }
                  }}
                  className="w-3.5 h-3.5 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500"
                />
                <span>Keep On Call (Standby)</span>
              </label>
            </div>

            {(desk.bookingDateHoliday.isHoliday || desk.bookingDateHoliday.isSunday) &&
              !desk.isOnCallBooking && (
                <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    <strong>Rajasthan Calendar Alert:</strong> {desk.bookingDateHoliday.name || "Sunday"} is a{" "}
                    {desk.bookingDateHoliday.type || "Gazetted"} Holiday. Elective slots require consultant clearance.
                  </span>
                </div>
              )}
          </div>

          <div className="md:col-span-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider block">
              Calculated Procedure Protocol
            </span>
            <p className="font-bold text-slate-900 dark:text-slate-100 truncate">
              {desk.effectiveProcedureTitle}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Department of Interventional Radiology, SMS Hospital
            </p>
          </div>
        </div>
      </Card>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>
            Signing Consultant:{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              {desk.activeStaff.name}
            </strong>{" "}
            ({desk.activeStaff.code})
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-end">
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => desk.loadPatientIntoDesk("new")}
          >
            Reset Form
          </Button>

          <Button
            variant="secondary"
            size="sm"
            type="submit"
            className="flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Save Consultation to Review Queue</span>
          </Button>

          <Button
            variant="primary"
            size="sm"
            type="button"
            onClick={onAdmitToWardClick}
            disabled={vacantBedsCount === 0}
            className="flex items-center gap-1.5"
          >
            <BedDouble className="w-3.5 h-3.5" />
            <span>Admit to Ward</span>
          </Button>

          <Button
            variant="cobalt"
            size="sm"
            type="button"
            onClick={desk.handleOpenBookingModal}
            className="flex items-center gap-1.5"
          >
            <CalendarPlus className="w-3.5 h-3.5" />
            <span>Direct Book Cath-Lab</span>
          </Button>
        </div>
      </div>
    </>
  );
}
