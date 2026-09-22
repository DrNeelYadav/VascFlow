import { describe, it, expect } from 'vitest';
import { GET } from '../../app/api/fhir/Procedure/[caseId]/route';
import { NextRequest } from 'next/server';

describe('ABDM FHIR R4 Endpoint Integration Suite', () => {
  it('returns HTTP 200 with application/fhir+json for known worklist case', async () => {
    const req = new NextRequest('http://localhost:3000/api/fhir/Procedure/CASE-2026-001');
    const params = Promise.resolve({ caseId: 'CASE-2026-001' });

    const res = await GET(req, { params });
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('application/fhir+json');

    const data = await res.json();
    expect(data.resourceType).toBe('Bundle');
    expect(data.type).toBe('document');
    expect(data.entry.length).toBeGreaterThan(0);

    const composition = data.entry[0].resource;
    expect(composition.resourceType).toBe('Composition');

    const patient = data.entry.find((e: any) => e.resource.resourceType === 'Patient')?.resource;
    expect(patient).toBeDefined();
    expect(patient.name[0].text).toBe('Ramswaroop Meena');
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
