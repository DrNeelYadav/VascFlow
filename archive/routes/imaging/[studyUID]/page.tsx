"use client";

import React from "react";
import { DicomViewer } from "@vascule/feature-dicom-viewer";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@vascule/ui-kit";

import { DicomStudyBridge } from "../DicomStudyBridge";

export default function ImagingViewerPage({
  params,
}: {
  params: { studyUID: string };
}) {
  const { studyUID } = params;
  const [useBridge, setUseBridge] = React.useState<boolean>(true);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#030712] text-white overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 px-3 sm:px-4 py-2 bg-gray-950 border-b border-gray-800">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Link href="/dashboard">
            <Button className="px-2 sm:px-2.5 py-1 text-xs bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 rounded flex items-center gap-1 cursor-pointer">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Workstation</span>
            </Button>
          </Link>
          <div className="h-4 w-px bg-gray-800" />
          <h1 className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 truncate">
            PACS Canvas
          </h1>
          <span className="text-[11px] sm:text-xs font-mono text-cyan-400 truncate max-w-[120px] sm:max-w-none">
            {studyUID}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setUseBridge(!useBridge)}
            className="px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs bg-gray-900 hover:bg-gray-800 text-cyan-400 border border-gray-800 rounded font-semibold transition cursor-pointer"
          >
            {useBridge ? "Standard" : "Multi-HUD"}
          </button>
          <Link href={`/dashboard/reports`}>
            <Button
              data-testid="btn-open-report-studio"
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold rounded flex items-center gap-1 cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Structured </span>Report
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Canvas Viewer */}
      <div className="flex-1 relative overflow-hidden">
        {useBridge ? (
          <DicomStudyBridge studyUID={studyUID} className="w-full h-full rounded-none border-none" />
        ) : (
          <DicomViewer studyUID={studyUID} className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
