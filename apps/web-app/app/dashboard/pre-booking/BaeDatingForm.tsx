"use client";

import React from "react";
import { BaeDetails } from "./preBookingTypes";
import { LungMediastinumLineDiagram } from "./diagrams/LungMediastinumLineDiagram";

interface BaeDatingFormProps {
  bae: BaeDetails;
  setBae: React.Dispatch<React.SetStateAction<BaeDetails>>;
}

export const BaeDatingForm: React.FC<BaeDatingFormProps> = ({ bae, setBae }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
          Bronchial Artery Embolization (BAE) — Anatomy, Origins & Mediastinum
        </h3>
        <span className="text-[10px] font-mono bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 px-2 py-0.5 rounded font-bold">
          Spinal Artery Clearance
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Form Fields */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Hemoptysis Volume / Severity
              </label>
              <select
                value={bae.hemoptysisSeverity}
                onChange={(e) => setBae((prev) => ({ ...prev, hemoptysisSeverity: e.target.value as any }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold"
              >
                <option value="Massive (>300ml/24h)">Massive (&gt;300 mL / 24h) - Urgent</option>
                <option value="Moderate (100-300ml)">Moderate (100–300 mL)</option>
                <option value="Mild (<100ml/24h)">Mild (&lt;100 mL / 24h)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Primary Suspected Lung Lobe
              </label>
              <select
                value={bae.primaryLungLobe}
                onChange={(e) => setBae((prev) => ({ ...prev, primaryLungLobe: e.target.value as any }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold"
              >
                <option value="RUL">Right Upper Lobe (RUL)</option>
                <option value="RML">Right Middle Lobe (RML)</option>
                <option value="RLL">Right Lower Lobe (RLL)</option>
                <option value="LUL">Left Upper Lobe (LUL)</option>
                <option value="LLL">Left Lower Lobe (LLL)</option>
                <option value="Bilateral">Bilateral Disease</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Hypertrophied Bronchial Artery Origins Noted on CT
            </label>
            <input
              type="text"
              value={bae.bronchialArteryOrigins.join(", ")}
              onChange={(e) =>
                setBae((prev) => ({
                  ...prev,
                  bronchialArteryOrigins: e.target.value.split(",").map((s) => s.trim()),
                }))
              }
              placeholder="e.g. Right ICBT, Left Superior Bronchial"
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Ectopic / Non-Bronchial Systemic Collaterals (NBSC)
            </label>
            <input
              type="text"
              value={bae.ectopicCollaterals.join(", ")}
              onChange={(e) =>
                setBae((prev) => ({
                  ...prev,
                  ectopicCollaterals: e.target.value.split(",").map((s) => s.trim()),
                }))
              }
              placeholder="e.g. Subclavian (IMA), Inferior Phrenic, Direct Aortic"
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
            />
          </div>

          {/* Adamkiewicz Spinal Safety Check */}
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-lg p-3">
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="adam-check"
                checked={bae.spinalArterySafetyCleared}
                onChange={(e) => setBae((prev) => ({ ...prev, spinalArterySafetyCleared: e.target.checked }))}
                className="w-4 h-4 mt-0.5 rounded text-red-600 focus:ring-red-500"
              />
              <div>
                <label htmlFor="adam-check" className="text-xs font-bold text-red-900 dark:text-red-200 cursor-pointer">
                  Anterior Spinal Artery (Hairpin / Adamkiewicz) Verification Protocol
                </label>
                <p className="text-[10.5px] text-red-700 dark:text-red-300 mt-0.5">
                  Pre-embolization angiography checklist: Affirm absence of anterior spinal artery origin from targeted intercostobronchial trunk (ICBT) prior to particle injection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Printable Lung/Mediastinum Diagram */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <LungMediastinumLineDiagram />
        </div>
      </div>
    </div>
  );
};
