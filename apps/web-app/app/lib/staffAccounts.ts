export type StaffRole = "DOCTOR" | "NURSE" | "TECHNICIAN";

export type StaffTier =
  | "FACULTY"
  | "DM_RESIDENT"
  | "SENIOR_RESIDENT"
  | "NURSING_OFFICER"
  | "CATHLAB_TECHNICIAN";

export interface StaffAccount {
  code: string;
  name: string;
  role: StaffRole;
  tier: StaffTier;
  title: string;
  department: string;
  avatar: string;
}

export const INSTITUTIONAL_STAFF_ACCOUNTS: StaffAccount[] = [
  // 1. Faculty Members (FC01 - FC04)
  {
    code: "FC01",
    name: "Dr. Meenu Bagarhatta",
    role: "DOCTOR",
    tier: "FACULTY",
    title: "Senior Professor & Head",
    department: "Department of Radiodiagnosis & IR",
    avatar: "MB",
  },
  {
    code: "FC02",
    name: "Dr. Naresh Sharma",
    role: "DOCTOR",
    tier: "FACULTY",
    title: "Professor",
    department: "Division of Interventional Radiology",
    avatar: "NS",
  },
  {
    code: "FC03",
    name: "Dr. Shashank Gupta",
    role: "DOCTOR",
    tier: "FACULTY",
    title: "Associate Professor",
    department: "Division of Interventional Radiology",
    avatar: "SG",
  },
  {
    code: "FC04",
    name: "Dr. Alok Yadav",
    role: "DOCTOR",
    tier: "FACULTY",
    title: "Assistant Professor",
    department: "Division of Interventional Radiology",
    avatar: "AY",
  },

  // 2. DM Residents (DM01 - DM02)
  {
    code: "DM01",
    name: "Dr. Neel Yadav",
    role: "DOCTOR",
    tier: "DM_RESIDENT",
    title: "DM Fellow & Resident",
    department: "Interventional Radiology & Cath Lab",
    avatar: "NY",
  },
  {
    code: "DM02",
    name: "Dr. Nilesh Bansal",
    role: "DOCTOR",
    tier: "DM_RESIDENT",
    title: "DM Fellow & Resident",
    department: "Interventional Radiology & Cath Lab",
    avatar: "NB",
  },

  // 3. Senior Residents (SR01 - SR02)
  {
    code: "SR01",
    name: "Dr. Pragati Sharma",
    role: "DOCTOR",
    tier: "SENIOR_RESIDENT",
    title: "Senior Resident",
    department: "Division of Interventional Radiology",
    avatar: "PS",
  },
  {
    code: "SR02",
    name: "Dr. Sahil Verma",
    role: "DOCTOR",
    tier: "SENIOR_RESIDENT",
    title: "Senior Resident",
    department: "Division of Interventional Radiology",
    avatar: "SV",
  },

  // 4. Nursing Officers (NO01 - NO06)
  {
    code: "NO01",
    name: "Nursing Officer Geeta Sharma",
    role: "NURSE",
    tier: "NURSING_OFFICER",
    title: "Staff Nurse Grade-I (ICU Incharge)",
    department: "IR Ward & Liver ICU",
    avatar: "NO1",
  },
  {
    code: "NO02",
    name: "Nursing Officer Sunita Meena",
    role: "NURSE",
    tier: "NURSING_OFFICER",
    title: "Staff Nurse Grade-II",
    department: "IR Ward & Cath Recovery",
    avatar: "NO2",
  },
  {
    code: "NO03",
    name: "Nursing Officer Rajeshwari Yadav",
    role: "NURSE",
    tier: "NURSING_OFFICER",
    title: "Staff Nurse Grade-II",
    department: "Cath-Lab Holding & PACU",
    avatar: "NO3",
  },
  {
    code: "NO04",
    name: "Nursing Officer Kavita Choudhary",
    role: "NURSE",
    tier: "NURSING_OFFICER",
    title: "Staff Nurse Grade-II",
    department: "IR Ward D-Block",
    avatar: "NO4",
  },
  {
    code: "NO05",
    name: "Nursing Officer Priyanka Saini",
    role: "NURSE",
    tier: "NURSING_OFFICER",
    title: "Staff Nurse Grade-II",
    department: "IR Ward D-Block",
    avatar: "NO5",
  },
  {
    code: "NO06",
    name: "Nursing Officer Rekha Gurjar",
    role: "NURSE",
    tier: "NURSING_OFFICER",
    title: "Staff Nurse Grade-II",
    department: "Liver ICU",
    avatar: "NO6",
  },

  // 5. Cath Lab Technicians (TC01 - TC06)
  {
    code: "TC01",
    name: "Technician Rameshwar Jat",
    role: "TECHNICIAN",
    tier: "CATHLAB_TECHNICIAN",
    title: "Senior Cath-Lab Technician",
    department: "Angiosuite 1 (Siemens Artis)",
    avatar: "TC1",
  },
  {
    code: "TC02",
    name: "Technician Mukesh Bairwa",
    role: "TECHNICIAN",
    tier: "CATHLAB_TECHNICIAN",
    title: "Cath-Lab Technician",
    department: "Angiosuite 2 (Philips Allura)",
    avatar: "TC2",
  },
  {
    code: "TC03",
    name: "Technician Dinesh Kumar",
    role: "TECHNICIAN",
    tier: "CATHLAB_TECHNICIAN",
    title: "Cath-Lab Technician",
    department: "Hybrid OR & CT Fluoroscopy",
    avatar: "TC3",
  },
  {
    code: "TC04",
    name: "Technician Sandeep Kumawat",
    role: "TECHNICIAN",
    tier: "CATHLAB_TECHNICIAN",
    title: "Cath-Lab Technician",
    department: "OPD Intake & Registry",
    avatar: "TC4",
  },
  {
    code: "TC05",
    name: "Technician Govind Sharma",
    role: "TECHNICIAN",
    tier: "CATHLAB_TECHNICIAN",
    title: "Cath-Lab Technician",
    department: "PACS & RDSR Gateway",
    avatar: "TC5",
  },
  {
    code: "TC06",
    name: "Technician Vikram Meena",
    role: "TECHNICIAN",
    tier: "CATHLAB_TECHNICIAN",
    title: "Cath-Lab Technician",
    department: "Angiosuite Support",
    avatar: "TC6",
  },
];

export const UNIVERSAL_PASSWORD = "123456";

export function authenticateStaff(code: string, pin: string): StaffAccount | null {
  const normalizedCode = code.trim().toUpperCase();
  const normalizedPin = pin.trim();

  if (normalizedPin !== UNIVERSAL_PASSWORD) {
    return null;
  }

  const staff = INSTITUTIONAL_STAFF_ACCOUNTS.find(
    (s) => s.code.toUpperCase() === normalizedCode
  );

  return staff || null;
}

export function getStaffPermissions(role: StaffRole) {
  return {
    isDoctor: role === "DOCTOR",
    isNurse: role === "NURSE",
    isTechnician: role === "TECHNICIAN",
    canBookProcedures: role === "DOCTOR",
    canAccessWardBeds: role === "DOCTOR" || role === "NURSE",
    canAddPatientIntake: role === "DOCTOR" || role === "TECHNICIAN",
    canAccessCalculators: role === "DOCTOR",
    canGenerateDischargeCard: role === "DOCTOR",
    canViewAll: role === "DOCTOR",
  };
}
