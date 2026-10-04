"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeadCell,
  TableCell,
  Badge,
  Button,
  Input,
} from "@vascule/ui-kit";
import { UseOpClinicDeskReturn } from "./useOpClinicDesk";
import { CtReviewRecord } from "../useEndoflowStore";
import { getHolidayForDate } from "../../lib/rajasthanHolidays2026";
import {
  Search,
  Eye,
  Plus,
  Building,
  Phone,
  Calendar,
  AlertTriangle,
  Radio,
  ArrowLeft,
  CalendarPlus,
  Pause,
  Play,
  FileText,
  Clock,
  RotateCcw,
} from "lucide-react";

export interface ReviewQueueTableProps {
  desk: UseOpClinicDeskReturn;
  onReturnToDesk?: () => void;
  onNewConsultation?: () => void;
  onReopenInDesk?: (patientId: string) => void;
  onOpenBookingModal?: (patientId: string) => void;
}

export function ReviewQueueTable({
  desk,
  onReturnToDesk,
  onNewConsultation,
  onReopenInDesk,
  onOpenBookingModal,
}: ReviewQueueTableProps) {
  const {
    filteredReviews,
    searchQuery,
    setSearchQuery,
    selectedCenter,
    setSelectedCenter,
    selectedStatus,
    setSelectedStatus,
    loadPatientIntoDesk,
    setShowBookingModal,
    setBookingStep,
    activePopover,
    setActivePopover,
    popoverInput,
    setPopoverInput,
    popoverReason,
    setPopoverReason,
    handleUpdateContact,
    handleUpdateDate,
    handlePostponeReview,
    handleHoldReview,
    handleReactivateReview,
    handleKeepOnCallReview,
  } = desk;

  const handleNewConsultation = () => {
    if (onNewConsultation) {
      onNewConsultation();
    } else {
      loadPatientIntoDesk("new");
    }
  };

  const handleReturnToDesk = () => {
    if (onReturnToDesk) {
      onReturnToDesk();
    }
  };

  const handleReopenInDesk = (reviewId: string) => {
    if (onReopenInDesk) {
      onReopenInDesk(reviewId);
    } else {
      loadPatientIntoDesk(reviewId);
    }
  };

  const handleOpenBooking = (reviewId: string) => {
    if (onOpenBookingModal) {
      onOpenBookingModal(reviewId);
    } else {
      loadPatientIntoDesk(reviewId);
      setBookingStep(1);
      setShowBookingModal(true);
    }
  };

  const holidayInfo = popoverInput ? getHolidayForDate(popoverInput) : null;

  return (
    <div className="space-y-4">
      {/* Top Navigation & Fast Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <div className="space-y-0.5">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Consultation Review Queue ({filteredReviews.length} Records)</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Select a patient to review imaging, schedule for cath-lab, or reopen in consultation desk.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Button
            type="button"
            variant="cobalt"
            size="sm"
            onClick={handleNewConsultation}
            className="flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ New Consultation</span>
          </Button>

          {onReturnToDesk && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleReturnToDesk}
              className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Consultation Desk</span>
            </Button>
          )}
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none" />
          <Input
            type="text"
            size="sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patient, CT number, SMS Bill ID, diagnosis..."
            className="pl-9"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 w-full md:w-auto">
          {/* Hospital Center Filter */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-transparent dark:border-slate-700/60">
            {[
              { key: "all", label: "All Centers" },
              { key: "SONI Hospital", label: "SONI PACS" },
              { key: "SMS Hospital", label: "SMS CT" },
            ].map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setSelectedCenter(c.key)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  selectedCenter === c.key
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-transparent dark:border-slate-700/60">
            {[
              { key: "all", label: "All" },
              { key: "Pending Review", label: "Pending" },
              { key: "Keep On Call (Standby)", label: "On-Call" },
              { key: "Booked in Cath-Lab", label: "Booked" },
            ].map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setSelectedStatus(s.key)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  selectedStatus === s.key
                    ? s.key === "Keep On Call (Standby)"
                      ? "bg-teal-600 text-white shadow-xs"
                      : "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* High-Density CT Review Queue Table */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        {filteredReviews.length === 0 ? (
          <div className="p-12 text-center text-slate-400 dark:text-slate-500 space-y-2">
            <Eye className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600" />
            <p className="font-semibold text-sm text-slate-900 dark:text-slate-200">
              No CT Review records match current filters
            </p>
            <p className="text-xs">
              Select or register a new patient to populate the OPD consultation review queue.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
            <Table density="compact" className="min-w-[900px]">
              <TableHead>
                <TableRow>
                  <TableHeadCell className="w-[220px]">Patient Demographics</TableHeadCell>
                  <TableHeadCell className="w-[180px]">Referring Dept & Center</TableHeadCell>
                  <TableHeadCell className="min-w-[260px]">CT Accession & Findings</TableHeadCell>
                  <TableHeadCell className="w-[170px]">Urgency & Status</TableHeadCell>
                  <TableHeadCell className="w-[210px] text-right">Actions</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredReviews.map((item) => (
                  <TableRow key={item.id} className="align-top">
                    {/* Column 1: Patient Demographics */}
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                          {item.patientName}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 flex-wrap">
                          <span>
                            {item.age}y / {item.sex}
                          </span>
                          <span className="font-mono text-[11px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300">
                            HID: {item.smsBillId}
                          </span>
                        </div>
                        {/* Contact Phone & Edit Popover */}
                        <div className="relative text-xs">
                          {item.contactNumber ? (
                            <a
                              href={`tel:${item.contactNumber}`}
                              className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                            >
                              <Phone className="w-3 h-3 shrink-0" />
                              <span>{item.contactNumber}</span>
                            </a>
                          ) : (
                            <div className="relative inline-block">
                              <button
                                type="button"
                                onClick={() =>
                                  setActivePopover(
                                    activePopover?.id === item.id && activePopover?.type === "contact"
                                      ? null
                                      : { id: item.id, type: "contact" }
                                  )
                                }
                                className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                              >
                                <Phone className="w-3 h-3" />
                                <span>+ Add Contact</span>
                              </button>
                              {activePopover?.id === item.id && activePopover?.type === "contact" && (
                                <div className="absolute left-0 top-full mt-1.5 w-52 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-2 z-20 space-y-1.5">
                                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                                    Patient Contact
                                  </span>
                                  <Input
                                    type="tel"
                                    size="sm"
                                    placeholder="Phone number"
                                    value={popoverInput}
                                    onChange={(e) => setPopoverInput(e.target.value)}
                                  />
                                  <div className="flex justify-end gap-1.5 pt-1">
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => {
                                        setActivePopover(null);
                                        setPopoverInput("");
                                      }}
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="cobalt"
                                      onClick={() => {
                                        handleUpdateContact(item.id, popoverInput);
                                      }}
                                    >
                                      Save
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>

                    {/* Column 2: Referring Dept & Center */}
                    <TableCell>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-1 font-medium text-slate-800 dark:text-slate-200">
                          <Building className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span>{item.hospitalSource || "SONI Hospital"}</span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">
                          {item.referringDepartment || "General Medicine / IR"}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </TableCell>

                    {/* Column 3: CT Accession & Findings */}
                    <TableCell>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                            <Radio className="w-3 h-3 shrink-0" />
                            CT #{item.ctNumber || item.accessionNumber || "N/A"}
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-slate-100">
                            {item.primaryDiagnosis}
                          </span>
                        </div>

                        {item.ctReviewNotes && (
                          <div className="p-2 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-[11px] text-slate-700 dark:text-slate-300">
                            <span className="font-semibold text-blue-700 dark:text-blue-400 block mb-0.5">
                              CECT Findings:
                            </span>
                            <p className="line-clamp-2 leading-relaxed">{item.ctReviewNotes}</p>
                          </div>
                        )}

                        {item.clinicalHistory && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 italic">
                            Course: {item.clinicalHistory}
                          </p>
                        )}
                      </div>
                    </TableCell>

                    {/* Column 4: Urgency & Status Badges */}
                    <TableCell>
                      <div className="space-y-1.5">
                        <div>
                          {item.status === "Keep On Call (Standby)" || item.isOnCall ? (
                            <Badge tone="info" className="bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300 border border-teal-300 dark:border-teal-800">
                              On-Call Standby
                            </Badge>
                          ) : item.status === "Booked in Cath-Lab" ? (
                            <Badge tone="verified">Booked in Cath-Lab</Badge>
                          ) : item.status === "Deferred / Postponed" ? (
                            <Badge tone="holding">Deferred / Postponed</Badge>
                          ) : item.status === "On Hold" ? (
                            <Badge tone="neutral">On Hold</Badge>
                          ) : (
                            <Badge tone="holding">Pending Review</Badge>
                          )}
                        </div>

                        {item.postponedUntilDate && (
                          <div className="text-[10px] text-amber-700 dark:text-amber-300 font-medium">
                            Until {item.postponedUntilDate}
                          </div>
                        )}

                        {item.urgencyCategory && (
                          <span className="inline-block text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                            {item.urgencyCategory}
                          </span>
                        )}
                      </div>
                    </TableCell>

                    {/* Column 5: Action Popovers/Buttons */}
                    <TableCell className="text-right">
                      <div className="flex flex-col items-end gap-1.5">
                        <div className="flex items-center gap-1.5 justify-end">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleReopenInDesk(item.id)}
                            title="Reopen patient notes in Consultation Desk to edit"
                            className="text-xs h-7 px-2"
                          >
                            <ArrowLeft className="w-3 h-3 mr-1 text-blue-600 dark:text-blue-400" />
                            <span>Edit Desk</span>
                          </Button>

                          <Button
                            size="sm"
                            variant="cobalt"
                            onClick={() => handleOpenBooking(item.id)}
                            className="text-xs h-7 px-2.5"
                          >
                            <CalendarPlus className="w-3 h-3 mr-1" />
                            <span>Book Lab</span>
                          </Button>
                        </div>

                        <div className="flex items-center gap-1 justify-end flex-wrap">
                          {/* Give Date Popover */}
                          <div className="relative inline-block text-left">
                            <button
                              type="button"
                              onClick={() =>
                                setActivePopover(
                                  activePopover?.id === item.id && activePopover?.type === "date"
                                    ? null
                                    : { id: item.id, type: "date" }
                                )
                              }
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 transition-colors cursor-pointer"
                            >
                              <CalendarPlus className="w-3 h-3" />
                              <span>Give Date</span>
                            </button>

                            {activePopover?.id === item.id && activePopover?.type === "date" && (
                              <div className="absolute right-0 top-full mt-1.5 w-60 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-2.5 z-20 space-y-2 text-left">
                                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                                  Assign Cath-Lab Date
                                </span>
                                <Input
                                  type="date"
                                  size="sm"
                                  value={popoverInput}
                                  onChange={(e) => setPopoverInput(e.target.value)}
                                />
                                {holidayInfo && (holidayInfo.isHoliday || holidayInfo.isSunday) && (
                                  <div className="text-[10px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-1.5 rounded border border-amber-200 dark:border-amber-800 leading-tight">
                                    <AlertTriangle className="w-3 h-3 inline mr-1 text-amber-600" />
                                    <span>
                                      Holiday: {holidayInfo.name || "Sunday"} ({holidayInfo.type || "Gazetted"})
                                    </span>
                                  </div>
                                )}
                                <div className="flex justify-end gap-1.5 pt-1">
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => {
                                      setActivePopover(null);
                                      setPopoverInput("");
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="cobalt"
                                    disabled={!popoverInput}
                                    onClick={() => {
                                      handleUpdateDate(item.id, popoverInput);
                                    }}
                                  >
                                    Confirm
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Keep On Call Toggle */}
                          <button
                            type="button"
                            onClick={() => {
                              handleKeepOnCallReview(item.id);
                            }}
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer border ${
                              item.status === "Keep On Call (Standby)" || item.isOnCall
                                ? "bg-teal-600 text-white border-teal-600"
                                : "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 hover:bg-teal-100 border-teal-200 dark:border-teal-800"
                            }`}
                          >
                            <Phone className="w-3 h-3" />
                            <span>
                              {item.status === "Keep On Call (Standby)" || item.isOnCall
                                ? "On Standby"
                                : "Keep On Call"}
                            </span>
                          </button>

                          {/* Postpone / Hold Popover */}
                          <div className="relative inline-block text-left">
                            <button
                              type="button"
                              onClick={() =>
                                setActivePopover(
                                  activePopover?.id === item.id && activePopover?.type === "postpone"
                                    ? null
                                    : { id: item.id, type: "postpone" }
                                )
                              }
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 hover:bg-amber-100 border border-amber-200 dark:border-amber-800 transition-colors cursor-pointer"
                            >
                              <Pause className="w-3 h-3" />
                              <span>
                                {item.status === "Booked in Cath-Lab" && item.bookedCaseId
                                  ? "Reschedule"
                                  : "Postpone"}
                              </span>
                            </button>

                            {activePopover?.id === item.id && activePopover?.type === "postpone" && (
                              <div className="absolute right-0 top-full mt-1.5 w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-3 z-20 space-y-2.5 text-left">
                                {item.status === "Booked in Cath-Lab" && item.bookedCaseId ? (
                                  <Link
                                    href={`/dashboard/calendar?highlight=${item.bookedCaseId}`}
                                    className="block w-full text-center px-2 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs rounded-md font-medium"
                                  >
                                    Go to Calendar to Reschedule
                                  </Link>
                                ) : (
                                  <>
                                    <div className="space-y-1.5 pb-2 border-b border-slate-200 dark:border-slate-700">
                                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                                        Postpone to Date
                                      </span>
                                      <Input
                                        type="date"
                                        size="sm"
                                        value={popoverInput}
                                        onChange={(e) => setPopoverInput(e.target.value)}
                                      />
                                      <Input
                                        type="text"
                                        size="sm"
                                        placeholder="Reason (optional)"
                                        value={popoverReason}
                                        onChange={(e) => setPopoverReason(e.target.value)}
                                      />
                                      <Button
                                        size="sm"
                                        variant="cobalt"
                                        className="w-full bg-amber-600 hover:bg-amber-700"
                                        disabled={!popoverInput}
                                        onClick={() => {
                                          handlePostponeReview(item.id, popoverInput, popoverReason);
                                        }}
                                      >
                                        Confirm Postpone
                                      </Button>
                                    </div>

                                    <div className="space-y-1.5 pt-1">
                                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                                        Indefinite Hold
                                      </span>
                                      <Input
                                        type="text"
                                        size="sm"
                                        placeholder="Reason for hold"
                                        value={popoverReason}
                                        onChange={(e) => setPopoverReason(e.target.value)}
                                      />
                                      <Button
                                        size="sm"
                                        variant="secondary"
                                        className="w-full text-slate-700 dark:text-slate-200"
                                        onClick={() => {
                                          handleHoldReview(item.id, popoverReason);
                                        }}
                                      >
                                        Put On Hold
                                      </Button>
                                    </div>
                                  </>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Reactivate Button */}
                          {(item.status === "Deferred / Postponed" || item.status === "On Hold") && (
                            <button
                              type="button"
                              onClick={() => {
                                handleReactivateReview(item.id);
                              }}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 border border-emerald-200 dark:border-emerald-800 transition-colors cursor-pointer"
                            >
                              <Play className="w-3 h-3" />
                              <span>Reactivate</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
