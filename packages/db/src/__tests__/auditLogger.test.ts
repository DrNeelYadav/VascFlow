import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  logAuditTrail,
  dispatchAuditTrailAsync,
  verifyAuditIntegrity,
  encryptPhiPayload,
  decryptPhiPayload,
  computeTamperHash,
  type AuditLogInput,
  type AuditLogRecord,
} from "../../logAuditTrail";

describe("HIPAA & SOC2 Hardening - Audit Logger & PHI Encryption Suite", () => {
  const testSecret = "test-hmac-secret-key-12345678901234567890123456789012";
  const testPhiKey = "test-phi-aes256-key-12345678901234567890123456789012";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Cryptographic PHI Encryption at Rest (AES-256-GCM)", () => {
    it("encrypts and decrypts sensitive patient information flawlessly", () => {
      const sensitiveData = {
        mrn: "MRN-VIR-2026-999",
        patientName: "JOHN DOE",
        diagnosis: "Hepatic Arterial Pseudoaneurysm",
        contrastVolumeMl: 120,
      };

      const encryptedCipher = encryptPhiPayload(sensitiveData, testPhiKey);
      expect(encryptedCipher).toContain(":");
      const parts = encryptedCipher.split(":");
      expect(parts).toHaveLength(3); // iv : authTag : cipherHex

      const decrypted = decryptPhiPayload(encryptedCipher, testPhiKey);
      expect(decrypted).toEqual(sensitiveData);
    });

    it("rejects corrupted cipher envelopes", () => {
      expect(() => decryptPhiPayload("invalid-format", testPhiKey)).toThrow(
        "Invalid PHI cipher envelope format"
      );
    });
  });

  describe("Tamper-Evident Hashing & Audit Integrity", () => {
    it("generates deterministic HMAC-SHA256 tamper hashes", () => {
      const hash1 = computeTamperHash(
        "2026-09-13T10:00:00.000Z",
        "staff_001",
        "READ",
        "Patient",
        "pat_123",
        "10.0.1.5",
        '{"mrn":"123"}',
        testSecret
      );

      const hash2 = computeTamperHash(
        "2026-09-13T10:00:00.000Z",
        "staff_001",
        "READ",
        "Patient",
        "pat_123",
        "10.0.1.5",
        '{"mrn":"123"}',
        testSecret
      );

      expect(hash1).toHaveLength(64);
      expect(hash1).toBe(hash2);
    });

    it("validates integrity of authentic audit records and catches tampering", () => {
      const timestamp = "2026-09-13T12:00:00.000Z";
      const payload = "encrypted_test_payload";
      const tamperHash = computeTamperHash(
        timestamp,
        "staff_ir_01",
        "SCHEDULE_CASE",
        "Procedure",
        "proc_999",
        "192.168.1.10",
        payload,
        testSecret
      );

      const record: AuditLogRecord = {
        id: "audit_rec_1",
        action: "SCHEDULE_CASE",
        entityType: "Procedure",
        entityId: "proc_999",
        staffId: "staff_ir_01",
        ipAddress: "192.168.1.10",
        userAgent: "Workstation-Terminal-01",
        detailsJson: JSON.stringify({
          data: payload,
          isEncrypted: true,
          tamperHash,
          algorithm: "SHA256-HMAC",
          timestamp,
        }),
        timestamp: new Date(timestamp),
      };

      // Untampered record passes verification
      expect(verifyAuditIntegrity(record, testSecret)).toBe(true);

      // Tampered actor ID fails verification
      const tamperedRecord = { ...record, staffId: "malicious_actor" };
      expect(verifyAuditIntegrity(tamperedRecord, testSecret)).toBe(false);

      // Tampered action fails verification
      const tamperedActionRecord = { ...record, action: "DELETE" };
      expect(verifyAuditIntegrity(tamperedActionRecord, testSecret)).toBe(false);
    });
  });

  describe("Non-Blocking Audit Log Persistence", () => {
    it("persists structured audit log entries through Prisma client", async () => {
      const mockCreate = vi.fn().mockImplementation(({ data }) => {
        return Promise.resolve({
          id: "audit_created_123",
          ...data,
        });
      });

      const mockDbClient = {
        auditLog: {
          create: mockCreate,
        },
      } as any;

      const input: AuditLogInput = {
        actorStaffId: "usr_fac_roy",
        action: "VIEW_VITALS",
        entityType: "Patient",
        entityId: "pat_val_01",
        ipAddress: "10.0.4.15",
        userAgent: "CathLab-Monitor-Suite1",
        details: { patientName: "Marcus Valentine", crNo: "CR-2026-888" },
      };

      const result = await logAuditTrail(input, {
        dbClient: mockDbClient,
        hmacSecret: testSecret,
        phiKey: testPhiKey,
      });

      expect(mockCreate).toHaveBeenCalledTimes(1);
      expect(result.id).toBe("audit_created_123");
      expect(result.action).toBe("VIEW_VITALS");
      expect(result.entityType).toBe("Patient");
      expect(result.entityId).toBe("pat_val_01");
      expect(result.staffId).toBe("usr_fac_roy");

      const savedDetails = JSON.parse(result.detailsJson);
      expect(savedDetails.isEncrypted).toBe(true);
      expect(savedDetails.tamperHash).toBeDefined();
    });

    it("resiliently handles database failures without throwing or blocking primary transaction", async () => {
      const mockErrorCreate = vi.fn().mockRejectedValue(new Error("Connection refused to PostgreSQL"));

      const mockDbClient = {
        auditLog: {
          create: mockErrorCreate,
        },
      } as any;

      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const input: AuditLogInput = {
        actorStaffId: "usr_fac_roy",
        action: "WRITE",
        entityType: "Procedure",
        entityId: "proc_tace_001",
        details: { note: "Catheter engaged in right hepatic artery" },
      };

      // Execution MUST NOT throw, ensuring clinical workflows continue uninterrupted
      const result = await logAuditTrail(input, {
        dbClient: mockDbClient,
        hmacSecret: testSecret,
        phiKey: testPhiKey,
      });

      expect(result).toBeDefined();
      expect(result.id).toContain("local_audit_");
      expect(result.action).toBe("WRITE");
      expect(result.entityType).toBe("Procedure");
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it("dispatches audit entries asynchronously in fire-and-forget fashion", async () => {
      const mockCreate = vi.fn().mockResolvedValue({ id: "async_rec_1" });
      const mockDbClient = {
        auditLog: {
          create: mockCreate,
        },
      } as any;

      dispatchAuditTrailAsync(
        {
          actorStaffId: "usr_resident_02",
          action: "READ",
          entityType: "Telemetry",
          entityId: "tel_angio_01",
        },
        { dbClient: mockDbClient }
      );

      // Allow microtask resolution
      await new Promise((r) => setTimeout(r, 20));
      expect(mockCreate).toHaveBeenCalledTimes(1);
    });
  });
});
