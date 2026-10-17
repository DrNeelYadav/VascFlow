"use client";

import React from "react";
import { ConsentStatutoryHeader } from "./ConsentStatutoryHeader";
import { ConsentProcedureDetails } from "./ConsentProcedureDetails";
import { ConsentStatutoryDeclaration } from "./ConsentStatutoryDeclaration";
import { PageBreakDivider } from "../common/PageBreakDivider";
import type { useConsentStudio } from "./useConsentStudio";

interface ConsentStatutoryDocumentProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function ConsentStatutoryDocument({ studio }: ConsentStatutoryDocumentProps) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-xl border border-zinc-200 shadow-sm print:shadow-none print:border-none print:p-0 print:m-0 print:w-full flex flex-col gap-6 print:block print:space-y-0 text-zinc-900 print-document">
      {/* Page 1: Institutional Header, Patient Identification, Clinical Indication, Technique, Benefits, Risks */}
      <div className="flex flex-col gap-6 print:block print:space-y-3 print:break-after-avoid">
        <ConsentStatutoryHeader studio={studio} />
        <ConsentProcedureDetails studio={studio} />
      </div>

      {/* Mandatory Page Break for Statutory Declaration & Signatures */}
      <PageBreakDivider
        label="Voluntary Declaration &amp; Mandatory Signatures"
        pageNumber={2}
        totalPages={2}
      />

      {/* Page 2: Solemn Voluntary Declaration & 3-Tier Signatures */}
      <div
        className="flex flex-col gap-6 print:block print:space-y-3 print-break-before"
        style={{ breakBefore: "page", pageBreakBefore: "always" }}
      >
        <ConsentStatutoryDeclaration studio={studio} />
      </div>
    </div>
  );
}
