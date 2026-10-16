"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
import { PlainPcnOutlineDiagram } from "./diagrams/PlainPcnOutlineDiagram";

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

export const PcnPreBookingSheet: React.FC<SheetDemographicsProps> = ({
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
          procedureTitle="PERCUTANEOUS NEPHROSTOMY (PCN)"
          procedureSubtitle="Ultrasound &amp; Fluoroscopy-Guided Antegrade Renal Drainage / DJ Stenting"
          icdCode="N13.2 / N28.8"
          schemeCode="2849-IN052A (IR-PCN-01) | IMP 05 (PCN Kit, Locking Pigtail)"
          scheduledDate={scheduledDate}
        />

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-3 pt-1 border-b border-black pb-2 text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "Urology / Surgical Oncology"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "____"}</div>
          <div><span className="font-bold">Address:</span> {location || "______________________________"}</div>
          <div><span className="font-bold">Mob No.:</span> {contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RAD FILE NO.:</span> ______________________________</div>
          <div><span className="font-bold">HYDRONEPHROSIS:</span> ( &nbsp; ) Mild &nbsp; ( &nbsp; ) Moderate &nbsp; ( &nbsp; ) Severe (Pelvis: ____ mm)</div>
        </div>

        {/* Mandatory Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "Renal Function & USG",
            description: "S. Creatinine: ____ mg/dL | Cortical Thickness: ____ mm | Pyuria ( &nbsp; ) Nil",
          }}
        />

        {/* Clinical Profile & Nephrostomy Assessment */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            UROLOGICAL PROFILE &amp; DRAINAGE INDICATION
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <div><span className="font-bold">Side:</span> ( &nbsp; ) Right Kidney &nbsp; ( &nbsp; ) Left Kidney &nbsp; ( &nbsp; ) Bilateral PCN</div>
            <div><span className="font-bold">Etiology:</span> ( &nbsp; ) Ca. Cervix / Pelvic Malignancy &nbsp; ( &nbsp; ) Ureteric Calculus &nbsp; ( &nbsp; ) Pyonephrosis &nbsp; ( &nbsp; ) Post-op Leak</div>
            <div><span className="font-bold">Procedure:</span> ( &nbsp; ) PCN Only (8.3F/10F) &nbsp; ( &nbsp; ) PCN + Antegrade DJ Stenting (6F/7F) &nbsp; ( &nbsp; ) Exchange</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-300 text-[10px]">
            <div><span className="font-bold">Target Calyx:</span> Posterior Lower Pole</div>
            <div><span className="font-bold">Urine Culture:</span> Sterile / Awaited</div>
            <div><span className="font-bold">Pre-Op Antibiotic:</span> Administered ( &nbsp; )</div>
          </div>
        </div>

        {/* Anatomical Diagram & Strategy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              PELVICALYCEAL SYSTEM PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Use pen to mark USG puncture access through lower pole posterior calyx (Brodel's avascular line), trace pigtail loop inside renal pelvis, and show ureteric stent traverse.
            </p>
            <div className="text-[9px] space-y-1 font-mono text-slate-800">
              <div>&bull; ( &#9675; ) Puncture needle entry (18G Chiba / 21G Micropuncture)</div>
              <div>&bull; ( &copy; ) Locking pigtail catheter curl in pelvis</div>
              <div>&bull; ( &rarr; ) Antegrade guidewire crossing into bladder</div>
            </div>
          </div>
          <PlainPcnOutlineDiagram />
        </div>

        {/* Planned Hardware */}
        <div className="text-[10px] border border-black p-2 bg-slate-50 print:bg-white mb-2">
          <span className="font-bold">HARDWARE &amp; TARIFF (RAJASTHAN MAAY):</span>{" "}
          2849-IN052A (PCN) &bull; IMP 05 (8.3F / 10F Locking Pigtail Nephrostomy Kit) &bull; 0.038" J-tip Guidewire &bull; Facial Dilators (6F, 8F, 10F)
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
