import { describe, it, expect, beforeEach } from "vitest";
import {
  authenticateStaff,
  changeStaffPassword,
  updateStaffPassword,
  resetStaffDirectoryToDefaults,
  toggleStaffActiveStatus,
  getStaffAccountByCode,
  getStaffRegistryOverrides,
  saveStaffRegistryOverrides,
} from "../../app/lib/staffAccounts";
import {
  persistStaffSession,
  getPersistedStaffSession,
  getRememberedStaffCode,
  clearStaffSession,
  SESSION_STORAGE_KEY,
} from "../../app/lib/auth/sessionPersistence";

const storageMap = new Map<string, string>();
const mockLocalStorage = {
  getItem: (key: string) => storageMap.get(key) ?? null,
  setItem: (key: string, value: string) => { storageMap.set(key, String(value)); },
  removeItem: (key: string) => { storageMap.delete(key); },
  clear: () => { storageMap.clear(); },
};

describe("Client-Side Password Security & Auth.js Delegation Suite", () => {
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

  it("rejects client-side authentication for all staff IDs and PINs", () => {
    expect(authenticateStaff("DM01", "123456")).toBeNull();
    expect(authenticateStaff("ADMIN01", "admin123")).toBeNull();
    expect(authenticateStaff("ADMIN01", "123456")).toBeNull();
    expect(authenticateStaff("ADMIN01", "admin")).toBeNull();
    expect(authenticateStaff("FC01", "123456")).toBeNull();
    expect(authenticateStaff("TC01", "123456")).toBeNull();
    expect(authenticateStaff("NONEXISTENT", "123456")).toBeNull();
  });

  it("never stores passwords in localStorage overrides", () => {
    const overrides = getStaffRegistryOverrides();
    expect((overrides as unknown as Record<string, unknown>).passwords).toBeUndefined();

    saveStaffRegistryOverrides(overrides);
    const raw = localStorage.getItem("vascule_staff_overrides_v1");
    if (raw) {
      expect(raw).not.toContain("password");
      expect(raw).not.toContain("123456");
      expect(raw).not.toContain("admin123");
    }
  });

  it("sanitizes legacy passwords from localStorage when retrieving overrides", () => {
    localStorage.setItem(
      "vascule_staff_overrides_v1",
      JSON.stringify({
        passwords: { DM01: "insecurePin", ADMIN01: "superSecret" },
        activeStatus: { DM01: true },
        permissions: {},
        customAccounts: [],
      })
    );

    const overrides = getStaffRegistryOverrides();
    expect((overrides as unknown as Record<string, unknown>).passwords).toBeUndefined();
    expect(overrides.activeStatus.DM01).toBe(true);

    // Saving back does not include passwords in localStorage
    saveStaffRegistryOverrides(overrides);
    const updated = localStorage.getItem("vascule_staff_overrides_v1");
    expect(updated).not.toContain("insecurePin");
    expect(updated).not.toContain("superSecret");
  });

  it("rejects client-side password modification and does not store passwords in localStorage", () => {
    const res = changeStaffPassword("DM01", "123456", "SecureDM2026");
    expect(res.success).toBe(false);
    expect(res.message).toContain("disabled");

    const rawOverrides = localStorage.getItem("vascule_staff_overrides_v1");
    if (rawOverrides) {
      expect(rawOverrides).not.toContain("SecureDM2026");
    }
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

  it("delegates admin password reset without saving plain text in browser storage", () => {
    const res = updateStaffPassword("DM01", "NewSecurePin99");
    expect(res.success).toBe(true);

    const raw = localStorage.getItem("vascule_staff_overrides_v1");
    if (raw) {
      expect(raw).not.toContain("NewSecurePin99");
    }
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

  it("persists only the staff login hint; Auth.js owns authentication", () => {
    const resident = getStaffAccountByCode("DM01")!;
    persistStaffSession(resident, { rememberMe: true });

    expect(getPersistedStaffSession()).toBeNull();
    expect(localStorage.getItem(SESSION_STORAGE_KEY)).toBeNull();

    const remembered = getRememberedStaffCode();
    expect(remembered.code).toBe("DM01");
    expect(remembered.rememberMe).toBe(true);
  });

  it("does not restore authentication from a legacy localStorage session", () => {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({ code: "DM01", role: "DOCTOR" }));

    expect(getPersistedStaffSession()).toBeNull();
    expect(localStorage.getItem(SESSION_STORAGE_KEY)).toBeNull();
  });

  it("invalidates session if staff account is revoked or deactivated", () => {
    const resident = getStaffAccountByCode("DM01")!;
    persistStaffSession(resident, { rememberMe: true });

    // Admin deactivates DM01 account
    toggleStaffActiveStatus("DM01", false);

    // On page reload / check, session should be revoked
    const restored = getPersistedStaffSession();
    expect(restored).toBeNull();
  });

  it("clears stored session on logout", () => {
    const resident = getStaffAccountByCode("DM01")!;
    persistStaffSession(resident, { rememberMe: true });

    clearStaffSession();
    const retrieved = getPersistedStaffSession();
    expect(retrieved).toBeNull();
    expect(localStorage.getItem(SESSION_STORAGE_KEY)).toBeNull();
  });
});
