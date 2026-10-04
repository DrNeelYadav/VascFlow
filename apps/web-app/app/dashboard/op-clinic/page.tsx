"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  ClipboardList,
  Eye,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import {
  useOpClinicDesk,
  URGENCY_OPTIONS,
  ORGAN_SYSTEM_OPTIONS,
  BLANK_PATIENT_FORM,
} from "./useOpClinicDesk";
import { ConsultationDeskForm } from "./ConsultationDeskForm";
import { ReviewQueueTable } from "./ReviewQueueTable";
import { BookingModal } from "./BookingModal";

export default function OpClinicConsultationDeskPage() {
  const desk = useOpClinicDesk();
  const [activeTab, setActiveTab] = useState<"desk" | "queue">("desk");

  return (
    <div className="space-y-5 max-w-7xl mx-auto pb-12">
      {/* 1. OPD Header & Tab Switcher */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
            <Stethoscope className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
              OPD Consultation &amp; Triage Desk
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Outpatient intake, clinical disposition matrix, and Day-Care Cath-Lab scheduling.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* Segmented Control Mode Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 border border-transparent dark:border-slate-700/60 p-1 rounded-xl shrink-0 self-stretch sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("desk")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "desk"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Consultation Desk</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("queue")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "queue"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Review Queue ({desk.ctReviews.length})</span>
            </button>
          </div>
        </div>
      </div>

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

      {/* Active Tab View */}
      {activeTab === "desk" ? (
        <ConsultationDeskForm desk={desk} />
      ) : (
        <ReviewQueueTable
          desk={desk}
          onReturnToDesk={() => setActiveTab("desk")}
          onNewConsultation={() => {
            desk.loadPatientIntoDesk("new");
            setActiveTab("desk");
          }}
          onReopenInDesk={(id) => {
            desk.loadPatientIntoDesk(id);
            setActiveTab("desk");
          }}
          onOpenBookingModal={(id) => {
            desk.loadPatientIntoDesk(id);
            desk.setBookingStep(1);
            desk.setShowBookingModal(true);
          }}
        />
      )}

      {/* Cath-Lab Booking Modal */}
      <BookingModal
        desk={desk}
        isOpen={desk.showBookingModal}
        onClose={() => desk.setShowBookingModal(false)}
      />
    </div>
  );
}
