import { describe, it, expect } from "vitest";
import {
  createDagNode,
  reconcileDagBranches,
  verifyMerkleDag,
  GENESIS_DAG_HASH,
  type AuditDagNode,
} from "../audit/auditMerkleDag";
import { getRecentTelemetryAlerts, clearTelemetryBuffers } from "@vascule/utils";

describe("Merkle DAG Concurrency & Load Stress Suite", () => {
  it("reconciles 50 concurrent out-of-order mutations across 4 angiosuite tablets into a unified tamper-proof DAG", () => {
    clearTelemetryBuffers();

    // 1. Common root checkpoint node for procedure start in Angiosuite 1
    const rootNode = createDagNode({
      clientSequenceId: "angiosuite_root_case_start",
      parentHashes: [GENESIS_DAG_HASH],
      timestamp: "2026-09-22T08:00:00.000Z",
      actorStaffId: "SMS-IR-CHIEF",
      action: "PROCEDURE_COMMENCED",
      entityType: "ProcedureCase",
      entityId: "CASE-2026-TACE-089",
      payloadData: { angiosuite: "CathLab-1", protocol: "Chemoembolization" },
    });

    // 2. Simulate 4 clinical tablets operating simultaneously offline in the angiosuite
    const tablets = [
      { id: "tablet_alpha", role: "NURSE_INVENTORY_CART", count: 13, actionPrefix: "INVENTORY_CONSUME" },
      { id: "tablet_beta", role: "ANESTHESIA_STATION", count: 12, actionPrefix: "VITALS_CHECKPOINT" },
      { id: "tablet_gamma", role: "OPERATOR_CONSOLE", count: 13, actionPrefix: "FLUORO_ACQUISITION" },
      { id: "tablet_delta", role: "CIRCULATING_SCRUB", count: 12, actionPrefix: "SAFETY_TIME_OUT" },
    ];

    const allGeneratedNodes: AuditDagNode[] = [];

    tablets.forEach((tablet) => {
      let lastHash = rootNode.nodeHash;
      for (let i = 0; i < tablet.count; i++) {
        const timestamp = new Date(1774339200000 + i * 30000).toISOString();
        const node = createDagNode({
          clientSequenceId: `${tablet.id}_seq_${i + 1}`,
          parentHashes: [lastHash],
          timestamp,
          actorStaffId: `STAFF_${tablet.id.toUpperCase()}`,
          action: `${tablet.actionPrefix}_STEP_${i + 1}`,
          entityType: "ProcedureCase",
          entityId: "CASE-2026-TACE-089",
          payloadData: {
            tabletId: tablet.id,
            role: tablet.role,
            stepIndex: i + 1,
            sensorReading: 100 + i * 5,
          },
        });
        allGeneratedNodes.push(node);
        lastHash = node.nodeHash;
      }
    });

    expect(allGeneratedNodes.length).toBe(50);

    // 3. Simulate chaotic network arrival: Shuffle the 50 nodes out of chronological order
    const shuffledNodes = [...allGeneratedNodes].sort(() => Math.random() - 0.5);

    // 4. Server-Side Reconciliation
    const mergeResult = reconcileDagBranches([rootNode], shuffledNodes);

    // 5. Verification of Merkle DAG invariants
    // Total nodes: 1 root + 50 tablet mutations + 1 merge node = 52 nodes
    expect(mergeResult.allNodes.length).toBe(52);
    expect(mergeResult.mergeNode).toBeDefined();
    expect(mergeResult.conflictsResolved).toBe(4); // 4 independent tablet branch tips merged

    // Single active tip after resolution
    expect(mergeResult.activeTips.length).toBe(1);
    expect(mergeResult.activeTips[0]).toBe(mergeResult.mergeNode!.nodeHash);

    // The merge node should explicitly reference the 4 tips from the tablets
    expect(mergeResult.mergeNode!.parentHashes.length).toBe(4);

    // 6. Cryptographic Hash & Tamper-Proof Chain Verification
    const verification = verifyMerkleDag(mergeResult.allNodes);
    expect(verification.valid).toBe(true);
    expect(verification.brokenNodes).toEqual([]);

    // 7. Topological Sorting Invariant: Every parent must appear before its children
    const nodeIndexMap = new Map<string, number>();
    mergeResult.allNodes.forEach((node, index) => {
      nodeIndexMap.set(node.nodeHash, index);
    });

    for (const node of mergeResult.allNodes) {
      const childIdx = nodeIndexMap.get(node.nodeHash)!;
      for (const parentHash of node.parentHashes) {
        if (parentHash !== GENESIS_DAG_HASH) {
          const parentIdx = nodeIndexMap.get(parentHash);
          expect(parentIdx).toBeDefined();
          expect(parentIdx!).toBeLessThan(childIdx);
        }
      }
    }

    // 8. Idempotence Verification: Merging an already-reconciled DAG produces zero new conflicts
    const secondaryMerge = reconcileDagBranches(mergeResult.allNodes, []);
    expect(secondaryMerge.conflictsResolved).toBe(0);
    expect(secondaryMerge.allNodes.length).toBe(52);
    expect(secondaryMerge.activeTips).toEqual(mergeResult.activeTips);
  });

  it("raises latency alert when DAG branch reconciliation breaches threshold SLA", () => {
    clearTelemetryBuffers();

    const rootNode = createDagNode({
      clientSequenceId: "sla_root",
      parentHashes: [GENESIS_DAG_HASH],
      timestamp: new Date().toISOString(),
      actorStaffId: "SYSTEM",
      action: "SLA_TEST_INIT",
      entityType: "AuditMerkleDag",
      entityId: "SLA-01",
    });

    const tipA = createDagNode({
      clientSequenceId: "sla_branch_a",
      parentHashes: [rootNode.nodeHash],
      timestamp: new Date().toISOString(),
      actorStaffId: "STAFF_A",
      action: "MUTATION_A",
      entityType: "AuditMerkleDag",
      entityId: "SLA-01",
    });

    const tipB = createDagNode({
      clientSequenceId: "sla_branch_b",
      parentHashes: [rootNode.nodeHash],
      timestamp: new Date().toISOString(),
      actorStaffId: "STAFF_B",
      action: "MUTATION_B",
      entityType: "AuditMerkleDag",
      entityId: "SLA-01",
    });

    // Pass an ultra-low thresholdMs of 0.0001ms to guarantee threshold breach for testing
    reconcileDagBranches([rootNode, tipA], [tipB], { thresholdMs: 0.0001 });

    const alerts = getRecentTelemetryAlerts();
    expect(alerts.length).toBeGreaterThanOrEqual(1);
    const dagAlert = alerts.find((a) => a.name === "audit.reconcileDagBranches");
    expect(dagAlert).toBeDefined();
    expect(dagAlert?.thresholdMs).toBe(0.0001);
    expect(dagAlert?.durationMs).toBeGreaterThan(0);
    expect(dagAlert?.attributes.conflictsResolved).toBe(2);
  });
});
