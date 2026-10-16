"use client";

import React from "react";
import { SclerotherapyDetails } from "./preBookingTypes";

interface SclerotherapyDatingFormProps {
  details: SclerotherapyDetails;
  updateField: <K extends keyof SclerotherapyDetails>(field: K, val: SclerotherapyDetails[K]) => void;
}

export const SclerotherapyDatingForm: React.FC<SclerotherapyDatingFormProps> = ({
  details,
  updateField,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Bleomycin & Polidocanol Sclerotherapy — Presentation & Phlebogram
          </h3>
        </div>
        <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">
          AIIMS Delhi Protocol Benchmark
        </span>
      </div>

      {/* FRONT PAGE: Presentation & Baseline Imaging */}
      <div className="mb-5">
        <h4 className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2.5">
          [Front Page] Clinical Complaints & Baseline Imaging
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Duration of Symptoms
            </label>
            <input
              type="text"
              value={details.symptomDuration}
              onChange={(e) => updateField("symptomDuration", e.target.value)}
              placeholder="e.g. 2.5 years"
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Pain Score (VAS 0–10)
            </label>
            <input
              type="number"
              min={0}
              max={10}
              value={details.painScoreVas}
              onChange={(e) => updateField("painScoreVas", Number(e.target.value))}
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
            />
          </div>

          <div className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <input
              type="checkbox"
              id="facial-disfig"
              checked={details.facialDisfigurement}
              onChange={(e) => updateField("facialDisfigurement", e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="facial-disfig" className="text-[11px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer">
              Facial / Cosmetic Disfigurement
            </label>
          </div>

          <div className="sm:col-span-2 md:col-span-3">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Clinical Complaints & Functional Impairment Notes
            </label>
            <textarea
              rows={2}
              value={details.complaints}
              onChange={(e) => updateField("complaints", e.target.value)}
              placeholder="e.g. Recurrent bluish compressible swelling over right cheek; functional difficulty on mastication"
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="sm:col-span-1 md:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Prior USG / Color Doppler Dimensions & Flow
            </label>
            <input
              type="text"
              value={details.baselineUsgDimensions}
              onChange={(e) => updateField("baselineUsgDimensions", e.target.value)}
              placeholder="e.g. 48 x 32 x 26 mm low-flow venous channels"
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Baseline MRI / STIR Characteristics
            </label>
            <input
              type="text"
              value={details.baselineMriFindings}
              onChange={(e) => updateField("baselineMriFindings", e.target.value)}
              placeholder="e.g. High STIR signal with no high-flow arterial nidus"
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            />
          </div>
        </div>
      </div>

      {/* BACK PAGE: Direct AIIMS Delhi Phlebogram Ledger from Photograph */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
        <h4 className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2.5">
          [Back Page] Pre-Injection Phlebogram (DSA Suite Verification)
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Fluid Aspirated
            </label>
            <select
              value={details.fluidAspirated}
              onChange={(e) => updateField("fluidAspirated", e.target.value as any)}
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold"
            >
              <option value="Blood">Blood (Venous Malformation)</option>
              <option value="Lymph">Lymph (Lymphatic Malformation)</option>
              <option value="Serous">Serous</option>
              <option value="None">Dry Puncture / None</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Contrast Vol. Injected
            </label>
            <input
              type="text"
              value={details.contrastVolInjectedMl}
              onChange={(e) => updateField("contrastVolInjectedMl", e.target.value)}
              placeholder="2.5 ml"
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Morphological Appearance
            </label>
            <select
              value={details.appearance}
              onChange={(e) => updateField("appearance", e.target.value as any)}
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold"
            >
              <option value="Cavitary">Cavitary (Circled in AIIMS)</option>
              <option value="Spongy">Spongy</option>
              <option value="Dysplastic veins">Dysplastic veins</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Draining Vein
            </label>
            <select
              value={details.drainingVeinStatus}
              onChange={(e) => updateField("drainingVeinStatus", e.target.value as any)}
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            >
              <option value="Not Present">Not Present (Direct Cavity)</option>
              <option value="Early">Early Washout</option>
              <option value="Late">Late Draining</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              With Compression (Venous Outflow Occlusion)
            </label>
            <div className="flex gap-2">
              <select
                value={details.compressionStatus}
                onChange={(e) => updateField("compressionStatus", e.target.value as any)}
                className="w-1/3 text-xs px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              >
                <option value="Present">Present (+)</option>
                <option value="Not Present">Not Present</option>
              </select>
              <input
                type="text"
                value={details.compressionSite}
                onChange={(e) => updateField("compressionSite", e.target.value)}
                placeholder="e.g. Right Internal Jugular Vein (R. IJV)"
                className="w-2/3 text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
