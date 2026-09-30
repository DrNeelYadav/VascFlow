import type { StaffAccount } from "../staffAccounts";

export const SESSION_STORAGE_KEY = "vascule_staff_session";
export const LAST_USER_KEY = "vascule_last_staff_code";
export const REMEMBER_ME_KEY = "vascule_remember_login";

export interface SessionPersistenceOptions {
  rememberMe?: boolean;
}

/** Store only the login hint. Auth.js owns the actual authenticated session. */
export function persistStaffSession(
  staff: StaffAccount,
  options: SessionPersistenceOptions = { rememberMe: true }
): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    if (options.rememberMe !== false) {
      localStorage.setItem(LAST_USER_KEY, staff.code);
      localStorage.setItem(REMEMBER_ME_KEY, "true");
    } else {
      localStorage.removeItem(LAST_USER_KEY);
      localStorage.removeItem(REMEMBER_ME_KEY);
    }
    // Remove legacy client-created auth cookies; they are not valid credentials.
    document.cookie = "vascule_token=; path=/; max-age=0; SameSite=Lax";
    document.cookie = "authjs.session-token=; path=/; max-age=0; SameSite=Lax";
  } catch {
    // Remembering the user is optional; authentication is not affected.
  }
}

/** Legacy API retained for callers; browser storage is never an auth source. */
export function getPersistedStaffSession(): null {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {}
  }
  return null;
}

export function getRememberedStaffCode(): { code: string; rememberMe: boolean } {
  if (typeof window === "undefined") return { code: "", rememberMe: false };
  try {
    return {
      code: localStorage.getItem(LAST_USER_KEY) || "",
      rememberMe: localStorage.getItem(REMEMBER_ME_KEY) === "true",
    };
  } catch {
    return { code: "", rememberMe: false };
  }
}

export function clearStaffSession(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    localStorage.removeItem("endoflow_staff_session");
    for (const cookie of [
      "vascule_token", "endoflow_token", "authjs.session-token",
      "__Secure-authjs.session-token", "next-auth.session-token",
      "__Secure-next-auth.session-token",
    ]) {
      document.cookie = `${cookie}=; path=/; max-age=0; SameSite=Lax`;
    }
  } catch {}
}
