"use client";

import React from "react";
import { Check, X } from "lucide-react";
import type { FrcrQuestion, QuizMode, UserAnswerRecord } from "../types";

interface QuizQuestionCardProps {
  question: FrcrQuestion;
  currentAnswer?: UserAnswerRecord;
  mode: QuizMode;
  onSelectOption: (optionIndex: number) => void;
}

const OPTION_LETTERS = ["A", "B", "C", "D", "E"];

export function QuizQuestionCard({
  question,
  currentAnswer,
  mode,
  onSelectOption,
}: QuizQuestionCardProps) {
  const isAnswered = currentAnswer !== undefined;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shadow-xs transition-colors">
      {/* Top Meta: Topic & ID */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-sky-950/50 text-blue-700 dark:text-sky-300">
          {question.topic}
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          {question.id}
        </span>
      </div>

      {/* Clinical Vignette Stem */}
      {question.stem && (
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100 font-normal mb-3 select-text">
          {question.stem}
        </p>
      )}

      {/* Prompt / Lead-in Question */}
      <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 select-text">
        {question.prompt}
      </div>

      {/* 5 Single Best Answer Options */}
      <div className="space-y-2.5">
        {question.options.map((optionText, idx) => {
          const letter = OPTION_LETTERS[idx] || `${idx + 1}`;
          const isSelected = currentAnswer?.selectedOption === idx;
          const isCorrect = idx === question.correctAnswer;

          // Styling logic for Tutor mode vs Exam mode
          let containerClasses =
            "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200";
          let badgeClasses =
            "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold";

          if (mode === "tutor" && isAnswered) {
            if (isCorrect) {
              containerClasses =
                "border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500 font-medium";
              badgeClasses = "bg-emerald-600 text-white font-bold";
            } else if (isSelected) {
              containerClasses =
                "border-red-500 bg-red-50/90 dark:bg-red-950/40 text-red-900 dark:text-red-100 ring-1 ring-red-500";
              badgeClasses = "bg-red-600 text-white font-bold";
            } else {
              containerClasses =
                "border-slate-200 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-900/30 text-slate-400 dark:text-slate-500 opacity-60";
              badgeClasses = "bg-slate-100 dark:bg-slate-800 text-slate-400";
            }
          } else if (isSelected) {
            containerClasses =
              "border-blue-600 dark:border-sky-500 bg-blue-50/80 dark:bg-sky-950/40 text-blue-900 dark:text-sky-100 ring-1 ring-blue-500 font-medium";
            badgeClasses = "bg-blue-600 dark:bg-sky-500 text-white font-bold";
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={mode === "tutor" && isAnswered}
              onClick={() => onSelectOption(idx)}
              className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all duration-150 touch-manipulation min-h-[48px] cursor-pointer ${containerClasses}`}
            >
              {/* Option Letter Badge */}
              <span
                className={`w-6 h-6 rounded-lg text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors ${badgeClasses}`}
              >
                {mode === "tutor" && isAnswered && isCorrect ? (
                  <Check className="w-3.5 h-3.5" />
                ) : mode === "tutor" && isAnswered && isSelected ? (
                  <X className="w-3.5 h-3.5" />
                ) : (
                  letter
                )}
              </span>

              {/* Option Text */}
              <span className="flex-1 text-xs sm:text-sm leading-snug pt-0.5 select-text">
                {optionText}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
