"use client";

import React from "react";
import {
  STATUTORY_DECLARATION_EN,
  STATUTORY_DECLARATION_HI,
} from "../../lib/consent/consentData";
import { RELATIONSHIP_OPTIONS } from "./consentTemplateResolver";
import type { useConsentStudio } from "./useConsentStudio";

interface ConsentStatutoryDeclarationProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function ConsentStatutoryDeclaration({ studio }: ConsentStatutoryDeclarationProps) {
  const {
    languageMode,
    patientName,
    procedureDate,
    procedureTime,
    relativeName,
    relativeRelation,
    relativePhone,
    doctorName,
    doctorDesignation,
    residentDoctor,
  } = studio;

  const matchedRelation = RELATIONSHIP_OPTIONS.find((r) => r.value === relativeRelation);

  return (
    <>
      {/* Section 7: Solemn Voluntary Declaration */}
      <div className="border-t-2 border-zinc-900 pt-3 text-xs flex flex-col gap-2">
        <h4 className="font-bold text-zinc-950 text-center uppercase tracking-wider text-xs">
          {languageMode === "HI"
            ? STATUTORY_DECLARATION_HI.voluntaryConsentTitle
            : languageMode === "EN"
            ? STATUTORY_DECLARATION_EN.voluntaryConsentTitle
            : "PATIENT & LEGAL GUARDIAN VOLUNTARY DECLARATION (मरीज एवं विधिक अभिभावक / परिजन की स्वैच्छिक घोषणा)"}
        </h4>

        {(languageMode === "BILINGUAL" || languageMode === "EN") && (
          <p className="text-zinc-800 leading-relaxed text-justify text-xs">
            {STATUTORY_DECLARATION_EN.understandingClause} {STATUTORY_DECLARATION_EN.questionClause}{" "}
            {STATUTORY_DECLARATION_EN.bloodTransfusionClause} {STATUTORY_DECLARATION_EN.emergencyClause}{" "}
            {STATUTORY_DECLARATION_EN.noGuaranteeClause} {STATUTORY_DECLARATION_EN.signatureClause}
          </p>
        )}

        {(languageMode === "BILINGUAL" || languageMode === "HI") && (
          <p className="text-zinc-800 leading-relaxed text-justify text-xs pt-1">
            {STATUTORY_DECLARATION_HI.understandingClause} {STATUTORY_DECLARATION_HI.questionClause}{" "}
            {STATUTORY_DECLARATION_HI.bloodTransfusionClause} {STATUTORY_DECLARATION_HI.emergencyClause}{" "}
            {STATUTORY_DECLARATION_HI.noGuaranteeClause} {STATUTORY_DECLARATION_HI.signatureClause}
          </p>
        )}
      </div>

      {/* Section 8: MANDATORY 3-TIER SIGNATURE BLOCK */}
      <div className="border border-zinc-400 rounded-lg p-4 bg-white mt-2 print:mt-4 break-inside-avoid print-break-inside-avoid">
        <h5 className="font-bold text-center text-xs uppercase tracking-wider text-zinc-950 mb-4 border-b border-zinc-300 pb-1">
          {languageMode === "HI"
            ? "अनिवार्य विधिक हस्ताक्षर एवं प्रमाणीकरण"
            : languageMode === "EN"
            ? "MANDATORY SIGNATURES & CERTIFICATION"
            : "MANDATORY SIGNATURES & CERTIFICATION (अनिवार्य विधिक हस्ताक्षर एवं प्रमाणीकरण)"}
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-xs">
          {/* Box 1: Patient Signature / Thumb Impression */}
          <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[110px]">
            <div>
              <span className="font-bold text-zinc-950 block">
                {languageMode === "HI"
                  ? "1. रोगी के हस्ताक्षर"
                  : languageMode === "EN"
                  ? "1. Patient Signature"
                  : "1. Patient Signature / Thumb"}
              </span>
              <span className="text-xs text-zinc-600 block">
                {languageMode === "HI"
                  ? "(हस्ताक्षर अथवा बायाँ अँगूठा निशान)"
                  : languageMode === "EN"
                  ? "(Signature or Left Thumb Impression)"
                  : "(रोगी के हस्ताक्षर / बायाँ अँगूठा निशान)"}
              </span>
            </div>
            <div className="text-xs text-zinc-700 mt-4">
              <div>
                {languageMode === "HI" ? "नाम: " : "Name: "}
                <strong>{patientName || "_________________"}</strong>
              </div>
              <div>
                {languageMode === "HI" ? "दिनांक व समय: " : "Date & Time: "}
                {[procedureDate, procedureTime].filter(Boolean).join(" • ") || "_____________"}
              </div>
            </div>
          </div>

          {/* Box 2: Relative / Legal Guardian / Witness */}
          <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[110px]">
            <div>
              <span className="font-bold text-zinc-950 block">
                {languageMode === "HI"
                  ? "2. परिजन / साक्षी के हस्ताक्षर"
                  : languageMode === "EN"
                  ? "2. Relative / Witness Signature"
                  : "2. Relative / Witness Signature"}
              </span>
              <span className="text-xs text-zinc-600 block">
                {languageMode === "HI"
                  ? "(मरीज के परिजन अथवा साक्षी)"
                  : languageMode === "EN"
                  ? "(Patient Relative or Legal Guardian)"
                  : "(मरीज के परिजन / साक्षी के हस्ताक्षर)"}
              </span>
            </div>
            <div className="text-xs text-zinc-700 mt-4">
              <div>
                {languageMode === "HI" ? "नाम: " : "Name: "}
                <strong>{relativeName || "_________________"}</strong>
              </div>
              <div>
                {languageMode === "HI" ? "संबंध: " : "Relation: "}
                {relativeRelation ? (
                  languageMode === "HI"
                    ? matchedRelation?.labelHi || relativeRelation
                    : relativeRelation
                ) : (
                  "_____________"
                )}
              </div>
              <div>
                {languageMode === "HI" ? "फोन: " : "Phone: "}
                {relativePhone || "_____________"}
              </div>
            </div>
          </div>

          {/* Box 3: Performing Doctor */}
          <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[110px]">
            <div>
              <span className="font-bold text-zinc-950 block">
                {languageMode === "HI"
                  ? "3. प्रक्रियाकर्ता इंटरवेंशनल रेडियोलॉजिस्ट"
                  : languageMode === "EN"
                  ? "3. Interventional Radiologist"
                  : "3. Interventional Radiologist"}
              </span>
              <span className="text-xs text-zinc-600 block">
                {languageMode === "HI"
                  ? "(चिकित्सक के हस्ताक्षर व मुहर)"
                  : languageMode === "EN"
                  ? "(Signature & Official Seal)"
                  : "(प्रक्रियाकर्ता चिकित्सक के हस्ताक्षर व मुहर)"}
              </span>
            </div>
            <div className="text-xs text-zinc-700 mt-4">
              <div>
                {languageMode === "HI" ? "नाम: " : "Name: "}
                <strong>{doctorName}</strong>
              </div>
              <div>
                {languageMode === "HI" ? "पद: " : "Desig: "}
                {doctorDesignation}
              </div>
            </div>
          </div>
        </div>

        {/* Resident / Interpreter Footnote */}
        <div className="mt-4 pt-2 border-t border-zinc-200 text-[10px] text-zinc-500 flex items-center justify-between">
          <span>
            {languageMode === "HI"
              ? `सहमति परामर्शकर्ता: ${residentDoctor}`
              : `Consent Counseled by: ${residentDoctor}`}
          </span>
          <span>
            {languageMode === "HI"
              ? "रेडियोनिदान एवं इंटरवेंशनल रेडियोलॉजी विभाग, सवाई मानसिंह चिकित्सालय, जयपुर"
              : "Department of Radiodiagnosis & Interventional Radiology, SMS Hospital, Jaipur"}
          </span>
        </div>
      </div>
    </>
  );
}
