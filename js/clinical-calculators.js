/**
 * SMS Jaipur - Interventional Radiology Clinical Calculators & Safety Guardrails
 * 
 * Includes:
 * 1. Maximum Allowable Contrast Dose (MACD - Cigarroa Equation)
 * 2. Contrast-to-eGFR Ratio (CI-AKI Risk Stratifier)
 * 3. Child-Pugh Score & Class (A/B/C) for TACE/TIPS
 * 4. ALBI Score (Albumin-Bilirubin Grade) for Liver Reserve
 * 5. MELD 3.0 Score for TIPS & Biliary Candidates
 * 6. CIRSE Complication Grading Classification
 */

const IR_CALCULATORS = {
  // 1. Contrast Safety & MACD
  calculateContrastSafety: (weightKg, creatinineMgDl, contrastVolMl, egfr) => {
    if (!weightKg || !creatinineMgDl || creatinineMgDl <= 0) {
      return { valid: false, message: "Enter valid Weight and Serum Creatinine." };
    }

    // Cigarroa Equation: MACD = 5 x Weight (kg) / Sr. Creatinine (mg/dL)
    const macd = Math.round((5 * weightKg) / creatinineMgDl);
    const contrastGiven = parseFloat(contrastVolMl) || 0;
    const isExceeded = contrastGiven > macd;
    const ratio = egfr && egfr > 0 ? (contrastGiven / egfr).toFixed(2) : null;
    const highAkiRisk = ratio && ratio > 3.7;

    return {
      valid: true,
      macd: macd,
      contrastGiven: contrastGiven,
      isExceeded: isExceeded,
      contrastToEgfrRatio: ratio,
      highAkiRisk: highAkiRisk,
      recommendation: isExceeded 
        ? `[ALERT] Contrast volume (${contrastGiven} ml) EXCEEDS Maximum Allowable Dose (${macd} ml). Ensure aggressive IV hydration (1 ml/kg/h NS pre/post).`
        : `[NORMAL] Contrast dose within allowable limit (${macd} ml).`
    };
  },

  // 2. Child-Pugh Score
  calculateChildPugh: (bili, alb, inr, ascites, enceph) => {
    let score = 0;

    // Bilirubin (mg/dL)
    if (bili < 2.0) score += 1;
    else if (bili <= 3.0) score += 2;
    else score += 3;

    // Albumin (g/dL)
    if (alb > 3.5) score += 1;
    else if (alb >= 2.8) score += 2;
    else score += 3;

    // INR
    if (inr < 1.7) score += 1;
    else if (inr <= 2.2) score += 2;
    else score += 3;

    // Ascites
    score += parseInt(ascites) || 1;

    // Encephalopathy
    score += parseInt(enceph) || 1;

    let grade = "Class A (5-6 points: Well-compensated, TACE ideal)";
    if (score >= 7 && score <= 9) grade = "Class B (7-9 points: Significant functional compromise, cautious superselective TACE)";
    else if (score >= 10) grade = "Class C (10-15 points: Decompensated, TACE Contraindicated - High liver failure risk)";

    return { score, grade };
  },

  // 3. ALBI Score (Albumin-Bilirubin Grade)
  calculateALBI: (biliMgDl, albGDl) => {
    if (!biliMgDl || !albGDl) return null;
    const biliUmol = biliMgDl * 17.1; // mg/dL to umol/L
    const albGL = albGDl * 10;        // g/dL to g/L

    const albi = (Math.log10(biliUmol) * 0.66) + (albGL * -0.085);
    const score = albi.toFixed(2);

    let grade = "Grade 1 (Score ≤ -2.60: Best median survival, ideal for TACE/Resection)";
    if (albi > -2.60 && albi <= -1.39) grade = "Grade 2 (Score -2.60 to -1.39: Intermediate reserve)";
    else if (albi > -1.39) grade = "Grade 3 (Score > -1.39: Poor hepatic reserve, high post-TACE decompensation risk)";

    return { score, grade };
  },

  // 4. CIRSE Classification of Complications
  cirseClassification: [
    { grade: 1, text: "Grade 1: No therapy, no consequence; resolved spontaneously (e.g. minor groin ecchymosis)" },
    { grade: 2, text: "Grade 2: Nominal therapy, no consequence; includes overnight observation only (e.g. minor groin hematoma)" },
    { grade: 3, text: "Grade 3: Requires additional therapy, minor hospitalization (<48 hrs) (e.g. pseudoaneurysm requiring USG thrombin injection)" },
    { grade: 4, text: "Grade 4: Requires major therapy, unplanned increase in level of care/ICU admission (e.g. non-target embolization requiring stenting/coiling)" },
    { grade: 5, text: "Grade 5: Permanent adverse sequelae or organ loss" },
    { grade: 6, text: "Grade 6: Death" }
  ],

  // 5. MELD 3.0 Score (for TIPS & Biliary / Transplant Candidates)
  calculateMELD: (biliMgDl, creatinineMgDl, inr, sodiumMeqL, isFemale = false) => {
    if (!biliMgDl || !creatinineMgDl || !inr) {
      return { valid: false, message: "Enter Bilirubin, Creatinine, and INR." };
    }

    // Clamp values per MELD 3.0 formula
    let bili = Math.max(1.0, biliMgDl);
    let cr = Math.max(1.0, Math.min(3.0, creatinineMgDl));
    let inrVal = Math.max(1.0, inr);
    let na = sodiumMeqL ? Math.max(125, Math.min(137, sodiumMeqL)) : 137;

    // MELD-Na formula: 0.957 × ln(Cr) + 0.378 × ln(Bili) + 1.120 × ln(INR) + 0.643
    // Then multiply by 10 and round
    let meldBase = (0.957 * Math.log(cr) + 0.378 * Math.log(bili) + 1.120 * Math.log(inrVal) + 0.643) * 10;
    meldBase = Math.round(meldBase);
    if (meldBase > 11) meldBase = meldBase + 1.32 * (137 - na) - (0.033 * meldBase * (137 - na));
    let meldNa = Math.round(Math.max(6, Math.min(40, meldBase)));

    // MELD 3.0 adjustment for sex
    let meld3 = meldNa;
    if (isFemale) meld3 = Math.round(meldNa + 1.33 * (isFemale ? 1 : 0));

    let mortality3Mo = "< 2%";
    if (meld3 >= 40) mortality3Mo = "> 70%";
    else if (meld3 >= 30) mortality3Mo = "50-70%";
    else if (meld3 >= 20) mortality3Mo = "20-50%";
    else if (meld3 >= 10) mortality3Mo = "6-20%";

    let tipsEligibility = "Suitable for TIPS";
    if (meld3 > 18) tipsEligibility = "[CAUTION] High risk for TIPS (MELD > 18 = increased post-TIPS mortality)";
    if (meld3 > 25) tipsEligibility = "[CONTRAINDICATED] TIPS contraindicated in most centers (MELD > 25)";

    return {
      valid: true,
      meldNa: meldNa,
      meld3: meld3,
      mortality3Mo: mortality3Mo,
      tipsEligibility: tipsEligibility
    };
  },

  // 6. eGFR Calculator (CKD-EPI 2021 Race-Free Equation)
  calculateEGFR: (creatinineMgDl, ageYears, isFemale = false) => {
    if (!creatinineMgDl || !ageYears || creatinineMgDl <= 0 || ageYears <= 0) {
      return { valid: false, message: "Enter valid Creatinine and Age." };
    }

    const cr = creatinineMgDl;
    let kappa, alpha, multiplier;

    if (isFemale) {
      kappa = 0.7;
      alpha = -0.241;
      multiplier = 142;
    } else {
      kappa = 0.9;
      alpha = -0.302;
      multiplier = 142;
    }

    const crKappaRatio = cr / kappa;
    const minRatio = Math.min(crKappaRatio, 1);
    const maxRatio = Math.max(crKappaRatio, 1);

    let egfr = multiplier * Math.pow(minRatio, alpha) * Math.pow(maxRatio, -1.200) * Math.pow(0.9938, ageYears);
    if (isFemale) egfr *= 1.012;

    egfr = Math.round(egfr);

    let ckdStage = "G1 (Normal, ≥90)";
    if (egfr < 15) ckdStage = "G5 (Kidney Failure, <15) — Dialysis likely";
    else if (egfr < 30) ckdStage = "G4 (Severely Decreased, 15-29)";
    else if (egfr < 45) ckdStage = "G3b (Moderately-Severely Decreased, 30-44)";
    else if (egfr < 60) ckdStage = "G3a (Mildly-Moderately Decreased, 45-59)";
    else if (egfr < 90) ckdStage = "G2 (Mildly Decreased, 60-89)";

    let contrastAdvice = "Standard contrast protocol";
    if (egfr < 30) contrastAdvice = "[HIGH CI-AKI RISK] Minimize contrast, consider CO2 angiography, aggressive pre/post hydration (1 mL/kg/hr NS x 12h)";
    else if (egfr < 45) contrastAdvice = "[MODERATE CI-AKI RISK] Pre-hydrate with NS (1 mL/kg/hr x 6h pre + 6h post), use iso-osmolar contrast, avoid repeat within 48h";
    else if (egfr < 60) contrastAdvice = "Mild risk: Standard pre-hydration, limit contrast volume";

    return {
      valid: true,
      egfr: egfr,
      ckdStage: ckdStage,
      contrastAdvice: contrastAdvice
    };
  },

  // 7. BCLC Staging (Barcelona Clinic Liver Cancer)
  calculateBCLC: (tumorCount, maxTumorSizeCm, hasVascularInvasion, hasExtrahepatic, childPughClass, ecogPS) => {
    // BCLC 2022 Updated Algorithm
    if (ecogPS > 2 || childPughClass === 'C') {
      return { stage: "D", name: "Terminal", treatment: "Best Supportive Care only. TACE contraindicated." };
    }
    if (hasVascularInvasion || hasExtrahepatic || ecogPS >= 1) {
      return { stage: "C", name: "Advanced", treatment: "Systemic therapy (Atezolizumab + Bevacizumab / Sorafenib / Lenvatinib). TACE not standard." };
    }
    if (tumorCount === 1 && maxTumorSizeCm <= 2) {
      return { stage: "0", name: "Very Early", treatment: "Resection / RFA / Liver Transplant (Milan)." };
    }
    if (tumorCount <= 3 && maxTumorSizeCm <= 3) {
      return { stage: "A", name: "Early", treatment: "Resection / RFA / Transplant. TACE if not surgical candidate." };
    }
    return { stage: "B", name: "Intermediate", treatment: "TACE (cTACE / DEB-TACE) is first-line standard. Reassess after 2 sessions (mRECIST)." };
  },

  // 8. Body Surface Area (Mosteller Formula) — for Doxorubicin dosing in TACE
  calculateBSA: (weightKg, heightCm) => {
    if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) return null;
    const bsa = Math.sqrt((weightKg * heightCm) / 3600);
    return {
      bsa: bsa.toFixed(2),
      doxorubicinDose: Math.round(bsa * 50) + " mg (at 50 mg/m²)",
      doxorubicinDoseReduced: Math.round(bsa * 25) + " mg (at 25 mg/m² for Bilirubin 1.5-3.0)"
    };
  }
};
