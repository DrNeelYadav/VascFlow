"use client";

import React, { useState } from "react";
import { useDischargeSummary } from "./useDischargeSummary";
import { DischargeHeaderBar } from "./DischargeHeaderBar";
import { DischargeStatutoryDocument } from "./DischargeStatutoryDocument";
import { DischargeDetailsBox } from "./DischargeDetailsBox";
import { SurveillanceFollowUpTable } from "./SurveillanceFollowUpTable";

export default function DischargeSummaryPage() {
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

  const displayedSummary = React.useMemo(() => {
    if (!customAdvice) return activeSummary;
    return {
      ...activeSummary,
      dischargeDetails: {
        ...activeSummary.dischargeDetails,
        dischargeAdvice: customAdvice,
      },
    };
  }, [activeSummary, customAdvice]);

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

      {/* Dedicated Follow-up Surveillance Sheet (Excluding Sundays & Gazetted Holidays) */}
      <div className="pt-3 print:hidden">
        <SurveillanceFollowUpTable
          dischargeDateStr={displayedSummary.admissionDetails.dateOfDischarge}
          patientName={displayedSummary.admissionDetails.patientName}
          crUhid={displayedSummary.admissionDetails.hid}
          procedureName={displayedSummary.procedureDetails[0]?.surgicalProcedure || "IR Procedure"}
        />
      </div>
    </div>
  );
}
