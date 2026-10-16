"use client";

import React from "react";

interface SheetDemographicsProps {
  patientName?: string;
  uhid?: string;
}

/**
 * Exact Replica of AIIMS Delhi Pre-Operative Sclerotherapy Form (Back Page)
 * Pure printable A4 sheet with Phlebogram findings and 8-row Treatment Sessions Table.
 * Designed for manual pen logging by IR fellows during procedural sessions.
 */
export const SclerotherapyPage2Sheet: React.FC<SheetDemographicsProps> = ({
  patientName = "",
  uhid = "",
}) => {
  return (
    <div className="bg-white text-black p-6 border border-slate-300 print:border-none shadow-sm print:shadow-none w-full max-w-[210mm] mx-auto min-h-[297mm] text-xs font-sans leading-relaxed">
      {/* Top Bar linking back to Patient */}
      <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3 text-[11px]">
        <div>
          <span className="font-bold uppercase tracking-tight text-sm">DEPARTMENT OF INTERVENTIONAL RADIOLOGY</span>
          <div className="text-[10px] text-slate-700">Pre-Operative Phlebogram &amp; Treatment Sessions Record (PAGE 2)</div>
        </div>
        <div className="text-right text-[10px] font-mono">
          <div>Patient: <span className="font-bold">{patientName || "____________________"}</span></div>
          <div>UHID: <span className="font-bold">{uhid || "____________________"}</span></div>
        </div>
      </div>

      {/* PHLEBOGRAM SECTION */}
      <div className="border border-black p-2.5 mb-4 text-[11px] space-y-1.5">
        <div className="font-bold text-xs uppercase tracking-wide border-b border-black pb-1 mb-1.5">
          PHLEBOGRAM (DSA SUITE VERIFICATION)
        </div>
        <div className="flex items-center justify-between">
          <div><span className="font-bold">Fluid aspirated:</span> Blood / Lymph / Serous / None</div>
          <div><span className="font-bold">Contrast vol. Injected:</span> ____________________</div>
        </div>
        <div>
          <span className="font-bold">Appearance:</span> Spongy / Cavitary / Dysplastic veins
        </div>
        <div className="flex items-center justify-between">
          <div><span className="font-bold">Draining vein:</span> Not Present / Early / Late</div>
          <div>Direct / Indirect</div>
        </div>
        <div>
          <span className="font-bold">With compression:</span> Not Present / Present (Site: ________________________________)
        </div>
        <div>
          <span className="font-bold">DSA Findings:</span> __________________________________________________________________________
        </div>
      </div>

      {/* TREATMENT SESSIONS & SURVEILLANCE TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-black text-[10px]">
          <thead>
            <tr className="bg-slate-100 print:bg-slate-50 font-bold border-b border-black text-center">
              <th className="border border-black p-1.5 w-16">TREATMENT SESSIONS</th>
              <th className="border border-black p-1.5 w-16">DATE</th>
              <th className="border border-black p-1.5 w-32">SCLEROSANT INJECTED (FOAM/NOT)</th>
              <th className="border border-black p-1.5 w-20">DOSE</th>
              <th className="border border-black p-1.5 w-24">Compression applied or not</th>
              <th className="border border-black p-1.5 text-left pl-2">FOLLOW-UP (Symptoms relieved?)</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sNo) => (
              <tr key={sNo} className="border-b border-black h-16 align-top">
                <td className="border border-black p-1 text-center font-mono font-bold text-[11px]">
                  #{sNo}
                </td>
                <td className="border border-black p-1 text-center font-mono"></td>
                <td className="border border-black p-1"></td>
                <td className="border border-black p-1 font-mono"></td>
                <td className="border border-black p-1 text-center"></td>
                <td className="border border-black p-1 pl-2">
                  <div className="grid grid-cols-2 gap-x-2 text-[9px] text-slate-700">
                    <div>Size: ____________________</div>
                    <div>Morphology: ____________________</div>
                    <div>Complications: ____________________</div>
                    <div>Advice: ____________________</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Emergency Red-Flag Protocol */}
      <div className="mt-4 p-2 border border-black text-[10px] space-y-0.5">
        <div className="font-bold uppercase tracking-wider text-[11px]">Post-Sclerotherapy Surveillance &amp; Red-Flag Warnings</div>
        <div>&bull; Keep puncture dressing clean and dry for 48 hours. Continue compression crepe bandage if advised.</div>
        <div>&bull; Mild local swelling and tenderness are anticipated. Report immediately to IR Emergency if acute severe pain, skin blistering, or blackish necrosis occurs.</div>
      </div>

      {/* Signature Footer */}
      <div className="flex items-center justify-between pt-4 mt-auto border-t border-black text-[10px]">
        <div>Operating Fellow / Resident: ____________________</div>
        <div>Cath Lab Scrub Nurse: ____________________</div>
        <div>Faculty Supervisor: ____________________</div>
      </div>
    </div>
  );
};
