"use client";

import React from "react";

interface GeneralPreBookingFormProps {
  patientName: string;
  setPatientName: (v: string) => void;
  age: number | "";
  setAge: (v: number | "") => void;
  sex: "M" | "F" | "Other";
  setSex: (v: "M" | "F" | "Other") => void;
  contactNumber: string;
  setContactNumber: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  crUhid: string;
  setCrUhid: (v: string) => void;
  scheduledDate: string;
  setScheduledDate: (v: string) => void;
  admissionType: "Day Care" | "Inpatient Ward";
  setAdmissionType: (v: "Day Care" | "Inpatient Ward") => void;
  anesthesiaPlan: "Local Anesthesia" | "Conscious Sedation" | "General Anesthesia";
  setAnesthesiaPlan: (v: "Local Anesthesia" | "Conscious Sedation" | "General Anesthesia") => void;
  procedureName: string;
}

export const GeneralPreBookingForm: React.FC<GeneralPreBookingFormProps> = ({
  patientName,
  setPatientName,
  age,
  setAge,
  sex,
  setSex,
  contactNumber,
  setContactNumber,
  location,
  setLocation,
  crUhid,
  setCrUhid,
  scheduledDate,
  setScheduledDate,
  admissionType,
  setAdmissionType,
  anesthesiaPlan,
  setAnesthesiaPlan,
  procedureName,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
          1. Patient Demographics & Pre-Booking Details
        </h3>
        <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold truncate max-w-xs">
          Plan: {procedureName}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {/* Patient Name */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Patient Full Name *
          </label>
          <input
            type="text"
            required
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="e.g. Rameshwar Sharma"
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Age & Sex */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Age (Yrs) *
            </label>
            <input
              type="number"
              min={1}
              max={120}
              value={age}
              onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
              placeholder="45"
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Sex *
            </label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value as any)}
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
            >
              <option value="M">Male (M)</option>
              <option value="F">Female (F)</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* CR / Hospital UHID */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            CR / Hospital UHID No. *
          </label>
          <input
            type="text"
            value={crUhid}
            onChange={(e) => setCrUhid(e.target.value)}
            placeholder="e.g. CR-2026-09123"
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono"
          />
        </div>

        {/* Contact / WhatsApp */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Contact / WhatsApp Number *
          </label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="+91 98290 12345"
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Residential Location */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Patient District / Location *
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Jaipur, Sikar, Ajmer"
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Scheduled Angiosuite Date */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Planned Procedure Date *
          </label>
          <input
            type="date"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono"
          />
        </div>

        {/* Admission Type */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Admission Track
          </label>
          <select
            value={admissionType}
            onChange={(e) => setAdmissionType(e.target.value as any)}
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="Day Care">Day Care (Discharge Same Day)</option>
            <option value="Inpatient Ward">Inpatient Ward (Post-Op Stay)</option>
          </select>
        </div>

        {/* Anesthesia Plan */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Anesthesia Plan
          </label>
          <select
            value={anesthesiaPlan}
            onChange={(e) => setAnesthesiaPlan(e.target.value as any)}
            className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="Local Anesthesia">Local Anesthesia (LA)</option>
            <option value="Conscious Sedation">Conscious Sedation (IV Fentanyl/Midazolam)</option>
            <option value="General Anesthesia">General Anesthesia (GA)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
