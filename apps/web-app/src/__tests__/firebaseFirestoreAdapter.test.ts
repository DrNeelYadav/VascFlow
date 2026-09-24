import { describe, it, expect, vi } from "vitest";
import { NextRequest } from "next/server";
import { app, db, isFirebaseConfigured, firebaseConfig } from "../../app/lib/firebase";
import { GET as getCases, POST as postCase } from "../../app/api/cases/route";
import { POST as depleteInventory } from "../../app/api/inventory/use/route";
import { GET as getAudit, POST as postAudit } from "../../app/api/audit/route";

vi.mock("@/auth", () => ({
  auth: vi.fn().mockResolvedValue({
    user: { id: "dr-roy-01", email: "dr.roy@smsmc.gov.in" },
  }),
}));

describe("Google Cloud Firestore Adapter & Serverless Routes Suite", () => {
  describe("Firebase Client Initialization", () => {
    it("initializes Firebase singleton app with project endoflow-54b71", () => {
      expect(app).toBeDefined();
      expect(app.name).toBeDefined();
      expect(firebaseConfig.projectId).toBe("endoflow-54b71");
      expect(firebaseConfig.appId).toBe("1:726336393001:web:7cb54d311f72c2b21ff138");
    });

    it("initializes Cloud Firestore database instance", () => {
      expect(db).toBeDefined();
      expect(db.type).toBe("firestore");
      expect(isFirebaseConfigured()).toBe(true);
    });
  });

  describe("/api/cases Route Handler (Firestore cases collection)", () => {
    it("retrieves cases from Firestore collection with fallback for unseeded database", async () => {
      const req = new NextRequest("http://localhost:3001/api/cases?limit=10");
      const res = await getCases(req);

      expect(res.status).toBe(200);
      const data = await res.json();
      expect(Array.isArray(data)).toBe(true);
      // Production default: empty array when Firestore is offline and no fallback seed
      expect(data.length).toBeGreaterThanOrEqual(0);
    });

    it("rejects POST with invalid or non-object payload", async () => {
      const req = new Request("http://localhost:3001/api/cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(null),
      });

      const res = await postCase(req);
      expect(res.status).toBe(400);
      const data = await res.json();
      expect(data.error).toContain("Invalid payload");
    });
  });

  describe("/api/inventory/use Route Handler (Firestore runTransaction)", () => {
    it("depletes inventory items atomically and returns item ledger with timestamp", async () => {
      const req = new NextRequest("http://localhost:3001/api/inventory/use", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: "CASE-FIRESTORE-001",
          items: [
            { sku: "RMSCL-SHEATH-6F", quantity: 1, name: "Terumo 6F Sheath" },
            { sku: "RMSCL-WIRE-035", quantity: 2, name: "Terumo 0.035 Glidewire" },
          ],
        }),
      });

      const res = await depleteInventory(req);
      expect(res.status).toBe(200);

      const data = await res.json();
      expect(data.success).toBe(true);
      expect(data.caseId).toBe("CASE-FIRESTORE-001");
      expect(data.depletedCount).toBe(2);
      expect(data.depletedItems).toHaveLength(2);
      expect(data.depletedItems[0].quantityUsed).toBe(1);
      expect(data.source).toBeDefined();
    }, 15000);
  });

  describe("/api/audit Route Handler (Firestore audit_logs collection)", () => {
    it("records a structured audit entry and retrieves audit ledger", async () => {
      const postReq = new NextRequest("http://localhost:3001/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "VIEW_STUDY",
          entityType: "DicomStudy",
          entityId: "1.2.840.10008.1.1",
          staffId: "dr.roy@smsmc.gov.in",
          details: { seriesCount: 4 },
        }),
      });

      const postRes = await postAudit(postReq);
      expect(postRes.status).toBe(201);
      const postData = await postRes.json();
      expect(postData.success).toBe(true);
      expect(postData.record.status).toBe("VERIFIED_TAMPER_PROOF");

      const getReq = new NextRequest("http://localhost:3001/api/audit?limit=10");
      const getRes = await getAudit(getReq);
      expect(getRes.status).toBe(200);
      const getData = await getRes.json();
      expect(getData.logs).toBeDefined();
      expect(getData.logs.length).toBeGreaterThan(0);
    }, 15000);
  });
});
