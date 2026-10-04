/**
 * HL7 FHIR R4 & ABDM Profile Type Definitions
 * National Health Authority (NHA) & NRCES India DiagnosticReport Record Specifications
 */

export interface FhirCoding {
  system: string;
  code: string;
  display?: string;
}

export interface FhirCodeableConcept {
  coding: FhirCoding[];
  text?: string;
}

export interface FhirIdentifier {
  system: string;
  value: string;
  type?: FhirCodeableConcept;
}

export interface FhirReference {
  reference: string;
  display?: string;
}

export interface FhirQuantity {
  value: number;
  unit: string;
  system?: string;
  code?: string;
}

export interface FhirResourceBase {
  resourceType: string;
  id: string;
  meta?: {
    versionId?: string;
    lastUpdated?: string;
    profile?: string[];
  };
}

export interface FhirPatient extends FhirResourceBase {
  resourceType: 'Patient';
  identifier?: FhirIdentifier[];
  name?: Array<{
    text: string;
    family?: string;
    given?: string[];
  }>;
  gender?: 'male' | 'female' | 'other' | 'unknown';
  birthDate?: string;
  telecom?: Array<{
    system: string;
    value: string;
    use?: string;
  }>;
}

export interface FhirPractitioner extends FhirResourceBase {
  resourceType: 'Practitioner';
  identifier?: FhirIdentifier[];
  name?: Array<{
    text: string;
  }>;
}

export interface FhirProcedure extends FhirResourceBase {
  resourceType: 'Procedure';
  status: 'completed' | 'in-progress' | 'not-done' | 'on-hold' | 'stopped';
  code: FhirCodeableConcept;
  subject: FhirReference;
  performedDateTime?: string;
  performer?: Array<{
    actor: FhirReference;
  }>;
  reasonCode?: FhirCodeableConcept[];
  note?: Array<{
    text: string;
  }>;
}

export interface FhirObservation extends FhirResourceBase {
  resourceType: 'Observation';
  status: 'registered' | 'preliminary' | 'final' | 'amended';
  code: FhirCodeableConcept;
  subject: FhirReference;
  effectiveDateTime?: string;
  valueQuantity?: FhirQuantity;
  valueString?: string;
}

export interface FhirDiagnosticReport extends FhirResourceBase {
  resourceType: 'DiagnosticReport';
  status: 'registered' | 'partial' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'appended' | 'cancelled';
  category?: FhirCodeableConcept[];
  code: FhirCodeableConcept;
  subject: FhirReference;
  effectiveDateTime?: string;
  issued?: string;
  performer?: FhirReference[];
  result?: FhirReference[];
  conclusion?: string;
  conclusionCode?: FhirCodeableConcept[];
}

export interface FhirCompositionSection {
  title: string;
  code?: FhirCodeableConcept;
  text?: {
    status: string;
    div: string;
  };
  entry?: FhirReference[];
}

export interface FhirComposition extends FhirResourceBase {
  resourceType: 'Composition';
  status: 'preliminary' | 'final' | 'amended' | 'entered-in-error';
  type: FhirCodeableConcept;
  category?: FhirCodeableConcept[];
  subject: FhirReference;
  date: string;
  author: FhirReference[];
  title: string;
  section?: FhirCompositionSection[];
}

export interface FhirBundleEntry {
  fullUrl: string;
  resource: FhirResourceBase;
}

export interface FhirBundle extends FhirResourceBase {
  resourceType: 'Bundle';
  identifier?: FhirIdentifier;
  type: 'document' | 'collection' | 'transaction' | 'batch';
  timestamp: string;
  entry: FhirBundleEntry[];
}

/**
 * Case data format accepted by the ABDM Bundle Generator
 */
export interface IrCaseClinicalData {
  caseId: string;
  patientId: string;
  /**
   * Optional on purpose. A DiagnosticReport may legitimately be generated
   * without a name when the source record does not carry one; the generator
   * omits the Patient.name element rather than substituting a placeholder,
   * because a placeholder in an exchange payload reads as a real identity.
   */
  patientName?: string;
  abhaId?: string;
  uhid?: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  /** Optional for the same reason as patientName. */
  procedureName?: string;
  snomedCode?: string;
  icdCode?: string;
  diagnosis?: string;
  operatorName?: string;
  dateTime?: string | Date;
  airKermaGy?: number;
  fluoroTimeMinutes?: number;
  contrastVolumeMl?: number;
  accessSite?: string;
  sheathSize?: string;
  findings?: string;
  conclusion?: string;
  hemostasisMethod?: string;
}
