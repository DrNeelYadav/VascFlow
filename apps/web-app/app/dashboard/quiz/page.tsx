"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useEndoflowStore } from "../useEndoflowStore";
import { isNeelYadavUser } from "../../lib/auth-guards";
import { useQuizStore } from "./hooks/useQuizStore";
import { useQuizTimer } from "./hooks/useQuizTimer";
import { QuizAccessGate } from "./components/QuizAccessGate";
import { QuizHubHeader } from "./components/QuizHubHeader";
import { QuizProgressionGraph } from "./components/QuizProgressionGraph";
import { QuizModuleGrid } from "./components/QuizModuleGrid";
import { QuizWorkspaceView } from "./components/QuizWorkspaceView";
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
    isSyncing,
    selectAnswer,
    toggleBookmark,
    goToNext,
    goToPrev,
    goToQuestion,
    switchModule,
    exitToHub,
    analytics,
  } = useQuizStore();

  const { formattedTime } = useQuizTimer(mode);

  if (status !== "loading" && !isAuthorized) {
    return <QuizAccessGate />;
  }

  const handleLaunchModule = (modKey: FrcrModuleKey, mistakesOnly: boolean = false, targetIndex: number = 0) => {
    switchModule(modKey, mistakesOnly, targetIndex);
    setViewMode("workspace");
  };

  const handleBackToHub = () => {
    exitToHub();
    setViewMode("hub");
  };

  const handleResumeLastActive = () => {
    if (analytics.lastActive) {
      handleLaunchModule(analytics.lastActive.moduleKey, false, analytics.lastActive.index);
    }
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
            lastActive={analytics.lastActive}
            isSyncing={isSyncing}
            onResumeLastActive={handleResumeLastActive}
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
          <QuizWorkspaceView
            activeModule={activeModule}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            mode={mode}
            isMistakesOnly={isMistakesOnly}
            formattedTime={formattedTime}
            isCurrentBookmarked={isCurrentBookmarked}
            scorePercent={scorePercent}
            answeredCount={answeredCount}
            currentQuestion={currentQuestion}
            currentAnswer={currentAnswer}
            onBackToHub={handleBackToHub}
            onSelectModule={(m) => switchModule(m, false)}
            onToggleMode={setMode}
            onToggleBookmark={toggleBookmark}
            onOpenGrid={() => setIsGridOpen(true)}
            onSelectOption={selectAnswer}
            onPrev={goToPrev}
            onNext={goToNext}
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
