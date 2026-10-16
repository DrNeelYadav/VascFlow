"use client";

import React from "react";

interface PreBookingHeaderProps {
  procedureTitle: string;
  procedureSubtitle?: string;
  icdCode?: string;
  schemeCode?: string;
  scheduledDate?: string;
}

export const PreBookingHeader: React.FC<PreBookingHeaderProps> = ({
  procedureTitle,
  procedureSubtitle = "Pre-Operative Procedural Dating & Outpatient Booking Sheet",
  icdCode,
  schemeCode,
  scheduledDate,
}) => {
  return (
    <div className="border-b-2 border-black pb-3 mb-3">
      {/* Centered Institutional Logo & Department */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sms_hospital_logo.png"
          alt="SMS Hospital Logo"
          className="w-14 h-14 object-contain mb-1 print:w-12 print:h-12"
        />
        <div className="text-[11px] font-black uppercase tracking-wider text-slate-900">
          DEPARTMENT OF INTERVENTIONAL RADIOLOGY
        </div>
        <div className="text-[9px] text-slate-700 font-medium">
          SMS Medical College &amp; Attached Hospitals, Jaipur &bull; Angiosuite Cath-Lab
        </div>

        {/* Big Bold Prominent Procedure Heading */}
        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black mt-1.5 mb-0.5 print:text-xl">
          {procedureTitle}
        </h1>
        <div className="text-[10px] font-semibold text-slate-700 tracking-wide uppercase">
          {procedureSubtitle}
        </div>
      </div>

      {/* Top Clinical & Statutory Codes Bar */}
      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-300 text-[10px] font-mono">
        <div>
          {icdCode && (
            <span>
              ICD-10: <strong className="font-bold text-black">{icdCode}</strong>
            </span>
          )}
        </div>
        <div className="text-center font-bold text-slate-900">
          {schemeCode && <span>SCHEME / MAAY: {schemeCode}</span>}
        </div>
        <div className="text-right">
          <span>
            Scheduled Date:{" "}
            <strong className="font-bold text-black underline">
              {scheduledDate || "____________________"}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};
