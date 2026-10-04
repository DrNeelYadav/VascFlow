"use client";

import React from "react";
import { OperativeNotesHeader } from "./OperativeNotesHeader";
import { RegistryPatientSearch } from "./RegistryPatientSearch";
import { CaseParametersForm } from "./CaseParametersForm";
import { OperativeNotePreview } from "./OperativeNotePreview";
import { useOperativeNoteState } from "./useOperativeNoteState";

export default function OperativeNotesPage() {
  const op = useOperativeNoteState();

  return (
    <div className="space-y-3 max-w-[1700px] mx-auto pb-12 select-none">
      <OperativeNotesHeader
        copyFeedback={op.copyFeedback}
        onCopy={op.handleCopy}
        onPrint={op.handlePrint}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
        <div className="lg:col-span-4 space-y-3 print:hidden">
          <RegistryPatientSearch
            patientSearch={op.patientSearch}
            setPatientSearch={op.setPatientSearch}
            patientSearchResults={op.patientSearchResults}
            onSelectPatient={op.handleSelectRegistryPatient}
          />
          <CaseParametersForm
            selectedProcedureId={op.selectedProcedureId}
            setSelectedProcedureId={op.setSelectedProcedureId}
            patientName={op.patientName}
            setPatientName={op.setPatientName}
            age={op.age}
            gender={op.gender}
            setAgeGender={op.setAgeGender}
            crNumber={op.crNumber}
            setCrNumber={op.setCrNumber}
            admissionNo={op.admissionNo}
            setAdmissionNo={op.setAdmissionNo}
            ipdBed={op.ipdBed}
            setIpdBed={op.setIpdBed}
            dateOfProcedure={op.dateOfProcedure}
            setDateOfProcedure={op.setDateOfProcedure}
            primaryOperator={op.primaryOperator}
            setPrimaryOperator={op.setPrimaryOperator}
            customAccessSite={op.customAccessSite}
            setCustomAccessSite={op.setCustomAccessSite}
            customContrast={op.customContrast}
            setCustomContrast={op.setCustomContrast}
            customIndication={op.customIndication}
            setCustomIndication={op.setCustomIndication}
          />
        </div>
        <div className="lg:col-span-8">
          <OperativeNotePreview text={op.operativeNoteText} />
        </div>
      </div>
    </div>
  );
}
