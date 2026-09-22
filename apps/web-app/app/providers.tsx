"use client";

import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { collection, onSnapshot } from "firebase/firestore";
import { db, isFirebaseConfigured } from "./lib/firebase";
import { useEndoflowStore } from "./dashboard/useEndoflowStore";

export interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Enterprise Application Providers wrapping Next.js App Router in TanStack Query.
 * Maintains an isolated QueryClient instance per browser session to prevent SSR state leaks.
 * Subscribes to real-time Firestore sync when running in browser with valid configuration.
 */
export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute standard cache freshness
            gcTime: 5 * 60 * 1000, // 5 minutes garbage collection window
            retry: 2,
            refetchOnWindowFocus: false, // Critical for surgical workstations to prevent disruptive updates
          },
        },
      })
  );

  useEffect(() => {
    if (typeof window === "undefined" || !isFirebaseConfigured()) {
      return;
    }

    let unsubPatients: () => void = () => {};
    let unsubCases: () => void = () => {};

    try {
      unsubPatients = onSnapshot(
        collection(db, "patients"),
        (snapshot) => {
          if (!snapshot.empty) {
            useEndoflowStore.setState((state) => {
              const patientMap = new Map(state.patients.map((p) => [p.id, p]));
              snapshot.docs.forEach((doc) => {
                const data = { id: doc.id, ...doc.data() } as any;
                const existing = patientMap.get(data.id);
                if (existing) {
                  patientMap.set(data.id, { ...existing, ...data });
                } else {
                  patientMap.set(data.id, data);
                }
              });
              return { patients: Array.from(patientMap.values()) };
            });
          }
        },
        (error) => {
          console.warn("[Firestore Real-Time Sync] 'patients' subscription warning:", error?.message || error);
        }
      );
    } catch (err) {
      console.warn("[Firestore Real-Time Sync] 'patients' setup error:", err);
    }

    try {
      unsubCases = onSnapshot(
        collection(db, "cases"),
        (snapshot) => {
          if (!snapshot.empty) {
            (useEndoflowStore.setState as any)((state: any) => {
              if (state.cases !== undefined || "cases" in state) {
                const caseMap = new Map((state.cases || []).map((c: any) => [c.id || c.caseId, c]));
                snapshot.docs.forEach((doc) => {
                  const data = { id: doc.id, ...doc.data() };
                  const key = data.id || (data as any).caseId;
                  const existing = caseMap.get(key);
                  caseMap.set(key, existing ? { ...existing, ...data } : data);
                });
                return { cases: Array.from(caseMap.values()) };
              }
              return {};
            });
          }
        },
        (error) => {
          console.warn("[Firestore Real-Time Sync] 'cases' subscription warning:", error?.message || error);
        }
      );
    } catch (err) {
      console.warn("[Firestore Real-Time Sync] 'cases' setup error:", err);
    }

    return () => {
      unsubPatients();
      unsubCases();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

