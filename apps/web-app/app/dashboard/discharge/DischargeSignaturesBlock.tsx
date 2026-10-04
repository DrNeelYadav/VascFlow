"use client";

import React from "react";

interface DischargeSignaturesBlockProps {
  unitHead: string;
}

export function DischargeSignaturesBlock({ unitHead }: DischargeSignaturesBlockProps) {
  return (
    <div className="flex items-end justify-between pt-6 border-t border-slate-300 text-center break-inside-avoid print:pt-4">
      <div>
        <div className="w-36 border-b border-slate-400 mb-1 mx-auto" />
        <span className="text-[10px] text-slate-600 block">IR Resident / On-Call Operator</span>
      </div>
      <div>
        <div className="w-48 border-b border-slate-400 mb-1 mx-auto" />
        <span className="text-[10px] font-bold text-slate-900 block">{unitHead}</span>
        <span className="text-[9px] text-slate-500 block">
          Department of Radiodiagnosis &amp; Interventional Radiology
        </span>
      </div>
    </div>
  );
}
