"use client";

import React from "react";
import { Pill, AlertTriangle, ShieldAlert, Calendar } from "lucide-react";
import { DrugProtocol } from "../../lib/types/clinical";

interface ProtocolPrescriptionTableProps {
  protocol: DrugProtocol;
}

export function ProtocolPrescriptionTable({ protocol }: ProtocolPrescriptionTableProps) {
  return (
    <div className="space-y-4">
      {/* Scheduled Prescriptions Table */}
      <div className="space-y-2 text-xs">
        <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Pill className="w-4 h-4 text-blue-600" />
          <span>Scheduled Discharge Prescriptions (RMSCL Formulary)</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-[11px] text-slate-400 uppercase font-mono">
                <th className="p-2.5">Medication &amp; Class</th>
                <th className="p-2.5">Dose &amp; Route</th>
                <th className="p-2.5">Frequency</th>
                <th className="p-2.5">Duration</th>
                <th className="p-2.5">Clinical Instructions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-[11px]">
              {protocol.prescriptions.map((rx, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-2.5">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">{rx.item}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{rx.category}</div>
                  </td>
                  <td className="p-2.5 font-mono text-slate-900 dark:text-slate-100 font-semibold">
                    {rx.dose} ({rx.route})
                  </td>
                  <td className="p-2.5 font-mono text-blue-600 dark:text-blue-400 font-semibold">{rx.freq}</td>
                  <td className="p-2.5 text-slate-700 dark:text-slate-300 font-mono">
                    <div>{rx.duration}</div>
                    {rx.stepDown && <div className="text-[10px] text-amber-600 mt-0.5">{rx.stepDown}</div>}
                  </td>
                  <td className="p-2.5 text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">{rx.instructions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conditional PRN Medications */}
      {protocol.prnMedications?.length > 0 && (
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-xs">
          <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Conditional PRN Medications (&quot;SOS Triggers&quot;)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {protocol.prnMedications.map((prn, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <div className="flex items-center justify-between text-amber-700 dark:text-amber-400 font-semibold text-[11px]">
                  <span>Trigger: {prn.trigger}</span>
                </div>
                <div className="font-semibold text-slate-900 dark:text-slate-100 text-xs mt-1">
                  {prn.drug} ({prn.dose})
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  {prn.instructions}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Safety Blood Reports & Recall Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {protocol.safetyLabsToMonitor?.length > 0 && (
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
              <span>Safety Blood Reports to Monitor</span>
            </div>
            <ul className="space-y-1.5 text-slate-500 dark:text-slate-400 text-[11px]">
              {protocol.safetyLabsToMonitor.map((lab, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{lab}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {protocol.recallSchedule?.length > 0 && (
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Structured Recall &amp; Follow-Up Timeline</span>
            </div>
            <ul className="space-y-1.5 text-slate-500 dark:text-slate-400 text-[11px]">
              {protocol.recallSchedule.map((rec, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
