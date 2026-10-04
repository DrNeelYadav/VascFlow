"use client";

import React from "react";
import { HorosAppShell } from "@/app/components/imaging/horos/HorosAppShell";
import { StudyViewport } from "@/app/components/imaging/horos/StudyViewport";
import { MENU_AVAILABILITY } from "./pacsDataContract";
import { usePacsWorkstation } from "./usePacsWorkstation";
import { useImagingViewportCommands } from "./useImagingViewportCommands";

export default function ImagingViewerPage() {
  const ws = usePacsWorkstation();
  const cmds = useImagingViewportCommands({
    queryStudies: ws.queryStudies,
    handleCloseStudy: ws.handleCloseStudy,
    setNotice: ws.setNotice,
  });

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <HorosAppShell
        connection={ws.connection}
        studies={ws.studies}
        series={ws.series}
        selectedStudyUid={ws.selectedStudyUid}
        onSelectStudy={ws.handleSelectStudy}
        selectedSeriesUid={ws.selectedSeriesUid}
        onSelectSeries={ws.setSelectedSeriesUid}
        selectedInstanceId={ws.selectedInstanceId}
        onSelectInstance={(_seriesUid, instanceId) => ws.setSelectedInstanceId(instanceId)}
        studiesLoading={ws.studiesLoading}
        seriesLoading={ws.seriesLoading}
        onQueryStudies={() => void ws.queryStudies()}
        lastSyncedAt={ws.lastSyncedAt}
        imageIds={ws.imageIds}
        ViewportComponent={StudyViewport}
        onViewportCommand={cmds.handleViewportCommand}
        onMenuCommand={cmds.handleMenuCommand}
        menuAvailability={MENU_AVAILABILITY}
        measurementCount={null}
        notice={ws.notice}
      />
    </div>
  );
}