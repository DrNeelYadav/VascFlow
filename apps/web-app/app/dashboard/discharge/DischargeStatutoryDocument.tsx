"use client";

import React from "react";
import { IhmsDischargeSummaryData } from "./ihmsDischargeTemplates";
import { DischargeHospitalHeader } from "./DischargeHospitalHeader";
import { DischargeDemographicsGrid } from "./DischargeDemographicsGrid";
import { DischargeClinicalNarrative } from "./DischargeClinicalNarrative";
import { DischargeMedicationsTable } from "./DischargeMedicationsTable";
import { DischargeAdviceAndRedFlags } from "./DischargeAdviceAndRedFlags";
import { DischargeSignaturesBlock } from "./DischargeSignaturesBlock";

interface DischargeStatutoryDocumentProps {
  summary: IhmsDischargeSummaryData;
}

export function DischargeStatutoryDocument({ summary }: DischargeStatutoryDocumentProps) {
  return (
    <div className="bg-white text-slate-900 p-8 rounded-lg border border-slate-200 shadow-sm print:p-0 print:border-none print:shadow-none font-sans text-xs print-document print-avoid-break">
      <DischargeHospitalHeader />
      <DischargeDemographicsGrid admissionDetails={summary.admissionDetails} />
      <DischargeClinicalNarrative
        caseSummary={summary.caseSummary}
        procedureDetails={summary.procedureDetails}
      />
      <DischargeMedicationsTable medications={summary.dischargeMedications} />
      <DischargeAdviceAndRedFlags dischargeDetails={summary.dischargeDetails} />
      <DischargeSignaturesBlock unitHead={summary.admissionDetails.unitHead} />
    </div>
  );
}
