"use client";

import React from "react";
import { TaceDetails } from "./preBookingTypes";
import { LiverCouinaudLineDiagram } from "./diagrams/LiverCouinaudLineDiagram";

interface TaceDatingFormProps {
  tace: TaceDetails;
  setTace: React.Dispatch<React.SetStateAction<TaceDetails>>;
}

const SEGMENTS = ["I", "II", "III", "IVa", "IVb", "V", "VI", "VII", "VIII"];

export const TaceDatingForm: React.FC<TaceDatingFormProps> = ({ tace, setTace }) => {
  const toggleSegment = (seg: string) => {
    setTace((prev) => {
      const exists = prev.couinaudSegments.includes(seg);
      return {
        ...prev,
        couinaudSegments: exists
          ? prev.couinaudSegments.filter((s) => s !== seg)
          : [...prev.couinaudSegments, seg],
      };
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
          TACE / Hepatic Interventions — Anatomy, Segment & Line Diagram
        </h3>
        <span className="text-[10px] font-mono bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded font-bold">
          Couinaud Mapping
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Clinical Parameters */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Hepatic Artery Branch Feeder
              </label>
              <select
                value={tace.hepaticArteryBranch}
                onChange={(e) => setTace((prev) => ({ ...prev, hepaticArteryBranch: e.target.value as any }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              >
                <option value="Right Hepatic">Right Hepatic Artery (RHA)</option>
                <option value="Left Hepatic">Left Hepatic Artery (LHA)</option>
                <option value="Bilateral">Bilateral Supply</option>
                <option value="Replaced / Accessory">Replaced / Accessory Feeder (e.g. SMA/LGA origin)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Baseline Alpha-Fetoprotein (AFP)
              </label>
              <input
                type="text"
                value={tace.baselineAfpNgMl}
                onChange={(e) => setTace((prev) => ({ ...prev, baselineAfpNgMl: e.target.value }))}
                placeholder="e.g. 185 ng/mL"
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
              />
            </div>
          </div>

          {/* Couinaud Segments Selector */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Couinaud Segment(s) Involved
            </label>
            <div className="flex flex-wrap gap-1.5">
              {SEGMENTS.map((seg) => {
                const isSelected = tace.couinaudSegments.includes(seg);
                return (
                  <button
                    key={seg}
                    type="button"
                    onClick={() => toggleSegment(seg)}
                    className={`text-xs px-3 py-1 rounded-md font-bold transition-all ${
                      isSelected
                        ? "bg-amber-600 text-white shadow-sm ring-1 ring-amber-500"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    Seg {seg}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                No. of Lesions
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={tace.lesionCount}
                onChange={(e) => setTace((prev) => ({ ...prev, lesionCount: Number(e.target.value) }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Dominant Size
              </label>
              <input
                type="text"
                value={tace.dominantLesionSizeCm}
                onChange={(e) => setTace((prev) => ({ ...prev, dominantLesionSizeCm: e.target.value }))}
                placeholder="3.2 cm"
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                LI-RADS Class
              </label>
              <select
                value={tace.liradsCategory}
                onChange={(e) => setTace((prev) => ({ ...prev, liradsCategory: e.target.value as any }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold"
              >
                <option value="LR-5">LR-5 (Definite HCC)</option>
                <option value="LR-4">LR-4 (Probable HCC)</option>
                <option value="LR-3">LR-3 (Intermediate)</option>
                <option value="LR-M">LR-M (Malignancy Non-HCC)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Child-Pugh Score
              </label>
              <select
                value={tace.childPughClass}
                onChange={(e) => setTace((prev) => ({ ...prev, childPughClass: e.target.value as any }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold"
              >
                <option value="A">Class A (5-6 pts)</option>
                <option value="B">Class B (7-9 pts)</option>
                <option value="C">Class C (10-15 pts)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Column: Printable Liver Line Diagram */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <LiverCouinaudLineDiagram />
        </div>
      </div>
    </div>
  );
};
