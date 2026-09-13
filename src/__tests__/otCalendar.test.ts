import { describe, it, expect } from 'vitest';
import { RAJASTHAN_HOLIDAYS_2026, isHolidayOrSunday, getHolidayDetails } from '../data/holidays2026';

describe('Rajasthan 2026 Gazetted Holidays & Scheduler Conflict Engine', () => {
  it('contains exactly 33 gazetted holidays for calendar year 2026', () => {
    expect(RAJASTHAN_HOLIDAYS_2026.length).toBe(33);
    RAJASTHAN_HOLIDAYS_2026.forEach((h) => {
      expect(h.date).toMatch(/^2026-\d{2}-\d{2}$/);
      expect(h.nameEn).toBeTruthy();
      expect(h.type).toBe('Gazetted');
      expect(h.day).toBeTruthy();
    });
  });

  it('correctly identifies Republic Day (2026-01-26) as Gazetted Holiday', () => {
    const check = isHolidayOrSunday('2026-01-26');
    expect(check.isBlocked).toBe(true);
    expect(check.holidayName).toBe('Republic Day');
    expect(check.reason).toContain('Official Rajasthan Gazetted Holiday: Republic Day');
  });

  it('correctly identifies Independence Day (2026-08-15) as Gazetted Holiday', () => {
    const check = isHolidayOrSunday('2026-08-15');
    expect(check.isBlocked).toBe(true);
    expect(check.holidayName).toBe('Independence Day');
    expect(check.reason).toContain('Independence Day');
  });

  it('correctly flags weekly Sunday hospital closure for elective procedures', () => {
    // 2026-02-01 is a Sunday
    const sundayCheck = isHolidayOrSunday('2026-02-01');
    expect(sundayCheck.isBlocked).toBe(true);
    expect(sundayCheck.isSunday).toBe(true);
    expect(sundayCheck.reason).toContain('Sunday (Weekly Hospital Holiday for Elective Procedures)');
  });

  it('permits elective scheduling on regular working days', () => {
    // 2026-02-03 is Tuesday (not a holiday, not a Sunday)
    const workDay = isHolidayOrSunday('2026-02-03');
    expect(workDay.isBlocked).toBe(false);
    expect(workDay.isSunday).toBe(false);
    expect(workDay.holidayName).toBeNull();
    expect(workDay.reason).toBeNull();
  });

  it('provides detailed holiday metadata via getHolidayDetails', () => {
    const details = getHolidayDetails('2026-10-02');
    expect(details).toBeDefined();
    expect(details?.nameEn).toBe('Mahatma Gandhi Jayanti');
    expect(details?.day).toBe('Friday');
  });

  it('safely handles empty or null date strings without throwing', () => {
    const emptyCheck = isHolidayOrSunday('');
    expect(emptyCheck.isBlocked).toBe(false);
    expect(emptyCheck.holidayName).toBeNull();
  });
});
