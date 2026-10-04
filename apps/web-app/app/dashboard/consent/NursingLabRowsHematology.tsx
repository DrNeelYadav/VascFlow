"use client";

import React from "react";
import type { useConsentStudio } from "./useConsentStudio";

interface NursingLabRowsHematologyProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function NursingLabRowsHematology({ studio }: NursingLabRowsHematologyProps) {
  const {
    patientHb,
    setPatientHb,
    patientPlatelets,
    setPatientPlatelets,
    patientInr,
    setPatientInr,
    patientAptt,
    setPatientAptt,
  } = studio;

  return (
    <>
      {/* Hb */}
      <tr className="hover:bg-zinc-50">
        <td className="px-3 py-2 font-medium">Hemoglobin (Hb)</td>
        <td className="px-3 py-2 font-mono">≥ 9.0 g/dL</td>
        <td className="px-3 py-2 font-mono font-bold">
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={patientHb}
              onChange={(e) => setPatientHb(e.target.value)}
              placeholder="e.g. 12.0"
              className="w-20 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white font-mono text-xs font-bold text-zinc-900 outline-none focus:border-blue-500 print:hidden"
            />
            <span className="hidden print:inline">
              {patientHb !== "" ? `${typeof patientHb === "number" ? `${patientHb} g/dL` : "— Not recorded"}` : "—"}
            </span>
            <span className="print:hidden text-zinc-500 text-xs font-normal">g/dL</span>
          </div>
        </td>
        <td className="px-3 py-2">
          {patientHb !== "" && !isNaN(Number(patientHb)) && Number(patientHb) > 0 ? (
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                Number(patientHb) >= 9 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
              }`}
            >
              {Number(patientHb) >= 9 ? "PASS" : "LOW"}
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-500">
              PENDING
            </span>
          )}
        </td>
        <td className="px-3 py-2 text-xs text-zinc-600">If Hb &lt; 8.0, arrange 1-2 PRBC units.</td>
      </tr>

      {/* Platelets */}
      <tr className="hover:bg-zinc-50">
        <td className="px-3 py-2 font-medium">Platelet Count</td>
        <td className="px-3 py-2 font-mono">≥ 80,000 /μL</td>
        <td className="px-3 py-2 font-mono font-bold">
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={patientPlatelets}
              onChange={(e) => setPatientPlatelets(e.target.value)}
              placeholder="e.g. 150000"
              className="w-24 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white font-mono text-xs font-bold text-zinc-900 outline-none focus:border-blue-500 print:hidden"
            />
            <span className="hidden print:inline">
              {patientPlatelets !== "" && !isNaN(Number(patientPlatelets))
                ? `${Number(patientPlatelets).toLocaleString("en-IN")} /μL`
                : "—"}
            </span>
            <span className="print:hidden text-zinc-500 text-xs font-normal">/μL</span>
          </div>
        </td>
        <td className="px-3 py-2">
          {patientPlatelets !== "" && !isNaN(Number(patientPlatelets)) && Number(patientPlatelets) > 0 ? (
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                Number(patientPlatelets) >= 80000
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {Number(patientPlatelets) >= 80000 ? "PASS" : "TRANSFUSE RDP"}
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-500">
              PENDING
            </span>
          )}
        </td>
        <td className="px-3 py-2 text-xs text-zinc-600">Transfuse platelets pre-puncture if &lt; 50k.</td>
      </tr>

      {/* PT / INR */}
      <tr className="hover:bg-zinc-50">
        <td className="px-3 py-2 font-medium">Prothrombin Time / INR</td>
        <td className="px-3 py-2 font-mono">≤ 1.5</td>
        <td className="px-3 py-2 font-mono font-bold">
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={typeof patientInr === "number" ? `${patientInr}` : "— Not recorded"}
              onChange={(e) => setPatientInr(e.target.value)}
              placeholder="e.g. 1.1"
              className="w-16 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white font-mono text-xs font-bold text-zinc-900 outline-none focus:border-blue-500 print:hidden"
            />
            <span className="hidden print:inline">
              {patientInr !== "" ? patientInr : "—"}
            </span>
          </div>
        </td>
        <td className="px-3 py-2">
          {patientInr !== "" && !isNaN(Number(patientInr)) && Number(patientInr) > 0 ? (
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                Number(patientInr) <= 1.5 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
              }`}
            >
              {Number(patientInr) <= 1.5 ? "PASS" : "HIGH (GIVE FFP)"}
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-500">
              PENDING
            </span>
          )}
        </td>
        <td className="px-3 py-2 text-xs text-zinc-600">If INR &gt; 1.5, give FFP / Vit K / PCC.</td>
      </tr>

      {/* aPTT */}
      <tr className="hover:bg-zinc-50">
        <td className="px-3 py-2 font-medium">aPTT (Activated PTT)</td>
        <td className="px-3 py-2 font-mono">&lt; 35.0 s</td>
        <td className="px-3 py-2 font-mono font-bold">
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={patientAptt}
              onChange={(e) => setPatientAptt(e.target.value)}
              placeholder="e.g. 30.0"
              className="w-16 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white font-mono text-xs font-bold text-zinc-900 outline-none focus:border-blue-500 print:hidden"
            />
            <span className="hidden print:inline">
              {patientAptt !== "" ? `${patientAptt} s` : "—"}
            </span>
            <span className="print:hidden text-zinc-500 text-xs font-normal">s</span>
          </div>
        </td>
        <td className="px-3 py-2">
          {patientAptt !== "" && !isNaN(Number(patientAptt)) && Number(patientAptt) > 0 ? (
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                Number(patientAptt) <= 35 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
              }`}
            >
              {Number(patientAptt) <= 35 ? "PASS" : "PROLONGED"}
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-500">
              PENDING
            </span>
          )}
        </td>
        <td className="px-3 py-2 text-xs text-zinc-600">If elevated on heparin, stop infusion 4-6h prior.</td>
      </tr>
    </>
  );
}
