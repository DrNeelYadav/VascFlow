"use client";

import React from "react";
import Link from "next/link";
import { Calendar as CalendarIcon, Zap, CalendarPlus } from "lucide-react";

export function CalendarHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <CalendarIcon className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Cath-Lab Schedule
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <Link
          href="/dashboard/op-clinic"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-700 text-xs font-semibold hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-colors shadow-2xs active:scale-95"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>+ STAT Emergency</span>
        </Link>
        <Link
          href="/dashboard/op-clinic"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 border border-blue-700 dark:border-blue-500 transition-colors shadow-xs active:scale-95"
        >
          <CalendarPlus className="w-3.5 h-3.5" />
          <span>+ New Case</span>
        </Link>
      </div>
    </div>
  );
}
