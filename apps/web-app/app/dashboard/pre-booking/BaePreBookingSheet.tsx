"use client";

import React from "react";
import { PlainLungsOutlineDiagram } from "./diagrams/PlainLungsOutlineDiagram";

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
 * BAE (Bronchial Artery Embolization) Pre-Booking & Procedural Dating Sheet
 * High-density A4 layout with Plain Lungs & Mediastinum Line Diagram (zero labels, zero shading)
 * for pen markup of bleeders and culprit bronchial branches.
 * Zero pre-populated labs; all values are blank underlines for pen entry.
 */
export const BaePreBookingSheet: React.FC<SheetDemographicsProps> = ({
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
              <p className="text-[10px] font-bold uppercase mt-0.5">BAE PRE-OPERATIVE DATING &amp; PULMONARY MAPPING SHEET</p>
            </div>
          </div>
          <div className="text-right text-[10px] font-mono">
            <div>ICD-10: <span className="font-bold">R04.2 (Hemoptysis)</span></div>
            <div>RGHS/MAAY: <span className="font-bold">TARIFF CODE: IR-BAE</span></div>
            <div>Scheduled Date: <span className="font-bold">{scheduledDate || "____________________"}</span></div>
          </div>
        </div>

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 pt-2 border-t border-black text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "Pulmonary Medicine / Chest Ward"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address / Contact:</span> {location || contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY INVESTIGATION NO.:</span> ______________________________</div>
        </div>
      </div>

      {/* Hemoptysis Severity & Baseline Coagulation (Blank for Pen Entry) */}
      <div className="border border-black p-2.5 mb-3 text-[11px] space-y-1.5">
        <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1">
          CLINICAL SEVERITY &amp; LABS
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div><span className="font-bold">Severity:</span> ( &nbsp; ) STAT Massive (&gt;300 ml/24h) &nbsp;&nbsp; ( &nbsp; ) Submassive &nbsp;&nbsp; ( &nbsp; ) Recurrent Streaks</div>
          <div><span className="font-bold">Etiology:</span> ( &nbsp; ) Post-TB Bronchiectasis &nbsp;&nbsp; ( &nbsp; ) Aspergilloma &nbsp;&nbsp; ( &nbsp; ) Malignancy</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1 border-t border-slate-200 text-[10px]">
          <div><span className="font-bold">Hemoglobin:</span> ________ g/dL</div>
          <div><span className="font-bold">Platelet Count:</span> ________ /cu mm</div>
          <div><span className="font-bold">INR:</span> ________</div>
          <div><span className="font-bold">S. Creatinine:</span> ________ mg/dL</div>
        </div>
      </div>

      {/* Anatomical Line Diagram & Culprit Artery Mapping */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
        <div>
          <div className="font-bold text-xs uppercase tracking-wide mb-1">
            LUNGS &amp; MEDIASTINUM PEN SKETCH
          </div>
          <p className="text-[10px] text-slate-600 mb-2">
            Draw bleeders, consolidation/cavity location, and culprit feeder branches:
          </p>
          <PlainLungsOutlineDiagram className="w-full max-w-[280px] mx-auto border-none p-0" />
        </div>
        <div className="text-[11px] space-y-1.5 flex flex-col justify-between">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1">
            CULPRIT ARTERIES &amp; EMBOLIC PLAN
          </div>
          <div className="space-y-1">
            <div>( &nbsp;&nbsp;&nbsp; ) Right Intercostobronchial Trunk (ICBT)</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Left Superior Bronchial Artery</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Left Inferior Bronchial Artery</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Common Bronchial Trunk (T5/T6 level)</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Right Internal Mammary Artery (RIMA)</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Intercostal Collaterals (5th–9th)</div>
            <div>( &nbsp;&nbsp;&nbsp; ) Anterior Spinal Artery (Adamkiewicz) Clearance</div>
          </div>
          <div className="pt-1 border-t border-slate-200">
            <div><span className="font-bold">Embolic Agent:</span> ( &nbsp; ) PVA 355–500 &mu;m &nbsp; ( &nbsp; ) PVA 500–710 &mu;m &nbsp; ( &nbsp; ) Microcoils</div>
            <div><span className="font-bold">Hardware Required:</span> ________________________________________________</div>
          </div>
        </div>
      </div>

      {/* Pre-Op Safety Checklist */}
      <div className="border border-black p-2.5 mb-3 text-[10px] space-y-1">
        <div className="font-bold text-[11px] uppercase tracking-wide">PRE-OP SAFETY &amp; CHEST WARD INSTRUCTIONS</div>
        <div className="grid grid-cols-2 gap-2">
          <div>( &nbsp;&nbsp;&nbsp; ) NPO minimum 4–6 hours</div>
          <div>( &nbsp;&nbsp;&nbsp; ) High-Risk Informed Consent (Spinal ischemia risk noted)</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Wide-bore 18G IV cannula active</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Contrast allergy prophylaxis given if indicated</div>
          <div>( &nbsp;&nbsp;&nbsp; ) Cross-matched PRBC units available: ________ units</div>
          <div>( &nbsp;&nbsp;&nbsp; ) ICU / HDU bed pre-booked for post-embolization observation</div>
        </div>
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
