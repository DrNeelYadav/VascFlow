"use client";

import React, { useState, useMemo } from "react";
import { useDischargeSummary } from "../discharge/useDischargeSummary";
import { DischargeHeaderBar } from "../discharge/DischargeHeaderBar";
import { DischargeStatutoryDocument } from "../discharge/DischargeStatutoryDocument";
import { DischargeDetailsBox } from "../discharge/DischargeDetailsBox";
import { SurveillanceFollowUpTable } from "../discharge/SurveillanceFollowUpTable";
import { PageBreakDivider } from "../common/PageBreakDivider";

interface ProcedureDischargeStageProps {
  patientName?: string;
  age?: string;
  sex?: string;
  uhid?: string;
  procedureTitle?: string;
}

export const ProcedureDischargeStage: React.FC<ProcedureDischargeStageProps> = ({
  patientName,
  age,
  sex,
  uhid,
  procedureTitle,
}) => {
  const {
    patients,
    selectedPatientId,
    setSelectedPatientId,
    activeSummary,
    copied,
    handleCopy,
    handlePrint,
  } = useDischargeSummary();

  const [customAdvice, setCustomAdvice] = useState<string | null>(null);

  const displayedSummary = useMemo(() => {
    let summary = activeSummary;
    if (patientName || uhid) {
      summary = {
        ...summary,
        admissionDetails: {
          ...summary.admissionDetails,
          patientName: patientName || summary.admissionDetails.patientName,
          age: age ? String(age) : summary.admissionDetails.age,
          gender: sex === "Female" ? "F" : "M",
          hid: uhid || summary.admissionDetails.hid,
        },
      };
    }
    if (customAdvice) {
      summary = {
        ...summary,
        dischargeDetails: {
          ...summary.dischargeDetails,
          generalAdvise: customAdvice,
        },
      };
    }
    return summary;
  }, [activeSummary, customAdvice, patientName, age, sex, uhid]);

  return (
    <div className="space-y-4 max-w-6xl mx-auto pb-12 select-none">
      <DischargeHeaderBar
        patients={patients}
        selectedPatientId={selectedPatientId}
        onSelectPatient={(id) => {
          setSelectedPatientId(id);
          setCustomAdvice(null);
        }}
        copied={copied}
        onCopy={handleCopy}
        onPrint={handlePrint}
      />

      {/* Structured Dropdown-to-Narrative Assistant Box */}
      <DischargeDetailsBox onInsertAdvice={(elaborated) => setCustomAdvice(elaborated)} />

      {/* Official Rajasthan IHMS e-Hospital Standard Discharge Document */}
      <DischargeStatutoryDocument summary={displayedSummary} />

      {/* Page break divider before Surveillance follow-up sheet */}
      <PageBreakDivider
        label="Post-Operative Surveillance &amp; Doppler Review Schedule"
        pageNumber={2}
        totalPages={2}
      />

      {/* Dedicated Follow-up Surveillance Sheet */}
      <div className="pt-2 print:block">
        <SurveillanceFollowUpTable
          dischargeDateStr={displayedSummary.admissionDetails.dateOfDischarge}
          patientName={displayedSummary.admissionDetails.patientName}
          crUhid={displayedSummary.admissionDetails.hid}
          procedureName={procedureTitle || displayedSummary.procedureDetails[0]?.surgicalProcedure || "IR Procedure"}
        />
      </div>
    </div>
  );
};
