import { StaffAccount, getStaffAccountByCode } from "../staffAccounts";

export const SESSION_STORAGE_KEY = "vascule_staff_session";
export const LAST_USER_KEY = "vascule_last_staff_code";
export const REMEMBER_ME_KEY = "vascule_remember_login";

export interface SessionPersistenceOptions {
  rememberMe?: boolean;
}

let inMemorySession: StaffAccount | null = null;
let inMemoryRemembered: { code: string; rememberMe: boolean } = { code: "DM01", rememberMe: true };

/**
 * Save active authenticated session into localStorage with cookie mirroring
 */
export function persistStaffSession(
  staff: StaffAccount,
  options: SessionPersistenceOptions = { rememberMe: true }
): void {
  inMemorySession = staff;
  if (options.rememberMe !== false) {
    inMemoryRemembered = { code: staff.code, rememberMe: true };
  } else {
    inMemoryRemembered = { code: staff.code, rememberMe: false };
  }

  if (typeof window === "undefined" || typeof localStorage === "undefined") return;

  try {
    const serialized = JSON.stringify(staff);
    // 1. Session state in localStorage
    localStorage.setItem(SESSION_STORAGE_KEY, serialized);

    // 2. Remember user ID / preference
    if (options.rememberMe !== false) {
      localStorage.setItem(LAST_USER_KEY, staff.code);
      localStorage.setItem(REMEMBER_ME_KEY, "true");
    } else {
      localStorage.removeItem(REMEMBER_ME_KEY);
    }

    // 3. Set persistent cookies with 30-day max-age for remember-me
    if (typeof document !== "undefined") {
      const maxAge = options.rememberMe !== false ? 30 * 24 * 60 * 60 : 24 * 60 * 60;
      const cookieFlags = `path=/; max-age=${maxAge}; SameSite=Lax`;
      
      document.cookie = `vascule_token=auth_${staff.code}_${Date.now()}; ${cookieFlags}`;
      document.cookie = `authjs.session-token=mock_session_${staff.code}; ${cookieFlags}`;
    }
  } catch (err) {
    console.warn("[SessionPersistence] Failed to write session storage:", err);
  }
}

/**
 * Retrieve persisted session from localStorage or cookie fallback
 */
export function getPersistedStaffSession(): StaffAccount | null {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    if (inMemorySession) {
      const liveAccount = getStaffAccountByCode(inMemorySession.code);
      if (liveAccount) {
        if (liveAccount.isActive === false) {
          inMemorySession = null;
          return null;
        }
        return liveAccount;
      }
    }
    return inMemorySession;
  }

  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as StaffAccount;
      if (parsed && parsed.code) {
        // Validate against live directory & overrides across page reloads
        const liveAccount = getStaffAccountByCode(parsed.code);
        if (liveAccount) {
          if (liveAccount.isActive === false) {
            clearStaffSession();
            return null;
          }
          return liveAccount;
        }
        return parsed;
      }
    }
  } catch (err) {
    console.warn("[SessionPersistence] Failed to parse stored session:", err);
  }

  return inMemorySession;
}

/**
 * Retrieve remembered staff ID for auto-filling login form
 */
export function getRememberedStaffCode(): { code: string; rememberMe: boolean } {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return inMemoryRemembered;
  }

  try {
    const remember = localStorage.getItem(REMEMBER_ME_KEY);
    const code = localStorage.getItem(LAST_USER_KEY);
    if (code) {
      return { code, rememberMe: remember !== "false" };
    }
  } catch {
    // safe fallback
  }

  return inMemoryRemembered;
}

/**
 * Clear session cookies and localStorage on logout
 */
export function clearStaffSession(): void {
  inMemorySession = null;
  if (typeof window === "undefined" || typeof localStorage === "undefined") return;

  try {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    if (typeof document !== "undefined") {
      document.cookie = "vascule_token=; path=/; max-age=0; SameSite=Lax";
      document.cookie = "endoflow_token=; path=/; max-age=0; SameSite=Lax";
      document.cookie = "authjs.session-token=; path=/; max-age=0; SameSite=Lax";
    }
  } catch (err) {
    console.warn("[SessionPersistence] Failed to clear session:", err);
  }
}
