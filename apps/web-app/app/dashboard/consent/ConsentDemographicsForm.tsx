"use client";

import React, { useMemo } from "react";
import {
  RELATIONSHIP_OPTIONS,
  CATEGORY_ORDER,
} from "./consentTemplateResolver";
import { buildAllProceduresCatalog } from "./consentProceduresCatalog";
import type { useConsentStudio } from "./useConsentStudio";

interface ConsentDemographicsFormProps {
  studio: ReturnType<typeof useConsentStudio>;
}

export function ConsentDemographicsForm({ studio }: ConsentDemographicsFormProps) {
  const allProceduresList = useMemo(() => buildAllProceduresCatalog(), []);

  const filteredProcedures = useMemo(() => {
    return allProceduresList.filter((p) => {
      if (studio.selectedCategory !== "ALL" && p.category !== studio.selectedCategory) {
        return false;
      }
      if (!studio.procedureSearch) return true;
      const q = studio.procedureSearch.toLowerCase();
      return p.name.toLowerCase().includes(q) || (p.code && p.code.toLowerCase().includes(q));
    });
  }, [allProceduresList, studio.selectedCategory, studio.procedureSearch]);

  return (
    <div className="print:hidden bg-white dark:bg-slate-900 p-5 rounded-xl border border-zinc-200 dark:border-slate-800 space-y-4 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-slate-800 pb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          Case Selection &amp; Patient Demographics
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search procedure..."
            value={studio.procedureSearch}
            onChange={(e) => studio.setProcedureSearch(e.target.value)}
            className="text-xs border border-zinc-200 dark:border-slate-700 rounded-lg px-2.5 py-1 bg-white dark:bg-slate-900"
          />
          <select
            value={studio.selectedCategory}
            onChange={(e) => studio.setSelectedCategory(e.target.value)}
            className="text-xs border border-zinc-200 dark:border-slate-700 rounded-lg px-2.5 py-1 bg-white dark:bg-slate-900"
          >
            <option value="ALL">All Categories</option>
            {CATEGORY_ORDER.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div className="sm:col-span-2">
          <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
            Procedure ({filteredProcedures.length} Available)
          </label>
          <select
            value={studio.selectedTemplateKey}
            onChange={(e) => studio.setSelectedTemplateKey(e.target.value)}
            className="w-full text-xs border border-zinc-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-slate-900 font-semibold"
          >
            {filteredProcedures.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} {p.code ? `[${p.code}]` : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
            Patient Full Name
          </label>
          <input
            type="text"
            placeholder="Patient Name"
            value={studio.patientName}
            onChange={(e) => studio.setPatientName(e.target.value)}
            className="w-full text-xs border border-zinc-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-slate-900"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
            Age &amp; Sex
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Age"
              value={studio.patientAge}
              onChange={(e) => studio.setPatientAge(e.target.value)}
              className="w-20 text-xs border border-zinc-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-slate-900"
            />
            <select
              value={studio.patientGender}
              onChange={(e) => studio.setPatientGender(e.target.value)}
              className="flex-1 text-xs border border-zinc-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-slate-900"
            >
              <option value="">Sex</option>
              <option value="Male">Male (पुरुष)</option>
              <option value="Female">Female (महिला)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
            CR / UHID No.
          </label>
          <input
            type="text"
            placeholder="CR Number"
            value={studio.crNumber}
            onChange={(e) => studio.setCrNumber(e.target.value)}
            className="w-full text-xs border border-zinc-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-slate-900 font-mono"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
            Relative / Attendant Name
          </label>
          <input
            type="text"
            placeholder="Relative Name"
            value={studio.relativeName}
            onChange={(e) => studio.setRelativeName(e.target.value)}
            className="w-full text-xs border border-zinc-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-slate-900"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
            Relationship
          </label>
          <select
            value={studio.relativeRelation}
            onChange={(e) => studio.setRelativeRelation(e.target.value)}
            className="w-full text-xs border border-zinc-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-slate-900"
          >
            <option value="">Select Relation</option>
            {RELATIONSHIP_OPTIONS.map((r) => (
              <option key={r.value} value={r.value}>
                {r.labelEn} ({r.labelHi})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">
            Procedure Date
          </label>
          <input
            type="date"
            value={studio.procedureDate}
            onChange={(e) => studio.setProcedureDate(e.target.value)}
            className="w-full text-xs border border-zinc-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-slate-900 font-mono"
          />
        </div>
      </div>
    </div>
  );
}
