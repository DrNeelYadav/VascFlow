import React, { useState, useRef } from 'react';
import { useClinicalStore, STAFF_PERSONAS } from '../../stores/useClinicalStore';
import { X, Download, Upload, RotateCcw, Terminal, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SystemAdminDrawer: React.FC = () => {
  const isOpen = useClinicalStore((s) => s.isAdminOpen);
  const closeAdmin = useClinicalStore((s) => s.closeAdmin);
  const activeRole = useClinicalStore((s) => s.activeRole);
  const exportJson = useClinicalStore((s) => s.exportDatabaseJson);
  const importJson = useClinicalStore((s) => s.importDatabaseJson);
  const resetDefaults = useClinicalStore((s) => s.resetToDefaults);

  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const currentRole = STAFF_PERSONAS[activeRole];

  const handleExport = () => {
    const data = exportJson();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sms_ir_ris_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage({ text: 'Database exported successfully as JSON file!', type: 'success' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const ok = importJson(text);
      if (ok) {
        setMessage({ text: 'Backup imported successfully! Clinical database refreshed.', type: 'success' });
      } else {
        setMessage({ text: 'Failed to import backup: Invalid JSON schema format.', type: 'error' });
      }
      setTimeout(() => setMessage(null), 3000);
    };
    reader.readAsText(file);
    if (e.target) e.target.value = '';
  };

  const handleReset = () => {
    if (window.confirm('Reset all bookings and biopsy records to standard SMS Medical College presets?')) {
      resetDefaults();
      setMessage({ text: 'Default SMS Medical College IR scenarios reloaded.', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={closeAdmin} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-crimson-500" />
                <span>System Administration & Data Vault</span>
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">SMS IR-RIS v3.5 Enterprise • Bangur DSA Suite</p>
            </div>
            <button
              onClick={closeAdmin}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 overflow-y-auto flex-1 space-y-4 text-xs">
            {message && (
              <div
                className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                  message.type === 'success'
                    ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
                    : 'bg-red-950/60 border-red-800 text-red-300'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{message.text}</span>
              </div>
            )}

            {/* Database Backup & Restore */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="font-semibold text-slate-200 text-xs">Database Backup & Sync</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Export the complete clinical ledger (active bookings, biopsy logs, patient demographics, and completed cases) as a JSON file, or restore from a workstation backup.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleExport}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white font-bold transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export DB (JSON)</span>
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Import Backup</span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".json"
                  className="hidden"
                />
              </div>
            </div>

            {/* Standard Presets Reload */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="font-semibold text-slate-200 text-xs">Standard Case Presets</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Restore the default SMS Medical College clinical cases for TACE, BAE, PTBD, Varicocele, and EVLA.
              </p>
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reload Standard Scenarios</span>
              </button>
            </div>

            {/* Terminal Context & Audit */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="font-semibold text-slate-200 text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Active Terminal Context</span>
              </div>
              <div className="font-mono text-[11px] text-slate-300 space-y-1 bg-slate-900/90 p-3 rounded-lg border border-slate-800/80">
                <div>Terminal: <b className="text-slate-100">SMS-BANGUR-ANGIO-01</b></div>
                <div>Location: <b className="text-slate-100">Bangur Institute, Room 104</b></div>
                <div>Persona: <b className="text-crimson-400">{currentRole.code} - {currentRole.title}</b></div>
                <div>Storage: <span className="text-emerald-400 font-semibold">Zustand LocalStorage (sms_ir_store_v1)</span></div>
                <div>Status: <span className="text-emerald-400 font-semibold">Offline PWA Service Worker Ready</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
