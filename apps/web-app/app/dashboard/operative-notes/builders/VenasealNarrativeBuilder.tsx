"use client";

import React, { useState } from "react";
import { Sparkles, Check } from "lucide-react";

interface VenasealNarrativeBuilderProps {
  onInsertTechnique: (techniqueText: string) => void;
}

export const VenasealNarrativeBuilder: React.FC<VenasealNarrativeBuilderProps> = ({
  onInsertTechnique,
}) => {
  const [laterality, setLaterality] = useState<"Right" | "Left" | "Bilateral">("Right");
  const [gsvAblated, setGsvAblated] = useState<boolean>(true);
  const [ssvAblated, setSsvAblated] = useState<boolean>(false);
  const [perforatorAblated, setPerforatorAblated] = useState<boolean>(false);
  const [perforatorLocation, setPerforatorLocation] = useState<string>("Mid-calf Cockett");
  const [scleroDone, setScleroDone] = useState<boolean>(true);
  const [scleroDetails, setScleroDetails] = useState<string>("2 mL 1% Polidocanol + 6 mL Air (Tessari Foam)");
  const [sheathAccess, setSheathAccess] = useState<string>("4F Micro-puncture Sheath");

  const generateNarrative = (): string => {
    const latStr = laterality === "Bilateral" ? "bilateral lower limbs" : `${laterality.toLowerCase()} lower limb`;
    const veinsList: string[] = [];
    if (gsvAblated) veinsList.push("Great Saphenous Vein (GSV)");
    if (ssvAblated) veinsList.push("Small Saphenous Vein (SSV)");
    const targetVeins = veinsList.length > 0 ? veinsList.join(" and ") : "target venous trunk";

    let text = `Under strict aseptic precaution and real-time high-resolution ultrasound guidance, retrograde access of the ${laterality} ${targetVeins} was performed using a ${sheathAccess}. `;
    
    if (gsvAblated) {
      text += `Venaseal delivery catheter was advanced into the GSV and the tip was meticulously positioned 2.5 cm distal to the saphenofemoral junction (SFJ) under direct ultrasound visualization. Cyanoacrylate glue delivered along the GSV with sequential transducer compression (30 seconds at SFJ, followed by 20 seconds for subsequent segments down to upper calf). `;
    }
    if (ssvAblated) {
      text += `The SSV was cannulated in mid-calf and ablated with Venaseal adhesive, maintaining 2.0 cm safety clearance from the saphenopopliteal junction (SPJ). `;
    }
    if (perforatorAblated) {
      text += `Incompetent ${perforatorLocation} perforator was identified and targeted with direct ultrasound-guided ablation. `;
    }
    if (scleroDone) {
      text += `Concomitant ultrasound-guided foam sclerotherapy was performed for symptomatic tributary varicosities using ${scleroDetails}. `;
    }

    text += `Completion duplex ultrasound demonstrated complete non-compressibility and total acoustic occlusion of treated veins with brisk, patent deep venous flow (CFV and Popliteal veins patent). No extravasation, DVT, or paresthesia noted. Sterile dry dressing and Class II compression bandage applied.`;

    return text;
  };

  const handleApply = () => {
    onInsertTechnique(generateNarrative());
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 space-y-3 mb-4">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span>Venaseal / EVLT Narrative Generator (Auto-Synthesizer)</span>
        </div>
        <button
          type="button"
          onClick={handleApply}
          className="text-xs bg-teal-700 hover:bg-teal-800 text-white font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Insert into Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
        {/* Laterality */}
        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Laterality
          </label>
          <select
            value={laterality}
            onChange={(e) => setLaterality(e.target.value as any)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
          >
            <option value="Right">Right Lower Limb</option>
            <option value="Left">Left Lower Limb</option>
            <option value="Bilateral">Bilateral Lower Limbs</option>
          </select>
        </div>

        {/* GSV Ablation */}
        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            GSV Ablated
          </label>
          <select
            value={gsvAblated ? "Yes" : "No"}
            onChange={(e) => setGsvAblated(e.target.value === "Yes")}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <option value="Yes">Yes (Great Saphenous)</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* SSV Ablation */}
        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            SSV Ablated
          </label>
          <select
            value={ssvAblated ? "Yes" : "No"}
            onChange={(e) => setSsvAblated(e.target.value === "Yes")}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <option value="No">No</option>
            <option value="Yes">Yes (Small Saphenous)</option>
          </select>
        </div>

        {/* Perforator Ablated */}
        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Perforator Ablation
          </label>
          <div className="flex gap-1.5">
            <select
              value={perforatorAblated ? "Yes" : "No"}
              onChange={(e) => setPerforatorAblated(e.target.value === "Yes")}
              className="w-1/2 text-xs px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {perforatorAblated && (
              <input
                type="text"
                value={perforatorLocation}
                onChange={(e) => setPerforatorLocation(e.target.value)}
                placeholder="Cockett"
                className="w-1/2 text-xs px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
              />
            )}
          </div>
        </div>

        {/* Foam Sclerotherapy */}
        <div className="sm:col-span-2">
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Tributary Foam Sclerotherapy
          </label>
          <div className="flex gap-1.5">
            <select
              value={scleroDone ? "Yes" : "No"}
              onChange={(e) => setScleroDone(e.target.value === "Yes")}
              className="w-1/4 text-xs px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {scleroDone && (
              <input
                type="text"
                value={scleroDetails}
                onChange={(e) => setScleroDetails(e.target.value)}
                placeholder="2 mL 1% Polidocanol foam"
                className="w-3/4 text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
