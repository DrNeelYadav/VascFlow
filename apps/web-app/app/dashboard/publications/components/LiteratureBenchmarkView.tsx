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
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              LITERATURE COMPARISON
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {paper.targetJournal.split("(")[0]} Comparative Matrix
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1.5">
            Literature Comparison &amp; Evidence Gap Resolution
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Side-by-side analysis contrasting the SMS Medical College cohort against international landmark series.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 p-3 text-xs text-slate-500 dark:text-slate-400 shrink-0 text-right">
          <div>Target Journal: <strong className="text-slate-900 dark:text-slate-100">{paper.targetJournal}</strong></div>
          <div>Impact Factor: <strong className="text-blue-600 dark:text-blue-400">{paper.journalImpactFactor} ({paper.journalQuartile})</strong></div>
        </div>
      </div>

      {/* Benchmark Matrix Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-700 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Multi-Center Registry Comparison ({paper.shortName})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 font-semibold">
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
            <tbody className="divide-y divide-slate-300 dark:divide-slate-700">
              {paper.literatureBenchmarks.map((bm, index) => {
                const isCurrent = index === 0;

                return (
                  <tr
                    key={bm.studyName}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${
                      isCurrent ? "bg-blue-50/40 dark:bg-blue-950/20 font-medium" : "bg-white dark:bg-slate-800"
                    }`}
                  >
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        {isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                        )}
                        <span className={`font-semibold ${isCurrent ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-100"}`}>
                          {bm.studyName}
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                      {bm.authorsYear} &bull; {bm.journal}
                    </td>

                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-900 dark:text-slate-100">
                      {bm.sampleSize}
                    </td>

                    <td className="py-3 px-3 text-slate-500 dark:text-slate-400">{bm.cohortType}</td>

                    <td className="py-3 px-3 text-center font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      {bm.primarySuccessRate}
                    </td>

                    <td className="py-3 px-3 text-center font-mono text-red-600 dark:text-red-400">
                      {bm.adverseEventsRate}
                    </td>

                    <td className="py-3 px-3 text-slate-500 dark:text-slate-400 leading-relaxed">
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
