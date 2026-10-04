"use client";

import React from "react";
import { Card, Input } from "@vascule/ui-kit";
import { Layers } from "lucide-react";
import { IR_CLINICAL_PROTOCOLS } from "@vascule/catalog";
import {
  UseOpClinicDeskReturn,
  ORGAN_SYSTEM_OPTIONS,
} from "./useOpClinicDesk";
import { ClinicalPhotoAttachment } from "./ClinicalPhotoAttachment";

interface ConsultationDeskClinicalBlockProps {
  desk: UseOpClinicDeskReturn;
}

export function ConsultationDeskClinicalBlock({ desk }: ConsultationDeskClinicalBlockProps) {
  return (
    <Card variant="flat" className="border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
      <div className="p-3.5 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
            2. Clinical Presentation, Anatomy &amp; Imaging Review
          </span>
        </div>
      </div>

      {/* Row 1: Organ System, Protocol Selector & Primary Diagnosis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
        <div className="md:col-span-4 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Target Organ System
          </label>
          <select
            value={desk.organSystem}
            onChange={(e) => {
              const sys = e.target.value;
              desk.setOrganSystem(sys);
              if (sys === "Others") {
                desk.setDiseaseKey("custom_procedure");
              } else {
                const first = IR_CLINICAL_PROTOCOLS.find((p) => p.organSystem === sys);
                if (first) desk.setDiseaseKey(first.key);
              }
            }}
            className="w-full h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 font-medium focus:border-blue-600 focus:outline-none transition-colors"
          >
            {ORGAN_SYSTEM_OPTIONS.map((sys) => (
              <option key={sys} value={sys}>
                {sys}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-4 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Suggested IR Protocol / Procedure
          </label>
          {desk.organSystem !== "Others" ? (
            <select
              value={desk.diseaseKey}
              onChange={(e) => desk.setDiseaseKey(e.target.value)}
              className="w-full h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 font-medium focus:border-blue-600 focus:outline-none transition-colors"
            >
              {IR_CLINICAL_PROTOCOLS.filter((p) => p.organSystem === desk.organSystem).map((p) => (
                <option key={p.key} value={p.key}>
                  {p.title}
                </option>
              ))}
            </select>
          ) : (
            <Input
              type="text"
              value={desk.customProcedureTitle}
              onChange={(e) => desk.setCustomProcedureTitle(e.target.value)}
              placeholder="Type custom procedure name..."
            />
          )}
        </div>

        <div className="md:col-span-4 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Primary Clinical Diagnosis *
          </label>
          <Input
            type="text"
            value={desk.primaryDiagnosis}
            onChange={(e) => desk.setPrimaryDiagnosis(e.target.value)}
            placeholder="e.g. Budd-Chiari Syndrome with Refractory Ascites"
            required
          />
        </div>
      </div>

      {/* Row 2: History & CECT Findings */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
        <div className="p-3.5 space-y-1.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            Clinical History &amp; Chief Complaints
          </label>
          <textarea
            rows={3}
            value={desk.clinicalHistory}
            onChange={(e) => desk.setClinicalHistory(e.target.value)}
            placeholder="Presenting symptoms, duration, prior interventions, hemodynamics, bleeding status..."
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 leading-relaxed placeholder:text-slate-400 focus:border-blue-600 focus:outline-none transition-colors"
          />
        </div>

        <div className="p-3.5 space-y-1.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            CT / MRI Review &amp; Imaging Findings
          </label>
          <textarea
            rows={3}
            value={desk.cectFindings}
            onChange={(e) => desk.setCectFindings(e.target.value)}
            placeholder="Triple-phase CECT / MRI findings, target anatomy, vascular access feasibility, collateral pathways..."
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 leading-relaxed placeholder:text-slate-400 focus:border-blue-600 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Mobile Camera & Clinical Photo Attachment */}
      <div className="p-3.5">
        <ClinicalPhotoAttachment />
      </div>
    </Card>
  );
}
