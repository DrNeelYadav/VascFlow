"use client";

import React from "react";
import type { useConsentStudio } from "./useConsentStudio";

interface NursingLabRowsBiochemistryProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function NursingLabRowsBiochemistry({ studio }: NursingLabRowsBiochemistryProps) {
  const {
    macdLimitMl,
    patientCreatinine,
    setPatientCreatinine,
    patientEgfr,
    setPatientEgfr,
    viralStatus,
    setViralStatus,
    bloodGroup,
    setBloodGroup,
  } = studio;

  return (
    <>
      {/* Creatinine / eGFR */}
      <tr className="hover:bg-zinc-50">
        <td className="px-3 py-2 font-medium">Serum Creatinine &amp; eGFR</td>
        <td className="px-3 py-2 font-mono">Cr &lt; 1.5, eGFR &gt; 30</td>
        <td className="px-3 py-2 font-mono font-bold">
          <div className="flex items-center gap-1.5 flex-wrap">
            <input
              type="text"
              value={patientCreatinine}
              onChange={(e) => setPatientCreatinine(e.target.value)}
              placeholder="e.g. 0.9"
              className="w-16 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white font-mono text-xs font-bold text-zinc-900 outline-none focus:border-blue-500 print:hidden"
            />
            <span className="print:hidden text-zinc-500 text-xs font-normal">mg/dL</span>
            <span className="print:hidden text-zinc-400">/</span>
            <input
              type="text"
              value={patientEgfr}
              onChange={(e) => setPatientEgfr(e.target.value)}
              placeholder="e.g. 90"
              className="w-16 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white font-mono text-xs font-bold text-zinc-900 outline-none focus:border-blue-500 print:hidden"
            />
            <span className="print:hidden text-zinc-500 text-xs font-normal">eGFR</span>
            <span className="hidden print:inline">
              {patientCreatinine !== ""
                ? `${patientCreatinine} mg/dL (eGFR: ${patientEgfr !== "" ? patientEgfr : "—"})`
                : "—"}
            </span>
          </div>
        </td>
        <td className="px-3 py-2">
          {patientCreatinine !== "" && !isNaN(Number(patientCreatinine)) && Number(patientCreatinine) > 0 ? (
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                Number(patientCreatinine) < 1.5 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
              }`}
            >
              {Number(patientCreatinine) < 1.5 ? "NORMAL" : "NEPHRO RISK"}
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-500">
              PENDING
            </span>
          )}
        </td>
        <td className="px-3 py-2 text-xs text-zinc-600">
          {macdLimitMl
            ? `Limit contrast to < ${macdLimitMl} mL. Pre-hydrate with 0.9% NS.`
            : "Record serum creatinine to compute limit"}
        </td>
      </tr>

      {/* Viral Serology */}
      <tr className="hover:bg-zinc-50">
        <td className="px-3 py-2 font-medium">Viral Serology (HIV/HBsAg/HCV)</td>
        <td className="px-3 py-2 font-mono">Non-Reactive</td>
        <td className="px-3 py-2 font-mono font-bold">
          <select
            value={viralStatus}
            onChange={(e) => setViralStatus(e.target.value as any)}
            className="px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white text-xs font-medium text-zinc-900 outline-none focus:border-blue-500 print:hidden"
          >
            <option value="NON_REACTIVE">Non-Reactive</option>
            <option value="HBSAG_POSITIVE">HBsAg Positive</option>
            <option value="HCV_POSITIVE">HCV Positive</option>
            <option value="HIV_POSITIVE">HIV Positive</option>
          </select>
          <span className="hidden print:inline">
            {viralStatus === "NON_REACTIVE" ? "Non-Reactive" : viralStatus ? viralStatus.replace("_", " ") : "—"}
          </span>
        </td>
        <td className="px-3 py-2">
          <span
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              viralStatus === "NON_REACTIVE"
                ? "bg-emerald-100 text-emerald-800"
                : viralStatus
                ? "bg-red-100 text-red-800"
                : "bg-zinc-100 text-zinc-500"
            }`}
          >
            {viralStatus === "NON_REACTIVE" ? "CLEAR" : viralStatus ? "REACTIVE" : "PENDING"}
          </span>
        </td>
        <td className="px-3 py-2 text-xs text-zinc-600">
          {viralStatus && viralStatus !== "NON_REACTIVE"
            ? "Universal PPE & dedicated sharps protocol."
            : "Standard universal precautions."}
        </td>
      </tr>

      {/* Blood Group */}
      <tr className="hover:bg-zinc-50">
        <td className="px-3 py-2 font-medium">Blood Group &amp; Crossmatch</td>
        <td className="px-3 py-2 font-mono">Type &amp; Reserve</td>
        <td className="px-3 py-2 font-mono font-bold" colSpan={2}>
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={bloodGroup || "— Not recorded"}
              onChange={(e) => setBloodGroup(e.target.value)}
              placeholder="e.g. B Positive"
              className="w-48 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white text-xs text-zinc-900 outline-none focus:border-blue-500 print:hidden"
            />
            <span className="hidden print:inline">
              {bloodGroup || "—"}
            </span>
          </div>
        </td>
        <td className="px-3 py-2 text-xs text-zinc-600">Blood bank token confirmed in file.</td>
      </tr>
    </>
  );
}
