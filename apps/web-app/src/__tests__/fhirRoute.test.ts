import { describe, it, expect } from 'vitest';
import { GET } from '../../app/api/fhir/Procedure/[caseId]/route';
import { generateDiagnosticReportBundle } from '@vascule/utils';
import { NextRequest } from 'next/server';

describe('ABDM FHIR R4 Endpoint Integration Suite', () => {
  it('returns 404 for a CASE- identifier with no backing procedure record', async () => {
    // Regression guard. The route used to accept any identifier beginning
    // "CASE-" or "IR-" and synthesise a complete clinical record: patient name,
    // operator, air kerma 0.85 Gy, fluoroscopy 15 min, contrast 30 mL. That is
    // fabricated patient data emitted as a national health-exchange bundle, and
    // a downstream registry would ingest it as fact.
    //
    // A FHIR DiagnosticReport must only exist when a real procedure backs it.
    const req = new NextRequest('http://localhost:3000/api/fhir/Procedure/CASE-2026-001');
    const params = Promise.resolve({ caseId: 'CASE-2026-001' });

    const res = await GET(req, { params });
    expect(res.status).toBe(404);

    const data = await res.json();
    expect(data.resourceType).toBe('OperationOutcome');
    expect(data.issue[0].code).toBe('not-found');
  });

  it('returns 404 for an IR- identifier with no backing procedure record', async () => {
    const req = new NextRequest('http://localhost:3000/api/fhir/Procedure/IR-2026-999');
    const params = Promise.resolve({ caseId: 'IR-2026-999' });

    const res = await GET(req, { params });
    expect(res.status).toBe(404);
  });

  it('returns HTTP 404 with OperationOutcome for unknown non-case identifier', async () => {
    const req = new NextRequest('http://localhost:3000/api/fhir/Procedure/non-existent-xyz');
    const params = Promise.resolve({ caseId: 'non-existent-xyz' });

    const res = await GET(req, { params });
    expect(res.status).toBe(404);

    const data = await res.json();
    expect(data.resourceType).toBe('OperationOutcome');
    expect(data.issue[0].code).toBe('not-found');
  });
});

describe('ABDM bundle generator refuses to fabricate clinical assertions', () => {
  it('omits Patient.name rather than substituting a placeholder', () => {
    // A placeholder identity in an exchange payload is indistinguishable from a
    // real one once it leaves the building.
    const bundle: any = generateDiagnosticReportBundle({
      caseId: 'REAL-1',
      patientId: 'PT-1',
      procedureName: 'Splenic artery embolization',
    } as never);

    const patient = bundle.entry.find(
      (e: any) => e.resource.resourceType === 'Patient'
    )?.resource;
    expect(patient).toBeDefined();
    expect(patient.name).toEqual([]);
  });

  it('does not auto-write a successful-outcome conclusion', () => {
    // The generator previously emitted "<procedure> completed successfully
    // without immediate adverse technical events" for every case that lacked a
    // conclusion - a fabricated clinical assertion in a compliance payload.
    const bundle: any = generateDiagnosticReportBundle({
      caseId: 'REAL-2',
      patientId: 'PT-2',
      patientName: 'Test Patient',
      procedureName: 'Splenic artery embolization',
    } as never);

    const report = bundle.entry.find(
      (e: any) => e.resource.resourceType === 'DiagnosticReport'
    )?.resource;
    expect(report.conclusion).toBeUndefined();
    expect(JSON.stringify(bundle)).not.toContain('completed successfully without');
  });

  it('still emits a well-formed bundle when the record is complete', () => {
    const bundle: any = generateDiagnosticReportBundle({
      caseId: 'REAL-3',
      patientId: 'PT-3',
      patientName: 'Test Patient',
      procedureName: 'Splenic artery embolization',
      conclusion: 'Coils deployed. No immediate complication.',
      airKermaGy: 0.42,
      contrastVolumeMl: 60,
    } as never);

    expect(bundle.resourceType).toBe('Bundle');
    expect(bundle.entry.length).toBeGreaterThan(0);

    const patient = bundle.entry.find(
      (e: any) => e.resource.resourceType === 'Patient'
    )?.resource;
    expect(patient.name[0].text).toBe('Test Patient');

    const report = bundle.entry.find(
      (e: any) => e.resource.resourceType === 'DiagnosticReport'
    )?.resource;
    expect(report.conclusion).toBe('Coils deployed. No immediate complication.');
  });
});