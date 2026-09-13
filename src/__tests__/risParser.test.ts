import { describe, it, expect } from 'vitest';
import {
  parseHl7Message,
  extractSegment,
  extractAllSegments,
  getField,
  getComponent,
  hl7ToBookingSlot,
  hl7ToPatientProfile,
  dischargeToHl7OruR01,
  bookingSlotToHl7OrmO01,
  createHl7Ack,
  fhirServiceRequestToBooking,
  bookingSlotToFhirServiceRequest,
  dischargeToFhirDiagnosticReport,
  FhirServiceRequest,
  FhirPatient
} from '../lib/risParser';
import { DischargeFormData } from '../lib/ihmsBridge';
import { BookingSlot } from '../types/clinical';

describe('RIS & HL7 / FHIR Parser Module', () => {
  const sampleOrmHl7 = [
    'MSH|^~\\&|SMS_HIS|SMS_JAIPUR|SMS_IR_RIS|ANGIO_SUITE|20260913103000||ORM^O01|MSG-9021|P|2.5',
    'PID|1||CR-2026-9012||Devi^Kamla||19720101|F|||||9829123456',
    'PV1|1|I|IR^DAYCARE^Bed 07||||||||||||||||IPD-89230',
    'ORC|NW|ORD-100|||ROUTINE||20260914',
    'OBR|1|ORD-100||2849-IN048A^Mesenteric Angiography & Microcoil Embolization|||20260914090000',
    'DG1|1|ICD-10|K92.2^Refractory Lower GI Bleeding',
    'ZDS|TID-2026-CHIR-90812|Cook Medical|5F Sheath, 2.7F Progreat'
  ].join('\r');

  describe('HL7 v2 Message Parsing', () => {
    it('parses MSH header fields accurately', () => {
      const parsed = parseHl7Message(sampleOrmHl7);
      expect(parsed.messageType).toBe('ORM');
      expect(parsed.triggerEvent).toBe('O01');
      expect(parsed.controlId).toBe('MSG-9021');
      expect(parsed.sendingApplication).toBe('SMS_HIS');
      expect(parsed.sendingFacility).toBe('SMS_JAIPUR');
    });

    it('extracts specific segments and components', () => {
      const parsed = parseHl7Message(sampleOrmHl7);
      const pid = extractSegment(parsed, 'PID');
      expect(pid).toBeDefined();
      expect(getField(pid, 3)).toBe('CR-2026-9012');

      const nameField = getField(pid, 5);
      expect(getComponent(nameField, 1)).toBe('Devi');
      expect(getComponent(nameField, 2)).toBe('Kamla');
    });

    it('throws error when parsing empty or invalid message without MSH', () => {
      expect(() => parseHl7Message('')).toThrow('Empty HL7 message string');
      expect(() => parseHl7Message('PID|1||CR-100')).toThrow('Invalid HL7: Missing MSH segment');
    });
  });

  describe('HL7 to Clinical Domain Model Transformation', () => {
    it('converts HL7 ORM^O01 to a BookingSlot', () => {
      const slot = hl7ToBookingSlot(sampleOrmHl7);
      expect(slot.crNo).toBe('CR-2026-9012');
      expect(slot.patientName).toBe('Kamla Devi');
      expect(slot.gender).toBe('Female');
      expect(slot.bedNo).toBe('Bed 07');
      expect(slot.ipdNo).toBe('IPD-89230');
      expect(slot.procedureCode).toBe('2849-IN048A');
      expect(slot.procedureName).toBe('Mesenteric Angiography & Microcoil Embolization');
      expect(slot.diagnosis).toBe('Refractory Lower GI Bleeding');
      expect(slot.hardwareIndented).toBe('5F Sheath, 2.7F Progreat');
      expect(slot.vendorContact).toBe('Cook Medical');
      expect(slot.notes).toContain('TID-2026-CHIR-90812');
    });

    it('converts HL7 with OBX lab segments into PatientSafetyProfile', () => {
      const hl7WithLabs = [
        sampleOrmHl7,
        'OBX|1|NM|2160-0^Creatinine||1.45|mg/dL|0.6-1.2|H|||F',
        'OBX|2|NM|1975-2^Bilirubin||2.10|mg/dL|0.2-1.0|H|||F',
        'OBX|3|NM|6301-6^INR||1.35||0.9-1.2|H|||F',
        'OBX|4|NM|2951-2^Sodium||136|mEq/L|135-145|N|||F'
      ].join('\r');

      const profile = hl7ToPatientProfile(hl7WithLabs);
      expect(profile.crNo).toBe('CR-2026-9012');
      expect(profile.name).toBe('Kamla Devi');
      expect(profile.serumCreatinine).toBe(1.45);
      expect(profile.totalBilirubin).toBe(2.1);
      expect(profile.inr).toBe(1.35);
      expect(profile.sodiumMeqL).toBe(136);
    });
  });

  describe('HL7 v2 Message Serialization', () => {
    it('generates valid HL7 ORU^R01 discharge report message', () => {
      const testDischarge: DischargeFormData = {
        patient: {
          id: 'pt-100',
          crNo: 'CR-2026-9012',
          ipdNo: 'IPD-89230',
          name: 'Kamla Devi',
          age: 54,
          gender: 'Female',
          bedNo: 'Bed 07',
          weightKg: 58,
          serumCreatinine: 1.1,
          totalBilirubin: 1.2,
          serumAlbumin: 3.4,
          inr: 1.2,
          scheme: 'MAAY_CHIRANJEEVI',
          schemeTid: 'TID-2026-CHIR-90812',
          diagnosis: 'Refractory Lower GI Bleeding'
        },
        chiefComplaints: 'Melena x 3 days',
        historyOfPresentIllness: 'Known case of cecal angiodysplasia',
        preOpLabs: 'Hb 8.2, Cr 1.1',
        preOpImaging: 'CT Angio showed active extravasation',
        procedureName: 'Mesenteric Angiography & Microcoil Embolization',
        procedureDate: '2026-09-14',
        operator: 'Prof. & HOD',
        accessSite: 'Right Common Femoral Artery',
        sheath: '5F Radiofocus',
        contrastVolumeMl: 45,
        fluoroTimeMinutes: 12.5,
        hardwareUsed: '5F Cobra, 2.7F Progreat, 2mm Microcoils',
        embolicAgents: '0.018 Microcoils (x3)',
        intraOpNotes: 'Superselective catheterization of ileocolic branch',
        complications: 'None',
        hemostasis: 'Manual compression 15 mins',
        hospitalCourse: 'Hemodynamically stable',
        dischargeVitals: 'BP 124/78, PR 76',
        dischargeMedications: 'Tab Pantoprazole 40mg OD',
        dischargeAdvice: 'Keep puncture site dry for 48h',
        followUpAdvice: 'IR OPD Room 922 after 7 days'
      };

      const oru = dischargeToHl7OruR01(testDischarge);
      expect(oru).toContain('MSH|');
      expect(oru).toContain('ORU^R01');
      expect(oru).toContain('PID|1||CR-2026-9012');
      expect(oru).toContain('OBX|1|TX|OPERATIVE_FINDINGS');
      expect(oru).toContain('ZDS|MAAY_CHIRANJEEVI|TID-2026-CHIR-90812');
    });

    it('generates valid HL7 ORM^O01 order message from BookingSlot', () => {
      const slot: BookingSlot = {
        id: 'book-101',
        patientId: 'pt-101',
        patientName: 'Rajesh Sharma',
        crNo: 'CR-2026-7841',
        ipdNo: 'IPD-88912',
        bedNo: 'Ward 3B',
        gender: 'Male',
        diagnosis: 'Sarin IGV1 Gastric Varices',
        procedureCode: '2849-IN064A',
        procedureName: 'PARTO Gastric Varices Embolization',
        targetDate: '2026-11-02',
        slotTime: '09:00 AM',
        isEmergency: false,
        d1CallCompleted: true,
        status: 'Scheduled'
      };

      const orm = bookingSlotToHl7OrmO01(slot);
      expect(orm).toContain('MSH|');
      expect(orm).toContain('ORM^O01');
      expect(orm).toContain('CR-2026-7841');
      expect(orm).toContain('2849-IN064A');
    });

    it('generates standard HL7 ACK message', () => {
      const parsed = parseHl7Message(sampleOrmHl7);
      const ack = createHl7Ack(parsed.msh, 'AA', 'Order registered');
      expect(ack).toContain('MSH|');
      expect(ack).toContain('ACK^A01');
      expect(ack).toContain('MSA|AA|MSG-9021|Order registered');
    });
  });

  describe('FHIR R4 Interoperability', () => {
    it('converts FHIR ServiceRequest to BookingSlot', () => {
      const fhirSr: FhirServiceRequest = {
        resourceType: 'ServiceRequest',
        id: 'sr-991',
        status: 'active',
        intent: 'order',
        priority: 'stat',
        code: {
          coding: [{ code: '2849-MC018A', display: 'Bronchial Artery Embolization' }]
        },
        subject: { reference: 'Patient/pt-sunita', display: 'Sunita Devi' },
        occurrenceDateTime: '2026-09-15T09:00:00Z',
        note: [{ text: 'Recurrent Massive Hemoptysis' }]
      };

      const fhirPt: FhirPatient = {
        resourceType: 'Patient',
        id: 'pt-sunita',
        identifier: [{ system: 'crNo', value: 'CR-2026-8102' }],
        name: [{ family: 'Devi', given: ['Sunita'] }]
      };

      const slot = fhirServiceRequestToBooking(fhirSr, fhirPt);
      expect(slot.crNo).toBe('CR-2026-8102');
      expect(slot.patientName).toBe('Sunita Devi');
      expect(slot.isEmergency).toBe(true);
      expect(slot.procedureCode).toBe('2849-MC018A');
      expect(slot.procedureName).toBe('Bronchial Artery Embolization');
    });

    it('converts BookingSlot to FHIR ServiceRequest', () => {
      const slot: BookingSlot = {
        id: 'book-200',
        patientId: 'pt-200',
        patientName: 'Manish Agarwal',
        crNo: 'CR-2026-7890',
        ipdNo: 'IPD-88934',
        bedNo: 'Bed 08',
        diagnosis: 'High-Flow AVM Hand',
        procedureCode: '2849-IN049B',
        procedureName: 'Hand AVM Embolization',
        targetDate: '2026-11-03',
        slotTime: '11:30 AM',
        isEmergency: false,
        d1CallCompleted: true,
        status: 'Scheduled'
      };

      const sr = bookingSlotToFhirServiceRequest(slot);
      expect(sr.resourceType).toBe('ServiceRequest');
      expect(sr.code?.coding?.[0]?.code).toBe('2849-IN049B');
      expect(sr.subject.display).toBe('Manish Agarwal');
      expect(sr.occurrenceDateTime).toBe('2026-11-03T09:00:00Z');
    });
  });
});
