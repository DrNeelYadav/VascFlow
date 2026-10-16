"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
import { PlainJnaOutlineDiagram } from "./diagrams/PlainJnaOutlineDiagram";

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

export const JnaPreBookingSheet: React.FC<SheetDemographicsProps> = ({
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
          procedureTitle="JNA EMBOLIZATION"
          procedureSubtitle="Pre-Operative Transarterial Embolization for Juvenile Nasopharyngeal Angiofibroma"
          icdCode="D10.6"
          schemeCode="2849-IN063A (IR-JNA-01) | IMP 39, PVA Particles"
          scheduledDate={scheduledDate}
        />

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-3 pt-1 border-b border-black pb-2 text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "______________________________"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"} (Adolescent Male)</div>
          <div><span className="font-bold">Address:</span> {location || "______________________________"}</div>
          <div><span className="font-bold">Mob No.:</span> {contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RAD FILE NO.:</span> ______________________________</div>
          <div><span className="font-bold">RADISCH / FISCH STAGE:</span> Stage ____ (I–IV)</div>
        </div>

        {/* Mandatory Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "CT / MR Angiography",
            description: "Sphenopalatine / IMAX blush ( &nbsp; ) | Intracranial extension ( &nbsp; ) Nil",
          }}
        />

        {/* Clinical Profile & Embolization Strategy */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            JNA CLINICAL PROFILE &amp; FEEDER ASSESSMENT
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <div><span className="font-bold">Symptoms:</span> ( &nbsp; ) Recurrent Epistaxis &nbsp; ( &nbsp; ) Nasal Obstruction &nbsp; ( &nbsp; ) Facial Swelling</div>
            <div><span className="font-bold">Primary Feeders:</span> ( &nbsp; ) IMAX &nbsp; ( &nbsp; ) Ascending Pharyngeal &nbsp; ( &nbsp; ) Facial &nbsp; ( &nbsp; ) Bilateral</div>
            <div><span className="font-bold">Embolic Agent:</span> ( &nbsp; ) PVA Particles (300–500 &mu;m) &nbsp; ( &nbsp; ) Embospheres &nbsp; ( &nbsp; ) Gelfoam</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-300 text-[10px]">
            <div><span className="font-bold">Target Surgery Window:</span> 24–48h post-embo</div>
            <div><span className="font-bold">MMA Feeder Check:</span> ( &nbsp; ) Cleared</div>
            <div><span className="font-bold">Baseline Hemoglobin:</span> ________ g/dL</div>
          </div>
        </div>

        {/* Anatomical Diagram & Strategy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              CAROTID &amp; IMAX PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Use pen to mark microcatheter engagement into Internal Maxillary Artery (IMAX), verify Middle Meningeal Artery (MMA) safety avoidance, and shade tumor blush.
            </p>
            <div className="text-[9px] space-y-1 font-mono text-slate-800">
              <div>&bull; ( &rarr; ) Superselective microcatheter position</div>
              <div>&bull; ( &#9675; ) PVA particle embolization end-point</div>
              <div>&bull; ( ! ) Danger anastomosis / cranial nerve safety</div>
            </div>
          </div>
          <PlainJnaOutlineDiagram />
        </div>

        {/* Planned Hardware */}
        <div className="text-[10px] border border-black p-2 bg-slate-50 print:bg-white mb-2">
          <span className="font-bold">HARDWARE &amp; TARIFF (RAJASTHAN MAAY):</span>{" "}
          2849-IN063A (JNA Embolization) &bull; IMP 39 (2.7F/2.8F Microcatheter &amp; 0.014" Wire) &bull; PVA Particles (300-500 &mu;m) &bull; 5F Envoy/Mach1 Guide Catheter
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
