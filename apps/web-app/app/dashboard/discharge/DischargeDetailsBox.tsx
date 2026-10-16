"use client";

import React, { useState } from "react";
import { Sparkles, Check } from "lucide-react";

interface DischargeDetailsBoxProps {
  onInsertAdvice: (elaboratedAdvice: string) => void;
}

export const DischargeDetailsBox: React.FC<DischargeDetailsBoxProps> = ({ onInsertAdvice }) => {
  const [courseInHospital, setCourseInHospital] = useState<string>(
    "Uneventful post-procedure hospital stay. Patient remained hemodynamically stable without pain or distress."
  );
  const [punctureSiteExam, setPunctureSiteExam] = useState<string>(
    "Puncture site healthy; no active bleeding, expanding hematoma, or bruit. Distal neurovascular status intact."
  );
  const [medicationKit, setMedicationKit] = useState<string>(
    "Tab Pantoprazole 40mg OD (before breakfast) x 5 days, Tab Paracetamol 650mg SOS for pain, Cap Amoxicillin-Clavulanate 625mg BD x 5 days."
  );
  const [activityAdvice, setActivityAdvice] = useState<string>(
    "Avoid strenuous physical exertion or lifting weights >5 kg for 5 days. Keep puncture site clean and dry for 48 hours."
  );
  const [redFlagEmergency, setRedFlagEmergency] = useState<string>(
    "Immediately report to SMS Hospital IR Emergency if there is active bleeding/swelling at puncture site, severe pain, leg numbness, or high fever."
  );

  const handleApply = () => {
    const fullText = `HOSPITAL COURSE & RECOVERY:
${courseInHospital}

PUNCTURE SITE & CLINICAL EXAMINATION AT DISCHARGE:
${punctureSiteExam}

DISCHARGE MEDICATIONS (RMSCL E-AUSHADHI):
${medicationKit}

ACTIVITY & WOUND CARE ADVICE:
${activityAdvice}

EMERGENCY RED FLAGS & IMMEDIATE CONTACT:
${redFlagEmergency}`;

    onInsertAdvice(fullText);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 space-y-3 mb-4 print:hidden">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span>Discharge Details-to-Narrative Assistant (Auto-Elaborator)</span>
        </div>
        <button
          type="button"
          onClick={handleApply}
          className="text-xs bg-teal-700 hover:bg-teal-800 text-white font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Apply to Discharge Card</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Course in Hospital
          </label>
          <select
            value={courseInHospital}
            onChange={(e) => setCourseInHospital(e.target.value)}
            className="w-full text-xs px-2 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="Uneventful post-procedure hospital stay. Patient remained hemodynamically stable without pain or distress.">
              Uneventful / Stable Recovery
            </option>
            <option value="Observed in Day-Care ward for 4 hours post-procedure; tolerated oral fluids well with normal vitals.">
              Day-Care Ward 4h Surveillance
            </option>
            <option value="Transferred to Post-Op ICU for overnight hemodynamic and urine output monitoring; vitals stable.">
              Post-Op ICU Overnight Observation
            </option>
          </select>
        </div>

        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Puncture Site & Physical Exam
          </label>
          <select
            value={punctureSiteExam}
            onChange={(e) => setPunctureSiteExam(e.target.value)}
            className="w-full text-xs px-2 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="Puncture site healthy; no active bleeding, expanding hematoma, or bruit. Distal neurovascular status intact.">
              Right Groin CFA Clean / Distal Pulses Intact
            </option>
            <option value="Right neck IJV puncture site clean and dry; no hematoma or subcutaneous emphysema.">
              Right IJV Clean / No Hematoma
            </option>
            <option value="Right radial artery puncture site soft; patent radial pulse and negative reverse Barbeau test.">
              Right Radial Artery Soft & Patent
            </option>
          </select>
        </div>

        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            RMSCL Medication Prescription Kit
          </label>
          <select
            value={medicationKit}
            onChange={(e) => setMedicationKit(e.target.value)}
            className="w-full text-xs px-2 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono text-[11px]"
          >
            <option value="Tab Pantoprazole 40mg OD (before breakfast) x 5 days, Tab Paracetamol 650mg SOS for pain, Cap Amoxicillin-Clavulanate 625mg BD x 5 days.">
              Standard Prophylactic Kit (Antibiotic + PPI + PCM)
            </option>
            <option value="Tab Ecosprin 75mg OD post meals, Tab Clopidogrel 75mg OD x 3 months, Tab Pantoprazole 40mg OD.">
              Dual Antiplatelet Kit (Vascular Stent)
            </option>
            <option value="Inj Enoxaparin 40mg SC OD x 3 days, then Tab Rivaroxaban 15mg BD x 21 days with meals.">
              Therapeutic Anticoagulation Kit (DVT / Shunt)
            </option>
          </select>
        </div>

        <div>
          <label className="block text-[10.5px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            Activity & Wound Care Protocol
          </label>
          <select
            value={activityAdvice}
            onChange={(e) => setActivityAdvice(e.target.value)}
            className="w-full text-xs px-2 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="Avoid strenuous physical exertion or lifting weights >5 kg for 5 days. Keep puncture site clean and dry for 48 hours.">
              Routine 5-Day Groin Protection
            </option>
            <option value="Wear Class II graduated compression stocking continuously for 4 weeks. Early ambulation encouraged.">
              Varicose Vein Compression Protocol (4 Wks)
            </option>
            <option value="Low-salt diet (<2g/day), daily abdominal girth charting, and strict fluid balance maintenance.">
              Cirrhosis & Ascites Care Protocol
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
