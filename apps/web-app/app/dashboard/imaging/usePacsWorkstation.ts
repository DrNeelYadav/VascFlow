"use client";

import { usePacsStudies } from "./usePacsStudies";
import { usePacsStudyDetail } from "./usePacsStudyDetail";

export function usePacsWorkstation() {
  const studiesState = usePacsStudies();
  const detailState = usePacsStudyDetail({ setNotice: studiesState.setNotice });

  return {
    connection: studiesState.connection,
    studies: studiesState.studies,
    studiesLoading: studiesState.studiesLoading,
    lastSyncedAt: studiesState.lastSyncedAt,
    notice: studiesState.notice,
    setNotice: studiesState.setNotice,
    queryStudies: studiesState.queryStudies,
    selectedStudyUid: detailState.selectedStudyUid,
    series: detailState.series,
    seriesLoading: detailState.seriesLoading,
    selectedSeriesUid: detailState.selectedSeriesUid,
    setSelectedSeriesUid: detailState.setSelectedSeriesUid,
    selectedInstanceId: detailState.selectedInstanceId,
    setSelectedInstanceId: detailState.setSelectedInstanceId,
    imageIds: detailState.imageIds,
    handleSelectStudy: detailState.handleSelectStudy,
    handleCloseStudy: detailState.handleCloseStudy,
  };
}
