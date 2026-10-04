"use client";

import React from "react";
import { PatientAdmissionDetails } from "./ihmsDischargeTemplates";

interface DischargeDemographicsGridProps {
  admissionDetails: PatientAdmissionDetails;
}


export function DischargeDemographicsGrid({ admissionDetails }: DischargeDemographicsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 border border-slate-300 p-3 rounded mb-4 bg-slate-50/50 print:bg-white print:border-slate-400">
      <div>
        <span className="text-[10px] text-slate-500 uppercase block font-bold">Patient Name</span>
        <span className="font-bold text-slate-900">{admissionDetails.patientName}</span>
      </div>
      <div>
        <span className="text-[10px] text-slate-500 uppercase block font-bold">Age / Gender</span>
        <span className="font-semibold text-slate-900">
          {admissionDetails.age} Y / {admissionDetails.gender}
        </span>
      </div>
      <div>
        <span className="text-[10px] text-slate-500 uppercase block font-bold">CR / UHID No.</span>
        <span className="font-mono font-bold text-slate-900">{admissionDetails.hid}</span>
      </div>
      <div>
        <span className="text-[10px] text-slate-500 uppercase block font-bold">Admission No.</span>
        <span className="font-mono font-semibold text-slate-900">{admissionDetails.admissionNo}</span>
      </div>
      <div>
        <span className="text-[10px] text-slate-500 uppercase block font-bold">Ward / Bed</span>
        <span className="font-medium text-slate-800">{admissionDetails.wardBed}</span>
      </div>
      <div>
        <span className="text-[10px] text-slate-500 uppercase block font-bold">Scheme Category</span>
        <span className="font-semibold text-slate-900">{admissionDetails.patientCategory}</span>
      </div>
      <div>
        <span className="text-[10px] text-slate-500 uppercase block font-bold">Admission Date</span>
        <span className="font-mono text-slate-800">{admissionDetails.dateOfAdmission}</span>
      </div>
      <div>
        <span className="text-[10px] text-slate-500 uppercase block font-bold">Discharge Date</span>
        <span className="font-mono text-slate-800">{admissionDetails.dateOfDischarge}</span>
      </div>
    </div>
  );
}
