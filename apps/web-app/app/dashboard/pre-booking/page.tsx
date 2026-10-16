"use client";

import React from "react";
import { usePreBookingStudio } from "./usePreBookingStudio";
import { PreBookingPatientBar } from "./PreBookingPatientBar";
import { PreBookingSheetRenderer } from "./PreBookingSheetRenderer";
import { BookedProceduresQueue } from "./BookedProceduresQueue";
import { ClinicalPipelineHeader } from "../common/ClinicalPipelineHeader";
import { Table, FileText, PlusCircle, ArrowLeft, Printer } from "lucide-react";

export default function PreBookingPage() {
  const {
    patients,
    viewMode,
    setViewMode,
    filterQuery,
    setFilterQuery,
    selectedCategory,
    setSelectedCategory,
    isPrepopulated,
    patientName,
    setPatientName,
    age,
    setAge,
    sex,
    setSex,
    uhid,
    setUhid,
    contactNumber,
    setContactNumber,
    location,
    unit,
    scheduledDate,
    setScheduledDate,
    displayRecords,
    handleSelectPatient,
    handleSelectCaseFromQueue,
    handleNewDatingForm,
    handleModeChange,
    handlePrint,
    handleReschedule,
  } = usePreBookingStudio();

  return (
    <div className="max-w-6xl mx-auto px-2 py-4 font-sans select-none">
      {/* 1. Harmonized 5-Stage Clinical Pipeline Header */}
      <ClinicalPipelineHeader
        currentStage="pre-booking"
        title="Booking Clinic &amp; Procedural Dating Studio"
        subtitle="Cath-lab scheduling review queue, A4 pre-operative dating sheets, and anatomical outflow diagrams."
        activePatient={
          patientName
            ? {
                name: patientName,
                crUhid: uhid,
                ageSex: [age ? `${age}y` : "", sex].filter(Boolean).join(" / "),
              }
            : undefined
        }
        actions={
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode("queue")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === "queue"
                    ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-bold shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Scheduled Queue ({displayRecords.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("form")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === "form"
                    ? "bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 font-bold shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>A4 Dating Form</span>
              </button>
            </div>

            {viewMode === "queue" ? (
              <button
                type="button"
                onClick={handleNewDatingForm}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>New Dating Sheet</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print A4 Sheet</span>
              </button>
            )}
          </div>
        }
      />

      {/* 2. MODE A: Scheduled Cases Review Queue (Default Landing View) */}
      {viewMode === "queue" && (
        <div className="space-y-4">
          <BookedProceduresQueue
            records={displayRecords}
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            onSelectPrint={handleSelectCaseFromQueue}
            onUpdateDate={handleReschedule}
          />
        </div>
      )}

      {/* 3. MODE B: Dual-Page A4 Dating Form */}
      {viewMode === "form" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 print:hidden">
            <button
              type="button"
              onClick={() => setViewMode("queue")}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Scheduled Queue</span>
            </button>
            <div className="text-xs text-slate-500">
              Protocol: <strong className="text-slate-900 dark:text-slate-100 uppercase">{selectedCategory}</strong>
            </div>
          </div>

          <PreBookingPatientBar
            patients={patients}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            patientName={patientName}
            setPatientName={setPatientName}
            age={age}
            setAge={setAge}
            sex={sex}
            setSex={setSex}
            uhid={uhid}
            setUhid={setUhid}
            contactNumber={contactNumber}
            setContactNumber={setContactNumber}
            scheduledDate={scheduledDate}
            setScheduledDate={setScheduledDate}
            isPrepopulated={isPrepopulated}
            setIsPrepopulated={handleModeChange}
            onSelectPatient={handleSelectPatient}
            onPrint={handlePrint}
          />

          <div className="print:p-0 print:m-0 space-y-6 print:space-y-0">
            <PreBookingSheetRenderer
              selectedCategory={selectedCategory}
              patientName={patientName}
              age={age}
              sex={sex}
              uhid={uhid}
              contactNumber={contactNumber}
              location={location}
              unit={unit}
              scheduledDate={scheduledDate}
            />
          </div>
        </div>
      )}
    </div>
  );
}
