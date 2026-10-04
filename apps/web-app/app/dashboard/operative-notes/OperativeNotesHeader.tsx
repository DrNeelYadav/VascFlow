"use client";

import React from "react";
import { FileText, Printer, Copy, Check } from "lucide-react";
import { Button } from "@vascule/ui-kit/button";

interface OperativeNotesHeaderProps {
  copyFeedback: boolean;
  onCopy: () => void;
  onPrint: () => void;
}

export function OperativeNotesHeader({
  copyFeedback,
  onCopy,
  onPrint,
}: OperativeNotesHeaderProps) {
  return (
    <div className="card-compact p-3 flex flex-col md:flex-row md:items-center justify-between gap-3 print:hidden">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-200 dark:border-blue-900/50">
          <FileText className="w-4 h-4" />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Operative Procedure Notes
          </h1>
          <p className="text-[11px] text-slate-500">
            Department of Radiodiagnosis &amp; Interventional Radiology, SMS Hospital
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onCopy}
          className="h-8 px-3 gap-1.5 font-medium border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xs active:translate-y-px transition-all"
          title="Copy operative note to clipboard"
        >
          {copyFeedback ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">Copied Note</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>Copy Note</span>
            </>
          )}
        </Button>

        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={onPrint}
          className="h-8 px-3 gap-1.5 font-medium bg-blue-600 hover:bg-blue-700 text-white border border-blue-700 shadow-xs active:translate-y-px transition-all"
          title="Print official operative note"
        >
          <Printer className="w-3.5 h-3.5 text-white" />
          <span>Print Operative Note</span>
        </Button>
      </div>
    </div>
  );
}
