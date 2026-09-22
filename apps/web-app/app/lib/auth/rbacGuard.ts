import { auth } from "../../../auth";
import { UserRole } from "@vascule/db";


/**
 * Normalizes staff role codes and titles to Prisma UserRole enum
 */
export function normalizeToUserRole(roleOrCode?: string): UserRole {
  if (!roleOrCode) return UserRole.NURSING_OFFICER;
  const upper = roleOrCode.toUpperCase().trim();

  if (
    upper === "CONSULTANT" ||
    upper === "FACULTY" ||
    upper.startsWith("FC") ||
    upper.includes("PROFESSOR") ||
    upper.includes("HOD")
  ) {
    return UserRole.CONSULTANT;
  }

  if (upper === "FELLOW" || upper.startsWith("DM")) {
    return UserRole.FELLOW;
  }

  if (upper === "SENIOR_RESIDENT" || upper.startsWith("SR") || upper.includes("RESIDENT")) {
    return UserRole.SENIOR_RESIDENT;
  }

  if (
    upper === "CATH_LAB_TECH" ||
    upper === "TECHNICIAN" ||
    upper.startsWith("TC") ||
    upper.includes("TECH")
  ) {
    return UserRole.CATH_LAB_TECH;
  }

  if (upper === "NURSING_OFFICER" || upper === "NURSE" || upper.startsWith("NO")) {
    return UserRole.NURSING_OFFICER;
  }

  if (upper === "ADMIN" || upper === "AUDIT_ADMIN" || upper.startsWith("CR")) {
    return UserRole.AUDIT_ADMIN;
  }

  return UserRole.SENIOR_RESIDENT;
}

/**
 * Server-Side RBAC Guard asserting clinical privileges for sensitive actions
 */
export async function assertAuthorizedRole(allowedRoles: UserRole[]) {
  const session = await auth();

  // If no session from auth(), check if in development/local mode with header or fallback
  const user = session?.user;
  if (!user || (!user.id && !user.email)) {
    throw new Error("UNAUTHORIZED_ACCESS");
  }

  const rawRole = (user as unknown as { role?: string; roleCode?: string; roleTier?: string }).role ||
    user.roleCode ||
    user.roleTier ||
    "SENIOR_RESIDENT";

  const userRole = normalizeToUserRole(rawRole);

  if (!allowedRoles.includes(userRole)) {
    throw new Error("INSUFFICIENT_CLINICAL_PRIVILEGES");
  }

  return {
    ...user,
    role: userRole,
  };
}
