"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, Plus } from "lucide-react";
import { VenasealNarrativeBuilder } from "./builders/VenasealNarrativeBuilder";
import { BaeNarrativeBuilder } from "./builders/BaeNarrativeBuilder";
import { TaceNarrativeBuilder } from "./builders/TaceNarrativeBuilder";
import { BiliaryNarrativeBuilder } from "./builders/BiliaryNarrativeBuilder";

interface ProcedureNarrativeBuilderProps {
  procedureId: string;
  onAppendText: (phrase: string) => void;
  onReplaceTechnique: (fullText: string) => void;
}

const COMMON_IR_SNIPPETS = [
  "Manual groin compression given for 15 minutes. Good hemostasis achieved with strong distal pulses.",
  "No non-target embolization or contrast extravasation observed on completion angiography.",
  "Patient tolerated the procedure well under local anesthesia with stable intra-procedural hemodynamics.",
  "Post-procedure distal pedal pulses (PTA / ATA) palpable and symmetric bilaterally.",
  "Vascular sheath removed in angiosuite; pressure dressing applied.",
  "Class II graduated compression stocking applied; encouraged early ambulation after 2 hours.",
];

export const ProcedureNarrativeBuilder: React.FC<ProcedureNarrativeBuilderProps> = ({
  procedureId,
  onAppendText,
  onReplaceTechnique,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const isBae = procedureId.includes("bae") || procedureId.includes("hemoptysis");
  const isVenaseal = procedureId.includes("venaseal") || procedureId.includes("varicose") || procedureId.includes("evlt");
  const isTace = procedureId.includes("tace") || procedureId.includes("chemo");
  const isBiliary = procedureId.includes("biliary") || procedureId.includes("sems") || procedureId.includes("ptbd");

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-3.5 shadow-sm mb-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider hover:text-teal-600 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span>Clinical Dropdown-to-Narrative Assistant (AIIMS/SMS Protocols)</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <span className="text-[10.5px] font-mono text-slate-500">
          Auto-Generates Elaborate Technique Text
        </span>
      </div>

      {isExpanded && (
        <div className="mt-3 space-y-3">
          {/* Procedure Specific Structured Form */}
          {isVenaseal && <VenasealNarrativeBuilder onInsertTechnique={onReplaceTechnique} />}
          {isBae && <BaeNarrativeBuilder onInsertTechnique={onReplaceTechnique} />}
          {isTace && <TaceNarrativeBuilder onInsertTechnique={onReplaceTechnique} />}
          {isBiliary && <BiliaryNarrativeBuilder onInsertTechnique={onReplaceTechnique} />}

          {/* Quick 1-Click Clinical Phrase Chips */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              1-Click Standard IR Closing Clauses:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {COMMON_IR_SNIPPETS.map((snippet, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onAppendText(snippet)}
                  className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-800 dark:hover:text-teal-300 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all text-left"
                >
                  <Plus className="w-3 h-3 text-teal-600 shrink-0" />
                  <span className="truncate max-w-xs">{snippet}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
