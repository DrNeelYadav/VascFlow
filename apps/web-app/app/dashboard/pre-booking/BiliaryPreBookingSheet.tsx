"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
import { PlainBiliaryOutlineDiagram } from "./diagrams/PlainBiliaryOutlineDiagram";

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

export const BiliaryPreBookingSheet: React.FC<SheetDemographicsProps> = ({
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
        <PreBookingHeader
          procedureTitle="BILIARY INTERVENTIONS"
          procedureSubtitle="Percutaneous Transhepatic Biliary Drainage (PTBD) &amp; SEMS Stenting"
          icdCode="C24.0 / K83.1"
          schemeCode="2849-IN054A | IMP 21"
          scheduledDate={scheduledDate}
        />

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-3 pt-1 border-b border-black pb-2 text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "Surgical Gastro / Medical Gastro"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address / Contact:</span> {location || contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY INVESTIGATION NO.:</span> ______________________________</div>
        </div>

        {/* Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "Total & Direct Bilirubin",
            description: "Baseline S. Bilirubin + Alkaline Phosphatase (ALP)",
          }}
        />

        {/* Clinical Profile & Stricture Assessment */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            STRICTURE ETIOLOGY &amp; DRAINAGE INDICATION
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <div><span className="font-bold">Etiology:</span> ( &nbsp; ) Ca. Gallbladder &nbsp; ( &nbsp; ) Cholangiocarcinoma &nbsp; ( &nbsp; ) Ca. Pancreas Head &nbsp; ( &nbsp; ) Benign Post-Op</div>
            <div><span className="font-bold">Bismuth-Corlette:</span> ( &nbsp; ) Type I &nbsp; ( &nbsp; ) Type II &nbsp; ( &nbsp; ) Type IIIa &nbsp; ( &nbsp; ) Type IIIb &nbsp; ( &nbsp; ) Type IV</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-300 text-[10px]">
            <div><span className="font-bold">Total Bilirubin:</span> ________ mg/dL</div>
            <div><span className="font-bold">Direct Bilirubin:</span> ________ mg/dL</div>
            <div><span className="font-bold">Coagulation (INR):</span> ________</div>
          </div>
        </div>

        {/* Anatomical Biliary Diagram & Strategy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              BILIARY TREE ANATOMICAL PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Mark obstruction level, isolated sectoral ducts, and planned duct puncture:
            </p>
            <PlainBiliaryOutlineDiagram className="w-full max-w-[280px] mx-auto border-none p-0" />
          </div>

          <div className="text-[11px] space-y-1.5 flex flex-col justify-between">
            <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1">
              PLANNED ACCESS &amp; IMP STENT HARDWARE
            </div>
            <div className="space-y-1 text-[10px]">
              <div><span className="font-bold">Target Access:</span> ( &nbsp; ) Right Hepatic Duct &nbsp;&nbsp; ( &nbsp; ) Left Hepatic Duct</div>
              <div><span className="font-bold">Approach:</span> ( &nbsp; ) External PTBD &nbsp; ( &nbsp; ) Internal-External Ring &nbsp; ( &nbsp; ) Primary SEMS</div>
              <div><span className="font-bold">Puncture Needle:</span> 18G / 21G Chiba with 0.018&quot; platinum wire</div>
              <div><span className="font-bold">Balloon Dilatation:</span> ( &nbsp; ) Yes (Diameter: ____ mm) &nbsp; ( &nbsp; ) No</div>
            </div>

            {/* Rajasthan MAAY / Chiranjeevi Package & IMP Hardware Coding */}
            <div className="border border-black p-2 bg-slate-50 print:bg-white text-[10px] space-y-1 rounded-xs">
              <div className="font-bold uppercase tracking-wider text-[10px]">
                MAAY / CHIRANJEEVI PACKAGE &amp; HARDWARE CODES
              </div>
              <div><strong>Package:</strong> Biliary Interventions / SEMS (2849-IN054A)</div>
              <div><strong>Hardware:</strong> IMP 21 (Biliary Self-Expanding Metal Stent)</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span><strong>Additional IMP Code:</strong></span>
                <span className="font-mono underline">IMP ________</span>
                <span className="text-slate-600 text-[9px]">(e.g. Drainage Catheter)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-black text-[10px]">
        <div>Operating IR Faculty / Fellow: ____________________</div>
        <div>Cath Lab Coordinator: ____________________</div>
        <div>Date &amp; Stamp: ____________________</div>
      </div>
    </div>
  );
};
