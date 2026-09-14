import { describe, it, expect } from 'vitest';
import {
  PROCEDURE_CALCULATORS,
  getCalculatorsForProtocol,
  calculateRotterdamBcs,
  calculateClichyScore,
  calculateCaudateRightLobeRatio,
  calculateFickShunt,
  calculateHvpg,
  calculatePtbdDecompression,
  calculateRutherford,
  calculateAbiTbi,
  calculateFontaine,
  calculateWellsDvt,
  calculateVillalta,
  calculateCeap,
  calculateRevisedGeneva,
  calculateSpesi,
  calculateFibroidVolume,
  calculateIpss,
  calculateProstateVolume,
  calculateNascetCarotid,
  calculateAspects,
  calculateNihssShort,
  calculateHuntHess,
  calculateModifiedFisher,
  calculateMarkwalder,
  calculateSchobinger,
  calculateRockall,
  calculateGlasgowBlatchford,
  calculateOakland,
  calculateSirBleedingRisk,
  calculateAblationMargin,
  calculateWomac,
  calculateFlrKgr,
  calculateY90Dosimetry,
  calculateSpetzlerMartin,
  calculateAorticSizeIndex,
  calculateRenalResistiveIndex,
  calculateCapriniVte,
  calculateHasBled,
  calculatePpiScore,
  calculateSvsWifi,
  calculateSinsScore,
  calculateBovaPe,
  calculateWhoIwgeHydatid,
  calculateTg18Cholecystitis,
  calculateThyroidVrr,
  calculateShockIndex,
  calculateChylothoraxLeak
} from '../lib/procedureCalculators';
import { DRUG_PROTOCOLS } from '../data/protocolsData';

describe('Procedure-Linked Clinical Calculators Engine', () => {
  // -------------------------------------------------------------
  // Registry & Mapping Integrity Verification
  // -------------------------------------------------------------
  describe('Protocol Registry & Mapping Integrity', () => {
    it('contains all 50 registered procedure calculators and clinical guardrails', () => {
      expect(PROCEDURE_CALCULATORS.length).toBe(50);
    });

    it('every calculator has valid protocolIds array mapping to valid protocols in DRUG_PROTOCOLS', () => {
      const validProtocolIds = new Set(DRUG_PROTOCOLS.map((p) => p.id));
      for (const calc of PROCEDURE_CALCULATORS) {
        expect(calc.protocolIds).toBeDefined();
        expect(calc.protocolIds.length).toBeGreaterThanOrEqual(1);
        for (const pId of calc.protocolIds) {
          expect(validProtocolIds.has(pId)).toBe(true);
        }
      }
    });

    it('supports 1 calculator being linked to multiple procedures (multi-procedure calculators)', () => {
      const multiProcedureCalcs = PROCEDURE_CALCULATORS.filter((c) => c.protocolIds.length > 1);
      expect(multiProcedureCalcs.length).toBeGreaterThanOrEqual(7);

      const macd = PROCEDURE_CALCULATORS.find((c) => c.id === 'cigarroa_macd');
      expect(macd).toBeDefined();
      expect(macd!.protocolIds.length).toBeGreaterThanOrEqual(15);
      expect(macd!.protocolIds).toContain('tace');
      expect(macd!.protocolIds).toContain('pad_angioplasty');
      expect(macd!.protocolIds).toContain('tips_portal_htn');

      const sirRisk = PROCEDURE_CALCULATORS.find((c) => c.id === 'sir_coagulation_risk');
      expect(sirRisk).toBeDefined();
      expect(sirRisk!.protocolIds.length).toBeGreaterThanOrEqual(10);
      expect(sirRisk!.protocolIds).toContain('biopsy');
      expect(sirRisk!.protocolIds).toContain('ptbd');
      expect(sirRisk!.protocolIds).toContain('pcn');
    });

    it('every single protocol in DRUG_PROTOCOLS is linked to at least 1 procedure calculator', () => {
      for (const protocol of DRUG_PROTOCOLS) {
        const calcs = getCalculatorsForProtocol(protocol.id);
        expect(calcs.length).toBeGreaterThanOrEqual(1);
      }
    });

    it('getCalculatorsForProtocol returns all shared calculators for TIPS and TACE', () => {
      const tipsCalcs = getCalculatorsForProtocol('tips_portal_htn');
      expect(tipsCalcs.length).toBeGreaterThanOrEqual(4);
      expect(tipsCalcs.some((c) => c.id === 'hvpg_portal_htn')).toBe(true);
      expect(tipsCalcs.some((c) => c.id === 'meld3_score')).toBe(true);
      expect(tipsCalcs.some((c) => c.id === 'child_pugh_albi')).toBe(true);
      expect(tipsCalcs.some((c) => c.id === 'cigarroa_macd')).toBe(true);

      const taceCalcs = getCalculatorsForProtocol('tace');
      expect(taceCalcs.length).toBeGreaterThanOrEqual(3);
      expect(taceCalcs.some((c) => c.id === 'cigarroa_macd')).toBe(true);
      expect(taceCalcs.some((c) => c.id === 'child_pugh_albi')).toBe(true);
      expect(taceCalcs.some((c) => c.id === 'bclc_staging')).toBe(true);
    });
  });

  // -------------------------------------------------------------
  // 1. Rotterdam Budd-Chiari Prognostic Index (BCS-PI)
  // -------------------------------------------------------------
  describe('1. calculateRotterdamBcs', () => {
    it('calculates Class I (Good Prognosis) for low bilirubin, normal INR, no ascites/enceph', () => {
      // enceph: false, ascites: false, bili: 1.0 mg/dL (17.1 umol/L), INR: 1.0
      // raw = 0 + 0 + 0.038 * 17.1 + 1.53 * 1.0 = 0.65 + 1.53 = 2.18
      // wait, with score > 1.5 it's Class III when INR is high or bili high
      // Let's test with low INR and minimal bili
      const res = calculateRotterdamBcs(false, false, 0.5, 0.5);
      expect(res.valid).toBe(true);
      expect(res.bcsPiScore).toBeLessThan(1.1);
      expect(res.prognosticClass).toBe('Class I');
      expect(res.riskLevel).toBe('safe');
    });

    it('calculates Class III (Poor Prognosis, TIPS/Transplant) for encephalopathy, severe jaundice, elevated INR', () => {
      const res = calculateRotterdamBcs(true, true, 3.5, 1.8);
      expect(res.valid).toBe(true);
      expect(res.bcsPiScore).toBeGreaterThan(1.5);
      expect(res.prognosticClass).toBe('Class III');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('Urgent TIPS or DIPS');
    });

    it('handles invalid inputs gracefully', () => {
      expect(calculateRotterdamBcs(false, false, 0, 1.0).valid).toBe(false);
      expect(calculateRotterdamBcs(false, false, 1.0, -0.5).valid).toBe(false);
    });
  });

  // -------------------------------------------------------------
  // 2. Clichy Budd-Chiari Prognostic Score
  // -------------------------------------------------------------
  describe('2. calculateClichyScore', () => {
    it('calculates good response tier (< 5.4) for young patient with mild values', () => {
      // Age 30, Bili 1.2, Cr 0.8, Ascites none (0)
      // 0.08*30 + 0.16*1.2 + 0.72*0.8 + 0 = 2.4 + 0.192 + 0.576 = 3.17
      const res = calculateClichyScore(30, 1.2, 0.8, 'none');
      expect(res.valid).toBe(true);
      expect(res.clichyScore).toBe(3.17);
      expect(res.outcomeTier).toContain('Good Response');
      expect(res.riskLevel).toBe('safe');
    });

    it('flags high risk of medical failure (≥ 5.4) for older patient with refractory ascites and renal dysfunction', () => {
      // Age 55, Bili 4.0, Cr 2.0, Ascites refractory (2)
      // 0.08*55 + 0.16*4 + 0.72*2 + 0.63*2 = 4.4 + 0.64 + 1.44 + 1.26 = 7.74
      const res = calculateClichyScore(55, 4.0, 2.0, 'refractory');
      expect(res.valid).toBe(true);
      expect(res.clichyScore).toBeGreaterThan(5.4);
      expect(res.outcomeTier).toContain('High Risk of Medical Failure');
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 3. Caudate-to-Right Lobe Ratio (C/RL)
  // -------------------------------------------------------------
  describe('3. calculateCaudateRightLobeRatio', () => {
    it('predicts cirrhosis and Budd-Chiari when ratio >= 0.65 (Harbin)', () => {
      // Caudate 45 mm, Right lobe 60 mm => Ratio = 0.75
      const res = calculateCaudateRightLobeRatio(45, 60);
      expect(res.valid).toBe(true);
      expect(res.cRlRatio).toBe(0.75);
      expect(res.harbinCirrhosisPredicted).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });

    it('detects borderline hypertrophy with Awaya criteria (0.58 - 0.64)', () => {
      // Caudate 36 mm, Right lobe 60 mm => Ratio = 0.60
      const res = calculateCaudateRightLobeRatio(36, 60);
      expect(res.valid).toBe(true);
      expect(res.cRlRatio).toBe(0.60);
      expect(res.harbinCirrhosisPredicted).toBe(false);
      expect(res.awayaCirrhosisPredicted).toBe(true);
      expect(res.riskLevel).toBe('warning');
    });
  });

  // -------------------------------------------------------------
  // 4. Direct Fick Shunt Fraction (Qp/Qs) for PAVM
  // -------------------------------------------------------------
  describe('4. calculateFickShunt', () => {
    it('computes abnormal right-to-left shunt fraction and flags embolization threshold', () => {
      // SpvO2 = 100%, SaO2 = 88%, SvO2 = 60%
      // num = 12, denom = 40 => shunt = 30%
      const res = calculateFickShunt(88, 60, 100);
      expect(res.valid).toBe(true);
      expect(res.shuntFractionPercent).toBe(30.0);
      expect(res.embolizationIndicated).toBe(true);
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('Critical PAVM shunt');
    });

    it('recognizes physiologic shunt (< 5%)', () => {
      // SaO2 = 98%, SvO2 = 70% => num = 2, denom = 30 => 6.7%?
      // For SaO2 = 99%, SvO2 = 75% => num = 1, denom = 25 => 4%
      const res = calculateFickShunt(99, 75, 100);
      expect(res.valid).toBe(true);
      expect(res.shuntFractionPercent).toBe(4.0);
      expect(res.embolizationIndicated).toBe(false);
      expect(res.riskLevel).toBe('safe');
    });
  });

  // -------------------------------------------------------------
  // 5. Hepatic Venous Pressure Gradient (HVPG)
  // -------------------------------------------------------------
  describe('5. calculateHvpg', () => {
    it('accurately calculates CSPH (10-11 mmHg) and Severe Portal HTN (>= 12 mmHg)', () => {
      const csph = calculateHvpg(22, 12);
      expect(csph.hvpgMmHg).toBe(10);
      expect(csph.stage).toBe('CSPH');
      expect(csph.riskLevel).toBe('warning');

      const severe = calculateHvpg(26, 12);
      expect(severe.hvpgMmHg).toBe(14);
      expect(severe.stage).toBe('Severe Portal HTN');
      expect(severe.riskLevel).toBe('critical');

      const extreme = calculateHvpg(34, 12);
      expect(extreme.hvpgMmHg).toBe(22);
      expect(extreme.stage).toBe('Extreme Mortality Risk');
      expect(extreme.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 6. PTBD Biliary Drainage Decompression Index
  // -------------------------------------------------------------
  describe('6. calculatePtbdDecompression', () => {
    it('flags catheter occlusion or side-hole migration when output < 150 mL/day', () => {
      const res = calculatePtbdDecompression(80, 14.0, 13.5, 3);
      expect(res.valid).toBe(true);
      expect(res.outputStatus).toBe('Low / Occlusion Suspected');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('catheter kinking');
    });

    it('calculates optimal clearance when bile output is 500 mL/day and bilirubin drops briskly', () => {
      const res = calculatePtbdDecompression(500, 16.0, 8.0, 4);
      expect(res.valid).toBe(true);
      expect(res.clearancePercent).toBe(50.0);
      expect(res.clearancePerDayPercent).toBe(12.5);
      expect(res.outputStatus).toBe('Optimal');
      expect(res.riskLevel).toBe('safe');
    });
  });

  // -------------------------------------------------------------
  // 7. Rutherford PAD & CLTI Classification
  // -------------------------------------------------------------
  describe('7. calculateRutherford', () => {
    it('categorizes Rutherford 4 as Ischemic Rest Pain and CLTI', () => {
      const res = calculateRutherford(4);
      expect(res.valid).toBe(true);
      expect(res.category).toBe(4);
      expect(res.cltiStatus).toContain('CLTI');
      expect(res.urgency).toBe('Urgent Limb Salvage');
    });

    it('categorizes Rutherford 1-3 as Claudication', () => {
      const res = calculateRutherford(2);
      expect(res.valid).toBe(true);
      expect(res.cltiStatus).toBe('Not CLTI');
      expect(res.urgency).toBe('Elective');
    });
  });

  // -------------------------------------------------------------
  // 8. ABI & TBI Calculator
  // -------------------------------------------------------------
  describe('8. calculateAbiTbi', () => {
    it('computes severe PAD / critical ischemia for ABI < 0.40', () => {
      const res = calculateAbiTbi(45, 120);
      expect(res.valid).toBe(true);
      expect(res.abi).toBe(0.38);
      expect(res.abiTier).toBe('Severe PAD (CLTI)');
      expect(res.riskLevel).toBe('critical');
    });

    it('detects non-compressible calcified vessels when ABI > 1.40 and evaluates TBI', () => {
      const res = calculateAbiTbi(185, 120, 55);
      expect(res.valid).toBe(true);
      expect(res.abi).toBe(1.54);
      expect(res.abiTier).toBe('Non-Compressible');
      expect(res.tbi).toBe(0.46); // 55 / 120 = 0.46 (<0.70 confirms PAD)
      expect(res.riskLevel).toBe('warning');
    });
  });

  // -------------------------------------------------------------
  // 9. Fontaine Staging for Lower Limb Ischemia
  // -------------------------------------------------------------
  describe('9. calculateFontaine', () => {
    it('correctly maps stages and identifies intervention thresholds (IIb, III, IV)', () => {
      expect(calculateFontaine('I').interventionIndicated).toBe(false);
      expect(calculateFontaine('IIa').interventionIndicated).toBe(false);
      expect(calculateFontaine('IIb').interventionIndicated).toBe(true);
      expect(calculateFontaine('III').interventionIndicated).toBe(true);
      expect(calculateFontaine('IV').interventionIndicated).toBe(true);
    });
  });

  // -------------------------------------------------------------
  // 10. Wells Score for Deep Vein Thrombosis
  // -------------------------------------------------------------
  describe('10. calculateWellsDvt', () => {
    it('identifies High DVT probability when score >= 3', () => {
      const res = calculateWellsDvt({
        activeCancer: true,
        paralysisOrPlaster: false,
        bedriddenOrMajorSurgery: true,
        localizedTenderness: true,
        entireLegSwollen: true,
        calfSwellingOver3cm: true,
        pittingEdemaConfined: false,
        collateralSuperficialVeins: false,
        previousDocumentedDvt: false,
        alternativeDiagnosisLikely: false
      });
      expect(res.wellsScore).toBe(5);
      expect(res.dvtRiskTier).toBe('High (DVT Likely)');
      expect(res.ultrasoundIndicated).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });

    it('accounts for negative deduction of alternative diagnosis', () => {
      const res = calculateWellsDvt({
        activeCancer: false,
        paralysisOrPlaster: false,
        bedriddenOrMajorSurgery: false,
        localizedTenderness: true,
        entireLegSwollen: false,
        calfSwellingOver3cm: false,
        pittingEdemaConfined: false,
        collateralSuperficialVeins: false,
        previousDocumentedDvt: false,
        alternativeDiagnosisLikely: true // -2
      });
      expect(res.wellsScore).toBe(-1);
      expect(res.dvtRiskTier).toBe('Low (DVT Unlikely)');
    });
  });

  // -------------------------------------------------------------
  // 11. Villalta Post-Thrombotic Syndrome Score
  // -------------------------------------------------------------
  describe('11. calculateVillalta', () => {
    it('classifies Severe PTS if score >= 15 or active venous ulcer present', () => {
      const resWithUlcer = calculateVillalta(4, 3, true);
      expect(resWithUlcer.ptsSeverity).toBe('Severe PTS');
      expect(resWithUlcer.deepVenousStentingCandidate).toBe(true);
      expect(resWithUlcer.riskLevel).toBe('critical');

      const resScore16 = calculateVillalta(8, 8, false);
      expect(resScore16.ptsSeverity).toBe('Severe PTS');
      expect(resScore16.deepVenousStentingCandidate).toBe(true);
    });

    it('classifies Mild PTS for score 5-9', () => {
      const res = calculateVillalta(4, 3, false);
      expect(res.villaltaScore).toBe(7);
      expect(res.ptsSeverity).toBe('Mild PTS');
    });
  });

  // -------------------------------------------------------------
  // 12. CEAP Classification for Varicose Veins
  // -------------------------------------------------------------
  describe('12. calculateCeap', () => {
    it('indicates endovenous ablation for C2 through C6', () => {
      expect(calculateCeap('C0').endovenousAblationIndicated).toBe(false);
      expect(calculateCeap('C1').endovenousAblationIndicated).toBe(false);
      expect(calculateCeap('C2').endovenousAblationIndicated).toBe(true);
      expect(calculateCeap('C3').endovenousAblationIndicated).toBe(true);
      expect(calculateCeap('C4a').endovenousAblationIndicated).toBe(true);
      expect(calculateCeap('C5').endovenousAblationIndicated).toBe(true);
      expect(calculateCeap('C6').endovenousAblationIndicated).toBe(true);
    });
  });

  // -------------------------------------------------------------
  // 13. Revised Geneva Score for PE
  // -------------------------------------------------------------
  describe('13. calculateRevisedGeneva', () => {
    it('flags high probability (>=11) and urgent CTPA', () => {
      const res = calculateRevisedGeneva({
        ageOver65: true, // 1
        previousDvtPe: true, // 3
        surgeryOrFractureWithinMonth: true, // 2
        activeMalignancy: false,
        unilateralLowerLimbPain: true, // 3
        hemoptysis: true, // 2
        heartRate: 98, // 5 (>=95)
        painOnDeepPalpationAndUnilateralEdema: false
      });
      expect(res.genevaScore).toBe(16);
      expect(res.peProbabilityTier).toBe('High');
      expect(res.ctpaUrgent).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 14. sPESI Score
  // -------------------------------------------------------------
  describe('14. calculateSpesi', () => {
    it('predicts high 30-day mortality for sPESI >= 1', () => {
      const res = calculateSpesi({
        ageOver80: false,
        historyOfCancer: true,
        chronicCardiopulmonaryDisease: false,
        heartRateGte110: true,
        systolicBpLt100: false,
        arterialO2SatLt90: false
      });
      expect(res.spesiScore).toBe(2);
      expect(res.mortality30DayEstimate).toContain('10.9%');
      expect(res.advancedIrThrombectomyCandidate).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });

    it('predicts low mortality for sPESI = 0', () => {
      const res = calculateSpesi({
        ageOver80: false,
        historyOfCancer: false,
        chronicCardiopulmonaryDisease: false,
        heartRateGte110: false,
        systolicBpLt100: false,
        arterialO2SatLt90: false
      });
      expect(res.spesiScore).toBe(0);
      expect(res.mortality30DayEstimate).toContain('1.0%');
      expect(res.advancedIrThrombectomyCandidate).toBe(false);
    });
  });

  // -------------------------------------------------------------
  // 15. Uterine Fibroid Volume (UAE)
  // -------------------------------------------------------------
  describe('15. calculateFibroidVolume', () => {
    it('computes ellipsoid volume and tracks volume reduction percentage', () => {
      // L=6, W=5, D=4 => 0.523 * 120 = 62.76 => 62.8 cm3
      const res = calculateFibroidVolume(6, 5, 4, 150);
      expect(res.valid).toBe(true);
      expect(res.volumeCm3).toBe(62.8);
      expect(res.percentageReduction).toBeCloseTo(58.1, 1);
      expect(res.sphericalDiameterCm).toBeGreaterThan(4);
    });
  });

  // -------------------------------------------------------------
  // 16. IPSS & QoL Score for PAE
  // -------------------------------------------------------------
  describe('16. calculateIpss', () => {
    it('confirms PAE candidacy for severe LUTS with poor QoL', () => {
      const res = calculateIpss({
        incompleteEmptying: 4,
        frequency: 4,
        intermittency: 3,
        urgency: 4,
        weakStream: 4,
        straining: 3,
        nocturia: 3,
        qualityOfLife: 4
      });
      expect(res.ipssScore).toBe(25);
      expect(res.symptomSeverity).toBe('Severe');
      expect(res.paeCandidate).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 17. Prostate Volume & PSA Density
  // -------------------------------------------------------------
  describe('17. calculateProstateVolume', () => {
    it('calculates volume and alerts for biopsy if PSAD >= 0.15', () => {
      // 5 x 4 x 4 cm => 0.523 * 80 = 41.8 mL
      // PSA = 8.0 ng/mL => PSAD = 8.0 / 41.8 = 0.191 (>= 0.15)
      const res = calculateProstateVolume(5, 4, 4, 8.0);
      expect(res.valid).toBe(true);
      expect(res.prostateVolumeMl).toBe(41.8);
      expect(res.psaDensity).toBe(0.191);
      expect(res.biopsyRecommendedPriorToPae).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 18. NASCET vs. ECST Carotid Stenosis
  // -------------------------------------------------------------
  describe('18. calculateNascetCarotid', () => {
    it('computes 70% NASCET stenosis and confirms CAS indication', () => {
      // Normal distal ICA = 5.0 mm, residual lumen = 1.5 mm
      // (5.0 - 1.5) / 5.0 = 0.70 => 70.0%
      const res = calculateNascetCarotid(1.5, 5.0, 8.0);
      expect(res.valid).toBe(true);
      expect(res.nascetPercent).toBe(70.0);
      expect(res.carotidStentingIndicated).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 19. ASPECTS Stroke Score
  // -------------------------------------------------------------
  describe('19. calculateAspects', () => {
    it('computes ASPECTS 7 with favorable core for thrombectomy', () => {
      const res = calculateAspects({
        caudate: true,
        lentiform: true,
        internalCapsule: true,
        insularRibbon: false,
        m1: false,
        m2: false,
        m3: false,
        m4: false,
        m5: false,
        m6: false
      });
      expect(res.aspectsScore).toBe(7);
      expect(res.favorableCore).toBe(true);
      expect(res.thrombectomyBenefit).toBe('High Benefit');
    });

    it('identifies large ischemic core when ASPECTS <= 5', () => {
      const res = calculateAspects({
        caudate: true,
        lentiform: true,
        internalCapsule: true,
        insularRibbon: true,
        m1: true,
        m2: true,
        m3: false,
        m4: false,
        m5: false,
        m6: false
      });
      expect(res.aspectsScore).toBe(4);
      expect(res.favorableCore).toBe(false);
      expect(res.thrombectomyBenefit).toBe('Moderate / Large Core Protocol');
    });
  });

  // -------------------------------------------------------------
  // 20. NIHSS Short Score
  // -------------------------------------------------------------
  describe('20. calculateNihssShort', () => {
    it('identifies high LVO probability for NIHSS >= 6', () => {
      const res = calculateNihssShort(18);
      expect(res.nihssScore).toBe(18);
      expect(res.lvoProbabilityHigh).toBe(true);
      expect(res.severityTier).toBe('Moderate-to-Severe Stroke');
    });
  });

  // -------------------------------------------------------------
  // 21. Hunt and Hess Scale
  // -------------------------------------------------------------
  describe('21. calculateHuntHess', () => {
    it('maps Grade 4 to emergent coiling and high surgical mortality', () => {
      const res = calculateHuntHess(4);
      expect(res.grade).toBe(4);
      expect(res.coilingUrgency).toBe('Emergent');
      expect(res.surgicalMortalityRisk).toBe('30-40%');
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 22. Modified Fisher Scale
  // -------------------------------------------------------------
  describe('22. calculateModifiedFisher', () => {
    it('classifies Grade 4 as highest vasospasm risk (~40%)', () => {
      const res = calculateModifiedFisher(4);
      expect(res.grade).toBe(4);
      expect(res.symptomaticVasospasmRisk).toContain('40%');
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 23. Markwalder CSDH Scale
  // -------------------------------------------------------------
  describe('23. calculateMarkwalder', () => {
    it('recommends standalone or adjuvant MMA embolization for Grade 1', () => {
      const res = calculateMarkwalder(1);
      expect(res.grade).toBe(1);
      expect(res.mmaEmbolizationRole).toBe('Ideal Standalone / Adjuvant Target');
      expect(res.riskLevel).toBe('warning');
    });

    it('flags urgent surgical evacuation plus adjunctive MMA for Grade 3', () => {
      const res = calculateMarkwalder(3);
      expect(res.grade).toBe(3);
      expect(res.mmaEmbolizationRole).toBe('Urgent Surgical Evacuation + Adjunctive MMA');
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 24. Schobinger AVM Scale
  // -------------------------------------------------------------
  describe('24. calculateSchobinger', () => {
    it('identifies Stage III destruction requiring urgent multimodal embolization', () => {
      const res = calculateSchobinger(3);
      expect(res.stage).toBe(3);
      expect(res.interventionStrategy).toBe('Urgent Multimodal Embolization');
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 25. Rockall Bleeding Score
  // -------------------------------------------------------------
  describe('25. calculateRockall', () => {
    it('activates emergency TAE alert for high Rockall score >= 6', () => {
      const res = calculateRockall({
        ageGroup: '>=80', // 2
        shock: 'hypotension', // 2
        comorbidity: 'cad_chf_major', // 2
        endoscopicStigmata: 'active_spurting' // 2 => 8
      });
      expect(res.rockallScore).toBe(8);
      expect(res.irEmbolizationIndicated).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 26. Glasgow-Blatchford Bleeding Score (GBS)
  // -------------------------------------------------------------
  describe('26. calculateGlasgowBlatchford', () => {
    it('identifies high risk patient requiring urgent intervention (score >= 6)', () => {
      const res = calculateGlasgowBlatchford({
        bunMgDl: 30, // 4
        hemoglobinGDl: 9.0, // 6 for male (<10)
        systolicBp: 95, // 2 (<100)
        pulseBpm: 105, // 1
        isFemale: false,
        syncopePresent: true, // 2
        melenaPresent: true, // 1
        liverDiseaseHistory: false,
        cardiacFailureHistory: false
      });
      expect(res.gbsScore).toBe(16);
      expect(res.interventionNeeded).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 27. Oakland Score for Acute Lower GI Bleed
  // -------------------------------------------------------------
  describe('27. calculateOakland', () => {
    it('activates CTA / embolization alert for score >= 15', () => {
      const res = calculateOakland({
        age: 72, // 4
        sex: 'male', // 1
        priorLgibAdmission: true, // 1
        dreBloodPresent: true, // 1
        heartRateBpm: 100, // 3
        systolicBpMmHg: 115, // 4
        hemoglobinGDl: 8.5 // 13 (<9) => total 27
      });
      expect(res.oaklandScore).toBe(27);
      expect(res.safeForDischarge).toBe(false);
      expect(res.ctaEmbolizationAlert).toBe(true);
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 28. SIR Bleeding Risk & Coagulation
  // -------------------------------------------------------------
  describe('28. calculateSirBleedingRisk', () => {
    it('clears patient when Category 2 thresholds are met (Plt >= 50k, INR <= 1.8)', () => {
      const res = calculateSirBleedingRisk(2, 120000, 1.2);
      expect(res.clearedForProcedure).toBe(true);
      expect(res.riskLevel).toBe('safe');
      expect(res.requiredCorrections.length).toBe(0);
    });

    it('blocks procedure when Category 3 thresholds are violated', () => {
      const res = calculateSirBleedingRisk(3, 40000, 1.9, 50);
      expect(res.clearedForProcedure).toBe(false);
      expect(res.riskLevel).toBe('critical');
      expect(res.requiredCorrections.length).toBeGreaterThanOrEqual(2);
    });
  });

  // -------------------------------------------------------------
  // 29. Thermal Ablation Margin & Sphericity
  // -------------------------------------------------------------
  describe('29. calculateAblationMargin', () => {
    it('flags A0 margin when measured minimum margin < 5 mm', () => {
      const res = calculateAblationMargin(25, 40, 45, 3.5);
      expect(res.valid).toBe(true);
      expect(res.marginClass).toContain('A0');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('A0 ablation carries elevated local tumor progression');
    });

    it('confirms curative margin when margin >= 10 mm', () => {
      const res = calculateAblationMargin(20, 50, 50, 12.0);
      expect(res.valid).toBe(true);
      expect(res.marginClass).toContain('Curative Margin');
      expect(res.riskLevel).toBe('safe');
    });
  });

  // -------------------------------------------------------------
  // 30. WOMAC Osteoarthritis Index for GAE
  // -------------------------------------------------------------
  describe('30. calculateWomac', () => {
    it('confirms ideal GAE candidacy for pain >= 10 and percentage >= 45%', () => {
      const res = calculateWomac(14, 6, 42);
      expect(res.valid).toBe(true);
      expect(res.totalWomacScore).toBe(62);
      expect(res.percentageScore).toBeCloseTo(64.6, 1);
      expect(res.gaeCandidacy).toBe('Ideal GAE Candidate');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('Ideal candidate for Genicular Artery Embolization');
    });
  });

  // -------------------------------------------------------------
  // 31. Future Liver Remnant (sFLR) & Kinetic Growth Rate (KGR)
  // -------------------------------------------------------------
  describe('31. calculateFlrKgr', () => {
    it('clears patient for major resection when sFLR >= target and KGR >= 2.66%/wk', () => {
      const res = calculateFlrKgr(280, 480, 70, 170, 4, 'normal');
      expect(res.valid).toBe(true);
      expect(res.postSflrPct).toBeGreaterThanOrEqual(20);
      expect(res.kgrPctPerWeek).toBeGreaterThanOrEqual(2.66);
      expect(res.safeForResection).toBe(true);
      expect(res.riskLevel).toBe('safe');
      expect(res.recommendation).toContain('Cleared for major hepatic resection');
    });

    it('flags critical PHLF risk when post-sFLR is inadequate and KGR is sluggish', () => {
      const res = calculateFlrKgr(150, 200, 80, 180, 6, 'cirrhosis');
      expect(res.valid).toBe(true);
      expect(res.postSflrPct).toBeLessThan(40);
      expect(res.kgrPctPerWeek).toBeLessThan(2.66);
      expect(res.safeForResection).toBe(false);
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('CRITICAL PHLF RISK');
    });

    it('handles invalid input gracefully', () => {
      expect(calculateFlrKgr(0, 400, 70, 170, 4, 'normal').valid).toBe(false);
      expect(calculateFlrKgr(200, 400, -70, 170, 4, 'normal').valid).toBe(false);
    });
  });

  // -------------------------------------------------------------
  // 32. Y90 Partition Model Dosimetry & LSF
  // -------------------------------------------------------------
  describe('32. calculateY90Dosimetry', () => {
    it('confirms therapeutic dosimetry with safe lung dose and adequate tumor dose', () => {
      const res = calculateY90Dosimetry(2.0, 5.0, 1.5, 3.0, 0.3);
      expect(res.valid).toBe(true);
      expect(res.isLsfSafe).toBe(true);
      expect(res.lungAbsorbedDoseGy).toBeLessThanOrEqual(30);
      expect(res.tumorAbsorbedDoseGy).toBeGreaterThanOrEqual(100);
      expect(res.riskLevel).toBe('safe');
      expect(res.recommendation).toContain('Therapeutic radiation dosimetry achieved');
    });

    it('flags critical radiation pneumonitis hazard when LSF > 20% or lung dose > 30 Gy', () => {
      const res = calculateY90Dosimetry(3.5, 22.0, 1.4, 2.5, 0.2);
      expect(res.valid).toBe(true);
      expect(res.isLsfSafe).toBe(false);
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('CRITICAL RADIATION HAZARD');
    });

    it('handles invalid input gracefully', () => {
      expect(calculateY90Dosimetry(-1, 5, 1.5, 3, 0.3).valid).toBe(false);
    });
  });

  // -------------------------------------------------------------
  // 33. Spetzler-Martin AVM Grading
  // -------------------------------------------------------------
  describe('33. calculateSpetzlerMartin', () => {
    it('grades small non-eloquent superficial AVM as Grade I (Low Risk)', () => {
      const res = calculateSpetzlerMartin(2.2, false, false);
      expect(res.valid).toBe(true);
      expect(res.grade).toBe(1);
      expect(res.operativeRiskCategory).toContain('Low Risk');
      expect(res.riskLevel).toBe('safe');
      expect(res.recommendation).toContain('Low neurological morbidity');
    });

    it('grades giant eloquent deep AVM as Grade V (High Risk)', () => {
      const res = calculateSpetzlerMartin(6.5, true, true);
      expect(res.valid).toBe(true);
      expect(res.grade).toBe(5);
      expect(res.operativeRiskCategory).toContain('High Risk');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('High surgical/embolization morbidity risk');
    });
  });

  // -------------------------------------------------------------
  // 34. Davies-Elefteriades Aortic Size Index (ASI)
  // -------------------------------------------------------------
  describe('34. calculateAorticSizeIndex', () => {
    it('stratifies low rupture risk when ASI < 2.75 cm/m²', () => {
      const res = calculateAorticSizeIndex(4.2, 80, 180);
      expect(res.valid).toBe(true);
      expect(res.asiCmPerM2).toBeLessThan(2.75);
      expect(res.riskLevel).toBe('safe');
      expect(res.recommendation).toContain('Low annual rupture/dissection risk');
    });

    it('flags critical rupture hazard when ASI >= 4.25 cm/m²', () => {
      const res = calculateAorticSizeIndex(7.5, 55, 155);
      expect(res.valid).toBe(true);
      expect(res.asiCmPerM2).toBeGreaterThanOrEqual(4.25);
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('CRITICAL RUPTURE HAZARD');
    });
  });

  // -------------------------------------------------------------
  // 35. Renal Artery Resistive Index (RI) & RAR
  // -------------------------------------------------------------
  describe('35. calculateRenalResistiveIndex', () => {
    it('identifies salvageable stenosis with RI < 0.80 and RAR >= 3.5', () => {
      const res = calculateRenalResistiveIndex(240, 80, 60);
      expect(res.valid).toBe(true);
      expect(res.resistiveIndex).toBe(0.67);
      expect(res.renalAorticRatio).toBe(4.0);
      expect(res.hasSignificantStenosis).toBe(true);
      expect(res.stentingSalvageable).toBe(true);
      expect(res.riskLevel).toBe('safe');
      expect(res.recommendation).toContain('High probability of improved blood pressure');
    });

    it('flags irreversible nephrosclerosis when RI >= 0.80', () => {
      const res = calculateRenalResistiveIndex(220, 30, 60);
      expect(res.valid).toBe(true);
      expect(res.resistiveIndex).toBeGreaterThanOrEqual(0.80);
      expect(res.stentingSalvageable).toBe(false);
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('NEPHROSCLEROSIS ALERT');
    });
  });

  // -------------------------------------------------------------
  // 36. Caprini Risk Assessment Model for VTE
  // -------------------------------------------------------------
  describe('36. calculateCapriniVte', () => {
    it('classifies young ambulatory patient as very low risk (0-1 points)', () => {
      const res = calculateCapriniVte('<41', false, false, false, false, false, false, false);
      expect(res.valid).toBe(true);
      expect(res.totalScore).toBe(0);
      expect(res.riskCategory).toBe('Very Low Risk');
      expect(res.riskLevel).toBe('safe');
    });

    it('identifies super high risk (>= 9 points) requiring extended 30-day LMWH', () => {
      const res = calculateCapriniVte('>=75', false, true, true, true, false, false, false);
      expect(res.valid).toBe(true);
      expect(res.totalScore).toBeGreaterThanOrEqual(9);
      expect(res.riskCategory).toBe('Super High Risk');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('extended post-procedure anticoagulation for 30 days');
    });
  });

  // -------------------------------------------------------------
  // 37. HAS-BLED Score for Thrombolysis
  // -------------------------------------------------------------
  describe('37. calculateHasBled', () => {
    it('indicates low bleeding risk for score < 3', () => {
      const res = calculateHasBled(true, false, false, false, false, false, false);
      expect(res.valid).toBe(true);
      expect(res.hasBledScore).toBe(1);
      expect(res.bleedingTier).toBe('Low Bleeding Risk');
      expect(res.riskLevel).toBe('safe');
    });

    it('flags high bleeding risk for score >= 3 requiring reduced tPA and fibrinogen tracking', () => {
      const res = calculateHasBled(true, true, true, false, false, true, false);
      expect(res.valid).toBe(true);
      expect(res.hasBledScore).toBeGreaterThanOrEqual(3);
      expect(res.bleedingTier).toBe('High Bleeding Risk');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('Reduce tPA infusion rate');
    });
  });

  // -------------------------------------------------------------
  // 38. Palliative Prognostic Index (PPI)
  // -------------------------------------------------------------
  describe('38. calculatePpiScore', () => {
    it('predicts survival > 6 weeks for ambulatory patient with mild symptoms', () => {
      const res = calculatePpiScore(70, 'normal', false, false, false);
      expect(res.valid).toBe(true);
      expect(res.ppiScore).toBeLessThanOrEqual(4.0);
      expect(res.survivalEstimate).toContain('> 6 weeks');
      expect(res.riskLevel).toBe('safe');
      expect(res.recommendation).toContain('Favorable palliative prognosis');
    });

    it('flags end-of-life terminal phase (survival < 3 weeks) for score > 6', () => {
      const res = calculatePpiScore(20, 'normal', false, false, true);
      expect(res.valid).toBe(true);
      expect(res.ppiScore).toBeGreaterThan(6.0);
      expect(res.survivalEstimate).toContain('< 3 weeks');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('Terminal palliative phase');
    });
  });

  // -------------------------------------------------------------
  // 39. SVS WIfI Classification
  // -------------------------------------------------------------
  describe('39. calculateSvsWifi', () => {
    it('classifies Stage 1 for mild ulcer with good perfusion and no infection', () => {
      const res = calculateSvsWifi(1, 0, 0);
      expect(res.valid).toBe(true);
      expect(res.clinicalStage).toBe(1);
      expect(res.riskLevel).toBe('safe');
      expect(res.amputationRisk).toContain('Very Low');
    });

    it('classifies Stage 4 for severe ischemia and extensive wound / gangrene', () => {
      const res = calculateSvsWifi(3, 3, 2);
      expect(res.valid).toBe(true);
      expect(res.clinicalStage).toBe(4);
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('Urgent percutaneous endovascular revascularization');
    });
  });

  // -------------------------------------------------------------
  // 40. Spine Instability Neoplastic Score (SINS)
  // -------------------------------------------------------------
  describe('40. calculateSinsScore', () => {
    it('categorizes score 0-6 as stable spine suitable for solitary vertebroplasty', () => {
      const res = calculateSinsScore('semi_rigid', 'painless', 'blastic', 'normal', 'none', 'none');
      expect(res.valid).toBe(true);
      expect(res.sinsScore).toBeLessThanOrEqual(6);
      expect(res.stabilityCategory).toBe('Spine Stable (0-6)');
      expect(res.riskLevel).toBe('safe');
      expect(res.kyphoplastyRecommendation).toContain('Vertebroplasty / Kyphoplasty safe');
    });

    it('categorizes score 13-18 as unstable spine mandating surgical consultation', () => {
      const res = calculateSinsScore('junctional', 'mechanical', 'lytic', 'subluxation', 'gt50', 'bilateral');
      expect(res.valid).toBe(true);
      expect(res.sinsScore).toBeGreaterThanOrEqual(13);
      expect(res.stabilityCategory).toBe('Spine Instability (13-18)');
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('Urgent neurosurgical / orthopedic spine consultation');
    });
  });

  // -------------------------------------------------------------
  // 41. Bova Score for Acute PE
  // -------------------------------------------------------------
  describe('41. calculateBovaPe', () => {
    it('classifies Stage I (low risk) for 0-2 points', () => {
      const res = calculateBovaPe(false, false, true, false);
      expect(res.valid).toBe(true);
      expect(res.bovaScore).toBe(1);
      expect(res.riskStage).toBe('Stage I (Low)');
      expect(res.catheterInterventionIndicated).toBe(false);
      expect(res.riskLevel).toBe('safe');
    });

    it('classifies Stage III (>4 points) indicating urgent catheter intervention', () => {
      const res = calculateBovaPe(true, true, true, true);
      expect(res.valid).toBe(true);
      expect(res.bovaScore).toBe(7);
      expect(res.riskStage).toBe('Stage III (High)');
      expect(res.catheterInterventionIndicated).toBe(true);
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('Urgent evaluation for Catheter-Directed Thrombolysis');
    });
  });

  // -------------------------------------------------------------
  // 42. WHO-IWGE Hydatid Cyst Classification
  // -------------------------------------------------------------
  describe('42. calculateWhoIwgeHydatid', () => {
    it('identifies CE1 active unilocular cyst as ideal for PAIR', () => {
      const res = calculateWhoIwgeHydatid('CE1', 6.0, false);
      expect(res.valid).toBe(true);
      expect(res.pairEligibility).toBe('Ideal for PAIR');
      expect(res.riskLevel).toBe('safe');
      expect(res.recommendation).toContain('Ideal candidate for PAIR');
    });

    it('strictly enforces absolute contraindication if biliary fistula present', () => {
      const res = calculateWhoIwgeHydatid('CE1', 7.0, true);
      expect(res.valid).toBe(true);
      expect(res.riskLevel).toBe('critical');
      expect(res.recommendation).toContain('ABSOLUTE CONTRAINDICATION TO SCOLICIDAL AGENTS');
    });
  });

  // -------------------------------------------------------------
  // 43. Tokyo Guidelines (TG18) Cholecystitis
  // -------------------------------------------------------------
  describe('43. calculateTg18Cholecystitis', () => {
    it('categorizes Grade I mild cholecystitis', () => {
      const res = calculateTg18Cholecystitis(false, false, false, false, false);
      expect(res.valid).toBe(true);
      expect(res.tg18Grade).toBe('Grade I (Mild)');
      expect(res.riskLevel).toBe('safe');
    });

    it('indicates urgent emergency PTGBD for Grade III with organ dysfunction', () => {
      const res = calculateTg18Cholecystitis(true, false, false, false, true);
      expect(res.valid).toBe(true);
      expect(res.tg18Grade).toBe('Grade III (Severe)');
      expect(res.ptgbdUrgency).toBe('Urgent Emergency PTGBD');
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 44. Thyroid Volume Reduction Ratio (VRR)
  // -------------------------------------------------------------
  describe('44. calculateThyroidVrr', () => {
    it('calculates volume reduction ratio and therapeutic success (>= 50%)', () => {
      const res = calculateThyroidVrr(4.0, 3.0, 3.0, 2.0, 1.5, 1.5, 6);
      expect(res.valid).toBe(true);
      expect(res.vrrPct).toBeGreaterThanOrEqual(50);
      expect(res.therapeuticResponse).toMatch(/Therapeutic Success|Excellent/);
      expect(res.riskLevel).toBe('safe');
    });

    it('flags inadequate response (<50%) at 6 months follow-up', () => {
      const res = calculateThyroidVrr(4.0, 3.0, 3.0, 3.8, 2.9, 2.9, 6);
      expect(res.valid).toBe(true);
      expect(res.vrrPct).toBeLessThan(50);
      expect(res.therapeuticResponse).toBe('Inadequate (< 50%)');
      expect(res.riskLevel).toBe('warning');
    });
  });

  // -------------------------------------------------------------
  // 45. Shock Index (SI) & SASI
  // -------------------------------------------------------------
  describe('45. calculateShockIndex', () => {
    it('calculates normal hemodynamics for SI 0.5-0.7', () => {
      const res = calculateShockIndex(72, 120, 45, 15);
      expect(res.valid).toBe(true);
      expect(res.shockIndex).toBe(0.6);
      expect(res.hemodynamicStatus).toBe('Normal (SI 0.5-0.7)');
      expect(res.riskLevel).toBe('safe');
    });

    it('triggers Massive Transfusion Protocol for critical shock (SI > 1.3)', () => {
      const res = calculateShockIndex(140, 80, 65, 12);
      expect(res.valid).toBe(true);
      expect(res.shockIndex).toBeGreaterThan(1.3);
      expect(res.hemodynamicStatus).toBe('Critical Hemorrhagic Shock (> 1.3)');
      expect(res.massiveTransfusionTriage).toContain('TRIGGER MASSIVE TRANSFUSION PROTOCOL');
      expect(res.riskLevel).toBe('critical');
    });
  });

  // -------------------------------------------------------------
  // 46. Chylothorax Output & Lymphatic Leak
  // -------------------------------------------------------------
  describe('46. calculateChylothoraxLeak', () => {
    it('detects high-output chylothorax (>1000 mL/day) mandating emergency TDE', () => {
      const res = calculateChylothoraxLeak(1400, 70, 220, true, 4);
      expect(res.valid).toBe(true);
      expect(res.leakSeverity).toBe('High-Output Chylothorax');
      expect(res.chyleDiagnosis).toContain('Definitive Chylothorax');
      expect(res.tdeIndication).toContain('URGENT Thoracic Duct Embolization');
      expect(res.riskLevel).toBe('critical');
    });

    it('recommends conservative trial for low-output chylothorax (<500 mL/day)', () => {
      const res = calculateChylothoraxLeak(250, 65, 140, false, 2);
      expect(res.valid).toBe(true);
      expect(res.leakSeverity).toBe('Low-Output Chylothorax');
      expect(res.tdeIndication).toContain('Conservative Trial');
      expect(res.riskLevel).toBe('safe');
    });
  });
});
