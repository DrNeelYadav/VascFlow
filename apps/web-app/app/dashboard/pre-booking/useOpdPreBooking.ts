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
  const [sex, setSex] = useState<"M" | "F" | "Other">("M");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("Jaipur, Rajasthan");
  const [crUhid, setCrUhid] = useState("");
  const [scheme, setScheme] = useState<SchemeType>("RGHS");
  const [scheduledDate, setScheduledDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split("T")[0];
  });
  const [admissionType, setAdmissionType] = useState<"Day Care" | "Inpatient Ward">("Day Care");
  const [anesthesiaPlan, setAnesthesiaPlan] = useState<"Local Anesthesia" | "Conscious Sedation" | "General Anesthesia">("Local Anesthesia");

  // Safety Checklist State
  const [npoConfirmed, setNpoConfirmed] = useState(true);
  const [plateletCount, setPlateletCount] = useState("180,000 / uL");
  const [inr, setInr] = useState("1.10");
  const [creatinine, setCreatinine] = useState("0.85 mg/dL");
  const [egfr, setEgfr] = useState("96 mL/min");
  const [viralMarkers, setViralMarkers] = useState<"Non-Reactive" | "Reactive" | "Awaited">("Non-Reactive");
  const [contrastAllergy, setContrastAllergy] = useState<"No" | "Yes (Premedicated with Steroid+Antihistamine)">("No");
  const [consentSigned, setConsentSigned] = useState(true);

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
      age: Number(age) || 45,
      sex,
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
        viralMarkers,
        contrastAllergy,
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

  return {
    bookedRecords,
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
