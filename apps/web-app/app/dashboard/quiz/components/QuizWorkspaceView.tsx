"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { QuizHeader } from "./QuizHeader";
import { QuizQuestionCard } from "./QuizQuestionCard";
import { QuizExplanationCard } from "./QuizExplanationCard";
import { QuizBottomDock } from "./QuizBottomDock";
import type { FrcrModuleKey, FrcrQuestion, QuizMode, UserAnswerRecord } from "../types";

interface QuizWorkspaceViewProps {
  activeModule: FrcrModuleKey;
  currentIndex: number;
  totalQuestions: number;
  mode: QuizMode;
  isMistakesOnly: boolean;
  formattedTime: string;
  isCurrentBookmarked: boolean;
  scorePercent: number;
  answeredCount: number;
  currentQuestion?: FrcrQuestion;
  currentAnswer?: UserAnswerRecord;
  onBackToHub: () => void;
  onSelectModule: (m: FrcrModuleKey) => void;
  onToggleMode: (m: QuizMode) => void;
  onToggleBookmark: () => void;
  onOpenGrid: () => void;
  onSelectOption: (idx: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmitExam: () => void;
}

export function QuizWorkspaceView({
  activeModule,
  currentIndex,
  totalQuestions,
  mode,
  isMistakesOnly,
  formattedTime,
  isCurrentBookmarked,
  scorePercent,
  answeredCount,
  currentQuestion,
  currentAnswer,
  onBackToHub,
  onSelectModule,
  onToggleMode,
  onToggleBookmark,
  onOpenGrid,
  onSelectOption,
  onPrev,
  onNext,
  onSubmitExam,
}: QuizWorkspaceViewProps) {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3 py-1.5 flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={onBackToHub}
          className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition font-medium cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Progress Hub</span>
        </button>
        {isMistakesOnly && (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
            Re-testing Mistakes Queue
          </span>
        )}
      </div>

      <QuizHeader
        activeModule={activeModule}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        mode={mode}
        formattedTime={formattedTime}
        isBookmarked={isCurrentBookmarked}
        scorePercent={scorePercent}
        answeredCount={answeredCount}
        onSelectModule={onSelectModule}
        onToggleMode={onToggleMode}
        onToggleBookmark={onToggleBookmark}
        onOpenGrid={onOpenGrid}
      />

      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 space-y-4 max-w-4xl w-full mx-auto pb-24 md:pb-16">
        {currentQuestion && (
          <>
            <QuizQuestionCard
              question={currentQuestion}
              currentAnswer={currentAnswer}
              mode={mode}
              onSelectOption={onSelectOption}
            />
            <QuizExplanationCard
              question={currentQuestion}
              currentAnswer={currentAnswer}
              mode={mode}
            />
          </>
        )}
      </div>

      <QuizBottomDock
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        mode={mode}
        onPrev={onPrev}
        onNext={onNext}
        onOpenGrid={onOpenGrid}
        onSubmitExam={onSubmitExam}
      />
    </>
  );
}
