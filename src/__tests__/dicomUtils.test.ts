import { describe, it, expect } from 'vitest';
import {
  validateDicomPreamble,
  formatDicomPersonName,
  calculateHounsfieldUnits,
  computeWindowedPixel,
  parseDicomHeader,
  buildWadoRsUrl,
  buildQidoSearchUrl,
  dicomToPatientProfile,
  DICOM_WINDOW_PRESETS
} from '../lib/dicomUtils';

describe('DICOM Utilities Module', () => {
  describe('Preamble & Header Validation', () => {
    it('returns false for buffer smaller than 132 bytes', () => {
      const buffer = new ArrayBuffer(50);
      expect(validateDicomPreamble(buffer)).toBe(false);
    });

    it('returns true when "DICM" magic prefix is at byte 128', () => {
      const buffer = new ArrayBuffer(132);
      const view = new DataView(buffer);
      view.setUint8(128, 0x44); // 'D'
      view.setUint8(129, 0x49); // 'I'
      view.setUint8(130, 0x43); // 'C'
      view.setUint8(131, 0x4d); // 'M'
      expect(validateDicomPreamble(buffer)).toBe(true);
    });

    it('returns false when preamble has wrong magic bytes', () => {
      const buffer = new ArrayBuffer(132);
      const view = new DataView(buffer);
      view.setUint8(128, 0x4e); // 'N'
      view.setUint8(129, 0x4f); // 'O'
      view.setUint8(130, 0x50); // 'P'
      view.setUint8(131, 0x45); // 'E'
      expect(validateDicomPreamble(buffer)).toBe(false);
    });
  });

  describe('Name Formatting & Pixel Math', () => {
    it('formats DICOM Person Name (PN) correctly', () => {
      expect(formatDicomPersonName('Sharma^Rajesh^Kumar')).toBe('Rajesh Kumar Sharma');
      expect(formatDicomPersonName('Devi^Kamla')).toBe('Kamla Devi');
      expect(formatDicomPersonName('SingleName')).toBe('SingleName');
      expect(formatDicomPersonName('')).toBe('');
    });

    it('computes Hounsfield Units accurately using slope and intercept', () => {
      // HU = (PixelValue * RescaleSlope) + RescaleIntercept
      expect(calculateHounsfieldUnits(1000, -1024, 1)).toBe(-24);
      expect(calculateHounsfieldUnits(2048, -1000, 2)).toBe(3096);
      expect(calculateHounsfieldUnits(500)).toBe(500); // defaults: intercept=0, slope=1
    });

    it('computes windowed grayscale pixel (0-255) correctly', () => {
      const center = 40;
      const width = 400; // range is -160 to 240

      // Below lower bound
      expect(computeWindowedPixel(-200, center, width)).toBe(0);
      // At lower bound
      expect(computeWindowedPixel(-160, center, width)).toBe(0);
      // Above upper bound
      expect(computeWindowedPixel(300, center, width)).toBe(255);
      // Exactly at center
      expect(computeWindowedPixel(40, center, width)).toBe(128);
    });

    it('verifies standard presets exist and have valid bounds', () => {
      expect(DICOM_WINDOW_PRESETS.ANGIOGRAPHY).toBeDefined();
      expect(DICOM_WINDOW_PRESETS.ANGIOGRAPHY.windowCenter).toBe(300);
      expect(DICOM_WINDOW_PRESETS.ANGIOGRAPHY.windowWidth).toBe(600);
      expect(DICOM_WINDOW_PRESETS.LIVER.windowCenter).toBe(60);
      expect(DICOM_WINDOW_PRESETS.LIVER.windowWidth).toBe(150);
    });
  });

  describe('DICOM Part 10 In-Memory Parsing', () => {
    it('parses explicit VR tags from a synthesized DICOM buffer', () => {
      // Create a 256-byte buffer with valid preamble and explicit VR tags
      const buffer = new ArrayBuffer(256);
      const view = new DataView(buffer);

      // Preamble 'DICM'
      view.setUint8(128, 0x44);
      view.setUint8(129, 0x49);
      view.setUint8(130, 0x43);
      view.setUint8(131, 0x4d);

      let offset = 132;

      // Tag 1: (0010, 0020) PatientID: VR="LO", length=8, value="CR-90120"
      view.setUint16(offset, 0x0010, true);
      view.setUint16(offset + 2, 0x0020, true);
      view.setUint8(offset + 4, 'L'.charCodeAt(0));
      view.setUint8(offset + 5, 'O'.charCodeAt(0));
      view.setUint16(offset + 6, 8, true);
      const patIdBytes = new TextEncoder().encode('CR-90120');
      new Uint8Array(buffer, offset + 8, 8).set(patIdBytes);
      offset += 16;

      // Tag 2: (0008, 0060) Modality: VR="CS", length=2, value="XA" (Cath Lab Angiography)
      view.setUint16(offset, 0x0008, true);
      view.setUint16(offset + 2, 0x0060, true);
      view.setUint8(offset + 4, 'C'.charCodeAt(0));
      view.setUint8(offset + 5, 'S'.charCodeAt(0));
      view.setUint16(offset + 6, 2, true);
      const modBytes = new TextEncoder().encode('XA');
      new Uint8Array(buffer, offset + 8, 2).set(modBytes);
      offset += 10;

      const metadata = parseDicomHeader(buffer);
      expect(metadata.patientId).toBe('CR-90120');
      expect(metadata.modality).toBe('XA');
    });
  });

  describe('DICOMweb URL Construction', () => {
    const config = {
      baseUrl: 'https://pacs.sms-hospital.rajasthan.gov.in/dicomweb',
      wadoRsPrefix: 'wado',
      qidoRsPrefix: 'qido'
    };

    it('builds standard WADO-RS instance and frame URLs', () => {
      const urlInstance = buildWadoRsUrl(config, {
        studyInstanceUid: '1.2.840.10008.1',
        seriesInstanceUid: '1.2.840.10008.2',
        sopInstanceUid: '1.2.840.10008.3'
      });
      expect(urlInstance).toBe(
        'https://pacs.sms-hospital.rajasthan.gov.in/dicomweb/wado/studies/1.2.840.10008.1/series/1.2.840.10008.2/instances/1.2.840.10008.3'
      );

      const urlFrame = buildWadoRsUrl(config, {
        studyInstanceUid: '1.2.840.10008.1',
        seriesInstanceUid: '1.2.840.10008.2',
        sopInstanceUid: '1.2.840.10008.3',
        frameNumber: 5
      });
      expect(urlFrame).toBe(
        'https://pacs.sms-hospital.rajasthan.gov.in/dicomweb/wado/studies/1.2.840.10008.1/series/1.2.840.10008.2/instances/1.2.840.10008.3/frames/5'
      );
    });

    it('builds QIDO-RS search URL with query parameters', () => {
      const qidoUrl = buildQidoSearchUrl(config, {
        patientId: 'CR-2026-9012',
        modality: 'XA',
        studyDate: '20260913'
      });
      expect(qidoUrl).toContain('PatientID=CR-2026-9012');
      expect(qidoUrl).toContain('ModalitiesInStudy=XA');
      expect(qidoUrl).toContain('StudyDate=20260913');
    });

    it('maps DICOM metadata to SMS Hospital PatientSafetyProfile', () => {
      const profile = dicomToPatientProfile({
        patientId: 'CR-2026-7841',
        patientName: 'Sharma^Rajesh',
        patientBirthDate: '19740510',
        patientSex: 'M',
        modality: 'XA',
        studyDescription: 'PARTO Gastric Varices Embolization',
        studyInstanceUid: '1.2.3',
        seriesInstanceUid: '1.2.3.4',
        sopInstanceUid: '1.2.3.4.5'
      });

      expect(profile.crNo).toBe('CR-2026-7841');
      expect(profile.name).toBe('Rajesh Sharma');
      expect(profile.gender).toBe('Male');
      expect(profile.age).toBeGreaterThanOrEqual(50);
      expect(profile.procedureName).toBe('PARTO Gastric Varices Embolization');
    });
  });
});
