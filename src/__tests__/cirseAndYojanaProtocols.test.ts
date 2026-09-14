import { describe, it, expect } from 'vitest';
import { CLINICAL_GUIDELINES } from '../data/clinicalGuidelines';
import { DRUG_PROTOCOLS } from '../data/protocolsData';

describe('CIRSE Standards of Practice Guidelines Suite', () => {
  it('contains at least 12 comprehensive CIRSE guidelines', () => {
    expect(CLINICAL_GUIDELINES.length).toBeGreaterThanOrEqual(12);
  });

  it('verifies that all guidelines adhere to CIRSE society standards', () => {
    CLINICAL_GUIDELINES.forEach((guideline) => {
      expect(guideline.society).toBe('CIRSE');
      expect(guideline.id).toBeDefined();
      expect(guideline.code).toMatch(/^CIRSE-/);
      expect(guideline.year).toBeGreaterThanOrEqual(2022);
      expect(guideline.evidenceGrade).toBeDefined();
      expect(guideline.organSystem).toBeDefined();
      expect(guideline.summary.length).toBeGreaterThan(15);
    });
  });

  it('validates clinical quality thresholds for CIRSE technical success and complications', () => {
    CLINICAL_GUIDELINES.forEach((guideline) => {
      expect(guideline.technicalSuccessThreshold).toBeGreaterThanOrEqual(90.0);
      expect(guideline.technicalSuccessThreshold).toBeLessThanOrEqual(100.0);
      expect(guideline.majorComplicationThreshold).toBeGreaterThan(0.0);
      expect(guideline.majorComplicationThreshold).toBeLessThanOrEqual(5.0);
    });
  });

  it('validates complete CIRSE 5-tier complication classification for all procedures', () => {
    const requiredGrades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'];

    CLINICAL_GUIDELINES.forEach((guideline) => {
      expect(guideline.gradingCriteria.length).toBe(5);
      const grades = guideline.gradingCriteria.map((g) => g.grade);
      expect(grades).toEqual(requiredGrades);

      guideline.gradingCriteria.forEach((g) => {
        expect(g.definition.length).toBeGreaterThan(10);
        expect(g.management.length).toBeGreaterThan(10);
        expect(g.expectedRatePercent).toBeGreaterThanOrEqual(0.01);
      });
    });
  });

  it('verifies mandatory clinical documentation across all CIRSE guidelines', () => {
    CLINICAL_GUIDELINES.forEach((guideline) => {
      expect(guideline.indications.length).toBeGreaterThanOrEqual(3);
      expect(guideline.contraindications.length).toBeGreaterThanOrEqual(2);
      expect(guideline.preProcedureChecklist.length).toBeGreaterThanOrEqual(3);
      expect(guideline.postProcedureCare.length).toBeGreaterThanOrEqual(3);
      expect(guideline.antibioticProphylaxis.length).toBeGreaterThan(10);
      expect(guideline.keyCirsePoints.length).toBeGreaterThanOrEqual(2);
    });
  });
});

describe('Drug Protocols & Government Yojana Tariffs Suite', () => {
  it('verifies that all drug protocols have an attached Yojana requirement', () => {
    expect(DRUG_PROTOCOLS.length).toBeGreaterThanOrEqual(40);

    DRUG_PROTOCOLS.forEach((protocol) => {
      expect(protocol.yojanaRequirement).toBeDefined();
      const yojana = protocol.yojanaRequirement!;

      expect(['MAAY', 'RGHS', 'AB-PMJAY', 'CGHS']).toContain(yojana.primaryScheme);
      expect(yojana.packageCode.length).toBeGreaterThan(3);
      expect(yojana.packageName.length).toBeGreaterThan(5);
      expect(yojana.icd10Code.length).toBeGreaterThan(2);
      expect(yojana.tariffAmountInr).toBeGreaterThan(0);
      expect(yojana.mandatoryPreAuthDocuments.length).toBeGreaterThanOrEqual(3);
      expect(yojana.applicationSteps.length).toBeGreaterThanOrEqual(4);
      expect(yojana.approvedImplants.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('validates authentic MAAY/RGHS package codes and tariff ranges', () => {
    const bcsProtocol = DRUG_PROTOCOLS.find((p) => p.id === 'bcs');
    expect(bcsProtocol).toBeDefined();
    expect(bcsProtocol!.yojanaRequirement?.packageCode).toBe('2849-IN089A');
    expect(bcsProtocol!.yojanaRequirement?.tariffAmountInr).toBe(125000);
    expect(bcsProtocol!.yojanaRequirement?.primaryScheme).toBe('MAAY');

    const taceProtocol = DRUG_PROTOCOLS.find((p) => p.id === 'tace');
    expect(taceProtocol).toBeDefined();
    expect(taceProtocol!.yojanaRequirement?.packageCode).toBe('2849-IN061A');
    expect(taceProtocol!.yojanaRequirement?.tariffAmountInr).toBe(47960);
  });
});
