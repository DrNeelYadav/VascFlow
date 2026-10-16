"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export function QuizAccessGate() {
  const router = useRouter();

  return (
    <div className="flex-1 flex items-center justify-center p-6 text-center">
      <div className="max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
        <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-4">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Restricted Study Workspace
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed mb-6">
          This personal FRCR Part 2A examination preparation suite is strictly configured for Dr. Neel Yadav.
        </p>
        <button
          type="button"
          onClick={() => router.push("/dashboard/calendar")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Department Schedule</span>
        </button>
      </div>
    </div>
  );
}
