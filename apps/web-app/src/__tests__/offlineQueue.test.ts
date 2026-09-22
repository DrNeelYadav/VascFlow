import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  enqueueMutation,
  getPendingMutations,
  flushQueue,
  clearSyncedMutations,
  clearAllMutations,
  mergeOptimisticFields,
  isOnline,
} from '../../app/lib/offlineQueue';

describe('Lead-Shielded Offline Queue (IndexedDB/Memory) Suite', () => {
  beforeEach(async () => {
    await clearAllMutations();
  });

  describe('1. Enqueuing Mutations', () => {
    it('successfully enqueues case update mutation with timestamp and pending status', async () => {
      const mut = await enqueueMutation({
        entityType: 'case_update',
        url: '/api/cases/update-status',
        method: 'POST',
        payload: { caseId: 'CASE-2026-001', status: 'IN_PROCEDURE' },
      });

      expect(mut.id).toBeDefined();
      expect(mut.entityType).toBe('case_update');
      expect(mut.status).toBe('pending');
      expect(mut.retryCount).toBe(0);
      expect(mut.timestamp).toBeGreaterThan(0);

      const pending = await getPendingMutations();
      expect(pending.length).toBe(1);
      expect(pending[0].id).toBe(mut.id);
    });

    it('orders multiple mutations chronologically', async () => {
      const mut1 = await enqueueMutation({
        url: '/api/cases/1',
        payload: { step: 1 },
      });
      // slight delay to test ordering
      await new Promise((r) => setTimeout(r, 10));
      const mut2 = await enqueueMutation({
        url: '/api/cases/2',
        payload: { step: 2 },
      });

      const pending = await getPendingMutations();
      expect(pending.length).toBe(2);
      expect(pending[0].id).toBe(mut1.id);
      expect(pending[1].id).toBe(mut2.id);
      expect(pending[0].timestamp).toBeLessThanOrEqual(pending[1].timestamp);
    });
  });

  describe('2. Sequential Replay and Network Flush', () => {
    it('replays pending mutations sequentially and marks succeeded on HTTP 200', async () => {
      await enqueueMutation({
        url: '/api/inventory/log',
        method: 'POST',
        payload: { sku: 'CATH-001', quantity: 1 },
      });
      await enqueueMutation({
        url: '/api/inventory/log',
        method: 'POST',
        payload: { sku: 'WIRE-002', quantity: 2 },
      });

      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ success: true }),
      });

      const result = await flushQueue(mockFetch as any);

      expect(result.totalProcessed).toBe(2);
      expect(result.succeeded).toBe(2);
      expect(result.failed).toBe(0);
      expect(mockFetch).toHaveBeenCalledTimes(2);

      // Pending queue should now be empty of pending items
      const pendingAfter = await getPendingMutations();
      expect(pendingAfter.length).toBe(0);

      // Clears synced items
      const clearedCount = await clearSyncedMutations();
      expect(clearedCount).toBe(2);
    });

    it('records failure and increments retryCount if server returns error', async () => {
      const mut = await enqueueMutation({
        url: '/api/cases/fail',
        payload: { data: 'err' },
      });

      const mockFetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
        statusText: 'Service Unavailable',
      });

      const result = await flushQueue(mockFetch as any);

      expect(result.totalProcessed).toBe(1);
      expect(result.succeeded).toBe(0);
      expect(result.failed).toBe(1);

      const pending = await getPendingMutations();
      expect(pending.length).toBe(1);
      expect(pending[0].status).toBe('failed');
      expect(pending[0].retryCount).toBe(1);
      expect(pending[0].lastError).toContain('HTTP 503');
    });

    it('handles network throw / offline disconnection gracefully', async () => {
      await enqueueMutation({
        url: '/api/cases/offline',
        payload: { test: true },
      });

      const mockFetch = vi.fn().mockRejectedValue(new Error('Failed to fetch'));

      const result = await flushQueue(mockFetch as any);

      expect(result.failed).toBe(1);
      const pending = await getPendingMutations();
      expect(pending[0].status).toBe('failed');
      expect(pending[0].lastError).toBe('Failed to fetch');
    });
  });

  describe('3. Optimistic Field-Level Merging', () => {
    it('accurately merges client optimistic fields onto server state', () => {
      const serverCase = {
        id: 'CASE-001',
        patientName: 'Ramesh Sharma',
        status: 'SCHEDULED',
        radiationDoseGy: 0.12,
        hemostasisDevice: null as string | null,
      };

      const optimisticPatch = {
        status: 'IN_PROCEDURE',
        hemostasisDevice: 'Angio-Seal 6F',
      };

      const merged = mergeOptimisticFields(serverCase, optimisticPatch);

      expect(merged.id).toBe('CASE-001');
      expect(merged.patientName).toBe('Ramesh Sharma');
      expect(merged.status).toBe('IN_PROCEDURE');
      expect(merged.hemostasisDevice).toBe('Angio-Seal 6F');
      expect(merged.radiationDoseGy).toBe(0.12);
    });
  });

  describe('4. Connectivity State', () => {
    it('returns boolean status from isOnline', () => {
      expect(typeof isOnline()).toBe('boolean');
    });
  });
});
