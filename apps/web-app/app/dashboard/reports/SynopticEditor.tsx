"use client";

import React, { useState } from "react";
import { Printer } from "lucide-react";

export interface SynopticReportData {
  caseId: string;
  patientName: string;
  crNumber: string;
  age: number;
  gender: "Male" | "Female" | "";
  procedureName: string;
  indication: string;
  accessSite: string;
  sheathSize: string;
  fluoroscopyTime: number;
  dapDose: number;
  contrastVolumeMl: number;
  technicalFindings: string;
  complications: string;
  implantLotNumbers: string;
  postOpOrders: string;
}

interface SynopticEditorProps {
  caseId: string;
  initialData?: Partial<SynopticReportData>;
}

export function SynopticEditor({
  caseId,
  initialData,
}: SynopticEditorProps) {
  const [report, setReport] = useState<SynopticReportData>({
    caseId,
    patientName: initialData?.patientName || "",
    crNumber: initialData?.crNumber || "",
    age: initialData?.age ?? 0,
    gender: initialData?.gender || "",
    procedureName: initialData?.procedureName || "",
    indication: initialData?.indication || "",
    accessSite: initialData?.accessSite || "",
    sheathSize: initialData?.sheathSize || "",
    fluoroscopyTime: initialData?.fluoroscopyTime ?? 0,
    dapDose: initialData?.dapDose ?? 0,
    contrastVolumeMl: initialData?.contrastVolumeMl ?? 0,
    technicalFindings: initialData?.technicalFindings || "",
    complications: initialData?.complications || "",
    implantLotNumbers: initialData?.implantLotNumbers || "",
    postOpOrders: initialData?.postOpOrders || "",
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-slate-800">
      {/* Report title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              CIRSE Synoptic Procedural Report
            </h2>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-mono font-bold text-slate-600 border border-slate-200">
              CIRSE-SIR Standard
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            SMS Medical College & Attached Hospitals &bull; Division of Interventional Radiology
          </p>
        </div>

      </div>

      {/* Patient Header Banner */}
      <div className="rounded-xl bg-slate-50/80 border border-slate-200 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Patient Name</div>
            <div className="font-bold text-slate-900 text-sm mt-0.5">{report.patientName}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">CR / Hospital ID</div>
            <div className="font-mono font-bold text-slate-900 text-sm mt-0.5">{report.crNumber}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Age / Sex</div>
            <div className="font-semibold text-slate-800 text-sm mt-0.5">
              {report.age > 0 ? `${report.age} Y` : "—"}{report.gender ? ` / ${report.gender}` : ""}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Procedure</div>
            <div className="font-bold text-blue-700 text-xs mt-0.5 truncate">{report.procedureName}</div>
          </div>
        </div>
      </div>

      {/* Clinical Indication */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
          Clinical Indication & Diagnosis
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-200 p-2.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50"
          value={report.indication}
          onChange={(e) => setReport({ ...report, indication: e.target.value })}
        />
      </div>

      {/* Vascular Access & Implants Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block font-bold uppercase tracking-wider text-slate-600 mb-1">
            Vascular Access & Sheaths
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 p-2.5 focus:border-blue-500 focus:outline-none disabled:bg-slate-50"
            value={report.accessSite}
            onChange={(e) => setReport({ ...report, accessSite: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-bold uppercase tracking-wider text-slate-600 mb-1">
            Implants, Stents & Lot Numbers (GS1 Barcode Synced)
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 p-2.5 font-mono focus:border-blue-500 focus:outline-none disabled:bg-slate-50"
            value={report.implantLotNumbers}
            onChange={(e) => setReport({ ...report, implantLotNumbers: e.target.value })}
          />
        </div>
      </div>

      {/* Radiation & Contrast Dosimetry Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-xs">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400">Fluoro Time</span>
          <div className="font-mono font-bold text-slate-900 mt-0.5">{report.fluoroscopyTime > 0 ? `${report.fluoroscopyTime} min` : "—"}</div>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400">Cumulative DAP</span>
          <div className="font-mono font-bold text-slate-900 mt-0.5">{report.dapDose > 0 ? <>{report.dapDose} Gy&middot;cm&sup2;</> : "—"}</div>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400">Contrast Volume</span>
          <div className="font-mono font-bold text-blue-700 mt-0.5">{report.contrastVolumeMl > 0 ? `${report.contrastVolumeMl} mL` : "—"}</div>
        </div>
      </div>

      {/* Operative Narrative */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
          Operative Technique, Findings & Hemostasis Endpoints
        </label>
        <textarea
          rows={6}
          className="w-full rounded-lg border border-slate-200 p-3 text-xs leading-relaxed focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50"
          value={report.technicalFindings}
          onChange={(e) => setReport({ ...report, technicalFindings: e.target.value })}
        />
      </div>

      {/* Complications & Post-Op Orders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block font-bold uppercase tracking-wider text-slate-600 mb-1">
            CIRSE Complication Classification
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 p-2.5 focus:border-blue-500 focus:outline-none disabled:bg-slate-50"
            value={report.complications}
            onChange={(e) => setReport({ ...report, complications: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-bold uppercase tracking-wider text-slate-600 mb-1">
            Immediate Post-Procedure Orders
          </label>
          <textarea
            rows={3}
            className="w-full rounded-lg border border-slate-200 p-2.5 focus:border-blue-500 focus:outline-none disabled:bg-slate-50"
            value={report.postOpOrders}
            onChange={(e) => setReport({ ...report, postOpOrders: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-4 print:hidden">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-lg bg-[#1A73E8] px-4 py-2 text-sm font-medium text-white hover:bg-[#1765CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
        >
          <Printer className="h-4 w-4" /> Print
        </button>
      </div>
    </div>
  );
}
