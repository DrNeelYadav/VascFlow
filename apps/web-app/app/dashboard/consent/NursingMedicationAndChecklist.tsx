"use client";

import React from "react";
import { Pill, CheckCircle2 } from "lucide-react";
import { WARD_NURSING_CHECKLIST } from "../../lib/preparation/preparationData";
import type { useConsentStudio } from "./useConsentStudio";

interface NursingMedicationAndChecklistProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function NursingMedicationAndChecklist({ studio }: NursingMedicationAndChecklistProps) {
  const {
    checkedNursingTasks,
    toggleNursingTask,
    procedureDate,
    procedureTime,
    residentDoctor,
  } = studio;

  return (
    <>
      {/* Section 3: ANTIMICROBIAL & MEDICATION WITHHOLDING PROTOCOL */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="font-bold uppercase tracking-wider text-zinc-900 text-xs border-b border-zinc-200 pb-1 flex items-center gap-1.5">
          <Pill className="w-4 h-4 text-emerald-600" />
          Medication Adjustment &amp; Anticoagulant Cessation Schedule:
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border border-red-200 bg-red-50/40 text-xs">
            <strong className="text-red-900 block mb-1">Blood Thinners (खून पतला करने की दवा):</strong>
            <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-800">
              <li>
                <strong>Clopidogrel / Prasugrel:</strong> Hold 5-7 days prior.
              </li>
              <li>
                <strong>Warfarin / Acitrom:</strong> Hold 5 days (INR ≤ 1.5).
              </li>
              <li>
                <strong>DOACs (Rivaroxaban / Apixaban):</strong> Hold 48 hours.
              </li>
              <li>
                <strong>LMWH (Enoxaparin):</strong> Hold therapeutic 24h.
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/40 text-xs">
            <strong className="text-amber-900 block mb-1">Diabetes &amp; BP Drugs:</strong>
            <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-800">
              <li>
                <strong>Metformin:</strong> STOP morning of procedure &amp; 48h post-contrast (prevent lactic acidosis).
              </li>
              <li>
                <strong>ACE-i / ARBs:</strong> Withhold morning dose (prevent intra-op hypotension).
              </li>
              <li>
                <strong>Insulin:</strong> Halve morning dose while fasting.
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-lg border border-blue-200 bg-blue-50/40 text-xs">
            <strong className="text-blue-900 block mb-1">Pre-Procedure Medications:</strong>
            <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-800">
              <li>
                <strong>IV Antibiotic:</strong> Cefuroxime 1.5g IV or Cefoperazone-Sulbactam 30-60 min pre-puncture.
              </li>
              <li>
                <strong>Pre-Hydration:</strong> 0.9% Normal Saline 1 mL/kg/h for 4 hours pre-contrast.
              </li>
              <li>
                <strong>Sedation:</strong> Midazolam 1-2mg + Fentanyl 25-50mcg IV in cath-lab.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 4: WARD NURSING CHECKLIST */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="font-bold uppercase tracking-wider text-zinc-900 text-xs border-b border-zinc-200 pb-1 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          Ward Nursing Verification Checklist before Transfer to Cath-Lab:
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {WARD_NURSING_CHECKLIST.map((t) => {
            const isChecked = !!checkedNursingTasks[t.id];
            return (
              <label
                key={t.id}
                className={`flex items-start gap-2.5 p-2.5 rounded-lg border transition cursor-pointer ${
                  isChecked ? "bg-zinc-50 border-zinc-300" : "bg-white border-zinc-200 opacity-75"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleNursingTask(t.id)}
                  className="mt-0.5 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="text-xs">
                  <div className="font-semibold text-zinc-900">{t.taskEn}</div>
                  <div className="text-zinc-600 text-[10px] mt-0.5">{t.taskHi}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Sign-Off Strip */}
      <div className="border border-zinc-400 rounded-lg p-3.5 bg-white text-xs grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
        <div>
          <span className="font-bold text-zinc-900 block">Ward Staff Nurse Sign-Off:</span>
          <div className="text-xs text-zinc-600 mt-4">
            <div>Name: ______________________</div>
            <div>
              Date &amp; Time: {[procedureDate, procedureTime].filter(Boolean).join(" • ") || "______________"}
            </div>
          </div>
        </div>
        <div>
          <span className="font-bold text-zinc-900 block">IR Resident Doctor Sign-Off:</span>
          <div className="text-xs text-zinc-600 mt-4">
            <div>
              Name: <strong>{residentDoctor}</strong>
            </div>
            <div>Pre-Op Check Verified</div>
          </div>
        </div>
        <div>
          <span className="font-bold text-zinc-900 block">Cath-Lab Receiving Tech:</span>
          <div className="text-xs text-zinc-600 mt-4">
            <div>Puncture Site Prepped &amp; Verified</div>
            <div>Time Received: ______________</div>
          </div>
        </div>
      </div>
    </>
  );
}
