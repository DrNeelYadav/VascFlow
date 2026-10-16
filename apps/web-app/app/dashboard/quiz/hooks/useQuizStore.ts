"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { FrcrModuleKey, FrcrQuestion, QuizMode, UserAnswerRecord } from "../types";
import { getQuestionsForModule, FRCR_MODULES } from "../data";
import { useQuizFirestore } from "./useQuizFirestore";

export function useQuizStore() {
  const { dataset, analytics, isSyncing, recordAttempt, toggleBookmark: toggleBm, updateLastActive, flushPendingSync } = useQuizFirestore();
  const [activeModule, setActiveModule] = useState<FrcrModuleKey>("PAEDS");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mode, setMode] = useState<QuizMode>("tutor");
  const [isMistakesOnly, setIsMistakesOnly] = useState<boolean>(false);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);

  // All questions for active module
  const baseQuestions: FrcrQuestion[] = useMemo(() => {
    return getQuestionsForModule(activeModule);
  }, [activeModule]);

  // Questions filtered if in mistake review
  const questions: FrcrQuestion[] = useMemo(() => {
    if (!isMistakesOnly) return baseQuestions;
    const modAttempts = dataset.attempts[activeModule] || {};
    const filtered = baseQuestions.filter((q) => modAttempts[q.id]?.isInMistakeQueue);
    return filtered.length > 0 ? filtered : baseQuestions;
  }, [baseQuestions, isMistakesOnly, dataset.attempts, activeModule]);

  // Map answers for active module
  const answers: Record<string, UserAnswerRecord> = useMemo(() => {
    const modAttempts = dataset.attempts[activeModule] || {};
    const map: Record<string, UserAnswerRecord> = {};
    Object.entries(modAttempts).forEach(([qid, att]) => {
      map[qid] = {
        selectedOption: att.selectedOption,
        selectedOptions: att.selectedOptions,
        isCorrect: att.isCorrect,
        timestamp: att.lastAttemptedAt,
      };
    });
    return map;
  }, [dataset.attempts, activeModule]);

  const bookmarks: Record<string, boolean> = useMemo(() => {
    return dataset.bookmarks[activeModule] || {};
  }, [dataset.bookmarks, activeModule]);

  const currentQuestion = questions[currentIndex] || questions[0];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  // Track last active question for OPD resume
  useEffect(() => {
    if (currentQuestion) {
      updateLastActive({
        moduleKey: activeModule,
        questionId: currentQuestion.id,
        index: currentIndex,
        topic: currentQuestion.topic,
        updatedAt: Date.now(),
      });
    }
  }, [currentQuestion, activeModule, currentIndex, updateLastActive]);

  // Answer handler for both FRCR 2A (SBA) and EDiR (MRQ)
  const selectAnswer = useCallback(
    (optionIndex: number) => {
      if (!currentQuestion) return;

      if (currentQuestion.isMrq && currentQuestion.correctAnswers) {
        // EDiR Multiple-Response Question handling
        const prevSelected = currentAnswer?.selectedOptions || [];
        const nextSelected = prevSelected.includes(optionIndex)
          ? prevSelected.filter((i) => i !== optionIndex)
          : [...prevSelected, optionIndex].sort();

        const correctSet = new Set(currentQuestion.correctAnswers);
        const isMatch =
          nextSelected.length === correctSet.size &&
          nextSelected.every((idx) => correctSet.has(idx));

        recordAttempt(activeModule, currentQuestion.id, optionIndex, isMatch, nextSelected);
      } else {
        // Standard FRCR 2A Single Best Answer
        const isCorrect = optionIndex === currentQuestion.correctAnswer;
        recordAttempt(activeModule, currentQuestion.id, optionIndex, isCorrect);
      }
    },
    [currentQuestion, currentAnswer, activeModule, recordAttempt]
  );

  const toggleBookmark = useCallback(() => {
    if (!currentQuestion) return;
    toggleBm(activeModule, currentQuestion.id);
  }, [currentQuestion, activeModule, toggleBm]);

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

  const goToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < questions.length) {
        setCurrentIndex(index);
        setIsGridOpen(false);
      }
    },
    [questions.length]
  );

  const switchModule = useCallback((mod: FrcrModuleKey, mistakesOnly: boolean = false, targetIndex: number = 0) => {
    setActiveModule(mod);
    setIsMistakesOnly(mistakesOnly);
    setCurrentIndex(targetIndex);
  }, []);

  const exitToHub = useCallback(() => {
    void flushPendingSync();
  }, [flushPendingSync]);

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
    isSyncing,
    selectAnswer,
    toggleBookmark,
    goToNext,
    goToPrev,
    goToQuestion,
    switchModule,
    exitToHub,
    analytics,
  };
}
