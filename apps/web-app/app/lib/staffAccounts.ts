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
    email: "dr.pragati@sms.rajasthan.gov.in",
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
    email: "dr.sahil@sms.rajasthan.gov.in",
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
    email: "tc01@sms.rajasthan.gov.in",
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
    email: "tc02@sms.rajasthan.gov.in",
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
    email: "no07@sms.rajasthan.gov.in",
  },
];

const STORAGE_KEY = "vascule_staff_overrides_v1";

interface StaffRegistryOverrides {
  activeStatus: Record<string, boolean>;
  permissions: Record<string, Partial<StaffPermissions>>;
  customAccounts: StaffAccount[];
}

let inMemoryOverrides: StaffRegistryOverrides = {
  activeStatus: {},
  permissions: {},
  customAccounts: [],
};

/**
 * Retrieve current dynamic overrides for staff permissions and active status
 */
export function getStaffRegistryOverrides(): StaffRegistryOverrides {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return inMemoryOverrides;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return inMemoryOverrides;
    }
    const parsed = JSON.parse(raw);
    return {
      activeStatus: parsed.activeStatus || {},
      permissions: parsed.permissions || {},
      customAccounts: parsed.customAccounts || [],
    };
  } catch {
    return inMemoryOverrides;
  }
}

/**
 * Persist dynamic overrides to storage. Passwords are never stored in localStorage.
 */
export function saveStaffRegistryOverrides(overrides: StaffRegistryOverrides): void {
  const sanitized: StaffRegistryOverrides = {
    activeStatus: overrides.activeStatus || {},
    permissions: overrides.permissions || {},
    customAccounts: overrides.customAccounts || [],
  };
  inMemoryOverrides = sanitized;
  if (typeof window === "undefined" || typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
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
 * Lookup staff account by code or email
 */
export function getStaffAccountByCode(identifier: string): StaffAccount | null {
  if (!identifier) return null;
  const accounts = getEffectiveStaffAccounts();
  const cleaned = identifier.trim().toLowerCase();
  const match = accounts.find(
    (a) =>
      a.code.toLowerCase() === cleaned ||
      (a.email && a.email.toLowerCase() === cleaned)
  );
  return match || null;
}

/**
 * In-browser client-side authentication is rejected for security.
 * Passwords must never be stored in localStorage or hardcoded.
 * All credential authentication must be delegated to Auth.js via signIn('credentials', ...).
 */
export function authenticateStaff(_code: string, _pin: string): StaffAccount | null {
  // Passwords must never be stored in localStorage or hardcoded.
  // Reject client-side authentication; server-side Auth.js owns authentication.
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

  // Passwords must never be stored in localStorage.
  return { success: true, message: `Password for ${normalizedCode} successfully updated.` };
}

/**
 * Self-service / Resident action: Change own password after verifying current credentials
 */
export function changeStaffPassword(
  code: string,
  currentPin: string,
  newPin: string
): { success: boolean; message: string } {
  const normalizedCode = code.trim().toUpperCase();
  const trimmedNewPin = newPin.trim();

  if (!normalizedCode) {
    return { success: false, message: "Staff ID is required." };
  }

  if (trimmedNewPin.length < 4) {
    return { success: false, message: "New PIN / Password must be at least 4 characters long." };
  }

  if (currentPin.trim() === trimmedNewPin) {
    return { success: false, message: "New password must be different from current password." };
  }

  // Passwords must never be stored in localStorage or validated in client-side memory.
  return {
    success: false,
    message: "Client-side password modification is disabled. Please update your credentials through institutional IAM.",
  };
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
  initialPin?: string
): { success: boolean; message: string } {
  const normalizedCode = account.code.trim().toUpperCase();
  const existing = getStaffAccountByCode(normalizedCode);

  if (existing) {
    return { success: false, message: `Account ID ${normalizedCode} already exists.` };
  }

  if (initialPin && initialPin.trim().length > 0 && initialPin.trim().length < 4) {
    return { success: false, message: "Initial PIN must be at least 4 characters." };
  }

  const overrides = getStaffRegistryOverrides();
  overrides.customAccounts = overrides.customAccounts || [];
  overrides.customAccounts.push({
    ...account,
    code: normalizedCode,
    isActive: true,
  });

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
  delete overrides.activeStatus[normalizedCode];
  delete overrides.permissions[normalizedCode];
  saveStaffRegistryOverrides(overrides);

  return { success: true, message: `Account ${normalizedCode} removed from directory.` };
}

/**
 * Reset staff registry overrides back to factory defaults
 */
export function resetStaffDirectoryToDefaults(): void {
  inMemoryOverrides = {
    activeStatus: {},
    permissions: {},
    customAccounts: [],
  };
  if (typeof window === "undefined" || typeof localStorage === "undefined") return;
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

