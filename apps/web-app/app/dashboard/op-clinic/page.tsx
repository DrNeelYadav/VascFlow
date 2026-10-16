"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  AlertTriangle,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import { DoubleSaveGoogleDriveModal } from "../../components/DoubleSaveGoogleDriveModal";
import { useOpClinicDesk } from "./useOpClinicDesk";
import { ConsultationDeskForm } from "./ConsultationDeskForm";
import { ClinicalPipelineHeader } from "../common/ClinicalPipelineHeader";

export default function OpClinicConsultationDeskPage() {
  const desk = useOpClinicDesk();
  const [isDoubleSaveOpen, setIsDoubleSaveOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-2 py-4 pb-12 font-sans select-none space-y-4">
      {/* 1. Harmonized 5-Stage Clinical Pipeline Header */}
      <ClinicalPipelineHeader
        currentStage="op-clinic"
        title="OPD Consultation &amp; Triage Desk"
        subtitle="Outpatient intake, clinical disposition matrix, and Day-Care Cath-Lab scheduling."
        activePatient={
          desk.patientName
            ? {
                name: desk.patientName,
                crUhid: desk.accessionNumber,
                ageSex: [desk.age ? `${desk.age}y` : "", desk.sex].filter(Boolean).join(" / "),
              }
            : undefined
        }
        actions={
          <button
            type="button"
            onClick={() => setIsDoubleSaveOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors shadow-2xs active:scale-95 cursor-pointer shrink-0"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Double-Save (Drive &amp; Sheets)</span>
          </button>
        }
      />

      {/* Cloud Sync Failure Alert */}
      {desk.syncAlert && (
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs font-medium flex items-center justify-between shadow-xs animate-in fade-in slide-in-from-top-1">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{desk.syncAlert}</span>
          </div>
          <button
            type="button"
            onClick={desk.clearSyncAlert}
            className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 hover:bg-amber-200 dark:hover:bg-amber-800 text-amber-900 dark:text-amber-200 text-xs font-bold cursor-pointer transition shrink-0"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Success Notification Banner */}
      {desk.successBanner && (
        <div className="p-3.5 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium flex items-center justify-between shadow-xs animate-in fade-in slide-in-from-top-1">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{desk.successBanner.message}</span>
          </div>
          {desk.successBanner.linkHref && (
            <Link
              href={desk.successBanner.linkHref}
              className="underline font-semibold hover:opacity-80 transition-opacity ml-2 shrink-0 cursor-pointer"
            >
              {desk.successBanner.linkLabel}
            </Link>
          )}
        </div>
      )}

      {/* Single Clean Consultation Desk */}
      <ConsultationDeskForm desk={desk} />

      {/* Double-Save Google Drive & Sheets Modal */}
      <DoubleSaveGoogleDriveModal
        isOpen={isDoubleSaveOpen}
        onClose={() => setIsDoubleSaveOpen(false)}
      />
    </div>
  );
}
