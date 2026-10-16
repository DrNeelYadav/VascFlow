"use client";

import React from "react";
import { useConsentStudio } from "./useConsentStudio";
import { ConsentHeader } from "./ConsentHeader";
import { ConsentDemographicsForm } from "./ConsentDemographicsForm";
import { ConsentStatutoryDocument } from "./ConsentStatutoryDocument";
import { NursingPreOpChecklistPanel } from "./NursingPreOpChecklistPanel";
import { ClinicalPipelineHeader } from "../common/ClinicalPipelineHeader";

export default function ConsentPage() {
  const studio = useConsentStudio();

  return (
    <div className="max-w-6xl mx-auto px-2 py-4 font-sans select-none space-y-4 print:p-0 print:m-0 print:max-w-none print:w-full print:block">
      {/* 1. Harmonized 5-Stage Clinical Pipeline Header */}
      <ClinicalPipelineHeader
        currentStage="consent"
        title="Informed Consent &amp; Statutory Authorization"
        subtitle="Statutory bilingual IR procedure consent document, patient risk counseling, and nursing pre-op checklist."
        activePatient={
          studio.patientName
            ? {
                name: studio.patientName,
                crUhid: studio.crNumber,
                ageSex: [studio.patientAge ? `${studio.patientAge}y` : "", studio.patientGender]
                  .filter(Boolean)
                  .join(" / "),
              }
            : undefined
        }
      />

      {/* 2. Consent Tabs & Language Controls */}
      <ConsentHeader studio={studio} />

      {/* 3. Case Selection & Demographics */}
      <ConsentDemographicsForm studio={studio} />

      {/* 4. Active Document View */}
      {studio.activeTab === "CONSENT" && <ConsentStatutoryDocument studio={studio} />}
      {studio.activeTab === "PREPARATION" && <NursingPreOpChecklistPanel studio={studio} />}
    </div>
  );
}
