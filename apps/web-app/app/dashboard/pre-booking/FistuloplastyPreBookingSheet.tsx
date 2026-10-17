"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
import { PlainFistuloplastyOutlineDiagram } from "./diagrams/PlainFistuloplastyOutlineDiagram";

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

export const FistuloplastyPreBookingSheet: React.FC<SheetDemographicsProps> = ({
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
          procedureTitle="AV FISTULOPLASTY"
          procedureSubtitle="Percutaneous Balloon Angioplasty / Thrombectomy of Hemodialysis Access Circuit"
          icdCode="T82.8"
          schemeCode="2849-IN065A (IR-AVF-01) | IMP 08 (High-Pressure Balloon)"
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
          <div><span className="font-bold">RAD FILE NO.:</span> ______________________________</div>
          <div><span className="font-bold">DIALYSIS SCHEDULE:</span> Mon-Wed-Fri / Tue-Thu-Sat &bull; Shift: ____</div>
        </div>

        {/* Mandatory Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "Fistula Doppler Scan",
            description: "Flow Volume: ____ mL/min | Stenosis PSV Ratio > 2:1 | Thrill: Weak / Absent",
          }}
        />

        {/* Clinical Profile & Circuit Assessment */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            DIALYSIS ACCESS CIRCUIT &amp; STENOSIS PROFILE
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <div><span className="font-bold">Access Type:</span> ( &nbsp; ) Left Radiocephalic (Brescia-Cimino) &nbsp; ( &nbsp; ) Left Brachiocephalic &nbsp; ( &nbsp; ) Brachiobasilic &nbsp; ( &nbsp; ) AVG</div>
            <div><span className="font-bold">Stenosis Site:</span> ( &nbsp; ) Juxta-anastomotic &nbsp; ( &nbsp; ) Cannulation segment &nbsp; ( &nbsp; ) Cephalic arch &nbsp; ( &nbsp; ) Central vein</div>
            <div><span className="font-bold">Clinical Problem:</span> ( &nbsp; ) Elevated venous pressures &nbsp; ( &nbsp; ) Prolonged bleeding post-dialysis &nbsp; ( &nbsp; ) Poor flow</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-300 text-[10px]">
            <div><span className="font-bold">Serum Potassium:</span> ________ mEq/L</div>
            <div><span className="font-bold">Last Dialysis Date:</span> ____________</div>
            <div><span className="font-bold">Thrombosed:</span> ( &nbsp; ) Yes &nbsp; ( &nbsp; ) No</div>
          </div>
        </div>

        {/* Anatomical Diagram & Strategy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              FISTULA CIRCUIT PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Use pen to mark retrograde/antegrade sheath puncture sites, delineate stenosis lengths, and specify planned high-pressure balloon diameters.
            </p>
            <div className="text-[9px] space-y-1 font-mono text-slate-800">
              <div>&bull; ( &#9675; ) Vascular access sheath (5F/6F Short)</div>
              <div>&bull; ( | | ) Stenosis target for balloon dilation</div>
              <div>&bull; ( &rarr; ) Direction of contrast injection / run</div>
            </div>
          </div>
          <PlainFistuloplastyOutlineDiagram />
        </div>

        {/* Planned Hardware */}
        <div className="text-[10px] border border-black p-2 bg-slate-50 print:bg-white mb-2">
          <span className="font-bold">HARDWARE &amp; TARIFF (RAJASTHAN MAAY):</span>{" "}
          2849-IN065A (Fistuloplasty) &bull; IMP 08 (High-Pressure Balloon, e.g. Conquest 6x40mm / Mustang 8x40mm) &bull; 0.035" Glidewire &bull; 6F Radial/PICC Sheath
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
