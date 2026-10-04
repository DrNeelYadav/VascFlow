"use client";

import { useState, useMemo } from "react";
import { INITIAL_RIS_WORKLIST_CASES } from "../worklist/worklistData";
import { EXTENSIVE_IR_PROCEDURES } from "../../lib/data/procedures";
import {
  getProcedureConsentTemplate,
} from "./consentTemplateResolver";

export type ConsentTabType = "CONSENT" | "PREPARATION";

export function useConsentStudio() {
  const [activeTab, setActiveTab] = useState<ConsentTabType>("CONSENT");
  const [selectedTemplateKey, setSelectedTemplateKey] = useState<string>("tips");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [procedureSearch, setProcedureSearch] = useState<string>("");
  const [languageMode, setLanguageMode] = useState<"BILINGUAL" | "EN" | "HI">("BILINGUAL");

  const activeTemplate = useMemo(() => {
    return getProcedureConsentTemplate(selectedTemplateKey);
  }, [selectedTemplateKey]);

  // Demographics
  const [patientName, setPatientName] = useState<string>("");
  const [patientAge, setPatientAge] = useState<string>("");
  const [patientGender, setPatientGender] = useState<string>("");
  const [crNumber, setCrNumber] = useState<string>("");
  const [ipdNumber, setIpdNumber] = useState<string>("");
  const [relativeName, setRelativeName] = useState<string>("");
  const [relativeRelation, setRelativeRelation] = useState<string>("");
  const [relativePhone, setRelativePhone] = useState<string>("");
  const [procedureDate, setProcedureDate] = useState<string>("");
  const [procedureTime, setProcedureTime] = useState<string>("");

  const fixedWard = "IR Ward (Old Gastro Ward)";

  // Staff Credentials
  const [doctorName, setDoctorName] = useState<string>("Prof. (Dr.) Interventional Radiologist");
  const [doctorDesignation, setDoctorDesignation] = useState<string>(
    "Senior Professor & Head, Interventional Radiology",
  );
  const [residentDoctor, setResidentDoctor] = useState<string>(
    "Dr. Neel Yadav, DM Resident, Interventional Radiology",
  );

  // Labs
  const [weightKg, setWeightKg] = useState<string | number>("");
  const [patientHb, setPatientHb] = useState<string | number>("");
  const [patientPlatelets, setPatientPlatelets] = useState<string | number>("");
  const [patientInr, setPatientInr] = useState<string | number>("");
  const [patientAptt, setPatientAptt] = useState<string | number>("");
  const [patientCreatinine, setPatientCreatinine] = useState<string | number>("");
  const [patientEgfr, setPatientEgfr] = useState<string | number>("");
  const [viralStatus, setViralStatus] = useState<
    "NON_REACTIVE" | "HCV_POSITIVE" | "HBSAG_POSITIVE" | "HIV_POSITIVE" | ""
  >("NON_REACTIVE");
  const [bloodGroup, setBloodGroup] = useState<string>("");

  // Nursing tasks
  const [checkedNursingTasks, setCheckedNursingTasks] = useState<Record<string, boolean>>({
    npo_solid: false,
    npo_liquid: false,
    iv_cannula: false,
    skin_prep: false,
    metallic_removal: false,
    pre_antibiotic: false,
    consent_signed: false,
    wristband_id: false,
  });

  const macdLimitMl = useMemo(() => {
    const wt = typeof weightKg === "number" ? weightKg : parseFloat(String(weightKg).trim());
    const cr = typeof patientCreatinine === "number" ? patientCreatinine : parseFloat(String(patientCreatinine).trim());
    if (!isNaN(wt) && !isNaN(cr) && wt > 0 && cr > 0) {
      return Math.round((5 * wt) / cr);
    }
    return null;
  }, [weightKg, patientCreatinine]);

  const handleLoadPresetPatient = (caseId: string) => {
    const matched = INITIAL_RIS_WORKLIST_CASES.find((c) => c.caseId === caseId);
    if (!matched) return;
    setPatientName(matched.patientName);
    setCrNumber(matched.crNumber);
    setDoctorName(matched.supervisingConsultant);
    setResidentDoctor(matched.operatorResident);
    setProcedureDate(new Date().toISOString().split("T")[0]);
    setProcedureTime("09:30 AM");

    const pName = matched.procedureName.toLowerCase();
    const matchedCatalogProc = EXTENSIVE_IR_PROCEDURES.find(
      (p) => p.name.toLowerCase().includes(pName) || pName.includes(p.name.toLowerCase()),
    );
    if (matchedCatalogProc) {
      setSelectedTemplateKey(matchedCatalogProc.id);
    } else if (pName.includes("dips") || pName.includes("tips")) {
      setSelectedTemplateKey("tips");
    } else if (pName.includes("brto")) {
      setSelectedTemplateKey("parto_brto");
    } else if (pName.includes("bronchial") || pName.includes("bae")) {
      setSelectedTemplateKey("bae");
    } else if (pName.includes("uterine") || pName.includes("uae")) {
      setSelectedTemplateKey("uae");
    } else if (pName.includes("biliary") || pName.includes("ptbd")) {
      setSelectedTemplateKey("ptbd");
    } else if (pName.includes("sfa") || pName.includes("angioplasty") || pName.includes("fistul")) {
      setSelectedTemplateKey("fistuloplasty");
    } else if (pName.includes("biopsy")) {
      setSelectedTemplateKey("biopsy");
    } else if (pName.includes("nephrostomy") || pName.includes("pcn")) {
      setSelectedTemplateKey("pcn");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleNursingTask = (id: string) => {
    setCheckedNursingTasks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return {
    activeTab,
    setActiveTab,
    selectedTemplateKey,
    setSelectedTemplateKey,
    selectedCategory,
    setSelectedCategory,
    procedureSearch,
    setProcedureSearch,
    languageMode,
    setLanguageMode,
    activeTemplate,
    patientName,
    setPatientName,
    patientAge,
    setPatientAge,
    patientGender,
    setPatientGender,
    crNumber,
    setCrNumber,
    ipdNumber,
    setIpdNumber,
    relativeName,
    setRelativeName,
    relativeRelation,
    setRelativeRelation,
    relativePhone,
    setRelativePhone,
    procedureDate,
    setProcedureDate,
    procedureTime,
    setProcedureTime,
    fixedWard,
    doctorName,
    setDoctorName,
    doctorDesignation,
    setDoctorDesignation,
    residentDoctor,
    setResidentDoctor,
    weightKg,
    setWeightKg,
    patientHb,
    setPatientHb,
    patientPlatelets,
    setPatientPlatelets,
    patientInr,
    setPatientInr,
    patientAptt,
    setPatientAptt,
    patientCreatinine,
    setPatientCreatinine,
    patientEgfr,
    setPatientEgfr,
    viralStatus,
    setViralStatus,
    bloodGroup,
    setBloodGroup,
    checkedNursingTasks,
    toggleNursingTask,
    macdLimitMl,
    handleLoadPresetPatient,
    handlePrint,
  };
}
