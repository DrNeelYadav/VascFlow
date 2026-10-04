/**
 * ABDM HL7 FHIR R4 DiagnosticReport Bundle Generator
 * Generates NHA/NRCES compliant FHIR R4 Document Bundles for Interventional Radiology procedures.
 * Embedded SNOMED CT, LOINC, and ICD-10 codings conform to ABDM M2/M3 diagnostic specifications.
 */

import {
  FhirBundle,
  FhirComposition,
  FhirDiagnosticReport,
  FhirObservation,
  FhirPatient,
  FhirPractitioner,
  FhirProcedure,
  FhirReference,
  IrCaseClinicalData,
} from './types';

/** Standard SNOMED CT mappings for common Interventional Radiology procedures */
export const SNOMED_IR_PROCEDURES: Record<string, { code: string; display: string }> = {
  tace: { code: '233527006', display: 'Chemoembolization of liver' },
  chemoembolization: { code: '233527006', display: 'Chemoembolization of liver' },
  pta: { code: '233529009', display: 'Percutaneous transluminal angioplasty' },
  angioplasty: { code: '233529009', display: 'Percutaneous transluminal angioplasty' },
  tips: { code: '429402003', display: 'Transjugular intrahepatic portosystemic shunt' },
  dips: { code: '429402003', display: 'Transjugular intrahepatic portosystemic shunt' },
  ptbd: { code: '708064009', display: 'Percutaneous transhepatic biliary drainage' },
  biliarydrainage: { code: '708064009', display: 'Percutaneous transhepatic biliary drainage' },
  varicosevein: { code: '713871006', display: 'Percutaneous radiofrequency/laser ablation of vein' },
  venaseal: { code: '713871006', display: 'Endovenous cyanoacrylate embolization of vein' },
  uae: { code: '447012002', display: 'Embolization of uterine artery' },
  uterinefibroid: { code: '447012002', display: 'Embolization of uterine artery' },
  bae: { code: '233525003', display: 'Embolization of bronchial artery' },
  bronchialembolization: { code: '233525003', display: 'Embolization of bronchial artery' },
  angiography: { code: '77343006', display: 'Diagnostic angiography' },
  ivcfilter: { code: '233547008', display: 'Placement of inferior vena cava filter' },
  renalbiopsy: { code: '708940003', display: 'Image-guided percutaneous biopsy of kidney' },
};

/** Common LOINC codes for Interventional Radiology reports & measurements */
export const LOINC_CODES = {
  RADIOLOGY_REPORT: { code: '11528-7', display: 'Radiology Report' },
  RADIATION_DOSE: { code: '73569-6', display: 'Radiation exposure and dose summary' },
  FLUOROSCOPY_TIME: { code: '79103-8', display: 'Fluoroscopy study duration' },
  CONTRAST_VOLUME: { code: '83584-3', display: 'Radiographic contrast agent administered volume' },
};

/** Standard ICD-10 mappings for common IR clinical indications */
export const ICD10_INDICATIONS: Record<string, { code: string; display: string }> = {
  hcc: { code: 'C22.0', display: 'Hepatocellular carcinoma' },
  cirrhosis: { code: 'K74.60', display: 'Unspecified cirrhosis of liver' },
  portalhypertension: { code: 'K76.6', display: 'Portal hypertension' },
  varices: { code: 'I85.0', display: 'Esophageal varices' },
  pad: { code: 'I70.20', display: 'Unspecified atherosclerosis of native arteries of extremities' },
  clti: { code: 'I70.22', display: 'Atherosclerosis with rest pain' },
  varicoseveins: { code: 'I83.9', display: 'Asymptomatic varicose veins of lower extremities' },
  obstructivejaundice: { code: 'K83.1', display: 'Obstruction of bile duct' },
  hemoptysis: { code: 'R04.2', display: 'Hemoptysis' },
  fibroid: { code: 'D25.9', display: 'Leiomyoma of uterus, unspecified' },
  dvt: { code: 'I82.40', display: 'Acute embolism and thrombosis of deep veins of lower extremity' },
};

/**
 * Match a SNOMED code from a free-text procedure name
 */
export function resolveSnomedCode(procedureName: string): { code: string; display: string } {
  const norm = procedureName.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (const [key, val] of Object.entries(SNOMED_IR_PROCEDURES)) {
    if (norm.includes(key)) {
      return val;
    }
  }
  // Generic Interventional Radiology procedure
  return { code: '77343006', display: 'Angiography / Interventional radiology procedure' };
}

/**
 * Match an ICD-10 code from a clinical diagnosis
 */
export function resolveIcdCode(diagnosis?: string): { code: string; display: string } {
  if (!diagnosis) return { code: 'R69', display: 'Illness, unspecified' };
  const norm = diagnosis.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (const [key, val] of Object.entries(ICD10_INDICATIONS)) {
    if (norm.includes(key)) {
      return val;
    }
  }
  return { code: 'R69', display: diagnosis };
}

/**
 * Generates an ABDM HL7 FHIR R4 DiagnosticReport Document Bundle
 */
export function generateDiagnosticReportBundle(caseData: IrCaseClinicalData): FhirBundle {
  const timestamp =
    caseData.dateTime instanceof Date
      ? caseData.dateTime.toISOString()
      : caseData.dateTime || new Date().toISOString();

  const bundleId = `bundle-ir-${caseData.caseId}`;
  const patientId = `patient-${caseData.patientId || caseData.caseId}`;
  const practitionerId = `practitioner-ir-1`;
  const procedureId = `procedure-${caseData.caseId}`;
  const reportId = `report-ir-${caseData.caseId}`;
  const compositionId = `composition-ir-${caseData.caseId}`;

  // 1. Patient Resource
  const patientResource: FhirPatient = {
    resourceType: 'Patient',
    id: patientId,
    meta: {
      profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient'],
    },
    identifier: [
      ...(caseData.abhaId
        ? [{ system: 'https://healthid.ndhm.gov.in', value: caseData.abhaId }]
        : []),
      ...(caseData.uhid
        ? [{ system: 'https://sms.rajasthan.gov.in/uhid', value: caseData.uhid }]
        : []),
      { system: 'https://vascflow.org/mrn', value: caseData.patientId || caseData.caseId },
    ],
    // Omitted entirely when absent. A placeholder string here would be
    // ingested downstream as a real patient identity.
    name: caseData.patientName ? [{ text: caseData.patientName }] : [],
    gender: caseData.gender || 'unknown',
  };

  // 2. Practitioner Resource
  const practitionerResource: FhirPractitioner = {
    resourceType: 'Practitioner',
    id: practitionerId,
    meta: {
      profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/Practitioner'],
    },
    name: [{ text: caseData.operatorName || 'Dr. Neel Yadav (Lead IR)' }],
  };

  // 3. Procedure Resource
  const snomed = caseData.snomedCode
    ? { code: caseData.snomedCode, display: caseData.procedureName ?? "IR Procedure" }
    : caseData.procedureName
  ? resolveSnomedCode(caseData.procedureName)
  : { code: "38104008", display: "Interventional radiology procedure" };

  const icd = caseData.icdCode
    ? { code: caseData.icdCode, display: caseData.diagnosis || 'Interventional indication' }
    : resolveIcdCode(caseData.diagnosis);

  const procedureResource: FhirProcedure = {
    resourceType: 'Procedure',
    id: procedureId,
    meta: {
      profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/Procedure'],
    },
    status: 'completed',
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: snomed.code,
          display: snomed.display,
        },
      ],
      text: caseData.procedureName ?? "Interventional Radiology Procedure",
    },
    subject: {
      reference: `Patient/${patientId}`,
      ...(caseData.patientName ? { display: caseData.patientName } : {}),
    },
    performedDateTime: timestamp,
    performer: [
      {
        actor: { reference: `Practitioner/${practitionerId}`, display: caseData.operatorName },
      },
    ],
    reasonCode: [
      {
        coding: [
          {
            system: 'http://hl7.org/fhir/sid/icd-10',
            code: icd.code,
            display: icd.display,
          },
        ],
        text: caseData.diagnosis,
      },
    ],
    note: caseData.findings ? [{ text: caseData.findings }] : undefined,
  };

  // 4. Observation Resources (Radiation Dose, Fluoroscopy Time, Contrast Media)
  const observations: FhirObservation[] = [];
  const observationRefs: FhirReference[] = [];

  if (caseData.airKermaGy !== undefined) {
    const obsDoseId = `obs-dose-${caseData.caseId}`;
    const obsDose: FhirObservation = {
      resourceType: 'Observation',
      id: obsDoseId,
      meta: {
        profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/Observation'],
      },
      status: 'final',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: LOINC_CODES.RADIATION_DOSE.code,
            display: LOINC_CODES.RADIATION_DOSE.display,
          },
        ],
        text: 'Cumulative Air Kerma',
      },
      subject: { reference: `Patient/${patientId}` },
      effectiveDateTime: timestamp,
      valueQuantity: {
        value: caseData.airKermaGy,
        unit: 'Gy',
        system: 'http://unitsofmeasure.org',
        code: 'Gy',
      },
    };
    observations.push(obsDose);
    observationRefs.push({ reference: `Observation/${obsDoseId}`, display: 'Cumulative Air Kerma' });
  }

  if (caseData.fluoroTimeMinutes !== undefined) {
    const obsFluoroId = `obs-fluoro-${caseData.caseId}`;
    const obsFluoro: FhirObservation = {
      resourceType: 'Observation',
      id: obsFluoroId,
      meta: {
        profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/Observation'],
      },
      status: 'final',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: LOINC_CODES.FLUOROSCOPY_TIME.code,
            display: LOINC_CODES.FLUOROSCOPY_TIME.display,
          },
        ],
        text: 'Total Fluoroscopy Time',
      },
      subject: { reference: `Patient/${patientId}` },
      effectiveDateTime: timestamp,
      valueQuantity: {
        value: caseData.fluoroTimeMinutes,
        unit: 'min',
        system: 'http://unitsofmeasure.org',
        code: 'min',
      },
    };
    observations.push(obsFluoro);
    observationRefs.push({ reference: `Observation/${obsFluoroId}`, display: 'Fluoroscopy Time' });
  }

  if (caseData.contrastVolumeMl !== undefined) {
    const obsContrastId = `obs-contrast-${caseData.caseId}`;
    const obsContrast: FhirObservation = {
      resourceType: 'Observation',
      id: obsContrastId,
      meta: {
        profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/Observation'],
      },
      status: 'final',
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: LOINC_CODES.CONTRAST_VOLUME.code,
            display: LOINC_CODES.CONTRAST_VOLUME.display,
          },
        ],
        text: 'Iodinated Contrast Volume',
      },
      subject: { reference: `Patient/${patientId}` },
      effectiveDateTime: timestamp,
      valueQuantity: {
        value: caseData.contrastVolumeMl,
        unit: 'mL',
        system: 'http://unitsofmeasure.org',
        code: 'mL',
      },
    };
    observations.push(obsContrast);
    observationRefs.push({ reference: `Observation/${obsContrastId}`, display: 'Contrast Volume' });
  }

  // 5. DiagnosticReport Resource
  const diagnosticReportResource: FhirDiagnosticReport = {
    resourceType: 'DiagnosticReport',
    id: reportId,
    meta: {
      profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/DiagnosticReportRecord'],
    },
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0074',
            code: 'RAD',
            display: 'Radiology',
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: LOINC_CODES.RADIOLOGY_REPORT.code,
          display: LOINC_CODES.RADIOLOGY_REPORT.display,
        },
      ],
      text: caseData.procedureName
      ? `${caseData.procedureName} Interventional Report`
      : "Interventional Radiology Report",
    },
    subject: {
      reference: `Patient/${patientId}`,
      ...(caseData.patientName ? { display: caseData.patientName } : {}),
    },
    effectiveDateTime: timestamp,
    issued: timestamp,
    performer: [{ reference: `Practitioner/${practitionerId}` }],
    result: observationRefs.length > 0 ? observationRefs : undefined,
    // Never auto-written. The previous fallback asserted a successful,
    // complication-free outcome for every case that lacked a conclusion, which
    // is a fabricated clinical assertion in a compliance payload. Absent
    // conclusion means the resource carries none.
    conclusion: caseData.conclusion,
    conclusionCode: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: snomed.code,
            display: snomed.display,
          },
        ],
      },
    ],
  };

  // 6. Composition Resource (Document Header - mandatory first entry per HL7 FHIR Document Bundle)
  const compositionResource: FhirComposition = {
    resourceType: 'Composition',
    id: compositionId,
    meta: {
      profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/DocumentReference'],
    },
    status: 'final',
    type: {
      coding: [
        {
          system: 'http://loinc.org',
          code: LOINC_CODES.RADIOLOGY_REPORT.code,
          display: LOINC_CODES.RADIOLOGY_REPORT.display,
        },
      ],
      text: 'Interventional Radiology Report',
    },
    subject: {
      reference: `Patient/${patientId}`,
      ...(caseData.patientName ? { display: caseData.patientName } : {}),
    },
    date: timestamp,
    author: [{ reference: `Practitioner/${practitionerId}`, display: caseData.operatorName || 'Interventional Radiologist' }],
    title: caseData.procedureName
      ? `Interventional Radiology Report - ${caseData.procedureName}`
      : "Interventional Radiology Report",
    section: [
      {
        title: 'Procedure Details',
        entry: [{ reference: `Procedure/${procedureId}` }],
      },
      {
        title: 'Diagnostic Findings and Conclusion',
        entry: [{ reference: `DiagnosticReport/${reportId}` }],
      },
      ...(observationRefs.length > 0
        ? [
            {
              title: 'Telemetry & Radiation Safety Observations',
              entry: observationRefs,
            },
          ]
        : []),
    ],
  };

  // Assemble Complete FHIR Document Bundle
  const bundleEntries = [
    { fullUrl: `Composition/${compositionId}`, resource: compositionResource },
    { fullUrl: `Patient/${patientId}`, resource: patientResource },
    { fullUrl: `Practitioner/${practitionerId}`, resource: practitionerResource },
    { fullUrl: `Procedure/${procedureId}`, resource: procedureResource },
    { fullUrl: `DiagnosticReport/${reportId}`, resource: diagnosticReportResource },
    ...observations.map((obs) => ({
      fullUrl: `Observation/${obs.id}`,
      resource: obs,
    })),
  ];

  return {
    resourceType: 'Bundle',
    id: bundleId,
    meta: {
      versionId: '1',
      lastUpdated: timestamp,
      profile: ['https://nrces.in/ndhm/fhir/r4/StructureDefinition/DiagnosticReportRecord'],
    },
    identifier: {
      system: 'https://vascflow.org/fhir/bundle',
      value: bundleId,
    },
    type: 'document',
    timestamp,
    entry: bundleEntries,
  };
}
