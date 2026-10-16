"use client";

import React from "react";
import Link from "next/link";
import { Printer } from "lucide-react";
import { ProcedureCategory } from "./preBookingTypes";

interface PatientOption {
  id: string;
  name: string;
  age: number | string;
  sex: string;
  hid: string;
  procedure?: string;
  unit?: string;
  indication?: string;
  contactNumber?: string;
}

interface PreBookingPatientBarProps {
  patients: PatientOption[];
  selectedCategory: ProcedureCategory;
  onCategoryChange: (cat: ProcedureCategory) => void;
  patientName: string; setPatientName: (v: string) => void;
  age: string; setAge: (v: string) => void;
  sex: string; setSex: (v: string) => void;
  uhid: string; setUhid: (v: string) => void;
  contactNumber: string; setContactNumber: (v: string) => void;
  scheduledDate: string; setScheduledDate: (v: string) => void;
  isPrepopulated: boolean; setIsPrepopulated: (v: boolean) => void;
  onSelectPatient: (p: PatientOption) => void;
  onPrint: () => void;
}

const PROCEDURES: { key: ProcedureCategory; label: string; sub: string }[] = [
  { key: "sclerotherapy", label: "Sclerotherapy", sub: "Vascular Malformations" },
  { key: "tace", label: "TACE", sub: "Conventional Chemoembolization" },
  { key: "bae", label: "BAE", sub: "Bronchial Artery Embolization" },
  { key: "bleeder", label: "GI Bleed / GIBDA", sub: "Transcatheter Arterial Embolization" },
  { key: "biliary", label: "Biliary Interventions", sub: "PTBD & Biliary Stenting" },
  { key: "varicose", label: "Varicose Veins", sub: "EVLA & Glue Embolization" },
  { key: "jna", label: "JNA Embolization", sub: "Head & Neck Hypervascular Tumors" },
  { key: "uae", label: "Uterine Artery Embo (UAE)", sub: "Fibroids, Adenomyosis, PPH" },
  { key: "fistuloplasty", label: "AV Fistuloplasty", sub: "Dialysis Access Salvage" },
  { key: "pcn", label: "PCN & Urological IR", sub: "Nephrostomy & Antegrade Stents" },
  { key: "general", label: "General IR", sub: "Routine Drainage & Biopsy" },
];

export const PreBookingPatientBar: React.FC<PreBookingPatientBarProps> = ({
  patients, selectedCategory, onCategoryChange,
  patientName, setPatientName, age, setAge, sex, setSex,
  uhid, setUhid, contactNumber, setContactNumber,
  scheduledDate, setScheduledDate, isPrepopulated, setIsPrepopulated,
  onSelectPatient, onPrint,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-3 shadow-xs mb-4 print:hidden space-y-3">
      {/* 1. Clinical Pipeline Progression Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
          <span className="text-[10px] uppercase font-bold text-slate-400">Clinical Pipeline:</span>
          <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-800">
            1. Dating Form
          </span>
          <span className="text-slate-400">&rarr;</span>
          <Link href="/dashboard/consent" className="hover:underline text-slate-600 dark:text-slate-400">
            2. Consent Form
          </Link>
          <span className="text-slate-400">&rarr;</span>
          <Link href="/dashboard/operative-notes" className="hover:underline text-slate-600 dark:text-slate-400">
            3. Operative Notes
          </Link>
          <span className="text-slate-400">&rarr;</span>
          <Link href="/dashboard/discharge" className="hover:underline text-slate-600 dark:text-slate-400">
            4. Discharge Card
          </Link>
        </div>

        <button
          type="button"
          onClick={onPrint}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print Dual-Page A4 Sheet</span>
        </button>
      </div>

      {/* 2. Searchable Procedure Dropdown & Mode Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-center">
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Select Procedure</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as ProcedureCategory)}
            className="w-full text-xs font-semibold px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-600 cursor-pointer"
          >
            {PROCEDURES.map((p) => (
              <option key={p.key} value={p.key}>
                {p.label} — {p.sub}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Form Mode</label>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
            <button
              type="button"
              onClick={() => setIsPrepopulated(false)}
              className={`flex-1 py-1 rounded-md text-xs font-medium cursor-pointer transition ${!isPrepopulated ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 font-bold shadow-2xs" : "text-slate-600"}`}
            >
              Blank Form (Pen)
            </button>
            <button
              type="button"
              onClick={() => setIsPrepopulated(true)}
              className={`flex-1 py-1 rounded-md text-xs font-medium cursor-pointer transition ${isPrepopulated ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 font-bold shadow-2xs" : "text-slate-600"}`}
            >
              Pre-populate OPD
            </button>
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Autofill from OPD Queue</label>
          <select
            onChange={(e) => {
              const p = patients.find((pat) => pat.id === e.target.value);
              if (p) onSelectPatient(p);
            }}
            defaultValue=""
            className="w-full text-xs px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 cursor-pointer"
          >
            <option value="" disabled>Select patient from OPD Queue...</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.hid || p.id}) &bull; {p.procedure || "IR"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. Demographics Quick Editing Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs pt-1 border-t border-slate-200 dark:border-slate-800">
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">Patient Name</label>
          <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="e.g. Rahul Sain" className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">Age / Sex</label>
          <div className="flex gap-1">
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="34" className="w-1/2 text-xs px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center" />
            <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} placeholder="M" className="w-1/2 text-xs px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center" />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">UHID / CR</label>
          <input type="text" value={uhid} onChange={(e) => setUhid(e.target.value)} placeholder="1012209177511" className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono" />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">Contact No.</label>
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="98XXXXXXXX" className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
        </div>
        <div className="col-span-2">
          <label className="block text-[10px] font-bold text-slate-500 uppercase">
            Scheduled Procedure Date <span className="font-normal text-slate-400">(15–20 Days Advance)</span>
          </label>
          <input type="date" value={scheduledDate} onChange={(e) => setScheduledDate(e.target.value)} className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono" />
        </div>
      </div>
    </div>
  );
};
