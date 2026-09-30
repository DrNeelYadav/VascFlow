import "server-only";

import { auth } from "@/auth";

export type VerifiedStaff = {
  id?: string;
  email?: string | null;
  name?: string | null;
  roleCode?: string;
  roleTier?: string;
  permissions?: string[];
};

export async function getVerifiedStaff(): Promise<VerifiedStaff | null> {
  const session = await auth();
  if (!session?.user || (!session.user.id && !session.user.email)) return null;

  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
    roleCode: session.user.roleCode,
    roleTier: session.user.roleTier,
    permissions: session.user.permissions,
  };
}

/** Only verified clinician role claims can unlock identifiable clinical fields. Technicians and nurses are strictly denied. */
export function canViewIdentifiableClinicalData(staff: VerifiedStaff): boolean {
  const tier = (staff.roleTier || "").trim().toUpperCase();
  const code = (staff.roleCode || "").trim().toUpperCase();

  // Strict denial for technician and nursing personnel
  if (
    tier === "TECHNICIAN" ||
    tier === "TECH" ||
    tier === "NURSE" ||
    tier === "NURSING" ||
    code === "TECHNICIAN" ||
    code === "TECH" ||
    code === "NURSE" ||
    code === "STAFF_NURSE" ||
    code.includes("TECH") ||
    code.includes("NURSE")
  ) {
    return false;
  }

  return (
    tier === "FACULTY" ||
    tier === "RESIDENT" ||
    tier === "SENIOR_RESIDENT" ||
    tier === "FELLOW" ||
    tier === "DM" ||
    tier === "SR" ||
    tier === "CONSULTANT" ||
    code === "FACULTY" ||
    code === "FELLOW" ||
    code === "CONSULTANT" ||
    code === "INTERVENTIONAL_RADIOLOGIST" ||
    code === "DOCTOR" ||
    code === "DM" ||
    code === "SR" ||
    code.startsWith("FC") ||
    code.startsWith("DM") ||
    code.startsWith("SR") ||
    code.includes("RESIDENT")
  );
}

/** Keep only work-relevant fields for non-physician accounts. */
export function redactClinicalRecord<T extends Record<string, unknown>>(
  record: T
): Partial<T> {
  const blockedKeys = new Set([
    "name", "patientName", "fullName", "crNo", "crNumber", "hid", "uhid",
    "phone", "mobile", "contactNumber", "contactNumbers", "email", "nationalHealthId",
    "nationalHealthIdHash", "beneficiaryId", "schemeTid", "diagnosis", "summary",
    "clinicalHistory", "clinicalHistory3Months", "history3Months", "history",
    "chiefComplaints", "sosTriggerSymptoms", "cectFindings", "labs", "vitals",
    "attachments", "operativeNoteData", "dischargeData", "notes",
  ]);

  const redact = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(redact);
    if (!value || typeof value !== "object") return value;
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .filter(([key]) => !blockedKeys.has(key) && !blockedKeys.has(key.toLowerCase()))
        .map(([key, nested]) => [key, redact(nested)])
    );
  };

  return redact(record) as Partial<T>;
}
