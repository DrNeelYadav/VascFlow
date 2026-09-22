import { PrismaClient } from "@prisma/client";
import { withRetry, isRetryableError, type RetryOptions } from "./src/resilience/transactionRetry";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  prismaReadReplica: PrismaClient | undefined;
};

/**
 * Ensures DATABASE_URL has appropriate PgBouncer connection pooling and timeout parameters
 * suited for bursty telemetry writes from multiple angiosuites.
 */
function configureDatasourceUrl(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    if (!parsed.searchParams.has("connection_limit")) {
      parsed.searchParams.set("connection_limit", process.env.DATABASE_POOL_LIMIT || "50");
    }
    if (!parsed.searchParams.has("pool_timeout")) {
      parsed.searchParams.set("pool_timeout", process.env.DATABASE_POOL_TIMEOUT || "10");
    }
    if (url.includes("pgbouncer=true") || process.env.DATABASE_PGBOUNCER === "true") {
      parsed.searchParams.set("pgbouncer", "true");
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

const primaryDatasourceUrl = configureDatasourceUrl(
  process.env.DATABASE_URL || "postgresql://mock_user:mock_pass@localhost:5432/vascule_db?schema=public"
);
const replicaDatasourceUrl = configureDatasourceUrl(
  process.env.DATABASE_REPLICA_URL ||
    process.env.DATABASE_READ_URL ||
    process.env.DATABASE_URL ||
    primaryDatasourceUrl
);

/**
 * Primary transactional Prisma Client (Writes & Active Case Telemetry)
 */
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: primaryDatasourceUrl
      ? { db: { url: primaryDatasourceUrl } }
      : undefined,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

/**
 * Read-Replica Prisma Client (Heavy Analytical Queries, Census Exports, 750+ Row Logbook)
 */
export const prismaReadReplica =
  globalForPrisma.prismaReadReplica ??
  (replicaDatasourceUrl && replicaDatasourceUrl !== primaryDatasourceUrl
    ? new PrismaClient({
        datasources: { db: { url: replicaDatasourceUrl } },
        log: ["error"],
      })
    : prisma);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
  globalForPrisma.prismaReadReplica = prismaReadReplica;
}

/**
 * Query Router: Routes heavy analytical reads to the read-replica while directing operational writes to primary.
 */
export function getPrismaClient(intent: "read" | "write" = "write"): PrismaClient {
  return intent === "read" ? prismaReadReplica : prisma;
}

export * from "./logAuditTrail";
export * from "./tenantContext";
export * from "./src/staffSeeder";
export * from "./src/softDelete";
export * from "./src/audit";
export * from "./src/resilience/transactionRetry";
export * from "./src/resilience/replicationMonitor";
export * from "./src/firestore";
export * from "@prisma/client";
export default prisma;
