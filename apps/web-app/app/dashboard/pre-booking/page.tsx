"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useEndoflowStore } from "../useEndoflowStore";
import { ProcedureCategory } from "./preBookingTypes";
import { PreBookingPatientBar } from "./PreBookingPatientBar";
import { PreBookingSheetRenderer } from "./PreBookingSheetRenderer";

function getAdvanceDate(days = 18): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

export default function PreBookingPage() {
  const patients = useEndoflowStore((s) => s.patients);
  const [selectedCategory, setSelectedCategory] = useState<ProcedureCategory>("sclerotherapy");
  const [isPrepopulated, setIsPrepopulated] = useState(false);

  // Demographics state
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [uhid, setUhid] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("");
  const [scheduledDate, setScheduledDate] = useState(() => getAdvanceDate(18));

  const handleSelectPatient = useCallback((p: any) => {
    setPatientName(p.name || "");
    setAge(p.age ? String(p.age) : "");
    setSex(p.sex || "");
    setUhid(p.hid || p.scanId || "");
    setContactNumber(p.contactNumber || p.phone || "");
    setUnit(p.unit || "");
  }, []);

  // When switching to Pre-populated mode, autofill first OPD patient if available
  const handleModeChange = useCallback((prepop: boolean) => {
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
  }, [patients, handleSelectPatient]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-2 py-4 font-sans select-none">
      {/* Top Patient Bar & Protocol Selector (Hidden on Print) */}
      <PreBookingPatientBar
        patients={patients}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        patientName={patientName}
        setPatientName={setPatientName}
        age={age}
        setAge={setAge}
        sex={sex}
        setSex={setSex}
        uhid={uhid}
        setUhid={setUhid}
        contactNumber={contactNumber}
        setContactNumber={setContactNumber}
        scheduledDate={scheduledDate}
        setScheduledDate={setScheduledDate}
        isPrepopulated={isPrepopulated}
        setIsPrepopulated={handleModeChange}
        onSelectPatient={handleSelectPatient}
        onPrint={handlePrint}
      />

      {/* Printable A4 Sheets Area - Dispatched via PreBookingSheetRenderer */}
      <div className="print:p-0 print:m-0 space-y-6 print:space-y-0">
        <PreBookingSheetRenderer
          selectedCategory={selectedCategory}
          patientName={patientName}
          age={age}
          sex={sex}
          uhid={uhid}
          contactNumber={contactNumber}
          location={location}
          unit={unit}
          scheduledDate={scheduledDate}
        />
      </div>
    </div>
  );
}
