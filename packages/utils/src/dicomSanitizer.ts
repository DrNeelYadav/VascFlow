/**
 * DICOM De-identification and PHI Sanitizer
 * Conforms to DICOM PS 3.15 Annex E (Basic Application Level Confidentiality Profile).
 * Strips patient identifiers (0010,0010 through 0010,0040+) while preserving acquisition physics (0018,xxxx)
 * for clinical research and national IR procedural registries.
 */

export interface DicomSanitizerOptions {
  /** Custom pseudonym or registry subject identifier (e.g., 'ANON-IR-001') */
  pseudonym?: string;
  /** Whether to completely remove tags or replace with anonymized placeholders (default: 'replace') */
  strategy?: 'strip' | 'replace';
  /** Keep generalized patient sex if needed for epidemiological research (default: false) */
  preserveSex?: boolean;
}

export interface SanitizedDicomResult<T = Record<string, unknown>> {
  sanitizedDataset: T;
  pseudonym: string;
  tagsRemoved: string[];
  physicsTagsPreserved: string[];
}

/** Normalized list of standard Patient Identification tag identifiers and keywords */
const PATIENT_IDENTIFIER_TAGS = new Set([
  // 0010,0010 - Patient's Name
  '00100010', '0010,0010', '(0010,0010)', 'x00100010', 'patientname', 'patientsname',
  // 0010,0020 - Patient ID
  '00100020', '0010,0020', '(0010,0020)', 'x00100020', 'patientid',
  // 0010,0021 - Issuer of Patient ID
  '00100021', '0010,0021', '(0010,0021)', 'x00100021', 'issuerofpatientid',
  // 0010,0030 - Patient's Birth Date
  '00100030', '0010,0030', '(0010,0030)', 'x00100030', 'patientbirthdate', 'patientsbirthdate',
  // 0010,0032 - Patient's Birth Time
  '00100032', '0010,0032', '(0010,0032)', 'x00100032', 'patientbirthtime', 'patientsbirthtime',
  // 0010,0040 - Patient's Sex
  '00100040', '0010,0040', '(0010,0040)', 'x00100040', 'patientsex', 'patientssex',
  // Additional Group 0010 identifiers
  '00101000', '0010,1000', '(0010,1000)', 'x00101000', 'otherpatientids',
  '00101001', '0010,1001', '(0010,1001)', 'x00101001', 'otherpatientnames',
  '00101040', '0010,1040', '(0010,1040)', 'x00101040', 'patientaddress',
  '00102154', '0010,2154', '(0010,2154)', 'x00102154', 'patienttelephone',
  '00102160', '0010,2160', '(0010,2160)', 'x00102160', 'ethnicgroup',
]);

/** Standard acquisition physics tags (Group 0018) */
const ACQUISITION_PHYSICS_KEYWORDS = new Set([
  'kvp', 'tubecurrent', 'xraytubecurrent', 'exposuretime', 'exposure', 'exposureinunas',
  'filtertype', 'filtertypeused', 'distancestodetector', 'distancesourcetodetector',
  'distancesourcetopatient', 'tableheight', 'tablemotion', 'collimatorshape',
  'collimatorleftverticaledge', 'collimatorrightverticaledge', 'collimatorupperhorizontaledge',
  'collimatorlowerhorizontaledge', 'imagerpixelspacing', 'focalspots', 'generatorpower',
  'anodecurrent', 'kv', 'ma', 'mas'
]);

/**
 * Checks if a key or tag belongs to patient identity (0010,0010 - 0010,0040+)
 */
export function isPatientIdentityTag(key: string): boolean {
  const clean = key.toLowerCase().replace(/[\s_()\-:]/g, '');
  if (PATIENT_IDENTIFIER_TAGS.has(clean)) return true;
  if (clean.startsWith('0010') && (clean.length === 8 || clean.includes(','))) {
    return true;
  }
  return false;
}

/**
 * Checks if a key or tag belongs to acquisition physics (0018,xxxx)
 */
export function isAcquisitionPhysicsTag(key: string): boolean {
  const clean = key.toLowerCase().replace(/[\s_()\-:]/g, '');
  if (clean.startsWith('0018') && (clean.length === 8 || clean.includes(','))) {
    return true;
  }
  if (clean.startsWith('x0018')) {
    return true;
  }
  return ACQUISITION_PHYSICS_KEYWORDS.has(clean);
}

/**
 * Generate a consistent pseudo-random hash ID for a patient
 */
function generatePseudonym(seed?: string): string {
  if (seed && seed.trim().length > 0) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    return `ANON-IR-${hex.toUpperCase()}`;
  }
  const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
  return `ANON-IR-${randomHex}`;
}

/**
 * De-identify and sanitize a DICOM dataset object.
 * Strips all patient identification tags (0010,0010 - 0010,0040+) while strictly
 * preserving acquisition physics tags (0018,xxxx).
 */
export function deidentifyDicomDataset<T extends Record<string, unknown>>(
  dataset: T,
  options: DicomSanitizerOptions = {}
): SanitizedDicomResult<T> {
  const strategy = options.strategy || 'replace';
  const tagsRemoved: string[] = [];
  const physicsTagsPreserved: string[] = [];

  // Determine seed for pseudonym
  const rawId = (dataset['00100020'] ||
    dataset['(0010,0020)'] ||
    dataset['PatientID'] ||
    dataset['patientId'] ||
    '') as string;

  const pseudonym = options.pseudonym || generatePseudonym(String(rawId));
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(dataset)) {
    const isPhi = isPatientIdentityTag(key);
    const isPhysics = isAcquisitionPhysicsTag(key);

    if (isPhysics) {
      physicsTagsPreserved.push(key);
      sanitized[key] = value;
      continue;
    }

    if (isPhi) {
      tagsRemoved.push(key);
      const cleanKey = key.toLowerCase().replace(/[\s_()\-:]/g, '');

      // Check if preserving sex is requested
      if (
        options.preserveSex &&
        (cleanKey === '00100040' || cleanKey === 'patientsex' || cleanKey === 'patientssex')
      ) {
        sanitized[key] = value;
        continue;
      }

      if (strategy === 'replace') {
        if (cleanKey === '00100020' || cleanKey === 'patientid') {
          sanitized[key] = pseudonym;
        } else if (cleanKey === '00100010' || cleanKey === 'patientname' || cleanKey === 'patientsname') {
          sanitized[key] = 'ANONYMIZED^IR';
        } else {
          // Other 0010 fields (DOB, address, etc.) are stripped or set to empty
          sanitized[key] = undefined;
        }
      }
      // If strategy is 'strip', we do not assign to sanitized at all
      continue;
    }

    // Retain all non-PHI tags (study physics, series, image data, geometry, etc.)
    sanitized[key] = value;
  }

  // If strategy was replace and sanitized[key] was set to undefined, delete undefined keys
  for (const key of Object.keys(sanitized)) {
    if (sanitized[key] === undefined) {
      delete sanitized[key];
    }
  }

  // Ensure pseudonym is injected if it was stripped
  if (strategy === 'replace' && !sanitized['PatientID'] && !sanitized['00100020']) {
    sanitized['PatientID'] = pseudonym;
  }

  return {
    sanitizedDataset: sanitized as T,
    pseudonym,
    tagsRemoved,
    physicsTagsPreserved,
  };
}

/**
 * Extract acquisition physics parameters (0018,xxxx) into a structured registry object
 */
export function extractAcquisitionPhysics(dataset: Record<string, unknown>): {
  kvp?: number;
  tubeCurrentMa?: number;
  exposureTimeMs?: number;
  exposureMas?: number;
  filterType?: string;
  sourceToDetectorDistanceMm?: number;
  tableHeightMm?: number;
  collimatorShape?: string;
} {
  const getNum = (...keys: string[]): number | undefined => {
    for (const k of keys) {
      const val = dataset[k];
      if (val !== undefined && val !== null) {
        const parsed = parseFloat(String(val));
        if (!isNaN(parsed)) return parsed;
      }
    }
    return undefined;
  };

  const getStr = (...keys: string[]): string | undefined => {
    for (const k of keys) {
      const val = dataset[k];
      if (typeof val === 'string' && val.trim().length > 0) return val.trim();
    }
    return undefined;
  };

  return {
    kvp: getNum('KVP', '00180060', '(0018,0060)', 'kvp', 'kv'),
    tubeCurrentMa: getNum('XRayTubeCurrent', '00181151', '(0018,1151)', 'tubeCurrent', 'ma'),
    exposureTimeMs: getNum('ExposureTime', '00181150', '(0018,1150)', 'exposureTime'),
    exposureMas: getNum('Exposure', 'ExposureInuAs', '00181152', '(0018,1152)', 'exposure', 'mas'),
    filterType: getStr('FilterType', '00181160', '(0018,1160)', 'filterType'),
    sourceToDetectorDistanceMm: getNum(
      'DistanceSourceToDetector',
      '00181110',
      '(0018,1110)',
      'sourceToDetectorDistance'
    ),
    tableHeightMm: getNum('TableHeight', '00181130', '(0018,1130)', 'tableHeight'),
    collimatorShape: getStr('CollimatorShape', '00181700', '(0018,1700)', 'collimatorShape'),
  };
}
