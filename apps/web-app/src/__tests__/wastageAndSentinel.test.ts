import { describe, it, expect, beforeEach } from 'vitest';
import {
  evaluateRadiationSentinelTrigger,
  getScheduledRadiationTasks,
  clearScheduledRadiationTasks,
} from '../../app/lib/censusEngine';
import { buildPreAuthDossierPdf, PreAuthDossierInput } from '../../app/lib/schemes/pdfPacketBuilder';

describe('Angiosuite Wastage Bifurcation & Sentinel Radiation Surveillance Suite', () => {
  beforeEach(() => {
    clearScheduledRadiationTasks();
  });

  describe('1. Sentinel Radiation Follow-Up Task Generation', () => {
    it('triggers automatic 30-Day Skin Surveillance task when Air Kerma >= 5.0 Gy', () => {
      const task = evaluateRadiationSentinelTrigger({
        caseId: 'CASE-2026-HIGH-DOSE-01',
        patientName: 'Kailash Meena',
        patientCrNo: 'SMS-2026-4401',
        airKermaGy: 5.4, // Exceeds 5.0 Gy threshold
        fluoroTimeMinutes: 42,
        procedureDate: '2026-09-22',
      });

      expect(task).toBeDefined();
      expect(task?.taskType).toBe('30-Day Radiation Skin Injury Surveillance');
      expect(task?.priority).toBe('HIGH_SENTINEL');
      expect(task?.targetRoute).toBe('/dashboard/op-clinic');
      expect(task?.triggerReason).toContain('Air Kerma 5.40 Gy');
      expect(task?.scheduledForDate).toBe('2026-10-22'); // 30 days after Sept 22

      const tasks = getScheduledRadiationTasks();
      expect(tasks).toHaveLength(1);
      expect(tasks[0].id).toBe(task!.id);
    });

    it('triggers automatic 30-Day Skin Surveillance task when Fluoro Time >= 60 min', () => {
      const task = evaluateRadiationSentinelTrigger({
        caseId: 'CASE-2026-LONG-FLUORO-02',
        patientName: 'Sunita Devi',
        patientCrNo: 'SMS-2026-4402',
        airKermaGy: 3.8,
        fluoroTimeMinutes: 68.5, // Exceeds 60 min threshold
        procedureDate: '2026-09-22',
      });

      expect(task).toBeDefined();
      expect(task?.triggerReason).toContain('Fluoroscopy 68.5 min');
      expect(task?.targetRoute).toBe('/dashboard/op-clinic');
    });

    it('does NOT trigger sentinel task for routine cases below radiation thresholds', () => {
      const task = evaluateRadiationSentinelTrigger({
        caseId: 'CASE-2026-ROUTINE-03',
        patientName: 'Ramesh Sharma',
        patientCrNo: 'SMS-2026-4403',
        airKermaGy: 1.4,
        fluoroTimeMinutes: 18.2,
      });

      expect(task).toBeNull();
      expect(getScheduledRadiationTasks()).toHaveLength(0);
    });
  });

  describe('2. Scheme Reimbursement Claim Exclusion for Wasted Hardware', () => {
    const baseDossierInput: PreAuthDossierInput = {
      caseId: 'CASE-2026-SCHEME-001',
      patientCrNo: 'CR-9921',
      patientIpdNo: 'IPD-4412',
      patientName: 'Ram Avatar',
      age: 62,
      gender: 'Male',
      bedNo: 'CathLab-01',
      scheme: 'MAAY_CHIRANJEEVI',
      schemeCardTid: 'TID-7721-002',
      packageCode: 'IR-TACE-01',
      packageName: 'Chemoembolization of Hepatic Tumor',
      category: 'Interventional Oncology',
      baseTariffInr: 35000,
      approvedImplants: [
        {
          implantCode: 'RMSCL-MICROCATH-27',
          name: 'Terumo Progreat 2.7F Coaxial Microcatheter',
          lotNumber: 'LOT-99211',
          cappedPriceInr: 18500,
          disposition: 'IMPLANTED_BILLED',
        },
        {
          implantCode: 'RMSCL-COIL-4MM',
          name: 'Cook Tornado Coil 4mm x 2mm',
          lotNumber: 'LOT-44102',
          cappedPriceInr: 12000,
          disposition: 'WASTED_CONTAMINATED', // Dropped on floor / contaminated in angiosuite
          wasteReason: 'Dropped sterile field in procedure',
        },
      ],
      clinicalIndication: 'Hepatocellular Carcinoma Segment VII',
      diagnosis: 'HCC',
      icd10Code: 'C22.0',
      renalProfile: {
        serumCreatinineMgDl: 0.9,
        egfrMlmIn: 88,
        inr: 1.1,
        plateletCount: 180000,
        contrastDeliveredMl: 40,
        cigarroaMacdMl: 180,
        macdRatio: 0.22,
      },
      dosimetry: {
        fluoroTimeMinutes: 19.5,
        dapGyCm2: 48,
        airKermaMGy: 1100,
        angiosuite: 'CathLab 1 (Philips Azurion 7)',
      },
      techniqueSummary: {
        accessSite: 'Right Common Femoral Artery',
        sheathSize: '5F 11cm Terumo Radifocus',
        catheterUsed: '5F Cobra C2 + 2.7F Progreat',
        hemostasisMethod: 'Manual compression 15 min',
        immediateComplications: 'None',
      },
      consultant: {
        name: 'Dr. Neel Yadav',
        title: 'Assistant Professor & In-Charge',
        medicalRegNo: 'RMC-45129',
        department: 'Division of Interventional Radiology, SMS Medical College, Jaipur',
      },
    };

    it('excludes WASTED_CONTAMINATED hardware from total tariff calculations in pre-auth PDF', () => {
      const result = buildPreAuthDossierPdf(baseDossierInput);

      expect(result.pdfBuffer).toBeDefined();
      expect(result.contentLength).toBeGreaterThan(0);
      expect(result.verificationHash).toBeDefined();

      // Base: 35,000 + Implanted Microcatheter: 18,500 = 53,500
      // Wasted Coil (12,000) MUST NOT be billed to Rajasthan MAAY / RGHS
      // Check that total claim reflects 53,500 and not 65,500
      const pdfText = Buffer.from(result.pdfBuffer).toString('latin1');
      expect(pdfText).toContain('53,500');
      expect(pdfText).not.toContain('65,500');
    });
  });
});
