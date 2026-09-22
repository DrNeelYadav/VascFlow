"use client";

import React, { useState } from "react";
import { PaperDefinition, PublicationFigureSpec } from "../data/papersRegistry";
import {
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  Upload,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

interface DicomFigureTrackerProps {
  paper: PaperDefinition;
  figureStatuses: Record<string, string>;
  figureImages: Record<string, string>;
  onUpdateFigureStatus: (figureId: string, status: string) => void;
  onUpdateFigureImage: (figureId: string, imageUrl: string) => void;
}

export function DicomFigureTracker({
  paper,
  figureStatuses,
  figureImages,
  onUpdateFigureStatus,
  onUpdateFigureImage,
}: DicomFigureTrackerProps) {
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const capturedCount = paper.requiredFigures.filter((f) => {
    const st = figureStatuses[f.id] || f.defaultStatus;
    return st === "Snip Captured" || st === "Ready for Submission";
  }).length;

  const pendingCount = paper.requiredFigures.length - capturedCount;

  // Copy Single Legend
  const handleCopyLegend = (legend: string, figNum: number) => {
    navigator.clipboard.writeText(legend);
    setCopiedNotification(`Copied legend for Figure ${figNum} to clipboard.`);
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  // Copy All Legends for Journal Submission
  const handleCopyAllLegends = () => {
    const allLegends = paper.requiredFigures
      .map((f) => f.detailedLegend)
      .join("\n\n");
    navigator.clipboard.writeText(allLegends);
    setCopiedNotification("Copied all 5 figure legends to clipboard.");
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header & Status Summary */}
      <div className="bg-white rounded-2xl border border-[#DADCE0] p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
              DICOM FIGURE REQUIREMENT CHECKLIST
            </span>
            <span className="text-xs font-semibold text-[#5F6368]">
              {paper.targetJournal.split("(")[0]} Standards
            </span>
          </div>
          <h2 className="text-lg font-bold text-[#202124] mt-1.5">
            Publication Figures Required for {paper.shortName}
          </h2>
          <p className="text-xs text-[#5F6368] mt-0.5">
            Retrieve angiographic runs from Radiant/Horos or PACS, snip high-resolution images, and attach or link them below.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#F8F9FA] rounded-xl border border-[#DADCE0] px-4 py-2.5 text-right">
            <div className="text-[11px] text-[#5F6368] font-medium">Snip Capture Status</div>
            <div className="text-sm font-bold text-[#202124]">
              <span className="text-emerald-600">{capturedCount} Captured</span> &bull;{" "}
              <span className={pendingCount > 0 ? "text-amber-600" : "text-gray-400"}>
                {pendingCount} Pending
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyAllLegends}
            className="px-3.5 py-2.5 rounded-xl bg-[#1A73E8] hover:bg-blue-600 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            <span>Copy All Legends</span>
          </button>
        </div>
      </div>

      {/* Copy Toast */}
      {copiedNotification && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{copiedNotification}</span>
        </div>
      )}

      {/* 5 Required Figures List */}
      <div className="space-y-4">
        {paper.requiredFigures.map((fig) => {
          const currentStatus = figureStatuses[fig.id] || fig.defaultStatus;
          const currentImage = figureImages[fig.id] || "";
          const isDone = currentStatus === "Snip Captured" || currentStatus === "Ready for Submission";

          return (
            <div
              key={fig.id}
              className={`bg-white rounded-xl border transition-all p-5 shadow-xs ${
                isDone ? "border-emerald-200 bg-emerald-50/10" : "border-[#DADCE0]"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#202124] text-white font-mono">
                      FIG {fig.figureNumber}
                    </span>
                    <h3 className="text-sm font-bold text-[#202124]">{fig.title}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F1F3F4] text-[#5F6368] border border-gray-200">
                      {fig.targetModality}
                    </span>
                  </div>

                  <p className="text-xs text-[#202124] font-medium leading-relaxed">
                    {fig.shortCaption}
                  </p>

                  <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#DADCE0] text-xs text-[#5F6368] font-mono leading-relaxed relative group">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-sans text-[#202124]">
                        {fig.detailedLegend}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyLegend(fig.detailedLegend, fig.figureNumber)}
                        className="px-2 py-1 rounded bg-white hover:bg-gray-100 text-[#1A73E8] text-[10px] font-semibold border border-[#DADCE0] shrink-0 transition flex items-center gap-1 cursor-pointer"
                        title="Copy Legend"
                      >
                        <Copy className="w-3 h-3" /> Copy
                      </button>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#5F6368] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#1A73E8]" />
                    <span>
                      Suggested DICOM Landmark / Run: <strong>{fig.suggestedDicomSeries}</strong>
                    </span>
                  </div>
                </div>

                {/* Right: Status Switcher & Image Attachment */}
                <div className="lg:w-72 shrink-0 space-y-3 pt-2 lg:pt-0 lg:border-l lg:border-[#F1F3F4] lg:pl-4">
                  <div>
                    <label className="text-[11px] font-semibold text-[#5F6368] block mb-1">
                      Figure Status
                    </label>
                    <select
                      value={currentStatus}
                      onChange={(e) => onUpdateFigureStatus(fig.id, e.target.value)}
                      className={`w-full py-1.5 px-2.5 rounded-lg border text-xs font-semibold focus:outline-none ${
                        isDone
                          ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                          : "bg-amber-50 text-amber-800 border-amber-300"
                      }`}
                    >
                      <option value="Pending DICOM Snip">Pending DICOM Snip</option>
                      <option value="Snip Captured">Snip Captured</option>
                      <option value="Ready for Submission">Ready for Submission</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#5F6368] block mb-1">
                      Image Path or URL
                    </label>
                    <input
                      type="text"
                      value={currentImage}
                      onChange={(e) => {
                        onUpdateFigureImage(fig.id, e.target.value);
                        if (e.target.value && currentStatus === "Pending DICOM Snip") {
                          onUpdateFigureStatus(fig.id, "Snip Captured");
                        }
                      }}
                      placeholder="e.g. E:\DSA SMS jaipur\03_Patient_DICOM\fig1.png"
                      className="w-full py-1.5 px-2.5 rounded-lg border border-[#DADCE0] text-xs font-mono text-[11px] bg-[#F8F9FA] focus:outline-none focus:border-[#1A73E8]"
                    />
                  </div>

                  {/* Thumbnail Preview if provided */}
                  {currentImage ? (
                    <div className="relative rounded-lg overflow-hidden border border-[#DADCE0] bg-gray-50 max-h-28 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={currentImage}
                        alt={`Figure ${fig.figureNumber}`}
                        className="object-contain max-h-28 w-full"
                        onError={(e) => {
                          // fallback if local file protocol isn't directly fetchable by img tag
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <span className="text-[10px] text-gray-500 font-mono p-1 break-all text-center">
                        {currentImage.split("\\").pop()?.split("/").pop()}
                      </span>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg border border-dashed border-[#DADCE0] text-center text-[10px] text-[#5F6368] flex items-center justify-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-gray-400" />
                      <span>No image snip attached</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
