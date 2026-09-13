"use client";

import React, { useState, useEffect } from "react";
import { Button, Card } from "@vascule/ui-kit";
import { VitalsDashboard } from "@vascule/feature-patient-vitals";
import { BookingMatrix } from "@vascule/feature-ot-scheduling";
import {
  CalendarPlus,
  UserPlus,
  Radio,
  Clock,
  Zap,
  Activity,
  Calendar,
  CheckCircle2,
  X,
} from "lucide-react";

/**
 * Vascule OS Mobius Loop Monogram
 * Represents continuous vascular circulation, topological flow, and zero-latency clinical execution.
 */
function MobiusLoopMonogram({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(37,99,235,0.45)]"
      >
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="#1E293B"
          strokeWidth="1"
          strokeDasharray="3 4"
          className="animate-spin-slow opacity-40"
        />
        <path
          d="M 32 38 C 16 38 10 46 10 50 C 10 54 16 62 32 62 C 48 62 54 48 68 38 C 82 28 90 38 90 50 C 90 58 84 62 76 62 C 64 62 52 48 38 38"
          stroke="#3B82F6"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />
        <path
          d="M 68 62 C 84 62 90 54 90 50 C 90 46 84 38 68 38 C 52 38 46 52 32 62 C 18 72 10 62 10 50 C 10 42 16 38 24 38 C 36 38 48 52 62 62"
          stroke="#2563EB"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="50" r="2.5" fill="#FFFFFF" className="animate-ping opacity-60" />
        <circle cx="68" cy="50" r="2.5" fill="#60A5FA" className="animate-pulse" />
      </svg>
    </div>
  );
}

export default function ClinicalLandingShell() {
  const [currentTime, setCurrentTime] = useState<string>("12:30:44");
  const [activeTab, setActiveTab] = useState<"vitals" | "scheduling">("vitals");
  const [activeModal, setActiveModal] = useState<"book" | "admit" | null>(null);
  const [modalNotice, setModalNotice] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleConfirmAction = (title: string) => {
    setModalNotice(`${title} initiated successfully. Protocol dispatched to Angio Suite 1.`);
    setTimeout(() => {
      setActiveModal(null);
      setModalNotice(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] flex flex-col selection:bg-[#2563EB] selection:text-[#FFFFFF]">
      {/* Top Clinical App Bar */}
      <header className="sticky top-0 z-40 border-b border-[#1E293B] bg-[#000000]/90 backdrop-blur-md px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <MobiusLoopMonogram />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold tracking-tight text-white uppercase font-heading">
                  Vascule OS
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-[#111827] text-[#60A5FA] border border-[#1E293B]">
                  Angio Suite 01
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#94A3B8] tracking-wider uppercase">
                Operating Level 4 // High-Acuity IR
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2 bg-[#090A0F] border border-[#1E293B] px-3 py-1.5 rounded-lg">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#94A3B8]">DICOM C-STORE:</span>
              <span className="text-[#10B981] font-semibold">ONLINE (0.4ms)</span>
            </div>
            <div className="flex items-center gap-2 bg-[#090A0F] border border-[#1E293B] px-3 py-1.5 rounded-lg">
              <Radio className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
              <span className="text-[#94A3B8]">EMR MESH:</span>
              <span className="text-white font-semibold">ENCRYPTED TLS 1.3</span>
            </div>
            <div className="flex items-center gap-2 bg-[#090A0F] border border-[#1E293B] px-3 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span className="text-white font-semibold tabular-nums">{currentTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-white">Dr. A. Sterling, MD</p>
              <p className="text-[10px] font-mono text-[#94A3B8]">Interventional Specialist</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-center text-xs font-bold text-[#60A5FA]">
              AS
            </div>
          </div>
        </div>
      </header>

      {/* Main Clinical Shell Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Hero Clinical Banner & Quick Actions */}
        <section className="relative overflow-hidden rounded-2xl border border-[#1E293B] bg-gradient-to-b from-[#090A0F] to-[#000000] p-6 sm:p-8">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1E293B]/60 border border-[#334155] text-[11px] font-mono text-[#93C5FD]">
                <Zap className="w-3 h-3 text-[#38BDF8]" />
                SUB-SECOND INTERVENTIONAL WORKFLOW ARCHITECTURE
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
                The speed of thought in the Angio Suite.
              </h1>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Vascule OS delivers zero-latency vascular case execution, instant telemetry aggregation,
                and millisecond fluoroscopy dosimetry synchronization directly to the surgical sterile field.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Button
                variant="cobalt"
                size="lg"
                onClick={() => setActiveModal("book")}
                className="gap-2 font-medium shadow-cobalt-glow"
              >
                <CalendarPlus className="w-4 h-4" />
                Book a Case
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setActiveModal("admit")}
                className="gap-2 font-medium"
              >
                <UserPlus className="w-4 h-4" />
                Admit a Case
              </Button>
            </div>
          </div>
        </section>

        {/* Clinical Domain View Tabs */}
        <div className="flex border-b border-[#1E293B] bg-[#000000]">
          <button
            onClick={() => setActiveTab("vitals")}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === "vitals"
                ? "border-[#2563EB] text-white"
                : "border-transparent text-[#94A3B8] hover:text-white"
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
            Patient Biometrics & Hemodynamic Telemetry
          </button>
          <button
            onClick={() => setActiveTab("scheduling")}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === "scheduling"
                ? "border-[#2563EB] text-white"
                : "border-transparent text-[#94A3B8] hover:text-white"
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
            Operating Theatre & Suite Scheduling Matrix
          </button>
        </div>

        {/* Domain Isolated Components */}
        <div className="transition-opacity duration-200">
          {activeTab === "vitals" ? (
            <VitalsDashboard />
          ) : (
            <BookingMatrix
              onBookCase={() => setActiveModal("book")}
              onAdmitCase={() => setActiveModal("admit")}
            />
          )}
        </div>
      </main>

      {/* Institutional Signoff Footer */}
      <footer className="border-t border-[#1E293B] bg-[#000000] py-6 px-6 mt-12 text-xs font-mono text-[#94A3B8]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MobiusLoopMonogram className="w-5 h-5" />
            <span className="text-white font-semibold">VASCULE OS</span>
            <span>— The speed of thought in the Angio Suite.</span>
          </div>
          <div>All rights reserved. Institutional Vascular Surgical Architecture.</div>
        </div>
      </footer>

      {/* Quick Action Trigger Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card
            variant="oled"
            className="w-full max-w-lg bg-[#090A0F] border-[#1E293B] shadow-2xl p-6 relative space-y-5"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center text-[#60A5FA]">
                {activeModal === "book" ? (
                  <CalendarPlus className="w-5 h-5" />
                ) : (
                  <UserPlus className="w-5 h-5" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {activeModal === "book" ? "Book a Clinical Case" : "Admit a Patient Case"}
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  {activeModal === "book"
                    ? "Schedule an interventional suite procedure"
                    : "Direct admission to Angio Holding Bay"}
                </p>
              </div>
            </div>

            {modalNotice ? (
              <div className="p-3 bg-[#064E3B]/40 border border-[#10B981] rounded-lg text-xs font-mono text-[#10B981] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {modalNotice}
              </div>
            ) : (
              <div className="flex items-center justify-end gap-3 pt-2">
                <Button variant="ghost" onClick={() => setActiveModal(null)}>
                  Cancel
                </Button>
                <Button
                  variant="cobalt"
                  onClick={() =>
                    handleConfirmAction(
                      activeModal === "book" ? "Case Reservation" : "Patient Intake"
                    )
                  }
                >
                  {activeModal === "book" ? "Confirm & Reserve Suite" : "Admit to Suite Holding"}
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
