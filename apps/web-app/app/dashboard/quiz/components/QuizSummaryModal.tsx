"use client";

import React from "react";
import { Trophy, CheckCircle2, XCircle, RotateCcw, X, ArrowRight } from "lucide-react";
import type { FrcrModuleInfo } from "../types";

interface QuizSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  moduleInfo: FrcrModuleInfo;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  scorePercent: number;
  onReset: () => void;
  onReviewMistakes: () => void;
}

export function QuizSummaryModal({
  isOpen,
  onClose,
  moduleInfo,
  totalQuestions,
  answeredCount,
  correctCount,
  scorePercent,
  onReset,
  onReviewMistakes,
}: QuizSummaryModalProps) {
  if (!isOpen) return null;

  const isPass = scorePercent >= 70;
  const incorrectCount = answeredCount - correctCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-center animate-in zoom-in-95 duration-200 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Trophy / Status Icon */}
        <div
          className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4 ${
            isPass
              ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
              : "bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400"
          }`}
        >
          <Trophy className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
          {moduleInfo.name}
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          FRCR 2A Session Evaluation Report
        </p>

        {/* Score Ring / Card */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 mb-6 border border-slate-100 dark:border-slate-800">
          <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">
            {scorePercent}%
          </div>
          <div
            className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
              isPass ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
            }`}
          >
            {isPass ? "FRCR Standard Pass Level (≥70%)" : "Target: 70% Pass Benchmark"}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
            <div>
              <div className="text-slate-400 text-[10px]">Attempted</div>
              <div className="font-bold text-slate-800 dark:text-slate-200">
                {answeredCount}/{totalQuestions}
              </div>
            </div>
            <div>
              <div className="text-emerald-500 text-[10px] flex items-center justify-center gap-0.5">
                <CheckCircle2 className="w-2.5 h-2.5" /> Correct
              </div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400">{correctCount}</div>
            </div>
            <div>
              <div className="text-red-500 text-[10px] flex items-center justify-center gap-0.5">
                <XCircle className="w-2.5 h-2.5" /> Wrong
              </div>
              <div className="font-bold text-red-600 dark:text-red-400">{incorrectCount}</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          {incorrectCount > 0 && (
            <button
              type="button"
              onClick={onReviewMistakes}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer"
            >
              <span>Review Incorrect Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onReset}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Module</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
