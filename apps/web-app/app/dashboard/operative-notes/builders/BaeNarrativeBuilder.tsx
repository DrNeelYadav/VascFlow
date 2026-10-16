"use client";

import React, { useState } from "react";
import { Sparkles, Check, ShieldAlert } from "lucide-react";

interface BaeNarrativeBuilderProps {
  onInsertTechnique: (techniqueText: string) => void;
}

const COMMON_ARTERIES = [
  { id: "r_icbt", label: "Right ICBT" },
  { id: "l_sup_bronch", label: "Left Superior Bronchial" },
  { id: "l_inf_bronch", label: "Left Inferior Bronchial" },
  { id: "common_bronch", label: "Common Bronchial Trunk" },
  { id: "r_5th_ica", label: "Right 5th Intercostal" },
  { id: "r_6th_ica", label: "Right 6th Intercostal" },
  { id: "r_7th_ica", label: "Right 7th Intercostal" },
  { id: "r_8th_ica", label: "Right 8th Intercostal" },
  { id: "r_9th_ica", label: "Right 9th Intercostal" },
  { id: "l_5th_ica", label: "Left 5th Intercostal" },
  { id: "l_6th_ica", label: "Left 6th Intercostal" },
  { id: "l_7th_ica", label: "Left 7th Intercostal" },
  { id: "l_8th_ica", label: "Left 8th Intercostal" },
  { id: "l_9th_ica", label: "Left 9th Intercostal" },
  { id: "ectopic_ima", label: "Ectopic Internal Mammary (IMA)" },
  { id: "ectopic_phrenic", label: "Ectopic Inferior Phrenic" },
];

export const BaeNarrativeBuilder: React.FC<BaeNarrativeBuilderProps> = ({ onInsertTechnique }) => {
  const [selectedArteries, setSelectedArteries] = useState<string[]>([
    "Right ICBT",
    "Right 6th Intercostal",
  ]);
  const [embolicAgent, setEmbolicAgent] = useState<string>("355-500 micron PVA Particles");
  const [microcatheter, setMicrocatheter] = useState<string>("2.7F Progreat Microcatheter");
  const [spinalSafetyAffirmed, setSpinalSafetyAffirmed] = useState<boolean>(true);

  const toggleArtery = (label: string) => {
    setSelectedArteries((prev) =>
      prev.includes(label) ? prev.filter((a) => a !== label) : [...prev, label]
    );
  };

  const generateNarrative = (): string => {
    const artList = selectedArteries.length > 0 ? selectedArteries.join(", ") : "bronchial collaterals";
    let text = `Under strict aseptic condition under USG and fluoroscopic guidance, right common femoral artery (CFA) access was secured with an 18G needle and 5F vascular sheath placed. Diagnostic thoracic aortogram and selective bronchial artery catheterization performed with 5F C1/Simmons catheter. `;
    text += `Angiography revealed markedly hypertrophied, tortuous feeder vessels arising from: ${artList}, demonstrating dense abnormal hypervascular parenchymal blush with systemic-to-pulmonary shunting. `;

    if (spinalSafetyAffirmed) {
      text += `Prior to embolization, high-resolution digital subtraction angiography (DSA) was meticulously examined to rule out any anterior spinal artery (hairpin loop of Adamkiewicz) origin from the target vessels, which was verified absent. `;
    }

    text += `Superselective coaxial cannulation of target feeders was achieved using a ${microcatheter} over 0.014-inch guidewire. Embolization was performed using ${embolicAgent} suspended in non-ionic contrast under continuous fluoroscopy until complete flow stasis and total cessation of abnormal vascular blush. `;
    text += `Post-embolization completion angiogram showed complete resolution of the abnormal parenchymal hypervascularity with preservation of the parent intercostal and aortic flow. Femoral sheath removed and manual compression given for 15 minutes. Good hemostasis achieved with strong distal pedispulses.`;

    return text;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 space-y-3 mb-4">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
          <Sparkles className="w-4 h-4 text-rose-600" />
          <span>BAE Artery Selector &amp; Narrative Generator</span>
        </div>
        <button
          type="button"
          onClick={() => onInsertTechnique(generateNarrative())}
          className="text-xs bg-rose-700 hover:bg-rose-800 text-white font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Insert into Report</span>
        </button>
      </div>

      <div>
        <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
          Select Cannulated &amp; Embolized Arteries:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 max-h-36 overflow-y-auto p-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          {COMMON_ARTERIES.map((art) => {
            const isChecked = selectedArteries.includes(art.label);
            return (
              <label
                key={art.id}
                className={`flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium cursor-pointer transition-colors ${
                  isChecked
                    ? "bg-rose-100 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200 font-bold"
                    : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleArtery(art.label)}
                  className="w-3.5 h-3.5 rounded text-rose-600"
                />
                <span className="truncate">{art.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Microcatheter
          </label>
          <select
            value={microcatheter}
            onChange={(e) => setMicrocatheter(e.target.value)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <option value="2.7F Progreat Microcatheter">2.7F Progreat (Terumo)</option>
            <option value="2.4F Merit Maestro">2.4F Merit Maestro</option>
            <option value="1.9F Carnelian">1.9F Carnelian</option>
          </select>
        </div>

        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Embolic Agent
          </label>
          <select
            value={embolicAgent}
            onChange={(e) => setEmbolicAgent(e.target.value)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <option value="355-500 micron PVA Particles">355–500 µm PVA Particles</option>
            <option value="500-710 micron PVA Particles">500–710 µm PVA Particles</option>
            <option value="Gel-foam Slurry and Torpedoes">Gel-foam Slurry &amp; Torpedoes</option>
            <option value="Microcoils + PVA Particles">Microcoils + PVA Particles</option>
          </select>
        </div>

        <div className="flex items-center gap-2 pt-4">
          <input
            type="checkbox"
            id="spinal-safe"
            checked={spinalSafetyAffirmed}
            onChange={(e) => setSpinalSafetyAffirmed(e.target.checked)}
            className="w-4 h-4 rounded text-rose-600"
          />
          <label htmlFor="spinal-safe" className="text-[11px] font-semibold text-rose-900 dark:text-rose-200 cursor-pointer flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>Spinal Artery Confirmed Absent</span>
          </label>
        </div>
      </div>
    </div>
  );
};
