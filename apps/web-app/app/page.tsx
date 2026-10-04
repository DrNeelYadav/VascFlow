"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getEffectiveStaffAccounts, getStaffAccountByCode, StaffAccount } from "./lib/staffAccounts";
import { EndoFlowLogo } from "./components/EndoFlowLogo";
import { ChangePasswordModal } from "./components/ChangePasswordModal";
import { persistStaffSession, getRememberedStaffCode } from "./lib/auth/sessionPersistence";
import { ArrowRight, AlertCircle, Eye, EyeOff, KeyRound } from "lucide-react";

const BUILT_IN_STAFF_CODES = ["DM01", "DM02", "FC01", "FC02", "TC01", "NO01"];

export default function LandingPage() {
  const [staffCode, setStaffCode] = useState<string>("DM01");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [effectiveAccounts, setEffectiveAccounts] = useState<StaffAccount[]>([]);

  useEffect(() => {
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

    const codeToUse = (staffCode || "DM01").trim();
    const pinToUse = password.trim();
    if (!pinToUse) {
      setErrorMsg("Enter your institutional PIN to continue.");
      setIsSubmitting(false);
      return;
    }

    const targetAccount = getStaffAccountByCode(codeToUse);
    if (targetAccount && targetAccount.isActive === false) {
      setErrorMsg("Access Denied: This staff account has been suspended or revoked by the Administrator.");
      setIsSubmitting(false);
      return;
    }

    try {
      const isEmail = codeToUse.includes("@");
      const email =
        targetAccount?.email ||
        (isEmail ? codeToUse.toLowerCase() : `${codeToUse.toLowerCase()}@sms.rajasthan.gov.in`);
      const targetDestination = targetAccount?.role === "ADMIN" ? "/admin" : "/dashboard";

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ staffCode: codeToUse, institutionalEmail: email, password: pinToUse }),
      });

      if (res.ok) {
        const data = await res.json();
        const resolvedAccount = targetAccount || getStaffAccountByCode(codeToUse);
        if (resolvedAccount) persistStaffSession(resolvedAccount, { rememberMe });
        window.location.href = data.redirectTo || targetDestination;
        return;
      }

      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.detail || errorData?.error || errorData?.title ||
        `Authentication failed (HTTP ${res.status}). Please check credentials or network.`
      );
    } catch (error) {
      console.error("[Login Error]", error);
      setErrorMsg(error instanceof Error ? error.message : "Institutional sign-in is unavailable.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3 select-none shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <EndoFlowLogo size="md" showSubtitle={true} theme="dark" />
          <div className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center sm:text-right">
            <span>Department of Interventional Radiology | SMS Medical College &amp; Attached Hospitals, Jaipur</span>
          </div>
        </div>
      </header>

      {/* Main Stage: High-Density Institutional Login Card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6"
        >
          {/* Institutional Header & Badges */}
          <div className="text-center space-y-2 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span className="inline-block px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold tracking-wider text-slate-700 dark:text-slate-300 uppercase border border-slate-300 dark:border-slate-700">
              GOVERNMENT OF RAJASTHAN • MEDICAL EDUCATION DEPARTMENT
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              SMS Hospital Angiosuite Clinical Portal
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Institutional Sign-In for Faculty, DM Fellows &amp; Cath-Lab Staff
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4" autoComplete="on">
            {/* Staff ID Input */}
            <div className="space-y-1.5">
              <label htmlFor="staffCode" className="block text-xs font-semibold text-slate-800 dark:text-slate-200">
                Department Staff ID
              </label>
              <input
                type="text"
                id="staffCode"
                name="username"
                autoComplete="username"
                autoCapitalize="characters"
                spellCheck={false}
                required
                value={staffCode}
                onChange={(e) => { setStaffCode(e.target.value.toUpperCase()); setErrorMsg(null); }}
                placeholder="e.g. DM01"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none uppercase font-mono tracking-wide transition-colors"
              />
            </div>

            {/* Quick Select Pills */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Quick Select Staff Identity:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {BUILT_IN_STAFF_CODES.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleQuickSelect(code)}
                    className={`px-3 py-1 rounded-md text-xs font-mono font-medium border transition-colors cursor-pointer ${
                      staffCode.trim().toUpperCase() === code
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            {/* PIN / Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Institutional PIN / Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowChangePasswordModal(true)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-1 font-medium"
                >
                  <KeyRound className="w-3.5 h-3.5" />
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
                  onChange={(e) => { setPassword(e.target.value); setErrorMsg(null); }}
                  placeholder="Enter PIN"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none tracking-widest transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Credentials are issued by the HOD office.</p>
            </div>

            {/* Remember Me Checkbox (30-day session persistence) */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                <input
                  type="checkbox"
                  name="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
                <span>Remember my ID &amp; keep me logged in</span>
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono border border-slate-200 dark:border-slate-700">
                30-Day Session
              </span>
            </div>

            {/* Matched Staff Badge */}
            {selectedStaffAccount && (
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {selectedStaffAccount.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                      {selectedStaffAccount.name}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      {selectedStaffAccount.title}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shrink-0 ml-2">
                  {selectedStaffAccount.role}
                </span>
              </div>
            )}

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-lg border border-rose-200 bg-rose-50 dark:bg-rose-950/40 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Primary Action Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-50 mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing In...
                </span>
              ) : (
                <>
                  <span>Sign In to Angiosuite Workstation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </main>

      {/* Institutional Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-4 px-4 sm:px-8 text-center text-xs text-slate-500 dark:text-slate-400 select-none">
        <p>&copy; 2026 Department of Interventional Radiology, SMS Medical College, Jaipur. For official clinical use only.</p>
      </footer>

      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
        defaultStaffCode={staffCode || "DM01"}
        onSuccess={(newCode) => { if (newCode) setStaffCode(newCode); setPassword(""); setErrorMsg(null); }}
      />
    </div>
  );
}
