"use client";

import React from "react";
import { PaperDefinition } from "../data/papersRegistry";
import { PaperCaseRecord } from "../data/allSixPapersData";
import {
  FileText,
  FileSpreadsheet,
  BarChart3,
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  ExternalLink,
  BookOpen,
} from "lucide-react";

interface StudioCockpitProps {
  papers: PaperDefinition[];
  activePaperId: string;
  onSelectPaper: (id: string) => void;
  onNavigateTab: (tab: "sheet" | "analytics" | "figures" | "docs" | "benchmark") => void;
  allCases: Record<string, PaperCaseRecord[]>;
  figureStatuses: Record<string, Record<string, string>>;
}

export function StudioCockpit({
  papers,
  activePaperId,
  onSelectPaper,
  onNavigateTab,
  allCases,
  figureStatuses,
}: StudioCockpitProps) {
  // Aggregate overall metrics across all 6 papers
  const totalCasesAllPapers = Object.values(allCases).reduce((acc, list) => acc + list.length, 0);

  const totalReviewedCases = Object.values(allCases).reduce(
    (acc, list) => acc + list.filter((c) => c.reviewStatus === "Completed").length,
    0
  );

  const totalFiguresCount = papers.reduce((acc, p) => acc + p.requiredFigures.length, 0);

  const totalCapturedFigures = papers.reduce((acc, p) => {
    const pStatuses = figureStatuses[p.id] || {};
    const captured = p.requiredFigures.filter((f) => {
      const st = pStatuses[f.id] || f.defaultStatus;
      return st === "Snip Captured" || st === "Ready for Submission";
    }).length;
    return acc + captured;
  }, 0);

  const totalPendingFigures = totalFiguresCount - totalCapturedFigures;

  return (
    <div className="space-y-6">
      {/* Top Clinical & Research Cockpit Summary Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#5F6368]">Total Cohort Cases</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#202124]">{totalCasesAllPapers}</span>
            <span className="text-xs text-[#5F6368]">across 6 papers</span>
          </div>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">100% authentic SMS records</p>
        </div>

        <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#5F6368]">Reviewed Cases</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#202124]">{totalReviewedCases}</span>
            <span className="text-xs text-[#5F6368]">/ {totalCasesAllPapers}</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2 overflow-hidden">
            <div
              className="bg-emerald-500 h-1.5 rounded-full transition-all"
              style={{
                width: `${totalCasesAllPapers > 0 ? (totalReviewedCases / totalCasesAllPapers) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#5F6368]">DICOM Figure Snips</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <ImageIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-600">{totalPendingFigures}</span>
            <span className="text-xs text-[#5F6368]">pending snips</span>
          </div>
          <p className="text-[11px] text-[#5F6368] mt-1">
            {totalCapturedFigures} of {totalFiguresCount} captured
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#5F6368]">Manuscripts Pipeline</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-indigo-600">6 Papers</span>
            <span className="text-xs text-[#5F6368]">IMRAD drafted</span>
          </div>
          <p className="text-[11px] text-indigo-600 font-medium mt-1">JVIR, CVIR, AJNR, JVA</p>
        </div>
      </div>

      {/* 6 Paper Portfolio Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#5F6368]">
              Active Research Papers &amp; Publication Streams
            </h2>
            <p className="text-xs text-[#5F6368]">
              Select a paper to edit its real dataset, review biostatistics, capture DICOM figures, or compose the manuscript.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {papers.map((paper, idx) => {
            const paperCases = allCases[paper.id] || [];
            const reviewedCount = paperCases.filter((c) => c.reviewStatus === "Completed").length;
            const pStatuses = figureStatuses[paper.id] || {};
            const capturedFigures = paper.requiredFigures.filter((f) => {
              const st = pStatuses[f.id] || f.defaultStatus;
              return st === "Snip Captured" || st === "Ready for Submission";
            }).length;
            const pendingFigures = paper.requiredFigures.length - capturedFigures;
            const isSelected = paper.id === activePaperId;

            return (
              <div
                key={paper.id}
                onClick={() => onSelectPaper(paper.id)}
                className={`bg-white rounded-xl border transition-all p-5 flex flex-col justify-between cursor-pointer hover:shadow-md ${
                  isSelected
                    ? "border-[#1A73E8] ring-2 ring-[#1A73E8]/20 shadow-xs"
                    : "border-[#DADCE0] hover:border-[#BDC1C6]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                      PAPER #{idx + 1} &bull; {paper.code}
                    </span>
                    <span className="text-[10px] font-semibold text-[#5F6368] bg-[#F1F3F4] px-2 py-0.5 rounded">
                      {paper.targetJournal.split("(")[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#202124] mt-2.5 line-clamp-2 leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-[#5F6368] mt-1.5">
                    Primary Scheme:{" "}
                    <strong className="text-[#202124]">{paper.primaryClassificationName}</strong>
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F1F3F4] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5F6368] flex items-center gap-1.5">
                        <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" /> Authentic Cases:
                      </span>
                      <span className="font-bold text-[#202124]">{paperCases.length} cases</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5F6368] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Review Status:
                      </span>
                      <span className="font-medium text-[#202124]">
                        {reviewedCount} / {paperCases.length} ({Math.round(paperCases.length > 0 ? (reviewedCount / paperCases.length) * 100 : 0)}%)
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5F6368] flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-amber-600" /> Figure Snips:
                      </span>
                      <span
                        className={`font-semibold ${
                          pendingFigures > 0 ? "text-amber-600" : "text-emerald-600"
                        }`}
                      >
                        {capturedFigures} / {paper.requiredFigures.length} ({pendingFigures} pending)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1F3F4] flex items-center justify-between gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPaper(paper.id);
                      onNavigateTab("sheet");
                    }}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-[#F8F9FA] hover:bg-[#E8F0FE] text-[#1A73E8] text-[11px] font-semibold border border-[#DADCE0] hover:border-[#1A73E8] transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <FileSpreadsheet className="w-3 h-3" /> Data Sheet
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPaper(paper.id);
                      onNavigateTab("analytics");
                    }}
                    className="py-1.5 px-2.5 rounded-lg bg-[#F8F9FA] hover:bg-gray-100 text-[#5F6368] hover:text-[#202124] text-[11px] font-semibold border border-[#DADCE0] transition flex items-center justify-center gap-1 cursor-pointer"
                    title="Live On-The-Go Analytics"
                  >
                    <BarChart3 className="w-3 h-3" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPaper(paper.id);
                      onNavigateTab("figures");
                    }}
                    className="py-1.5 px-2.5 rounded-lg bg-[#F8F9FA] hover:bg-gray-100 text-[#5F6368] hover:text-[#202124] text-[11px] font-semibold border border-[#DADCE0] transition flex items-center justify-center gap-1 cursor-pointer"
                    title="DICOM Figure Snips"
                  >
                    <ImageIcon className="w-3 h-3" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPaper(paper.id);
                      onNavigateTab("docs");
                    }}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-[#202124] hover:bg-black text-white text-[11px] font-semibold transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <FileText className="w-3 h-3" /> Docs
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
