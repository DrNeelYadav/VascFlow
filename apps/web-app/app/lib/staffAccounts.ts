export type StaffRole = "DOCTOR" | "NURSE" | "TECHNICIAN" | "ADMIN";

export type StaffTier =
  | "FACULTY"
  | "DM_RESIDENT"
  | "SENIOR_RESIDENT"
  | "NURSING_OFFICER"
  | "CATHLAB_TECHNICIAN"
  | "SYSTEM_ADMINISTRATOR";

export interface StaffPermissions {
  isDoctor: boolean;
  isNurse: boolean;
  isTechnician: boolean;
  isAdmin: boolean;
  canViewRecords: boolean;
  canEditClinicalNotes: boolean;
  canSignReports: boolean;
  canBookProcedures: boolean;
  canAccessWardBeds: boolean;
  canAddPatientIntake: boolean;
  canAccessCalculators: boolean;
  canGenerateDischargeCard: boolean;
  canDepleteInventory: boolean;
  canAdministerUsers: boolean;
  canViewAll: boolean;
}

export interface StaffAccount {
  code: string;
  name: string;
  role: StaffRole;
  tier: StaffTier;
  title: string;
  department: string;
  avatar: string;
  isActive?: boolean;
  email?: string;
  phone?: string;
  customPermissions?: Partial<StaffPermissions>;
}

export const INSTITUTIONAL_STAFF_ACCOUNTS: StaffAccount[] = [
  // 0. Super Administrator & CMIO
  {
    code: "ADMIN01",
    name: "Chief Hospital Administrator & Security Officer",
    role: "ADMIN",
    tier: "SYSTEM_ADMINISTRATOR",
    title: "Chief Administrator / CMIO",
    department: "Hospital Administration & Clinical Informatics",
    avatar: "AD",
    isActive: true,
    email: "admin@hospital.lan",
    phone: "0141-2560291",
  },

  // 1. Professors & Faculty
  {
    code: "FC01",
    name: "Dr. Meenu Bagarhatta",
    role: "DOCTOR",
    tier: "FACULTY",
    title: "Senior Professor & Head",
    department: "Department of Radiodiagnosis & IR",
    avatar: "MB",
    isActive: true,
    email: "dr.meenu@sms.rajasthan.gov.in",
  },
  {
    code: "FC02",
    name: "Dr. Naresh Mangalhara",
    role: "DOCTOR",
    tier: "FACULTY",
    title: "Associate Professor (PDCC IR)",
    department: "Division of Interventional Radiology",
    avatar: "NM",
    isActive: true,
    email: "dr.naresh@sms.rajasthan.gov.in",
  },
  {
    code: "FC03",
    name: "Dr. Shashank Sharma",
    role: "DOCTOR",
    tier: "FACULTY",
    title: "Professor",
    department: "Division of Interventional Radiology",
    avatar: "SS",
    isActive: true,
    email: "dr.shashank@sms.rajasthan.gov.in",
  },
  {
    code: "FC04",
    name: "Dr. Alok Verma",
    role: "DOCTOR",
    tier: "FACULTY",
    title: "Assistant Professor (PDCC IR)",
    department: "Division of Interventional Radiology",
    avatar: "AV",
    isActive: true,
    email: "dr.alok@sms.rajasthan.gov.in",
  },

  // 2. DM Residents
  {
    code: "DM01",
    name: "Dr. Neel Yadav",
    role: "DOCTOR",
    tier: "DM_RESIDENT",
    title: "DM Resident",
    department: "Interventional Radiology & Cath Lab",
    avatar: "NY",
    isActive: true,
    email: "dr.neel@sms.rajasthan.gov.in",
  },
  {
    code: "DM02",
    name: "Dr. Nilesh Sinha",
    role: "DOCTOR",
    tier: "DM_RESIDENT",
    title: "DM Resident",
    department: "Interventional Radiology & Cath Lab",
    avatar: "NS",
    isActive: true,
    email: "dr.nilesh@sms.rajasthan.gov.in",
  },

  // 3. Senior Residents (SR 01, SR 02)
  {
    code: "SR01",
    name: "Dr. Pragati",
    role: "DOCTOR",
    tier: "SENIOR_RESIDENT",
    title: "SR 01",
    department: "Division of Interventional Radiology",
    avatar: "P",
    isActive: true,
  },
  {
    code: "SR02",
    name: "Dr. Sahil Sharma",
    role: "DOCTOR",
    tier: "SENIOR_RESIDENT",
    title: "SR 02",
    department: "Division of Interventional Radiology",
    avatar: "SS",
    isActive: true,
  },

  // 4. Technicians & Sister
  {
    code: "TC01",
    name: "Mr. JP",
    role: "TECHNICIAN",
    tier: "CATHLAB_TECHNICIAN",
    title: "Technician",
    department: "Cath-Lab Suite",
    avatar: "JP",
    isActive: true,
  },
  {
    code: "TC02",
    name: "Mr. Sumit",
    role: "TECHNICIAN",
    tier: "CATHLAB_TECHNICIAN",
    title: "Technician",
    department: "Cath-Lab Suite",
    avatar: "SU",
    isActive: true,
  },
  {
    code: "NO07",
    name: "Mrs. Anita",
    role: "NURSE",
    tier: "NURSING_OFFICER",
    title: "Sister Incharge",
    department: "Cath-Lab Nursing",
    avatar: "AN",
    isActive: true,
  },
];

export const UNIVERSAL_PASSWORD = "123456";
export const ADMIN_DEFAULT_PASSWORD = "admin123";

const STORAGE_KEY = "vascule_staff_overrides_v1";

interface StaffRegistryOverrides {
  passwords: Record<string, string>;
  activeStatus: Record<string, boolean>;
  permissions: Record<string, Partial<StaffPermissions>>;
  customAccounts: StaffAccount[];
}

/**
 * Retrieve current dynamic overrides for staff passwords and permissions
 */
export function getStaffRegistryOverrides(): StaffRegistryOverrides {
  if (typeof window === "undefined") {
    return { passwords: {}, activeStatus: {}, permissions: {}, customAccounts: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { passwords: {}, activeStatus: {}, permissions: {}, customAccounts: [] };
    }
    return JSON.parse(raw);
  } catch {
    return { passwords: {}, activeStatus: {}, permissions: {}, customAccounts: [] };
  }
}

/**
 * Persist dynamic overrides to storage
 */
export function saveStaffRegistryOverrides(overrides: StaffRegistryOverrides): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch (err) {
    console.warn("Failed to persist staff registry overrides:", err);
  }
}

/**
 * Get all active and provisioned staff accounts including custom created accounts
 */
export function getEffectiveStaffAccounts(): StaffAccount[] {
  const overrides = getStaffRegistryOverrides();
  const builtIn = INSTITUTIONAL_STAFF_ACCOUNTS.map((acc) => {
    const isActive = overrides.activeStatus[acc.code] !== undefined
      ? overrides.activeStatus[acc.code]
      : acc.isActive ?? true;
    const customPermissions = overrides.permissions[acc.code] || acc.customPermissions;
    return {
      ...acc,
      isActive,
      customPermissions,
    };
  });

  const custom = overrides.customAccounts || [];
  const allAccounts = [...builtIn];

  // Append custom accounts not matching built-ins
  for (const c of custom) {
    if (!allAccounts.some((a) => a.code.toUpperCase() === c.code.toUpperCase())) {
      const isActive = overrides.activeStatus[c.code] !== undefined
        ? overrides.activeStatus[c.code]
        : c.isActive ?? true;
      const customPermissions = overrides.permissions[c.code] || c.customPermissions;
      allAccounts.push({
        ...c,
        isActive,
        customPermissions,
      });
    }
  }

  return allAccounts;
}

/**
 * Lookup staff account by code
 */
export function getStaffAccountByCode(code: string): StaffAccount | null {
  const accounts = getEffectiveStaffAccounts();
  const match = accounts.find((a) => a.code.toUpperCase() === code.trim().toUpperCase());
  return match || null;
}

/**
 * Authenticate staff with dynamic passwords, active check, and admin overrides
 */
export function authenticateStaff(code: string, pin: string): StaffAccount | null {
  const normalizedCode = code.trim().toUpperCase();
  const normalizedPin = pin.trim();

  const account = getStaffAccountByCode(normalizedCode);
  if (!account) {
    return null;
  }

  // If account has been revoked by admin, deny login
  if (account.isActive === false) {
    return null;
  }

  const overrides = getStaffRegistryOverrides();
  const customPin = overrides.passwords[normalizedCode];

  if (customPin) {
    if (normalizedPin === customPin) {
      return account;
    }
    return null;
  }

  // Fallback defaults
  if (normalizedCode === "ADMIN01") {
    if (
      normalizedPin === ADMIN_DEFAULT_PASSWORD ||
      normalizedPin === UNIVERSAL_PASSWORD ||
      normalizedPin.toLowerCase() === "admin"
    ) {
      return account;
    }
    return null;
  }

  if (normalizedPin === UNIVERSAL_PASSWORD) {
    return account;
  }

  return null;
}

/**
 * Admin action: Reset PIN / password for a staff member
 */
export function updateStaffPassword(code: string, newPin: string): { success: boolean; message: string } {
  const normalizedCode = code.trim().toUpperCase();
  const trimmedPin = newPin.trim();

  if (trimmedPin.length < 4) {
    return { success: false, message: "PIN / Password must be at least 4 characters long." };
  }

  const overrides = getStaffRegistryOverrides();
  overrides.passwords[normalizedCode] = trimmedPin;
  saveStaffRegistryOverrides(overrides);

  return { success: true, message: `Password for ${normalizedCode} successfully updated.` };
}

/**
 * Admin action: Update granular clinical permissions
 */
export function updateStaffPermissions(
  code: string,
  permissions: Partial<StaffPermissions>
): { success: boolean; message: string } {
  const normalizedCode = code.trim().toUpperCase();
  const overrides = getStaffRegistryOverrides();
  
  overrides.permissions[normalizedCode] = {
    ...(overrides.permissions[normalizedCode] || {}),
    ...permissions,
  };
  saveStaffRegistryOverrides(overrides);

  return { success: true, message: `Access privileges updated for ${normalizedCode}.` };
}

/**
 * Admin action: Grant or Revoke access (Active toggle)
 */
export function toggleStaffActiveStatus(
  code: string,
  active: boolean
): { success: boolean; message: string } {
  const normalizedCode = code.trim().toUpperCase();
  const overrides = getStaffRegistryOverrides();

  overrides.activeStatus[normalizedCode] = active;
  saveStaffRegistryOverrides(overrides);

  return {
    success: true,
    message: active
      ? `Access granted. Account ${normalizedCode} is now active.`
      : `Access revoked. Account ${normalizedCode} is now suspended.`,
  };
}

/**
 * Admin action: Provision a new staff ID
 */
export function provisionNewStaffAccount(
  account: StaffAccount,
  initialPin: string
): { success: boolean; message: string } {
  const normalizedCode = account.code.trim().toUpperCase();
  const existing = getStaffAccountByCode(normalizedCode);

  if (existing) {
    return { success: false, message: `Account ID ${normalizedCode} already exists.` };
  }

  if (initialPin.trim().length < 4) {
    return { success: false, message: "Initial PIN must be at least 4 characters." };
  }

  const overrides = getStaffRegistryOverrides();
  overrides.customAccounts = overrides.customAccounts || [];
  overrides.customAccounts.push({
    ...account,
    code: normalizedCode,
    isActive: true,
  });

  overrides.passwords[normalizedCode] = initialPin.trim();
  saveStaffRegistryOverrides(overrides);

  return { success: true, message: `Staff account ${normalizedCode} successfully provisioned.` };
}

/**
 * Admin action: Delete a custom provisioned staff account
 */
export function deleteStaffAccount(code: string): { success: boolean; message: string } {
  const normalizedCode = code.trim().toUpperCase();
  const overrides = getStaffRegistryOverrides();

  const isBuiltIn = INSTITUTIONAL_STAFF_ACCOUNTS.some((a) => a.code.toUpperCase() === normalizedCode);
  if (isBuiltIn) {
    // Cannot delete core faculty, suspend instead
    overrides.activeStatus[normalizedCode] = false;
    saveStaffRegistryOverrides(overrides);
    return { success: true, message: `Core institutional account ${normalizedCode} suspended.` };
  }

  overrides.customAccounts = (overrides.customAccounts || []).filter(
    (a) => a.code.toUpperCase() !== normalizedCode
  );
  delete overrides.passwords[normalizedCode];
  delete overrides.activeStatus[normalizedCode];
  delete overrides.permissions[normalizedCode];
  saveStaffRegistryOverrides(overrides);

  return { success: true, message: `Account ${normalizedCode} removed from directory.` };
}

/**
 * Reset staff registry overrides back to factory defaults
 */
export function resetStaffDirectoryToDefaults(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

/**
 * Derives comprehensive clinical and system permissions for a staff member
 */
export function getStaffPermissions(roleOrStaff: StaffRole | StaffAccount): StaffPermissions {
  let role: StaffRole;
  let custom: Partial<StaffPermissions> | undefined;

  if (typeof roleOrStaff === "string") {
    role = roleOrStaff;
  } else {
    role = roleOrStaff.role;
    custom = roleOrStaff.customPermissions;
  }

  const isDoc = role === "DOCTOR";
  const isNurse = role === "NURSE";
  const isTech = role === "TECHNICIAN";
  const isAdmin = role === "ADMIN";

  const base: StaffPermissions = {
    isDoctor: isDoc,
    isNurse: isNurse,
    isTechnician: isTech,
    isAdmin: isAdmin,
    canViewRecords: true,
    canEditClinicalNotes: isDoc || isNurse || isAdmin,
    canSignReports: isDoc || isAdmin,
    canBookProcedures: isDoc || isAdmin,
    canAccessWardBeds: isDoc || isNurse || isAdmin,
    canAddPatientIntake: isDoc || isTech || isAdmin,
    canAccessCalculators: isDoc || isAdmin,
    canGenerateDischargeCard: isDoc || isAdmin,
    canDepleteInventory: isDoc || isTech || isNurse || isAdmin,
    canAdministerUsers: isAdmin,
    canViewAll: isDoc || isAdmin,
  };

  if (custom) {
    return { ...base, ...custom };
  }

  return base;
}

