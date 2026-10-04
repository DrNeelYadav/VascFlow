"use client";

import React from "react";
import { useDischargeSummary } from "./useDischargeSummary";
import { DischargeHeaderBar } from "./DischargeHeaderBar";
import { DischargeStatutoryDocument } from "./DischargeStatutoryDocument";

// Re-export pure domain synthesis engine for tests and external consumers
export * from "./dischargeSynthesisEngine";

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

  return (
    <div className="space-y-4 max-w-6xl mx-auto pb-12 select-none">
      <DischargeHeaderBar
        patients={patients}
        selectedPatientId={selectedPatientId}
        onSelectPatient={setSelectedPatientId}
        copied={copied}
        onCopy={handleCopy}
        onPrint={handlePrint}
      />
      <DischargeStatutoryDocument summary={activeSummary} />
    </div>
  );
}
