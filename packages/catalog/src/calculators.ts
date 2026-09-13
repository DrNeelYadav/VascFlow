/**
 * Clinical Prognostic & Risk Calculators for Interventional Radiology
 * Department of Interventional Radiology, SMS Medical College, Jaipur
 * Zero-division guarded, mathematically pure functions
 */

export interface RotterdamResult {
  score: number;
  riskClass: "Class I" | "Class II" | "Class III";
  riskLevel: "Low Risk" | "Intermediate Risk" | "High Risk";
  oneYrSurvival: string;
  fiveYrSurvival: string;
  recommendation: string;
  bilirubinUmol: number;
}

export function calculateRotterdam(params: {
  enceph?: number; // 0 or 1
  ascites?: number; // 0 or 1
  ptRatio?: number; // INR or PT ratio
  bilirubinMg?: number; // mg/dL
}): RotterdamResult {
  const enceph = params.enceph ? 1 : 0;
  const ascites = params.ascites ? 1 : 0;
  const ptRatio = Math.max(0.8, params.ptRatio ?? 1.0);
  const bilirubinMg = Math.max(0.1, params.bilirubinMg ?? 1.0);
  const bilirubinUmol = Number((bilirubinMg * 17.1).toFixed(1));

  const score = Number(
    (
      1.27 * enceph +
      1.04 * ascites +
      0.72 * ptRatio +
      0.004 * bilirubinUmol
    ).toFixed(2)
  );

  if (score > 1.5) {
    return {
      score,
      riskClass: "Class III",
      riskLevel: "High Risk",
      oneYrSurvival: "<20%–40%",
      fiveYrSurvival: "~42%",
      recommendation:
        "Medical therapy predicted to FAIL. Urgent endovascular decompression (TIPS/DIPS) strongly indicated!",
      bilirubinUmol,
    };
  }

  if (score >= 1.1) {
    return {
      score,
      riskClass: "Class II",
      riskLevel: "Intermediate Risk",
      oneYrSurvival: "84%",
      fiveYrSurvival: "74%",
      recommendation:
        "Monitor response to 2-week medical therapy. Step up to angioplasty/TIPS if refractory.",
      bilirubinUmol,
    };
  }

  return {
    score,
    riskClass: "Class I",
    riskLevel: "Low Risk",
    oneYrSurvival: "96%",
    fiveYrSurvival: "89%",
    recommendation:
      "Favorable prognosis. Responsive to medical therapy or simple balloon venoplasty.",
    bilirubinUmol,
  };
}

export interface ClichyResult {
  score: number;
  riskGroup: "Low Risk (Favorable)" | "High Risk (Poor)";
  expectedOneYrSurvival: string;
  recommendation: string;
}

export function calculateClichy(params: {
  age?: number;
  bilirubinMg?: number;
  alt?: number;
  creatinineMg?: number;
}): ClichyResult {
  const age = Math.max(1, params.age ?? 35);
  const bilirubinUmol = Math.max(1.0, (params.bilirubinMg ?? 1.0) * 17.1);
  const alt = Math.max(5.0, params.alt ?? 40.0);
  const creatinineUmol = Math.max(10.0, (params.creatinineMg ?? 0.9) * 88.4);

  const score = Number(
    (
      0.08 * age +
      0.02 * bilirubinUmol +
      0.003 * alt +
      0.01 * creatinineUmol
    ).toFixed(2)
  );

  if (score >= 5.4) {
    return {
      score,
      riskGroup: "High Risk (Poor)",
      expectedOneYrSurvival: "~40%",
      recommendation:
        "Poor medical response. Prompt endovascular shunt creation (TIPS/DIPS) warranted.",
    };
  }

  return {
    score,
    riskGroup: "Low Risk (Favorable)",
    expectedOneYrSurvival: "> 90%",
    recommendation:
      "Favorable response to anticoagulation and diuretic therapy.",
  };
}

export interface MeldResult {
  meldScore: number;
  threeMonthMortality: string;
}

export function calculateMeld3(params: {
  creatinine: number;
  bilirubin: number;
  inr: number;
  sodium?: number;
  albumin?: number;
  isFemale?: boolean;
}): MeldResult {
  const cr = Math.min(4.0, Math.max(1.0, params.creatinine));
  const bili = Math.max(1.0, params.bilirubin);
  const inr = Math.max(1.0, params.inr);
  const na = Math.min(137, Math.max(125, params.sodium ?? 135));
  const alb = Math.min(4.0, Math.max(1.0, params.albumin ?? 3.5));

  // MELD 3.0 Formula
  let score =
    1.33 * (params.isFemale ? 1 : 0) +
    4.56 * Math.log(bili) +
    0.82 * (137 - na) -
    0.24 * (137 - na) * Math.log(bili) +
    9.09 * Math.log(inr) +
    11.14 * Math.log(cr) +
    1.85 * (3.5 - alb) -
    1.83 * (3.5 - alb) * Math.log(cr) +
    6.0;

  const meldScore = Math.min(40, Math.max(6, Math.round(score)));

  let threeMonthMortality = "< 2%";
  if (meldScore > 30) threeMonthMortality = "> 50%";
  else if (meldScore > 20) threeMonthMortality = "20% - 50%";
  else if (meldScore > 14) threeMonthMortality = "6% - 20%";

  return { meldScore, threeMonthMortality };
}

export interface ChildPughResult {
  score: number;
  grade: "Class A" | "Class B" | "Class C";
  oneYrSurvival: string;
}

export function calculateChildPugh(params: {
  bilirubinMg: number;
  albuminGdl: number;
  inr: number;
  ascites: "None" | "Slight/Controlled" | "Moderate/Tense";
  encephalopathy: "None" | "Grade 1-2" | "Grade 3-4";
}): ChildPughResult {
  let score = 0;

  // Bilirubin
  if (params.bilirubinMg < 2.0) score += 1;
  else if (params.bilirubinMg <= 3.0) score += 2;
  else score += 3;

  // Albumin
  if (params.albuminGdl > 3.5) score += 1;
  else if (params.albuminGdl >= 2.8) score += 2;
  else score += 3;

  // INR
  if (params.inr < 1.7) score += 1;
  else if (params.inr <= 2.2) score += 2;
  else score += 3;

  // Ascites
  if (params.ascites === "None") score += 1;
  else if (params.ascites === "Slight/Controlled") score += 2;
  else score += 3;

  // Encephalopathy
  if (params.encephalopathy === "None") score += 1;
  else if (params.encephalopathy === "Grade 1-2") score += 2;
  else score += 3;

  let grade: "Class A" | "Class B" | "Class C" = "Class A";
  let oneYrSurvival = "100%";

  if (score >= 10) {
    grade = "Class C";
    oneYrSurvival = "45%";
  } else if (score >= 7) {
    grade = "Class B";
    oneYrSurvival = "80%";
  }

  return { score, grade, oneYrSurvival };
}

export function calculateCigarroaMACD(weightKg: number, serumCrMgDl: number): {
  macdMl: number;
  safeLimit80Percent: number;
  isSafe: (injectedMl: number) => boolean;
} {
  const safeWeight = Math.max(10, weightKg);
  const safeCr = Math.max(0.4, serumCrMgDl);

  const macdMl = Number(((5 * safeWeight) / safeCr).toFixed(1));
  const safeLimit80Percent = Number((macdMl * 0.8).toFixed(1));

  return {
    macdMl,
    safeLimit80Percent,
    isSafe: (injected: number) => injected <= macdMl,
  };
}

export function calculateEgfrCkdEpi(
  serumCrMgDl: number,
  ageYears: number,
  isFemale: boolean = false
): {
  egfr: number;
  stage: "G1" | "G2" | "G3a" | "G3b" | "G4" | "G5";
  description: string;
} {
  const cr = Math.max(0.2, serumCrMgDl);
  const age = Math.max(18, ageYears);

  const kappa = isFemale ? 0.7 : 0.9;
  const alpha = isFemale ? -0.241 : -0.302;
  const genderFactor = isFemale ? 1.012 : 1.0;

  const crDivKappa = cr / kappa;
  const minPart = Math.pow(Math.min(crDivKappa, 1), alpha);
  const maxPart = Math.pow(Math.max(crDivKappa, 1), -1.2);
  const agePart = Math.pow(0.9938, age);

  const egfr = Math.round(142 * minPart * maxPart * agePart * genderFactor);

  let stage: "G1" | "G2" | "G3a" | "G3b" | "G4" | "G5" = "G1";
  let description = "Normal or high GFR";

  if (egfr < 15) {
    stage = "G5";
    description = "Kidney failure";
  } else if (egfr < 30) {
    stage = "G4";
    description = "Severely decreased GFR";
  } else if (egfr < 45) {
    stage = "G3b";
    description = "Moderately to severely decreased GFR";
  } else if (egfr < 60) {
    stage = "G3a";
    description = "Mildly to moderately decreased GFR";
  } else if (egfr < 90) {
    stage = "G2";
    description = "Mildly decreased GFR";
  }

  return { egfr, stage, description };
}
