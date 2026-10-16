"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { FrcrModuleKey, FrcrQuestion, QuizMode, UserAnswerRecord } from "../types";
import { getQuestionsForModule, FRCR_MODULES } from "../data";
import { useQuizFirestore } from "./useQuizFirestore";

export function useQuizStore() {
  const { dataset, analytics, recordAttempt } = useQuizFirestore();
  const [activeModule, setActiveModule] = useState<FrcrModuleKey>("PAEDS");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mode, setMode] = useState<QuizMode>("tutor");
  const [isMistakesOnly, setIsMistakesOnly] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);

  // All questions for the active module
  const baseQuestions: FrcrQuestion[] = useMemo(() => {
    return getQuestionsForModule(activeModule);
  }, [activeModule]);

  // Questions filtered if in "Re-test Mistakes" mode
  const questions: FrcrQuestion[] = useMemo(() => {
    if (!isMistakesOnly) return baseQuestions;
    const modAttempts = dataset.attempts[activeModule] || {};
    const filtered = baseQuestions.filter((q) => modAttempts[q.id]?.isInMistakeQueue);
    return filtered.length > 0 ? filtered : baseQuestions;
  }, [baseQuestions, isMistakesOnly, dataset.attempts, activeModule]);

  // Map answers for the active module from Firestore dataset
  const answers: Record<string, UserAnswerRecord> = useMemo(() => {
    const modAttempts = dataset.attempts[activeModule] || {};
    const map: Record<string, UserAnswerRecord> = {};
    Object.entries(modAttempts).forEach(([qid, att]) => {
      map[qid] = {
        selectedOption: att.selectedOption,
        isCorrect: att.isCorrect,
        timestamp: att.lastAttemptedAt,
      };
    });
    return map;
  }, [dataset.attempts, activeModule]);

  const currentQuestion = questions[currentIndex] || questions[0];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  const selectAnswer = useCallback(
    (optionIndex: number) => {
      if (!currentQuestion) return;
      const isCorrect = optionIndex === currentQuestion.correctAnswer;
      recordAttempt(activeModule, currentQuestion.id, optionIndex, isCorrect);
    },
    [currentQuestion, activeModule, recordAttempt]
  );

  const toggleBookmark = useCallback(() => {
    if (!currentQuestion) return;
    setBookmarks((prev) => ({ ...prev, [currentQuestion.id]: !prev[currentQuestion.id] }));
  }, [currentQuestion]);

  const goToNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const goToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
      setIsGridOpen(false);
    }
  }, [questions.length]);

  const switchModule = useCallback((mod: FrcrModuleKey, mistakesOnly: boolean = false) => {
    setActiveModule(mod);
    setIsMistakesOnly(mistakesOnly);
    setCurrentIndex(0);
  }, []);

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter((a) => a.isCorrect).length;
  const scorePercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return {
    activeModule,
    moduleInfo: FRCR_MODULES[activeModule],
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions: questions.length,
    mode,
    setMode,
    isMistakesOnly,
    setIsMistakesOnly,
    answers,
    currentAnswer,
    bookmarks,
    isCurrentBookmarked: currentQuestion ? !!bookmarks[currentQuestion.id] : false,
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
  };
}
