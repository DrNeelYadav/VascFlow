"use client";

import React, { useState } from "react";
import { Sparkles, Check } from "lucide-react";

interface BiliaryNarrativeBuilderProps {
  onInsertTechnique: (techniqueText: string) => void;
}

export const BiliaryNarrativeBuilder: React.FC<BiliaryNarrativeBuilderProps> = ({
  onInsertTechnique,
}) => {
  const [approach, setApproach] = useState<string>("Via previously placed Ring Biliary Catheter");
  const [strictureLevel, setStrictureLevel] = useState<string>("Primary biliary confluence & proximal CBD (Bismuth II)");
  const [stentSize, setStentSize] = useState<string>("10 mm x 100 mm Self-Expanding Metallic Stent (SEMS)");
  const [postDilatation, setPostDilatation] = useState<boolean>(false);
  const [sheathStatus, setSheathStatus] = useState<string>("8.5 Fr sheath left in situ connected to bile bag");

  const generateNarrative = (): string => {
    let text = `Under strict aseptic precaution and conscious sedation, cholangiography was performed ${approach}. `;
    text += `Contrast injection demonstrated high-grade malignant stricture at the ${strictureLevel} with upstream intrahepatic biliary radical dilatation (IHBRD) and delayed duodenal transit. `;
    text += `A 0.035-inch stiff hydrophilic guidewire and 5F Kumpe/MPA catheter were carefully manipulated across the stricture into the second part of the duodenum. `;
    text += `Over the stiff exchange wire, a ${stentSize} was precisely deployed across the stricture, ensuring 1.5 cm proximal and distal tumor margins. `;

    if (postDilatation) {
      text += `Post-stent balloon dilatation was performed using an 8 mm x 40 mm Conquest balloon with satisfactory waist effacement. `;
    }

    text += `Check cholangiogram confirmed excellent stent expansion with brisk, unimpeded drainage of contrast into the duodenum. No hemobilia, contrast extravasation, or peri-ductal leak noted. ${sheathStatus}. Patient tolerated the procedure well with stable vitals.`;

    return text;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 space-y-3 mb-4">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Biliary SEMS / PTBD Narrative Generator</span>
        </div>
        <button
          type="button"
          onClick={() => onInsertTechnique(generateNarrative())}
          className="text-xs bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Insert into Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Access Route
          </label>
          <select
            value={approach}
            onChange={(e) => setApproach(e.target.value)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
          >
            <option value="Via previously placed Ring Biliary Catheter">Via Ring Biliary Catheter</option>
            <option value="Direct right subcostal USG puncture of Segment VI duct">Right Subcostal PTBD</option>
            <option value="Direct left epigastric USG puncture of Segment III duct">Left Epigastric PTBD</option>
          </select>
        </div>

        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Stricture Level
          </label>
          <select
            value={strictureLevel}
            onChange={(e) => setStrictureLevel(e.target.value)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <option value="Primary biliary confluence & proximal CBD (Bismuth II)">Bismuth II (Primary Confluence)</option>
            <option value="Common Hepatic Duct proximal to confluence (Bismuth I)">Bismuth I (CHD)</option>
            <option value="Right hepatic duct bifurcation (Bismuth IIIa)">Bismuth IIIa (Right Duct)</option>
            <option value="Left hepatic duct bifurcation (Bismuth IIIb)">Bismuth IIIb (Left Duct)</option>
            <option value="Bilateral secondary biliary radicles (Bismuth IV)">Bismuth IV (Bilateral Secondary)</option>
            <option value="Distal common bile duct (Peri-ampullary Ca)">Distal CBD (Peri-ampullary)</option>
          </select>
        </div>

        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Biliary Stent Size
          </label>
          <select
            value={stentSize}
            onChange={(e) => setStentSize(e.target.value)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <option value="10 mm x 100 mm Self-Expanding Metallic Stent (SEMS)">10 mm x 100 mm SEMS</option>
            <option value="10 mm x 80 mm Self-Expanding Metallic Stent (SEMS)">10 mm x 80 mm SEMS</option>
            <option value="8 mm x 80 mm Uncovered SEMS">8 mm x 80 mm SEMS</option>
            <option value="8.5 Fr Ring Biliary Drainage Catheter only">8.5 Fr Ring Catheter</option>
          </select>
        </div>
      </div>
    </div>
  );
};
