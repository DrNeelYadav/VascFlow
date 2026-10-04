"use client";

import React from "react";
import { DischargeMedicationItem } from "./ihmsDischargeTemplates";

interface DischargeMedicationsTableProps {
  medications: DischargeMedicationItem[];
}


export function DischargeMedicationsTable({ medications }: DischargeMedicationsTableProps) {
  return (
    <div className="mb-4">
      <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1 border-b border-slate-200 pb-1">
        Discharge Medications (Rajasthan RMSCL Formulary)
      </h3>
      <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <table className="w-full text-left text-xs border border-slate-300 border-collapse">
          <thead>
            <tr className="bg-slate-100 text-[10px] font-bold text-slate-700 uppercase border-b border-slate-300">
              <th className="p-1.5 w-8 text-center">#</th>
              <th className="p-1.5">Medicine Name</th>
              <th className="p-1.5 w-16">Route</th>
              <th className="p-1.5 w-20">Frequency</th>
              <th className="p-1.5 w-16">Days</th>
              <th className="p-1.5">Instructions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {medications.map((med, index) => (
              <tr key={index}>
                <td className="p-1.5 text-center font-mono text-slate-500">{index + 1}</td>
                <td className="p-1.5 font-semibold text-slate-900">{med.medicine}</td>
                <td className="p-1.5 font-mono text-[11px] text-slate-600">{med.route}</td>
                <td className="p-1.5 font-bold text-slate-800">{med.frequency}</td>
                <td className="p-1.5 font-mono text-slate-700">{med.days} D</td>
                <td className="p-1.5 text-slate-600">{med.instructions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
