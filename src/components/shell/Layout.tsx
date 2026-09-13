import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { PatientSafetyStrip } from './PatientSafetyStrip';
import { PatientDossierDrawer } from './PatientDossierDrawer';
import { SystemAdminDrawer } from './SystemAdminDrawer';
import { Sidebar } from './Sidebar';
import { PageTransition } from '../ui/PageTransition';
import { ToastProvider } from '../ui/toast';
import { Button } from '../ui/button';
import { ClinicalFAB } from '../ui/ClinicalFAB';
import {
  ScanText,
  UploadCloud,
  X,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useClinicalStore } from '../../stores/useClinicalStore';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isOcrDrawerOpen, setIsOcrDrawerOpen] = useState(false);
  const [ocrText, setOcrText] = useState('');
  const [isProcessingOcr, setIsProcessingOcr] = useState(false);
  const [ocrParsedResult, setOcrParsedResult] = useState<{ crNo?: string; labValues?: string } | null>(null);

  const activePatient = useClinicalStore((s) => s.activePatient);
  const updatePatientSafetyProfile = useClinicalStore((s) => s.updatePatientSafetyProfile);
  const location = useLocation();

  const handleSimulatedOcr = (type: 'labs' | 'preauth') => {
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
          labValues: 'Cr: 1.45 mg/dL | Plt: 85,000 | INR: 1.42 | Bili: 2.1 mg/dL'
        });
        updatePatientSafetyProfile({
          serumCreatinine: 1.45,
          totalBilirubin: 2.1,
          serumAlbumin: 3.1,
          inr: 1.42,
          sodiumMeqL: 134
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
          labValues: 'MAAY Approved: INR 45,000 | Pre-Auth ID: TID-2026-CHIR-94812'
        });
      }
      setIsProcessingOcr(false);
    }, 600);
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col font-sans selection:bg-[#E8F0FE] selection:text-[#1A73E8]">
        {/* Google Workspace Centered Search Header */}
        <Header />

        {/* Main Body: Google Drive Layout with Collapsible Left Sidebar */}
        <div className="flex-1 flex overflow-hidden">
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            currentPath={location.pathname}
            onOpenCreate={() => { window.location.hash = '/ot-booking'; }}
          />

          {/* Main Canvas with Google MD3 Easing Transitions */}
          <main className="flex-1 overflow-y-auto bg-[#F8F9FA] focus:outline-none flex flex-col">
            <PageTransition id={location.pathname}>
              {children}
            </PageTransition>
          </main>
        </div>

        {/* Slide-out IHMS OCR & Lab Ingestion Drawer */}
        {isOcrDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-xs transition-opacity">
            <div className="w-full max-w-md bg-[#FFFFFF] border-l border-[#DADCE0] h-full shadow-2xl flex flex-col z-50">
              {/* Drawer Header */}
              <div className="p-4 border-b border-[#DADCE0] flex items-center justify-between bg-[#FFFFFF]">
                <div className="flex items-center gap-2">
                  <ScanText className="w-5 h-5 text-[#1A73E8]" />
                  <div>
                    <h3 className="text-sm font-heading font-medium text-[#202124]">IHMS Lab OCR Ingestion</h3>
                    <p className="text-[11px] text-[#5F6368]">Ingest labs directly into active patient safety profile</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOcrDrawerOpen(false)}
                  className="p-1.5 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4]"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
                <div className="bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0]">
                  <div className="text-[11px] text-[#5F6368]">Active Target Patient</div>
                  <div className="font-bold text-sm text-[#202124] mt-0.5">{activePatient.name}</div>
                  <div className="text-[#5F6368] font-mono text-[11px]">CR: {activePatient.crNo} | IPD: {activePatient.ipdNo}</div>
                </div>

                <div>
                  <div className="text-xs font-medium text-[#202124] mb-2">Simulate OCR Ingestion / Intake:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleSimulatedOcr('labs')}
                      disabled={isProcessingOcr}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-[#202124] font-medium transition text-xs shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#F9AB00]" />
                      <span>LFT & KFT Labs</span>
                    </button>
                    <button
                      onClick={() => handleSimulatedOcr('preauth')}
                      disabled={isProcessingOcr}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-[#202124] font-medium transition text-xs shadow-xs"
                    >
                      <UploadCloud className="w-3.5 h-3.5 text-[#1E8E3E]" />
                      <span>MAAY Sanction</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[#5F6368] text-xs mb-1 font-medium">
                    Extracted Raw OCR Text / IHMS Stream:
                  </label>
                  <textarea
                    rows={8}
                    value={ocrText}
                    onChange={(e) => setOcrText(e.target.value)}
                    placeholder="Paste or upload lab report text / IHMS 2.0 electronic medical record snippet..."
                    className="w-full bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-2.5 font-mono text-[11px] text-[#202124] focus:border-[#202124] focus:ring-1 focus:ring-[#202124] outline-none"
                  />
                </div>

                {ocrParsedResult && (
                  <div className="bg-[#E6F4EA] border border-[#1E8E3E]/30 p-3 rounded-lg text-[#137333]">
                    <div className="flex items-center gap-1.5 font-bold text-xs mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#1E8E3E]" />
                      <span>Safety Parameters Synchronized</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#137333]">
                      {ocrParsedResult.labValues}
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-[#DADCE0] bg-[#FFFFFF] flex justify-end gap-2">
                <button
                  onClick={() => setIsOcrDrawerOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-medium text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] border border-[#DADCE0] transition"
                >
                  Close Drawer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Google-Style Floating Action Button & Speed-Dial */}
        <ClinicalFAB />

        {/* Patient Dossier Drawer */}
        <PatientDossierDrawer />

        {/* System Admin Drawer */}
        <SystemAdminDrawer />
      </div>
    </ToastProvider>
  );
};

export default Layout;
