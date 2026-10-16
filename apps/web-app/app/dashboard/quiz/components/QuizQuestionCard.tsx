"use client";

import React from "react";
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
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-2xs transition-colors">
      {/* Top Clinical Identifier */}
      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          {question.topic}
        </span>
        <span>{question.id}</span>
      </div>

      {/* Clinical Vignette Stem */}
      {question.stem && (
        <p className="text-sm sm:text-base leading-relaxed text-slate-900 dark:text-slate-100 font-normal mb-3 select-text">
          {question.stem}
        </p>
      )}

      {/* Prompt / Lead-in Question */}
      <div className="text-sm sm:text-base font-medium text-slate-950 dark:text-white mb-4 select-text">
        {question.prompt}
      </div>

      {/* Single Best Answer Options */}
      <div className="space-y-2">
        {question.options.map((optionText, idx) => {
          const letter = OPTION_LETTERS[idx] || `${idx + 1}`;
          const isSelected = currentAnswer?.selectedOption === idx;

          // Neutral, clean exam styling without green colored options or artificial icons
          let containerClasses =
            "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200";
          let badgeClasses =
            "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium";

          if (isSelected) {
            containerClasses =
              "border-slate-900 dark:border-slate-300 bg-slate-100/90 dark:bg-slate-800 text-slate-950 dark:text-white ring-1 ring-slate-900 dark:ring-slate-300 font-medium";
            badgeClasses =
              "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold";
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectOption(idx)}
              className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all duration-150 touch-manipulation min-h-[46px] cursor-pointer ${containerClasses}`}
            >
              {/* Option Letter Badge */}
              <span
                className={`w-6 h-6 rounded-lg text-xs flex items-center justify-center shrink-0 mt-0.5 ${badgeClasses}`}
              >
                {letter}
              </span>

              {/* Option Text verbatim from Google Docs */}
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
