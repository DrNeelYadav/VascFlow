"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";

interface SheetDemographicsProps {
  patientName?: string;
  age?: string;
  sex?: string;
  uhid?: string;
  contactNumber?: string;
  location?: string;
  unit?: string;
  scheduledDate?: string;
}

export const SclerotherapyPage1Sheet: React.FC<SheetDemographicsProps> = ({
  patientName = "",
  age = "",
  sex = "",
  uhid = "",
  contactNumber = "",
  location = "",
  unit = "",
  scheduledDate = "",
}) => {
  return (
    <div className="bg-white text-black p-6 border border-slate-300 print:border-none shadow-sm print:shadow-none w-full max-w-[210mm] mx-auto min-h-[297mm] text-xs font-sans leading-relaxed flex flex-col justify-between">
      <div>
        {/* Clean Centered Institutional Header */}
        <PreBookingHeader
          procedureTitle="SCLEROTHERAPY"
          procedureSubtitle="Percutaneous Image-Guided Sclerotherapy for Vascular Malformations"
          icdCode="D18.0"
          schemeCode="1849-IN074A | IMP 01"
          scheduledDate={scheduledDate}
        />

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-3 pt-1 border-b border-black pb-2 text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "______________________________"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address:</span> {location || "______________________________"}</div>
          <div><span className="font-bold">Mob No.:</span> {contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY FILE NO.:</span> ______________________________</div>
          <div><span className="font-bold">RADIOLOGY INVESTIGATION NO.:</span> ______________________________</div>
        </div>

        {/* Mandatory Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "Coagulation Profile",
            description: "Baseline D-Dimer & Fibrinogen (for large AVM / VM)",
          }}
        />

        {/* Symptoms (with duration) */}
        <div className="mb-2.5 border-b border-black pb-2">
          <div className="font-bold text-[11px] uppercase tracking-wide mb-1">
            CLINICAL PRESENTATION &amp; SYMPTOMS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[10px]">
            <div>( &nbsp;&nbsp;&nbsp; ) Swelling (Duration: ________)</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Pain (VAS: ____ / 10)</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Disfigurement</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Skin discoloration / Bluish tinge</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Bleeding / Ulceration</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Functional restriction of limb</div>
          </div>
          <div className="mt-1 text-[10px]">
            Site &amp; Extent: __________________________________________________ &bull; ( &nbsp; ) Head &amp; Neck &nbsp; ( &nbsp; ) Trunk &nbsp; ( &nbsp; ) Extremity
          </div>
          <div className="mt-0.5 text-[10px]">
            Size variation with dependant position / Valsalva: ( &nbsp; ) Present &nbsp;&nbsp; ( &nbsp; ) Absent
          </div>
        </div>

        {/* Examination */}
        <div className="mb-2.5 border-b border-black pb-2 text-[10px]">
          <div className="font-bold text-[11px] uppercase tracking-wide mb-1">PHYSICAL EXAMINATION</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>Soft compressible lump ( &nbsp;&nbsp;&nbsp; )</div>
            <div>Local warmth / Thrill ( &nbsp;&nbsp;&nbsp; )</div>
            <div>Phleboliths palpable ( &nbsp;&nbsp;&nbsp; )</div>
            <div>Bruit on auscultation ( &nbsp;&nbsp;&nbsp; )</div>
          </div>
        </div>

        {/* Imaging Summary: USG & MRI */}
        <div className="mb-3 border-b border-black pb-2 text-[10px] space-y-1">
          <div className="font-bold text-[11px] uppercase tracking-wide">IMAGING PROFILE (USG &amp; MRI FINDINGS)</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div><span className="font-bold">USG / Doppler:</span> Solid / Microcystic / Macrocystic / Tubular venous spaces</div>
            <div><span className="font-bold">Compressibility on USG:</span> ( &nbsp; ) Full &nbsp; ( &nbsp; ) Partial &nbsp; ( &nbsp; ) Incompressible</div>
            <div><span className="font-bold">Doppler Flow:</span> Low-velocity monophasic / High-flow / Arteriovenous</div>
            <div><span className="font-bold">MRI STIR Signal:</span> Hyperintense veno-lymphatic channels with fluid levels</div>
          </div>
          <div className="pt-0.5"><span className="font-bold">Extent / Anatomical Compartments:</span> ________________________________________________________________</div>
        </div>

        {/* Clinical + Imaging Diagnosis */}
        <div className="text-[11px] mb-2">
          <span className="font-bold">CLINICAL + IMAGING DIAGNOSIS:</span> ____________________________________________________________________
        </div>
      </div>

      {/* Signature Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-black text-[10px]">
        <div>Date of Clinical Assessment: ____________________</div>
        <div>Consulting IR Resident / Fellow: ____________________</div>
        <div>Faculty / Consultant Signature: ____________________</div>
      </div>
    </div>
  );
};
