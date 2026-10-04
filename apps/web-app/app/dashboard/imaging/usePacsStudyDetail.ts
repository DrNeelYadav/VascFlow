"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { HorosSeriesRow } from "@/app/components/imaging/horos/horosTypes";
import {
  buildImageId,
  describeFailure,
  instanceMetadataRoute,
  readJson,
  studyRoute,
  type DicomJsonRecord,
  type PacsStudyDetailBody,
} from "./pacsDataContract";
import {
  groupInstancesBySeries,
  sortInstances,
  toSeriesRow,
  type LoadedInstance,
} from "./dicomMetadataParser";

interface UsePacsStudyDetailProps {
  setNotice: (msg: string | null) => void;
}

export function usePacsStudyDetail({ setNotice }: UsePacsStudyDetailProps) {
  const [selectedStudyUid, setSelectedStudyUid] = useState<string | null>(null);
  const [series, setSeries] = useState<HorosSeriesRow[]>([]);
  const [seriesLoading, setSeriesLoading] = useState(false);
  const [selectedSeriesUid, setSelectedSeriesUid] = useState<string | null>(null);
  const [selectedInstanceId, setSelectedInstanceId] = useState<string | null>(null);

  const [instancesBySeries, setInstancesBySeries] = useState<ReadonlyMap<string, LoadedInstance[]>>(
    new Map(),
  );

  const detailAbortRef = useRef<AbortController | null>(null);
  const metadataAbortRef = useRef<AbortController | null>(null);

  const openStudy = useCallback(async (studyUid: string) => {
    detailAbortRef.current?.abort();
    metadataAbortRef.current?.abort();
    const detailController = new AbortController();
    detailAbortRef.current = detailController;

    setSeriesLoading(true);
    setSeries([]);
    setSelectedSeriesUid(null);
    setSelectedInstanceId(null);
    setInstancesBySeries(new Map());

    let detail: PacsStudyDetailBody;
    try {
      detail = await readJson<PacsStudyDetailBody>(studyRoute(studyUid), detailController.signal);
    } catch (cause) {
      const failure = describeFailure(cause);
      if (failure.length > 0) setNotice(`This study could not be opened. ${failure}`);
      return;
    } finally {
      if (detailAbortRef.current === detailController) {
        detailAbortRef.current = null;
        setSeriesLoading(false);
      }
    }

    const metadataController = new AbortController();
    metadataAbortRef.current = metadataController;
    let records: DicomJsonRecord[] = [];
    try {
      const body = await readJson<DicomJsonRecord[]>(
        instanceMetadataRoute(studyUid),
        metadataController.signal,
      );
      if (Array.isArray(body)) records = body;
    } catch (cause) {
      const failure = describeFailure(cause);
      if (failure.length > 0) {
        setNotice(
          `Series are listed, but instance metadata could not be read, so no pixels can be shown. ${failure}`,
        );
      }
    } finally {
      if (metadataAbortRef.current === metadataController) {
        metadataAbortRef.current = null;
        setSeriesLoading(false);
      }
    }

    const grouped = groupInstancesBySeries(records);

    const rows = detail.series.map((entry) =>
      toSeriesRow(entry, grouped.get(entry.seriesInstanceUID) ?? []),
    );

    setInstancesBySeries(grouped);
    setSeries(rows);
    setNotice(null);

    const firstPopulated = rows.find((row) => row.loadedInstanceCount > 0);
    setSelectedSeriesUid((firstPopulated ?? rows[0])?.seriesUid ?? null);
  }, [setNotice]);

  const handleSelectStudy = useCallback(
    (studyUid: string) => {
      setSelectedStudyUid(studyUid);
      void openStudy(studyUid);
    },
    [openStudy],
  );

  const handleCloseStudy = useCallback(() => {
    detailAbortRef.current?.abort();
    metadataAbortRef.current?.abort();
    setSelectedStudyUid(null);
    setSeries([]);
    setSelectedSeriesUid(null);
    setSelectedInstanceId(null);
    setInstancesBySeries(new Map());
  }, []);

  const { imageIds, metadataByImageId } = useMemo(() => {
    if (!selectedStudyUid || !selectedSeriesUid) {
      return {
        imageIds: [] as string[],
        metadataByImageId: new Map<string, DicomJsonRecord>(),
      };
    }
    const instances = instancesBySeries.get(selectedSeriesUid) ?? [];
    const ids: string[] = [];
    const metadata = new Map<string, DicomJsonRecord>();
    for (const instance of sortInstances(instances)) {
      if (!instance.sopInstanceUID) continue;
      for (let frame = 1; frame <= instance.frameCount; frame += 1) {
        const imageId = buildImageId(
          selectedStudyUid,
          selectedSeriesUid,
          instance.sopInstanceUID,
          frame,
        );
        ids.push(imageId);
        metadata.set(imageId, instance.record);
      }
    }
    return { imageIds: ids, metadataByImageId: metadata };
  }, [instancesBySeries, selectedSeriesUid, selectedStudyUid]);

  useEffect(() => {
    if (metadataByImageId.size === 0) return;
    let cancelled = false;

    void (async () => {
      try {
        const { initialiseCornerstone } = await import(
          "@/app/components/imaging/cornerstone/init"
        );
        const runtime = await initialiseCornerstone();
        if (cancelled) return;

        const store = runtime.loader.wadors.metaDataManager;
        metadataByImageId.forEach((record, imageId) => {
          try {
            store.add(imageId, record as unknown as Parameters<typeof store.add>[1]);
          } catch {
            // continue
          }
        });
      } catch (cause) {
        if (cancelled) return;
        const detail = cause instanceof Error ? cause.message : "";
        setNotice(
          detail.length > 0
            ? `The image engine could not start. ${detail}`
            : "The image engine could not start.",
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [metadataByImageId, setNotice]);

  return {
    selectedStudyUid,
    series,
    seriesLoading,
    selectedSeriesUid,
    setSelectedSeriesUid,
    selectedInstanceId,
    setSelectedInstanceId,
    imageIds,
    handleSelectStudy,
    handleCloseStudy,
  };
}
