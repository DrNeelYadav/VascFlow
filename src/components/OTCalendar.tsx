import React, { useState, useMemo } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  ShieldAlert,
  Clock,
  User,
  Plus,
  Search,
  CheckCircle2,
  Info,
  X,
  Send,
  CalendarCheck,
  CalendarX,
  Building2,
  Stethoscope,
  FileSpreadsheet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { RAJASTHAN_HOLIDAYS_2026, isHolidayOrSunday, getHolidayDetails } from '../data/holidays2026';
import { useClinicalStore } from '../stores/useClinicalStore';
import { BookingSlot, GazettedHoliday } from '../types/clinical';
import { cn, formatDate } from '../lib/utils';

export interface OTCalendarProps {
  selectedDate?: string;
  onSelectDate?: (dateStr: string, isBlocked: boolean, reason: string | null) => void;
  onBookCase?: (dateStr: string, isEmergency: boolean) => void;
  className?: string;
}

export interface ConflictState {
  date: string;
  reason: string;
  isSunday: boolean;
  holidayName: string | null;
}

/**
 * Safe local date helper to avoid UTC timezone day-shift
 */
function parseDateParts(dateString: string): { year: number; month: number; day: number } {
  const parts = dateString.split('-').map(Number);
  return {
    year: parts[0] || 2026,
    month: (parts[1] || 1) - 1,
    day: parts[2] || 1
  };
}

/**
 * OTCalendar Component
 * Integrates Shadcn UI styling with Rajasthan 2026 Gazetted Holidays matrix
 * and real-time Cath Lab elective scheduler conflict prevention engine.
 */
export const OTCalendar: React.FC<OTCalendarProps> = ({
  selectedDate: externalSelectedDate,
  onSelectDate,
  onBookCase,
  className
}) => {
  const bookings = useClinicalStore((s) => s.bookings);
  const toggleCompleted = useClinicalStore((s) => s.toggleCompletedStatus);
  const toggleD1Call = useClinicalStore((s) => s.toggleD1Call);

  // Calendar display state (defaults to November 2026 or current active date)
  const [activeDate, setActiveDate] = useState<Date>(() => {
    if (externalSelectedDate) {
      const { year, month, day } = parseDateParts(externalSelectedDate);
      return new Date(year, month, day);
    }
    return new Date(2026, 10, 1); // November 2026 (Diwali / Peak procedures)
  });

  const [selectedDateStr, setSelectedDateStr] = useState<string>(() => {
    if (externalSelectedDate) return externalSelectedDate;
    return '2026-11-09'; // Default demonstration date
  });

  // Conflict modal state
  const [conflict, setConflict] = useState<ConflictState | null>(null);

  // Set of dates authorized via clinical emergency override
  const [authorizedOverrides, setAuthorizedOverrides] = useState<Set<string>>(new Set());

  // Holiday Directory Drawer / Dialog
  const [isHolidayDirectoryOpen, setIsHolidayDirectoryOpen] = useState(false);

  // Filter for holiday quick-view
  const [holidayFilter, setHolidayFilter] = useState('');

  // Conflict evaluation helper
  const evaluateDateConflict = (dateStr: string): ConflictState => {
    const check = isHolidayOrSunday(dateStr);
    return {
      date: dateStr,
      reason: check.reason || 'Operating Day Available',
      isSunday: check.isSunday,
      holidayName: check.holidayName
    };
  };

  // Handle cell click on calendar
  const handleDateClick = (dateObj: Date) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    const conflictInfo = evaluateDateConflict(dateStr);
    const hasOverride = authorizedOverrides.has(dateStr);

    if ((conflictInfo.isSunday || conflictInfo.holidayName) && !hasOverride) {
      // Trigger conflict modal
      setConflict(conflictInfo);
    } else {
      setSelectedDateStr(dateStr);
      if (onSelectDate) {
        onSelectDate(dateStr, false, null);
      }
    }
  };

  // Authorize emergency override
  const handleAuthorizeOverride = () => {
    if (!conflict) return;
    const overrideDate = conflict.date;
    setAuthorizedOverrides((prev) => new Set(prev).add(overrideDate));
    setSelectedDateStr(overrideDate);
    setConflict(null);

    if (onSelectDate) {
      onSelectDate(overrideDate, false, `Emergency Override: ${conflict.reason}`);
    }
  };

  // Bookings for selected date
  const selectedDateBookings = useMemo(() => {
    return bookings.filter((b) => b.targetDate === selectedDateStr);
  }, [bookings, selectedDateStr]);

  // Statistics for current visible month
  const monthStats = useMemo(() => {
    const year = activeDate.getFullYear();
    const month = activeDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let holidaysCount = 0;
    let sundaysCount = 0;
    let bookedCasesInMonth = 0;

    for (let d = 1; d <= daysInMonth; d++) {
      const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const check = isHolidayOrSunday(dStr);
      if (check.holidayName) holidaysCount++;
      else if (check.isSunday) sundaysCount++;

      const count = bookings.filter((b) => b.targetDate === dStr).length;
      bookedCasesInMonth += count;
    }

    const workingDays = daysInMonth - holidaysCount - sundaysCount;

    return {
      year,
      month,
      daysInMonth,
      holidaysCount,
      sundaysCount,
      workingDays,
      bookedCasesInMonth
    };
  }, [activeDate, bookings]);

  // Selected date metadata
  const selectedDateMetadata = useMemo(() => {
    const check = evaluateDateConflict(selectedDateStr);
    const isOverridden = authorizedOverrides.has(selectedDateStr);
    const holiday = getHolidayDetails(selectedDateStr);

    return {
      dateStr: selectedDateStr,
      formatted: formatDate(selectedDateStr),
      isBlocked: (check.isSunday || !!check.holidayName) && !isOverridden,
      isSunday: check.isSunday,
      holidayName: check.holidayName || holiday?.nameEn || null,
      isEmergencyOverridden: isOverridden,
      reason: check.reason
    };
  }, [selectedDateStr, authorizedOverrides]);

  // WhatsApp reminder handler
  const handleSendWhatsAppReminder = (slot: BookingSlot) => {
    let cleanPhone = (slot.phone || '').replace(/\D/g, '');
    if (cleanPhone.length === 10) cleanPhone = '91' + cleanPhone;
    if (!cleanPhone) {
      alert(`No valid telephone contact registered for ${slot.patientName}.`);
      return;
    }

    const message = `SMS MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
Department of Radiodiagnosis & Interventional Radiology
--------------------------------------------------
PATIENT FASTING & OPERATING THEATRE ADVISORY

Dear ${slot.patientName},
Your Interventional Radiology procedure (${slot.procedureName}) is scheduled on ${slot.targetDate} (${slot.slotTime}) at the SMS Hospital Angio Suite.

CRITICAL PRE-OPERATIVE INSTRUCTIONS:
1. Strict Fasting: Nil by mouth after 12:00 Midnight (no water, tea, or food).
2. Government Scheme: Bring original MAAY / Chiranjeevi / RGHS & Aadhaar Card.
3. Diagnostic Records: Bring all prior CT, MRI, Ultrasound films, and blood investigations (CBC, PT/INR, LFT, Serum Creatinine).
4. Reporting Time: 08:00 AM sharp at IR Day Care / Angio Suite, Bangur Building, SMS Hospital, Jaipur.

Department Contact: Resident Doctor on Duty, IR Angio Suite.
--------------------------------------------------`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    toggleD1Call(slot.id);
  };

  // Jump to specific holiday in calendar
  const jumpToHoliday = (holidayDate: string) => {
    const { year, month, day } = parseDateParts(holidayDate);
    setActiveDate(new Date(year, month, day));
    setSelectedDateStr(holidayDate);
    setIsHolidayDirectoryOpen(false);
  };

  const filteredHolidays = useMemo(() => {
    if (!holidayFilter) return RAJASTHAN_HOLIDAYS_2026;
    const q = holidayFilter.toLowerCase();
    return RAJASTHAN_HOLIDAYS_2026.filter(
      (h) => h.nameEn.toLowerCase().includes(q) || h.date.includes(q) || h.day.toLowerCase().includes(q)
    );
  }, [holidayFilter]);

  return (
    <div className={cn('space-y-4 font-sans select-none', className)}>
      {/* Top Banner & Control Bar */}
      <div className="bg-cathlab-card border border-cathlab-border rounded-xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-crimson/10 border border-crimson/30 text-crimson">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <span>Angio OT Procedural Suite & Rajasthan 2026 Holiday Schedule</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-time Gazetted Holiday conflict engine • Sunday elective procedure closure • Cath Lab capacity docket
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsHolidayDirectoryOpen(true)}
            className="border-slate-700 bg-cathlab-dark hover:bg-cathlab-elevated text-slate-200 text-xs flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-red-400" />
            <span>2026 Holiday Matrix ({RAJASTHAN_HOLIDAYS_2026.length})</span>
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => {
              if (onBookCase) {
                onBookCase(selectedDateStr, selectedDateMetadata.isEmergencyOverridden);
              }
            }}
            className="bg-crimson hover:bg-crimson-dark text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Book Case for Selected Date</span>
          </Button>
        </div>
      </div>

      {/* Main Grid: Calendar Matrix (7 cols on lg) and Selected Date Docket (5 cols on lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Shadcn-Based Monthly Calendar with Holiday Badging */}
        <div className="lg:col-span-7 bg-cathlab-card border border-cathlab-border rounded-2xl p-4 shadow-sm space-y-4">
          {/* Header Stats Bar */}
          <div className="grid grid-cols-4 gap-2 text-center pb-2 border-b border-cathlab-border text-xs font-mono">
            <div className="p-2 rounded-lg bg-cathlab-dark/60 border border-cathlab-border/60">
              <div className="text-[10px] text-slate-400">Working Days</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">{monthStats.workingDays}</div>
            </div>
            <div className="p-2 rounded-lg bg-red-950/20 border border-red-900/30">
              <div className="text-[10px] text-red-300">Gazetted Holidays</div>
              <div className="text-sm font-bold text-red-400 mt-0.5">{monthStats.holidaysCount}</div>
            </div>
            <div className="p-2 rounded-lg bg-amber-950/20 border border-amber-900/30">
              <div className="text-[10px] text-amber-300">Sundays (Closure)</div>
              <div className="text-sm font-bold text-amber-400 mt-0.5">{monthStats.sundaysCount}</div>
            </div>
            <div className="p-2 rounded-lg bg-cathlab-dark/60 border border-cathlab-border/60">
              <div className="text-[10px] text-slate-400">Scheduled Cases</div>
              <div className="text-sm font-bold text-slate-100 mt-0.5">{monthStats.bookedCasesInMonth}</div>
            </div>
          </div>

          {/* Core Calendar Component */}
          <Calendar
            month={activeDate}
            onMonthChange={(newMonth) => setActiveDate(newMonth)}
            selected={selectedDateStr}
            onSelect={handleDateClick}
            modifiers={{
              holiday: (date) => {
                const dStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                return !!getHolidayDetails(dStr);
              },
              sunday: (date) => date.getDay() === 0,
              booked: (date) => {
                const dStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                return bookings.some((b) => b.targetDate === dStr);
              }
            }}
            renderDayBadge={(date, dateStr) => {
              const holiday = getHolidayDetails(dateStr);
              const isSunday = date.getDay() === 0;
              const hasOverride = authorizedOverrides.has(dateStr);

              if (holiday) {
                return (
                  <div className="flex flex-col items-start gap-0.5 mt-0.5">
                    <span
                      className="text-[9px] px-1 py-0.2 rounded bg-red-900/80 text-red-200 border border-red-700 font-semibold truncate max-w-[65px]"
                      title={`Official Rajasthan Gazetted Holiday: ${holiday.nameEn}`}
                    >
                      {holiday.nameEn.split(' ')[0]}
                    </span>
                    {hasOverride && (
                      <span className="text-[8px] px-1 rounded bg-amber-900/90 text-amber-200 font-mono font-bold">
                        Override
                      </span>
                    )}
                  </div>
                );
              }

              if (isSunday) {
                return (
                  <div className="flex flex-col items-start gap-0.5 mt-0.5">
                    <span className="text-[9px] px-1 py-0.2 rounded bg-amber-950 text-amber-300 border border-amber-800/80 font-medium">
                      Sunday
                    </span>
                    {hasOverride && (
                      <span className="text-[8px] px-1 rounded bg-amber-900/90 text-amber-200 font-mono font-bold">
                        Override
                      </span>
                    )}
                  </div>
                );
              }

              return null;
            }}
            renderDayFooter={(_, dateStr) => {
              const dayBookings = bookings.filter((b) => b.targetDate === dateStr);
              if (dayBookings.length === 0) return null;

              return (
                <div className="space-y-0.5 overflow-hidden">
                  {dayBookings.slice(0, 2).map((slot) => (
                    <div
                      key={slot.id}
                      className={cn(
                        'text-[9px] px-1 py-0.2 rounded font-mono truncate font-medium',
                        slot.isEmergency
                          ? 'bg-red-950 text-red-200 border border-red-700'
                          : slot.status === 'Completed'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-slate-800 text-slate-200 border border-slate-700'
                      )}
                      title={`${slot.patientName} (${slot.procedureName})`}
                    >
                      {slot.patientName.split(' ')[0]} ({slot.procedureCode.split('-')[0]})
                    </div>
                  ))}
                  {dayBookings.length > 2 && (
                    <div className="text-[9px] text-slate-400 font-mono font-semibold text-center">
                      +{dayBookings.length - 2} more
                    </div>
                  )}
                </div>
              );
            }}
          />

          {/* Visual Legend Key */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-cathlab-border text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-cathlab-dark border border-cathlab-border" />
              <span>Standard Operating Day</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-red-950 border border-red-700" />
              <span className="text-red-300">Gazetted Holiday (Elective Block)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-amber-950 border border-amber-700" />
              <span className="text-amber-300">Sunday (Weekly Closure)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-crimson/30 border border-crimson" />
              <span className="text-white">Selected Date</span>
            </div>
          </div>
        </div>

        {/* Right Column: Selected Date Case Docket & Status */}
        <div className="lg:col-span-5 bg-cathlab-card border border-cathlab-border rounded-2xl p-4 shadow-sm flex flex-col space-y-4">
          {/* Selected Date Header */}
          <div className="p-3.5 rounded-xl bg-cathlab-dark border border-cathlab-border space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Selected Operative Date</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 font-bold">
                {selectedDateMetadata.dateStr}
              </span>
            </div>

            <div className="text-sm font-bold text-slate-100 flex items-center justify-between">
              <span>{selectedDateMetadata.formatted}</span>
              {selectedDateMetadata.isEmergencyOverridden && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-900/80 border border-red-700 text-red-200 font-bold flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-red-300" />
                  <span>Emergency Override Active</span>
                </span>
              )}
            </div>

            {/* Operating Day Status Banner */}
            {selectedDateMetadata.holidayName ? (
              <div className="p-2 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Official Gazetted Holiday: </span>
                  <span>{selectedDateMetadata.holidayName}</span>
                  <div className="text-[11px] text-red-300 mt-0.5">
                    Elective scheduling blocked. Emergency procedures permitted via faculty authorization.
                  </div>
                </div>
              </div>
            ) : selectedDateMetadata.isSunday ? (
              <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Sunday Weekly Closure</span>
                  <div className="text-[11px] text-amber-300 mt-0.5">
                    Elective suites non-operational. Emergency cases require on-call team mobilization.
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/50 text-xs text-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard Working Day. Cath Lab slots available for elective booking.</span>
              </div>
            )}
          </div>

          {/* Booked Procedures Docket */}
          <div className="flex-1 flex flex-col space-y-2">
            <div className="flex items-center justify-between pb-1 border-b border-cathlab-border">
              <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-crimson" />
                <span>Scheduled Procedures ({selectedDateBookings.length})</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Angio Suite 1 & 2</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[380px] pr-1">
              {selectedDateBookings.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-500 space-y-2">
                  <CalendarCheck className="w-8 h-8 mx-auto text-slate-600 opacity-60" />
                  <div>No procedures scheduled on this date.</div>
                  <div className="text-[11px] text-slate-600">
                    Click &quot;Book Case for Selected Date&quot; to reserve a slot.
                  </div>
                </div>
              ) : (
                selectedDateBookings.map((slot) => {
                  const isCallDone = slot.d1CallCompleted;
                  const isCompleted = slot.status === 'Completed';

                  return (
                    <div
                      key={slot.id}
                      className={cn(
                        'p-3 rounded-xl border text-xs space-y-2 transition',
                        slot.isEmergency
                          ? 'bg-red-950/30 border-red-900/60'
                          : 'bg-cathlab-dark/90 border-cathlab-border'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-bold text-slate-100">
                          <User className="w-3.5 h-3.5 text-crimson-light" />
                          <span>{slot.patientName}</span>
                          <span className="text-[10px] text-slate-400 font-mono">CR: {slot.crNo}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {slot.isEmergency && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-900 text-red-100 border border-red-700 font-bold">
                              Emergency
                            </span>
                          )}
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                            {slot.slotTime}
                          </span>
                        </div>
                      </div>

                      <div className="text-crimson-light font-semibold text-[11px] flex items-center justify-between">
                        <span>{slot.procedureName}</span>
                        <span className="text-[10px] font-mono text-slate-400">{slot.bedNo}</span>
                      </div>

                      <div className="text-[11px] text-slate-400 line-clamp-1">
                        {slot.diagnosis}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center justify-between pt-1 border-t border-cathlab-border/70 text-[11px]">
                        <div className="flex items-center gap-1.5">
                          {slot.phone && (
                            <button
                              type="button"
                              onClick={() => handleSendWhatsAppReminder(slot)}
                              className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 transition font-medium"
                              title="Send WhatsApp D-1 Pre-Op Fasting Instructions"
                            >
                              <Send className="w-3 h-3 text-emerald-400" />
                              <span>WhatsApp D-1</span>
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleD1Call(slot.id)}
                            className={cn(
                              'flex items-center gap-1 px-2 py-1 rounded border transition font-medium',
                              isCallDone
                                ? 'bg-emerald-900/40 border-emerald-700 text-emerald-300'
                                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                            )}
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{isCallDone ? 'Call Confirmed' : 'Mark Call'}</span>
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleCompleted(slot.id)}
                          className={cn(
                            'px-2 py-1 rounded font-semibold text-[10px] border transition',
                            isCompleted
                              ? 'bg-emerald-950 border-emerald-800 text-emerald-300'
                              : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                          )}
                        >
                          {isCompleted ? 'Completed' : 'Complete'}
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Conflict Modal: Official Rajasthan Gazetted Holiday & Sunday Block */}
      <Dialog open={!!conflict} onOpenChange={(open) => !open && setConflict(null)}>
        <DialogContent className="bg-cathlab-card border border-red-800 text-slate-100 max-w-md shadow-2xl">
          <DialogHeader>
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-950 border border-red-800 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <DialogTitle className="text-base font-bold text-slate-100">
                  Operative Schedule Conflict Detected
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-400 mt-1">
                  Selected date: <b className="text-red-400 font-mono">{conflict?.date}</b>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="p-3.5 rounded-xl bg-cathlab-dark border border-cathlab-border text-xs text-slate-300 space-y-2">
            <div>
              <span className="text-slate-400">Institutional Conflict: </span>
              <b className="text-red-300">{conflict?.reason}</b>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Standard elective Angio suite bookings are blocked on official Rajasthan State Gazetted Holidays and Sundays to maintain dedicated emergency capacity for life-threatening vascular events.
            </p>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setConflict(null)}
              className="border-slate-700 bg-cathlab-dark hover:bg-cathlab-elevated text-slate-300 text-xs"
            >
              Choose Alternative Operating Day
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleAuthorizeOverride}
              className="bg-red-800 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Emergency Override (Active Bleed)</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rajasthan 2026 Gazetted Holidays Reference Dialog */}
      <Dialog open={isHolidayDirectoryOpen} onOpenChange={setIsHolidayDirectoryOpen}>
        <DialogContent className="bg-cathlab-card border border-cathlab-border text-slate-100 max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-crimson" />
              <div>
                <DialogTitle className="text-base font-bold text-slate-100">
                  Official Rajasthan Government Gazetted Holidays (Year 2026)
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-400">
                  Official hospital closure schedule for elective surgical and interventional procedures
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="relative my-2">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search holiday name, month, or day of week..."
              value={holidayFilter}
              onChange={(e) => setHolidayFilter(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-cathlab-dark border border-cathlab-border rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-crimson"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 divide-y divide-cathlab-border/40">
            {filteredHolidays.map((holiday) => (
              <div
                key={holiday.date}
                className="pt-2 pb-1.5 flex items-center justify-between text-xs hover:bg-cathlab-dark/60 p-2 rounded-lg transition"
              >
                <div>
                  <div className="font-bold text-slate-200 flex items-center gap-2">
                    <span>{holiday.nameEn}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-950 text-red-300 border border-red-800 font-mono">
                      {holiday.type}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {holiday.date} • {holiday.day}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => jumpToHoliday(holiday.date)}
                  className="h-7 text-[11px] border-slate-700 bg-cathlab-dark hover:bg-cathlab-elevated text-slate-300 hover:text-white"
                >
                  Jump to Date
                </Button>
              </div>
            ))}
          </div>

          <DialogFooter className="pt-2 border-t border-cathlab-border">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsHolidayDirectoryOpen(false)}
              className="border-slate-700 bg-cathlab-dark hover:bg-cathlab-elevated text-slate-300"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

OTCalendar.displayName = 'OTCalendar';
export default OTCalendar;
