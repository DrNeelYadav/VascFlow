"use client";

import React, { useState } from "react";
import { X, Star, CheckCircle2, AlertCircle } from "lucide-react";
import type { FrcrQuestion, QuizMode, UserAnswerRecord } from "../types";

interface QuizGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: FrcrQuestion[];
  currentIndex: number;
  answers: Record<string, UserAnswerRecord>;
  bookmarks: Record<string, boolean>;
  mode: QuizMode;
  onSelectQuestion: (index: number) => void;
}

type FilterType = "all" | "bookmarked" | "unanswered" | "incorrect";

export function QuizGridModal({
  isOpen,
  onClose,
  questions,
  currentIndex,
  answers,
  bookmarks,
  mode,
  onSelectQuestion,
}: QuizGridModalProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  if (!isOpen) return null;

  const filteredQuestions = questions.map((q, idx) => ({ q, idx })).filter(({ q }) => {
    if (filter === "bookmarked") return !!bookmarks[q.id];
    if (filter === "unanswered") return !answers[q.id];
    if (filter === "incorrect") return answers[q.id] && !answers[q.id].isCorrect;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in">
      <div className="w-full sm:max-w-xl max-h-[85vh] flex flex-col bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Question Navigator Matrix</h3>
            <p className="text-[11px] text-slate-500">Jump directly to any clinical case in this module</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-100 dark:border-slate-800/80 overflow-x-auto scrollbar-none text-[11px]">
          {(["all", "unanswered", "bookmarked", "incorrect"] as FilterType[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-2.5 py-1 rounded-full font-medium whitespace-nowrap capitalize transition-colors cursor-pointer ${
                filter === f
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-6 sm:grid-cols-8 gap-2">
          {filteredQuestions.map(({ q, idx }) => {
            const isCurrent = idx === currentIndex;
            const ans = answers[q.id];
            const isBookmarked = !!bookmarks[q.id];

            let cellClass =
              "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";

            if (mode === "tutor") {
              if (ans) {
                cellClass = ans.isCorrect
                  ? "bg-emerald-500 text-white border-emerald-600 font-bold"
                  : "bg-red-500 text-white border-red-600 font-bold";
              }
            } else if (ans) {
              cellClass = "bg-blue-600 text-white border-blue-700 font-bold";
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onSelectQuestion(idx)}
                className={`relative h-11 rounded-xl border text-xs font-semibold flex items-center justify-center transition-transform active:scale-90 cursor-pointer ${cellClass} ${
                  isCurrent ? "ring-2 ring-amber-400 ring-offset-2 dark:ring-offset-slate-900 scale-105 z-10" : ""
                }`}
              >
                <span>{idx + 1}</span>
                {isBookmarked && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Legend Footer */}
        <div className="flex items-center justify-around px-4 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Correct</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span>Incorrect</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <span>Unanswered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>Star</span>
          </div>
        </div>
      </div>
    </div>
  );
}
