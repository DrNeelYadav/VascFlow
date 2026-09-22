/**
 * Merkle Directed Acyclic Graph (DAG) Audit Engine
 * 
 * Replaces linear SHA-256 hash chains with a multi-parent Merkle DAG.
 * Resolves concurrent offline audit records generated across multiple clinical tablets,
 * angiosuites, and mobile rounding stations without linear hash collisions or race conditions.
 */

import crypto from "crypto";
import { recordLatencyAlert, LATENCY_ALERT_THRESHOLD_MS } from "@vascule/utils";

export interface AuditDagNode {
  nodeHash: string;
  clientSequenceId: string;
  parentHashes: string[];
  timestamp: string;
  actorStaffId: string;
  action: string;
  entityType: string;
  entityId: string;
  payloadData: string;
  isEmergencyOverride?: boolean;
  overrideReason?: string | null;
}

export interface CreateDagNodeInput {
  clientSequenceId: string;
  parentHashes?: string[];
  timestamp?: string | Date;
  actorStaffId: string;
  action: string;
  entityType: string;
  entityId: string;
  payloadData?: string | Record<string, unknown>;
  isEmergencyOverride?: boolean;
  overrideReason?: string | null;
}

export interface AuditDagMergeResult {
  allNodes: AuditDagNode[];
  mergeNode?: AuditDagNode;
  activeTips: string[];
  conflictsResolved: number;
}

export const GENESIS_DAG_HASH = "GENESIS_MERKLE_ROOT_0000000000000000000000000000000000000000000000000000";

/**
 * Computes deterministic SHA-256 hash for a Merkle DAG node based on its contents and sorted parent hashes.
 */
export function computeDagNodeHash(
  node: Omit<AuditDagNode, "nodeHash">
): string {
  const sortedParents = [...(node.parentHashes || [])].sort().join(",");
  const canonicalString = [
    node.clientSequenceId,
    node.timestamp,
    node.actorStaffId,
    node.action.toUpperCase(),
    node.entityType,
    node.entityId,
    node.payloadData,
    sortedParents,
    node.isEmergencyOverride ? "EMERGENCY_TRUE" : "EMERGENCY_FALSE",
    node.overrideReason || "NO_REASON",
  ].join("|");

  return crypto.createHash("sha256").update(canonicalString).digest("hex");
}

/**
 * Creates a valid, cryptographically signed Merkle DAG node.
 */
export function createDagNode(input: CreateDagNodeInput): AuditDagNode {
  const timestamp =
    input.timestamp instanceof Date
      ? input.timestamp.toISOString()
      : input.timestamp || new Date().toISOString();

  let payloadData: string;
  if (typeof input.payloadData === "string") {
    payloadData = input.payloadData;
  } else if (input.payloadData) {
    payloadData = JSON.stringify(input.payloadData);
  } else {
    payloadData = "{}";
  }

  const parentHashes =
    input.parentHashes && input.parentHashes.length > 0
      ? [...input.parentHashes].sort()
      : [GENESIS_DAG_HASH];

  const nodeWithoutHash: Omit<AuditDagNode, "nodeHash"> = {
    clientSequenceId: input.clientSequenceId,
    parentHashes,
    timestamp,
    actorStaffId: input.actorStaffId,
    action: input.action.toUpperCase(),
    entityType: input.entityType,
    entityId: input.entityId,
    payloadData,
    isEmergencyOverride: input.isEmergencyOverride ?? false,
    overrideReason: input.overrideReason || null,
  };

  const nodeHash = computeDagNodeHash(nodeWithoutHash);

  return {
    ...nodeWithoutHash,
    nodeHash,
  };
}

/**
 * Finds all tip nodes (nodes that are not referenced as a parent by any other node in the set).
 */
export function findDagTips(nodes: AuditDagNode[]): string[] {
  if (nodes.length === 0) return [];

  const parentSet = new Set<string>();
  for (const node of nodes) {
    for (const p of node.parentHashes) {
      parentSet.add(p);
    }
  }

  // Tips are nodes whose nodeHash is NOT in parentSet
  const tips = nodes.map((n) => n.nodeHash).filter((h) => !parentSet.has(h));
  return tips.length > 0 ? tips : [nodes[nodes.length - 1].nodeHash];
}

/**
 * Topologically sorts an array of Merkle DAG nodes so every parent appears before its descendants.
 */
export function topologicalSortDag(nodes: AuditDagNode[]): AuditDagNode[] {
  const nodeMap = new Map<string, AuditDagNode>();
  for (const n of nodes) {
    nodeMap.set(n.nodeHash, n);
  }

  const visited = new Set<string>();
  const visiting = new Set<string>();
  const result: AuditDagNode[] = [];

  function visit(hash: string) {
    if (visited.has(hash)) return;
    if (visiting.has(hash)) {
      throw new Error(`Cycle detected in Merkle DAG at hash: ${hash}`);
    }

    visiting.add(hash);
    const node = nodeMap.get(hash);
    if (node) {
      for (const parent of node.parentHashes) {
        if (parent !== GENESIS_DAG_HASH && nodeMap.has(parent)) {
          visit(parent);
        }
      }
    }
    visiting.delete(hash);
    visited.add(hash);
    if (node) {
      result.push(node);
    }
  }

  for (const node of nodes) {
    visit(node.nodeHash);
  }

  return result;
}

/**
 * Server-Side DAG Reconciler:
 * Merges concurrent offline audit mutations from multiple clinical tablets without collisions.
 * When multiple disjoint tips are detected, creates a deterministic merge node with multi-parent links.
 */
export function reconcileDagBranches(
  existingNodes: AuditDagNode[],
  incomingNodes: AuditDagNode[],
  options?: { thresholdMs?: number; traceId?: string; spanId?: string }
): AuditDagMergeResult {
  const startTime = typeof performance !== "undefined" ? performance.now() : Date.now();

  // Deduplicate by nodeHash
  const combinedMap = new Map<string, AuditDagNode>();

  for (const n of existingNodes) {
    combinedMap.set(n.nodeHash, n);
  }
  for (const n of incomingNodes) {
    combinedMap.set(n.nodeHash, n);
  }

  const uniqueNodes = Array.from(combinedMap.values());
  const sorted = topologicalSortDag(uniqueNodes);
  const tips = findDagTips(sorted);

  let result: AuditDagMergeResult;

  // If there is only one tip, no divergence to merge
  if (tips.length <= 1) {
    result = {
      allNodes: sorted,
      activeTips: tips,
      conflictsResolved: 0,
    };
  } else {
    // Multiple tips detected: create a deterministic server-side reconciliation merge node
    const nowIso = new Date().toISOString();
    const mergeNodeInput: CreateDagNodeInput = {
      clientSequenceId: `server_sync_merge_${Date.now()}`,
      parentHashes: tips,
      timestamp: nowIso,
      actorStaffId: "SYSTEM_RECONCILER",
      action: "DAG_BRANCH_MERGE",
      entityType: "AuditMerkleDag",
      entityId: `MERGE_${tips.length}_BRANCHES`,
      payloadData: {
        mergedTips: tips,
        tipCount: tips.length,
        reconciledAt: nowIso,
      },
    };

    const mergeNode = createDagNode(mergeNodeInput);
    const finalNodes = [...sorted, mergeNode];

    result = {
      allNodes: finalNodes,
      mergeNode,
      activeTips: [mergeNode.nodeHash],
      conflictsResolved: tips.length,
    };
  }

  const endTime = typeof performance !== "undefined" ? performance.now() : Date.now();
  const durationMs = Math.max(0.01, endTime - startTime);
  const thresholdMs = options?.thresholdMs ?? LATENCY_ALERT_THRESHOLD_MS;

  if (durationMs > thresholdMs) {
    const traceId = options?.traceId || crypto.randomBytes(16).toString("hex");
    const spanId = options?.spanId || crypto.randomBytes(8).toString("hex");
    recordLatencyAlert({
      name: "audit.reconcileDagBranches",
      durationMs,
      thresholdMs,
      traceId,
      spanId,
      attributes: {
        existingNodeCount: existingNodes.length,
        incomingNodeCount: incomingNodes.length,
        uniqueNodeCount: uniqueNodes.length,
        tipsCount: tips.length,
        conflictsResolved: result.conflictsResolved,
      },
    });
  }

  return result;
}

/**
 * Cryptographically verifies an entire Merkle DAG for tamper-resistance.
 */
export function verifyMerkleDag(nodes: AuditDagNode[]): {
  valid: boolean;
  brokenNodes: string[];
} {
  const brokenNodes: string[] = [];

  for (const node of nodes) {
    const computed = computeDagNodeHash({
      clientSequenceId: node.clientSequenceId,
      parentHashes: node.parentHashes,
      timestamp: node.timestamp,
      actorStaffId: node.actorStaffId,
      action: node.action,
      entityType: node.entityType,
      entityId: node.entityId,
      payloadData: node.payloadData,
      isEmergencyOverride: node.isEmergencyOverride,
      overrideReason: node.overrideReason,
    });

    if (computed !== node.nodeHash) {
      brokenNodes.push(node.nodeHash);
    }
  }

  return {
    valid: brokenNodes.length === 0,
    brokenNodes,
  };
}
