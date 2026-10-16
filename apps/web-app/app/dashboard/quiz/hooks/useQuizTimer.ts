"use client";

import { useState, useEffect, useCallback } from "react";
import type { QuizMode } from "../types";

export function useQuizTimer(mode: QuizMode, initialSeconds: number = 10800) {
  const [seconds, setSeconds] = useState<number>(mode === "exam" ? initialSeconds : 0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    // Reset timer when mode changes
    if (mode === "exam") {
      setSeconds(initialSeconds);
    } else {
      setSeconds(0);
    }
    setIsRunning(true);
  }, [mode, initialSeconds]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (mode === "exam") {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        } else {
          return prev + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode]);

  const togglePause = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    setSeconds(mode === "exam" ? initialSeconds : 0);
    setIsRunning(true);
  }, [mode, initialSeconds]);

  // Format seconds into HH:MM:SS or MM:SS
  const formatTime = useCallback(() => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, [seconds]);

  return {
    seconds,
    isRunning,
    formattedTime: formatTime(),
    togglePause,
    resetTimer,
  };
}
