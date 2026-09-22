import { describe, it, expect, vi } from 'vitest';
import {
  computeDagNodeHash,
  createDagNode,
  findDagTips,
  topologicalSortDag,
  reconcileDagBranches,
  verifyMerkleDag,
  GENESIS_DAG_HASH,
} from '../audit/auditMerkleDag';
import { logAuditTrail } from '../../logAuditTrail';

describe('Merkle DAG Audit Reconciliation Engine', () => {
  it('creates deterministic Merkle DAG nodes with SHA-256 nodeHash', () => {
    const node1 = createDagNode({
      clientSequenceId: 'tablet_alpha_seq_1',
      parentHashes: [GENESIS_DAG_HASH],
      timestamp: '2026-09-22T08:00:00.000Z',
      actorStaffId: 'SMS-IR-042',
      action: 'CASE_CHECKIN',
      entityType: 'ProcedureCase',
      entityId: 'CASE-2026-001',
      payloadData: { room: 'CathLab-1' },
    });

    expect(node1.nodeHash).toBeDefined();
    expect(node1.nodeHash.length).toBe(64);
    expect(node1.parentHashes).toEqual([GENESIS_DAG_HASH]);

    // Same parameters should yield exact same hash
    const node1Duplicate = createDagNode({
      clientSequenceId: 'tablet_alpha_seq_1',
      parentHashes: [GENESIS_DAG_HASH],
      timestamp: '2026-09-22T08:00:00.000Z',
      actorStaffId: 'SMS-IR-042',
      action: 'CASE_CHECKIN',
      entityType: 'ProcedureCase',
      entityId: 'CASE-2026-001',
      payloadData: { room: 'CathLab-1' },
    });

    expect(node1Duplicate.nodeHash).toBe(node1.nodeHash);
  });

  it('detects divergent concurrent tips from multiple offline clinical tablets', () => {
    // Root checkpoint
    const rootNode = createDagNode({
      clientSequenceId: 'base_seq_0',
      parentHashes: [GENESIS_DAG_HASH],
      timestamp: '2026-09-22T08:00:00.000Z',
      actorStaffId: 'SYSTEM',
      action: 'SHIFT_START',
      entityType: 'Department',
      entityId: 'IR-DEPT',
    });

    // Tablet A records anesthesia check while offline
    const tabletANode = createDagNode({
      clientSequenceId: 'tablet_A_seq_1',
      parentHashes: [rootNode.nodeHash],
      timestamp: '2026-09-22T08:10:00.000Z',
      actorStaffId: 'STAFF-ANESTH',
      action: 'ANESTHESIA_CLEARANCE',
      entityType: 'ProcedureCase',
      entityId: 'CASE-2026-001',
    });

    // Tablet B concurrently records consumable scan in angiosuite while offline
    const tabletBNode = createDagNode({
      clientSequenceId: 'tablet_B_seq_1',
      parentHashes: [rootNode.nodeHash],
      timestamp: '2026-09-22T08:11:00.000Z',
      actorStaffId: 'STAFF-SCRUB',
      action: 'HARDWARE_SCAN',
      entityType: 'CaseHardwareUsage',
      entityId: 'HW-GUIDEWIRE-01',
    });

    const currentNodes = [rootNode, tabletANode, tabletBNode];
    const tips = findDagTips(currentNodes);

    expect(tips).toHaveLength(2);
    expect(tips).toContain(tabletANode.nodeHash);
    expect(tips).toContain(tabletBNode.nodeHash);
  });

  it('reconciles concurrent offline mutations into a unified DAG via server merge node', () => {
    const rootNode = createDagNode({
      clientSequenceId: 'base_seq_0',
      parentHashes: [GENESIS_DAG_HASH],
      timestamp: '2026-09-22T08:00:00.000Z',
      actorStaffId: 'SYSTEM',
      action: 'INIT',
      entityType: 'System',
      entityId: 'SYS-1',
    });

    const tabletANode = createDagNode({
      clientSequenceId: 'tablet_A_seq_1',
      parentHashes: [rootNode.nodeHash],
      timestamp: '2026-09-22T08:10:00.000Z',
      actorStaffId: 'STAFF-A',
      action: 'RECORD_VITALS',
      entityType: 'Telemetry',
      entityId: 'TEL-1',
    });

    const tabletBNode = createDagNode({
      clientSequenceId: 'tablet_B_seq_1',
      parentHashes: [rootNode.nodeHash],
      timestamp: '2026-09-22T08:12:00.000Z',
      actorStaffId: 'STAFF-B',
      action: 'CONTRAST_INJECT',
      entityType: 'ProcedureCase',
      entityId: 'CASE-1',
    });

    const result = reconcileDagBranches([rootNode, tabletANode], [tabletBNode]);

    expect(result.conflictsResolved).toBe(2);
    expect(result.mergeNode).toBeDefined();
    expect(result.mergeNode?.parentHashes).toEqual(
      [tabletANode.nodeHash, tabletBNode.nodeHash].sort()
    );
    expect(result.activeTips).toEqual([result.mergeNode!.nodeHash]);

    // Verify all nodes in merged DAG pass integrity
    const verifyResult = verifyMerkleDag(result.allNodes);
    expect(verifyResult.valid).toBe(true);
    expect(verifyResult.brokenNodes).toHaveLength(0);
  });

  it('sorts Merkle DAG nodes topologically ensuring causal order', () => {
    const n1 = createDagNode({
      clientSequenceId: 'seq_1',
      parentHashes: [GENESIS_DAG_HASH],
      timestamp: '2026-09-22T09:00:00.000Z',
      actorStaffId: 'A1',
      action: 'N1',
      entityType: 'E',
      entityId: '1',
    });

    const n2 = createDagNode({
      clientSequenceId: 'seq_2',
      parentHashes: [n1.nodeHash],
      timestamp: '2026-09-22T09:01:00.000Z',
      actorStaffId: 'A1',
      action: 'N2',
      entityType: 'E',
      entityId: '2',
    });

    const n3 = createDagNode({
      clientSequenceId: 'seq_3',
      parentHashes: [n2.nodeHash],
      timestamp: '2026-09-22T09:02:00.000Z',
      actorStaffId: 'A1',
      action: 'N3',
      entityType: 'E',
      entityId: '3',
    });

    // Provide them out of order
    const sorted = topologicalSortDag([n3, n1, n2]);
    expect(sorted.map((n) => n.clientSequenceId)).toEqual(['seq_1', 'seq_2', 'seq_3']);
  });

  it('detects tampering within any DAG node payload or parent relationship', () => {
    const node = createDagNode({
      clientSequenceId: 'tamper_test_1',
      parentHashes: [GENESIS_DAG_HASH],
      timestamp: '2026-09-22T09:30:00.000Z',
      actorStaffId: 'STAFF-1',
      action: 'ADMINISTER_MED',
      entityType: 'Medication',
      entityId: 'HEPARIN-5000U',
      payloadData: { units: 5000 },
    });

    const tamperedNode = {
      ...node,
      payloadData: JSON.stringify({ units: 1000 }), // Altered dosage
    };

    const verify = verifyMerkleDag([tamperedNode]);
    expect(verify.valid).toBe(false);
    expect(verify.brokenNodes).toContain(node.nodeHash);
  });

  it('integrates DAG node generation in logAuditTrail', async () => {
    const mockDb = {
      auditLog: {
        findFirst: vi.fn().mockResolvedValue(null),
        create: vi.fn().mockImplementation(async ({ data }) => ({
          id: 'audit_test_rec_1',
          ...data,
        })),
      },
    } as any;

    const record = await logAuditTrail(
      {
        actorStaffId: 'SMS-IR-099',
        action: 'SCHEDULE_CASE',
        entityType: 'ProcedureCase',
        entityId: 'CASE-TEST-1',
        clientSequenceId: 'offline_tablet_101',
        parentHashes: ['PARENT_HASH_ABC'],
      },
      { dbClient: mockDb }
    );

    expect(record.clientSequenceId).toBe('offline_tablet_101');
    expect(record.nodeHash).toBeDefined();
    expect(record.nodeHash?.length).toBe(64);
    expect(record.parentHashes).toEqual(['PARENT_HASH_ABC']);

    const details = JSON.parse(record.detailsJson);
    expect(details.nodeHash).toBe(record.nodeHash);
    expect(details.clientSequenceId).toBe('offline_tablet_101');
  });
});
