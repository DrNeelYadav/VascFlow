import { PatientSafetyProfile } from '../types/clinical';

export interface DischargeFormData {
  patient: PatientSafetyProfile;
  chiefComplaints: string;
  historyOfPresentIllness: string;
  preOpLabs: string;
  preOpImaging: string;
  procedureName: string;
  procedureDate: string;
  operator: string;
  accessSite: string;
  sheath: string;
  contrastVolumeMl: number;
  fluoroTimeMinutes: number;
  hardwareUsed: string;
  embolicAgents: string;
  intraOpNotes: string;
  complications: string;
  hemostasis: string;
  hospitalCourse: string;
  dischargeVitals: string;
  dischargeMedications: string;
  dischargeAdvice: string;
  followUpAdvice: string;
}

export function serializeDischargePayload(data: DischargeFormData) {
  const minifiedJson = JSON.stringify({
    crNo: data.patient.crNo,
    ipdNo: data.patient.ipdNo,
    patientName: data.patient.name,
    age: data.patient.age,
    gender: data.patient.gender,
    bedNo: data.patient.bedNo,
    scheme: data.patient.scheme,
    schemeTid: data.patient.schemeTid,
    diagnosis: data.patient.diagnosis,
    chiefComplaints: data.chiefComplaints,
    history: data.historyOfPresentIllness,
    labs: data.preOpLabs,
    imaging: data.preOpImaging,
    procedureName: data.procedureName,
    procedureDate: data.procedureDate,
    operator: data.operator,
    accessSite: data.accessSite,
    sheath: data.sheath,
    contrastMl: data.contrastVolumeMl,
    fluoroMin: data.fluoroTimeMinutes,
    hardware: data.hardwareUsed,
    embolics: data.embolicAgents,
    opNotes: data.intraOpNotes,
    complications: data.complications,
    hemostasis: data.hemostasis,
    course: data.hospitalCourse,
    vitals: data.dischargeVitals,
    meds: data.dischargeMedications,
    advice: data.dischargeAdvice,
    followup: data.followUpAdvice,
    generatedAt: new Date().toISOString()
  });

  const clinicalFormattedNote = `SAWAI MAN SINGH MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY
CLINICAL DISCHARGE & OPERATIVE SUMMARY
======================================================================
Patient: ${data.patient.name} | Age/Sex: ${data.patient.age}Y/${data.patient.gender} | Bed: ${data.patient.bedNo}
CR No: ${data.patient.crNo} | IPD No: ${data.patient.ipdNo} | Scheme: ${data.patient.scheme} (TID: ${data.patient.schemeTid || 'N/A'})
Diagnosis: ${data.patient.diagnosis}
----------------------------------------------------------------------
CHIEF COMPLAINTS:
${data.chiefComplaints}

CLINICAL HISTORY & COURSE:
${data.historyOfPresentIllness}

PRE-OPERATIVE INVESTIGATIONS & IMAGING:
${data.preOpLabs}
Imaging: ${data.preOpImaging}

INTERVENTIONAL RADIOLOGY OPERATIVE RECORD:
Procedure: ${data.procedureName}
Date: ${data.procedureDate} | Operator: ${data.operator}
Access Route: ${data.accessSite} | Sheath: ${data.sheath}
Fluoroscopy Time: ${data.fluoroTimeMinutes} min | Contrast: ${data.contrastVolumeMl} mL
Hardware: ${data.hardwareUsed}
Embolic Agents / Implants: ${data.embolicAgents}

Operative Findings:
${data.intraOpNotes}
Complications: ${data.complications}
Hemostasis: ${data.hemostasis}

POST-PROCEDURE COURSE & VITALS AT DISCHARGE:
${data.hospitalCourse}
Discharge Vitals: ${data.dischargeVitals}

DISCHARGE MEDICATIONS:
${data.dischargeMedications}

DISCHARGE INSTRUCTIONS & WARNING SIGNS:
${data.dischargeAdvice}

FOLLOW-UP SCHEDULE:
${data.followUpAdvice}
======================================================================`;

  return {
    minifiedJson,
    clinicalFormattedNote
  };
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    return false;
  }
}

export function generateTampermonkeyScript(): string {
  return `// ==UserScript==
// @name         SMS Jaipur IR - IHMS 1-Click Autofill Assistant
// @namespace    https://sms-ir.health.rajasthan.gov.in
// @version      3.0-PRO
// @description  Automates Discharge Summary & Bed Management note entry on Rajasthan IHMS portal for SMS Interventional Radiology
// @author       Department of Radiodiagnosis & Interventional Radiology, SMS Medical College, Jaipur
// @match        https://ihms.health.rajasthan.gov.in/*
// @grant        GM_setClipboard
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict';

  function injectFloatingButton() {
    if (document.getElementById('sms-ir-ihms-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'sms-ir-ihms-panel';
    panel.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:999999;background:#0f172a;border:2px solid #dc2626;border-radius:10px;padding:12px;box-shadow:0 10px 25px rgba(0,0,0,0.5);font-family:sans-serif;color:white;width:240px;';
    panel.innerHTML = '<div style="font-weight:bold;font-size:12px;margin-bottom:8px;color:#ef4444;display:flex;align-items:center;gap:6px;"><span style="background:#dc2626;color:white;padding:2px 5px;border-radius:3px;font-size:10px;">SMS IR</span> IHMS Autofill</div>' +
      '<button id="btn-sms-read-clip" style="width:100%;background:#dc2626;color:white;border:none;padding:8px;border-radius:6px;font-size:11px;font-weight:bold;cursor:pointer;margin-bottom:6px;">Auto-Fill from Clipboard</button>' +
      '<div id="sms-status-msg" style="font-size:10px;color:#94a3b8;">Clipboard data will be mapped to form fields.</div>';

    document.body.appendChild(panel);

    document.getElementById('btn-sms-read-clip').onclick = async function() {
      try {
        const text = await navigator.clipboard.readText();
        const statusEl = document.getElementById('sms-status-msg');
        let data = null;
        try {
          data = JSON.parse(text);
        } catch {
          // Fallback if plain text note
          data = { clinicalFormattedNote: text };
        }

        // Rajasthan IHMS 2.0 Precise DOM IDs & Field Names
        const fieldMappings = {
          txtCrNo: data.crNo,
          txtIpdNo: data.ipdNo,
          txtPatientName: data.patientName,
          txtDiagnosis: data.diagnosis,
          txtProvisionalDiagnosis: data.diagnosis,
          txtClinicalSummary: data.history ? ((data.chiefComplaints ? data.chiefComplaints + '\\n' : '') + data.history) : undefined,
          txtHistory: data.history,
          txtPreOpLabs: data.labs,
          txtProcedureName: data.procedureName,
          txtProcedureNotes: data.opNotes ? ('PROCEDURE: ' + (data.procedureName || '') + '\\nOPERATOR: ' + (data.operator || '') + '\\nACCESS: ' + (data.accessSite || '') + ' (' + (data.sheath || '') + ')\\nCONTRAST: ' + (data.contrastMl || 0) + ' mL | FLUORO: ' + (data.fluoroMin || 0) + ' min\\nHARDWARE: ' + (data.hardware || '') + '\\nEMBOLICS: ' + (data.embolics || '') + '\\n\\nFINDINGS & TECHNIQUE:\\n' + data.opNotes + '\\nHEMOSTASIS: ' + (data.hemostasis || 'Manual') + '\\nCOMPLICATIONS: ' + (data.complications || 'None')) : undefined,
          txtOperativeFindings: data.opNotes,
          txtHospitalCourse: data.course,
          txtDischargeVitals: data.vitals,
          txtDischargeMedications: data.meds,
          txtPrescription: data.meds,
          txtDischargeAdvice: data.advice ? (data.advice + '\\n\\nFOLLOW-UP:\\n' + (data.followup || '')) : undefined,
          txtFollowUpAdvice: data.followup
        };

        // 1. Direct ID matching on IHMS 2.0 form elements
        Object.entries(fieldMappings).forEach(([domId, val]) => {
          if (!val) return;
          const target = document.getElementById(domId) as HTMLInputElement | HTMLTextAreaElement | null;
          if (target) {
            target.value = val;
            target.dispatchEvent(new Event('input', { bubbles: true }));
            target.dispatchEvent(new Event('change', { bubbles: true }));
            filledCount++;
          }
        });

        // 2. Fallback matching across all form inputs if IDs differ
        const inputs = document.querySelectorAll('textarea, input[type="text"]');
        inputs.forEach((el: any) => {
          const nameOrId = (el.id || el.name || '').toLowerCase();
          if (!el.value) {
            if (data.diagnosis && (nameOrId.includes('diag') || nameOrId.includes('disease'))) {
              el.value = data.diagnosis;
              filledCount++;
            } else if (data.opNotes && (nameOrId.includes('operat') || nameOrId.includes('proced') || nameOrId.includes('finding') || nameOrId.includes('notes'))) {
              el.value = (data.procedureName ? data.procedureName + '\n' : '') + data.opNotes;
              filledCount++;
            } else if (data.meds && (nameOrId.includes('med') || nameOrId.includes('drug') || nameOrId.includes('rx') || nameOrId.includes('prescrip'))) {
              el.value = data.meds;
              filledCount++;
            } else if (data.advice && (nameOrId.includes('advice') || nameOrId.includes('instruct') || nameOrId.includes('warn'))) {
              el.value = data.advice;
              filledCount++;
            }
          }
        });

        statusEl.innerText = 'Filled ' + filledCount + ' matching fields successfully!';
        statusEl.style.color = '#10b981';
      } catch (err) {
        alert('Could not read clipboard. Please allow clipboard permissions.');
      }
    };
  }

  window.addEventListener('load', injectFloatingButton);
  setTimeout(injectFloatingButton, 2000);
})();`;
}
