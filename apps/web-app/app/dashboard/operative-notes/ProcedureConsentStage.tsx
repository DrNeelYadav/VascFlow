"use client";

import React, { useEffect } from "react";
import { useConsentStudio } from "../consent/useConsentStudio";
import { ConsentHeader } from "../consent/ConsentHeader";
import { ConsentDemographicsForm } from "../consent/ConsentDemographicsForm";
import { ConsentStatutoryDocument } from "../consent/ConsentStatutoryDocument";
import { NursingPreOpChecklistPanel } from "../consent/NursingPreOpChecklistPanel";

interface ProcedureConsentStageProps {
  patientName: string;
  age: string;
  sex: string;
  uhid: string;
  procedureTitle?: string;
}

export const ProcedureConsentStage: React.FC<ProcedureConsentStageProps> = ({
  patientName,
  age,
  sex,
  uhid,
}) => {
  const studio = useConsentStudio();

  // Automatically pre-fill active patient demographics from OPD clinic
  useEffect(() => {
    if (patientName && !studio.patientName) studio.setPatientName(patientName);
    if (age && !studio.patientAge) studio.setPatientAge(age);
    if (sex && !studio.patientGender) studio.setPatientGender(sex === "Male" ? "Male" : "Female");
    if (uhid && !studio.crNumber) studio.setCrNumber(uhid);
  }, [patientName, age, sex, uhid, studio]);

  return (
    <div className="flex flex-col gap-4 max-w-5xl mx-auto font-sans text-zinc-900 pb-12 print:p-0 print:m-0 print:max-w-none print:w-full print:block">
      <ConsentHeader studio={studio} />
      <ConsentDemographicsForm studio={studio} />
      {studio.activeTab === "CONSENT" && <ConsentStatutoryDocument studio={studio} />}
      {studio.activeTab === "PREPARATION" && <NursingPreOpChecklistPanel studio={studio} />}
    </div>
  );
};
