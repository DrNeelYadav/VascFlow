/**
 * DICOM Utilities & Parser Module
 *
 * Implements standard DICOM Part 10 byte-stream parsing, tag identification,
 * Hounsfield Unit (HU) window/level contrast calculations, and DICOMweb (WADO-RS / QIDO-RS)
 * URL generation for the SMS Medical College Interventional Radiology suite.
 *
 * Compatible with cornerstonejs/dicomParser, dcmjs, and @cornerstonejs/core.
 */

import { PatientSafetyProfile } from '../types/clinical';

export interface DicomTag {
  group: number;
  element: number;
  tagHex: string;
  name: string;
  vr?: string;
}

export interface DicomWindowLevel {
  windowCenter: number;
  windowWidth: number;
}

export interface DicomPixelSpacing {
  rowSpacing: number;
  columnSpacing: number;
}

export interface DicomMetadata {
  patientId: string;
  patientName: string;
  patientBirthDate?: string;
  patientSex?: 'M' | 'F' | 'O' | string;
  accessionNumber?: string;
  studyDate?: string;
  studyTime?: string;
  modality: string;
  studyDescription: string;
  seriesDescription?: string;
  studyInstanceUid: string;
  seriesInstanceUid: string;
  sopInstanceUid: string;
  sopClassUid?: string;
  rows?: number;
  columns?: number;
  pixelSpacing?: DicomPixelSpacing;
  bitsAllocated?: number;
  bitsStored?: number;
  highBit?: number;
  pixelRepresentation?: number; // 0 = unsigned, 1 = signed
  samplesPerPixel?: number;
  photometricInterpretation?: string;
  windowCenter?: number;
  windowWidth?: number;
  rescaleIntercept?: number;
  rescaleSlope?: number;
  kvp?: number;
  xRayTubeCurrent?: number;
  exposureTime?: number;
  radiationDose?: number;
}

export interface DicomWebConfig {
  baseUrl: string;
  wadoRsPrefix?: string;
  qidoRsPrefix?: string;
  stowRsPrefix?: string;
  headers?: Record<string, string>;
}

/**
 * Standard Radiology Window/Level Presets
 * Optimized for diagnostic and interventional angiography workflows.
 */
export const DICOM_WINDOW_PRESETS: Record<string, DicomWindowLevel & { description: string }> = {
  ANGIOGRAPHY: {
    windowCenter: 300,
    windowWidth: 600,
    description: 'Cath Lab DSA Angiography & Vascular Roadmapping'
  },
  SOFT_TISSUE: {
    windowCenter: 40,
    windowWidth: 400,
    description: 'Abdominal & Soft Tissue Window'
  },
  LIVER: {
    windowCenter: 60,
    windowWidth: 150,
    description: 'Hepatic Parenchyma & HCC Margin Evaluation'
  },
  BONE: {
    windowCenter: 500,
    windowWidth: 2000,
    description: 'Osseous Structures & Skeletal Interventions'
  },
  LUNG: {
    windowCenter: -600,
    windowWidth: 1500,
    description: 'Pulmonary Parenchyma & Bronchial Anatomy'
  },
  BRAIN: {
    windowCenter: 40,
    windowWidth: 80,
    description: 'Cerebral Parenchyma & Acute Stroke Protocol'
  }
};

/**
 * Common DICOM Tag Hex Codes (Group, Element)
 */
export const DICOM_TAGS = {
  TransferSyntaxUID: '0002,0010',
  SOPClassUID: '0008,0016',
  SOPInstanceUID: '0008,0018',
  StudyDate: '0008,0020',
  StudyTime: '0008,0030',
  AccessionNumber: '0008,0050',
  Modality: '0008,0060',
  Manufacturer: '0008,0070',
  StudyDescription: '0008,1030',
  SeriesDescription: '0008,103E',
  PatientName: '0010,0010',
  PatientID: '0010,0020',
  PatientBirthDate: '0010,0030',
  PatientSex: '0010,0040',
  KVP: '0018,0060',
  ExposureTime: '0018,1150',
  XRayTubeCurrent: '0018,1151',
  RadiationDose: '0018,115A',
  StudyInstanceUID: '0020,000D',
  SeriesInstanceUID: '0020,000E',
  InstanceNumber: '0020,0013',
  SamplesPerPixel: '0028,0002',
  PhotometricInterpretation: '0028,0004',
  Rows: '0028,0010',
  Columns: '0028,0011',
  PixelSpacing: '0028,0030',
  BitsAllocated: '0028,0100',
  BitsStored: '0028,0101',
  HighBit: '0028,0102',
  PixelRepresentation: '0028,0103',
  WindowCenter: '0028,1050',
  WindowWidth: '0028,1051',
  RescaleIntercept: '0028,1052',
  RescaleSlope: '0028,1053'
} as const;

/**
 * Checks if a byte buffer starts with a valid DICOM Part 10 preamble ('DICM' at offset 128).
 */
export function validateDicomPreamble(buffer: ArrayBuffer): boolean {
  if (buffer.byteLength < 132) {
    return false;
  }
  const view = new DataView(buffer);
  // 'D' = 68, 'I' = 73, 'C' = 67, 'M' = 77
  return (
    view.getUint8(128) === 0x44 &&
    view.getUint8(129) === 0x49 &&
    view.getUint8(130) === 0x43 &&
    view.getUint8(131) === 0x4d
  );
}

/**
 * Formats a DICOM Person Name (PN) string from 'LAST^FIRST^MIDDLE' to 'First Middle Last'.
 */
export function formatDicomPersonName(rawName: string): string {
  if (!rawName) return '';
  const parts = rawName.split('^').map((p) => p.trim()).filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0];
  const [last, first, ...middle] = parts;
  return [first, ...middle, last].filter(Boolean).join(' ');
}

/**
 * Converts a raw stored pixel value to Hounsfield Units (HU) using DICOM Rescale Slope & Intercept.
 * Formula: HU = (PixelValue * RescaleSlope) + RescaleIntercept
 */
export function calculateHounsfieldUnits(
  pixelValue: number,
  rescaleIntercept = 0,
  rescaleSlope = 1
): number {
  return pixelValue * rescaleSlope + rescaleIntercept;
}

/**
 * Maps a Hounsfield Unit (HU) or raw value to an 8-bit grayscale display value (0-255)
 * according to the specified Window Center and Window Width.
 */
export function computeWindowedPixel(
  huValue: number,
  windowCenter: number,
  windowWidth: number
): number {
  if (windowWidth <= 0) windowWidth = 1;
  const lowerBound = windowCenter - windowWidth / 2;
  const upperBound = windowCenter + windowWidth / 2;

  if (huValue <= lowerBound) return 0;
  if (huValue >= upperBound) return 255;
  return Math.round(((huValue - lowerBound) / windowWidth) * 255);
}

/**
 * Parses raw DICOM Part 10 binary buffer into a structured DicomMetadata object.
 * Implements tag detection for both Explicit and Implicit VR Little Endian data elements.
 */
export function parseDicomHeader(buffer: ArrayBuffer): DicomMetadata {
  const metadata: DicomMetadata = {
    patientId: '',
    patientName: '',
    modality: 'OT',
    studyDescription: '',
    studyInstanceUid: '',
    seriesInstanceUid: '',
    sopInstanceUid: ''
  };

  if (buffer.byteLength < 132) {
    throw new Error('Invalid DICOM buffer: Buffer length is less than 132 bytes');
  }

  const isPart10 = validateDicomPreamble(buffer);
  let offset = isPart10 ? 132 : 0;
  const view = new DataView(buffer);
  const textDecoder = new TextDecoder('latin1');

  // Helper to read ASCII string
  const readString = (start: number, length: number): string => {
    if (start + length > buffer.byteLength) return '';
    const bytes = new Uint8Array(buffer, start, length);
    return textDecoder.decode(bytes).replace(/\0/g, '').trim();
  };

  // Known 2-byte VR types with 2-byte length field in Explicit VR
  const shortVRs = new Set([
    'AE', 'AS', 'AT', 'CS', 'DA', 'DS', 'DT', 'FL', 'FD',
    'IS', 'LO', 'LT', 'PN', 'SH', 'SL', 'SS', 'ST', 'TM', 'UI', 'UL', 'US'
  ]);

  // Read tags until EOF or PixelData (7FE0, 0010)
  while (offset + 8 <= buffer.byteLength) {
    const group = view.getUint16(offset, true);
    const element = view.getUint16(offset + 2, true);
    offset += 4;

    // Check if Explicit VR by testing ASCII characters
    const vrChar1 = String.fromCharCode(view.getUint8(offset));
    const vrChar2 = String.fromCharCode(view.getUint8(offset + 1));
    const candidateVR = vrChar1 + vrChar2;

    let vr = '';
    let length = 0;

    if (shortVRs.has(candidateVR)) {
      vr = candidateVR;
      length = view.getUint16(offset + 2, true);
      offset += 4;
    } else if (['OB', 'OW', 'OF', 'OD', 'SQ', 'UC', 'UR', 'UT', 'UN'].includes(candidateVR)) {
      vr = candidateVR;
      // 2 reserved bytes, followed by 32-bit length
      length = view.getUint32(offset + 4, true);
      offset += 8;
    } else {
      // Implicit VR Little Endian: 4-byte length directly
      length = view.getUint32(offset, true);
      offset += 4;
    }

    // Handle undefined length (0xFFFFFFFF)
    if (length === 0xffffffff) {
      if (group === 0x7fe0 && element === 0x0010) {
        break; // Pixel Data reached
      }
      continue;
    }

    if (offset + length > buffer.byteLength) {
      break;
    }

    const tagKey = `${group.toString(16).padStart(4, '0').toUpperCase()},${element.toString(16).padStart(4, '0').toUpperCase()}`;

    // Map extracted tags
    switch (tagKey) {
      case DICOM_TAGS.PatientID:
        metadata.patientId = readString(offset, length);
        break;
      case DICOM_TAGS.PatientName:
        metadata.patientName = formatDicomPersonName(readString(offset, length));
        break;
      case DICOM_TAGS.PatientBirthDate:
        metadata.patientBirthDate = readString(offset, length);
        break;
      case DICOM_TAGS.PatientSex:
        metadata.patientSex = readString(offset, length);
        break;
      case DICOM_TAGS.Modality:
        metadata.modality = readString(offset, length);
        break;
      case DICOM_TAGS.StudyDate:
        metadata.studyDate = readString(offset, length);
        break;
      case DICOM_TAGS.StudyTime:
        metadata.studyTime = readString(offset, length);
        break;
      case DICOM_TAGS.AccessionNumber:
        metadata.accessionNumber = readString(offset, length);
        break;
      case DICOM_TAGS.StudyDescription:
        metadata.studyDescription = readString(offset, length);
        break;
      case DICOM_TAGS.SeriesDescription:
        metadata.seriesDescription = readString(offset, length);
        break;
      case DICOM_TAGS.StudyInstanceUID:
        metadata.studyInstanceUid = readString(offset, length);
        break;
      case DICOM_TAGS.SeriesInstanceUID:
        metadata.seriesInstanceUid = readString(offset, length);
        break;
      case DICOM_TAGS.SOPInstanceUID:
        metadata.sopInstanceUid = readString(offset, length);
        break;
      case DICOM_TAGS.SOPClassUID:
        metadata.sopClassUid = readString(offset, length);
        break;
      case DICOM_TAGS.Rows:
        metadata.rows = length === 2 ? view.getUint16(offset, true) : undefined;
        break;
      case DICOM_TAGS.Columns:
        metadata.columns = length === 2 ? view.getUint16(offset, true) : undefined;
        break;
      case DICOM_TAGS.BitsAllocated:
        metadata.bitsAllocated = length === 2 ? view.getUint16(offset, true) : undefined;
        break;
      case DICOM_TAGS.BitsStored:
        metadata.bitsStored = length === 2 ? view.getUint16(offset, true) : undefined;
        break;
      case DICOM_TAGS.HighBit:
        metadata.highBit = length === 2 ? view.getUint16(offset, true) : undefined;
        break;
      case DICOM_TAGS.PixelRepresentation:
        metadata.pixelRepresentation = length === 2 ? view.getUint16(offset, true) : undefined;
        break;
      case DICOM_TAGS.PhotometricInterpretation:
        metadata.photometricInterpretation = readString(offset, length);
        break;
      case DICOM_TAGS.WindowCenter: {
        const strVal = readString(offset, length);
        metadata.windowCenter = parseFloat(strVal.split('\\')[0]) || undefined;
        break;
      }
      case DICOM_TAGS.WindowWidth: {
        const strVal = readString(offset, length);
        metadata.windowWidth = parseFloat(strVal.split('\\')[0]) || undefined;
        break;
      }
      case DICOM_TAGS.RescaleIntercept: {
        const strVal = readString(offset, length);
        metadata.rescaleIntercept = parseFloat(strVal) || 0;
        break;
      }
      case DICOM_TAGS.RescaleSlope: {
        const strVal = readString(offset, length);
        metadata.rescaleSlope = parseFloat(strVal) || 1;
        break;
      }
      case DICOM_TAGS.PixelSpacing: {
        const spacingStr = readString(offset, length);
        const parts = spacingStr.split('\\').map((p) => parseFloat(p));
        if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          metadata.pixelSpacing = { rowSpacing: parts[0], columnSpacing: parts[1] };
        }
        break;
      }
      case DICOM_TAGS.KVP: {
        const strVal = readString(offset, length);
        metadata.kvp = parseFloat(strVal) || undefined;
        break;
      }
      case DICOM_TAGS.RadiationDose: {
        const strVal = readString(offset, length);
        metadata.radiationDose = parseFloat(strVal) || undefined;
        break;
      }
    }

    offset += length;

    // Stop early if we reached Pixel Data tag (7FE0,0010)
    if (group === 0x7fe0 && element === 0x0010) {
      break;
    }
  }

  return metadata;
}

/**
 * Builds a WADO-RS URL for fetching a DICOM instance or frame from a PACS/DICOMweb server.
 * Standard format: {baseUrl}/studies/{studyUid}/series/{seriesUid}/instances/{instanceUid}[/frames/{frameNumber}]
 */
export function buildWadoRsUrl(
  config: DicomWebConfig,
  params: {
    studyInstanceUid: string;
    seriesInstanceUid: string;
    sopInstanceUid: string;
    frameNumber?: number;
  }
): string {
  const root = config.baseUrl.replace(/\/+$/, '');
  const prefix = config.wadoRsPrefix ? `/${config.wadoRsPrefix.replace(/^\/+|\/+$/g, '')}` : '';
  let url = `${root}${prefix}/studies/${params.studyInstanceUid}/series/${params.seriesInstanceUid}/instances/${params.sopInstanceUid}`;

  if (params.frameNumber && params.frameNumber > 0) {
    url += `/frames/${params.frameNumber}`;
  }
  return url;
}

/**
 * Builds a QIDO-RS search URL for querying studies from a PACS server.
 * Standard format: {baseUrl}/studies?PatientID={patientId}&ModalitiesInStudy={modality}
 */
export function buildQidoSearchUrl(
  config: DicomWebConfig,
  query: {
    patientId?: string;
    patientName?: string;
    modality?: string;
    studyDate?: string;
    accessionNumber?: string;
    limit?: number;
  }
): string {
  const root = config.baseUrl.replace(/\/+$/, '');
  const prefix = config.qidoRsPrefix ? `/${config.qidoRsPrefix.replace(/^\/+|\/+$/g, '')}` : '';
  const searchParams = new URLSearchParams();

  if (query.patientId) searchParams.set('PatientID', query.patientId);
  if (query.patientName) searchParams.set('PatientName', query.patientName);
  if (query.modality) searchParams.set('ModalitiesInStudy', query.modality);
  if (query.studyDate) searchParams.set('StudyDate', query.studyDate);
  if (query.accessionNumber) searchParams.set('AccessionNumber', query.accessionNumber);
  if (query.limit) searchParams.set('limit', String(query.limit));

  const queryString = searchParams.toString();
  return `${root}${prefix}/studies${queryString ? `?${queryString}` : ''}`;
}

/**
 * Extracts and maps DICOM metadata to a partial SMS Hospital PatientSafetyProfile.
 */
export function dicomToPatientProfile(
  metadata: DicomMetadata
): Partial<PatientSafetyProfile> {
  const genderMap: Record<string, 'Male' | 'Female' | 'Other'> = {
    M: 'Male',
    F: 'Female',
    O: 'Other'
  };

  let calculatedAge = 50;
  if (metadata.patientBirthDate && metadata.patientBirthDate.length === 8) {
    const birthYear = parseInt(metadata.patientBirthDate.substring(0, 4), 10);
    const currentYear = new Date().getFullYear();
    if (!isNaN(birthYear) && birthYear > 1900 && birthYear <= currentYear) {
      calculatedAge = currentYear - birthYear;
    }
  }

  return {
    crNo: metadata.patientId || 'CR-UNKNOWN',
    name: formatDicomPersonName(metadata.patientName) || 'Anonymous Patient',
    age: calculatedAge,
    gender: genderMap[metadata.patientSex?.toUpperCase() || ''] || 'Male',
    procedureName: metadata.studyDescription || metadata.seriesDescription || 'Angiography / IR Procedure',
    diagnosis: metadata.studyDescription || 'Interventional Radiology Consultation'
  };
}
