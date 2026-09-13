'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { PatientSafetyStrip } from './PatientSafetyStrip';
import { PatientDossierDrawer } from './PatientDossierDrawer';
import { SystemAdminDrawer } from './SystemAdminDrawer';
import { PageTransition } from '@/components/ui/PageTransition';
import { ToastProvider, useToast } from '@/components/ui/toast';
import { ClinicalFAB } from '@/components/ui/ClinicalFAB';
import { useClinicalStore } from '@/stores/useClinicalStore';
import { ScanText, X, Sparkles, UploadCloud, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CathLabAppShellInnerProps {
  children: React.ReactNode;
}

const CathLabAppShellInner: React.FC<CathLabAppShellInnerProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isOcrDrawerOpen, setIsOcrDrawerOpen] = useState(false);
  const [ocrText, setOcrText] = useState('');
  const [isProcessingOcr, setIsProcessingOcr] = useState(false);
  const [ocrParsedResult, setOcrParsedResult] = useState<{ crNo?: string; labValues?: string } | null>(null);

  const activePatient = useClinicalStore((s) => s.activePatient);
  const updatePatientSafetyProfile = useClinicalStore((s) => s.updatePatientSafetyProfile);
  const { toast } = useToast();

  // Keyboard shortcut listener: Ctrl+B / Cmd+B to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsSidebarCollapsed((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSimulatedOcr = useCallback((type: 'labs' | 'preauth') => {
    setIsProcessingOcr(true);
    setTimeout(() => {
      if (type === 'labs') {
        const simulated = `SMS MEDICAL COLLEGE CENTRAL LAB REPORT
CR NO: ${activePatient.crNo}  NAME: ${activePatient.name}
Serum Creatinine: 1.45 mg/dL (Ref: 0.6 - 1.2)
Total Bilirubin: 2.10 mg/dL (Ref: 0.2 - 1.0)
Serum Albumin: 3.10 g/dL (Ref: 3.5 - 5.0)
Platelet Count: 85,000 /uL (Ref: 150,000 - 450,000)
Prothrombin Time (PT/INR): 1.42 (Ref: 0.9 - 1.2)
Serum Sodium: 134 mEq/L (Ref: 135 - 145)`;
        setOcrText(simulated);
        setOcrParsedResult({
          crNo: activePatient.crNo,
          labValues: 'Cr: 1.45 mg/dL | Plt: 85,000 | INR: 1.42 | Bili: 2.1 mg/dL',
        });
        updatePatientSafetyProfile({
          serumCreatinine: 1.45,
          totalBilirubin: 2.1,
          serumAlbumin: 3.1,
          inr: 1.42,
          sodiumMeqL: 134,
        });
        toast({
          title: 'Safety Profile Synchronized',
          description: `Updated Creatinine (1.45 mg/dL) and INR (1.42) for ${activePatient.name}`,
          type: 'success',
        });
      } else {
        const simulated = `GOVERNMENT OF RAJASTHAN - CHIRANJEEVI / MAAY APPROVAL
TID: TID-2026-CHIR-94812
Patient: ${activePatient.name} (CR: ${activePatient.crNo})
Pre-Auth Code: CHIR-IR-001 (TACE Procedure)
Approved Amount: INR 45,000/-
Status: PRE-AUTH SANCTIONED FOR ANGIOSUITE`;
        setOcrText(simulated);
        setOcrParsedResult({
          crNo: activePatient.crNo,
          labValues: 'MAAY Approved: INR 45,000 | Pre-Auth ID: TID-2026-CHIR-94812',
        });
        toast({
          title: 'MAAY Tariff Sanctioned',
          description: 'Pre-auth sanctioned for INR 45,000 in Angiosuite registry.',
          type: 'info',
        });
      }
      setIsProcessingOcr(false);
    }, 600);
  }, [activePatient, updatePatientSafetyProfile, toast]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col selection:bg-[#E8F0FE] selection:text-[#1A73E8] antialiased">
      {/* Top Clinical Header */}
      <Header />

      {/* Main Workspace Body with Left Sidebar */}
      <div className="flex-1 flex overflow-hidden">
        {/* Minimalist Collapsible Navigation Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          onOpenCreate={() => { window.location.hash = '/ot-booking'; }}
        />

        {/* Dynamic Content Viewport with Framer Motion Page Transition */}
        <main className="flex-1 overflow-y-auto bg-[#F8F9FA] focus:outline-none flex flex-col">
          <PageTransition className="p-4 sm:p-6 max-w-7xl w-full mx-auto">
            {children}
          </PageTransition>
        </main>
      </div>

      {/* Slide-out IHMS OCR & Lab Ingestion Drawer */}
      {isOcrDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md bg-cathlab-card border-l border-cathlab-border h-full shadow-2xl flex flex-col z-50">
            {/* Header */}
            <div className="p-4 border-b border-cathlab-border flex items-center justify-between bg-cathlab">
              <div className="flex items-center gap-2">
                <ScanText className="w-5 h-5 text-crimson-light" />
                <div>
                  <h3 className="text-sm font-bold text-slate-100">IHMS Lab OCR Ingestion</h3>
                  <p className="text-[11px] text-slate-400">Ingest labs directly into active safety profile</p>
                </div>
              </div>
              <button
                onClick={() => setIsOcrDrawerOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-cathlab-elevated"
                aria-label="Close OCR Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              <div className="bg-cathlab-elevated p-3 rounded-lg border border-cathlab-border">
                <div className="text-[11px] text-slate-400 font-mono">Active Target Patient</div>
                <div className="font-bold text-sm text-slate-100 mt-0.5">{activePatient.name}</div>
                <div className="text-slate-400 font-mono text-[11px]">
                  CR: {activePatient.crNo} | IPD: {activePatient.ipdNo}
                </div>
              </div>

              {/* Sample Lab Preset Triggers */}
              <div>
                <div className="text-xs font-semibold text-slate-300 mb-2">
                  Simulate OCR Ingestion / Intake:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => handleSimulatedOcr('labs')}
                    disabled={isProcessingOcr}
                    className="flex items-center justify-center gap-1.5 h-9 text-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>LDT & KFT Labs</span>
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleSimulatedOcr('preauth')}
                    disabled={isProcessingOcr}
                    className="flex items-center justify-center gap-1.5 h-9 text-xs"
                  >
                    <UploadCloud className="w-3.5 h-3.5 text-emerald-400" />
                    <span>MAAY Sanction</span>
                  </Button>
                </div>
              </div>

              {/* Ingested Content Display */}
              <div>
                <label className="block text-slate-400 text-xs mb-1 font-semibold">
                  Extracted Raw OCR Text / IHMS Stream:
                </label>
                <textarea
                  rows={8}
                  value={ocrText}
                  onChange={(e) => setOcrText(e.target.value)}
                  placeholder="Paste or upload lab report text / IHMS 2.0 electronic medical record snippet..."
                  className="w-full bg-cathlab border border-cathlab-border rounded-lg p-2.5 font-mono text-[11px] text-slate-200 focus:border-crimson focus:ring-1 focus:ring-crimson outline-none"
                />
              </div>

              {ocrParsedResult && (
                <div className="bg-emerald-950/40 border border-emerald-800/80 p-3 rounded-lg text-emerald-200">
                  <div className="flex items-center gap-1.5 font-bold text-xs mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Safety Parameters Synchronized</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-300">
                    {ocrParsedResult.labValues}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-cathlab-border bg-cathlab flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsOcrDrawerOpen(false)}
              >
                Close Drawer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Google-Style Floating Action Button (FAB) & Speed Dial */}
      <ClinicalFAB />

      {/* Patient Dossier Drawer */}
      <PatientDossierDrawer />

      {/* System Admin Drawer */}
      <SystemAdminDrawer />
    </div>
  );
};

export const CathLabAppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ToastProvider>
      <CathLabAppShellInner>{children}</CathLabAppShellInner>
    </ToastProvider>
  );
};

export default CathLabAppShell;
