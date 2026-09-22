/**
 * PostgreSQL Physical Replication Slot & Lag Monitoring Engine
 * 
 * Verifies that physical replication lag between the primary writer and prismaReadReplica
 * remains strictly under the 10 ms SLA threshold during high-throughput angiosuite telemetry.
 */

import { prisma, prismaReadReplica, getPrismaClient } from "../../index";

export interface ReplicationLagMetrics {
  isConfigured: boolean;
  status: "SYNCHRONIZED" | "LAGGING" | "DISCONNECTED" | "STANDALONE";
  lagMs: number;
  thresholdMs: number;
  slaBreached: boolean;
  activeSlotsCount?: number;
  primaryLsn?: string;
  replayLsn?: string;
  checkedAt: string;
}

export const REPLICATION_LAG_SLA_THRESHOLD_MS = 10;

/**
 * Checks replication lag between writer and read-replica.
 */
export async function checkReplicationLag(
  thresholdMs: number = REPLICATION_LAG_SLA_THRESHOLD_MS
): Promise<ReplicationLagMetrics> {
  const nowIso = new Date().toISOString();

  // If no separate replica URL is configured, report STANDALONE
  if (!process.env.DATABASE_READ_REPLICA_URL && !process.env.READ_REPLICA_URL) {
    return {
      isConfigured: false,
      status: "STANDALONE",
      lagMs: 0,
      thresholdMs,
      slaBreached: false,
      checkedAt: nowIso,
    };
  }

  try {
    // 1. Query replica replay timestamp lag on read replica
    const replicaClient = getPrismaClient("read");
    const lagQuery = await replicaClient.$queryRawUnsafe<Array<{ lag_ms: number | null }>>(
      `SELECT COALESCE(EXTRACT(EPOCH FROM (now() - pg_last_xact_replay_timestamp())) * 1000, 0)::float AS lag_ms`
    );

    const lagMs =
      lagQuery?.[0]?.lag_ms !== null && lagQuery?.[0]?.lag_ms !== undefined
        ? Math.max(0, Number(lagQuery[0].lag_ms.toFixed(2)))
        : 0;

    // 2. Query primary replication slot status
    let activeSlotsCount = 0;
    try {
      const slots = await prisma.$queryRawUnsafe<Array<{ slot_name: string; active: boolean }>>(
        `SELECT slot_name, active FROM pg_replication_slots WHERE active = true`
      );
      activeSlotsCount = slots?.length || 0;
    } catch {
      // Non-superuser or local dev fallback
    }

    const slaBreached = lagMs > thresholdMs;

    return {
      isConfigured: true,
      status: slaBreached ? "LAGGING" : "SYNCHRONIZED",
      lagMs,
      thresholdMs,
      slaBreached,
      activeSlotsCount,
      checkedAt: nowIso,
    };
  } catch (err: any) {
    return {
      isConfigured: true,
      status: "DISCONNECTED",
      lagMs: 9999,
      thresholdMs,
      slaBreached: true,
      checkedAt: nowIso,
    };
  }
}
