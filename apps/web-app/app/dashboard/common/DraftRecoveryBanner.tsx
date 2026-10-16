"use client";

import React from "react";
import { CheckCircle2, RotateCcw, X } from "lucide-react";

interface DraftRecoveryBannerProps {
  lastSaved: string | null;
  hasRecoveredDraft: boolean;
  onRestore: () => void;
  onDismiss: () => void;
  className?: string;
}

export const DraftRecoveryBanner: React.FC<DraftRecoveryBannerProps> = ({
  lastSaved,
  hasRecoveredDraft,
  onRestore,
  onDismiss,
  className = "",
}) => {
  if (hasRecoveredDraft) {
    return (
      <div
        className={`flex items-center justify-between gap-3 px-3.5 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs shadow-xs transition-all ${className}`}
      >
        <div className="flex items-center gap-2">
          <RotateCcw className="w-3.5 h-3.5 text-amber-600 shrink-0 animate-spin-reverse" />
          <span>
            <strong>Unsaved draft detected</strong> from earlier session ({lastSaved || "Recently"}). Would you like to restore it?
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onRestore}
            className="px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] transition-colors shadow-2xs"
          >
            Restore Draft
          </button>
          <button
            type="button"
            onClick={onDismiss}
            className="p-1 text-amber-700 hover:text-amber-900 dark:hover:text-amber-100"
            title="Dismiss draft"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  if (lastSaved) {
    return (
      <div className={`flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 ${className}`}>
        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
        <span>Draft saved ({lastSaved})</span>
      </div>
    );
  }

  return null;
};
