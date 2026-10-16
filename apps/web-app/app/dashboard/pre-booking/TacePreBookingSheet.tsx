"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
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
    <div className="bg-white text-black p-6 border border-slate-300 print:border-none shadow-sm print:shadow-none w-full max-w-[210mm] mx-auto min-h-[297mm] text-xs font-sans leading-relaxed flex flex-col justify-between">
      <div>
        {/* Centered Institutional Header with Big Bold Title */}
        <PreBookingHeader
          procedureTitle="TACE"
          procedureSubtitle="Transarterial Chemoembolization (cTACE) &amp; Anatomical Mapping Sheet"
          icdCode="C22.0"
          schemeCode="2849-IN061A | IMP 38, IMP 39"
          scheduledDate={scheduledDate}
        />

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-3 pt-1 border-b border-black pb-2 text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "______________________________"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address / Contact:</span> {location || contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY INVESTIGATION NO.:</span> ______________________________</div>
        </div>

        {/* Mandatory Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "Serum AFP",
            description: "Baseline Alpha-Fetoprotein (ng/mL) verified",
          }}
        />

        {/* Clinical Staging & Baseline Parameters */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            CLINICAL STAGING &amp; ONCOLOGICAL PROFILE
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <div><span className="font-bold">Etiology:</span> ( &nbsp; ) HBV &nbsp;&nbsp; ( &nbsp; ) HCV &nbsp;&nbsp; ( &nbsp; ) NASH &nbsp;&nbsp; ( &nbsp; ) Alcohol &nbsp;&nbsp; ( &nbsp; ) Cryptogenic</div>
            <div><span className="font-bold">Child-Pugh:</span> ( &nbsp; ) Class A &nbsp;&nbsp; ( &nbsp; ) Class B &nbsp;&nbsp; ( &nbsp; ) Class C</div>
            <div><span className="font-bold">ECOG PS:</span> ( &nbsp; ) 0 &nbsp;&nbsp; ( &nbsp; ) 1 &nbsp;&nbsp; ( &nbsp; ) 2</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-300 text-[10px]">
            <div><span className="font-bold">Baseline Bilirubin:</span> ________ mg/dL</div>
            <div><span className="font-bold">Serum Albumin:</span> ________ g/dL</div>
            <div><span className="font-bold">Baseline INR:</span> ________</div>
            <div><span className="font-bold">Serum Creatinine:</span> ________ mg/dL</div>
            <div><span className="font-bold">Platelet Count:</span> ________ /cu mm</div>
            <div><span className="font-bold">Serum AFP:</span> ________ ng/mL</div>
          </div>
        </div>

        {/* Anatomical Line Diagram & Tumor Location Block (Clean Table Styling without Clumsy Outer Box) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              LIVER ANATOMICAL PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Mark tumor location, dominant HCC nodules, and planned microcatheter path:
            </p>
            <PlainLiverOutlineDiagram className="w-full max-w-[280px] mx-auto border-none p-0" />
          </div>

          <div className="text-[11px] space-y-1.5 flex flex-col justify-between">
            <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1">
              PLANNED ANGIOSUITE STRATEGY &amp; IMP HARDWARE
            </div>
            <div className="space-y-1 text-[10px]">
              <div><span className="font-bold">Portal Vein:</span> ( &nbsp; ) Patent &nbsp;&nbsp; ( &nbsp; ) Partial PVT &nbsp;&nbsp; ( &nbsp; ) Occluded</div>
              <div><span className="font-bold">Target Vessel:</span> ( &nbsp; ) Proper Hepatic &nbsp; ( &nbsp; ) RHA &nbsp; ( &nbsp; ) LHA &nbsp; ( &nbsp; ) Accessory</div>
              <div><span className="font-bold">Selectivity:</span> ( &nbsp; ) Superselective subsegmental &nbsp;&nbsp; ( &nbsp; ) Lobar</div>
              <div><span className="font-bold">Emulsion:</span> Lipiodol: ________ mL + Doxorubicin: ________ mg</div>
              <div><span className="font-bold">Embolic:</span> ( &nbsp; ) Gelfoam slurry &nbsp;&nbsp; ( &nbsp; ) DC Beads (100–300 &mu;m)</div>
            </div>

            {/* Rajasthan MAAY / Chiranjeevi Package & IMP Hardware Coding */}
            <div className="border border-black p-2 bg-slate-50 print:bg-white text-[10px] space-y-1 rounded-xs">
              <div className="font-bold uppercase tracking-wider text-[10px]">
                MAAY / CHIRANJEEVI PACKAGE &amp; HARDWARE CODES
              </div>
              <div><strong>Package:</strong> Conventional TACE (2849-IN061A)</div>
              <div><strong>Hardware:</strong> IMP 38 (Lipiodol) &bull; IMP 39 (Microcatheter &amp; Wire)</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span><strong>Additional IMP Code:</strong></span>
                <span className="font-mono underline">IMP ________</span>
                <span className="text-slate-600 text-[9px]">(e.g. IMP 48 / Coils)</span>
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
