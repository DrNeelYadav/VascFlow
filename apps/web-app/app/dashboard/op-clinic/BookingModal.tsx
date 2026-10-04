"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Badge,
  Input,
} from "@vascule/ui-kit";
import { UseOpClinicDeskReturn } from "./useOpClinicDesk";
import {
  CalendarPlus,
  Calendar,
  AlertTriangle,
  Phone,
  ShieldAlert,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowLeft,
  Activity,
  FileText,
  Clock,
  CheckSquare,
  Square,
} from "lucide-react";

export interface BookingModalProps {
  desk: UseOpClinicDeskReturn;
  isOpen: boolean;
  onClose: () => void;
}

interface HardwareCheckItem {
  id: string;
  category: "Access" | "Catheter" | "Guidewire" | "Embolic / Device";
  item: string;
  spec: string;
  checked: boolean;
}

const DEFAULT_HARDWARE_ITEMS: HardwareCheckItem[] = [
  {
    id: "hw-1",
    category: "Access",
    item: "Vascular Access Sheath",
    spec: "6F 45cm Destination Sheath / 5F 11cm Radial",
    checked: true,
  },
  {
    id: "hw-2",
    category: "Catheter",
    item: "Selective Diagnostic Catheter",
    spec: "5F Cobra C2 / Simmons 1 / Roberts Uterine",
    checked: true,
  },
  {
    id: "hw-3",
    category: "Guidewire",
    item: "Hydrophilic Stiff Guidewire",
    spec: '0.035" 260cm Terumo Glidewire Angled',
    checked: true,
  },
  {
    id: "hw-4",
    category: "Catheter",
    item: "Microcatheter System",
    spec: '2.7F / 2.4F Progreat with 0.014" Chikai Wire',
    checked: true,
  },
  {
    id: "hw-5",
    category: "Embolic / Device",
    item: "Embolic Agents / Coils / Stent",
    spec: "Microcoils (0.018\" / 0.035\") / PVA Particles / Stent-Graft",
    checked: true,
  },
];

export function BookingModal({ desk, isOpen, onClose }: BookingModalProps) {
  const {
    bookingStep,
    setBookingStep,
    patientName,
    age,
    sex,
    contactNumber,
    primaryDiagnosis,
    clinicalHistory,
    referringDepartment,
    urgencyCategory,
    urgencyLevel,
    setUrgencyLevel,
    effectiveProcedureTitle,
    isOnCallBooking,
    setIsOnCallBooking,
    bookingDate,
    setBookingDate,
    bookingDateHoliday,
    handleConfirmCathLabBooking,
  } = desk;

  const [hardwareItems, setHardwareItems] = useState<HardwareCheckItem[]>(DEFAULT_HARDWARE_ITEMS);
  const [labsVerified, setLabsVerified] = useState({
    inr: true,
    creatinine: true,
    platelets: true,
    npo: true,
    preAuth: true,
  });

  const toggleHardware = (id: string) => {
    setHardwareItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const toggleLab = (key: keyof typeof labsVerified) => {
    setLabsVerified((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleModalClose = () => {
    setBookingStep(1);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleConfirmCathLabBooking(e);
  };

  const quickPresets = [
    { label: "Today", days: 0 },
    { label: "Tmrw", days: 1 },
    { label: "+2d", days: 2 },
    { label: "+3d", days: 3 },
    { label: "+1w", days: 7 },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleModalClose()}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto p-5 sm:p-6">
        <DialogHeader className="space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <CalendarPlus className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Cath-Lab Day-Care &amp; Table Booking
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-500 dark:text-slate-400">
                Direct scheduling into Angiosuite RIS Worklist &amp; Rajasthan MAAY pre-op queue.
              </DialogDescription>
            </div>
          </div>

          {/* 2-Step Progress Indicator */}
          <div className="flex items-center gap-2 pt-2 text-xs">
            <button
              type="button"
              onClick={() => setBookingStep(1)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                bookingStep === 1
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <span>1. Scheduling &amp; Urgency</span>
            </button>
            <span className="text-slate-400">→</span>
            <button
              type="button"
              onClick={() => setBookingStep(2)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                bookingStep === 2
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <span>2. Hardware &amp; Safety Checklist</span>
            </button>
          </div>
        </DialogHeader>

        {/* Patient Demographics Summary Strip */}
        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-1 my-2">
          <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-slate-100">
            <span>
              {patientName.trim() || "OPD Consultation Patient"} ({age || 0}y / {sex})
            </span>
            <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400">
              {effectiveProcedureTitle}
            </span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px]">
            <span>Diagnosis: {primaryDiagnosis.trim() || effectiveProcedureTitle}</span>
            {referringDepartment && <span>Dept: {referringDepartment}</span>}
            {contactNumber && <span>Phone: {contactNumber}</span>}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ========================================================================= */}
          {/* STEP 1: SCHEDULING, URGENCY & HOLIDAY AWARENESS */}
          {/* ========================================================================= */}
          {bookingStep === 1 && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              {/* Mode Switcher: Fixed Date vs On-Call Standby */}
              <div className="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200/60 dark:border-slate-700/60">
                <button
                  type="button"
                  onClick={() => setIsOnCallBooking(false)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    !isOnCallBooking
                      ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
                >
                  Schedule Fixed Date
                </button>
                <button
                  type="button"
                  onClick={() => setIsOnCallBooking(true)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    isOnCallBooking
                      ? "bg-teal-600 text-white shadow-xs"
                      : "text-teal-700 dark:text-teal-400 hover:text-teal-800"
                  }`}
                >
                  Keep On Call (Standby)
                </button>
              </div>

              {!isOnCallBooking ? (
                <>
                  {/* Urgency Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Triage Urgency Level
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        {
                          level: "Elective" as const,
                          desc: "Standard elective slot",
                          activeCls: "bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-950/60 dark:border-blue-500 dark:text-blue-300",
                        },
                        {
                          level: "Urgent" as const,
                          desc: "Within 24-48 hours",
                          activeCls: "bg-amber-50 border-amber-500 text-amber-700 dark:bg-amber-950/60 dark:border-amber-500 dark:text-amber-300",
                        },
                        {
                          level: "Emergency" as const,
                          desc: "Immediate / STAT Table",
                          activeCls: "bg-rose-50 border-rose-500 text-rose-700 dark:bg-rose-950/60 dark:border-rose-500 dark:text-rose-300",
                        },
                      ].map((item) => (
                        <button
                          key={item.level}
                          type="button"
                          onClick={() => setUrgencyLevel(item.level)}
                          className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                            urgencyLevel === item.level
                              ? item.activeCls
                              : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          <div className="font-semibold text-xs">{item.level}</div>
                          <div className="text-[10px] opacity-75">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selector & Presets */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Cath-Lab Procedure Date</span>
                      </label>
                      <div className="flex items-center gap-1">
                        {quickPresets.map((preset) => {
                          const targetD = new Date(Date.now() + preset.days * 86400000)
                            .toISOString()
                            .split("T")[0];
                          return (
                            <button
                              key={preset.label}
                              type="button"
                              onClick={() => setBookingDate(targetD)}
                              className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                                bookingDate === targetD
                                  ? "bg-blue-600 text-white"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                              }`}
                            >
                              {preset.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <Input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="font-medium"
                    />

                    {/* Rajasthan Government Holiday Alert */}
                    {(bookingDateHoliday.isHoliday || bookingDateHoliday.isSunday) && (
                      <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-amber-800 dark:text-amber-300 flex items-start gap-2 text-xs">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Rajasthan Holiday Alert:</strong> {bookingDateHoliday.name || "Sunday"} is a{" "}
                          {bookingDateHoliday.type || "Gazetted"} holiday in Rajasthan. Elective slots require senior faculty pre-approval.
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* On-Call Standby Notice */
                <div className="p-3.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-xs">
                    <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>On-Call Standby Roster Activated</span>
                  </div>
                  <p className="text-xs text-teal-800 dark:text-teal-300 leading-relaxed">
                    Patient will be registered into the institutional standby roster without locking an elective calendar slot.
                    The team will notify <strong>{patientName || "the patient"}</strong> ({contactNumber || "No contact recorded"}) in case of procedure cancellation or postponement.
                  </p>
                </div>
              )}

              {/* Procedure Title Preview */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Target IR Procedure Protocol
                </label>
                <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-900 dark:text-slate-100 flex items-center justify-between">
                  <span>{effectiveProcedureTitle}</span>
                  <Badge tone="info" className="text-[10px]">
                    Verified Protocol
                  </Badge>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: PROTOCOL HARDWARE CHECKLIST & PRE-OP SAFETY */}
          {/* ========================================================================= */}
          {bookingStep === 2 && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              {/* Hardware Checklist Block */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Protocol Hardware Verification Checklist</span>
                  </label>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Verify stock availability in Angiosuite 01
                  </span>
                </div>

                <div className="space-y-1.5 rounded-lg border border-slate-200 dark:border-slate-700 p-2.5 bg-slate-50/50 dark:bg-slate-800/40">
                  {hardwareItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleHardware(item.id)}
                      className="flex items-start gap-2.5 p-1.5 rounded hover:bg-white dark:hover:bg-slate-700/60 cursor-pointer transition-colors"
                    >
                      <button type="button" className="mt-0.5 text-blue-600 dark:text-blue-400">
                        {item.checked ? (
                          <CheckSquare className="w-4 h-4" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                      <div className="text-xs space-y-0.5">
                        <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                          <span>{item.item}</span>
                          <span className="text-[10px] px-1 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {item.category}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {item.spec}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pre-Op Lab & Safety Reminders */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Pre-Op Lab &amp; Clinical Safety Verification</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    {
                      key: "inr" as const,
                      label: "Coagulation Profile (INR ≤ 1.5)",
                      desc: "FFP / Vit K protocol if elevated",
                    },
                    {
                      key: "creatinine" as const,
                      label: "Serum Creatinine / CI-AKI",
                      desc: "Cigarroa MACD hydration rule",
                    },
                    {
                      key: "platelets" as const,
                      label: "Platelets (≥ 50,000 / µL)",
                      desc: "RDP transfusion standby",
                    },
                    {
                      key: "npo" as const,
                      label: "NPO Status Verified",
                      desc: "6h solids, 2h clear liquids",
                    },
                    {
                      key: "preAuth" as const,
                      label: "MAAY / RGHS Pre-Auth",
                      desc: "TID generated & signed",
                    },
                  ].map((lab) => (
                    <div
                      key={lab.key}
                      onClick={() => toggleLab(lab.key)}
                      className={`p-2 rounded-lg border flex items-start gap-2 cursor-pointer transition-colors ${
                        labsVerified[lab.key]
                          ? "bg-emerald-50/60 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                          : "bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <button type="button" className="mt-0.5 text-emerald-600 dark:text-emerald-400">
                        {labsVerified[lab.key] ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      <div className="space-y-0.5">
                        <div className="font-semibold text-[11px]">{lab.label}</div>
                        <div className="text-[10px] opacity-80">{lab.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Dialog Action Buttons */}
          <DialogFooter className="flex items-center justify-between sm:justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
            {bookingStep === 1 ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleModalClose}
                className="text-slate-500"
              >
                Cancel
              </Button>
            ) : (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setBookingStep(1)}
                className="flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Back</span>
              </Button>
            )}

            <div className="flex items-center gap-2">
              {bookingStep === 1 ? (
                <Button
                  type="button"
                  variant="cobalt"
                  size="sm"
                  onClick={() => setBookingStep(2)}
                  className="flex items-center gap-1.5"
                >
                  <span>Continue to Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="cobalt"
                  size="sm"
                  className={
                    isOnCallBooking
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }
                >
                  {isOnCallBooking ? "Confirm & Place On Call" : "Confirm & Book Cath-Lab"}
                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
