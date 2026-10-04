"use client";

import { useState, useMemo, useEffect } from "react";
import {
  ALL_MASTER_PROCEDURES,
  buildOperativeNote,
} from "../../lib/masterCatalog";
import {
  DAILY_ROUTINE_IR_PROCEDURES,
} from "./dailyRoutineProcedures";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../lib/realData/smsMasterAnalysisCases";
import { REAL_SMS_PATIENT_REGISTRY } from "../../lib/realData/smsCathLabRealData";
export type OperativeRegistryPatient = (typeof AUTHENTIC_SMS_MASTER_CASES)[0];

export function useOperativeNoteState() {
  const [selectedProcedureId, setSelectedProcedureId] = useState<string>(DAILY_ROUTINE_IR_PROCEDURES[0].id);
  const [patientSearch, setPatientSearch] = useState<string>("");
  const [patientName, setPatientName] = useState<string>("");
  const [age, setAge] = useState<string | number>("");
  const [gender, setGender] = useState<string>("");
  const [crNumber, setCrNumber] = useState<string>("");
  const [ipdBed, setIpdBed] = useState<string>("");
  const [dateOfProcedure, setDateOfProcedure] = useState<string>(() => new Date().toISOString().split("T")[0]);
  const [admissionNo, setAdmissionNo] = useState<string>("");
  const [supervisingConsultant, setSupervisingConsultant] = useState<string>("Dr. Meenu Bagarhatta (Sr. Prof & Head)");
  const [primaryOperator, setPrimaryOperator] = useState<string>("Dr. Naresh Mangalhara (Associate Professor)");

  const [customIndication, setCustomIndication] = useState<string>("");
  const [customAccessSite, setCustomAccessSite] = useState<string>("");
  const [customSheath, setCustomSheath] = useState<string>("");
  const [customFluoroTime, setCustomFluoroTime] = useState<number | string>("");
  const [customContrast, setCustomContrast] = useState<string>("");
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);

  const activeRoutine = useMemo(() => {
    return (
      DAILY_ROUTINE_IR_PROCEDURES.find((p) => p.id === selectedProcedureId) ||
      DAILY_ROUTINE_IR_PROCEDURES[0]
    );
  }, [selectedProcedureId]);

  const activeMasterProcedure = useMemo(() => {
    return (
      ALL_MASTER_PROCEDURES.find((p) => p.id === selectedProcedureId) ||
      ALL_MASTER_PROCEDURES[0]
    );
  }, [selectedProcedureId]);

  const allRegistryPatients: OperativeRegistryPatient[] = useMemo(() => {
    return (AUTHENTIC_SMS_MASTER_CASES?.length > 0)
      ? AUTHENTIC_SMS_MASTER_CASES
      : (REAL_SMS_PATIENT_REGISTRY as unknown as OperativeRegistryPatient[]);
  }, []);

  const patientSearchResults = useMemo(() => {
    const q = patientSearch.toLowerCase().trim();
    if (!q) return [];
    return allRegistryPatients
      .filter(
        (p: OperativeRegistryPatient) =>
          p.patientName.toLowerCase().includes(q) ||
          p.crNumber.toLowerCase().includes(q) ||
          String(p.dsaNo).includes(q)
      )
      .slice(0, 8);
  }, [allRegistryPatients, patientSearch]);

  const handleSelectRegistryPatient = (p: typeof allRegistryPatients[0]) => {
    setPatientName(p.patientName);
    setAge(p.age ?? "");
    setGender(p.gender || "Male");
    setCrNumber(p.crNumber || "");
    setIpdBed(p.unit ? `${p.unit} Ward` : "Male IR Ward");
    setAdmissionNo(p.crNumber ? `A/SMSH/${p.crNumber}` : `A/SMSH/26/${p.dsaNo}`);
    setDateOfProcedure(
      p.date
        ? p.date.includes(".")
          ? p.date.split(".").reverse().join("-")
          : p.date
        : new Date().toISOString().split("T")[0]
    );
    if (p.primaryOperator) setPrimaryOperator(p.primaryOperator);
    setPatientSearch("");
  };

  useEffect(() => {
    if (activeRoutine) {
      setCustomIndication(activeRoutine.indicationDefault);
      setCustomAccessSite(activeRoutine.accessSiteDefault);
      setCustomSheath(activeRoutine.sheathDefault);
      setCustomFluoroTime(activeRoutine.fluoroTimeMinutes);
      setCustomContrast(
        activeRoutine.contrastVolumeMl > 0
          ? `${activeRoutine.contrastVolumeMl} mL ${activeRoutine.contrastMedia}`
          : "None"
      );
    }
  }, [activeRoutine]);

  const operativeNoteText = useMemo(() => {
    return buildOperativeNote(activeMasterProcedure, {
      patientName,
      age,
      gender,
      crNumber,
      ipdBed,
      dateOfProcedure,
      supervisingConsultant,
      primaryOperator,
      indication: customIndication,
      accessSite: customAccessSite,
      sheath: customSheath,
      fluoroTimeMinutes: Number(customFluoroTime) || undefined,
      contrast: customContrast,
    });
  }, [
    activeMasterProcedure,
    patientName,
    age,
    gender,
    crNumber,
    ipdBed,
    dateOfProcedure,
    supervisingConsultant,
    primaryOperator,
    customIndication,
    customAccessSite,
    customSheath,
    customFluoroTime,
    customContrast,
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText(operativeNoteText);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const setAgeGender = (inputVal: string) => {
    if (inputVal.includes("/")) {
      const parts = inputVal.split("/");
      setAge(parts[0] || "");
      if (parts[1]) setGender(parts[1].toUpperCase() === "F" ? "Female" : "Male");
    } else {
      setAge(inputVal);
    }
  };

  return {
    selectedProcedureId,
    setSelectedProcedureId,
    patientSearch,
    setPatientSearch,
    patientName,
    setPatientName,
    age,
    gender,
    setAgeGender,
    crNumber,
    setCrNumber,
    ipdBed,
    setIpdBed,
    dateOfProcedure,
    setDateOfProcedure,
    admissionNo,
    setAdmissionNo,
    supervisingConsultant,
    setSupervisingConsultant,
    primaryOperator,
    setPrimaryOperator,
    customIndication,
    setCustomIndication,
    customAccessSite,
    setCustomAccessSite,
    customSheath,
    setCustomSheath,
    customFluoroTime,
    setCustomFluoroTime,
    customContrast,
    setCustomContrast,
    copyFeedback,
    activeRoutine,
    activeMasterProcedure,
    patientSearchResults,
    handleSelectRegistryPatient,
    handleCopy,
    handlePrint,
    operativeNoteText,
  };
}
