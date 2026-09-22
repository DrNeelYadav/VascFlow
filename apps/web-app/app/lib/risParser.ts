/**
 * Radiology Information System (RIS), HL7 v2.x & FHIR R4 Interoperability Module
 *
 * Implements bidirectional parsing and serialization for:
 * 1. HL7 v2.x clinical messages (ADT, ORM^O01, ORU^R01, SIU^S12)
 * 2. HL7 FHIR R4 resources (ImagingStudy, DiagnosticReport, ServiceRequest, Patient)
 * 3. Hospital Information Management System (IHMS / RajSSO) bridging for SMS Medical College, Jaipur.
 *
 * Compatible with hl7-standard, @medplum/core, and @medplum/fhirtypes.
 */

import { PatientSafetyProfile, BookingSlot, SchemeType } from '../types/clinical';
import { DischargeFormData } from './ihmsBridge';

export interface Hl7Segment {
  name: string;
  fields: string[];
}

export interface ParsedHl7Message {
  msh: Hl7Segment;
  segments: Hl7Segment[];
  messageType: string;
  triggerEvent: string;
  controlId: string;
  sendingApplication: string;
  sendingFacility: string;
  dateTime: string;
}

export interface FhirCoding {
  system?: string;
  code?: string;
  display?: string;
}

export interface FhirCodeableConcept {
  coding?: FhirCoding[];
  text?: string;
}

export interface FhirReference {
  reference?: string;
  display?: string;
}

export interface FhirPatient {
  resourceType: 'Patient';
  id?: string;
  identifier?: Array<{ system?: string; value: string }>;
  name?: Array<{ family?: string; given?: string[]; text?: string }>;
  telecom?: Array<{ system?: string; value: string; use?: string }>;
  gender?: 'male' | 'female' | 'other' | 'unknown';
  birthDate?: string;
}

export interface FhirServiceRequest {
  resourceType: 'ServiceRequest';
  id?: string;
  identifier?: Array<{ system?: string; value: string }>;
  status: 'draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown';
  intent: 'proposal' | 'plan' | 'directive' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';
  code?: FhirCodeableConcept;
  subject: FhirReference;
  occurrenceDateTime?: string;
  authoredOn?: string;
  locationReference?: Array<FhirReference>;
  note?: Array<{ text: string }>;
}

export interface FhirImagingStudy {
  resourceType: 'ImagingStudy';
  id?: string;
  identifier?: Array<{ system?: string; value: string }>;
  status: 'registered' | 'available' | 'cancelled' | 'entered-in-error' | 'unknown';
  modality?: FhirCoding[];
  subject: FhirReference;
  started?: string;
  description?: string;
  numberOfSeries?: number;
  numberOfInstances?: number;
  procedureCode?: FhirCodeableConcept[];
}

export interface FhirDiagnosticReport {
  resourceType: 'DiagnosticReport';
  id?: string;
  identifier?: Array<{ system?: string; value: string }>;
  status: 'registered' | 'partial' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'appended' | 'cancelled' | 'entered-in-error' | 'unknown';
  category?: FhirCodeableConcept[];
  code: FhirCodeableConcept;
  subject: FhirReference;
  effectiveDateTime?: string;
  issued?: string;
  performer?: FhirReference[];
  conclusion?: string;
}

/**
 * Standard HL7 Delimiters
 */
const FIELD_DELIM = '|';
const COMPONENT_DELIM = '^';
const REPETITION_DELIM = '~';

/**
 * Splits raw HL7 message string into segments and fields.
 */
export function parseHl7Message(rawHl7: string): ParsedHl7Message {
  if (!rawHl7 || !rawHl7.trim()) {
    throw new Error('Empty HL7 message string');
  }

  const rawLines = rawHl7.split(/[\r\n]+/).filter((line) => line.trim().length > 0);
  const segments: Hl7Segment[] = [];

  for (const line of rawLines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const parts = trimmed.split(FIELD_DELIM);
    const segName = parts[0].toUpperCase();

    if (segName === 'MSH') {
      // For MSH, field 1 is the delimiter itself (|)
      segments.push({
        name: 'MSH',
        fields: ['|', ...parts.slice(1)]
      });
    } else {
      segments.push({
        name: segName,
        fields: parts.slice(1)
      });
    }
  }

  const msh = segments.find((s) => s.name === 'MSH');
  if (!msh) {
    throw new Error('Invalid HL7: Missing MSH segment');
  }

  // MSH fields: MSH[1]='|', MSH[2]=encoding, MSH[3]=sendingApp, MSH[4]=sendingFacility,
  // MSH[7]=dateTime, MSH[9]=msgType^trigger, MSH[10]=controlId
  const sendingApp = msh.fields[2] || 'RIS';
  const sendingFacility = msh.fields[3] || 'SMS_JAIPUR';
  const dateTime = msh.fields[6] || new Date().toISOString();
  const msgTypeField = msh.fields[8] || '';
  const msgTypeParts = msgTypeField.split(COMPONENT_DELIM);
  const messageType = msgTypeParts[0] || 'UNKNOWN';
  const triggerEvent = msgTypeParts[1] || '';
  const controlId = msh.fields[9] || `CTL-${Date.now()}`;

  return {
    msh,
    segments,
    messageType,
    triggerEvent,
    controlId,
    sendingApplication: sendingApp,
    sendingFacility,
    dateTime
  };
}

/**
 * Retrieves the first segment matching the specified name.
 */
export function extractSegment(parsed: ParsedHl7Message, segName: string): Hl7Segment | undefined {
  return parsed.segments.find((s) => s.name === segName.toUpperCase());
}

/**
 * Retrieves all segments matching the specified name.
 */
export function extractAllSegments(parsed: ParsedHl7Message, segName: string): Hl7Segment[] {
  return parsed.segments.filter((s) => s.name === segName.toUpperCase());
}

/**
 * Safely extracts a 1-based field index from an HL7 segment.
 */
export function getField(segment: Hl7Segment | undefined, index1Based: number): string {
  if (!segment || index1Based < 1 || index1Based > segment.fields.length) {
    return '';
  }
  return segment.fields[index1Based - 1] || '';
}

/**
 * Safely extracts a 1-based component from a composite field.
 */
export function getComponent(fieldValue: string, componentIndex1Based: number): string {
  if (!fieldValue) return '';
  const parts = fieldValue.split(COMPONENT_DELIM);
  return parts[componentIndex1Based - 1] || '';
}

/**
 * Formats date from HL7 YYYYMMDD[HHMMSS] to YYYY-MM-DD.
 */
function formatHl7Date(hl7Date: string): string {
  if (!hl7Date || hl7Date.length < 8) return '';
  const y = hl7Date.substring(0, 4);
  const m = hl7Date.substring(4, 6);
  const d = hl7Date.substring(6, 8);
  return `${y}-${m}-${d}`;
}

/**
 * Converts an HL7 v2.x order or scheduling message (ORM^O01, SIU^S12, ADT^A01) into a BookingSlot.
 */
export function hl7ToBookingSlot(rawHl7: string): BookingSlot {
  const parsed = parseHl7Message(rawHl7);
  const pid = extractSegment(parsed, 'PID');
  const pv1 = extractSegment(parsed, 'PV1');
  const obr = extractSegment(parsed, 'OBR');
  const orc = extractSegment(parsed, 'ORC');
  const dg1 = extractSegment(parsed, 'DG1');
  const zds = extractSegment(parsed, 'ZDS'); // Custom Rajasthan Scheme segment

  // PID-3: Patient ID / CR No
  const crNo = getField(pid, 3) || `CR-${Date.now().toString().slice(-6)}`;

  // PID-5: Patient Name (Last^First^Middle)
  const nameField = getField(pid, 5);
  const lastName = getComponent(nameField, 1);
  const firstName = getComponent(nameField, 2);
  const patientName = [firstName, lastName].filter(Boolean).join(' ') || 'Unknown Patient';

  // PID-7: DOB
  const dob = getField(pid, 7);
  let age = 45;
  if (dob && dob.length >= 4) {
    const birthYear = parseInt(dob.substring(0, 4), 10);
    if (!isNaN(birthYear) && birthYear > 1900) {
      age = new Date().getFullYear() - birthYear;
    }
  }

  // PID-8: Gender
  const genderChar = getField(pid, 8).toUpperCase();
  const gender = genderChar === 'F' ? 'Female' : genderChar === 'M' ? 'Male' : 'Other';

  // PID-13: Phone
  const phone = getField(pid, 13) || '';

  // PV1-3: Assigned Patient Location (Point of Care^Room^Bed)
  const locField = getField(pv1, 3);
  const bedName = getComponent(locField, 3) || getComponent(locField, 1) || 'IR Day Care';

  // PV1-19: Visit Number / IPD No
  const ipdNo = getField(pv1, 19) || `IPD-${Date.now().toString().slice(-5)}`;

  // OBR-4: Universal Service Identifier (Code^Name)
  const serviceId = getField(obr, 4);
  const procedureCode = getComponent(serviceId, 1) || '2849-IN048A';
  const procedureName = getComponent(serviceId, 2) || 'Interventional Radiology Angiography';

  // OBR-7: Observation Date / Scheduled Date Time
  const scheduledTimeRaw = getField(obr, 7) || getField(orc, 7) || '';
  const targetDate = formatHl7Date(scheduledTimeRaw) || new Date().toISOString().split('T')[0];

  // DG1-3: Diagnosis
  const diagField = getField(dg1, 3);
  const diagnosis = getComponent(diagField, 2) || getComponent(diagField, 1) || 'Angiography Evaluation';

  // ZDS segment: Rajasthan scheme metadata if present
  const schemeTid = getField(zds, 1) || '';
  const vendorContact = getField(zds, 2) || '';
  const hardware = getField(zds, 3) || '';

  return {
    id: `book-${Date.now()}`,
    patientId: `pt-${crNo.replace(/[^a-zA-Z0-9]/g, '')}`,
    patientName,
    age,
    gender,
    phone,
    crNo,
    ipdNo,
    bedNo: bedName,
    diagnosis,
    procedureCode,
    procedureName,
    targetDate,
    slotTime: '09:00 AM',
    isEmergency: getField(orc, 1) === 'STAT' || getField(obr, 5) === 'STAT',
    d1CallCompleted: false,
    status: 'Scheduled',
    hardwareIndented: hardware || undefined,
    vendorContact: vendorContact || undefined,
    notes: schemeTid ? `Scheme Pre-Auth TID: ${schemeTid}` : undefined
  };
}

/**
 * Extracts PatientSafetyProfile fields from an HL7 v2 message.
 */
export function hl7ToPatientProfile(rawHl7: string): Partial<PatientSafetyProfile> {
  const parsed = parseHl7Message(rawHl7);
  const pid = extractSegment(parsed, 'PID');
  const pv1 = extractSegment(parsed, 'PV1');
  const dg1 = extractSegment(parsed, 'DG1');
  const obr = extractSegment(parsed, 'OBR');
  const zds = extractSegment(parsed, 'ZDS');
  const obxList = extractAllSegments(parsed, 'OBX');

  const crNo = getField(pid, 3);
  const nameField = getField(pid, 5);
  const patientName = [getComponent(nameField, 2), getComponent(nameField, 1)].filter(Boolean).join(' ');

  let age = 50;
  const dob = getField(pid, 7);
  if (dob && dob.length >= 4) {
    const y = parseInt(dob.substring(0, 4), 10);
    if (!isNaN(y)) age = new Date().getFullYear() - y;
  }

  const genderChar = getField(pid, 8).toUpperCase();
  const gender = genderChar === 'F' ? 'Female' : 'Male';
  const ipdNo = getField(pv1, 19);
  const bedNo = getComponent(getField(pv1, 3), 3) || 'IR Day Care';

  const diagnosis = getComponent(getField(dg1, 3), 2) || getComponent(getField(dg1, 3), 1);
  const procedureName = getComponent(getField(obr, 4), 2);
  const procedureCode = getComponent(getField(obr, 4), 1);

  // Extract lab values from OBX segments
  let serumCreatinine = 1.0;
  let totalBilirubin = 1.0;
  let serumAlbumin = 3.5;
  let inr = 1.1;
  let sodiumMeqL = 138;

  for (const obx of obxList) {
    const obxId = getComponent(getField(obx, 3), 1).toUpperCase();
    const val = parseFloat(getField(obx, 5));
    if (isNaN(val)) continue;

    if (obxId.includes('CREAT') || obxId === '2160-0') serumCreatinine = val;
    else if (obxId.includes('BILI') || obxId === '1975-2') totalBilirubin = val;
    else if (obxId.includes('ALB') || obxId === '1751-7') serumAlbumin = val;
    else if (obxId.includes('INR') || obxId === '6301-6') inr = val;
    else if (obxId.includes('NA') || obxId.includes('SODIUM') || obxId === '2951-2') sodiumMeqL = val;
  }

  // Scheme extraction from ZDS segment or PID
  let scheme: SchemeType = 'MAAY_CHIRANJEEVI';
  const schemeField = getField(zds, 1).toUpperCase();
  if (schemeField.includes('RGHS')) scheme = 'RGHS';
  else if (schemeField.includes('BPL')) scheme = 'BPL';
  else if (schemeField.includes('GEN')) scheme = 'GENERAL';

  return {
    crNo: crNo || 'CR-UNKNOWN',
    ipdNo: ipdNo || 'IPD-UNKNOWN',
    name: patientName || 'Patient',
    age,
    gender,
    bedNo,
    serumCreatinine,
    totalBilirubin,
    serumAlbumin,
    inr,
    sodiumMeqL,
    scheme,
    schemeTid: getField(zds, 2) || '',
    diagnosis: diagnosis || 'Clinical Evaluation',
    procedureName: procedureName || undefined,
    procedureCode: procedureCode || undefined
  };
}

/**
 * Serializes a clinical discharge summary into a standard HL7 v2.x ORU^R01 (Observation Result) message.
 */
export function dischargeToHl7OruR01(
  data: DischargeFormData,
  options?: { sendingApp?: string; sendingFacility?: string }
): string {
  const timestamp = new Date().toISOString().replace(/[T:-]/g, '').slice(0, 14);
  const controlId = `ORU-${Date.now()}`;
  const app = options?.sendingApp || 'SMS_IR_PORTAL';
  const facility = options?.sendingFacility || 'SMS_MEDICAL_COLLEGE_JAIPUR';

  const msh = [
    'MSH',
    '^~\\&',
    app,
    facility,
    'IHMS_RAJASTHAN',
    'SMS_HOSPITAL',
    timestamp,
    '',
    'ORU^R01^ORU_R01',
    controlId,
    'P',
    '2.5'
  ].join(FIELD_DELIM);

  const pid = [
    'PID',
    '1',
    '',
    data.patient.crNo,
    '',
    data.patient.name.replace(/\s+/g, '^'),
    '',
    '',
    data.patient.gender === 'Female' ? 'F' : 'M',
    '',
    '',
    '',
    '',
    data.patient.phone || ''
  ].join(FIELD_DELIM);

  const pv1 = [
    'PV1',
    '1',
    'I', // Inpatient
    `IR^DAYCARE^${data.patient.bedNo}`,
    '',
    '',
    '',
    data.operator.replace(/\s+/g, '^'),
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    data.patient.ipdNo
  ].join(FIELD_DELIM);

  const obr = [
    'OBR',
    '1',
    `ORD-${data.patient.crNo}`,
    `FIL-${Date.now()}`,
    `${data.patient.procedureCode || 'IR-PROC'}^${data.procedureName}`,
    '',
    '',
    timestamp,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    data.operator
  ].join(FIELD_DELIM);

  // OBX observations: Findings, Hardware, Embolics, Course, Discharge Advice
  const observations = [
    { id: 'OPERATIVE_FINDINGS', value: data.intraOpNotes },
    { id: 'HARDWARE_USED', value: data.hardwareUsed },
    { id: 'EMBOLIC_AGENTS', value: data.embolicAgents },
    { id: 'CONTRAST_VOLUME_ML', value: `${data.contrastVolumeMl} mL` },
    { id: 'FLUORO_TIME_MIN', value: `${data.fluoroTimeMinutes} min` },
    { id: 'COMPLICATIONS', value: data.complications },
    { id: 'HEMOSTASIS', value: data.hemostasis },
    { id: 'HOSPITAL_COURSE', value: data.hospitalCourse },
    { id: 'DISCHARGE_VITALS', value: data.dischargeVitals },
    { id: 'DISCHARGE_MEDICATIONS', value: data.dischargeMedications },
    { id: 'DISCHARGE_ADVICE', value: data.dischargeAdvice },
    { id: 'FOLLOW_UP_SCHEDULE', value: data.followUpAdvice }
  ];

  const obxSegments = observations.map((obs, idx) => {
    return [
      'OBX',
      String(idx + 1),
      'TX', // Text Data
      `${obs.id}^${obs.id.replace(/_/g, ' ')}`,
      '',
      obs.value.replace(/\r?\n/g, '\\.br\\'),
      '',
      '',
      '',
      '',
      '',
      'F' // Final result
    ].join(FIELD_DELIM);
  });

  // Custom ZDS segment for Rajasthan State Health Schemes (MAAY / RGHS)
  const zds = [
    'ZDS',
    data.patient.scheme,
    data.patient.schemeTid || 'N/A',
    data.sheath,
    data.accessSite
  ].join(FIELD_DELIM);

  return [msh, pid, pv1, obr, ...obxSegments, zds].join('\r');
}

/**
 * Serializes a booking slot into an HL7 v2.x ORM^O01 (Order) message for PACS / Cath Lab Modality Worklist.
 */
export function bookingSlotToHl7OrmO01(
  slot: BookingSlot,
  options?: { sendingApp?: string; sendingFacility?: string }
): string {
  const timestamp = new Date().toISOString().replace(/[T:-]/g, '').slice(0, 14);
  const controlId = `ORM-${Date.now()}`;
  const app = options?.sendingApp || 'SMS_IR_SCHEDULER';
  const facility = options?.sendingFacility || 'SMS_MEDICAL_COLLEGE_JAIPUR';

  const msh = [
    'MSH',
    '^~\\&',
    app,
    facility,
    'MODALITY_WORKLIST_CATHLAB',
    'SMS_DSA_SUITE',
    timestamp,
    '',
    'ORM^O01^ORM_O01',
    controlId,
    'P',
    '2.5'
  ].join(FIELD_DELIM);

  const pid = [
    'PID',
    '1',
    '',
    slot.crNo,
    '',
    slot.patientName.replace(/\s+/g, '^'),
    '',
    '',
    slot.gender === 'Female' ? 'F' : 'M',
    '',
    '',
    '',
    '',
    slot.phone || ''
  ].join(FIELD_DELIM);

  const pv1 = [
    'PV1',
    '1',
    'I',
    `IR^CATHLAB^${slot.bedNo}`,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    slot.ipdNo
  ].join(FIELD_DELIM);

  const orc = [
    'ORC',
    'NW', // New Order
    `ORD-${slot.id}`,
    '',
    '',
    slot.isEmergency ? 'STAT' : 'ROUTINE',
    '',
    slot.targetDate.replace(/-/g, '')
  ].join(FIELD_DELIM);

  const obr = [
    'OBR',
    '1',
    `ORD-${slot.id}`,
    '',
    `${slot.procedureCode}^${slot.procedureName}`,
    slot.isEmergency ? 'STAT' : 'ROUTINE',
    '',
    slot.targetDate.replace(/-/g, '')
  ].join(FIELD_DELIM);

  const dg1 = [
    'DG1',
    '1',
    'ICD-10',
    `DIAG^${slot.diagnosis}`,
    slot.diagnosis,
    '',
    'F'
  ].join(FIELD_DELIM);

  const zds = [
    'ZDS',
    slot.hardwareIndented || '',
    slot.vendorContact || '',
    slot.notes || ''
  ].join(FIELD_DELIM);

  return [msh, pid, pv1, orc, obr, dg1, zds].join('\r');
}

/**
 * Creates an HL7 v2 ACK acknowledgement message in response to an incoming message.
 */
export function createHl7Ack(
  originalMsh: Hl7Segment,
  ackCode: 'AA' | 'AE' | 'AR' = 'AA',
  textMessage = 'Message received successfully'
): string {
  const timestamp = new Date().toISOString().replace(/[T:-]/g, '').slice(0, 14);
  const incomingControlId = getField(originalMsh, 10) || 'UNKNOWN';
  const incomingSendingApp = getField(originalMsh, 3) || 'CLIENT';
  const incomingSendingFacility = getField(originalMsh, 4) || 'FACILITY';

  const msh = [
    'MSH',
    '^~\\&',
    'SMS_IR_GATEWAY',
    'SMS_JAIPUR',
    incomingSendingApp,
    incomingSendingFacility,
    timestamp,
    '',
    'ACK^A01',
    `ACK-${Date.now()}`,
    'P',
    '2.5'
  ].join(FIELD_DELIM);

  const msa = ['MSA', ackCode, incomingControlId, textMessage].join(FIELD_DELIM);

  return [msh, msa].join('\r');
}

/**
 * Maps a FHIR R4 ServiceRequest resource to a BookingSlot.
 */
export function fhirServiceRequestToBooking(
  sr: FhirServiceRequest,
  patient?: FhirPatient
): BookingSlot {
  const crNo = patient?.identifier?.find((i) => i.system?.includes('crNo'))?.value ||
    patient?.id || `CR-${Date.now().toString().slice(-6)}`;

  let patientName = 'Unknown Patient';
  if (patient?.name && patient.name.length > 0) {
    const n = patient.name[0];
    patientName = n.text || [n.given?.join(' '), n.family].filter(Boolean).join(' ');
  }

  const phone = patient?.telecom?.find((t) => t.system === 'phone')?.value || '';
  const procedureCode = sr.code?.coding?.[0]?.code || '2849-IN048A';
  const procedureName = sr.code?.coding?.[0]?.display || sr.code?.text || 'Interventional Radiology Procedure';

  return {
    id: sr.id || `book-${Date.now()}`,
    patientId: patient?.id || `pt-${crNo}`,
    patientName,
    phone,
    crNo,
    ipdNo: `IPD-${Date.now().toString().slice(-5)}`,
    bedNo: 'IR Day Care',
    diagnosis: sr.note?.[0]?.text || procedureName,
    procedureCode,
    procedureName,
    targetDate: sr.occurrenceDateTime?.split('T')[0] || new Date().toISOString().split('T')[0],
    slotTime: '09:00 AM',
    isEmergency: sr.priority === 'stat' || sr.priority === 'urgent',
    d1CallCompleted: false,
    status: 'Scheduled',
    notes: sr.note?.map((n) => n.text).join('; ')
  };
}

/**
 * Maps a BookingSlot to a standard FHIR R4 ServiceRequest resource.
 */
export function bookingSlotToFhirServiceRequest(slot: BookingSlot): FhirServiceRequest {
  return {
    resourceType: 'ServiceRequest',
    id: slot.id,
    identifier: [
      { system: 'https://sms-ir.health.rajasthan.gov.in/booking', value: slot.id },
      { system: 'https://sms-ir.health.rajasthan.gov.in/crno', value: slot.crNo }
    ],
    status: slot.status === 'Completed' ? 'completed' : 'active',
    intent: 'order',
    priority: slot.isEmergency ? 'stat' : 'routine',
    code: {
      coding: [
        {
          system: 'https://sms-ir.health.rajasthan.gov.in/procedures',
          code: slot.procedureCode,
          display: slot.procedureName
        }
      ],
      text: slot.procedureName
    },
    subject: {
      reference: `Patient/${slot.patientId}`,
      display: slot.patientName
    },
    occurrenceDateTime: `${slot.targetDate}T09:00:00Z`,
    authoredOn: new Date().toISOString(),
    note: slot.notes ? [{ text: slot.notes }] : undefined
  };
}

/**
 * Maps a clinical discharge summary to a standard FHIR R4 DiagnosticReport resource.
 */
export function dischargeToFhirDiagnosticReport(data: DischargeFormData): FhirDiagnosticReport {
  return {
    resourceType: 'DiagnosticReport',
    id: `dr-${data.patient.crNo}`,
    identifier: [
      { system: 'https://sms-ir.health.rajasthan.gov.in/report', value: `REP-${data.patient.crNo}` }
    ],
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0074',
            code: 'RAD',
            display: 'Radiology'
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: 'https://sms-ir.health.rajasthan.gov.in/procedures',
          code: data.patient.procedureCode || 'IR-PROC',
          display: data.procedureName
        }
      ],
      text: data.procedureName
    },
    subject: {
      reference: `Patient/${data.patient.id}`,
      display: data.patient.name
    },
    effectiveDateTime: data.procedureDate || new Date().toISOString(),
    issued: new Date().toISOString(),
    performer: [
      {
        display: data.operator
      }
    ],
    conclusion: `Procedure: ${data.procedureName}. Access: ${data.accessSite} (${data.sheath}). Findings: ${data.intraOpNotes}. Complications: ${data.complications}. Hemostasis: ${data.hemostasis}. Follow-up: ${data.followUpAdvice}`
  };
}
