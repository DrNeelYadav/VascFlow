"use client";

import React from "react";
import { CaseSummaryDiagnosis, ProcedureDetailItem } from "./ihmsDischargeTemplates";

interface DischargeClinicalNarrativeProps {
  caseSummary: CaseSummaryDiagnosis;
  procedureDetails: ProcedureDetailItem[];
}


export function DischargeClinicalNarrative({
  caseSummary,
  procedureDetails,
}: DischargeClinicalNarrativeProps) {
  return (
    <div className="space-y-3 mb-4">
      <div className="border-l-2 border-slate-900 pl-2">
        <span className="text-[10px] uppercase font-bold text-slate-500 block">
          Final Clinical Diagnosis (ICD-10)
        </span>
        <span className="font-bold text-slate-950 text-xs">
          {caseSummary.diagnosis}
        </span>
      </div>

      <div className="border-l-2 border-slate-900 pl-2">
        <span className="text-[10px] uppercase font-bold text-slate-500 block">
          Procedure Performed &amp; Technique
        </span>
        {procedureDetails.map((proc, idx) => (
          <div key={idx} className="mt-0.5">
            <span className="font-bold text-slate-900">{proc.surgicalProcedure}: </span>
            <span className="text-slate-700 leading-relaxed">{proc.procedureDetail}</span>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-slate-900 pl-2">
        <span className="text-[10px] uppercase font-bold text-slate-500 block">
          Course in Hospital &amp; Presenting Complaints
        </span>
        <p className="text-slate-700 leading-relaxed">{caseSummary.caseHistory}</p>
      </div>
    </div>
  );
}
