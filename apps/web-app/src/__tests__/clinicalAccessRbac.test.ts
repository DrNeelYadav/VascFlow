import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import {
  canViewIdentifiableClinicalData,
  redactClinicalRecord,
  VerifiedStaff,
} from "../../app/lib/auth/clinicalAccess";
import { GET as getClinicalSync } from "../../app/api/clinical-sync/route";
import { GET as getCases, POST as postCase } from "../../app/api/cases/route";
import { GET as getCaseStatus, PATCH as patchCaseStatus } from "../../app/api/cases/[caseId]/status/route";

let currentMockUser: any = null;

vi.mock("@/auth", () => ({
  auth: vi.fn(async () => {
    if (!currentMockUser) return null;
    return { user: currentMockUser };
  }),
}));

const mockCasesStore: Record<string, any> = {
  "CASE-101": {
    id: "CASE-101",
    patientName: "Ramesh Sharma",
    name: "Ramesh Sharma",
    crNo: "CR-98765",
    hid: "HID-12345",
    phone: "9876543210",
    diagnosis: "Hepatocellular Carcinoma",
    clinicalHistory: "Post hepatitis B liver cirrhosis",
    labs: { platelets: 120000, inr: 1.1 },
    vitals: { bp: "120/80", hr: 72 },
    notes: "Plan for segment 6 selective TACE",
    attachments: ["report.pdf"],
    procedure: "TACE",
    status: "SCHEDULED",
    statusHistory: [],
  },
};

vi.mock("@/app/lib/firebaseAdmin", () => ({
  getAdminFirestore: vi.fn(() => ({
    collection: vi.fn((colName: string) => ({
      limit: vi.fn(() => ({
        get: vi.fn().mockImplementation(async () => {
          if (colName === "cases") {
            return {
              docs: Object.values(mockCasesStore).map((c) => ({
                id: c.id,
                data: () => ({ ...c }),
              })),
            };
          }
          if (colName === "patients") {
            return {
              docs: [
                {
                  id: "PT-01",
                  data: () => ({
                    patientName: "Secret Patient",
                    crNo: "CR-0000",
                    procedure: "Diagnostic Angio",
                    modality: "DSA",
                    status: "ADMITTED",
                  }),
                },
              ],
            };
          }
          return { docs: [] };
        }),
      })),
      doc: vi.fn((docId?: string) => ({
        get: vi.fn().mockImplementation(async () => {
          const found = docId ? mockCasesStore[docId] : null;
          return {
            exists: !!found,
            data: () => found || {},
          };
        }),
        set: vi.fn().mockResolvedValue({}),
      })),
    })),
    runTransaction: vi.fn(async (updateFn: any) => {
      const mockTx = {
        get: vi.fn().mockImplementation(async (ref: any) => ({
          exists: true,
          data: () => mockCasesStore["CASE-101"] || {},
        })),
        update: vi.fn(),
        create: vi.fn(),
      };
      return await updateFn(mockTx);
    }),
  })),
}));

describe("Clinical Access RBAC & API Hardening Suite", () => {
  beforeEach(() => {
    currentMockUser = null;
  });

  describe("1. Role-based canViewIdentifiableClinicalData authorization", () => {
    it("allows clinicians: FACULTY, FELLOW, RESIDENT, DM, SR, CONSULTANT", () => {
      const allowedRoles: VerifiedStaff[] = [
        { roleTier: "FACULTY" },
        { roleTier: "FELLOW" },
        { roleTier: "RESIDENT" },
        { roleTier: "SENIOR_RESIDENT" },
        { roleTier: "DM" },
        { roleTier: "SR" },
        { roleTier: "CONSULTANT" },
        { roleCode: "FACULTY" },
        { roleCode: "FELLOW" },
        { roleCode: "CONSULTANT" },
        { roleCode: "DM" },
        { roleCode: "DM_NEUROINTERVENTION" },
        { roleCode: "SR" },
        { roleCode: "SR_RADIOLOGY" },
        { roleCode: "INTERVENTIONAL_RADIOLOGIST" },
        { roleCode: "DOCTOR" },
        { roleCode: "CHIEF_RESIDENT" },
      ];

      for (const staff of allowedRoles) {
        expect(canViewIdentifiableClinicalData(staff)).toBe(true);
      }
    });

    it("strictly denies technicians and nurses: TECHNICIAN, TECH, NURSE", () => {
      const deniedRoles: VerifiedStaff[] = [
        { roleTier: "TECHNICIAN" },
        { roleTier: "TECH" },
        { roleTier: "NURSE" },
        { roleTier: "NURSING" },
        { roleCode: "TECHNICIAN" },
        { roleCode: "TECH" },
        { roleCode: "DSA_TECH" },
        { roleCode: "RADIOLOGY_TECHNICIAN" },
        { roleCode: "NURSE" },
        { roleCode: "STAFF_NURSE" },
        { roleTier: "FACULTY", roleCode: "TECHNICIAN" }, // Strict denial overrides
      ];

      for (const staff of deniedRoles) {
        expect(canViewIdentifiableClinicalData(staff)).toBe(false);
      }
    });
  });

  describe("2. Server API Boundary Redaction (redactClinicalRecord)", () => {
    it("completely strips sensitive patient-identifying and clinical details", () => {
      const record = {
        id: "CASE-101",
        name: "Ram Lal",
        patientName: "Ram Lal",
        crNo: "CR-12345",
        hid: "HID-987",
        phone: "9988776655",
        contactNumber: "9988776655",
        contactNumbers: ["9988776655"],
        diagnosis: "Budd Chiari Syndrome",
        clinicalHistory: "Ascites and portal hypertension",
        labs: { bilirubin: 3.2, inr: 1.8 },
        vitals: { hr: 84 },
        notes: "Strict bed rest post-procedure",
        attachments: [{ file: "scan.dcm" }],
        procedure: "TIPS",
        status: "SCHEDULED",
      };

      const redacted = redactClinicalRecord(record);

      expect(redacted.id).toBe("CASE-101");
      expect(redacted.procedure).toBe("TIPS");
      expect(redacted.status).toBe("SCHEDULED");

      // Verify patient-identifying and clinical fields are completely redacted
      expect(redacted).not.toHaveProperty("name");
      expect(redacted).not.toHaveProperty("patientName");
      expect(redacted).not.toHaveProperty("crNo");
      expect(redacted).not.toHaveProperty("hid");
      expect(redacted).not.toHaveProperty("phone");
      expect(redacted).not.toHaveProperty("contactNumber");
      expect(redacted).not.toHaveProperty("contactNumbers");
      expect(redacted).not.toHaveProperty("diagnosis");
      expect(redacted).not.toHaveProperty("clinicalHistory");
      expect(redacted).not.toHaveProperty("labs");
      expect(redacted).not.toHaveProperty("vitals");
      expect(redacted).not.toHaveProperty("notes");
      expect(redacted).not.toHaveProperty("attachments");
    });
  });

  describe("3. Missing Authentication Fails Closed with HTTP 401", () => {
    it("/api/clinical-sync returns 401 when unauthenticated", async () => {
      currentMockUser = null;
      const res = await getClinicalSync();
      expect(res.status).toBe(401);
      const json = await res.json();
      expect(json.error).toMatch(/Authentication required/i);
    });

    it("/api/cases GET returns 401 when unauthenticated", async () => {
      currentMockUser = null;
      const req = new NextRequest("http://localhost:3001/api/cases");
      const res = await getCases(req);
      expect(res.status).toBe(401);
    });

    it("/api/cases POST returns 401 when unauthenticated", async () => {
      currentMockUser = null;
      const req = new Request("http://localhost:3001/api/cases", {
        method: "POST",
        body: JSON.stringify({ procedure: "TACE" }),
      });
      const res = await postCase(req);
      expect(res.status).toBe(401);
    });

    it("/api/cases/[caseId]/status GET returns 401 when unauthenticated", async () => {
      currentMockUser = null;
      const req = new NextRequest("http://localhost:3001/api/cases/CASE-101/status");
      const res = await getCaseStatus(req, { params: Promise.resolve({ caseId: "CASE-101" }) });
      expect(res.status).toBe(401);
    });

    it("/api/cases/[caseId]/status PATCH returns 401 when unauthenticated", async () => {
      currentMockUser = null;
      const req = new NextRequest("http://localhost:3001/api/cases/CASE-101/status", {
        method: "PATCH",
        body: JSON.stringify({ nextStatus: "IN_PROCEDURE" }),
      });
      const res = await patchCaseStatus(req, { params: Promise.resolve({ caseId: "CASE-101" }) });
      expect(res.status).toBe(401);
    });
  });

  describe("4. Technician vs Clinician Endpoint Access Enforcement", () => {
    it("/api/cases GET redacts sensitive fields for technician clients", async () => {
      currentMockUser = {
        id: "tech-01",
        email: "tech@smsmc.gov.in",
        roleTier: "TECHNICIAN",
        roleCode: "TECH",
      };

      const req = new NextRequest("http://localhost:3001/api/cases");
      const res = await getCases(req);
      expect(res.status).toBe(200);

      const data = await res.json();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);

      const firstCase = data[0];
      expect(firstCase.id).toBe("CASE-101");
      expect(firstCase.procedure).toBe("TACE");

      // Denied fields must not be present in response
      expect(firstCase.patientName).toBeUndefined();
      expect(firstCase.crNo).toBeUndefined();
      expect(firstCase.hid).toBeUndefined();
      expect(firstCase.phone).toBeUndefined();
      expect(firstCase.diagnosis).toBeUndefined();
      expect(firstCase.clinicalHistory).toBeUndefined();
      expect(firstCase.labs).toBeUndefined();
      expect(firstCase.vitals).toBeUndefined();
      expect(firstCase.notes).toBeUndefined();
      expect(firstCase.attachments).toBeUndefined();
    });

    it("/api/cases GET returns unredacted identifiable fields for clinicians", async () => {
      currentMockUser = {
        id: "doc-01",
        email: "doctor@smsmc.gov.in",
        roleTier: "FACULTY",
        roleCode: "CONSULTANT",
      };

      const req = new NextRequest("http://localhost:3001/api/cases");
      const res = await getCases(req);
      expect(res.status).toBe(200);

      const data = await res.json();
      const firstCase = data[0];
      expect(firstCase.patientName).toBe("Ramesh Sharma");
      expect(firstCase.crNo).toBe("CR-98765");
      expect(firstCase.diagnosis).toBe("Hepatocellular Carcinoma");
    });

    it("/api/cases POST rejects technician creation attempts with HTTP 403", async () => {
      currentMockUser = {
        id: "tech-01",
        email: "tech@smsmc.gov.in",
        roleTier: "TECHNICIAN",
        roleCode: "TECH",
      };

      const req = new Request("http://localhost:3001/api/cases", {
        method: "POST",
        body: JSON.stringify({ procedure: "TACE" }),
      });
      const res = await postCase(req);
      expect(res.status).toBe(403);
    });

    it("/api/cases/[caseId]/status routes reject technician access with HTTP 403", async () => {
      currentMockUser = {
        id: "tech-01",
        email: "tech@smsmc.gov.in",
        roleTier: "TECHNICIAN",
        roleCode: "TECH",
      };

      const getReq = new NextRequest("http://localhost:3001/api/cases/CASE-101/status");
      const getRes = await getCaseStatus(getReq, { params: Promise.resolve({ caseId: "CASE-101" }) });
      expect(getRes.status).toBe(403);

      const patchReq = new NextRequest("http://localhost:3001/api/cases/CASE-101/status", {
        method: "PATCH",
        body: JSON.stringify({ nextStatus: "IN_PROCEDURE" }),
      });
      const patchRes = await patchCaseStatus(patchReq, { params: Promise.resolve({ caseId: "CASE-101" }) });
      expect(patchRes.status).toBe(403);
    });

    it("/api/clinical-sync returns non-identifiable worklist for technicians", async () => {
      currentMockUser = {
        id: "tech-01",
        email: "tech@smsmc.gov.in",
        roleTier: "TECHNICIAN",
        roleCode: "TECH",
      };

      const res = await getClinicalSync();
      expect(res.status).toBe(200);
      const data = await res.json();

      expect(data.access).toBe("worklist");
      const pt = data.patients[0];
      expect(pt.id).toBe("PT-01");
      expect(pt.procedure).toBe("Diagnostic Angio");
      expect(pt.patientName).toBeUndefined();
      expect(pt.crNo).toBeUndefined();
    });
  });
});
