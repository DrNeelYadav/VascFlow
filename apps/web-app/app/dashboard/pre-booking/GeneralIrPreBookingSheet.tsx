"use client";

import React from "react";

interface SheetDemographicsProps {
  patientName?: string;
  age?: string;
  sex?: string;
  uhid?: string;
  contactNumber?: string;
  location?: string;
  unit?: string;
  scheduledDate?: string;
  procedureName?: string;
}

/**
 * Universal General IR Pre-Booking & Procedural Dating Sheet
 * High-density A4 layout for routine IR interventions (Biopsy, Drainage, PTBD, PCN, EVLT).
 * Zero pre-populated labs; all values are open underlines and checkboxes for pen entry.
 */
export const GeneralIrPreBookingSheet: React.FC<SheetDemographicsProps> = ({
  patientName = "",
  age = "",
  sex = "",
  uhid = "",
  contactNumber = "",
  location = "",
  unit = "",
  scheduledDate = "",
  procedureName = "Interventional Radiology Procedure",
}) => {
  return (
    <div className="bg-white text-black p-6 border border-slate-300 print:border-none shadow-sm print:shadow-none w-full max-w-[210mm] mx-auto min-h-[297mm] text-xs font-sans leading-relaxed">
      {/* Header with Statutory Codes */}
      <div className="border-b-2 border-black pb-2 mb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold text-[10px] text-center p-0.5">
              SMS / IR
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-tight">DEPARTMENT OF INTERVENTIONAL RADIOLOGY</h2>
              <p className="text-[10px] text-slate-700">SMS Medical College &amp; Attached Hospitals, Jaipur &bull; Angiosuite Cath Lab</p>
              <p className="text-[10px] font-bold uppercase mt-0.5">GENERAL IR PRE-OPERATIVE DATING &amp; SAFETY RECORD</p>
            </div>
          </div>
          <div className="text-right text-[10px] font-mono">
            <div>Scheme: <span className="font-bold">RGHS / MAAY</span></div>
            <div>Scheduled Date: <span className="font-bold">{scheduledDate || "____________________"}</span></div>
          </div>
        </div>

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 pt-2 border-t border-black text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "______________________________"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address / Contact:</span> {location || contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY FILE NO.:</span> ______________________________</div>
        </div>
      </div>

      {/* Planned Procedure & Indication */}
      <div className="border border-black p-2.5 mb-3 text-[11px] space-y-1.5">
        <div><span className="font-bold">PLANNED PROCEDURE:</span> {procedureName}</div>
        <div><span className="font-bold">CLINICAL INDICATION &amp; SUMMARY:</span> __________________________________________________________________</div>
        <div><span className="font-bold">ANESTHESIA PLAN:</span> ( &nbsp; ) Local Anesthesia &nbsp;&nbsp; ( &nbsp; ) Conscious Sedation &nbsp;&nbsp; ( &nbsp; ) General Anesthesia</div>
      </div>

      {/* Baseline Coagulation & Renal Labs (Blank for Pen Entry) */}
      <div className="border border-black p-2.5 mb-3 text-[10px] space-y-1">
        <div className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-1">
          BASELINE LABS (TO BE VERIFIED BY PEN)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
          <div><span className="font-bold">Hemoglobin:</span> ________ g/dL</div>
          <div><span className="font-bold">Platelet Count:</span> ________ /cu mm</div>
          <div><span className="font-bold">INR:</span> ________</div>
          <div><span className="font-bold">S. Creatinine:</span> ________ mg/dL</div>
          <div><span className="font-bold">eGFR:</span> ________ mL/min</div>
          <div><span className="font-bold">HBsAg:</span> ( &nbsp; ) Neg &nbsp; ( &nbsp; ) Pos</div>
          <div><span className="font-bold">Anti-HCV:</span> ( &nbsp; ) Neg &nbsp; ( &nbsp; ) Pos</div>
          <div><span className="font-bold">HIV:</span> ( &nbsp; ) Neg &nbsp; ( &nbsp; ) Pos</div>
        </div>
      </div>

      {/* WHO Surgical Safety Pre-Op Checklist */}
      <div className="border border-black p-2.5 mb-3 text-[10px] space-y-1">
        <div className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-1">
          WHO SURGICAL SAFETY CHECKLIST &amp; SIGN-IN
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div>( &nbsp;&nbsp;&nbsp; ) Patient Identity &amp; Procedure site verified with wristband</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Signed Informed Bilingual Consent on file</div>
          <div>( &nbsp;&nbsp;&nbsp; ) NPO status verified (minimum 6 hours for solid food)</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Contrast allergy history checked &amp; documented</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Coagulation parameters within safe IR threshold</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Working IV access secured (18G / 20G)</div>
        </div>
      </div>

      {/* Hardware & Consumables Checklist */}
      <div className="border border-black p-2.5 mb-4 text-[10px] space-y-1">
        <div className="font-bold text-[11px] uppercase tracking-wide">PLANNED HARDWARE &amp; DISPOSABLES</div>
        <div>Catheter / Sheath size: ____________________ &nbsp;&nbsp;&nbsp; Guide wire: ____________________</div>
        <div>Stent / Implant / Embolic required: ____________________________________________________________________</div>
        <div>Special Equipment: ( &nbsp; ) Ultrasound &nbsp; ( &nbsp; ) Cone-Beam CT &nbsp; ( &nbsp; ) Closure device</div>
      </div>

      {/* Signature Footer */}
      <div className="flex items-center justify-between pt-4 mt-auto border-t border-black text-[10px]">
        <div>Operating IR Faculty / Fellow: ____________________</div>
        <div>Cath Lab Scrub Nurse: ____________________</div>
        <div>Date &amp; Stamp: ____________________</div>
      </div>
    </div>
  );
};
