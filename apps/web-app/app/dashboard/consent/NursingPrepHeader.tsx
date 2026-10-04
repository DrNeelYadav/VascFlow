"use client";

import React from "react";
import { Clock } from "lucide-react";
import type { useConsentStudio } from "./useConsentStudio";

interface NursingPrepHeaderProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function NursingPrepHeader({ studio }: NursingPrepHeaderProps) {
  const {
    patientName,
    patientAge,
    patientGender,
    crNumber,
    fixedWard,
    ipdNumber,
    activeTemplate,
  } = studio;

  return (
    <>
      {/* Header: Print Only */}
      <div className="hidden print:flex border-b-2 border-zinc-900 pb-3 text-center flex-col items-center">
        <div className="flex items-center justify-center gap-3.5 sm:gap-4 mb-1">
          <img
            src="/sms_hospital_logo.png"
            alt="SMS Hospital Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
          />
          <div className="text-left">
            <h2 className="text-base sm:text-lg font-black tracking-tight text-zinc-950 font-serif">
              SMS HOSPITAL &amp; MEDICAL COLLEGE, JAIPUR
            </h2>
            <p className="text-xs font-semibold text-zinc-700">
              सवाई मानसिंह चिकित्सालय एवं मेडिकल कॉलेज, जयपुर • रेडियोनिदान एवं इंटरवेंशनल रेडियोलॉजी विभाग
            </p>
          </div>
        </div>
        <h1 className="text-sm md:text-base font-extrabold text-zinc-950 mt-1 uppercase tracking-wide">
          CATH-LAB PRE-PROCEDURE PREPARATION &amp; NURSING WARD ORDERS
        </h1>
        <p className="text-xs font-semibold text-zinc-600">
          मरीज की पूर्व-प्रक्रिया तैयारी, लैब जांच सुरक्षा सीमाएं एवं नर्सिंग निर्देश पत्र
        </p>
      </div>

      {/* Patient Quick Strip */}
      <div className="border border-zinc-300 rounded-lg p-3 bg-zinc-50 print:bg-transparent text-xs grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div>
          Patient: <strong>{patientName || "—"}</strong>{" "}
          {patientAge || patientGender
            ? `(${[patientAge ? `${patientAge}y` : "", patientGender].filter(Boolean).join("/")})`
            : ""}
        </div>
        <div>
          CR No: <strong className="font-mono">{crNumber || "—"}</strong>
        </div>
        <div>
          Ward: <strong>{fixedWard}</strong>
          {ipdNumber ? ` • IPD: ${ipdNumber}` : ""}
        </div>
        <div>
          Procedure: <strong>{activeTemplate.nameEn}</strong>
        </div>
      </div>

      {/* Section 1: FASTING (NPO) MANDATE */}
      <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200 text-xs flex flex-col gap-2">
        <div className="flex items-center gap-2 font-bold text-amber-900">
          <Clock className="w-4 h-4 text-amber-700" />
          <span>STRICT PRE-OP FASTING (NPO) GUIDELINES (भूखा पेट रहने के नियम):</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-800 pl-6">
          <div>
            <strong>Solid Foods &amp; Milk (ठोस भोजन एवं दूध):</strong>
            <p className="text-zinc-700 mt-0.5">
              Strict NPO for at least <strong>6 hours</strong> prior to procedure call. No chapatis, rice, tea,
              milk, or biscuits.
            </p>
          </div>
          <div>
            <strong>Clear Fluids (सादा पानी):</strong>
            <p className="text-zinc-700 mt-0.5">
              Plain water allowed up to <strong>2 hours</strong> prior to scheduled conscious sedation. Zero
              intake thereafter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
