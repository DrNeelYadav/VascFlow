import React from "react";

interface HeaderProps {
  department: string;
  activeCases: number;
  onQuickAction: (action: string) => void;
}

export function CleanDashboardHeader({ department, activeCases, onQuickAction }: HeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 sm:px-6 py-3 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-3 min-w-0">
        <h1 className="text-base font-semibold text-slate-900 dark:text-slate-100 truncate">
          {department}
        </h1>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400">
          {activeCases} Active
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onQuickAction("admit")}
          className="min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-md border border-slate-300 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 cursor-pointer touch-manipulation flex items-center justify-center active:scale-[0.98] transition-transform"
        >
          New Case
        </button>
        <button
          onClick={() => onQuickAction("export")}
          className="min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-md bg-slate-900 text-xs font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 cursor-pointer touch-manipulation flex items-center justify-center active:scale-[0.98] transition-transform"
        >
          Export
        </button>
      </div>
    </div>
  );
}
