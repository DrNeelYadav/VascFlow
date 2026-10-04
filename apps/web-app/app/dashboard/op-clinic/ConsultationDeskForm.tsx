"use client";

import React, { useMemo } from "react";
import type { UseOpClinicDeskReturn } from "./useOpClinicDesk";
import { ClinicalDisposition } from "../../types/clinical";
import { ConsultationDeskIntakeHeader } from "./ConsultationDeskIntakeHeader";
import { ConsultationDeskDemographics } from "./ConsultationDeskDemographics";
import { ConsultationDeskClinicalBlock } from "./ConsultationDeskClinicalBlock";
import { ConsultationDeskDispositionMatrix } from "./ConsultationDeskDispositionMatrix";
import { ConsultationDeskSchedulingBar } from "./ConsultationDeskSchedulingBar";

export interface ConsultationDeskFormProps {
  desk: UseOpClinicDeskReturn;
}

export function ConsultationDeskForm({ desk }: ConsultationDeskFormProps) {
  const vacantBeds = useMemo(
    () => desk.beds.filter((b) => b.status === "vacant"),
    [desk.beds]
  );

  const handleDispositionSelect = (key: ClinicalDisposition) => {
    desk.setDisposition(key);

    if (key === "STAT_CATH_LAB") {
      desk.setSelectedBedId("stat");
      desk.setIsOnCallBooking(false);
      desk.setUrgencyCategory("Emergency / STAT");
    } else if (key === "ADMIT_WARD_PREOP") {
      desk.setIsOnCallBooking(false);
      if (
        desk.selectedBedId === "none" ||
        desk.selectedBedId === "stat" ||
        desk.selectedBedId === "on_call"
      ) {
        const firstVacant = desk.beds.find((b) => b.status === "vacant");
        desk.setSelectedBedId(firstVacant ? firstVacant.id : "Ward-01");
      }
    } else if (key === "ELECTIVE_OUTPATIENT") {
      desk.setSelectedBedId("none");
      desk.setIsOnCallBooking(false);
    } else if (key === "DEFERRED_REVIEW_SOS") {
      desk.setSelectedBedId("on_call");
      desk.setIsOnCallBooking(true);
    } else {
      desk.setSelectedBedId("none");
      desk.setIsOnCallBooking(false);
    }
  };

  const onAdmitToWardClick = () => {
    desk.setDisposition("ADMIT_WARD_PREOP");
    desk.handleAdmitWardPreOp();
  };

  return (
    <form onSubmit={desk.handleSaveConsultation} className="space-y-5">
      <ConsultationDeskIntakeHeader desk={desk} />
      <ConsultationDeskDemographics desk={desk} />
      <ConsultationDeskClinicalBlock desk={desk} />
      <ConsultationDeskDispositionMatrix
        desk={desk}
        handleDispositionSelect={handleDispositionSelect}
      />
      <ConsultationDeskSchedulingBar
        desk={desk}
        vacantBedsCount={vacantBeds.length}
        onAdmitToWardClick={onAdmitToWardClick}
      />
    </form>
  );
}
