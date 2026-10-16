"use client";

import React from "react";

interface PreBookingSafetyChecklistProps {
  npoConfirmed: boolean;
  setNpoConfirmed: (v: boolean) => void;
  plateletCount: string;
  setPlateletCount: (v: string) => void;
  inr: string;
  setInr: (v: string) => void;
  creatinine: string;
  setCreatinine: (v: string) => void;
  egfr: string;
  setEgfr: (v: string) => void;
  viralMarkers: "Non-Reactive" | "Reactive" | "Awaited";
  setViralMarkers: (v: "Non-Reactive" | "Reactive" | "Awaited") => void;
  contrastAllergy: "No" | "Yes (Premedicated with Steroid+Antihistamine)";
  setContrastAllergy: (v: "No" | "Yes (Premedicated with Steroid+Antihistamine)") => void;
  consentSigned: boolean;
  setConsentSigned: (v: boolean) => void;
}

export const PreBookingSafetyChecklist: React.FC<PreBookingSafetyChecklistProps> = ({
  npoConfirmed,
  setNpoConfirmed,
  plateletCount,
  setPlateletCount,
  inr,
  setInr,
  creatinine,
  setCreatinine,
  egfr,
  setEgfr,
  viralMarkers,
  setViralMarkers,
  contrastAllergy,
  setContrastAllergy,
  consentSigned,
  setConsentSigned,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
          2. Mandatory Pre-Booking Safety Checklist & Lab Verification
        </h3>
        <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">
          Zero-Tolerance Clinical Gate
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {/* NPO Instruction */}
        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
          <input
            type="checkbox"
            id="npo-check"
            checked={npoConfirmed}
            onChange={(e) => setNpoConfirmed(e.target.checked)}
            className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500"
          />
          <label htmlFor="npo-check" className="text-[11px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer">
            NPO Instructions Verified <span className="text-[10px] text-slate-500 block">(6h solids, 2h clear liquids)</span>
          </label>
        </div>

        {/* Platelets */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Platelets (&ge;50,000 / &mu;L)
          </label>
          <input
            type="text"
            value={plateletCount}
            onChange={(e) => setPlateletCount(e.target.value)}
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono"
            placeholder="180,000 / uL"
          />
        </div>

        {/* INR */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            INR (&le;1.50)
          </label>
          <input
            type="text"
            value={inr}
            onChange={(e) => setInr(e.target.value)}
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono"
            placeholder="1.10"
          />
        </div>

        {/* Renal eGFR / Creatinine */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            S. Creatinine & eGFR
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            <input
              type="text"
              value={creatinine}
              onChange={(e) => setCreatinine(e.target.value)}
              className="text-xs px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
              placeholder="0.85 mg/dL"
            />
            <input
              type="text"
              value={egfr}
              onChange={(e) => setEgfr(e.target.value)}
              className="text-xs px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
              placeholder="96 mL/min"
            />
          </div>
        </div>

        {/* Viral Serology */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Viral Markers (HIV/HBsAg/HCV)
          </label>
          <select
            value={viralMarkers}
            onChange={(e) => setViralMarkers(e.target.value as any)}
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="Non-Reactive">Non-Reactive (All 3 Negative)</option>
            <option value="Reactive">Reactive (Infection Control Kit Required)</option>
            <option value="Awaited">Sample Drawn / Awaited</option>
          </select>
        </div>

        {/* Contrast Allergy */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Prior Contrast Allergy
          </label>
          <select
            value={contrastAllergy}
            onChange={(e) => setContrastAllergy(e.target.value as any)}
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="No">No Known Adverse History</option>
            <option value="Yes (Premedicated with Steroid+Antihistamine)">Yes - Premedication Prescribed</option>
          </select>
        </div>

        {/* Informed Consent Status */}
        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 sm:col-span-2">
          <input
            type="checkbox"
            id="consent-check"
            checked={consentSigned}
            onChange={(e) => setConsentSigned(e.target.checked)}
            className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500"
          />
          <label htmlFor="consent-check" className="text-[11px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer">
            Statutory Informed Procedural Consent Signed & Documented
            <span className="text-[10px] text-slate-500 block">Bilingual high-risk explanation completed with patient / family</span>
          </label>
        </div>
      </div>
    </div>
  );
};
