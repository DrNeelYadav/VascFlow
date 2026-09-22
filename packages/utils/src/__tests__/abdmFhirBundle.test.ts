import { describe, it, expect } from 'vitest';
import {
  generateDiagnosticReportBundle,
  resolveSnomedCode,
  resolveIcdCode,
  SNOMED_IR_PROCEDURES,
  LOINC_CODES,
} from '../fhir';

describe('ABDM HL7 FHIR R4 DiagnosticReport Bundle Suite', () => {
  describe('1. Terminology Resolvers', () => {
    it('resolves correct SNOMED CT codes for vascular procedures', () => {
      expect(resolveSnomedCode('Transcatheter arterial chemoembolization (TACE)').code).toBe('233527006');
      expect(resolveSnomedCode('Balloon Angioplasty PTA SFA').code).toBe('233529009');
      expect(resolveSnomedCode('TIPS creation').code).toBe('429402003');
      expect(resolveSnomedCode('Percutaneous biliary drainage PTBD').code).toBe('708064009');
      expect(resolveSnomedCode('Varicose vein cyanoacrylate ablation VenaSeal').code).toBe('713871006');
    });

    it('resolves correct ICD-10 codes for clinical indications', () => {
      expect(resolveIcdCode('HCC liver mass').code).toBe('C22.0');
      expect(resolveIcdCode('Portal hypertension').code).toBe('K76.6');
      expect(resolveIcdCode('Severe hemoptysis').code).toBe('R04.2');
      expect(resolveIcdCode('Chronic limb threatening ischemia CLTI').code).toBe('I70.22');
    });
  });

  describe('2. FHIR Document Bundle Assembly', () => {
    const mockCase = {
      caseId: 'CASE-2026-TACE-099',
      patientId: 'PT-994821',
      patientName: 'Ramesh Sharma',
      abhaId: '91-8839-2918-1002',
      uhid: 'SMS-UHID-2026-4401',
      age: 58,
      gender: 'male' as const,
      procedureName: 'Transcatheter Arterial Chemoembolization (TACE)',
      diagnosis: 'Hepatocellular carcinoma (HCC)',
      operatorName: 'Dr. Neel Yadav',
      dateTime: '2026-09-21T10:30:00.000Z',
      airKermaGy: 1.45,
      fluoroTimeMinutes: 18.5,
      contrastVolumeMl: 45,
      accessSite: 'Right Common Femoral Artery',
      sheathSize: '5F',
      findings: 'Hypervascular tumor blush in Segment VII supplied by right hepatic artery branch.',
      conclusion: 'Successful superselective TACE with Lipiodol and Doxorubicin emulsion followed by PVA particles.',
      hemostasisMethod: 'Angio-Seal 6F',
    };

    it('generates a valid FHIR R4 Bundle with type document and ABDM profile', () => {
      const bundle = generateDiagnosticReportBundle(mockCase);

      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('document');
      expect(bundle.meta?.profile).toContain(
        'https://nrces.in/ndhm/fhir/r4/StructureDefinition/DiagnosticReportRecord'
      );
      expect(bundle.entry.length).toBeGreaterThanOrEqual(5);
    });

    it('places Composition as the mandatory first resource in document bundle', () => {
      const bundle = generateDiagnosticReportBundle(mockCase);
      const firstEntry = bundle.entry[0];

      expect(firstEntry.resource.resourceType).toBe('Composition');
      expect((firstEntry.resource as any).title).toContain('Interventional Radiology Report');
      expect((firstEntry.resource as any).type.coding[0].code).toBe(LOINC_CODES.RADIOLOGY_REPORT.code);
    });

    it('encodes Patient resource with ABHA and UHID identifiers', () => {
      const bundle = generateDiagnosticReportBundle(mockCase);
      const patientEntry = bundle.entry.find((e) => e.resource.resourceType === 'Patient');

      expect(patientEntry).toBeDefined();
      const patient = patientEntry!.resource as any;
      expect(patient.name[0].text).toBe('Ramesh Sharma');
      expect(patient.gender).toBe('male');

      const abhaIdent = patient.identifier.find(
        (id: any) => id.system === 'https://healthid.ndhm.gov.in'
      );
      expect(abhaIdent).toBeDefined();
      expect(abhaIdent.value).toBe('91-8839-2918-1002');
    });

    it('encodes Procedure resource with SNOMED CT and ICD-10 codings', () => {
      const bundle = generateDiagnosticReportBundle(mockCase);
      const procEntry = bundle.entry.find((e) => e.resource.resourceType === 'Procedure');

      expect(procEntry).toBeDefined();
      const proc = procEntry!.resource as any;
      expect(proc.code.coding[0].system).toBe('http://snomed.info/sct');
      expect(proc.code.coding[0].code).toBe('233527006'); // TACE
      expect(proc.reasonCode[0].coding[0].system).toBe('http://hl7.org/fhir/sid/icd-10');
      expect(proc.reasonCode[0].coding[0].code).toBe('C22.0'); // HCC
    });

    it('encodes Observations for Radiation Dose, Fluoroscopy Time, and Contrast Volume', () => {
      const bundle = generateDiagnosticReportBundle(mockCase);
      const obsEntries = bundle.entry.filter((e) => e.resource.resourceType === 'Observation');

      expect(obsEntries.length).toBe(3);

      const doseObs = obsEntries.find(
        (e: any) => e.resource.code.coding[0].code === LOINC_CODES.RADIATION_DOSE.code
      );
      expect(doseObs).toBeDefined();
      expect((doseObs!.resource as any).valueQuantity.value).toBe(1.45);
      expect((doseObs!.resource as any).valueQuantity.unit).toBe('Gy');

      const fluoroObs = obsEntries.find(
        (e: any) => e.resource.code.coding[0].code === LOINC_CODES.FLUOROSCOPY_TIME.code
      );
      expect(fluoroObs).toBeDefined();
      expect((fluoroObs!.resource as any).valueQuantity.value).toBe(18.5);

      const contrastObs = obsEntries.find(
        (e: any) => e.resource.code.coding[0].code === LOINC_CODES.CONTRAST_VOLUME.code
      );
      expect(contrastObs).toBeDefined();
      expect((contrastObs!.resource as any).valueQuantity.value).toBe(45);
    });

    it('encodes DiagnosticReport with conclusions and linked observation references', () => {
      const bundle = generateDiagnosticReportBundle(mockCase);
      const reportEntry = bundle.entry.find((e) => e.resource.resourceType === 'DiagnosticReport');

      expect(reportEntry).toBeDefined();
      const report = reportEntry!.resource as any;
      expect(report.conclusion).toContain('Successful superselective TACE');
      expect(report.result.length).toBe(3);
    });
  });
});
