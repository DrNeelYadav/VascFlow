import { describe, it, expect } from 'vitest';
import {
  calculateMacd,
  calculateContrastSafety,
  calculateEgfrCkdEpi2021,
  calculateEgfrDetails,
  calculateChildPugh,
  calculateAlbi,
  calculateMeld3,
  calculateMeldNa,
  calculateBclc,
  calculateBsa,
  CIRSE_COMPLICATIONS
} from '../lib/calculators';

describe('Clinical Calculators - Formula Verification & Safety Bounds', () => {
  // -------------------------------------------------------------
  // 1. CIGARROA MAXIMUM ALLOWABLE CONTRAST DOSE (MACD)
  // -------------------------------------------------------------
  describe('Cigarroa MACD Formula Engine', () => {
    it('calculates standard MACD correctly (5 * Wt / Cr)', () => {
      // 70 kg, Cr 1.0 mg/dL => (5 * 70) / 1.0 = 350 mL
      const result = calculateMacd(70, 1.0, 100);
      expect(result.valid).toBe(true);
      expect(result.macdMl).toBe(350);
      expect(result.isExceeded).toBe(false);
      expect(result.alertLevel).toBe('safe');
    });

    it('handles extreme obesity without overflow', () => {
      // 140 kg, Cr 1.2 mg/dL => Math.round((5 * 140) / 1.2) = 583 mL
      const result = calculateMacd(140, 1.2, 200);
      expect(result.valid).toBe(true);
      expect(result.macdMl).toBe(583);
      expect(result.isExceeded).toBe(false);
    });

    it('handles severe Acute Kidney Injury (high serum creatinine)', () => {
      // 60 kg, Cr 4.0 mg/dL => (5 * 60) / 4.0 = 75 mL
      const result = calculateMacd(60, 4.0, 50);
      expect(result.valid).toBe(true);
      expect(result.macdMl).toBe(75);
      expect(result.isExceeded).toBe(false);
    });

    it('triggers critical alert when contrast administered reaches or exceeds ceiling', () => {
      // 60 kg, Cr 1.5 mg/dL => MACD = 200 mL; Given = 220 mL
      const result = calculateMacd(60, 1.5, 220);
      expect(result.valid).toBe(true);
      expect(result.macdMl).toBe(200);
      expect(result.isExceeded).toBe(true);
      expect(result.alertLevel).toBe('critical');
      expect(result.recommendation).toContain('CRITICAL ALERT');
    });

    it('detects CI-AKI risk when Contrast-to-eGFR ratio exceeds 3.7', () => {
      // Contrast 160 mL, eGFR 40 mL/min/1.73m2 => Ratio = 4.0 (> 3.7)
      const result = calculateMacd(70, 1.4, 160, 40);
      expect(result.contrastToEgfrRatio).toBe(4.0);
      expect(result.highAkiRisk).toBe(true);
      expect(result.alertLevel).toBe('warning');
      expect(result.recommendation).toContain('exceeds 3.7');
    });

    it('returns invalid structure for zero or negative values', () => {
      expect(calculateMacd(0, 1.0).valid).toBe(false);
      expect(calculateMacd(70, 0).valid).toBe(false);
      expect(calculateMacd(-60, 1.2).valid).toBe(false);
    });
  });

  // -------------------------------------------------------------
  // 2. CKD-EPI 2021 RACE-FREE eGFR
  // -------------------------------------------------------------
  describe('CKD-EPI 2021 Race-Free eGFR Engine', () => {
    it('calculates eGFR for young male with normal serum creatinine (Scr <= 0.9)', () => {
      // Male, Cr 0.8, Age 25
      const egfr = calculateEgfrCkdEpi2021(0.8, 25, false);
      expect(egfr).toBeGreaterThan(100);
      expect(typeof egfr).toBe('number');
    });

    it('calculates eGFR for male with elevated serum creatinine (Scr > 0.9)', () => {
      // Male, Cr 1.6, Age 60
      const egfr = calculateEgfrCkdEpi2021(1.6, 60, false);
      expect(egfr).toBeLessThan(60);
      expect(egfr).toBeGreaterThan(30);
    });

    it('calculates eGFR for female with Scr <= 0.7 incorporating female multiplier', () => {
      // Female, Cr 0.6, Age 40
      const egfr = calculateEgfrCkdEpi2021(0.6, 40, true);
      expect(egfr).toBeGreaterThan(95);
    });

    it('calculates eGFR for female with Scr > 0.7', () => {
      // Female, Cr 1.5, Age 65
      const egfr = calculateEgfrCkdEpi2021(1.5, 65, true);
      expect(egfr).toBeLessThan(45);
    });

    it('safely handles zero or negative values', () => {
      expect(calculateEgfrCkdEpi2021(0, 50, false)).toBe(0);
      expect(calculateEgfrCkdEpi2021(1.2, 0, false)).toBe(0);
    });
  });

  // -------------------------------------------------------------
  // 3. CHILD-PUGH SCORE & CIRRHOSIS CLASS
  // -------------------------------------------------------------
  describe('Child-Pugh Score & Class Engine', () => {
    it('assigns minimum points (Class A, Score 5) for perfectly compensated labs', () => {
      // Bili 1.0 (<2.0 = 1 pt), Alb 4.0 (>3.5 = 1 pt), INR 1.1 (<1.7 = 1 pt), Ascites None (1 pt), Enceph None (1 pt)
      const res = calculateChildPugh(1.0, 4.0, 1.1, 1, 1);
      expect(res.score).toBe(5);
      expect(res.classGrade).toBe('A');
      expect(res.oneYearSurvival).toBe('100%');
      expect(res.twoYearSurvival).toBe('85%');
    });

    it('correctly stratifies Class B boundaries (Scores 7 to 9)', () => {
      // Bili 2.5 (2 pts), Alb 3.0 (2 pts), INR 1.9 (2 pts), Ascites None (1 pt), Enceph None (1 pt) => 8 pts
      const res = calculateChildPugh(2.5, 3.0, 1.9, 1, 1);
      expect(res.score).toBe(8);
      expect(res.classGrade).toBe('B');
      expect(res.recommendation).toContain('Moderately compromised');
    });

    it('correctly stratifies Class C (Score >= 10) decompensation', () => {
      // Bili 4.2 (3 pts), Alb 2.2 (3 pts), INR 2.5 (3 pts), Ascites Moderate (3 pts), Enceph Grade 3-4 (3 pts) => 15 pts
      const res = calculateChildPugh(4.2, 2.2, 2.5, 3, 3);
      expect(res.score).toBe(15);
      expect(res.classGrade).toBe('C');
      expect(res.oneYearSurvival).toBe('45%');
      expect(res.recommendation).toContain('Decompensated cirrhosis');
    });
  });

  // -------------------------------------------------------------
  // 4. ALBI SCORE & GRADE (ALBUMIN-BILIRUBIN)
  // -------------------------------------------------------------
  describe('ALBI Score & Grade Engine', () => {
    it('assigns Grade 1 for low bilirubin and normal albumin (score <= -2.60)', () => {
      // Bili 0.8 mg/dL, Alb 4.2 g/dL
      const res = calculateAlbi(0.8, 4.2);
      expect(res.grade).toBe(1);
      expect(res.score).toBeLessThanOrEqual(-2.60);
      expect(res.recommendation).toContain('Low hepatic risk');
    });

    it('assigns Grade 2 for intermediate liver reserve (-2.60 < score <= -1.39)', () => {
      // Bili 2.2 mg/dL, Alb 3.0 g/dL
      const res = calculateAlbi(2.2, 3.0);
      expect(res.grade).toBe(2);
      expect(res.score).toBeGreaterThan(-2.60);
      expect(res.score).toBeLessThanOrEqual(-1.39);
      expect(res.recommendation).toContain('Intermediate liver reserve');
    });

    it('assigns Grade 3 for severe dysfunction (score > -1.39)', () => {
      // Bili 5.0 mg/dL, Alb 2.2 g/dL
      const res = calculateAlbi(5.0, 2.2);
      expect(res.grade).toBe(3);
      expect(res.score).toBeGreaterThan(-1.39);
      expect(res.recommendation).toContain('Severe liver dysfunction');
    });

    it('handles zero inputs gracefully', () => {
      const res = calculateAlbi(0, 0);
      expect(res.recommendation).toBe('Invalid inputs');
    });
  });

  // -------------------------------------------------------------
  // 5. MELD 3.0 SCORE
  // -------------------------------------------------------------
  describe('MELD 3.0 Score Engine', () => {
    it('applies the 1.33 point female bonus correctly', () => {
      const maleScore = calculateMeld3(1.5, 1.2, 1.3, 136, 3.4, false).score;
      const femaleScore = calculateMeld3(1.5, 1.2, 1.3, 136, 3.4, true).score;

      // Female score must be higher by approximately 1-2 rounded points due to +1.33 female coefficient
      expect(femaleScore).toBeGreaterThanOrEqual(maleScore);
      expect(femaleScore - maleScore).toBeLessThanOrEqual(2);
    });

    it('enforces MELD floor of 6 and ceiling of 40', () => {
      // Extremely low values clamped to floor 6
      const minScore = calculateMeld3(0.5, 0.4, 0.9, 140, 4.5, false).score;
      expect(minScore).toBeGreaterThanOrEqual(6);

      // Extreme liver failure clamped to ceiling 40
      const maxScore = calculateMeld3(25.0, 5.0, 4.0, 120, 1.5, true).score;
      expect(maxScore).toBeLessThanOrEqual(40);
      expect(maxScore).toBeGreaterThanOrEqual(30);
    });

    it('identifies high 90-day mortality risk (MELD > 24)', () => {
      const res = calculateMeld3(4.0, 2.5, 2.4, 128, 2.5, false);
      expect(res.score).toBeGreaterThan(24);
      expect(res.mortality90Day).toBe('> 50%');
      expect(res.tipsRecommendation).toContain('High 90-day mortality risk');
    });
  });

  // -------------------------------------------------------------
  // 6. CONTRAST SAFETY LEGACY ALIAS & KDIGO eGFR DETAILS
  // -------------------------------------------------------------
  describe('Contrast Safety & KDIGO Staging Engine', () => {
    it('legacy calculateContrastSafety matches calculateMacd results', () => {
      const legacy = calculateContrastSafety(70, 1.0, 150, 60);
      expect(legacy.valid).toBe(true);
      expect(legacy.macd).toBe(350);
      expect(legacy.contrastGiven).toBe(150);
      expect(legacy.isExceeded).toBe(false);
    });

    it('stratifies KDIGO stages and delivers CI-AKI guidance', () => {
      // High Cr -> Stage G4/G5
      const severe = calculateEgfrDetails(3.5, 65, false);
      expect(severe.valid).toBe(true);
      expect(['G4', 'G5']).toContain(severe.stageCode);
      expect(severe.riskLevel).toBe('high');
      expect(severe.contrastAdvice).toContain('CI-AKI');

      // Normal Cr -> Stage G1
      const normal = calculateEgfrDetails(0.8, 28, false);
      expect(normal.valid).toBe(true);
      expect(normal.stageCode).toBe('G1');
      expect(normal.riskLevel).toBe('low');
    });
  });

  // -------------------------------------------------------------
  // 7. MELD-Na LEGACY ENGINE
  // -------------------------------------------------------------
  describe('Legacy MELD-Na Engine', () => {
    it('computes standard MELD-Na within safety limits', () => {
      const res = calculateMeldNa(2.0, 1.5, 1.4, 132);
      expect(res.valid).toBe(true);
      expect(res.meldNa).toBeGreaterThanOrEqual(6);
      expect(res.meldNa).toBeLessThanOrEqual(40);
    });

    it('flags high mortality when MELD-Na > 25', () => {
      const res = calculateMeldNa(12.0, 3.0, 3.0, 126);
      expect(res.valid).toBe(true);
      expect(res.meldNa).toBeGreaterThan(25);
      expect(res.tipsEligibility).toContain('CONTRAINDICATED');
    });
  });

  // -------------------------------------------------------------
  // 8. BCLC 2022 HEPATOCELLULAR CARCINOMA STAGING
  // -------------------------------------------------------------
  describe('BCLC 2022 Staging Engine', () => {
    it('categorizes Child-Pugh C as Stage D (Terminal)', () => {
      const res = calculateBclc(1, 2.0, false, false, 'C', 0);
      expect(res.stage).toBe('D');
      expect(res.taceCandidate).toBe(false);
      expect(res.treatment).toContain('Best supportive care');
    });

    it('categorizes solitary small nodule as Stage 0 (Very Early)', () => {
      const res = calculateBclc(1, 1.8, false, false, 'A', 0);
      expect(res.stage).toBe('0');
      expect(res.taceCandidate).toBe(false);
      expect(res.treatment).toContain('resection');
    });

    it('categorizes intermediate multinodular HCC as Stage B (Ideal TACE candidate)', () => {
      // 4 nodules or tumor > 3cm without vascular invasion, ECOG 0, Child-Pugh A
      const res = calculateBclc(4, 4.5, false, false, 'A', 0);
      expect(res.stage).toBe('B');
      expect(res.taceCandidate).toBe(true);
      expect(res.treatment).toContain('Transarterial Chemoembolization');
    });

    it('categorizes portal vein invasion as Stage C (Advanced, Systemic)', () => {
      const res = calculateBclc(2, 3.0, true, false, 'A', 0);
      expect(res.stage).toBe('C');
      expect(res.taceCandidate).toBe(false);
      expect(res.treatment).toContain('Systemic therapy');
    });
  });

  // -------------------------------------------------------------
  // 9. MOSTELLER BSA & DOXORUBICIN DOSING FOR TACE
  // -------------------------------------------------------------
  describe('Mosteller BSA & TACE Doxorubicin Dosing Engine', () => {
    it('computes BSA and 50 mg/m2 standard dose for 70 kg, 175 cm', () => {
      // BSA = sqrt((70 * 175) / 3600) = sqrt(3.40277) = 1.84 m2
      const res = calculateBsa(70, 175);
      expect(res.valid).toBe(true);
      expect(res.bsaM2).toBe(1.84);
      expect(res.doxorubicinStandardDoseMg).toBe(92); // 1.8446 * 50 = 92 mg
      expect(res.doxorubicinReducedDoseMg).toBe(46);  // 1.8446 * 25 = 46 mg
    });

    it('gracefully handles invalid zero/negative values', () => {
      const res = calculateBsa(0, 175);
      expect(res.valid).toBe(false);
      expect(res.bsaM2).toBe(0);
    });
  });

  // -------------------------------------------------------------
  // 10. CIRSE COMPLICATIONS CLASSIFICATION METADATA
  // -------------------------------------------------------------
  describe('CIRSE Classification Verification', () => {
    it('contains all 6 standard CIRSE severity grades', () => {
      expect(CIRSE_COMPLICATIONS.length).toBe(6);
      expect(CIRSE_COMPLICATIONS[0].grade).toBe(1);
      expect(CIRSE_COMPLICATIONS[5].grade).toBe(6);
      expect(CIRSE_COMPLICATIONS[5].title).toContain('Death');
    });
  });
});
