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
  scheme?: string;
}

/**
 * Exact Replica of AIIMS Delhi Pre-Operative Sclerotherapy Form (Front Page)
 * Pure printable A4 sheet with blank lines and parentheses for pen annotation.
 * Zero pre-populated clinical values or phantom data.
 */
export const SclerotherapyPage1Sheet: React.FC<SheetDemographicsProps> = ({
  patientName = "",
  age = "",
  sex = "",
  uhid = "",
  contactNumber = "",
  location = "",
  unit = "",
}) => {
  return (
    <div className="bg-white text-black p-6 border border-slate-300 print:border-none shadow-sm print:shadow-none w-full max-w-[210mm] mx-auto min-h-[297mm] text-xs font-sans leading-relaxed">
      {/* Header with Emblem & Statutory Metadata */}
      <div className="border-b-2 border-black pb-3 mb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold text-[10px] text-center p-0.5">
              SMS / AIIMS
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-tight">DEPARTMENT OF INTERVENTIONAL RADIOLOGY</h2>
              <p className="text-[10px] text-slate-700">SMS Medical College &amp; Attached Hospitals, Jaipur &bull; Vascular Malformation Protocol</p>
              <p className="text-[10px] font-bold uppercase mt-0.5">PRE-OPERATIVE CLINICAL &amp; IMAGING RECORD (PAGE 1)</p>
            </div>
          </div>
          <div className="text-right text-[10px] font-mono">
            <div>ICD-10: <span className="font-bold">I83 / D18.0</span></div>
            <div>RGHS / MAAY: <span className="font-bold">APPROVED</span></div>
          </div>
        </div>

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-3 pt-2 border-t border-black text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "______________________________"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address:</span> {location || "______________________________"}</div>
          <div><span className="font-bold">Mob No.:</span> {contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY FILE NO.:</span> ______________________________</div>
          <div><span className="font-bold">RADIOLOGY INVESTIGATION NO.:</span> ______________________________</div>
        </div>
      </div>

      {/* SYMPTOMS (with duration) */}
      <div className="mb-3 border-b border-black pb-2">
        <div className="font-bold text-[11px] uppercase tracking-wide mb-1">SYMPTOMS (with duration)</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>Swelling ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Pain ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Disfigurement ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Skin discoloration ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Bleeding ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Restriction of motion ( &nbsp;&nbsp;&nbsp; )</div>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <div>Others (warmth, etc.): ____________________________________</div>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <div>Site involved: ______________________________ &nbsp;&nbsp; Extremity / Trunk / H&amp;N</div>
          <div className="border border-dashed border-black px-2 py-1 text-[10px] text-slate-600">
            [Site Sketch Box / Pen Drawing]
          </div>
        </div>
        <div className="mt-1">Size variation (with valsalva / dependant position) ( &nbsp;&nbsp;&nbsp; )</div>
      </div>

      {/* EXAMINATION */}
      <div className="mb-3 border-b border-black pb-2">
        <div className="font-bold text-[11px] uppercase tracking-wide mb-1">EXAMINATION</div>
        <div className="grid grid-cols-2 gap-2">
          <div>Lump ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Thrill / bruit ( &nbsp;&nbsp;&nbsp; )</div>
        </div>
        <div className="mt-1">Skin discoloration (with valsalva / dependent position) ( &nbsp;&nbsp;&nbsp; )</div>
      </div>

      {/* USG */}
      <div className="mb-3 border-b border-black pb-2">
        <div className="font-bold text-[11px] uppercase tracking-wide mb-1">USG (DATED: ____________________)</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <div>Echogenicity ( &nbsp;&nbsp;&nbsp; ) &nbsp;&nbsp; Solid / Micro Cystic / MacroCystic / Tubular</div>
          <div>Phleboliths ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Septations ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Increase on Valsalva? ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Debris / echoes ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Compressible? ( &nbsp;&nbsp;&nbsp; )</div>
          <div className="col-span-2">Site involved: __________________________________________________</div>
          <div className="col-span-2">Doppler: No flow / Venous Flow on compressing / arterial flow / Both arterial venous flow</div>
        </div>
      </div>

      {/* MRI */}
      <div className="mb-3 border-b border-black pb-2">
        <div className="font-bold text-[11px] uppercase tracking-wide mb-1">MRI (DATED: ____________________)</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <div>Signal intensity: ____________________ &nbsp;&nbsp; Solid / MicroCystic / MacroCystic</div>
          <div>Phleboliths ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Septations ( &nbsp;&nbsp;&nbsp; )</div>
          <div>Hemorrhage ( &nbsp;&nbsp;&nbsp; )</div>
          <div className="col-span-2">Fluid levels ( &nbsp;&nbsp;&nbsp; )</div>
          <div className="col-span-2">Extent: ____________________________________________________________________________________</div>
        </div>
      </div>

      {/* OTHER INVESTIGATIONS, PRIOR SAMPLING & TREATMENT */}
      <div className="space-y-1.5 mb-3 border-b border-black pb-2 text-[11px]">
        <div><span className="font-bold">OTHER INVESTIGATIONS:</span> ____________________________________________________________________</div>
        <div><span className="font-bold">PRIOR SAMPLING:</span> ________________________________________________________________________</div>
        <div><span className="font-bold">PRIOR TREATMENT:</span> _______________________________________________________________________</div>
      </div>

      {/* CLINICAL + IMAGING DX */}
      <div className="text-[11px] mb-4">
        <span className="font-bold">CLINICAL + IMAGING DX:</span> __________________________________________________________________
      </div>

      {/* Signature Footer */}
      <div className="flex items-center justify-between pt-4 mt-auto border-t border-black text-[10px]">
        <div>Date of Assessment: ____________________</div>
        <div>Resident / Fellow Signature: ____________________</div>
        <div>Faculty / Consultant Signature: ____________________</div>
      </div>
    </div>
  );
};
