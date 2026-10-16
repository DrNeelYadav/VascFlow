"use client";

import React from "react";
import { BleederDetails } from "./preBookingTypes";
import { CeliacMesentericLineDiagram } from "./diagrams/CeliacMesentericLineDiagram";

interface BleederDatingFormProps {
  bleeder: BleederDetails;
  setBleeder: React.Dispatch<React.SetStateAction<BleederDetails>>;
}

export const BleederDatingForm: React.FC<BleederDatingFormProps> = ({ bleeder, setBleeder }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
          Upper & Lower GI Bleeder — Culprit Vessel, Forrest Class & Celiac Tree
        </h3>
        <span className="text-[10px] font-mono bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 px-2 py-0.5 rounded font-bold">
          STAT Angiography Protocol
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Form Fields */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Clinical Bleeding Presentation
              </label>
              <select
                value={bleeder.clinicalPresentation}
                onChange={(e) => setBleeder((prev) => ({ ...prev, clinicalPresentation: e.target.value as any }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold"
              >
                <option value="Hematemesis">Hematemesis (Upper GI)</option>
                <option value="Melena">Melena (Upper / Mid GI)</option>
                <option value="Fresh Hematochezia">Fresh Hematochezia (Lower GI)</option>
                <option value="Post-Op Drain Bleed">Post-Operative Drain Bleed</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Endoscopic Forrest Classification
              </label>
              <select
                value={bleeder.forrestClass}
                onChange={(e) => setBleeder((prev) => ({ ...prev, forrestClass: e.target.value as any }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold"
              >
                <option value="Ia (Spurting)">Forrest Ia: Spurting Arterial Hemorrhage</option>
                <option value="Ib (Oozing)">Forrest Ib: Oozing Bleed</option>
                <option value="IIa (Non-bleeding visible vessel)">Forrest IIa: Non-bleeding visible vessel</option>
                <option value="IIb (Adherent clot)">Forrest IIb: Adherent clot</option>
                <option value="IIc (Flat spot)">Forrest IIc: Pigmented flat spot</option>
                <option value="III (Clean base)">Forrest III: Clean base</option>
                <option value="Not Applicable">Not Applicable / Direct CTA Localization</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Suspected Culprit Artery
              </label>
              <select
                value={bleeder.culpritVesselSuspected}
                onChange={(e) => setBleeder((prev) => ({ ...prev, culpritVesselSuspected: e.target.value as any }))}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold"
              >
                <option value="Gastroduodenal (GDA)">Gastroduodenal Artery (GDA) - Duodenal Ulcer</option>
                <option value="Left Gastric (LGA)">Left Gastric Artery (LGA) - Gastric Ulcer</option>
                <option value="Splenic">Splenic Artery (Pseudoaneurysm / Bleed)</option>
                <option value="Ileocolic">Ileocolic Artery (Cecal / Lower GI)</option>
                <option value="SMA Branch">SMA Jejunal / Ileal branch</option>
                <option value="Other">Other / Replaced Arcade</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                Hemodynamic Stability & Shock Index
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={bleeder.hemodynamicStatus}
                  onChange={(e) => setBleeder((prev) => ({ ...prev, hemodynamicStatus: e.target.value as any }))}
                  className="text-xs px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                >
                  <option value="Stable">Stable</option>
                  <option value="Borderline">Borderline</option>
                  <option value="Active Shock (Requiring Inotropes)">Active Shock</option>
                </select>
                <input
                  type="text"
                  value={bleeder.shockIndex}
                  onChange={(e) => setBleeder((prev) => ({ ...prev, shockIndex: e.target.value }))}
                  placeholder="SI: 0.95"
                  className="text-xs px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Printable Celiac & Mesenteric Diagram */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <CeliacMesentericLineDiagram />
        </div>
      </div>
    </div>
  );
};
