"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import type {
  FrcrModuleKey,
  QuestionAttemptRecord,
  MasteryLevelInfo,
  DailyProgressPoint,
} from "../types";

const LOCAL_STORAGE_KEY = "vascflow_frcr_quiz_firestore_v2";

const MASTERY_LEVELS: MasteryLevelInfo[] = [
  { level: 1, title: "Radiology Intern", badge: "BookOpen", minCompleted: 0, minAccuracy: 0 },
  { level: 2, title: "Junior Resident", badge: "Sparkles", minCompleted: 100, minAccuracy: 50 },
  { level: 3, title: "Senior Resident", badge: "ShieldCheck", minCompleted: 350, minAccuracy: 60 },
  { level: 4, title: "Registrar", badge: "Award", minCompleted: 750, minAccuracy: 70 },
  { level: 5, title: "FRCR 2A Exam-Ready", badge: "GraduationCap", minCompleted: 1200, minAccuracy: 75 },
];

export interface ModuleAttemptsMap {
  [questionId: string]: QuestionAttemptRecord;
}

export interface StoredQuizDataset {
  attempts: Record<FrcrModuleKey, ModuleAttemptsMap>;
  history: Array<{ date: string; attempted: number; correct: number }>;
  lastUpdated: number;
}

const DEFAULT_DATASET: StoredQuizDataset = {
  attempts: { PAEDS: {}, MSK: {}, CHEST: {}, GUT: {}, GIT: {}, CNS: {} },
  history: [],
  lastUpdated: Date.now(),
};

export function useQuizFirestore() {
  const [dataset, setDataset] = useState<StoredQuizDataset>(() => {
    if (typeof window === "undefined") return DEFAULT_DATASET;
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : DEFAULT_DATASET;
    } catch {
      return DEFAULT_DATASET;
    }
  });

  // Background Firestore initial load
  useEffect(() => {
    async function loadFromFirestore() {
      if (!db) return;
      try {
        const docRef = doc(db, "frcr_progress", "neel_yadav_dossier");
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const cloudData = snap.data() as StoredQuizDataset;
          if (cloudData.lastUpdated && cloudData.lastUpdated > dataset.lastUpdated) {
            setDataset(cloudData);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cloudData));
          }
        }
      } catch (err) {
        console.warn("[Firestore] Quiz progress offline fallback active:", err);
      }
    }
    void loadFromFirestore();
  }, []);

  // Save changes locally and sync to Cloud Firestore
  const persistDataset = useCallback((updated: StoredQuizDataset) => {
    setDataset(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {}

    if (db) {
      const docRef = doc(db, "frcr_progress", "neel_yadav_dossier");
      void setDoc(docRef, updated, { merge: true }).catch((err) => {
        console.warn("[Firestore] Failed to push quiz progress:", err);
      });
    }
  }, []);

  // Record an answer attempt
  const recordAttempt = useCallback(
    (modKey: FrcrModuleKey, questionId: string, selectedOption: number, isCorrect: boolean) => {
      setDataset((prev) => {
        const modAttempts = { ...(prev.attempts[modKey] || {}) };
        const existing = modAttempts[questionId];
        const newStreak = isCorrect ? (existing ? existing.correctStreak + 1 : 1) : 0;
        const inMistake = !isCorrect || newStreak < 2;

        modAttempts[questionId] = {
          selectedOption,
          isCorrect,
          attemptCount: (existing?.attemptCount || 0) + 1,
          correctStreak: newStreak,
          isInMistakeQueue: inMistake,
          lastAttemptedAt: Date.now(),
        };

        const today = new Date().toISOString().slice(0, 10);
        const historyCopy = [...prev.history];
        const dayIdx = historyCopy.findIndex((h) => h.date === today);
        if (dayIdx >= 0) {
          historyCopy[dayIdx] = {
            date: today,
            attempted: historyCopy[dayIdx].attempted + 1,
            correct: historyCopy[dayIdx].correct + (isCorrect ? 1 : 0),
          };
        } else {
          historyCopy.push({ date: today, attempted: 1, correct: isCorrect ? 1 : 0 });
        }

        const updated: StoredQuizDataset = {
          ...prev,
          attempts: { ...prev.attempts, [modKey]: modAttempts },
          history: historyCopy,
          lastUpdated: Date.now(),
        };

        persistDataset(updated);
        return updated;
      });
    },
    [persistDataset]
  );

  // Aggregated analytics metrics
  const analytics = useMemo(() => {
    let totalAttempted = 0;
    let totalCorrect = 0;
    const moduleStats: Record<FrcrModuleKey, { attempted: number; correct: number; mistakes: number }> = {
      PAEDS: { attempted: 0, correct: 0, mistakes: 0 },
      MSK: { attempted: 0, correct: 0, mistakes: 0 },
      CHEST: { attempted: 0, correct: 0, mistakes: 0 },
      GUT: { attempted: 0, correct: 0, mistakes: 0 },
      GIT: { attempted: 0, correct: 0, mistakes: 0 },
      CNS: { attempted: 0, correct: 0, mistakes: 0 },
    };

    (Object.keys(dataset.attempts) as FrcrModuleKey[]).forEach((mod) => {
      const atts = Object.values(dataset.attempts[mod] || {});
      const attCount = atts.length;
      const corCount = atts.filter((a) => a.isCorrect).length;
      const misCount = atts.filter((a) => a.isInMistakeQueue).length;

      moduleStats[mod] = { attempted: attCount, correct: corCount, mistakes: misCount };
      totalAttempted += attCount;
      totalCorrect += corCount;
    });

    const accuracyPercent = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

    // Calculate Mastery Level
    let currentLevel = MASTERY_LEVELS[0];
    for (let i = MASTERY_LEVELS.length - 1; i >= 0; i--) {
      const lvl = MASTERY_LEVELS[i];
      if (totalAttempted >= lvl.minCompleted && accuracyPercent >= lvl.minAccuracy) {
        currentLevel = lvl;
        break;
      }
    }

    // Progression History Points
    const dailyPoints: DailyProgressPoint[] = dataset.history.slice(-14).map((h) => ({
      date: h.date,
      attempted: h.attempted,
      correct: h.correct,
      accuracy: h.attempted > 0 ? Math.round((h.correct / h.attempted) * 100) : 0,
    }));

    return {
      totalAttempted,
      totalCorrect,
      accuracyPercent,
      currentLevel,
      moduleStats,
      dailyPoints,
    };
  }, [dataset]);

  return {
    dataset,
    analytics,
    recordAttempt,
  };
}
