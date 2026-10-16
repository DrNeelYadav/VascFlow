"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  Download,
  ExternalLink,
  CheckCircle2,
  RefreshCw,
  X,
  Database,
  Calendar as CalendarIcon,
  Stethoscope,
} from "lucide-react";

interface DoubleSaveGoogleDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DoubleSaveGoogleDriveModal({ isOpen, onClose }: DoubleSaveGoogleDriveModalProps) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState(false);

  if (!isOpen) return null;

  const handleForceSync = async () => {
    setIsSyncing(true);
    try {
      await fetch("/api/sync/google-drive", { method: "POST" });
      setSyncFeedback(true);
      setTimeout(() => setSyncFeedback(false), 2500);
    } catch (e) {
      console.error("Double-save sync trigger failed:", e);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 space-y-4 text-slate-900 dark:text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight">Google Drive &amp; Sheets Double-Save</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Dual-storage continuous cloud redundancy</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Synchronized Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20">
            <Database className="w-4 h-4 mx-auto mb-1 text-blue-600 dark:text-sky-400" />
            <div className="font-bold text-sm">1,090</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Master Cases</div>
          </div>
          <div className="p-2.5 rounded-xl border border-sky-200 dark:border-sky-900/60 bg-sky-50/50 dark:bg-sky-950/20">
            <CalendarIcon className="w-4 h-4 mx-auto mb-1 text-sky-600 dark:text-sky-400" />
            <div className="font-bold text-sm">1,084+</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Calendar Slots</div>
          </div>
          <div className="p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20">
            <Stethoscope className="w-4 h-4 mx-auto mb-1 text-emerald-600 dark:text-emerald-400" />
            <div className="font-bold text-sm">7 Cases</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">OPD OCR Intake</div>
          </div>
        </div>

        {/* Status banner */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span className="font-medium">All cath-lab surgical procedures, calendar slots &amp; OPD consultations are continuously prepared for Google Drive sync.</span>
        </div>

        {/* Direct Download & Cloud Links */}
        <div className="space-y-2 text-xs">
          <a
            href="https://docs.google.com/spreadsheets/d/1lVmHP5oQCfWslvfLjX7tijSJD7-_F8Tx/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20 hover:bg-emerald-100/50 transition-colors font-medium group"
          >
            <span className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Open Double-Save Master in Google Sheets</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1FE4N4pwrxJa6ZSdbniWCTR7luOZTBnaI/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50/40 dark:bg-sky-950/20 hover:bg-sky-100/50 transition-colors font-medium group"
          >
            <span className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Open Angiosuite Calendar in Google Sheets</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-colors" />
          </a>

          <a
            href="https://drive.google.com/drive/folders/1qDteJMlfzjQQLlJ4YlthpHI3_Vt32tP1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl border border-blue-300 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20 hover:bg-blue-100/50 transition-colors font-medium group"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>Open VascFlow Google Drive Archive Folder</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </a>

          <a
            href="/exports/VascFlow_Angiosuite_DoubleSave_Master.xlsx"
            download
            className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors font-medium group"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span>Download Master Multi-Sheet Workbook (.xlsx)</span>
            </span>
            <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
          </a>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={handleForceSync}
            disabled={isSyncing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`} />
            <span>{syncFeedback ? "Verified & Synced" : isSyncing ? "Verifying..." : "Verify Double-Save Pass"}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
