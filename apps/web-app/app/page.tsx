"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  authenticateStaff,
  INSTITUTIONAL_STAFF_ACCOUNTS,
  StaffAccount,
  StaffRole,
  StaffTier,
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
  ChevronRight,
  KeyRound,
  Eye,
  EyeOff,
  Hospital,
  Layers,
  Check,
  Flame,
  Fingerprint,
} from "lucide-react";

export default function ClinicalLandingPage() {
  const router = useRouter();
  const setCurrentStaff = useEndoflowStore((s) => s.setCurrentStaff);

  const [staffCode, setStaffCode] = useState<string>("DM01");
  const [password, setPassword] = useState<string>("123456");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [activeRoleTab, setActiveRoleTab] = useState<StaffTier>("DM_RESIDENT");

  // Selected staff metadata preview
  const selectedStaffAccount = INSTITUTIONAL_STAFF_ACCOUNTS.find(
    (s) => s.code.toUpperCase() === staffCode.trim().toUpperCase()
  );

  const permissions = selectedStaffAccount
    ? getStaffPermissions(selectedStaffAccount.role)
    : getStaffPermissions("DOCTOR");

  const filteredStaffByTier = INSTITUTIONAL_STAFF_ACCOUNTS.filter(
    (s) => s.tier === activeRoleTab
  );

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
    }, 350);
  };

  const roleTabItems: { id: StaffTier; label: string; count: number; roleColor: string }[] = [
    { id: "DM_RESIDENT", label: "DM Fellows", count: 2, roleColor: "text-blue-600 bg-blue-50 border-blue-200" },
    { id: "FACULTY", label: "Faculty / Profs", count: 4, roleColor: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    { id: "SENIOR_RESIDENT", label: "Senior Residents", count: 2, roleColor: "text-purple-600 bg-purple-50 border-purple-200" },
    { id: "NURSING_OFFICER", label: "Nursing Officers", count: 6, roleColor: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "CATHLAB_TECHNICIAN", label: "Cath-Lab Techs", count: 6, roleColor: "text-amber-600 bg-amber-50 border-amber-200" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-700 antialiased">
      {/* Background Ambience & Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100/60 via-indigo-100/40 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-50/70 blur-3xl rounded-full" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-slate-100/80 blur-3xl rounded-full" />
      </div>

      {/* Top Header Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-500/20 tracking-wider">
                IR
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-slate-900 tracking-tight">
                  VascFlow <span className="font-light text-slate-400">/</span> Vascule OS
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                  <Sparkles className="w-2.5 h-2.5" />
                  SMS Hospital, Jaipur
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Dept. of Radiodiagnosis & Interventional Radiology
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-slate-100/80 border border-slate-200/60 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Cath-Lab 1 & 2 Live</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 bg-slate-100/80 border border-slate-200/60 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>RBAC Tier Protected</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-xs font-semibold text-blue-700 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            <span>Sawai Man Singh Medical College & Attached Hospitals</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Interventional Radiology & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
              Endovascular Clinical Cockpit
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Comprehensive surgical workflow for DM Fellows, Senior Residents, Faculty, Nursing Staff, and Technicians.
            Featuring 100+ IR protocols, Rotterdam risk stratification, and 8-bed inpatient matrix.
          </p>
        </section>

        {/* Core Layout: Left Highlights & Right Auth Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Feature Matrix & Institutional Roster */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                EndoFlow Clinical Workflows
              </h2>
              <span className="text-[11px] font-medium text-slate-400">NABH & HIPAA Compliant</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  100+ IR Procedure Catalog
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  High-risk vascular (TIPS, DIPS, TACE, BAE, SFA Stenting) and non-vascular drainage (PTBD, PCN) guidelines.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Clinical Protocols & Decision Support
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Automated lab checks, pre-scan anatomical roadmaps (RHV/MHV/LHV webs), Rotterdam index, and MELD 3.0.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  DM Resident OPD Booking
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Zero lost patient paper records, 1-click date rescheduling, and automated 1-day advance reminder call alerts.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-rose-400 hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <BedDouble className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  8-Bed Inpatient Bedside Matrix
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  3 ICU Beds (ICU-01 to ICU-03) and 5 Ward Beds (Ward-01 to Ward-05) with puncture site hemostasis tracking.
                </p>
              </div>
            </div>

            {/* Institutional Credentials Banner */}
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 shadow-md border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>20 Institutional Roster Accounts</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  Universal PIN: 123456
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                4 Faculty (FC01–04) • 2 DM Fellows (DM01–02) • 2 Senior Residents (SR01–02) • 6 Nursing Officers (NO01–06) • 6 Cath-Lab Technicians (TC01–06).
              </p>
            </div>
          </div>

          {/* Right Column: Institutional Staff Authentication Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <Fingerprint className="w-5 h-5 text-blue-600" />
                    Institutional Authentication
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Sign in to enter the live SMS Angiosuite workstation
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[11px] font-mono font-medium text-slate-700">
                  <Lock className="w-3 h-3 text-slate-400" />
                  PIN: 123456
                </span>
              </div>

              {/* Role Filter Tabs */}
              <div className="mt-5 mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-2 tracking-wide uppercase">
                  Select Staff Role Category:
                </label>
                <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/70">
                  {roleTabItems.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveRoleTab(tab.id);
                        const firstInTier = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.tier === tab.id);
                        if (firstInTier) {
                          setStaffCode(firstInTier.code);
                          setErrorMsg(null);
                        }
                      }}
                      className={`flex-1 min-w-[100px] text-center py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeRoleTab === tab.id
                          ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Presets for Current Tier */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">
                    Quick Select Staff:
                  </span>
                  <span className="text-[11px] font-medium text-blue-600">
                    {filteredStaffByTier.length} Registered
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {filteredStaffByTier.map((account) => {
                    const isSelected = staffCode.toUpperCase() === account.code;
                    return (
                      <button
                        key={account.code}
                        type="button"
                        onClick={() => handlePresetSelect(account.code)}
                        className={`p-2.5 text-left rounded-xl border text-xs transition-all cursor-pointer flex items-center gap-2.5 ${
                          isSelected
                            ? "bg-blue-50/80 border-blue-400 ring-2 ring-blue-500/20 text-blue-900 shadow-xs"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-800"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[11px] shrink-0 ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {account.avatar}
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-bold truncate">{account.name}</p>
                          <p className="text-[10px] text-slate-500 font-mono">{account.code}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Authentication Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Staff Code / Identifier
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={staffCode}
                      onChange={(e) => {
                        setStaffCode(e.target.value.toUpperCase());
                        setErrorMsg(null);
                      }}
                      placeholder="e.g. DM01, FC01, SR01, NO01, TC01"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none uppercase font-mono font-medium transition-all"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Valid Identifiers: FC01–04, DM01–02, SR01–02, NO01–06, TC01–06
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Security PIN / Password
                    </label>
                    <span className="text-[11px] text-slate-500">Universal PIN: 123456</span>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrorMsg(null);
                      }}
                      placeholder="Enter security PIN"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Selected Staff Profile Card Preview */}
                {selectedStaffAccount && (
                  <div className="p-3.5 rounded-xl border border-blue-100 bg-blue-50/50 text-xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                        {selectedStaffAccount.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">
                          {selectedStaffAccount.name}
                        </p>
                        <p className="text-[11px] text-slate-600">
                          {selectedStaffAccount.title} • {selectedStaffAccount.department}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-full ${
                        selectedStaffAccount.role === "DOCTOR"
                          ? "bg-blue-100 text-blue-800"
                          : selectedStaffAccount.role === "NURSE"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {selectedStaffAccount.role}
                    </span>
                  </div>
                )}

                {/* Role Permissions Scope Details */}
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50 text-xs space-y-1.5">
                  <span className="font-bold text-slate-700 block">
                    Authorized Clinical Scope:
                  </span>
                  {permissions.isDoctor && (
                    <div className="flex items-start gap-2 text-blue-700 font-medium leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-600" />
                      <span>Full Clinical Authority: Case booking, Rotterdam risk score, Cath-Lab scheduling, and 8-bed inpatient orders.</span>
                    </div>
                  )}
                  {permissions.isNurse && (
                    <div className="flex items-start gap-2 text-emerald-700 font-medium leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                      <span>Nursing Authority: 8-Bed Ward/ICU Bedside Vitals, Hemostasis monitoring, and recovery transfers.</span>
                    </div>
                  )}
                  {permissions.isTechnician && (
                    <div className="flex items-start gap-2 text-amber-700 font-medium leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                      <span>Technician Authority: OPD Patient Intake Demographics & Chief Complaints Registration.</span>
                    </div>
                  )}
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs flex items-center gap-2.5 animate-shake">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer disabled:opacity-50 hover:shadow-blue-500/35"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Authenticating Credentials...
                    </span>
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

      {/* Modern Footer */}
      <footer className="relative z-10 border-t border-slate-200/80 bg-white/70 backdrop-blur-md py-6 px-4 text-center text-xs text-slate-500 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © 2026 Department of Radiodiagnosis & Interventional Radiology, Sawai Man Singh Medical College, Jaipur.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400">
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
