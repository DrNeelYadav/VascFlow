"use client";

import React from "react";
import { useConsentStudio } from "./useConsentStudio";
import { ConsentHeader } from "./ConsentHeader";
import { ConsentDemographicsForm } from "./ConsentDemographicsForm";
import { ConsentStatutoryDocument } from "./ConsentStatutoryDocument";
import { NursingPreOpChecklistPanel } from "./NursingPreOpChecklistPanel";

export default function ConsentPage() {
  const studio = useConsentStudio();

  return (
    <div className="flex flex-col gap-5 max-w-5xl mx-auto font-sans text-zinc-900 pb-16 print:p-0 print:m-0 print:max-w-none print:w-full print:block print:pb-0">
      <ConsentHeader studio={studio} />
      <ConsentDemographicsForm studio={studio} />
      {studio.activeTab === "CONSENT" && <ConsentStatutoryDocument studio={studio} />}
      {studio.activeTab === "PREPARATION" && <NursingPreOpChecklistPanel studio={studio} />}
      <div className="text-center py-4 text-xs text-zinc-400 print:hidden select-none">
        Made by Dr. Neel Yadav
      </div>
    </div>
  );
}
