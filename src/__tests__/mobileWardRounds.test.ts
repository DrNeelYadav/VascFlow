import { describe, it, expect, beforeEach, vi } from "vitest";
import { offlineSyncService, INITIAL_WARD_PATIENTS } from "../../apps/mobile-app/src/services/offlineSync";
import { mobileNotificationClient } from "../../apps/mobile-app/src/services/notificationClient";

describe("Phase 13: Mobile Companion App & Ward Rounds Workspace Suite", () => {
  beforeEach(() => {
    offlineSyncService.setNetworkStatus(true);
  });

  it("loads initial clinical ward round patients with valid demographics and contrast parameters", () => {
    const patients = offlineSyncService.getPatients();
    expect(patients.length).toBeGreaterThanOrEqual(4);

    const sharma = patients.find((p) => p.name === "Rajesh Sharma");
    expect(sharma).toBeDefined();
    expect(sharma?.ward).toBe("VASCULAR_SURGERY_3B");
    expect(sharma?.serumCreatinine).toBe(1.1);
    expect(sharma?.cigarroaMacdLimit).toBe(309);
    expect(sharma?.vitals.heartRate).toBe(72);
  });

  it("records bedside physician sign-off and updates patient status immediately", () => {
    const patients = offlineSyncService.getPatients();
    const target = patients[0];

    const updated = offlineSyncService.recordPhysicianSignOff(
      target.id,
      "Dr. Sarah Chen (Fellow)",
      "Hemodynamics stable post-TACE. Puncture site clean, no hematoma.",
      target.tenantId
    );

    expect(updated).not.toBeNull();
    expect(updated?.signOffStatus).toBe("SIGNED_OFF");
    expect(updated?.signedOffBy).toBe("Dr. Sarah Chen (Fellow)");
    expect(updated?.signOffNotes).toContain("Puncture site clean");
    expect(updated?.signedOffAt).toBeDefined();
  });

  it("queues mutations locally when offline and synchronizes on network restoration", async () => {
    // 1. Simulate network disconnect (e.g., inside Cath Lab or basement ICU)
    offlineSyncService.setNetworkStatus(false);
    expect(offlineSyncService.isNetworkConnected()).toBe(false);

    const patients = offlineSyncService.getPatients();
    const patient2 = patients[1];

    // 2. Perform bedside sign-off while offline
    offlineSyncService.recordPhysicianSignOff(
      patient2.id,
      "Dr. Roy (Faculty IR)",
      "STAT BAE completed. Bleeding arrested. Transfer to ICU.",
      patient2.tenantId
    );

    const queue = offlineSyncService.getQueue();
    const pendingItem = queue.find((q) => q.patientId === patient2.id);

    expect(pendingItem).toBeDefined();
    expect(pendingItem?.synced).toBe(false);
    expect(offlineSyncService.getPendingQueueCount()).toBeGreaterThanOrEqual(1);

    // 3. Restore network connectivity
    offlineSyncService.setNetworkStatus(true);
    expect(offlineSyncService.isNetworkConnected()).toBe(true);

    // 4. Assert queue was processed
    expect(offlineSyncService.getPendingQueueCount()).toBe(0);
    expect(pendingItem?.synced).toBe(true);
  });

  it("dispatches clinical alert payload with correct tenantId and priority formatting", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        messageId: "msg_stat_test_123",
        status: "dispatched",
      }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const result = await mobileNotificationClient.dispatchClinicalAlert({
      tenantId: "tenant_sms_jaipur",
      eventType: "STAT_CASE_BOOKED",
      title: "EMERGENCY: STAT BAE",
      body: "Massive hemoptysis active",
      priority: "CRITICAL",
      suiteName: "Angio Suite 1",
    });

    expect(result.success).toBe(true);
    expect(result.messageId).toBe("msg_stat_test_123");
    expect(mockFetch).toHaveBeenCalledWith(
      "/api/proxy/notifications/api/v1/notifications/broadcast",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "X-Tenant-ID": "tenant_sms_jaipur",
        }),
      })
    );

    vi.unstubAllGlobals();
  });
});
