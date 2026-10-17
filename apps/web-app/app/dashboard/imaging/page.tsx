"use client";

import React, { useState } from "react";
import { Film } from "lucide-react";
import { HorosAppShell } from "@/app/components/imaging/horos/HorosAppShell";
import { StudyViewport } from "@/app/components/imaging/horos/StudyViewport";
import { MENU_AVAILABILITY } from "./pacsDataContract";
import { usePacsWorkstation } from "./usePacsWorkstation";
import { useImagingViewportCommands } from "./useImagingViewportCommands";
import { useImagingDossier } from "./useImagingDossier";
import { ImagingCaseDossierView } from "./ImagingCaseDossierView";

export default function ImagingViewerPage() {
  const dossier = useImagingDossier();
  const [viewMode, setViewMode] = useState<"dossier" | "horos">(
    dossier.caseIdParam ? "dossier" : "horos"
  );
  const ws = usePacsWorkstation();
  const cmds = useImagingViewportCommands({
    queryStudies: ws.queryStudies,
    handleCloseStudy: ws.handleCloseStudy,
    setNotice: ws.setNotice,
  });

  if (viewMode === "dossier") {
    return (
      <ImagingCaseDossierView
        dossier={dossier}
        onSwitchToHoros={() => setViewMode("horos")}
      />
    );
  }

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between border-b border-slate-800 text-xs shrink-0">
        <span className="font-semibold text-slate-300">Horos DICOMweb PACS Workstation</span>
        <button
          type="button"
          onClick={() => setViewMode("dossier")}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer"
        >
          <Film className="w-3.5 h-3.5" />
          <span>Case Cine Loops &amp; Clinical Dossier</span>
        </button>
      </div>
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