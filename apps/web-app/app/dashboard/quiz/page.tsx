"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { useEndoflowStore } from "../useEndoflowStore";
import { isNeelYadavUser } from "../../lib/auth-guards";
import { useQuizStore } from "./hooks/useQuizStore";
import { useQuizTimer } from "./hooks/useQuizTimer";
import { QuizHeader } from "./components/QuizHeader";
import { QuizQuestionCard } from "./components/QuizQuestionCard";
import { QuizExplanationCard } from "./components/QuizExplanationCard";
import { QuizBottomDock } from "./components/QuizBottomDock";
import { QuizGridModal } from "./components/QuizGridModal";
import { QuizSummaryModal } from "./components/QuizSummaryModal";

export default function FrcrQuizPage() {
  const router = useRouter();
  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const { data: session, status } = useSession();

  // Strict Neel Yadav Access Gate
  const isAuthorized =
    isNeelYadavUser(currentStaff) || isNeelYadavUser(session?.user);

  const {
    activeModule,
    moduleInfo,
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions,
    mode,
    setMode,
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
    resetModuleProgress,
  } = useQuizStore();

  const { formattedTime } = useQuizTimer(mode);

  // If unauthorized after auth finishes loading, show discreet gate
  if (status !== "loading" && !isAuthorized) {
    return (
      <div className="flex-1 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-4">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Restricted Study Workspace
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed mb-6">
            This personal FRCR Part 2A examination preparation suite is strictly
            configured for Dr. Neel Yadav.
          </p>
          <button
            type="button"
            onClick={() => router.push("/dashboard/calendar")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Department Schedule</span>
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-sm text-slate-500">
        Loading FRCR 2A question bank...
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 relative -m-2 sm:-m-3 lg:-m-4 bg-slate-50/60 dark:bg-slate-950/60">
      {/* Mobile-First Header */}
      <QuizHeader
        activeModule={activeModule}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        mode={mode}
        formattedTime={formattedTime}
        isBookmarked={isCurrentBookmarked}
        scorePercent={scorePercent}
        answeredCount={answeredCount}
        onSelectModule={switchModule}
        onToggleMode={setMode}
        onToggleBookmark={toggleBookmark}
        onOpenGrid={() => setIsGridOpen(true)}
      />

      {/* Main Clinical Case Content Area */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 space-y-4 max-w-4xl w-full mx-auto pb-24 md:pb-16">
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
      </div>

      {/* Fixed Thumb-Friendly Bottom Navigation Dock */}
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

      {/* Question Palette Matrix Modal */}
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

      {/* Session Evaluation / Result Modal */}
      <QuizSummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
        moduleInfo={moduleInfo}
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        correctCount={correctCount}
        scorePercent={scorePercent}
        onReset={resetModuleProgress}
        onReviewMistakes={() => {
          setIsSummaryOpen(false);
          setIsGridOpen(true);
        }}
      />
    </div>
  );
}
