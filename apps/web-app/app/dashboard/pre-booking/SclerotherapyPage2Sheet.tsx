"use client";

import React from "react";
import type { SclerotherapySession } from "./preBookingTypes";

interface SclerotherapyPage2SheetProps {
  patientName?: string;
  uhid?: string;
  sessions?: SclerotherapySession[];
}

export const SclerotherapyPage2Sheet: React.FC<SclerotherapyPage2SheetProps> = ({
  patientName = "",
  uhid = "",
  sessions = [],
}) => {
  return (
    <div className="bg-white text-black p-6 border border-slate-300 print:border-none shadow-sm print:shadow-none w-full max-w-[210mm] mx-auto min-h-[297mm] print:min-h-0 print:h-auto print:block a4-print-sheet text-xs font-sans leading-relaxed flex flex-col justify-between">
      <div>
        {/* Top Reference Bar */}
        <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3 text-[11px]">
          <div>
            <span className="font-black uppercase tracking-tight text-sm">DEPARTMENT OF INTERVENTIONAL RADIOLOGY</span>
            <div className="text-[10px] text-slate-700">Pre-Operative Phlebogram &amp; Procedural Treatment Sessions Log (PAGE 2)</div>
          </div>
          <div className="text-right text-[10px] font-mono">
            <div>Patient: <strong className="font-bold">{patientName || "____________________"}</strong></div>
            <div>UHID / CR: <strong className="font-bold">{uhid || "____________________"}</strong></div>
          </div>
        </div>

        {/* Phlebogram & Angiosuite Verification */}
        <div className="border border-black p-2 mb-3 text-[11px] space-y-1">
          <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1">
            PHLEBOGRAM (DSA CATH-LAB VERIFICATION)
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div><span className="font-bold">Fluid Aspirated:</span> Blood / Lymph / Serous / Dry tap</div>
            <div><span className="font-bold">Contrast Volume Injected:</span> ________ mL</div>
            <div><span className="font-bold">Nidus Morphology:</span> Spongy / Cavitary / Dysplastic venous lake</div>
            <div><span className="font-bold">Draining Vein:</span> ( &nbsp; ) Not Present &nbsp;&nbsp; ( &nbsp; ) Early &nbsp;&nbsp; ( &nbsp; ) Delayed</div>
            <div><span className="font-bold">Drainage Route:</span> Direct systemic / Indirect deep vein</div>
            <div><span className="font-bold">Compression Occlusion of Outflow:</span> ( &nbsp; ) Yes &nbsp; ( &nbsp; ) No</div>
          </div>
          <div className="text-[10px] pt-1">
            <span className="font-bold">Fluoroscopy / DSA Findings:</span> __________________________________________________________________________
          </div>
        </div>

        {/* Structured Treatment Sessions Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-black text-[10px]">
            <thead>
              <tr className="bg-slate-100 print:bg-slate-50 font-bold border-b border-black text-center">
                <th className="border border-black p-1 w-14">SESSION</th>
                <th className="border border-black p-1 w-20">DATE</th>
                <th className="border border-black p-1 w-44">SCLEROSANT INJECTED</th>
                <th className="border border-black p-1 w-16">DOSE</th>
                <th className="border border-black p-1 w-24">COMPRESSION</th>
                <th className="border border-black p-1 text-left pl-2">FOLLOW-UP / OUTCOME IN CLINIC</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sNo) => {
                const s = sessions.find((x) => x.sessionNumber === sNo);
                return (
                  <tr key={sNo} className="border-b border-black h-14 align-top">
                    <td className="border border-black p-1 text-center font-mono font-bold text-[11px]">
                      #{sNo}
                    </td>
                    <td className="border border-black p-1 text-center font-mono">
                      {s?.date || ""}
                    </td>
                    <td className="border border-black p-1">
                      <div className="space-y-0.5 text-[9px]">
                        <div>( &nbsp; ) <strong>STS</strong> (Sodium Tetradecyl)</div>
                        <div>( &nbsp; ) <strong>Polidocanol</strong> (Foam / Liquid)</div>
                        <div>( &nbsp; ) <strong>Bleomycin</strong> (Aqueous)</div>
                      </div>
                    </td>
                    <td className="border border-black p-1 text-center font-mono">
                      {s?.dose || "______"}
                    </td>
                    <td className="border border-black p-1 text-center">
                      <div className="flex items-center justify-center gap-2 text-[9px] mt-1 font-semibold">
                        <span>( &nbsp; ) Yes</span>
                        <span>( &nbsp; ) No</span>
                      </div>
                    </td>
                    <td className="border border-black p-1 pl-2">
                      <div className="grid grid-cols-2 gap-x-2 text-[9px] text-slate-800">
                        <div><strong>Size:</strong> {s?.followUpSize || "_________________"}</div>
                        <div><strong>Morphology:</strong> {s?.followUpMorphology || "_____________"}</div>
                        <div><strong>Complications:</strong> {s?.complications || "None ( &nbsp; )"}</div>
                        <div><strong>Advice:</strong> {s?.advice || "Recall 4–6 wks"}</div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Post-Sclerotherapy Surveillance & Patient Guidance */}
        <div className="mt-3 p-2 border border-black text-[10px] space-y-0.5">
          <div className="font-bold uppercase tracking-wider text-[11px]">Post-Sclerotherapy Surveillance &amp; Red-Flag Warnings</div>
          <div>&bull; Maintain compression crepe bandage for 48 hours continuously. Keep puncture site dry and elevated.</div>
          <div>&bull; Transient mild swelling, induration, and tenderness are normal. Report immediately to IR Emergency if acute severe pain, skin blistering, or blackish necrosis occurs.</div>
        </div>
      </div>

      {/* Signature Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-black text-[10px]">
        <div>Operating Fellow / Resident: ____________________</div>
        <div>Cath Lab Scrub Nurse: ____________________</div>
        <div>Faculty Supervisor: ____________________</div>
      </div>
    </div>
  );
};
