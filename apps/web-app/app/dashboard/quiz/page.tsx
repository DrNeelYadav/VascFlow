"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { ArrowLeft } from "lucide-react";
import { useEndoflowStore } from "../useEndoflowStore";
import { isNeelYadavUser } from "../../lib/auth-guards";
import { useQuizStore } from "./hooks/useQuizStore";
import { useQuizTimer } from "./hooks/useQuizTimer";
import { QuizAccessGate } from "./components/QuizAccessGate";
import { QuizHubHeader } from "./components/QuizHubHeader";
import { QuizProgressionGraph } from "./components/QuizProgressionGraph";
import { QuizModuleGrid } from "./components/QuizModuleGrid";
import { QuizHeader } from "./components/QuizHeader";
import { QuizQuestionCard } from "./components/QuizQuestionCard";
import { QuizExplanationCard } from "./components/QuizExplanationCard";
import { QuizBottomDock } from "./components/QuizBottomDock";
import { QuizGridModal } from "./components/QuizGridModal";
import { QuizSummaryModal } from "./components/QuizSummaryModal";
import type { FrcrModuleKey } from "./types";

export default function FrcrQuizPage() {
  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const { data: session, status } = useSession();
  const [viewMode, setViewMode] = useState<"hub" | "workspace">("hub");

  const isAuthorized = isNeelYadavUser(currentStaff) || isNeelYadavUser(session?.user);

  const {
    activeModule,
    moduleInfo,
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions,
    mode,
    setMode,
    isMistakesOnly,
    answers,
    currentAnswer,
    bookmarks,
    isCurrentBookmarked,
    isGridOpen,
    setIsGridOpen,
    isSummaryOpen,
    setIsSummaryOpen,
    answeredCount,
    correctCount,
    scorePercent,
    selectAnswer,
    toggleBookmark,
    goToNext,
    goToPrev,
    goToQuestion,
    switchModule,
    analytics,
  } = useQuizStore();

  const { formattedTime } = useQuizTimer(mode);

  if (status !== "loading" && !isAuthorized) {
    return <QuizAccessGate />;
  }

  const handleLaunchModule = (modKey: FrcrModuleKey, mistakesOnly: boolean = false) => {
    switchModule(modKey, mistakesOnly);
    setViewMode("workspace");
  };

  const totalMistakesOverall = Object.values(analytics.moduleStats).reduce((acc, m) => acc + m.mistakes, 0);

  return (
    <div className="flex-1 flex flex-col min-h-0 relative -m-2 sm:-m-3 lg:-m-4 bg-slate-50/60 dark:bg-slate-950/60">
      {viewMode === "hub" ? (
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-5 max-w-6xl w-full mx-auto pb-16">
          <QuizHubHeader
            totalAttempted={analytics.totalAttempted}
            totalCorrect={analytics.totalCorrect}
            totalBank={1727}
            accuracyPercent={analytics.accuracyPercent}
            currentLevel={analytics.currentLevel}
            totalMistakes={totalMistakesOverall}
            onLaunchMistakes={() => handleLaunchModule(activeModule, true)}
          />

          <QuizProgressionGraph points={analytics.dailyPoints} />

          <QuizModuleGrid
            moduleStats={analytics.moduleStats}
            onSelectModule={(key) => handleLaunchModule(key, false)}
            onLaunchModuleMistakes={(key) => handleLaunchModule(key, true)}
          />
        </div>
      ) : (
        <>
          <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3 py-1.5 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => setViewMode("hub")}
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
            onSelectModule={(m) => switchModule(m, false)}
            onToggleMode={setMode}
            onToggleBookmark={toggleBookmark}
            onOpenGrid={() => setIsGridOpen(true)}
          />

          <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 space-y-4 max-w-4xl w-full mx-auto pb-24 md:pb-16">
            {currentQuestion && (
              <>
                <QuizQuestionCard
                  question={currentQuestion}
                  currentAnswer={currentAnswer}
                  mode={mode}
                  onSelectOption={selectAnswer}
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
            onPrev={goToPrev}
            onNext={goToNext}
            onOpenGrid={() => setIsGridOpen(true)}
            onSubmitExam={() => setIsSummaryOpen(true)}
          />

          <QuizGridModal
            isOpen={isGridOpen}
            onClose={() => setIsGridOpen(false)}
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            bookmarks={bookmarks}
            mode={mode}
            onSelectQuestion={goToQuestion}
          />

          <QuizSummaryModal
            isOpen={isSummaryOpen}
            onClose={() => setIsSummaryOpen(false)}
            moduleInfo={moduleInfo}
            totalQuestions={totalQuestions}
            answeredCount={answeredCount}
            correctCount={correctCount}
            scorePercent={scorePercent}
            onReset={() => {
              setIsSummaryOpen(false);
              switchModule(activeModule, false);
            }}
            onReviewMistakes={() => {
              setIsSummaryOpen(false);
              switchModule(activeModule, true);
            }}
          />
        </>
      )}
    </div>
  );
}
