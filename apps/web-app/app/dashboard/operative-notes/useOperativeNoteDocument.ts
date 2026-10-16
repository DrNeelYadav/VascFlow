"use client";

import { useState, useCallback } from "react";
import { PROCEDURE_TEMPLATES } from "./procedureTemplatesCatalog";
import type { OperativeNoteDocumentData } from "./WordPadPaperSheet";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../lib/realData/smsMasterAnalysisCases";
import { REAL_SMS_PATIENT_REGISTRY } from "../../lib/realData/smsCathLabRealData";
import {
  exportOperativeNoteAsWordDoc,
  formatOperativeNotePlainText,
} from "./exportWordDocument";

export function useOperativeNoteDocument() {
  const [selectedProcedureId, setSelectedProcedureId] = useState<string>("biliary-sems");
  const [fontFamily, setFontFamily] = useState<string>("Calibri, sans-serif");
  const [fontSize, setFontSize] = useState<string>("11pt");
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isUnderline, setIsUnderline] = useState<boolean>(false);
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right" | "justify">("left");
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);

  const initialTemplate = PROCEDURE_TEMPLATES[0];
  const initialPatient = AUTHENTIC_SMS_MASTER_CASES[0];

  const [docData, setDocData] = useState<OperativeNoteDocumentData>({
    procedureTitle: initialTemplate.title,
    patientName: initialPatient ? initialPatient.patientName : "",
    ageSex: initialPatient ? `${initialPatient.age || ""} Y / ${initialPatient.gender || ""}`.trim() : "",
    dateStr: initialPatient ? initialPatient.date : "",
    referredBy: initialPatient?.unit || "Interventional Radiology",
    hidCr: initialPatient ? initialPatient.crNumber : "",
    irNo: initialPatient ? `DSA-${initialPatient.dsaNo}` : "",
    allergies: initialTemplate.allergies,
    anesthesia: initialTemplate.anesthesia,
    medication: initialTemplate.medication,
    field: initialTemplate.field,
    procedureClassification: initialTemplate.procedureClassification,
    position: initialTemplate.position,
    clinicalProfile: initialTemplate.clinicalProfile,
    technique: initialTemplate.technique,
    postOpPlan: initialTemplate.postOpPlan,
  });

  const handleFieldChange = useCallback(
    <K extends keyof OperativeNoteDocumentData>(key: K, value: OperativeNoteDocumentData[K]) => {
      setDocData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSelectProcedure = useCallback((id: string) => {
    setSelectedProcedureId(id);
    const tmpl = PROCEDURE_TEMPLATES.find((p) => p.id === id);
    if (!tmpl) return;

    setDocData((prev) => ({
      ...prev,
      procedureTitle: tmpl.title,
      allergies: tmpl.allergies,
      anesthesia: tmpl.anesthesia,
      medication: tmpl.medication,
      field: tmpl.field,
      procedureClassification: tmpl.procedureClassification,
      position: tmpl.position,
      clinicalProfile: tmpl.clinicalProfile,
      technique: tmpl.technique,
      postOpPlan: tmpl.postOpPlan,
    }));
  }, []);

  const handleResetTemplate = useCallback(() => {
    handleSelectProcedure(selectedProcedureId);
  }, [selectedProcedureId, handleSelectProcedure]);

  const handleSelectRegistryPatient = useCallback((caseItem: (typeof REAL_SMS_PATIENT_REGISTRY)[0]) => {
    setDocData((prev) => ({
      ...prev,
      patientName: caseItem.patientName,
      ageSex: `${caseItem.age || ""} Y / ${caseItem.gender || ""}`.trim(),
      dateStr: caseItem.date || prev.dateStr,
      referredBy: caseItem.unit || prev.referredBy,
      hidCr: caseItem.crNumber || prev.hidCr,
      irNo: caseItem.dsaNo || prev.irNo,
      procedureTitle: caseItem.procedureName || prev.procedureTitle,
      clinicalProfile: caseItem.diagnosis || prev.clinicalProfile,
    }));
  }, []);

  const handleCopy = useCallback(() => {
    const plainText = formatOperativeNotePlainText(docData);
    navigator.clipboard.writeText(plainText);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  }, [docData]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleDownloadDocx = useCallback(() => {
    exportOperativeNoteAsWordDoc(docData, fontFamily, fontSize);
  }, [docData, fontFamily, fontSize]);

  return {
    docData,
    handleFieldChange,
    selectedProcedureId,
    handleSelectProcedure,
    handleResetTemplate,
    handleSelectRegistryPatient,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    isBold,
    setIsBold,
    isItalic,
    setIsItalic,
    isUnderline,
    setIsUnderline,
    textAlign,
    setTextAlign,
    copyFeedback,
    handleCopy,
    handlePrint,
    handleDownloadDocx,
  };
}
