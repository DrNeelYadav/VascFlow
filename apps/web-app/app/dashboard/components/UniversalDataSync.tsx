"use client";

import { useEffect } from "react";
import {
  useEndoflowStore,
  type BedRecord,
  type BookedCaseRecord,
  type CtReviewRecord,
  type EndoflowPatient,
} from "../useEndoflowStore";

interface ClinicalSyncPayload {
  patients: EndoflowPatient[];
  beds: BedRecord[];
  ctReviews: CtReviewRecord[];
  bookedCases: BookedCaseRecord[];
}

/** Fetch role-filtered live data through the authenticated server boundary. */
export function UniversalDataSync() {
  useEffect(() => {
    let active = true;

    const refresh = async () => {
      try {
        const response = await fetch("/api/clinical-sync", {
          cache: "no-store",
          credentials: "same-origin",
        });

        if (response.status === 401) {
          if (active) {
            useEndoflowStore.setState({
              patients: [],
              beds: [],
              ctReviews: [],
              bookedCases: [],
              dopplerRecords: [],
              currentStaff: null,
            });
          }
          return;
        }

        if (!response.ok) throw new Error(`Live data request failed (${response.status}).`);
        const payload = (await response.json()) as ClinicalSyncPayload;
        if (!active) return;

        useEndoflowStore.getState().setPatients(payload.patients || []);
        useEndoflowStore.getState().setBeds(payload.beds || []);
        useEndoflowStore.getState().setCtReviews(payload.ctReviews || []);
        useEndoflowStore.getState().setBookedCases(payload.bookedCases || []);
      } catch {
        if (active) {
          useEndoflowStore.getState().setSyncAlert(
            "Live cloud data is unavailable. Changes are not being synchronized."
          );
        }
      }
    };

    void refresh();
    const interval = window.setInterval(() => void refresh(), 60_000);
    window.addEventListener("focus", refresh);

    return () => {
      active = false;
      window.clearInterval(interval);
      window.removeEventListener("focus", refresh);
    };
  }, []);

  return null;
}
