"use client";

import React from "react";
import { Button } from "@vascule/ui-kit/button";
import { Printer, Copy, Check } from "lucide-react";

interface PatientOption {
  id: string;
  name: string;
  procedure: string;
}

interface DischargeHeaderBarProps {
  patients: PatientOption[];
  selectedPatientId: string;
  onSelectPatient: (id: string) => void;
  copied: boolean;
  onCopy: () => void;
  onPrint: () => void;
}

export function DischargeHeaderBar({
  patients,
  selectedPatientId,
  onSelectPatient,
  copied,
  onCopy,
  onPrint,
}: DischargeHeaderBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg print:hidden">
      <div>
        <h1 className="text-sm font-bold text-slate-900 dark:text-slate-100">
          Clinical Discharge Summary
        </h1>
        <p className="text-[11px] text-slate-500">
          Rajasthan Government IHMS e-Hospital Standard Format
        </p>
      </div>

      <div className="flex items-center gap-2">
        <select
          value={selectedPatientId}
          onChange={(e) => onSelectPatient(e.target.value)}
          className="h-8 px-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-slate-100 font-medium cursor-pointer shadow-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
          aria-label="Select Patient"
        >
          <option value="EX01">Sunil Kumar (VenaSeal / Varicose)</option>
          <option value="EX02">Anjum Nisha (Budd-Chiari / DIPS)</option>
          {patients.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} ({p.procedure})
            </option>
          ))}
        </select>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onCopy}
          className="h-8 px-3 gap-1.5 font-medium border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xs active:translate-y-px transition-all"
          title="Copy discharge summary to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">Copied Summary</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>Copy Summary</span>
            </>
          )}
        </Button>

        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={onPrint}
          className="h-8 px-3 gap-1.5 font-medium bg-blue-600 hover:bg-blue-700 text-white border border-blue-700 shadow-xs active:translate-y-px transition-all"
          title="Print discharge summary"
        >
          <Printer className="w-3.5 h-3.5 text-white" />
          <span>Print Discharge Summary</span>
        </Button>
      </div>
    </div>
  );
}
