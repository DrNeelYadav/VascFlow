"use client";

import React, { useState } from "react";
import { AlertTriangle, Calendar, X, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  BumpTargetCase,
  CLINICAL_BUMP_REASONS,
  calculateNextAvailableOtDate,
} from "./theatreBumpingLogic";

export { CLINICAL_BUMP_REASONS, calculateNextAvailableOtDate };
export type { BumpTargetCase };

interface TheatreBumpingModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseItem: BumpTargetCase | null;
  onConfirmBump: (params: {
    caseId: string;
    reason: string;
    newDate: string;
    notes: string;
  }) => void;
}

export function TheatreBumpingModal({
  isOpen,
  onClose,
  caseItem,
  onConfirmBump,
}: TheatreBumpingModalProps) {
  const [selectedReason, setSelectedReason] = useState(CLINICAL_BUMP_REASONS[0].label);
  const [targetDate, setTargetDate] = useState(() => {
    return caseItem ? calculateNextAvailableOtDate(caseItem.scheduledDate || new Date().toISOString().slice(0, 10)) : "";
  });
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !caseItem) return null;

  const handleNextSlotClick = () => {
    const nextDate = calculateNextAvailableOtDate(caseItem.scheduledDate || new Date().toISOString().slice(0, 10));
    setTargetDate(nextDate);
  };

  const handleConfirm = () => {
    onConfirmBump({
      caseId: caseItem.id,
      reason: selectedReason,
      newDate: targetDate,
      notes,
    });
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-lg w-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Theatre Bumping &amp; Re-Dating Workflow
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                1-Click Rescheduling with Clinical Audit Log
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 text-xs">
          {/* Patient Details Summary */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/60">
            <div className="font-semibold text-slate-900 dark:text-slate-100">{caseItem.patientName}</div>
            <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
              {caseItem.procedureTitle} • Scheduled: <span className="font-mono text-slate-700 dark:text-slate-300">{caseItem.scheduledDate}</span>
            </div>
          </div>

          {/* Reason Selection */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Clinical Bumping / Postponement Reason *
            </label>
            <select
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="w-full h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 font-medium focus:border-blue-600 focus:outline-none"
            >
              {CLINICAL_BUMP_REASONS.map((r) => (
                <option key={r.id} value={r.label}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Re-Date Selection */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-semibold text-slate-700 dark:text-slate-300">
                New Target Theatre Date *
              </label>
              <button
                type="button"
                onClick={handleNextSlotClick}
                className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium min-h-[30px]"
              >
                <Calendar className="w-3 h-3" />
                <span>Next Available Non-Holiday Slot</span>
              </button>
            </div>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 font-mono focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Clinical Notes */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Physician / Nurse Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Advised FFP infusion, Vitamin K, recheck PT/INR on Tuesday morning..."
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 min-h-[44px] rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!targetDate || isSuccess}
            onClick={handleConfirm}
            className={`px-4 py-1.5 min-h-[44px] rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 transition ${
              isSuccess ? "bg-emerald-600" : "bg-amber-600 hover:bg-amber-700 disabled:opacity-50"
            }`}
          >
            {isSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Re-Dated Successfully</span>
              </>
            ) : (
              <>
                <ArrowRight className="w-4 h-4" />
                <span>Confirm Bump &amp; Re-Date</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
