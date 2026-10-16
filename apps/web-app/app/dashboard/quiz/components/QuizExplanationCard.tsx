"use client";

import React, { useState } from "react";
import { Lightbulb, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import type { FrcrQuestion, QuizMode, UserAnswerRecord } from "../types";

interface QuizExplanationCardProps {
  question: FrcrQuestion;
  currentAnswer?: UserAnswerRecord;
  mode: QuizMode;
}

const OPTION_LETTERS = ["A", "B", "C", "D", "E"];

export function QuizExplanationCard({
  question,
  currentAnswer,
  mode,
}: QuizExplanationCardProps) {
  const [isManuallyExpanded, setIsManuallyExpanded] = useState<boolean>(false);
  const isAnswered = currentAnswer !== undefined;

  // In Tutor mode, auto-expand once answered. In Exam mode, allow manual toggle.
  const isVisible = mode === "tutor" ? isAnswered : isManuallyExpanded;
  const correctLetter = OPTION_LETTERS[question.correctAnswer] || "A";
  const correctText = question.options[question.correctAnswer];

  if (!isAnswered && mode === "tutor") {
    return (
      <div className="text-center py-2 text-xs text-slate-400 dark:text-slate-500 italic select-none">
        Select an option above to reveal the correct answer and clinical rationale.
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shadow-xs transition-all animate-in fade-in slide-in-from-bottom-2">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Clinical Rationale & Explanation
            </div>
            <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 shrink-0" />
              Correct Answer: [{correctLetter}] {correctText}
            </div>
          </div>
        </div>

        {mode === "exam" && (
          <button
            type="button"
            onClick={() => setIsManuallyExpanded((prev) => !prev)}
            className="p-1 rounded-md text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isVisible ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Explanation Text */}
      {isVisible && (
        <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-normal select-text">
          {question.explanation.split("\n\n").map((para, idx) => {
            const trimmed = para.trim();
            if (!trimmed) return null;
            return (
              <p key={idx} className="whitespace-pre-line">
                {trimmed}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
