"use client";

import React from "react";
import Link from "next/link";
import { Film, FileText, ClipboardCheck } from "lucide-react";
import { DicomCinePlayer } from "@/app/components/imaging/DicomCinePlayer";
import type { RealSmsPatientCase } from "@/app/lib/realData/smsCathLabRealData";
import type { ImagingTab } from "./useImagingDossier";

interface ImagingDossierPanelsProps {
  activeCase: RealSmsPatientCase;
  activeTab: ImagingTab;
  setActiveTab: (t: ImagingTab) => void;
}

export function ImagingDossierPanels({
  activeCase,
  activeTab,
  setActiveTab,
}: ImagingDossierPanelsProps) {
  return (
    <div className="space-y-3">
      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-1">
        <button
          type="button"
          onClick={() => setActiveTab("cine")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === "cine"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>🎥 Fluoroscopy Cine Loop</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("opnote")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === "opnote"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>📄 Post-Operative Form</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("discharge")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === "discharge"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <ClipboardCheck className="w-3.5 h-3.5" />
          <span>📋 Discharge Summary</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="flex-1 min-h-[460px]">
        {activeTab === "cine" && (
          <div className="h-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-black">
            <DicomCinePlayer
              src="/samples/splenic_dsa.mp4"
              modality="XA"
              patientName={activeCase.patientName}
              patientId={activeCase.uhid || activeCase.crNumber || `DSA-${activeCase.dsaNo}`}
              seriesDescription={activeCase.procedureName}
              frameRate={15}
              autoPlay={true}
              loop={true}
              className="w-full h-full min-h-[460px]"
            />
          </div>
        )}

        {activeTab === "opnote" && (
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Operative Report Summary</h3>
              <Link
                href={`/dashboard/operative-notes?caseId=${activeCase.dsaNo}`}
                className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Open in Full WordPad Studio &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="font-bold text-slate-400 uppercase text-[10px]">Procedure Details</span>
                <p><strong>Procedure:</strong> {activeCase.procedureName}</p>
                <p><strong>Diagnosis:</strong> {activeCase.diagnosis}</p>
                <p><strong>Access Site:</strong> Right Common Femoral Artery / Radial</p>
                <p><strong>Operator:</strong> {activeCase.primaryOperator || "IR Faculty / Fellow"}</p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-slate-400 uppercase text-[10px]">Technical Metrics</span>
                <p><strong>Fluoroscopy Time:</strong> 12.4 mins</p>
                <p><strong>Contrast Volume:</strong> 45 mL (Omnipaque 350)</p>
                <p><strong>DAP Radiation:</strong> 34.2 Gy.cm²</p>
                <p><strong>Hemostasis:</strong> Manual compression / Angio-Seal</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "discharge" && (
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Clinical Discharge Summary</h3>
              <Link
                href={`/dashboard/discharge?caseId=${activeCase.dsaNo}`}
                className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Open in Full Discharge Card Studio &rarr;
              </Link>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">Discharge Advice:</strong>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                  Complete bed rest for 6 hours post-puncture. Keep puncture site clean and dry. Avoid lifting heavy weights &gt;5kg for 48 hours.
                </p>
              </div>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">RMSCL Prescribed Medications:</strong>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                  Tab Cefixime 200mg BD x 5 days • Tab Paracetamol 650mg TDS PRN • Tab Pantoprazole 40mg OD
                </p>
              </div>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">Follow-Up &amp; Red-Flag Warnings:</strong>
                <p className="text-rose-600 dark:text-rose-400 mt-0.5 font-medium">
                  Review in IR OPD on next scheduled clinic day. Contact emergency immediately in case of puncture site swelling, active bleeding, or fever.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
