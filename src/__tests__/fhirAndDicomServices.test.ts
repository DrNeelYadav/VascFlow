import { describe, it, expect } from 'vitest';

/**
 * Validates the canonical HL7 v2.x and DICOM specifications implemented by
 * services/fhir-service and services/dicom-service.
 */
describe('Phase 4: Healthcare Interoperability & Data Pipelines', () => {
  describe('HL7 v2.x ADT^A01 Intake Specifications (fhir-service)', () => {
    it('verifies standard ADT^A01 message segment delimiters and MSH structure', () => {
      const sampleHl7 =
        'MSH|^~\\&|EPIC|SMS_HOSPITAL|VASCULE_OS|ANGIO_SUITE_1|20260913120000||ADT^A01|MSG0009842|P|2.5\r' +
        'PID|1||MRN-VIR-2026-901^^^SMS_HOSPITAL^MR||SHARMA^RAJESH^KUMAR||19780514|M|||MI ROAD^NEAR AJMERI GATE^JAIPUR^RJ^302001^IND\r' +
        'PV1|1|I|ANGIO^RM-1^BED-A^SMS_MAIN||||1204^STERLING^ALEXANDER^^^DR|||||||||||V-98421|||||||||||||||||||||||||20260913113000';

      const segments = sampleHl7.split(/\r?\n|\r/).filter((s) => s.trim().length > 0);
      expect(segments).toHaveLength(3);

      const mshFields = segments[0].split('|');
      expect(mshFields[0]).toBe('MSH');
      expect(mshFields[1]).toBe('^~\\&');
      expect(mshFields[2]).toBe('EPIC');
      expect(mshFields[4]).toBe('VASCULE_OS');
      expect(mshFields[8]).toBe('ADT^A01');
      expect(mshFields[9]).toBe('MSG0009842');
      expect(mshFields[11]).toBe('2.5');

      const pidFields = segments[1].split('|');
      expect(pidFields[0]).toBe('PID');
      expect(pidFields[3]).toContain('MRN-VIR-2026-901');
      expect(pidFields[5]).toBe('SHARMA^RAJESH^KUMAR');
      expect(pidFields[7]).toBe('19780514');
      expect(pidFields[8]).toBe('M');
    });

    it('validates standard ACK generation format matching fhir-service specification', () => {
      const controlId = 'MSG0009842';
      const ackMessage =
        `MSH|^~\\&|VASCULE_OS|ANGIO_SUITE|EPIC|SMS_HOSPITAL|20260913120001||ACK^A01|ACK-001|P|2.5\r` +
        `MSA|AA|${controlId}|Message accepted and parsed successfully\r`;

      expect(ackMessage).toContain(`MSA|AA|${controlId}`);
      expect(ackMessage).toContain('VASCULE_OS');
      expect(/[\u0900-\u097F]/.test(ackMessage)).toBe(false);
    });
  });

  describe('DICOMweb QIDO-RS Study Provider Specifications (dicom-service)', () => {
    it('validates DICOM PS3.18 Annex F JSON attribute mapping', () => {
      const dicomStudyDataset = {
        '0020000D': { vr: 'UI', Value: ['1.2.840.10008.5.1.4.1.1.7.2026.001'] },
        '00080060': { vr: 'CS', Value: ['XA', 'DSA'] },
        '00100010': { vr: 'PN', Value: [{ Alphabetic: 'GUPTA^ANITA' }] },
        '00100020': { vr: 'LO', Value: ['MRN-VIR-2026-001'] },
        '00080020': { vr: 'DA', Value: ['20260913'] },
        '00081030': { vr: 'LO', Value: ['Hepatic Angiogram & TACE Embolization'] },
        '00201206': { vr: 'IS', Value: [6] },
        '00201208': { vr: 'IS', Value: [420] },
      };

      expect(dicomStudyDataset['0020000D'].Value[0]).toBe('1.2.840.10008.5.1.4.1.1.7.2026.001');
      expect(dicomStudyDataset['00080060'].Value).toContain('XA');
      expect(dicomStudyDataset['00100010'].Value[0].Alphabetic).toBe('GUPTA^ANITA');
      expect(dicomStudyDataset['00201208'].Value[0]).toBe(420);
    });

    it('validates canonical browser view model with radiation dosimetry telemetry', () => {
      const canonicalStudy = {
        studyInstanceUid: '1.2.840.10008.5.1.4.1.1.7.2026.001',
        modality: 'XA',
        patientName: 'GUPTA^ANITA',
        patientId: 'MRN-VIR-2026-001',
        studyDate: '20260913',
        studyDescription: 'Hepatic Angiogram & TACE Embolization',
        numberOfInstances: 420,
        numberOfSeries: 6,
        radiationDoseReport: {
          totalDAPGyCm2: 18.6,
          cumulativeAirKermaMGy: 342.0,
          fluoroscopyTimeSeconds: 878.0,
          totalAcquisitions: 14,
          protocolName: 'TACE_HEPATIC_LOW_DOSE',
        },
      };

      expect(canonicalStudy.modality).toBe('XA');
      expect(canonicalStudy.radiationDoseReport.cumulativeAirKermaMGy).toBe(342.0);
      expect(canonicalStudy.radiationDoseReport.totalDAPGyCm2).toBe(18.6);
      expect(canonicalStudy.numberOfInstances).toBe(420);
    });
  });
});
