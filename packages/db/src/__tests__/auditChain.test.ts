import { describe, it, expect, vi } from 'vitest';
import {
  logAuditTrail,
  calculateSequentialHash,
  verifyAuditChain,
} from '../../logAuditTrail';

describe('Sequential SHA-256 Hash Chaining & Emergency Break-Glass Suite', () => {
  it('calculates deterministic sequential hashes chaining previous and current entries', () => {
    const prevHash = 'GENESIS_HASH_00000000000000000000000000000000';
    const timestamp = '2026-09-21T12:00:00.000Z';
    const hash1 = calculateSequentialHash(
      prevHash,
      timestamp,
      'SMS-IR-042',
      'EMERGENCY_OVERRIDE',
      'ProcedureCase',
      'CASE-2026-001',
      '{"reason":"STAT Hemorrhage"}'
    );

    expect(hash1).toBeDefined();
    expect(hash1.length).toBe(64); // SHA-256 hex string

    const hash2 = calculateSequentialHash(
      hash1,
      '2026-09-21T12:05:00.000Z',
      'SMS-IR-042',
      'STATUS_TRANSITION',
      'ProcedureCase',
      'CASE-2026-001',
      '{"nextStatus":"IN_PROCEDURE"}'
    );

    expect(hash2).toBeDefined();
    expect(hash2.length).toBe(64);
    expect(hash2).not.toBe(hash1);
  });

  it('validates a continuous chain of sequential audit log records', () => {
    const genesis = 'GENESIS_HASH_00000000000000000000000000000000';
    const ts1 = '2026-09-21T10:00:00.000Z';
    const payload1 = '{"caseId":"C1"}';
    const h1 = calculateSequentialHash(genesis, ts1, 'USER1', 'LOGIN', 'Staff', 'U1', payload1);

    const ts2 = '2026-09-21T10:05:00.000Z';
    const payload2 = '{"overrideReason":"Polytrauma"}';
    const h2 = calculateSequentialHash(h1, ts2, 'USER1', 'EMERGENCY_OVERRIDE', 'ProcedureCase', 'C1', payload2);

    const records = [
      {
        previousHash: genesis,
        currentHash: h1,
        timestamp: ts1,
        staffId: 'USER1',
        action: 'LOGIN',
        entityType: 'Staff',
        entityId: 'U1',
        detailsJson: JSON.stringify({ data: payload1 }),
      },
      {
        previousHash: h1,
        currentHash: h2,
        timestamp: ts2,
        staffId: 'USER1',
        action: 'EMERGENCY_OVERRIDE',
        entityType: 'ProcedureCase',
        entityId: 'C1',
        detailsJson: JSON.stringify({ data: payload2 }),
      },
    ];

    const result = verifyAuditChain(records);
    expect(result.valid).toBe(true);
  });

  it('detects tampering or broken linkage if an intermediate record hash is modified', () => {
    const genesis = 'GENESIS_HASH_00000000000000000000000000000000';
    const ts1 = '2026-09-21T10:00:00.000Z';
    const payload1 = '{"caseId":"C1"}';
    const h1 = calculateSequentialHash(genesis, ts1, 'USER1', 'LOGIN', 'Staff', 'U1', payload1);

    const records = [
      {
        previousHash: genesis,
        currentHash: 'CORRUPTED_HASH_VALUE_TAMPERED',
        timestamp: ts1,
        staffId: 'USER1',
        action: 'LOGIN',
        entityType: 'Staff',
        entityId: 'U1',
        detailsJson: JSON.stringify({ data: payload1 }),
      },
    ];

    const result = verifyAuditChain(records);
    expect(result.valid).toBe(false);
    expect(result.brokenAtIndex).toBe(0);
  });

  it('records emergency override flags and reasons in logAuditTrail with client mock', async () => {
    const mockCreate = vi.fn().mockImplementation(({ data }) =>
      Promise.resolve({
        id: 'audit_rec_mock_1',
        ...data,
      })
    );
    const mockFindFirst = vi.fn().mockResolvedValue({
      currentHash: 'PREV_HASH_1234567890ABCDEF',
    });

    const mockDb = {
      auditLog: {
        findFirst: mockFindFirst,
        create: mockCreate,
      },
    } as any;

    const record = await logAuditTrail(
      {
        actorStaffId: 'SMS-IR-EMERGENCY',
        action: 'EMERGENCY_OVERRIDE',
        entityType: 'ProcedureCase',
        entityId: 'CASE-STAT-99',
        isEmergencyOverride: true,
        overrideReason: 'STAT Hemorrhage / Active Bleeding',
        encryptPayload: false,
        details: { justification: 'Immediate embolization required' },
      },
      { dbClient: mockDb }
    );

    expect(record.isEmergencyOverride).toBe(true);
    expect(record.overrideReason).toBe('STAT Hemorrhage / Active Bleeding');
    expect(record.currentHash).toBeDefined();
    expect(record.previousHash).toBe('PREV_HASH_1234567890ABCDEF');
    expect(mockCreate).toHaveBeenCalled();
  });
});
