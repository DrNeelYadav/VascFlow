"use client";

import React, { useState } from "react";
import { Star, Clock, Sparkles, BookOpen, ChevronDown, LayoutGrid, CheckCircle2 } from "lucide-react";
import type { FrcrModuleKey, QuizMode } from "../types";
import { FRCR_MODULES } from "../data";

interface QuizHeaderProps {
  activeModule: FrcrModuleKey;
  currentIndex: number;
  totalQuestions: number;
  mode: QuizMode;
  formattedTime: string;
  isBookmarked: boolean;
  scorePercent: number;
  answeredCount: number;
  onSelectModule: (mod: FrcrModuleKey) => void;
  onToggleMode: (mode: QuizMode) => void;
  onToggleBookmark: () => void;
  onOpenGrid: () => void;
}

export function QuizHeader({
  activeModule,
  currentIndex,
  totalQuestions,
  mode,
  formattedTime,
  isBookmarked,
  scorePercent,
  answeredCount,
  onSelectModule,
  onToggleMode,
  onToggleBookmark,
  onOpenGrid,
}: QuizHeaderProps) {
  const [isModuleMenuOpen, setIsModuleMenuOpen] = useState(false);
  const currentMod = FRCR_MODULES[activeModule];

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 px-3 py-2.5 transition-colors">
      <div className="flex items-center justify-between gap-2 max-w-4xl mx-auto">
        {/* Module Switcher Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsModuleMenuOpen((prev) => !prev)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-xs font-semibold text-slate-900 dark:text-slate-100 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="truncate max-w-[110px] sm:max-w-none">{currentMod?.shortName}</span>
            <span className="text-[10px] text-slate-500 font-mono">({totalQuestions})</span>
            <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
          </button>

          {isModuleMenuOpen && (
            <div className="absolute left-0 top-full mt-1.5 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                FRCR 2A Module Banks
              </div>
              {(Object.keys(FRCR_MODULES) as FrcrModuleKey[]).map((key) => {
                const mod = FRCR_MODULES[key];
                const isSelected = key === activeModule;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      onSelectModule(key);
                      setIsModuleMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-sky-300 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    <div>
                      <div className="font-medium">{mod.name}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{mod.description}</div>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0 ml-2">
                      {mod.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Center Progress & Score */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenGrid}
            className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Open question matrix"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="font-semibold tabular-nums">
              {currentIndex + 1}
              <span className="text-slate-400 font-normal">/{totalQuestions}</span>
            </span>
          </button>

          {answeredCount > 0 && (
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3" />
              <span>{scorePercent}%</span>
            </div>
          )}
        </div>

        {/* Right Tools: Mode Switcher & Bookmark */}
        <div className="flex items-center gap-1.5">
          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-[11px] font-medium">
            <button
              type="button"
              onClick={() => onToggleMode("tutor")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors cursor-pointer ${
                mode === "tutor"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-sky-400 shadow-xs font-semibold"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span className="hidden xs:inline">Tutor</span>
            </button>
            <button
              type="button"
              onClick={() => onToggleMode("exam")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors cursor-pointer ${
                mode === "exam"
                  ? "bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-xs font-semibold"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Clock className="w-3 h-3" />
              <span className="hidden xs:inline">{formattedTime}</span>
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={onToggleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark question"}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isBookmarked
                ? "bg-amber-50 text-amber-500 dark:bg-amber-950/50 dark:text-amber-400"
                : "text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <Star className={`w-4 h-4 ${isBookmarked ? "fill-amber-400" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
