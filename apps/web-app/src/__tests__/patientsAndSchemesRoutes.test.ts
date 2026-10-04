import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import { GET as getPatients, POST as postPatient } from "../../app/api/patients/route";
import { GET as getPatientById } from "../../app/api/patients/[id]/route";
import { GET as getCaseById } from "../../app/api/cases/[caseId]/route";
import { POST as postCaseStatus } from "../../app/api/cases/[caseId]/status/route";
import { GET as getSchemes } from "../../app/api/schemes/route";

// Track mock session state
let mockStaffSession: any = {
  user: {
    id: "dr-roy-01",
    email: "dr.roy@smsmc.gov.in",
    roleTier: "FACULTY",
    roleCode: "FACULTY",
  },
};

vi.mock("@/auth", () => ({
  auth: vi.fn(async () => mockStaffSession),
}));

// In-memory Firestore store for testing
const mockFirestorePatients = new Map<string, any>();
const mockFirestoreCases = new Map<string, any>();

vi.mock("@/app/lib/firebaseAdmin", () => ({
  getAdminFirestore: vi.fn(() => ({
    collection: vi.fn((colName: string) => {
      const storage = colName === "patients" ? mockFirestorePatients : mockFirestoreCases;
      return {
        limit: vi.fn((n: number) => ({
          get: vi.fn(async () => {
            const docs = Array.from(storage.entries())
              .slice(0, n)
              .map(([id, data]) => ({
                id,
                data: () => data,
              }));
            return { docs };
          }),
        })),
        doc: vi.fn((docId?: string) => ({
          get: vi.fn(async () => {
            const data = docId ? storage.get(docId) : undefined;
            return {
              exists: !!data,
              id: docId,
              data: () => data,
            };
          }),
          set: vi.fn(async (record: any) => {
            if (docId) {
              storage.set(docId, record);
            }
          }),
        })),
        runTransaction: vi.fn(async (cb: any) => {
          return cb({
            get: vi.fn(async (ref: any) => ({
              exists: true,
              data: () => ({ status: "SCHEDULED", statusHistory: [] }),
            })),
            update: vi.fn(),
            create: vi.fn(),
          });
        }),
      };
    }),
    runTransaction: vi.fn(async (cb: any) => {
      return cb({
        get: vi.fn(async (_ref: any) => ({
          exists: true,
          data: () => ({ status: "SCHEDULED", statusHistory: [] }),
        })),
        update: vi.fn(),
        create: vi.fn(),
      });
    }),
  })),
}));

describe("EndoFlow Clinical API Routes & Access Control Suite", () => {
  beforeEach(() => {
    mockFirestorePatients.clear();
    mockFirestoreCases.clear();
    // Default to doctor/faculty session
    mockStaffSession = {
      user: {
        id: "dr-roy-01",
        email: "dr.roy@smsmc.gov.in",
        roleTier: "FACULTY",
        roleCode: "FACULTY",
      },
    };
  });

  describe("1. /api/patients Route Handler", () => {
    it("returns 401 Unauthorized when session is missing", async () => {
      mockStaffSession = null;
      const req = new NextRequest("http://localhost:3001/api/patients");
      const res = await getPatients(req);

      expect(res.status).toBe(401);
      const json = await res.json();
      expect(json.error).toContain("Unauthorized");
    });

    it("allows physician to POST a new patient record", async () => {
      const patientPayload = {
        name: "Santosh Meena",
        uhid: "UHID-2026-SMS-001",
        age: 52,
        gender: "Male",
        diagnosis: "Hepatocellular Carcinoma",
      };

      const req = new Request("http://localhost:3001/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientPayload),
      });

      const res = await postPatient(req);
      expect(res.status).toBe(201);
      const data = await res.json();
      expect(data.name).toBe("Santosh Meena");
      expect(data.uhid).toBe("UHID-2026-SMS-001");
      expect(data.id).toBeDefined();
    });

    it("rejects non-physician staff from creating patient records with 403 Forbidden", async () => {
      mockStaffSession = {
        user: {
          id: "tech-01",
          email: "vikram.tech@smsmc.gov.in",
          roleTier: "TECH",
          roleCode: "TECHNICIAN",
        },
      };

      const req = new Request("http://localhost:3001/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Unauthorized Attempt" }),
      });

      const res = await postPatient(req);
      expect(res.status).toBe(403);
    });

    it("redacts identifiable patient PII for non-physician staff on GET", async () => {
      // Seed a patient with identifiable info
      mockFirestorePatients.set("PAT-REDACT-01", {
        id: "PAT-REDACT-01",
        name: "Confidential Name",
        uhid: "UHID-SECRET",
        phone: "9876543210",
        age: 45,
        gender: "Female",
      });

      // Nurse session
      mockStaffSession = {
        user: {
          id: "nurse-01",
          email: "sunita.sister@smsmc.gov.in",
          roleTier: "NURSE",
          roleCode: "STAFF_NURSE",
        },
      };

      const req = new NextRequest("http://localhost:3001/api/patients");
      const res = await getPatients(req);
      expect(res.status).toBe(200);

      const data = await res.json();
      expect(data.length).toBe(1);
      // PII fields should be stripped/redacted
      expect(data[0].name).toBeUndefined();
      expect(data[0].phone).toBeUndefined();
      expect(data[0].uhid).toBeUndefined();
      // Non-PII fields remain
      expect(data[0].age).toBe(45);
      expect(data[0].gender).toBe("Female");
    });
  });

  describe("2. /api/patients/[id] Route Handler", () => {
    it("returns 404 when patient does not exist", async () => {
      const req = new NextRequest("http://localhost:3001/api/patients/NON_EXISTENT");
      const res = await getPatientById(req, {
        params: Promise.resolve({ id: "NON_EXISTENT" }),
      });

      expect(res.status).toBe(404);
    });

    it("returns patient record when found", async () => {
      mockFirestorePatients.set("PAT-FOUND-01", {
        id: "PAT-FOUND-01",
        name: "Geeta Bai",
        age: 60,
      });

      const req = new NextRequest("http://localhost:3001/api/patients/PAT-FOUND-01");
      const res = await getPatientById(req, {
        params: Promise.resolve({ id: "PAT-FOUND-01" }),
      });

      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.id).toBe("PAT-FOUND-01");
      expect(data.name).toBe("Geeta Bai");
    });
  });

  describe("3. /api/cases/[caseId] Route Handler", () => {
    it("returns single procedure case by caseId", async () => {
      mockFirestoreCases.set("CASE-TIPS-01", {
        id: "CASE-TIPS-01",
        procedure: "TIPS",
        status: "SCHEDULED",
      });

      const req = new NextRequest("http://localhost:3001/api/cases/CASE-TIPS-01");
      const res = await getCaseById(req, {
        params: Promise.resolve({ caseId: "CASE-TIPS-01" }),
      });

      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.id).toBe("CASE-TIPS-01");
      expect(data.procedure).toBe("TIPS");
    });
  });

  describe("4. /api/cases/[caseId]/status Route Handler (POST alias)", () => {
    it("handles POST status transition using POST alias", async () => {
      mockFirestoreCases.set("CASE-STAT-TEST", {
        id: "CASE-STAT-TEST",
        status: "SCHEDULED",
      });

      const req = new NextRequest("http://localhost:3001/api/cases/CASE-STAT-TEST/status", {
        method: "POST",
        body: JSON.stringify({ status: "IN_PROCEDURE", notes: "Catheter engaged" }),
      });

      const res = await postCaseStatus(req, {
        params: Promise.resolve({ caseId: "CASE-STAT-TEST" }),
      });

      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.success).toBe(true);
      expect(data.status).toBe("IN_PROCEDURE");
    });
  });

  describe("5. /api/schemes Route Handler", () => {
    it("returns canonical Rajasthan schemes (MAAY, RGHS, AB-PMJAY, RMRS) and approved implants", async () => {
      const res = await getSchemes();
      expect(res.status).toBe(200);

      const schemes = await res.json();
      expect(schemes.length).toBe(4);

      const codes = schemes.map((s: any) => s.code);
      expect(codes).toContain("MAAY");
      expect(codes).toContain("RGHS");
      expect(codes).toContain("AB-PMJAY");
      expect(codes).toContain("RMRS");

      // Verify MAAY includes master implants
      const maay = schemes.find((s: any) => s.code === "MAAY");
      expect(maay.approvedImplants.length).toBeGreaterThan(0);
      expect(maay.tariffs.length).toBeGreaterThan(0);
    });
  });
});
