"use client";

import React from "react";
import { NursingPrepHeader } from "./NursingPrepHeader";
import { NursingLabSafetyTable } from "./NursingLabSafetyTable";
import { NursingMedicationAndChecklist } from "./NursingMedicationAndChecklist";
import type { useConsentStudio } from "./useConsentStudio";

interface NursingPreOpChecklistPanelProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function NursingPreOpChecklistPanel({ studio }: NursingPreOpChecklistPanelProps) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-xl border border-zinc-200 shadow-sm print:shadow-none print:border-none print:p-0 print:m-0 print:w-full flex flex-col gap-6 text-zinc-900">
      <NursingPrepHeader studio={studio} />
      <NursingLabSafetyTable studio={studio} />
      <NursingMedicationAndChecklist studio={studio} />
    </div>
  );
}
