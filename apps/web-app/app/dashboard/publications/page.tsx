"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useEndoflowStore } from "../useEndoflowStore";
import { PAPERS_REGISTRY, PaperDefinition } from "./data/papersRegistry";
import { ALL_SIX_PAPERS_DATA, PaperCaseRecord } from "./data/allSixPapersData";
import {
  updateStaffPassword,
  getStaffRegistryOverrides,
} from "../../lib/staffAccounts";

// Subcomponents
import { StudioCockpit } from "./components/StudioCockpit";
import { GoogleSheetGrid } from "./components/GoogleSheetGrid";
import { ReactiveAnalytics } from "./components/ReactiveAnalytics";
import { DicomFigureTracker } from "./components/DicomFigureTracker";
import { GoogleDocsCanvas } from "./components/GoogleDocsCanvas";
import { LiteratureBenchmarkView } from "./components/LiteratureBenchmarkView";

import {
  LayoutDashboard,
  FileSpreadsheet,
  BarChart3,
  Image as ImageIcon,
  FileText,
  BookOpen,
  Lock,
  Award,
  ChevronRight,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function PublicationsResearchStudioPage() {
  const currentStaff = useEndoflowStore((s) => s.currentStaff);

  // Strict Security Guard: Exclusive to DM01 (Dr. Neel Yadav)
  const isAuthorized = currentStaff?.code === "DM01";

  // Active Paper State (default to Paper 1: VAPSA)
  const [activePaperId, setActivePaperId] = useState<string>("paper-vapsa");

  // Active View Tab State
  const [activeTab, setActiveTab] = useState<
    "cockpit" | "sheet" | "analytics" | "figures" | "docs" | "benchmark" | "security"
  >("cockpit");

  // Cases Dataset State (all 6 papers, with localStorage persistence)
  const [allCases, setAllCases] = useState<Record<string, PaperCaseRecord[]>>(ALL_SIX_PAPERS_DATA);

  // Figure Snip Statuses & Images State
  const [figureStatuses, setFigureStatuses] = useState<Record<string, Record<string, string>>>({});
  const [figureImages, setFigureImages] = useState<Record<string, Record<string, string>>>({});

  // Dr. Neel Custom Password State
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [passwordChangeStatus, setPasswordChangeStatus] = useState<string | null>(null);

  // Load edits and figure statuses from localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const savedData = localStorage.getItem("endoflow_papers_data_v2");
        if (savedData) {
          const parsed = JSON.parse(savedData);
          if (parsed && typeof parsed === "object") {
            setAllCases((prev) => ({ ...prev, ...parsed }));
          }
        }

        const savedFigStatuses = localStorage.getItem("endoflow_figure_statuses");
        if (savedFigStatuses) {
          setFigureStatuses(JSON.parse(savedFigStatuses));
        }

        const savedFigImages = localStorage.getItem("endoflow_figure_images");
        if (savedFigImages) {
          setFigureImages(JSON.parse(savedFigImages));
        }
      }
    } catch {}
  }, []);

  // Update a single case field and persist
  const handleUpdateCase = (caseId: string, field: keyof PaperCaseRecord, value: any) => {
    setAllCases((prev) => {
      const currentList = prev[activePaperId] || [];
      const updatedList = currentList.map((c) =>
        c.id === caseId ? { ...c, [field]: value } : c
      );
      const nextState = { ...prev, [activePaperId]: updatedList };

      try {
        if (typeof window !== "undefined") {
          localStorage.setItem("endoflow_papers_data_v2", JSON.stringify(nextState));
        }
      } catch {}

      return nextState;
    });
  };

  // Update figure snip status and persist
  const handleUpdateFigureStatus = (figureId: string, status: string) => {
    setFigureStatuses((prev) => {
      const paperMap = prev[activePaperId] || {};
      const nextMap = { ...paperMap, [figureId]: status };
      const nextState = { ...prev, [activePaperId]: nextMap };

      try {
        if (typeof window !== "undefined") {
          localStorage.setItem("endoflow_figure_statuses", JSON.stringify(nextState));
        }
      } catch {}

      return nextState;
    });
  };

  // Update figure snip image URL/path and persist
  const handleUpdateFigureImage = (figureId: string, imageUrl: string) => {
    setFigureImages((prev) => {
      const paperMap = prev[activePaperId] || {};
      const nextMap = { ...paperMap, [figureId]: imageUrl };
      const nextState = { ...prev, [activePaperId]: nextMap };

      try {
        if (typeof window !== "undefined") {
          localStorage.setItem("endoflow_figure_images", JSON.stringify(nextState));
        }
      } catch {}

      return nextState;
    });
  };

  // Dr. Neel Custom Password Change Handler
  const handleUpdateDrNeelPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasswordInput.trim()) return;

    try {
      updateStaffPassword("DM01", newPasswordInput.trim());
      setPasswordChangeStatus(`Password successfully updated to "${newPasswordInput.trim()}".`);
      setNewPasswordInput("");
      setTimeout(() => setPasswordChangeStatus(null), 4000);
    } catch {
      setPasswordChangeStatus("Error updating password. Please try again.");
    }
  };

  const activePaper =
    PAPERS_REGISTRY.find((p) => p.id === activePaperId) || PAPERS_REGISTRY[0];
  const activeCases = allCases[activePaperId] || [];

  // Unauthorized Lock Screen
  if (!isAuthorized) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl border border-red-300 dark:border-red-800 p-8 shadow-sm text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto border border-red-200 dark:border-red-800">
            <Lock className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Institutional Access Restricted
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
              The Interventional Radiology Academic Research &amp; Manuscript Repository is confidential and reserved exclusively for Principal Investigator{" "}
              <strong className="text-slate-900 dark:text-slate-100">Dr. Neel Yadav (DM01)</strong>.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-left text-xs text-slate-500 dark:text-slate-400 space-y-1 font-mono">
            <div>Current Staff ID: {currentStaff?.code || "UNAUTHENTICATED"}</div>
            <div>Access Level: {currentStaff?.tier || "NONE"}</div>
            <div>Security Status: ACCESS_DENIED (Audited)</div>
          </div>
          <Link
            href="/dashboard/worklist"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-medium transition cursor-pointer"
          >
            Return to Clinical Worklist
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 pb-16">
      {/* Top Main Header */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Interventional Radiology Academic Research &amp; Registry
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  PI: Dr. Neel Yadav (DM01)
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  SMS Medical College, Jaipur
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Authentic SMS Cath-Lab cohort datasets, manuscript drafting, and DICOM figure extraction.
              </p>
            </div>
          </div>

          {/* Paper Quick Selector */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
              Active Paper:
            </label>
            <select
              value={activePaperId}
              onChange={(e) => setActivePaperId(e.target.value)}
              className="py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600 shadow-2xs cursor-pointer"
            >
              {PAPERS_REGISTRY.map((p, idx) => (
                <option key={p.id} value={p.id}>
                  Paper #{idx + 1}: {p.code} &bull; {p.shortName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* View Tabs Bar */}
        <div className="mt-5 pt-4 border-t border-slate-300 dark:border-slate-700 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab("cockpit")}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 cursor-pointer border ${
                activeTab === "cockpit"
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-slate-100 shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-700"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Research Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("sheet")}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 cursor-pointer border ${
                activeTab === "sheet"
                  ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-700"
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Case Registry Data</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("analytics")}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 cursor-pointer border ${
                activeTab === "analytics"
                  ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-700"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Statistical Analytics</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("figures")}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 cursor-pointer border ${
                activeTab === "figures"
                  ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-700"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>High-Resolution Figures</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("docs")}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 cursor-pointer border ${
                activeTab === "docs"
                  ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-700"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Manuscript Draft</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("benchmark")}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 cursor-pointer border ${
                activeTab === "benchmark"
                  ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-700"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Literature Comparison</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab("security")}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer border ${
              activeTab === "security"
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-slate-100 shadow-xs"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-700"
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Access Control</span>
          </button>
        </div>
      </div>

      {/* Main Content Area Based on Active Tab */}
      {activeTab === "cockpit" && (
        <StudioCockpit
          papers={PAPERS_REGISTRY}
          activePaperId={activePaperId}
          onSelectPaper={(id) => setActivePaperId(id)}
          onNavigateTab={(tab) => setActiveTab(tab)}
          allCases={allCases}
          figureStatuses={figureStatuses}
        />
      )}

      {activeTab === "sheet" && (
        <GoogleSheetGrid
          paper={activePaper}
          cases={activeCases}
          onUpdateCase={handleUpdateCase}
        />
      )}

      {activeTab === "analytics" && (
        <ReactiveAnalytics paper={activePaper} cases={activeCases} />
      )}

      {activeTab === "figures" && (
        <DicomFigureTracker
          paper={activePaper}
          figureStatuses={figureStatuses[activePaperId] || {}}
          figureImages={figureImages[activePaperId] || {}}
          onUpdateFigureStatus={handleUpdateFigureStatus}
          onUpdateFigureImage={handleUpdateFigureImage}
        />
      )}

      {activeTab === "docs" && <GoogleDocsCanvas paper={activePaper} />}

      {activeTab === "benchmark" && <LiteratureBenchmarkView paper={activePaper} />}

      {activeTab === "security" && (
        <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Principal Investigator (Dr. Neel) Password &amp; Access Control
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Set or change your personal password with instant persistent storage.
              </p>
            </div>
          </div>

          <form onSubmit={handleUpdateDrNeelPassword} className="space-y-3 pt-2">
            <div>
              <label className="text-xs font-semibold text-slate-900 dark:text-slate-200 block mb-1">
                New Custom Password
              </label>
              <input
                type="text"
                value={newPasswordInput}
                onChange={(e) => setNewPasswordInput(e.target.value)}
                placeholder='e.g. "Dr. Neel"'
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-blue-600"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                You can enter &quot;Dr. Neel&quot; or any custom PIN. Auto-fill remains completely disabled on the login screen.
              </p>
            </div>

            {passwordChangeStatus && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{passwordChangeStatus}</span>
              </div>
            )}

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition cursor-pointer"
            >
              Update Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
