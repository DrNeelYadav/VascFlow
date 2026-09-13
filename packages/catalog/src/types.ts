export type IRDomain =
  | "embolization"
  | "portal_htn"
  | "oncology"
  | "venous"
  | "arterial"
  | "biopsy";

export type IRModality = "XA" | "CT" | "US" | "ROSE" | "MR" | "FL";

export interface PreOpChecklistItem {
  id: string;
  label: string;
  required: boolean;
}

export interface HardwareItem {
  item: string;
  desc: string;
}

export interface IRProcedure {
  key: string;
  title: string;
  category: string;
  domain: IRDomain;
  modality: IRModality;
  targetVessels: string[];
  defaultPanelCostINR: number;
  requiredLabs: string[];
  clinicalCriteria: string;
  preOpChecklist: PreOpChecklistItem[];
  hardwareRequisition: HardwareItem[];
}
