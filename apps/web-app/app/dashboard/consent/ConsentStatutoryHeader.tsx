"use client";

import React from "react";
import { RELATIONSHIP_OPTIONS } from "./consentTemplateResolver";
import type { useConsentStudio } from "./useConsentStudio";

interface ConsentStatutoryHeaderProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function ConsentStatutoryHeader({ studio }: ConsentStatutoryHeaderProps) {
  const {
    languageMode,
    patientName,
    patientAge,
    patientGender,
    crNumber,
    fixedWard,
    ipdNumber,
    relativeName,
    relativeRelation,
    relativePhone,
    doctorName,
    procedureDate,
    procedureTime,
  } = studio;

  const matchedRelation = RELATIONSHIP_OPTIONS.find((r) => r.value === relativeRelation);

  return (
    <>
      {/* Institutional Official Header: Print Only */}
      <div className="hidden print:flex border-b-2 border-zinc-900 pb-3 text-center flex-col items-center">
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-1.5">
          <img
            src="/sms_hospital_logo.png"
            alt="SMS Hospital Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0"
          />
          <div className="text-left">
            {(languageMode === "BILINGUAL" || languageMode === "EN") && (
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950 font-serif leading-tight">
                SMS MEDICAL COLLEGE &amp; HOSPITAL, JAIPUR
              </h1>
            )}
            {(languageMode === "BILINGUAL" || languageMode === "HI") && (
              <h2
                className={`${
                  languageMode === "HI" ? "text-xl sm:text-2xl font-black" : "text-sm sm:text-base font-bold"
                } text-zinc-900 tracking-tight leading-tight`}
              >
                सवाई मानसिंह मेडिकल कॉलेज एवं चिकित्सालय, जयपुर
              </h2>
            )}
            <p className="text-xs sm:text-sm font-bold text-zinc-800 mt-0.5">
              {languageMode === "HI"
                ? "इंटरवेंशनल रेडियोलॉजी विभाग"
                : languageMode === "EN"
                ? "Department of Interventional Radiology"
                : "Department of Interventional Radiology (इंटरवेंशनल रेडियोलॉजी विभाग)"}
            </p>
          </div>
        </div>

        <div className="mt-1 px-3 py-0.5 rounded bg-zinc-100 print:bg-zinc-100 border border-zinc-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800">
          {languageMode === "HI"
            ? "इंटरवेंशनल रेडियोलॉजी प्रक्रिया हेतु विशिष्ट सूचित सहमति पत्र"
            : languageMode === "EN"
            ? "STATUTORY INFORMED CONSENT FOR INTERVENTIONAL RADIOLOGY PROCEDURE"
            : "STATUTORY INFORMED CONSENT FOR INTERVENTIONAL RADIOLOGY PROCEDURE (विशिष्ट सूचित सहमति पत्र)"}
        </div>
      </div>

      {/* Patient Identification Grid */}
      <div className="border border-zinc-300 rounded-lg p-3.5 bg-zinc-50/50 print:bg-transparent text-xs grid grid-cols-2 sm:grid-cols-4 gap-y-2.5 gap-x-4">
        <div>
          <span className="text-zinc-500 text-xs block">
            {languageMode === "HI" ? "मरीज का नाम:" : languageMode === "EN" ? "Patient Name:" : "Patient Name (मरीज का नाम):"}
          </span>
          <strong className="text-zinc-950 text-sm">{patientName || "—"}</strong>
        </div>
        <div>
          <span className="text-zinc-500 text-xs block">
            {languageMode === "HI" ? "उम्र / लिंग:" : languageMode === "EN" ? "Age / Sex:" : "Age / Sex (उम्र / लिंग):"}
          </span>
          <strong className="text-zinc-950">
            {[
              patientAge ? `${patientAge} ${languageMode === "HI" ? "वर्ष" : "Years"}` : "",
              patientGender
                ? languageMode === "HI"
                  ? patientGender === "Male"
                    ? "पुरुष"
                    : patientGender === "Female"
                    ? "महिला"
                    : "अन्य"
                  : patientGender
                : "",
            ]
              .filter(Boolean)
              .join(" / ") || "—"}
          </strong>
        </div>
        <div>
          <span className="text-zinc-500 text-xs block">
            {languageMode === "HI" ? "सीआर / यूएचआईडी संख्या:" : languageMode === "EN" ? "CR / UHID No.:" : "CR / UHID No. (सीआर संख्या):"}
          </span>
          <strong className="font-mono text-zinc-950">{crNumber || "—"}</strong>
        </div>
        <div>
          <span className="text-zinc-500 text-xs block">
            {languageMode === "HI" ? "वार्ड:" : languageMode === "EN" ? "Ward:" : "Ward (वार्ड):"}
          </span>
          <strong className="text-zinc-950">
            {fixedWard}
            {ipdNumber ? ` • IPD: ${ipdNumber}` : ""}
          </strong>
        </div>
        <div>
          <span className="text-zinc-500 text-xs block">
            {languageMode === "HI" ? "परिजन / विधिक संरक्षक:" : languageMode === "EN" ? "Relative / Guardian:" : "Relative / Guardian (परिजन / संरक्षक):"}
          </span>
          <strong className="text-zinc-950">
            {relativeName ? (
              <>
                {relativeName}
                {relativeRelation && (
                  <span className="text-xs font-normal text-zinc-700 ml-1">
                    (
                    {languageMode === "HI"
                      ? matchedRelation?.labelHi || relativeRelation
                      : languageMode === "EN"
                      ? relativeRelation
                      : `${relativeRelation} / ${matchedRelation?.labelHi || relativeRelation}`}
                    )
                  </span>
                )}
              </>
            ) : (
              "—"
            )}
          </strong>
        </div>
        <div>
          <span className="text-zinc-500 text-xs block">
            {languageMode === "HI" ? "मोबाइल नंबर:" : languageMode === "EN" ? "Contact Phone:" : "Contact Phone (मोबाइल नं.):"}
          </span>
          <strong className="font-mono text-zinc-950">{relativePhone || "—"}</strong>
        </div>
        <div>
          <span className="text-zinc-500 text-xs block">
            {languageMode === "HI" ? "प्रक्रियाकर्ता चिकित्सक:" : languageMode === "EN" ? "Attending Radiologist:" : "Attending Doctor (प्रक्रियाकर्ता):"}
          </span>
          <strong className="text-zinc-950">{doctorName || "—"}</strong>
        </div>
        <div>
          <span className="text-zinc-500 text-xs block">
            {languageMode === "HI" ? "दिनांक व समय:" : languageMode === "EN" ? "Date & Time:" : "Date & Time (दिनांक व समय):"}
          </span>
          <strong className="text-zinc-950">
            {[procedureDate, procedureTime].filter(Boolean).join(" • ") || "—"}
          </strong>
        </div>
      </div>
    </>
  );
}
