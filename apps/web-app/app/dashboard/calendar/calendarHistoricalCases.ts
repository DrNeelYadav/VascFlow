import { BookedCaseRecord } from "../useEndoflowStore";
import { GOLD_STANDARD_1090_CASES } from "../../lib/realData/goldStandard1090Cases";

/**
 * Normalizes ground-truth procedure date strings from the 1,090 master registry
 * into standard ISO YYYY-MM-DD format for calendar day-by-day mapping.
 */
function parseCaseProcedureDate(rawDate?: string): string | null {
  if (!rawDate) return null;
  const cleaned = rawDate.trim().replace(/,/g, ".");
  const match = cleaned.match(/(\d{1,4})[./-](\d{1,2})[./-](\d{2,4})/);
  if (!match) return null;
  const [, p0, p1, p2] = match;
  let yyyy: string;
  let mm: string;
  let dd: string;
  if (p0.length === 4) {
    yyyy = p0;
    mm = p1.padStart(2, "0");
    dd = p2.padStart(2, "0");
  } else if (p2.length === 4) {
    dd = p0.padStart(2, "0");
    mm = p1.padStart(2, "0");
    yyyy = p2;
  } else if (p2.length === 2 || p2.length === 3) {
    dd = p0.padStart(2, "0");
    mm = p1.padStart(2, "0");
    yyyy = `20${p2.slice(-2)}`;
  } else {
    return null;
  }
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Builds the complete multi-year calendar map of all 1,090 authentic surgical cases
 * performed in the SMS Hospital IR Angiosuites (2022 - 2026).
 */
export function getHistoricalCasesMap(): Map<string, BookedCaseRecord[]> {
  const map = new Map<string, BookedCaseRecord[]>();

  GOLD_STANDARD_1090_CASES.forEach((rc, idx) => {
    const yyyyMmDd = parseCaseProcedureDate(rc.date);
    if (!yyyyMmDd) return;

    const record: BookedCaseRecord = {
      id: `HIST-${rc.dsaNo || idx + 1}`,
      patientName: rc.patientName,
      age: typeof rc.age === "number" ? rc.age : parseInt(String(rc.age), 10) || 0,
      sex: rc.gender === "Female" ? "Female" : "Male",
      contactNumber: "",
      ssoNumber: rc.crNumber || `SMS-DSA-${rc.dsaNo || idx + 1}`,
      location: rc.unit || "Old Gastro IR Ward",
      scheduledDate: yyyyMmDd,
      organSystem: "Cath-Lab Interventional Radiology",
      diseaseKey: "vascular",
      procedureTitle: rc.procedureName || "IR Cath-Lab Procedure",
      urgency: "Elective",
      bookedBy: rc.primaryOperator || "SMS IR Cath-Lab",
      bookedAt: `${yyyyMmDd}T09:00:00.000Z`,
      orderedLabs: [],
      specialInvestigations: [],
      preScanAnatomy: {},
      hardwareChecklist: [],
      postOpPlan: rc.diagnosis ? `Diagnosis: ${rc.diagnosis}` : "Routine post-procedural monitoring.",
      status: "Completed",
      npoVerified: true,
      labsVerified: true,
      bloodProductsVerified: true,
      hardwareVerified: true,
      screenedBy: "SMS IR Team",
      screenedAt: `${yyyyMmDd}T09:00:00.000Z`,
      keptForTomorrow: false,
      admissionCardUpdated: true,
      codeAdditionStatus: "Verified",
      rescheduleHistory: [],
    };

    const existing = map.get(yyyyMmDd) || [];
    existing.push(record);
    map.set(yyyyMmDd, existing);
  });

  return map;
}
