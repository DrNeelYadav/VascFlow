"use client";

import React from "react";

/**
 * Authentic Blank Procedural Signatures Block for SMS Medical College IR Operative Notes.
 * Zero phantom data: clean blank lines allow clinicians to enter/sign actual personnel.
 */
export function WordPadSignaturesBlock() {
  return (
    <div className="pt-6 border-t border-black/30 text-[11px] leading-normal print:pt-4 break-inside-avoid">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
        {/* Operating Interventional Radiologist */}
        <div className="border-t border-black pt-2 flex flex-col justify-between min-h-[90px]">
          <div>
            <div className="font-bold text-black uppercase tracking-wide">
              Operating Interventional Radiologist
            </div>
            <div className="text-[10px] text-slate-600">
              (Signature &amp; Date)
            </div>
          </div>
          <div className="mt-3 text-[10.5px] space-y-1">
            <div>Name: ____________________</div>
            <div>Desig: ____________________</div>
          </div>
        </div>

        {/* Assisting Fellow / Resident */}
        <div className="border-t border-black pt-2 flex flex-col justify-between min-h-[90px]">
          <div>
            <div className="font-bold text-black uppercase tracking-wide">
              Assisting Fellow / Resident
            </div>
            <div className="text-[10px] text-slate-600">
              (Signature)
            </div>
          </div>
          <div className="mt-3 text-[10.5px] space-y-1">
            <div>Name: ____________________</div>
            <div>Desig: ____________________</div>
          </div>
        </div>

        {/* Supervising Consultant / Unit Head */}
        <div className="border-t border-black pt-2 flex flex-col justify-between min-h-[90px]">
          <div>
            <div className="font-bold text-black uppercase tracking-wide">
              Consultant / Unit Head
            </div>
            <div className="text-[10px] text-slate-600">
              (Official Seal &amp; Verification)
            </div>
          </div>
          <div className="mt-3 text-[10.5px] space-y-1">
            <div>Name: ____________________</div>
            <div>Date: ____________________</div>
          </div>
        </div>
      </div>
    </div>
  );
}
