"use client";

import React from "react";
import { Printer, UserCheck } from "lucide-react";
import { ProcedureCategory } from "./preBookingTypes";

interface PatientOption {
  id: string;
  name: string;
  age: number | string;
  sex: string;
  hid: string;
  procedure?: string;
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
  scleroPage: "page1" | "page2" | "both";
  setScleroPage: (p: "page1" | "page2" | "both") => void;
  onSelectPatient: (p: PatientOption) => void;
  onPrint: () => void;
}

const CATEGORIES: { key: ProcedureCategory; label: string }[] = [
  { key: "sclerotherapy", label: "Sclerotherapy (AIIMS Delhi)" },
  { key: "tace", label: "TACE (Liver Anatomy)" },
  { key: "bae", label: "BAE (Lungs / Mediastinum)" },
  { key: "bleeder", label: "GI Bleeder (Celiac Axis)" },
  { key: "general", label: "General IR" },
];

export const PreBookingPatientBar: React.FC<PreBookingPatientBarProps> = ({
  patients, selectedCategory, onCategoryChange,
  patientName, setPatientName, age, setAge, sex, setSex,
  uhid, setUhid, contactNumber, setContactNumber,
  scheduledDate, setScheduledDate, scleroPage, setScleroPage,
  onSelectPatient, onPrint,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-3 shadow-xs mb-5 print:hidden space-y-3">
      {/* Category Tabs & Print Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mr-1">
            Procedure:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => onCategoryChange(cat.key)}
              className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-all border ${
                selectedCategory === cat.key
                  ? "bg-teal-700 text-white border-teal-800 shadow-xs"
                  : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          {selectedCategory === "sclerotherapy" && (
            <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md border border-slate-200 dark:border-slate-700 text-xs">
              <button
                type="button"
                onClick={() => setScleroPage("page1")}
                className={`px-2 py-0.5 rounded font-medium ${scleroPage === "page1" ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 font-bold shadow-2xs" : "text-slate-600"}`}
              >
                Page 1 (Clinical)
              </button>
              <button
                type="button"
                onClick={() => setScleroPage("page2")}
                className={`px-2 py-0.5 rounded font-medium ${scleroPage === "page2" ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 font-bold shadow-2xs" : "text-slate-600"}`}
              >
                Page 2 (Table)
              </button>
              <button
                type="button"
                onClick={() => setScleroPage("both")}
                className={`px-2 py-0.5 rounded font-medium ${scleroPage === "both" ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 font-bold shadow-2xs" : "text-slate-600"}`}
              >
                Both Pages
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print A4 Sheet</span>
          </button>
        </div>
      </div>

      {/* Demographics Quick Fill Inputs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs">
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="e.g. Abhyansh"
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">Age / Sex</label>
          <div className="flex gap-1">
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="10"
              className="w-1/2 text-xs px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center"
            />
            <input
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              placeholder="M"
              className="w-1/2 text-xs px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">UHID / CR</label>
          <input
            type="text"
            value={uhid}
            onChange={(e) => setUhid(e.target.value)}
            placeholder="109030200"
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">Mob No.</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="98XXXXXXXX"
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">Scheduled Date</label>
          <input
            type="date"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase">Autofill Patient</label>
          <select
            onChange={(e) => {
              const p = patients.find((pat) => pat.id === e.target.value);
              if (p) onSelectPatient(p);
            }}
            defaultValue=""
            className="w-full text-xs px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          >
            <option value="" disabled>Select patient...</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.hid || p.id})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
