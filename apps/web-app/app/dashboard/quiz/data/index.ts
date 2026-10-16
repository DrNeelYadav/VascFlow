import type { FrcrModuleInfo, FrcrModuleKey, FrcrQuestion } from "../types";
import paedsData from "./paeds.json";
import mskData from "./msk.json";
import chestData from "./chest.json";
import gutData from "./gut.json";
import gitData from "./git.json";
import cnsData from "./cns.json";

export const FRCR_MODULES: Record<FrcrModuleKey, FrcrModuleInfo> = {
  PAEDS: {
    key: "PAEDS",
    name: "Paediatric Radiology",
    shortName: "PAEDS",
    count: (paedsData as FrcrQuestion[]).length,
    description: "Congenital anomalies, neonatal emergencies, skeletal dysplasias, pediatric tumors",
    color: "emerald",
    iconName: "Baby",
  },
  MSK: {
    key: "MSK",
    name: "Musculoskeletal & Trauma",
    shortName: "MSK",
    count: (mskData as FrcrQuestion[]).length,
    description: "Bone tumors, fractures, internal joint derangement, arthritis & metabolic",
    color: "blue",
    iconName: "Bone",
  },
  CHEST: {
    key: "CHEST",
    name: "Cardiothoracic & Vascular",
    shortName: "CHEST",
    count: (chestData as FrcrQuestion[]).length,
    description: "Interstitial lung disease, mediastinal masses, aortic pathologies, pulmonary infections",
    color: "sky",
    iconName: "HeartPulse",
  },
  GUT: {
    key: "GUT",
    name: "Genitourinary & Pelvis",
    shortName: "GUT",
    count: (gutData as FrcrQuestion[]).length,
    description: "Renal lesions, prostate MRI, adrenal imaging, gynecologic malignancies",
    color: "purple",
    iconName: "Activity",
  },
  GIT: {
    key: "GIT",
    name: "Gastrointestinal & HPB",
    shortName: "GIT",
    count: (gitData as FrcrQuestion[]).length,
    description: "Liver masses, biliary strictures, acute abdomen, inflammatory bowel disease",
    color: "amber",
    iconName: "Compass",
  },
  CNS: {
    key: "CNS",
    name: "Central Nervous System & Head/Neck",
    shortName: "CNS",
    count: (cnsData as FrcrQuestion[]).length,
    description: "Brain neoplasms, stroke & vascular malformations, spinal cord lesions, temporal bone",
    color: "indigo",
    iconName: "Brain",
  },
};

export const MODULE_QUESTIONS: Record<FrcrModuleKey, FrcrQuestion[]> = {
  PAEDS: paedsData as FrcrQuestion[],
  MSK: mskData as FrcrQuestion[],
  CHEST: chestData as FrcrQuestion[],
  GUT: gutData as FrcrQuestion[],
  GIT: gitData as FrcrQuestion[],
  CNS: cnsData as FrcrQuestion[],
};

export function getQuestionsForModule(moduleKey: FrcrModuleKey): FrcrQuestion[] {
  return MODULE_QUESTIONS[moduleKey] || [];
}
