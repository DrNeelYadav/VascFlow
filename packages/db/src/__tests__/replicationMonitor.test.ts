import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  checkReplicationLag,
  REPLICATION_LAG_SLA_THRESHOLD_MS,
} from "../resilience/replicationMonitor";
import * as dbModule from "../../index";

describe("PostgreSQL Physical Replication Slot & Lag Monitor Suite", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it("reports STANDALONE when no read replica is configured", async () => {
    delete process.env.DATABASE_READ_REPLICA_URL;
    delete process.env.READ_REPLICA_URL;

    const metrics = await checkReplicationLag();
    expect(metrics.isConfigured).toBe(false);
    expect(metrics.status).toBe("STANDALONE");
    expect(metrics.lagMs).toBe(0);
    expect(metrics.slaBreached).toBe(false);
    expect(metrics.thresholdMs).toBe(REPLICATION_LAG_SLA_THRESHOLD_MS);
  });

  it("reports SYNCHRONIZED when replication lag is strictly under 10ms SLA threshold", async () => {
    process.env.DATABASE_READ_REPLICA_URL = "postgresql://user:pass@localhost:5433/vascflow_ro";

    const mockReplicaClient = {
      $queryRawUnsafe: vi.fn().mockResolvedValue([{ lag_ms: 3.45 }]),
    };
    const mockPrimaryClient = {
      $queryRawUnsafe: vi.fn().mockResolvedValue([
        { slot_name: "sub_cathlab_ro", active: true },
      ]),
    };

    vi.spyOn(dbModule, "getPrismaClient").mockReturnValue(mockReplicaClient as any);
    vi.spyOn(dbModule, "prisma", "get").mockReturnValue(mockPrimaryClient as any);

    const metrics = await checkReplicationLag(10);
    expect(metrics.isConfigured).toBe(true);
    expect(metrics.status).toBe("SYNCHRONIZED");
    expect(metrics.lagMs).toBe(3.45);
    expect(metrics.slaBreached).toBe(false);
    expect(metrics.activeSlotsCount).toBe(1);
  });

  it("reports LAGGING and flags slaBreached when replication lag exceeds 10ms threshold", async () => {
    process.env.DATABASE_READ_REPLICA_URL = "postgresql://user:pass@localhost:5433/vascflow_ro";

    const mockReplicaClient = {
      $queryRawUnsafe: vi.fn().mockResolvedValue([{ lag_ms: 42.8 }]),
    };
    const mockPrimaryClient = {
      $queryRawUnsafe: vi.fn().mockResolvedValue([
        { slot_name: "sub_cathlab_ro", active: true },
      ]),
    };

    vi.spyOn(dbModule, "getPrismaClient").mockReturnValue(mockReplicaClient as any);
    vi.spyOn(dbModule, "prisma", "get").mockReturnValue(mockPrimaryClient as any);

    const metrics = await checkReplicationLag(10);
    expect(metrics.isConfigured).toBe(true);
    expect(metrics.status).toBe("LAGGING");
    expect(metrics.lagMs).toBe(42.8);
    expect(metrics.slaBreached).toBe(true);
  });

  it("handles replica connection errors gracefully with DISCONNECTED status", async () => {
    process.env.DATABASE_READ_REPLICA_URL = "postgresql://user:pass@localhost:5433/vascflow_ro";

    const mockReplicaClient = {
      $queryRawUnsafe: vi.fn().mockRejectedValue(new Error("Connection refused to read replica")),
    };

    vi.spyOn(dbModule, "getPrismaClient").mockReturnValue(mockReplicaClient as any);

    const metrics = await checkReplicationLag(10);
    expect(metrics.isConfigured).toBe(true);
    expect(metrics.status).toBe("DISCONNECTED");
    expect(metrics.slaBreached).toBe(true);
    expect(metrics.lagMs).toBe(9999);
  });
});
