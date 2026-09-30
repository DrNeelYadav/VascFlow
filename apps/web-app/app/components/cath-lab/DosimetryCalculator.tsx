"use client";

import React, { useState } from "react";
import { AlertTriangle, ShieldCheck, Zap, Droplets, Info } from "lucide-react";
import { calculateMacd } from "../../lib/calculators";

export interface FlowsheetVitalsProps {
  creatinine: number;
  weightKg: number;
  contrastDeliveredMl: number;
  fluoroTimeMinutes: number;
  totalDapGyCm2: number;
  airKermaGy?: number;
  onContrastChange?: (amount: number) => void;
  onFluoroChange?: (amount: number) => void;
  onDapChange?: (amount: number) => void;
  onAirKermaChange?: (amount: number) => void;
}

export function DosimetryCalculator({
  creatinine,
  weightKg,
  contrastDeliveredMl,
  fluoroTimeMinutes,
  totalDapGyCm2,
  airKermaGy: propAirKerma,
  onContrastChange,
  onFluoroChange,
  onDapChange,
  onAirKermaChange,
}: FlowsheetVitalsProps) {
  const [internalAirKerma, setInternalAirKerma] = useState<number | null>(null);
  const [isTissueInjuryConfirmed, setIsTissueInjuryConfirmed] = useState<boolean>(false);

  // Cumulative Air Kerma (Gy): calculated or prop or derived (totalDapGyCm2 * 0.015)
  const derivedAirKerma = Number((totalDapGyCm2 * 0.015).toFixed(2));
  const airKermaGy =
    propAirKerma !== undefined
      ? propAirKerma
      : internalAirKerma !== null
      ? internalAirKerma
      : derivedAirKerma;

  const isHighDoseAirKerma = airKermaGy >= 5.0 || totalDapGyCm2 >= 500;

  // Cigarroa's Maximum Allowable Contrast Dose (MACD).
  // Single source of truth: this component is rendered directly beneath the
  // cath-lab flowsheet, so a second local copy of the formula meant two
  // disagreeing ceilings on screen at once - and `creatinine || 1.0` invented a
  // full-dose allowance for a patient whose renal function was never measured.
  const macdResult = calculateMacd(weightKg, creatinine, contrastDeliveredMl);
  const macdLimit = macdResult.valid ? macdResult.macdMl : 0;
  const isRenalDataMissing = !macdResult.valid;
  const contrastRatio = isRenalDataMissing
    ? 0
    : Number((contrastDeliveredMl / (macdLimit || 1)).toFixed(2));
  const isContrastExceeded = !isRenalDataMissing && contrastRatio >= 1.0;
  const isApproachingLimit = !isRenalDataMissing && contrastRatio >= 0.8 && !isContrastExceeded;
  const isHighRadiation = totalDapGyCm2 > 300 || fluoroTimeMinutes > 45 || isHighDoseAirKerma;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-amber-500" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Intra-Operative Dosimetry & Contrast Telemetry
          </h4>
        </div>
        <div className="text-[11px] text-slate-500">
          Pt Weight: <span className="font-semibold text-slate-800">{weightKg} kg</span> &bull; Baseline Cr:{" "}
          <span className="font-semibold text-slate-800">{creatinine} mg/dL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cigarroa MACD Contrast Safety Card */}
        <div
          className={`rounded-xl p-4 border transition-all ${
            isContrastExceeded
              ? "bg-red-50/90 border-red-300 text-red-900 shadow-sm"
              : isApproachingLimit
              ? "bg-amber-50 border-amber-300 text-amber-900"
              : "bg-white border-slate-200 text-slate-800 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              <Droplets className="h-3.5 w-3.5 text-blue-500" />
              <span>Cigarroa MACD Safety Limit</span>
            </div>
            {isContrastExceeded ? (
              <span className="inline-flex items-center gap-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase animate-pulse">
                <AlertTriangle className="h-3 w-3" /> CIN Alert
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                <ShieldCheck className="h-3 w-3" /> Safe Margin
              </span>
            )}
          </div>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black tracking-tight">{contrastDeliveredMl}</span>
            <span className="text-sm font-semibold text-slate-500">/ {macdLimit} mL</span>
          </div>

          {/* Progress Bar */}
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full transition-all duration-300 ${
                isContrastExceeded
                  ? "bg-red-600"
                  : isApproachingLimit
                  ? "bg-amber-500"
                  : "bg-blue-600"
              }`}
              style={{ width: `${Math.min(contrastRatio * 100, 100)}%` }}
            />
          </div>

          <div className="mt-2 flex items-center justify-between text-xs">
            <span>
              Ratio: <span className="font-mono font-bold">{contrastRatio}</span>
              {isContrastExceeded && " — EXCEEDED CIRSE SAFETY LIMIT"}
            </span>
            {onContrastChange && (
              <div className="flex gap-1">
                <button
                  onClick={() => onContrastChange(Math.max(0, contrastDeliveredMl - 10))}
                  className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-bold hover:bg-slate-100"
                >
                  -10mL
                </button>
                <button
                  onClick={() => onContrastChange(contrastDeliveredMl + 10)}
                  className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-bold hover:bg-slate-100"
                >
                  +10mL
                </button>
              </div>
            )}
          </div>

          <div className="mt-2 pt-2 border-t border-slate-200/80 text-[10px] font-mono text-slate-500">
            {isRenalDataMissing
              ? "Ceiling unavailable: serum creatinine is not recorded. A measured value is required before contrast administration."
              : `Formula: (5 × Weight in kg) / Serum Creatinine = (5 × ${weightKg} kg) / ${creatinine} mg/dL = ${macdLimit} mL (300 mL hard cap enforced)`}
          </div>
        </div>

        {/* Radiation Exposure & DAP Card */}
        <div
          className={`rounded-xl p-4 border transition-all ${
            isHighDoseAirKerma
              ? "bg-red-50/90 border-red-300 text-red-900 shadow-sm"
              : isHighRadiation
              ? "bg-amber-50 border-amber-300 text-amber-900 shadow-sm"
              : "bg-white border-slate-200 text-slate-800 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              <Zap className="h-3.5 w-3.5 text-amber-500" />
              <span>Radiation Dosimetry (DAP &amp; Air Kerma)</span>
            </div>
            {isHighDoseAirKerma ? (
              <span className="inline-flex items-center gap-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase animate-pulse">
                <AlertTriangle className="h-3 w-3" /> SIR/AERB Hard Alert
              </span>
            ) : isHighRadiation ? (
              <span className="inline-flex items-center gap-1 rounded bg-amber-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                <AlertTriangle className="h-3 w-3" /> SIR Review
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                Artis Zee Telemetry
              </span>
            )}
          </div>

          <div className="mt-2 flex items-baseline gap-3 flex-wrap">
            <div>
              <span className="text-2xl font-black tracking-tight">{totalDapGyCm2}</span>
              <span className="text-xs font-semibold text-slate-500 ml-1">Gy&middot;cm&sup2;</span>
            </div>
            <span className="text-slate-300">•</span>
            <div>
              <span className={`text-2xl font-black tracking-tight ${isHighDoseAirKerma ? "text-red-700" : "text-amber-800"}`}>
                {airKermaGy}
              </span>
              <span className="text-xs font-semibold text-slate-500 ml-1">Gy Air Kerma</span>
            </div>
          </div>

          {/* Submetrics */}
          <div className="mt-2 flex items-center justify-between text-xs">
            <div>
              Fluoro Time: <span className="font-mono font-bold">{fluoroTimeMinutes} min</span>
              {isHighRadiation && " (>45 min / High Dose)"}
            </div>
            {onFluoroChange && onDapChange && (
              <div className="flex gap-1">
                <button
                  onClick={() => {
                    onFluoroChange(Number((fluoroTimeMinutes + 2).toFixed(1)));
                    onDapChange(Number((totalDapGyCm2 + 15).toFixed(1)));
                  }}
                  className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-bold hover:bg-slate-100"
                >
                  +2 min
                </button>
                <button
                  onClick={() => {
                    onDapChange(Number((totalDapGyCm2 + 50).toFixed(1)));
                  }}
                  className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-bold hover:bg-slate-100"
                >
                  +50 DAP
                </button>
              </div>
            )}
          </div>

          <p className="mt-2 text-[10px] text-slate-400">
            Cumulative Air Kerma derived from Artis Zee reference geometry (1 Gy&middot;cm&sup2; &asymp; 0.015 Gy ref kerma).
          </p>
        </div>
      </div>

      {/* Mandatory Radiation Tissue-Injury Surveillance Alert Banner */}
      {isHighDoseAirKerma && (
        <div className="rounded-xl border-2 border-red-600 bg-red-50 p-4 space-y-3">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-1">
              <div className="text-xs font-black uppercase tracking-wide text-red-900 leading-snug">
                MANDATORY RADIATION TISSUE-INJURY SURVEILLANCE: Cumulative Air Kerma &gt;= 5 Gy (5000 mGy). Mandatory post-procedure skin erythema documentation, patient radiation injury counseling, and 30-day clinical surveillance required (SIR/AERB Protocol).
              </div>
              <p className="text-[11px] text-red-700">
                Deterministic radiation injury threshold exceeded (Air Kerma: {airKermaGy} Gy &bull; DAP: {totalDapGyCm2} Gy&middot;cm&sup2;). Operator must inspect back/flank entry portals, document fluoroscopic projection geometry, and activate 30-day skin necrosis follow-up registry.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white border border-red-300 p-2.5 flex items-center justify-between flex-wrap gap-2">
            <label className="flex items-center gap-2 text-xs font-bold text-red-900 cursor-pointer">
              <input
                type="checkbox"
                checked={isTissueInjuryConfirmed}
                onChange={(e) => setIsTissueInjuryConfirmed(e.target.checked)}
                className="h-4 w-4 rounded border-red-400 text-red-600 focus:ring-red-600 cursor-pointer"
              />
              <span>Operator Confirmed: Tissue-injury protocol activated</span>
            </label>
            {isTissueInjuryConfirmed && (
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ✓ Protocol Active &amp; Documented
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
