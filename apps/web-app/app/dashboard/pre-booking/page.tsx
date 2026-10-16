"use client";

import React, { useState, useCallback } from "react";
import { useEndoflowStore } from "../useEndoflowStore";
import { ProcedureCategory } from "./preBookingTypes";
import { PreBookingPatientBar } from "./PreBookingPatientBar";
import { SclerotherapyPage1Sheet } from "./SclerotherapyPage1Sheet";
import { SclerotherapyPage2Sheet } from "./SclerotherapyPage2Sheet";
import { TacePreBookingSheet } from "./TacePreBookingSheet";
import { BaePreBookingSheet } from "./BaePreBookingSheet";
import { BleederPreBookingSheet } from "./BleederPreBookingSheet";
import { GeneralIrPreBookingSheet } from "./GeneralIrPreBookingSheet";

export default function PreBookingPage() {
  const patients = useEndoflowStore((s) => s.patients);
  const [selectedCategory, setSelectedCategory] = useState<ProcedureCategory>("sclerotherapy");
  const [scleroPage, setScleroPage] = useState<"page1" | "page2" | "both">("both");

  // Minimalist Demographics for Blank A4 Pen Slips
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [uhid, setUhid] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");

  const handleSelectPatient = useCallback((p: any) => {
    setPatientName(p.name || "");
    setAge(p.age ? String(p.age) : "");
    setSex(p.sex || "");
    setUhid(p.hid || p.scanId || "");
    setUnit(p.unit || "");
  }, []);

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
        scleroPage={scleroPage}
        setScleroPage={setScleroPage}
        onSelectPatient={handleSelectPatient}
        onPrint={handlePrint}
      />

      {/* Printable A4 Sheets Area */}
      <div className="print:p-0 print:m-0 space-y-6 print:space-y-0">
        {selectedCategory === "sclerotherapy" && (
          <>
            {(scleroPage === "page1" || scleroPage === "both") && (
              <div className="print:break-after-page">
                <SclerotherapyPage1Sheet
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
            )}
            {(scleroPage === "page2" || scleroPage === "both") && (
              <div className="print:break-before-page">
                <SclerotherapyPage2Sheet patientName={patientName} uhid={uhid} />
              </div>
            )}
          </>
        )}

        {selectedCategory === "tace" && (
          <TacePreBookingSheet
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={scheduledDate}
          />
        )}

        {selectedCategory === "bae" && (
          <BaePreBookingSheet
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={scheduledDate}
          />
        )}

        {selectedCategory === "bleeder" && (
          <BleederPreBookingSheet
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={scheduledDate}
          />
        )}

        {selectedCategory === "general" && (
          <GeneralIrPreBookingSheet
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={scheduledDate}
          />
        )}
      </div>
    </div>
  );
}
