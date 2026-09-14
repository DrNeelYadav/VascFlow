import { describe, it, expect } from 'vitest';
import {
  PROCEDURE_WORKUP_TEMPLATES,
  getWorkupTemplateForProtocol
} from '../data/procedureWorkupTemplates';
import { DRUG_PROTOCOLS } from '../data/protocolsData';

describe('IR Pre-Booking Clinical Workup & Dossier Templates Suite', () => {
  describe('Budd-Chiari Syndrome (BCS) & DIPS/TIPS Template Integrity', () => {
    const bcs = PROCEDURE_WORKUP_TEMPLATES['bcs'];

    it('defines the BCS pre-booking template with correct protocol linkage', () => {
      expect(bcs).toBeDefined();
      expect(bcs.protocolId).toBe('bcs');
      expect(bcs.urgencyTier).toBe('Priority (Within 24-48h)');
      expect(bcs.defaultDiagnosis).toContain('Budd-Chiari');
      expect(bcs.defaultDiagnosis).toContain('I82.0');
    });

    it('contains ascites in common history with pre-labeled 6 months duration', () => {
      const ascites = bcs.commonHistory.find((h) => h.id === 'ascites');
      expect(ascites).toBeDefined();
      expect(ascites?.defaultPresent).toBe(true);
      expect(ascites?.defaultDuration).toBe('6 months');
      expect(ascites?.label).toContain('Ascites');
    });

    it('contains other key BCS clinical symptoms in common history', () => {
      const historyIds = bcs.commonHistory.map((h) => h.id);
      expect(historyIds).toContain('abdominal_fullness');
      expect(historyIds).toContain('pedal_edema');
      expect(historyIds).toContain('jaundice');
      expect(historyIds).toContain('upper_gi_bleed');
    });

    it('contains specialized pre-procedure anatomical screening for hepatic veins, IVC, IJV, and caudate-to-RPV distance', () => {
      const screenIds = bcs.screeningChecklist.map((s) => s.id);
      expect(screenIds).toContain('hepatic_vein_status');
      expect(screenIds).toContain('ivc_status');
      expect(screenIds).toContain('ijv_status');
      expect(screenIds).toContain('caudate_rpv_distance');
      expect(screenIds).toContain('portal_vein_status');

      const caudateItem = bcs.screeningChecklist.find((s) => s.id === 'caudate_rpv_distance');
      expect(caudateItem?.label).toContain('Caudate-to-Right Portal Vein');
      expect(caudateItem?.defaultValue).toContain('DIPS');

      const hvItem = bcs.screeningChecklist.find((s) => s.id === 'hepatic_vein_status');
      expect(hvItem?.options).toBeDefined();
      expect(hvItem?.options?.length).toBeGreaterThanOrEqual(3);

      const ijvItem = bcs.screeningChecklist.find((s) => s.id === 'ijv_status');
      expect(ijvItem?.defaultValue).toContain('Internal Jugular Vein');
    });

    it('contains comprehensive DIPS/TIPS hardware and consumables checklist', () => {
      const hardwareItems = bcs.hardwareList.map((h) => h.item.toLowerCase());
      
      // Sheath
      expect(hardwareItems.some((i) => i.includes('10f') && i.includes('sheath'))).toBe(true);
      // TIPS Needle Set
      expect(hardwareItems.some((i) => i.includes('rösch-uchida') || i.includes('tips puncture'))).toBe(true);
      // Stiff Guidewires
      expect(hardwareItems.some((i) => i.includes('glidewire'))).toBe(true);
      expect(hardwareItems.some((i) => i.includes('amplatz'))).toBe(true);
      // Balloons
      expect(hardwareItems.some((i) => i.includes('balloon'))).toBe(true);
      // Gore Viatorr Endoprosthesis
      expect(hardwareItems.some((i) => i.includes('gore viatorr'))).toBe(true);
      // Embolization Coils
      expect(hardwareItems.some((i) => i.includes('coils'))).toBe(true);
    });

    it('contains a detailed step-by-step clinical execution plan ending with target HVPG/gradient', () => {
      expect(bcs.defaultPlan).toBeDefined();
      expect(bcs.defaultPlan).toContain('Ultrasound-guided puncture of Right Internal Jugular Vein');
      expect(bcs.defaultPlan).toContain('DIPS');
      expect(bcs.defaultPlan).toContain('Gore Viatorr');
      expect(bcs.defaultPlan).toContain('gradient');
    });
  });

  describe('Other Specialized Procedure Templates', () => {
    it('provides tailored template for TACE with doxorubicin/lipiodol and hepatic artery anatomy', () => {
      const tace = PROCEDURE_WORKUP_TEMPLATES['tace'];
      expect(tace).toBeDefined();
      expect(tace.defaultDiagnosis).toContain('Hepatocellular Carcinoma');
      expect(tace.hardwareList.some((h) => h.item.toLowerCase().includes('lipiodol'))).toBe(true);
      expect(tace.hardwareList.some((h) => h.item.toLowerCase().includes('doxorubicin'))).toBe(true);
    });

    it('provides tailored template for BAE with spinal artery safety screen and microparticles', () => {
      const bae = PROCEDURE_WORKUP_TEMPLATES['bae'];
      expect(bae).toBeDefined();
      expect(bae.defaultDiagnosis).toContain('Hemoptysis');
      expect(bae.screeningChecklist.some((s) => s.id === 'anterior_spinal_artery')).toBe(true);
      expect(bae.hardwareList.some((h) => h.item.toLowerCase().includes('pva'))).toBe(true);
    });

    it('provides tailored template for PTBD with biliary stricture screening and Ring drainage catheter', () => {
      const ptbd = PROCEDURE_WORKUP_TEMPLATES['ptbd'];
      expect(ptbd).toBeDefined();
      expect(ptbd.defaultDiagnosis).toContain('Biliary');
      expect(ptbd.hardwareList.some((h) => h.item.toLowerCase().includes('chiba'))).toBe(true);
      expect(ptbd.hardwareList.some((h) => h.item.toLowerCase().includes('ring'))).toBe(true);
    });

    it('provides tailored template for DVT Thrombolysis with popliteal access and May-Thurner screening', () => {
      const dvt = PROCEDURE_WORKUP_TEMPLATES['dvt_thrombolysis'];
      expect(dvt).toBeDefined();
      expect(dvt.defaultDiagnosis).toContain('Deep Vein Thrombosis');
      expect(dvt.screeningChecklist.some((s) => s.id === 'ct_venogram_may_thurner')).toBe(true);
      expect(dvt.hardwareList.some((h) => h.item.toLowerCase().includes('rtpa') || h.item.toLowerCase().includes('alteplase'))).toBe(true);
    });

    it('provides tailored template for EVAR/TEVAR with aortic neck screening and ProGlide pre-close', () => {
      const evar = PROCEDURE_WORKUP_TEMPLATES['evar_tevar'];
      expect(evar).toBeDefined();
      expect(evar.defaultDiagnosis).toContain('Aortic Aneurysm');
      expect(evar.screeningChecklist.some((s) => s.id === 'proximal_neck')).toBe(true);
      expect(evar.hardwareList.some((h) => h.item.toLowerCase().includes('proglide'))).toBe(true);
    });
  });

  describe('Universal Fallback Generator for All 46 Protocols', () => {
    it('dynamically generates valid pre-booking templates for every protocol in DRUG_PROTOCOLS', () => {
      for (const proto of DRUG_PROTOCOLS) {
        const t = getWorkupTemplateForProtocol(proto.id, proto.name);
        expect(t).toBeDefined();
        expect(t.protocolId).toBe(proto.id);
        expect(t.procedureName).toBeDefined();
        expect(t.commonHistory.length).toBeGreaterThanOrEqual(3);
        expect(t.screeningChecklist.length).toBeGreaterThanOrEqual(2);
        expect(t.hardwareList.length).toBeGreaterThanOrEqual(4);
        expect(t.defaultPlan.length).toBeGreaterThan(50);
      }
    });
  });
});
