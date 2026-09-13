'use client';

import React, { useState } from 'react';
import { useClinicalStore } from '../../stores/useClinicalStore';
import { calculateMacd } from '../../lib/calculators';
import { ShieldAlert, User, AlertTriangle, ArrowRightLeft, FileText, Check } from 'lucide-react';
import { PatientSafetyProfile } from '../../types/clinical';

export const PatientSafetyStrip: React.FC = () => {
  const patient = useClinicalStore((s) => s.activePatient);
  const bookings = useClinicalStore((s) => s.bookings);
  const setActivePatient = useClinicalStore((s) => s.setActivePatient);
  const openDossier = useClinicalStore((s) => s.openDossier);

  const [isSwitchModalOpen, setIsSwitchModalOpen] = useState(false);

  const macdCalc = calculateMacd(patient.weightKg, patient.serumCreatinine);

  const handleSelectPatient = (p: PatientSafetyProfile) => {
    setActivePatient(p);
    setIsSwitchModalOpen(false);
  };

  return (
    <>
      <div className="w-full bg-[#FFFFFF] border-b border-[#DADCE0] px-4 py-1.5 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs">
          {/* Patient Core Identifiers */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 font-bold text-[#202124]">
              <User className="w-3.5 h-3.5 text-[#1A73E8]" />
              <span>{patient.name}</span>
              <span className="text-[#5F6368] font-normal text-[11px]">
                ({patient.age}Y/{patient.gender.charAt(0)})
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#3C4043]">
              <span className="bg-[#F8F9FA] px-2 py-0.5 rounded-full border border-[#DADCE0]">
                CR: <b className="text-[#202124]">{patient.crNo}</b>
              </span>
              <span className="bg-[#F8F9FA] px-2 py-0.5 rounded-full border border-[#DADCE0]">
                IPD: <b className="text-[#202124]">{patient.ipdNo}</b>
              </span>
              <span className="bg-[#F8F9FA] px-2 py-0.5 rounded-full border border-[#DADCE0] hidden md:inline">
                Bed: <b className="text-[#202124]">{patient.bedNo}</b>
              </span>
              <span className="bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded-full border border-[#DADCE0] font-medium">
                {patient.scheme.replace('_', ' ')}
              </span>
            </div>
          </div>

          {/* Clinical Guardrail Indicator: Weight, Cr, & MACD Ceiling */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 font-mono text-[11px] bg-[#F8F9FA] px-2.5 py-1 rounded-full border border-[#DADCE0]">
              <span className="text-[#5F6368]">Wt: <b className="text-[#202124]">{patient.weightKg}kg</b></span>
              <span className="text-[#DADCE0]">•</span>
              <span className="text-[#5F6368]">Cr: <b className="text-[#202124]">{patient.serumCreatinine} mg/dL</b></span>
              <span className="text-[#DADCE0]">•</span>
              <div className="flex items-center gap-1 text-[#137333] font-semibold" title="Cigarroa Maximum Allowable Contrast Dose (5 * Wt / Cr)">
                <ShieldAlert className="w-3.5 h-3.5 text-[#1E8E3E]" />
                <span>MACD Limit: {macdCalc.macdMl} mL</span>
              </div>
            </div>

            {/* Switch Active Patient Button */}
            <button
              onClick={() => setIsSwitchModalOpen(true)}
              className="flex items-center gap-1 text-[11px] font-medium text-[#1A73E8] hover:text-[#1765CC] bg-[#E8F0FE] hover:bg-[#D2E3FC] px-2.5 py-1 rounded-full transition border border-transparent"
              title="Switch Active Target Patient"
            >
              <ArrowRightLeft className="w-3 h-3" />
              <span>Switch</span>
            </button>

            {/* Open Dossier Button */}
            <button
              onClick={() => openDossier()}
              className="flex items-center gap-1 text-[11px] font-medium text-[#3C4043] hover:text-[#202124] bg-[#F1F3F4] hover:bg-[#E8EAED] px-2.5 py-1 rounded-full transition border border-[#DADCE0]"
              title="Open Clinical Dossier & Lab Trends"
            >
              <FileText className="w-3 h-3 text-[#5F6368]" />
              <span className="hidden sm:inline">Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Patient Switcher Modal */}
      {isSwitchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg max-w-lg w-full p-4 shadow-xl text-[#202124] animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#1A73E8]" />
                <h3 className="font-heading font-medium text-base text-[#202124]">
                  Select Active Clinical Subject
                </h3>
              </div>
              <button
                onClick={() => setIsSwitchModalOpen(false)}
                className="text-[#5F6368] hover:text-[#202124] text-sm p-1 rounded-full hover:bg-[#F1F3F4]"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#5F6368] mb-3">
              Switching the active patient automatically recalculates Cigarroa MACD contrast thresholds, pre-populates the Discharge Studio, and updates live pre-op fasting status.
            </p>

            <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1">
              {bookings.map((b) => {
                const isSelected = b.patientId === patient.id || b.crNo === patient.crNo;
                return (
                  <div
                    key={b.id}
                    onClick={() => {
                      handleSelectPatient({
                        id: b.patientId,
                        crNo: b.crNo,
                        ipdNo: b.ipdNo,
                        name: b.patientName,
                        age: b.age ?? 54,
                        gender: (b.gender === 'Female' ? 'Female' : 'Male'),
                        bedNo: b.bedNo,
                        weightKg: 62,
                        serumCreatinine: 1.2,
                        totalBilirubin: 1.1,
                        serumAlbumin: 3.5,
                        inr: 1.1,
                        scheme: 'MAAY_CHIRANJEEVI',
                        schemeTid: 'TID-2026-CHIR-90812',
                        diagnosis: b.diagnosis,
                        procedureName: b.procedureName,
                        procedureCode: b.procedureCode,
                        phone: b.phone
                      });
                    }}
                    className={`p-2.5 rounded-lg border cursor-pointer transition flex items-center justify-between text-xs ${
                      isSelected
                        ? 'bg-[#E8F0FE] border-[#1A73E8] text-[#1A73E8]'
                        : 'bg-[#FFFFFF] border-[#DADCE0] hover:bg-[#F8F9FA] text-[#202124]'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-sm flex items-center gap-2">
                        <span>{b.patientName}</span>
                        <span className="text-[11px] text-[#5F6368]">
                          ({b.age ?? 50}Y/{(b.gender ?? 'Male').charAt(0)})
                        </span>
                      </div>
                      <div className="text-[11px] text-[#5F6368] font-mono mt-0.5">
                        CR: {b.crNo} • IPD: {b.ipdNo} • {b.bedNo}
                      </div>
                      <div className="text-[11px] text-[#202124] mt-0.5 line-clamp-1">
                        {b.procedureName}
                      </div>
                    </div>

                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#1A73E8]">
                        <Check className="w-3.5 h-3.5" />
                        Active
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-[#DADCE0] flex justify-end">
              <button
                onClick={() => setIsSwitchModalOpen(false)}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientSafetyStrip;
