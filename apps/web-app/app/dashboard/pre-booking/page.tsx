"use client";

import React, { useState } from "react";
import { useOpdPreBooking } from "./useOpdPreBooking";
import { useBleomycinLedger } from "./useBleomycinLedger";
import { PreBookingHeaderCodes } from "./PreBookingHeaderCodes";
import { GeneralPreBookingForm } from "./GeneralPreBookingForm";
import { PreBookingSafetyChecklist } from "./PreBookingSafetyChecklist";
import { SclerotherapyDatingForm } from "./SclerotherapyDatingForm";
import { SclerotherapySessionTable } from "./SclerotherapySessionTable";
import { TaceDatingForm } from "./TaceDatingForm";
import { BaeDatingForm } from "./BaeDatingForm";
import { BleederDatingForm } from "./BleederDatingForm";
import { BookedProceduresQueue } from "./BookedProceduresQueue";
import { PreBookingPrintModal } from "./PreBookingPrintModal";
import { ProcedureCategory } from "./preBookingTypes";

const CATEGORIES: { key: ProcedureCategory; label: string }[] = [
  { key: "sclerotherapy", label: "Sclerotherapy (AIIMS Delhi)" },
  { key: "tace", label: "TACE (Liver Anatomy)" },
  { key: "bae", label: "BAE (Lungs / Mediastinum)" },
  { key: "bleeder", label: "GI Bleeder (Celiac Axis)" },
  { key: "general", label: "General IR Booking" },
];

export default function PreBookingPage() {
  const [activeTab, setActiveTab] = useState<"book" | "queue">("book");
  const booking = useOpdPreBooking();
  const sclero = useBleomycinLedger();

  const handleConfirmBooking = () => {
    booking.handleBookCase(sclero.details);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 font-sans">
      {/* Top Header & Workspace Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div>
          <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-sm bg-teal-600 inline-block" />
            OPD Dating & Pre-Booking Studio
          </h1>
          <p className="text-xs text-slate-500">
            SMS Medical College & Attached Hospitals, Jaipur &bull; AIIMS Delhi IR Clinical Protocol
          </p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setActiveTab("book")}
            className={`text-xs px-3.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === "book"
                ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            Dating Form
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("queue")}
            className={`text-xs px-3.5 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "queue"
                ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            <span>Booked Queue</span>
            <span className="text-[10px] bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-mono px-1.5 py-0.2 rounded-full font-bold">
              {booking.bookedRecords.length}
            </span>
          </button>
        </div>
      </div>

      {activeTab === "queue" ? (
        <BookedProceduresQueue
          records={booking.bookedRecords}
          filterQuery={booking.filterQuery}
          setFilterQuery={booking.setFilterQuery}
          onSelectPrint={(rec) => booking.setPrintRecord(rec)}
        />
      ) : (
        <div>
          {/* Procedure Category Selector */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">
              Select Protocol:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => booking.handleCategoryChange(cat.key)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all border ${
                  booking.selectedCategory === cat.key
                    ? "bg-teal-700 text-white border-teal-800 shadow-sm ring-1 ring-teal-500"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Top Statutory Codes Banner */}
          <PreBookingHeaderCodes
            icdCode={booking.activeTariff.icd}
            schemeCode={booking.activeTariff.rghsMaay}
            scheme={booking.scheme}
            onSchemeChange={booking.setScheme}
            scheduledDate={booking.scheduledDate}
          />

          {/* Demographics & General Details */}
          <GeneralPreBookingForm
            patientName={booking.patientName}
            setPatientName={booking.setPatientName}
            age={booking.age}
            setAge={booking.setAge}
            sex={booking.sex}
            setSex={booking.setSex}
            contactNumber={booking.contactNumber}
            setContactNumber={booking.setContactNumber}
            location={booking.location}
            setLocation={booking.setLocation}
            crUhid={booking.crUhid}
            setCrUhid={booking.setCrUhid}
            scheduledDate={booking.scheduledDate}
            setScheduledDate={booking.setScheduledDate}
            admissionType={booking.admissionType}
            setAdmissionType={booking.setAdmissionType}
            anesthesiaPlan={booking.anesthesiaPlan}
            setAnesthesiaPlan={booking.setAnesthesiaPlan}
            procedureName={booking.activeTariff.name}
          />

          {/* Mandatory Pre-Booking Safety Checklist */}
          <PreBookingSafetyChecklist
            npoConfirmed={booking.npoConfirmed}
            setNpoConfirmed={booking.setNpoConfirmed}
            plateletCount={booking.plateletCount}
            setPlateletCount={booking.setPlateletCount}
            inr={booking.inr}
            setInr={booking.setInr}
            creatinine={booking.creatinine}
            setCreatinine={booking.setCreatinine}
            egfr={booking.egfr}
            setEgfr={booking.setEgfr}
            viralMarkers={booking.viralMarkers}
            setViralMarkers={booking.setViralMarkers}
            contrastAllergy={booking.contrastAllergy}
            setContrastAllergy={booking.setContrastAllergy}
            consentSigned={booking.consentSigned}
            setConsentSigned={booking.setConsentSigned}
          />

          {/* Specific Procedure Protocols */}
          {booking.selectedCategory === "sclerotherapy" && (
            <>
              <SclerotherapyDatingForm details={sclero.details} updateField={sclero.updateField} />
              <SclerotherapySessionTable
                sessions={sclero.details.sessions}
                onAddSession={sclero.addSession}
                onRemoveSession={sclero.removeSession}
                onUpdateSession={sclero.updateSession}
              />
            </>
          )}

          {booking.selectedCategory === "tace" && (
            <TaceDatingForm tace={booking.tace} setTace={booking.setTace} />
          )}

          {booking.selectedCategory === "bae" && (
            <BaeDatingForm bae={booking.bae} setBae={booking.setBae} />
          )}

          {booking.selectedCategory === "bleeder" && (
            <BleederDatingForm bleeder={booking.bleeder} setBleeder={booking.setBleeder} />
          )}

          {/* Bottom Action Footer */}
          <div className="flex items-center justify-end gap-3 pt-3 pb-8 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={handleConfirmBooking}
              className="text-xs bg-teal-700 hover:bg-teal-800 text-white font-bold px-5 py-2.5 rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              <span>Confirm OPD Date & Generate A4 Slip</span>
            </button>
          </div>
        </div>
      )}

      {/* A4 Print Modal */}
      <PreBookingPrintModal
        record={booking.printRecord}
        onClose={() => booking.setPrintRecord(null)}
      />
    </div>
  );
}
