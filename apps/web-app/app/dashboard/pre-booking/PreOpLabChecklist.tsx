"use client";

import React from "react";

interface PreOpLabChecklistProps {
  procedureSpecificMarker?: {
    label: string;
    description: string;
  };
}

export const PreOpLabChecklist: React.FC<PreOpLabChecklistProps> = ({
  procedureSpecificMarker,
}) => {
  return (
    <div className="space-y-2 mb-3">
      {/* 1. Mandatory Admission Instruction Notice */}
      <div className="border border-black p-2 bg-slate-50 print:bg-white text-[10px] rounded-xs">
        <div className="font-black uppercase tracking-wider text-[11px] text-black flex items-center gap-1.5">
          <span>&bull; IMPORTANT ADMISSION NOTICE FOR PATIENT</span>
        </div>
        <p className="mt-0.5 text-slate-800 font-semibold leading-snug">
          Please report to the Interventional Radiology Ward{" "}
          <span className="underline font-black text-black">1 DAY PRIOR</span> to the scheduled
          procedure date for indoor bed admission, pre-procedural verification, and nursing preparation.
        </p>
      </div>

      {/* 2. Required Pre-Operative Blood Tests Checklist */}
      <div className="border border-black p-2 text-[10px]">
        <div className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-1 mb-1.5 flex items-center justify-between">
          <span>REQUIRED PRE-OPERATIVE INVESTIGATIONS (TO BE VERIFIED ON ADMISSION)</span>
          <span className="text-[9px] font-normal font-mono text-slate-600">[ &check; mark when verified ]</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-[10px]">
          <div>( &nbsp;&nbsp;&nbsp; ) <strong>CBC:</strong> Hb: _____ | Plt: _____ | TLC: _____</div>
          <div>( &nbsp;&nbsp;&nbsp; ) <strong>Coagulation:</strong> PT: _____ | INR: _____</div>
          <div>( &nbsp;&nbsp;&nbsp; ) <strong>Viral Screen:</strong> HIV / HBsAg / Anti-HCV</div>
          <div>( &nbsp;&nbsp;&nbsp; ) <strong>RFT:</strong> S. Creatinine: _____ | Urea: _____</div>
          <div>( &nbsp;&nbsp;&nbsp; ) <strong>LFT:</strong> S. Bilirubin: _____ | Albumin: _____</div>
          {procedureSpecificMarker ? (
            <div>( &nbsp;&nbsp;&nbsp; ) <strong>{procedureSpecificMarker.label}:</strong> {procedureSpecificMarker.description}</div>
          ) : (
            <div>( &nbsp;&nbsp;&nbsp; ) <strong>Blood Group &amp; Crossmatch:</strong> ______</div>
          )}
        </div>
      </div>
    </div>
  );
};
