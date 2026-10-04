"use client";

import React from "react";
import { HeartPulse } from "lucide-react";
import { NursingLabRowsHematology } from "./NursingLabRowsHematology";
import { NursingLabRowsBiochemistry } from "./NursingLabRowsBiochemistry";
import type { useConsentStudio } from "./useConsentStudio";

interface NursingLabSafetyTableProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function NursingLabSafetyTable({ studio }: NursingLabSafetyTableProps) {
  const { weightKg, setWeightKg, macdLimitMl } = studio;

  return (
    <div className="flex flex-col gap-2 text-xs">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-1 flex-wrap gap-2">
        <span className="font-bold uppercase tracking-wider text-zinc-900 text-xs flex items-center gap-1.5">
          <HeartPulse className="w-4 h-4 text-blue-600" />
          Pre-Op Laboratory Safety Thresholds (आवश्यक लैब जांचें व सुरक्षा सीमाएं):
        </span>
        <span className="text-xs font-mono text-zinc-600 flex items-center gap-1.5 flex-wrap">
          <span>Weight:</span>
          <span className="print:hidden">
            <input
              type="text"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              placeholder="e.g. 65"
              className="w-16 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white font-mono text-xs font-bold text-zinc-900 outline-none focus:border-blue-500"
            />
            <span className="ml-1 text-zinc-500 font-normal">kg</span>
          </span>
          <span className="hidden print:inline font-bold text-zinc-950">
            {weightKg ? `${weightKg} kg` : "—"}
          </span>
          <span>• Cigarroa MACD:</span>
          <span className={macdLimitMl ? "font-bold text-zinc-950" : "italic text-zinc-500 font-normal"}>
            {macdLimitMl ? `${macdLimitMl} mL` : "Record serum creatinine to compute limit"}
          </span>
        </span>
      </div>

      <div className="border border-zinc-200 rounded-lg overflow-x-auto">
        <table className="w-full text-left text-xs sm:min-w-[500px]">
          <thead className="bg-zinc-100 text-xs font-semibold text-zinc-700 border-b border-zinc-200">
            <tr>
              <th className="px-3 py-2">Investigation (जांच)</th>
              <th className="px-3 py-2">Safe Target</th>
              <th className="px-3 py-2">Patient Value (मरीज की रिपोर्ट)</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Clinical Action if Abnormal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            <NursingLabRowsHematology studio={studio} />
            <NursingLabRowsBiochemistry studio={studio} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
