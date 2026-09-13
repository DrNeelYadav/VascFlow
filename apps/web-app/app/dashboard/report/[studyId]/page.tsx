"use client";

import React, { useState, useCallback, useRef } from "react";
import { Button, Card } from "@vascule/ui-kit";
import {
  FileText,
  Printer,
  Send,
  ChevronDown,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  ClipboardList,
  User,
  Calendar,
  Building2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Interventional Radiology procedure types offered at SMS Medical College. */
const PROCEDURE_TYPES = [
  { value: "TACE", label: "TACE (Trans-Arterial Chemo-Embolization)" },
  { value: "BAE", label: "BAE (Bronchial Artery Embolization)" },
  { value: "PTBD", label: "PTBD (Percutaneous Transhepatic Biliary Drainage)" },
  { value: "DSA", label: "DSA (Digital Subtraction Angiography)" },
  { value: "UFE", label: "UFE (Uterine Fibroid Embolization)" },
  { value: "NEPHROSTOMY", label: "Percutaneous Nephrostomy" },
  { value: "PIGTAIL", label: "Pigtail Drainage (Pleural / Peritoneal)" },
] as const;

type ProcedureType = (typeof PROCEDURE_TYPES)[number]["value"];

/** Pre-built macro findings for rapid structured reporting. */
const MACRO_FINDINGS = [
  {
    id: "catheterization",
    label: "Catheterization Success",
    text: "Selective catheterization performed successfully without immediate complication.",
  },
  {
    id: "no-extravasation",
    label: "No Extravasation",
    text: "No extravasation identified.",
  },
  {
    id: "coil-position",
    label: "Coil Position Confirmed",
    text: "Satisfactory coil position confirmed on check angiogram.",
  },
  {
    id: "stent-deployment",
    label: "Stent Deployment",
    text: "Successful deployment of stent with good expansion.",
  },
  {
    id: "no-residual",
    label: "No Residual Filling",
    text: "No residual filling of target vessel post-embolization.",
  },
  {
    id: "drain-bilious",
    label: "Biliary Drain Patent",
    text: "Drain in situ, draining bilious fluid freely.",
  },
  {
    id: "pigtail-clear",
    label: "Pigtail Draining",
    text: "Pigtail catheter placed in the pleural space, draining clear fluid.",
  },
] as const;

/** Complication severity classification (SIR classification). */
const COMPLICATION_LEVELS = [
  "None",
  "Minor - requiring no therapy",
  "Minor - requiring nominal therapy",
  "Major - requiring major therapy",
  "Death",
] as const;

type ComplicationLevel = (typeof COMPLICATION_LEVELS)[number];

// ---------------------------------------------------------------------------
// Report Form State
// ---------------------------------------------------------------------------

interface ReportFormState {
  procedureType: ProcedureType;
  patientName: string;
  patientId: string;
  studyDate: string;
  clinicalIndication: string;
  accessSite: string;
  catheterUsed: string;
  contrastVolumeMl: string;
  findings: string;
  complication: ComplicationLevel;
  operatorName: string;
  supervisorName: string;
  reportDateTime: string;
}

function getInitialFormState(): ReportFormState {
  return {
    procedureType: "TACE",
    patientName: "",
    patientId: "",
    studyDate: new Date().toISOString().slice(0, 10),
    clinicalIndication: "",
    accessSite: "Right Common Femoral Artery",
    catheterUsed: "5F Cobra C2 catheter",
    contrastVolumeMl: "",
    findings: "",
    complication: "None",
    operatorName: "",
    supervisorName: "",
    reportDateTime: new Date().toISOString().slice(0, 16),
  };
}

// ---------------------------------------------------------------------------
// Serialization
// ---------------------------------------------------------------------------

export interface StructuredReportPayload {
  studyId: string;
  procedureType: ProcedureType;
  patientName: string;
  patientId: string;
  studyDate: string;
  clinicalIndication: string;
  procedureDetails: {
    accessSite: string;
    catheterUsed: string;
    contrastVolumeMl: number;
  };
  findings: string;
  complication: ComplicationLevel;
  operator: string;
  supervisor: string;
  reportDateTime: string;
  createdAt: string;
}

export function serializeReport(
  studyId: string,
  form: ReportFormState,
): StructuredReportPayload {
  return {
    studyId,
    procedureType: form.procedureType,
    patientName: form.patientName,
    patientId: form.patientId,
    studyDate: form.studyDate,
    clinicalIndication: form.clinicalIndication,
    procedureDetails: {
      accessSite: form.accessSite,
      catheterUsed: form.catheterUsed,
      contrastVolumeMl: parseFloat(form.contrastVolumeMl) || 0,
    },
    findings: form.findings,
    complication: form.complication,
    operator: form.operatorName,
    supervisor: form.supervisorName,
    reportDateTime: form.reportDateTime,
    createdAt: new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Letterhead Constants
// ---------------------------------------------------------------------------

export const LETTERHEAD_INSTITUTION = "SMS Medical College & Attached Hospitals, Jaipur";
export const LETTERHEAD_DEPARTMENT =
  "Department of Radiodiagnosis & Interventional Radiology";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ReportStudioPage({
  params,
}: {
  params: { studyId: string };
}) {
  const { studyId } = params;
  const [form, setForm] = useState<ReportFormState>(getInitialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"success" | "error" | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const updateField = useCallback(
    <K extends keyof ReportFormState>(field: K, value: ReportFormState[K]) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const insertMacro = useCallback((text: string) => {
    setForm((prev) => ({
      ...prev,
      findings: prev.findings
        ? `${prev.findings}\n${text}`
        : text,
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const payload = serializeReport(studyId, form);

      // Submit report to FHIR service
      const reportRes = await fetch("/api/proxy/fhir/reports", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!reportRes.ok) {
        throw new Error(`Report submission failed: HTTP ${reportRes.status}`);
      }

      // Dispatch immutable audit log entry
      await fetch("/api/audit", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "WRITE",
          resource: "structured-report",
          resourceId: studyId,
          details: `Structured report submitted for ${form.procedureType} procedure`,
          operatorName: form.operatorName,
        }),
      });

      setSubmitResult("success");
    } catch {
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [studyId, form]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const procedureLabel =
    PROCEDURE_TYPES.find((p) => p.value === form.procedureType)?.label ??
    form.procedureType;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Structured Report Studio
              </h1>
              <p className="text-sm text-gray-500">
                Study ID:{" "}
                <span className="font-mono text-xs" data-testid="study-id-display">
                  {studyId}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handlePrint}
              className="px-3 py-2 text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 rounded"
            >
              <Printer className="w-4 h-4 mr-1 inline-block" />
              Print
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              data-testid="submit-report"
              className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded disabled:opacity-50"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-1 inline-block" />
                  Submit Report
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Submission feedback */}
      {submitResult === "success" && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-3">
          <div className="flex items-center gap-2 text-green-800 text-sm max-w-screen-2xl mx-auto">
            <CheckCircle2 className="w-4 h-4" />
            Report submitted successfully. Audit trail entry created.
          </div>
        </div>
      )}
      {submitResult === "error" && (
        <div className="bg-red-50 border-b border-red-200 px-6 py-3">
          <div className="flex items-center gap-2 text-red-800 text-sm max-w-screen-2xl mx-auto">
            <AlertTriangle className="w-4 h-4" />
            Report submission failed. Please try again.
          </div>
        </div>
      )}

      {/* Main content: Form + Live Preview */}
      <div className="max-w-screen-2xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-6">
        {/* ---- LEFT: Report Form (60%) ---- */}
        <div className="lg:w-3/5 space-y-6">
          {/* Patient & Study Metadata */}
          <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              Patient & Study Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Patient Name
                </label>
                <input
                  type="text"
                  value={form.patientName}
                  onChange={(e) => updateField("patientName", e.target.value)}
                  placeholder="SURNAME^FIRSTNAME"
                  data-testid="input-patient-name"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Patient ID
                </label>
                <input
                  type="text"
                  value={form.patientId}
                  onChange={(e) => updateField("patientId", e.target.value)}
                  placeholder="SMS2026-IR-00000"
                  data-testid="input-patient-id"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Study Date
                </label>
                <input
                  type="date"
                  value={form.studyDate}
                  onChange={(e) => updateField("studyDate", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Report Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={form.reportDateTime}
                  onChange={(e) => updateField("reportDateTime", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </Card>

          {/* Procedure Type */}
          <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-blue-600" />
              Procedure Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Procedure Type
                </label>
                <div className="relative">
                  <select
                    value={form.procedureType}
                    onChange={(e) =>
                      updateField("procedureType", e.target.value as ProcedureType)
                    }
                    data-testid="select-procedure-type"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white pr-8"
                  >
                    {PROCEDURE_TYPES.map((proc) => (
                      <option key={proc.value} value={proc.value}>
                        {proc.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Clinical Indication
                </label>
                <textarea
                  value={form.clinicalIndication}
                  onChange={(e) => updateField("clinicalIndication", e.target.value)}
                  placeholder="Enter clinical indication for the procedure..."
                  data-testid="input-clinical-indication"
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Access Site
                  </label>
                  <input
                    type="text"
                    value={form.accessSite}
                    onChange={(e) => updateField("accessSite", e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Catheter Used
                  </label>
                  <input
                    type="text"
                    value={form.catheterUsed}
                    onChange={(e) => updateField("catheterUsed", e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Contrast Volume (mL)
                  </label>
                  <input
                    type="number"
                    value={form.contrastVolumeMl}
                    onChange={(e) => updateField("contrastVolumeMl", e.target.value)}
                    placeholder="0"
                    data-testid="input-contrast-volume"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Findings with Macro Buttons */}
          <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-blue-600" />
              Findings
            </h2>

            {/* Macro Buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {MACRO_FINDINGS.map((macro) => (
                <Button
                  key={macro.id}
                  onClick={() => insertMacro(macro.text)}
                  data-testid={`macro-${macro.id}`}
                  className="px-2.5 py-1.5 text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
                >
                  <Plus className="w-3 h-3 mr-1 inline-block" />
                  {macro.label}
                </Button>
              ))}
            </div>

            <textarea
              value={form.findings}
              onChange={(e) => updateField("findings", e.target.value)}
              placeholder="Enter or select findings from macros above..."
              data-testid="input-findings"
              rows={8}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical font-mono"
            />
          </Card>

          {/* Complications & Operator */}
          <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Complications (SIR Classification)
                </label>
                <select
                  value={form.complication}
                  onChange={(e) =>
                    updateField("complication", e.target.value as ComplicationLevel)
                  }
                  data-testid="select-complication"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  {COMPLICATION_LEVELS.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Operator
                </label>
                <input
                  type="text"
                  value={form.operatorName}
                  onChange={(e) => updateField("operatorName", e.target.value)}
                  placeholder="Dr. Name"
                  data-testid="input-operator"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Supervisor
                </label>
                <input
                  type="text"
                  value={form.supervisorName}
                  onChange={(e) => updateField("supervisorName", e.target.value)}
                  placeholder="Prof. Name"
                  data-testid="input-supervisor"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* ---- RIGHT: Live Preview (40%) ---- */}
        <div className="lg:w-2/5">
          <div className="sticky top-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              Live Preview (A4 Letterhead)
            </h2>
            <div
              ref={printRef}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-8 text-gray-900"
              style={{ minHeight: "842px", maxWidth: "595px" }}
              data-testid="report-preview"
            >
              {/* Institutional Letterhead */}
              <div className="text-center border-b-2 border-blue-600 pb-4 mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <div>
                    <h1
                      className="text-base font-bold text-gray-900 tracking-wide"
                      data-testid="preview-institution"
                    >
                      {LETTERHEAD_INSTITUTION}
                    </h1>
                    <p
                      className="text-xs font-medium text-blue-600 tracking-wider uppercase"
                      data-testid="preview-department"
                    >
                      {LETTERHEAD_DEPARTMENT}
                    </p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">
                  Accredited by NAAC | Established 1947 | Jaipur, Rajasthan 302004
                </p>
              </div>

              {/* Report Title */}
              <div className="text-center mb-5">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Interventional Radiology Procedure Report
                </h2>
                <div
                  className="text-xs text-gray-600 mt-1"
                  data-testid="preview-procedure-type"
                >
                  {procedureLabel}
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-5 border border-gray-200 rounded p-3 bg-gray-50">
                <div>
                  <span className="font-semibold text-gray-600">Patient: </span>
                  <span data-testid="preview-patient-name">
                    {form.patientName || "—"}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">ID: </span>
                  <span>{form.patientId || "—"}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Date: </span>
                  <span>{form.studyDate}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Study: </span>
                  <span className="font-mono text-[10px]">{studyId}</span>
                </div>
              </div>

              {/* Clinical Indication */}
              <div className="mb-4">
                <h3 className="text-xs font-bold text-gray-800 uppercase border-b border-gray-300 pb-1 mb-2">
                  Clinical Indication
                </h3>
                <p className="text-xs text-gray-700 whitespace-pre-wrap">
                  {form.clinicalIndication || "—"}
                </p>
              </div>

              {/* Procedure Performed */}
              <div className="mb-4">
                <h3 className="text-xs font-bold text-gray-800 uppercase border-b border-gray-300 pb-1 mb-2">
                  Procedure Performed
                </h3>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold">Access: </span>
                    {form.accessSite}
                  </p>
                  <p>
                    <span className="font-semibold">Catheter: </span>
                    {form.catheterUsed}
                  </p>
                  {form.contrastVolumeMl && (
                    <p>
                      <span className="font-semibold">Contrast: </span>
                      {form.contrastVolumeMl} mL
                    </p>
                  )}
                </div>
              </div>

              {/* Findings */}
              <div className="mb-4">
                <h3 className="text-xs font-bold text-gray-800 uppercase border-b border-gray-300 pb-1 mb-2">
                  Findings
                </h3>
                <p className="text-xs text-gray-700 whitespace-pre-wrap">
                  {form.findings || "—"}
                </p>
              </div>

              {/* Complications */}
              <div className="mb-4">
                <h3 className="text-xs font-bold text-gray-800 uppercase border-b border-gray-300 pb-1 mb-2">
                  Complications
                </h3>
                <p className="text-xs text-gray-700">{form.complication}</p>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-8 mt-8 pt-4 border-t border-gray-300">
                <div className="text-xs text-center">
                  <div className="h-10 border-b border-gray-400 mb-1" />
                  <p className="font-semibold text-gray-700">
                    {form.operatorName || "Operator"}
                  </p>
                  <p className="text-gray-500">Performing Physician</p>
                </div>
                <div className="text-xs text-center">
                  <div className="h-10 border-b border-gray-400 mb-1" />
                  <p className="font-semibold text-gray-700">
                    {form.supervisorName || "Supervisor"}
                  </p>
                  <p className="text-gray-500">Supervising Consultant</p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-3 border-t border-gray-200 text-center">
                <p className="text-[9px] text-gray-400">
                  This is a computer-generated report from Vascule OS. Report ID: {studyId}
                </p>
                <p className="text-[9px] text-gray-400">
                  Generated: {form.reportDateTime} | {LETTERHEAD_INSTITUTION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
