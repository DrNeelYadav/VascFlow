'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  X,
  Zap,
  Microscope,
  Calculator,
  CalendarPlus,
  AlertTriangle,
  HeartPulse,
  Syringe,
  FileSpreadsheet,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useClinicalStore } from '@/stores/useClinicalStore';
import { calculateMacd, calculateEgfrCkdEpi2021 } from '@/lib/calculators';
import { cn } from '@/lib/utils';

export const ClinicalFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEgfrModalOpen, setIsEgfrModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const activePatient = useClinicalStore((s) => s.activePatient);
  const addBooking = useClinicalStore((s) => s.addBooking);

  // eGFR Modal Calculator State
  const [calcCr, setCalcCr] = useState<number>(activePatient.serumCreatinine || 1.1);
  const [calcAge, setCalcAge] = useState<number>(activePatient.age || 54);
  const [calcWeight, setCalcWeight] = useState<number>(activePatient.weightKg || 58);
  const [calcIsFemale, setCalcIsFemale] = useState<boolean>(activePatient.gender === 'Female');

  // Emergency Case Modal State
  const [emgName, setEmgName] = useState('');
  const [emgCr, setEmgCr] = useState('');
  const [emgProc, setEmgProc] = useState('Bronchial Artery Embolization (BAE)');
  const [emgIndication, setEmgIndication] = useState('Massive Hemoptysis (>300 mL/24h)');

  const fabRef = useRef<HTMLDivElement>(null);

  // Close speed dial on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Recalculate eGFR and MACD inside modal
  const egfrResult = useMemo(() => {
    return calculateEgfrCkdEpi2021(calcCr, calcAge, calcIsFemale);
  }, [calcCr, calcAge, calcIsFemale]);

  const macdResult = useMemo(() => {
    const res = calculateMacd(calcWeight, calcCr);
    return {
      macdMl: res.macdMl,
      recommendation: res.recommendation
    };
  }, [calcWeight, calcCr]);

  const speedDialItems = [
    {
      id: 'stat-emergency',
      label: 'Stat Emergency Angiosuite Case',
      icon: Zap,
      bg: 'bg-[#D93025] hover:bg-[#B31412]',
      onClick: () => {
        setIsOpen(false);
        setIsEmergencyModalOpen(true);
      }
    },
    {
      id: 'log-biopsy',
      label: 'Log Biopsy Specimen',
      icon: Microscope,
      bg: 'bg-[#1E8E3E] hover:bg-[#137333]',
      onClick: () => {
        setIsOpen(false);
        window.location.hash = '/biopsies';
      }
    },
    {
      id: 'egfr-macd-calc',
      label: 'Bedside eGFR & MACD Calculator',
      icon: Calculator,
      bg: 'bg-[#1A73E8] hover:bg-[#1557B0]',
      onClick: () => {
        setIsOpen(false);
        setIsEgfrModalOpen(true);
      }
    }
  ];

  const handleCreateEmergencyBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emgName) return;

    addBooking({
      id: `emg-${Date.now()}`,
      patientId: `pt-emg-${Date.now().toString().slice(-4)}`,
      patientName: emgName,
      age: 48,
      gender: 'Male',
      phone: '9829000000',
      crNo: emgCr || `CR-EMG-${Date.now().toString().slice(-4)}`,
      ipdNo: `IPD-EMG-${Date.now().toString().slice(-4)}`,
      bedNo: 'Cath Lab 1 (Emergency Holding)',
      diagnosis: emgIndication,
      procedureCode: '2849-EM01A',
      procedureName: emgProc,
      targetDate: new Date().toISOString().split('T')[0],
      slotTime: 'IMMEDIATE (Stat Emergency)',
      isEmergency: true,
      d1CallCompleted: true,
      status: 'In-Lab',
      hardwareIndented: '5F Radiofocus Sheath, 5F Cobra Catheter, 2.7F Microcatheter, Microcoils',
      vendorContact: 'SMS Emergency On-Call Inventory',
      notes: 'Emergency hemodynamic stabilization initiated. Blood cross-match dispatched.'
    });

    setEmgName('');
    setEmgCr('');
    setIsEmergencyModalOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay when speed dial is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs no-print"
          />
        )}
      </AnimatePresence>

      {/* Floating Action Button Container */}
      <div
        ref={fabRef}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 no-print clinical-fab select-none"
      >
        {/* Speed-Dial Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.04, staggerDirection: -1 }
                },
                closed: {
                  transition: { staggerChildren: 0.03, staggerDirection: 1 }
                }
              }}
              className="flex flex-col items-end gap-2.5 pb-1"
            >
              {speedDialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      open: { opacity: 1, y: 0, scale: 1 },
                      closed: { opacity: 0, y: 10, scale: 0.9 }
                    }}
                    transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                    className="flex items-center gap-2.5"
                  >
                    {/* Tooltip Label Pill */}
                    <span className="bg-[#FFFFFF] border border-[#DADCE0] px-3 py-1 rounded-full text-xs font-medium text-[#202124] shadow-sm select-none">
                      {item.label}
                    </span>

                    {/* Circular Action Button */}
                    <button
                      onClick={item.onClick}
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-transform hover:scale-105 active:scale-95',
                        item.bg
                      )}
                      title={item.label}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Master Google Material Floating Action Button */}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors border',
            isOpen
              ? 'bg-[#202124] text-white border-[#202124]'
              : 'bg-[#FFFFFF] text-[#1A73E8] border-[#DADCE0] hover:bg-[#F8F9FA]'
          )}
          title={isOpen ? 'Close Quick Actions' : 'Clinical Speed-Dial'}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <svg className="w-7 h-7" viewBox="0 0 36 36">
                <path fill="#4285F4" d="M16 16v14h4V16h10v-4H20V2h-4v10H6v4h10z" />
                <path fill="#34A853" d="M30 16H20l-4-4h14v4z" />
                <path fill="#FBBC05" d="M6 16h10l4 4H6v-4z" />
                <path fill="#EA4335" d="M20 16V2h-4v14h4z" />
              </svg>
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Modal 1: Quick eGFR & MACD Calculator */}
      {isEgfrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg max-w-md w-full p-5 space-y-4 shadow-xl text-[#202124] animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#1A73E8]" />
                <h3 className="text-sm font-heading font-medium text-[#202124]">CKD-EPI 2021 eGFR & MACD Suite</h3>
              </div>
              <button
                onClick={() => setIsEgfrModalOpen(false)}
                className="text-[#5F6368] hover:text-[#202124] text-xs p-1 rounded-full hover:bg-[#F1F3F4]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Serum Creatinine (mg/dL)</label>
                  <input
                    type="number"
                    step="0.05"
                    value={calcCr}
                    onChange={(e) => setCalcCr(parseFloat(e.target.value) || 0.1)}
                    className="w-full bg-[#FFFFFF] border border-[#DADCE0] rounded-md p-2 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
                  />
                </div>
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Age (Years)</label>
                  <input
                    type="number"
                    value={calcAge}
                    onChange={(e) => setCalcAge(parseInt(e.target.value) || 1)}
                    className="w-full bg-[#FFFFFF] border border-[#DADCE0] rounded-md p-2 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Patient Weight (kg)</label>
                  <input
                    type="number"
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(parseFloat(e.target.value) || 1)}
                    className="w-full bg-[#FFFFFF] border border-[#DADCE0] rounded-md p-2 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
                  />
                </div>
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Biological Sex</label>
                  <div className="flex items-center gap-1 mt-0.5">
                    <button
                      type="button"
                      onClick={() => setCalcIsFemale(false)}
                      className={cn(
                        'flex-1 py-1.5 rounded-md font-medium text-xs transition',
                        !calcIsFemale
                          ? 'bg-[#1A73E8] text-white'
                          : 'bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124]'
                      )}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcIsFemale(true)}
                      className={cn(
                        'flex-1 py-1.5 rounded-md font-medium text-xs transition',
                        calcIsFemale
                          ? 'bg-[#1A73E8] text-white'
                          : 'bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124]'
                      )}
                    >
                      Female
                    </button>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0] text-center">
                  <div className="text-[11px] text-[#5F6368]">CKD-EPI 2021 eGFR</div>
                  <div className="text-2xl font-black text-[#1A73E8] font-mono mt-1">
                    {egfrResult}
                  </div>
                  <div className="text-[10px] text-[#5F6368]">mL/min/1.73m²</div>
                </div>

                <div className="bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0] text-center">
                  <div className="text-[11px] text-[#5F6368]">Cigarroa MACD Limit</div>
                  <div className="text-2xl font-black text-[#1E8E3E] font-mono mt-1">
                    {macdResult.macdMl}
                  </div>
                  <div className="text-[10px] text-[#5F6368]">mL Maximum Safe Dose</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#E6F4EA] border border-[#1E8E3E]/30 text-[11px] text-[#137333]">
                <div className="font-semibold mb-0.5">Nephrotoxicity Protocol:</div>
                {macdResult.recommendation}
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#DADCE0]">
              <button
                onClick={() => setIsEgfrModalOpen(false)}
                className="px-4 py-1.5 rounded-full bg-[#F1F3F4] hover:bg-[#E8EAED] text-[#202124] text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Stat Emergency Booking */}
      {isEmergencyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <form
            onSubmit={handleCreateEmergencyBooking}
            className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg max-w-md w-full p-5 space-y-4 shadow-xl text-[#202124] animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#D93025]" />
                <h3 className="text-sm font-heading font-medium text-[#D93025]">Stat Emergency Angiosuite Activation</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEmergencyModalOpen(false)}
                className="text-[#5F6368] hover:text-[#202124] text-xs p-1 rounded-full hover:bg-[#F1F3F4]"
              >
                ✕
              </button>
            </div>

            <div className="p-3 bg-[#FCE8E6] border border-[#D93025]/30 rounded-lg text-[#C5221F] text-xs">
              <div className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>Cath Lab Priority Override: Active</span>
              </div>
              <p className="mt-1 text-[11px]">
                Stat cases override scheduled elective slots and dispatch notifications to on-call fellows and nursing staff.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#5F6368] font-medium mb-1">Patient Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Emergency Patient Name"
                  value={emgName}
                  onChange={(e) => setEmgName(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#DADCE0] rounded-md p-2 text-[#202124] outline-none focus:border-[#D93025]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">CR Number (Optional)</label>
                  <input
                    type="text"
                    placeholder="CR-EMG-XXXX"
                    value={emgCr}
                    onChange={(e) => setEmgCr(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DADCE0] rounded-md p-2 text-[#202124] font-mono outline-none focus:border-[#D93025]"
                  />
                </div>
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Procedure</label>
                  <select
                    value={emgProc}
                    onChange={(e) => setEmgProc(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DADCE0] rounded-md p-2 text-[#202124] outline-none focus:border-[#D93025]"
                  >
                    <option value="Bronchial Artery Embolization (BAE)">Bronchial Embolization (BAE)</option>
                    <option value="Upper GI Bleed Embolization">Upper GI Bleed Embolization</option>
                    <option value="Trauma Pelvic Embolization">Trauma Pelvic Embolization</option>
                    <option value="Emergency Thrombectomy">Emergency Thrombectomy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#5F6368] font-medium mb-1">Clinical Indication / Hemodynamics</label>
                <input
                  type="text"
                  value={emgIndication}
                  onChange={(e) => setEmgIndication(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#DADCE0] rounded-md p-2 text-[#202124] outline-none focus:border-[#D93025]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-[#DADCE0]">
              <button
                type="button"
                onClick={() => setIsEmergencyModalOpen(false)}
                className="px-4 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#5F6368] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-full bg-[#D93025] hover:bg-[#B31412] text-white text-xs font-medium shadow-xs"
              >
                Dispatch Stat Case
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ClinicalFAB;
