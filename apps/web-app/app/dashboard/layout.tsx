"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GoogleSidebar } from "../components/GoogleSidebar";
import { DataToolsModal } from "../components/DataToolsModal";
import {
  Search,
  Bell,
  HelpCircle,
  Settings,
  ShieldCheck,
  Hospital,
  Activity,
  Plus,
  CheckCircle2,
  X,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<string | null>(null);
  const [showDataTools, setShowDataTools] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("vascule_staff_session");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.code) {
            document.cookie = `vascule_token=auth_${parsed.code}_${Date.now()}; path=/; max-age=86400; SameSite=Lax`;
            document.cookie = `authjs.session-token=mock_session_${parsed.code}; path=/; max-age=86400; SameSite=Lax`;
          }
        }
      }
    } catch {}
  }, []);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus("Case successfully queued in Cath-Lab Booking Matrix.");
    setTimeout(() => {
      setShowBookingModal(false);
      setModalStatus(null);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col font-sans antialiased">
      {/* Google Workspace Style Top Header */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#DADCE0] px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#1A73E8] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              IR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-[#202124] tracking-tight">
                  VascFlow / Vascule OS
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                  SMS Medical College
                </span>
              </div>
              <p className="text-[11px] text-[#5F6368]">
                Department of Radiodiagnosis & Interventional Radiology, Jaipur
              </p>
            </div>
          </Link>
        </div>

        {/* Center Search Bar (Google Style) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6368]" />
            <input
              type="text"
              placeholder="Search patients, CR No, 100 IR procedures, beds (e.g. LICU-01, TACE, BAE)..."
              className="w-full bg-[#F1F3F4] text-[#202124] placeholder-[#5F6368] text-xs rounded-full pl-10 pr-4 py-2 border border-transparent focus:border-[#1A73E8] focus:bg-[#FFFFFF] focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Right Status Badges & Controls */}
        <div className="flex items-center gap-2.5">
          <div className="hidden lg:flex items-center gap-2 bg-[#FFFFFF] border border-[#DADCE0] px-3 py-1 rounded-full text-[11px] font-medium text-[#3C4043]">
            <span className="w-2 h-2 rounded-full bg-[#1E8E3E] animate-pulse" />
            <span>Cath-Lab 1: Online</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-[#FFFFFF] border border-[#DADCE0] px-3 py-1 rounded-full text-[11px] font-medium text-[#3C4043]">
            <Activity className="w-3.5 h-3.5 text-[#1A73E8]" />
            <span>8 Beds Synced</span>
          </div>

          <Link
            href="/dashboard?view=calendar"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-medium shadow-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Admit / Book</span>
          </Link>
        </div>
      </header>

      {/* Main Workspace with GoogleSidebar */}
      <div className="flex-1 flex overflow-hidden">
        <GoogleSidebar onOpenBookingModal={() => setShowBookingModal(true)} onOpenDataTools={() => setShowDataTools(true)} />
        <main className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 lg:p-6">
          {children}
        </main>
      </div>

      {/* Quick Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl w-full max-w-lg shadow-xl p-6 relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  Cath-Lab Case Booking & Admission
                </h3>
                <p className="text-xs text-[#5F6368]">
                  SMS Medical College & Attached Hospitals, Jaipur
                </p>
              </div>
            </div>

            {modalStatus ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#1E8E3E] mx-auto" />
                <p className="text-sm font-semibold text-[#1E8E3E]">
                  {modalStatus}
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickBook} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Patient Name
                    </label>
                    <input
                      required
                      defaultValue="Rajesh Sharma"
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      CR No. / IPD No.
                    </label>
                    <input
                      required
                      defaultValue="SMS-2026-00147"
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Procedure Modality
                    </label>
                    <select
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    >
                      <option value="TACE">TACE (Chemoembolization)</option>
                      <option value="BAE">BAE (Bronchial Embolization)</option>
                      <option value="TIPS">TIPS / DIPS Portal Decompression</option>
                      <option value="PTBD">PTBD Biliary Drainage</option>
                      <option value="EVLA">EVLA Varicose Veins</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Target Bed / Unit
                    </label>
                    <select
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    >
                      <option value="LICU-02">Liver ICU Bed 02 (Vacant)</option>
                      <option value="IR-D03">IR Ward D-03 (Clean)</option>
                      <option value="PACU-02">PACU-02 Holding</option>
                      <option value="SICU-02">SICU-02 Emergency Bay</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                    Clinical Indication
                  </label>
                  <textarea
                    rows={2}
                    defaultValue="Segment VIII HCC with recurrent bleeding. Urgent transarterial chemoembolization."
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="px-4 py-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold transition-colors cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Data Tools Modal */}
      <DataToolsModal isOpen={showDataTools} onClose={() => setShowDataTools(false)} />
    </div>
  );
}
