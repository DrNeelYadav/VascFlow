"use client";

import React from "react";
import { PreBookingRecord } from "./preBookingTypes";
import { LiverCouinaudLineDiagram } from "./diagrams/LiverCouinaudLineDiagram";
import { LungMediastinumLineDiagram } from "./diagrams/LungMediastinumLineDiagram";
import { CeliacMesentericLineDiagram } from "./diagrams/CeliacMesentericLineDiagram";

interface PreBookingPrintModalProps {
  record: PreBookingRecord | null;
  onClose: () => void;
}

export const PreBookingPrintModal: React.FC<PreBookingPrintModalProps> = ({ record, onClose }) => {
  if (!record) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 overflow-y-auto">
      <div className="bg-white text-slate-900 rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-300">
        {/* Modal Top Control Bar (Hidden during print) */}
        <div className="flex items-center justify-between p-3 border-b border-slate-200 bg-slate-100 print:hidden sticky top-0 z-10">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            Official Pre-Booking Slip & Pen Annotation Sheet (A4 Ready)
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="text-xs bg-teal-700 hover:bg-teal-800 text-white font-bold px-3 py-1.5 rounded-lg shadow-sm"
            >
              Print Slip (Ctrl+P)
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-3 py-1.5 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>

        {/* Printable Paper Content */}
        <div className="p-6 text-slate-900 font-sans space-y-4 print:p-0">
          {/* Institutional Letterhead */}
          <div className="text-center border-b-2 border-slate-900 pb-3">
            <h1 className="text-base font-extrabold uppercase tracking-wider text-slate-900">
              Department of Interventional Radiology
            </h1>
            <p className="text-xs font-semibold text-slate-700">
              SMS Medical College & Attached Hospitals, Jaipur &bull; Angiosuite Operating Clinical OS
            </p>
            <div className="inline-block bg-slate-900 text-white text-[11px] font-bold px-3 py-0.5 rounded-full mt-1 uppercase tracking-wider">
              OPD Dating & Pre-Operative Booking Voucher
            </div>
          </div>

          {/* Top Statutory Codes Banner for Zero-Friction Billing */}
          <div className="grid grid-cols-2 gap-3 p-2.5 rounded-lg border-2 border-slate-800 bg-slate-50">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-600 block">
                Primary ICD-10 Diagnostic Code:
              </span>
              <span className="text-xs font-mono font-bold text-slate-900">{record.icdCode}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-600 block">
                Rajasthan Govt Health Scheme (RGHS / MAAY) Code:
              </span>
              <span className="text-xs font-mono font-bold text-slate-900">
                [{record.scheme}] {record.schemeCode}
              </span>
            </div>
          </div>

          {/* Patient Demographics & Scheduling Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs border border-slate-300 rounded p-2.5 bg-slate-50/50">
            <div><span className="text-slate-500 font-medium">Patient Name:</span> <strong>{record.patientName}</strong></div>
            <div><span className="text-slate-500 font-medium">Age / Sex:</span> <strong>{record.age}y / {record.sex}</strong></div>
            <div><span className="text-slate-500 font-medium">CR / UHID:</span> <strong className="font-mono">{record.crUhid}</strong></div>
            <div><span className="text-slate-500 font-medium">Contact:</span> <strong>{record.contactNumber || "N/A"}</strong></div>
            <div><span className="text-slate-500 font-medium">Location:</span> <strong>{record.location}</strong></div>
            <div><span className="text-slate-500 font-medium">Target Date:</span> <strong className="font-mono text-teal-800">{record.scheduledDate}</strong></div>
            <div className="sm:col-span-3 pt-1 border-t border-slate-200">
              <span className="text-slate-500 font-medium">Procedure Plan:</span>{" "}
              <strong>{record.procedureName}</strong> &bull; {record.admissionType} &bull; {record.anesthesiaPlan}
            </div>
          </div>

          {/* Pre-Booking Safety Checklist Summary */}
          <div className="border border-slate-300 rounded p-2.5 text-xs bg-slate-50/50">
            <div className="font-bold text-[10.5px] uppercase tracking-wider text-slate-700 mb-1 border-b border-slate-200 pb-0.5">
              Pre-Operative Safety Verification Checklist
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
              <div>NPO: <strong>{record.safetyChecklist.npoConfirmed ? "Verified" : "Pending"}</strong></div>
              <div>Platelets: <strong className="font-mono">{record.safetyChecklist.plateletCount}</strong></div>
              <div>INR: <strong className="font-mono">{record.safetyChecklist.inr}</strong></div>
              <div>eGFR: <strong className="font-mono">{record.safetyChecklist.egfr}</strong></div>
              <div>Viral Markers: <strong>{record.safetyChecklist.viralMarkers}</strong></div>
              <div>Allergy: <strong>{record.safetyChecklist.contrastAllergy}</strong></div>
              <div className="sm:col-span-2">Informed Consent: <strong>{record.safetyChecklist.consentSigned ? "Signed & Documented" : "Pending"}</strong></div>
            </div>
          </div>

          {/* Embedded Printable Anatomical Line Diagram (Optimized for Pen Annotation) */}
          <div className="mt-2">
            {record.procedureCategory === "tace" && <LiverCouinaudLineDiagram />}
            {record.procedureCategory === "bae" && <LungMediastinumLineDiagram />}
            {record.procedureCategory === "bleeder" && <CeliacMesentericLineDiagram />}
            {record.procedureCategory === "sclerotherapy" && record.sclerotherapy && (
              <div className="border border-slate-300 rounded p-3 text-xs bg-slate-50">
                <div className="font-bold text-slate-800 uppercase mb-1">
                  AIIMS Phlebogram & Sclerotherapy Findings
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                  <div>Fluid Aspirated: <strong>{record.sclerotherapy.fluidAspirated}</strong></div>
                  <div>Contrast: <strong>{record.sclerotherapy.contrastVolInjectedMl}</strong></div>
                  <div>Appearance: <strong>{record.sclerotherapy.appearance}</strong></div>
                  <div>Draining Vein: <strong>{record.sclerotherapy.drainingVeinStatus}</strong></div>
                  <div className="col-span-2">
                    Compression: <strong>{record.sclerotherapy.compressionStatus}</strong> ({record.sclerotherapy.compressionSite})
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Statutory Verification Signatures */}
          <div className="pt-8 flex justify-between items-end text-xs border-t border-slate-300">
            <div>
              <div className="h-8 border-b border-dashed border-slate-400 w-44 mb-1" />
              <div className="text-[10px] text-slate-600 font-medium">Interventional Radiology Fellow</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] text-slate-500 font-mono">Date: {record.scheduledDate}</div>
              <div className="text-[9px] text-slate-400">Status: {record.status}</div>
            </div>
            <div className="text-right">
              <div className="h-8 border-b border-dashed border-slate-400 w-44 mb-1" />
              <div className="text-[10px] text-slate-600 font-medium">Faculty / Consultant in Charge</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
