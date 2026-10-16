"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
import { PlainCeliacOutlineDiagram } from "./diagrams/PlainCeliacOutlineDiagram";

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

export const BleederPreBookingSheet: React.FC<SheetDemographicsProps> = ({
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
          procedureTitle="GI BLEED / GIBDA"
          procedureSubtitle="Transcatheter Arterial Embolization for Gastrointestinal Hemorrhage"
          icdCode="K92.2"
          schemeCode="2849-IN058A | IMP 39, Coils"
          scheduledDate={scheduledDate}
        />

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-3 pt-1 border-b border-black pb-2 text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "Gastroenterology / GI Surgery"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address / Contact:</span> {location || contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RADIOLOGY INVESTIGATION NO.:</span> ______________________________</div>
        </div>

        {/* Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "Endoscopy & PRBC",
            description: "Endoscopy findings & Blood Units arranged",
          }}
        />

        {/* Clinical Presentation & Hemodynamics */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            HEMORRHAGE PRESENTATION &amp; HEMODYNAMICS
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <div><span className="font-bold">Presentation:</span> ( &nbsp; ) Hematemesis &nbsp; ( &nbsp; ) Melena &nbsp; ( &nbsp; ) Hematochezia &nbsp; ( &nbsp; ) Post-op drain</div>
            <div><span className="font-bold">Forrest:</span> ( &nbsp; ) Ia &nbsp; ( &nbsp; ) Ib &nbsp; ( &nbsp; ) IIa &nbsp; ( &nbsp; ) IIb &nbsp; ( &nbsp; ) Not applicable</div>
            <div><span className="font-bold">Hemodynamics:</span> ( &nbsp; ) Stable &nbsp; ( &nbsp; ) Borderline &nbsp; ( &nbsp; ) Active shock</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-300 text-[10px]">
            <div><span className="font-bold">Baseline Hemoglobin:</span> ________ g/dL</div>
            <div><span className="font-bold">Platelet Count:</span> ________ /cu mm</div>
            <div><span className="font-bold">Coagulation (INR):</span> ________</div>
          </div>
        </div>

        {/* Anatomical Celiac/SMA Diagram & Strategy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              CELIAC &amp; MESENTERIC PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Mark pseudoaneurysm, active extravasation, and planned coil deployment:
            </p>
            <PlainCeliacOutlineDiagram className="w-full max-w-[280px] mx-auto border-none p-0" />
          </div>

          <div className="text-[11px] space-y-1.5 flex flex-col justify-between">
            <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1">
              PLANNED ANGIOSUITE STRATEGY &amp; EMBOLIC
            </div>
            <div className="space-y-1 text-[10px]">
              <div><span className="font-bold">Suspected Culprit:</span> ( &nbsp; ) GDA &nbsp; ( &nbsp; ) Left Gastric &nbsp; ( &nbsp; ) Splenic &nbsp; ( &nbsp; ) SMA/Ileocolic</div>
              <div><span className="font-bold">Technique:</span> ( &nbsp; ) GDA Front-door &amp; Back-door Sandwich &nbsp; ( &nbsp; ) Superselective</div>
              <div><span className="font-bold">Access Site:</span> ( &nbsp; ) Right Common Femoral &nbsp;&nbsp; ( &nbsp; ) Left Radial</div>
              <div><span className="font-bold">Planned Embolic:</span> ( &nbsp; ) Pushable / Detachable Coils &nbsp; ( &nbsp; ) Gelfoam &nbsp; ( &nbsp; ) Glue</div>
            </div>

            {/* Rajasthan MAAY / Chiranjeevi Package & IMP Hardware Coding */}
            <div className="border border-black p-2 bg-slate-50 print:bg-white text-[10px] space-y-1 rounded-xs">
              <div className="font-bold uppercase tracking-wider text-[10px]">
                MAAY / CHIRANJEEVI PACKAGE &amp; HARDWARE CODES
              </div>
              <div><strong>Package:</strong> GI Embolization (2849-IN058A)</div>
              <div><strong>Hardware:</strong> IMP 39 (Microcatheter) &bull; Embolization Coils</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span><strong>Additional IMP Code:</strong></span>
                <span className="font-mono underline">IMP ________</span>
                <span className="text-slate-600 text-[9px]">(e.g. Coils / Gel)</span>
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
