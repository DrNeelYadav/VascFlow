"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import type { FrcrModuleKey, StoredQuizDataset, LastActiveSession } from "../types";
import { deepMergeDatasets, computeQuizAnalytics } from "./quizAnalyticsHelper";

const LOCAL_STORAGE_KEY = "vascflow_frcr_quiz_firestore_v3";

const DEFAULT_DATASET: StoredQuizDataset = {
  attempts: { PAEDS: {}, MSK: {}, CHEST: {}, GUT: {}, GIT: {}, CNS: {} },
  bookmarks: { PAEDS: {}, MSK: {}, CHEST: {}, GUT: {}, GIT: {}, CNS: {} },
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

  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const pendingSyncRef = useRef<boolean>(false);
  const latestDatasetRef = useRef<StoredQuizDataset>(dataset);
  latestDatasetRef.current = dataset;

  useEffect(() => {
    async function loadFromFirestore() {
      if (!db) return;
      try {
        const docRef = doc(db, "frcr_progress", "neel_yadav_dossier");
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const cloudData = snap.data() as StoredQuizDataset;
          const merged = deepMergeDatasets(latestDatasetRef.current, cloudData);
          setDataset(merged);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));
        }
      } catch (err) {
        console.warn("[Firestore] Initial load offline fallback active:", err);
      }
    }
    void loadFromFirestore();
  }, []);

  const flushPendingSync = useCallback(async () => {
    const current = latestDatasetRef.current;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(current));
    } catch {}

    if (!db) return;
    try {
      setIsSyncing(true);
      const docRef = doc(db, "frcr_progress", "neel_yadav_dossier");
      await setDoc(docRef, current, { merge: true });
      pendingSyncRef.current = false;
    } catch (err) {
      console.warn("[Firestore] Session sync warning:", err);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && pendingSyncRef.current) {
        void flushPendingSync();
      }
    };
    window.addEventListener("visibilitychange", handleVisibilityChange);
    return () => window.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [flushPendingSync]);

  const recordAttempt = useCallback(
    (
      modKey: FrcrModuleKey,
      questionId: string,
      selectedOption: number,
      isCorrect: boolean,
      selectedOptions?: number[]
    ) => {
      setDataset((prev) => {
        const modAttempts = { ...(prev.attempts[modKey] || {}) };
        const existing = modAttempts[questionId];
        const newStreak = isCorrect ? (existing ? existing.correctStreak + 1 : 1) : 0;
        const inMistake = !isCorrect || newStreak < 2;

        modAttempts[questionId] = {
          selectedOption,
          selectedOptions,
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

        pendingSyncRef.current = true;
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
        } catch {}
        return updated;
      });
    },
    []
  );

  const toggleBookmark = useCallback((modKey: FrcrModuleKey, questionId: string) => {
    setDataset((prev) => {
      const modBms = { ...(prev.bookmarks[modKey] || {}) };
      modBms[questionId] = !modBms[questionId];
      const updated: StoredQuizDataset = {
        ...prev,
        bookmarks: { ...prev.bookmarks, [modKey]: modBms },
        lastUpdated: Date.now(),
      };
      pendingSyncRef.current = true;
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const updateLastActive = useCallback((lastActive: LastActiveSession) => {
    setDataset((prev) => {
      const updated: StoredQuizDataset = { ...prev, lastActive, lastUpdated: Date.now() };
      pendingSyncRef.current = true;
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const analytics = useMemo(() => computeQuizAnalytics(dataset), [dataset]);

  return {
    dataset,
    analytics,
    isSyncing,
    recordAttempt,
    toggleBookmark,
    updateLastActive,
    flushPendingSync,
  };
}
