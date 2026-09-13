"use client";

import React from "react";
import { DicomViewer } from "@vascule/feature-dicom-viewer";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@vascule/ui-kit";

export default function ImagingViewerPage({
  params,
}: {
  params: { studyUID: string };
}) {
  const { studyUID } = params;

  return (
    <div className="flex flex-col h-screen w-screen bg-black text-white overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-950 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button className="px-2 py-1 text-xs bg-gray-900 text-gray-300 hover:bg-gray-800 rounded flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Workstation
            </Button>
          </Link>
          <div className="h-4 w-px bg-gray-800" />
          <h1 className="text-sm font-semibold tracking-wide text-gray-200">
            PACS Imaging Canvas
          </h1>
          <span className="text-xs font-mono text-gray-500">
            {studyUID}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/dashboard/report/${studyUID}`}>
            <Button
              data-testid="btn-open-report-studio"
              className="px-3 py-1.5 text-xs bg-blue-600 text-white hover:bg-blue-700 rounded flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Open Structured Report
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Canvas Viewer */}
      <div className="flex-1 relative overflow-hidden">
        <DicomViewer studyUID={studyUID} className="w-full h-full" />
      </div>
    </div>
  );
}
