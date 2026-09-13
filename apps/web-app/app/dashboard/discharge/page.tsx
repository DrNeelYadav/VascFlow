"use client";

import React, { useState, useMemo } from "react";
import { useEndoflowStore } from "../useEndoflowStore";
import {
  IhmsDischargeSummaryData,
  SUNIL_KUMAR_DISCHARGE,
  ANJUM_NISHA_DISCHARGE,
  generateIhmsDischargeForPatient,
} from "./ihmsDischargeTemplates";
import {
  Printer,
  Copy,
  CheckCircle2,
  FileText,
  Building,
  User,
  Activity,
  Stethoscope,
  Pill,
  ClipboardList,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Upload,
  RefreshCw,
  Plus,
  Trash2,
  ExternalLink,
  Info,
} from "lucide-react";

export default function DischargeSummaryPage() {
  const patients = useEndoflowStore((s) => s.patients);

  // Pre-generate summaries for all patients
  const generatedPatientSummaries = useMemo(() => {
    const map: Record<string, IhmsDischargeSummaryData> = {
      EX01: SUNIL_KUMAR_DISCHARGE,
      EX02: ANJUM_NISHA_DISCHARGE,
    };
    patients.forEach((p) => {
      map[p.id] = generateIhmsDischargeForPatient({
        id: p.id,
        name: p.name,
        age: p.age,
        sex: p.sex,
        hid: p.hid,
        unit: p.unit,
        postedBy: p.postedBy,
        summary: p.summary,
        procedure: p.procedure,
        procedureKey: p.procedureKey || "budd_chiari_dips",
        scheme: p.scheme,
        ipd: p.ipd,
        labs: p.labs,
      });
    });
    return map;
  }, [patients]);

  const [selectedPatientId, setSelectedPatientId] = useState<string>("EX01");
  const [activeViewMode, setActiveViewMode] = useState<"editor" | "preview">("preview");
  const [copyToast, setCopyToast] = useState<string | null>(null);

  // Current active discharge summary data (editable)
  const [summaryData, setSummaryData] = useState<IhmsDischargeSummaryData>(
    SUNIL_KUMAR_DISCHARGE
  );

  // History Card Modal State
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const [historyCardText, setHistoryCardText] = useState<string>("");

  // When patient selection changes, switch summary data
  const handleSelectPatient = (id: string) => {
    setSelectedPatientId(id);
    if (generatedPatientSummaries[id]) {
      setSummaryData(JSON.parse(JSON.stringify(generatedPatientSummaries[id])));
    }
  };

  const showNotification = (msg: string) => {
    setCopyToast(msg);
    setTimeout(() => setCopyToast(null), 3000);
  };

  // Clipboard Copiers for Rajasthan IHMS Portal
  const copyTextToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showNotification(`Copied ${label} for IHMS portal!`);
    });
  };

  const handleCopyFullIhms = () => {
    const fullText = `SAWAI MAN SINGH HOSPITAL JAIPUR
DEPARTMENT OF INTERVENTIONAL RADIOLOGY
DISCHARGE SUMMARY (IHMS E-HOSPITAL RECORD)
==================================================
PATIENT ADMISSION DETAILS:
HID: ${summaryData.admissionDetails.hid} | Adm No: ${summaryData.admissionDetails.admissionNo}
Name: ${summaryData.admissionDetails.patientName} | Age/Sex: ${summaryData.admissionDetails.age} / ${summaryData.admissionDetails.gender}
Category: ${summaryData.admissionDetails.patientCategory} | Ward/Bed: ${summaryData.admissionDetails.wardBed}
Date of Admission: ${summaryData.admissionDetails.dateOfAdmission} | Discharge: ${summaryData.admissionDetails.dateOfDischarge}
Department: ${summaryData.admissionDetails.departmentName} | Unit: ${summaryData.admissionDetails.unitName} (Head: ${summaryData.admissionDetails.unitHead})

CASE SUMMARY / DIAGNOSIS:
ICD Diagnosis: ${summaryData.caseSummary.icdDiagnosis}
Diagnosis: ${summaryData.caseSummary.diagnosis}
Complaints: ${summaryData.caseSummary.complaints}
Case Summary: ${summaryData.caseSummary.caseHistory}
Past History: ${summaryData.caseSummary.pastHistory}
Family History: ${summaryData.caseSummary.familyHistory}
Personal History: ${summaryData.caseSummary.personalHistory}
Risk Factor: ${summaryData.caseSummary.riskFactor}

GENERAL PHYSICAL EXAMINATION:
At Admission: BP: ${summaryData.physicalExam.atAdmission.bloodPressure} mmHg | PR: ${summaryData.physicalExam.atAdmission.pr} /min | Temp: ${summaryData.physicalExam.atAdmission.temp} F | RR: ${summaryData.physicalExam.atAdmission.rr} /min | SpO2: ${summaryData.physicalExam.atAdmission.spo2}%
Pallor: ${summaryData.physicalExam.atAdmission.pallor} | Icterus: ${summaryData.physicalExam.atAdmission.icterus} | Edema: ${summaryData.physicalExam.atAdmission.edema}
At Discharge: BP: ${summaryData.physicalExam.atDischarge.bloodPressure} mmHg | PR: ${summaryData.physicalExam.atDischarge.pr} /min | Temp: ${summaryData.physicalExam.atDischarge.temp} F | RR: ${summaryData.physicalExam.atDischarge.rr} /min | SpO2: ${summaryData.physicalExam.atDischarge.spo2}%

SYSTEMIC EXAMINATION:
Respiration: ${summaryData.systemicExam.respiration}
CVS: ${summaryData.systemicExam.cvs}
Per Abdomen: ${summaryData.systemicExam.perAbdomen}
CNS: ${summaryData.systemicExam.cns}
Local Examination: ${summaryData.systemicExam.localExamination}

INVESTIGATIONS:
Sonography: ${summaryData.investigations.sonography || "NAD"}
CT-Scan: ${summaryData.investigations.ctScan || "NAD"}
ECG: ${summaryData.investigations.ecg || "Normal Sinus Rhythm"}
2D-Echo: ${summaryData.investigations.echo2D || "Normal cardiac function"}

PROCEDURE DETAILS:
${summaryData.procedureDetails
  .map(
    (p) =>
      `[${p.dateTime}] ${p.surgicalProcedure} (${p.operationType}, Anaesthesia: ${p.anaesthesiaType})\nDone by: ${p.processDoneBy}\nDetail: ${p.procedureDetail}`
  )
  .join("\n\n")}

DISCHARGE MEDICATIONS:
${summaryData.dischargeMedications
  .map(
    (m) =>
      `${m.sNo}. ${m.medicine} - Dose: ${m.dosePower}, Route: ${m.route}, Freq: ${m.frequency}, Days: ${m.days} (${m.instructions})`
  )
  .join("\n")}

PATIENT DISCHARGE DETAILS:
General Advice: ${summaryData.dischargeDetails.generalAdvise}
Condition on Discharge: ${summaryData.dischargeDetails.conditionOnDischarge}
Follow Up: ${summaryData.dischargeDetails.followUp}
Approved by: ${summaryData.dischargeDetails.approvedBy} | Prepared by: ${summaryData.dischargeDetails.dischargePreparedBy}`;

    copyTextToClipboard(fullText, "Full Discharge Summary");
  };

  const handlePrint = () => {
    window.print();
  };

  // Smart Parser for Pasting Free-text History Card
  const handleParseHistoryCard = () => {
    if (!historyCardText.trim()) return;

    const lower = historyCardText.toLowerCase();
    const updated = { ...summaryData };

    // Extract complaints or summary
    updated.caseSummary.complaints = historyCardText.slice(0, 250);
    updated.caseSummary.caseHistory = historyCardText;

    // Check for procedure hints
    if (lower.includes("varicose") || lower.includes("venaseal") || lower.includes("gsv")) {
      updated.caseSummary.icdDiagnosis = "(S) Varicose veins of lower extremities (I83)";
      updated.caseSummary.diagnosis = "Varicose veins of lower extremities with saphenofemoral junction reflux (I83)";
      updated.procedureDetails[0].surgicalProcedure = "GLUE EMBOLISATION BY VENASEAL";
    } else if (lower.includes("budd") || lower.includes("dips") || lower.includes("hepatic vein")) {
      updated.caseSummary.icdDiagnosis = "(S) Budd-Chiari syndrome (I82.0)\n(S) Portal hypertension (K76.6)";
      updated.caseSummary.diagnosis = "Budd-Chiari syndrome with caudate hypertrophy and hepatic venous outflow obstruction.";
      updated.procedureDetails[0].surgicalProcedure = "DIRECT INTRAHEPATIC PORTOSYSTEMIC SHUNT (DIPS)";
    } else if (lower.includes("hemoptysis") || lower.includes("bae") || lower.includes("bronchial")) {
      updated.caseSummary.icdDiagnosis = "(S) Hemoptysis (R04.2)\n(S) Bronchiectasis (J47.0)";
      updated.caseSummary.diagnosis = "Recurrent massive hemoptysis secondary to bronchiectasis with bronchial artery hypertrophy.";
      updated.procedureDetails[0].surgicalProcedure = "BRONCHIAL ARTERY EMBOLIZATION (BAE)";
    }

    setSummaryData(updated);
    setShowHistoryModal(false);
    showNotification("History card parsed and applied to discharge summary!");
  };

  return (
    <div className="space-y-4 max-w-6xl mx-auto pb-16">
      {/* Toast Notification */}
      {copyToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#1E8E3E] text-white text-xs font-semibold shadow-lg flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copyToast}</span>
        </div>
      )}

      {/* Top Header Card */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
              IHMS e-Hospital
            </span>
            <h1 className="text-lg font-bold text-[#202124]">
              Rajasthan Department Discharge Summary Studio
            </h1>
          </div>
          <p className="text-xs text-[#5F6368] mt-0.5">
            Sawai Man Singh Hospital, Jaipur • Department of Interventional Radiology
          </p>
        </div>

        {/* Global Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowHistoryModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-[#1A73E8] hover:bg-[#E8F0FE] text-xs font-semibold transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1A73E8]" />
            <span>Paste History Card</span>
          </button>

          <button
            onClick={handleCopyFullIhms}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy for IHMS Portal</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#5F6368]" />
            <span>Print Official A4</span>
          </button>
        </div>
      </div>

      {/* Patient Selector Pills */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-3.5 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#3C4043] flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#1A73E8]" />
            Select Patient Record to Generate / Export:
          </span>
          <div className="flex items-center rounded-lg bg-[#F1F3F4] p-0.5 text-xs font-semibold">
            <button
              onClick={() => setActiveViewMode("preview")}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activeViewMode === "preview"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              Official Printout Preview
            </button>
            <button
              onClick={() => setActiveViewMode("editor")}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activeViewMode === "editor"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              Interactive Form Editor
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {/* Authentic Real PDF Examples */}
          <button
            onClick={() => handleSelectPatient("EX01")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedPatientId === "EX01"
                ? "bg-[#1A73E8] text-white shadow-xs"
                : "bg-[#F8F9FA] text-[#3C4043] border border-[#DADCE0] hover:bg-[#FFFFFF]"
            }`}
          >
            <span>Sunil Kumar (Varicose Veins)</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#E6F4EA] text-[#137333]">
              Actual PDF
            </span>
          </button>

          <button
            onClick={() => handleSelectPatient("EX02")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedPatientId === "EX02"
                ? "bg-[#1A73E8] text-white shadow-xs"
                : "bg-[#F8F9FA] text-[#3C4043] border border-[#DADCE0] hover:bg-[#FFFFFF]"
            }`}
          >
            <span>Anjum Nisha (Budd-Chiari)</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#E6F4EA] text-[#137333]">
              Actual PDF
            </span>
          </button>

          {/* Active Patients from Store */}
          {patients.map((pt) => (
            <button
              key={pt.id}
              onClick={() => handleSelectPatient(pt.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1 ${
                selectedPatientId === pt.id
                  ? "bg-[#1A73E8] text-white shadow-xs"
                  : "bg-[#FFFFFF] text-[#3C4043] border border-[#DADCE0] hover:bg-[#F8F9FA]"
              }`}
            >
              <span>{pt.name}</span>
              <span className="text-[10px] text-[#80868B]">({pt.procedure.slice(0, 15)}...)</span>
            </button>
          ))}
        </div>
      </div>

      {/* VIEW A: OFFICIAL PRINTOUT PREVIEW (MATCHES EXACT SMS HOSPITAL PDF) */}
      {activeViewMode === "preview" && (
        <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
          {/* Hospital Official Header */}
          <div className="text-center border-b-2 border-[#202124] pb-3 space-y-0.5">
            <h2 className="text-base sm:text-lg font-black tracking-wide text-[#202124] uppercase">
              {summaryData.admissionDetails.hospitalName}
            </h2>
            <p className="text-[11px] font-medium text-[#5F6368] uppercase tracking-wider">
              {summaryData.admissionDetails.hospitalAddress}
            </p>
            <h3 className="text-xs sm:text-sm font-bold text-[#202124] uppercase tracking-wider">
              DEPARTMENT OF {summaryData.admissionDetails.departmentName}
            </h3>
            <p className="text-[11px] font-bold text-[#1A73E8]">
              UNIT HEAD: {summaryData.admissionDetails.unitHead} &bull; {summaryData.admissionDetails.unitName}
            </p>
            <div className="pt-2">
              <span className="inline-block px-4 py-0.5 border border-[#202124] text-xs font-black tracking-widest uppercase">
                DISCHARGE SUMMARY
              </span>
            </div>
          </div>

          {/* Patient Admission Details Table */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
              PATIENT ADMISSION DETAILS
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-[#F8F9FA] border border-[#DADCE0] text-xs">
              <div>
                <span className="text-[#5F6368] block text-[10px]">HID / CR No:</span>
                <strong className="font-mono">{summaryData.admissionDetails.hid}</strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">Patient Name:</span>
                <strong>{summaryData.admissionDetails.patientName}</strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">Age / Gender:</span>
                <strong>
                  {summaryData.admissionDetails.age} / {summaryData.admissionDetails.gender}
                </strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">Admission No:</span>
                <strong className="font-mono">{summaryData.admissionDetails.admissionNo}</strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">Date of Admission:</span>
                <span>{summaryData.admissionDetails.dateOfAdmission}</span>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">Date of Discharge:</span>
                <span>{summaryData.admissionDetails.dateOfDischarge}</span>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">Category / Scheme:</span>
                <strong className="text-[#137333]">{summaryData.admissionDetails.patientCategory}</strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">Ward / Bed:</span>
                <strong>{summaryData.admissionDetails.wardBed}</strong>
              </div>
            </div>
          </div>

          {/* Case Summary & Diagnosis */}
          <div className="space-y-2 text-xs">
            <div className="p-3 border border-[#DADCE0] space-y-1.5">
              <p>
                <strong className="text-[#202124]">ICD Diagnosis:</strong>{" "}
                <span className="font-semibold text-[#1A73E8] whitespace-pre-line">
                  {summaryData.caseSummary.icdDiagnosis}
                </span>
              </p>
              <p>
                <strong className="text-[#202124]">Final Diagnosis:</strong>{" "}
                <span>{summaryData.caseSummary.diagnosis}</span>
              </p>
              <p>
                <strong className="text-[#202124]">Chief Complaints:</strong>{" "}
                <span>{summaryData.caseSummary.complaints}</span>
              </p>
              <p className="leading-relaxed">
                <strong className="text-[#202124]">Case Summary:</strong>{" "}
                <span>{summaryData.caseSummary.caseHistory}</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-[#F1F3F4] text-[11px]">
                <p>
                  <strong>Past History:</strong> {summaryData.caseSummary.pastHistory}
                </p>
                <p>
                  <strong>Family History:</strong> {summaryData.caseSummary.familyHistory}
                </p>
                <p>
                  <strong>Personal History:</strong> {summaryData.caseSummary.personalHistory}
                </p>
                <p>
                  <strong>Risk Factors:</strong> {summaryData.caseSummary.riskFactor}
                </p>
              </div>
            </div>
          </div>

          {/* General Physical Examination Table */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
              GENERAL PHYSICAL EXAMINATION
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-[#DADCE0] text-left">
                <thead className="bg-[#F8F9FA] text-[11px] font-bold">
                  <tr>
                    <th className="p-2 border-r border-b border-[#DADCE0]">Examination Detail</th>
                    <th className="p-2 border-r border-b border-[#DADCE0]">AT ADMISSION</th>
                    <th className="p-2 border-b border-[#DADCE0]">AT DISCHARGE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">Blood Pressure</td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.bloodPressure} mm of Hg
                    </td>
                    <td className="p-1.5 font-mono">
                      {summaryData.physicalExam.atDischarge.bloodPressure} mm of Hg
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">Pulse Rate (PR)</td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.pr} /min
                    </td>
                    <td className="p-1.5 font-mono">{summaryData.physicalExam.atDischarge.pr} /min</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">Temperature</td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.temp} °F
                    </td>
                    <td className="p-1.5 font-mono">{summaryData.physicalExam.atDischarge.temp} °F</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">Respiration Rate (RR)</td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.rr} /min
                    </td>
                    <td className="p-1.5 font-mono">{summaryData.physicalExam.atDischarge.rr} /min</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">SPO2</td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.spo2} %
                    </td>
                    <td className="p-1.5 font-mono">{summaryData.physicalExam.atDischarge.spo2} %</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">
                      Pallor / Icterus / Edema
                    </td>
                    <td className="p-1.5 border-r border-[#DADCE0]">
                      {summaryData.physicalExam.atAdmission.pallor} /{" "}
                      {summaryData.physicalExam.atAdmission.icterus} /{" "}
                      {summaryData.physicalExam.atAdmission.edema}
                    </td>
                    <td className="p-1.5">
                      {summaryData.physicalExam.atDischarge.pallor} /{" "}
                      {summaryData.physicalExam.atDischarge.icterus} /{" "}
                      {summaryData.physicalExam.atDischarge.edema}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Systemic Examination */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
              SYSTEMIC & LOCAL EXAMINATION
            </h4>
            <div className="p-3 border border-[#DADCE0] text-xs space-y-1">
              <p>
                <strong>(A) Respiration:</strong> {summaryData.systemicExam.respiration}
              </p>
              <p>
                <strong>(B) CVS:</strong> {summaryData.systemicExam.cvs}
              </p>
              <p>
                <strong>(C) Per Abdomen:</strong> {summaryData.systemicExam.perAbdomen}
              </p>
              <p>
                <strong>(D) CNS:</strong> {summaryData.systemicExam.cns}
              </p>
              <p>
                <strong>(E) Local Examination:</strong> {summaryData.systemicExam.localExamination}
              </p>
            </div>
          </div>

          {/* Investigations */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
              DIAGNOSTIC INVESTIGATIONS
            </h4>
            <div className="p-3 border border-[#DADCE0] text-xs space-y-1.5">
              {summaryData.investigations.sonography && (
                <p>
                  <strong>Sonography / Color Doppler:</strong> {summaryData.investigations.sonography}
                </p>
              )}
              {summaryData.investigations.ctScan && (
                <p>
                  <strong>CT Scan:</strong> {summaryData.investigations.ctScan}
                </p>
              )}
              {summaryData.investigations.mri && (
                <p>
                  <strong>MRI:</strong> {summaryData.investigations.mri}
                </p>
              )}
              {summaryData.investigations.echo2D && (
                <p>
                  <strong>2D-Echo:</strong> {summaryData.investigations.echo2D}
                </p>
              )}
              {summaryData.investigations.ecg && (
                <p>
                  <strong>ECG:</strong> {summaryData.investigations.ecg}
                </p>
              )}

              {/* Lab Results Table */}
              {summaryData.investigations.labResults && summaryData.investigations.labResults.length > 0 && (
                <div className="pt-2">
                  <span className="font-bold text-[10px] text-[#5F6368] uppercase block mb-1">
                    Laboratory Findings:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {summaryData.investigations.labResults.map((lab, i) => (
                      <div key={i} className="p-1.5 bg-[#F8F9FA] rounded border border-[#DADCE0]">
                        <span className="text-[10px] text-[#5F6368] block">{lab.parameterName}</span>
                        <strong className="font-mono text-xs">{lab.firstResult}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Procedure Detail Table */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
              PROCEDURE DETAILS
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-[#DADCE0] text-left">
                <thead className="bg-[#F8F9FA] text-[10px] font-bold uppercase">
                  <tr>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-8">S.No</th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-24">Date & Time</th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-16">Type</th>
                    <th className="p-2 border-r border-b border-[#DADCE0]">Surgical Procedure</th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-20">Anaesthesia</th>
                    <th className="p-2 border-r border-b border-[#DADCE0]">Procedure Detail</th>
                    <th className="p-2 border-b border-[#DADCE0] w-28">Done By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  {summaryData.procedureDetails.map((proc) => (
                    <tr key={proc.sNo}>
                      <td className="p-2 border-r border-[#DADCE0] text-center font-bold">{proc.sNo}</td>
                      <td className="p-2 border-r border-[#DADCE0] font-mono text-[11px]">{proc.dateTime}</td>
                      <td className="p-2 border-r border-[#DADCE0] font-semibold">{proc.operationType}</td>
                      <td className="p-2 border-r border-[#DADCE0] font-bold text-[#1A73E8]">
                        {proc.surgicalProcedure}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0]">{proc.anaesthesiaType}</td>
                      <td className="p-2 border-r border-[#DADCE0] leading-relaxed text-[11px]">
                        {proc.procedureDetail}
                      </td>
                      <td className="p-2 font-semibold text-[#202124]">{proc.processDoneBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Discharge Medications Table */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
              DISCHARGE MEDICATIONS
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-[#DADCE0] text-left">
                <thead className="bg-[#F8F9FA] text-[10px] font-bold uppercase">
                  <tr>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-8">S.No</th>
                    <th className="p-2 border-r border-b border-[#DADCE0]">Medicine Name</th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-24">Dose / Power</th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-16">Route</th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-16">Freq</th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-16">Days</th>
                    <th className="p-2 border-b border-[#DADCE0]">Instructions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  {summaryData.dischargeMedications.map((m) => (
                    <tr key={m.sNo}>
                      <td className="p-2 border-r border-[#DADCE0] text-center font-bold">{m.sNo}</td>
                      <td className="p-2 border-r border-[#DADCE0] font-bold text-[#202124]">{m.medicine}</td>
                      <td className="p-2 border-r border-[#DADCE0] font-mono">{m.dosePower}</td>
                      <td className="p-2 border-r border-[#DADCE0] font-semibold">{m.route}</td>
                      <td className="p-2 border-r border-[#DADCE0] font-mono font-bold text-[#1A73E8]">
                        {m.frequency}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-mono">{m.days}</td>
                      <td className="p-2 text-[11px] text-[#5F6368]">{m.instructions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Patient Discharge Details & Signatures */}
          <div className="p-3 border border-[#DADCE0] space-y-3 text-xs">
            <div>
              <strong>General Advice:</strong> <span>{summaryData.dischargeDetails.generalAdvise}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <strong>Condition on Discharge:</strong>{" "}
                <span className="text-[#137333] font-bold">
                  {summaryData.dischargeDetails.conditionOnDischarge}
                </span>
              </div>
              <div>
                <strong>Follow Up:</strong>{" "}
                <span className="font-semibold">{summaryData.dischargeDetails.followUp}</span>
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-8 flex items-center justify-between border-t border-[#DADCE0] text-xs">
              <div>
                <p className="font-bold text-[#202124]">{summaryData.dischargeDetails.dischargePreparedBy}</p>
                <p className="text-[10px] text-[#5F6368]">Discharge Prepared By</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#202124]">{summaryData.dischargeDetails.approvedBy}</p>
                <p className="text-[10px] text-[#5F6368]">Approved By (Unit Head)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW B: INTERACTIVE FORM EDITOR (FOR DIRECT CLINICAL ENTRY & PORTAL SYNC) */}
      {activeViewMode === "editor" && (
        <div className="space-y-4">
          {/* Section 1: Demographics Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <Building className="w-4 h-4" />
                1. Patient Admission Details
              </h3>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    `HID: ${summaryData.admissionDetails.hid}\nPatient: ${summaryData.admissionDetails.patientName} (${summaryData.admissionDetails.age}/${summaryData.admissionDetails.gender})\nAdm No: ${summaryData.admissionDetails.admissionNo}\nWard/Bed: ${summaryData.admissionDetails.wardBed}`,
                    "Admission Details"
                  )
                }
                className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy Details
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Patient Name</label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.patientName}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        patientName: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-semibold"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">HID / CR No</label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.hid}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        hid: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Admission No</label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.admissionNo}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        admissionNo: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Category</label>
                <select
                  value={summaryData.admissionDetails.patientCategory}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        patientCategory: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                >
                  <option value="MAAY">MAAY (Mukhyamantri Ayushman)</option>
                  <option value="RGHS">RGHS (Rajasthan Govt Health Scheme)</option>
                  <option value="GENERAL">GENERAL</option>
                  <option value="PMJAY">PMJAY (AB-MGRSBY)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Ward / Bed</label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.wardBed}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        wardBed: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Unit Head</label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.unitHead}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        unitHead: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Case Summary & Diagnosis Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                2. Case Summary / Diagnosis
              </h3>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    `ICD Diagnosis: ${summaryData.caseSummary.icdDiagnosis}\nDiagnosis: ${summaryData.caseSummary.diagnosis}\nComplaints: ${summaryData.caseSummary.complaints}\nCase Summary: ${summaryData.caseSummary.caseHistory}`,
                    "Case Summary"
                  )
                }
                className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy Summary
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">ICD Diagnosis</label>
                <textarea
                  rows={2}
                  value={summaryData.caseSummary.icdDiagnosis}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      caseSummary: {
                        ...summaryData.caseSummary,
                        icdDiagnosis: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-semibold text-[#1A73E8]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Final Diagnosis</label>
                <textarea
                  rows={2}
                  value={summaryData.caseSummary.diagnosis}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      caseSummary: {
                        ...summaryData.caseSummary,
                        diagnosis: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Chief Complaints</label>
              <input
                type="text"
                value={summaryData.caseSummary.complaints}
                onChange={(e) =>
                  setSummaryData({
                    ...summaryData,
                    caseSummary: {
                      ...summaryData.caseSummary,
                      complaints: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
              />
            </div>

            <div className="text-xs">
              <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                Detailed Case History
              </label>
              <textarea
                rows={3}
                value={summaryData.caseSummary.caseHistory}
                onChange={(e) =>
                  setSummaryData({
                    ...summaryData,
                    caseSummary: {
                      ...summaryData.caseSummary,
                      caseHistory: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
              />
            </div>
          </div>

          {/* Section 3: Procedure Details Narrative Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                3. Operative Procedure Detail
              </h3>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    summaryData.procedureDetails[0]?.procedureDetail || "",
                    "Procedure Narrative"
                  )
                }
                className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy Procedure Note
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Surgical Procedure Name
                </label>
                <input
                  type="text"
                  value={summaryData.procedureDetails[0]?.surgicalProcedure || ""}
                  onChange={(e) => {
                    const copy = [...summaryData.procedureDetails];
                    copy[0].surgicalProcedure = e.target.value;
                    setSummaryData({ ...summaryData, procedureDetails: copy });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-bold text-[#1A73E8]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Anaesthesia Type
                </label>
                <select
                  value={summaryData.procedureDetails[0]?.anaesthesiaType || "LOCAL"}
                  onChange={(e) => {
                    const copy = [...summaryData.procedureDetails];
                    copy[0].anaesthesiaType = e.target.value as "LOCAL";
                    setSummaryData({ ...summaryData, procedureDetails: copy });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                >
                  <option value="LOCAL">LOCAL</option>
                  <option value="CONSCIOUS SEDATION">CONSCIOUS SEDATION</option>
                  <option value="GENERAL">GENERAL</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Done By</label>
                <input
                  type="text"
                  value={summaryData.procedureDetails[0]?.processDoneBy || ""}
                  onChange={(e) => {
                    const copy = [...summaryData.procedureDetails];
                    copy[0].processDoneBy = e.target.value;
                    setSummaryData({ ...summaryData, procedureDetails: copy });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                Detailed Operative Technique Narrative
              </label>
              <textarea
                rows={4}
                value={summaryData.procedureDetails[0]?.procedureDetail || ""}
                onChange={(e) => {
                  const copy = [...summaryData.procedureDetails];
                  copy[0].procedureDetail = e.target.value;
                  setSummaryData({ ...summaryData, procedureDetails: copy });
                }}
                className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] leading-relaxed"
              />
            </div>
          </div>

          {/* Section 4: Discharge Medications Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#137333] flex items-center gap-1.5">
                <Pill className="w-4 h-4" />
                4. Discharge Medications (RMSCL EDL)
              </h3>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    summaryData.dischargeMedications
                      .map((m) => `${m.sNo}. ${m.medicine} - ${m.dosePower} (${m.frequency}) x ${m.days} days`)
                      .join("\n"),
                    "Discharge Medications"
                  )
                }
                className="text-[11px] font-semibold text-[#137333] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy Meds
              </button>
            </div>

            <div className="space-y-2 text-xs">
              {summaryData.dischargeMedications.map((med, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                  <span className="w-6 text-center font-bold text-[#5F6368]">{med.sNo}</span>
                  <input
                    type="text"
                    value={med.medicine}
                    onChange={(e) => {
                      const copy = [...summaryData.dischargeMedications];
                      copy[idx].medicine = e.target.value;
                      setSummaryData({ ...summaryData, dischargeMedications: copy });
                    }}
                    className="flex-1 px-2 py-1 rounded border border-[#DADCE0] bg-white font-bold"
                  />
                  <input
                    type="text"
                    value={med.dosePower}
                    onChange={(e) => {
                      const copy = [...summaryData.dischargeMedications];
                      copy[idx].dosePower = e.target.value;
                      setSummaryData({ ...summaryData, dischargeMedications: copy });
                    }}
                    className="w-24 px-2 py-1 rounded border border-[#DADCE0] bg-white text-center font-mono"
                  />
                  <select
                    value={med.frequency}
                    onChange={(e) => {
                      const copy = [...summaryData.dischargeMedications];
                      copy[idx].frequency = e.target.value as "OD" | "BD" | "TID";
                      setSummaryData({ ...summaryData, dischargeMedications: copy });
                    }}
                    className="w-20 px-2 py-1 rounded border border-[#DADCE0] bg-white text-center font-bold text-[#1A73E8]"
                  >
                    <option value="OD">OD</option>
                    <option value="BD">BD</option>
                    <option value="TID">TID</option>
                    <option value="SOS">SOS</option>
                    <option value="HS">HS</option>
                  </select>
                  <input
                    type="number"
                    value={med.days}
                    onChange={(e) => {
                      const copy = [...summaryData.dischargeMedications];
                      copy[idx].days = Number(e.target.value);
                      setSummaryData({ ...summaryData, dischargeMedications: copy });
                    }}
                    className="w-16 px-2 py-1 rounded border border-[#DADCE0] bg-white text-center font-mono"
                  />
                  <input
                    type="text"
                    value={med.instructions}
                    onChange={(e) => {
                      const copy = [...summaryData.dischargeMedications];
                      copy[idx].instructions = e.target.value;
                      setSummaryData({ ...summaryData, dischargeMedications: copy });
                    }}
                    className="flex-1 px-2 py-1 rounded border border-[#DADCE0] bg-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Advice & Follow Up */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-[#B06000]">
              5. Discharge Advice & Follow Up
            </h3>
            <div className="text-xs">
              <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">General Advice</label>
              <textarea
                rows={2}
                value={summaryData.dischargeDetails.generalAdvise}
                onChange={(e) =>
                  setSummaryData({
                    ...summaryData,
                    dischargeDetails: {
                      ...summaryData.dischargeDetails,
                      generalAdvise: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
              />
            </div>
            <div className="text-xs">
              <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">Follow Up</label>
              <input
                type="text"
                value={summaryData.dischargeDetails.followUp}
                onChange={(e) =>
                  setSummaryData({
                    ...summaryData,
                    dischargeDetails: {
                      ...summaryData.dischargeDetails,
                      followUp: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Paste History Card Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-3">
              <div>
                <h3 className="text-base font-bold text-[#202124]">Paste Patient History Card</h3>
                <p className="text-xs text-[#5F6368]">
                  Paste clinical history, admission note, or referral findings to auto-populate IHMS fields
                </p>
              </div>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="p-1 rounded-full hover:bg-[#F1F3F4] text-[#5F6368]"
              >
                ✕
              </button>
            </div>

            <textarea
              rows={6}
              value={historyCardText}
              onChange={(e) => setHistoryCardText(e.target.value)}
              placeholder="e.g. 18Y male presented with left lower limb varicose veins for 8 months with dull aching pain. USG Doppler showed left GSV incompetence with reflux. Glue embolization planned. Lab parameters: Hb 13.8, Plt 245k, Creat 0.85..."
              className="w-full p-3 rounded-xl border border-[#DADCE0] text-xs leading-relaxed focus:border-[#1A73E8] focus:outline-none"
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="px-4 py-2 rounded-full border border-[#DADCE0] text-xs font-semibold text-[#3C4043] hover:bg-[#F1F3F4]"
              >
                Cancel
              </button>
              <button
                onClick={handleParseHistoryCard}
                className="px-4 py-2 rounded-full bg-[#1A73E8] text-white text-xs font-semibold hover:bg-[#1557B0]"
              >
                Parse & Auto-Populate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
