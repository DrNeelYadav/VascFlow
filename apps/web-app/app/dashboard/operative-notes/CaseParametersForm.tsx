"use client";

import React from "react";
import { DAILY_ROUTINE_IR_PROCEDURES } from "./dailyRoutineProcedures";

interface CaseParametersFormProps {
  selectedProcedureId: string;
  setSelectedProcedureId: (id: string) => void;
  patientName: string;
  setPatientName: (name: string) => void;
  age: string | number;
  gender: string;
  setAgeGender: (val: string) => void;
  crNumber: string;
  setCrNumber: (cr: string) => void;
  admissionNo: string;
  setAdmissionNo: (adm: string) => void;
  ipdBed: string;
  setIpdBed: (bed: string) => void;
  dateOfProcedure: string;
  setDateOfProcedure: (d: string) => void;
  primaryOperator: string;
  setPrimaryOperator: (op: string) => void;
  customAccessSite: string;
  setCustomAccessSite: (site: string) => void;
  customContrast: string;
  setCustomContrast: (contrast: string) => void;
  customIndication: string;
  setCustomIndication: (ind: string) => void;
}

export function CaseParametersForm({
  selectedProcedureId,
  setSelectedProcedureId,
  patientName,
  setPatientName,
  age,
  gender,
  setAgeGender,
  crNumber,
  setCrNumber,
  admissionNo,
  setAdmissionNo,
  ipdBed,
  setIpdBed,
  dateOfProcedure,
  setDateOfProcedure,
  primaryOperator,
  setPrimaryOperator,
  customAccessSite,
  setCustomAccessSite,
  customContrast,
  setCustomContrast,
  customIndication,
  setCustomIndication,
}: CaseParametersFormProps) {
  return (
    <div className="card-compact p-3 space-y-3">
      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
        Case Parameters
      </span>

      <div>
        <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Procedure</label>
        <select
          value={selectedProcedureId}
          onChange={(e) => setSelectedProcedureId(e.target.value)}
          className="select-compact w-full"
        >
          {DAILY_ROUTINE_IR_PROCEDURES.map((p) => (
            <option key={p.id} value={p.id}>
              {p.shortTitle}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="sm:col-span-2">
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Patient Name</label>
          <input
            type="text"
            placeholder="Enter or select patient"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="input-compact w-full"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Age / Sex</label>
          <input
            type="text"
            placeholder="e.g. 45/M"
            value={age || gender ? `${age}${gender ? `/${gender[0]}` : ""}` : ""}
            onChange={(e) => setAgeGender(e.target.value)}
            className="input-compact w-full font-mono text-center"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">CR / UHID</label>
          <input
            type="text"
            placeholder="CR Number"
            value={crNumber}
            onChange={(e) => setCrNumber(e.target.value)}
            className="input-compact w-full font-mono"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Admission No</label>
          <input
            type="text"
            placeholder="Admission No"
            value={admissionNo}
            onChange={(e) => setAdmissionNo(e.target.value)}
            className="input-compact w-full font-mono"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Ward / Bed</label>
          <input
            type="text"
            placeholder="Ward / Bed"
            value={ipdBed}
            onChange={(e) => setIpdBed(e.target.value)}
            className="input-compact w-full truncate"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Procedure Date</label>
          <input
            type="date"
            value={dateOfProcedure}
            onChange={(e) => setDateOfProcedure(e.target.value)}
            className="input-compact w-full font-mono"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Operator</label>
          <input
            type="text"
            value={primaryOperator}
            onChange={(e) => setPrimaryOperator(e.target.value)}
            className="input-compact w-full truncate"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Access Site</label>
          <input
            type="text"
            value={customAccessSite}
            onChange={(e) => setCustomAccessSite(e.target.value)}
            className="input-compact w-full truncate"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Contrast (mL)</label>
          <input
            type="text"
            value={customContrast}
            onChange={(e) => setCustomContrast(e.target.value)}
            className="input-compact w-full font-mono"
          />
        </div>
      </div>

      <div>
        <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Clinical Indication</label>
        <textarea
          rows={2}
          value={customIndication}
          onChange={(e) => setCustomIndication(e.target.value)}
          className="w-full p-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-400 font-sans leading-relaxed"
        />
      </div>
    </div>
  );
}
