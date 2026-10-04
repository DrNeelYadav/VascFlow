/**
 * Master Interventional Radiology Procedure Catalog - TypeScript Definitions
 * Aligned with Rajasthan Government Health Schemes (MAAY / Chiranjeevi & RGHS),
 * SMS Medical College & Hospital IR Department protocols, CIRSE, and SIR standards.
 */

export type MaayRghsScheme = 'MAAY' | 'RGHS' | 'BOTH';

export type ModalityType = 'XA' | 'CT' | 'US' | 'MRI' | 'EUS' | 'HYBRID';

export interface MaayRghsCompatibility {
  schemeName: MaayRghsScheme;
  packageName: string;
  packageCode: string;
  icd10: string;
  tariffInr?: number;
}

export interface PostOpCare {
  immobilizationHours: number;
  immobilizationInstructions: string;
  hematomaChecks: string;
  requiredImaging?: string;
  hydrationProtocol: string;
  medications: string[];
  redFlags: string[];
}

export interface MasterProcedure {
  id: string;
  categoryNumber: number; // 1 to 22
  categoryName: string;
  title: string;
  maayRghsCompatibility: MaayRghsCompatibility;
  modality: ModalityType;
  targetAnatomy: string[];
  sedation: string;
  accessSiteDefault: string;
  sheathDefault: string;
  cathetersAndWires: string;
  microcatheterSystem?: string;
  embolicOrImplants?: string;
  proceduralNarrativeTemplate: string;
  postOpCare: PostOpCare;
  consentId: string;
  calculatorId?: string;
}

export interface OperativeNoteOptions {
  patientName: string;
  age: number | string;
  gender: string;
  crNumber: string;
  ipdBed: string;
  dateOfProcedure: string;
  supervisingConsultant?: string;
  primaryOperator?: string;
  customFindings?: string;
  customIntervention?: string;
  indication?: string;
  suite?: string;
  accessSite?: string;
  sheath?: string;
  fluoroTimeMinutes?: number;
  contrast?: string;
}

export interface MasterCategoryMeta {
  categoryNumber: number;
  categoryName: string;
  shortCode: string;
  description: string;
  procedureCount: number;
}
