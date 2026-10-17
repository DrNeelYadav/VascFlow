import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/auth", () => ({
  auth: vi.fn().mockResolvedValue(null),
}));
vi.mock("next-auth", () => ({
  default: vi.fn(),
}));

import { sanitizeLogPayload } from "../../app/lib/security/sanitizedLogger";
import { angiosuiteBus, AngiosuiteLiveEvent } from "../../app/lib/server/angiosuiteEventBus";
import { ClinicalDataGateway } from "../../app/lib/server/clinicalDataGateway";


describe("VascFlow Scalability & Synchronization Architecture Suite", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("1. PHI Sanitization & DISHA Telemetry Guardrails", () => {
    it("redacts patient names, phone numbers, and UHID/CR identifiers from diagnostic trace outputs", () => {
      const sensitivePayload = {
        patientName: "Kamla Devi",
        uhid: "CR-2026-90812",
        phone: "9829012345",
        age: 56,
        gender: "Female",
        procedureName: "Transarterial Chemoembolization (TACE)",
        clinicalNotes: "Segment VIII HCC with portal invasion",
      };

      const sanitized: any = sanitizeLogPayload(sensitivePayload);

      // Verify identifiers are redacted or masked
      expect(sanitized.patientName).toBe("K***i");
      expect(sanitized.uhid).toBe("C***2");
      expect(sanitized.phone).toBe("9***5");

      // Verify non-identifiable clinical parameters are preserved intact
      expect(sanitized.age).toBe(56);
      expect(sanitized.gender).toBe("Female");
      expect(sanitized.procedureName).toBe("Transarterial Chemoembolization (TACE)");
      expect(sanitized.clinicalNotes).toBe("Segment VIII HCC with portal invasion");
    });

    it("safely handles nested payloads and arrays without memory leak or recursion crash", () => {
      const nested = {
        meta: { source: "OPD Review Queue" },
        items: [
          { name: "Sunita Bai", contact: "9414012345" },
          { name: "Ramesh Sharma", contact: "9828054321" },
        ],
      };

      const res: any = sanitizeLogPayload(nested);
      expect(res.items[0].name).toBe("S***i");
      expect(res.items[0].contact).toBe("9***5");
      expect(res.items[1].name).toBe("R***a");
    });
  });

  describe("2. Real-Time Angiosuite Live Stream Event Bus", () => {
    it("broadcasts live case status transitions and notifies active subscribers", () => {
      const receivedEvents: AngiosuiteLiveEvent[] = [];
      const unsubscribe = angiosuiteBus.subscribe((event) => {
        receivedEvents.push(event);
      });

      angiosuiteBus.broadcast("case_status_changed", {
        caseId: "CASE-9081",
        status: "IN_PROCEDURE",
        suiteName: "Cath Lab 1",
      });

      angiosuiteBus.broadcast("stat_emergency_booked", {
        caseId: "EMERG-001",
        indication: "Active Massive Hemoptysis for STAT BAE",
      });

      expect(receivedEvents.length).toBe(2);
      expect(receivedEvents[0].type).toBe("case_status_changed");
      expect(receivedEvents[0].payload.caseId).toBe("CASE-9081");
      expect(receivedEvents[0].payload.status).toBe("IN_PROCEDURE");
      expect(receivedEvents[1].type).toBe("stat_emergency_booked");

      unsubscribe();
    });
  });

  describe("3. Unified ClinicalDataGateway Resiliency & Optimistic Versioning", () => {
    it("increments monotonic version counter on case saving to prevent concurrent overwrite collisions", async () => {
      const initialCase = {
        id: "TEST-CASE-SYNC-01",
        uhid: "UHID-778899",
        patientName: "Gopal Lal",
        age: 62,
        gender: "Male",
        procedureName: "Bronchial Artery Embolization",
      };

      const saved1 = await ClinicalDataGateway.saveCase(initialCase);
      expect(saved1.id).toBe("TEST-CASE-SYNC-01");
      expect(saved1.version).toBe(1);

      // Simulate subsequent update from a secondary device (e.g. tablet flowsheet)
      const updatedCase = {
        ...saved1,
        status: "IN_PROCEDURE",
        notes: "Right bronchial artery cannulated via 5F Cobra",
      };

      const saved2 = await ClinicalDataGateway.saveCase(updatedCase);
      expect(saved2.version).toBe(2);
      expect(saved2.status).toBe("IN_PROCEDURE");
    });

    it("retrieves cases with cursor pagination without crashing when external databases are offline", async () => {
      const results = await ClinicalDataGateway.getCases({ limit: 10 });
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBeGreaterThanOrEqual(1);
    });
  });
});
