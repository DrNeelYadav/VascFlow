"use client";

import React, { useState } from "react";
import { Sparkles, Check } from "lucide-react";

interface TaceNarrativeBuilderProps {
  onInsertTechnique: (techniqueText: string) => void;
}

export const TaceNarrativeBuilder: React.FC<TaceNarrativeBuilderProps> = ({ onInsertTechnique }) => {
  const [hepaticBranch, setHepaticBranch] = useState<string>("Right Hepatic Artery");
  const [segments, setSegments] = useState<string[]>(["VII", "VIII"]);
  const [chemoRegimen, setChemoRegimen] = useState<string>("Lipiodol 8 mL + Doxorubicin 50 mg emulsion");
  const [gelfoamPledgets, setGelfoamPledgets] = useState<boolean>(true);
  const [microcatheter, setMicrocatheter] = useState<string>("2.0F Microcatheter (Progreat)");

  const allSegs = ["I", "II", "III", "IVa", "IVb", "V", "VI", "VII", "VIII"];

  const toggleSegment = (seg: string) => {
    setSegments((prev) =>
      prev.includes(seg) ? prev.filter((s) => s !== seg) : [...prev, seg]
    );
  };

  const generateNarrative = (): string => {
    const segStr = segments.length > 0 ? segments.map((s) => `Segment ${s}`).join(", ") : "target hepatic segment";
    let text = `Under strict aseptic condition and local anesthesia, Right Common Femoral Artery access was obtained with an 18G needle and 5F sheath placed. Celiac axis and common hepatic artery cannulated using a 5F Cobra/RH catheter. `;
    text += `Digital subtraction angiography (DSA) demonstrated hypervascular tumor stain in ${segStr} fed primarily by the ${hepaticBranch}. No anomalous left gastric or replaced right hepatic supply was noted. `;
    text += `Superselective subsegmental cannulation was achieved using a ${microcatheter} placed directly at the tumor-feeding vessel. Chemoembolization performed using ${chemoRegimen} delivered slowly under continuous fluoroscopic monitoring. `;
    
    if (gelfoamPledgets) {
      text += `Subsequent embolization was performed with absorbable gelatin sponge (Gelfoam) slurry until complete devascularization and stasis of the tumor-feeding branches was attained. `;
    }

    text += `Post-chemoembolization check angiography confirmed dense, homogeneous Lipiodol retention within the tumor nodule with complete disappearance of tumor blush and preservation of non-target hepatic parenchyma. Sheath removed; manual groin compression given for 15 minutes. Good hemostasis achieved.`;

    return text;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 space-y-3 mb-4">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>TACE Hepatic Segmental Narrative Generator</span>
        </div>
        <button
          type="button"
          onClick={() => onInsertTechnique(generateNarrative())}
          className="text-xs bg-amber-700 hover:bg-amber-800 text-white font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Insert into Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Feeding Artery
          </label>
          <select
            value={hepaticBranch}
            onChange={(e) => setHepaticBranch(e.target.value)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
          >
            <option value="Right Hepatic Artery">Right Hepatic Artery (RHA)</option>
            <option value="Left Hepatic Artery">Left Hepatic Artery (LHA)</option>
            <option value="Middle Hepatic Artery">Middle Hepatic Artery</option>
            <option value="Replaced Right Hepatic (ex SMA)">Replaced RHA (ex SMA)</option>
            <option value="Accessory Inferior Phrenic">Accessory Inferior Phrenic</option>
          </select>
        </div>

        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Chemotherapeutic Emulsion
          </label>
          <select
            value={chemoRegimen}
            onChange={(e) => setChemoRegimen(e.target.value)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <option value="Lipiodol 8 mL + Doxorubicin 50 mg emulsion">Lipiodol 8 mL + Doxorubicin 50 mg</option>
            <option value="Lipiodol 10 mL + Epirubicin 50 mg emulsion">Lipiodol 10 mL + Epirubicin 50 mg</option>
            <option value="DC Beads (100-300 um) loaded with Doxorubicin">DEB-TACE (DC Beads 100-300 µm)</option>
            <option value="Lipiodol 5 mL + Mitomycin C 10 mg">Lipiodol 5 mL + Mitomycin C</option>
          </select>
        </div>

        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Gelfoam Embolic Slurry
          </label>
          <select
            value={gelfoamPledgets ? "Yes" : "No"}
            onChange={(e) => setGelfoamPledgets(e.target.value === "Yes")}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <option value="Yes">Yes (Gelfoam Torpedoes / Slurry)</option>
            <option value="No">No (Oil Emulsion Only)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
          Target Couinaud Segments:
        </label>
        <div className="flex flex-wrap gap-1">
          {allSegs.map((seg) => {
            const isSel = segments.includes(seg);
            return (
              <button
                key={seg}
                type="button"
                onClick={() => toggleSegment(seg)}
                className={`text-xs px-2 py-0.5 rounded font-bold transition-colors ${
                  isSel
                    ? "bg-amber-600 text-white shadow-2xs"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                }`}
              >
                Seg {seg}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
