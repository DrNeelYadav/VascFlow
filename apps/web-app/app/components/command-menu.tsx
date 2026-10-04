"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Search,
  User,
  Activity,
  Calculator,
  Lock,
  Layers,
  BedDouble,
  X,
} from "lucide-react";
import { useEndoflowStore } from "../dashboard/useEndoflowStore";
import { DAILY_ROUTINE_IR_PROCEDURES } from "../dashboard/operative-notes/dailyRoutineProcedures";
import { IR_PROCEDURES_CATALOG } from "@vascule/catalog";
import { WORKSPACES } from "../lib/navigation";
import { WorkspaceIcon } from "./shell/WorkspaceIcon";

interface CommandMenuProps {
  onLockBedside?: () => void;
}

export function CommandMenu({ onLockBedside }: CommandMenuProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const patients = useEndoflowStore((s) => s.patients);
  const bookedCases = useEndoflowStore((s) => s.bookedCases);
  const ctReviews = useEndoflowStore((s) => s.ctReviews);
  const beds = useEndoflowStore((s) => s.beds);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K and Cmd+L)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "l" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(false);
        if (onLockBedside) onLockBedside();
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onLockBedside]);

  const runCommand = useCallback((command: () => void) => {
    setOpen(false);
    setSearch("");
    command();
  }, []);

  const customFilter = useCallback((value: string, searchStr: string) => {
    const s = searchStr.toLowerCase().trim();
    let prefix = "";
    let query = s;

    if (s.startsWith("p:") || s.startsWith("p ")) {
      prefix = "p";
      query = s.slice(2).trim();
    } else if (s.startsWith("proc:") || s.startsWith("proc ")) {
      prefix = "proc";
      query = s.slice(5).trim();
    } else if (s.startsWith("calc:") || s.startsWith("calc ")) {
      prefix = "calc";
      query = s.slice(5).trim();
    } else if (s.startsWith("w:") || s.startsWith("w ")) {
      prefix = "w";
      query = s.slice(2).trim();
    }

    const val = value.toLowerCase();

    if (prefix === "p" && !val.startsWith("patient:")) return 0;
    if (prefix === "proc" && !val.startsWith("proc:")) return 0;
    if (prefix === "calc" && !val.startsWith("calc:")) return 0;
    if (prefix === "w" && !val.startsWith("ward:")) return 0;

    if (!query) return 1;

    const terms = query.split(/\s+/).filter(Boolean);
    return terms.every((t) => val.includes(t)) ? 1 : 0;
  }, []);

  const activePrefix =
    search.startsWith("p:") || search.startsWith("p ")
      ? "PATIENTS"
      : search.startsWith("proc:") || search.startsWith("proc ")
      ? "PROCEDURES"
      : search.startsWith("calc:") || search.startsWith("calc ")
      ? "CALCULATORS"
      : search.startsWith("w:") || search.startsWith("w ")
      ? "WARDS"
      : null;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-black/50 backdrop-blur-xs p-4 animate-in fade-in-50 duration-150 font-sans">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        <Command
          label="Clinical Command Menu"
          filter={customFilter}
          className="flex flex-col w-full text-slate-900 dark:text-slate-100 focus:outline-none"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center px-3.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            {activePrefix && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold bg-blue-600 text-white rounded shrink-0 mr-1.5">
                {activePrefix}
              </span>
            )}
            <Command.Input
              autoFocus
              value={search}
              onValueChange={setSearch}
              placeholder="Search procedures (TIPS, BAE, PTBD...), calculators, patients (p:), wards (w:)..."
              className="w-full py-3 text-xs bg-transparent outline-none placeholder:text-slate-400 text-slate-900 dark:text-slate-100"
            />
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-500">
                ESC
              </kbd>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 ml-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* List Results */}
          <Command.List className="max-h-[420px] overflow-y-auto p-2 focus:outline-none">
            <Command.Empty className="py-8 text-center text-xs text-slate-400 font-mono">
              No matching clinical records found
            </Command.Empty>

            {/* Group 1: High-Yield Procedures & Blueprints */}
            <Command.Group
              heading="IR Procedures & Clinical Blueprints"
              className="text-xs font-medium text-slate-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group-heading]]:mb-1"
            >
              {/* Daily 16 Routine SMS Procedures */}
              {DAILY_ROUTINE_IR_PROCEDURES.map((proc) => (
                <Command.Item
                  key={`daily-${proc.id}`}
                  value={`proc: ${proc.shortTitle} ${proc.fullTitle} ${proc.specialty} ${proc.packageCode} ${proc.indicationDefault} routine`}
                  onSelect={() =>
                    runCommand(() =>
                      router.push(`/dashboard/operative-notes?procedure=${proc.id}&tab=note`)
                    )
                  }
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-blue-50 dark:aria-selected:bg-blue-950/60 aria-selected:text-blue-900 dark:aria-selected:text-blue-200 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">{proc.shortTitle}</span>
                      <span className="ml-2 text-slate-500 dark:text-slate-400">• {proc.fullTitle}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className="text-[10px] font-mono text-blue-600 bg-blue-50 dark:bg-blue-950/80 px-1.5 py-0.5 rounded">
                      {proc.modality}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded">
                      SMS Routine
                    </span>
                  </div>
                </Command.Item>
              ))}

              {/* Extended Core IR Procedures from Catalog */}
              {IR_PROCEDURES_CATALOG.slice(0, 30).map((catProc) => (
                <Command.Item
                  key={`cat-${catProc.key}`}
                  value={`proc: ${catProc.title} ${catProc.category} ${catProc.domain} ${catProc.targetVessels.join(" ")} ${catProc.clinicalCriteria}`}
                  onSelect={() =>
                    runCommand(() =>
                      router.push(`/dashboard/catalog?search=${encodeURIComponent(catProc.title)}`)
                    )
                  }
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-blue-50 dark:aria-selected:bg-blue-950/60 aria-selected:text-blue-900 dark:aria-selected:text-blue-200 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-medium text-slate-900 dark:text-slate-100">{catProc.title}</span>
                      <span className="ml-2 text-slate-500 text-xs">({catProc.category})</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded shrink-0 ml-2">
                    ₹{catProc.defaultPanelCostINR.toLocaleString("en-IN")}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="h-px bg-slate-100 dark:bg-slate-800 my-1" />

            {/* Group 2: Point-of-Care Clinical Calculators & Decision Logic */}
            <Command.Group
              heading="Clinical Risk Calculators & Formulas"
              className="text-xs font-medium text-slate-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                value="calc: rotterdam bcs-pi budd chiari prognostic index tips dips liver"
                onSelect={() => runCommand(() => router.push("/dashboard/protocols?calc=rotterdam"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Rotterdam BCS-PI Score</span>
                    <span className="text-slate-500 ml-1.5">(Encephalopathy, Ascites, Bilirubin, INR)</span>
                  </div>
                </div>
                <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-mono">Budd-Chiari</span>
              </Command.Item>

              <Command.Item
                value="calc: clichy score budd chiari acute mortality risk tips"
                onSelect={() => runCommand(() => router.push("/dashboard/protocols?calc=clichy"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Clichy Prognostic Score</span>
                    <span className="text-slate-500 ml-1.5">Ascites, Bilirubin, Albumin, Age</span>
                  </div>
                </div>
                <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-mono">Acute BC</span>
              </Command.Item>

              <Command.Item
                value="calc: meld 3.0 model for end-stage liver disease mortality tips tace"
                onSelect={() => runCommand(() => router.push("/dashboard/protocols?calc=meld"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">MELD / MELD-Na Calculator</span>
                    <span className="text-slate-500 ml-1.5">Bilirubin, Creatinine, INR, Sodium</span>
                  </div>
                </div>
                <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-mono">TIPS Risk</span>
              </Command.Item>

              <Command.Item
                value="calc: cigarroa macd contrast dose nephrotoxicity aki limit 5x wt / cr"
                onSelect={() => runCommand(() => router.push("/dashboard/protocols?calc=cigarroa"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Cigarroa MACD (CI-AKI Limit)</span>
                    <span className="text-slate-500 ml-1.5">(5 × Weight kg) / Serum Creatinine</span>
                  </div>
                </div>
                <span className="text-[10px] text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded font-mono">Contrast Safety</span>
              </Command.Item>

              <Command.Item
                value="calc: harbin awaya c/rl ratio caudate right lobe hypertrophy budd chiari"
                onSelect={() => runCommand(() => router.push("/dashboard/protocols?calc=crl_ratio"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Harbin &amp; Awaya C/RL Ratio</span>
                    <span className="text-slate-500 ml-1.5">Caudate / Right Lobe Hypertrophy Ratio</span>
                  </div>
                </div>
                <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-mono">CT Anatomy</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-slate-100 dark:bg-slate-800 my-1" />

            {/* Group 3: Active Inpatient & Cath-Lab Cases */}
            <Command.Group
              heading="Active Patients & Cath-Lab Cases"
              className="text-xs font-medium text-slate-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group-heading]]:mb-1"
            >
              {patients.map((p) => (
                <Command.Item
                  key={`pt-${p.id}`}
                  value={`patient: ${p.hid || ""} ${p.name} ${p.procedure || ""} ${p.id}`}
                  onSelect={() => runCommand(() => router.push(`/dashboard/bed-board`))}
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">{p.name}</span>
                      <span className="ml-2 font-mono text-xs text-slate-500">{p.hid}</span>
                      <span className="ml-2 text-slate-500">• {p.procedure}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded shrink-0 ml-2">
                    {p.ipd?.bed || p.status}
                  </span>
                </Command.Item>
              ))}

              {bookedCases.map((c) => (
                <Command.Item
                  key={`bc-${c.id}`}
                  value={`patient: ${c.ssoNumber || ""} ${c.patientName} ${c.procedureTitle} ${c.id}`}
                  onSelect={() => runCommand(() => router.push(`/dashboard/calendar`))}
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">{c.patientName}</span>
                      <span className="ml-2 font-mono text-xs text-slate-500">{c.ssoNumber}</span>
                      <span className="ml-2 text-slate-500">• {c.procedureTitle}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 shrink-0 ml-2">
                    {c.scheduledDate} ({c.status})
                  </span>
                </Command.Item>
              ))}

              {ctReviews.map((r) => (
                <Command.Item
                  key={`ct-${r.id}`}
                  value={`patient: ${r.smsBillId || ""} ${r.patientName} ${r.procedureTitle || r.primaryDiagnosis} ${r.id}`}
                  onSelect={() => runCommand(() => router.push(`/dashboard/op-clinic`))}
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">{r.patientName}</span>
                      <span className="ml-2 font-mono text-xs text-slate-500">{r.smsBillId}</span>
                      <span className="ml-2 text-slate-500">• {r.procedureTitle || r.primaryDiagnosis}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded shrink-0 ml-2">
                    OPD {r.status}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="h-px bg-slate-100 dark:bg-slate-800 my-1" />

            {/* Group 4: Workspaces, generated from the navigation registry */}
            <Command.Group
              heading="Workspaces"
              className="text-xs font-medium text-slate-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group-heading]]:mb-1"
            >
              {WORKSPACES.flatMap((w) =>
                w.members.map((m) => (
                  <Command.Item
                    key={m.href}
                    value={`nav: ${w.label} ${m.label} ${m.keywords ?? ""} go to workspace`}
                    onSelect={() => runCommand(() => router.push(m.href))}
                    className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <WorkspaceIcon icon={w.icon} className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-medium text-slate-900 dark:text-slate-100 truncate">
                        {m.label}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0 ml-2">
                      {w.label}
                    </span>
                  </Command.Item>
                ))
              )}

              {/* Ward search keeps its own prefix so `w:` still resolves beds. */}
              <Command.Item
                value="ward: bed-board beds occupancy status admissions icu liver"
                onSelect={() => runCommand(() => router.push("/dashboard/bed-board"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 transition"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <BedDouble className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-900 dark:text-slate-100 truncate">
                    Bed Occupancy
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 shrink-0 ml-2">
                  {beds.filter((b) => b.status === "occupied").length}/8
                </span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-slate-100 dark:bg-slate-800 my-1" />

            {/* Group 5: Session Controls */}
            <Command.Group
              heading="Session"
              className="text-xs font-medium text-slate-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                value="sec: lock bedside station lock screen timeout session"
                onSelect={() =>
                  runCommand(() => {
                    if (onLockBedside) onLockBedside();
                  })
                }
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 aria-selected:bg-rose-50 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Lock className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span className="font-medium">Lock Bedside Workstation</span>
                </div>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-800 border border-rose-200 rounded text-rose-600">
                  ⌘L
                </kbd>
              </Command.Item>
            </Command.Group>
          </Command.List>

          {/* Footer Info Strip */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <span>Navigate:</span>
              <kbd className="px-1 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded">↑</kbd>
              <kbd className="px-1 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded">↓</kbd>
              <span>• Select:</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded">↵</kbd>
            </div>
            <div className="flex items-center gap-1 text-slate-400 font-mono text-[10px]">
              <span>proc: Procedures • calc: Math • p: Patients</span>
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
}
