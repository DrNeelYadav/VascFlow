"use client";

import React from "react";
import { WordPadHeaderBlock } from "./WordPadHeaderBlock";
import { WordPadSignaturesBlock } from "./WordPadSignaturesBlock";

export interface OperativeNoteDocumentData {
  procedureTitle: string;
  patientName: string;
  ageSex: string;
  dateStr: string;
  referredBy: string;
  hidCr: string;
  irNo: string;
  allergies: string;
  anesthesia: string;
  medication: string;
  field: string;
  procedureClassification: string;
  position: string;
  clinicalProfile: string;
  technique: string;
  postOpPlan: string;
}

interface WordPadPaperSheetProps {
  data: OperativeNoteDocumentData;
  onChange: <K extends keyof OperativeNoteDocumentData>(
    key: K,
    value: OperativeNoteDocumentData[K]
  ) => void;
  fontFamily: string;
  fontSize: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  textAlign: "left" | "center" | "right" | "justify";
}

export function WordPadPaperSheet({
  data,
  onChange,
  fontFamily,
  fontSize,
  isBold,
  isItalic,
  isUnderline,
  textAlign,
}: WordPadPaperSheetProps) {
  return (
    <div className="bg-slate-300/60 dark:bg-slate-950 p-3 sm:p-6 lg:p-8 flex justify-center overflow-x-auto min-h-[900px] print:bg-white print:p-0">
      <div
        style={{
          fontFamily,
          fontSize,
          fontWeight: isBold ? 600 : 400,
          fontStyle: isItalic ? "italic" : "normal",
          textDecoration: isUnderline ? "underline" : "none",
          textAlign,
        }}
        className="w-full max-w-[850px] bg-white text-black p-8 sm:p-12 shadow-2xl border border-slate-300 print:shadow-none print:border-none print:p-0 print:m-0 space-y-4 select-text"
      >
        {/* Header Block: Department title, Procedure name, Demographics, Pre-procedure checklist */}
        <WordPadHeaderBlock data={data} onChange={onChange} />

        {/* Clinical Profile */}
        <div className="pt-1 text-xs">
          <span className="font-bold">Clinical profile : </span>
          <textarea
            rows={2}
            value={data.clinicalProfile}
            onChange={(e) => onChange("clinicalProfile", e.target.value)}
            className="w-full mt-1 p-1 bg-transparent border border-dashed border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none rounded text-xs leading-relaxed resize-y"
            placeholder="Clinical history / indication..."
          />
        </div>

        {/* Operative Technique & Key Findings */}
        <div className="space-y-1 text-xs">
          <span className="font-bold block">Operative Technique &amp; Findings:</span>
          <textarea
            rows={10}
            value={data.technique}
            onChange={(e) => onChange("technique", e.target.value)}
            className="w-full p-2 bg-transparent border border-dashed border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none rounded text-xs leading-relaxed resize-y font-normal"
            placeholder="Procedure steps, access, catheters, embolics, post-embolization run..."
          />
        </div>

        {/* Post Procedure Plan */}
        <div className="space-y-1 text-xs">
          <span className="font-bold block">Post procedure plan:</span>
          <textarea
            rows={5}
            value={data.postOpPlan}
            onChange={(e) => onChange("postOpPlan", e.target.value)}
            className="w-full p-2 bg-transparent border border-dashed border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none rounded text-xs leading-relaxed resize-y font-normal"
            placeholder="Bed rest, monitoring, medications..."
          />
        </div>

        {/* Faculty Signatures Block (Exact 6-Faculty Matrix from SMS IR Word Notes) */}
        <WordPadSignaturesBlock />
      </div>
    </div>
  );
}
