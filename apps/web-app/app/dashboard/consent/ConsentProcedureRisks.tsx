"use client";

import React from "react";
import {
  GENERAL_RISKS_EN,
  GENERAL_RISKS_HI,
} from "../../lib/consent/consentData";
import type { useConsentStudio } from "./useConsentStudio";

interface ConsentProcedureRisksProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function ConsentProcedureRisks({ studio }: ConsentProcedureRisksProps) {
  const { languageMode, activeTemplate } = studio;

  return (
    <>
      {/* Section 4: Material Risks & Complications */}
      <div className="flex flex-col gap-2 text-xs">
        <h4 className="font-bold uppercase text-xs tracking-wider border-b border-zinc-200 pb-1 text-red-700">
          {languageMode === "HI"
            ? "4. संभावित जोखिम एवं विशिष्ट प्रक्रियागत जटिलताएं:"
            : languageMode === "EN"
            ? "4. Material Risks & Procedure-Specific Complications:"
            : "4. Material Risks & Procedure-Specific Complications (संभावित जोखिम एवं विशिष्ट जटिलताएं):"}
        </h4>

        {/* General Risks Box */}
        <div className="p-3 bg-zinc-50 print:bg-transparent rounded-lg border border-zinc-200 text-xs text-zinc-700">
          <span className="font-bold text-zinc-900 block mb-1">
            {languageMode === "HI"
              ? "सामान्य प्रक्रियागत जोखिम:"
              : languageMode === "EN"
              ? "Common & General Risks:"
              : "Common & General Risks (सामान्य प्रक्रियागत जोखिम):"}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {(languageMode === "BILINGUAL" || languageMode === "EN") && (
              <ul className="list-disc pl-4 space-y-0.5">
                {GENERAL_RISKS_EN.slice(0, 5).map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            )}
            {(languageMode === "BILINGUAL" || languageMode === "HI") && (
              <ul className="list-disc pl-4 space-y-0.5">
                {GENERAL_RISKS_HI.slice(0, 5).map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Specific Risks Box */}
        <div className="p-3 bg-red-50/50 print:bg-transparent rounded-lg border border-red-200 text-xs text-zinc-900">
          <span className="font-bold text-red-900 block mb-1.5">
            {languageMode === "HI"
              ? `${activeTemplate.nameHi} हेतु विशिष्ट जोखिम:`
              : languageMode === "EN"
              ? `Specific Risks for ${activeTemplate.nameEn}:`
              : `Specific Risks for ${activeTemplate.nameEn} (विशिष्ट जोखिम):`}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(languageMode === "BILINGUAL" || languageMode === "EN") && (
              <ul className="list-disc pl-4 space-y-1 text-zinc-800">
                {activeTemplate.specificRisksEn.map((r, idx) => (
                  <li key={idx} className="leading-snug">
                    {r}
                  </li>
                ))}
              </ul>
            )}
            {(languageMode === "BILINGUAL" || languageMode === "HI") && (
              <ul className="list-disc pl-4 space-y-1 text-zinc-800">
                {activeTemplate.specificRisksHi.map((r, idx) => (
                  <li key={idx} className="leading-snug">
                    {r}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Section 5 & 6: Alternatives & Sedation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-3 rounded-lg border border-zinc-200">
          <h5 className="font-bold text-zinc-900 mb-1">
            {languageMode === "HI"
              ? "5. अन्य उपलब्ध वैकल्पिक उपचार विधियां:"
              : languageMode === "EN"
              ? "5. Alternative Treatment Options:"
              : "5. Alternative Treatment Options (अन्य उपलब्ध विकल्प):"}
          </h5>
          {(languageMode === "BILINGUAL" || languageMode === "EN") && (
            <p className="text-zinc-700 leading-relaxed mb-1">{activeTemplate.alternativesEn}</p>
          )}
          {(languageMode === "BILINGUAL" || languageMode === "HI") && (
            <p className="text-zinc-700 leading-relaxed">{activeTemplate.alternativesHi}</p>
          )}
        </div>

        <div className="p-3 rounded-lg border border-zinc-200">
          <h5 className="font-bold text-zinc-900 mb-1">
            {languageMode === "HI"
              ? "6. एनेस्थीसिया एवं बेहोशी की सहमति:"
              : languageMode === "EN"
              ? "6. Anesthesia & Sedation:"
              : "6. Anesthesia & Sedation (एनेस्थीसिया / बेहोशी की सहमति):"}
          </h5>
          {(languageMode === "BILINGUAL" || languageMode === "EN") && (
            <p className="text-zinc-700 leading-relaxed mb-1">{activeTemplate.sedationTypeEn}</p>
          )}
          {(languageMode === "BILINGUAL" || languageMode === "HI") && (
            <p className="text-zinc-700 leading-relaxed">{activeTemplate.sedationTypeHi}</p>
          )}
        </div>
      </div>
    </>
  );
}
