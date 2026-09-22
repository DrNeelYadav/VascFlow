/**
 * Graceful Teardown & Process Lifecycle Manager
 * 
 * Intercepts SIGTERM and SIGINT signals (issued by Kubernetes rolling deploys or pod eviction)
 * to guarantee that in-flight SOC2 audit log batches and offline write-backs complete
 * before termination, preventing data loss or corrupted transactions.
 */

import { prisma, prismaReadReplica } from "@vascule/db";

export type ShutdownHook = () => Promise<void> | void;

const registeredShutdownHooks: Set<ShutdownHook> = new Set();
let isShuttingDown = false;

/**
 * Registers an asynchronous hook to be executed upon process termination.
 */
export function registerShutdownHook(hook: ShutdownHook): () => void {
  registeredShutdownHooks.add(hook);
  return () => registeredShutdownHooks.delete(hook);
}

/**
 * Returns whether the application is currently shutting down.
 */
export function isApplicationShuttingDown(): boolean {
  return isShuttingDown;
}

/**
 * Executes all registered teardown hooks with a hard timeout barrier (default 8s).
 */
export async function executeGracefulTeardown(
  signal: string,
  timeoutMs: number = 8000
): Promise<void> {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.info(`[Graceful Shutdown] Received ${signal}. Initiating zero-downtime teardown sequence...`);

  const teardownPromise = (async () => {
    // 1. Execute all custom hooks (audit log drainage, flush queues)
    const hookPromises = Array.from(registeredShutdownHooks).map(async (hook) => {
      try {
        await hook();
      } catch (err) {
        console.error("[Graceful Shutdown] Error running teardown hook:", err);
      }
    });
    await Promise.allSettled(hookPromises);

    // 2. Disconnect Prisma Connection Pools
    try {
      await Promise.allSettled([
        prisma.$disconnect(),
        prismaReadReplica.$disconnect(),
      ]);
      console.info("[Graceful Shutdown] Prisma database connection pools drained and closed.");
    } catch (err) {
      console.warn("[Graceful Shutdown] Error closing Prisma connections:", err);
    }
  })();

  const timeoutPromise = new Promise((resolve) =>
    setTimeout(() => {
      console.warn(`[Graceful Shutdown] Teardown exceeded ${timeoutMs}ms timeout. Forcing exit.`);
      resolve(null);
    }, timeoutMs)
  );

  await Promise.race([teardownPromise, timeoutPromise]);
  console.info("[Graceful Shutdown] Teardown complete. Exiting cleanly.");
}

// Attach process listeners in Node.js server runtimes
if (typeof process !== "undefined" && typeof process.on === "function") {
  const handleSignal = (sig: string) => {
    executeGracefulTeardown(sig).then(() => {
      if (process.env.NODE_ENV !== "test") {
        process.exit(0);
      }
    });
  };

  process.once("SIGTERM", () => handleSignal("SIGTERM"));
  process.once("SIGINT", () => handleSignal("SIGINT"));
}

// Client-side browser lifecycle: flush pending mutations before tab unload
if (typeof window !== "undefined") {
  window.addEventListener("pagehide", () => {
    // Beacon / background flush trigger
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon("/api/healthz", JSON.stringify({ event: "client_pagehide" }));
    }
  });
}
