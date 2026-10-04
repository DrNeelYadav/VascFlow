"use client";

import React from "react";
import { ConsentStatutoryHeader } from "./ConsentStatutoryHeader";
import { ConsentProcedureDetails } from "./ConsentProcedureDetails";
import { ConsentStatutoryDeclaration } from "./ConsentStatutoryDeclaration";
import type { useConsentStudio } from "./useConsentStudio";

interface ConsentStatutoryDocumentProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function ConsentStatutoryDocument({ studio }: ConsentStatutoryDocumentProps) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-xl border border-zinc-200 shadow-sm print:shadow-none print:border-none print:p-0 print:m-0 print:w-full flex flex-col gap-6 text-zinc-900">
      <ConsentStatutoryHeader studio={studio} />
      <ConsentProcedureDetails studio={studio} />
      <ConsentStatutoryDeclaration studio={studio} />
    </div>
  );
}
