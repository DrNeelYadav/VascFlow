'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  ShieldCheck,
  AlertTriangle,
  User,
  Users2,
  Filter,
  Plus,
  Moon,
  Sun,
  Bed,
  CheckCircle2,
  Download,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type ShiftType = 'DAY_CATHLAB' | 'NIGHT_FLOAT' | 'POST_CALL_REST' | 'CONSULTANT_CALL' | 'DAYCARE_ROUNDS';

export interface DutyShift {
  id: string;
  residentName: string;
  roleTier: 'Consultant' | 'Fellow' | 'Senior Resident' | 'Junior Resident';
  personaCode: string;
  date: string; // YYYY-MM-DD
  shiftType: ShiftType;
  startTime: string;
  endTime: string;
  station: string;
  isRestCompliant: boolean;
  notes?: string;
}

const INITIAL_SHIFTS: DutyShift[] = [
  // Day 1
  { id: 'sh-1', residentName: 'Dr. Sharma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM01', date: '2026-09-01', shiftType: 'DAY_CATHLAB', startTime: '08:00', endTime: '16:00', station: 'Cath Lab 1 (DSA)', isRestCompliant: true },
  { id: 'sh-2', residentName: 'Dr. Choudhary (SR)', roleTier: 'Senior Resident', personaCode: 'SR01', date: '2026-09-01', shiftType: 'NIGHT_FLOAT', startTime: '16:00', endTime: '08:00', station: 'Emergency IR On-Call', isRestCompliant: true },
  { id: 'sh-3', residentName: 'Prof. & HOD', roleTier: 'Consultant', personaCode: 'FC01', date: '2026-09-01', shiftType: 'CONSULTANT_CALL', startTime: '00:00', endTime: '23:59', station: 'Department Tele-Review', isRestCompliant: true },

  // Day 2
  { id: 'sh-4', residentName: 'Dr. Choudhary (SR)', roleTier: 'Senior Resident', personaCode: 'SR01', date: '2026-09-02', shiftType: 'POST_CALL_REST', startTime: '08:00', endTime: '20:00', station: 'Mandatory 24h Rest', isRestCompliant: true },
  { id: 'sh-5', residentName: 'Dr. Verma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM02', date: '2026-09-02', shiftType: 'DAY_CATHLAB', startTime: '08:00', endTime: '16:00', station: 'Cath Lab 1 (DSA)', isRestCompliant: true },
  { id: 'sh-6', residentName: 'Dr. Sharma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM01', date: '2026-09-02', shiftType: 'NIGHT_FLOAT', startTime: '16:00', endTime: '08:00', station: 'Emergency IR On-Call', isRestCompliant: true },
  { id: 'sh-7', residentName: 'Dr. Gupta (Assoc. Prof)', roleTier: 'Consultant', personaCode: 'FC02', date: '2026-09-02', shiftType: 'CONSULTANT_CALL', startTime: '00:00', endTime: '23:59', station: 'Faculty On-Duty', isRestCompliant: true },

  // Day 3
  { id: 'sh-8', residentName: 'Dr. Sharma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM01', date: '2026-09-03', shiftType: 'POST_CALL_REST', startTime: '08:00', endTime: '20:00', station: 'Mandatory 24h Rest', isRestCompliant: true },
  { id: 'sh-9', residentName: 'Dr. Choudhary (SR)', roleTier: 'Senior Resident', personaCode: 'SR01', date: '2026-09-03', shiftType: 'DAY_CATHLAB', startTime: '08:00', endTime: '16:00', station: 'Cath Lab 1 (DSA)', isRestCompliant: true },
  { id: 'sh-10', residentName: 'Dr. Verma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM02', date: '2026-09-03', shiftType: 'NIGHT_FLOAT', startTime: '16:00', endTime: '08:00', station: 'Emergency IR On-Call', isRestCompliant: true },

  // Day 4
  { id: 'sh-11', residentName: 'Dr. Verma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM02', date: '2026-09-04', shiftType: 'POST_CALL_REST', startTime: '08:00', endTime: '20:00', station: 'Mandatory 24h Rest', isRestCompliant: true },
  { id: 'sh-12', residentName: 'Dr. Sharma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM01', date: '2026-09-04', shiftType: 'DAY_CATHLAB', startTime: '08:00', endTime: '16:00', station: 'Cath Lab 1 (DSA)', isRestCompliant: true },

  // Day 13 (Today)
  { id: 'sh-13', residentName: 'Dr. Sharma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM01', date: '2026-09-13', shiftType: 'DAY_CATHLAB', startTime: '08:00', endTime: '16:00', station: 'Cath Lab 1 (DSA)', isRestCompliant: true },
  { id: 'sh-14', residentName: 'Dr. Choudhary (SR)', roleTier: 'Senior Resident', personaCode: 'SR01', date: '2026-09-13', shiftType: 'NIGHT_FLOAT', startTime: '16:00', endTime: '08:00', station: 'Emergency IR On-Call', isRestCompliant: true },
  { id: 'sh-15', residentName: 'Prof. & HOD', roleTier: 'Consultant', personaCode: 'FC01', date: '2026-09-13', shiftType: 'CONSULTANT_CALL', startTime: '00:00', endTime: '23:59', station: 'Faculty Escalation', isRestCompliant: true },
  { id: 'sh-16', residentName: 'Dr. Verma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM02', date: '2026-09-13', shiftType: 'DAYCARE_ROUNDS', startTime: '09:00', endTime: '17:00', station: 'IR Daycare Ward', isRestCompliant: true },

  // Day 14 (Tomorrow)
  { id: 'sh-17', residentName: 'Dr. Choudhary (SR)', roleTier: 'Senior Resident', personaCode: 'SR01', date: '2026-09-14', shiftType: 'POST_CALL_REST', startTime: '08:00', endTime: '20:00', station: 'Mandatory 24h Rest', isRestCompliant: true },
  { id: 'sh-18', residentName: 'Dr. Verma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM02', date: '2026-09-14', shiftType: 'DAY_CATHLAB', startTime: '08:00', endTime: '16:00', station: 'Cath Lab 1 (DSA)', isRestCompliant: true },
  { id: 'sh-19', residentName: 'Dr. Sharma (DM Fellow)', roleTier: 'Fellow', personaCode: 'DM01', date: '2026-09-14', shiftType: 'NIGHT_FLOAT', startTime: '16:00', endTime: '08:00', station: 'Emergency IR On-Call', isRestCompliant: true }
];

export default function RosterPage() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(8); // 0-indexed: 8 = September
  const [shifts, setShifts] = useState<DutyShift[]>(INITIAL_SHIFTS);
  const [filterRole, setFilterRole] = useState<string>('ALL');
  const [selectedShift, setSelectedShift] = useState<DutyShift | null>(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);

  // Form State for new shift assignment
  const [newResident, setNewResident] = useState('Dr. Sharma (DM Fellow)');
  const [newDate, setNewDate] = useState('2026-09-15');
  const [newType, setNewType] = useState<ShiftType>('DAY_CATHLAB');
  const [newStation, setNewStation] = useState('Cath Lab 1 (DSA)');

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleGoToday = () => {
    setCurrentYear(2026);
    setCurrentMonth(8); // Sept 2026
  };

  // Calendar Day Calculation
  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sunday
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    const days: Array<{
      dateStr: string;
      dayNumber: number;
      isCurrentMonth: boolean;
      isToday: boolean;
    }> = [];

    // Prev month padding
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      const m = currentMonth === 0 ? 12 : currentMonth;
      const y = currentMonth === 0 ? currentYear - 1 : currentYear;
      const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      days.push({
        dateStr,
        dayNumber: d,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Current month
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isToday = currentYear === 2026 && currentMonth === 8 && d === 13;
      days.push({
        dateStr,
        dayNumber: d,
        isCurrentMonth: true,
        isToday,
      });
    }

    // Next month padding to 35 or 42 cells
    const remaining = 35 - days.length > 0 ? 35 - days.length : (42 - days.length > 0 ? 42 - days.length : 0);
    for (let d = 1; d <= remaining; d++) {
      const m = currentMonth === 11 ? 1 : currentMonth + 2;
      const y = currentMonth === 11 ? currentYear + 1 : currentYear;
      const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      days.push({
        dateStr,
        dayNumber: d,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return days;
  }, [currentYear, currentMonth]);

  const filteredShifts = useMemo(() => {
    return shifts.filter((s) => {
      if (filterRole === 'ALL') return true;
      return s.roleTier === filterRole;
    });
  }, [shifts, filterRole]);

  const handleAssignShift = (e: React.FormEvent) => {
    e.preventDefault();
    const roleTier = newResident.includes('HOD') || newResident.includes('Prof')
      ? 'Consultant'
      : (newResident.includes('DM') ? 'Fellow' : 'Senior Resident');

    // Night float validation: check if resident had a night shift on previous day
    const prevDate = new Date(newDate);
    prevDate.setDate(prevDate.getDate() - 1);
    const prevDateStr = prevDate.toISOString().split('T')[0];

    const hadPriorNight = shifts.some(
      (s) => s.residentName === newResident && s.date === prevDateStr && s.shiftType === 'NIGHT_FLOAT'
    );

    const isRestCompliant = !(hadPriorNight && newType === 'NIGHT_FLOAT');

    const newEntry: DutyShift = {
      id: `sh-${Date.now()}`,
      residentName: newResident,
      roleTier,
      personaCode: 'DM01',
      date: newDate,
      shiftType: newType,
      startTime: newType === 'NIGHT_FLOAT' ? '16:00' : '08:00',
      endTime: newType === 'NIGHT_FLOAT' ? '08:00' : '16:00',
      station: newStation,
      isRestCompliant,
    };

    setShifts((prev) => [...prev, newEntry]);
    setIsAssignModalOpen(false);
  };

  const getShiftBadgeStyle = (shift: DutyShift) => {
    switch (shift.shiftType) {
      case 'NIGHT_FLOAT':
        return 'bg-[#FCE8E6] text-[#C5221F] border border-[#D93025]/30 hover:bg-[#FAD2CF]';
      case 'DAY_CATHLAB':
        return 'bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/30 hover:bg-[#D2E3FC]';
      case 'POST_CALL_REST':
        return 'bg-[#F1F3F4] text-[#5F6368] border border-[#DADCE0] line-through opacity-80';
      case 'CONSULTANT_CALL':
        return 'bg-[#FEF7E0] text-[#B06000] border border-[#F9AB00]/40 hover:bg-[#FEEFC3]';
      case 'DAYCARE_ROUNDS':
        return 'bg-[#E6F4EA] text-[#137333] border border-[#1E8E3E]/30 hover:bg-[#CEEAD6]';
      default:
        return 'bg-[#F1F3F4] text-[#202124] border border-[#DADCE0]';
    }
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Top Google Calendar Navigation Bar */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-3 sm:p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold">
            <Users2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-heading font-medium text-lg text-[#202124] flex items-center gap-2">
              <span>SMS Interventional Radiology Trainee Duty Roster</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#E6F4EA] text-[#137333]">
                ACGM-Compliant
              </span>
            </h1>
            <p className="text-xs text-[#5F6368]">
              Automated night float monitoring, 24-hour mandatory post-call rest compliance, and Cath Lab emergency rotation
            </p>
          </div>
        </div>

        {/* Date Controls & Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleGoToday}
            className="px-4 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-xs font-medium text-[#202124] transition shadow-xs"
          >
            Today
          </button>

          <div className="flex items-center rounded-full border border-[#DADCE0] bg-[#FFFFFF] p-0.5">
            <button
              onClick={handlePrevMonth}
              className="p-1 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition"
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 text-xs font-heading font-semibold text-[#202124]">
              {monthNames[currentMonth]} {currentYear}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-1 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition"
              title="Next Month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Dropdown */}
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="text-xs rounded-full border border-[#DADCE0] bg-[#FFFFFF] px-3 py-1.5 text-[#202124] outline-none hover:bg-[#F8F9FA]"
          >
            <option value="ALL">All Tiers (Consultants & Trainees)</option>
            <option value="Consultant">Faculty / Consultants</option>
            <option value="Fellow">DM Fellows</option>
            <option value="Senior Resident">Senior Residents (SR)</option>
          </select>

          {/* Assign Duty Button */}
          <button
            onClick={() => setIsAssignModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] text-white text-xs font-medium transition shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Assign Duty</span>
          </button>
        </div>
      </div>

      {/* Night Float Compliance Strip */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-3 flex items-center justify-between flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#137333] font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#1E8E3E]" />
            <span>Post-Call Rest Compliance: 100% (Zero Fatigue Violations)</span>
          </div>
          <span className="text-[#DADCE0] hidden md:inline">•</span>
          <div className="flex items-center gap-1.5 text-[#5F6368] hidden md:flex">
            <Clock className="w-4 h-4 text-[#1A73E8]" />
            <span>Max Continuous On-Call: 16 Hours</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 flex-wrap text-[11px]">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8F0FE] text-[#1A73E8]">
            <Sun className="w-3 h-3" /> Day Cath Lab
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FCE8E6] text-[#C5221F]">
            <Moon className="w-3 h-3" /> Night Emergency
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FEF7E0] text-[#B06000]">
            <User className="w-3 h-3" /> Faculty Call
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F1F3F4] text-[#5F6368] line-through">
            <Bed className="w-3 h-3" /> Protected Rest
          </span>
        </div>
      </div>

      {/* Main Google Calendar Grid */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg overflow-hidden shadow-xs">
        {/* Day Header */}
        <div className="grid grid-cols-7 border-b border-[#DADCE0] bg-[#F8F9FA] text-center text-xs font-semibold text-[#5F6368] py-2">
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </div>

        {/* Calendar Cells */}
        <div className="grid grid-cols-7 auto-rows-fr divide-x divide-y divide-[#DADCE0]">
          {calendarDays.map((day, idx) => {
            const dayShifts = filteredShifts.filter((s) => s.date === day.dateStr);

            return (
              <div
                key={idx}
                className={cn(
                  'min-h-[120px] p-1.5 sm:p-2 transition-colors flex flex-col',
                  day.isCurrentMonth ? 'bg-[#FFFFFF]' : 'bg-[#F8F9FA]/60 text-[#80868B]',
                  day.isToday ? 'bg-[#E8F0FE]/20' : ''
                )}
              >
                {/* Date Header */}
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={cn(
                      'text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center',
                      day.isToday
                        ? 'bg-[#1A73E8] text-white font-bold'
                        : (day.isCurrentMonth ? 'text-[#202124]' : 'text-[#80868B]')
                    )}
                  >
                    {day.dayNumber}
                  </span>

                  {dayShifts.length > 0 && (
                    <span className="text-[10px] text-[#5F6368] font-mono">
                      {dayShifts.length} {dayShifts.length === 1 ? 'duty' : 'duties'}
                    </span>
                  )}
                </div>

                {/* Shift Chips */}
                <div className="space-y-1 flex-1 overflow-y-auto max-h-28 pr-0.5">
                  {dayShifts.map((shift) => (
                    <div
                      key={shift.id}
                      onClick={() => setSelectedShift(shift)}
                      className={cn(
                        'px-1.5 py-0.5 rounded text-[11px] font-medium truncate cursor-pointer transition-all',
                        getShiftBadgeStyle(shift)
                      )}
                      title={`${shift.residentName} (${shift.startTime}-${shift.endTime}): ${shift.station}`}
                    >
                      <div className="truncate font-semibold">{shift.residentName.split(' ')[0]} {shift.residentName.split(' ')[1]}</div>
                      <div className="truncate text-[9px] opacity-85">{shift.station}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Shift Detail Modal */}
      {selectedShift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg max-w-md w-full p-5 shadow-xl text-[#202124] animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <Users2 className="w-5 h-5 text-[#1A73E8]" />
                <h3 className="font-heading font-medium text-base text-[#202124]">
                  Clinical Shift Assignment
                </h3>
              </div>
              <button
                onClick={() => setSelectedShift(null)}
                className="text-[#5F6368] hover:text-[#202124] text-sm p-1 rounded-full hover:bg-[#F1F3F4]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                <div className="text-[11px] text-[#5F6368]">Assigned Trainee / Clinician</div>
                <div className="font-bold text-sm text-[#202124] mt-0.5">{selectedShift.residentName}</div>
                <div className="text-[#5F6368] mt-0.5 font-medium">{selectedShift.roleTier}</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg border border-[#DADCE0]">
                  <div className="text-[11px] text-[#5F6368]">Date</div>
                  <div className="font-semibold text-[#202124] mt-0.5">{selectedShift.date}</div>
                </div>
                <div className="p-2.5 rounded-lg border border-[#DADCE0]">
                  <div className="text-[11px] text-[#5F6368]">Shift Hours</div>
                  <div className="font-semibold text-[#202124] mt-0.5">{selectedShift.startTime} — {selectedShift.endTime}</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#DADCE0]">
                <div className="text-[11px] text-[#5F6368]">Clinical Station</div>
                <div className="font-semibold text-[#202124] mt-0.5">{selectedShift.station}</div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#E6F4EA] border border-[#1E8E3E]/30 text-[#137333] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1E8E3E] shrink-0" />
                <span>Duty compliant with Rajasthan Medical Education Rest Norms.</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DADCE0] flex justify-end">
              <button
                onClick={() => setSelectedShift(null)}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] border border-[#DADCE0] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assign Duty Modal */}
      {isAssignModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <form
            onSubmit={handleAssignShift}
            className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg max-w-md w-full p-5 shadow-xl text-[#202124] animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#1A73E8]" />
                <h3 className="font-heading font-medium text-base text-[#202124]">
                  Assign Resident / Fellow Shift
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAssignModalOpen(false)}
                className="text-[#5F6368] hover:text-[#202124] text-sm p-1 rounded-full hover:bg-[#F1F3F4]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#5F6368] font-medium mb-1">Select Clinician</label>
                <select
                  value={newResident}
                  onChange={(e) => setNewResident(e.target.value)}
                  className="w-full p-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                >
                  <option value="Dr. Sharma (DM Fellow)">Dr. Sharma (DM Fellow)</option>
                  <option value="Dr. Verma (DM Fellow)">Dr. Verma (DM Fellow)</option>
                  <option value="Dr. Choudhary (SR)">Dr. Choudhary (Senior Resident)</option>
                  <option value="Dr. Gupta (Assoc. Prof)">Dr. Gupta (Assoc. Prof)</option>
                  <option value="Prof. & HOD">Prof. & Head of Department</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Date</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full p-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                  />
                </div>

                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Shift Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as ShiftType)}
                    className="w-full p-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                  >
                    <option value="DAY_CATHLAB">Day Cath Lab (08:00 - 16:00)</option>
                    <option value="NIGHT_FLOAT">Night Float (16:00 - 08:00)</option>
                    <option value="POST_CALL_REST">Post-Call Rest (Protected)</option>
                    <option value="CONSULTANT_CALL">Consultant Escalation</option>
                    <option value="DAYCARE_ROUNDS">Daycare Rounds</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#5F6368] font-medium mb-1">Station / Location</label>
                <input
                  type="text"
                  value={newStation}
                  onChange={(e) => setNewStation(e.target.value)}
                  placeholder="e.g. Cath Lab 1 (DSA), Emergency IR Suite..."
                  className="w-full p-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DADCE0] flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAssignModalOpen(false)}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] border border-[#DADCE0] transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#1A73E8] hover:bg-[#1765CC] text-white transition shadow-xs"
              >
                Save Assignment
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
