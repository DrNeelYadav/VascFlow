"use client";

import React from "react";
import { PaperDefinition } from "../data/papersRegistry";
import { Award, BookOpen, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

interface LiteratureBenchmarkViewProps {
  paper: PaperDefinition;
}

export function LiteratureBenchmarkView({ paper }: LiteratureBenchmarkViewProps) {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-[#DADCE0] p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              GLOBAL LITERATURE BENCHMARK
            </span>
            <span className="text-xs font-semibold text-[#5F6368]">
              {paper.targetJournal.split("(")[0]} Comparative Matrix
            </span>
          </div>
          <h2 className="text-lg font-bold text-[#202124] mt-1.5">
            Literature Benchmark &amp; Evidence Gap Resolution
          </h2>
          <p className="text-xs text-[#5F6368] mt-0.5">
            Side-by-side analysis contrasting the SMS Medical College cohort against international landmark series.
          </p>
        </div>

        <div className="bg-[#F8F9FA] rounded-xl border border-[#DADCE0] p-3 text-xs text-[#5F6368] shrink-0 text-right">
          <div>Target Journal: <strong className="text-[#202124]">{paper.targetJournal}</strong></div>
          <div>Impact Factor: <strong className="text-[#1A73E8]">{paper.journalImpactFactor} ({paper.journalQuartile})</strong></div>
        </div>
      </div>

      {/* Benchmark Matrix Table */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#202124] flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#1A73E8]" />
            Multi-Center Registry Comparison ({paper.shortName})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-[#F1F3F4] text-[#202124] border-b border-[#DADCE0] font-semibold">
              <tr>
                <th className="py-3 px-3 min-w-[190px]">Study &amp; Center</th>
                <th className="py-3 px-3 min-w-[150px]">Citation &amp; Journal</th>
                <th className="py-3 px-3 text-center w-24">Sample (n)</th>
                <th className="py-3 px-3 min-w-[200px]">Cohort Type</th>
                <th className="py-3 px-3 text-center w-28">Success Rate</th>
                <th className="py-3 px-3 text-center w-28">Adverse Events</th>
                <th className="py-3 px-3 min-w-[240px]">Critical Evidence Lacuna / Gap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0]">
              {paper.literatureBenchmarks.map((bm, index) => {
                const isCurrent = index === 0;

                return (
                  <tr
                    key={bm.studyName}
                    className={`hover:bg-[#F8F9FA] transition-colors ${
                      isCurrent ? "bg-blue-50/40 font-medium" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        {isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-[#1A73E8] shrink-0" />
                        )}
                        <span className={`font-semibold ${isCurrent ? "text-[#1A73E8]" : "text-[#202124]"}`}>
                          {bm.studyName}
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-[#5F6368] font-mono text-[11px]">
                      {bm.authorsYear} &bull; {bm.journal}
                    </td>

                    <td className="py-3 px-3 text-center font-mono font-bold text-[#202124]">
                      {bm.sampleSize}
                    </td>

                    <td className="py-3 px-3 text-[#5F6368]">{bm.cohortType}</td>

                    <td className="py-3 px-3 text-center font-mono font-bold text-emerald-700">
                      {bm.primarySuccessRate}
                    </td>

                    <td className="py-3 px-3 text-center font-mono text-red-600">
                      {bm.adverseEventsRate}
                    </td>

                    <td className="py-3 px-3 text-[#5F6368] leading-relaxed">
                      {bm.keyLimitationOrLacuna}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
