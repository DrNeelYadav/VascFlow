import { describe, it, expect, beforeEach } from "vitest";
import {
  authenticateStaff,
  changeStaffPassword,
  updateStaffPassword,
  resetStaffDirectoryToDefaults,
  toggleStaffActiveStatus,
} from "../../app/lib/staffAccounts";
import {
  persistStaffSession,
  getPersistedStaffSession,
  getRememberedStaffCode,
  clearStaffSession,
  SESSION_STORAGE_KEY,
  LAST_USER_KEY,
  REMEMBER_ME_KEY,
} from "../../app/lib/auth/sessionPersistence";

const storageMap = new Map<string, string>();
const mockLocalStorage = {
  getItem: (key: string) => storageMap.get(key) ?? null,
  setItem: (key: string, value: string) => { storageMap.set(key, String(value)); },
  removeItem: (key: string) => { storageMap.delete(key); },
  clear: () => { storageMap.clear(); },
};

describe("Resident Authentication & Change Password Suite", () => {
  beforeEach(() => {
    storageMap.clear();
    Object.defineProperty(globalThis, "window", {
      value: globalThis,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(globalThis, "localStorage", {
      value: mockLocalStorage,
      writable: true,
      configurable: true,
    });
    resetStaffDirectoryToDefaults();
    clearStaffSession();
  });

  it("authenticates a resident with default institutional PIN", () => {
    const resident = authenticateStaff("DM01", "123456");
    expect(resident).not.toBeNull();
    expect(resident?.code).toBe("DM01");
    expect(resident?.name).toBe("Dr. Neel Yadav");
    expect(resident?.role).toBe("DOCTOR");
    expect(resident?.tier).toBe("DM_RESIDENT");
  });

  it("rejects password update if current password is wrong", () => {
    const res = changeStaffPassword("DM01", "wrongPin", "999888");
    expect(res.success).toBe(false);
    expect(res.message).toContain("Current password or PIN is incorrect");
  });

  it("rejects password update if new password is too short (< 4 chars)", () => {
    const res = changeStaffPassword("DM01", "123456", "12");
    expect(res.success).toBe(false);
    expect(res.message).toContain("at least 4 characters");
  });

  it("rejects password update if new password is same as current password", () => {
    const res = changeStaffPassword("DM01", "123456", "123456");
    expect(res.success).toBe(false);
    expect(res.message).toContain("different from current password");
  });

  it("allows resident to successfully change their password and log in with new password", () => {
    const changeRes = changeStaffPassword("DM01", "123456", "SecureDM2026");
    expect(changeRes.success).toBe(true);

    // Old password should now fail
    const failedAuth = authenticateStaff("DM01", "123456");
    expect(failedAuth).toBeNull();

    // New password succeeds
    const successAuth = authenticateStaff("DM01", "SecureDM2026");
    expect(successAuth).not.toBeNull();
    expect(successAuth?.code).toBe("DM01");
  });

  it("persists changed password in localStorage across simulated page reload for subsequent logins", () => {
    // Resident changes password
    const changeRes = changeStaffPassword("DM01", "123456", "VascPass2026!");
    expect(changeRes.success).toBe(true);

    // Verify localStorage has the override saved
    const rawOverrides = localStorage.getItem("vascule_staff_overrides_v1");
    expect(rawOverrides).not.toBeNull();
    expect(rawOverrides).toContain("VascPass2026!");

    // Next login with new password succeeds
    const nextLogin = authenticateStaff("DM01", "VascPass2026!");
    expect(nextLogin).not.toBeNull();
    expect(nextLogin?.code).toBe("DM01");

    // Old password remains rejected
    expect(authenticateStaff("DM01", "123456")).toBeNull();
  });
});

describe("Session Persistence Suite", () => {
  beforeEach(() => {
    storageMap.clear();
    Object.defineProperty(globalThis, "window", {
      value: globalThis,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(globalThis, "localStorage", {
      value: mockLocalStorage,
      writable: true,
      configurable: true,
    });
    resetStaffDirectoryToDefaults();
    clearStaffSession();
  });

  it("persists active staff session to storage with rememberMe", () => {
    const resident = authenticateStaff("DM01", "123456")!;
    persistStaffSession(resident, { rememberMe: true });

    const retrieved = getPersistedStaffSession();
    expect(retrieved).not.toBeNull();
    expect(retrieved?.code).toBe("DM01");
    expect(retrieved?.name).toBe("Dr. Neel Yadav");

    const remembered = getRememberedStaffCode();
    expect(remembered.code).toBe("DM01");
    expect(remembered.rememberMe).toBe(true);
  });

  it("restores session from localStorage across simulated page reload", () => {
    const resident = authenticateStaff("DM01", "123456")!;
    persistStaffSession(resident, { rememberMe: true });

    // Verify localStorage holds the session
    const rawStorage = localStorage.getItem(SESSION_STORAGE_KEY);
    expect(rawStorage).not.toBeNull();
    expect(rawStorage).toContain("DM01");

    // Direct retrieval simulates page reload mount reading from localStorage
    const restored = getPersistedStaffSession();
    expect(restored).not.toBeNull();
    expect(restored?.code).toBe("DM01");
    expect(restored?.name).toBe("Dr. Neel Yadav");
  });

  it("invalidates session if staff account is revoked or deactivated", () => {
    const resident = authenticateStaff("DM01", "123456")!;
    persistStaffSession(resident, { rememberMe: true });

    // Admin deactivates DM01 account
    toggleStaffActiveStatus("DM01", false);

    // On page reload / check, session should be revoked
    const restored = getPersistedStaffSession();
    expect(restored).toBeNull();
  });

  it("clears stored session on logout", () => {
    const resident = authenticateStaff("DM01", "123456")!;
    persistStaffSession(resident, { rememberMe: true });

    clearStaffSession();
    const retrieved = getPersistedStaffSession();
    expect(retrieved).toBeNull();
    expect(localStorage.getItem(SESSION_STORAGE_KEY)).toBeNull();
  });
});
