import { BookedCaseRecord } from "../useEndoflowStore";
import { REAL_SMS_PATIENT_REGISTRY, normalizeSmsCathLabDate } from "../../lib/realData/smsCathLabRealData";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../lib/realData/smsMasterAnalysisCases";

export function getHistoricalCasesMap(): Map<string, BookedCaseRecord[]> {
  const map = new Map<string, BookedCaseRecord[]>();
  REAL_SMS_PATIENT_REGISTRY.forEach((rc, idx) => {
    const normDate = normalizeSmsCathLabDate(rc.date);
    const parts = normDate.split(".");
    if (parts.length === 3) {
      const yyyyMmDd = `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
      const record: BookedCaseRecord = {
        id: `HIST-${rc.dsaNo || idx}`,
        patientName: rc.patientName,
        age: rc.age,
        sex: rc.gender,
        contactNumber: "",
        ssoNumber: `SMS-DSA-${rc.dsaNo || rc.crNumber?.slice(-4) || idx}`,
        location: "Old Gastro IR Ward",
        scheduledDate: yyyyMmDd,
        organSystem: rc.unit || "Cath-Lab Intervention",
        diseaseKey: "vascular",
        procedureTitle: rc.procedureName,
        urgency: "Elective",
        bookedBy: "Cath-Lab Logbook Registry",
        bookedAt: `${yyyyMmDd}T09:00:00.000Z`,
        orderedLabs: [],
        specialInvestigations: [],
        preScanAnatomy: {},
        hardwareChecklist: [],
        postOpPlan: "Routine post-procedural monitoring.",
        status: "Completed",
        npoVerified: true,
        labsVerified: true,
        bloodProductsVerified: true,
        hardwareVerified: true,
        screenedBy: "Faculty Cath-Lab Staff",
        screenedAt: `${yyyyMmDd}T09:00:00.000Z`,
        keptForTomorrow: false,
        admissionCardUpdated: true,
        codeAdditionStatus: "Verified",
        rescheduleHistory: [],
      };
      const existing = map.get(yyyyMmDd) || [];
      existing.push(record);
      map.set(yyyyMmDd, existing);
    }
  });

  AUTHENTIC_SMS_MASTER_CASES.forEach((rc, idx) => {
    const normDate = normalizeSmsCathLabDate(rc.date);
    const yyyyMmDd = normDate
      ? `${normDate.split(".")[2]}-${normDate.split(".")[1]}-${normDate.split(".")[0]}`
      : "";
    if (yyyyMmDd && yyyyMmDd.startsWith("2026")) {
      const record: BookedCaseRecord = {
        id: `AUTH-2026-${rc.dsaNo || idx}`,
        patientName: rc.patientName,
        age: typeof rc.age === "number" ? rc.age : parseInt(String(rc.age)) || 0,
        sex: rc.gender === "Female" ? "Female" : "Male",
        contactNumber: "",
        ssoNumber: rc.crNumber || `SMS-DSA-${rc.dsaNo || idx}`,
        location: rc.unit || "Old Gastro IR Ward",
        scheduledDate: yyyyMmDd,
        organSystem: "Cath-Lab Interventional Radiology",
        diseaseKey: "vascular",
        procedureTitle: rc.procedureName,
        urgency: "Elective",
        bookedBy: "SMS IR Cath-Lab",
        bookedAt: `${yyyyMmDd}T09:00:00.000Z`,
        orderedLabs: [],
        specialInvestigations: [],
        preScanAnatomy: {},
        hardwareChecklist: [],
        postOpPlan: "",
        status: "Completed",
        npoVerified: true,
        labsVerified: true,
        bloodProductsVerified: true,
        hardwareVerified: true,
        screenedBy: "SMS IR Cath-Lab",
        screenedAt: `${yyyyMmDd}T09:00:00.000Z`,
        keptForTomorrow: false,
        admissionCardUpdated: true,
        codeAdditionStatus: "Verified",
        rescheduleHistory: [],
      };
      const existing = map.get(yyyyMmDd) || [];
      if (!existing.some((e) => e.patientName.toLowerCase() === record.patientName.toLowerCase() && e.scheduledDate === record.scheduledDate)) {
        existing.push(record);
      }
      map.set(yyyyMmDd, existing);
    }
  });

  return map;
}
