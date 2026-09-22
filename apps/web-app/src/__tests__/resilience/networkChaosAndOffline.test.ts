import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  enqueueMutation,
  getPendingMutations,
  flushQueue,
  clearAllMutations,
  getStorageQuotaMetrics,
  type OfflineMutation,
} from "../../../app/lib/offlineQueue";

describe("Chaos & Network Resilience: Mid-Case Kit Depletion Offline Queue", () => {
  beforeEach(async () => {
    await clearAllMutations();
  });

  it("handles mid-case network failure during kit depletion, buffers mutations, and sequentially replays upon reconnection", async () => {
    const caseId = "CASE-2026-TACE-089";
    const suiteId = "ANGIO-SUITE-1";

    // 1. Initial State: Case is running in Cath Lab, kit items being consumed
    const kitItems = [
      { barcode: "SHEATH-TERUMO-6F", name: "Terumo Pinnacle Destination 6F", quantity: 1 },
      { barcode: "WIRE-RADIFOCUS-035", name: "Radifocus 0.035 150cm Angled", quantity: 1 },
      { barcode: "CATH-COBRA-C2-5F", name: "5F Cobra C2 Diagnostic Catheter", quantity: 1 },
      { barcode: "MICRO-PROGREAT-27", name: "Progreat 2.7F Microcatheter System", quantity: 1 },
      { barcode: "EMBOLIC-LIPIODOL-10", name: "Lipiodol Ultra-Fluid 10mL", quantity: 2 },
    ];

    // Simulate online mutation execution helper with automatic offline fallback
    let isNetworkAvailable = true;
    const serverReceivedRequests: Array<{ url: string; payload: any; timestamp: number }> = [];

    const mockFetch = vi.fn(async (url: string, init?: RequestInit) => {
      if (!isNetworkAvailable) {
        throw new TypeError("Failed to fetch: Network unreachable (Lead-shielded RF deadzone)");
      }
      const payload = init?.body ? JSON.parse(init.body as string) : {};
      serverReceivedRequests.push({ url, payload, timestamp: Date.now() });
      return {
        ok: true,
        status: 200,
        json: async () => ({ success: true, item: payload }),
      } as Response;
    });

    async function depleteKitItem(item: (typeof kitItems)[0]) {
      const payload = {
        caseId,
        workstationId: suiteId,
        barcode: item.barcode,
        name: item.name,
        quantity: item.quantity,
        timestamp: Date.now(),
      };

      try {
        if (!isNetworkAvailable) {
          throw new TypeError("Network offline");
        }
        await mockFetch("/api/inventory/use", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Fallback: Buffering in lead-shielded IndexedDB offline queue
        await enqueueMutation({
          entityType: "inventory_log",
          url: "/api/inventory/use",
          method: "POST",
          payload,
          optimisticKey: `kit_depletion_${item.barcode}`,
        });
      }
    }

    // Step 1: First item consumed while online
    await depleteKitItem(kitItems[0]);
    expect(serverReceivedRequests.length).toBe(1);
    expect(serverReceivedRequests[0].payload.barcode).toBe("SHEATH-TERUMO-6F");

    let pending = await getPendingMutations();
    expect(pending.length).toBe(0);

    // Step 2: CHAOS EVENT - Angiosuite mobile cart enters RF-shielded zone (network drops)
    isNetworkAvailable = false;

    // Clinicians consume 4 more items during emergency embolization while offline
    for (let i = 1; i < kitItems.length; i++) {
      await depleteKitItem(kitItems[i]);
      // small delay to guarantee discrete timestamps
      await new Promise((r) => setTimeout(r, 5));
    }

    // Server must NOT have received new requests while offline
    expect(serverReceivedRequests.length).toBe(1);

    // Step 3: Verify all 4 mutations are queued in chronological order
    pending = await getPendingMutations();
    expect(pending.length).toBe(4);
    expect(pending.every((m) => m.status === "pending")).toBe(true);

    // Check chronological ordering
    for (let i = 1; i < pending.length; i++) {
      expect(pending[i].timestamp).toBeGreaterThanOrEqual(pending[i - 1].timestamp);
    }

    expect(pending[0].payload).toMatchObject({ barcode: "WIRE-RADIFOCUS-035" });
    expect(pending[1].payload).toMatchObject({ barcode: "CATH-COBRA-C2-5F" });
    expect(pending[2].payload).toMatchObject({ barcode: "MICRO-PROGREAT-27" });
    expect(pending[3].payload).toMatchObject({ barcode: "EMBOLIC-LIPIODOL-10" });

    // Step 4: Network Restoration - Angiosuite cart reconnects to hospital Wi-Fi
    isNetworkAvailable = true;

    // Step 5: Flush Queue - Automatic sequential replay
    const flushResult = await flushQueue(mockFetch as unknown as typeof fetch);
    expect(flushResult.totalProcessed).toBe(4);
    expect(flushResult.succeeded).toBe(4);
    expect(flushResult.failed).toBe(0);

    // Verify all mutations have been received by the server in sequential order
    expect(serverReceivedRequests.length).toBe(5);
    expect(serverReceivedRequests[1].payload.barcode).toBe("WIRE-RADIFOCUS-035");
    expect(serverReceivedRequests[2].payload.barcode).toBe("CATH-COBRA-C2-5F");
    expect(serverReceivedRequests[3].payload.barcode).toBe("MICRO-PROGREAT-27");
    expect(serverReceivedRequests[4].payload.barcode).toBe("EMBOLIC-LIPIODOL-10");

    // Step 6: Verify pending queue is drained
    const remainingPending = await getPendingMutations();
    expect(remainingPending.length).toBe(0);

    const metrics = await getStorageQuotaMetrics();
    expect(metrics.pinnedBytes).toBeGreaterThan(0);
  });

  it("handles transient HTTP 503 server errors during replay and retries with backoff", async () => {
    await enqueueMutation({
      entityType: "inventory_log",
      url: "/api/inventory/use",
      method: "POST",
      payload: { barcode: "STENT-IL-01", qty: 1 },
    });

    let attempts = 0;
    const failingFetch = vi.fn(async () => {
      attempts++;
      if (attempts === 1) {
        // First attempt fails with 503 Service Unavailable (e.g. server restarting)
        return {
          ok: false,
          status: 503,
          statusText: "Service Unavailable",
          text: async () => "Temporary overload",
        } as Response;
      }
      return {
        ok: true,
        status: 200,
        json: async () => ({ success: true }),
      } as Response;
    });

    // First flush fails on attempt 1
    const firstFlush = await flushQueue(failingFetch as unknown as typeof fetch);
    expect(firstFlush.succeeded).toBe(0);
    expect(firstFlush.failed).toBe(1);

    const pendingAfterFirst = await getPendingMutations();
    expect(pendingAfterFirst.length).toBe(1);
    expect(pendingAfterFirst[0].retryCount).toBe(1);
    expect(pendingAfterFirst[0].status).toBe("failed");

    // Second flush succeeds
    const secondFlush = await flushQueue(failingFetch as unknown as typeof fetch);
    expect(secondFlush.succeeded).toBe(1);
    expect(secondFlush.failed).toBe(0);

    const pendingAfterSecond = await getPendingMutations();
    expect(pendingAfterSecond.length).toBe(0);
  });
});
