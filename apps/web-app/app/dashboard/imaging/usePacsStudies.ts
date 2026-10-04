"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  HorosStudyRow,
  PacsConnectionStatus,
} from "@/app/components/imaging/horos/horosTypes";
import {
  STATUS_ROUTE,
  STUDIES_ROUTE,
  STUDY_LIMIT,
  UNNAMED_PACS,
  UNPROBED_CONNECTION,
  describeFailure,
  readJson,
  type PacsStatusBody,
  type PacsStudySummary,
} from "./pacsDataContract";
import { clean, toStudyRow } from "./dicomMetadataParser";

export function usePacsStudies() {
  const [connection, setConnection] = useState<PacsConnectionStatus>(UNPROBED_CONNECTION);
  const [studies, setStudies] = useState<HorosStudyRow[]>([]);
  const [studiesLoading, setStudiesLoading] = useState(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const studiesAbortRef = useRef<AbortController | null>(null);

  const queryStudies = useCallback(async () => {
    studiesAbortRef.current?.abort();
    const controller = new AbortController();
    studiesAbortRef.current = controller;
    setStudiesLoading(true);

    try {
      let status: PacsStatusBody;
      try {
        status = await readJson<PacsStatusBody>(STATUS_ROUTE, controller.signal);
      } catch (cause) {
        const failure = describeFailure(cause);
        if (failure.length === 0) return;
        setConnection({
          state: "unreachable",
          baseUrl: UNNAMED_PACS,
          version: null,
          checkedAt: new Date().toISOString(),
          error: failure,
        });
        setStudies([]);
        setNotice(failure);
        return;
      }

      const readable = status.reachable && status.dicomWebAvailable === true;
      setConnection({
        state: readable ? "connected" : "unreachable",
        baseUrl: clean(status.orthancName) ?? UNNAMED_PACS,
        version: clean(status.orthancVersion),
        checkedAt: status.checkedAt,
        error: readable ? null : status.message,
      });

      if (!readable) {
        setStudies([]);
        setNotice(status.message);
        return;
      }

      const body = await readJson<{ studies?: PacsStudySummary[] }>(
        `${STUDIES_ROUTE}?limit=${STUDY_LIMIT}`,
        controller.signal,
      );
      setStudies(Array.isArray(body.studies) ? body.studies.map(toStudyRow) : []);
      setLastSyncedAt(new Date().toISOString());
      setNotice(null);
    } catch (cause) {
      const failure = describeFailure(cause);
      if (failure.length === 0) return;
      setStudies([]);
      setNotice(failure);
    } finally {
      if (studiesAbortRef.current === controller) {
        studiesAbortRef.current = null;
        setStudiesLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    void queryStudies();
    return () => {
      studiesAbortRef.current?.abort();
    };
  }, [queryStudies]);

  return {
    connection,
    studies,
    studiesLoading,
    lastSyncedAt,
    notice,
    setNotice,
    queryStudies,
  };
}
