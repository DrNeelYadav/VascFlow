import React, { useState } from 'react';
import { useClinicalStore } from '../stores/useClinicalStore';
import { isHolidayOrSunday } from '../data/holidays2026';
import { EXTENSIVE_IR_PROCEDURES } from '../data/procedures';
import { getTomorrowDateString } from '../lib/utils';
import { BookingSlot } from '../types/clinical';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Download,
  AlertTriangle,
  PhoneCall,
  CheckCircle2,
  Send,
  User,
  ShieldAlert,
  Search,
  RotateCw,
  FileText,
  Filter,
  X
} from 'lucide-react';
import { PreBookingWorkupModal, PreBookingPatientInfo } from '../components/PreBookingWorkupModal';
import { cn } from '../lib/utils';

export type ModalityCategory = 'all' | 'arterial' | 'venous' | 'biliary' | 'biopsy' | 'other';

export interface CategoryTheme {
  key: ModalityCategory;
  label: string;
  badgeBg: string;
  badgeText: string;
  borderClass: string;
  dotColor: string;
  cardBorder: string;
}

export function getProcedureCategoryTheme(procName: string = '', procCode: string = ''): CategoryTheme {
  const text = `${procName} ${procCode}`.toLowerCase();
  if (
    text.includes('tace') ||
    text.includes('bae') ||
    text.includes('arter') ||
    text.includes('aneurysm') ||
    text.includes('bleed') ||
    text.includes('evar') ||
    text.includes('pad') ||
    text.includes('sfa') ||
    text.includes('emboliz') ||
    text.includes('dsa') ||
    text.includes('angioplasty') ||
    text.includes('carotid') ||
    text.includes('coiling')
  ) {
    return {
      key: 'arterial',
      label: 'Arterial / DSA',
      badgeBg: 'bg-[#FCE8E6]',
      badgeText: 'text-[#C5221F]',
      borderClass: 'border-[#F8D7DA]',
      dotColor: '#C5221F',
      cardBorder: 'border-l-4 border-l-[#C5221F]'
    };
  }
  if (
    text.includes('ven') ||
    text.includes('dips') ||
    text.includes('tips') ||
    text.includes('varicose') ||
    text.includes('varicocele') ||
    text.includes('dvt') ||
    text.includes('bcs') ||
    text.includes('thrombectomy') ||
    text.includes('ivc') ||
    text.includes('permacath') ||
    text.includes('fistul') ||
    text.includes('dialysis')
  ) {
    return {
      key: 'venous',
      label: 'Venous & Access',
      badgeBg: 'bg-[#E8F0FE]',
      badgeText: 'text-[#1A73E8]',
      borderClass: 'border-[#D2E3FC]',
      dotColor: '#1A73E8',
      cardBorder: 'border-l-4 border-l-[#1A73E8]'
    };
  }
  if (
    text.includes('ptbd') ||
    text.includes('biliary') ||
    text.includes('cholecyst') ||
    text.includes('drain') ||
    text.includes('pcn') ||
    text.includes('nephrostomy') ||
    text.includes('abscess') ||
    text.includes('hydatid')
  ) {
    return {
      key: 'biliary',
      label: 'Biliary & Drainage',
      badgeBg: 'bg-[#FEF7E0]',
      badgeText: 'text-[#B06000]',
      borderClass: 'border-[#FEEFC3]',
      dotColor: '#B06000',
      cardBorder: 'border-l-4 border-l-[#B06000]'
    };
  }
  if (
    text.includes('biopsy') ||
    text.includes('rose') ||
    text.includes('fnac') ||
    text.includes('core') ||
    text.includes('ablation') ||
    text.includes('rfa') ||
    text.includes('mwa') ||
    text.includes('cryo')
  ) {
    return {
      key: 'biopsy',
      label: 'Biopsy & Oncology',
      badgeBg: 'bg-[#E6F4EA]',
      badgeText: 'text-[#137333]',
      borderClass: 'border-[#CEEAD6]',
      dotColor: '#137333',
      cardBorder: 'border-l-4 border-l-[#137333]'
    };
  }
  return {
    key: 'other',
    label: 'IR Interventions',
    badgeBg: 'bg-[#F1F3F4]',
    badgeText: 'text-[#5F6368]',
    borderClass: 'border-[#DADCE0]',
    dotColor: '#5F6368',
    cardBorder: 'border-l-4 border-l-[#7B1FA2]'
  };
}

export const OtBookingPage: React.FC = () => {
  const bookings = useClinicalStore((s) => s.bookings);
  const addBooking = useClinicalStore((s) => s.addBooking);
  const toggleD1Call = useClinicalStore((s) => s.toggleD1Call);
  const toggleCompleted = useClinicalStore((s) => s.toggleCompletedStatus);
  const reschedule = useClinicalStore((s) => s.rescheduleBooking);

  const [workupModalOpen, setWorkupModalOpen] = useState(false);
  const [selectedWorkupPatient, setSelectedWorkupPatient] = useState<PreBookingPatientInfo>({
    patientName: 'PATIENT NAME',
    patientAge: 45,
    patientGender: 'Male',
    crNo: 'CR-2026-XXXX',
    protocolId: 'bcs',
    procedureName: 'Budd-Chiari Syndrome (BCS) DIPS/TIPS',
    diagnosis: 'Budd-Chiari Syndrome with Refractory Ascites'
  });

  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(10); // November 2026
  const [activeSubTab, setActiveSubTab] = useState<'queue' | 'd1calls' | 'waitlist'>('queue');
  const [selectedModalityFilter, setSelectedModalityFilter] = useState<ModalityCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [holidayConflict, setHolidayConflict] = useState<{
    date: string;
    reason: string;
    allowEmergencyOverride: boolean;
  } | null>(null);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDateForBooking, setSelectedDateForBooking] = useState('');
  const [isEmergencyOverride, setIsEmergencyOverride] = useState(false);

  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState(50);
  const [patientGender, setPatientGender] = useState('Male');
  const [patientPhone, setPatientPhone] = useState('9829012345');
  const [crNo, setCrNo] = useState('');
  const [ipdNo, setIpdNo] = useState('');
  const [bedNo, setBedNo] = useState('Daycare Bed 04');
  const [selectedProcId, setSelectedProcId] = useState('tace');
  const [procSearchTerm, setProcSearchTerm] = useState('');
  const [procCategoryFilter, setProcCategoryFilter] = useState('All');
  const [slotTime, setSlotTime] = useState('09:00 AM (First Case)');
  const [diagnosis, setDiagnosis] = useState('');
  const [notes, setNotes] = useState('');

  const [reschedulingSlot, setReschedulingSlot] = useState<BookingSlot | null>(null);
  const [newRescheduleDate, setNewRescheduleDate] = useState('');
  const [newRescheduleSlot, setNewRescheduleSlot] = useState('09:00 AM');

  const monthNames = [
    'January 2026', 'February 2026', 'March 2026', 'April 2026',
    'May 2026', 'June 2026', 'July 2026', 'August 2026',
    'September 2026', 'October 2026', 'November 2026', 'December 2026'
  ];

  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleCellClick = (dateStr: string) => {
    const check = isHolidayOrSunday(dateStr);
    if (check.isBlocked) {
      setHolidayConflict({
        date: dateStr,
        reason: check.reason || 'Hospital Non-Working Day',
        allowEmergencyOverride: true
      });
    } else {
      setSelectedDateForBooking(dateStr);
      setIsEmergencyOverride(false);
      setIsBookingModalOpen(true);
    }
  };

  const handleOpenWorkup = (slot: BookingSlot) => {
    let protoId = 'bcs';
    const pName = (slot.procedureName || '').toLowerCase();
    if (pName.includes('tace')) protoId = 'tace';
    else if (pName.includes('bae') || pName.includes('bronchial')) protoId = 'bae';
    else if (pName.includes('ptbd') || pName.includes('biliary')) protoId = 'ptbd';
    else if (pName.includes('pcn') || pName.includes('nephrostomy')) protoId = 'pcn';
    else if (pName.includes('varicose') || pName.includes('venaseal')) protoId = 'varicose';
    else if (pName.includes('biopsy') || pName.includes('fnac')) protoId = 'biopsy';
    else if (pName.includes('pae') || pName.includes('prostate')) protoId = 'pae';
    else if (pName.includes('uae') || pName.includes('fibroid')) protoId = 'uae';

    setSelectedWorkupPatient({
      patientName: slot.patientName,
      patientAge: slot.age || 48,
      patientGender: slot.gender || 'Male',
      crNo: slot.crNo,
      ipdNo: slot.ipdNo,
      bedNo: slot.bedNo,
      patientPhone: slot.phone,
      targetDate: slot.targetDate,
      protocolId: protoId,
      procedureName: slot.procedureName,
      diagnosis: slot.diagnosis
    });
    setWorkupModalOpen(true);
  };

  const handleOpenNewWorkup = () => {
    setSelectedWorkupPatient({
      patientName: 'PATIENT NAME',
      patientAge: 48,
      patientGender: 'Male',
      crNo: 'CR-2026-XXXX',
      ipdNo: 'IPD-8821',
      bedNo: 'Daycare Bed 04',
      patientPhone: '9829012345',
      targetDate: new Date().toISOString().slice(0, 10),
      protocolId: 'bcs',
      procedureName: 'Budd-Chiari Syndrome (BCS) DIPS/TIPS',
      diagnosis: 'Budd-Chiari Syndrome with Refractory Ascites'
    });
    setWorkupModalOpen(true);
  };

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedProc = EXTENSIVE_IR_PROCEDURES.find((p) => p.id === selectedProcId);
    const procName = matchedProc ? matchedProc.name : 'Angiographic IR Procedure';
    const procCode = matchedProc ? matchedProc.code : 'IR-PROC-001';

    const newSlot: BookingSlot = {
      id: `bk-${Date.now()}`,
      patientId: `pt-${Date.now()}`,
      patientName,
      age: patientAge,
      gender: patientGender,
      phone: patientPhone,
      crNo: crNo || `CR-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      ipdNo: ipdNo || `IPD-${Math.floor(10000 + Math.random() * 90000)}`,
      bedNo,
      diagnosis: diagnosis || `${procName} evaluation and management`,
      procedureCode: procCode,
      procedureName: procName,
      targetDate: selectedDateForBooking,
      slotTime,
      isEmergency: isEmergencyOverride,
      d1CallCompleted: false,
      status: 'Scheduled',
      notes
    };

    addBooking(newSlot);
    setIsBookingModalOpen(false);
    setPatientName('');
    setCrNo('');
    setIpdNo('');
    setDiagnosis('');
    setNotes('');
  };

  const tomorrowStr = getTomorrowDateString();

  const handleSendWhatsApp = (slot: BookingSlot) => {
    const text = encodeURIComponent(
      `SMS MEDICAL COLLEGE & HOSPITALS, JAIPUR\n` +
      `DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY\n` +
      `---------------------------------------------------\n` +
      `PRE-PROCEDURE D-1 FASTING & ADMISSION ADVISORY\n\n` +
      `Dear ${slot.patientName} (CR: ${slot.crNo}),\n` +
      `Your elective Interventional Radiology procedure:\n` +
      `"${slot.procedureName}"\n` +
      `is confirmed for tomorrow, ${slot.targetDate} at ${slot.slotTime}.\n\n` +
      `MANDATORY PRE-OP INSTRUCTIONS:\n` +
      `1. Fasting (NPO): Do NOT eat solid food after 12:00 Midnight. Clear water is permitted until 06:00 AM.\n` +
      `2. Morning Medications: Take essential blood pressure medicines with a small sip of water. Hold morning insulin and diabetes tablets until after the procedure.\n` +
      `3. Blood Thinners: If you are taking blood thinners (Aspirin/Ecosprin, Clopidogrel, Warfarin, Rivaroxaban), ensure you followed the stop instructions given during OPD.\n` +
      `4. Attendant: Bring one adult attendant and all previous CT/MRI films and blood reports (CBC, Serum Creatinine, PT/INR, Viral Markers).\n` +
      `5. Reporting Location: Report at 08:00 AM sharp at:\n` +
      `   Cath Lab Complex, Ground Floor, Bangur Institute / SMS Hospital, Jaipur.\n\n` +
      `For any emergency inquiry, contact Department IR Helpline: +91-141-2560291.`
    );
    const url = `https://api.whatsapp.com/send?phone=${slot.phone ? slot.phone.replace(/[^0-9]/g, '') : ''}&text=${text}`;
    window.open(url, '_blank');
  };

  const handleExportCsv = () => {
    const headers = ['ID', 'CR_No', 'IPD_No', 'Patient_Name', 'Age', 'Gender', 'Phone', 'Procedure_Name', 'Target_Date', 'Slot_Time', 'Status', 'D1_Call'];
    const rows = bookings.map((b) => [
      b.id,
      b.crNo,
      b.ipdNo,
      `"${b.patientName}"`,
      b.age || '',
      b.gender || '',
      b.phone || '',
      `"${b.procedureName}"`,
      b.targetDate,
      `"${b.slotTime}"`,
      b.status,
      b.d1CallCompleted ? 'YES' : 'NO'
    ]);
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sms_ir_ot_schedule_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const scheduledList = bookings.filter((b) => !b.isUnscheduled && b.targetDate);
  const d1CallsList = bookings.filter((b) => b.targetDate === tomorrowStr);
  const waitlist = bookings.filter((b) => b.isUnscheduled || !b.targetDate);

  const displayedList =
    activeSubTab === 'queue'
      ? scheduledList
      : activeSubTab === 'd1calls'
      ? d1CallsList
      : waitlist;

  const filteredDockList = displayedList.filter((b) => {
    const matchesSearch =
      !searchQuery ||
      b.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.crNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.procedureName.toLowerCase().includes(searchQuery.toLowerCase());

    const categoryTheme = getProcedureCategoryTheme(b.procedureName, b.procedureCode);
    const matchesCategory =
      selectedModalityFilter === 'all' || categoryTheme.key === selectedModalityFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4 pb-12">
      {/* Top Header Card in Google Material 3 Light Mode */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#202124] flex items-center gap-2">
              <span>Angio OT Booking & Rajasthan 2026 Gazetted Holiday Calendar</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#E8F0FE] text-[#1A73E8]">
                {bookings.length} Total Bookings
              </span>
            </h1>
            <p className="text-xs text-[#5F6368]">
              Rajasthan Gazetted Holiday guardrails • D-1 Fasting Advisory • Modality color harmonization with Procedures & Protocols
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedDateForBooking(new Date().toISOString().slice(0, 10));
              setIsEmergencyOverride(false);
              setIsBookingModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1765CC] text-white font-medium text-xs transition shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Book New Case</span>
          </button>
          <button
            onClick={handleOpenNewWorkup}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#202124] text-xs font-medium transition shadow-xs"
            title="Open Pre-Booking Clinical Workup & Dossier"
          >
            <FileText className="w-3.5 h-3.5 text-[#1A73E8]" />
            <span>New Workup Sheet</span>
          </button>
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#5F6368] hover:text-[#202124] text-xs font-medium transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left Pane: Interactive 12-Month Calendar Matrix (7 cols) */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-4 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="p-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#5F6368] transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm text-[#202124] font-mono">
                {monthNames[currentMonth]}
              </span>
              <button
                onClick={nextMonth}
                className="p-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#5F6368] transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FCE8E6] border border-[#F8D7DA]"></span>
                <span className="text-[#5F6368]">Gazetted Holiday</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEF7E0] border border-[#FEEFC3]"></span>
                <span className="text-[#5F6368]">Sunday</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8F0FE] border border-[#D2E3FC]"></span>
                <span className="text-[#5F6368]">Active Case</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center font-bold text-[11px] text-[#5F6368] font-mono">
            <div className="text-[#B06000]">Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`blank-${i}`} className="min-h-[76px] rounded-xl bg-[#F8F9FA] border border-[#DADCE0]/50" />
            ))}

            {Array.from({ length: daysInCurrentMonth }).map((_, i) => {
              const dayNum = i + 1;
              const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
              const check = isHolidayOrSunday(dateStr);
              const dayBookings = bookings.filter((b) => b.targetDate === dateStr);

              return (
                <button
                  key={dateStr}
                  onClick={() => handleCellClick(dateStr)}
                  className={`min-h-[76px] p-2 rounded-xl border text-left flex flex-col justify-between transition group relative ${
                    check.isBlocked
                      ? check.reason?.toLowerCase().includes('sunday')
                        ? 'bg-[#FEF7E0]/40 border-[#FEEFC3] text-[#B06000] hover:bg-[#FEF7E0]'
                        : 'bg-[#FCE8E6]/40 border-[#F8D7DA] text-[#C5221F] hover:bg-[#FCE8E6]'
                      : dayBookings.length > 0
                      ? 'bg-[#FFFFFF] border-[#1A73E8] shadow-xs'
                      : 'bg-[#FFFFFF] border-[#DADCE0] hover:bg-[#F8F9FA]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs font-bold ${
                        check.isBlocked
                          ? check.reason?.toLowerCase().includes('sunday')
                            ? 'text-[#B06000]'
                            : 'text-[#C5221F]'
                          : dayBookings.length > 0
                          ? 'text-[#1A73E8]'
                          : 'text-[#202124]'
                      }`}
                    >
                      {dayNum}
                    </span>

                    {dayBookings.length > 0 && (
                      <span className="w-4 h-4 rounded-full bg-[#1A73E8] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-xs">
                        {dayBookings.length}
                      </span>
                    )}
                  </div>

                  {check.isBlocked ? (
                    <div className="text-[10px] line-clamp-2 leading-tight font-medium mt-1">
                      {check.reason}
                    </div>
                  ) : dayBookings.length > 0 ? (
                    <div className="space-y-0.5 mt-1 w-full overflow-hidden">
                      {dayBookings.slice(0, 2).map((slot) => {
                        const theme = getProcedureCategoryTheme(slot.procedureName, slot.procedureCode);
                        return (
                          <div
                            key={slot.id}
                            className={`text-[9px] px-1 py-0.5 rounded truncate font-medium ${theme.badgeBg} ${theme.badgeText}`}
                            title={`${slot.patientName}: ${slot.procedureName}`}
                          >
                            {slot.patientName.split(' ')[0]}
                          </div>
                        );
                      })}
                      {dayBookings.length > 2 && (
                        <div className="text-[9px] text-[#5F6368] font-medium pl-0.5">
                          +{dayBookings.length - 2} more
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-[10px] text-[#80868B] group-hover:text-[#1A73E8] font-medium transition">
                      + Add
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Pane: Schedule Queue & Case Cards Harmonized with Procedures/Protocols Colors (5 cols) */}
        <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-4 shadow-xs space-y-3">
          {/* Sub-Tabs: Scheduled Queue, D-1 Calls, Waitlist */}
          <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setActiveSubTab('queue')}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5',
                  activeSubTab === 'queue'
                    ? 'bg-[#1A73E8] text-white shadow-xs'
                    : 'bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED]'
                )}
              >
                <span>Scheduled</span>
                <span className={cn(
                  'px-1.5 py-0.2 rounded-full text-[10px] font-mono',
                  activeSubTab === 'queue' ? 'bg-white/20 text-white' : 'bg-white text-[#5F6368]'
                )}>
                  {scheduledList.length}
                </span>
              </button>

              <button
                onClick={() => setActiveSubTab('d1calls')}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5',
                  activeSubTab === 'd1calls'
                    ? 'bg-[#B06000] text-white shadow-xs'
                    : 'bg-[#FEF7E0] text-[#B06000] hover:bg-[#FEEFC3]'
                )}
              >
                <PhoneCall className="w-3 h-3" />
                <span>D-1 Fasting</span>
                <span className={cn(
                  'px-1.5 py-0.2 rounded-full text-[10px] font-mono',
                  activeSubTab === 'd1calls' ? 'bg-white/20 text-white' : 'bg-white text-[#B06000]'
                )}>
                  {d1CallsList.length}
                </span>
              </button>

              <button
                onClick={() => setActiveSubTab('waitlist')}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5',
                  activeSubTab === 'waitlist'
                    ? 'bg-[#5F6368] text-white shadow-xs'
                    : 'bg-[#F1F3F4] text-[#5F6368] hover:bg-[#E8EAED]'
                )}
              >
                <span>Waitlist</span>
                <span className={cn(
                  'px-1.5 py-0.2 rounded-full text-[10px] font-mono',
                  activeSubTab === 'waitlist' ? 'bg-white/20 text-white' : 'bg-white text-[#5F6368]'
                )}>
                  {waitlist.length}
                </span>
              </button>
            </div>
          </div>

          {/* Procedure Modality Filter Pills - Directly Combined with Procedures, Discharge & Protocols */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[11px] text-[#5F6368]">
              <span className="flex items-center gap-1 font-medium">
                <Filter className="w-3 h-3 text-[#1A73E8]" />
                Filter by Procedure Domain:
              </span>
              <span className="font-mono text-[10px]">{filteredDockList.length} cases</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              <button
                onClick={() => setSelectedModalityFilter('all')}
                className={cn(
                  'px-2.5 py-1 rounded-full text-[11px] font-medium transition whitespace-nowrap',
                  selectedModalityFilter === 'all'
                    ? 'bg-[#202124] text-white shadow-xs'
                    : 'bg-[#F1F3F4] text-[#5F6368] hover:bg-[#E8EAED]'
                )}
              >
                All
              </button>

              <button
                onClick={() => setSelectedModalityFilter('arterial')}
                className={cn(
                  'px-2.5 py-1 rounded-full text-[11px] font-medium transition whitespace-nowrap flex items-center gap-1',
                  selectedModalityFilter === 'arterial'
                    ? 'bg-[#C5221F] text-white shadow-xs'
                    : 'bg-[#FCE8E6] text-[#C5221F] border border-[#F8D7DA] hover:bg-[#F8D7DA]'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5221F]" />
                <span>Arterial / DSA</span>
              </button>

              <button
                onClick={() => setSelectedModalityFilter('venous')}
                className={cn(
                  'px-2.5 py-1 rounded-full text-[11px] font-medium transition whitespace-nowrap flex items-center gap-1',
                  selectedModalityFilter === 'venous'
                    ? 'bg-[#1A73E8] text-white shadow-xs'
                    : 'bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC] hover:bg-[#D2E3FC]'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
                <span>Venous & Access</span>
              </button>

              <button
                onClick={() => setSelectedModalityFilter('biliary')}
                className={cn(
                  'px-2.5 py-1 rounded-full text-[11px] font-medium transition whitespace-nowrap flex items-center gap-1',
                  selectedModalityFilter === 'biliary'
                    ? 'bg-[#B06000] text-white shadow-xs'
                    : 'bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3] hover:bg-[#FEEFC3]'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B06000]" />
                <span>Biliary & Drainage</span>
              </button>

              <button
                onClick={() => setSelectedModalityFilter('biopsy')}
                className={cn(
                  'px-2.5 py-1 rounded-full text-[11px] font-medium transition whitespace-nowrap flex items-center gap-1',
                  selectedModalityFilter === 'biopsy'
                    ? 'bg-[#137333] text-white shadow-xs'
                    : 'bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] hover:bg-[#CEEAD6]'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                <span>Biopsy & Oncology</span>
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#5F6368]" />
            <input
              type="text"
              placeholder="Search patient, CR, procedure, diagnosis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] placeholder-[#5F6368] focus:outline-none focus:border-[#1A73E8]"
            />
          </div>

          {/* Filtered Queue List with Modality Color Card Badges */}
          <div className="overflow-y-auto space-y-2.5 max-h-[520px] pr-1">
            {filteredDockList.length === 0 ? (
              <div className="text-center py-12 text-xs text-[#5F6368] bg-[#F8F9FA] rounded-xl border border-dashed border-[#DADCE0]">
                No patients found matching the selected filter criteria.
              </div>
            ) : (
              filteredDockList.map((slot) => {
                const isCallDone = slot.d1CallCompleted;
                const isCompleted = slot.status === 'Completed';
                const theme = getProcedureCategoryTheme(slot.procedureName, slot.procedureCode);

                return (
                  <div
                    key={slot.id}
                    className={`p-3.5 rounded-xl bg-[#FFFFFF] border border-[#DADCE0] space-y-2 text-xs shadow-xs transition hover:border-[#1A73E8] ${theme.cardBorder}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-[#202124]">
                        <User className="w-3.5 h-3.5 text-[#5F6368]" />
                        <span>{slot.patientName}</span>
                        <span className="text-[10px] text-[#5F6368] font-mono">CR: {slot.crNo}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full font-semibold ${theme.badgeBg} ${theme.badgeText} border ${theme.borderClass}`}>
                          {theme.label}
                        </span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F1F3F4] text-[#5F6368]">
                          {slot.targetDate || 'Unscheduled'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <div className={`font-semibold text-xs ${theme.badgeText}`}>
                        {slot.procedureName}
                      </div>
                      <span className="font-mono text-[10px] text-[#5F6368] shrink-0">
                        {slot.slotTime}
                      </span>
                    </div>

                    <div className="text-[11px] text-[#5F6368] line-clamp-1">
                      {slot.diagnosis}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#DADCE0] text-[11px] flex-wrap gap-2">
                      <div className="flex items-center gap-1.5">
                        {slot.phone && (
                          <button
                            onClick={() => handleSendWhatsApp(slot)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] hover:bg-[#CEEAD6] transition font-medium text-[11px]"
                            title="Open WhatsApp Pre-Op Fasting Advisory"
                          >
                            <Send className="w-3 h-3 text-[#137333]" />
                            <span>WhatsApp D-1</span>
                          </button>
                        )}
                        <button
                          onClick={() => toggleD1Call(slot.id)}
                          className={cn(
                            'flex items-center gap-1 px-2.5 py-1 rounded-lg border transition font-medium text-[11px]',
                            isCallDone
                              ? 'bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]'
                              : 'bg-[#FFFFFF] border-[#DADCE0] text-[#5F6368] hover:text-[#202124] hover:bg-[#F8F9FA]'
                          )}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isCallDone ? 'Call Done' : 'Mark Call'}</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleOpenWorkup(slot)}
                          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#1A73E8] border border-[#DADCE0] font-semibold text-[10px] shadow-xs transition"
                          title="Open Pre-Booking Clinical Workup Dossier"
                        >
                          <FileText className="w-3 h-3 text-[#1A73E8]" />
                          <span>Workup</span>
                        </button>
                        <button
                          onClick={() => {
                            setReschedulingSlot(slot);
                            setNewRescheduleDate(slot.targetDate || new Date().toISOString().slice(0, 10));
                          }}
                          className="p-1.5 rounded-lg bg-[#FFFFFF] hover:bg-[#F8F9FA] border border-[#DADCE0] text-[#5F6368] transition"
                          title="Reschedule Slot"
                        >
                          <RotateCw className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => toggleCompleted(slot.id)}
                          className={cn(
                            'px-2 py-1 rounded-lg font-semibold text-[10px] border transition',
                            isCompleted
                              ? 'bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]'
                              : 'bg-[#FFFFFF] border-[#DADCE0] text-[#5F6368] hover:bg-[#F8F9FA]'
                          )}
                        >
                          {isCompleted ? 'Done' : 'Complete'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Holiday Conflict Modal - Google Material 3 Light Mode */}
      {holidayConflict && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 font-sans">
          <div className="bg-[#FFFFFF] border border-[#F8D7DA] rounded-2xl shadow-xl max-w-md w-full p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#FCE8E6] text-[#C5221F]">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#202124]">
                  Non-Working Holiday Conflict Detected
                </h3>
                <p className="text-xs text-[#5F6368] mt-1">
                  Selected date: <b className="text-[#C5221F] font-mono">{holidayConflict.date}</b>
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FEF7E0] border border-[#FEEFC3] text-xs text-[#B06000] space-y-1">
              <div>Reason: <b>{holidayConflict.reason}</b></div>
              <p className="text-[11px] text-[#5F6368] mt-1 leading-relaxed">
                Standard elective Cath Lab bookings are blocked on official Rajasthan Gazetted Holidays and Sundays to maintain emergency service capacity.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setHolidayConflict(null)}
                className="px-3.5 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#5F6368] text-xs font-semibold transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedDateForBooking(holidayConflict.date);
                  setIsEmergencyOverride(true);
                  setHolidayConflict(null);
                  setIsBookingModalOpen(true);
                }}
                className="px-4 py-1.5 rounded-lg bg-[#C5221F] hover:bg-[#B31D1A] text-white font-bold text-xs transition flex items-center gap-1.5 shadow-xs"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Emergency Override (Active Bleed)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Book Case Modal - Google Material 3 Light Mode */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 font-sans">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl shadow-2xl max-w-xl w-full p-5 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
              <div>
                <h3 className="text-sm font-bold text-[#202124] flex items-center gap-2">
                  <span>Book Interventional Radiology Procedure</span>
                  {isEmergencyOverride && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#FCE8E6] text-[#C5221F] border border-[#F8D7DA] font-bold">
                      Emergency Override
                    </span>
                  )}
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Target Date: <b className="text-[#1A73E8] font-mono">{selectedDateForBooking || 'Unscheduled Pool'}</b>
                </p>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="p-1 rounded-lg text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateBooking} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#5F6368] mb-1 font-medium">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>
                <div>
                  <label className="block text-[#5F6368] mb-1 font-medium">Mobile Phone (WhatsApp D-1)</label>
                  <input
                    type="text"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="e.g. 9829012345"
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[#5F6368] mb-1 font-medium">Age</label>
                  <input
                    type="number"
                    value={patientAge}
                    onChange={(e) => setPatientAge(Number(e.target.value))}
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>
                <div>
                  <label className="block text-[#5F6368] mb-1 font-medium">Gender</label>
                  <select
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#5F6368] mb-1 font-medium">Bed No.</label>
                  <input
                    type="text"
                    value={bedNo}
                    onChange={(e) => setBedNo(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#5F6368] mb-1 font-medium">CR Number (Registration)</label>
                  <input
                    type="text"
                    value={crNo}
                    onChange={(e) => setCrNo(e.target.value)}
                    placeholder="e.g. CR-2026-9481"
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8] font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[#5F6368] mb-1 font-medium">IPD / Admission Number</label>
                  <input
                    type="text"
                    value={ipdNo}
                    onChange={(e) => setIpdNo(e.target.value)}
                    placeholder="e.g. IPD-89211"
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8] font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2 p-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0]">
                <div className="flex items-center justify-between">
                  <label className="block text-[#202124] font-semibold text-xs">
                    Procedure Blueprint ({EXTENSIVE_IR_PROCEDURES.length} Procedures) *
                  </label>
                  <span className="text-[10px] text-[#5F6368]">
                    Filter by category & keyword
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Search procedure name, code, ICD-10..."
                      value={procSearchTerm}
                      onChange={(e) => setProcSearchTerm(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] placeholder-[#5F6368] focus:outline-none focus:border-[#1A73E8] text-xs"
                    />
                  </div>
                  <div>
                    <select
                      value={procCategoryFilter}
                      onChange={(e) => setProcCategoryFilter(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8] text-xs"
                    >
                      <option value="All">All Categories ({EXTENSIVE_IR_PROCEDURES.length} Procedures)</option>
                      <option value="Dialysis Access & Fistula">Dialysis Access & Fistula</option>
                      <option value="Rare Syndromes & Vascular Disorders">Rare Syndromes & Compression</option>
                      <option value="Hepatobiliary & Portal Hypertension">Hepatobiliary & Portal HTN</option>
                      <option value="Interventional Oncology">Interventional Oncology</option>
                      <option value="Arterial Embolization & Pelvic Interventions">Arterial Embolization & Pelvic</option>
                      <option value="Venous Thromboembolism & Non-Vascular Drainage">Venous & Drainage</option>
                      <option value="Aortic & Peripheral Arterial Interventions">Aortic & Peripheral PAD</option>
                      <option value="Neurointerventional & Lymphatic">Neuro & Lymphatics</option>
                      <option value="Vascular Embolization">Vascular Embolization</option>
                      <option value="Biliary Interventions">Biliary Interventions</option>
                      <option value="Urinary Interventions">Urinary Interventions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <select
                    value={selectedProcId}
                    onChange={(e) => {
                      const newId = e.target.value;
                      setSelectedProcId(newId);
                      const matched = EXTENSIVE_IR_PROCEDURES.find((p) => p.id === newId);
                      if (matched && matched.indications && matched.indications.length > 0) {
                        setDiagnosis(matched.indications[0]);
                      }
                    }}
                    className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8] font-medium text-xs leading-normal"
                    size={4}
                  >
                    {EXTENSIVE_IR_PROCEDURES.filter((p) => {
                      const matchesCategory = procCategoryFilter === 'All' || p.category === procCategoryFilter;
                      const matchesSearch =
                        !procSearchTerm ||
                        p.name.toLowerCase().includes(procSearchTerm.toLowerCase()) ||
                        p.code.toLowerCase().includes(procSearchTerm.toLowerCase()) ||
                        (p.icd10 && p.icd10.toLowerCase().includes(procSearchTerm.toLowerCase())) ||
                        p.category.toLowerCase().includes(procSearchTerm.toLowerCase());
                      return matchesCategory && matchesSearch;
                    }).map((p) => (
                      <option key={p.id} value={p.id} className="py-1 px-1.5 hover:bg-[#F1F3F4] rounded">
                        [{p.category}] {p.name} — {p.code} ({p.icd10})
                      </option>
                    ))}
                  </select>
                  {selectedProcId && (
                    <div className="mt-1.5 flex items-center justify-between text-[11px] text-[#5F6368]">
                      <span>
                        Selected: <b className="text-[#1A73E8]">{EXTENSIVE_IR_PROCEDURES.find((p) => p.id === selectedProcId)?.name}</b>
                      </span>
                      <span className="font-mono text-[#202124] font-semibold">
                        MAAY Tariff: ₹{EXTENSIVE_IR_PROCEDURES.find((p) => p.id === selectedProcId)?.maayTariffInr.toLocaleString('en-IN') || 'N/A'}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[#5F6368] mb-1 font-medium">Slot Timing</label>
                <select
                  value={slotTime}
                  onChange={(e) => setSlotTime(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                >
                  <option value="09:00 AM (First Case)">09:00 AM (First Case)</option>
                  <option value="11:00 AM (Second Slot)">11:00 AM (Second Slot)</option>
                  <option value="01:30 PM (Afternoon)">01:30 PM (Afternoon)</option>
                  <option value="Emergency On-Call">Emergency On-Call</option>
                </select>
              </div>

              <div>
                <label className="block text-[#5F6368] mb-1 font-medium">Clinical Diagnosis & Staging</label>
                <input
                  type="text"
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  placeholder="e.g. Hepatocellular Carcinoma (HCC), BCLC B, Child-Pugh A"
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                />
              </div>

              <div>
                <label className="block text-[#5F6368] mb-1 font-medium">Pre-Op Orders & Fasting Notes</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Pre-op fasting from midnight. Keep 2 units PRBC cross-matched."
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#DADCE0]">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-3.5 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#5F6368] font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1765CC] text-white font-medium shadow-xs"
                >
                  Confirm & Schedule Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reschedule Modal - Google Material 3 Light Mode */}
      {reschedulingSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 font-sans">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl shadow-xl max-w-md w-full p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
              <h3 className="text-sm font-bold text-[#202124]">
                Reschedule {reschedulingSlot.patientName}
              </h3>
              <button
                onClick={() => setReschedulingSlot(null)}
                className="p-1 rounded-lg text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#5F6368] mb-1 font-medium">New Target Date</label>
                <input
                  type="date"
                  value={newRescheduleDate}
                  onChange={(e) => setNewRescheduleDate(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8] font-mono"
                />
              </div>
              <div>
                <label className="block text-[#5F6368] mb-1 font-medium">New Slot Time</label>
                <input
                  type="text"
                  value={newRescheduleSlot}
                  onChange={(e) => setNewRescheduleSlot(e.target.value)}
                  placeholder="e.g. 10:00 AM"
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#DADCE0]">
              <button
                onClick={() => setReschedulingSlot(null)}
                className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#5F6368] font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  reschedule(reschedulingSlot.id, newRescheduleDate, newRescheduleSlot);
                  setReschedulingSlot(null);
                }}
                className="px-4 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1765CC] text-white font-medium shadow-xs"
              >
                Update Schedule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pre-Booking Clinical Workup & Dossier Modal */}
      <PreBookingWorkupModal
        isOpen={workupModalOpen}
        onClose={() => setWorkupModalOpen(false)}
        patientInfo={selectedWorkupPatient}
      />
    </div>
  );
};

export default OtBookingPage;
