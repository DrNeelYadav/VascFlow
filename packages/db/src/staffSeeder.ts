import { PrismaClient, UserRole } from "@prisma/client";

export interface StaffSeedPayload {
  staffId: string;
  fullName: string;
  email: string;
  role: UserRole;
  designation: string;
  medicalRegNo?: string;
  pinHash: string;
  digitalSignatureUrl?: string;
}

/**
 * Baseline institutional faculty & resident roster for SMS Medical College, Jaipur.
 * Ready to receive official faculty and resident roster updates (Full Names,
 * Designations, and Rajasthan Medical Council RMC / NMC registration numbers).
 */
export const OFFICIAL_SMS_STAFF_ROSTER: StaffSeedPayload[] = [
  {
    staffId: "SMS-IR-FC01",
    fullName: "Prof. (Dr.) Senior Faculty",
    email: "hod.ir@smsmc.rajasthan.gov.in",
    role: UserRole.CONSULTANT,
    designation: "Senior Professor & Head of Department",
    medicalRegNo: "RMC-14280",
    pinHash: "$2a$12$e8yQ0Wc9hFq9j0z7W8Y6ceV7wT1XkF7k7r8oP5N9q1a2b3c4d5e6f", // Default PIN hash: 1234
  },
  {
    staffId: "SMS-IR-FC02",
    fullName: "Dr. Faculty Radiologist",
    email: "faculty.ir@smsmc.rajasthan.gov.in",
    role: UserRole.CONSULTANT,
    designation: "Associate Professor (Interventional Radiology)",
    medicalRegNo: "RMC-21544",
    pinHash: "$2a$12$e8yQ0Wc9hFq9j0z7W8Y6ceV7wT1XkF7k7r8oP5N9q1a2b3c4d5e6f",
  },
  {
    staffId: "SMS-IR-DM01",
    fullName: "Dr. Fellow In-Charge (DM-IR)",
    email: "fellow.ir1@smsmc.rajasthan.gov.in",
    role: UserRole.FELLOW,
    designation: "DM Fellow (Interventional Radiology)",
    medicalRegNo: "RMC-38912",
    pinHash: "$2a$12$e8yQ0Wc9hFq9j0z7W8Y6ceV7wT1XkF7k7r8oP5N9q1a2b3c4d5e6f",
  },
  {
    staffId: "SMS-IR-SR01",
    fullName: "Dr. Senior Resident (Cath-Lab)",
    email: "sr.ir1@smsmc.rajasthan.gov.in",
    role: UserRole.SENIOR_RESIDENT,
    designation: "Senior Resident (Interventional Radiology)",
    medicalRegNo: "RMC-42109",
    pinHash: "$2a$12$e8yQ0Wc9hFq9j0z7W8Y6ceV7wT1XkF7k7r8oP5N9q1a2b3c4d5e6f",
  },
  {
    staffId: "SMS-IR-NO01",
    fullName: "Sr. Sister Sunita",
    email: "sunita.no@smsmc.rajasthan.gov.in",
    role: UserRole.NURSING_OFFICER,
    designation: "Nursing Officer In-Charge (Cath Lab 1)",
    pinHash: "$2a$12$e8yQ0Wc9hFq9j0z7W8Y6ceV7wT1XkF7k7r8oP5N9q1a2b3c4d5e6f",
  },
  {
    staffId: "SMS-IR-TC01",
    fullName: "Vikram Singh",
    email: "vikram.tech@smsmc.rajasthan.gov.in",
    role: UserRole.CATH_LAB_TECH,
    designation: "Senior Cath Lab Technologist",
    pinHash: "$2a$12$e8yQ0Wc9hFq9j0z7W8Y6ceV7wT1XkF7k7r8oP5N9q1a2b3c4d5e6f",
  },
];

/**
 * Idempotent seed helper function to populate or update StaffUser entries.
 */
export async function seedStaffUsers(
  prisma: PrismaClient,
  roster: StaffSeedPayload[] = OFFICIAL_SMS_STAFF_ROSTER
) {
  const results = [];
  for (const staff of roster) {
    const upserted = await prisma.staffUser.upsert({
      where: { staffId: staff.staffId },
      update: {
        fullName: staff.fullName,
        email: staff.email,
        role: staff.role,
        designation: staff.designation,
        medicalRegNo: staff.medicalRegNo,
        digitalSignatureUrl: staff.digitalSignatureUrl,
        pinHash: staff.pinHash,
        isActive: true,
      },
      create: {
        staffId: staff.staffId,
        fullName: staff.fullName,
        email: staff.email,
        role: staff.role,
        designation: staff.designation,
        medicalRegNo: staff.medicalRegNo,
        digitalSignatureUrl: staff.digitalSignatureUrl,
        pinHash: staff.pinHash,
        isActive: true,
      },
    });
    results.push(upserted);
  }
  return results;
}
