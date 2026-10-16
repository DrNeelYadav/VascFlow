"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export interface DraftVaultOptions<T> {
  key: string;
  initialData: T;
  debounceMs?: number;
}

export function useContinuousDraftVault<T>({
  key,
  initialData,
  debounceMs = 2000,
}: DraftVaultOptions<T>) {
  const [data, setData] = useState<T>(initialData);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [hasRecoveredDraft, setHasRecoveredDraft] = useState<boolean>(false);
  const [savedDataSnapshot, setSavedDataSnapshot] = useState<T | null>(null);
  const isInitialMount = useRef<boolean>(true);

  // Check for existing saved draft on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`endoflow_draft_${key}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.data && parsed.timestamp) {
          setSavedDataSnapshot(parsed.data);
          setLastSaved(parsed.timestamp);
          setHasRecoveredDraft(true);
        }
      }
    } catch {
      // Ignore storage read errors
    }
  }, [key]);

  // Debounced auto-save on change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const handler = setTimeout(() => {
      try {
        const timestamp = new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        localStorage.setItem(
          `endoflow_draft_${key}`,
          JSON.stringify({ data, timestamp })
        );
        setLastSaved(timestamp);
      } catch {
        // Local storage quota fallback
      }
    }, debounceMs);

    return () => clearTimeout(handler);
  }, [data, key, debounceMs]);

  const restoreDraft = useCallback(() => {
    if (savedDataSnapshot) {
      setData(savedDataSnapshot);
      setHasRecoveredDraft(false);
    }
  }, [savedDataSnapshot]);

  const dismissDraft = useCallback(() => {
    setHasRecoveredDraft(false);
  }, []);

  const clearVault = useCallback(() => {
    try {
      localStorage.removeItem(`endoflow_draft_${key}`);
      setLastSaved(null);
      setHasRecoveredDraft(false);
      setSavedDataSnapshot(null);
    } catch {
      // Ignore
    }
  }, [key]);

  return {
    data,
    setData,
    lastSaved,
    hasRecoveredDraft,
    restoreDraft,
    dismissDraft,
    clearVault,
  };
}
