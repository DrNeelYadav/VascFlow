"use client";

import React from "react";
import { ConsentProcedureRisks } from "./ConsentProcedureRisks";
import type { useConsentStudio } from "./useConsentStudio";

interface ConsentProcedureDetailsProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function ConsentProcedureDetails({ studio }: ConsentProcedureDetailsProps) {
  const { languageMode, activeTemplate } = studio;

  return (
    <>
      {/* Procedure Title Banner */}
      <div className="border-l-4 border-blue-600 pl-3.5 py-1 bg-zinc-50/60 print:bg-transparent rounded-r-md">
        {(languageMode === "BILINGUAL" || languageMode === "EN") && (
          <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight leading-snug">
            {activeTemplate.nameEn}
          </h3>
        )}
        {(languageMode === "BILINGUAL" || languageMode === "HI") && (
          <h4
            className={`${
              languageMode === "HI"
                ? "text-xl sm:text-2xl font-extrabold text-zinc-950"
                : "text-base sm:text-lg font-bold text-zinc-800"
            } mt-0.5 leading-snug`}
          >
            {activeTemplate.nameHi}
          </h4>
        )}
      </div>

      {/* Section 1: Clinical Indication */}
      <div className="flex flex-col gap-1.5 text-xs">
        <h4 className="font-bold text-zinc-900 uppercase text-xs tracking-wider border-b border-zinc-200 pb-1">
          {languageMode === "HI"
            ? "1. बीमारी का निदान एवं प्रक्रिया का कारण:"
            : languageMode === "EN"
            ? "1. Clinical Indication & Diagnosis:"
            : "1. Clinical Indication & Diagnosis (बीमारी का निदान एवं प्रक्रिया का कारण):"}
        </h4>
        {(languageMode === "BILINGUAL" || languageMode === "EN") && (
          <p className="text-zinc-800 leading-relaxed">
            <strong>Indication:</strong> {activeTemplate.indicationEn}
          </p>
        )}
        {(languageMode === "BILINGUAL" || languageMode === "HI") && (
          <p className="text-zinc-800 leading-relaxed">
            <strong>संकेत:</strong> {activeTemplate.indicationHi}
          </p>
        )}
      </div>

      {/* Section 2: Nature of the Procedure */}
      <div className="flex flex-col gap-1.5 text-xs">
        <h4 className="font-bold text-zinc-900 uppercase text-xs tracking-wider border-b border-zinc-200 pb-1">
          {languageMode === "HI"
            ? "2. प्रक्रिया का विवरण एवं तरीका:"
            : languageMode === "EN"
            ? "2. Nature of the Procedure:"
            : "2. Nature of the Procedure (प्रक्रिया का विवरण एवं तरीका):"}
        </h4>
        {(languageMode === "BILINGUAL" || languageMode === "EN") && (
          <p className="text-zinc-800 leading-relaxed text-justify">
            {activeTemplate.descriptionEn}
          </p>
        )}
        {(languageMode === "BILINGUAL" || languageMode === "HI") && (
          <p className="text-zinc-800 leading-relaxed text-justify">
            {activeTemplate.descriptionHi}
          </p>
        )}
      </div>

      {/* Section 3: Expected Benefits */}
      <div className="flex flex-col gap-1.5 text-xs">
        <h4 className="font-bold text-zinc-900 uppercase text-xs tracking-wider border-b border-zinc-200 pb-1">
          {languageMode === "HI"
            ? "3. प्रक्रिया के अपेक्षित लाभ:"
            : languageMode === "EN"
            ? "3. Expected Clinical Benefits:"
            : "3. Expected Clinical Benefits (प्रक्रिया के अपेक्षित लाभ):"}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {(languageMode === "BILINGUAL" || languageMode === "EN") && (
            <ul className="list-disc pl-4 space-y-1 text-zinc-800">
              {activeTemplate.benefitsEn.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          )}
          {(languageMode === "BILINGUAL" || languageMode === "HI") && (
            <ul className="list-disc pl-4 space-y-1 text-zinc-800">
              {activeTemplate.benefitsHi.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Section 4, 5, 6: Risks, Alternatives, Sedation */}
      <ConsentProcedureRisks studio={studio} />
    </>
  );
}
