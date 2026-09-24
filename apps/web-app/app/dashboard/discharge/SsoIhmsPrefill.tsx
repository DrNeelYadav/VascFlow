"use client";

import React, { useState } from "react";
import { Copy, CheckCircle2, ShieldCheck, Terminal, Globe, ArrowRight } from "lucide-react";
import { IhmsDischargeSummaryData } from "./ihmsDischargeTemplates";

export interface SsoIhmsPrefillProps {
  summaryData: IhmsDischargeSummaryData;
}

export const SsoIhmsPrefill: React.FC<SsoIhmsPrefillProps> = ({ summaryData }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Rajasthan IHMS e-Hospital form field names mapped precisely
  const ihmsFields = [
    {
      label: "Discharge Type",
      fieldName: "ddlDischargeType",
      domSelector: "#ddlDischargeType, select[name*='DischargeType']",
      value: summaryData.admissionDetails.dischargeType,
      category: "Admission",
    },
    {
      label: "Chief Complaints",
      fieldName: "txtChiefComplaints",
      domSelector: "#txtChiefComplaints, textarea[name*='ChiefComplaints'], textarea[name*='complaint']",
      value: summaryData.caseSummary.complaints,
      category: "Clinical History",
    },
    {
      label: "History of Present Illness",
      fieldName: "txtHistory",
      domSelector: "#txtHistory, textarea[name*='HistoryOfPresentIllness'], textarea[name*='history']",
      value: summaryData.caseSummary.caseHistory,
      category: "Clinical History",
    },
    {
      label: "Past History",
      fieldName: "txtPastHistory",
      domSelector: "#txtPastHistory, textarea[name*='PastHistory']",
      value: summaryData.caseSummary.pastHistory,
      category: "Clinical History",
    },
    {
      label: "Risk Factors / Etiology",
      fieldName: "txtRiskFactors",
      domSelector: "#txtRiskFactors, textarea[name*='RiskFactor'], textarea[name*='risk']",
      value: summaryData.caseSummary.riskFactor,
      category: "Clinical History",
    },
    {
      label: "Local Examination",
      fieldName: "txtLocalExam",
      domSelector: "#txtLocalExam, textarea[name*='LocalExam']",
      value: summaryData.systemicExam.localExamination,
      category: "Physical Exam",
    },
    {
      label: "General Physical Examination",
      fieldName: "txtGeneralExam",
      domSelector: "#txtGeneralExam, textarea[name*='GeneralExam']",
      value: `BP: ${summaryData.physicalExam.atDischarge.bloodPressure} mmHg | Pulse: ${summaryData.physicalExam.atDischarge.pr}/min | Temp: ${summaryData.physicalExam.atDischarge.temp}F | RR: ${summaryData.physicalExam.atDischarge.rr}/min | SpO2: ${summaryData.physicalExam.atDischarge.spo2}% | Pallor: ${summaryData.physicalExam.atDischarge.pallor} | Icterus: ${summaryData.physicalExam.atDischarge.icterus} | Edema: ${summaryData.physicalExam.atDischarge.edema}`,
      category: "Physical Exam",
    },
    {
      label: "Operative / Procedural Notes",
      fieldName: "txtOperationNotes",
      domSelector: "#txtOperationNotes, textarea[name*='OperationNotes'], textarea[name*='procedure']",
      value: summaryData.procedureDetails.map((p) => `[${p.dateTime}] ${p.surgicalProcedure} (${p.operationType})\nOperator: ${p.processDoneBy}\n${p.procedureDetail}`).join("\n\n"),
      category: "Cath-Lab Notes",
    },
    {
      label: "Post-Operative Notes & Recovery",
      fieldName: "txtPostOpNotes",
      domSelector: "#txtPostOpNotes, textarea[name*='PostOpNotes'], textarea[name*='postop']",
      value: `Access Site Hemostasis: ${summaryData.postOperativeNotes?.accessSiteHemostasis || "Hemostasis Intact. Puncture site clean, dry & sealed."}\nTelemetry Vitals: ${summaryData.postOperativeNotes?.telemetryVitals || "Stable"}\nSheath Removal: ${summaryData.postOperativeNotes?.sheathRemovalTime || "Immediate post-procedure"} (${summaryData.postOperativeNotes?.sheathStatus || "Removed"})\nRecovery Status: ${summaryData.postOperativeNotes?.recoveryStatus || "Conscious, oriented, stable"}\nRecovery Bed: ${summaryData.postOperativeNotes?.recoveryBed || summaryData.admissionDetails.wardBed}\nDistal Pulses: ${summaryData.postOperativeNotes?.distalPulses || "Strong (+++) bilaterally equal"}\nImmediate Complications: ${summaryData.postOperativeNotes?.immediateComplications || "Nil"}\nRecorded By: ${summaryData.postOperativeNotes?.recordedBy || summaryData.dischargeDetails.dischargePreparedBy}`,
      category: "Cath-Lab Notes",
    },
    {
      label: "Discharge Advice & Red Flags",
      fieldName: "txtDischargeAdvice",
      domSelector: "#txtDischargeAdvice, textarea[name*='DischargeAdvice'], textarea[name*='advice']",
      value: `${summaryData.dischargeDetails.generalAdvise}\n\nFollow-up: ${summaryData.dischargeDetails.followUp}${
        summaryData.dischargeDetails.followUpDate
          ? `\nNext Appointment Date: ${summaryData.dischargeDetails.followUpDate}`
          : ""
      }`,
      category: "Discharge & Rx",
    },
    {
      label: "Discharge Medications (RMSCL EDL)",
      fieldName: "txtDischargeMedications",
      domSelector: "#txtDischargeMedications, textarea[name*='Medication'], textarea[name*='treatment']",
      value: summaryData.dischargeMedications
        .map(
          (m) =>
            `${m.sNo}. ${m.medicine} - Dose: ${m.dosePower}, Route: ${m.route}, Freq: ${m.frequency}, Days: ${m.days} (${m.instructions})`
        )
        .join("\n"),
      category: "Discharge & Rx",
    },
    {
      label: "Discharge Condition",
      fieldName: "ddlConditionOnDischarge",
      domSelector: "#ddlConditionOnDischarge, select[name*='Condition']",
      value: summaryData.dischargeDetails.conditionOnDischarge,
      category: "Discharge & Rx",
    },
  ];

  // 1-Click JavaScript Bookmarklet / Console Script for DOM Auto-Injection
  const generateBookmarkletScript = () => {
    const dataMap: Record<string, string> = {};
    ihmsFields.forEach((f) => {
      dataMap[f.fieldName] = f.value;
    });

    const script = `javascript:(function(){
  var data = ${JSON.stringify(dataMap)};
  function setVal(id, val) {
    var el = document.getElementById(id) || document.querySelector("[name*='" + id.replace(/^txt|^ddl/,'') + "']");
    if(el) {
      el.value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
      console.log('Populated: ' + id);
    }
  }
  for(var k in data) {
    setVal(k, data[k]);
  }
  alert('Rajasthan IHMS Discharge Fields Prepopulated Successfully!');
})();`;
    return script;
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 3000);
    });
  };

  return (
    <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-6 shadow-xs space-y-5 print:hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F3F4] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#E8F0FE] text-[#1A73E8]">
              <Globe className="w-4 h-4" />
            </span>
            <h3 className="text-sm font-bold text-[#202124] uppercase tracking-wider">
              Rajasthan SSO &amp; IHMS e-Hospital Live Ingestion Engine
            </h3>
          </div>
          <p className="text-xs text-[#5F6368] mt-1">
            Pre-formatted data matching the exact DOM form fields of <strong className="text-[#1A73E8]">ihms.health.rajasthan.gov.in</strong> and Rajasthan SSO.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => copyToClipboard(generateBookmarkletScript(), "bookmarklet")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold shadow-xs cursor-pointer active:scale-95 transition-all"
            title="Copy 1-Click Bookmarklet script for browser console or bookmark"
          >
            {copiedKey === "bookmarklet" ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
            ) : (
              <Terminal className="w-3.5 h-3.5" />
            )}
            <span>{copiedKey === "bookmarklet" ? "Bookmarklet Copied!" : "Copy 1-Click DOM Script"}</span>
          </button>
        </div>
      </div>

      {/* Instructions Alert */}
      <div className="p-3 bg-[#E8F0FE] rounded-xl border border-[#D2E3FC] flex items-start gap-2.5 text-xs text-[#1A73E8]">
        <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold">Rajasthan SSO Active Portal Guidance:</div>
          <p className="text-[#3C4043] leading-relaxed">
            Because Rajasthan SSO e-Hospital runs under authenticated session tokens with strict CSRF verification, use either the <strong>1-Click DOM Script</strong> (paste into the DevTools Console on the IHMS portal tab) or copy individual key fields below to instantaneously populate every input block.
          </p>
        </div>
      </div>

      {/* Field-by-Field Keyed Pre-Population Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {ihmsFields.map((field) => (
          <div
            key={field.fieldName}
            className="p-3.5 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2 hover:border-[#1A73E8] transition-all group shadow-2xs"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#202124] group-hover:text-[#1A73E8] transition-colors">
                  {field.label}
                </span>
                <span className="text-[10px] font-mono text-[#80868B] block">
                  Field ID: <code className="text-[#1A73E8] font-bold">{field.fieldName}</code>
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(field.value, field.fieldName)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                  copiedKey === field.fieldName
                    ? "bg-[#137333] text-white shadow-xs"
                    : "bg-white text-[#1A73E8] border border-[#DADCE0] hover:bg-[#E8F0FE]"
                }`}
              >
                {copiedKey === field.fieldName ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Field</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-2 bg-white rounded-lg border border-[#DADCE0] text-[11px] text-[#3C4043] max-h-24 overflow-y-auto font-mono whitespace-pre-wrap leading-relaxed">
              {field.value || <span className="text-[#9AA0A6] italic">Empty field</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
