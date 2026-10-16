"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useDischargeSummary } from "./useDischargeSummary";
import { DischargeHeaderBar } from "./DischargeHeaderBar";
import { DischargeStatutoryDocument } from "./DischargeStatutoryDocument";
import { DischargeDetailsBox } from "./DischargeDetailsBox";
import { SurveillanceFollowUpTable } from "./SurveillanceFollowUpTable";
import { ClinicalPipelineHeader } from "../common/ClinicalPipelineHeader";
import { PageBreakDivider } from "../common/PageBreakDivider";

function DischargeSummaryContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get("caseId");
  const {
    patients,
    selectedPatientId,
    setSelectedPatientId,
    activeSummary,
    copied,
    handleCopy,
    handlePrint,
  } = useDischargeSummary(caseId);

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
    <div className="max-w-6xl mx-auto px-2 py-4 pb-12 font-sans select-none space-y-4">
      {/* 1. Harmonized 5-Stage Clinical Pipeline Header */}
      <ClinicalPipelineHeader
        currentStage="discharge"
        title="Rajasthan IHMS e-Hospital Discharge Summary"
        subtitle="Statutory electronic discharge ticket, RMSCL e-Aushadhi medication kit, and post-op surveillance schedule."
        activePatient={
          displayedSummary.admissionDetails.patientName
            ? {
                name: displayedSummary.admissionDetails.patientName,
                crUhid: displayedSummary.admissionDetails.hid,
                ageSex: [
                  displayedSummary.admissionDetails.age,
                  displayedSummary.admissionDetails.gender,
                ]
                  .filter(Boolean)
                  .join(" / "),
                procedure: displayedSummary.procedureDetails[0]?.surgicalProcedure,
              }
            : undefined
        }
      />

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

      {/* Dedicated Follow-up Surveillance Sheet (Excluding Sundays & Gazetted Holidays) */}
      <div className="pt-2 print:block">
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

export default function DischargeSummaryPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading discharge summary...</div>}>
      <DischargeSummaryContent />
    </Suspense>
  );
}
