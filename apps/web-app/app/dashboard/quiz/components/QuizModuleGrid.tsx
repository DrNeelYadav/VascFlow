"use client";

import React from "react";
import { FRCR_MODULES } from "../data";
import type { FrcrModuleKey } from "../types";
import { ArrowRight, RotateCcw } from "lucide-react";

interface QuizModuleGridProps {
  moduleStats: Record<FrcrModuleKey, { attempted: number; correct: number; mistakes: number }>;
  onSelectModule: (key: FrcrModuleKey) => void;
  onLaunchModuleMistakes: (key: FrcrModuleKey) => void;
}

export function QuizModuleGrid({
  moduleStats,
  onSelectModule,
  onLaunchModuleMistakes,
}: QuizModuleGridProps) {
  const modules = Object.values(FRCR_MODULES);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white px-1">
        <span>FRCR 2A Core Subspecialty Modules (6 Categories)</span>
        <span className="text-[11px] font-normal text-slate-500">1,727 Total Authentic Questions</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {modules.map((m) => {
          const stats = moduleStats[m.key] || { attempted: 0, correct: 0, mistakes: 0 };
          const progressPercent = m.count > 0 ? Math.round((stats.attempted / m.count) * 100) : 0;
          const accuracy = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;

          return (
            <div
              key={m.key}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition flex flex-col justify-between space-y-3"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {m.shortName}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {stats.attempted} / {m.count} done
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-1.5 line-clamp-1">
                  {m.name}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                  {m.description}
                </p>
              </div>

              {/* Progress & Metrics */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">Progress ({progressPercent}%)</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">
                    Accuracy: {accuracy}%
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-slate-900 dark:bg-slate-100 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onSelectModule(m.key)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                >
                  <span>{stats.attempted > 0 ? "Continue" : "Start"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {stats.mistakes > 0 && (
                  <button
                    type="button"
                    onClick={() => onLaunchModuleMistakes(m.key)}
                    className="flex items-center gap-1 py-2 px-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-medium hover:bg-rose-100 transition cursor-pointer"
                    title="Review missed questions"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{stats.mistakes}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
