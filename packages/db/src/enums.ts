/**
 * Core clinical and administrative enums for VascFlow OS.
 * Mirroring packages/db/schema.prisma to provide zero-overhead type safety
 * across serverless builds, Turbopack bundling, and edge runtimes.
 */

export enum UserRole {
  CONSULTANT = "CONSULTANT",
  SENIOR_RESIDENT = "SENIOR_RESIDENT",
  FELLOW = "FELLOW",
  CATH_LAB_TECH = "CATH_LAB_TECH",
  NURSING_OFFICER = "NURSING_OFFICER",
  AUDIT_ADMIN = "AUDIT_ADMIN",
  ADMIN = "ADMIN",
  FACULTY = "FACULTY",
  RESIDENT = "RESIDENT",
  NURSE = "NURSE",
  TECH = "TECH",
}

export enum StaffPersonaCode {
  FC01 = "FC01",
  FC02 = "FC02",
  DM01 = "DM01",
  DM02 = "DM02",
  SR01 = "SR01",
  NO01 = "NO01",
  NO02 = "NO02",
  TC01 = "TC01",
  TC02 = "TC02",
  CR01 = "CR01",
}

export enum CaseStatus {
  SCHEDULED = "SCHEDULED",
  ADMITTED_PREPPED = "ADMITTED_PREPPED",
  IN_PROCEDURE = "IN_PROCEDURE",
  POST_OP_HOLDING = "POST_OP_HOLDING",
  REPORT_DRAFTED = "REPORT_DRAFTED",
  FINALIZED_SIGNED = "FINALIZED_SIGNED",
  DISCHARGED = "DISCHARGED",
}

export enum SchemeType {
  MAAY_CHIRANJEEVI = "MAAY_CHIRANJEEVI",
  RGHS = "RGHS",
  RAJSICK = "RAJSICK",
  PMJAY = "PMJAY",
  BSBY = "BSBY",
  RAILWAY = "RAILWAY",
  GENERAL_PAID = "GENERAL_PAID",
}
