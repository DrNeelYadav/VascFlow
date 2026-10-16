"use client";

import { useState, useEffect } from "react";
import {
  PreBookingRecord,
  ProcedureCategory,
  SchemeType,
  COMMON_PROCEDURES_TARIFFS,
  TaceDetails,
  BaeDetails,
  BleederDetails,
} from "./preBookingTypes";

export const useOpdPreBooking = () => {
  const [bookedRecords, setBookedRecords] = useState<PreBookingRecord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProcedureCategory>("sclerotherapy");
  const [filterQuery, setFilterQuery] = useState("");
  const [printRecord, setPrintRecord] = useState<PreBookingRecord | null>(null);

  // Form State
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [sex, setSex] = useState<"M" | "F" | "Other" | "">("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [crUhid, setCrUhid] = useState("");
  const [scheme, setScheme] = useState<SchemeType>("RGHS");
  const [scheduledDate, setScheduledDate] = useState("");
  const [admissionType, setAdmissionType] = useState<"Day Care" | "Inpatient Ward">("Day Care");
  const [anesthesiaPlan, setAnesthesiaPlan] = useState<"Local Anesthesia" | "Conscious Sedation" | "General Anesthesia">("Local Anesthesia");

  // Safety Checklist State (strictly blank unverified defaults)
  const [npoConfirmed, setNpoConfirmed] = useState(false);
  const [plateletCount, setPlateletCount] = useState("");
  const [inr, setInr] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [egfr, setEgfr] = useState("");
  const [viralMarkers, setViralMarkers] = useState<"Non-Reactive" | "Reactive" | "Awaited" | "">("");
  const [contrastAllergy, setContrastAllergy] = useState<"No" | "Yes (Premedicated with Steroid+Antihistamine)" | "">("");
  const [consentSigned, setConsentSigned] = useState(false);

  // Specific Forms State
  const [tace, setTace] = useState<TaceDetails>({
    hepaticArteryBranch: "Right Hepatic",
    couinaudSegments: ["VII", "VIII"],
    lesionCount: 1,
    dominantLesionSizeCm: "3.2 cm",
    liradsCategory: "LR-5",
    baselineAfpNgMl: "180 ng/mL",
    childPughClass: "A",
    etiology: "HCV",
  });

  const [bae, setBae] = useState<BaeDetails>({
    bronchialArteryOrigins: ["Right ICBT", "Left Superior Bronchial"],
    ectopicCollaterals: ["Subclavian / IMA"],
    hemoptysisSeverity: "Moderate (100-300ml)",
    primaryLungLobe: "RUL",
    spinalArteryAdamkiewiczIdentified: true,
    spinalArterySafetyCleared: true,
    etiology: "Post-TB Bronchiectasis",
  });

  const [bleeder, setBleeder] = useState<BleederDetails>({
    clinicalPresentation: "Hematemesis",
    forrestClass: "Ia (Spurting)",
    culpritVesselSuspected: "Gastroduodenal (GDA)",
    hemodynamicStatus: "Borderline",
    shockIndex: "0.95",
  });

  // Current Tariff Codes derived from category
  const activeTariff = COMMON_PROCEDURES_TARIFFS[selectedCategory];

  const handleCategoryChange = (cat: ProcedureCategory) => {
    setSelectedCategory(cat);
    if (cat === "tace" || cat === "bae" || cat === "bleeder") {
      setAdmissionType("Inpatient Ward");
    } else {
      setAdmissionType("Day Care");
    }
  };

  const handleBookCase = (scleroDetails?: any) => {
    if (!patientName.trim()) {
      alert("Please provide the patient name.");
      return;
    }
    const newRecord: PreBookingRecord = {
      id: `book-${Date.now()}`,
      createdAt: new Date().toISOString(),
      scheduledDate,
      patientName,
      age: Number(age) || 0,
      sex: (sex as "M" | "F" | "Other") || "Other",
      contactNumber,
      location,
      crUhid: crUhid || `CR-${Date.now().toString().slice(-5)}`,
      scheme,
      schemeCode: activeTariff.rghsMaay,
      icdCode: activeTariff.icd,
      procedureCategory: selectedCategory,
      procedureName: activeTariff.name,
      admissionType,
      anesthesiaPlan,
      safetyChecklist: {
        npoConfirmed,
        plateletCount,
        inr,
        creatinine,
        egfr,
        viralMarkers: viralMarkers || "",
        contrastAllergy: contrastAllergy || "",
        consentSigned,
      },
      status: "Provisional OPD Date",
      sclerotherapy: selectedCategory === "sclerotherapy" ? scleroDetails : undefined,
      tace: selectedCategory === "tace" ? tace : undefined,
      bae: selectedCategory === "bae" ? bae : undefined,
      bleeder: selectedCategory === "bleeder" ? bleeder : undefined,
    };

    setBookedRecords((prev) => [newRecord, ...prev]);
    setPrintRecord(newRecord);
  };

  const handleUpdateRecordDate = (recordId: string, newDate: string) => {
    setBookedRecords((prev) =>
      prev.map((r) => (r.id === recordId ? { ...r, scheduledDate: newDate, status: "Rescheduled" as const } : r))
    );
  };

  return {
    bookedRecords,
    handleUpdateRecordDate,
    selectedCategory,
    handleCategoryChange,
    filterQuery,
    setFilterQuery,
    printRecord,
    setPrintRecord,
    // Demographics
    patientName,
    setPatientName,
    age,
    setAge,
    sex,
    setSex,
    contactNumber,
    setContactNumber,
    location,
    setLocation,
    crUhid,
    setCrUhid,
    scheme,
    setScheme,
    scheduledDate,
    setScheduledDate,
    admissionType,
    setAdmissionType,
    anesthesiaPlan,
    setAnesthesiaPlan,
    activeTariff,
    // Safety
    npoConfirmed,
    setNpoConfirmed,
    plateletCount,
    setPlateletCount,
    inr,
    setInr,
    creatinine,
    setCreatinine,
    egfr,
    setEgfr,
    viralMarkers,
    setViralMarkers,
    contrastAllergy,
    setContrastAllergy,
    consentSigned,
    setConsentSigned,
    // Specific
    tace,
    setTace,
    bae,
    setBae,
    bleeder,
    setBleeder,
    handleBookCase,
  };
};
