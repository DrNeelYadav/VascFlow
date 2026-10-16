"use client";

import React from "react";
import { PlainLiverOutlineDiagram } from "./diagrams/PlainLiverOutlineDiagram";

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

/**
 * TACE (Transarterial Chemoembolization) Pre-Booking & Procedural Dating Sheet
 * High-density A4 layout with Plain Liver Outline Diagram (zero labels, zero shading)
 * for pen markup of HCC lesions and planned catheterization routes.
 * Zero pre-populated labs; all clinical values are open underlines for pen entry.
 */
export const TacePreBookingSheet: React.FC<SheetDemographicsProps> = ({
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
              <p className="text-[10px] font-bold uppercase mt-0.5">TACE PRE-OPERATIVE DATING &amp; ANATOMICAL MAPPING SHEET</p>
            </div>
          </div>
          <div className="text-right text-[10px] font-mono">
            <div>ICD-10: <span className="font-bold">C22.0 (HCC)</span></div>
            <div>RGHS/MAAY: <span className="font-bold">TARIFF CODE: IR-TACE</span></div>
            <div>Scheduled Date: <span className="font-bold">{scheduledDate || "____________________"}</span></div>
          </div>
        </div>

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 pt-2 border-t border-black text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "Gastroenterology / Surgical Gastro"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address / Contact:</span> {location || contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY INVESTIGATION NO.:</span> ______________________________</div>
        </div>
      </div>

      {/* Clinical Assessment & Baseline Labs (Blank for Pen Entry) */}
      <div className="border border-black p-2.5 mb-3 text-[11px] space-y-1.5">
        <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1">
          CLINICAL STAGING &amp; BASELINE SEROLOGY
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div><span className="font-bold">Etiology:</span> ( &nbsp; ) HBV &nbsp;&nbsp; ( &nbsp; ) HCV &nbsp;&nbsp; ( &nbsp; ) NASH &nbsp;&nbsp; ( &nbsp; ) Alcohol &nbsp;&nbsp; ( &nbsp; ) Cryptogenic</div>
          <div><span className="font-bold">Child-Pugh:</span> ( &nbsp; ) Class A &nbsp;&nbsp; ( &nbsp; ) Class B &nbsp;&nbsp; ( &nbsp; ) Class C</div>
          <div><span className="font-bold">ECOG PS:</span> ( &nbsp; ) 0 &nbsp;&nbsp; ( &nbsp; ) 1 &nbsp;&nbsp; ( &nbsp; ) 2</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1 border-t border-slate-200 text-[10px]">
          <div><span className="font-bold">S. Bilirubin:</span> ____________ mg/dL</div>
          <div><span className="font-bold">S. Albumin:</span> ____________ g/dL</div>
          <div><span className="font-bold">INR:</span> ____________</div>
          <div><span className="font-bold">S. Creatinine:</span> ____________ mg/dL</div>
          <div><span className="font-bold">Platelet Count:</span> ____________ /cu mm</div>
          <div><span className="font-bold">Serum AFP:</span> ____________ ng/mL</div>
        </div>
      </div>

      {/* Anatomical Line Diagram & Tumor Location Block */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
        <div>
          <div className="font-bold text-xs uppercase tracking-wide mb-1">
            LIVER ANATOMICAL PEN SKETCH
          </div>
          <p className="text-[10px] text-slate-600 mb-2">
            Draw tumor location, dominant nodules, and planned selective microcatheter route:
          </p>
          <PlainLiverOutlineDiagram className="w-full max-w-[280px] mx-auto border-none p-0" />
        </div>
        <div className="text-[11px] space-y-1.5 flex flex-col justify-between">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1">
            PLANNED ANGIOSUIDE STRATEGY
          </div>
          <div><span className="font-bold">Portal Vein:</span> ( &nbsp; ) Patent &nbsp;&nbsp; ( &nbsp; ) Partial PVT &nbsp;&nbsp; ( &nbsp; ) Occluded</div>
          <div><span className="font-bold">Target Vessel:</span> ( &nbsp; ) RHA &nbsp;&nbsp; ( &nbsp; ) LHA &nbsp;&nbsp; ( &nbsp; ) Replaced SMA &nbsp;&nbsp; ( &nbsp; ) Phrenic</div>
          <div><span className="font-bold">Catheterization:</span> ( &nbsp; ) Superselective &nbsp;&nbsp; ( &nbsp; ) Selective Lobar</div>
          <div><span className="font-bold">Emulsion:</span> Lipiodol: ________ ml + Doxorubicin: ________ mg</div>
          <div><span className="font-bold">Embolic:</span> ( &nbsp; ) Gelfoam slurry &nbsp;&nbsp; ( &nbsp; ) DC Beads (100–300 &mu;m)</div>
          <div><span className="font-bold">Hardware Required:</span> ________________________________________________</div>
        </div>
      </div>

      {/* Mandatory Pre-Op Safety Checklist */}
      <div className="border border-black p-2.5 mb-3 text-[10px] space-y-1">
        <div className="font-bold text-[11px] uppercase tracking-wide">PRE-OP SAFETY &amp; ADMISSION INSTRUCTIONS</div>
        <div className="grid grid-cols-2 gap-2">
          <div>( &nbsp;&nbsp;&nbsp; ) NPO minimum 6 hours confirmed</div>
          <div>( &nbsp;&nbsp;&nbsp; ) High-Risk Informed Consent signed by patient &amp; kin</div>
          <div>( &nbsp;&nbsp;&nbsp; ) 18G IV cannula right cubital fossa tested</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Bilateral femoral &amp; radial pulses palpable (+++)</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Contrast allergy premedication required? ( &nbsp; ) Yes &nbsp; ( &nbsp; ) No</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Post-op Ward Bed / HDU Bed Booked</div>
        </div>
      </div>

      {/* Signature Footer */}
      <div className="flex items-center justify-between pt-4 mt-auto border-t border-black text-[10px]">
        <div>Operating IR Faculty / Fellow: ____________________</div>
        <div>Cath Lab Coordinator: ____________________</div>
        <div>Date &amp; Stamp: ____________________</div>
      </div>
    </div>
  );
};
