"use client";

import React from "react";
import { PreBookingHeader } from "./PreBookingHeader";
import { PreOpLabChecklist } from "./PreOpLabChecklist";
import { PlainUaeOutlineDiagram } from "./diagrams/PlainUaeOutlineDiagram";

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

export const UaePreBookingSheet: React.FC<SheetDemographicsProps> = ({
  patientName = "",
  age = "",
  sex = "F",
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
          procedureTitle="UTERINE ARTERY EMBOLIZATION"
          procedureSubtitle="Transcatheter Uterine Artery Embolization (UAE / UFE) for Fibroids / Adenomyosis / PPH"
          icdCode="D25.9 / N80.0"
          schemeCode="2849-IN062A (IR-UAE-01) | IMP 39, Microspheres / Gelfoam"
          scheduledDate={scheduledDate}
        />

        {/* Demographics Block */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-3 pt-1 border-b border-black pb-2 text-[11px]">
          <div><span className="font-bold">Name:</span> {patientName || "______________________________"}</div>
          <div><span className="font-bold">Referring unit:</span> {unit || "______________________________"}</div>
          <div><span className="font-bold">Age / Sex:</span> {age || "____"} / {sex || "F"}</div>
          <div><span className="font-bold">Address:</span> {location || "______________________________"}</div>
          <div><span className="font-bold">Mob No.:</span> {contactNumber || "______________________________"}</div>
          <div><span className="font-bold">UHID / CR:</span> {uhid || "______________________________"}</div>
          <div><span className="font-bold">RAD FILE NO.:</span> ______________________________</div>
          <div><span className="font-bold">GRAVIDA / PARITY:</span> G____ P____ L____ A____</div>
        </div>

        {/* Mandatory Pre-Op Admission Notice & Investigations Checklist */}
        <PreOpLabChecklist
          procedureSpecificMarker={{
            label: "Pelvic MRI / USG",
            description: "Dominant Fibroid: ____ cm | Location: Intramural/Submucosal | Uterine Vol: ____ cc",
          }}
        />

        {/* Clinical Profile & Gynecological Assessment */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            GYNECOLOGICAL PROFILE &amp; EMBOLIZATION INDICATION
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <div><span className="font-bold">Indication:</span> ( &nbsp; ) Symptomatic Fibroids &nbsp; ( &nbsp; ) Adenomyosis &nbsp; ( &nbsp; ) Postpartum Hemorrhage (PPH) &nbsp; ( &nbsp; ) AVM</div>
            <div><span className="font-bold">Symptoms:</span> ( &nbsp; ) Menorrhagia &nbsp; ( &nbsp; ) Dysmenorrhea &nbsp; ( &nbsp; ) Bulk/Pressure &nbsp; ( &nbsp; ) Anemia</div>
            <div><span className="font-bold">Embolic Agent:</span> ( &nbsp; ) Calibrated Microspheres (500–700 &mu;m) &nbsp; ( &nbsp; ) PVA &nbsp; ( &nbsp; ) Gelfoam Slurry</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-300 text-[10px]">
            <div><span className="font-bold">Baseline Hb:</span> ________ g/dL</div>
            <div><span className="font-bold">Desires Future Fertility:</span> Yes / No</div>
            <div><span className="font-bold">PCA Pump Planned:</span> ( &nbsp; ) Yes (Post-embo pain)</div>
          </div>
        </div>

        {/* Anatomical Diagram & Strategy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border border-black p-2.5">
          <div>
            <div className="font-bold text-xs uppercase tracking-wide mb-1">
              PELVIC &amp; UTERINE ARTERY PEN SKETCH
            </div>
            <p className="text-[10px] text-slate-600 mb-1.5">
              Use pen to delineate fibroid locations within uterine wall, trace bilateral uterine artery access, and note any ovarian artery collaterals.
            </p>
            <div className="text-[9px] space-y-1 font-mono text-slate-800">
              <div>&bull; ( X ) Dominant fibroid(s) position</div>
              <div>&bull; ( &rarr; ) Bilateral uterine artery catheterization</div>
              <div>&bull; ( &#9675; ) Near-stasis embolization end-point</div>
            </div>
          </div>
          <PlainUaeOutlineDiagram />
        </div>

        {/* Planned Hardware */}
        <div className="text-[10px] border border-black p-2 bg-slate-50 print:bg-white mb-2">
          <span className="font-bold">HARDWARE &amp; TARIFF (RAJASTHAN MAAY):</span>{" "}
          2849-IN062A (UAE) &bull; IMP 39 (2.7F/2.8F Microcatheter) &bull; 4F/5F Roberts Uterine Catheter (RUC) / Cobra &bull; Embospheres (500-700 &mu;m)
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
