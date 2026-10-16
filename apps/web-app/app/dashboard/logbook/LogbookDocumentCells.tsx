"use client";

import React from "react";
import Link from "next/link";
import { Film, FileText, ClipboardCheck, Activity } from "lucide-react";
import type { RealSmsPatientCase } from "../../lib/realData/smsCathLabRealData";

interface LogbookDocumentCellsProps {
  patientCase: RealSmsPatientCase;
}

export function LogbookDocumentCells({ patientCase: c }: LogbookDocumentCellsProps) {
  const caseId = c.dsaNo || c.crNumber;

  return (
    <>
      {/* 1. Fluoro Runs (In-App PACS / DICOM Cine Player) */}
      <td className="py-1.5 px-2 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
        {c.hasFluoro ? (
          <Link
            href={`/dashboard/imaging?caseId=${caseId}`}
            title={`Open in-app fluoroscopy cine player & PACS for IR #${c.dsaNo}`}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <Film className="w-3 h-3 text-sky-600 dark:text-sky-400" />
            <span>Fluoro</span>
          </Link>
        ) : (
          <span className="text-[11px] font-mono text-slate-300 dark:text-slate-600 select-none">—</span>
        )}
      </td>

      {/* 2. Operative Note (WordPad-Style Note) */}
      <td className="py-1.5 px-2 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
        <Link
          href={`/dashboard/operative-notes?caseId=${caseId}`}
          title={c.hasOpNote ? `Open operative note for IR #${c.dsaNo}` : `Create blank operative note draft for IR #${c.dsaNo}`}
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold border transition-colors shadow-2xs active:scale-95 ${
            c.hasOpNote
              ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          <FileText className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
          <span>{c.hasOpNote ? "Op Note" : "+ Draft"}</span>
        </Link>
      </td>

      {/* 3. Discharge Summary & Patient Care Card */}
      <td className="py-1.5 px-2 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
        <Link
          href={`/dashboard/discharge?caseId=${caseId}`}
          title={c.hasDischarge ? `Open discharge summary for IR #${c.dsaNo}` : `Create blank discharge card for IR #${c.dsaNo}`}
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold border transition-colors shadow-2xs active:scale-95 ${
            c.hasDischarge
              ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800 hover:bg-indigo-100"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          <ClipboardCheck className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
          <span>{c.hasDischarge ? "Summary" : "+ Card"}</span>
        </Link>
      </td>
    </>
  );
}
