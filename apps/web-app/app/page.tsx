"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  authenticateStaff,
  INSTITUTIONAL_STAFF_ACCOUNTS,
  StaffAccount,
  StaffRole,
  getStaffPermissions,
  UNIVERSAL_PASSWORD,
} from "./lib/staffAccounts";
import { useEndoflowStore } from "./dashboard/useEndoflowStore";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Stethoscope,
  HeartPulse,
  Activity,
  BedDouble,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building,
  Radio,
  FileText,
  Users,
} from "lucide-react";

export default function ClinicalLandingPage() {
  const router = useRouter();
  const setCurrentStaff = useEndoflowStore((s) => s.setCurrentStaff);

  const [staffCode, setStaffCode] = useState<string>("DM01");
  const [password, setPassword] = useState<string>("123456");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [activeRoleTab, setActiveRoleTab] = useState<
    "FACULTY" | "DM_RESIDENT" | "SENIOR_RESIDENT" | "NURSING_OFFICER" | "CATHLAB_TECHNICIAN"
  >("DM_RESIDENT");

  // Selected staff metadata preview
  const selectedStaffAccount = INSTITUTIONAL_STAFF_ACCOUNTS.find(
    (s) => s.code.toUpperCase() === staffCode.trim().toUpperCase()
  );

  const permissions = selectedStaffAccount
    ? getStaffPermissions(selectedStaffAccount.role)
    : getStaffPermissions("DOCTOR");

  const handlePresetSelect = (code: string) => {
    setStaffCode(code);
    setPassword("123456");
    setErrorMsg(null);
    const matched = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === code);
    if (matched) {
      setActiveRoleTab(matched.tier);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    const staff = authenticateStaff(staffCode, password);
    if (!staff) {
      setErrorMsg("Invalid Institutional Staff ID or PIN. Universal PIN is 123456.");
      setIsSubmitting(false);
      return;
    }

    // Set store and localStorage
    setCurrentStaff(staff);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("vascule_staff_session", JSON.stringify(staff));
        document.cookie = `vascule_token=auth_${staff.code}_${Date.now()}; path=/; SameSite=Lax`;
        document.cookie = `authjs.session-token=mock_session_${staff.code}; path=/; SameSite=Lax`;
      }
    } catch {
      // Safe fallback
    }

    setTimeout(() => {
      router.push("/dashboard");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col font-sans antialiased selection:bg-[#E8F0FE] selection:text-[#1A73E8]">
      {/* Top Google Workspace Style Header */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#DADCE0] px-4 lg:px-8 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#1A73E8] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              IR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-[#202124] tracking-tight">
                  VascFlow / Vascule OS
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                  SMS Hospital, Jaipur
                </span>
              </div>
              <p className="text-[11px] text-[#5F6368]">
                Department of Radiodiagnosis & Interventional Radiology
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-[#5F6368]">
            <div className="flex items-center gap-1.5 bg-[#F1F3F4] px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#1E8E3E] animate-pulse" />
              <span>Angiosuites 1 & 2 Active</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F1F3F4] px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
              <span>Institutional RBAC Verified</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-10">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0FE] border border-[#D2E3FC] text-xs font-semibold text-[#1A73E8]">
            <Sparkles className="w-3.5 h-3.5" />
            Sawai Man Singh Medical College & Attached Hospitals, Jaipur
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202124] tracking-tight leading-tight">
            Interventional Radiology & Endovascular Surgery System
          </h1>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed max-w-2xl mx-auto">
            EndoFlow clinical cockpit tailored for DM Fellows, Senior Residents, Faculty, Nursing Officers,
            and Cath-Lab Technicians. Features sub-second fluoroscopy telemetry, SIR disease guidance, and an 8-bed inpatient matrix.
          </p>
        </section>

        {/* Two-Column Grid: Left Feature Highlights, Right Institutional Login Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Clinical Highlights */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#5F6368] mb-1">
              Core Angiosuite Workflows
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Card 1 */}
              <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] hover:border-[#1A73E8] hover:shadow-sm transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center mb-2.5">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#202124]">
                  100+ IR Procedure Catalog
                </h3>
                <p className="text-xs text-[#5F6368] mt-1 leading-normal">
                  Endovascular arterial interventions (TACE, BAE, SFA Stenting), venous procedures (TIPS, DIPS, BRTO), and non-vascular drainage.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] hover:border-[#1A73E8] hover:shadow-sm transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#E6F4EA] text-[#137333] flex items-center justify-center mb-2.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#202124]">
                  Clinical Protocols & Calculators
                </h3>
                <p className="text-xs text-[#5F6368] mt-1 leading-normal">
                  Automated lab workups, pre-scan anatomical roadmaps (RHV/MHV/LHV, IVC web), Rotterdam score, and MELD 3.0 decision support.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] hover:border-[#1A73E8] hover:shadow-sm transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FEF7E0] text-[#B06000] flex items-center justify-center mb-2.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#202124]">
                  DM Resident OPD Booking
                </h3>
                <p className="text-xs text-[#5F6368] mt-1 leading-normal">
                  Eliminates lost patient diary records, facilitates 1-click rescheduling, and triggers 1-day advance reminder call notifications.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] hover:border-[#1A73E8] hover:shadow-sm transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FCE8E6] text-[#C5221F] flex items-center justify-center mb-2.5">
                  <BedDouble className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#202124]">
                  8-Bed Inpatient Care Matrix
                </h3>
                <p className="text-xs text-[#5F6368] mt-1 leading-normal">
                  Dedicated 3 ICU Beds (ICU-01 to ICU-03) and 5 Ward Beds (Ward-01 to Ward-05) with puncture site hemostasis checks.
                </p>
              </div>
            </div>

            {/* Institutional Roster Overview */}
            <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#202124] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#1A73E8]" />
                  Verified Institutional Accounts (20 Total)
                </span>
                <span className="text-[11px] font-mono text-[#5F6368]">
                  Password: <span className="font-bold text-[#202124]">123456</span>
                </span>
              </div>
              <p className="text-[#5F6368] leading-relaxed">
                4 Faculty (FC01–FC04) • 2 DM Residents (DM01–DM02) • 2 Senior Residents (SR01–SR02) • 6 Nursing Officers (NO01–NO06) • 6 Cath-Lab Technicians (TC01–TC06).
              </p>
            </div>
          </div>

          {/* Right Column: Institutional Staff Login Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#DADCE0] pb-4 mb-5">
                <div>
                  <h2 className="text-lg font-bold text-[#202124] flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#1A73E8]" />
                    Institutional Staff Authentication
                  </h2>
                  <p className="text-xs text-[#5F6368] mt-0.5">
                    Select your clinical role or enter your Staff ID
                  </p>
                </div>
                <span className="px-2 py-1 text-[10px] font-mono font-semibold rounded-md bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                  PIN: 123456
                </span>
              </div>

              {/* Quick Role Selector Tabs */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-[#3C4043] mb-2">
                  Role Quick Presets:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handlePresetSelect("DM01")}
                    className={`px-2 py-2 text-center rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      staffCode === "DM01"
                        ? "bg-[#1A73E8] text-white border-[#1A73E8] shadow-xs"
                        : "bg-[#FFFFFF] text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    DM01
                    <span className="block text-[9px] font-normal opacity-85">Dr. Neel</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePresetSelect("FC01")}
                    className={`px-2 py-2 text-center rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      staffCode === "FC01"
                        ? "bg-[#1A73E8] text-white border-[#1A73E8] shadow-xs"
                        : "bg-[#FFFFFF] text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    FC01
                    <span className="block text-[9px] font-normal opacity-85">Dr. Meenu</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePresetSelect("SR01")}
                    className={`px-2 py-2 text-center rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      staffCode === "SR01"
                        ? "bg-[#1A73E8] text-white border-[#1A73E8] shadow-xs"
                        : "bg-[#FFFFFF] text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    SR01
                    <span className="block text-[9px] font-normal opacity-85">Dr. Pragati</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePresetSelect("NO01")}
                    className={`px-2 py-2 text-center rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      staffCode === "NO01"
                        ? "bg-[#1E8E3E] text-white border-[#1E8E3E] shadow-xs"
                        : "bg-[#FFFFFF] text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    NO01
                    <span className="block text-[9px] font-normal opacity-85">Nurse Geeta</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePresetSelect("TC01")}
                    className={`px-2 py-2 text-center rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      staffCode === "TC01"
                        ? "bg-[#E37400] text-white border-[#E37400] shadow-xs"
                        : "bg-[#FFFFFF] text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    TC01
                    <span className="block text-[9px] font-normal opacity-85">Tech Ramesh</span>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3C4043] mb-1">
                    Staff Code / Identifier
                  </label>
                  <input
                    type="text"
                    required
                    value={staffCode}
                    onChange={(e) => {
                      setStaffCode(e.target.value.toUpperCase());
                      setErrorMsg(null);
                    }}
                    placeholder="e.g. DM01, FC01, SR01, NO01, TC01"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-sm text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] focus:outline-none uppercase font-mono transition-all"
                  />
                  <p className="text-[11px] text-[#5F6368] mt-1">
                    Valid IDs: FC01–FC04, DM01–DM02, SR01–SR02, NO01–NO06, TC01–TC06
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3C4043] mb-1">
                    Security PIN / Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorMsg(null);
                    }}
                    placeholder="Universal PIN: 123456"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-sm text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] focus:outline-none transition-all"
                  />
                </div>

                {/* Selected Staff Profile Card */}
                {selectedStaffAccount && (
                  <div className="p-3 rounded-lg border border-[#D2E3FC] bg-[#F8F9FA] text-xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#E8F0FE] text-[#1A73E8] font-bold flex items-center justify-center text-xs">
                        {selectedStaffAccount.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-[#202124]">
                          {selectedStaffAccount.name}
                        </p>
                        <p className="text-[11px] text-[#5F6368]">
                          {selectedStaffAccount.title} • {selectedStaffAccount.department}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                        selectedStaffAccount.role === "DOCTOR"
                          ? "bg-[#E8F0FE] text-[#1A73E8]"
                          : selectedStaffAccount.role === "NURSE"
                          ? "bg-[#E6F4EA] text-[#137333]"
                          : "bg-[#FEF7E0] text-[#B06000]"
                      }`}
                    >
                      {selectedStaffAccount.role}
                    </span>
                  </div>
                )}

                {/* Role Permission Scope Preview */}
                <div className="text-[11px] text-[#5F6368] bg-[#F1F3F4] p-3 rounded-lg border border-[#DADCE0] space-y-1">
                  <p className="font-semibold text-[#3C4043]">
                    Authorized Dashboard Access Scope:
                  </p>
                  {permissions.isDoctor && (
                    <p className="text-[#1A73E8] font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Full Authority: DM OPD Case Booking, Rotterdam Guidance, Active Cath-Lab, 8 Beds, & Discharge Cards.
                    </p>
                  )}
                  {permissions.isNurse && (
                    <p className="text-[#137333] font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Nursing Authority: 8-Bed Ward/ICU Bedside Vitals, Hemostasis Monitoring, and Bed Transfers.
                    </p>
                  )}
                  {permissions.isTechnician && (
                    <p className="text-[#B06000] font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Technician Authority: OPD Patient Intake Demographics & Chief Complaints Registration.
                    </p>
                  )}
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg border border-[#F5C2C7] bg-[#FCE8E6] text-[#C5221F] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Authenticating...</span>
                  ) : (
                    <>
                      <span>Enter Angiosuite Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#DADCE0] bg-[#FFFFFF] py-6 px-4 text-center text-xs text-[#5F6368]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © 2026 Department of Radiodiagnosis & Interventional Radiology, Sawai Man Singh Medical College, Jaipur.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Angiosuite Level 4</span>
            <span>•</span>
            <span>HIPAA Compliant</span>
            <span>•</span>
            <span>NABH Accredited Hospital</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
