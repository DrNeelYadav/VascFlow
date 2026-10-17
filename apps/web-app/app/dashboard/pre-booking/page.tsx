"use client";

import React from "react";
import { usePreBookingStudio } from "./usePreBookingStudio";
import { PreBookingPatientBar } from "./PreBookingPatientBar";
import { PreBookingSheetRenderer } from "./PreBookingSheetRenderer";
import { ClinicalPipelineHeader } from "../common/ClinicalPipelineHeader";
import { Printer } from "lucide-react";

export default function PreBookingPage() {
  const {
    patients,
    selectedCategory,
    setSelectedCategory,
    isPrepopulated,
    patientName,
    setPatientName,
    age,
    setAge,
    sex,
    setSex,
    uhid,
    setUhid,
    contactNumber,
    setContactNumber,
    location,
    unit,
    scheduledDate,
    setScheduledDate,
    handleSelectPatient,
    handleModeChange,
    handlePrint,
  } = usePreBookingStudio();

  return (
    <div className="max-w-5xl mx-auto px-2 py-4 font-sans select-none space-y-4 print:p-0 print:m-0 print:max-w-none print:w-full print:block">
      {/* 1. Harmonized Clinical Pipeline Header */}
      <ClinicalPipelineHeader
        currentStage="pre-booking"
        title="Pre-Procedural Dating Form"
        subtitle="Official SMS Hospital A4 procedural dating worksheet with anatomical diagrams for surgeon pen annotations."
        activePatient={
          patientName
            ? {
                name: patientName,
                crUhid: uhid,
                ageSex: [age ? `${age}y` : "", sex].filter(Boolean).join(" / "),
              }
            : undefined
        }
        actions={
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print A4 Sheet</span>
          </button>
        }
      />

      {/* 2. Compact Procedure & Patient Pre-fill Toolbar */}
      <PreBookingPatientBar
        patients={patients}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        patientName={patientName}
        setPatientName={setPatientName}
        age={age}
        setAge={setAge}
        sex={sex}
        setSex={setSex}
        uhid={uhid}
        setUhid={setUhid}
        contactNumber={contactNumber}
        setContactNumber={setContactNumber}
        scheduledDate={scheduledDate}
        setScheduledDate={setScheduledDate}
        isPrepopulated={isPrepopulated}
        setIsPrepopulated={handleModeChange}
        onSelectPatient={handleSelectPatient}
        onPrint={handlePrint}
      />

      {/* 3. Single Standalone A4 Clinical Dating Sheet */}
      <div className="print:p-0 print:m-0 print-document print:block">
        <PreBookingSheetRenderer
          selectedCategory={selectedCategory}
          patientName={patientName}
          age={age}
          sex={sex}
          uhid={uhid}
          contactNumber={contactNumber}
          location={location}
          unit={unit}
          scheduledDate={scheduledDate}
        />
      </div>
    </div>
  );
}
