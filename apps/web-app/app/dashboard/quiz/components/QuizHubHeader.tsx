"use client";

import React from "react";
import { GraduationCap, Award, ShieldCheck, Sparkles, BookOpen, Play, Cloud } from "lucide-react";
import type { MasteryLevelInfo, LastActiveSession } from "../types";

interface QuizHubHeaderProps {
  totalAttempted: number;
  totalCorrect: number;
  totalBank: number;
  accuracyPercent: number;
  currentLevel: MasteryLevelInfo;
  totalMistakes: number;
  lastActive?: LastActiveSession;
  isSyncing?: boolean;
  onResumeLastActive: () => void;
  onLaunchMistakes: () => void;
}

const LEVEL_ICONS: Record<string, React.ElementType> = {
  BookOpen,
  Sparkles,
  ShieldCheck,
  Award,
  GraduationCap,
};

export function QuizHubHeader({
  totalAttempted,
  totalCorrect,
  totalBank,
  accuracyPercent,
  currentLevel,
  totalMistakes,
  lastActive,
  isSyncing,
  onResumeLastActive,
  onLaunchMistakes,
}: QuizHubHeaderProps) {
  const IconComponent = LEVEL_ICONS[currentLevel.badge] || GraduationCap;
  const completionPercent = totalBank > 0 ? Math.round((totalAttempted / totalBank) * 100) : 0;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-2xs space-y-4">
      {/* OPD Quick-Resume Pill */}
      {lastActive && (
        <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/80 text-blue-950 dark:text-blue-100">
          <div className="flex items-center gap-2.5 truncate">
            <div className="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <div className="truncate">
              <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400">
                Quick Resume (OPD Interruption Recovery)
              </div>
              <div className="text-xs font-semibold truncate">
                {lastActive.moduleKey} &bull; Q#{lastActive.index + 1} ({lastActive.topic})
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onResumeLastActive}
            className="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition shrink-0 cursor-pointer shadow-xs"
          >
            Resume
          </button>
        </div>
      )}

      {/* Top Identity and Mastery Level Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-400">
            <span>FRCR 2A & EDiR Examination Workstation</span>
            <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400">
              {isSyncing ? (
                <>
                  <Cloud className="w-3 h-3 animate-pulse" /> Syncing...
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Cloud Synced (Free Tier)
                </>
              )}
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
            Dr. Neel Yadav &bull; Multi-Device Study OS
          </h1>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-900 dark:text-blue-200">
          <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <div className="text-xs font-bold">
            Level {currentLevel.level}: {currentLevel.title}
          </div>
        </div>
      </div>

      {/* 4 Essential Quantitative Score Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
          <div className="text-[11px] text-slate-500 font-medium">Questions Attempted</div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono mt-0.5">
            {totalAttempted} <span className="text-xs text-slate-400 font-normal">/ {totalBank}</span>
          </div>
          <div className="text-[10px] text-slate-400 mt-1">{completionPercent}% of question bank</div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
          <div className="text-[11px] text-slate-500 font-medium">Questions Correct</div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono mt-0.5">
            {totalCorrect}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">First-pass accuracy count</div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
          <div className="text-[11px] text-slate-500 font-medium">Accuracy Percentage</div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono mt-0.5">
            {accuracyPercent}%
          </div>
          <div className="text-[10px] text-slate-400 mt-1">Passing benchmark &ge; 75%</div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="text-[11px] text-slate-500 font-medium">Mistake Queue</div>
            <div className="text-xl sm:text-2xl font-bold text-rose-600 dark:text-rose-400 font-mono mt-0.5">
              {totalMistakes}
            </div>
          </div>
          {totalMistakes > 0 && (
            <button
              type="button"
              onClick={onLaunchMistakes}
              className="mt-1 w-full text-center text-[10px] font-bold py-1 px-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition cursor-pointer"
            >
              Re-test Mistakes
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
