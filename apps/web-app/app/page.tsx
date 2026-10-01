"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import {
  getEffectiveStaffAccounts,
  getStaffAccountByCode,
  StaffAccount,
} from "./lib/staffAccounts";
import { EndoFlowLogo } from "./components/EndoFlowLogo";
import { ChangePasswordModal } from "./components/ChangePasswordModal";
import {
  persistStaffSession,
  getRememberedStaffCode,
} from "./lib/auth/sessionPersistence";
import {
  ArrowRight,
  Activity,
  Calendar,
  AlertCircle,
  Eye,
  EyeOff,
  Cpu,
  Workflow,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  const [staffCode, setStaffCode] = useState<string>("DM01");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Matched staff account lookup across built-ins and custom provisioned IDs
  const [effectiveAccounts, setEffectiveAccounts] = useState<StaffAccount[]>([]);

  React.useEffect(() => {
    setEffectiveAccounts(getEffectiveStaffAccounts());
    const remembered = getRememberedStaffCode();
    if (remembered.code) {
      setStaffCode(remembered.code);
      setRememberMe(remembered.rememberMe);
    }
  }, []);

  const selectedStaffAccount =
    effectiveAccounts.find((s) => s.code.toUpperCase() === staffCode.trim().toUpperCase()) ||
    getStaffAccountByCode(staffCode);

  const handleQuickSelect = (code: string) => {
    setStaffCode(code);
    setPassword("");
    setErrorMsg(null);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    const targetAccount = getStaffAccountByCode(staffCode);
    if (targetAccount && targetAccount.isActive === false) {
      setErrorMsg("Access Denied: This staff account has been suspended or revoked by the Administrator.");
      setIsSubmitting(false);
      return;
    }

    try {
      const isEmail = staffCode.includes("@");
      const email = targetAccount?.email || (isEmail ? staffCode.trim().toLowerCase() : `${staffCode.trim().toLowerCase()}@sms.rajasthan.gov.in`);
      if (!email) {
        throw new Error("This staff account is not configured for institutional sign-in.");
      }

      const roleCodeToSend = targetAccount?.code || (isEmail ? staffCode.split("@")[0].toUpperCase() : staffCode.trim().toUpperCase());
      const targetDestination = targetAccount?.role === "ADMIN" ? "/admin" : "/dashboard";
      const fullCallbackUrl = typeof window !== "undefined" ? `${window.location.origin}${targetDestination}` : targetDestination;

      let result: any = null;
      try {
        result = await signIn("credentials", {
          institutionalEmail: email,
          securityPin: password,
          roleCode: roleCodeToSend,
          callbackUrl: fullCallbackUrl,
          redirectTo: fullCallbackUrl,
          redirect: false,
        });
      } catch (signInErr: any) {
        // NextAuth v5 beta client quirk: line 298 executes `new URL(data.url)` without base origin.
        // If data.url is relative, browser throws TypeError: "Failed to construct 'URL': Invalid URL".
        if (signInErr instanceof TypeError && signInErr.message.includes("URL")) {
          const sessionRes = await fetch("/api/auth/session").catch(() => null);
          const sessionData = sessionRes ? await sessionRes.json().catch(() => null) : null;
          if (sessionData && sessionData.user) {
            result = { ok: true, error: null };
          } else {
            throw new Error("Invalid institutional PIN / password. Please check your credentials.");
          }
        } else {
          throw signInErr;
        }
      }

      if (!result || result.error) {
        throw new Error("Invalid institutional PIN / password. Please check your credentials.");
      }

      const resolvedAccount = targetAccount || getStaffAccountByCode(staffCode);
      if (resolvedAccount) {
        persistStaffSession(resolvedAccount, { rememberMe });
      }
      router.replace(targetDestination);
      setTimeout(() => {
        if (window.location.pathname === "/" || window.location.pathname === "/login") {
          window.location.href = targetDestination;
        }
      }, 500);
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Institutional sign-in is unavailable.");
      setIsSubmitting(false);
    }
  };

  const featureCards = [
    {
      icon: Activity,
      title: "Endovascular Protocols",
      desc: "Structured clinical blueprints for portal hypertension, complex embolization, biliary, and arterial interventions.",
      tag: "Catalog",
    },
    {
      icon: Calendar,
      title: "Real-time Cath-Lab Matrix",
      desc: "Instant scheduling with pre-op readiness scoring, hemodynamic safety markers, and automated queue intelligence.",
      tag: "Scheduling",
    },
    {
      icon: Cpu,
      title: "Rotterdam & MELD 3.0 Engine",
      desc: "Automated risk stratification, liver volume kinetics, and validated procedural prognosis calculations.",
      tag: "Analytics",
    },
    {
      icon: Workflow,
      title: "Post-Intervention Recovery",
      desc: "Continuous bedside hemodynamic surveillance, puncture site hemostasis checks, and multi-disciplinary signoffs.",
      tag: "Inpatient",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col font-sans antialiased">
      {/* Clean Google Minimalist Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#DADCE0] px-4 sm:px-8 py-3 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <EndoFlowLogo size="md" showSubtitle={true} theme="dark" />
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#5F6368]">
            <span>Department of Interventional Radiology</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 lg:py-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Mobile Title & Overview (Stacked for mobile views) */}
          <div className="lg:hidden space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202124]">
              Precision Intelligence for{" "}
              <span className="text-[#1A73E8]">Interventional Radiology</span>
            </h1>
            <p className="text-sm text-[#5F6368] leading-relaxed">
              Cath-lab operations and clinical workflows engineered for interventional teams.
            </p>
          </div>

          {/* Right Column: Clean Google Minimalist Sign-In Card (Positioned Top Right on Desktop, Stacked Thumb-friendly on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 lg:order-2 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-md bg-white border border-[#DADCE0] rounded-2xl shadow-xs p-6 sm:p-8 space-y-6">
              {/* Card Header */}
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-[#202124] tracking-tight">
                  Sign in
                </h2>
                <p className="text-xs text-[#5F6368]">
                  Access your Angiosuite clinical workstation
                </p>
              </div>

              {/* Login Form */}
              <form
                method="POST"
                onSubmit={handleLoginSubmit}
                className="space-y-4"
                autoComplete="on"
              >
                {/* Staff ID */}
                <div className="space-y-1.5">
                  <label htmlFor="username" className="block text-xs font-medium text-[#202124]">
                    Department Staff ID
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    autoCapitalize="characters"
                    spellCheck={false}
                    required
                    value={staffCode}
                    onChange={(e) => {
                      setStaffCode(e.target.value.toUpperCase());
                      setErrorMsg(null);
                    }}
                    placeholder="e.g. DM01"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DADCE0] bg-white text-sm text-[#202124] placeholder:text-[#80868B] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] focus:outline-none uppercase font-mono tracking-wide transition-colors"
                  />
                </div>

                {/* Quick Account Selector Pills */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5F6368]">
                    Quick Select Staff Identity:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    <button
                      type="button"
                      onClick={() => handleQuickSelect("DM01")}
                      className={`px-2 py-1 rounded text-[11px] font-mono border transition-colors cursor-pointer ${
                        staffCode === "DM01"
                          ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                          : "bg-[#F8F9FA] text-[#3C4043] border-[#DADCE0] hover:bg-[#E8EAED]"
                      }`}
                    >
                      DM01 (Doctor)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickSelect("FC01")}
                      className={`px-2 py-1 rounded text-[11px] font-mono border transition-colors cursor-pointer ${
                        staffCode === "FC01"
                          ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                          : "bg-[#F8F9FA] text-[#3C4043] border-[#DADCE0] hover:bg-[#E8EAED]"
                      }`}
                    >
                      FC01 (HOD)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickSelect("TC01")}
                      className={`px-2 py-1 rounded text-[11px] font-mono border transition-colors cursor-pointer ${
                        staffCode === "TC01"
                          ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                          : "bg-[#F8F9FA] text-[#3C4043] border-[#DADCE0] hover:bg-[#E8EAED]"
                      }`}
                    >
                      TC01 (Tech)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickSelect("NO07")}
                      className={`px-2 py-1 rounded text-[11px] font-mono border transition-colors cursor-pointer ${
                        staffCode === "NO07"
                          ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                          : "bg-[#F8F9FA] text-[#3C4043] border-[#DADCE0] hover:bg-[#E8EAED]"
                      }`}
                    >
                      NO07 (Nurse)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickSelect("ADMIN01")}
                      className={`px-2 py-1 rounded text-[11px] font-mono border flex items-center gap-1 transition-colors cursor-pointer ${
                        staffCode === "ADMIN01"
                          ? "bg-[#9333EA] text-white border-[#9333EA]"
                          : "bg-[#F3E8FD] text-[#9333EA] border-[#E9D5FF] hover:bg-[#EDE9FE]"
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3" />
                      ADMIN01 (Admin)
                    </button>
                  </div>
                </div>

                {/* Security PIN */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-xs font-medium text-[#202124]">
                      Institutional PIN / Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowChangePasswordModal(true)}
                      className="text-[11px] text-[#1A73E8] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <KeyRound className="w-3 h-3" />
                      <span>Change Password</span>
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrorMsg(null);
                      }}
                      placeholder="Enter PIN"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#DADCE0] bg-white text-sm text-[#202124] placeholder:text-[#80868B] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] focus:outline-none tracking-widest transition-colors pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Session Persistence Checkbox */}
                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-[#5F6368] hover:text-[#202124]">
                    <input
                      type="checkbox"
                      name="remember-me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-[#1A73E8] cursor-pointer"
                    />
                    <span>Remember my ID & keep me logged in</span>
                  </label>
                  <span className="text-[10px] text-[#5F6368] bg-[#F1F3F4] px-1.5 py-0.5 rounded font-mono">
                    30-Day Session
                  </span>
                </div>

                {/* DM Resident / Staff Identity Lookup Indicator */}
                {selectedStaffAccount && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-3 rounded-xl bg-[#E8F0FE] border border-[#D2E3FC] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#1A73E8] text-white flex items-center justify-center font-bold text-xs">
                        {selectedStaffAccount.avatar}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#202124]">
                          {selectedStaffAccount.name}
                        </div>
                        <div className="text-[10px] text-[#5F6368]">
                          {selectedStaffAccount.title}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white text-[#1A73E8] border border-[#D2E3FC]">
                      {selectedStaffAccount.role}
                    </span>
                  </motion.div>
                )}

                {/* Error Alert */}
                {errorMsg && (
                  <div className="p-3 rounded-lg border border-[#FAD2CF] bg-[#FCE8E6] text-[#C5221F] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#C5221F]" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-50 mt-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Signing In...
                    </span>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Left Column: Desktop Hero Section, Metrics, & Core Capabilities */}
          <div className="lg:col-span-7 lg:order-1 space-y-8 w-full">
            {/* Desktop Headline & Subtitle (hidden on mobile) */}
            <div className="hidden lg:block space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-[#202124]">
                Precision Intelligence for{" "}
                <span className="text-[#1A73E8]">
                  Interventional Radiology
                </span>
              </h1>
              <p className="text-base text-[#5F6368] leading-relaxed max-w-xl font-normal">
                Seamless surgical suite operations engineered for fellows, faculty, and clinical teams. Manage procedure queues, hemodynamic workflows, and decision support with zero friction.
              </p>
            </div>

            {/* High-Contrast Clinical Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-[#DADCE0]">
              <div className="bg-white border border-[#DADCE0] rounded-xl p-3 sm:p-4 shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">100+</div>
                <div className="text-[11px] text-[#5F6368] font-medium mt-0.5">IR Protocols</div>
              </div>
              <div className="bg-white border border-[#DADCE0] rounded-xl p-3 sm:p-4 shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-[#1A73E8] tracking-tight">Paperless</div>
                <div className="text-[11px] text-[#5F6368] font-medium mt-0.5">Cath-Lab Matrix</div>
              </div>
              <div className="bg-white border border-[#DADCE0] rounded-xl p-3 sm:p-4 shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-[#188038] tracking-tight">MELD 3.0</div>
                <div className="text-[11px] text-[#5F6368] font-medium mt-0.5">Clinical Engines</div>
              </div>
            </div>

            {/* Google Minimalist Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {featureCards.map((feat) => (
                <div
                  key={feat.title}
                  className="p-4 rounded-xl bg-white border border-[#DADCE0] hover:border-[#1A73E8]/50 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8]">
                      <feat.icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[#5F6368] bg-[#F1F3F4] px-2 py-0.5 rounded">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#202124] mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#5F6368] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Clean Google Minimalist Footer */}
      <footer className="border-t border-[#DADCE0] bg-white py-5 px-4 sm:px-8 text-center text-xs text-[#5F6368]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-normal">
            © 2026 Department of Interventional Radiology. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-[#5F6368]">
            <span>Angiosuite Clinical Workstation 3.4</span>
            <span>•</span>
            <span>Institutional Access</span>
          </div>
        </div>
      </footer>

      {/* Resident / Staff Change Password Modal */}
      <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
        defaultStaffCode={staffCode || "DM01"}
        onSuccess={(newCode) => {
          if (newCode) setStaffCode(newCode);
          setPassword("");
          setErrorMsg(null);
        }}
      />
    </div>
  );
}
