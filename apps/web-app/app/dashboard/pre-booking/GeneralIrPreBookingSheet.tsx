"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
import { PlainGeneralIrOutlineDiagram } from "./diagrams/PlainGeneralIrOutlineDiagram";

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

export const GeneralIrPreBookingSheet: React.FC<SheetDemographicsProps> = ({
  patientName = "",
  age = "",
  sex = "",
  uhid = "",
  contactNumber = "",
  location = "",
  unit = "",
  scheduledDate = "",
  procedureName = "",
}) => {
  return (
    <div className="bg-white text-black p-6 border border-slate-300 print:border-none shadow-sm print:shadow-none w-full max-w-[210mm] mx-auto min-h-[297mm] print:min-h-0 print:h-auto print:block a4-print-sheet text-xs font-sans leading-relaxed flex flex-col justify-between">
      <div>
        <PreBookingHeader
          procedureTitle="GENERAL IR"
          procedureSubtitle="Pre-Operative Procedural Dating &amp; Outpatient Booking Sheet"
          icdCode="I77.9"
          schemeCode="Standard Scheme Tariff"
          scheduledDate={scheduledDate}
        />

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-3 pt-1 border-b border-black pb-2 text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "______________________________"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address / Contact:</span> {location || contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY FILE NO.:</span> ______________________________</div>
        </div>

        {/* Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist />

        {/* Planned Procedure & Indication */}
        <div className="border border-black p-2.5 mb-3 text-[11px] space-y-1.5">
          <div><span className="font-bold">PLANNED PROCEDURE:</span> {procedureName || "______________________________"}</div>
          <div><span className="font-bold">CLINICAL INDICATION &amp; SUMMARY:</span> __________________________________________________________________</div>
          <div><span className="font-bold">ANESTHESIA PLAN:</span> ( &nbsp; ) Local Anesthesia &nbsp;&nbsp; ( &nbsp; ) Conscious Sedation &nbsp;&nbsp; ( &nbsp; ) General Anesthesia</div>
        </div>

        {/* Anatomical Target & Access Route Pen Sketch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              ANATOMICAL TARGET &amp; ACCESS PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Use pen to circle planned vascular access site (IJV, Femoral, Radial), sketch target lesion/organ (Liver, Kidney, Fluid), and draw needle puncture angle.
            </p>
            <div className="text-[9px] space-y-1 font-mono text-slate-800">
              <div>&bull; ( &#9675; ) Vascular access point checkmark</div>
              <div>&bull; ( X ) Target lesion / collection focus</div>
              <div>&bull; ( &rarr; ) Puncture path &amp; planned trajectory</div>
            </div>
          </div>
          <PlainGeneralIrOutlineDiagram />
        </div>

        {/* Planned Hardware & Consumables */}
        <div className="border border-black p-2.5 mb-3 text-[10px] space-y-1">
          <div className="font-bold text-[11px] uppercase tracking-wide">PLANNED HARDWARE &amp; DISPOSABLES</div>
          <div>Sheath / Access Needle: ____________________ &nbsp;&nbsp;&nbsp; Guidewire: ____________________</div>
          <div>Catheter / Drainage kit / Biopsy needle: ____________________________________________________________________</div>
          <div>Imaging Guidance: ( &nbsp; ) Ultrasound &nbsp; ( &nbsp; ) Fluoroscopy &nbsp; ( &nbsp; ) Cone-Beam CT</div>
        </div>
      </div>

      {/* Signature Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-black text-[10px]">
        <div>Operating IR Faculty / Fellow: ____________________</div>
        <div>Cath Lab Scrub Nurse: ____________________</div>
        <div>Date &amp; Stamp: ____________________</div>
      </div>
    </div>
  );
};
