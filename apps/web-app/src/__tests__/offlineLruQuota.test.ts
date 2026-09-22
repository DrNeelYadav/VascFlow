import { describe, it, expect, beforeEach } from 'vitest';
import {
  enqueueMutation,
  getPendingMutations,
  putPatientMasterRecord,
  getPatientMasterRecord,
  cacheDicomImage,
  getCachedDicomImage,
  enforceLruImageEviction,
  getStorageQuotaMetrics,
  clearAllOfflineStorage,
  IMAGE_CACHE_MAX_BYTES,
} from '../../app/lib/offlineQueue';

describe('Lead-Shielded Offline Store & LRU Storage Quota Manager', () => {
  beforeEach(async () => {
    await clearAllOfflineStorage();
  });

  describe('1. Partition Pinning & Immutability', () => {
    it('permanently pins mutation queue records and never evicts them under memory pressure', async () => {
      // Enqueue clinical mutation
      const mutation = await enqueueMutation({
        entityType: 'case_update',
        url: '/api/cases/stat-update',
        payload: { caseId: 'CASE-STAT-99', emergencyOverride: true },
      });

      // Pin a patient master record
      const patient = await putPatientMasterRecord({
        id: 'PT-1002',
        name: 'Savitri Devi',
        uhid: 'SMS-2026-9921',
        age: 64,
        gender: 'female',
      });

      expect(patient.pinned).toBe(true);

      // Force aggressive eviction on image cache (maxBytes = 0)
      await enforceLruImageEviction(0);

      // Verify clinical mutations and patient records are unaffected
      const pending = await getPendingMutations();
      expect(pending).toHaveLength(1);
      expect(pending[0].id).toBe(mutation.id);

      const retrievedPatient = await getPatientMasterRecord('PT-1002');
      expect(retrievedPatient).toBeDefined();
      expect(retrievedPatient?.name).toBe('Savitri Devi');
    });
  });

  describe('2. LRU Eviction & 250 MB Ceiling', () => {
    it('evicts least recently accessed images when exceeding byte ceiling', async () => {
      // Use small custom ceiling for testing: 300 bytes
      const testCeiling = 300;

      // Add image 1: 100 bytes
      const img1 = await cacheDicomImage('img-1', 'A'.repeat(100), 100, undefined, testCeiling);
      await new Promise((r) => setTimeout(r, 10));

      // Add image 2: 100 bytes
      const img2 = await cacheDicomImage('img-2', 'B'.repeat(100), 100, undefined, testCeiling);
      await new Promise((r) => setTimeout(r, 10));

      // Add image 3: 100 bytes (total: 300 bytes, right at ceiling)
      const img3 = await cacheDicomImage('img-3', 'C'.repeat(100), 100, undefined, testCeiling);

      // Access image 1 so it becomes more recently accessed than image 2
      await new Promise((r) => setTimeout(r, 10));
      await getCachedDicomImage('img-1');

      // Now add image 4: 100 bytes. This exceeds 300 bytes ceiling.
      // img-2 should be evicted because img-1 was accessed recently, img-3 was created after img-2.
      await new Promise((r) => setTimeout(r, 10));
      await cacheDicomImage('img-4', 'D'.repeat(100), 100, undefined, testCeiling);

      const resImg1 = await getCachedDicomImage('img-1');
      const resImg2 = await getCachedDicomImage('img-2');
      const resImg3 = await getCachedDicomImage('img-3');
      const resImg4 = await getCachedDicomImage('img-4');

      expect(resImg1).toBeDefined();
      expect(resImg2).toBeUndefined(); // Evicted!
      expect(resImg3).toBeDefined();
      expect(resImg4).toBeDefined();
    });

    it('reports accurate storage quota metrics', async () => {
      await enqueueMutation({
        url: '/api/test',
        payload: { x: 1 },
      });

      await putPatientMasterRecord({
        id: 'PT-01',
        name: 'Mohan Lal',
        uhid: 'SMS-0001',
      });

      await cacheDicomImage('frame-001', 'X'.repeat(5000), 5000);

      const metrics = await getStorageQuotaMetrics();

      expect(metrics.quotaBytes).toBe(IMAGE_CACHE_MAX_BYTES);
      expect(metrics.usedBytes).toBe(5000);
      expect(metrics.pinnedBytes).toBeGreaterThan(0);
      expect(metrics.availableBytes).toBe(IMAGE_CACHE_MAX_BYTES - 5000);
    });
  });
});
