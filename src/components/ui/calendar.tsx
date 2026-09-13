import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export interface CalendarProps {
  className?: string;
  classNames?: Record<string, string>;
  selected?: Date | string | null;
  onSelect?: (date: Date) => void;
  month?: Date;
  onMonthChange?: (month: Date) => void;
  disabled?: (date: Date) => boolean;
  modifiers?: {
    holiday?: (date: Date) => boolean;
    sunday?: (date: Date) => boolean;
    booked?: (date: Date) => boolean;
    emergency?: (date: Date) => boolean;
    [key: string]: ((date: Date) => boolean) | undefined;
  };
  modifiersClassNames?: Record<string, string>;
  renderDayBadge?: (date: Date, dateStr: string) => React.ReactNode;
  renderDayFooter?: (date: Date, dateStr: string) => React.ReactNode;
  minDate?: Date;
  maxDate?: Date;
}

/**
 * Shadcn UI Calendar Component
 * High-performance, zero-dependency clinical calendar primitive with
 * full support for dark mode, accessibility, custom day badges, and holiday modifiers.
 */
export function Calendar({
  className,
  classNames,
  selected,
  onSelect,
  month: controlledMonth,
  onMonthChange,
  disabled,
  modifiers = {},
  modifiersClassNames = {},
  renderDayBadge,
  renderDayFooter,
}: CalendarProps) {
  const [internalMonth, setInternalMonth] = React.useState<Date>(() => {
    if (controlledMonth) return controlledMonth;
    if (selected) return typeof selected === 'string' ? new Date(selected) : selected;
    return new Date(2026, 0, 1); // Default to start of 2026
  });

  const currentMonth = controlledMonth || internalMonth;

  const handleMonthChange = (newMonth: Date) => {
    if (onMonthChange) {
      onMonthChange(newMonth);
    } else {
      setInternalMonth(newMonth);
    }
  };

  const prevMonth = () => {
    const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    handleMonthChange(prev);
  };

  const nextMonth = () => {
    const next = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    handleMonthChange(next);
  };

  const year = currentMonth.getFullYear();
  const monthIdx = currentMonth.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const firstDayOfWeek = new Date(year, monthIdx, 1).getDay();
  const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();

  const selectedDateStr = selected
    ? typeof selected === 'string'
      ? selected
      : `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, '0')}-${String(selected.getDate()).padStart(2, '0')}`
    : null;

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className={cn('p-3 bg-cathlab-card border border-cathlab-border rounded-xl text-slate-100 shadow-sm select-none', className)}>
      {/* Month & Year Navigation Header */}
      <div className={cn('flex items-center justify-between pb-3 border-b border-cathlab-border', classNames?.nav)}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-slate-100 font-mono tracking-tight">
            {monthNames[monthIdx]} {year}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={prevMonth}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon' }),
              'h-7 w-7 rounded-lg border-cathlab-border bg-cathlab-dark hover:bg-cathlab-elevated text-slate-300 hover:text-white'
            )}
            aria-label="Previous month"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={nextMonth}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon' }),
              'h-7 w-7 rounded-lg border-cathlab-border bg-cathlab-dark hover:bg-cathlab-elevated text-slate-300 hover:text-white'
            )}
            aria-label="Next month"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Weekday Labels (Sun to Sat) */}
      <div className="grid grid-cols-7 gap-1 text-center font-mono font-bold text-[11px] text-slate-400 py-2 border-b border-cathlab-border/40">
        {weekDays.map((wd, i) => (
          <div key={wd} className={cn('py-0.5', i === 0 ? 'text-amber-400' : 'text-slate-400')}>
            {wd}
          </div>
        ))}
      </div>

      {/* Day Cells Grid */}
      <div className="grid grid-cols-7 gap-1 pt-2">
        {/* Leading empty cells */}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div
            key={`blank-${i}`}
            className="min-h-[44px] rounded-lg bg-cathlab-dark/20 border border-transparent"
          />
        ))}

        {/* Days of the month */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const dateObj = new Date(year, monthIdx, dayNum);
          const dateStr = `${year}-${String(monthIdx + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;

          const isSelected = selectedDateStr === dateStr;
          const isToday = todayStr === dateStr;
          const isDisabled = disabled ? disabled(dateObj) : false;

          const isSunday = modifiers.sunday ? modifiers.sunday(dateObj) : dateObj.getDay() === 0;
          const isHoliday = modifiers.holiday ? modifiers.holiday(dateObj) : false;
          const hasBookings = modifiers.booked ? modifiers.booked(dateObj) : false;
          const isEmergency = modifiers.emergency ? modifiers.emergency(dateObj) : false;

          return (
            <button
              key={dateStr}
              type="button"
              disabled={isDisabled}
              onClick={() => onSelect && onSelect(dateObj)}
              className={cn(
                'min-h-[64px] p-1.5 rounded-lg border text-left flex flex-col justify-between transition-all relative font-sans group',
                isSelected
                  ? 'border-crimson bg-crimson/10 ring-1 ring-crimson text-white shadow-sm'
                  : isHoliday
                  ? 'bg-red-950/30 border-red-900/50 hover:border-red-700 text-slate-200'
                  : isSunday
                  ? 'bg-amber-950/20 border-amber-900/40 hover:border-amber-700 text-slate-200'
                  : 'bg-cathlab-dark/80 border-cathlab-border hover:border-slate-500 text-slate-300',
                isToday && !isSelected && 'ring-1 ring-slate-600',
                isDisabled && 'opacity-40 cursor-not-allowed',
                modifiersClassNames[isHoliday ? 'holiday' : isSunday ? 'sunday' : '']
              )}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={cn(
                    'font-mono text-xs font-bold leading-none',
                    isSelected
                      ? 'text-white'
                      : isHoliday
                      ? 'text-red-400'
                      : isSunday
                      ? 'text-amber-400'
                      : 'text-slate-200'
                  )}
                >
                  {dayNum}
                </span>

                {isToday && (
                  <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                    Today
                  </span>
                )}
              </div>

              {renderDayBadge && renderDayBadge(dateObj, dateStr)}

              {renderDayFooter && (
                <div className="w-full mt-1">
                  {renderDayFooter(dateObj, dateStr)}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

Calendar.displayName = 'Calendar';
