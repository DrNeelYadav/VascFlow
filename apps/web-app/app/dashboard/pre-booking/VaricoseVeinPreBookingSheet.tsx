"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
import { PlainVaricoseVeinDiagram } from "./diagrams/PlainVaricoseVeinDiagram";

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

export const VaricoseVeinPreBookingSheet: React.FC<SheetDemographicsProps> = ({
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
    <div className="bg-white text-black p-6 border border-slate-300 print:border-none shadow-sm print:shadow-none w-full max-w-[210mm] mx-auto min-h-[297mm] print:min-h-0 print:h-auto print:block a4-print-sheet text-xs font-sans leading-relaxed flex flex-col justify-between">
      <div>
        <PreBookingHeader
          procedureTitle="VARICOSE VEINS"
          procedureSubtitle="Endovenous Laser Ablation (EVLA) / Cyanoacrylate Glue Embolization"
          icdCode="I83.9"
          schemeCode="1849-IN075A (IR-VAR-01) | IMP 12, IMP 18"
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
          <div><span className="font-bold">CEAP CLINICAL CLASS:</span> C____ (C2–C6) &bull; VCSS: ____ / 30</div>
        </div>

        {/* Mandatory Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "Venous Doppler Scan",
            description: "SFJ Incompetence ( &nbsp; ) | Reflux Time > 0.5s | GSV Diam: ____ mm",
          }}
        />

        {/* Clinical Profile & Venous Assessment */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            CEAP PROFILE &amp; LOWER LIMB VENOUS ASSESSMENT
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <div><span className="font-bold">Involved Limb:</span> ( &nbsp; ) Right Lower Limb &nbsp; ( &nbsp; ) Left Lower Limb &nbsp; ( &nbsp; ) Bilateral</div>
            <div><span className="font-bold">Venous Reflux:</span> ( &nbsp; ) GSV &nbsp; ( &nbsp; ) SSV &nbsp; ( &nbsp; ) Anterior Accessory GSV &nbsp; ( &nbsp; ) Perforators</div>
            <div><span className="font-bold">Modality:</span> ( &nbsp; ) EVLA (1470nm Radial) &nbsp; ( &nbsp; ) VenaSeal Glue &nbsp; ( &nbsp; ) Foam Sclerotherapy</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-300 text-[10px]">
            <div><span className="font-bold">GSV Trunk Length:</span> ________ cm</div>
            <div><span className="font-bold">Puncture Site:</span> Knee / Mid-Calf</div>
            <div><span className="font-bold">Stockings Prescribed:</span> ( &nbsp; ) Class II (23–32 mmHg)</div>
          </div>
        </div>

        {/* Anatomical Venous Diagram & Strategy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              VENOUS MAPPING PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Use pen to trace GSV ablation length, mark incompetent perforators, and shade tributary varicosities for phlebectomy or foam.
            </p>
            <div className="text-[9px] space-y-1 font-mono text-slate-800">
              <div>&bull; ( &#9675; ) Venous puncture site (Micropuncture 4F/6F)</div>
              <div>&bull; ( === ) EVLA / Glue ablation segment</div>
              <div>&bull; ( X ) Incompetent perforator ligation/foam</div>
            </div>
          </div>
          <PlainVaricoseVeinDiagram />
        </div>

        {/* Planned Hardware */}
        <div className="text-[10px] border border-black p-2 bg-slate-50 print:bg-white mb-2">
          <span className="font-bold">HARDWARE &amp; TARIFF (RAJASTHAN MAAY):</span>{" "}
          1849-IN075A (EVLA/Glue) &bull; IMP 12 (Radial Laser Fiber) &bull; IMP 18 (Cyanoacrylate Glue Kit) &bull; Tumescent Anesthesia Pack
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
