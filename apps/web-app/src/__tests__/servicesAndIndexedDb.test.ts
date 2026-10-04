import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  indexedDbService,
  getRecord,
  getAllRecords,
  putRecord,
  putRecords,
  deleteRecord,
  clearStore,
  closeDatabase,
  isIndexedDbSupported,
} from "../../app/lib/services/indexedDbService";
import {
  casesService,
  fetchCases,
  fetchCaseById,
  saveCase,
  updateCaseStatus,
} from "../../app/lib/services/casesService";
import {
  patientsService,
  fetchPatients,
  fetchPatientById,
  savePatient,
} from "../../app/lib/services/patientsService";
import {
  schemesService,
  fetchSchemes,
  fetchSchemeByCode,
  getApprovedImplants,
  CANONICAL_SCHEME_RECORDS,
} from "../../app/lib/services/schemesService";

// Helper to create an in-memory IndexedDB mock
function createInMemoryIndexedDbMock() {
  const stores = new Map<string, Map<any, any>>();

  function getStoreMap(name: string): Map<any, any> {
    if (!stores.has(name)) {
      stores.set(name, new Map());
    }
    return stores.get(name)!;
  }

  const existingStoreNames = new Set<string>();

  const mockDb = {
    objectStoreNames: {
      contains: (name: string) => existingStoreNames.has(name),
    },
    createObjectStore: (name: string, _options?: any) => {
      existingStoreNames.add(name);
      return {};
    },
    transaction: (storeNames: string | string[], mode: string) => {
      const activeStores = Array.isArray(storeNames) ? storeNames : [storeNames];
      let completeCallback: (() => void) | null = null;
      let errorCallback: ((err: any) => void) | null = null;

      const tx = {
        objectStore: (name: string) => {
          const map = getStoreMap(name);
          return {
            get: (key: any) => {
              const req: any = {};
              setTimeout(() => {
                req.result = map.get(key);
                if (req.onsuccess) req.onsuccess();
                if (completeCallback) completeCallback();
              }, 0);
              return req;
            },
            getAll: () => {
              const req: any = {};
              setTimeout(() => {
                req.result = Array.from(map.values());
                if (req.onsuccess) req.onsuccess();
                if (completeCallback) completeCallback();
              }, 0);
              return req;
            },
            put: (val: any) => {
              const key = val.id !== undefined ? val.id : val.code !== undefined ? val.code : `auto_${map.size + 1}`;
              map.set(key, val);
              const req: any = { result: key };
              setTimeout(() => {
                if (req.onsuccess) req.onsuccess();
                if (completeCallback) completeCallback();
              }, 0);
              return req;
            },
            delete: (key: any) => {
              map.delete(key);
              const req: any = {};
              setTimeout(() => {
                if (req.onsuccess) req.onsuccess();
                if (completeCallback) completeCallback();
              }, 0);
              return req;
            },
            clear: () => {
              map.clear();
              const req: any = {};
              setTimeout(() => {
                if (req.onsuccess) req.onsuccess();
                if (completeCallback) completeCallback();
              }, 0);
              return req;
            },
          };
        },
        set oncomplete(fn: () => void) {
          completeCallback = fn;
        },
        set onerror(fn: (err: any) => void) {
          errorCallback = fn;
        },
      };
      return tx;
    },
    close: () => {},
  };

  const idbFactory = {
    open: (name: string, version: number) => {
      const openReq: any = { result: mockDb };
      setTimeout(() => {
        if (openReq.onupgradeneeded) {
          openReq.onupgradeneeded({ oldVersion: 0, newVersion: version });
        }
        if (openReq.onsuccess) {
          openReq.onsuccess();
        }
      }, 0);
      return openReq;
    },
    _stores: stores,
  };

  return idbFactory;
}

describe("EndoFlow Service Layer & Offline IndexedDB Vault Suite", () => {
  describe("1. indexedDbService: SSR & Node.js Fallback Protection", () => {
    const originalWindow = global.window;

    beforeEach(() => {
      closeDatabase();
      // Simulate SSR environment where window is undefined or indexedDB is missing
      (global as any).window = undefined;
    });

    afterEach(() => {
      (global as any).window = originalWindow;
    });

    it("reports isIndexedDbSupported() === false in SSR", () => {
      expect(isIndexedDbSupported()).toBe(false);
    });

    it("safely handles getRecord by returning null without throwing", async () => {
      const result = await getRecord("cases", "CASE-001");
      expect(result).toBeNull();
    });

    it("safely handles getAllRecords by returning an empty array without throwing", async () => {
      const result = await getAllRecords("cases");
      expect(result).toEqual([]);
    });

    it("safely handles putRecord without throwing", async () => {
      await expect(putRecord("cases", { id: "CASE-001", status: "SCHEDULED" })).resolves.toBeUndefined();
    });

    it("safely handles putRecords without throwing", async () => {
      await expect(putRecords("cases", [{ id: "CASE-001" }, { id: "CASE-002" }])).resolves.toBeUndefined();
    });

    it("safely handles deleteRecord without throwing", async () => {
      await expect(deleteRecord("cases", "CASE-001")).resolves.toBeUndefined();
    });

    it("safely handles clearStore without throwing", async () => {
      await expect(clearStore("cases")).resolves.toBeUndefined();
    });
  });

  describe("2. indexedDbService: Native IndexedDB Operations", () => {
    let mockIdb: ReturnType<typeof createInMemoryIndexedDbMock>;

    beforeEach(() => {
      closeDatabase();
      mockIdb = createInMemoryIndexedDbMock();
      (global as any).window = { indexedDB: mockIdb };
    });

    afterEach(() => {
      closeDatabase();
      delete (global as any).window;
    });

    it("reports isIndexedDbSupported() === true when window.indexedDB is present", () => {
      expect(isIndexedDbSupported()).toBe(true);
    });

    it("stores and retrieves records from cases store", async () => {
      const clinicalCase = {
        id: "CASE-TACE-001",
        patientName: "Ram Lal Meena",
        uhid: "UHID-2026-9901",
        procedureName: "Transarterial Chemoembolization",
        status: "IN_PROCEDURE",
      };

      await putRecord("cases", clinicalCase);
      const retrieved = await getRecord<typeof clinicalCase>("cases", "CASE-TACE-001");

      expect(retrieved).not.toBeNull();
      expect(retrieved?.id).toBe("CASE-TACE-001");
      expect(retrieved?.patientName).toBe("Ram Lal Meena");
      expect(retrieved?.status).toBe("IN_PROCEDURE");
    });

    it("stores and retrieves multiple records with putRecords and getAllRecords", async () => {
      const records = [
        { id: "PAT-001", name: "Patient One" },
        { id: "PAT-002", name: "Patient Two" },
        { id: "PAT-003", name: "Patient Three" },
      ];

      await putRecords("patients", records);
      const all = await getAllRecords<any>("patients");

      expect(all.length).toBe(3);
      expect(all.map((p) => p.id)).toEqual(["PAT-001", "PAT-002", "PAT-003"]);
    });

    it("deletes a record and clears an entire store", async () => {
      await putRecord("schemes", { code: "MAAY", name: "Chiranjeevi" });
      await putRecord("schemes", { code: "RGHS", name: "Rajasthan Govt" });

      await deleteRecord("schemes", "RGHS");
      const rghs = await getRecord("schemes", "RGHS");
      expect(rghs).toBeNull();

      const maay = await getRecord("schemes", "MAAY");
      expect(maay).not.toBeNull();

      await clearStore("schemes");
      const empty = await getAllRecords("schemes");
      expect(empty).toEqual([]);
    });
  });

  describe("3. casesService: Unified Interface with Offline Fallback", () => {
    let mockIdb: ReturnType<typeof createInMemoryIndexedDbMock>;
    const originalFetch = global.fetch;

    beforeEach(() => {
      closeDatabase();
      mockIdb = createInMemoryIndexedDbMock();
      (global as any).window = { indexedDB: mockIdb };
    });

    afterEach(() => {
      closeDatabase();
      global.fetch = originalFetch;
      delete (global as any).window;
    });

    it("fetchCases: caches records in IndexedDB upon successful network response", async () => {
      const serverCases = [
        { id: "CASE-01", patientName: "A", status: "SCHEDULED" },
        { id: "CASE-02", patientName: "B", status: "ADMITTED_PREPPED" },
      ];

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => serverCases,
      });

      const result = await fetchCases();
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe("CASE-01");

      // Verify records are cached in IndexedDB
      const cached = await getAllRecords<any>("cases");
      expect(cached).toHaveLength(2);
      expect(cached[1].id).toBe("CASE-02");
    });

    it("fetchCases: falls back to IndexedDB cache when network throws (Cath Lab lead RF outage)", async () => {
      // Pre-seed local cache
      await putRecord("cases", { id: "OFFLINE-CASE-01", patientName: "Offline Patient", status: "SCHEDULED" });

      // Simulate network disconnection
      global.fetch = vi.fn().mockRejectedValue(new TypeError("Failed to fetch: Network unreachable"));

      const result = await fetchCases();
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("OFFLINE-CASE-01");
      expect(result[0].patientName).toBe("Offline Patient");
    });

    it("fetchCaseById: returns cached record on network 404 or connection failure", async () => {
      await putRecord("cases", { id: "CASE-PTBD-88", procedureName: "PTBD", status: "IN_PROCEDURE" });

      global.fetch = vi.fn().mockRejectedValue(new Error("Network Error"));

      const result = await fetchCaseById("CASE-PTBD-88");
      expect(result).not.toBeNull();
      expect(result?.id).toBe("CASE-PTBD-88");
      expect(result?.procedureName).toBe("PTBD");
    });

    it("saveCase: online caches to IDB; offline buffers to IDB and enqueues to sync_queue", async () => {
      // 1. Online save
      const onlinePayload = { id: "CASE-ONLINE-1", procedureName: "TIPS" };
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 201,
        json: async () => ({ ...onlinePayload, createdAt: "2026-10-03T10:00:00.000Z" }),
      });

      const savedOnline = await saveCase(onlinePayload);
      expect(savedOnline.id).toBe("CASE-ONLINE-1");
      const inIdb = await getRecord<any>("cases", "CASE-ONLINE-1");
      expect(inIdb).not.toBeNull();

      // 2. Offline save
      global.fetch = vi.fn().mockRejectedValue(new Error("No Wi-Fi in lead booth"));
      const offlinePayload = { id: "CASE-OFFLINE-2", procedureName: "Bronchial Embo" };

      const savedOffline = await saveCase(offlinePayload);
      expect(savedOffline.id).toBe("CASE-OFFLINE-2");

      const inIdbOffline = await getRecord<any>("cases", "CASE-OFFLINE-2");
      expect(inIdbOffline).not.toBeNull();

      // Verify sync_queue holds the mutation
      const queue = await getAllRecords<any>("sync_queue");
      expect(queue.length).toBeGreaterThanOrEqual(1);
      expect(queue.some((item) => item.caseId === "CASE-OFFLINE-2")).toBe(true);
    });

    it("updateCaseStatus: POSTs to /api/cases/:id/status and updates IndexedDB record", async () => {
      await putRecord("cases", { id: "CASE-STAT-01", status: "SCHEDULED" });

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          success: true,
          caseId: "CASE-STAT-01",
          status: "IN_PROCEDURE",
          updatedAt: "2026-10-03T12:00:00.000Z",
        }),
      });

      const res = await updateCaseStatus("CASE-STAT-01", "IN_PROCEDURE", "Sheath inserted");
      expect(res.success).toBe(true);
      expect(res.status).toBe("IN_PROCEDURE");

      const inIdb = await getRecord<any>("cases", "CASE-STAT-01");
      expect(inIdb?.status).toBe("IN_PROCEDURE");
    });

    it("updateCaseStatus: offline updates IndexedDB and records in sync_queue", async () => {
      await putRecord("cases", { id: "CASE-STAT-OFFLINE", status: "IN_PROCEDURE" });

      global.fetch = vi.fn().mockRejectedValue(new Error("Network failure"));

      const res = await updateCaseStatus("CASE-STAT-OFFLINE", "POST_OP_HOLDING");
      expect(res.success).toBe(true);
      expect(res.offline).toBe(true);

      const inIdb = await getRecord<any>("cases", "CASE-STAT-OFFLINE");
      expect(inIdb?.status).toBe("POST_OP_HOLDING");

      const queue = await getAllRecords<any>("sync_queue");
      expect(queue.some((item) => item.caseId === "CASE-STAT-OFFLINE" && item.payload.status === "POST_OP_HOLDING")).toBe(true);
    });
  });

  describe("4. patientsService: Unified Demographics & Offline Fallback", () => {
    let mockIdb: ReturnType<typeof createInMemoryIndexedDbMock>;
    const originalFetch = global.fetch;

    beforeEach(() => {
      closeDatabase();
      mockIdb = createInMemoryIndexedDbMock();
      (global as any).window = { indexedDB: mockIdb };
    });

    afterEach(() => {
      closeDatabase();
      global.fetch = originalFetch;
      delete (global as any).window;
    });

    it("fetchPatients: caches fetched patients into IndexedDB store 'patients'", async () => {
      const serverPatients = [
        { id: "PAT-01", name: "Sunita Devi", uhid: "UHID-001" },
        { id: "PAT-02", name: "Bhanwar Singh", uhid: "UHID-002" },
      ];

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => serverPatients,
      });

      const patients = await fetchPatients();
      expect(patients).toHaveLength(2);
      expect(patients[0].name).toBe("Sunita Devi");

      const cached = await getAllRecords<any>("patients");
      expect(cached).toHaveLength(2);
    });

    it("fetchPatients: returns cached records when offline", async () => {
      await putRecord("patients", { id: "PAT-OFFLINE", name: "Offline Patient", uhid: "UHID-999" });

      global.fetch = vi.fn().mockRejectedValue(new Error("Hospital LAN down"));

      const patients = await fetchPatients();
      expect(patients).toHaveLength(1);
      expect(patients[0].name).toBe("Offline Patient");
    });

    it("savePatient: saves online and caches; falls back to IDB and sync_queue when offline", async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error("Offline"));

      const patientData = { id: "PAT-NEW-01", name: "Gopal Sharma", uhid: "UHID-1234" };
      const saved = await savePatient(patientData);

      expect(saved.id).toBe("PAT-NEW-01");
      const inIdb = await getRecord<any>("patients", "PAT-NEW-01");
      expect(inIdb).not.toBeNull();
      expect(inIdb.name).toBe("Gopal Sharma");

      const queue = await getAllRecords<any>("sync_queue");
      expect(queue.some((item) => item.patientId === "PAT-NEW-01")).toBe(true);
    });
  });

  describe("5. schemesService: Rajasthan Health Schemes & Approved Implants", () => {
    let mockIdb: ReturnType<typeof createInMemoryIndexedDbMock>;
    const originalFetch = global.fetch;

    beforeEach(() => {
      closeDatabase();
      mockIdb = createInMemoryIndexedDbMock();
      (global as any).window = { indexedDB: mockIdb };
    });

    afterEach(() => {
      closeDatabase();
      global.fetch = originalFetch;
      delete (global as any).window;
    });

    it("fetchSchemes: returns canonical Rajasthan schemes (MAAY, RGHS, AB-PMJAY, RMRS) and seeds IndexedDB", async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error("Offline"));

      const schemes = await fetchSchemes();
      expect(schemes.length).toBeGreaterThanOrEqual(4);

      const codes = schemes.map((s) => s.code);
      expect(codes).toContain("MAAY");
      expect(codes).toContain("RGHS");
      expect(codes).toContain("AB-PMJAY");
      expect(codes).toContain("RMRS");

      // Check that schemes are now cached in IndexedDB
      const cached = await getAllRecords<any>("schemes");
      expect(cached.length).toBeGreaterThanOrEqual(4);
    });

    it("fetchSchemeByCode: fetches scheme details including tariffs and implants", async () => {
      const maay = await fetchSchemeByCode("MAAY");
      expect(maay).not.toBeNull();
      expect(maay?.code).toBe("MAAY");
      expect(maay?.coverageCeilingINR).toBe(2500000);
      expect(maay?.tariffs.length).toBeGreaterThan(0);

      const rghs = await fetchSchemeByCode("rghs");
      expect(rghs).not.toBeNull();
      expect(rghs?.code).toBe("RGHS");
    });

    it("getApprovedImplants: returns government-approved IR implants with price caps", async () => {
      const implants = await getApprovedImplants("MAAY");
      expect(implants.length).toBeGreaterThan(0);

      // Verify Lipiodol and Microcatheter caps
      const lipiodol = implants.find((i) => i.implantCode === "LIP_01");
      expect(lipiodol).toBeDefined();
      expect(lipiodol?.cappedPriceINR).toBe(12500);

      const microcatheter = implants.find((i) => i.implantCode === "MIC_01");
      expect(microcatheter).toBeDefined();
      expect(microcatheter?.cappedPriceINR).toBe(18000);
    });
  });
});
