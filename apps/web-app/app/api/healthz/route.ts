import { NextRequest, NextResponse } from "next/server";
import { prisma, checkReplicationLag, type ReplicationLagMetrics } from "@vascule/db";
import net from "node:net";

export interface ComponentHealth {
  status: "UP" | "DOWN" | "DEGRADED" | "READY" | "UNCONFIGURED" | "NOT_CONFIGURED";
  latencyMs: number;
  error?: string;
  details?: Record<string, unknown>;
}

export interface DatabaseHealth extends ComponentHealth {
  replication?: ReplicationLagMetrics;
}

export interface HealthzResponse {
  status: "HEALTHY" | "DEGRADED" | "UNHEALTHY";
  timestamp: string;
  uptimeSeconds: number;
  service: string;
  checks: {
    database: DatabaseHealth;
    cache: ComponentHealth;
    workerBridge: ComponentHealth;
  };
}

const startTime = Date.now();

export async function GET(_request: NextRequest) {
  const timestamp = new Date().toISOString();
  const uptimeSeconds = Math.round((Date.now() - startTime) / 1000);

  // 1. Database Connectivity Probe
  const dbStart = performance.now();
  let dbStatus: "UP" | "DOWN" = "DOWN";
  let dbError: string | undefined;

  try {
    // Lightweight connection check
    await Promise.race([
      prisma.$queryRaw`SELECT 1 as health_check`,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Database ping timeout (2500ms)")), 2500)
      ),
    ]);

    dbStatus = "UP";
  } catch (err: any) {
    dbStatus = "DOWN";
    dbError = err?.message || "Failed to reach PostgreSQL server";
  }
  const dbLatency = Math.max(0.1, Number((performance.now() - dbStart).toFixed(2)));

  // 2. Cache / Redis Probe
  let cacheStatus: ComponentHealth;
  const redisUrl = process.env.REDIS_URL;

  if (!redisUrl) {
    cacheStatus = {
      status: "UNCONFIGURED",
      latencyMs: 0,
      details: { message: "REDIS_URL is not configured" },
    };
  } else {
    const cacheStart = performance.now();
    try {
      const parsed = new URL(redisUrl);
      const port = Number(parsed.port) || 6379;
      const host = parsed.hostname;

      await new Promise<void>((resolve, reject) => {
        const socket = net.createConnection({ host, port, timeout: 1500 }, () => {
          socket.write("PING\r\n");
        });
        socket.setTimeout(1500);
        socket.on("data", (data) => {
          if (data.toString().includes("PONG")) {
            socket.end();
            resolve();
          }
        });
        socket.on("timeout", () => {
          socket.destroy();
          reject(new Error("Redis ping timeout (1500ms)"));
        });
        socket.on("error", (err) => {
          socket.destroy();
          reject(err);
        });
      });

      const cacheLatency = Math.max(0.1, Number((performance.now() - cacheStart).toFixed(2)));
      cacheStatus = {
        status: "UP",
        latencyMs: cacheLatency,
      };
    } catch (err: any) {
      const cacheLatency = Math.max(0.1, Number((performance.now() - cacheStart).toFixed(2)));
      cacheStatus = {
        status: "DOWN",
        latencyMs: cacheLatency,
        error: err?.message || "Failed to reach Redis cache",
      };
    }
  }

  // 3. Worker Codec Bridge Probe
  // In the current architecture there is no separate worker process; report as NOT_CONFIGURED truthfully.
  const workerBridgeStatus: ComponentHealth = {
    status: "NOT_CONFIGURED",
    latencyMs: 0,
    details: { message: "No separate worker bridge configured" },
  };

  // 4. Physical Replication Slot & Lag Monitoring (under 10ms SLA)
  let replication: ReplicationLagMetrics;
  try {
    replication = await checkReplicationLag();
  } catch {
    replication = {
      isConfigured: false,
      status: "STANDALONE",
      lagMs: 0,
      thresholdMs: 10,
      slaBreached: false,
      checkedAt: timestamp,
    };
  }

  const databaseCheck: DatabaseHealth = {
    status: dbStatus === "DOWN" ? "DOWN" : replication.slaBreached ? "DEGRADED" : "UP",
    latencyMs: dbLatency,
    error: dbError,
    replication,
  };

  const isDbDown = dbStatus === "DOWN";
  const isCacheDown = cacheStatus.status === "DOWN";
  const isSlaBreached = replication.slaBreached;

  const overallStatus: "HEALTHY" | "DEGRADED" | "UNHEALTHY" = isDbDown
    ? "UNHEALTHY"
    : isCacheDown || isSlaBreached
    ? "DEGRADED"
    : "HEALTHY";

  const responseBody: HealthzResponse = {
    status: overallStatus,
    timestamp,
    uptimeSeconds,
    service: "vascflow-web-app",
    checks: {
      database: databaseCheck,
      cache: cacheStatus,
      workerBridge: workerBridgeStatus,
    },
  };

  const httpStatus = overallStatus === "UNHEALTHY" ? 503 : 200;

  return NextResponse.json(responseBody, {
    status: httpStatus,
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Content-Type": "application/json",
    },
  });
}
