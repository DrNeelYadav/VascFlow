"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  authenticateStaff,
  INSTITUTIONAL_STAFF_ACCOUNTS,
} from "./lib/staffAccounts";
import { useEndoflowStore } from "./dashboard/useEndoflowStore";
import { VascularTreeHeatmapCanvas } from "./components/VascularTreeHeatmapCanvas";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Sparkles,
  Activity,
  Calendar,
  AlertCircle,
  Eye,
  EyeOff,
  Radio,
  Cpu,
  Workflow,
  Fingerprint,
  Database,
  Binary,
} from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  const setCurrentStaff = useEndoflowStore((s) => s.setCurrentStaff);

  const [staffCode, setStaffCode] = useState<string>("DM01");
  const [password, setPassword] = useState<string>("123456");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Matched staff account lookup for subtle indicator
  const selectedStaffAccount = INSTITUTIONAL_STAFF_ACCOUNTS.find(
    (s) => s.code.toUpperCase() === staffCode.trim().toUpperCase()
  );

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    const staff = authenticateStaff(staffCode, password);
    if (!staff) {
      setErrorMsg("Invalid credentials. Please enter your designated ID and PIN.");
      setIsSubmitting(false);
      return;
    }

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

  const featureCards = [
    {
      icon: Activity,
      title: "290+ Endovascular Protocols",
      desc: "Structured clinical blueprints for portal hypertension, complex embolization, biliary, and arterial interventions.",
      tag: "Catalog",
      border: "hover:border-sky-500/40",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)]",
    },
    {
      icon: Calendar,
      title: "Real-time Cath-Lab Matrix",
      desc: "Instant scheduling with pre-op readiness scoring, hemodynamic safety markers, and automated queue intelligence.",
      tag: "Scheduling",
      border: "hover:border-indigo-500/40",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]",
    },
    {
      icon: Cpu,
      title: "Rotterdam & MELD 3.0 Engine",
      desc: "Automated risk stratification, liver volume kinetics, and validated procedural prognosis calculations.",
      tag: "Analytics",
      border: "hover:border-emerald-500/40",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
    },
    {
      icon: Workflow,
      title: "Post-Intervention Recovery",
      desc: "Continuous bedside hemodynamic surveillance, puncture site hemostasis checks, and multi-disciplinary signoffs.",
      tag: "Inpatient",
      border: "hover:border-violet-500/40",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden antialiased">
      {/* 3D Vascular Tree Heatmap GPU Canvas Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <VascularTreeHeatmapCanvas />
        {/* Obsidian Vignette and Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Modern High-End Top Navigation Bar */}
      <header className="relative z-50 backdrop-blur-xl bg-[#090D16]/75 border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <motion.div
              initial={{ rotate: -15, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center">
                  <Radio className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-400 border-2 border-[#090D16] rounded-full animate-pulse" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold tracking-tight text-white">
                  VascFlow
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/50">
                  v3.4
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Interventional Radiology Clinical System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="hidden sm:flex items-center gap-2 bg-slate-900/80 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Angiosuite Active</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md">
              <Fingerprint className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="hidden sm:inline">WebAuthn FIPS-140-3</span>
              <span className="sm:hidden">SSO Active</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-5 sm:px-8 py-12 lg:py-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Animated Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-xs font-semibold text-cyan-300 shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Next-Gen Vascular & Interventional Platform</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                Precision Intelligence for{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Interventional Radiology
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
                Seamless surgical suite operations engineered for fellows, faculty, and clinical teams. 
                Manage procedure queues, hemodynamic workflows, and decision support with zero friction.
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/[0.08]">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">290+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">IR Procedures</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Paperless Cath-Lab</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400 tracking-tight">&lt; 0.2s</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Protocol Latency</div>
              </div>
            </div>

            {/* Core Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {featureCards.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  className={`group relative p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] ${feat.border} transition-all duration-300 ${feat.glow}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                      <feat.icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High-End Minimal Sign-In Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md relative">
              {/* Card Ambient Glow Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/15 via-blue-600/10 to-indigo-600/15 rounded-3xl blur-2xl opacity-60" />

              <div className="relative rounded-3xl bg-[#030712]/85 border border-white/10 p-7 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_-15px_rgba(6,182,212,0.15)] space-y-6">
                {/* Header with WebAuthn / Biometric Badge */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                      <Fingerprint className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-medium text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Enterprise SSO</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      Institutional Access
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Accredited Departmental Login &amp; Clinical Token Validation
                    </p>
                  </div>
                </div>

                {/* High-Fidelity Telemetry Micro-Badges */}
                <div className="grid grid-cols-3 gap-2 py-1">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center justify-center">
                    <div className="text-[10px] font-mono text-cyan-300 font-semibold flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5 text-cyan-400" />
                      <span>256-Bit RLS</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium mt-0.5 uppercase tracking-wider">
                      Enforced
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center justify-center">
                    <div className="text-[10px] font-mono text-emerald-300 font-semibold flex items-center gap-1">
                      <Database className="w-2.5 h-2.5 text-emerald-400" />
                      <span>FHIR / DICOM</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium mt-0.5 uppercase tracking-wider">
                      Native
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center flex flex-col items-center justify-center">
                    <div className="text-[10px] font-mono text-indigo-300 font-semibold flex items-center gap-1">
                      <Binary className="w-2.5 h-2.5 text-indigo-400" />
                      <span>AIIMS IR</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium mt-0.5 uppercase tracking-wider">
                      Registry Ready
                    </span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  {/* Staff ID */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Department Staff ID
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
                        placeholder="e.g. DM01"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#060913] text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none uppercase font-mono tracking-wide transition-all"
                      />
                    </div>
                  </div>

                  {/* Security PIN */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-semibold text-slate-300">
                        Institutional PIN / Password
                      </label>
                      <span className="text-[11px] text-slate-400 font-mono">Default: 123456</span>
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
                        placeholder="Enter PIN"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#060913] text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none tracking-widest transition-all pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Active Account Identity Feedback */}
                  {selectedStaffAccount && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold text-xs">
                          {selectedStaffAccount.avatar}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {selectedStaffAccount.name}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {selectedStaffAccount.title}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {selectedStaffAccount.role}
                      </span>
                    </motion.div>
                  )}

                  {/* Error Alert */}
                  {errorMsg && (
                    <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-950/40 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Action Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Validating Institutional Token...
                      </span>
                    ) : (
                      <>
                        <span>Enter Angiosuite Dashboard</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </form>

                {/* Secure audit disclaimer */}
                <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 border-t border-white/[0.06]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>HIPAA Safe Harbor § 164.514(b) &amp; ISO 27001 Compliant</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Modern Sleek Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#070A12]/80 backdrop-blur-md py-6 px-5 sm:px-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-normal">
            © 2026 Department of Interventional Radiology. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Angiosuite Suite 3.4</span>
            <span>•</span>
            <span>Clinical Workstation</span>
            <span>•</span>
            <span>High-Security Access</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
