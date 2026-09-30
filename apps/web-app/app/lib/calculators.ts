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

import { z } from "zod";

export interface MacdResult {
  valid: boolean;
  macdMl: number;
  rawMacdMl: number;
  contrastGivenMl: number;
  isExceeded: boolean;
  isCappedAt300: boolean;
  validationNotice: string;
  acrNkfGuidance: string;
  clinicalNotes: string;
  contrastToEgfrRatio: number | null;
  highAkiRisk: boolean;
  alertLevel: 'safe' | 'warning' | 'critical';
  recommendation: string;
}

/**
 * Cigarroa's Maximum Allowable Contrast Dose (MACD)
 * Formula: MACD (mL) = (5 * Weight in kg) / Serum Creatinine (mg/dL)
 * Mandatory Clinical Guardrails:
 * - Hard-capped at 300 mL (Absolute volume ceiling regardless of calculated ratio; exposures >300 mL dramatically increase renal tubular necrosis).
 * - Label: Validated originally for diagnostic/interventional coronary angiography.
 * - Sits alongside ACR-NKF 2020 Consensus eGFR guidance (CI-AKI risk clinically negligible if eGFR >= 30 mL/min/1.73m2 without acute kidney injury).
 */
export function calculateMacd(
  weightKg: number,
  serumCreatinineMgDl: number,
  contrastGivenMl: number = 0,
  egfr?: number
): MacdResult {
  const validationNotice = 'Validated for diagnostic/interventional coronary angiography; serves as an empirical contrast threshold estimate in peripheral/visceral IR.';
  const acrNkfGuidance = 'ACR-NKF 2020 Consensus (Davenport et al., Radiology 2020) [Intravenous Contrast Specific]: Prophylactic IV hydration is indicated in patients with eGFR < 30 mL/min/1.73m2 (not on dialysis) or AKI. In patients with eGFR 30–44 mL/min/1.73m2, prophylaxis is an individualized clinical decision. Prophylaxis is not indicated for stable patients with eGFR >= 45 mL/min/1.73m2. Note: This consensus evaluates IV contrast; intra-arterial first-pass renal exposure (e.g. suprarenal aortic injection) carries higher nephrotoxic risk and is outside this consensus.';
  const clinicalNotes = 'Cigarroa MACD formula was originally validated for diagnostic and interventional coronary angiography (Cigarroa et al., Am J Med 1989;86(6 Pt 1):649-652). A mandatory 300 mL maximum hard ceiling cap is enforced (Math.min(calculatedDose, 300)) to prevent severe acute tubular necrosis. In visceral and peripheral interventional radiology, contrast volume must be evaluated alongside ACR-NKF 2020 consensus eGFR guidance (Davenport et al., Radiology 2020;294(3):660-668), which indicates prophylactic volume expansion for patients with eGFR < 30 mL/min/1.73m2 or acute kidney injury.';

  if (!weightKg || weightKg <= 0 || !serumCreatinineMgDl || serumCreatinineMgDl <= 0) {
    return {
      valid: false,
      macdMl: 0,
      rawMacdMl: 0,
      contrastGivenMl: 0,
      isExceeded: false,
      isCappedAt300: false,
      validationNotice,
      acrNkfGuidance,
      clinicalNotes,
      contrastToEgfrRatio: null,
      highAkiRisk: false,
      alertLevel: 'safe',
      recommendation: 'Enter valid patient weight (> 0 kg) and serum creatinine (> 0 mg/dL).'
    };
  }

  // Calculate raw Cigarroa MACD: (5 * weightKg) / serumCreatinineMgDl
  const calculatedDose = Math.round((5 * weightKg) / serumCreatinineMgDl);
  const rawMacd = calculatedDose;
  
  // Mandatory Hard Cap: Absolute ceiling is 300 mL (Math.min(calculatedDose, 300))
  // Severe renal impairment (eGFR < 30 or Scr >= 3.0): Conservative default cap of 40 mL (pending faculty approval).
  const isSevereRenalImpairment = (egfr !== undefined && egfr > 0 && egfr < 30) || serumCreatinineMgDl >= 3.0;
  let macdMl = Math.min(calculatedDose, 300);
  const isCappedAt300 = calculatedDose > 300;

  if (isSevereRenalImpairment) {
    macdMl = Math.min(macdMl, 40);
  }
  // Enforce mandatory 300 mL maximum hard ceiling cap
  macdMl = Math.min(macdMl, 300);

  const isExceeded = contrastGivenMl >= macdMl;

  let ratio: number | null = null;
  let highAkiRisk = false;

  if (egfr && egfr > 0) {
    ratio = parseFloat((contrastGivenMl / egfr).toFixed(2));
    highAkiRisk = ratio > 3.7;
  }

  let alertLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Contrast volume is within safe limits (Ceiling: ${macdMl} mL${isCappedAt300 ? ' [300 mL Hard Cap Applied]' : ''}).`;

  if (isSevereRenalImpairment && contrastGivenMl >= 30) {
    alertLevel = 'critical';
    recommendation = `CONTRAST TOXICITY CRITICAL WARNING (eGFR < 30 or Scr >= 3.0): Severe renal failure / AKI. Conservative default sets a 40 mL volume cap (pending IR faculty protocol approval). Strongly consider non-contrast CO2 angiography, IVUS, and strongly consider individualized pre/post IV hydration (assessing cardiopulmonary tolerance).`;
  } else if (isExceeded) {
    alertLevel = 'critical';
    recommendation = `CRITICAL ALERT: Contrast volume (${contrastGivenMl} mL) reaches or exceeds Maximum Allowable Dose (${macdMl} mL). Strongly consider volume expansion (1 mL/kg/h NS pre/post if tolerated) and consider staged procedure or CO2 angiography.`;
  } else if (highAkiRisk) {
    alertLevel = 'warning';
    recommendation = `WARNING: Contrast-to-eGFR ratio (${ratio}) exceeds 3.7, indicating elevated risk of Contrast-Induced Acute Kidney Injury (CI-AKI). Minimize additional fluoroscopic runs.`;
  } else if (isSevereRenalImpairment) {
    alertLevel = 'warning';
    recommendation = `SEVERE RENAL RISK (eGFR < 30 or Scr >= 3.0): High probability of worsening nephropathy. Conservative default ceiling: 40 mL (pending IR faculty protocol approval; Iso-osmolar Iodixanol preferred).`;
  }

  return {
    valid: true,
    macdMl,
    rawMacdMl: rawMacd,
    contrastGivenMl,
    isExceeded,
    isCappedAt300,
    validationNotice,
    acrNkfGuidance,
    clinicalNotes,
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
    rawMacd: res.rawMacdMl,
    contrastGiven: res.contrastGivenMl,
    isExceeded: res.isExceeded,
    isCappedAt300: res.isCappedAt300,
    clinicalNotes: res.clinicalNotes,
    validationNotice: res.validationNotice,
    acrNkfGuidance: res.acrNkfGuidance,
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
    contrastAdvice = 'ACR-NKF 2020: eGFR < 30 mL/min/1.73m2 not on dialysis. Prophylactic IV volume expansion is indicated. Consider non-contrast or CO2 angiography where feasible.';
    riskLevel = 'high';
  } else if (egfr < 30) {
    ckdStage = 'G4 (Severely Decreased, 15 - 29 mL/min/1.73m2)';
    stageCode = 'G4';
    contrastAdvice = 'ACR-NKF 2020: Prophylactic IV hydration is indicated (eGFR < 30 mL/min/1.73m2 not on dialysis). Minimize contrast volume and avoid repetitive studies within 48h.';
    riskLevel = 'high';
  } else if (egfr < 45) {
    ckdStage = 'G3b (Moderately to Severely Decreased, 30 - 44 mL/min/1.73m2)';
    stageCode = 'G3b';
    contrastAdvice = 'ACR-NKF 2020: Prophylactic IV volume expansion is an individualized clinical decision based on patient risk factors. Routine prophylaxis is not universally mandated.';
    riskLevel = 'moderate';
  } else if (egfr < 60) {
    ckdStage = 'G3a (Mildly to Moderately Decreased, 45 - 59 mL/min/1.73m2)';
    stageCode = 'G3a';
    contrastAdvice = 'ACR-NKF 2020: Prophylaxis is not indicated for stable patients with eGFR >= 45 mL/min/1.73m2. Standard oral hydration recommended.';
    riskLevel = 'low';
  } else if (egfr < 90) {
    ckdStage = 'G2 (Mildly Decreased, 60 - 89 mL/min/1.73m2)';
    stageCode = 'G2';
    contrastAdvice = 'ACR-NKF 2020: Prophylaxis is not indicated (eGFR >= 45 mL/min/1.73m2). Standard clinical monitoring.';
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

// ============================================================================
// CIRSE COMPLICATIONS CLASSIFICATION SYSTEM (NUMERIC GRADES 1 TO 6)
// Reference: Filippiadis DK, et al. CIRSE Quality Assurance Document and
// Standards for Classification of Complications. Cardiovasc Intervent Radiol 2017;40(8):1141-1146.
// ============================================================================

export type CirseGrade = 1 | 2 | 3 | 4 | 5 | 6;

export const CirseGradeSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
]);

export const CirseComplicationSchema = z.object({
  grade: CirseGradeSchema,
  system: z.literal('CIRSE'),
  title: z.string(),
  definition: z.string(),
  clinicalAction: z.string(),
});

export type CirseComplication = z.infer<typeof CirseComplicationSchema>;

/**
 * CIRSE (Cardiovascular and Interventional Radiological Society of Europe)
 * Classification System for Complications (Numeric Grades 1 to 6)
 * Based on therapy escalation and clinical outcome.
 */
export const CIRSE_COMPLICATIONS: CirseComplication[] = [
  {
    grade: 1,
    system: 'CIRSE',
    title: 'Grade 1: No therapy, no consequence',
    definition: 'No therapy required, no consequence; resolves without clinical sequelae (CIRSE 2017, Filippiadis et al.).',
    clinicalAction: 'Routine observation and standard post-procedure monitoring (e.g. minor puncture site ecchymosis).'
  },
  {
    grade: 2,
    system: 'CIRSE',
    title: 'Grade 2: Nominal therapy, no consequence',
    definition: 'Requires nominal therapy (e.g. oral analgesics, minor dressing change), no consequence; includes overnight observation without escalation.',
    clinicalAction: 'Outpatient treatment or brief ward monitoring (e.g. small self-limiting groin hematoma).'
  },
  {
    grade: 3,
    system: 'CIRSE',
    title: 'Grade 3: Additional interventional therapy / short hospitalization (<48h)',
    definition: 'Requires additional percutaneous or interventional therapy, or unplanned short hospitalization (< 48 hours).',
    clinicalAction: 'Interventional remediation (e.g. percutaneous thrombin injection for femoral pseudoaneurysm).'
  },
  {
    grade: 4,
    system: 'CIRSE',
    title: 'Grade 4: Major therapy, prolonged hospitalization (>48h) or ICU escalation',
    definition: 'Requires major therapy, unplanned surgical conversion, prolonged hospitalization (> 48 hours), or intensive care unit (ICU) admission.',
    clinicalAction: 'Immediate multidisciplinary escalation (e.g. acute arterial thrombosis requiring surgical thrombectomy or ICU admission for resuscitation).'
  },
  {
    grade: 5,
    system: 'CIRSE',
    title: 'Grade 5: Permanent adverse sequelae',
    definition: 'Permanent adverse sequelae, irreversible organ impairment, limb loss, or permanent disability resulting from the procedure.',
    clinicalAction: 'Multidisciplinary morbidity review, long-term rehabilitation, and specialized clinical follow-up.'
  },
  {
    grade: 6,
    system: 'CIRSE',
    title: 'Grade 6: Death',
    definition: 'Procedure-related patient death occurring intraprocedurally or during subsequent care.',
    clinicalAction: 'Mandatory departmental morbidity & mortality (M&M) audit and root-cause analysis.'
  }
];

export function isCirseGrade(val: unknown): val is CirseGrade {
  return typeof val === 'number' && [1, 2, 3, 4, 5, 6].includes(val);
}

export function getCirseComplication(grade: CirseGrade | number): CirseComplication | undefined {
  return CIRSE_COMPLICATIONS.find((c) => c.grade === grade);
}

export function classifyCirseComplication(grade: CirseGrade): CirseComplication {
  const result = getCirseComplication(grade);
  if (!result) {
    throw new Error(`Invalid CIRSE complication grade: ${grade}. CIRSE strictly requires integer grades 1 through 6.`);
  }
  return result;
}

// ============================================================================
// SIR ADVERSE EVENT CLASSIFICATION SYSTEM (LETTER CLASSES A TO F)
// Reference: Sacks D, et al. Society of Interventional Radiology Clinical Practice
// Guidelines. J Vasc Interv Radiol 2003;14(9 Pt 2):S199-S202.
// ============================================================================

export type SirClass = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export type SirSeverity = 'Minor' | 'Major';

export const SirClassSchema = z.enum(['A', 'B', 'C', 'D', 'E', 'F']);
export const SirSeveritySchema = z.enum(['Minor', 'Major']);

export const SirComplicationSchema = z.object({
  sirClass: SirClassSchema,
  system: z.literal('SIR'),
  severity: SirSeveritySchema,
  title: z.string(),
  definition: z.string(),
  clinicalAction: z.string(),
});

export type SirComplication = z.infer<typeof SirComplicationSchema>;

/**
 * SIR (Society of Interventional Radiology) Adverse Event Classification (Sacks et al., JVIR 2003)
 * Strictly distinct from the CIRSE numeric 1-6 grading scale (Filippiadis et al., CVIR 2017)
 * and the newer SIR 2017 numeric system (Khalilzadeh et al., JVIR 2017).
 * Minor: Classes A, B. Major: Classes C, D, E, F.
 */
export const SIR_COMPLICATIONS: SirComplication[] = [
  {
    sirClass: 'A',
    system: 'SIR',
    severity: 'Minor',
    title: 'Class A: No therapy, no consequence',
    definition: 'Minor adverse event requiring no intervention and resulting in no adverse sequelae.',
    clinicalAction: 'Routine post-procedure documentation.'
  },
  {
    sirClass: 'B',
    system: 'SIR',
    severity: 'Minor',
    title: 'Class B: Nominal therapy, no consequence (includes overnight observation)',
    definition: 'Nominal therapy required without permanent consequence; includes overnight admission for observation only.',
    clinicalAction: 'Bedside evaluation, symptomatic oral therapy or ice pack.'
  },
  {
    sirClass: 'C',
    system: 'SIR',
    severity: 'Major',
    title: 'Class C: Requires therapy, minor hospitalization (<48 hours)',
    definition: 'Requires therapy and/or minor hospitalization (<48 hours).',
    clinicalAction: 'Targeted procedural or pharmacologic intervention, extended monitoring.'
  },
  {
    sirClass: 'D',
    system: 'SIR',
    severity: 'Major',
    title: 'Class D: Requires major therapy, unplanned increase in care, hospitalization (>48 hours)',
    definition: 'Requires major therapy, an unplanned increase in the level of care, or prolonged hospitalization (>48 hours).',
    clinicalAction: 'Urgent interventional/surgical management, high-dependency or ICU step-up.'
  },
  {
    sirClass: 'E',
    system: 'SIR',
    severity: 'Major',
    title: 'Class E: Permanent adverse sequelae',
    definition: 'Adverse event resulting in permanent impairment or loss of organ function.',
    clinicalAction: 'Comprehensive multi-specialty intervention and morbidity audit.'
  },
  {
    sirClass: 'F',
    system: 'SIR',
    severity: 'Major',
    title: 'Class F: Death',
    definition: 'Procedure-related death.',
    clinicalAction: 'Formal Morbidity and Mortality review reporting.'
  }
];

export function isSirClass(val: unknown): val is SirClass {
  return typeof val === 'string' && ['A', 'B', 'C', 'D', 'E', 'F'].includes(val);
}

export function getSirComplication(sirClass: SirClass | string): SirComplication | undefined {
  return SIR_COMPLICATIONS.find((s) => s.sirClass === sirClass);
}

export function classifySirAdverseEvent(sirClass: SirClass): SirComplication {
  const result = getSirComplication(sirClass);
  if (!result) {
    throw new Error(`Invalid SIR complication class: ${sirClass}. SIR strictly requires letter classes A through F.`);
  }
  return result;
}

// Re-export all procedure-linked calculators and metadata registry
export * from './procedureCalculators';
export * from './procedureClassificationRegistry';
