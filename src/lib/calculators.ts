/**
 * SMS Jaipur - Interventional Radiology Clinical Calculators & Safety Guardrails
 * 
 * Includes:
 * 1. Cigarroa's Maximum Allowable Contrast Dose (MACD) & CI-AKI Risk Engine
 * 2. CKD-EPI 2021 Race-Free eGFR Calculator & KDIGO Staging
 * 3. Child-Pugh Score & Functional Class for Hepatic Interventions (TACE/TIPS)
 * 4. ALBI Score & Grade (Objective Albumin-Bilirubin Hepatic Reserve)
 * 5. MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality Stratifier)
 * 6. MELD-Na Legacy Score Calculation
 * 7. BCLC (Barcelona Clinic Liver Cancer 2022) Staging Engine
 * 8. Mosteller Body Surface Area (BSA) & TACE Chemotherapy Dosing
 * 9. CIRSE Classification of Complications (Grades 1 to 6)
 * 
 * Strict Requirement: English-only clinical nomenclature, zero placeholders, high-precision mathematical guardrails.
 */

export interface MacdResult {
  valid: boolean;
  macdMl: number;
  contrastGivenMl: number;
  isExceeded: boolean;
  contrastToEgfrRatio: number | null;
  highAkiRisk: boolean;
  alertLevel: 'safe' | 'warning' | 'critical';
  recommendation: string;
}

/**
 * Cigarroa's Maximum Allowable Contrast Dose (MACD)
 * Formula: MACD (mL) = (5 * Weight in kg) / Serum Creatinine (mg/dL)
 * Safety Guardrails:
 * - Prevents contrast-induced acute kidney injury (CI-AKI).
 * - Flags ratio > 3.7 as high-risk nephrotoxic exposure.
 */
export function calculateMacd(
  weightKg: number,
  serumCreatinineMgDl: number,
  contrastGivenMl: number = 0,
  egfr?: number
): MacdResult {
  if (!weightKg || weightKg <= 0 || !serumCreatinineMgDl || serumCreatinineMgDl <= 0) {
    return {
      valid: false,
      macdMl: 0,
      contrastGivenMl: 0,
      isExceeded: false,
      contrastToEgfrRatio: null,
      highAkiRisk: false,
      alertLevel: 'safe',
      recommendation: 'Enter valid patient weight and serum creatinine.'
    };
  }

  const macdMl = Math.round((5 * weightKg) / serumCreatinineMgDl);
  const isExceeded = contrastGivenMl >= macdMl;

  let ratio: number | null = null;
  let highAkiRisk = false;

  if (egfr && egfr > 0) {
    ratio = parseFloat((contrastGivenMl / egfr).toFixed(2));
    highAkiRisk = ratio > 3.7;
  }

  let alertLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Contrast volume is within safe limits (Ceiling: ${macdMl} mL).`;

  if (isExceeded) {
    alertLevel = 'critical';
    recommendation = `CRITICAL ALERT: Contrast volume (${contrastGivenMl} mL) reaches or exceeds Maximum Allowable Dose (${macdMl} mL). Enforce aggressive IV hydration (1 mL/kg/h NS for 12h pre/post) and consider staged procedure or CO2 angiography.`;
  } else if (highAkiRisk) {
    alertLevel = 'warning';
    recommendation = `WARNING: Contrast-to-eGFR ratio (${ratio}) exceeds 3.7, indicating elevated risk of Contrast-Induced Acute Kidney Injury (CI-AKI). Minimize additional fluoroscopic runs.`;
  }

  return {
    valid: true,
    macdMl,
    contrastGivenMl,
    isExceeded,
    contrastToEgfrRatio: ratio,
    highAkiRisk,
    alertLevel,
    recommendation
  };
}

/**
 * Legacy compatibility alias for contrast safety calculations
 */
export function calculateContrastSafety(
  weightKg: number,
  serumCreatinineMgDl: number,
  contrastGivenMl: number = 0,
  egfr?: number
) {
  const res = calculateMacd(weightKg, serumCreatinineMgDl, contrastGivenMl, egfr);
  return {
    valid: res.valid,
    macd: res.macdMl,
    contrastGiven: res.contrastGivenMl,
    isExceeded: res.isExceeded,
    contrastToEgfrRatio: res.contrastToEgfrRatio,
    highAkiRisk: res.highAkiRisk,
    recommendation: res.recommendation
  };
}

/**
 * CKD-EPI 2021 Race-Free eGFR equation
 * Formula:
 * eGFR = 142 * min(Scr/kappa, 1)^alpha * max(Scr/kappa, 1)^-1.200 * 0.9938^Age * [1.012 if female]
 */
export function calculateEgfrCkdEpi2021(
  serumCreatinine: number,
  age: number,
  isFemale: boolean
): number {
  if (!serumCreatinine || serumCreatinine <= 0 || !age || age <= 0) return 0;

  const kappa = isFemale ? 0.7 : 0.9;
  const alpha = isFemale ? -0.241 : -0.302;
  const sexMultiplier = isFemale ? 1.012 : 1.0;

  const scrOverKappa = serumCreatinine / kappa;
  const minTerm = Math.pow(Math.min(scrOverKappa, 1), alpha);
  const maxTerm = Math.pow(Math.max(scrOverKappa, 1), -1.200);
  const ageTerm = Math.pow(0.9938, age);

  const egfr = 142 * minTerm * maxTerm * ageTerm * sexMultiplier;
  return Math.round(egfr * 10) / 10;
}

export interface EgfrDetailResult {
  valid: boolean;
  egfr: number;
  ckdStage: string;
  stageCode: 'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5' | 'Invalid';
  contrastAdvice: string;
  riskLevel: 'low' | 'moderate' | 'high';
}

/**
 * Detailed KDIGO CKD Stage and Contrast Nephropathy Guardrail
 */
export function calculateEgfrDetails(
  serumCreatinine: number,
  age: number,
  isFemale: boolean
): EgfrDetailResult {
  const egfr = calculateEgfrCkdEpi2021(serumCreatinine, age, isFemale);

  if (egfr <= 0) {
    return {
      valid: false,
      egfr: 0,
      ckdStage: 'Invalid Parameters',
      stageCode: 'Invalid',
      contrastAdvice: 'Enter valid serum creatinine and age.',
      riskLevel: 'low'
    };
  }

  let ckdStage = 'G1 (Normal or High, >= 90 mL/min/1.73m2)';
  let stageCode: 'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5' = 'G1';
  let contrastAdvice = 'Standard contrast protocol. Maintain standard hydration.';
  let riskLevel: 'low' | 'moderate' | 'high' = 'low';

  if (egfr < 15) {
    ckdStage = 'G5 (Kidney Failure, < 15 mL/min/1.73m2)';
    stageCode = 'G5';
    contrastAdvice = 'CRITICAL CI-AKI RISK: End-stage renal disease. Evaluate hemodialysis timing or consider non-contrast / CO2 angiography.';
    riskLevel = 'high';
  } else if (egfr < 30) {
    ckdStage = 'G4 (Severely Decreased, 15 - 29 mL/min/1.73m2)';
    stageCode = 'G4';
    contrastAdvice = 'HIGH CI-AKI RISK: Minimize contrast volume, consider CO2 angiography, aggressive pre/post hydration (1 mL/kg/h NS for 12 hours).';
    riskLevel = 'high';
  } else if (egfr < 45) {
    ckdStage = 'G3b (Moderately to Severely Decreased, 30 - 44 mL/min/1.73m2)';
    stageCode = 'G3b';
    contrastAdvice = 'MODERATE CI-AKI RISK: Pre-hydrate with normal saline (1 mL/kg/h for 6h pre and 6h post), use iso-osmolar non-ionic contrast.';
    riskLevel = 'moderate';
  } else if (egfr < 60) {
    ckdStage = 'G3a (Mildly to Moderately Decreased, 45 - 59 mL/min/1.73m2)';
    stageCode = 'G3a';
    contrastAdvice = 'MILD RISK: Ensure oral/IV hydration, avoid repetitive contrast injections within 48 hours.';
    riskLevel = 'low';
  } else if (egfr < 90) {
    ckdStage = 'G2 (Mildly Decreased, 60 - 89 mL/min/1.73m2)';
    stageCode = 'G2';
    contrastAdvice = 'Low risk: Standard hydration protocol and routine monitoring.';
    riskLevel = 'low';
  }

  return {
    valid: true,
    egfr,
    ckdStage,
    stageCode,
    contrastAdvice,
    riskLevel
  };
}

export interface ChildPughResult {
  score: number;
  classGrade: 'A' | 'B' | 'C';
  oneYearSurvival: string;
  twoYearSurvival: string;
  recommendation: string;
}

/**
 * Child-Pugh Score & Class
 * Evaluates hepatic functional reserve for TACE / TIPS procedures.
 */
export function calculateChildPugh(
  totalBilirubinMgDl: number,
  serumAlbuminGDl: number,
  inr: number,
  ascitesPoints: 1 | 2 | 3, // 1: None, 2: Mild/Controlled, 3: Moderate/Severe
  encephPoints: 1 | 2 | 3   // 1: None, 2: Grade 1-2, 3: Grade 3-4
): ChildPughResult {
  let score = 0;

  // Bilirubin
  if (totalBilirubinMgDl < 2.0) score += 1;
  else if (totalBilirubinMgDl <= 3.0) score += 2;
  else score += 3;

  // Albumin
  if (serumAlbuminGDl > 3.5) score += 1;
  else if (serumAlbuminGDl >= 2.8) score += 2;
  else score += 3;

  // INR
  if (inr < 1.7) score += 1;
  else if (inr <= 2.2) score += 2;
  else score += 3;

  score += ascitesPoints;
  score += encephPoints;

  let classGrade: 'A' | 'B' | 'C' = 'A';
  let oneYearSurvival = '100%';
  let twoYearSurvival = '85%';
  let recommendation = 'Well-compensated hepatic function. Eligible for standard cTACE / DEB-TACE.';

  if (score >= 10) {
    classGrade = 'C';
    oneYearSurvival = '45%';
    twoYearSurvival = '35%';
    recommendation = 'Decompensated cirrhosis. Relative/absolute contraindication for conventional TACE due to high risk of hepatic infarction. Evaluate for liver transplant or palliative medical therapy.';
  } else if (score >= 7) {
    classGrade = 'B';
    oneYearSurvival = '80%';
    twoYearSurvival = '60%';
    recommendation = 'Moderately compromised liver reserve. Superselective segmental TACE or DEB-TACE recommended; avoid lobar embolization to preserve functional parenchyma.';
  }

  return {
    score,
    classGrade,
    oneYearSurvival,
    twoYearSurvival,
    recommendation
  };
}

export interface AlbiResult {
  score: number;
  grade: 1 | 2 | 3;
  medianSurvivalMonths: string;
  recommendation: string;
}

/**
 * ALBI Score (Albumin-Bilirubin Grade)
 * Formula: (log10(Bilirubin in umol/L) * 0.66) + (Albumin in g/L * -0.085)
 * Bilirubin in umol/L = mg/dL * 17.1
 * Albumin in g/L = g/dL * 10
 */
export function calculateAlbi(totalBilirubinMgDl: number, serumAlbuminGDl: number): AlbiResult {
  const biliUmol = totalBilirubinMgDl * 17.1;
  const albGL = serumAlbuminGDl * 10;

  if (biliUmol <= 0 || albGL <= 0) {
    return { score: 0, grade: 1, medianSurvivalMonths: 'N/A', recommendation: 'Invalid inputs' };
  }

  const score = parseFloat(((Math.log10(biliUmol) * 0.66) + (albGL * -0.085)).toFixed(2));
  let grade: 1 | 2 | 3 = 1;
  let medianSurvivalMonths = '18.5 - 32.0 months';
  let recommendation = 'Low hepatic risk. Favorable post-TACE / post-embolization tolerance.';

  if (score > -1.39) {
    grade = 3;
    medianSurvivalMonths = '3.5 - 5.5 months';
    recommendation = 'Severe liver dysfunction. High probability of hepatic decompensation post-TACE.';
  } else if (score > -2.60) {
    grade = 2;
    medianSurvivalMonths = '10.0 - 14.5 months';
    recommendation = 'Intermediate liver reserve. Proceed with targeted microcatheter superselection.';
  }

  return {
    score,
    grade,
    medianSurvivalMonths,
    recommendation
  };
}

export interface Meld3Result {
  score: number;
  mortality90Day: string;
  tipsRecommendation: string;
}

/**
 * MELD 3.0 Score
 * Incorporates: Bilirubin, Creatinine, INR, Sodium, Albumin, and Female Sex Adjustment
 */
export function calculateMeld3(
  bilirubinMgDl: number,
  creatinineMgDl: number,
  inr: number,
  sodiumMeqL: number,
  albuminGDl: number,
  isFemale: boolean
): Meld3Result {
  const bili = Math.max(1.0, Math.min(bilirubinMgDl, 50.0));
  const cr = Math.max(1.0, Math.min(creatinineMgDl, 3.0));
  const inrVal = Math.max(1.0, Math.min(inr, 3.0));
  const na = Math.max(125, Math.min(sodiumMeqL, 137));
  const alb = Math.max(1.0, Math.min(albuminGDl, 3.5));

  // MELD 3.0 Formula components:
  // 1.33 (if female) + 4.56 * ln(bili) + 0.82 * (137 - Na) - (0.24 * (137 - Na) * ln(bili)) + 9.09 * ln(INR) + 11.14 * ln(Cr) + 1.85 * (3.5 - Alb) - (1.83 * (3.5 - Alb) * ln(Cr))
  const femaleTerm = isFemale ? 1.33 : 0;
  const biliTerm = 4.56 * Math.log(bili);
  const naTerm = 0.82 * (137 - na);
  const naBiliInteraction = 0.24 * (137 - na) * Math.log(bili);
  const inrTerm = 9.09 * Math.log(inrVal);
  const crTerm = 11.14 * Math.log(cr);
  const albTerm = 1.85 * (3.5 - alb);
  const albCrInteraction = 1.83 * (3.5 - alb) * Math.log(cr);

  let meld = femaleTerm + biliTerm + naTerm - naBiliInteraction + inrTerm + crTerm + albTerm - albCrInteraction;
  meld = Math.round(Math.max(6, Math.min(meld, 40)));

  let mortality90Day = '< 2%';
  let tipsRecommendation = 'Favorable TIPS candidate. Low risk of post-TIPS early hepatic failure.';

  if (meld > 24) {
    mortality90Day = '> 50%';
    tipsRecommendation = 'High 90-day mortality risk. Elective TIPS generally contraindicated unless emergency salvage for uncontrolled variceal bleeding.';
  } else if (meld >= 19) {
    mortality90Day = '20 - 35%';
    tipsRecommendation = 'Borderline TIPS candidate. Weigh benefits of portal decompression against high risk of post-TIPS hepatic encephalopathy.';
  } else if (meld >= 12) {
    mortality90Day = '5 - 12%';
    tipsRecommendation = 'Standard TIPS eligibility range for refractory ascites or secondary variceal prophylaxis.';
  }

  return {
    score: meld,
    mortality90Day,
    tipsRecommendation
  };
}

export interface MeldNaResult {
  valid: boolean;
  meldNa: number;
  mortality3Mo: string;
  tipsEligibility: string;
}

/**
 * Legacy UNOS MELD-Na equation
 */
export function calculateMeldNa(
  biliMgDl: number,
  creatinineMgDl: number,
  inr: number,
  sodiumMeqL: number = 137
): MeldNaResult {
  if (!biliMgDl || !creatinineMgDl || !inr || biliMgDl <= 0 || creatinineMgDl <= 0 || inr <= 0) {
    return {
      valid: false,
      meldNa: 6,
      mortality3Mo: '< 2%',
      tipsEligibility: 'Enter valid Bilirubin, Creatinine, and INR.'
    };
  }

  const bili = Math.max(1.0, biliMgDl);
  const cr = Math.max(1.0, Math.min(3.0, creatinineMgDl));
  const inrVal = Math.max(1.0, inr);
  const na = Math.max(125, Math.min(137, sodiumMeqL));

  let meldBase = (0.957 * Math.log(cr) + 0.378 * Math.log(bili) + 1.120 * Math.log(inrVal) + 0.643) * 10;
  meldBase = Math.round(meldBase);

  if (meldBase > 11) {
    meldBase = meldBase + 1.32 * (137 - na) - (0.033 * meldBase * (137 - na));
  }

  const meldNa = Math.round(Math.max(6, Math.min(40, meldBase)));

  let mortality3Mo = '< 2%';
  if (meldNa >= 40) mortality3Mo = '> 70%';
  else if (meldNa >= 30) mortality3Mo = '50 - 70%';
  else if (meldNa >= 20) mortality3Mo = '20 - 50%';
  else if (meldNa >= 10) mortality3Mo = '6 - 20%';

  let tipsEligibility = 'Suitable for TIPS procedure.';
  if (meldNa > 25) {
    tipsEligibility = 'CONTRAINDICATED: Elective TIPS contraindicated in most guidelines (MELD-Na > 25).';
  } else if (meldNa > 18) {
    tipsEligibility = 'CAUTION: Elevated post-TIPS mortality risk (MELD-Na > 18).';
  }

  return {
    valid: true,
    meldNa,
    mortality3Mo,
    tipsEligibility
  };
}

export interface BclcResult {
  stage: '0' | 'A' | 'B' | 'C' | 'D';
  stageName: string;
  treatment: string;
  taceCandidate: boolean;
}

/**
 * Barcelona Clinic Liver Cancer (BCLC) 2022 Staging Algorithm
 */
export function calculateBclc(
  tumorCount: number,
  maxTumorSizeCm: number,
  hasVascularInvasion: boolean,
  hasExtrahepaticSpread: boolean,
  childPughClass: 'A' | 'B' | 'C',
  ecogPerformanceStatus: number
): BclcResult {
  if (ecogPerformanceStatus > 2 || childPughClass === 'C') {
    return {
      stage: 'D',
      stageName: 'Terminal Stage',
      treatment: 'Best supportive care only. TACE and invasive interventional procedures contraindicated.',
      taceCandidate: false
    };
  }

  if (hasVascularInvasion || hasExtrahepaticSpread || ecogPerformanceStatus >= 1) {
    return {
      stage: 'C',
      stageName: 'Advanced Stage',
      treatment: 'Systemic therapy (Atezolizumab + Bevacizumab or Durvalumab + Tremelimumab). Standard TACE not recommended outside clinical trial.',
      taceCandidate: false
    };
  }

  if (tumorCount === 1 && maxTumorSizeCm <= 2) {
    return {
      stage: '0',
      stageName: 'Very Early Stage',
      treatment: 'Surgical resection, thermal ablation (RFA/MWA), or liver transplantation.',
      taceCandidate: false
    };
  }

  if (tumorCount <= 3 && maxTumorSizeCm <= 3) {
    return {
      stage: 'A',
      stageName: 'Early Stage',
      treatment: 'Curative intent: Surgical resection, percutaneous ablation, or liver transplant (Milan Criteria). TACE indicated if non-surgical.',
      taceCandidate: true
    };
  }

  return {
    stage: 'B',
    stageName: 'Intermediate Stage',
    treatment: 'Transarterial Chemoembolization (cTACE or DEB-TACE) is primary first-line standard of care.',
    taceCandidate: true
  };
}

export interface BsaResult {
  valid: boolean;
  bsaM2: number;
  doxorubicinStandardDoseMg: number;
  doxorubicinReducedDoseMg: number;
  recommendation: string;
}

/**
 * Mosteller Body Surface Area (BSA) & Doxorubicin Dosing for TACE
 * Formula: BSA (m^2) = sqrt((Weight in kg * Height in cm) / 3600)
 */
export function calculateBsa(weightKg: number, heightCm: number): BsaResult {
  if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) {
    return {
      valid: false,
      bsaM2: 0,
      doxorubicinStandardDoseMg: 0,
      doxorubicinReducedDoseMg: 0,
      recommendation: 'Enter valid patient weight and height.'
    };
  }

  const bsa = Math.sqrt((weightKg * heightCm) / 3600);
  const bsaM2 = parseFloat(bsa.toFixed(2));
  const standardDose = Math.round(bsa * 50); // 50 mg/m^2 standard
  const reducedDose = Math.round(bsa * 25);  // 25 mg/m^2 (for bilirubin 1.5 - 3.0 mg/dL)

  return {
    valid: true,
    bsaM2,
    doxorubicinStandardDoseMg: standardDose,
    doxorubicinReducedDoseMg: reducedDose,
    recommendation: `Calculated BSA: ${bsaM2} m2. Standard Doxorubicin dose: ${standardDose} mg (50 mg/m2). Reduced dose: ${reducedDose} mg (25 mg/m2 for borderline bilirubin).`
  };
}

export interface CirseComplication {
  grade: number;
  title: string;
  definition: string;
  clinicalAction: string;
}

/**
 * CIRSE (Cardiovascular and Interventional Radiological Society of Europe)
 * Classification System for Complications
 */
export const CIRSE_COMPLICATIONS: CirseComplication[] = [
  {
    grade: 1,
    title: 'Grade 1 (Minor / Self-Limiting)',
    definition: 'No therapy required, no consequence; resolves spontaneously.',
    clinicalAction: 'Routine observation only (e.g. minor puncture site ecchymosis).'
  },
  {
    grade: 2,
    title: 'Grade 2 (Nominal Therapy)',
    definition: 'Requires nominal therapy, no consequence; includes overnight observation without clinical escalation.',
    clinicalAction: 'Outpatient treatment or brief monitoring (e.g. minor groin hematoma).'
  },
  {
    grade: 3,
    title: 'Grade 3 (Additional Therapy / Short Stay)',
    definition: 'Requires additional interventional therapy or short hospitalization (< 48 hours).',
    clinicalAction: 'Interventional remediation (e.g. ultrasound-guided thrombin injection for pseudoaneurysm).'
  },
  {
    grade: 4,
    title: 'Grade 4 (Major Therapy / Escalation)',
    definition: 'Requires major therapy, unplanned increase in level of care, prolonged hospitalization (> 48 hours), or ICU admission.',
    clinicalAction: 'Immediate specialist intervention (e.g. non-target embolization requiring covered stenting).'
  },
  {
    grade: 5,
    title: 'Grade 5 (Permanent Adverse Sequelae)',
    definition: 'Permanent adverse sequelae, organ loss, or major disability.',
    clinicalAction: 'Multidisciplinary morbidity review and surgical intervention.'
  },
  {
    grade: 6,
    title: 'Grade 6 (Death)',
    definition: 'Patient death resulting directly or indirectly from interventional procedure.',
    clinicalAction: 'Formal departmental mortality and root-cause audit.'
  }
];

// Re-export all 30 procedure-linked calculators and metadata registry
export * from './procedureCalculators';
