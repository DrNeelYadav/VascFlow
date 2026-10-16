/**
 * Authentication and access control guards.
 * Personal features like the FRCR 2A Quizzing workspace are strictly restricted
 * to Dr. Neel Yadav (DM Resident, SMS Medical College).
 */

export interface MinimalUserIdentity {
  name?: string | null;
  email?: string | null;
  roleCode?: string | null;
  code?: string | null;
}

/**
 * Returns true if and only if the authenticated user or active clinical staff
 * identity corresponds to Dr. Neel Yadav.
 */
export function isNeelYadavUser(identity?: MinimalUserIdentity | null): boolean {
  if (!identity) return false;

  const email = (identity.email || "").toLowerCase().trim();
  const name = (identity.name || "").toLowerCase().trim();
  const code = (identity.roleCode || identity.code || "").toUpperCase().trim();

  // Primary check: Staff code DM01 is assigned to Dr. Neel Yadav
  if (code === "DM01") {
    return true;
  }

  // Email verification (personal and institutional)
  if (
    email === "nyadav19988@gmail.com" ||
    email === "dr.neel@sms.rajasthan.gov.in" ||
    email.startsWith("dr.neel")
  ) {
    return true;
  }

  // Name check
  if (name.includes("neel") && name.includes("yadav")) {
    return true;
  }

  return false;
}
