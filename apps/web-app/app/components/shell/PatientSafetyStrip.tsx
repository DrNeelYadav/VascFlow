"use client";

import React, { useState, useEffect } from "react";
import { useEndoflowStore, EndoflowPatient } from "../../dashboard/useEndoflowStore";
import { calculateMacd } from "../../lib/calculators";
import {
  User,
  ShieldAlert,
  AlertTriangle,
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
  const [isOverrideAcknowledged, setIsOverrideAcknowledged] = useState<boolean>(false);

  useEffect(() => {
    setIsOverrideAcknowledged(false);
  }, [activePatient?.id]);

  if (!activePatient) return null;

  const hasInr = typeof activePatient.labs?.inr === "number";
  const hasPlt = typeof activePatient.labs?.plt === "number";
  const hasCreat = typeof activePatient.labs?.creat === "number" && activePatient.labs.creat > 0;

  const isCriticalCoag = (hasInr && (activePatient.labs?.inr ?? 0) > 1.5) || (hasPlt && (activePatient.labs?.plt ?? 0) < 50000);
  const isCriticalRenal = hasCreat && (activePatient.labs?.creat ?? 0) > 2.0;
  const hasSafetyAlert = isCriticalCoag || isCriticalRenal;

  const macdCalc = hasCreat
    ? calculateMacd(60, activePatient.labs.creat as number, 50)
    : { valid: false, macdMl: 0, isExceeded: false, thresholdMl: 0 };

  const handleSimulatedOcr = (type: "labs" | "preauth") => {
    setOcrReportType(type);
    setIsProcessingOcr(true);
    setOcrParsedResult(null);

    setTimeout(() => {
      if (type === "labs") {
        setOcrParsedResult({
          summary: "SMS Hospital LIS Sync Status",
          details: activePatient.labs
            ? `Verified Patient Labs: Creatinine ${activePatient.labs.creat ?? "—"} mg/dL | Bilirubin ${activePatient.labs.bili ?? "—"} mg/dL | Platelets ${activePatient.labs.plt ?? "—"} /uL | INR ${activePatient.labs.inr ?? "—"}`
            : "No verified lab report on file. Please enter laboratory values in patient chart.",
        });
      } else {
        updatePatient(activePatient.id, {
          summary: `${activePatient.summary} • Pre-Auth Verified under Rajasthan MAAY / RGHS.`,
        });
        setOcrParsedResult({
          summary: "Government of Rajasthan MAAY Pre-Auth TID Verified",
          details:
            `Patient HID: ${activePatient.hid || "SMS-IR"} | Pre-Auth Status: Verified by Medical Superintendent Office`,
        });
      }
      setIsProcessingOcr(false);
    }, 600);
  };

  return (
    <>
      <div className="w-full bg-white border-b border-slate-200 px-4 py-1.5 transition-colors select-none z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs">
          {/* Patient Core Identifiers */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>{activePatient.name}</span>
              <span className="text-slate-500 font-normal text-[11px]">
                ({activePatient.age}Y/{activePatient.sex.charAt(0)})
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-700">
              <span className="bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">
                CR: <b className="text-slate-900">{activePatient.hid || "Unassigned"}</b>
              </span>
              <span className="bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">
                IPD: <b className="text-slate-900">{activePatient.ipd?.bed || "OPD / Day Care"}</b>
              </span>
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-200 font-medium">
                {activePatient.procedure || "Cath-Lab Target"}
              </span>
            </div>
          </div>

          {/* Clinical Guardrail Indicator: Weight, Cr, & MACD Ceiling */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 font-mono text-[11px] bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
              <span className="text-slate-500">
                Cr: <b className="text-slate-900">{activePatient.labs?.creat ? `${activePatient.labs.creat} mg/dL` : "Unrecorded"}</b>
              </span>
              <span className="text-slate-200">•</span>
              <span className="text-slate-500">
                INR: <b className="text-slate-900">{activePatient.labs?.inr !== undefined ? activePatient.labs.inr : "Unrecorded"}</b>
              </span>
              <span className="text-slate-200">•</span>
              {macdCalc.valid ? (
                <div
                  className="flex items-center gap-1 text-emerald-700 font-semibold"
                  title="Cigarroa Maximum Allowable Contrast Dose (5 * Wt / Cr)"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-emerald-700" />
                  <span>MACD Limit: {macdCalc.macdMl} mL</span>
                </div>
              ) : (
                <div
                  className="flex items-center gap-1 text-slate-500 font-medium"
                  title="Requires measured serum creatinine and patient weight"
                >
                  <span>MACD: Pending Cr</span>
                </div>
              )}
            </div>

            {/* Simulated Lab OCR Button */}
            <button
              onClick={() => {
                setOcrParsedResult(null);
                setIsOcrModalOpen(true);
              }}
              className="flex items-center gap-1 text-[11px] font-medium text-purple-700 hover:text-purple-800 bg-purple-50 hover:bg-purple-200 px-2.5 py-1 rounded-full transition border border-purple-200 cursor-pointer"
              title="Parse Physical Lab Report or MAAY Pre-Auth Document via OCR"
            >
              <ScanText className="w-3 h-3 text-purple-600" />
              <span>Lab OCR</span>
            </button>

            {/* Switch Active Patient Button */}
            <button
              onClick={() => setIsSwitchModalOpen(true)}
              className="flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-200 px-2.5 py-1 rounded-full transition border border-transparent cursor-pointer"
              title="Switch Active Target Patient"
            >
              <ArrowRightLeft className="w-3 h-3" />
              <span>Switch</span>
            </button>

            {/* Open Dossier Button */}
            <button
              onClick={() => setIsDossierOpen(true)}
              className="flex items-center gap-1 text-[11px] font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-full transition border border-slate-200 cursor-pointer"
              title="Open Clinical Dossier & Lab Trends"
            >
              <FileText className="w-3 h-3 text-slate-500" />
              <span className="hidden sm:inline">Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Critical Lab Hard-Stop Safety Banner */}
      {hasSafetyAlert && (
        <div
          className={`w-full border-b px-4 py-2 transition-colors z-30 shadow-sm ${
            isOverrideAcknowledged
              ? "bg-rose-700 text-white border-rose-700"
              : "bg-rose-600 text-white border-rose-700 animate-pulse"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2 font-bold">
              <AlertTriangle className="w-4 h-4 shrink-0 text-white" />
              <span>
                {"CRITICAL LAB HARD-STOP: " +
                  (isCriticalCoag
                    ? `Elevated Bleeding Risk (INR: ${activePatient.labs.inr}, Plt: ${activePatient.labs.plt}). `
                    : "") +
                  (isCriticalRenal
                    ? `Severe Nephrotoxicity / CIN Risk (Creatinine: ${activePatient.labs.creat} mg/dL). `
                    : "")}
              </span>
            </div>
            <label className="flex items-center gap-1.5 cursor-pointer font-semibold select-none text-[11px] bg-black/20 hover:bg-black/30 px-2.5 py-1 rounded-lg transition border border-white/20">
              <input
                type="checkbox"
                checked={isOverrideAcknowledged}
                onChange={(e) => setIsOverrideAcknowledged(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-white text-red-600 focus:ring-0 cursor-pointer"
              />
              <span>Operator Override Acknowledged</span>
            </label>
          </div>
        </div>
      )}

      {/* Patient Switcher Modal */}
      {isSwitchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-5 shadow-2xl text-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Select Active Clinical Subject
                </h3>
              </div>
              <button
                onClick={() => setIsSwitchModalOpen(false)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
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
                        ? "bg-blue-50 border-blue-600 font-semibold text-blue-600"
                        : "bg-white border-slate-200 hover:bg-slate-50 text-slate-900"
                    }`}
                  >
                    <div>
                      <div className="font-bold">{p.name}</div>
                      <div className="text-[11px] text-slate-500">
                        {p.age}Y / {p.sex} • CR: {p.hid} • {p.procedure}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-slate-200">
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
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <ScanText className="w-4 h-4 text-purple-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Clinical OCR Document Parser
                </h3>
              </div>
              <button
                onClick={() => setIsOcrModalOpen(false)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Instantly ingest printed laboratory slips or Government Yojana approval certificates into active patient vitals.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSimulatedOcr("labs")}
                disabled={isProcessingOcr}
                className="p-3 rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-200 text-purple-900 text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <ScanText className="w-5 h-5 text-purple-700" />
                <span>SMS Central Lab Slip</span>
                <span className="text-[10px] text-purple-600 font-normal">Extracts Creatinine, Bilirubin, INR</span>
              </button>

              <button
                onClick={() => handleSimulatedOcr("preauth")}
                disabled={isProcessingOcr}
                className="p-3 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-200 text-blue-600 text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>MAAY / RGHS Pre-Auth</span>
                <span className="text-[10px] text-blue-600 font-normal">Extracts TID, Package, Tariff</span>
              </button>
            </div>

            {isProcessingOcr && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs text-slate-500">
                  Running Optical Character Recognition &amp; Parsing Clinical Tokens...
                </p>
              </div>
            )}

            {ocrParsedResult && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-400 text-emerald-700 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{ocrParsedResult.summary}</span>
                </div>
                <p className="text-[11px] font-mono leading-relaxed text-slate-900">
                  {ocrParsedResult.details}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsOcrModalOpen(false)}
                    className="w-full py-2 bg-emerald-700 text-white rounded-lg font-semibold text-xs hover:bg-emerald-700 transition"
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
