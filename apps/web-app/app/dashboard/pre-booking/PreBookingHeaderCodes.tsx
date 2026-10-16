"use client";

import React from "react";
import { SchemeType } from "./preBookingTypes";

interface PreBookingHeaderCodesProps {
  icdCode: string;
  schemeCode: string;
  scheme: SchemeType;
  onSchemeChange: (s: SchemeType) => void;
  scheduledDate: string;
}

export const PreBookingHeaderCodes: React.FC<PreBookingHeaderCodesProps> = ({
  icdCode,
  schemeCode,
  scheme,
  onSchemeChange,
  scheduledDate,
}) => {
  return (
    <div className="bg-slate-900 text-white rounded-xl p-4 shadow-md border border-slate-800 mb-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold text-sm">
            IR
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-slate-100 uppercase">
              SMS Hospital IR — Pre-Booking & Dating Studio
            </h2>
            <p className="text-[11px] text-slate-400">
              Department of Interventional Radiology, SMS Medical College, Jaipur (AIIMS Clinical Benchmark)
            </p>
          </div>
        </div>

        {/* Target Scheduled Date Indicator */}
        <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
          <span className="text-[11px] text-slate-400 uppercase font-mono">Dating Slot:</span>
          <span className="text-xs font-mono font-bold text-amber-400">{scheduledDate || "Not Set"}</span>
        </div>
      </div>

      {/* Prominent Statutory Billing & Tariff Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3">
        {/* ICD-10 Code Card */}
        <div className="bg-slate-800/90 rounded-lg p-2.5 border border-indigo-500/30">
          <div className="text-[10px] uppercase font-bold tracking-wider text-indigo-400">
            Primary ICD-10 Diagnostic Code
          </div>
          <div className="text-xs font-mono font-bold text-white mt-0.5 truncate">
            {icdCode}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">Authoritative WHO Classification</div>
        </div>

        {/* RGHS / MAAY Scheme Code Card */}
        <div className="bg-slate-800/90 rounded-lg p-2.5 border border-emerald-500/30">
          <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
            Rajasthan Govt Scheme Tariff Code
          </div>
          <div className="text-xs font-mono font-bold text-white mt-0.5 truncate">
            {schemeCode}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">Pre-Authorized Angiosuite Package</div>
        </div>

        {/* Scheme Selector */}
        <div className="bg-slate-800/90 rounded-lg p-2.5 border border-slate-700">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-300">
            Active Health Scheme
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            {(["RGHS", "MAAY", "PM-JAY", "RMRS", "Cash"] as SchemeType[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onSchemeChange(s)}
                className={`text-[11px] px-2 py-0.5 rounded font-medium transition-all ${
                  scheme === s
                    ? "bg-teal-600 text-white font-bold shadow-sm"
                    : "bg-slate-700/80 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
