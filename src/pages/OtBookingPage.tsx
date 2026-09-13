import React, { useState } from 'react';
import { useClinicalStore } from '../stores/useClinicalStore';
import { RAJASTHAN_HOLIDAYS_2026, isHolidayOrSunday } from '../data/holidays2026';
import { EXTENSIVE_IR_PROCEDURES, IR_PROCEDURES } from '../data/procedures';
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
  Clock,
  Send,
  User,
  ShieldAlert,
  Search,
  RotateCw
} from 'lucide-react';

export const OtBookingPage: React.FC = () => {
  const bookings = useClinicalStore((s) => s.bookings);
  const addBooking = useClinicalStore((s) => s.addBooking);
  const toggleD1Call = useClinicalStore((s) => s.toggleD1Call);
  const toggleCompleted = useClinicalStore((s) => s.toggleCompletedStatus);
  const reschedule = useClinicalStore((s) => s.rescheduleBooking);

  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(10); // November 2026
  const [activeSubTab, setActiveSubTab] = useState<'queue' | 'd1calls' | 'waitlist'>('queue');
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

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const proc = EXTENSIVE_IR_PROCEDURES.find((p) => p.id === selectedProcId) || EXTENSIVE_IR_PROCEDURES[0];

    const newSlot: BookingSlot = {
      id: `book-${Date.now()}`,
      patientId: `pt-${Date.now()}`,
      patientName,
      age: Number(patientAge),
      gender: patientGender,
      phone: patientPhone,
      crNo: crNo || `CR-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      ipdNo: ipdNo || `IPD-${Math.floor(10000 + Math.random() * 90000)}`,
      bedNo,
      diagnosis: diagnosis || proc.indications[0],
      procedureCode: proc.code,
      procedureName: proc.name,
      targetDate: selectedDateForBooking,
      slotTime,
      isEmergency: isEmergencyOverride,
      d1CallCompleted: false,
      status: 'Scheduled',
      isUnscheduled: !selectedDateForBooking,
      notes
    };

    addBooking(newSlot);
    setIsBookingModalOpen(false);
    setPatientName('');
    setCrNo('');
    setIpdNo('');
    setDiagnosis('');
  };

  const tomorrowStr = getTomorrowDateString();

  const handleSendWhatsApp = (slot: BookingSlot) => {
    let cleanPhone = (slot.phone || '').replace(/\D/g, '');
    if (cleanPhone.length === 10) cleanPhone = '91' + cleanPhone;
    if (!cleanPhone) {
      alert('No mobile number recorded for ' + slot.patientName);
      return;
    }

    const text = `SMS MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
Department of Radiodiagnosis & Interventional Radiology
--------------------------------------------------
PATIENT PRE-PROCEDURE INSTRUCTION & FASTING ADVISORY

Dear ${slot.patientName},
Your Interventional Radiology procedure (${slot.procedureName}) is scheduled for ${slot.targetDate || 'Tomorrow'} (${slot.slotTime}) at the SMS Hospital IR Angio Suite.

CRITICAL PRE-OPERATIVE INSTRUCTIONS:
1. Strict Fasting (NPO): Do NOT eat or drink anything (including water, tea, or milk) after 12:00 midnight (minimum 6-8 hours fasting).
2. Government Scheme Cards: Please bring your Original MAAY / Chiranjeevi / RGHS Card and Patient Aadhaar Card for admission clearance.
3. Diagnostic Films & Reports: Bring all prior CT, MRI, Ultrasound films, and blood investigation reports (CBC, PT/INR, LFT, Creatinine, Viral Markers).
4. Attendants: 1 to 2 adult blood relatives must accompany the patient.
5. Reporting Location: Report at 08:00 AM sharp at:
   IR Day Care / Angio Suite, Ground Floor, Bangur Building, SMS Hospital, Jaipur.

For any urgent query, contact the IR Resident Doctor on duty.
--------------------------------------------------`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    if (window.confirm(`WhatsApp advisory opened for ${slot.patientName}. Mark D-1 Pre-Op Call as COMPLETED?`)) {
      toggleD1Call(slot.id);
    }
  };

  const handleExportCsv = () => {
    const headers = ['Target Date', 'Slot Time', 'Patient Name', 'CR No', 'IPD No', 'Bed No', 'Procedure Code', 'Procedure Name', 'Status', 'Emergency', 'Phone'];
    const rows = bookings.map((b) => [
      b.targetDate || 'Unscheduled',
      `"${b.slotTime}"`,
      `"${b.patientName}"`,
      b.crNo,
      b.ipdNo,
      `"${b.bedNo}"`,
      b.procedureCode,
      `"${b.procedureName}"`,
      b.status,
      b.isEmergency ? 'YES' : 'NO',
      b.phone || ''
    ]);
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
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
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      b.patientName.toLowerCase().includes(q) ||
      b.crNo.toLowerCase().includes(q) ||
      b.procedureName.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-4 pb-12">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-crimson-500" />
            <span>Angio OT Booking & Rajasthan 2026 Gazetted Holiday Calendar</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time Sunday & Gazetted holiday conflict engine • D-1 WhatsApp fasting advisory • Direct date-cell booking
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedDateForBooking(new Date().toISOString().slice(0, 10));
              setIsEmergencyOverride(false);
              setIsBookingModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Book New Case</span>
          </button>
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Pane: Interactive 12-Month Calendar Matrix (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm text-slate-100 font-mono">
                {monthNames[currentMonth]}
              </span>
              <button
                onClick={nextMonth}
                className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-red-400"></span>
                <span className="text-slate-400">Gazetted Holiday</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-amber-400"></span>
                <span className="text-slate-400">Sunday</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center font-bold text-[11px] text-slate-400 font-mono">
            <div className="text-amber-400">Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`blank-${i}`} className="min-h-[72px] rounded-xl bg-slate-950/30 border border-slate-800/30" />
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
                  className={`min-h-[72px] p-1.5 rounded-xl border text-left flex flex-col justify-between transition group relative ${
                    check.isBlocked
                      ? check.isSunday
                        ? 'bg-amber-950/20 border-amber-900/40 hover:border-amber-700'
                        : 'bg-red-950/30 border-red-900/50 hover:border-red-700'
                      : 'bg-slate-950/70 border-slate-800 hover:border-crimson-600'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs font-bold ${
                        check.isSunday
                          ? 'text-amber-400'
                          : check.holidayName
                          ? 'text-red-400'
                          : 'text-slate-200'
                      }`}
                    >
                      {dayNum}
                    </span>

                    {check.holidayName && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-red-900/80 text-red-200 border border-red-700 font-semibold truncate max-w-[65px]" title={check.holidayName}>
                        Holiday
                      </span>
                    )}
                  </div>

                  <div className="w-full space-y-0.5 mt-1 overflow-hidden">
                    {dayBookings.slice(0, 2).map((b) => (
                      <div
                        key={b.id}
                        className={`text-[9px] px-1 py-0.5 rounded font-mono truncate font-medium ${
                          b.status === 'Completed'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : 'bg-slate-800 text-slate-200 border border-slate-700'
                        }`}
                        title={`${b.patientName} - ${b.procedureName}`}
                      >
                        {b.patientName.split(' ')[0]} ({b.procedureCode.split('-')[0]})
                      </div>
                    ))}
                    {dayBookings.length > 2 && (
                      <div className="text-[9px] text-slate-500 font-mono font-bold text-center">
                        +{dayBookings.length - 2} more
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Pane: OPD Docket & Waitlist (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1 text-xs font-semibold">
              <button
                onClick={() => setActiveSubTab('queue')}
                className={`px-2.5 py-1.5 rounded-lg transition ${
                  activeSubTab === 'queue'
                    ? 'bg-crimson-600 text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                Queue ({scheduledList.length})
              </button>
              <button
                onClick={() => setActiveSubTab('d1calls')}
                className={`px-2.5 py-1.5 rounded-lg transition flex items-center gap-1 ${
                  activeSubTab === 'd1calls'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-400 hover:text-amber-200 hover:bg-slate-800'
                }`}
              >
                <PhoneCall className="w-3 h-3" />
                <span>D-1 Calls ({d1CallsList.length})</span>
              </button>
              <button
                onClick={() => setActiveSubTab('waitlist')}
                className={`px-2.5 py-1.5 rounded-lg transition ${
                  activeSubTab === 'waitlist'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                Waitlist ({waitlist.length})
              </button>
            </div>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search patient, CR, procedure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-crimson-600"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[520px] pr-1">
            {filteredDockList.length === 0 ? (
              <div className="text-center py-10 text-xs text-slate-500">
                No patients found in this view.
              </div>
            ) : (
              filteredDockList.map((slot) => {
                const isCallDone = slot.d1CallCompleted;
                const isCompleted = slot.status === 'Completed';

                return (
                  <div
                    key={slot.id}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-slate-100">
                        <User className="w-3.5 h-3.5 text-crimson-400" />
                        <span>{slot.patientName}</span>
                        <span className="text-[10px] text-slate-400 font-mono">CR: {slot.crNo}</span>
                      </div>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {slot.targetDate || 'Unscheduled'}
                      </span>
                    </div>

                    <div className="text-crimson-400 font-semibold text-[11px]">
                      {slot.procedureName}
                    </div>

                    <div className="text-[11px] text-slate-400 line-clamp-1">
                      {slot.diagnosis}
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[11px]">
                      <div className="flex items-center gap-2">
                        {slot.phone && (
                          <button
                            onClick={() => handleSendWhatsApp(slot)}
                            className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 transition font-medium"
                            title="Open WhatsApp Pre-Op Fasting Advisory"
                          >
                            <Send className="w-3 h-3 text-emerald-400" />
                            <span>WhatsApp D-1</span>
                          </button>
                        )}
                        <button
                          onClick={() => toggleD1Call(slot.id)}
                          className={`flex items-center gap-1 px-2 py-1 rounded border transition font-medium ${
                            isCallDone
                              ? 'bg-emerald-900/40 border-emerald-700 text-emerald-300'
                              : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isCallDone ? 'Call Done' : 'Mark Call'}</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setReschedulingSlot(slot);
                            setNewRescheduleDate(slot.targetDate || new Date().toISOString().slice(0, 10));
                          }}
                          className="p-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300"
                          title="Reschedule Slot"
                        >
                          <RotateCw className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => toggleCompleted(slot.id)}
                          className={`px-2 py-1 rounded font-semibold text-[10px] border ${
                            isCompleted
                              ? 'bg-emerald-950 border-emerald-800 text-emerald-300'
                              : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                          }`}
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

      {/* Holiday Conflict Modal */}
      {holidayConflict && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 font-sans">
          <div className="bg-slate-900 border border-red-800 rounded-2xl shadow-2xl max-w-md w-full p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-950 border border-red-800 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100">
                  Non-Working Holiday Conflict Detected
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Selected date: <b className="text-red-400 font-mono">{holidayConflict.date}</b>
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div>Reason: <b className="text-red-300">{holidayConflict.reason}</b></div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Standard elective Cath Lab bookings are blocked on official Rajasthan Gazetted Holidays and Sundays to maintain emergency service capacity.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setHolidayConflict(null)}
                className="px-3.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
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
                className="px-4 py-1.5 rounded-lg bg-red-700 hover:bg-red-600 text-white font-bold text-xs transition flex items-center gap-1.5"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Emergency Override (Active Bleed)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Book Case Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 font-sans">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-xl w-full p-5 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span>Book Interventional Radiology Procedure</span>
                  {isEmergencyOverride && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-900 text-red-200 border border-red-700 font-bold">
                      Emergency Override
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-400">Target Date: <b className="text-crimson-400 font-mono">{selectedDateForBooking || 'Unscheduled Pool'}</b></p>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="text-slate-400 hover:text-white px-2 py-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateBooking} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Mobile Phone (WhatsApp D-1)</label>
                  <input
                    type="text"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="e.g. 9829012345"
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Age</label>
                  <input
                    type="number"
                    value={patientAge}
                    onChange={(e) => setPatientAge(Number(e.target.value))}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Gender</label>
                  <select
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Bed No.</label>
                  <input
                    type="text"
                    value={bedNo}
                    onChange={(e) => setBedNo(e.target.value)}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">CR Number (Registration)</label>
                  <input
                    type="text"
                    value={crNo}
                    onChange={(e) => setCrNo(e.target.value)}
                    placeholder="e.g. CR-2026-9481"
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">IPD / Admission Number</label>
                  <input
                    type="text"
                    value={ipdNo}
                    onChange={(e) => setIpdNo(e.target.value)}
                    placeholder="e.g. IPD-89211"
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2 p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <label className="block text-slate-300 font-semibold text-xs">
                    Procedure Blueprint ({EXTENSIVE_IR_PROCEDURES.length} Total Procedures) *
                  </label>
                  <span className="text-[10px] text-slate-400">
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
                      className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-crimson-600 text-xs"
                    />
                  </div>
                  <div>
                    <select
                      value={procCategoryFilter}
                      onChange={(e) => setProcCategoryFilter(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600 text-xs"
                    >
                      <option value="All">All Categories (290 Procedures)</option>
                      <option value="Dialysis Access & Fistula">Dialysis Access & Fistula (35)</option>
                      <option value="Rare Syndromes & Vascular Disorders">Rare Syndromes & Compression (35)</option>
                      <option value="Hepatobiliary & Portal Hypertension">Hepatobiliary & Portal HTN (35)</option>
                      <option value="Interventional Oncology">Interventional Oncology (35)</option>
                      <option value="Arterial Embolization & Pelvic Interventions">Arterial Embolization & Pelvic (35)</option>
                      <option value="Venous Thromboembolism & Non-Vascular Drainage">Venous & Drainage (35)</option>
                      <option value="Aortic & Peripheral Arterial Interventions">Aortic & Peripheral PAD (35)</option>
                      <option value="Neurointerventional & Lymphatic">Neuro & Lymphatics (35)</option>
                      <option value="Vascular Embolization">Vascular Embolization (Core)</option>
                      <option value="Biliary Interventions">Biliary Interventions (Core)</option>
                      <option value="Urinary Interventions">Urinary Interventions (Core)</option>
                      <option value="Portal Hypertension">Portal Hypertension (Core)</option>
                      <option value="Superficial Venous">Superficial Venous (Core)</option>
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
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-500 font-medium text-xs leading-normal"
                    size={4}
                  >
                    {EXTENSIVE_IR_PROCEDURES.filter((p) => {
                      const matchesCategory = procCategoryFilter === 'All' || p.category === procCategoryFilter;
                      const matchesSearch = !procSearchTerm ||
                        p.name.toLowerCase().includes(procSearchTerm.toLowerCase()) ||
                        p.code.toLowerCase().includes(procSearchTerm.toLowerCase()) ||
                        (p.icd10 && p.icd10.toLowerCase().includes(procSearchTerm.toLowerCase())) ||
                        p.category.toLowerCase().includes(procSearchTerm.toLowerCase());
                      return matchesCategory && matchesSearch;
                    }).map((p) => (
                      <option key={p.id} value={p.id} className="py-1 px-1.5 hover:bg-slate-800 rounded">
                        [{p.category}] {p.name} — {p.code} ({p.icd10})
                      </option>
                    ))}
                  </select>
                  {selectedProcId && (
                    <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                      <span>
                        Selected: <b className="text-crimson-400">{EXTENSIVE_IR_PROCEDURES.find((p) => p.id === selectedProcId)?.name}</b>
                      </span>
                      <span className="font-mono text-slate-300">
                        MAAY: ₹{EXTENSIVE_IR_PROCEDURES.find((p) => p.id === selectedProcId)?.maayTariffInr.toLocaleString('en-IN') || 'N/A'}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Slot Timing</label>
                <select
                  value={slotTime}
                  onChange={(e) => setSlotTime(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                >
                  <option value="09:00 AM (First Case)">09:00 AM (First Case)</option>
                  <option value="11:00 AM (Second Slot)">11:00 AM (Second Slot)</option>
                  <option value="01:30 PM (Afternoon)">01:30 PM (Afternoon)</option>
                  <option value="Emergency On-Call">Emergency On-Call</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Clinical Diagnosis & Staging</label>
                <input
                  type="text"
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  placeholder="e.g. Hepatocellular Carcinoma (HCC), BCLC B, Child-Pugh A"
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Pre-Op Orders & Fasting Notes</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Pre-op fasting from midnight. Keep 2 units PRBC cross-matched."
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white font-bold shadow-md shadow-crimson-900/30"
                >
                  Confirm & Schedule Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reschedule Modal */}
      {reschedulingSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 font-sans">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-sm font-bold text-slate-100">
                Reschedule {reschedulingSlot.patientName}
              </h3>
              <button
                onClick={() => setReschedulingSlot(null)}
                className="text-slate-400 hover:text-white px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">New Target Date</label>
                <input
                  type="date"
                  value={newRescheduleDate}
                  onChange={(e) => setNewRescheduleDate(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600 font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">New Slot Time</label>
                <input
                  type="text"
                  value={newRescheduleSlot}
                  onChange={(e) => setNewRescheduleSlot(e.target.value)}
                  placeholder="e.g. 10:00 AM"
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-crimson-600"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setReschedulingSlot(null)}
                className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  reschedule(reschedulingSlot.id, newRescheduleDate, newRescheduleSlot);
                  setReschedulingSlot(null);
                }}
                className="px-4 py-1.5 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white font-bold"
              >
                Update Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtBookingPage;
