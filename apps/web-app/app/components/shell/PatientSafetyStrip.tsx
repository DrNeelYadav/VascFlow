"use client";

import React, { useState } from "react";
import { useEndoflowStore, EndoflowPatient } from "../../dashboard/useEndoflowStore";
import { calculateMacd } from "../../lib/calculators";
import {
  User,
  ShieldAlert,
  ArrowRightLeft,
  FileText,
  ScanText,
  Sparkles,
  CheckCircle2,
  X,
  Plus,
} from "lucide-react";
import { PatientDossierModal } from "../PatientDossierModal";

export function PatientSafetyStrip() {
  const patients = useEndoflowStore((s) => s.patients);
  const activeCaseId = useEndoflowStore((s) => s.activeCaseId);
  const updatePatient = useEndoflowStore((s) => s.updatePatient);

  // Active patient lookup or fallback to first
  const activePatient: EndoflowPatient | undefined =
    patients.find((p) => p.id === activeCaseId) || patients[0];

  const [isSwitchModalOpen, setIsSwitchModalOpen] = useState<boolean>(false);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [isOcrModalOpen, setIsOcrModalOpen] = useState<boolean>(false);
  const [isProcessingOcr, setIsProcessingOcr] = useState<boolean>(false);
  const [ocrReportType, setOcrReportType] = useState<"labs" | "preauth">("labs");
  const [ocrParsedResult, setOcrParsedResult] = useState<{
    summary: string;
    details: string;
  } | null>(null);

  if (!activePatient) return null;

  const macdCalc = calculateMacd(
    60,
    activePatient.labs.creat || 1.1,
    50
  );

  const handleSimulatedOcr = (type: "labs" | "preauth") => {
    setOcrReportType(type);
    setIsProcessingOcr(true);
    setOcrParsedResult(null);

    setTimeout(() => {
      if (type === "labs") {
        updatePatient(activePatient.id, {
          labs: {
            ...activePatient.labs,
            creat: 1.45,
            bili: 2.1,
            alb: 3.1,
            inr: 1.42,
            plt: 85000,
          },
        });
        setOcrParsedResult({
          summary: "SMS Hospital Central Lab Report Parsed Successfully",
          details:
            "Creatinine: 1.45 mg/dL | Bilirubin: 2.10 mg/dL | Albumin: 3.1 g/dL | Platelets: 85,000 /uL | INR: 1.42",
        });
      } else {
        updatePatient(activePatient.id, {
          summary: `${activePatient.summary} • Pre-Auth TID-2026-CHIR-94812 Approved under MAAY/RGHS for ₹47,960.`,
        });
        setOcrParsedResult({
          summary: "Government of Rajasthan MAAY Pre-Auth TID Parsed",
          details:
            "TID: TID-2026-CHIR-94812 | Package: 2849-IN061A (TACE) | Approved Amount: ₹47,960 | Status: Pre-Authorized",
        });
      }
      setIsProcessingOcr(false);
    }, 900);
  };

  return (
    <>
      <div className="w-full bg-white border-b border-[#DADCE0] px-4 py-1.5 transition-colors select-none z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs">
          {/* Patient Core Identifiers */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 font-bold text-[#202124]">
              <User className="w-3.5 h-3.5 text-[#1A73E8]" />
              <span>{activePatient.name}</span>
              <span className="text-[#5F6368] font-normal text-[11px]">
                ({activePatient.age}Y/{activePatient.sex.charAt(0)})
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#3C4043]">
              <span className="bg-[#F8F9FA] px-2 py-0.5 rounded-full border border-[#DADCE0]">
                CR: <b className="text-[#202124]">{activePatient.hid || "SMS-2026-089"}</b>
              </span>
              <span className="bg-[#F8F9FA] px-2 py-0.5 rounded-full border border-[#DADCE0]">
                IPD: <b className="text-[#202124]">{activePatient.ipd.bed || "Bed 01"}</b>
              </span>
              <span className="bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded-full border border-[#D2E3FC] font-medium">
                {activePatient.procedure || "Cath-Lab Target"}
              </span>
            </div>
          </div>

          {/* Clinical Guardrail Indicator: Weight, Cr, & MACD Ceiling */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 font-mono text-[11px] bg-[#F8F9FA] px-2.5 py-1 rounded-full border border-[#DADCE0]">
              <span className="text-[#5F6368]">
                Cr: <b className="text-[#202124]">{activePatient.labs.creat || 1.1} mg/dL</b>
              </span>
              <span className="text-[#DADCE0]">•</span>
              <span className="text-[#5F6368]">
                INR: <b className="text-[#202124]">{activePatient.labs.inr || 1.1}</b>
              </span>
              <span className="text-[#DADCE0]">•</span>
              <div
                className="flex items-center gap-1 text-[#137333] font-semibold"
                title="Cigarroa Maximum Allowable Contrast Dose (5 * Wt / Cr)"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#1E8E3E]" />
                <span>MACD Limit: {macdCalc.macdMl} mL</span>
              </div>
            </div>

            {/* Simulated Lab OCR Button */}
            <button
              onClick={() => {
                setOcrParsedResult(null);
                setIsOcrModalOpen(true);
              }}
              className="flex items-center gap-1 text-[11px] font-medium text-purple-700 hover:text-purple-800 bg-[#F3E8FD] hover:bg-[#E9D5FF] px-2.5 py-1 rounded-full transition border border-purple-200 cursor-pointer"
              title="Parse Physical Lab Report or MAAY Pre-Auth Document via OCR"
            >
              <ScanText className="w-3 h-3 text-purple-600" />
              <span>Lab OCR</span>
            </button>

            {/* Switch Active Patient Button */}
            <button
              onClick={() => setIsSwitchModalOpen(true)}
              className="flex items-center gap-1 text-[11px] font-medium text-[#1A73E8] hover:text-[#1765CC] bg-[#E8F0FE] hover:bg-[#D2E3FC] px-2.5 py-1 rounded-full transition border border-transparent cursor-pointer"
              title="Switch Active Target Patient"
            >
              <ArrowRightLeft className="w-3 h-3" />
              <span>Switch</span>
            </button>

            {/* Open Dossier Button */}
            <button
              onClick={() => setIsDossierOpen(true)}
              className="flex items-center gap-1 text-[11px] font-medium text-[#3C4043] hover:text-[#202124] bg-[#F1F3F4] hover:bg-[#E8EAED] px-2.5 py-1 rounded-full transition border border-[#DADCE0] cursor-pointer"
              title="Open Clinical Dossier & Lab Trends"
            >
              <FileText className="w-3 h-3 text-[#5F6368]" />
              <span className="hidden sm:inline">Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Patient Switcher Modal */}
      {isSwitchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl max-w-lg w-full p-5 shadow-2xl text-[#202124]">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#1A73E8]" />
                <h3 className="font-bold text-sm text-[#202124]">
                  Select Active Clinical Subject
                </h3>
              </div>
              <button
                onClick={() => setIsSwitchModalOpen(false)}
                className="p-1 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {patients.map((p) => {
                const isSelected = p.id === activePatient.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      useEndoflowStore.setState({ activeCaseId: p.id });
                      setIsSwitchModalOpen(false);
                    }}
                    className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between text-xs ${
                      isSelected
                        ? "bg-[#E8F0FE] border-[#1A73E8] font-semibold text-[#1A73E8]"
                        : "bg-white border-[#DADCE0] hover:bg-[#F8F9FA] text-[#202124]"
                    }`}
                  >
                    <div>
                      <div className="font-bold">{p.name}</div>
                      <div className="text-[11px] text-[#5F6368]">
                        {p.age}Y / {p.sex} • CR: {p.hid} • {p.procedure}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-[#DADCE0]">
                      {p.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Simulated Lab OCR Modal */}
      {isOcrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl max-w-lg w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-3">
              <div className="flex items-center gap-2">
                <ScanText className="w-4 h-4 text-purple-600" />
                <h3 className="font-bold text-sm text-[#202124]">
                  Clinical OCR Document Parser
                </h3>
              </div>
              <button
                onClick={() => setIsOcrModalOpen(false)}
                className="p-1 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#5F6368] leading-relaxed">
              Instantly ingest printed laboratory slips or Government Yojana approval certificates into active patient vitals.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSimulatedOcr("labs")}
                disabled={isProcessingOcr}
                className="p-3 rounded-xl border border-purple-200 bg-[#F3E8FD] hover:bg-[#E9D5FF] text-purple-900 text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <ScanText className="w-5 h-5 text-purple-700" />
                <span>SMS Central Lab Slip</span>
                <span className="text-[10px] text-purple-600 font-normal">Extracts Creatinine, Bilirubin, INR</span>
              </button>

              <button
                onClick={() => handleSimulatedOcr("preauth")}
                disabled={isProcessingOcr}
                className="p-3 rounded-xl border border-blue-200 bg-[#E8F0FE] hover:bg-[#D2E3FC] text-[#1A73E8] text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#1A73E8]" />
                <span>MAAY / RGHS Pre-Auth</span>
                <span className="text-[10px] text-blue-600 font-normal">Extracts TID, Package, Tariff</span>
              </button>
            </div>

            {isProcessingOcr && (
              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] text-center space-y-2">
                <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs text-[#5F6368]">
                  Running Optical Character Recognition &amp; Parsing Clinical Tokens...
                </p>
              </div>
            )}

            {ocrParsedResult && (
              <div className="p-4 rounded-xl bg-[#E6F4EA] border border-[#A8DAB5] text-[#137333] space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#137333]" />
                  <span>{ocrParsedResult.summary}</span>
                </div>
                <p className="text-[11px] font-mono leading-relaxed text-[#202124]">
                  {ocrParsedResult.details}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsOcrModalOpen(false)}
                    className="w-full py-2 bg-[#137333] text-white rounded-lg font-semibold text-xs hover:bg-[#0F5A27] transition"
                  >
                    Done &amp; Ingest into Active Dossier
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Patient Dossier Modal */}
      {isDossierOpen && (
        <PatientDossierModal
          patient={activePatient}
          isOpen={isDossierOpen}
          onClose={() => setIsDossierOpen(false)}
        />
      )}
    </>
  );
}
