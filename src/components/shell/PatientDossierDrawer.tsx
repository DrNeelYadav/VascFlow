import React, { useState } from 'react';
import { useClinicalStore } from '../../stores/useClinicalStore';
import { calculateMacd } from '../../lib/calculators';
import { copyToClipboard } from '../../lib/ihmsBridge';
import { useNavigate } from 'react-router-dom';
import { X, ShieldCheck, HeartPulse, Stethoscope, Pill, FileText, Copy, Check } from 'lucide-react';

export const PatientDossierDrawer: React.FC = () => {
  const isOpen = useClinicalStore((s) => s.isDossierOpen);
  const closeDossier = useClinicalStore((s) => s.closeDossier);
  const patient = useClinicalStore((s) => s.dossierPatient) || useClinicalStore((s) => s.activePatient);
  const [activeDossierTab, setActiveDossierTab] = useState<'preop' | 'intraop' | 'postop' | 'discharge'>('preop');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  if (!isOpen || !patient) return null;

  const macdCalc = calculateMacd(patient.weightKg, patient.serumCreatinine);

  const handleCopyForIhms = async () => {
    const summary = `SMS HOSPITAL JAIPUR - INTERVENTIONAL RADIOLOGY CLINICAL SUMMARY
Patient: ${patient.name} (${patient.age}Y/${patient.gender.charAt(0)}) | Bed: ${patient.bedNo}
CR No: ${patient.crNo} | IPD No: ${patient.ipdNo}
Scheme: ${patient.scheme} (TID: ${patient.schemeTid || 'N/A'})
Diagnosis: ${patient.diagnosis}
Procedure: ${patient.procedureName || 'Interventional Radiology Procedure'}
MACD Limit: ${macdCalc.macdMl} mL | Baseline Cr: ${patient.serumCreatinine} mg/dL`;
    await copyToClipboard(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleJumpToDischarge = () => {
    closeDossier();
    navigate('/discharge');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={closeDossier} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-crimson-950 border border-crimson-800 flex items-center justify-center font-bold text-crimson-300">
                PT
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span>{patient.name}</span>
                  <span className="text-xs text-slate-400 font-normal">
                    ({patient.age}Y/{patient.gender})
                  </span>
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-0.5">
                  <span>CR: {patient.crNo}</span>
                  <span>•</span>
                  <span className="text-crimson-400 font-semibold">{patient.procedureName || 'IR Procedure'}</span>
                </div>
              </div>
            </div>
            <button
              onClick={closeDossier}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Dossier Tabs */}
          <div className="flex items-center border-b border-slate-800 bg-slate-950/60 px-4 text-xs font-semibold">
            <button
              onClick={() => setActiveDossierTab('preop')}
              className={`py-2.5 px-3 border-b-2 transition ${
                activeDossierTab === 'preop'
                  ? 'border-crimson-500 text-crimson-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              1. Pre-Op & Labs
            </button>
            <button
              onClick={() => setActiveDossierTab('intraop')}
              className={`py-2.5 px-3 border-b-2 transition ${
                activeDossierTab === 'intraop'
                  ? 'border-crimson-500 text-crimson-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              2. Intra-Op Hardware
            </button>
            <button
              onClick={() => setActiveDossierTab('postop')}
              className={`py-2.5 px-3 border-b-2 transition ${
                activeDossierTab === 'postop'
                  ? 'border-crimson-500 text-crimson-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              3. Post-Op Rx & Care
            </button>
            <button
              onClick={() => setActiveDossierTab('discharge')}
              className={`py-2.5 px-3 border-b-2 transition ${
                activeDossierTab === 'discharge'
                  ? 'border-crimson-500 text-crimson-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              4. Discharge Slip
            </button>
          </div>

          {/* Body */}
          <div className="p-5 overflow-y-auto flex-1 space-y-4 text-xs">
            {activeDossierTab === 'preop' && (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                    <HeartPulse className="w-4 h-4 text-crimson-400" />
                    <span>Baseline Laboratory Profile</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono mt-2">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Sr. Creatinine</span>
                      <span className="text-slate-100 font-bold">{patient.serumCreatinine} mg/dL</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Total Bilirubin</span>
                      <span className="text-slate-100 font-bold">{patient.totalBilirubin} mg/dL</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Sr. Albumin</span>
                      <span className="text-slate-100 font-bold">{patient.serumAlbumin} g/dL</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">PT / INR</span>
                      <span className="text-slate-100 font-bold">{patient.inr}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Renal Contrast Safety Ceiling</span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-relaxed">
                    Cigarroa Formula: <code className="text-emerald-400 font-mono">(5 * {patient.weightKg} kg) / {patient.serumCreatinine} mg/dL</code>
                    <div className="text-emerald-300 font-bold font-mono text-sm mt-1">
                      Max Allowable Contrast Dose (MACD): {macdCalc.macdMl} mL
                    </div>
                    <div className="text-slate-400 text-[10px] mt-0.5">
                      Ensures renal protection against Contrast-Induced Acute Kidney Injury.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-slate-400 text-[11px] block font-semibold">Government Scheme Pre-Auth</span>
                  <div className="text-slate-200 text-xs">
                    Scheme: <b>{patient.scheme}</b>
                  </div>
                  <div className="text-slate-400 text-xs">
                    TID: <span className="font-mono text-slate-200">{patient.schemeTid || 'Pending Validation'}</span>
                  </div>
                </div>
              </div>
            )}

            {activeDossierTab === 'intraop' && (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                    <Stethoscope className="w-4 h-4 text-blue-400" />
                    <span>Hardware Indented & Catheter Log</span>
                  </div>
                  <div className="space-y-1.5 text-slate-300 text-xs font-mono">
                    <div>• Access: 5F Radiofocus Sheath (Right CFA)</div>
                    <div>• Diagnostic: 5F Yashiro / Cobra C2 Catheter</div>
                    <div>• Guidewire: 0.035 Hydrophilic Radifocus (Terumo)</div>
                    <div>• Microcatheter: 2.7F Progreat with 0.014 Glidewire GT</div>
                    <div>• Embolic: Calibrated Particles / Lipiodol Ultra-Fluid</div>
                  </div>
                </div>
              </div>
            )}

            {activeDossierTab === 'postop' && (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                    <Pill className="w-4 h-4 text-purple-400" />
                    <span>Discharge Prescriptions & Orders</span>
                  </div>
                  <div className="space-y-2 text-slate-300 text-xs">
                    <div>1. Tab Paracetamol 650mg PO TDS x 3 days</div>
                    <div>2. Tab Pantoprazole 40mg PO OD before breakfast x 7 days</div>
                    <div>3. Tab Ondansetron 4mg PO TDS PRN for nausea</div>
                    <div>4. Tab Ursodeoxycholic Acid 300mg PO BD</div>
                  </div>
                </div>
              </div>
            )}

            {activeDossierTab === 'discharge' && (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>Official Discharge Slip Summary</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Bed rest for 24 hours. Keep groin puncture site dry and clean for 48 hours. Report immediately to SMS Emergency in case of hematoma, severe pain, or fever. Review in IR OPD Room 922 after 7 days.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={handleJumpToDischarge}
              className="px-3.5 py-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
            >
              Open in Full Discharge Studio
            </button>
            <button
              onClick={handleCopyForIhms}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-bold transition shadow-md shadow-crimson-900/30"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy for IHMS'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
