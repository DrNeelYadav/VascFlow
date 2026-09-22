/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * 30 Procedure-Linked Clinical Calculators & Guardrails Engine
 * Strictly aligned with CIRSE, SIR, AASLD, SVS, AHA/ASA, and EASL guidelines.
 */

import { evaluateHepaticClassification, MICHELS_HIATT_VARIANTS } from './classifications/hepaticArteryMichels';
import { evaluateMmaAnatomy, MMA_DANGEROUS_ANASTOMOSES } from './classifications/mmaBranchingCsodh';
import { evaluateScapularSubclavianCollaterals, SCAPULAR_SUBCLAVIAN_PATHWAYS } from './classifications/scapularSubclavian';
import { evaluateMesentericCollateral, MESENTERIC_COLLATERALS } from './classifications/mesentericCollaterals';
import { evaluateBismuthCorlette, BISMUTH_TYPES } from './classifications/biliaryBismuthCorlette';
import { evaluateAorticDissection, DISSECTION_TYPES } from './classifications/aorticStanfordDebakey';
import {
  evaluatePaeClassification,
  evaluateSarinClassification,
  evaluateForrestClassification,
  evaluateVaricoceleClassification,
  DE_ASSIS_PAE_TYPES,
  SARIN_VARICES_TYPES,
  FORREST_TYPES,
  SARTESCHI_VARICOCELE_GRADES
} from './classifications/rareVascularSystems';

export * from './classifications/hepaticArteryMichels';
export * from './classifications/mmaBranchingCsodh';
export * from './classifications/scapularSubclavian';
export * from './classifications/mesentericCollaterals';
export * from './classifications/biliaryBismuthCorlette';
export * from './classifications/aorticStanfordDebakey';
export * from './classifications/rareVascularSystems';

export interface ProcedureCalculatorMeta {
  id: string;
  name: string;
  shortName: string;
  protocolIds: string[];
  protocolId: string;
  protocolNames: string[];
  protocolName: string;
  system: string;
  guidelineAuthority: string;
  formulaDescription: string;
  summary: string;
}

export interface GenericCalculatorResult {
  valid: boolean;
  score: number | string;
  classification: string;
  riskLevel: 'safe' | 'warning' | 'critical';
  recommendation: string;
  details?: Record<string, string | number | boolean | null>;
}

// ============================================================================
// 1. ROTTERDAM BUDD-CHIARI PROGNOSTIC INDEX (BCS-PI)
// Protocol: bcs
// ============================================================================
export interface RotterdamBcsResult extends GenericCalculatorResult {
  bcsPiScore: number;
  prognosticClass: 'Class I' | 'Class II' | 'Class III';
  survival5YearEstimate: string;
}

export function calculateRotterdamBcs(
  encephalopathy: boolean,
  ascites: boolean,
  bilirubinMgDl: number,
  inr: number
): RotterdamBcsResult {
  if (bilirubinMgDl <= 0 || inr <= 0) {
    return {
      valid: false,
      score: 0,
      bcsPiScore: 0,
      prognosticClass: 'Class I',
      survival5YearEstimate: 'N/A',
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive values for Bilirubin and INR.'
    };
  }

  // Formula: 1.27 * Enceph + 0.54 * Ascites + 0.038 * (Bilirubin in µmol/L) + 1.53 * INR
  // 1 mg/dL Bilirubin = 17.1 µmol/L
  const biliUmol = bilirubinMgDl * 17.1;
  const encephVal = encephalopathy ? 1 : 0;
  const ascitesVal = ascites ? 1 : 0;

  const scoreRaw = 1.27 * encephVal + 0.54 * ascitesVal + 0.038 * biliUmol + 1.53 * inr;
  const bcsPiScore = parseFloat(scoreRaw.toFixed(2));

  let prognosticClass: 'Class I' | 'Class II' | 'Class III' = 'Class I';
  let survival5YearEstimate = '89% (Good Prognosis)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Class I (Good prognosis): Continue medical anticoagulation, diuretics, and routine surveillance.';

  if (bcsPiScore > 1.5) {
    prognosticClass = 'Class III';
    survival5YearEstimate = '42% (Poor Prognosis without TIPS)';
    riskLevel = 'critical';
    recommendation = 'Class III (Poor prognosis): High mortality risk under medical therapy alone. Urgent TIPS or DIPS shunt indicated; evaluate for liver transplantation.';
  } else if (bcsPiScore >= 1.1) {
    prognosticClass = 'Class II';
    survival5YearEstimate = '74% (Intermediate Prognosis)';
    riskLevel = 'warning';
    recommendation = 'Class II (Intermediate): Candidate for endovascular intervention (HV stenting or early TIPS) if ascites or liver function worsens.';
  }

  return {
    valid: true,
    score: bcsPiScore,
    bcsPiScore,
    prognosticClass,
    survival5YearEstimate,
    classification: `${prognosticClass} (${survival5YearEstimate})`,
    riskLevel,
    recommendation,
    details: {
      'BCS-PI Score': bcsPiScore,
      'Prognostic Class': prognosticClass,
      '5-Year Survival': survival5YearEstimate
    }
  };
}

// ============================================================================
// 2. CLICHY BUDD-CHIARI PROGNOSTIC SCORE
// Protocol: bcs, tips_portal_htn
// ============================================================================
export interface ClichyScoreResult extends GenericCalculatorResult {
  clichyScore: number;
  outcomeTier: 'Good Response to Medical/Stenting' | 'High Risk of Medical Failure (TIPS Indicated)';
}

export function calculateClichyScore(
  age: number,
  bilirubinMgDl: number,
  serumCreatinineMgDl: number,
  ascitesGrade: 'none' | 'controlled' | 'refractory'
): ClichyScoreResult {
  if (age <= 0 || bilirubinMgDl <= 0 || serumCreatinineMgDl <= 0) {
    return {
      valid: false,
      score: 0,
      clichyScore: 0,
      outcomeTier: 'Good Response to Medical/Stenting',
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter valid age, bilirubin, and creatinine.'
    };
  }

  const ascitesScoreMap = { none: 0, controlled: 1, refractory: 2 };
  const ascitesVal = ascitesScoreMap[ascitesGrade] ?? 0;

  // Clichy Formula = 0.08 * Age + 0.16 * Bilirubin (mg/dL) + 0.72 * Creatinine (mg/dL) + 0.63 * Ascites
  const rawScore = 0.08 * age + 0.16 * bilirubinMgDl + 0.72 * serumCreatinineMgDl + 0.63 * ascitesVal;
  const clichyScore = parseFloat(rawScore.toFixed(2));

  const isHighRisk = clichyScore >= 5.4;
  const outcomeTier = isHighRisk
    ? 'High Risk of Medical Failure (TIPS Indicated)'
    : 'Good Response to Medical/Stenting';
  const riskLevel = isHighRisk ? 'critical' : 'safe';
  const recommendation = isHighRisk
    ? 'Clichy Score ≥ 5.4: High probability of medical treatment failure. Immediate TIPS or DIPS intervention recommended.'
    : 'Clichy Score < 5.4: Favorable trajectory. Continue medical anticoagulation and monitor HV patency.';

  return {
    valid: true,
    score: clichyScore,
    clichyScore,
    outcomeTier,
    classification: outcomeTier,
    riskLevel,
    recommendation,
    details: {
      'Clichy Score': clichyScore,
      'Threshold': '5.4'
    }
  };
}

// ============================================================================
// 3. CAUDATE-TO-RIGHT LOBE RATIO (C/RL) - HARBIN & AWAYA
// Protocol: bcs, tips_portal_htn
// ============================================================================
export interface CaudateRightLobeResult extends GenericCalculatorResult {
  cRlRatio: number;
  harbinCirrhosisPredicted: boolean;
  awayaCirrhosisPredicted: boolean;
}

export function calculateCaudateRightLobeRatio(
  caudateWidthMm: number,
  rightLobeWidthMm: number
): CaudateRightLobeResult {
  if (caudateWidthMm <= 0 || rightLobeWidthMm <= 0) {
    return {
      valid: false,
      score: 0,
      cRlRatio: 0,
      harbinCirrhosisPredicted: false,
      awayaCirrhosisPredicted: false,
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter valid transverse widths for caudate and right lobes in mm.'
    };
  }

  const ratio = parseFloat((caudateWidthMm / rightLobeWidthMm).toFixed(2));
  const harbinCirrhosisPredicted = ratio >= 0.65;
  const awayaCirrhosisPredicted = ratio >= 0.58;

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let classification = 'Normal Caudate/Right Lobe Ratio (< 0.58)';
  let recommendation = 'C/RL ratio is within normal limits. No morphologic evidence of caudate hypertrophy.';

  if (harbinCirrhosisPredicted) {
    riskLevel = 'critical';
    classification = 'Caudate Hypertrophy / Cirrhosis Pattern (Ratio ≥ 0.65)';
    recommendation = 'Ratio ≥ 0.65 (Harbin Criteria, 96% specificity): Pronounced caudate hypertrophy pathognomonic for Budd-Chiari outflow obstruction or advanced cirrhosis.';
  } else if (awayaCirrhosisPredicted) {
    riskLevel = 'warning';
    classification = 'Borderline / Early Cirrhosis Pattern (Awaya Ratio ≥ 0.58)';
    recommendation = 'Ratio 0.58 - 0.64 (Awaya modified criteria): Borderline caudate enlargement; correlate with hepatic venous Doppler and fibroscan.';
  }

  return {
    valid: true,
    score: ratio,
    cRlRatio: ratio,
    harbinCirrhosisPredicted,
    awayaCirrhosisPredicted,
    classification,
    riskLevel,
    recommendation,
    details: {
      'C/RL Ratio': ratio,
      'Harbin Criteria (≥ 0.65)': harbinCirrhosisPredicted ? 'Positive' : 'Negative',
      'Awaya Criteria (≥ 0.58)': awayaCirrhosisPredicted ? 'Positive' : 'Negative'
    }
  };
}

// ============================================================================
// 4. DIRECT FICK CARDIAC SHUNT (Qp/Qs) & RIGHT-TO-LEFT SHUNT FRACTION
// Protocol: pavm_embolization
// ============================================================================
export interface FickShuntResult extends GenericCalculatorResult {
  shuntFractionPercent: number;
  qpQsRatio: number;
  embolizationIndicated: boolean;
}

export function calculateFickShunt(
  arterialO2Sat: number,
  mixedVenousO2Sat: number,
  pulmonaryVeinO2Sat: number = 100,
  hemoglobinGDl: number = 13.5
): FickShuntResult {
  if (
    arterialO2Sat <= 0 ||
    mixedVenousO2Sat <= 0 ||
    pulmonaryVeinO2Sat <= 0 ||
    arterialO2Sat > 100 ||
    mixedVenousO2Sat >= arterialO2Sat
  ) {
    return {
      valid: false,
      score: 0,
      shuntFractionPercent: 0,
      qpQsRatio: 1.0,
      embolizationIndicated: false,
      classification: 'Invalid Oxygenation Data',
      riskLevel: 'safe',
      recommendation: 'Ensure Arterial Sat > Mixed Venous Sat and saturations are within 0-100%.'
    };
  }

  // Right-to-left shunt fraction formula: (SpvO2 - SaO2) / (SpvO2 - SvO2) * 100
  const denom = pulmonaryVeinO2Sat - mixedVenousO2Sat;
  const num = pulmonaryVeinO2Sat - arterialO2Sat;
  const shuntFraction = parseFloat(((num / denom) * 100).toFixed(1));

  // Qp / Qs estimation
  const qpQs = parseFloat(((100 - shuntFraction) / 100).toFixed(2));
  const embolizationIndicated = shuntFraction >= 5.0;

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let classification = `Physiologic Shunt (${shuntFraction}%)`;
  let recommendation = 'Normal right-to-left intrapulmonary shunt (< 5%). No paradoxical embolic threshold reached.';

  if (shuntFraction >= 20.0) {
    riskLevel = 'critical';
    classification = `Severe Hypoxemic Shunt (${shuntFraction}%)`;
    recommendation = 'Critical PAVM shunt (≥ 20%): High risk of paradoxical stroke, cerebral abscess, and profound hypoxemia. Urgent catheter-directed coil/plug embolization indicated.';
  } else if (shuntFraction >= 5.0) {
    riskLevel = 'warning';
    classification = `Clinically Significant Shunt (${shuntFraction}%)`;
    recommendation = 'Abnormal shunt (5-19%): Meets criteria for transcatheter pulmonary AVM embolization to prevent neurologic events.';
  }

  return {
    valid: true,
    score: shuntFraction,
    shuntFractionPercent: shuntFraction,
    qpQsRatio: qpQs,
    embolizationIndicated,
    classification,
    riskLevel,
    recommendation,
    details: {
      'Shunt Fraction': `${shuntFraction}%`,
      'Qp:Qs Ratio': qpQs,
      'PAVM Embolization Threshold': embolizationIndicated ? 'Reached' : 'Not Reached'
    }
  };
}

// ============================================================================
// 5. HEPATIC VENOUS PRESSURE GRADIENT (HVPG) & TIPS HEMODYNAMICS
// Protocol: tips_portal_htn
// ============================================================================
export interface HvpgResult extends GenericCalculatorResult {
  hvpgMmHg: number;
  stage: 'Normal' | 'Sinusoidal Portal HTN' | 'CSPH' | 'Severe Portal HTN' | 'Extreme Mortality Risk';
  targetPostTipsMmHg: string;
}

export function calculateHvpg(
  wedgedHepaticVenousPressureMmHg: number,
  freeHepaticVenousPressureMmHg: number
): HvpgResult {
  if (
    wedgedHepaticVenousPressureMmHg < 0 ||
    freeHepaticVenousPressureMmHg < 0 ||
    wedgedHepaticVenousPressureMmHg < freeHepaticVenousPressureMmHg
  ) {
    return {
      valid: false,
      score: 0,
      hvpgMmHg: 0,
      stage: 'Normal',
      targetPostTipsMmHg: 'N/A',
      classification: 'Invalid Pressures',
      riskLevel: 'safe',
      recommendation: 'WHVP must be greater than or equal to FHVP.'
    };
  }

  const hvpg = wedgedHepaticVenousPressureMmHg - freeHepaticVenousPressureMmHg;

  let stage: 'Normal' | 'Sinusoidal Portal HTN' | 'CSPH' | 'Severe Portal HTN' | 'Extreme Mortality Risk' = 'Normal';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Normal portal pressure gradient (1-5 mmHg). No portal hypertension.';

  if (hvpg >= 20) {
    stage = 'Extreme Mortality Risk';
    riskLevel = 'critical';
    recommendation = 'HVPG ≥ 20 mmHg: Extreme risk of refractory variceal bleeding and 6-week mortality. Early preemptive TIPS (< 72h) recommended per Baveno VII criteria.';
  } else if (hvpg >= 12) {
    stage = 'Severe Portal HTN';
    riskLevel = 'critical';
    recommendation = 'HVPG ≥ 12 mmHg: Critical threshold for variceal rupture and decompression-resistant ascites. Target post-TIPS HVPG: < 12 mmHg or ≥ 50% reduction.';
  } else if (hvpg >= 10) {
    stage = 'CSPH';
    riskLevel = 'warning';
    recommendation = 'HVPG 10-11 mmHg: Clinically Significant Portal Hypertension (CSPH). Risk of esophageal varices formation and clinical decompensation.';
  } else if (hvpg >= 6) {
    stage = 'Sinusoidal Portal HTN';
    riskLevel = 'warning';
    recommendation = 'HVPG 6-9 mmHg: Subclinical sinusoidal portal hypertension.';
  }

  return {
    valid: true,
    score: hvpg,
    hvpgMmHg: hvpg,
    stage,
    targetPostTipsMmHg: '< 12 mmHg (or > 50% drop from baseline)',
    classification: `${stage} (${hvpg} mmHg)`,
    riskLevel,
    recommendation,
    details: {
      'Calculated HVPG': `${hvpg} mmHg`,
      'Stage': stage,
      'Post-TIPS Goal': '< 12 mmHg'
    }
  };
}

// ============================================================================
// 6. PTBD BILIARY DRAINAGE DECOMPRESSION & CLEARANCE INDEX
// Protocol: ptbd
// ============================================================================
export interface PtbdDecompressionResult extends GenericCalculatorResult {
  clearancePercent: number;
  clearancePerDayPercent: number;
  outputStatus: 'Optimal' | 'Low / Occlusion Suspected' | 'Excessive Fluid Loss';
}

export function calculatePtbdDecompression(
  dailyBileOutputMl: number,
  baselineBilirubinMgDl: number,
  currentBilirubinMgDl: number,
  daysElapsed: number
): PtbdDecompressionResult {
  if (baselineBilirubinMgDl <= 0 || currentBilirubinMgDl <= 0 || daysElapsed <= 0) {
    return {
      valid: false,
      score: 0,
      clearancePercent: 0,
      clearancePerDayPercent: 0,
      outputStatus: 'Optimal',
      classification: 'Invalid Inputs',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive values for bilirubin and elapsed days.'
    };
  }

  const drop = baselineBilirubinMgDl - currentBilirubinMgDl;
  const clearancePercent = parseFloat(((drop / baselineBilirubinMgDl) * 100).toFixed(1));
  const clearancePerDayPercent = parseFloat((clearancePercent / daysElapsed).toFixed(1));

  let outputStatus: 'Optimal' | 'Low / Occlusion Suspected' | 'Excessive Fluid Loss' = 'Optimal';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Adequate biliary drainage and bilirubin clearance trajectory.';

  if (dailyBileOutputMl < 150) {
    outputStatus = 'Low / Occlusion Suspected';
    riskLevel = 'critical';
    recommendation = 'WARNING: Bile output < 150 mL/24h with persistent hyperbilirubinemia suggests catheter kinking, side-hole migration, or hemobilia clot obstruction. Perform gentle saline flush and tubogram.';
  } else if (dailyBileOutputMl > 1500) {
    outputStatus = 'Excessive Fluid Loss';
    riskLevel = 'warning';
    recommendation = 'High-volume bile drainage (> 1500 mL/day). Monitor for dehydration and electrolyte depletion (hyponatremia, metabolic acidosis). Replace IV fluids and electrolytes.';
  } else if (clearancePercent < 15 && daysElapsed >= 3) {
    riskLevel = 'warning';
    recommendation = 'Suboptimal bilirubin drop (< 15% after 3 days). Evaluate for segmental undrained duct or underlying hepatic parenchymal failure.';
  }

  return {
    valid: true,
    score: clearancePercent,
    clearancePercent,
    clearancePerDayPercent,
    outputStatus,
    classification: `${outputStatus} (${clearancePercent}% Bilirubin Clearance)`,
    riskLevel,
    recommendation,
    details: {
      'Total Bilirubin Drop': `${clearancePercent}%`,
      'Clearance Rate': `${clearancePerDayPercent}%/day`,
      'Drainage Status': outputStatus
    }
  };
}

// ============================================================================
// 7. RUTHERFORD CLASSIFICATION FOR PAD / CLTI
// Protocol: pad_angioplasty
// ============================================================================
export interface RutherfordResult extends GenericCalculatorResult {
  category: number;
  cltiStatus: 'Not CLTI' | 'Chronic Limb-Threatening Ischemia (CLTI)';
  urgency: 'Elective' | 'Urgent Limb Salvage';
}

export function calculateRutherford(category: number): RutherfordResult {
  const cat = Math.max(0, Math.min(6, Math.floor(category)));

  const descriptions = [
    'Category 0: Asymptomatic; no hemodynamically significant occlusive disease',
    'Category 1: Mild claudication; completes treadmill exercise without stop',
    'Category 2: Moderate claudication; symptom onset at intermediate distance',
    'Category 3: Severe claudication; cannot walk > 100 meters at normal pace',
    'Category 4: Ischemic rest pain; pain in forefoot aggravated by elevation',
    'Category 5: Minor tissue loss; non-healing ischemic ulceration or focal digital gangrene',
    'Category 6: Major tissue loss; extensive gangrene extending beyond transmetatarsal line'
  ];

  const isClti = cat >= 4;
  const riskLevel = cat >= 5 ? 'critical' : cat === 4 ? 'warning' : 'safe';
  const cltiStatus = isClti ? 'Chronic Limb-Threatening Ischemia (CLTI)' : 'Not CLTI';
  const urgency = isClti ? 'Urgent Limb Salvage' : 'Elective';

  let recommendation = 'Lifestyle modification, supervised exercise therapy, and medical antiplatelet therapy.';
  if (cat >= 5) {
    recommendation = 'URGENT: Rutherford 5-6 (CLTI with tissue loss). Immediate endovascular revascularization (PTA / stenting / atherectomy) and wound debridement to prevent major amputation.';
  } else if (cat === 4) {
    recommendation = 'Rutherford 4 (CLTI rest pain). Revascularization indicated within 1-2 weeks to avert progression to tissue ulceration.';
  } else if (cat === 3) {
    recommendation = 'Severe claudication refractory to medical therapy. Endovascular angioplasty recommended for quality-of-life restoration.';
  }

  return {
    valid: true,
    score: cat,
    category: cat,
    cltiStatus,
    urgency,
    classification: descriptions[cat],
    riskLevel,
    recommendation,
    details: {
      'Rutherford Category': cat,
      'CLTI Status': cltiStatus,
      'Intervention Urgency': urgency
    }
  };
}

// ============================================================================
// 8. ANKLE-BRACHIAL INDEX (ABI) & TOE-BRACHIAL INDEX (TBI)
// Protocol: pad_angioplasty
// ============================================================================
export interface AbiTbiResult extends GenericCalculatorResult {
  abi: number;
  tbi: number | null;
  abiTier: 'Non-Compressible' | 'Normal' | 'Borderline' | 'Mild PAD' | 'Moderate PAD' | 'Severe PAD (CLTI)';
}

export function calculateAbiTbi(
  ankleSystolicMmHg: number,
  brachialSystolicMmHg: number,
  toeSystolicMmHg?: number
): AbiTbiResult {
  if (ankleSystolicMmHg <= 0 || brachialSystolicMmHg <= 0) {
    return {
      valid: false,
      score: 0,
      abi: 0,
      tbi: null,
      abiTier: 'Normal',
      classification: 'Invalid Pressure Values',
      riskLevel: 'safe',
      recommendation: 'Enter valid systolic blood pressure readings.'
    };
  }

  const abi = parseFloat((ankleSystolicMmHg / brachialSystolicMmHg).toFixed(2));
  let tbi: number | null = null;
  if (toeSystolicMmHg && toeSystolicMmHg > 0) {
    tbi = parseFloat((toeSystolicMmHg / brachialSystolicMmHg).toFixed(2));
  }

  let abiTier: 'Non-Compressible' | 'Normal' | 'Borderline' | 'Mild PAD' | 'Moderate PAD' | 'Severe PAD (CLTI)' = 'Normal';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'ABI 1.00 - 1.40: Normal arterial perfusion.';

  if (abi > 1.40) {
    abiTier = 'Non-Compressible';
    riskLevel = 'warning';
    recommendation = 'ABI > 1.40: Severely calcified, non-compressible tibial arteries (common in diabetes and ESRD). Measure Toe-Brachial Index (TBI); TBI < 0.70 confirms PAD.';
  } else if (abi < 0.40) {
    abiTier = 'Severe PAD (CLTI)';
    riskLevel = 'critical';
    recommendation = 'CRITICAL: ABI < 0.40 indicates severe limb-threatening ischemia (CLTI). Urgent endovascular arterial revascularization required.';
  } else if (abi < 0.70) {
    abiTier = 'Moderate PAD';
    riskLevel = 'warning';
    recommendation = 'ABI 0.40 - 0.69: Moderate peripheral arterial disease. Typically correlates with disabling intermittent claudication.';
  } else if (abi <= 0.90) {
    abiTier = 'Mild PAD';
    riskLevel = 'warning';
    recommendation = 'ABI 0.70 - 0.90: Mild peripheral arterial disease. Optimize medical therapy (Aspirin, Statin, Cilostazol).';
  } else if (abi < 1.00) {
    abiTier = 'Borderline';
    recommendation = 'ABI 0.91 - 0.99: Borderline perfusion. Consider post-exercise treadmill testing if symptoms persist.';
  }

  return {
    valid: true,
    score: abi,
    abi,
    tbi,
    abiTier,
    classification: `${abiTier} (ABI: ${abi}${tbi !== null ? `, TBI: ${tbi}` : ''})`,
    riskLevel,
    recommendation,
    details: {
      'ABI Score': abi,
      'TBI Score': tbi !== null ? tbi : 'Not Measured',
      'Interpretation': abiTier
    }
  };
}

// ============================================================================
// 9. FONTAINE STAGING FOR LOWER LIMB ISCHEMIA
// Protocol: pad_angioplasty
// ============================================================================
export interface FontaineResult extends GenericCalculatorResult {
  stage: 'I' | 'IIa' | 'IIb' | 'III' | 'IV';
  interventionIndicated: boolean;
}

export function calculateFontaine(stage: 'I' | 'IIa' | 'IIb' | 'III' | 'IV'): FontaineResult {
  const map = {
    I: {
      title: 'Stage I: Asymptomatic / Subclinical stenosis',
      risk: 'safe' as const,
      indicated: false,
      rec: 'Conservative medical management with antiplatelet and high-intensity statin therapy.'
    },
    IIa: {
      title: 'Stage IIa: Mild claudication (Pain-free walking distance > 200 meters)',
      risk: 'safe' as const,
      indicated: false,
      rec: 'Supervised exercise training and medical optimization. Endovascular intervention generally deferred.'
    },
    IIb: {
      title: 'Stage IIb: Severe claudication (Walking distance < 200 meters)',
      risk: 'warning' as const,
      indicated: true,
      rec: 'Disabling claudication. Endovascular revascularization (balloon angioplasty / stenting) indicated when medical therapy fails.'
    },
    III: {
      title: 'Stage III: Ischemic rest pain (forefoot pain at night relieved by hanging leg)',
      risk: 'critical' as const,
      indicated: true,
      rec: 'CRITICAL ISCHEMIA: Rest pain indicates impending tissue necrosis. Urgent diagnostic angiography and revascularization indicated.'
    },
    IV: {
      title: 'Stage IV: Trophic ulcers or gangrene',
      risk: 'critical' as const,
      indicated: true,
      rec: 'EMERGENCY: Tissue necrosis present. Revascularize immediately to re-establish straight-line arterial flow to the angiosome.'
    }
  };

  const item = map[stage] || map.I;

  return {
    valid: true,
    score: stage,
    stage,
    interventionIndicated: item.indicated,
    classification: item.title,
    riskLevel: item.risk,
    recommendation: item.rec,
    details: {
      'Fontaine Stage': stage,
      'Revascularization Indicated': item.indicated ? 'Yes' : 'No'
    }
  };
}

// ============================================================================
// 10. WELLS DVT RISK SCORE
// Protocol: dvt_thrombolysis
// ============================================================================
export interface WellsDvtInputs {
  activeCancer: boolean;
  paralysisOrPlaster: boolean;
  bedriddenOrMajorSurgery: boolean;
  localizedTenderness: boolean;
  entireLegSwollen: boolean;
  calfSwellingOver3cm: boolean;
  pittingEdemaConfined: boolean;
  collateralSuperficialVeins: boolean;
  previousDocumentedDvt: boolean;
  alternativeDiagnosisLikely: boolean;
}

export interface WellsDvtResult extends GenericCalculatorResult {
  wellsScore: number;
  dvtRiskTier: 'Low (DVT Unlikely)' | 'Moderate' | 'High (DVT Likely)';
  ultrasoundIndicated: boolean;
}

export function calculateWellsDvt(inputs: WellsDvtInputs): WellsDvtResult {
  let score = 0;
  if (inputs.activeCancer) score += 1;
  if (inputs.paralysisOrPlaster) score += 1;
  if (inputs.bedriddenOrMajorSurgery) score += 1;
  if (inputs.localizedTenderness) score += 1;
  if (inputs.entireLegSwollen) score += 1;
  if (inputs.calfSwellingOver3cm) score += 1;
  if (inputs.pittingEdemaConfined) score += 1;
  if (inputs.collateralSuperficialVeins) score += 1;
  if (inputs.previousDocumentedDvt) score += 1;
  if (inputs.alternativeDiagnosisLikely) score -= 2;

  let dvtRiskTier: 'Low (DVT Unlikely)' | 'Moderate' | 'High (DVT Likely)' = 'Low (DVT Unlikely)';
  let ultrasoundIndicated = false;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Score < 2 (DVT Unlikely): High-sensitivity D-dimer recommended to rule out DVT without imaging.';

  if (score >= 3) {
    dvtRiskTier = 'High (DVT Likely)';
    ultrasoundIndicated = true;
    riskLevel = 'critical';
    recommendation = 'Wells Score ≥ 3 (High probability, ~75% prevalence): Immediate lower extremity venous duplex ultrasound. If extensive iliofemoral thrombus and low bleeding risk, evaluate for catheter-directed thrombolysis (CDT).';
  } else if (score >= 2) {
    dvtRiskTier = 'Moderate';
    ultrasoundIndicated = true;
    riskLevel = 'warning';
    recommendation = 'Wells Score 2 (DVT Likely, ~17% prevalence): Venous duplex ultrasound indicated as primary diagnostic test.';
  }

  return {
    valid: true,
    score,
    wellsScore: score,
    dvtRiskTier,
    ultrasoundIndicated,
    classification: `${dvtRiskTier} (Wells Score: ${score})`,
    riskLevel,
    recommendation,
    details: {
      'Wells Score': score,
      'Two-Tier Model': score >= 2 ? 'DVT Likely' : 'DVT Unlikely',
      'Ultrasound Recommended': ultrasoundIndicated ? 'Yes' : 'No'
    }
  };
}

// ============================================================================
// 11. VILLALTA SCORE FOR POST-THROMBOTIC SYNDROME (PTS)
// Protocol: dvt_thrombolysis
// ============================================================================
export interface VillaltaResult extends GenericCalculatorResult {
  villaltaScore: number;
  ptsSeverity: 'No PTS' | 'Mild PTS' | 'Moderate PTS' | 'Severe PTS';
  deepVenousStentingCandidate: boolean;
}

export function calculateVillalta(
  symptomsSum0To15: number,
  signsSum0To18: number,
  venousUlcerPresent: boolean
): VillaltaResult {
  const total = Math.max(0, Math.min(33, symptomsSum0To15 + signsSum0To18));

  let ptsSeverity: 'No PTS' | 'Mild PTS' | 'Moderate PTS' | 'Severe PTS' = 'No PTS';
  let deepVenousStentingCandidate = false;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Score < 5: No clinical evidence of Post-Thrombotic Syndrome. Continue surveillance.';

  if (total >= 15 || venousUlcerPresent) {
    ptsSeverity = 'Severe PTS';
    deepVenousStentingCandidate = true;
    riskLevel = 'critical';
    recommendation = 'Severe PTS (Score ≥ 15 or active ulcer): High-grade venous hypertension. Venography / IVUS evaluation recommended for iliofemoral recanalization and dedicated venous stenting.';
  } else if (total >= 10) {
    ptsSeverity = 'Moderate PTS';
    deepVenousStentingCandidate = true;
    riskLevel = 'warning';
    recommendation = 'Moderate PTS (Score 10-14): Prescribe class 2 (30-40 mmHg) compression hosiery. Evaluate for venous outflow obstruction.';
  } else if (total >= 5) {
    ptsSeverity = 'Mild PTS';
    riskLevel = 'warning';
    recommendation = 'Mild PTS (Score 5-9): Prescription graduated compression stockings (20-30 mmHg) and limb elevation.';
  }

  return {
    valid: true,
    score: total,
    villaltaScore: total,
    ptsSeverity,
    deepVenousStentingCandidate,
    classification: `${ptsSeverity} (Villalta: ${total})`,
    riskLevel,
    recommendation,
    details: {
      'Villalta Score': total,
      'Active Venous Ulcer': venousUlcerPresent ? 'Yes' : 'No',
      'Venous Stenting Candidate': deepVenousStentingCandidate ? 'Yes' : 'No'
    }
  };
}

// ============================================================================
// 12. CEAP CLINICAL CLASSIFICATION FOR VENOUS DISEASE
// Protocol: varicose
// ============================================================================
export interface CeapResult extends GenericCalculatorResult {
  ceapClass: 'C0' | 'C1' | 'C2' | 'C3' | 'C4a' | 'C4b' | 'C5' | 'C6';
  endovenousAblationIndicated: boolean;
}

export function calculateCeap(ceapClass: 'C0' | 'C1' | 'C2' | 'C3' | 'C4a' | 'C4b' | 'C5' | 'C6'): CeapResult {
  const map = {
    C0: { title: 'C0: No visible or palpable signs of venous disease', ablation: false, risk: 'safe' as const, rec: 'No interventional treatment indicated.' },
    C1: { title: 'C1: Telangiectasias or reticular veins (< 3 mm)', ablation: false, risk: 'safe' as const, rec: 'Cosmetic concern; sclerotherapy or transdermal laser if patient requests.' },
    C2: { title: 'C2: Varicose veins (≥ 3 mm in standing position)', ablation: true, risk: 'warning' as const, rec: 'Endovenous laser ablation (EVLA) or radiofrequency ablation (RFA) indicated if saphenous reflux > 500 ms.' },
    C3: { title: 'C3: Venous edema', ablation: true, risk: 'warning' as const, rec: 'Endovenous thermal ablation plus graduated compression therapy.' },
    C4a: { title: 'C4a: Skin changes: pigmentation or eczema', ablation: true, risk: 'warning' as const, rec: 'Ablate refluxing truncal vein to prevent ulceration; topical dermatologic care.' },
    C4b: { title: 'C4b: Lipodermatosclerosis or atrophie blanche', ablation: true, risk: 'critical' as const, rec: 'High risk of skin breakdown. Urgent endovenous ablation of incompetence.' },
    C5: { title: 'C5: Healed venous ulcer', ablation: true, risk: 'critical' as const, rec: 'Thermal ablation of incompetent saphenous trunks significantly reduces ulcer recurrence.' },
    C6: { title: 'C6: Active venous ulcer', ablation: true, risk: 'critical' as const, rec: 'ACTIVE ULCER: Early endovenous ablation (ESCHAR & EVRA trial protocols) accelerates ulcer healing time.' }
  };

  const selected = map[ceapClass] || map.C0;

  return {
    valid: true,
    score: ceapClass,
    ceapClass,
    endovenousAblationIndicated: selected.ablation,
    classification: selected.title,
    riskLevel: selected.risk,
    recommendation: selected.rec,
    details: {
      'CEAP Class': ceapClass,
      'Thermal Ablation Indicated': selected.ablation ? 'Yes' : 'No'
    }
  };
}

// ============================================================================
// 13. REVISED GENEVA SCORE FOR PULMONARY EMBOLISM
// Protocol: pulmonary_pe_thrombolysis
// ============================================================================
export interface GenevaInputs {
  ageOver65: boolean;
  previousDvtPe: boolean;
  surgeryOrFractureWithinMonth: boolean;
  activeMalignancy: boolean;
  unilateralLowerLimbPain: boolean;
  hemoptysis: boolean;
  heartRate: number;
  painOnDeepPalpationAndUnilateralEdema: boolean;
}

export interface GenevaResult extends GenericCalculatorResult {
  genevaScore: number;
  peProbabilityTier: 'Low' | 'Intermediate' | 'High';
  ctpaUrgent: boolean;
}

export function calculateRevisedGeneva(inputs: GenevaInputs): GenevaResult {
  let score = 0;
  if (inputs.ageOver65) score += 1;
  if (inputs.previousDvtPe) score += 3;
  if (inputs.surgeryOrFractureWithinMonth) score += 2;
  if (inputs.activeMalignancy) score += 2;
  if (inputs.unilateralLowerLimbPain) score += 3;
  if (inputs.hemoptysis) score += 2;
  if (inputs.heartRate >= 95) score += 5;
  else if (inputs.heartRate >= 75) score += 3;
  if (inputs.painOnDeepPalpationAndUnilateralEdema) score += 4;

  let peProbabilityTier: 'Low' | 'Intermediate' | 'High' = 'Low';
  let ctpaUrgent = false;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Score 0-3 (Low probability, ~8% PE prevalence): Perform D-dimer testing to exclude PE.';

  if (score >= 11) {
    peProbabilityTier = 'High';
    ctpaUrgent = true;
    riskLevel = 'critical';
    recommendation = 'Score ≥ 11 (High probability, ~74% prevalence): Urgent CT Pulmonary Angiography (CTPA). Do not delay imaging for D-dimer.';
  } else if (score >= 4) {
    peProbabilityTier = 'Intermediate';
    riskLevel = 'warning';
    recommendation = 'Score 4-10 (Intermediate probability, ~28% prevalence): Diagnostic CTPA or high-sensitivity D-dimer.';
  }

  return {
    valid: true,
    score,
    genevaScore: score,
    peProbabilityTier,
    ctpaUrgent,
    classification: `${peProbabilityTier} Probability (Geneva: ${score})`,
    riskLevel,
    recommendation,
    details: {
      'Geneva Score': score,
      'Probability': peProbabilityTier,
      'Urgent CTPA Indicated': ctpaUrgent ? 'Yes' : 'No'
    }
  };
}

// ============================================================================
// 14. SIMPLIFIED PULMONARY EMBOLISM SEVERITY INDEX (sPESI)
// Protocol: pulmonary_pe_thrombolysis
// ============================================================================
export interface SpesiInputs {
  ageOver80: boolean;
  historyOfCancer: boolean;
  chronicCardiopulmonaryDisease: boolean;
  heartRateGte110: boolean;
  systolicBpLt100: boolean;
  arterialO2SatLt90: boolean;
}

export interface SpesiResult extends GenericCalculatorResult {
  spesiScore: number;
  mortality30DayEstimate: string;
  advancedIrThrombectomyCandidate: boolean;
}

export function calculateSpesi(inputs: SpesiInputs): SpesiResult {
  let score = 0;
  if (inputs.ageOver80) score += 1;
  if (inputs.historyOfCancer) score += 1;
  if (inputs.chronicCardiopulmonaryDisease) score += 1;
  if (inputs.heartRateGte110) score += 1;
  if (inputs.systolicBpLt100) score += 1;
  if (inputs.arterialO2SatLt90) score += 1;

  const isHighRisk = score >= 1;
  const mortality30DayEstimate = isHighRisk ? '10.9% (High Risk)' : '1.0% (Low Risk)';
  const riskLevel = isHighRisk ? 'critical' : 'safe';
  const advancedIrThrombectomyCandidate = isHighRisk;

  const recommendation = isHighRisk
    ? 'sPESI ≥ 1: High risk of 30-day mortality. Assess RV/LV ratio on CT and cardiac biomarkers (Troponin/NT-proBNP). If intermediate-high or high-risk PE with shock, evaluate for catheter-directed thrombolysis (CDT) or suction thrombectomy.'
    : 'sPESI = 0: Low 30-day mortality risk (1.0%). Candidate for standard anticoagulation and early outpatient discharge if home conditions are favorable.';

  return {
    valid: true,
    score,
    spesiScore: score,
    mortality30DayEstimate,
    advancedIrThrombectomyCandidate,
    classification: isHighRisk ? 'High Risk sPESI (≥ 1)' : 'Low Risk sPESI (0)',
    riskLevel,
    recommendation,
    details: {
      'sPESI Score': score,
      '30-Day Mortality': mortality30DayEstimate,
      'CDT / Thrombectomy Consideration': advancedIrThrombectomyCandidate ? 'Indicated if RV Strain' : 'Standard Anticoagulation'
    }
  };
}

// ============================================================================
// 15. UTERINE FIBROID VOLUME & SPHERICAL EQUIVALENCE (UAE / UFE)
// Protocol: uae
// ============================================================================
export interface FibroidVolumeResult extends GenericCalculatorResult {
  volumeCm3: number;
  sphericalDiameterCm: number;
  percentageReduction: number | null;
}

export function calculateFibroidVolume(
  lengthCm: number,
  widthCm: number,
  depthCm: number,
  priorVolumeCm3?: number
): FibroidVolumeResult {
  if (lengthCm <= 0 || widthCm <= 0 || depthCm <= 0) {
    return {
      valid: false,
      score: 0,
      volumeCm3: 0,
      sphericalDiameterCm: 0,
      percentageReduction: null,
      classification: 'Invalid Dimensions',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive dimensions in cm.'
    };
  }

  // Ellipsoid Volume: 0.523 * L * W * D
  const volume = parseFloat((0.523 * lengthCm * widthCm * depthCm).toFixed(1));
  const sphericalDiameter = parseFloat((2 * Math.cbrt((3 * volume) / (4 * Math.PI))).toFixed(1));

  let percentageReduction: number | null = null;
  if (priorVolumeCm3 && priorVolumeCm3 > 0) {
    percentageReduction = parseFloat((((priorVolumeCm3 - volume) / priorVolumeCm3) * 100).toFixed(1));
  }

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let classification = `Volume: ${volume} cm³ (Diameter: ~${sphericalDiameter} cm)`;
  let recommendation = 'Standard dominant fibroid volume. Ideal candidate for particulate embolization with 500-700 µm or 700-900 µm microspheres.';

  if (volume > 500) {
    riskLevel = 'warning';
    recommendation = 'Giant fibroid volume (> 500 cm³). Counsel patient regarding post-embolization syndrome intensity; consider bilateral uterine artery embolization with stepped pain management.';
  }

  return {
    valid: true,
    score: volume,
    volumeCm3: volume,
    sphericalDiameterCm: sphericalDiameter,
    percentageReduction,
    classification,
    riskLevel,
    recommendation,
    details: {
      'Calculated Volume': `${volume} cm³`,
      'Equivalent Diameter': `${sphericalDiameter} cm`,
      'Volume Reduction': percentageReduction !== null ? `${percentageReduction}%` : 'Baseline Measurement'
    }
  };
}

// ============================================================================
// 16. INTERNATIONAL PROSTATE SYMPTOM SCORE (IPSS) & QOL
// Protocol: pae
// ============================================================================
export interface IpssInputs {
  incompleteEmptying: number;
  frequency: number;
  intermittency: number;
  urgency: number;
  weakStream: number;
  straining: number;
  nocturia: number;
  qualityOfLife: number;
}

export interface IpssResult extends GenericCalculatorResult {
  ipssScore: number;
  qolScore: number;
  symptomSeverity: 'Mild' | 'Moderate' | 'Severe';
  paeCandidate: boolean;
}

export function calculateIpss(inputs: IpssInputs): IpssResult {
  const score =
    Math.max(0, Math.min(5, inputs.incompleteEmptying)) +
    Math.max(0, Math.min(5, inputs.frequency)) +
    Math.max(0, Math.min(5, inputs.intermittency)) +
    Math.max(0, Math.min(5, inputs.urgency)) +
    Math.max(0, Math.min(5, inputs.weakStream)) +
    Math.max(0, Math.min(5, inputs.straining)) +
    Math.max(0, Math.min(5, inputs.nocturia));

  const qol = Math.max(0, Math.min(6, inputs.qualityOfLife));

  let symptomSeverity: 'Mild' | 'Moderate' | 'Severe' = 'Mild';
  let paeCandidate = false;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'IPSS 1-7 (Mild LUTS): Conservative watchful waiting and lifestyle measures.';

  if (score >= 20) {
    symptomSeverity = 'Severe';
    paeCandidate = qol >= 3;
    riskLevel = 'critical';
    recommendation = `IPSS ${score} (Severe LUTS, QoL: ${qol}): Strong indication for Prostatic Artery Embolization (PAE) if medical therapy failed or surgical TURP is contraindicated.`;
  } else if (score >= 8) {
    symptomSeverity = 'Moderate';
    paeCandidate = score >= 13 && qol >= 3;
    riskLevel = 'warning';
    recommendation = `IPSS ${score} (Moderate LUTS): Trial of alpha-blockers/5-ARIs. PAE indicated if IPSS ≥ 13 and symptoms are refractory to medications.`;
  }

  return {
    valid: true,
    score,
    ipssScore: score,
    qolScore: qol,
    symptomSeverity,
    paeCandidate,
    classification: `${symptomSeverity} LUTS (IPSS: ${score}/35, QoL: ${qol}/6)`,
    riskLevel,
    recommendation,
    details: {
      'IPSS Score': score,
      'QoL Score': qol,
      'PAE Candidacy': paeCandidate ? 'Qualified Candidate' : 'Not Qualified'
    }
  };
}

// ============================================================================
// 17. PROSTATE VOLUME & PSA DENSITY (PAE)
// Protocol: pae
// ============================================================================
export interface ProstateVolumeResult extends GenericCalculatorResult {
  prostateVolumeMl: number;
  psaDensity: number | null;
  biopsyRecommendedPriorToPae: boolean;
  paeSizeSuitability: 'Suboptimal (<40 mL)' | 'Ideal (40-100 mL)' | 'Massive (>100 mL, Excellent PAE Target)';
}

export function calculateProstateVolume(
  widthCm: number,
  heightCm: number,
  lengthCm: number,
  serumPsaNgMl?: number
): ProstateVolumeResult {
  if (widthCm <= 0 || heightCm <= 0 || lengthCm <= 0) {
    return {
      valid: false,
      score: 0,
      prostateVolumeMl: 0,
      psaDensity: null,
      biopsyRecommendedPriorToPae: false,
      paeSizeSuitability: 'Ideal (40-100 mL)',
      classification: 'Invalid Dimensions',
      riskLevel: 'safe',
      recommendation: 'Enter valid dimensions for the prostate gland.'
    };
  }

  const vol = parseFloat((0.523 * widthCm * heightCm * lengthCm).toFixed(1));

  let psad: number | null = null;
  let biopsyRecommended = false;
  if (serumPsaNgMl && serumPsaNgMl > 0) {
    psad = parseFloat((serumPsaNgMl / vol).toFixed(3));
    biopsyRecommended = psad >= 0.15;
  }

  let paeSizeSuitability: 'Suboptimal (<40 mL)' | 'Ideal (40-100 mL)' | 'Massive (>100 mL, Excellent PAE Target)' = 'Ideal (40-100 mL)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Prostate volume ${vol} mL is an ideal target for PAE.`;

  if (vol > 100) {
    paeSizeSuitability = 'Massive (>100 mL, Excellent PAE Target)';
    riskLevel = 'safe';
    recommendation = `Prostate volume ${vol} mL: Massive gland where surgical TURP carries high morbidity (TURP syndrome, bleeding). PAE is the preferred minimally invasive intervention.`;
  } else if (vol < 40) {
    paeSizeSuitability = 'Suboptimal (<40 mL)';
    riskLevel = 'warning';
    recommendation = `Small prostate (< 40 mL). PAE yields lower volumetric symptom relief compared to medical therapy or bladder neck incision.`;
  }

  if (biopsyRecommended) {
    riskLevel = 'critical';
    recommendation += ' ALERT: PSA Density ≥ 0.15 ng/mL² suggests prostate malignancy risk. Perform multiparametric MRI (PIRADS) and biopsy before performing PAE.';
  }

  return {
    valid: true,
    score: vol,
    prostateVolumeMl: vol,
    psaDensity: psad,
    biopsyRecommendedPriorToPae: biopsyRecommended,
    paeSizeSuitability,
    classification: `${paeSizeSuitability} (${vol} mL)`,
    riskLevel,
    recommendation,
    details: {
      'Prostate Volume': `${vol} mL`,
      'PSA Density': psad !== null ? `${psad} ng/mL²` : 'PSA not provided',
      'Pre-PAE Biopsy Flag': biopsyRecommended ? 'Indicated (PSAD ≥ 0.15)' : 'Not Flagged'
    }
  };
}

// ============================================================================
// 18. NASCET VS. ECST CAROTID ARTERY STENOSIS ENGINE
// Protocol: carotid_stenting
// ============================================================================
export interface NascetCarotidResult extends GenericCalculatorResult {
  nascetPercent: number;
  ecstPercent: number | null;
  carotidStentingIndicated: boolean;
}

export function calculateNascetCarotid(
  residualLumenDiameterMm: number,
  distalNormalIcaDiameterMm: number,
  estimatedOriginalBulbMm?: number
): NascetCarotidResult {
  if (
    residualLumenDiameterMm <= 0 ||
    distalNormalIcaDiameterMm <= 0 ||
    residualLumenDiameterMm >= distalNormalIcaDiameterMm
  ) {
    return {
      valid: false,
      score: 0,
      nascetPercent: 0,
      ecstPercent: null,
      carotidStentingIndicated: false,
      classification: 'Invalid Diameters',
      riskLevel: 'safe',
      recommendation: 'Residual lumen diameter must be strictly less than distal ICA diameter.'
    };
  }

  const nascetRaw = ((distalNormalIcaDiameterMm - residualLumenDiameterMm) / distalNormalIcaDiameterMm) * 100;
  const nascetPercent = parseFloat(nascetRaw.toFixed(1));

  let ecstPercent: number | null = null;
  if (estimatedOriginalBulbMm && estimatedOriginalBulbMm > residualLumenDiameterMm) {
    ecstPercent = parseFloat((((estimatedOriginalBulbMm - residualLumenDiameterMm) / estimatedOriginalBulbMm) * 100).toFixed(1));
  }

  const carotidStentingIndicated = nascetPercent >= 50.0;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Carotid stenosis < 50% (NASCET). Medical therapy (dual antiplatelets, intensive statin) indicated.';

  if (nascetPercent >= 70.0) {
    riskLevel = 'critical';
    recommendation = `Severe stenosis (${nascetPercent}% NASCET): High risk of ipsilateral ischemic stroke. Carotid Artery Stenting (CAS) with embolic protection device (EPD) or CEA recommended.`;
  } else if (nascetPercent >= 50.0) {
    riskLevel = 'warning';
    recommendation = `Moderate-to-severe stenosis (${nascetPercent}% NASCET): Endovascular stenting indicated for symptomatic patients with stroke/TIA within 6 months.`;
  }

  return {
    valid: true,
    score: nascetPercent,
    nascetPercent,
    ecstPercent,
    carotidStentingIndicated,
    classification: `${nascetPercent}% NASCET Stenosis`,
    riskLevel,
    recommendation,
    details: {
      'NASCET Stenosis': `${nascetPercent}%`,
      'ECST Stenosis': ecstPercent !== null ? `${ecstPercent}%` : 'Not computed',
      'CAS Indication': carotidStentingIndicated ? 'Indicated' : 'Medical Management'
    }
  };
}

// ============================================================================
// 19. ALBERTA STROKE PROGRAMME EARLY CT SCORE (ASPECTS)
// Protocol: stroke_thrombectomy
// ============================================================================
export interface AspectsInputs {
  caudate: boolean;
  lentiform: boolean;
  internalCapsule: boolean;
  insularRibbon: boolean;
  m1: boolean;
  m2: boolean;
  m3: boolean;
  m4: boolean;
  m5: boolean;
  m6: boolean;
}

export interface AspectsResult extends GenericCalculatorResult {
  aspectsScore: number;
  favorableCore: boolean;
  thrombectomyBenefit: 'High Benefit' | 'Moderate / Large Core Protocol' | 'Poor Outcome / High Bleeding Risk';
}

export function calculateAspects(hypodenseRegions: AspectsInputs): AspectsResult {
  let deducted = 0;
  if (hypodenseRegions.caudate) deducted += 1;
  if (hypodenseRegions.lentiform) deducted += 1;
  if (hypodenseRegions.internalCapsule) deducted += 1;
  if (hypodenseRegions.insularRibbon) deducted += 1;
  if (hypodenseRegions.m1) deducted += 1;
  if (hypodenseRegions.m2) deducted += 1;
  if (hypodenseRegions.m3) deducted += 1;
  if (hypodenseRegions.m4) deducted += 1;
  if (hypodenseRegions.m5) deducted += 1;
  if (hypodenseRegions.m6) deducted += 1;

  const aspectsScore = 10 - deducted;
  const favorableCore = aspectsScore >= 6;

  let thrombectomyBenefit: 'High Benefit' | 'Moderate / Large Core Protocol' | 'Poor Outcome / High Bleeding Risk' = 'High Benefit';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `ASPECTS ${aspectsScore}/10: Favorable small ischemic core. High clinical benefit from emergent mechanical thrombectomy.`;

  if (aspectsScore < 3) {
    thrombectomyBenefit = 'Poor Outcome / High Bleeding Risk';
    riskLevel = 'critical';
    recommendation = `ASPECTS ${aspectsScore}/10: Extensive established infarction. High risk of fatal hemorrhagic transformation and futile recanalization.`;
  } else if (aspectsScore <= 5) {
    thrombectomyBenefit = 'Moderate / Large Core Protocol';
    riskLevel = 'warning';
    recommendation = `ASPECTS ${aspectsScore}/10: Large ischemic core. Mechanical thrombectomy considered under SELECT2 / TENSION trial criteria within 24h of onset.`;
  }

  return {
    valid: true,
    score: aspectsScore,
    aspectsScore,
    favorableCore,
    thrombectomyBenefit,
    classification: `ASPECTS ${aspectsScore}/10 (${thrombectomyBenefit})`,
    riskLevel,
    recommendation,
    details: {
      'ASPECTS Score': `${aspectsScore}/10`,
      'Infarct Core': favorableCore ? 'Favorable Small Core (≥ 6)' : 'Large Ischemic Core (< 6)',
      'Thrombectomy Recommendation': thrombectomyBenefit
    }
  };
}

// ============================================================================
// 20. NIHSS SHORT SCORING & THROMBECTOMY TRIAGE
// Protocol: stroke_thrombectomy
// ============================================================================
export interface NihssResult extends GenericCalculatorResult {
  nihssScore: number;
  severityTier: 'Minor Stroke' | 'Moderate Stroke' | 'Moderate-to-Severe Stroke' | 'Severe Stroke';
  lvoProbabilityHigh: boolean;
}

export function calculateNihssShort(nihssScore: number): NihssResult {
  const score = Math.max(0, Math.min(42, Math.floor(nihssScore)));

  let severityTier: 'Minor Stroke' | 'Moderate Stroke' | 'Moderate-to-Severe Stroke' | 'Severe Stroke' = 'Minor Stroke';
  let lvoProbabilityHigh = false;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'NIHSS 0-4 (Minor stroke): Evaluate for IV thrombolysis if disabling deficit present.';

  if (score >= 21) {
    severityTier = 'Severe Stroke';
    lvoProbabilityHigh = true;
    riskLevel = 'critical';
    recommendation = 'NIHSS ≥ 21 (Severe stroke): High probability of proximal Large Vessel Occlusion (ICA / M1). Emergent mechanical thrombectomy alert.';
  } else if (score >= 16) {
    severityTier = 'Moderate-to-Severe Stroke';
    lvoProbabilityHigh = true;
    riskLevel = 'critical';
    recommendation = 'NIHSS 16-20: Major focal neurological deficit. Immediate CTA / perfusion imaging and thrombectomy suite activation.';
  } else if (score >= 6) {
    severityTier = 'Moderate Stroke';
    lvoProbabilityHigh = true;
    riskLevel = 'warning';
    recommendation = 'NIHSS 6-15: Moderate deficit. Threshold for emergent endovascular thrombectomy if LVO is identified on CTA within 24h window.';
  }

  return {
    valid: true,
    score,
    nihssScore: score,
    severityTier,
    lvoProbabilityHigh,
    classification: `${severityTier} (NIHSS: ${score})`,
    riskLevel,
    recommendation,
    details: {
      'NIHSS Score': score,
      'Severity Tier': severityTier,
      'High LVO Likelihood': lvoProbabilityHigh ? 'Yes (NIHSS ≥ 6)' : 'Low'
    }
  };
}

// ============================================================================
// 21. HUNT AND HESS SCALE FOR ANEURYSMAL SAH
// Protocol: aneurysm_coiling
// ============================================================================
export interface HuntHessResult extends GenericCalculatorResult {
  grade: number;
  surgicalMortalityRisk: string;
  coilingUrgency: 'Emergent' | 'Urgent' | 'Delayed / Medical Stabilization';
}

export function calculateHuntHess(grade: number): HuntHessResult {
  const g = Math.max(1, Math.min(5, Math.floor(grade)));

  const grades = [
    { text: 'Grade 1: Asymptomatic, or mild headache and slight nuchal rigidity', mort: '1-5%', urgency: 'Urgent' as const, risk: 'safe' as const },
    { text: 'Grade 2: Moderate to severe headache, nuchal rigidity, no neurological deficit other than cranial nerve palsy', mort: '5-10%', urgency: 'Urgent' as const, risk: 'safe' as const },
    { text: 'Grade 3: Drowsiness, confusion, or mild focal deficit', mort: '15-20%', urgency: 'Emergent' as const, risk: 'warning' as const },
    { text: 'Grade 4: Stupor, moderate-to-severe hemiparesis, early vegetative disturbance', mort: '30-40%', urgency: 'Emergent' as const, risk: 'critical' as const },
    { text: 'Grade 5: Deep coma, decerebrate rigidity, moribund appearance', mort: '> 60%', urgency: 'Delayed / Medical Stabilization' as const, risk: 'critical' as const }
  ];

  const current = grades[g - 1];

  let recommendation = 'Aneurysmal securing (endovascular coiling / clipping) indicated within 24-48 hours to prevent fatal re-rupture.';
  if (g >= 4) {
    recommendation = `Hunt & Hess Grade ${g} (High mortality: ${current.mort}). Secure aneurysm via endovascular coiling promptly and insert external ventricular drain (EVD) for hydrocephalus.`;
  }

  return {
    valid: true,
    score: g,
    grade: g,
    surgicalMortalityRisk: current.mort,
    coilingUrgency: current.urgency,
    classification: current.text,
    riskLevel: current.risk,
    recommendation,
    details: {
      'Hunt & Hess Grade': g,
      'Estimated Mortality': current.mort,
      'Coiling Urgency': current.urgency
    }
  };
}

// ============================================================================
// 22. MODIFIED FISHER SCALE FOR VASOSPASM RISK
// Protocol: aneurysm_coiling
// ============================================================================
export interface ModifiedFisherResult extends GenericCalculatorResult {
  grade: number;
  symptomaticVasospasmRisk: string;
  nimodipineAndSpasmolysisGuidance: string;
}

export function calculateModifiedFisher(grade: number): ModifiedFisherResult {
  const g = Math.max(1, Math.min(4, Math.floor(grade)));

  const grades = [
    { text: 'Grade 1: Focal or diffuse thin SAH (< 1 mm), no IVH', riskPct: '~12%', risk: 'safe' as const },
    { text: 'Grade 2: Focal or diffuse thin SAH (< 1 mm), with bilateral IVH', riskPct: '~18%', risk: 'warning' as const },
    { text: 'Grade 3: Thick SAH (≥ 1 mm in depth), no IVH', riskPct: '~33%', risk: 'critical' as const },
    { text: 'Grade 4: Thick SAH (≥ 1 mm in depth), with bilateral IVH', riskPct: '~40% (Highest Risk)', risk: 'critical' as const }
  ];

  const item = grades[g - 1];
  const guidance = g >= 3
    ? 'High risk of delayed cerebral ischemia (DCI). Maintain oral Nimodipine 60 mg q4h. Daily transcranial Doppler (TCD) surveillance. Prepare for intra-arterial Milrinone / Verapamil spasmolysis if refractory spasm occurs.'
    : 'Lower vasospasm risk. Standard oral Nimodipine protocol for 21 days with euvolemic fluid management.';

  return {
    valid: true,
    score: g,
    grade: g,
    symptomaticVasospasmRisk: item.riskPct,
    nimodipineAndSpasmolysisGuidance: guidance,
    classification: item.text,
    riskLevel: item.risk,
    recommendation: guidance,
    details: {
      'Modified Fisher Grade': g,
      'Symptomatic Vasospasm Risk': item.riskPct
    }
  };
}

// ============================================================================
// 23. MARKWALDER GRADING SCALE FOR CSDH (MMA EMBOLIZATION)
// Protocol: csdh_mma
// ============================================================================
export interface MarkwalderResult extends GenericCalculatorResult {
  grade: number;
  mmaEmbolizationRole: 'Ideal Standalone / Adjuvant Target' | 'Urgent Surgical Evacuation + Adjunctive MMA';
}

export function calculateMarkwalder(grade: number): MarkwalderResult {
  const g = Math.max(0, Math.min(4, Math.floor(grade)));

  const descriptions = [
    'Grade 0: Neurologically intact, asymptomatic',
    'Grade 1: Alert, oriented; mild symptoms (headache, unsteady gait)',
    'Grade 2: Drowsy or disoriented with variable focal neurological signs',
    'Grade 3: Stuporous, responds to noxious stimuli, severe focal signs (hemiplegia)',
    'Grade 4: Comatose, unresponsive to pain, decerebrate posturing'
  ];

  const isUrgentSurgery = g >= 3;
  const mmaEmbolizationRole = isUrgentSurgery
    ? 'Urgent Surgical Evacuation + Adjunctive MMA'
    : 'Ideal Standalone / Adjuvant Target';
  const riskLevel = g >= 3 ? 'critical' : g >= 1 ? 'warning' : 'safe';

  const recommendation = isUrgentSurgery
    ? 'Markwalder Grade 3-4: Impending cerebral herniation. Emergent burr-hole craniostomy decompression required. Postoperative MMA embolization recommended to prevent the 30% surgical recurrence rate.'
    : 'Markwalder Grade 0-2: Ideal candidate for primary standalone or prophylactic Middle Meningeal Artery (MMA) embolization with Onyx/particles, avoiding invasive surgery.';

  return {
    valid: true,
    score: g,
    grade: g,
    mmaEmbolizationRole,
    classification: descriptions[g],
    riskLevel,
    recommendation,
    details: {
      'Markwalder Grade': g,
      'MMA Embolization Strategy': mmaEmbolizationRole
    }
  };
}

// ============================================================================
// 24. SCHOBINGER CLINICAL STAGING FOR ARTERIOVENOUS MALFORMATIONS
// Protocol: head_neck_avm
// ============================================================================
export interface SchobingerResult extends GenericCalculatorResult {
  stage: number;
  interventionStrategy: 'Conservative Surveillance' | 'Elective Embolization' | 'Urgent Multimodal Embolization' | 'Emergency Decompression';
}

export function calculateSchobinger(stage: number): SchobingerResult {
  const s = Math.max(1, Math.min(4, Math.floor(stage)));

  const map = [
    {
      text: 'Stage I (Quiescence): Warm, pink-bluish macule, arteriovenous shunting on Doppler; asymptomatic',
      strategy: 'Conservative Surveillance' as const,
      risk: 'safe' as const,
      rec: 'Observation and serial duplex ultrasound. Avoid premature focal interventions that trigger nidus proliferation.'
    },
    {
      text: 'Stage II (Expansion): Same as Stage I plus enlargement, pulsations, thrill, bruit, tortuous veins',
      strategy: 'Elective Embolization' as const,
      risk: 'warning' as const,
      rec: 'Angiographic evaluation. Transarterial or direct percutaneous embolization with Onyx/PHIL or nBCA indicated to arrest progression.'
    },
    {
      text: 'Stage III (Destruction): Stage II plus dystrophic skin changes, ulceration, bleeding, persistent pain, or tissue necrosis',
      strategy: 'Urgent Multimodal Embolization' as const,
      risk: 'critical' as const,
      rec: 'Active tissue destruction and bleeding. Urgent superselective nidus embolization followed by reconstructive surgery.'
    },
    {
      text: 'Stage IV (Decompensation): Stage III plus high-output congestive heart failure',
      strategy: 'Emergency Decompression' as const,
      risk: 'critical' as const,
      rec: 'Cardiovascular decompensation from severe high-flow arteriovenous shunt. Emergency volume reduction embolization and inotropic support.'
    }
  ];

  const item = map[s - 1];

  return {
    valid: true,
    score: s,
    stage: s,
    interventionStrategy: item.strategy,
    classification: item.text,
    riskLevel: item.risk,
    recommendation: item.rec,
    details: {
      'Schobinger Stage': s,
      'Intervention Strategy': item.strategy
    }
  };
}

// ============================================================================
// 25. ROCKALL SCORE FOR UPPER GI BLEEDING
// Protocol: upper_gi_bleed
// ============================================================================
export interface RockallInputs {
  ageGroup: '<60' | '60-79' | '>=80';
  shock: 'none' | 'tachycardia' | 'hypotension';
  comorbidity: 'none' | 'cad_chf_major' | 'renal_liver_malig';
  endoscopicStigmata: 'clean_base' | 'blood_clot' | 'active_spurting';
}

export interface RockallResult extends GenericCalculatorResult {
  rockallScore: number;
  rebleedingRisk: string;
  mortalityRate: string;
  irEmbolizationIndicated: boolean;
}

export function calculateRockall(inputs: RockallInputs): RockallResult {
  let score = 0;
  if (inputs.ageGroup === '60-79') score += 1;
  else if (inputs.ageGroup === '>=80') score += 2;

  if (inputs.shock === 'tachycardia') score += 1;
  else if (inputs.shock === 'hypotension') score += 2;

  if (inputs.comorbidity === 'cad_chf_major') score += 2;
  else if (inputs.comorbidity === 'renal_liver_malig') score += 3;

  if (inputs.endoscopicStigmata === 'blood_clot') score += 1;
  else if (inputs.endoscopicStigmata === 'active_spurting') score += 2;

  let rebleedingRisk = '5%';
  let mortalityRate = '< 1%';
  let irEmbolizationIndicated = false;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Low Rockall score (< 3): Low risk of rebleeding. Outpatient management or routine ward care.';

  if (score >= 6) {
    rebleedingRisk = '> 40%';
    mortalityRate = '> 25%';
    irEmbolizationIndicated = true;
    riskLevel = 'critical';
    recommendation = 'High Rockall score (≥ 6): Substantial rebleeding and mortality risk. If endoscopic hemostasis fails or arterial spurting persists, initiate immediate transcatheter arterial embolization (TAE).';
  } else if (score >= 3) {
    rebleedingRisk = '~15-25%';
    mortalityRate = '~5-10%';
    riskLevel = 'warning';
    recommendation = 'Intermediate Rockall score (3-5): Inpatient monitoring, high-dose IV PPI infusion, and repeat endoscopy or prophylactic angiography if high-risk stigmata.';
  }

  return {
    valid: true,
    score,
    rockallScore: score,
    rebleedingRisk,
    mortalityRate,
    irEmbolizationIndicated,
    classification: `Rockall Score ${score}/11 (Mortality: ${mortalityRate})`,
    riskLevel,
    recommendation,
    details: {
      'Rockall Score': score,
      'Rebleeding Probability': rebleedingRisk,
      'Mortality Rate': mortalityRate,
      'Emergency TAE Alert': irEmbolizationIndicated ? 'Activated' : 'Standard Monitoring'
    }
  };
}

// ============================================================================
// 26. GLASGOW-BLATCHFORD BLEEDING SCORE (GBS)
// Protocol: upper_gi_bleed
// ============================================================================
export interface GbsInputs {
  bunMgDl: number;
  hemoglobinGDl: number;
  systolicBp: number;
  pulseBpm: number;
  isFemale: boolean;
  syncopePresent: boolean;
  melenaPresent: boolean;
  liverDiseaseHistory: boolean;
  cardiacFailureHistory: boolean;
}

export interface GbsResult extends GenericCalculatorResult {
  gbsScore: number;
  interventionNeeded: boolean;
}

export function calculateGlasgowBlatchford(inputs: GbsInputs): GbsResult {
  let score = 0;

  // BUN
  if (inputs.bunMgDl >= 70) score += 6;
  else if (inputs.bunMgDl >= 28) score += 4;
  else if (inputs.bunMgDl >= 22) score += 3;
  else if (inputs.bunMgDl >= 18) score += 2;

  // Hemoglobin
  if (inputs.isFemale) {
    if (inputs.hemoglobinGDl < 10) score += 6;
    else if (inputs.hemoglobinGDl < 12) score += 1;
  } else {
    if (inputs.hemoglobinGDl < 10) score += 6;
    else if (inputs.hemoglobinGDl < 12) score += 3;
    else if (inputs.hemoglobinGDl < 13) score += 1;
  }

  // Systolic BP
  if (inputs.systolicBp < 90) score += 3;
  else if (inputs.systolicBp < 100) score += 2;
  else if (inputs.systolicBp < 110) score += 1;

  // Pulse
  if (inputs.pulseBpm >= 100) score += 1;

  // Clinical markers
  if (inputs.syncopePresent) score += 2;
  if (inputs.melenaPresent) score += 1;
  if (inputs.liverDiseaseHistory) score += 2;
  if (inputs.cardiacFailureHistory) score += 2;

  const interventionNeeded = score >= 6;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'GBS score 0-1: Very low risk. Can be considered for safe outpatient discharge without emergent endoscopy.';

  if (score >= 6) {
    riskLevel = 'critical';
    recommendation = `GBS score ${score} (High Risk): Over 50% chance of requiring blood transfusion, therapeutic endoscopy, or interventional radiological embolization. Urgent admission to ICU/HDU.`;
  } else if (score >= 2) {
    riskLevel = 'warning';
    recommendation = `GBS score ${score}: Intermediate risk. Inpatient admission and diagnostic upper endoscopy within 24 hours indicated.`;
  }

  return {
    valid: true,
    score,
    gbsScore: score,
    interventionNeeded,
    classification: `Glasgow-Blatchford Score: ${score}`,
    riskLevel,
    recommendation,
    details: {
      'GBS Score': score,
      'Intervention Required': interventionNeeded ? 'Likely (>50%)' : 'Unlikely',
      'Outpatient Candidate': score <= 1 ? 'Yes' : 'No'
    }
  };
}

// ============================================================================
// 27. OAKLAND SCORE FOR ACUTE LOWER GI BLEEDING
// Protocol: lower_gi_bleed
// ============================================================================
export interface OaklandInputs {
  age: number;
  sex: 'male' | 'female';
  priorLgibAdmission: boolean;
  dreBloodPresent: boolean;
  heartRateBpm: number;
  systolicBpMmHg: number;
  hemoglobinGDl: number;
}

export interface OaklandResult extends GenericCalculatorResult {
  oaklandScore: number;
  safeForDischarge: boolean;
  ctaEmbolizationAlert: boolean;
}

export function calculateOakland(inputs: OaklandInputs): OaklandResult {
  let score = 0;

  // Age
  if (inputs.age >= 85) score += 5;
  else if (inputs.age >= 70) score += 4;
  else if (inputs.age >= 60) score += 3;
  else if (inputs.age >= 40) score += 2;
  else if (inputs.age >= 35) score += 1;

  // Sex
  if (inputs.sex === 'male') score += 1;

  // Prior admission
  if (inputs.priorLgibAdmission) score += 1;

  // DRE findings
  if (inputs.dreBloodPresent) score += 1;

  // Heart rate
  if (inputs.heartRateBpm >= 110) score += 5;
  else if (inputs.heartRateBpm >= 90) score += 3;
  else if (inputs.heartRateBpm >= 70) score += 2;

  // Systolic BP
  if (inputs.systolicBpMmHg < 90) score += 5;
  else if (inputs.systolicBpMmHg < 120) score += 4;
  else if (inputs.systolicBpMmHg < 130) score += 3;
  else if (inputs.systolicBpMmHg < 160) score += 2;

  // Hemoglobin
  if (inputs.hemoglobinGDl < 7) score += 17;
  else if (inputs.hemoglobinGDl < 9) score += 13;
  else if (inputs.hemoglobinGDl < 11) score += 8;
  else if (inputs.hemoglobinGDl < 13) score += 4;

  const safeForDischarge = score <= 8;
  const ctaEmbolizationAlert = score >= 15;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Oakland score ≤ 8: 95% probability of safe discharge without adverse outcomes. Safe for outpatient investigation.';

  if (score >= 15) {
    riskLevel = 'critical';
    recommendation = `Oakland score ${score} (Severe LGIB): High likelihood of major active bleeding. Immediate CT Mesenteric Angiography (CTA) recommended; prepare for superselective microcoil or Gelfoam embolization.`;
  } else if (score > 8) {
    riskLevel = 'warning';
    recommendation = `Oakland score ${score}: Inpatient admission required. Resuscitate, crossmatch blood, and monitor for hemodynamic instability.`;
  }

  return {
    valid: true,
    score,
    oaklandScore: score,
    safeForDischarge,
    ctaEmbolizationAlert,
    classification: `Oakland Score: ${score}`,
    riskLevel,
    recommendation,
    details: {
      'Oakland Score': score,
      'Safe for Discharge': safeForDischarge ? 'Yes (≤ 8)' : 'No',
      'CTA / Embolization Alert': ctaEmbolizationAlert ? 'High Priority' : 'Standard Care'
    }
  };
}

// ============================================================================
// 28. SIR PRE-PROCEDURE BLEEDING RISK & COAGULATION THRESHOLDS
// Protocol: biopsy, ptbd, pcn
// ============================================================================
export interface SirBleedingRiskResult extends GenericCalculatorResult {
  procedureCategory: 1 | 2 | 3;
  clearedForProcedure: boolean;
  requiredCorrections: string[];
}

export function calculateSirBleedingRisk(
  procedureCategory: 1 | 2 | 3,
  plateletCountPerUl: number,
  inr: number,
  apttSeconds?: number
): SirBleedingRiskResult {
  const requiredCorrections: string[] = [];
  let clearedForProcedure = true;

  if (procedureCategory === 1) {
    // Category 1: Low risk (e.g. vascular access, paracentesis, thoracentesis)
    if (plateletCountPerUl < 50000) {
      clearedForProcedure = false;
      requiredCorrections.push('Platelets < 50,000/µL. Transfuse platelets to ≥ 50,000/µL.');
    }
    if (inr > 2.0) {
      clearedForProcedure = false;
      requiredCorrections.push('INR > 2.0. Correct with Vitamin K or FFP if feasible.');
    }
  } else if (procedureCategory === 2) {
    // Category 2: Moderate risk (e.g. liver biopsy, lung biopsy, PTBD, PCN)
    if (plateletCountPerUl < 50000) {
      clearedForProcedure = false;
      requiredCorrections.push('Platelets < 50,000/µL. Transfuse platelets to reach ≥ 50,000/µL before percutaneous puncture.');
    }
    if (inr > 1.8) {
      clearedForProcedure = false;
      requiredCorrections.push('INR > 1.8. Administer FFP / Vitamin K to achieve INR ≤ 1.5 - 1.8.');
    }
    if (apttSeconds && apttSeconds > 45) {
      clearedForProcedure = false;
      requiredCorrections.push('aPTT > 45s. Investigate heparin effect or factor deficiency.');
    }
  } else {
    // Category 3: High risk (e.g. TIPS, deep liver/renal ablation, renal biopsy)
    if (plateletCountPerUl < 50000) {
      clearedForProcedure = false;
      requiredCorrections.push('Platelets < 50,000/µL (≥ 70,000/µL recommended for renal interventions). Urgent platelet transfusion required.');
    }
    if (inr > 1.5) {
      clearedForProcedure = false;
      requiredCorrections.push('INR > 1.5. Strict requirement: Correct INR to ≤ 1.5 prior to high-risk visceral puncture.');
    }
    if (apttSeconds && apttSeconds > 40) {
      clearedForProcedure = false;
      requiredCorrections.push('aPTT > 40s. Normalize aPTT before proceeding with high-risk parenchymal tract creation.');
    }
  }

  const riskLevel = clearedForProcedure ? 'safe' : 'critical';
  const recommendation = clearedForProcedure
    ? 'Patient meets SIR coagulation thresholds for this procedure category. Proceed with intervention.'
    : `CONTRAINDICATION: Coagulation thresholds not met. ${requiredCorrections.join(' ')}`;

  return {
    valid: true,
    score: procedureCategory,
    procedureCategory,
    clearedForProcedure,
    requiredCorrections,
    classification: clearedForProcedure ? 'Coagulation Cleared' : 'Coagulation Deficit - Correction Required',
    riskLevel,
    recommendation,
    details: {
      'Procedure Risk Category': `Category ${procedureCategory}`,
      'Clearance Status': clearedForProcedure ? 'CLEARED' : 'CORRECTION REQUIRED',
      'Deficits': requiredCorrections.length > 0 ? requiredCorrections.join('; ') : 'None'
    }
  };
}

// ============================================================================
// 29. THERMAL ABLATION MARGIN (A0/A1) & SPHERICITY INDEX
// Protocol: tumor_ablation
// ============================================================================
export interface AblationMarginResult extends GenericCalculatorResult {
  minimumMarginMm: number;
  sphericityIndex: number;
  marginClass: 'A0 (Suboptimal / High Recurrence Risk)' | 'A1 (Adequate Margin)' | 'Curative Margin (≥ 10 mm)';
}

export function calculateAblationMargin(
  tumorMaxDiameterMm: number,
  ablationTransverseMm: number,
  ablationLongitudinalMm: number,
  measuredMinMarginMm: number
): AblationMarginResult {
  if (
    tumorMaxDiameterMm <= 0 ||
    ablationTransverseMm <= 0 ||
    ablationLongitudinalMm <= 0
  ) {
    return {
      valid: false,
      score: 0,
      minimumMarginMm: 0,
      sphericityIndex: 1.0,
      marginClass: 'A1 (Adequate Margin)',
      classification: 'Invalid Dimensions',
      riskLevel: 'safe',
      recommendation: 'Enter valid measurements for tumor and ablation zone.'
    };
  }

  const sphericityIndex = parseFloat((ablationTransverseMm / ablationLongitudinalMm).toFixed(2));
  const minimumMarginMm = measuredMinMarginMm;

  let marginClass: 'A0 (Suboptimal / High Recurrence Risk)' | 'A1 (Adequate Margin)' | 'Curative Margin (≥ 10 mm)' = 'A1 (Adequate Margin)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Adequate ablative margin (≥ 5 mm). Sphericity index: ${sphericityIndex}. Proceed with post-ablation contrast CT at 1 month.`;

  if (minimumMarginMm < 5.0) {
    marginClass = 'A0 (Suboptimal / High Recurrence Risk)';
    riskLevel = 'critical';
    recommendation = `ALERT: Minimum margin < 5 mm (${minimumMarginMm} mm). A0 ablation carries elevated local tumor progression (LTP) rate. Consider immediate re-ablation of deficient margin.`;
  } else if (minimumMarginMm >= 10.0) {
    marginClass = 'Curative Margin (≥ 10 mm)';
    recommendation = `Curative margin achieved (≥ 10 mm complete 3D circumferential halo). Low probability of local recurrence.`;
  }

  return {
    valid: true,
    score: minimumMarginMm,
    minimumMarginMm,
    sphericityIndex,
    marginClass,
    classification: `${marginClass} (Margin: ${minimumMarginMm} mm)`,
    riskLevel,
    recommendation,
    details: {
      'Minimum Margin': `${minimumMarginMm} mm`,
      'Ablation Sphericity': sphericityIndex,
      'Margin Status': marginClass
    }
  };
}

// ============================================================================
// 30. WOMAC OSTEOARTHRITIS INDEX FOR GENICULAR ARTERY EMBOLIZATION (GAE)
// Protocol: gae_knee
// ============================================================================
export interface WomacResult extends GenericCalculatorResult {
  totalWomacScore: number;
  percentageScore: number;
  painSubscore: number;
  gaeCandidacy: 'Ideal GAE Candidate' | 'Moderate Knee Pain' | 'Mild OA Symptoms (Medical Therapy)';
}

export function calculateWomac(
  painScore0To20: number,
  stiffnessScore0To8: number,
  functionScore0To68: number
): WomacResult {
  const pain = Math.max(0, Math.min(20, painScore0To20));
  const stiffness = Math.max(0, Math.min(8, stiffnessScore0To8));
  const func = Math.max(0, Math.min(68, functionScore0To68));

  const total = pain + stiffness + func;
  const percentage = parseFloat(((total / 96) * 100).toFixed(1));

  let gaeCandidacy: 'Ideal GAE Candidate' | 'Moderate Knee Pain' | 'Mild OA Symptoms (Medical Therapy)' = 'Mild OA Symptoms (Medical Therapy)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Mild WOMAC disability. First-line management with physical therapy and NSAIDs.';

  if (pain >= 10 && percentage >= 45) {
    gaeCandidacy = 'Ideal GAE Candidate';
    riskLevel = 'critical';
    recommendation = `WOMAC Score ${total}/96 (${percentage}%, Pain: ${pain}/20): Disabling knee osteoarthritis pain refractory to conservative therapy. Ideal candidate for Genicular Artery Embolization (GAE).`;
  } else if (percentage >= 30) {
    gaeCandidacy = 'Moderate Knee Pain';
    riskLevel = 'warning';
    recommendation = `Moderate knee symptoms (${percentage}%). Consider trial of intra-articular hyaluronic acid / PRP; evaluate for GAE if pain persists.`;
  }

  return {
    valid: true,
    score: total,
    totalWomacScore: total,
    percentageScore: percentage,
    painSubscore: pain,
    gaeCandidacy,
    classification: `${gaeCandidacy} (WOMAC: ${total}/96)`,
    riskLevel,
    recommendation,
    details: {
      'Total WOMAC': `${total} / 96 (${percentage}%)`,
      'Pain Subscore': `${pain} / 20`,
      'GAE Suitability': gaeCandidacy
    }
  };
}

// ============================================================================
// 31. FUTURE LIVER REMNANT (sFLR), DEGREE OF HYPERTROPHY & KGR
// Protocol: pve, y90_tare
// ============================================================================
export interface FlrKgrResult extends GenericCalculatorResult {
  bsaM2: number;
  telvMl: number;
  preSflrPct: number;
  postSflrPct: number;
  degreeOfHypertrophyPct: number;
  kgrPctPerWeek: number;
  safeForResection: boolean;
}

export function calculateFlrKgr(
  prePveFlrVolumeMl: number,
  postPveFlrVolumeMl: number,
  patientWeightKg: number,
  patientHeightCm: number,
  elapsedWeeks: number,
  liverBackground: 'normal' | 'steatosis_chemo' | 'cirrhosis'
): FlrKgrResult {
  if (prePveFlrVolumeMl <= 0 || postPveFlrVolumeMl <= 0 || patientWeightKg <= 0 || patientHeightCm <= 0 || elapsedWeeks <= 0) {
    return {
      valid: false,
      score: 0,
      bsaM2: 0,
      telvMl: 0,
      preSflrPct: 0,
      postSflrPct: 0,
      degreeOfHypertrophyPct: 0,
      kgrPctPerWeek: 0,
      safeForResection: false,
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive values for liver volumes, height, weight, and elapsed weeks.'
    };
  }

  const bsa = parseFloat(Math.sqrt((patientWeightKg * patientHeightCm) / 3600).toFixed(2));
  const telv = Math.round(-794.41 + 1267.28 * bsa);

  const preSflr = parseFloat(((prePveFlrVolumeMl / telv) * 100).toFixed(1));
  const postSflr = parseFloat(((postPveFlrVolumeMl / telv) * 100).toFixed(1));
  const dh = parseFloat((postSflr - preSflr).toFixed(1));
  const kgr = parseFloat((dh / elapsedWeeks).toFixed(2));

  const targetThreshold = liverBackground === 'cirrhosis' ? 40 : liverBackground === 'steatosis_chemo' ? 30 : 20;
  const isVolumeSufficient = postSflr >= targetThreshold;
  const isGrowthAdequate = kgr >= 2.66;
  const safeForResection = isVolumeSufficient && (kgr >= 2.0 || postSflr >= targetThreshold + 5);

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Adequate FLR (${postSflr}% vs target ${targetThreshold}%) and robust kinetic growth (${kgr}%/week). Cleared for major hepatic resection with low risk of Post-Hepatectomy Liver Failure (PHLF).`;

  if (!isVolumeSufficient && !isGrowthAdequate) {
    riskLevel = 'critical';
    recommendation = `CRITICAL PHLF RISK: Post-PVE FLR is inadequate (${postSflr}% < ${targetThreshold}%) and KGR is sluggish (${kgr}%/wk < 2.66%/wk). High risk of fatal liver failure. Do NOT resect; consider hepatic vein embolization (HVE) or wait.`;
  } else if (!isVolumeSufficient || !isGrowthAdequate) {
    riskLevel = 'warning';
    recommendation = `Borderline hypertrophy (sFLR: ${postSflr}%, KGR: ${kgr}%/week, Target: ${targetThreshold}%). Recommend multidisciplinary liver tumor board review and repeat CT volumetry in 2 weeks.`;
  }

  return {
    valid: true,
    score: `${postSflr}% sFLR (KGR ${kgr}%/wk)`,
    bsaM2: bsa,
    telvMl: telv,
    preSflrPct: preSflr,
    postSflrPct: postSflr,
    degreeOfHypertrophyPct: dh,
    kgrPctPerWeek: kgr,
    safeForResection,
    classification: safeForResection ? 'Cleared for Resection' : 'High PHLF Risk (Inadequate FLR)',
    riskLevel,
    recommendation,
    details: {
      'TELV (Vauthey)': `${telv} mL (BSA ${bsa} m²)`,
      'Pre-PVE sFLR': `${preSflr}% (${prePveFlrVolumeMl} mL)`,
      'Post-PVE sFLR': `${postSflr}% (${postPveFlrVolumeMl} mL)`,
      'Degree of Hypertrophy (DH)': `+${dh}%`,
      'Kinetic Growth Rate (KGR)': `${kgr}% / week (Goal ≥ 2.66%)`,
      'Target FLR Threshold': `≥ ${targetThreshold}% (${liverBackground})`
    }
  };
}

// ============================================================================
// 32. Y90 PARTITION MODEL DOSIMETRY & LUNG SHUNT FRACTION (LSF)
// Protocol: y90_tare
// ============================================================================
export interface Y90DosimetryResult extends GenericCalculatorResult {
  lungAbsorbedDoseGy: number;
  tumorAbsorbedDoseGy: number;
  normalLiverAbsorbedDoseGy: number;
  isLsfSafe: boolean;
  isTumoricidal: boolean;
}

export function calculateY90Dosimetry(
  administeredActivityGbq: number,
  lungShuntFractionPct: number,
  targetLiverMassKg: number,
  tumorToNormalRatio: number,
  tumorMassKg: number
): Y90DosimetryResult {
  if (administeredActivityGbq <= 0 || lungShuntFractionPct < 0 || targetLiverMassKg <= 0 || tumorToNormalRatio <= 0 || tumorMassKg <= 0) {
    return {
      valid: false,
      score: 0,
      lungAbsorbedDoseGy: 0,
      tumorAbsorbedDoseGy: 0,
      normalLiverAbsorbedDoseGy: 0,
      isLsfSafe: false,
      isTumoricidal: false,
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive values for activity, shunt fraction, liver mass, and T/N ratio.'
    };
  }

  const lsf = lungShuntFractionPct / 100;
  const lungMassKg = 1.0;
  const lungDose = parseFloat(((administeredActivityGbq * lsf * 50) / lungMassKg).toFixed(1));

  const normalLiverMass = Math.max(0.1, targetLiverMassKg - tumorMassKg);
  const numerator = tumorToNormalRatio * tumorMassKg;
  const denominator = numerator + normalLiverMass;
  const tumorFractionOfLiver = numerator / denominator;

  const liverActivityGbq = administeredActivityGbq * (1 - lsf);
  const tumorActivityGbq = liverActivityGbq * tumorFractionOfLiver;
  const normalLiverActivityGbq = liverActivityGbq - tumorActivityGbq;

  const tumorDose = Math.round((tumorActivityGbq * 50) / tumorMassKg);
  const normalLiverDose = Math.round((normalLiverActivityGbq * 50) / normalLiverMass);

  const isLsfSafe = lungShuntFractionPct <= 20 && lungDose <= 30;
  const isTumoricidal = tumorDose >= 100;
  const isLiverSafe = normalLiverDose <= 70;

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Therapeutic radiation dosimetry achieved. Tumor dose (${tumorDose} Gy) exceeds tumoricidal threshold (≥100 Gy) while lung dose (${lungDose} Gy < 30 Gy) and normal liver dose (${normalLiverDose} Gy < 70 Gy) remain safe.`;

  if (!isLsfSafe) {
    riskLevel = 'critical';
    recommendation = `CRITICAL RADIATION HAZARD: Lung shunt fraction (${lungShuntFractionPct}%) or lung absorbed dose (${lungDose} Gy) exceeds strict safety ceiling (>20% or >30 Gy). High risk of fatal radiation pneumonitis. Radioembolization CONTRAINDICATED or requires dose reduction.`;
  } else if (!isLiverSafe) {
    riskLevel = 'critical';
    recommendation = `HIGH REILD RISK: Normal liver parenchyma absorbed dose (${normalLiverDose} Gy) exceeds 70 Gy limit. High risk of Radioembolization-Induced Liver Disease (REILD).`;
  } else if (!isTumoricidal) {
    riskLevel = 'warning';
    recommendation = `Sub-therapeutic tumor dose (${tumorDose} Gy < 100-120 Gy threshold). Consider superselective microcatheter position or increased target activity.`;
  }

  return {
    valid: true,
    score: `${tumorDose} Gy Tumor / ${lungDose} Gy Lung`,
    lungAbsorbedDoseGy: lungDose,
    tumorAbsorbedDoseGy: tumorDose,
    normalLiverAbsorbedDoseGy: normalLiverDose,
    isLsfSafe,
    isTumoricidal,
    classification: !isLsfSafe ? 'Unsafe Lung Shunt' : isTumoricidal ? 'Therapeutic Dosimetry' : 'Sub-therapeutic Tumor Dose',
    riskLevel,
    recommendation,
    details: {
      'Lung Absorbed Dose': `${lungDose} Gy (Ceiling < 30 Gy)`,
      'Tumor Absorbed Dose': `${tumorDose} Gy (Goal ≥ 100-120 Gy)`,
      'Normal Liver Dose': `${normalLiverDose} Gy (Ceiling < 70 Gy)`,
      'Lung Shunt Fraction (LSF)': `${lungShuntFractionPct}% (Limit ≤ 20%)`,
      'Tumor-to-Normal (T/N)': `${tumorToNormalRatio} : 1`
    }
  };
}

// ============================================================================
// 33. SPETZLER-MARTIN ARTERIOVENOUS MALFORMATION (AVM) GRADING
// Protocol: head_neck_avm, aneurysm_coiling
// ============================================================================
export interface SpetzlerMartinResult extends GenericCalculatorResult {
  grade: number;
  sizePoints: number;
  eloquencePoints: number;
  drainagePoints: number;
  operativeRiskCategory: string;
}

export function calculateSpetzlerMartin(
  nidusSizeCm: number,
  isEloquentCortex: boolean,
  hasDeepVenousDrainage: boolean
): SpetzlerMartinResult {
  if (nidusSizeCm <= 0) {
    return {
      valid: false,
      score: 0,
      grade: 0,
      sizePoints: 0,
      eloquencePoints: 0,
      drainagePoints: 0,
      operativeRiskCategory: 'N/A',
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive AVM nidus diameter.'
    };
  }

  let sizePoints = 1;
  if (nidusSizeCm > 6.0) sizePoints = 3;
  else if (nidusSizeCm >= 3.0) sizePoints = 2;

  const eloquencePoints = isEloquentCortex ? 1 : 0;
  const drainagePoints = hasDeepVenousDrainage ? 1 : 0;

  const grade = sizePoints + eloquencePoints + drainagePoints;

  let operativeRiskCategory = 'Low Risk (Grade I-II)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Spetzler-Martin Grade ${grade}: Low neurological morbidity (<3%). Favorable candidate for curative endovascular embolization (Onyx/Squid) and/or stereotactic radiosurgery.`;

  if (grade >= 4) {
    operativeRiskCategory = 'High Risk (Grade IV-V)';
    riskLevel = 'critical';
    recommendation = `Spetzler-Martin Grade ${grade}: High surgical/embolization morbidity risk (>20-30% disabling neurological deficit). Conservative management strongly favored unless ruptured aneurysm or high-flow arteriovenous fistula warrants targeted partial embolization.`;
  } else if (grade === 3) {
    operativeRiskCategory = 'Intermediate Risk (Grade III)';
    riskLevel = 'warning';
    recommendation = `Spetzler-Martin Grade III: Intermediate operative risk. Multidisciplinary neurovascular review indicated; consider staged pre-radiosurgery nidus embolization.`;
  }

  return {
    valid: true,
    score: `Grade ${grade}`,
    grade,
    sizePoints,
    eloquencePoints,
    drainagePoints,
    operativeRiskCategory,
    classification: `Spetzler-Martin Grade ${grade} (${operativeRiskCategory})`,
    riskLevel,
    recommendation,
    details: {
      'Spetzler-Martin Grade': `Grade ${grade} (Sum 1-5)`,
      'Nidus Size': `${nidusSizeCm} cm (${sizePoints} pt${sizePoints > 1 ? 's' : ''})`,
      'Eloquent Location': isEloquentCortex ? 'Eloquent (1 pt)' : 'Non-eloquent (0 pts)',
      'Venous Drainage': hasDeepVenousDrainage ? 'Deep Venous Drainage (1 pt)' : 'Superficial Only (0 pts)'
    }
  };
}

// ============================================================================
// 34. DAVIES-ELEFTERIADES AORTIC SIZE INDEX (ASI) & TEVAR RUPTURE RISK
// Protocol: evar_tevar, visceral_aneurysm
// ============================================================================
export interface AorticSizeIndexResult extends GenericCalculatorResult {
  bsaM2: number;
  asiCmPerM2: number;
  yearlyRuptureRiskPct: string;
  interventionTier: string;
}

export function calculateAorticSizeIndex(
  maxAorticDiameterCm: number,
  patientWeightKg: number,
  patientHeightCm: number
): AorticSizeIndexResult {
  if (maxAorticDiameterCm <= 0 || patientWeightKg <= 0 || patientHeightCm <= 0) {
    return {
      valid: false,
      score: 0,
      bsaM2: 0,
      asiCmPerM2: 0,
      yearlyRuptureRiskPct: 'N/A',
      interventionTier: 'N/A',
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive values for aortic diameter, weight, and height.'
    };
  }

  const bsa = parseFloat(Math.sqrt((patientWeightKg * patientHeightCm) / 3600).toFixed(2));
  const asi = parseFloat((maxAorticDiameterCm / bsa).toFixed(2));

  let yearlyRuptureRiskPct = '~4% per year';
  let interventionTier = 'Low Risk (ASI < 2.75 cm/m²)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Aortic Size Index ${asi} cm/m² (< 2.75): Low annual rupture/dissection risk (~4%/yr). Optimize anti-impulse medical therapy (target SBP < 120 mmHg) and annual CTA surveillance.`;

  if (asi >= 4.25) {
    yearlyRuptureRiskPct = '20 - 25% per year';
    interventionTier = 'Critical / Severe Risk (ASI ≥ 4.25 cm/m²)';
    riskLevel = 'critical';
    recommendation = `CRITICAL RUPTURE HAZARD: ASI ${asi} cm/m² (≥ 4.25) carries critical annual rupture/dissection risk (>20-25%/yr). Urgent TEVAR / EVAR endovascular repair indicated.`;
  } else if (asi >= 2.75) {
    yearlyRuptureRiskPct = '~8% per year';
    interventionTier = 'Moderate Risk (ASI 2.75 - 4.24 cm/m²)';
    riskLevel = 'warning';
    recommendation = `ASI ${asi} cm/m² (2.75 - 4.24): Moderate rupture risk (~8%/yr). Plan elective TEVAR evaluation if rapid expansion (>0.5 cm/yr) or symptomatic.`;
  }

  return {
    valid: true,
    score: `${asi} cm/m²`,
    bsaM2: bsa,
    asiCmPerM2: asi,
    yearlyRuptureRiskPct,
    interventionTier,
    classification: `${interventionTier} (Rupture Risk: ${yearlyRuptureRiskPct})`,
    riskLevel,
    recommendation,
    details: {
      'Aortic Size Index (ASI)': `${asi} cm/m²`,
      'Max Aortic Diameter': `${maxAorticDiameterCm} cm`,
      'Body Surface Area (BSA)': `${bsa} m²`,
      'Yearly Rupture Risk': yearlyRuptureRiskPct
    }
  };
}

// ============================================================================
// 35. RENAL ARTERY RESISTIVE INDEX (RI) & RENAL-TO-AORTIC RATIO (RAR)
// Protocol: renal_stenting, renal_aml
// ============================================================================
export interface RenalResistiveIndexResult extends GenericCalculatorResult {
  resistiveIndex: number;
  renalAorticRatio: number;
  hasSignificantStenosis: boolean;
  stentingSalvageable: boolean;
}

export function calculateRenalResistiveIndex(
  peakSystolicVelocityCmS: number,
  endDiastolicVelocityCmS: number,
  aorticPsvCmS: number = 80
): RenalResistiveIndexResult {
  if (peakSystolicVelocityCmS <= 0 || endDiastolicVelocityCmS < 0 || aorticPsvCmS <= 0) {
    return {
      valid: false,
      score: 0,
      resistiveIndex: 0,
      renalAorticRatio: 0,
      hasSignificantStenosis: false,
      stentingSalvageable: false,
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive velocities.'
    };
  }

  const ri = parseFloat(((peakSystolicVelocityCmS - endDiastolicVelocityCmS) / peakSystolicVelocityCmS).toFixed(2));
  const rar = parseFloat((peakSystolicVelocityCmS / aorticPsvCmS).toFixed(2));

  const hasSignificantStenosis = peakSystolicVelocityCmS >= 180 || rar >= 3.5;
  const stentingSalvageable = ri < 0.80;

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Renal RI ${ri} (< 0.80) with RAR ${rar}: Hemodynamically significant stenosis with preserved intrarenal vascular bed. High probability of improved blood pressure and eGFR preservation after renal artery stenting.`;

  if (ri >= 0.80) {
    riskLevel = 'critical';
    recommendation = `NEPHROSCLEROSIS ALERT: Renal Resistive Index (${ri} ≥ 0.80) indicates advanced irreversible parenchymal vascular sclerosis (Radermacher criteria). Renal artery stenting is unlikely to improve renal function or blood pressure; avoid futile stenting.`;
  } else if (!hasSignificantStenosis) {
    riskLevel = 'warning';
    recommendation = `Borderline stenosis hemodynamics (PSV: ${peakSystolicVelocityCmS} cm/s, RAR: ${rar} < 3.5). Consider translesional pressure gradient measurement (< 20 mmHg peak systolic gradient suggests non-critical lesion).`;
  }

  return {
    valid: true,
    score: `RI ${ri} / RAR ${rar}`,
    resistiveIndex: ri,
    renalAorticRatio: rar,
    hasSignificantStenosis,
    stentingSalvageable,
    classification: ri >= 0.80 ? 'Irreversible Nephrosclerosis (RI ≥ 0.80)' : hasSignificantStenosis ? 'Favorable Stenting Candidate (RI < 0.80)' : 'Non-Significant Stenosis',
    riskLevel,
    recommendation,
    details: {
      'Resistive Index (RI)': ri,
      'Renal-to-Aortic Ratio (RAR)': rar,
      'Peak Systolic Velocity': `${peakSystolicVelocityCmS} cm/s`,
      'Radermacher Cutoff': ri < 0.80 ? 'Favorable (< 0.80)' : 'Unfavorable (≥ 0.80)'
    }
  };
}

// ============================================================================
// 36. CAPRINI RISK ASSESSMENT MODEL FOR VENOUS THROMBOEMBOLISM (VTE)
// Protocol: ivc_filter_retrieval, dvt_thrombolysis, varicose, central_venoplasty
// ============================================================================
export interface CapriniResult extends GenericCalculatorResult {
  totalScore: number;
  riskCategory: 'Very Low Risk' | 'Low Risk' | 'Moderate Risk' | 'High Risk' | 'Super High Risk';
  vteIncidencePct: string;
}

export function calculateCapriniVte(
  ageGroup: '<41' | '41-60' | '61-74' | '>=75',
  hasMajorSurgeryOrImmobility: boolean,
  hasActiveMalignancy: boolean,
  hasPriorVte: boolean,
  hasCentralVenousCatheter: boolean,
  hasKnownThrombophilia: boolean,
  hasVaricoseVeinsOrEdema: boolean,
  isBedriddenOver72Hours: boolean
): CapriniResult {
  let score = 0;

  if (ageGroup === '>=75') score += 3;
  else if (ageGroup === '61-74') score += 2;
  else if (ageGroup === '41-60') score += 1;

  if (hasVaricoseVeinsOrEdema) score += 1;
  if (hasCentralVenousCatheter) score += 2;
  if (hasMajorSurgeryOrImmobility) score += 2;
  if (hasActiveMalignancy) score += 3;
  if (hasPriorVte) score += 3;
  if (hasKnownThrombophilia) score += 3;
  if (isBedriddenOver72Hours) score += 3;

  let riskCategory: 'Very Low Risk' | 'Low Risk' | 'Moderate Risk' | 'High Risk' | 'Super High Risk' = 'Very Low Risk';
  let vteIncidencePct = '< 0.5%';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Very low VTE risk. Early frequent ambulation alone without pharmacologic anticoagulation.';

  if (score >= 9) {
    riskCategory = 'Super High Risk';
    vteIncidencePct = '> 10.0%';
    riskLevel = 'critical';
    recommendation = `Caprini Score ${score} (Super High Risk, VTE risk > 10%): Mandatory combination thromboprophylaxis (LMWH + intermittent pneumatic compression) with extended post-procedure anticoagulation for 30 days.`;
  } else if (score >= 5) {
    riskCategory = 'High Risk';
    vteIncidencePct = '~6.0%';
    riskLevel = 'critical';
    recommendation = `Caprini Score ${score} (High Risk, ~6% VTE incidence): Pharmacologic thromboprophylaxis (LMWH Enoxaparin 40 mg OD) plus mechanical pneumatic compression sleeves.`;
  } else if (score >= 3) {
    riskCategory = 'Moderate Risk';
    vteIncidencePct = '~3.0%';
    riskLevel = 'warning';
    recommendation = `Caprini Score ${score} (Moderate Risk): Prophylactic LMWH or mechanical compression until full ambulation.`;
  } else if (score === 2) {
    riskCategory = 'Low Risk';
    vteIncidencePct = '~1.5%';
    riskLevel = 'safe';
    recommendation = 'Caprini Score 2 (Low Risk): Graduated compression stockings (GCS) or intermittent pneumatic compression.';
  }

  return {
    valid: true,
    score,
    totalScore: score,
    riskCategory,
    vteIncidencePct,
    classification: `Caprini ${score}: ${riskCategory} (${vteIncidencePct} VTE Incidence)`,
    riskLevel,
    recommendation,
    details: {
      'Caprini Score': score,
      'Risk Tier': riskCategory,
      'VTE Baseline Incidence': vteIncidencePct,
      'Prophylaxis Recommendation': score >= 5 ? 'LMWH + IPC (Extended 30d if ≥9)' : 'Early ambulation + Mechanical'
    }
  };
}

// ============================================================================
// 37. HAS-BLED BLEEDING RISK SCORE FOR THROMBOLYSIS & ANTICOAGULATION
// Protocol: dvt_thrombolysis, pulmonary_pe_thrombolysis, bcs
// ============================================================================
export interface HasBledResult extends GenericCalculatorResult {
  hasBledScore: number;
  bleedingTier: 'Low Bleeding Risk' | 'Moderate Bleeding Risk' | 'High Bleeding Risk';
  majorBleedRatePerYear: string;
}

export function calculateHasBled(
  hypertension: boolean,
  abnormalRenalOrLiver: boolean,
  strokeHistory: boolean,
  bleedingHistoryOrPredisposition: boolean,
  labileInr: boolean,
  elderlyOver65: boolean,
  drugsOrAlcohol: boolean
): HasBledResult {
  let score = 0;
  if (hypertension) score += 1;
  if (abnormalRenalOrLiver) score += 1;
  if (strokeHistory) score += 1;
  if (bleedingHistoryOrPredisposition) score += 1;
  if (labileInr) score += 1;
  if (elderlyOver65) score += 1;
  if (drugsOrAlcohol) score += 1;

  let bleedingTier: 'Low Bleeding Risk' | 'Moderate Bleeding Risk' | 'High Bleeding Risk' = 'Low Bleeding Risk';
  let majorBleedRatePerYear = '1.1% / year';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `HAS-BLED Score ${score}: Low bleeding hazard. Standard catheter-directed thrombolysis (CDT) protocol and full-dose anticoagulation well tolerated.`;

  if (score >= 3) {
    bleedingTier = 'High Bleeding Risk';
    majorBleedRatePerYear = '≥ 3.7 - 5.8% / year';
    riskLevel = 'critical';
    recommendation = `HAS-BLED Score ${score} (High Bleeding Risk): High risk of major intracranial / retroperitoneal bleeding during thrombolytic therapy. Reduce tPA infusion rate (0.5 mg/h), enforce q4h fibrinogen monitoring (halt if < 150 mg/dL), and minimize puncture site trauma.`;
  } else if (score >= 2) {
    bleedingTier = 'Moderate Bleeding Risk';
    majorBleedRatePerYear = '1.9% / year';
    riskLevel = 'warning';
    recommendation = `HAS-BLED Score ${score} (Moderate Risk): Address correctable bleeding factors (BP control, avoid concurrent NSAIDs). Routine coagulation surveillance.`;
  }

  return {
    valid: true,
    score,
    hasBledScore: score,
    bleedingTier,
    majorBleedRatePerYear,
    classification: `HAS-BLED ${score} (${bleedingTier})`,
    riskLevel,
    recommendation,
    details: {
      'HAS-BLED Score': `${score} / 9`,
      'Bleeding Risk Tier': bleedingTier,
      'Major Bleed Rate': majorBleedRatePerYear,
      'CDT Guardrail': score >= 3 ? 'Reduced tPA + Strict Fibrinogen q4h' : 'Standard CDT Protocol'
    }
  };
}

// ============================================================================
// 38. PALLIATIVE PROGNOSTIC INDEX (PPI) FOR ONCOLOGIC IR
// Protocol: celiac_plexus_block, pleural_ipc, bone_cryo_cement
// ============================================================================
export interface PpiResult extends GenericCalculatorResult {
  ppiScore: number;
  survivalEstimate: string;
  palliativeSuitability: string;
}

export function calculatePpiScore(
  ppsScore: number,
  oralIntake: 'normal' | 'reduced' | 'severely_reduced',
  hasEdema: boolean,
  hasDyspneaAtRest: boolean,
  hasDelirium: boolean
): PpiResult {
  let score = 0;

  if (ppsScore <= 20) score += 4.0;
  else if (ppsScore <= 50) score += 2.5;

  if (oralIntake === 'severely_reduced') score += 2.5;
  else if (oralIntake === 'reduced') score += 1.0;

  if (hasEdema) score += 1.0;
  if (hasDyspneaAtRest) score += 2.5;
  if (hasDelirium) score += 4.0;

  const ppiScore = parseFloat(score.toFixed(1));

  let survivalEstimate = '> 6 weeks predicted';
  let palliativeSuitability = 'Fully Suitable for Interventional Palliation';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `PPI Score ${ppiScore}: Favorable palliative prognosis (>6 weeks). Patient is well-suited for durable interventional relief (e.g. celiac plexus neurolysis, tunneled IPC catheter, or cementoplasty).`;

  if (ppiScore > 6.0) {
    survivalEstimate = '< 3 weeks predicted';
    palliativeSuitability = 'End-of-Life / Comfort Care Phase';
    riskLevel = 'critical';
    recommendation = `PPI Score ${ppiScore} (>6.0, survival < 3 weeks): Terminal palliative phase. Invasive procedures carry high procedural burden relative to remaining life expectancy; prioritize non-invasive comfort analgesia unless urgent celiac block required for refractory agony.`;
  } else if (ppiScore >= 4.5) {
    survivalEstimate = '3 - 6 weeks predicted';
    palliativeSuitability = 'Borderline Palliative Candidacy';
    riskLevel = 'warning';
    recommendation = `PPI Score ${ppiScore} (survival 3-6 weeks): Weigh procedural recovery time against anticipated symptom relief. Favor minimally invasive single-session interventions.`;
  }

  return {
    valid: true,
    score: ppiScore,
    ppiScore,
    survivalEstimate,
    palliativeSuitability,
    classification: `PPI ${ppiScore} (${survivalEstimate})`,
    riskLevel,
    recommendation,
    details: {
      'Palliative Prognostic Index': ppiScore,
      'Estimated Survival': survivalEstimate,
      'Palliative Appropriateness': palliativeSuitability,
      'Palliative Performance Scale': `${ppsScore}%`
    }
  };
}

// ============================================================================
// 39. SVS WIfI CLASSIFICATION FOR THREATENED LOWER EXTREMITY (CLTI)
// Protocol: pad_angioplasty, dvt_thrombolysis
// ============================================================================
export interface SvsWifiResult extends GenericCalculatorResult {
  clinicalStage: 1 | 2 | 3 | 4;
  amputationRisk: string;
  revascularizationBenefit: string;
}

export function calculateSvsWifi(
  woundGrade: 0 | 1 | 2 | 3,
  ischemiaGrade: 0 | 1 | 2 | 3,
  infectionGrade: 0 | 1 | 2 | 3
): SvsWifiResult {
  // SVS WIfI Clinical Stage Matrix: [Wound][Ischemia][Infection] -> Stage 1-4
  const stageMatrix: Record<number, Record<number, Record<number, 1 | 2 | 3 | 4>>> = {
    0: {
      0: { 0: 1, 1: 1, 2: 2, 3: 3 },
      1: { 0: 1, 1: 1, 2: 2, 3: 3 },
      2: { 0: 2, 1: 2, 2: 3, 3: 4 },
      3: { 0: 3, 1: 3, 2: 4, 3: 4 }
    },
    1: {
      0: { 0: 1, 1: 1, 2: 2, 3: 3 },
      1: { 0: 1, 1: 2, 2: 2, 3: 3 },
      2: { 0: 2, 1: 3, 2: 3, 3: 4 },
      3: { 0: 3, 1: 4, 2: 4, 3: 4 }
    },
    2: {
      0: { 0: 1, 1: 2, 2: 3, 3: 4 },
      1: { 0: 2, 1: 2, 2: 3, 3: 4 },
      2: { 0: 3, 1: 3, 2: 4, 3: 4 },
      3: { 0: 4, 1: 4, 2: 4, 3: 4 }
    },
    3: {
      0: { 0: 2, 1: 3, 2: 3, 3: 4 },
      1: { 0: 3, 1: 3, 2: 4, 3: 4 },
      2: { 0: 4, 1: 4, 2: 4, 3: 4 },
      3: { 0: 4, 1: 4, 2: 4, 3: 4 }
    }
  };

  const clinicalStage = stageMatrix[woundGrade][ischemiaGrade][infectionGrade];

  let amputationRisk = 'Very Low (< 5% at 1 year)';
  let revascularizationBenefit = 'Very Low (Medical Therapy / Wound Care)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `WIfI Stage 1 (Very low amputation risk): Conservative wound care, infection control, and optimal medical therapy. Revascularization rarely needed unless symptoms progress.`;

  if (clinicalStage === 4) {
    amputationRisk = 'High (> 50% at 1 year without salvage)';
    revascularizationBenefit = 'High / Emergency (Urgent Revascularization Mandatory)';
    riskLevel = 'critical';
    recommendation = `WIfI Stage 4 (Advanced Limb Threat): High 1-year major amputation rate. Urgent percutaneous endovascular revascularization (angioplasty / atherectomy / stenting) combined with surgical debridement and IV antibiotics is urgently indicated.`;
  } else if (clinicalStage === 3) {
    amputationRisk = 'Moderate (10% to 25% at 1 year)';
    revascularizationBenefit = 'Moderate to High (Revascularization Recommended)';
    riskLevel = 'warning';
    recommendation = `WIfI Stage 3 (Moderate Limb Threat): High likelihood of non-healing ulcer or progression. Prompt arterial revascularization recommended to accelerate wound healing and limb salvage.`;
  } else if (clinicalStage === 2) {
    amputationRisk = 'Low (< 10% at 1 year)';
    revascularizationBenefit = 'Low to Moderate';
    riskLevel = 'warning';
    recommendation = `WIfI Stage 2 (Low Limb Threat): Close surveillance with aggressive wound management. Revascularize if non-healing persists beyond 4 weeks.`;
  }

  return {
    valid: true,
    score: `Stage ${clinicalStage}`,
    clinicalStage,
    amputationRisk,
    revascularizationBenefit,
    classification: `WIfI Clinical Stage ${clinicalStage} (${amputationRisk.split(' (')[0]} Amputation Risk)`,
    riskLevel,
    recommendation,
    details: {
      'WIfI Stage': `Stage ${clinicalStage}`,
      'Wound Grade': `Grade ${woundGrade}`,
      'Ischemia Grade': `Grade ${ischemiaGrade}`,
      'Foot Infection Grade': `Grade ${infectionGrade}`,
      '1-Year Amputation Risk': amputationRisk,
      'Revascularization Benefit': revascularizationBenefit
    }
  };
}

// ============================================================================
// 40. SPINE INSTABILITY NEOPLASTIC SCORE (SINS)
// Protocol: vertebroplasty, bone_cryo_cement
// ============================================================================
export interface SinsScoreResult extends GenericCalculatorResult {
  sinsScore: number;
  stabilityCategory: 'Spine Stable (0-6)' | 'Potentially Unstable (7-12)' | 'Spine Instability (13-18)';
  kyphoplastyRecommendation: string;
}

export function calculateSinsScore(
  location: 'junctional' | 'mobile' | 'semi_rigid' | 'rigid',
  painRecumbency: 'mechanical' | 'occasional' | 'painless',
  boneLesion: 'lytic' | 'mixed' | 'blastic',
  spinalAlignment: 'subluxation' | 'deformity' | 'normal',
  vertebralCollapse: 'gt50' | 'lt50' | 'none_gt50_involvement' | 'none',
  posterolateralInvolvement: 'bilateral' | 'unilateral' | 'none'
): SinsScoreResult {
  let score = 0;

  if (location === 'junctional') score += 3;
  else if (location === 'mobile') score += 2;
  else if (location === 'semi_rigid') score += 1;

  if (painRecumbency === 'mechanical') score += 3;
  else if (painRecumbency === 'occasional') score += 1;

  if (boneLesion === 'lytic') score += 2;
  else if (boneLesion === 'mixed') score += 1;

  if (spinalAlignment === 'subluxation') score += 4;
  else if (spinalAlignment === 'deformity') score += 2;

  if (vertebralCollapse === 'gt50') score += 3;
  else if (vertebralCollapse === 'lt50') score += 2;
  else if (vertebralCollapse === 'none_gt50_involvement') score += 1;

  if (posterolateralInvolvement === 'bilateral') score += 3;
  else if (posterolateralInvolvement === 'unilateral') score += 1;

  let stabilityCategory: 'Spine Stable (0-6)' | 'Potentially Unstable (7-12)' | 'Spine Instability (13-18)' = 'Spine Stable (0-6)';
  let kyphoplastyRecommendation = 'Stable spine: Vertebroplasty / Kyphoplasty safe as standalone procedure for pain control.';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `SINS Score ${score} (Stable Spine, 0-6): Mechanical stability preserved. Percutaneous vertebroplasty, balloon kyphoplasty, or radiofrequency/cryoablation is safe and highly effective for pain palliation.`;

  if (score >= 13) {
    stabilityCategory = 'Spine Instability (13-18)';
    kyphoplastyRecommendation = 'Spinal instability: Standalone cementoplasty contraindicated. Urgent surgical spine consultation required.';
    riskLevel = 'critical';
    recommendation = `SINS Score ${score} (Unstable Spine, 13-18): Frank mechanical instability. Isolated vertebroplasty carries high risk of progressive collapse, neurological compression, or posterior cement extravasation. Urgent neurosurgical / orthopedic spine consultation required for open/percutaneous stabilization.`;
  } else if (score >= 7) {
    stabilityCategory = 'Potentially Unstable (7-12)';
    kyphoplastyRecommendation = 'Potentially unstable: Vertebroplasty/Kyphoplasty indicated; assess need for concurrent percutaneous pedicle screws.';
    riskLevel = 'warning';
    recommendation = `SINS Score ${score} (Potentially Unstable, 7-12): Impaired structural integrity. Vertebral augmentation (kyphoplasty / vertebroplasty) with bone cement can restore height and stability; consider joint evaluation with spine surgery for instrumentation if posterior elements compromised.`;
  }

  return {
    valid: true,
    score,
    sinsScore: score,
    stabilityCategory,
    kyphoplastyRecommendation,
    classification: `${stabilityCategory} (SINS ${score}/18)`,
    riskLevel,
    recommendation,
    details: {
      'SINS Score': `${score} / 18`,
      'Stability Category': stabilityCategory,
      'Intervention Suitability': kyphoplastyRecommendation
    }
  };
}

// ============================================================================
// 41. BOVA SCORE FOR ACUTE PULMONARY EMBOLISM
// Protocol: pulmonary_pe_thrombolysis
// ============================================================================
export interface BovaPeResult extends GenericCalculatorResult {
  bovaScore: number;
  riskStage: 'Stage I (Low)' | 'Stage II (Intermediate)' | 'Stage III (High)';
  peComplicationRate30d: string;
  catheterInterventionIndicated: boolean;
}

export function calculateBovaPe(
  rvDysfunction: boolean,
  elevatedTroponin: boolean,
  heartRateGe110: boolean,
  sbp90to100: boolean
): BovaPeResult {
  let score = 0;
  if (rvDysfunction) score += 2;
  if (elevatedTroponin) score += 2;
  if (heartRateGe110) score += 1;
  if (sbp90to100) score += 2;

  let riskStage: 'Stage I (Low)' | 'Stage II (Intermediate)' | 'Stage III (High)' = 'Stage I (Low)';
  let peComplicationRate30d = '4.4% (30-day PE-related complications)';
  let catheterInterventionIndicated = false;
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Bova Score ${score} (Stage I, Low Risk): 30-day PE complication rate 4.4%. Therapeutic anticoagulation alone is adequate. No indication for catheter-directed thrombolysis or thrombectomy.`;

  if (score > 4) {
    riskStage = 'Stage III (High)';
    peComplicationRate30d = '42.0% (30-day PE-related complications / death)';
    catheterInterventionIndicated = true;
    riskLevel = 'critical';
    recommendation = `Bova Score ${score} (Stage III, High Intermediate-Risk PE): 30-day PE mortality/complication rate exceeds 40%. Imminent risk of hemodynamic collapse. Urgent evaluation for Catheter-Directed Thrombolysis (CDT) or Large-Bore Mechanical Aspiration Thrombectomy (e.g. Inari / Penumbra).`;
  } else if (score >= 3) {
    riskStage = 'Stage II (Intermediate)';
    peComplicationRate30d = '18.0% (30-day PE-related complications)';
    catheterInterventionIndicated = true;
    riskLevel = 'warning';
    recommendation = `Bova Score ${score} (Stage II, Intermediate-Risk PE): 30-day complication rate ~18%. Admit to ICU / HDU; monitor hemodynamics closely. Activate Pulmonary Embolism Response Team (PERT) and prepare for catheter-directed intervention if patient exhibits worsening RV strain.`;
  }

  return {
    valid: true,
    score,
    bovaScore: score,
    riskStage,
    peComplicationRate30d,
    catheterInterventionIndicated,
    classification: `Bova ${riskStage} (Score ${score}/7)`,
    riskLevel,
    recommendation,
    details: {
      'Bova Score': `${score} / 7 points`,
      'Risk Stage': riskStage,
      '30-Day Complication Rate': peComplicationRate30d,
      'Catheter Intervention': catheterInterventionIndicated ? 'Indicated / High Urgency' : 'Not Indicated (Standard Anticoagulation)'
    }
  };
}

// ============================================================================
// 42. WHO-IWGE HYDATID CYST CLASSIFICATION & PAIR SUITABILITY
// Protocol: hydatid_pair
// ============================================================================
export interface WhoIwgeHydatidResult extends GenericCalculatorResult {
  cystStage: 'CE1' | 'CE2' | 'CE3a' | 'CE3b' | 'CE4' | 'CE5';
  parasiteActivity: 'Active' | 'Transitional' | 'Inactive';
  pairEligibility: 'Ideal for PAIR' | 'Modified Catheter Drainage (MoCAT)' | 'PAIR Ineffective / Surgical' | 'Contraindicated / Inactive';
}

export function calculateWhoIwgeHydatid(
  cystStage: 'CE1' | 'CE2' | 'CE3a' | 'CE3b' | 'CE4' | 'CE5',
  cystDiameterCm: number,
  hasBiliaryFistula: boolean
): WhoIwgeHydatidResult {
  if (cystDiameterCm <= 0) {
    return {
      valid: false,
      score: 0,
      cystStage,
      parasiteActivity: 'Active',
      pairEligibility: 'Contraindicated / Inactive',
      classification: 'Invalid Diameter',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive cyst diameter in cm.'
    };
  }

  if (hasBiliaryFistula) {
    return {
      valid: true,
      score: cystStage,
      cystStage,
      parasiteActivity: cystStage === 'CE4' || cystStage === 'CE5' ? 'Inactive' : 'Active',
      pairEligibility: 'Contraindicated / Inactive',
      classification: `WHO ${cystStage} with Biliary Fistula (ABSOLUTE CONTRAINDICATION)`,
      riskLevel: 'critical',
      recommendation: `ABSOLUTE CONTRAINDICATION TO SCOLICIDAL AGENTS: Cystobiliary communication detected. Injection of hypertonic saline (20%) or absolute alcohol is strictly contraindicated due to lethal chemical sclerosing cholangitis. Perform external catheter drainage without scolicides or surgical cystectomy.`,
      details: {
        'WHO Stage': cystStage,
        'Cyst Diameter': `${cystDiameterCm} cm`,
        'Biliary Fistula': 'Present (Contraindicates Scolicides)',
        'Recommended Approach': 'Percutaneous Catheter Decompression or Surgery'
      }
    };
  }

  let parasiteActivity: 'Active' | 'Transitional' | 'Inactive' = 'Active';
  let pairEligibility: 'Ideal for PAIR' | 'Modified Catheter Drainage (MoCAT)' | 'PAIR Ineffective / Surgical' | 'Contraindicated / Inactive' = 'Ideal for PAIR';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = '';

  switch (cystStage) {
    case 'CE1':
      parasiteActivity = 'Active';
      pairEligibility = 'Ideal for PAIR';
      riskLevel = 'safe';
      recommendation = `WHO CE1 (Active unilocular fluid cyst, ${cystDiameterCm} cm): Ideal candidate for PAIR (Puncture, Aspiration, Hypertonic 20% Saline Injection for 15-20 min, Re-aspiration). Cover with oral Albendazole (15 mg/kg/day) starting 4 hours prior and continuing for 1 month.`;
      break;
    case 'CE2':
      parasiteActivity = 'Active';
      pairEligibility = 'Modified Catheter Drainage (MoCAT)';
      riskLevel = 'warning';
      recommendation = `WHO CE2 (Active multivesicular / honeycomb cyst, ${cystDiameterCm} cm): Pure needle PAIR has high recurrence rate due to daughter cysts. Modified catheterization technique (MoCAT) with 10-14 Fr drainage catheter and prolonged hypertonic saline scolicidal lavage or laparoscopic deroofing recommended.`;
      break;
    case 'CE3a':
      parasiteActivity = 'Transitional';
      pairEligibility = 'Ideal for PAIR';
      riskLevel = 'safe';
      recommendation = `WHO CE3a (Transitional cyst with detached endocyst / water-lily sign, ${cystDiameterCm} cm): Suitable for PAIR or catheter aspiration. Albendazole prophylaxis mandatory.`;
      break;
    case 'CE3b':
      parasiteActivity = 'Transitional';
      pairEligibility = 'PAIR Ineffective / Surgical';
      riskLevel = 'warning';
      recommendation = `WHO CE3b (Transitional cyst with daughter cysts in solid matrix, ${cystDiameterCm} cm): Standard PAIR has low efficacy. Recommend surgical cystectomy or large-bore catheter aspiration with hypertonic saline under expert ultrasound guidance.`;
      break;
    case 'CE4':
      parasiteActivity = 'Inactive';
      pairEligibility = 'Contraindicated / Inactive';
      riskLevel = 'safe';
      recommendation = `WHO CE4 (Inactive solid heterogeneous mass / ball of wool, ${cystDiameterCm} cm): Parasite is non-viable / dead. "Watch and Wait" strategy. Interventional or surgical puncture is NOT indicated.`;
      break;
    case 'CE5':
      parasiteActivity = 'Inactive';
      pairEligibility = 'Contraindicated / Inactive';
      riskLevel = 'safe';
      recommendation = `WHO CE5 (Inactive thick calcified cyst wall, ${cystDiameterCm} cm): Inactive calcified lesion. No active protoscolices. "Watch and Wait" strategy. Intervention contraindicated.`;
      break;
  }

  return {
    valid: true,
    score: cystStage,
    cystStage,
    parasiteActivity,
    pairEligibility,
    classification: `WHO ${cystStage} (${parasiteActivity} - ${pairEligibility})`,
    riskLevel,
    recommendation,
    details: {
      'WHO Stage': cystStage,
      'Parasite Activity': parasiteActivity,
      'Cyst Diameter': `${cystDiameterCm} cm`,
      'PAIR Suitability': pairEligibility,
      'Albendazole Coverage': cystStage === 'CE4' || cystStage === 'CE5' ? 'Not Required' : '15 mg/kg/day PO for 30 days'
    }
  };
}

// ============================================================================
// 43. TOKYO GUIDELINES 2018 (TG18) ACUTE CHOLECYSTITIS & PTGBD TRIAGE
// Protocol: cholecystostomy
// ============================================================================
export interface Tg18CholecystitisResult extends GenericCalculatorResult {
  tg18Grade: 'Grade I (Mild)' | 'Grade II (Moderate)' | 'Grade III (Severe)';
  ptgbdUrgency: 'Urgent Emergency PTGBD' | 'PTGBD Indicated for High Surgical Risk' | 'Elective / Early Laparoscopic Surgery';
}

export function calculateTg18Cholecystitis(
  hasOrganDysfunction: boolean,
  markedLocalInflammation: boolean,
  wbcGt18kOrMass: boolean,
  symptomDurationGt72h: boolean,
  highSurgicalRisk: boolean
): Tg18CholecystitisResult {
  let tg18Grade: 'Grade I (Mild)' | 'Grade II (Moderate)' | 'Grade III (Severe)' = 'Grade I (Mild)';
  let ptgbdUrgency: 'Urgent Emergency PTGBD' | 'PTGBD Indicated for High Surgical Risk' | 'Elective / Early Laparoscopic Surgery' = 'Elective / Early Laparoscopic Surgery';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = '';

  if (hasOrganDysfunction) {
    tg18Grade = 'Grade III (Severe)';
    ptgbdUrgency = 'Urgent Emergency PTGBD';
    riskLevel = 'critical';
    recommendation = `TG18 Grade III (Severe Acute Cholecystitis with Organ Dysfunction): High operative mortality. Immediate percutaneous transhepatic gallbladder drainage (PTGBD / Cholecystostomy) is the treatment of choice to achieve source control, along with broad-spectrum IV antibiotics and organ support in the ICU.`;
  } else if (markedLocalInflammation || wbcGt18kOrMass || symptomDurationGt72h) {
    tg18Grade = 'Grade II (Moderate)';
    riskLevel = 'warning';
    if (highSurgicalRisk) {
      ptgbdUrgency = 'PTGBD Indicated for High Surgical Risk';
      recommendation = `TG18 Grade II (Moderate Acute Cholecystitis) in High-Risk Surgical Patient: Significant local inflammation (WBC > 18k, duration > 72h, or gangrenous changes). Emergency PTGBD under US/fluoroscopy is strongly recommended to resolve sepsis and bridge to interval cholecystectomy.`;
    } else {
      ptgbdUrgency = 'Elective / Early Laparoscopic Surgery';
      recommendation = `TG18 Grade II (Moderate Acute Cholecystitis) in Operable Patient: Early laparoscopic cholecystectomy by experienced hepatobiliary surgeon recommended. Reserve PTGBD if surgery is delayed or clinical deterioration occurs.`;
    }
  } else {
    tg18Grade = 'Grade I (Mild)';
    riskLevel = 'safe';
    if (highSurgicalRisk) {
      ptgbdUrgency = 'PTGBD Indicated for High Surgical Risk';
      recommendation = `TG18 Grade I (Mild) in High Surgical Risk / Frail Patient: If patient is unfit for general anesthesia, bedside ultrasound-guided PTGBD provides rapid symptom resolution with low morbidity.`;
    } else {
      ptgbdUrgency = 'Elective / Early Laparoscopic Surgery';
      recommendation = `TG18 Grade I (Mild Acute Cholecystitis): Early laparoscopic cholecystectomy is primary standard of care. PTGBD not routinely needed unless surgery refused.`;
    }
  }

  return {
    valid: true,
    score: tg18Grade,
    tg18Grade,
    ptgbdUrgency,
    classification: `TG18 ${tg18Grade} - ${ptgbdUrgency}`,
    riskLevel,
    recommendation,
    details: {
      'TG18 Severity': tg18Grade,
      'PTGBD Strategy': ptgbdUrgency,
      'Surgical Risk': highSurgicalRisk ? 'High Risk / Severe Comorbidities' : 'Standard Operative Candidate'
    }
  };
}

// ============================================================================
// 44. THYROID NODULE ELLIPSOID VOLUME & VOLUME REDUCTION RATIO (VRR %)
// Protocol: thyroid_ablation
// ============================================================================
export interface ThyroidVrrResult extends GenericCalculatorResult {
  initialVolumeMl: number;
  postVolumeMl: number;
  vrrPct: number;
  therapeuticResponse: 'Excellent (> 75%)' | 'Therapeutic Success (50-75%)' | 'Inadequate (< 50%)';
}

export function calculateThyroidVrr(
  initialLengthCm: number,
  initialWidthCm: number,
  initialDepthCm: number,
  postLengthCm: number,
  postWidthCm: number,
  postDepthCm: number,
  monthsPostAblation: number
): ThyroidVrrResult {
  if (initialLengthCm <= 0 || initialWidthCm <= 0 || initialDepthCm <= 0 ||
      postLengthCm <= 0 || postWidthCm <= 0 || postDepthCm <= 0) {
    return {
      valid: false,
      score: 0,
      initialVolumeMl: 0,
      postVolumeMl: 0,
      vrrPct: 0,
      therapeuticResponse: 'Inadequate (< 50%)',
      classification: 'Invalid Dimensions',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive dimensions (cm) for baseline and follow-up nodule measurements.'
    };
  }

  const factor = (Math.PI / 6);
  const initialVolumeMl = parseFloat((factor * initialLengthCm * initialWidthCm * initialDepthCm).toFixed(2));
  const postVolumeMl = parseFloat((factor * postLengthCm * postWidthCm * postDepthCm).toFixed(2));

  const rawVrr = ((initialVolumeMl - postVolumeMl) / initialVolumeMl) * 100;
  const vrrPct = parseFloat(rawVrr.toFixed(1));

  let therapeuticResponse: 'Excellent (> 75%)' | 'Therapeutic Success (50-75%)' | 'Inadequate (< 50%)' = 'Therapeutic Success (50-75%)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = '';

  if (vrrPct >= 75) {
    therapeuticResponse = 'Excellent (> 75%)';
    riskLevel = 'safe';
    recommendation = `VRR ${vrrPct}% at ${monthsPostAblation} months (Excellent Response): Marked nodule shrinkage (>75%). Complete cosmetic and compressive symptom resolution expected. Continue annual ultrasound follow-up.`;
  } else if (vrrPct >= 50) {
    therapeuticResponse = 'Therapeutic Success (50-75%)';
    riskLevel = 'safe';
    recommendation = `VRR ${vrrPct}% at ${monthsPostAblation} months (Therapeutic Success): Surpasses the international threshold for thermal ablation efficacy (VRR ≥ 50%). Continue routine 6-month clinical surveillance.`;
  } else {
    therapeuticResponse = 'Inadequate (< 50%)';
    riskLevel = monthsPostAblation >= 6 ? 'warning' : 'safe';
    if (monthsPostAblation >= 6) {
      recommendation = `VRR ${vrrPct}% at ${monthsPostAblation} months (Inadequate Shrinkage, < 50%): Insufficient volume reduction at ≥ 6 months. Evaluate with Color Doppler US for marginal vascular regrowth; consider repeat ultrasound-guided RFA / MWA session or biopsy.`;
    } else {
      recommendation = `VRR ${vrrPct}% at ${monthsPostAblation} months (Early Follow-Up): Steady post-ablation necrosis and phagocytosis underway. Reassess nodule volume at 6 months post-procedure.`;
    }
  }

  return {
    valid: true,
    score: `${vrrPct}%`,
    initialVolumeMl,
    postVolumeMl,
    vrrPct,
    therapeuticResponse,
    classification: `VRR ${vrrPct}% (${therapeuticResponse})`,
    riskLevel,
    recommendation,
    details: {
      'Initial Volume': `${initialVolumeMl} mL`,
      'Post-Ablation Volume': `${postVolumeMl} mL`,
      'Volume Reduction Ratio (VRR)': `${vrrPct}%`,
      'Follow-Up Interval': `${monthsPostAblation} months`,
      'Clinical Status': therapeuticResponse
    }
  };
}

// ============================================================================
// 45. SHOCK INDEX (SI) & AGE-ADJUSTED SHOCK INDEX (SASI)
// Protocol: pelvic_trauma_bleed, upper_gi_bleed, lower_gi_bleed, visceral_aneurysm, bae
// ============================================================================
export interface ShockIndexResult extends GenericCalculatorResult {
  shockIndex: number;
  ageShockIndex: number;
  reverseShockGcs: number;
  hemodynamicStatus: 'Normal (SI 0.5-0.7)' | 'Mild Shock (0.7-0.9)' | 'Moderate Shock (0.9-1.3)' | 'Critical Hemorrhagic Shock (> 1.3)';
  massiveTransfusionTriage: string;
}

export function calculateShockIndex(
  heartRate: number,
  systolicBp: number,
  age: number,
  gcs: number
): ShockIndexResult {
  if (heartRate <= 0 || systolicBp <= 0 || age <= 0) {
    return {
      valid: false,
      score: 0,
      shockIndex: 0,
      ageShockIndex: 0,
      reverseShockGcs: 0,
      hemodynamicStatus: 'Normal (SI 0.5-0.7)',
      massiveTransfusionTriage: 'N/A',
      classification: 'Invalid Vitals',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive values for Heart Rate, Systolic BP, and Age.'
    };
  }

  const siRaw = heartRate / systolicBp;
  const shockIndex = parseFloat(siRaw.toFixed(2));
  const sasiRaw = age * shockIndex;
  const ageShockIndex = parseFloat(sasiRaw.toFixed(1));
  const rSigRaw = (systolicBp / heartRate) * Math.min(15, Math.max(3, gcs));
  const reverseShockGcs = parseFloat(rSigRaw.toFixed(1));

  let hemodynamicStatus: 'Normal (SI 0.5-0.7)' | 'Mild Shock (0.7-0.9)' | 'Moderate Shock (0.9-1.3)' | 'Critical Hemorrhagic Shock (> 1.3)' = 'Normal (SI 0.5-0.7)';
  let massiveTransfusionTriage = 'Massive Transfusion Protocol Not Indicated';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = `Shock Index ${shockIndex} (Normal $0.5-0.7$): Normal perfusion. Standard elective or semi-urgent embolization protocol.`;

  if (shockIndex > 1.3) {
    hemodynamicStatus = 'Critical Hemorrhagic Shock (> 1.3)';
    massiveTransfusionTriage = 'TRIGGER MASSIVE TRANSFUSION PROTOCOL (MTP 1:1:1)';
    riskLevel = 'critical';
    recommendation = `CRITICAL EXSANGUINATING SHOCK (SI ${shockIndex} > 1.3, SASI ${ageShockIndex}): Immediate trigger of Massive Transfusion Protocol (1:1:1 PRBC, FFP, Platelets). Emergency transfer to IR angiosuite for salvage transcatheter arterial embolization (TAE); prepare for aortic balloon occlusion (REBOA) if in arrest.`;
  } else if (shockIndex >= 0.9) {
    hemodynamicStatus = 'Moderate Shock (0.9-1.3)';
    massiveTransfusionTriage = 'High Probability of Transfusion Requirement & Active Arterial Extravasation';
    riskLevel = 'critical';
    recommendation = `Shock Index ${shockIndex} (≥ 0.9, Moderate Hemorrhagic Shock): High sensitivity for occult bleeding and active extravasation on angiography. Cross-match 4 units PRBC, notify on-call IR team for urgent embolization, and monitor lactate/base deficit.`;
  } else if (shockIndex >= 0.7) {
    hemodynamicStatus = 'Mild Shock (0.7-0.9)';
    massiveTransfusionTriage = 'Type and Screen; Monitor Resuscitation Response';
    riskLevel = 'warning';
    recommendation = `Shock Index ${shockIndex} (0.7 - 0.9, Mild Shock / Compensated): Patient is in early stage of hypovolemia. Optimize volume resuscitation; expedite diagnostic angiogram / CTA.`;
  }

  return {
    valid: true,
    score: shockIndex,
    shockIndex,
    ageShockIndex,
    reverseShockGcs,
    hemodynamicStatus,
    massiveTransfusionTriage,
    classification: `SI ${shockIndex} (${hemodynamicStatus.split(' (')[0]})`,
    riskLevel,
    recommendation,
    details: {
      'Shock Index (HR/SBP)': shockIndex,
      'Age-Adjusted SI (SASI)': ageShockIndex,
      'Reverse Shock Index x GCS': reverseShockGcs,
      'MTP Triage': massiveTransfusionTriage,
      'Geriatric Risk': ageShockIndex >= 50 ? 'High (SASI ≥ 50)' : 'Standard'
    }
  };
}

// ============================================================================
// 46. CHYLOTHORAX DAILY OUTPUT & LYMPHATIC LEAK METRIC
// Protocol: thoracic_duct_tde
// ============================================================================
export interface ChylothoraxLeakResult extends GenericCalculatorResult {
  dailyOutputMl: number;
  leakSeverity: 'High-Output Chylothorax' | 'Moderate-Output Chylothorax' | 'Low-Output Chylothorax';
  chyleDiagnosis: 'Definitive Chylothorax (Triglycerides > 110 mg/dL)' | 'Equivocal (50-110 mg/dL)' | 'Non-Chylous Effusion (< 50 mg/dL)';
  tdeIndication: string;
}

export function calculateChylothoraxLeak(
  dailyOutputMl: number,
  weightKg: number,
  pleuralTriglyceridesMgDl: number,
  hasChylomicrons: boolean,
  daysPostInjuryOrOp: number
): ChylothoraxLeakResult {
  if (dailyOutputMl <= 0 || weightKg <= 0) {
    return {
      valid: false,
      score: 0,
      dailyOutputMl: 0,
      leakSeverity: 'Low-Output Chylothorax',
      chyleDiagnosis: 'Non-Chylous Effusion (< 50 mg/dL)',
      tdeIndication: 'N/A',
      classification: 'Invalid Output Data',
      riskLevel: 'safe',
      recommendation: 'Enter valid positive values for daily output and body weight.'
    };
  }

  const mlPerKgDay = parseFloat((dailyOutputMl / weightKg).toFixed(1));

  let chyleDiagnosis: 'Definitive Chylothorax (Triglycerides > 110 mg/dL)' | 'Equivocal (50-110 mg/dL)' | 'Non-Chylous Effusion (< 50 mg/dL)' = 'Definitive Chylothorax (Triglycerides > 110 mg/dL)';
  if (hasChylomicrons || pleuralTriglyceridesMgDl > 110) {
    chyleDiagnosis = 'Definitive Chylothorax (Triglycerides > 110 mg/dL)';
  } else if (pleuralTriglyceridesMgDl >= 50) {
    chyleDiagnosis = 'Equivocal (50-110 mg/dL)';
  } else {
    chyleDiagnosis = 'Non-Chylous Effusion (< 50 mg/dL)';
  }

  let leakSeverity: 'High-Output Chylothorax' | 'Moderate-Output Chylothorax' | 'Low-Output Chylothorax' = 'Low-Output Chylothorax';
  let tdeIndication = 'Conservative Management (NPO + MCT Diet / Octreotide)';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = '';

  if (dailyOutputMl > 1000 || mlPerKgDay > 100) {
    leakSeverity = 'High-Output Chylothorax';
    tdeIndication = 'URGENT Thoracic Duct Embolization (TDE) / Disruption Indicated';
    riskLevel = 'critical';
    recommendation = `High-Output Chylothorax (${dailyOutputMl} mL/24h, ${mlPerKgDay} mL/kg/day): Massive lymphatic loss causes severe hypovolemia, lymphopenia, and malnutrition. High mortality under conservative therapy. URGENT intranodal lymphangiography and percutaneous Thoracic Duct Embolization (TDE) with microcoils & n-BCA glue indicated.`;
  } else if (dailyOutputMl >= 500 || daysPostInjuryOrOp >= 5) {
    leakSeverity = 'Moderate-Output Chylothorax';
    tdeIndication = 'Early TDE Indicated if Refractory to 48-72h Conservative Trial';
    riskLevel = 'warning';
    recommendation = `Moderate-Output Chylothorax (${dailyOutputMl} mL/24h): Trial of total parenteral nutrition (TPN) / strict MCT diet plus subcutaneous Octreotide (100 µg TID). If output remains > 500 mL/day after 48-72 hours, proceed directly to Thoracic Duct Embolization.`;
  } else {
    leakSeverity = 'Low-Output Chylothorax';
    tdeIndication = 'Conservative Trial (Resolution Rate ~80%)';
    riskLevel = 'safe';
    recommendation = `Low-Output Chylothorax (${dailyOutputMl} mL/24h): Favorable likelihood of spontaneous resolution. Continue conservative management (chest tube drainage, medium-chain triglyceride diet, octreotide) for 5-7 days.`;
  }

  return {
    valid: true,
    score: `${dailyOutputMl} mL/day`,
    dailyOutputMl,
    leakSeverity,
    chyleDiagnosis,
    tdeIndication,
    classification: `${leakSeverity} (${dailyOutputMl} mL/d)`,
    riskLevel,
    recommendation,
    details: {
      'Daily Drainage Output': `${dailyOutputMl} mL / 24h`,
      'Normalized Output': `${mlPerKgDay} mL / kg / day`,
      'Leak Severity': leakSeverity,
      'Chyle Confirmation': chyleDiagnosis,
      'Intervention Recommendation': tdeIndication
    }
  };
}

// ============================================================================
// METADATA REGISTRY: PROCEDURE CALCULATORS MAPPED TO PROTOCOLS
// ============================================================================

// ============================================================================
// 47. VENOUS CLINICAL SEVERITY SCORE (VCSS)
// Protocols: varicose, venous_perforator, dtv_post_thrombotic
// ============================================================================
export interface VcssScoreResult extends GenericCalculatorResult {
  vcssScore: number;
  severityClass: 'Mild' | 'Moderate' | 'Severe' | 'Very Severe';
  interventionIndication: string;
}

export function calculateVcss(
  pain: number,                 // 0: None, 1: Mild, 2: Moderate, 3: Severe
  varicoseVeins: number,        // 0: None, 1: Few/scattered, 2: Multiple, 3: Extensive
  venousEdema: number,          // 0: None, 1: Evening ankle, 2: Morning/persistent, 3: Generalized above knee
  pigmentation: number,         // 0: None, 1: Light brown, 2: Diffuse dark brown, 3: Wide with skin breakdown
  inflammation: number,         // 0: None, 1: Mild erythema, 2: Eczema/stasis dermatitis, 3: Severe cellulitis
  induration: number,           // 0: None, 1: Focal ankle, 2: Lower third medial, 3: Circumferential cuff (LDS)
  activeUlcersCount: number,    // 0: None, 1: 1 ulcer, 2: 2 ulcers, 3: >= 3 ulcers
  activeUlcerDuration: number,  // 0: None, 1: < 3 mo, 2: 3-12 mo, 3: > 1 year
  activeUlcerSize: number,      // 0: None, 1: < 2 cm, 2: 2-6 cm, 3: > 6 cm
  compressionCompliance: number // 0: None, 1: Intermittent, 2: Most days, 3: Full compliance
): VcssScoreResult {
  const sum = pain + varicoseVeins + venousEdema + pigmentation + inflammation + 
              induration + activeUlcersCount + activeUlcerDuration + activeUlcerSize + compressionCompliance;

  let severityClass: 'Mild' | 'Moderate' | 'Severe' | 'Very Severe' = 'Mild';
  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let interventionIndication = 'Conservative therapy (Class II compression stockings + limb elevation).';

  if (sum >= 15) {
    severityClass = 'Very Severe';
    riskLevel = 'critical';
    interventionIndication = 'Urgent comprehensive endovascular intervention: Truncal ablation (VenaSeal / EVLA / RFA) + Incompetent perforator sclero-glue closure + Wound debridement.';
  } else if (sum >= 8) {
    severityClass = 'Severe';
    riskLevel = 'critical';
    interventionIndication = 'Strong indication for Endovenous Truncal Ablation (GSV/SSV VenaSeal glue or EVLA) + tributary foam sclerotherapy.';
  } else if (sum >= 4) {
    severityClass = 'Moderate';
    riskLevel = 'warning';
    interventionIndication = 'Candidate for Endovenous Thermal or Non-Thermal Glue Ablation if symptomatic despite 3-month medical trial.';
  }

  return {
    valid: true,
    score: sum,
    vcssScore: sum,
    severityClass,
    interventionIndication,
    classification: `VCSS ${sum}/30: ${severityClass} Venous Disease`,
    riskLevel,
    recommendation: interventionIndication,
    details: {
      'VCSS Score': sum,
      'Disease Class': severityClass,
      'Active Ulcers': activeUlcersCount > 0 ? `${activeUlcersCount} active ulcer(s)` : 'None',
      'Clinical Action': interventionIndication
    }
  };
}

// ============================================================================
// 48. CEAP CLINICAL CLASSIFICATION FOR CHRONIC VENOUS DISORDERS
// Protocols: varicose, venous_perforator, dtv_post_thrombotic
// ============================================================================
export interface CeapDetailedResult extends GenericCalculatorResult {
  ceapString: string;
  cCategoryDescription: string;
  surgicalInterventionEligible: boolean;
}

export function calculateCeapDetailed(
  cClass: 'C0' | 'C1' | 'C2' | 'C3' | 'C4a' | 'C4b' | 'C4c' | 'C5' | 'C6',
  etiology: 'Ec' | 'Ep' | 'Es' | 'En',
  anatomy: 'As' | 'Ad' | 'Ap' | 'An',
  pathophysiology: 'Pr' | 'Po' | 'Pr,o' | 'Pn'
): CeapDetailedResult {
  const cDescMap: Record<string, string> = {
    'C0': 'No visible or palpable signs of venous disease',
    'C1': 'Telangiectasias or reticular veins (< 3 mm)',
    'C2': 'Varicose veins (>= 3 mm diameter in upright position)',
    'C3': 'Edema of venous origin (without trophic skin changes)',
    'C4a': 'Pigmentation or eczema (stasis dermatitis)',
    'C4b': 'Lipodermatosclerosis or atrophie blanche',
    'C4c': 'Corona phlebectatica paraplantaris',
    'C5': 'Healed venous ulceration',
    'C6': 'Active open venous ulceration'
  };

  const ceapString = `${cClass},${etiology},${anatomy},${pathophysiology}`;
  const isC2Plus = ['C2', 'C3', 'C4a', 'C4b', 'C4c', 'C5', 'C6'].includes(cClass);
  const isUlcer = ['C5', 'C6'].includes(cClass);

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendation = 'Lifestyle modifications, weight management, and Class I (18-21 mmHg) compression stockings.';

  if (isUlcer) {
    riskLevel = 'critical';
    recommendation = `CEAP ${cClass}: Advanced venous ulceration. Immediate Duplex US mapping for Great/Small Saphenous truncal reflux and pathological perforators. Perform definitive endovenous ablation (VenaSeal/EVLA) + perforator sclero-glue to accelerate ulcer healing.`;
  } else if (['C4a', 'C4b', 'C4c'].includes(cClass)) {
    riskLevel = 'critical';
    recommendation = `CEAP ${cClass}: Advanced chronic venous insufficiency with irreversible skin changes. Endovenous saphenous ablation indicated to prevent breakdown into open active ulceration.`;
  } else if (isC2Plus) {
    riskLevel = 'warning';
    recommendation = `CEAP ${cClass}: Symptomatic varicose veins / edema with truncal reflux. Eligible for VenaSeal cyanoacrylate glue closure, EVLA 1470nm, or RFA.`;
  }

  return {
    valid: true,
    score: cClass,
    ceapString,
    cCategoryDescription: cDescMap[cClass] || cClass,
    surgicalInterventionEligible: isC2Plus,
    classification: `CEAP ${ceapString} (${cDescMap[cClass]})`,
    riskLevel,
    recommendation,
    details: {
      'CEAP Classification': ceapString,
      'Clinical Class (C)': cClass,
      'Etiology (E)': etiology === 'Ep' ? 'Primary' : etiology === 'Es' ? 'Secondary (Post-thrombotic)' : etiology === 'Ec' ? 'Congenital' : 'Unknown',
      'Anatomy (A)': anatomy === 'As' ? 'Superficial veins' : anatomy === 'Ad' ? 'Deep veins' : anatomy === 'Ap' ? 'Perforator veins' : 'None',
      'Pathophysiology (P)': pathophysiology === 'Pr' ? 'Reflux' : pathophysiology === 'Po' ? 'Obstruction' : pathophysiology === 'Pr,o' ? 'Reflux + Obstruction' : 'None'
    }
  };
}

// ============================================================================
// 49. SPETZLER-MARTIN BRAIN AVM GRADING SYSTEM
// Protocols: bvm_embo, neuro_avm
// ============================================================================
export interface SpetzlerMartinDetailedResult extends GenericCalculatorResult {
  totalGrade: number;
  sizePoints: number;
  eloquencePoints: number;
  drainagePoints: number;
  therapeuticStrategy: string;
}

export function calculateSpetzlerMartinDetailed(
  sizeCm: number,
  isEloquentCortex: boolean,
  hasDeepVenousDrainage: boolean
): SpetzlerMartinDetailedResult {
  if (sizeCm <= 0) {
    return {
      valid: false,
      score: 0,
      totalGrade: 0,
      sizePoints: 0,
      eloquencePoints: 0,
      drainagePoints: 0,
      therapeuticStrategy: 'Invalid size',
      classification: 'Invalid Input',
      riskLevel: 'safe',
      recommendation: 'Enter positive AVM nidus diameter.'
    };
  }

  let sizePoints = 1;
  if (sizeCm > 6.0) sizePoints = 3;
  else if (sizeCm >= 3.0) sizePoints = 2;

  const eloquencePoints = isEloquentCortex ? 1 : 0;
  const drainagePoints = hasDeepVenousDrainage ? 1 : 0;
  const totalGrade = sizePoints + eloquencePoints + drainagePoints;

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let therapeuticStrategy = '';

  if (totalGrade <= 2) {
    riskLevel = 'safe';
    therapeuticStrategy = `Grade ${totalGrade} (Low Risk): Favorable for definitive transarterial Onyx/PHIL liquid embolization, microsurgical excision, or stereotactic radiosurgery (SRS). Excellent functional prognosis.`;
  } else if (totalGrade === 3) {
    riskLevel = 'warning';
    therapeuticStrategy = 'Grade III (Intermediate Risk): Multidisciplinary case-by-case planning. Targeted pre-operative staged embolization to decompress deep feeders followed by SRS or microsurgical resection.';
  } else {
    riskLevel = 'critical';
    therapeuticStrategy = `Grade ${totalGrade} (High Risk): High morbidity/mortality under intervention. Conservative medical management recommended unless recurrent intractable hemorrhage, disabling steal symptoms, or high-risk associated intranidal aneurysms.`;
  }

  return {
    valid: true,
    score: totalGrade,
    totalGrade,
    sizePoints,
    eloquencePoints,
    drainagePoints,
    therapeuticStrategy,
    classification: `Spetzler-Martin Grade ${totalGrade} (Size: ${sizePoints}p, Eloq: ${eloquencePoints}p, Deep: ${drainagePoints}p)`,
    riskLevel,
    recommendation: therapeuticStrategy,
    details: {
      'Total Spetzler-Martin Grade': `Grade ${totalGrade}`,
      'Nidus Size': `${sizeCm} cm (${sizePoints} points)`,
      'Eloquent Brain Tissue': isEloquentCortex ? 'Yes (+1)' : 'No (0)',
      'Deep Venous Drainage': hasDeepVenousDrainage ? 'Yes (+1)' : 'Superficial only (0)',
      'Interventional Strategy': therapeuticStrategy
    }
  };
}

// ============================================================================
// 50. HUNT & HESS SCALE FOR ANEURYSMAL SUBARACHNOID HEMORRHAGE (aSAH)
// Protocols: aneurysm_coiling, neuro_stroke
// ============================================================================
export interface HuntHessDetailedResult extends GenericCalculatorResult {
  grade: number;
  mortalityEstimatePercent: number;
  coilingUrgency: string;
}

export function calculateHuntHessDetailed(grade: 1 | 2 | 3 | 4 | 5): HuntHessDetailedResult {
  const gradeData: Record<number, { title: string; mortality: number; risk: 'safe' | 'warning' | 'critical'; advice: string }> = {
    1: {
      title: 'Grade 1: Asymptomatic or mild headache and slight nuchal rigidity',
      mortality: 11,
      risk: 'safe',
      advice: 'Good-grade aSAH: Emergent diagnostic 4-vessel cerebral DSA and endovascular coiling / stent-assisted coiling within 24-72 hours to prevent fatal re-rupture.'
    },
    2: {
      title: 'Grade 2: Moderate to severe headache, nuchal rigidity, cranial nerve palsy',
      mortality: 26,
      risk: 'safe',
      advice: 'Good-grade aSAH: Schedule prompt endovascular aneurysm securement (coiling/web/flow diverter) within 24 hours. Strict BP control (SBP < 140 mmHg) pre-coiling.'
    },
    3: {
      title: 'Grade 3: Drowsiness, confusion, or mild focal neurologic deficit',
      mortality: 37,
      risk: 'warning',
      advice: 'Intermediate-grade aSAH: Urgent endovascular coiling indicated. Monitor for early hydrocephalus and vasospasm. Nimodipine 60mg Q4H initiated.'
    },
    4: {
      title: 'Grade 4: Stupor, moderate to severe hemiparesis, early decerebrate rigidity',
      mortality: 71,
      risk: 'critical',
      advice: 'Poor-grade aSAH: High mortality. Immediate CT/DSA, emergency External Ventricular Drain (EVD) placement for elevated ICP/hydrocephalus, followed by urgent endovascular coil occlusion.'
    },
    5: {
      title: 'Grade 5: Deep coma, decerebrate posturing, moribund appearance',
      mortality: 89,
      risk: 'critical',
      advice: 'Critical / Moribund aSAH: Highest mortality (>80%). Resuscitation, urgent ventricular decompression. Endovascular coiling considered only if brainstem reflexes preserved and neuro-resuscitation succeeds.'
    }
  };

  const item = gradeData[grade] || gradeData[1];

  return {
    valid: true,
    score: grade,
    grade,
    mortalityEstimatePercent: item.mortality,
    coilingUrgency: item.advice,
    classification: `Hunt & Hess Grade ${grade} (${item.mortality}% Estimated Mortality)`,
    riskLevel: item.risk,
    recommendation: item.advice,
    details: {
      'Hunt & Hess Grade': `Grade ${grade}`,
      'Clinical Description': item.title,
      'Predicted Mortality': `~${item.mortality}%`,
      'Endovascular Recommendation': item.advice
    }
  };
}

// ============================================================================
// 51. BUDD-CHIARI COMPOSITE SHUNT & COLLATERAL EMBOLIZATION RISK SCORE
// Protocols: bcs, tips_portal_htn, variceal_glue_coil
// ============================================================================
export interface BuddChiariCompositeResult extends GenericCalculatorResult {
  rotterdamScore: number;
  rotterdamClass: 'Class I' | 'Class II' | 'Class III';
  crlRatio: number;
  caudateHypertrophy: boolean;
  recommendedPathway: string;
}

export function calculateBuddChiariCompositeRisk(
  encephalopathy: boolean,
  ascites: boolean,
  bilirubinMgDl: number,
  inr: number,
  caudateToRightLobeRatio: number,
  hasSevereCavalWebStenosis: boolean = false
): BuddChiariCompositeResult {
  const biliUmol = (bilirubinMgDl > 0 ? bilirubinMgDl : 1.0) * 17.1;
  const inrVal = inr > 0 ? inr : 1.0;
  const rotterdamScore = parseFloat((1.27 * (encephalopathy ? 1 : 0) + 0.54 * (ascites ? 1 : 0) + 0.038 * biliUmol + 1.53 * inrVal).toFixed(2));

  let rotterdamClass: 'Class I' | 'Class II' | 'Class III' = 'Class I';
  if (rotterdamScore > 1.5) rotterdamClass = 'Class III';
  else if (rotterdamScore >= 1.1) rotterdamClass = 'Class II';

  const isHypertrophied = caudateToRightLobeRatio >= 0.65;

  let riskLevel: 'safe' | 'warning' | 'critical' = 'safe';
  let recommendedPathway = '';

  if (hasSevereCavalWebStenosis) {
    riskLevel = 'critical';
    recommendedPathway = 'Primary IVC Membranotomy & Large-Bore Stenting (Sinus-XL 20-24mm) + Transjugular Hepatic Vein Recanalization. If variceal hemorrhage coexists, perform simultaneous Transjugular / Transhepatic Variceal Embolization using Glue + Coils.';
  } else if (rotterdamClass === 'Class III' || isHypertrophied) {
    riskLevel = 'critical';
    recommendedPathway = 'Direct Intrahepatic Portosystemic Shunt (DIPS) transcaval puncture into portal vein with Gore Viatorr 10mm stent-graft. Due to caudate hypertrophy compressing intrahepatic IVC, conventional TIPS carries high failure rate. Concomitant variceal/collateral embolization with Coils + Glue (n-BCA) indicated if large spontaneous shunts cause encephalopathy.';
  } else if (rotterdamClass === 'Class II') {
    riskLevel = 'warning';
    recommendedPathway = 'Hepatic Vein Balloon Angioplasty & Stenting (10-14mm Wallstent). If hepatic veins are completely chronified/occluded, proceed to early TIPS. Embolize bleeding varices with n-BCA glue or coils.';
  } else {
    riskLevel = 'safe';
    recommendedPathway = 'Class I (Favorable): Therapeutic anticoagulation (DOAC Rivaroxaban / LMWH) + Diuretics (Spironolactone : Furosemide 100:40). Monitor Doppler every 3 months. Endovascular intervention reserved for clinical deterioration.';
  }

  return {
    valid: true,
    score: rotterdamScore,
    rotterdamScore,
    rotterdamClass,
    crlRatio: caudateToRightLobeRatio,
    caudateHypertrophy: isHypertrophied,
    recommendedPathway,
    classification: `Budd-Chiari: ${rotterdamClass} (BCS-PI ${rotterdamScore}, C/RL ${caudateToRightLobeRatio})`,
    riskLevel,
    recommendation: recommendedPathway,
    details: {
      'Rotterdam Score': rotterdamScore,
      'Rotterdam Class': rotterdamClass,
      'Caudate/Right Lobe Ratio': caudateToRightLobeRatio,
      'Caudate Hypertrophy': isHypertrophied ? 'Yes (C/RL >= 0.65)' : 'No (< 0.65)',
      'Recommended Clinical Pathway': recommendedPathway
    }
  };
}
export const PROCEDURE_CALCULATORS: ProcedureCalculatorMeta[] = [
  {
    id: 'rotterdam_bcs',
    name: 'Rotterdam Budd-Chiari Prognostic Index (BCS-PI)',
    shortName: 'Rotterdam BCS-PI',
    protocolIds: ['bcs', 'tips_portal_htn'],
    protocolId: 'bcs',
    protocolNames: ['Budd-Chiari Syndrome (BCS)', 'TIPS Portal HTN'],
    protocolName: 'Budd-Chiari Syndrome (BCS)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'EASL / AASLD Clinical Guidelines',
    formulaDescription: '1.27*Enceph + 0.54*Ascites + 0.038*Bilirubin(µmol/L) + 1.53*INR',
    summary: 'Predicts 5-year survival in Budd-Chiari syndrome and stratifies need for emergency TIPS vs. medical therapy.'
  },
  {
    id: 'clichy_bcs',
    name: 'Clichy Prognostic Index for Budd-Chiari Syndrome',
    shortName: 'Clichy BCS Score',
    protocolIds: ['bcs', 'tips_portal_htn'],
    protocolId: 'bcs',
    protocolNames: ['Budd-Chiari Syndrome (BCS)', 'TIPS Portal HTN'],
    protocolName: 'Budd-Chiari Syndrome (BCS)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'CIRSE / EASL Outflow Guidelines',
    formulaDescription: '0.08*Age + 0.16*Bilirubin + 0.72*Creatinine + 0.63*Ascites',
    summary: 'Identifies patients with Budd-Chiari syndrome who will fail medical therapy (Score ≥ 5.4) and need TIPS.'
  },
  {
    id: 'caudate_right_lobe_ratio',
    name: 'Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)',
    shortName: 'Caudate/Right Lobe Ratio',
    protocolIds: ['bcs', 'tips_portal_htn', 'brto_parto'],
    protocolId: 'bcs',
    protocolNames: ['Budd-Chiari Syndrome (BCS)', 'TIPS Portal HTN', 'BRTO/PARTO'],
    protocolName: 'Budd-Chiari Syndrome (BCS)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Radiology / CIRSE Morphologic Standards',
    formulaDescription: 'Caudate Transverse Width / Right Lobe Transverse Width',
    summary: 'High-specificity morphologic indicator of Budd-Chiari caudate hypertrophy and advanced cirrhosis.'
  },
  {
    id: 'fick_shunt_pavm',
    name: 'Direct Fick Shunt Fraction (Qp/Qs) for PAVM',
    shortName: 'PAVM Shunt Fraction',
    protocolIds: ['pavm_embolization'],
    protocolId: 'pavm_embolization',
    protocolNames: ['Pulmonary AVM (PAVM) Embolization'],
    protocolName: 'Pulmonary AVM (PAVM) Embolization',
    system: 'Thoracic & Pulmonology',
    guidelineAuthority: 'AHA / CIRSE Pulmonary Vascular Malformation Guidelines',
    formulaDescription: '(SpvO2 - SaO2) / (SpvO2 - SvO2) * 100',
    summary: 'Calculates right-to-left intrapulmonary shunt fraction and paradoxical stroke risk threshold (≥ 5%).'
  },
  {
    id: 'hvpg_portal_htn',
    name: 'Hepatic Venous Pressure Gradient (HVPG) & TIPS Hemodynamics',
    shortName: 'HVPG & TIPS Target',
    protocolIds: ['tips_portal_htn', 'bcs', 'brto_parto', 'upper_gi_bleed'],
    protocolId: 'tips_portal_htn',
    protocolNames: ['TIPS for Portal HTN', 'Budd-Chiari Syndrome', 'BRTO/PARTO', 'Upper GI Bleeding'],
    protocolName: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Baveno VII Consensus Guidelines',
    formulaDescription: 'WHVP - FHVP (Goal: < 12 mmHg or > 50% drop)',
    summary: 'Gold-standard portal pressure measurement determining variceal bleeding risk and post-TIPS endpoint.'
  },
  {
    id: 'ptbd_decompression',
    name: 'PTBD Biliary Drainage Clearance & Decompression Index',
    shortName: 'PTBD Clearance Index',
    protocolIds: ['ptbd', 'cholecystostomy'],
    protocolId: 'ptbd',
    protocolNames: ['Percutaneous Transhepatic Biliary Drainage (PTBD)', 'Percutaneous Cholecystostomy'],
    protocolName: 'Percutaneous Transhepatic Biliary Drainage (PTBD)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'SIR Standards of Practice for Biliary Interventions',
    formulaDescription: 'Daily Bilirubin Clearance Rate (%/day) & Output Monitoring',
    summary: 'Evaluates daily bile output adequacy (300-800 mL/day) and flags early catheter obstruction (<150 mL/day).'
  },
  {
    id: 'rutherford_pad',
    name: 'Rutherford PAD & Chronic Limb-Threatening Ischemia (CLTI)',
    shortName: 'Rutherford PAD Category',
    protocolIds: ['pad_angioplasty'],
    protocolId: 'pad_angioplasty',
    protocolNames: ['PAD Angioplasty & Stenting'],
    protocolName: 'Peripheral Arterial Disease (PAD) Angioplasty & Stenting',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'SVS / CIRSE Lower Extremity Guidelines',
    formulaDescription: 'Clinical Categories 0 to 6 (Claudication to Major Tissue Loss)',
    summary: 'Standard clinical staging for peripheral arterial disease and urgency tier for limb salvage angioplasty.'
  },
  {
    id: 'abi_tbi_pad',
    name: 'Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)',
    shortName: 'ABI / TBI Index',
    protocolIds: ['pad_angioplasty', 'evar_tevar'],
    protocolId: 'pad_angioplasty',
    protocolNames: ['PAD Angioplasty & Stenting', 'EVAR / TEVAR Aortic Repair'],
    protocolName: 'Peripheral Arterial Disease (PAD) Angioplasty & Stenting',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'AHA / ACC Vascular Guidelines',
    formulaDescription: 'Highest Ankle Systolic / Highest Brachial Systolic Pressure',
    summary: 'Non-invasive diagnostic ratio classifying PAD severity, calcification (>1.40), and critical ischemia (<0.40).'
  },
  {
    id: 'fontaine_pad',
    name: 'Fontaine Staging for Lower Extremity Arterial Disease',
    shortName: 'Fontaine Staging',
    protocolIds: ['pad_angioplasty'],
    protocolId: 'pad_angioplasty',
    protocolNames: ['PAD Angioplasty & Stenting'],
    protocolName: 'Peripheral Arterial Disease (PAD) Angioplasty & Stenting',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'ESVS Clinical Practice Guidelines',
    formulaDescription: 'Functional Stages I, IIa, IIb, III, IV',
    summary: 'Stratifies walking distance impairment and rest pain, marking threshold for endovascular intervention (IIb-IV).'
  },
  {
    id: 'wells_dvt',
    name: 'Wells Clinical Score for Deep Vein Thrombosis (DVT)',
    shortName: 'Wells DVT Score',
    protocolIds: ['dvt_thrombolysis', 'ivc_filter_retrieval'],
    protocolId: 'dvt_thrombolysis',
    protocolNames: ['DVT Catheter-Directed Thrombolysis', 'IVC Filter Retrieval'],
    protocolName: 'Deep Vein Thrombosis (DVT) Catheter-Directed Thrombolysis',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'ACCP / CIRSE Venous Thromboembolism Guidelines',
    formulaDescription: 'Two-tier / Three-tier DVT Probability Stratification',
    summary: 'Estimates pre-test DVT probability and flags candidates for emergency catheter-directed thrombolysis.'
  },
  {
    id: 'villalta_pts',
    name: 'Villalta Scale for Post-Thrombotic Syndrome (PTS)',
    shortName: 'Villalta PTS Score',
    protocolIds: ['dvt_thrombolysis', 'central_venoplasty', 'pelvic_congestion'],
    protocolId: 'dvt_thrombolysis',
    protocolNames: ['DVT Catheter-Directed Thrombolysis', 'Central Venous Angioplasty', 'Pelvic Congestion Syndrome'],
    protocolName: 'Deep Vein Thrombosis (DVT) Catheter-Directed Thrombolysis',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'ISTH Consensus Criteria',
    formulaDescription: '5 Subjective Symptoms + 6 Objective Signs (0 to 33 points)',
    summary: 'Quantifies post-thrombotic morbidity and identifies candidates for deep venous iliac recanalization and stenting.'
  },
  {
    id: 'ceap_varicose',
    name: 'CEAP Classification for Chronic Venous Disease',
    shortName: 'CEAP Venous Class',
    protocolIds: ['varicose', 'pelvic_congestion'],
    protocolId: 'varicose',
    protocolNames: ['Endovenous Laser / RF Ablation for Varicose Veins', 'Pelvic Congestion Syndrome'],
    protocolName: 'Endovenous Laser / RF Ablation for Varicose Veins',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'American Venous Forum / CIRSE',
    formulaDescription: 'Clinical Classes C0 to C6 (Telangiectasia to Active Ulcer)',
    summary: 'Standard venous classification guiding saphenous thermal ablation and ultrasound-guided foam sclerotherapy.'
  },
  {
    id: 'geneva_pe',
    name: 'Revised Geneva Score for Pulmonary Embolism',
    shortName: 'Revised Geneva PE Score',
    protocolIds: ['pulmonary_pe_thrombolysis', 'ivc_filter_retrieval'],
    protocolId: 'pulmonary_pe_thrombolysis',
    protocolNames: ['Pulmonary Embolism (PE) Thrombolysis', 'IVC Filter Retrieval'],
    protocolName: 'Pulmonary Embolism (PE) Catheter Thrombolysis & Thrombectomy',
    system: 'Thoracic & Pulmonology',
    guidelineAuthority: 'ESC Guidelines on Acute Pulmonary Embolism',
    formulaDescription: 'Clinical Prediction Rule for Acute PE (0-22 points)',
    summary: 'Determines pre-test probability of acute pulmonary embolism and urgency of CT pulmonary angiography.'
  },
  {
    id: 'spesi_pe',
    name: 'Simplified Pulmonary Embolism Severity Index (sPESI)',
    shortName: 'sPESI Score',
    protocolIds: ['pulmonary_pe_thrombolysis', 'ivc_filter_retrieval'],
    protocolId: 'pulmonary_pe_thrombolysis',
    protocolNames: ['Pulmonary Embolism (PE) Thrombolysis', 'IVC Filter Retrieval'],
    protocolName: 'Pulmonary Embolism (PE) Catheter Thrombolysis & Thrombectomy',
    system: 'Thoracic & Pulmonology',
    guidelineAuthority: 'ESC / PERT Consortium Guidelines',
    formulaDescription: '6 Clinical Parameters (Age, Cancer, Cardiopulm, HR, BP, SaO2)',
    summary: 'Predicts 30-day PE mortality and identifies candidates for catheter-directed thrombolysis and aspiration.'
  },
  {
    id: 'fibroid_volume_uae',
    name: 'Uterine Fibroid Volume & Spherical Equivalence',
    shortName: 'Fibroid Volume (UAE)',
    protocolIds: ['uae', 'pelvic_congestion'],
    protocolId: 'uae',
    protocolNames: ['Uterine Artery Embolization (UAE / UFE)', 'Pelvic Congestion Syndrome'],
    protocolName: 'Uterine Artery Embolization (UAE / UFE) for Fibroids',
    system: 'Genitourinary & Pelvic',
    guidelineAuthority: 'CIRSE / SIR Uterine Artery Embolization Standards',
    formulaDescription: 'Prolate Ellipsoid Volume: 0.523 * Length * Width * Depth',
    summary: 'Calculates exact fibroid volume (cm³) and monitors post-UAE shrinkage trajectory (expected 50-70% reduction).'
  },
  {
    id: 'ipss_pae',
    name: 'International Prostate Symptom Score (IPSS) & QoL',
    shortName: 'IPSS & QoL Score',
    protocolIds: ['pae'],
    protocolId: 'pae',
    protocolNames: ['Prostatic Artery Embolization (PAE) for BPH'],
    protocolName: 'Prostatic Artery Embolization (PAE) for BPH',
    system: 'Genitourinary & Pelvic',
    guidelineAuthority: 'AUA / CIRSE Standards for PAE in BPH',
    formulaDescription: '7 Urinary Symptoms (0-35) + Quality of Life Index (0-6)',
    summary: 'Quantifies lower urinary tract symptom burden and verifies qualification criteria for PAE (IPSS ≥ 13, QoL ≥ 3).'
  },
  {
    id: 'prostate_volume_pae',
    name: 'Prostate Volume & PSA Density Engine',
    shortName: 'Prostate Volume & PSAD',
    protocolIds: ['pae'],
    protocolId: 'pae',
    protocolNames: ['Prostatic Artery Embolization (PAE) for BPH'],
    protocolName: 'Prostatic Artery Embolization (PAE) for BPH',
    system: 'Genitourinary & Pelvic',
    guidelineAuthority: 'CIRSE PAE Consensus & EAU Guidelines',
    formulaDescription: 'Ellipsoid Volume: 0.523 * W * H * L | PSAD = PSA / Volume',
    summary: 'Assesses gland suitability for PAE (>40 mL) and screens for prostate cancer risk via PSA Density (≥0.15).'
  },
  {
    id: 'nascet_carotid',
    name: 'NASCET vs. ECST Carotid Artery Stenosis Engine',
    shortName: 'NASCET Carotid Stenosis',
    protocolIds: ['carotid_stenting', 'stroke_thrombectomy'],
    protocolId: 'carotid_stenting',
    protocolNames: ['Carotid Artery Stenting (CAS)', 'Acute Ischemic Stroke Mechanical Thrombectomy'],
    protocolName: 'Carotid Artery Stenting (CAS) with Embolic Protection',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'AHA / ASA Carotid Revascularization Guidelines',
    formulaDescription: '(1 - (d_stenosis / D_distal_ICA)) * 100',
    summary: 'Calculates angiographic stenosis percentage to confirm indication for carotid stenting with embolic protection.'
  },
  {
    id: 'aspects_stroke',
    name: 'Alberta Stroke Programme Early CT Score (ASPECTS)',
    shortName: 'ASPECTS Stroke Score',
    protocolIds: ['stroke_thrombectomy', 'carotid_stenting'],
    protocolId: 'stroke_thrombectomy',
    protocolNames: ['Acute Ischemic Stroke Mechanical Thrombectomy', 'Carotid Artery Stenting (CAS)'],
    protocolName: 'Acute Ischemic Stroke Mechanical Thrombectomy',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'AHA / ASA / ESO Stroke Thrombectomy Guidelines',
    formulaDescription: '10 MCA Regions Scored on Non-Contrast CT (10 down to 0)',
    summary: 'Assesses ischemic core volume to select stroke patients who benefit from emergent mechanical thrombectomy.'
  },
  {
    id: 'nihss_short',
    name: 'NIH Stroke Scale (NIHSS) Severity Tier',
    shortName: 'NIHSS Severity Tier',
    protocolIds: ['stroke_thrombectomy', 'carotid_stenting'],
    protocolId: 'stroke_thrombectomy',
    protocolNames: ['Acute Ischemic Stroke Mechanical Thrombectomy', 'Carotid Artery Stenting (CAS)'],
    protocolName: 'Acute Ischemic Stroke Mechanical Thrombectomy',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'AHA / ASA Emergent Stroke Protocols',
    formulaDescription: 'Stroke Neurological Deficit Score (0 to 42 points)',
    summary: 'Quantifies stroke severity; scores ≥ 6 indicate high likelihood of large vessel occlusion (LVO).'
  },
  {
    id: 'hunt_hess_sah',
    name: 'Hunt and Hess Scale for Subarachnoid Hemorrhage',
    shortName: 'Hunt & Hess Scale',
    protocolIds: ['aneurysm_coiling'],
    protocolId: 'aneurysm_coiling',
    protocolNames: ['Intracranial Aneurysm Coil Embolization'],
    protocolName: 'Intracranial Aneurysm Coil Embolization & Flow Diversion',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'AHA / Neurocritical Care Society Guidelines',
    formulaDescription: 'Clinical Grades 1 to 5 for Aneurysmal SAH',
    summary: 'Stratifies perioperative surgical/endovascular mortality risk and guides timing of aneurysm coiling.'
  },
  {
    id: 'modified_fisher_sah',
    name: 'Modified Fisher CT Grade for Vasospasm Risk',
    shortName: 'Modified Fisher Scale',
    protocolIds: ['aneurysm_coiling'],
    protocolId: 'aneurysm_coiling',
    protocolNames: ['Intracranial Aneurysm Coil Embolization'],
    protocolName: 'Intracranial Aneurysm Coil Embolization & Flow Diversion',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'Neurovascular & Stroke Guidelines',
    formulaDescription: 'CT Clot Thickness & Intraventricular Hemorrhage (Grades 1 to 4)',
    summary: 'Predicts delayed cerebral ischemia (DCI) risk and prompts intra-arterial spasmolysis preparedness.'
  },
  {
    id: 'markwalder_csdh',
    name: 'Markwalder Grading Scale for Chronic Subdural Hematoma',
    shortName: 'Markwalder CSDH Scale',
    protocolIds: ['csdh_mma'],
    protocolId: 'csdh_mma',
    protocolNames: ['Chronic Subdural Hematoma (CSDH) MMA Embolization'],
    protocolName: 'Chronic Subdural Hematoma (CSDH) Middle Meningeal Embolization',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'SNIS Standards for MMA Embolization',
    formulaDescription: 'Clinical Severity Grades 0 to 4',
    summary: 'Differentiates candidates for standalone MMA embolization (Grades 0-2) from urgent surgical evacuation (Grades 3-4).'
  },
  {
    id: 'schobinger_avm',
    name: 'Schobinger Clinical Staging for Arteriovenous Malformations',
    shortName: 'Schobinger AVM Stage',
    protocolIds: ['head_neck_avm', 'epistaxis_tae', 'visceral_aneurysm'],
    protocolId: 'head_neck_avm',
    protocolNames: ['Head & Neck AVM', 'Epistaxis TAE', 'Visceral Aneurysm'],
    protocolName: 'Head, Neck & Facial Arteriovenous Malformation (AVM) Embolization',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'ISSVA / CIRSE Vascular Malformation Guidelines',
    formulaDescription: 'Clinical Evolution Stages I to IV (Quiescence to Decompensation)',
    summary: 'Defines therapeutic algorithm for high-flow AVMs from observation to transarterial Onyx embolization.'
  },
  {
    id: 'rockall_bleeding',
    name: 'Rockall Risk Score for Upper GI Bleeding',
    shortName: 'Rockall Bleeding Score',
    protocolIds: ['upper_gi_bleed', 'brto_parto'],
    protocolId: 'upper_gi_bleed',
    protocolNames: ['Upper Gastrointestinal Bleeding (UGIB) Embolization', 'BRTO/PARTO for Gastric Varices'],
    protocolName: 'Upper Gastrointestinal Bleeding (UGIB) Embolization',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'BSG / CIRSE Gastrointestinal Bleeding Standards',
    formulaDescription: 'Age + Shock + Comorbidity + Endoscopic Findings (0 to 11)',
    summary: 'Predicts rebleeding and mortality risk, flagging need for emergency transcatheter arterial embolization (TAE).'
  },
  {
    id: 'gbs_bleeding',
    name: 'Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage',
    shortName: 'Glasgow-Blatchford Score',
    protocolIds: ['upper_gi_bleed', 'brto_parto'],
    protocolId: 'upper_gi_bleed',
    protocolNames: ['Upper Gastrointestinal Bleeding (UGIB) Embolization', 'BRTO/PARTO for Gastric Varices'],
    protocolName: 'Upper Gastrointestinal Bleeding (UGIB) Embolization',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'NICE / BSG Guidelines',
    formulaDescription: 'BUN + Hb + SBP + Pulse + Clinical Markers (0 to 23)',
    summary: 'Determines need for emergency endoscopic/IR intervention and blood transfusion in upper GI bleeding.'
  },
  {
    id: 'oakland_lgib',
    name: 'Oakland Score for Acute Lower Gastrointestinal Bleeding',
    shortName: 'Oakland LGIB Score',
    protocolIds: ['lower_gi_bleed', 'pelvic_trauma_bleed'],
    protocolId: 'lower_gi_bleed',
    protocolNames: ['Lower Gastrointestinal Bleeding (LGIB) Embolization', 'Pelvic Trauma Bleeding Embolization'],
    protocolName: 'Lower Gastrointestinal Bleeding (LGIB) Embolization',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'BSG / ASGE Lower GI Bleeding Guidelines',
    formulaDescription: '7 Variables (Age, Sex, Previous Bleed, DRE, HR, BP, Hb)',
    summary: 'Identifies safe outpatient discharge (≤ 8) vs. severe active hemorrhage (≥ 15) requiring emergent CTA and embolization.'
  },
  {
    id: 'sir_coagulation_risk',
    name: 'SIR Pre-Procedure Coagulation & Bleeding Risk Stratifier',
    shortName: 'SIR Coagulation Safety',
    protocolIds: [
      'biopsy',
      'ptbd',
      'pcn',
      'tumor_ablation',
      'tips_portal_htn',
      'cholecystostomy',
      'liver_abscess_drain',
      'hydatid_pair',
      'permacath_chemoport',
      'vertebroplasty',
      'celiac_plexus_block',
      'pleural_ipc',
      'thoracic_duct_tde',
      'bae',
      'varicocele'
    ],
    protocolId: 'biopsy',
    protocolNames: [
      'Percutaneous Image-Guided Core Biopsy',
      'PTBD',
      'PCN',
      'Tumor Ablation',
      'TIPS',
      'Cholecystostomy',
      'Liver Abscess Drain',
      'Hydatid PAIR',
      'Permacath / Chemoport',
      'Vertebroplasty',
      'Celiac Plexus Block',
      'Indwelling Pleural Catheter (IPC)',
      'Thoracic Duct Embolization (TDE)',
      'Bronchial Artery Embolization (BAE)',
      'Varicocele Embolization'
    ],
    protocolName: 'Percutaneous Image-Guided Core Biopsy (Liver, Lung, Renal)',
    system: 'Oncology & Ablation',
    guidelineAuthority: 'SIR 2019 Consensus Guidelines on Coagulation',
    formulaDescription: 'Category 1, 2, 3 Procedural Coagulation Thresholds (Plt, INR, aPTT)',
    summary: 'Authoritative pre-procedure clearance engine for biopsy, PTBD, PCN, and vascular punctures.'
  },
  {
    id: 'ablation_margin_a0a1',
    name: 'Thermal Ablation Margin (A0/A1) & Sphericity Index',
    shortName: 'Ablation Margin & Sphericity',
    protocolIds: ['tumor_ablation', 'renal_aml', 'bone_cryo_cement', 'thyroid_ablation'],
    protocolId: 'tumor_ablation',
    protocolNames: ['Tumor Thermal Ablation', 'Renal AML Embolization/Ablation', 'Bone Cryo & Cementoplasty', 'Thyroid RFA Ablation'],
    protocolName: 'Percutaneous Tumor Thermal Ablation (MWA / RFA / Cryo)',
    system: 'Oncology & Ablation',
    guidelineAuthority: 'CIRSE / SIR Image-Guided Tumor Ablation Standards',
    formulaDescription: 'Circumferential 3D Margin (<5mm: A0, ≥5mm: A1, ≥10mm: Curative)',
    summary: 'Measures 3D ablation margin safety halo and sphericity to minimize local tumor progression (LTP).'
  },
  {
    id: 'womac_gae',
    name: 'WOMAC Osteoarthritis Index for Genicular Artery Embolization',
    shortName: 'WOMAC Knee Score (GAE)',
    protocolIds: ['gae_knee', 'vertebroplasty'],
    protocolId: 'gae_knee',
    protocolNames: ['Genicular Artery Embolization (GAE)', 'Vertebroplasty'],
    protocolName: 'Genicular Artery Embolization (GAE) for Knee Osteoarthritis',
    system: 'Musculoskeletal & Pain',
    guidelineAuthority: 'SIR / CIRSE Standards for Genicular Artery Embolization',
    formulaDescription: '24 Questions: Pain (0-20), Stiffness (0-8), Function (0-68)',
    summary: 'Validates knee pain disability and eligibility for Genicular Artery Embolization (Pain ≥ 10/20).'
  },
  {
    id: 'cigarroa_macd',
    name: 'Cigarroa Maximum Allowable Contrast Dose (MACD) & CI-AKI',
    shortName: 'Cigarroa MACD Contrast Limit',
    protocolIds: [
      'tace',
      'pad_angioplasty',
      'tips_portal_htn',
      'carotid_stenting',
      'evar_tevar',
      'visceral_aneurysm',
      'renal_stenting',
      'uae',
      'pae',
      'pulmonary_pe_thrombolysis',
      'lower_gi_bleed',
      'upper_gi_bleed',
      'pelvic_trauma_bleed',
      'stroke_thrombectomy',
      'aneurysm_coiling',
      'y90_tare',
      'bae',
      'varicocele',
      'thoracic_duct_tde'
    ],
    protocolId: 'tace',
    protocolNames: [
      'TACE',
      'PAD Angioplasty',
      'TIPS',
      'Carotid Stenting',
      'EVAR/TEVAR',
      'Visceral Aneurysm',
      'Renal Stenting',
      'UAE',
      'PAE',
      'PE Thrombolysis',
      'Lower GI Bleed',
      'Upper GI Bleed',
      'Pelvic Trauma',
      'Stroke Thrombectomy',
      'Aneurysm Coiling',
      'Y90 TARE',
      'BAE',
      'Varicocele Embolization',
      'Thoracic Duct Embolization (TDE)'
    ],
    protocolName: 'Transarterial Chemoembolization (TACE)',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'Cigarroa / SIR Contrast Nephropathy Standards',
    formulaDescription: 'MACD (mL) = (5 * Weight in kg) / Serum Creatinine (mg/dL)',
    summary: 'Nephrotoxicity ceiling preventing Contrast-Induced Acute Kidney Injury (CI-AKI) and tracking Contrast:eGFR ratio.'
  },
  {
    id: 'meld3_score',
    name: 'MELD 3.0 Score (TIPS Eligibility & Liver Mortality)',
    shortName: 'MELD 3.0 Score',
    protocolIds: ['tips_portal_htn', 'bcs', 'tace', 'brto_parto', 'y90_tare', 'pve'],
    protocolId: 'tips_portal_htn',
    protocolNames: ['TIPS for Portal HTN', 'Budd-Chiari Syndrome', 'TACE', 'BRTO/PARTO', 'Y90 TARE', 'Portal Vein Embolization (PVE)'],
    protocolName: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'AASLD / UNOS 2021 Allocation Policy',
    formulaDescription: 'Updated MELD 3.0 Equation with Female Adjustment',
    summary: 'Stratifies 90-day liver disease mortality and determines candidacy for TIPS (MELD > 25 carries elevated mortality).'
  },
  {
    id: 'child_pugh_albi',
    name: 'Child-Pugh Score & ALBI Grade (Objective Hepatic Reserve)',
    shortName: 'Child-Pugh & ALBI Grade',
    protocolIds: ['tace', 'tips_portal_htn', 'bcs', 'y90_tare', 'brto_parto', 'pve'],
    protocolId: 'tace',
    protocolNames: ['TACE', 'TIPS for Portal HTN', 'Budd-Chiari Syndrome', 'Y90 TARE', 'BRTO/PARTO', 'Portal Vein Embolization (PVE)'],
    protocolName: 'Transarterial Chemoembolization (TACE)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'AASLD / EASL / CIRSE Standards for Hepatic Interventions',
    formulaDescription: 'Bilirubin + Albumin + INR + Ascites + Encephalopathy & log10(Bili)-Albumin',
    summary: 'Assesses functional liver reserve for TACE, TIPS, and radioembolization to avoid post-embolization liver failure.'
  },
  {
    id: 'bclc_staging',
    name: 'BCLC 2022 Hepatocellular Carcinoma Staging Engine',
    shortName: 'BCLC 2022 Staging',
    protocolIds: ['tace', 'y90_tare', 'tumor_ablation'],
    protocolId: 'tace',
    protocolNames: ['TACE', 'Y90 TARE', 'Tumor Thermal Ablation'],
    protocolName: 'Transarterial Chemoembolization (TACE)',
    system: 'Oncology & Ablation',
    guidelineAuthority: 'Barcelona Clinic Liver Cancer 2022 Update',
    formulaDescription: 'Tumor Burden + Liver Function (Child-Pugh) + ECOG Performance',
    summary: 'Definitive staging engine allocating HCC patients to curative ablation (Stage 0/A), TACE/TARE (Stage B), or systemic therapy.'
  },
  {
    id: 'flr_kgr_pve',
    name: 'Future Liver Remnant (sFLR) & Kinetic Growth Rate (KGR)',
    shortName: 'sFLR & KGR (PVE)',
    protocolIds: ['pve', 'y90_tare'],
    protocolId: 'pve',
    protocolNames: ['Portal Vein Embolization (PVE)', 'Y90 Radioembolization (TARE)'],
    protocolName: 'Portal Vein Embolization (PVE)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Vauthey / CIRSE / E-AHPBA Pre-Hepatectomy Consensus',
    formulaDescription: 'sFLR (%) = (FLR / TELV) * 100 | KGR = DH / Weeks (Goal ≥ 2.66%/wk)',
    summary: 'Calculates standardized future liver remnant and weekly kinetic growth rate to prevent Post-Hepatectomy Liver Failure.'
  },
  {
    id: 'y90_partition_dosimetry',
    name: 'Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)',
    shortName: 'Y90 Dosimetry & LSF',
    protocolIds: ['y90_tare'],
    protocolId: 'y90_tare',
    protocolNames: ['Y90 Radioembolization (TARE)'],
    protocolName: 'Y90 Transarterial Radioembolization (TARE)',
    system: 'Oncology & Ablation',
    guidelineAuthority: 'CIRSE / AAPM / MIRD Dosimetry Guidelines',
    formulaDescription: 'Lung Dose = (A * LSF * 50) / 1.0 kg | Tumor Dose (Goal ≥ 100-120 Gy)',
    summary: 'Precision partition model dosimetry enforcing lung safety (<30 Gy, LSF ≤ 20%) and tumoricidal necrosis.'
  },
  {
    id: 'spetzler_martin_avm',
    name: 'Spetzler-Martin Arteriovenous Malformation (AVM) Grading',
    shortName: 'Spetzler-Martin AVM',
    protocolIds: ['head_neck_avm', 'aneurysm_coiling'],
    protocolId: 'head_neck_avm',
    protocolNames: ['Head & Neck Vascular Malformations / AVM', 'Intracranial Aneurysm Coiling'],
    protocolName: 'Head and Neck Arteriovenous Malformations (AVM)',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'Spetzler & Martin / AHA/ASA Neurovascular Standards',
    formulaDescription: 'Nidus Size (1-3) + Eloquence (0-1) + Deep Venous Drainage (0-1)',
    summary: 'Definitive neurovascular grading predicting surgical and endovascular embolization deficit risk (Grades I to V).'
  },
  {
    id: 'aortic_size_index_asi',
    name: 'Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk',
    shortName: 'Aortic Size Index (ASI)',
    protocolIds: ['evar_tevar', 'visceral_aneurysm'],
    protocolId: 'evar_tevar',
    protocolNames: ['EVAR / TEVAR Endovascular Aortic Repair', 'Visceral Artery Aneurysm Embolization'],
    protocolName: 'Endovascular Aneurysm Repair (EVAR / TEVAR)',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'SVS / Elefteriades Thoracic Aortic Guidelines',
    formulaDescription: 'ASI (cm/m²) = Max Aortic Diameter (cm) / BSA (m²)',
    summary: 'Normalizes aortic aneurysm dimensions to body surface area to accurately stratify annual rupture probability.'
  },
  {
    id: 'renal_resistive_index',
    name: 'Renal Artery Resistive Index (RI) & Renal-to-Aortic Ratio (RAR)',
    shortName: 'Renal Resistive Index',
    protocolIds: ['renal_stenting', 'renal_aml'],
    protocolId: 'renal_stenting',
    protocolNames: ['Renal Artery Stenting', 'Renal Angiomyolipoma (AML) Embolization'],
    protocolName: 'Renal Artery Stenting for Renovascular HTN / Stenosis',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'Radermacher NEJM / SIR Standards for Renal Stenting',
    formulaDescription: 'RI = (PSV - EDV) / PSV | RAR = PSV_renal / PSV_aorta',
    summary: 'Detects irreversible nephrosclerosis (RI ≥ 0.80) to select only salvageable patients for renal stenting.'
  },
  {
    id: 'caprini_vte_score',
    name: 'Caprini Risk Assessment Model for Venous Thromboembolism (VTE)',
    shortName: 'Caprini VTE Score',
    protocolIds: ['ivc_filter_retrieval', 'dvt_thrombolysis', 'varicose', 'central_venoplasty'],
    protocolId: 'ivc_filter_retrieval',
    protocolNames: ['IVC Filter Retrieval', 'Deep Vein Thrombosis (DVT) Thrombolysis', 'Varicose Vein Endovenous Ablation', 'Central Venous Stenosis Venoplasty'],
    protocolName: 'Optional IVC Filter Retrieval',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'Caprini / ACCP / SIR Venous Thromboembolism Guidelines',
    formulaDescription: 'Weighted Clinical Risk Factor Score (0 to ≥9 points)',
    summary: 'Authoritative VTE risk stratifier directing mechanical vs. extended pharmacologic post-procedure anticoagulation.'
  },
  {
    id: 'has_bled_score',
    name: 'HAS-BLED Bleeding Risk in Catheter-Directed Thrombolysis',
    shortName: 'HAS-BLED Bleeding Score',
    protocolIds: ['dvt_thrombolysis', 'pulmonary_pe_thrombolysis', 'bcs'],
    protocolId: 'dvt_thrombolysis',
    protocolNames: ['Deep Vein Thrombosis (DVT) Thrombolysis', 'Pulmonary Embolism (PE) Thrombolysis', 'Budd-Chiari Syndrome (BCS)'],
    protocolName: 'Deep Vein Thrombosis (DVT) Catheter-Directed Thrombolysis',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'Chest / ESC / CIRSE Catheter-Directed Thrombolysis Standards',
    formulaDescription: 'Hypertension, Renal/Liver, Stroke, Bleeding, INR, Age >65, Drugs (0-9)',
    summary: 'Quantifies major hemorrhage hazard during thrombolysis; mandates strict fibrinogen monitoring for score ≥ 3.'
  },
  {
    id: 'palliative_prognostic_index',
    name: 'Palliative Prognostic Index (PPI) for Interventional Oncology',
    shortName: 'Palliative Prognostic Index',
    protocolIds: ['celiac_plexus_block', 'pleural_ipc', 'bone_cryo_cement'],
    protocolId: 'celiac_plexus_block',
    protocolNames: ['Celiac Plexus Neurolysis / Block', 'Indwelling Pleural Catheter (IPC)', 'Bone Cryoablation & Cementoplasty'],
    protocolName: 'Percutaneous Celiac Plexus Neurolysis & Block',
    system: 'Musculoskeletal & Pain',
    guidelineAuthority: 'Palliative Medicine / SIR Interventional Oncology Standards',
    formulaDescription: 'PPS Score + Oral Intake + Edema + Dyspnea + Delirium',
    summary: 'Predicts survival (<3 weeks vs. >6 weeks) to ensure patients will survive long enough to benefit from palliative interventions.'
  },
  {
    id: 'svs_wifi_classification',
    name: 'SVS WIfI Classification (Wound, Ischemia, foot Infection)',
    shortName: 'SVS WIfI Classification',
    protocolIds: ['pad_angioplasty', 'dvt_thrombolysis'],
    protocolId: 'pad_angioplasty',
    protocolNames: ['PAD Angioplasty & Stenting', 'DVT Catheter-Directed Thrombolysis'],
    protocolName: 'Peripheral Arterial Disease (PAD) Angioplasty & Stenting',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'Society for Vascular Surgery (SVS) CLTI Standards',
    formulaDescription: 'Wound (0-3) + Ischemia (0-3) + Foot Infection (0-3) Matrix',
    summary: 'Stratifies 1-year major amputation risk and predicts exact clinical benefit of endovascular revascularization.'
  },
  {
    id: 'sins_spine_instability',
    name: 'Spine Instability Neoplastic Score (SINS)',
    shortName: 'SINS Spine Score',
    protocolIds: ['vertebroplasty', 'bone_cryo_cement'],
    protocolId: 'vertebroplasty',
    protocolNames: ['Vertebroplasty & Kyphoplasty', 'Bone Cryoablation & Cementoplasty'],
    protocolName: 'Percutaneous Vertebroplasty & Kyphoplasty',
    system: 'Musculoskeletal & Pain',
    guidelineAuthority: 'Spine Oncology Study Group (SOSG) / SIR',
    formulaDescription: 'Location (0-3) + Pain (0-3) + Bone (0-2) + Alignment (0-4) + Collapse (0-3) + Posterior (0-3)',
    summary: 'Determines whether percutaneous cementoplasty is safe (score 0-12) or if overt spinal instability mandates surgical stabilization (13-18).'
  },
  {
    id: 'bova_pe_score',
    name: 'Bova Score for Acute Pulmonary Embolism',
    shortName: 'Bova PE Score',
    protocolIds: ['pulmonary_pe_thrombolysis'],
    protocolId: 'pulmonary_pe_thrombolysis',
    protocolNames: ['Pulmonary Embolism (PE) Catheter Thrombolysis & Thrombectomy'],
    protocolName: 'Pulmonary Embolism (PE) Catheter Thrombolysis & Thrombectomy',
    system: 'Thoracic & Pulmonology',
    guidelineAuthority: 'Bova et al. / ESC / CIRSE Catheter Thrombectomy',
    formulaDescription: 'RV Dysfunction (2) + Troponin (2) + HR≥110 (1) + SBP 90-100 (2)',
    summary: 'Identifies intermediate-high risk PE patients with >40% 30-day complication rate who benefit from urgent catheter intervention.'
  },
  {
    id: 'who_iwge_hydatid',
    name: 'WHO-IWGE Echinococcal Hydatid Cyst Classification',
    shortName: 'WHO Hydatid Classification',
    protocolIds: ['hydatid_pair'],
    protocolId: 'hydatid_pair',
    protocolNames: ['Hydatid Cyst PAIR Intervention'],
    protocolName: 'Percutaneous Hydatid Cyst PAIR Intervention',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'WHO Informal Working Group on Echinococcosis',
    formulaDescription: 'Ultrasound Morphology: CE1 to CE5 & Biliary Communication Screen',
    summary: 'Classifies cystic echinococcosis and strictly enforces PAIR candidacy (CE1/CE3a) vs. biliary fistula contraindications.'
  },
  {
    id: 'tg18_cholecystitis',
    name: 'Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity',
    shortName: 'TG18 Cholecystitis Score',
    protocolIds: ['cholecystostomy'],
    protocolId: 'cholecystostomy',
    protocolNames: ['Percutaneous Cholecystostomy (PTGBD)'],
    protocolName: 'Percutaneous Cholecystostomy (PTGBD)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Tokyo Guidelines 2018 (TG18) / WSES / SIR',
    formulaDescription: 'Organ Dysfunction (Grade III) vs. Marked Local Inflammation (Grade II) vs. Mild (Grade I)',
    summary: 'Triages critically ill and high-risk patients to emergency percutaneous transhepatic gallbladder drainage (PTGBD).'
  },
  {
    id: 'thyroid_vrr_volume',
    name: 'Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)',
    shortName: 'Thyroid Nodule VRR',
    protocolIds: ['thyroid_ablation'],
    protocolId: 'thyroid_ablation',
    protocolNames: ['Thyroid Nodule Thermal Ablation (RFA/MWA)'],
    protocolName: 'Thyroid Nodule Ultrasound-Guided Thermal Ablation (RFA / MWA)',
    system: 'Head, Neck & Endocrine',
    guidelineAuthority: 'Korean / European Thyroid Association (ETA) / CIRSE',
    formulaDescription: 'Volume = 0.5236 * L * W * D | VRR = (Initial - Post) / Initial * 100%',
    summary: 'Measures 3D ellipsoid nodule shrinkage, establishing thermal ablation therapeutic success (VRR ≥ 50%).'
  },
  {
    id: 'shock_index_hemorrhage',
    name: 'Shock Index (SI) & Age-Adjusted Shock Index (SASI)',
    shortName: 'Shock Index & SASI',
    protocolIds: ['pelvic_trauma_bleed', 'upper_gi_bleed', 'lower_gi_bleed', 'visceral_aneurysm', 'bae'],
    protocolId: 'pelvic_trauma_bleed',
    protocolNames: ['Pelvic Trauma Embolization', 'Upper GI Bleed', 'Lower GI Bleed', 'Visceral Aneurysm', 'Bronchial Artery Embolization'],
    protocolName: 'Pelvic Trauma & Emergency Bleeding Embolization',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'ATLS / SIR Emergency Trauma Embolization Guidelines',
    formulaDescription: 'SI = HR / SBP | SASI = Age * SI | rSIG = (SBP / HR) * GCS',
    summary: 'Sensitive hemodynamics metric detecting occult hemorrhagic shock (SI ≥ 0.9) and triggering Massive Transfusion Protocol (MTP).'
  },
  {
    id: 'chylothorax_lymphatic_leak',
    name: 'Chylothorax Drainage Severity & Lymphatic Leak Metric',
    shortName: 'Chylothorax Leak Metric',
    protocolIds: ['thoracic_duct_tde'],
    protocolId: 'thoracic_duct_tde',
    protocolNames: ['Thoracic Duct Embolization (TDE) for Chylothorax'],
    protocolName: 'Thoracic Duct Embolization (TDE) for Chylothorax',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'CIRSE / SIR Lymphatic Interventions Standards',
    formulaDescription: 'Daily Drainage Output (mL/24h) & Pleural Triglycerides (>110 mg/dL)',
    summary: 'Detects high-output chyle leak (>1000 mL/day) mandating emergency intranodal lymphangiography and Thoracic Duct Embolization.'
  },
  {
    id: 'vcss_score',
    name: 'Venous Clinical Severity Score (VCSS)',
    shortName: 'VCSS Score',
    protocolIds: ['varicose', 'venous_perforator', 'venous_glue'],
    protocolId: 'varicose',
    protocolNames: ['Varicose Vein Endovenous Ablation (VenaSeal / EVLA / RFA)', 'Venous Perforator Sclero-Glue'],
    protocolName: 'Varicose Vein Endovenous Ablation (VenaSeal / EVLA / RFA)',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'American Venous Forum (AVF) / SVS Guidelines',
    formulaDescription: '10 Attributes (Pain, Varices, Edema, Pigmentation, Induration, Ulcers, Compliance) scored 0-3',
    summary: 'Quantifies clinical severity of chronic venous disease and determines indications for VenaSeal glue, saphenous ablation, and perforator closure.'
  },
  {
    id: 'ceap_classification',
    name: 'CEAP Classification for Chronic Venous Disorders',
    shortName: 'CEAP Classification',
    protocolIds: ['varicose', 'venous_perforator', 'venous_glue'],
    protocolId: 'varicose',
    protocolNames: ['Varicose Vein Endovenous Ablation', 'Venous Perforator Sclero-Glue'],
    protocolName: 'Varicose Vein Endovenous Ablation (VenaSeal / EVLA / RFA)',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'International CEAP Consensus / American Venous Forum',
    formulaDescription: 'Clinical (C0-C6) + Etiologic (Ec/Ep/Es) + Anatomic (As/Ad/Ap) + Pathophysiologic (Pr/Po)',
    summary: 'Standardized staging of chronic venous disease, identifying C2-C6 candidates for endovenous laser, RFA, or VenaSeal glue intervention.'
  },
  {
    id: 'spetzler_martin_avm_grading',
    name: 'Spetzler-Martin Brain AVM Grading System',
    shortName: 'Spetzler-Martin AVM',
    protocolIds: ['neuro_avm', 'head_neck_avm'],
    protocolId: 'neuro_avm',
    protocolNames: ['Brain Arteriovenous Malformation (bAVM) Embolization'],
    protocolName: 'Brain Arteriovenous Malformation (bAVM) Embolization',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'Spetzler & Martin / AANS / SNIS Guidelines',
    formulaDescription: 'Size (<3cm: 1, 3-6cm: 2, >6cm: 3) + Eloquence (1) + Deep Venous Drainage (1)',
    summary: 'Stratifies surgical and transarterial Onyx/PHIL liquid embolization morbidity for cranial arteriovenous malformations (Grades I to V).'
  },
  {
    id: 'hunt_hess_sah_scale',
    name: 'Hunt & Hess Scale for Aneurysmal Subarachnoid Hemorrhage',
    shortName: 'Hunt & Hess Scale',
    protocolIds: ['aneurysm_coiling', 'neuro_stroke'],
    protocolId: 'aneurysm_coiling',
    protocolNames: ['Intracranial Aneurysm Coil Embolization'],
    protocolName: 'Intracranial Aneurysm Coil Embolization',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'Hunt & Hess / AHA/ASA Stroke Council Standards',
    formulaDescription: 'Clinical Severity Grades 1 to 5 based on meningismus and neurological deficit',
    summary: 'Predicts perioperative mortality and guides emergent timing of endovascular coil embolization vs. neuro-resuscitation.'
  },
  {
    id: 'budd_chiari_composite_risk',
    name: 'Budd-Chiari Composite Shunt & Collateral Embolization Risk Score',
    shortName: 'Budd-Chiari Composite Score',
    protocolIds: ['bcs', 'tips_portal_htn'],
    protocolId: 'bcs',
    protocolNames: ['Budd-Chiari Syndrome (BCS) & Post-DIPS/TIPSS/HV Stenting'],
    protocolName: 'Budd-Chiari Syndrome (BCS) & Post-DIPS/TIPSS/HV Stenting',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'EASL / AASLD / Rotterdam Budd-Chiari Consensus',
    formulaDescription: 'Rotterdam BCS-PI (Bili, INR, Ascites, Enceph) + Caudate/Right Lobe Ratio + IVC Web Matrix',
    summary: 'Multi-parametric decision engine selecting between anticoagulation, HV angioplasty/stenting, DIPS, and variceal glue/coil embolization.'
  },
  {
    id: 'michels_hepatic_anatomy',
    name: 'Michels & Hiatt Classification of Hepatic Arterial Anatomy',
    shortName: 'Hepatic Artery Anatomy (Michels)',
    protocolIds: ['tace', 'y90_tare', 'pve', 'visceral_aneurysm', 'pelvic_trauma_bleed'],
    protocolId: 'tace',
    protocolNames: ['TACE', 'Y90 Radioembolization (TARE)', 'Portal Vein Embolization (PVE)', 'Visceral Aneurysm', 'Liver Trauma Embolization'],
    protocolName: 'Transarterial Chemoembolization (TACE)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Michels / Hiatt / CIRSE Hepatic Interventions Standards',
    formulaDescription: 'Types I-X Classification: Classic, Replaced LHA (LGA), Replaced RHA (SMA), Accessory Artery Variants',
    summary: 'Essential anatomical engine preventing non-target gastric, duodenal, or jejunal infarction during TACE, TARE, and hepatic embolization.'
  },
  {
    id: 'mma_branching_csdh',
    name: 'Middle Meningeal Artery (MMA) Dangerous Anastomoses & Branching Engine',
    shortName: 'MMA Embolization & Dangerous Anastomoses',
    protocolIds: ['csdh_mma', 'head_neck_avm'],
    protocolId: 'csdh_mma',
    protocolNames: ['Chronic Subdural Hematoma (CSDH) MMA Embolization', 'Head & Neck AVM / Meningioma'],
    protocolName: 'Middle Meningeal Artery (MMA) Embolization for CSDH',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'SNIS / ASNR Standards for Meningeal Interventions',
    formulaDescription: 'Anterior/Posterior convexity branches & Dangerous Anastomoses (Ophthalmic, Facial CN VII, Cavernous ICA)',
    summary: 'Identifies critical dangerous anastomoses (meningo-ophthalmic, petrosal facial) to prevent blindness, stroke, and facial nerve palsy.'
  },
  {
    id: 'scapular_subclavian_collaterals',
    name: 'Scapular & Subclavian Arterial Collateral System (Steal Grading)',
    shortName: 'Scapular Collaterals & Subclavian Steal',
    protocolIds: ['pad_angioplasty', 'pelvic_trauma_bleed'],
    protocolId: 'pad_angioplasty',
    protocolNames: ['Subclavian & Upper Limb Angioplasty / Stenting', 'Upper Extremity Trauma Embolization'],
    protocolName: 'Subclavian & Upper Limb Arterial Stenting / Angioplasty',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'SVS / CIRSE Upper Extremity Standards',
    formulaDescription: 'Thyrocervical-Periscapular-Subscapular Arcade & Subclavian Steal Grades I-III',
    summary: 'Maps shoulder girdle collateral pathways and evaluates vertebrobasilar steal syndrome for ostial subclavian stenting.'
  },
  {
    id: 'mesenteric_collaterals_sma',
    name: 'Mesenteric & SMA Collaterals (Arc of Riolan, Buhler, Drummond)',
    shortName: 'Mesenteric Collaterals (Riolan & Buhler)',
    protocolIds: ['lower_gi_bleed', 'upper_gi_bleed', 'visceral_aneurysm', 'evar_tevar'],
    protocolId: 'lower_gi_bleed',
    protocolNames: ['Lower GI Bleed Embolization', 'Upper GI Bleed', 'Visceral Aneurysm', 'EVAR / TEVAR Aortic Repair'],
    protocolName: 'Mesenteric Ischemia & Gastrointestinal Bleed Embolization',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'CIRSE / BSG Mesenteric & GI Bleeding Standards',
    formulaDescription: 'Arc of Riolan, Marginal Artery of Drummond, Arc of Bühler, and Pancreaticoduodenal Arcades',
    summary: 'Evaluates critical mesenteric lifelines to prevent gut ischemia during EVAR, lower GI bleeding embolization, and celiac stenosis.'
  },
  {
    id: 'bismuth_corlette_biliary',
    name: 'Bismuth-Corlette Classification of Malignant Biliary Strictures',
    shortName: 'Bismuth-Corlette Biliary Classification',
    protocolIds: ['ptbd', 'cholecystostomy'],
    protocolId: 'ptbd',
    protocolNames: ['Percutaneous Transhepatic Biliary Drainage (PTBD)', 'Percutaneous Cholecystostomy'],
    protocolName: 'Percutaneous Transhepatic Biliary Drainage (PTBD) & Biliary Stenting',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Bismuth-Corlette / CIRSE / SIR Biliary Standards',
    formulaDescription: 'Types I, II, IIIa, IIIb, and IV (Stricture extension into primary & secondary confluence)',
    summary: 'Directs unilateral vs. bilateral drainage strategy and guides Y/T-stenting vs. Stent-in-Stent deployment for Klatskin tumors.'
  },
  {
    id: 'aortic_dissection_stanford_debakey',
    name: 'Stanford & DeBakey Aortic Dissection Classification & TEVAR Triage',
    shortName: 'Aortic Dissection (Stanford / DeBakey)',
    protocolIds: ['evar_tevar'],
    protocolId: 'evar_tevar',
    protocolNames: ['EVAR / TEVAR Endovascular Aortic Repair'],
    protocolName: 'Endovascular Aortic Repair (TEVAR) for Aortic Dissection',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'SVS / STS Thoracic Aortic Dissection Guidelines',
    formulaDescription: 'Stanford A/B & DeBakey I-IIIb + Malperfusion & Complicating Features Matrix',
    summary: 'Triages acute aortic syndromes between emergent open cardiac surgery and endovascular TEVAR / PETTICOAT stabilization.'
  },
  {
    id: 'pae_de_assis_anatomy',
    name: 'De Assis Prostatic Artery Classification (Types I-V Origins)',
    shortName: 'PAE Prostatic Artery Anatomy (De Assis)',
    protocolIds: ['pae'],
    protocolId: 'pae',
    protocolNames: ['Prostatic Artery Embolization (PAE) for BPH'],
    protocolName: 'Prostatic Artery Embolization (PAE) for BPH',
    system: 'Genitourinary & Pelvic',
    guidelineAuthority: 'De Assis / JVIR / CIRSE PAE Standards',
    formulaDescription: 'Types I-V (P-SVA trunk, Anterior division, Obturator, Internal Pudendal, Accessory Pudendal)',
    summary: 'Essential literature-defined arterial origin mapping for PAE preventing bladder and penile ischemic necrosis.'
  },
  {
    id: 'sarin_gastric_varices',
    name: 'Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)',
    shortName: 'Sarin Gastric Varices Classification',
    protocolIds: ['brto_parto', 'tips_portal_htn', 'upper_gi_bleed'],
    protocolId: 'brto_parto',
    protocolNames: ['BRTO / PARTO for Gastric Varices', 'TIPS for Portal HTN', 'Upper GI Bleeding'],
    protocolName: 'Balloon-Occluded Retrograde Transvenous Obliteration (BRTO / PARTO)',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Sarin / Baveno VII / AASLD Gastric Varices Consensus',
    formulaDescription: 'Gastroesophageal (GOV1/GOV2) vs. Isolated Fundal (IGV1) vs. Ectopic (IGV2)',
    summary: 'Defines endovascular intervention: BRTO/PARTO via Gastrorenal Shunt vs. TIPS + transjugular variceal coiling/glue.'
  },
  {
    id: 'forrest_peptic_ulcer',
    name: 'Forrest Classification for Peptic Ulcer Hemorrhage & TAE Triage',
    shortName: 'Forrest Peptic Ulcer Bleeding',
    protocolIds: ['upper_gi_bleed'],
    protocolId: 'upper_gi_bleed',
    protocolNames: ['Upper Gastrointestinal Bleeding (UGIB) Embolization'],
    protocolName: 'Upper Gastrointestinal Bleeding (UGIB) Embolization',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Forrest / BSG / CIRSE Upper GI Hemorrhage Standards',
    formulaDescription: 'Stages Ia, Ib, IIa, IIb, IIc, III (Spurting arterial, oozing, visible vessel, clean base)',
    summary: 'Directs emergent transcatheter arterial embolization (TAE) of GDA/LGA for high-risk endoscopic failure lesions.'
  },
  {
    id: 'sarteschi_varicocele_grading',
    name: 'Sarteschi & Dubin-Amelar Varicocele Classification',
    shortName: 'Varicocele Staging (Sarteschi / Dubin)',
    protocolIds: ['varicocele'],
    protocolId: 'varicocele',
    protocolNames: ['Varicocele Embolization'],
    protocolName: 'Varicocele Percutaneous Transcatheter Embolization',
    system: 'Genitourinary & Pelvic',
    guidelineAuthority: 'Sarteschi / EAU / CIRSE Varicocele Guidelines',
    formulaDescription: 'Grades I to V (Doppler retrograde reflux + Palpatory staging)',
    summary: 'Establishes clinical and duplex ultrasound eligibility for transvenous coil/foam sclerotherapy (Grades II-V).'
  },
  {
    id: 'cognard_borden_davf',
    name: 'Cognard & Borden Dural Arteriovenous Fistula (dAVF) Classification',
    shortName: 'dAVF Staging (Cognard / Borden)',
    protocolIds: ['neuro_avm', 'head_neck_avm', 'csdh_mma'],
    protocolId: 'neuro_avm',
    protocolNames: ['Cranial & Dural AVM/dAVF Embolization', 'Head & Neck Vascular Malformations', 'Middle Meningeal Artery Embolization'],
    protocolName: 'Cranial & Dural AVM/dAVF Embolization',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'Cognard / Borden / SNIS Guidelines for dAVF Management',
    formulaDescription: 'Types I to V based on sinus drainage direction, cortical venous reflux, venous ectasia, and spinal perimedullary drainage',
    summary: 'Stratifies aggressive intracranial hemorrhage risk (up to 65% for Type IV) and indicates emergent superselective transarterial Onyx/PHIL liquid embolization.'
  },
  {
    id: 'ishimaru_aortic_zones',
    name: 'Ishimaru Aortic Arch Landing Zones & TEVAR Debranching Suitability',
    shortName: 'Ishimaru Arch Zones (TEVAR)',
    protocolIds: ['evar_tevar'],
    protocolId: 'evar_tevar',
    protocolNames: ['Thoracic Endovascular Aortic Repair (TEVAR)', 'EVAR / TEVAR Repair'],
    protocolName: 'Thoracic Endovascular Aortic Repair (TEVAR)',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'Ishimaru / SVS / STS Thoracic Aortic Stent-Graft Guidelines',
    formulaDescription: 'Zones 0 to 4 (Ascending aorta to mid-distal descending thoracic aorta)',
    summary: 'Determines proximal landing eligibility and dictates surgical debranching (carotid-carotid, carotid-subclavian bypass) or branched/fenestrated stent-graft selection.'
  },
  {
    id: 'crawford_taaa_extent',
    name: 'Crawford-Safi Thoracoabdominal Aortic Aneurysm (TAAA) Extent Classification',
    shortName: 'Crawford TAAA Extent (I-V)',
    protocolIds: ['evar_tevar', 'visceral_aneurysm'],
    protocolId: 'evar_tevar',
    protocolNames: ['Fenestrated & Branched EVAR (FEVAR / BEVAR)', 'Visceral & Aortic Repair'],
    protocolName: 'Fenestrated & Branched EVAR (FEVAR / BEVAR)',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'Crawford & Safi / SVS Reporting Standards for TAAA',
    formulaDescription: 'Extents I, II, III, IV, and V from left subclavian origin down to iliac bifurcation',
    summary: 'Calculates spinal cord ischemia and paraplegia risk (highest in Extent II at 15-25%) and guides 4-vessel visceral branching (t-Branch / custom FEVAR) plus CSF drainage.'
  },
  {
    id: 'strasberg_biliary_injury',
    name: 'Strasberg & Bismuth Iatrogenic Bile Duct Injury Classification',
    shortName: 'Bile Duct Injury (Strasberg / Bismuth)',
    protocolIds: ['ptbd', 'cholecystostomy'],
    protocolId: 'ptbd',
    protocolNames: ['Percutaneous Transhepatic Biliary Drainage (PTBD)', 'Percutaneous Cholecystostomy'],
    protocolName: 'Percutaneous Transhepatic Biliary Drainage (PTBD) & Biliary Intervention',
    system: 'Hepatobiliary & Portal',
    guidelineAuthority: 'Strasberg / Bismuth / CIRSE Biliary Interventions Guidelines',
    formulaDescription: 'Types A-D (cystic/duct leaks) and E1-E5 (hilar strictures based on distance from confluence)',
    summary: 'Guides unilateral vs. bilateral PTBD access, transhepatic rendezvous wire traversal, and sequential large-bore balloon dilation for post-cholecystectomy injuries.'
  },
  {
    id: 'wses_solid_organ_trauma',
    name: 'WSES & AAST Solid Organ Trauma Injury Scale (Liver, Spleen, Kidney)',
    shortName: 'Organ Trauma Scale (WSES / AAST)',
    protocolIds: ['pelvic_trauma_bleed', 'pad_angioplasty'],
    protocolId: 'pelvic_trauma_bleed',
    protocolNames: ['Emergency Trauma Arterial Embolization (Liver, Spleen, Kidney, Pelvis)'],
    protocolName: 'Emergency Trauma Arterial Embolization (Liver, Spleen, Kidney, Pelvis)',
    system: 'Vascular & Arterial',
    guidelineAuthority: 'WSES / AAST / CIRSE Emergency Embolization Guidelines',
    formulaDescription: 'Grades I to V based on parenchymal disruption depth, hematoma size, and CT arterial contrast blush',
    summary: 'Directs non-operative management (NOM) vs. emergent superselective microcoil/Gelfoam embolization vs. damage control hybrid operating room intervention.'
  },
  {
    id: 'pvtt_cheng_vp_stage',
    name: 'Cheng & Japanese VP Staging for Portal Vein Tumor Thrombus (PVTT)',
    shortName: 'PVTT Staging (Vp1-Vp4)',
    protocolIds: ['tace', 'y90_tare', 'tips_portal_htn'],
    protocolId: 'tace',
    protocolNames: ['TACE for Advanced HCC', 'Y90 Radioembolization (TARE)', 'Portal Vein Stenting'],
    protocolName: 'TACE / TARE / Portal Vein Stenting for Advanced HCC with PVTT',
    system: 'Oncology & Ablation',
    guidelineAuthority: 'Cheng / EASL-EORTC / Liver Cancer Study Group of Japan (LCSGJ)',
    formulaDescription: 'Stages Vp1 (Segmental), Vp2 (2nd-order branch), Vp3 (Main trunk), Vp4 (SMV/IVC invasion)',
    summary: 'Establishes prognosis and selects between Y-90 Glass TARE (Radiation Lobectomy), TACE + Portal Stenting, or I-125 seed strand brachytherapy.'
  },
  {
    id: 'graves_renal_segmental',
    name: 'Graves Renal Artery Segmental Anatomy & Vascular Architecture',
    shortName: 'Renal Segmental Anatomy (Graves)',
    protocolIds: ['renal_angio_stent', 'pelvic_trauma_bleed'],
    protocolId: 'renal_angio_stent',
    protocolNames: ['Renal Artery Embolization / Stenting', 'PCNL Access Guidance'],
    protocolName: 'Renal Artery Embolization & Segmental Intervention',
    system: 'Genitourinary & Pelvic',
    guidelineAuthority: 'Graves / CIRSE / EAU Urological Interventions Standards',
    formulaDescription: '5 Segmental Arteries: Apical, Upper Anterior, Middle Anterior, Lower Pole, and Retropyelic Posterior',
    summary: 'Guarantees nephron-sparing superselective coil/particle embolization of angiomyolipomas (AML) and post-biopsy/trauma AVFs without sacrificing residual GFR.'
  },
  {
    id: 'lasjaunias_dangerous_connections',
    name: 'Lasjaunias Craniofacial Dangerous Arterial Anastomoses Matrix',
    shortName: 'Dangerous Anastomoses (Lasjaunias)',
    protocolIds: ['head_neck_avm', 'csdh_mma', 'neuro_avm'],
    protocolId: 'head_neck_avm',
    protocolNames: ['Head & Neck Embolization', 'MMA Embolization', 'Epistaxis Embolization'],
    protocolName: 'Head & Neck and Craniofacial Embolization Safety Engine',
    system: 'Neuro & Head/Neck',
    guidelineAuthority: 'Lasjaunias / Berenstein / SNIS Craniofacial Guidelines',
    formulaDescription: 'Critical ECA-ICA & ECA-Vertebrobasilar Shunts (Meningo-ophthalmic, Petrosal CN VII, Mandibular/Vidian, Neuromeningeal odontoid)',
    summary: 'Imperative safety guardrail to prevent catastrophic iatrogenic blindness (CRAO), cranial nerve palsies, and stroke during head/neck and meningeal embolizations.'
  },
  {
    id: 'doqi_avf_stenosis_maturation',
    name: 'KDOQI & CIRSE Dialysis AV Fistula Maturation & Stenosis Evaluator',
    shortName: 'AVF Maturation & Stenosis (KDOQI)',
    protocolIds: ['dialysis_fistuloplasty', 'central_vein_stent'],
    protocolId: 'dialysis_fistuloplasty',
    protocolNames: ['Dialysis AV Fistula Angioplasty (Fistuloplasty)', 'Central Venous Stenting'],
    protocolName: 'Dialysis Access Angioplasty & Maturation Intervention',
    system: 'Venous & Lymphatic',
    guidelineAuthority: 'KDOQI Vascular Access Guidelines / CIRSE Dialysis Standards',
    formulaDescription: 'Rule of 6s Maturation Protocol + Juxta-anastomotic, Cephalic Arch, and Central Vein Hemodynamic Thresholds',
    summary: 'Standardized criteria triggering high-pressure balloon dilation (20-30 atm), paclitaxel DCBs, and covered stent placement for salvage of dialysis circuits.'
  }
];

/**
 * Helper: Find all procedure calculators linked to a given protocol ID.
 * Supports 1 calculator being linked to multiple procedures.
 */
export function getCalculatorsForProtocol(protocolId: string): ProcedureCalculatorMeta[] {
  return PROCEDURE_CALCULATORS.filter((c) =>
    (c.protocolIds && c.protocolIds.includes(protocolId)) || c.protocolId === protocolId
  );
}

export function getCalculatorById(id: string): ProcedureCalculatorMeta | undefined {
  return PROCEDURE_CALCULATORS.find((c) => c.id === id);
}
