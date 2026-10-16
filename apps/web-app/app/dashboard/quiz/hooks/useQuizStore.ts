"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { FrcrModuleKey, FrcrQuestion, QuizMode, UserAnswerRecord } from "../types";
import { getQuestionsForModule, FRCR_MODULES } from "../data";

const STORAGE_PREFIX = "endoflow_frcr2a_";

export function useQuizStore() {
  const [activeModule, setActiveModule] = useState<FrcrModuleKey>("PAEDS");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mode, setMode] = useState<QuizMode>("tutor");
  const [answers, setAnswers] = useState<Record<string, UserAnswerRecord>>({});
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);

  // Load questions for the active module
  const questions: FrcrQuestion[] = useMemo(() => {
    return getQuestionsForModule(activeModule);
  }, [activeModule]);

  // Load saved progress from localStorage on module change
  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem(`${STORAGE_PREFIX}answers_${activeModule}`);
      if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
      else setAnswers({});

      const savedBookmarks = localStorage.getItem(`${STORAGE_PREFIX}bookmarks_${activeModule}`);
      if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
      else setBookmarks({});

      const savedIndex = localStorage.getItem(`${STORAGE_PREFIX}index_${activeModule}`);
      if (savedIndex) {
        const parsedIdx = parseInt(savedIndex, 10);
        if (!isNaN(parsedIdx) && parsedIdx >= 0 && parsedIdx < (getQuestionsForModule(activeModule).length || 1)) {
          setCurrentIndex(parsedIdx);
        } else {
          setCurrentIndex(0);
        }
      } else {
        setCurrentIndex(0);
      }
    } catch {}
  }, [activeModule]);

  // Sync index to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}index_${activeModule}`, String(currentIndex));
    } catch {}
  }, [activeModule, currentIndex]);

  const currentQuestion = questions[currentIndex] || questions[0];

  const selectAnswer = useCallback(
    (optionIndex: number) => {
      if (!currentQuestion) return;
      const isCorrect = optionIndex === currentQuestion.correctAnswer;
      const newAnswers = {
        ...answers,
        [currentQuestion.id]: {
          selectedOption: optionIndex,
          isCorrect,
          timestamp: Date.now(),
        },
      };
      setAnswers(newAnswers);
      try {
        localStorage.setItem(`${STORAGE_PREFIX}answers_${activeModule}`, JSON.stringify(newAnswers));
      } catch {}
    },
    [currentQuestion, answers, activeModule]
  );

  const toggleBookmark = useCallback(() => {
    if (!currentQuestion) return;
    const nextState = !bookmarks[currentQuestion.id];
    const newBookmarks = { ...bookmarks, [currentQuestion.id]: nextState };
    setBookmarks(newBookmarks);
    try {
      localStorage.setItem(`${STORAGE_PREFIX}bookmarks_${activeModule}`, JSON.stringify(newBookmarks));
    } catch {}
  }, [currentQuestion, bookmarks, activeModule]);

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

  const switchModule = useCallback((mod: FrcrModuleKey) => {
    setActiveModule(mod);
    setCurrentIndex(0);
  }, []);

  const resetModuleProgress = useCallback(() => {
    setAnswers({});
    setBookmarks({});
    setCurrentIndex(0);
    setIsSummaryOpen(false);
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}answers_${activeModule}`);
      localStorage.removeItem(`${STORAGE_PREFIX}bookmarks_${activeModule}`);
      localStorage.removeItem(`${STORAGE_PREFIX}index_${activeModule}`);
    } catch {}
  }, [activeModule]);

  // Statistics
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
    answers,
    currentAnswer: currentQuestion ? answers[currentQuestion.id] : undefined,
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
    resetModuleProgress,
  };
}
