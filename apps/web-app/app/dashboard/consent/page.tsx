"use client";

import React from "react";
import { Printer } from "lucide-react";
import { useConsentStudio } from "./useConsentStudio";
import { ConsentDemographicsForm } from "./ConsentDemographicsForm";
import { ConsentStatutoryDocument } from "./ConsentStatutoryDocument";
import { ClinicalPipelineHeader } from "../common/ClinicalPipelineHeader";

export default function ConsentPage() {
  const studio = useConsentStudio();

  return (
    <div className="max-w-5xl mx-auto px-2 py-4 font-sans select-none space-y-4 print:p-0 print:m-0 print:max-w-none print:w-full print:block">
      {/* 1. Harmonized Clinical Pipeline Header */}
      <ClinicalPipelineHeader
        currentStage="consent"
        title="Informed Consent &amp; Statutory Authorization"
        subtitle="Official statutory bilingual IR procedure consent document, patient risk counseling, and legal authorizations."
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
        actions={
          <button
            type="button"
            onClick={studio.handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Consent Form</span>
          </button>
        }
      />

      {/* 2. Patient Demographics & Procedure Selection */}
      <ConsentDemographicsForm studio={studio} />

      {/* 3. Official Bilingual Statutory Consent Document */}
      <ConsentStatutoryDocument studio={studio} />
    </div>
  );
}
