"use client";

import { useState, useMemo, useCallback } from "react";
import { useEndoflowStore } from "../useEndoflowStore";
import {
  IhmsDischargeSummaryData,
  SUNIL_KUMAR_DISCHARGE,
  BUDD_CHIARI_DISCHARGE,
  generateIhmsDischargeForPatient,
} from "./ihmsDischargeTemplates";

export function useDischargeSummary() {
  const patients = useEndoflowStore((s) => s.patients);
  const [selectedPatientId, setSelectedPatientId] = useState<string>("EX01");
  const [copied, setCopied] = useState<boolean>(false);

  // Pre-generate authentic discharge records from available patients
  const patientSummaries = useMemo(() => {
    const map: Record<string, IhmsDischargeSummaryData> = {
      EX01: SUNIL_KUMAR_DISCHARGE,
      EX02: BUDD_CHIARI_DISCHARGE,
    };
    patients.forEach((p) => {
      map[p.id] = generateIhmsDischargeForPatient({
        id: p.id,
        name: p.name,
        age: p.age,
        sex: p.sex,
        hid: p.hid,
        scanId: p.scanId,
        unit: p.unit,
        postedBy: p.postedBy,
        summary: p.summary,
        procedure: p.procedure,
        procedureKey: p.procedureKey || "varicose_veins_venaseal",
        scheme: p.scheme,
        chiefComplaints: p.chiefComplaints,
        clinicalHistory3Months: p.clinicalHistory3Months || p.history3Months,
        cectFindings: p.cectFindings,
        ipd: p.ipd,
        labs: p.labs,
        inRoom: p.inRoom,
        postOp: p.postOp,
        attachments: p.attachments,
      });
    });
    return map;
  }, [patients]);

  const activeSummary = useMemo(() => {
    return patientSummaries[selectedPatientId] || SUNIL_KUMAR_DISCHARGE;
  }, [patientSummaries, selectedPatientId]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleCopy = useCallback(() => {
    const text = `RAJASTHAN GOVERNMENT - IHMS E-HOSPITAL DISCHARGE SUMMARY
SAWAI MAN SINGH (SMS) MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY
================================================================================
PATIENT NAME : ${activeSummary.admissionDetails.patientName} (${activeSummary.admissionDetails.age} / ${activeSummary.admissionDetails.gender})
CR / UHID    : ${activeSummary.admissionDetails.hid} | ADMISSION NO: ${activeSummary.admissionDetails.admissionNo}
WARD / BED   : ${activeSummary.admissionDetails.wardBed} | CATEGORY: ${activeSummary.admissionDetails.patientCategory}
ADM DATE     : ${activeSummary.admissionDetails.dateOfAdmission} | DISCHARGE: ${activeSummary.admissionDetails.dateOfDischarge}
UNIT         : ${activeSummary.admissionDetails.unitName} (${activeSummary.admissionDetails.unitHead})

FINAL DIAGNOSIS:
${activeSummary.caseSummary.diagnosis} (ICD-10: ${activeSummary.caseSummary.icdDiagnosis})

PROCEDURE PERFORMED:
${activeSummary.procedureDetails.map((p) => `${p.surgicalProcedure} - ${p.procedureDetail}`).join("\n")}

COURSE IN HOSPITAL:
${activeSummary.caseSummary.caseHistory}

DISCHARGE MEDICATIONS:
${activeSummary.dischargeMedications.map((m, i) => `${i + 1}. ${m.medicine} - ${m.frequency} x ${m.days} days (${m.instructions})`).join("\n")}

ADVICE & EMERGENCY RED FLAGS:
${activeSummary.dischargeDetails.generalAdvise}
Follow-up: ${activeSummary.dischargeDetails.followUp} (Review Date: ${activeSummary.dischargeDetails.followUpDate})`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [activeSummary]);

  return {
    patients,
    selectedPatientId,
    setSelectedPatientId,
    activeSummary,
    copied,
    handleCopy,
    handlePrint,
  };
}
