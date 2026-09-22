/**
 * Interventional Radiology (IR) Patient Tracker & Clinical Data Modeling
 * Extracted, normalized, and modeled directly from the Master Google Sheet:
 * https://docs.google.com/spreadsheets/d/1X1WAp0ydPuy58n3l3g4qp1Fhmt1Z_PJbV3mY62naHR8/edit
 * 
 * Covering:
 * - Instructions: Business logic, automatic follow-up transitions, and quality audit rules
 * - Settings: Procedure types, default follow-up schedules, operators, and payer schemes
 * - Patient Log: Complete 37-column clinical log tracking
 * - Patient Lookup: Card-based lookup data structure
 * - Analytics: KPIs, distribution filters, and trailing metrics
 */

// ==========================================
// 1. SETTINGS & ENUMS
// ==========================================

export type FollowupType = 'Imaging (CT/MR/USG)' | 'OPD Visit' | 'Telephonic Call';

export type IntervalUnit = 'Weeks' | 'Months';

export type FollowupStatus = 'Pending' | 'Due Soon' | 'Overdue' | 'Done' | 'Not Required';

export type ImmediateComplication = 'None' | 'Minor' | 'Major';

export type TechnicalSuccess = 'Yes' | 'No' | 'Partial';

export type HistopathologyStatus =
  | 'N/A'
  | 'Pending'
  | 'Received - Benign'
  | 'Received - Malignant'
  | 'Inconclusive';

export type ClinicalOutcome =
  | 'Complete Response'
  | 'Partial Response'
  | 'Stable Disease'
  | 'Progressive Disease'
  | 'Recurrence'
  | 'N/A';

export type AdmissionStatus = 'Day Care' | 'Admitted' | 'Discharged';

export type PatientStatus = 'Active' | 'Follow-up Complete' | 'Lost to Follow-up' | 'Expired';

export type PayerScheme =
  | 'Chiranjeevi' // MAAY (Mukhyamantri Ayushman Arogya Yojana)
  | 'Ayushman Bharat' // PMJAY
  | 'RGHS' // Rajasthan Government Health Scheme
  | 'ECHS' // Ex-Servicemen Contributory Health Scheme
  | 'Outside State'
  | 'Others';

export type PatientSex = 'M' | 'F' | 'Other';

export interface ProcedureSetting {
  procedureType: string;
  defaultFollowupType: FollowupType;
  defaultIntervalNumber: number;
  defaultIntervalUnit: IntervalUnit;
}

export interface OperatorSetting {
  name: string;
  designation?: string;
  department?: string;
}

export interface ReferringDoctorSetting {
  name: string;
  department?: string;
  unit?: string;
}

// ==========================================
// 2. PATIENT LOG (37 COLUMNS)
// ==========================================

export interface PatientLogEntry {
  id?: string;
  // Demographics
  uhid: string; // Col 1: UHID / Hospital Registration Number
  patientName: string; // Col 2: Patient Name
  age: number; // Col 3: Age (Years)
  sex: PatientSex; // Col 4: Sex (M / F / Other)
  contactNumber: string; // Col 5: Primary Contact Number
  alternateContact?: string; // Col 6: Alternate Contact
  referringDoctor: string; // Col 7: Referring Doctor / Department

  // Procedure Details
  diagnosis: string; // Col 8: Diagnosis / Clinical Indication
  procedureType: string; // Col 9: Procedure Type (from Settings dropdown)
  procedureDate: string; // Col 10: Procedure Date (YYYY-MM-DD)
  admissionStatus: AdmissionStatus; // Col 11: Admission Status (Day Care / Admitted / Discharged)
  dischargeDate?: string; // Col 12: Discharge Date (YYYY-MM-DD)
  operator: string; // Col 13: Operator Name
  accessionNo?: string; // Col 14: CT/MR Accession No. / PACS Study UID
  anesthesia: string; // Col 15: Anesthesia (Local / Sedation / GA)

  // Safety Labs & Quality Metrics
  preProcCreatinine?: number; // Col 16: Pre-Procedure Serum Creatinine (mg/dL)
  preProcInrPlatelets?: string; // Col 17: Pre-Procedure INR / Platelets (e.g. "1.1 / 180k")
  contrastVolumeMl: number; // Col 18: Contrast Volume administered (mL)

  // Immediate Outcomes
  immediateComplication: ImmediateComplication; // Col 19: Immediate Complication (None / Minor / Major)
  technicalSuccess: TechnicalSuccess; // Col 20: Technical Success (Yes / No / Partial)
  deviceMaterialUsed: string; // Col 21: Device / Material / Hardware Used
  histopathologyStatus: HistopathologyStatus; // Col 22: Histopathology Status

  // Follow-up Scheduling & Suggested Interval
  suggestedFollowupType: string; // Col 23: Suggested Follow-up Type (from Settings default)
  suggestedFollowupInterval: string; // Col 24: Suggested Follow-up Interval (e.g. "6 Weeks")
  followupType: FollowupType; // Col 25: Follow-up Type selected for patient
  intervalNumber: number; // Col 26: Interval Number
  intervalUnit: IntervalUnit; // Col 27: Interval Unit (Weeks / Months)
  followupDueDate?: string; // Col 28: Follow-up Due Date (calculated or manual YYYY-MM-DD)
  followupStatus: FollowupStatus; // Col 29: Follow-up Status (Overdue / Due Soon / Done / Pending / Not Required)
  followupDoneDate?: string; // Col 30: Follow-up Done Date (YYYY-MM-DD)

  // Follow-up Outcomes
  clinicalOutcome: ClinicalOutcome; // Col 31: Clinical Outcome
  followupOutcomeNotes?: string; // Col 32: Follow-up Outcome / Notes
  nextFollowupDue?: string; // Col 33: Next Follow-up Due (YYYY-MM-DD)
  patientStatus: PatientStatus; // Col 34: Patient Status
  payerScheme: PayerScheme; // Col 35: Payer / Scheme
  remarks?: string; // Col 36: Remarks / Special Instructions
  dateAdded: string; // Col 37: Date Added (YYYY-MM-DD)
}

// ==========================================
// 3. PATIENT LOOKUP VIEW
// ==========================================

export interface PatientLookupCard {
  uhid: string;
  patientName: string;
  age: number;
  sex: PatientSex;
  contactNumber: string;
  alternateContact?: string;
  referringDoctor: string;
  diagnosis: string;
  procedureType: string;
  procedureDate: string;
  admissionStatus: AdmissionStatus;
  operator: string;
  immediateComplication: ImmediateComplication;
  technicalSuccess: TechnicalSuccess;
  histopathologyStatus: HistopathologyStatus;
  followupType: FollowupType;
  followupDueDate?: string;
  followupStatus: FollowupStatus;
  clinicalOutcome: ClinicalOutcome;
  followupOutcomeNotes?: string;
  patientStatus: PatientStatus;
  payerScheme: PayerScheme;
  remarks?: string;
}

// ==========================================
// 4. ANALYTICS & DASHBOARD METRICS
// ==========================================

export interface AnalyticsFilter {
  year?: string; // e.g. '2025', '2026', or 'All'
  month?: string; // e.g. 'Jan', 'Feb', or 'All'
  procedureType?: string; // e.g. 'TACE', or 'All'
  operator?: string; // e.g. 'Dr. Gupta', or 'All'
}

export interface AnalyticsKpiSummary {
  totalProceduresFiltered: number;
  currentlyAdmittedLive: number;
  overdueFollowups: number;
  dueSoonFollowups: number;
  technicalSuccessRatePercent: number;
  majorComplicationRatePercent: number;
}

export interface CategoryCount {
  category: string;
  count: number;
  percentage?: number;
}

export interface MonthlyVolumeTrend {
  monthYear: string; // e.g. "Sep-25", "Jan-26"
  volume: number;
}

export interface CurrentlyAdmittedPatient {
  uhid: string;
  patientName: string;
  procedureType: string;
  procedureDate: string;
  operator: string;
  admissionStatus: AdmissionStatus;
}

export interface AnalyticsDashboardData {
  filters: AnalyticsFilter;
  kpis: AnalyticsKpiSummary;
  procedureTypeDistribution: CategoryCount[];
  operatorDistribution: CategoryCount[];
  referralsDistribution: CategoryCount[];
  payerSchemeDistribution: CategoryCount[];
  immediateComplicationRate: CategoryCount[];
  followupStatusBreakdown: CategoryCount[];
  clinicalOutcomeDistribution: CategoryCount[];
  histopathologyResults: CategoryCount[];
  sexDistribution: CategoryCount[];
  admissionStatusDistribution: CategoryCount[];
  ageDistribution: CategoryCount[];
  monthlyVolumeTrailing12Months: MonthlyVolumeTrend[];
  currentlyAdmittedLive: CurrentlyAdmittedPatient[];
}

// ==========================================
// 5. HARDWARE BLUEPRINT & TARIFF DATA
// ==========================================

export interface HardwareIndentItem {
  id?: string;
  procedureBlueprintId?: string;
  category: string; // e.g. 'Vascular Access', 'Diagnostic Catheter', 'Microcatheter', 'Embolic Agent', 'Stent'
  itemName: string; // e.g. '5F Radiofocus Introducer Sheath'
  specification: string; // e.g. '11 cm length, 0.035 wire compatible'
  standardStore: string; // e.g. 'Angio Suite Store', 'Central IR Store', 'DDC-14 Central'
  estimatedCostInr?: number;
  isImplant: boolean;
  implantCode?: string; // e.g. 'IMP 38'
}

export interface SchemeTariffItem {
  id?: string;
  procedureBlueprintId?: string;
  scheme: PayerScheme | 'MAAY' | 'RGHS' | 'PMJAY' | 'ECHS' | 'GENERAL';
  packageCode: string; // e.g. '2849-IN061A', '693/12'
  packageName: string;
  tariffAmount: number;
  nabhRate?: number;
  nonNabhRate?: number;
  implantCovered: boolean;
  implantDetails?: {
    code: string;
    name: string;
    maxRate?: number;
  }[];
  preAuthCriteria?: string;
  requiredDocuments: string[];
}

export interface ProcedureBlueprintData {
  id: string;
  name: string;
  category: string;
  code: string;
  rghsCode?: string;
  icd10: string;
  defaultFollowupType: FollowupType;
  defaultIntervalNumber: number;
  defaultIntervalUnit: IntervalUnit;
  indications: string[];
  preOpCriteria: string[];
  techniqueSteps: string[];
  complications: string[];
  vendorContacts: string[];
  baseTariffInr: number;
  hardware: HardwareIndentItem[];
  tariffs: SchemeTariffItem[];
}
