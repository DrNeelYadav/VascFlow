"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useDischargeSummary } from "./useDischargeSummary";
import { DischargeHeaderBar } from "./DischargeHeaderBar";
import { DischargeStatutoryDocument } from "./DischargeStatutoryDocument";
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

  return (
    <div className="max-w-6xl mx-auto px-2 py-4 pb-12 font-sans select-none space-y-4">
      {/* 1. Harmonized 5-Stage Clinical Pipeline Header */}
      <ClinicalPipelineHeader
        currentStage="discharge"
        title="Rajasthan IHMS e-Hospital Discharge Summary"
        subtitle="Statutory electronic discharge ticket, RMSCL e-Aushadhi medication kit, and post-op surveillance schedule."
        activePatient={
          activeSummary.admissionDetails.patientName
            ? {
                name: activeSummary.admissionDetails.patientName,
                crUhid: activeSummary.admissionDetails.hid,
                ageSex: [
                  activeSummary.admissionDetails.age,
                  activeSummary.admissionDetails.gender,
                ]
                  .filter(Boolean)
                  .join(" / "),
                procedure: activeSummary.procedureDetails[0]?.surgicalProcedure,
              }
            : undefined
        }
      />

      <DischargeHeaderBar
        patients={patients}
        selectedPatientId={selectedPatientId}
        onSelectPatient={(id) => {
          setSelectedPatientId(id);
        }}
        copied={copied}
        onCopy={handleCopy}
        onPrint={handlePrint}
      />

      {/* Official Rajasthan IHMS e-Hospital Standard Discharge Document */}
      <DischargeStatutoryDocument summary={activeSummary} />

      {/* Page break divider before Surveillance follow-up sheet */}
      <PageBreakDivider
        label="Post-Operative Surveillance &amp; Doppler Review Schedule"
        pageNumber={2}
        totalPages={2}
      />

      {/* Dedicated Follow-up Surveillance Sheet (Excluding Sundays & Gazetted Holidays) */}
      <div className="pt-2 print:block">
        <SurveillanceFollowUpTable
          dischargeDateStr={activeSummary.admissionDetails.dateOfDischarge}
          patientName={activeSummary.admissionDetails.patientName}
          crUhid={activeSummary.admissionDetails.hid}
          procedureName={activeSummary.procedureDetails[0]?.surgicalProcedure || "—"}
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
