"use client";

import React from "react";
import Link from "next/link";
import { FileText, ClipboardCheck, ExternalLink } from "lucide-react";
import type { RealSmsPatientCase } from "@/app/lib/realData/smsCathLabRealData";

interface ImagingPatientBannerProps {
  activeCase: RealSmsPatientCase;
}

export function ImagingPatientBanner({ activeCase }: ImagingPatientBannerProps) {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            DSA #{activeCase.dsaNo}
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-white">{activeCase.patientName}</span>
          <span className="text-xs text-slate-500 font-mono">
            {activeCase.age}Y • {activeCase.gender} • UHID: {activeCase.uhid || activeCase.crNumber}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/dashboard/operative-notes?caseId=${activeCase.dsaNo}`}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 text-xs font-semibold hover:bg-emerald-100"
          >
            <FileText className="w-3 h-3" />
            <span>Op Note</span>
          </Link>
          <Link
            href={`/dashboard/discharge?caseId=${activeCase.dsaNo}`}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-300 text-xs font-semibold hover:bg-indigo-100"
          >
            <ClipboardCheck className="w-3 h-3" />
            <span>Discharge Card</span>
          </Link>
          <Link
            href={`/dashboard/logbook?search=${activeCase.dsaNo}`}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 text-xs font-semibold hover:bg-slate-200"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Register</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Procedure</span>
          <p className="font-semibold text-blue-700 dark:text-sky-300 mt-0.5">{activeCase.procedureName}</p>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Diagnosis</span>
          <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">{activeCase.diagnosis}</p>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Date of Procedure</span>
          <p className="font-mono text-slate-800 dark:text-slate-200 mt-0.5">{activeCase.date}</p>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Admitting Unit / Ward</span>
          <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">{activeCase.unit || "Cath Lab"}</p>
        </div>
      </div>
    </div>
  );
}
