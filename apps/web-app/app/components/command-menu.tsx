"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Search,
  User,
  Activity,
  Calculator,
  FileText,
  Lock,
  Compass,
  Package,
  Layers,
  ArrowRight,
  ShieldAlert,
  Calendar,
  Eye,
  BarChart3,
  X,
  FileSignature,
  ClipboardCheck,
  BedDouble,
} from "lucide-react";
import { useEndoflowStore } from "../dashboard/useEndoflowStore";
import { INITIAL_RIS_WORKLIST_CASES } from "../dashboard/worklist/worklistData";

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
    } else if (s.startsWith("s:") || s.startsWith("s ")) {
      prefix = "s";
      query = s.slice(2).trim();
    } else if (s.startsWith("w:") || s.startsWith("w ")) {
      prefix = "w";
      query = s.slice(2).trim();
    }

    const val = value.toLowerCase();

    if (prefix === "p" && !val.startsWith("patient:")) return 0;
    if (prefix === "s" && !val.startsWith("scheme:")) return 0;
    if (prefix === "w" && !val.startsWith("ward:")) return 0;

    if (!query) return 1;

    const terms = query.split(/\s+/).filter(Boolean);
    return terms.every((t) => val.includes(t)) ? 1 : 0;
  }, []);

  const activePrefix = search.startsWith("p:") || search.startsWith("p ")
    ? "PATIENTS"
    : search.startsWith("s:") || search.startsWith("s ")
    ? "SCHEMES"
    : search.startsWith("w:") || search.startsWith("w ")
    ? "WARDS"
    : null;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] bg-black/40 backdrop-blur-xs p-4 animate-in fade-in-50 duration-150 font-sans">
      <div className="relative w-full max-w-2xl bg-white rounded-xl border border-zinc-200 shadow-2xl overflow-hidden">
        <Command
          label="Clinical Command Menu"
          filter={customFilter}
          className="flex flex-col w-full text-zinc-900 focus:outline-none"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center px-3.5 border-b border-zinc-200 bg-white">
            <Search className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
            {activePrefix && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold bg-slate-900 text-white rounded shrink-0 mr-1.5">
                {activePrefix}
              </span>
            )}
            <Command.Input
              autoFocus
              value={search}
              onValueChange={setSearch}
              placeholder="Search (use p: for patients, s: for schemes, w: for wards)..."
              className="w-full py-3 text-xs bg-transparent outline-none placeholder:text-zinc-400 text-zinc-900"
            />
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-100 border border-zinc-200 rounded text-zinc-500">
                ESC
              </kbd>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 ml-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* List Results */}
          <Command.List className="max-h-[380px] overflow-y-auto p-2 focus:outline-none">
            <Command.Empty className="py-8 text-center text-xs text-slate-400 font-mono">
              No records found
            </Command.Empty>

            {/* Group 1: Instant Patient Lookup */}
            <Command.Group
              heading="Active Inpatient & Cath-Lab Cases"
              className="text-[11px] font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400 [&_[cmdk-group-heading]]:mb-1"
            >
              {/* Live Admitted Inpatients */}
              {patients.map((p) => (
                <Command.Item
                  key={`pt-${p.id}`}
                  value={`patient: ${p.hid || ""} ${p.name} ${p.procedure || ""} ${p.id}`}
                  onSelect={() =>
                    runCommand(() =>
                      router.push(`/dashboard/bed-board`)
                    )
                  }
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <User className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-zinc-900">{p.name}</span>
                      <span className="ml-2 font-mono text-[11px] text-zinc-500">{p.hid}</span>
                      <span className="ml-2 text-zinc-500">• {p.procedure}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded shrink-0 ml-2">
                    {p.ipd?.bed || p.status}
                  </span>
                </Command.Item>
              ))}

              {/* Live Booked Cases */}
              {bookedCases.map((c) => (
                <Command.Item
                  key={`bc-${c.id}`}
                  value={`patient: ${c.ssoNumber || ""} ${c.patientName} ${c.procedureTitle} ${c.id}`}
                  onSelect={() =>
                    runCommand(() =>
                      router.push(`/dashboard/calendar`)
                    )
                  }
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <User className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-zinc-900">{c.patientName}</span>
                      <span className="ml-2 font-mono text-[11px] text-zinc-500">{c.ssoNumber}</span>
                      <span className="ml-2 text-zinc-500">• {c.procedureTitle}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 shrink-0 ml-2">
                    {c.scheduledDate} ({c.status})
                  </span>
                </Command.Item>
              ))}

              {/* Live OPD Consults */}
              {ctReviews.map((r) => (
                <Command.Item
                  key={`ct-${r.id}`}
                  value={`patient: ${r.smsBillId || ""} ${r.patientName} ${r.procedureTitle || r.primaryDiagnosis} ${r.id}`}
                  onSelect={() =>
                    runCommand(() =>
                      router.push(`/dashboard/op-clinic`)
                    )
                  }
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <User className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-zinc-900">{r.patientName}</span>
                      <span className="ml-2 font-mono text-[11px] text-zinc-500">{r.smsBillId}</span>
                      <span className="ml-2 text-zinc-500">• {r.procedureTitle || r.primaryDiagnosis}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded shrink-0 ml-2">
                    OPD {r.status}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="h-px bg-zinc-100 my-1" />

            {/* Group 2: Rapid Procedure Launch & Government Schemes */}
            <Command.Group
              heading="Rapid Procedure Protocols & Schemes"
              className="text-[11px] font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400 [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                value="scheme: tace chemoembolization hepatocellular carcinoma bclc 2849-in014c pre-auth"
                onSelect={() => runCommand(() => router.push("/dashboard/schemes"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Activity className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">cTACE Chemoembolization</span>
                    <span className="text-zinc-500 ml-1.5">(Code 2849-IN014C)</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Pre-Auth Dossier</span>
              </Command.Item>

              <Command.Item
                value="scheme: tips transjugular intrahepatic portosystemic shunt dips portal htn 2849-in061a pre-auth"
                onSelect={() => runCommand(() => router.push("/dashboard/schemes"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Activity className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">TIPS / DIPS Shunt</span>
                    <span className="text-zinc-500 ml-1.5">(Code 2849-IN061A)</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Pre-Auth Dossier</span>
              </Command.Item>

              <Command.Item
                value="scheme: rghs maay government scheme master package directory tariffs"
                onSelect={() => runCommand(() => router.push("/dashboard/schemes"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">Master Scheme Tariff Directory</span>
                    <span className="text-zinc-500 ml-1.5">(MAAY / RGHS Packages)</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Tariffs</span>
              </Command.Item>

              <Command.Item
                value="scheme: brto balloon-occluded retrograde transvenous obliteration gastric varices protocol"
                onSelect={() => runCommand(() => router.push("/dashboard/protocols"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Compass className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">BRTO / PARTO Protocol</span>
                    <span className="text-zinc-500 ml-1.5">Gastric Variceal Obliteration</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Protocol</span>
              </Command.Item>

              <Command.Item
                value="scheme: bae bronchial artery embolization massive hemoptysis protocol"
                onSelect={() => runCommand(() => router.push("/dashboard/protocols"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Compass className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">Bronchial Artery Embolization (BAE)</span>
                    <span className="text-zinc-500 ml-1.5">Massive Hemoptysis</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Protocol</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-zinc-100 my-1" />

            {/* Group 3: Wards & Bed Logistics */}
            <Command.Group
              heading="Wards & Bed Logistics"
              className="text-[11px] font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400 [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                value="ward: ir icu old gastro bed-board beds occupancy status admissions"
                onSelect={() => runCommand(() => router.push("/dashboard/bed-board"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <BedDouble className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">Live Bed Board</span>
                    <span className="text-zinc-500 ml-1.5">(IR ICU &amp; Old Gastro Ward)</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Beds</span>
              </Command.Item>

              <Command.Item
                value="ward: census tracker inpatient ward bed occupancy table 1 publication"
                onSelect={() => runCommand(() => router.push("/dashboard/census"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <BarChart3 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">Inpatient Ward Census Tracker</span>
                    <span className="text-zinc-500 ml-1.5">(Real-time Occupancy)</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Census</span>
              </Command.Item>

              <Command.Item
                value="ward: worklist cath-lab daily schedule active procedures holding"
                onSelect={() => runCommand(() => router.push("/dashboard/worklist"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>Cath-Lab Daily Worklist</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-zinc-100 my-1" />

            {/* Group 4: Point-of-Care Calculators */}
            <Command.Group
              heading="Point-of-Care Clinical Calculators"
              className="text-[11px] font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400 [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                value="calc: cigarroa macd contrast dose nephrotoxicity aki limit"
                onSelect={() => runCommand(() => router.push("/dashboard/calculators?calc=cigarroa"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">Cigarroa MACD</span>
                    <span className="text-zinc-500 ml-1.5">(5 × Wt) / Cr</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Formula</span>
              </Command.Item>

              <Command.Item
                value="calc: meld 3.0 model for end-stage liver disease mortality tips"
                onSelect={() => runCommand(() => router.push("/dashboard/calculators?calc=meld"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">MELD 3.0 Score</span>
                    <span className="text-zinc-500 ml-1.5">Bilirubin, Cr, INR, Na, Albumin</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Calculator</span>
              </Command.Item>

              <Command.Item
                value="calc: child pugh ctp score cirrhosis severity"
                onSelect={() => runCommand(() => router.push("/dashboard/calculators?calc=child-pugh"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">Child-Pugh (CTP) Score</span>
                    <span className="text-zinc-500 ml-1.5">Encephalopathy, Ascites, INR, Bilirubin</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Calculator</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-zinc-100 my-1" />

            {/* Group 5: Workstation Navigation */}
            <Command.Group
              heading="Clinical Workstation Modules"
              className="text-[11px] font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400 [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                value="nav: consent form bilingual hindi english signature nmc printable tips tace biopsy pcn"
                onSelect={() => runCommand(() => router.push("/dashboard/consent"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <FileSignature className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">Bilingual Informed Consent Forms</span>
                    <span className="text-zinc-500 ml-1.5">(English / Hindi)</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Legal</span>
              </Command.Item>

              <Command.Item
                value="nav: preparation sheet pre-op fasting npo labs cigarroa holding checklist"
                onSelect={() => runCommand(() => router.push("/dashboard/consent?tab=PREPARATION"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <ClipboardCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900">Pre-Procedure Preparation Sheet</span>
                    <span className="text-zinc-500 ml-1.5">(Fasting, Labs, Drug Holding)</span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">Checklist</span>
              </Command.Item>

              <Command.Item
                value="nav: pacs dicom viewer cine radiation dose sr"
                onSelect={() => runCommand(() => router.push("/dashboard/imaging/STUDY-XA-2026-09142"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Eye className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>PACS Multi-Modality Viewer Bridge</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Command.Item>

              <Command.Item
                value="nav: inventory hardware barcode rfid depletion rmscl stock"
                onSelect={() => runCommand(() => router.push("/dashboard/inventory"))}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-zinc-800 hover:bg-zinc-100 aria-selected:bg-zinc-100 aria-selected:text-zinc-900 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>Smart Hardware Inventory</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-zinc-100 my-1" />

            {/* Group 6: Session Controls */}
            <Command.Group
              heading="Session"
              className="text-[11px] font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400 [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                value="sec: lock bedside station lock screen timeout session"
                onSelect={() =>
                  runCommand(() => {
                    if (onLockBedside) onLockBedside();
                  })
                }
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs cursor-pointer text-rose-600 hover:bg-rose-50 aria-selected:bg-rose-50 aria-selected:text-rose-700 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Lock className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span className="font-medium">Lock Bedside Workstation</span>
                </div>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-rose-200 rounded text-rose-600">
                  ⌘L
                </kbd>
              </Command.Item>
            </Command.Group>
          </Command.List>

          {/* Footer Info Strip */}
          <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 border-t border-zinc-200 text-[11px] text-zinc-500">
            <div className="flex items-center gap-2">
              <span>Use</span>
              <kbd className="px-1 py-0.5 text-[10px] font-mono bg-white border border-zinc-200 rounded">↑</kbd>
              <kbd className="px-1 py-0.5 text-[10px] font-mono bg-white border border-zinc-200 rounded">↓</kbd>
              <span>to navigate</span>
              <span>•</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-zinc-200 rounded">↵</kbd>
              <span>to select</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[10px]">
              <span>p: Patients • s: Schemes • w: Wards</span>
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
}
