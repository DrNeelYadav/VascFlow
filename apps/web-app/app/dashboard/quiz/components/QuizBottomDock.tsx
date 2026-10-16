"use client";

import React from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, Flag } from "lucide-react";
import type { QuizMode } from "../types";

interface QuizBottomDockProps {
  currentIndex: number;
  totalQuestions: number;
  answeredCount: number;
  mode: QuizMode;
  onPrev: () => void;
  onNext: () => void;
  onOpenGrid: () => void;
  onSubmitExam?: () => void;
}

export function QuizBottomDock({
  currentIndex,
  totalQuestions,
  answeredCount,
  mode,
  onPrev,
  onNext,
  onOpenGrid,
  onSubmitExam,
}: QuizBottomDockProps) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <footer className="sticky bottom-14 md:bottom-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/90 dark:border-slate-800 px-3 py-2.5 transition-colors">
      <div className="flex items-center justify-between gap-3 max-w-4xl mx-auto">
        {/* Previous Button */}
        <button
          type="button"
          disabled={isFirst}
          onClick={onPrev}
          className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold min-h-[44px] transition-all cursor-pointer ${
            isFirst
              ? "opacity-30 cursor-not-allowed text-slate-400 bg-slate-100 dark:bg-slate-800"
              : "text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 active:scale-95"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Prev</span>
        </button>

        {/* Center Grid Matrix Trigger */}
        <button
          type="button"
          onClick={onOpenGrid}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold min-h-[44px] transition-colors cursor-pointer"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
          <span>
            Q {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-sky-950 text-blue-700 dark:text-sky-300">
            {answeredCount} done
          </span>
        </button>

        {/* Next / Submit Button */}
        {mode === "exam" && isLast ? (
          <button
            type="button"
            onClick={onSubmitExam}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold min-h-[44px] text-white bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-sm transition-all cursor-pointer"
          >
            <Flag className="w-4 h-4" />
            <span>Finish</span>
          </button>
        ) : (
          <button
            type="button"
            disabled={isLast}
            onClick={onNext}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold min-h-[44px] transition-all cursor-pointer ${
              isLast
                ? "opacity-30 cursor-not-allowed text-slate-400 bg-slate-100 dark:bg-slate-800"
                : "text-white bg-blue-600 hover:bg-blue-700 dark:bg-sky-600 dark:hover:bg-sky-500 active:scale-95 shadow-sm"
            }`}
          >
            <span className="hidden xs:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </footer>
  );
}
