"use client";

import { useState, useMemo, useCallback } from "react";
import { useEndoflowStore, BookedCaseRecord } from "../useEndoflowStore";
import { ProcedureCategory, PreBookingRecord, COMMON_PROCEDURES_TARIFFS } from "./preBookingTypes";

export function usePreBookingStudio() {
  const patients = useEndoflowStore((s) => s.patients);
  const storeBookedCases = useEndoflowStore((s) => s.bookedCases);
  const rescheduleCase = useEndoflowStore((s) => s.rescheduleCase);

  const [viewMode, setViewMode] = useState<"queue" | "form">("queue");
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProcedureCategory>("sclerotherapy");
  const [isPrepopulated, setIsPrepopulated] = useState(false);

  // Demographics state (strictly blank by default — zero phantom data)
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [uhid, setUhid] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");

  // Map store booked cases into PreBookingRecord items for unified queue
  const displayRecords: PreBookingRecord[] = useMemo(() => {
    return storeBookedCases.map((c: BookedCaseRecord) => {
      let cat: ProcedureCategory = "general";
      const pLower = (c.procedureTitle || "").toLowerCase();
      if (pLower.includes("sclero")) cat = "sclerotherapy";
      else if (pLower.includes("tace")) cat = "tace";
      else if (pLower.includes("bae") || pLower.includes("bronchial")) cat = "bae";
      else if (pLower.includes("bleed")) cat = "bleeder";
      else if (pLower.includes("biliary") || pLower.includes("ptbd")) cat = "biliary";
      else if (pLower.includes("vein") || pLower.includes("varicose") || pLower.includes("evla")) cat = "varicose";
      else if (pLower.includes("jna")) cat = "jna";
      else if (pLower.includes("uae") || pLower.includes("fibroid")) cat = "uae";
      else if (pLower.includes("fistula") || pLower.includes("dialysis")) cat = "fistuloplasty";
      else if (pLower.includes("pcn") || pLower.includes("nephrostomy")) cat = "pcn";

      const tariff = COMMON_PROCEDURES_TARIFFS[cat] || COMMON_PROCEDURES_TARIFFS.general;

      return {
        id: c.id,
        createdAt: c.bookedAt || new Date().toISOString(),
        scheduledDate: c.scheduledDate || "",
        patientName: c.patientName,
        age: c.age,
        sex: c.sex === "Female" ? "F" : "M",
        contactNumber: c.contactNumber || "",
        location: c.location || "",
        crUhid: c.ssoNumber || "",
        scheme: (c as any).scheme || "MAAY",
        schemeCode: tariff?.rghsMaay || "IR-GEN-01",
        icdCode: tariff?.icd || "Z01.8",
        procedureCategory: cat,
        procedureName: c.procedureTitle || tariff?.name || "IR Procedure",
        admissionType: "Day Care",
        anesthesiaPlan: "Local Anesthesia",
        safetyChecklist: {
          npoConfirmed: false,
          plateletCount: "—",
          inr: "—",
          creatinine: "—",
          egfr: "—",
          viralMarkers: "Non-Reactive",
          contrastAllergy: "No",
          consentSigned: false,
        },
        status: (c.status as any) || "Confirmed",
      };
    });
  }, [storeBookedCases]);

  const handleSelectPatient = useCallback((p: any) => {
    setPatientName(p.name || "");
    setAge(p.age ? String(p.age) : "");
    setSex(p.sex || "");
    setUhid(p.hid || p.scanId || "");
    setContactNumber(p.contactNumber || p.phone || "");
    setUnit(p.unit || "");
  }, []);

  const handleSelectCaseFromQueue = useCallback((rec: PreBookingRecord) => {
    setPatientName(rec.patientName);
    setAge(rec.age ? String(rec.age) : "");
    setSex(rec.sex);
    setUhid(rec.crUhid);
    setContactNumber(rec.contactNumber || "");
    setLocation(rec.location || "");
    setScheduledDate(rec.scheduledDate || "");
    setSelectedCategory(rec.procedureCategory);
    setViewMode("form");
  }, []);

  const handleNewDatingForm = useCallback(() => {
    setPatientName("");
    setAge("");
    setSex("");
    setUhid("");
    setContactNumber("");
    setLocation("");
    setUnit("");
    setScheduledDate("");
    setViewMode("form");
  }, []);

  const handleModeChange = useCallback(
    (prepop: boolean) => {
      setIsPrepopulated(prepop);
      if (prepop && patients.length > 0) {
        handleSelectPatient(patients[0]);
      } else if (!prepop) {
        setPatientName("");
        setAge("");
        setSex("");
        setUhid("");
        setContactNumber("");
        setUnit("");
        setLocation("");
      }
    },
    [patients, handleSelectPatient]
  );

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleReschedule = useCallback(
    (caseId: string, newDate: string) => {
      rescheduleCase(caseId, newDate, "Rescheduled from Booking Clinic Queue");
    },
    [rescheduleCase]
  );

  return {
    patients,
    viewMode,
    setViewMode,
    filterQuery,
    setFilterQuery,
    selectedCategory,
    setSelectedCategory,
    isPrepopulated,
    patientName,
    setPatientName,
    age,
    setAge,
    sex,
    setSex,
    uhid,
    setUhid,
    contactNumber,
    setContactNumber,
    location,
    unit,
    scheduledDate,
    setScheduledDate,
    displayRecords,
    handleSelectPatient,
    handleSelectCaseFromQueue,
    handleNewDatingForm,
    handleModeChange,
    handlePrint,
    handleReschedule,
  };
}
