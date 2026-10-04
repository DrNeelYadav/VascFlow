import { getHolidayForDate } from "../../lib/rajasthanHolidays2026";

export interface BumpTargetCase {
  id: string;
  patientName: string;
  crNumber?: string;
  procedureTitle: string;
  scheduledDate: string;
  room?: string;
}

export const CLINICAL_BUMP_REASONS = [
  { id: "coagulopathy", label: "Severe Coagulopathy (INR > 1.8 / Plt < 50k)", severity: "high" },
  { id: "fever_sepsis", label: "Active Febrile Episode / Sepsis (Temp > 101°F)", severity: "high" },
  { id: "stat_displacement", label: "Displaced by Emergent STAT Angiosuite Case", severity: "urgent" },
  { id: "hemodynamic_instability", label: "Hemodynamic Instability / Shock", severity: "high" },
  { id: "npo_breach", label: "NPO Protocol Breach (Patient Fed Within 6h)", severity: "moderate" },
  { id: "elective_request", label: "Elective Postponement / Patient Request", severity: "routine" },
];

export function calculateNextAvailableOtDate(fromDateStr: string): string {
  const [y, m, d] = fromDateStr.split("-").map(Number);
  const cur = new Date(y, m - 1, d);

  for (let i = 1; i <= 14; i++) {
    const next = new Date(cur);
    next.setDate(cur.getDate() + i);
    const dayOfWeek = next.getDay();
    if (dayOfWeek === 0) continue; // Skip Sunday

    const isoStr = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}-${String(next.getDate()).padStart(2, "0")}`;
    const holiday = getHolidayForDate(isoStr);
    if (!holiday.isHoliday || holiday.type !== "Gazetted") {
      return isoStr;
    }
  }

  const fallback = new Date();
  fallback.setDate(fallback.getDate() + 1);
  return fallback.toISOString().slice(0, 10);
}
