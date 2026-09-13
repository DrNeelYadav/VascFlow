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

import { EXTENSIVE_IR_PROCEDURES } from '../data/procedures';

describe('Extensive Interventional Radiology Procedures Library (250+ Target)', () => {
  it('contains at least 250 procedures (actual 290)', () => {
    expect(EXTENSIVE_IR_PROCEDURES.length).toBeGreaterThanOrEqual(250);
    expect(EXTENSIVE_IR_PROCEDURES.length).toBe(290);
  });

  it('guarantees unique IDs across all 290 procedures', () => {
    const ids = EXTENSIVE_IR_PROCEDURES.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(EXTENSIVE_IR_PROCEDURES.length);
  });

  it('includes core rare syndromes and vascular compression procedures', () => {
    const procedureNames = EXTENSIVE_IR_PROCEDURES.map((p) => p.name.toLowerCase());
    expect(procedureNames.some((n) => n.includes('budd-chiari'))).toBe(true);
    expect(procedureNames.some((n) => n.includes('may-thurner'))).toBe(true);
    expect(procedureNames.some((n) => n.includes('nutcracker'))).toBe(true);
    expect(procedureNames.some((n) => n.includes('fistula') || n.includes('fistuloplasty'))).toBe(true);
    expect(procedureNames.some((n) => n.includes('klippel-trenaunay'))).toBe(true);
  });

  it('verifies clinical blueprint schema for every procedure', () => {
    EXTENSIVE_IR_PROCEDURES.forEach((proc) => {
      expect(proc.id).toBeTruthy();
      expect(proc.name).toBeTruthy();
      expect(proc.category).toBeTruthy();
      expect(proc.code).toBeTruthy();
      expect(proc.icd10).toBeTruthy();
      expect(Array.isArray(proc.indications)).toBe(true);
      expect(proc.indications.length).toBeGreaterThan(0);
      expect(Array.isArray(proc.hardware)).toBe(true);
      expect(proc.hardware.length).toBeGreaterThan(0);
      expect(Array.isArray(proc.techniqueSteps)).toBe(true);
      expect(proc.techniqueSteps.length).toBeGreaterThan(0);
      expect(proc.maayTariffInr).toBeGreaterThan(0);
    });
  });
});

