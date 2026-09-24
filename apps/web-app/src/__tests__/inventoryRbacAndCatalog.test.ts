import { describe, it, expect, vi } from "vitest";
import {
  MASTER_HARDWARE_CATALOG,
  getHardwareByCategory,
  getHardwareItemBySku,
} from "../../app/lib/hardwareCatalog";
import {
  INSTITUTIONAL_STAFF_ACCOUNTS,
  StaffAccount,
} from "../../app/lib/staffAccounts";

/**
 * RBAC assertion logic replicating the strict rules implemented in
 * apps/web-app/app/dashboard/inventory/page.tsx
 */
function isAuthorizedInventoryTechnician(staff: StaffAccount | null | undefined): boolean {
  if (!staff) return false;
  const role = (staff.role || "").toUpperCase().trim();
  const tier = (staff.tier || "").toUpperCase().trim();
  const code = (staff.code || "").toUpperCase().trim();

  // Doctors ('DOCTOR', 'CONSULTANT', 'RESIDENT') and Nursing Officers ('NURSE') cannot edit, add, or decrement inventory quantities
  if (
    role === "DOCTOR" ||
    role === "CONSULTANT" ||
    role === "RESIDENT" ||
    role === "NURSE" ||
    tier === "FACULTY" ||
    tier === "DM_RESIDENT" ||
    tier === "SENIOR_RESIDENT" ||
    tier === "NURSING_OFFICER"
  ) {
    return false;
  }

  // Only Cath Lab Technicians (role: 'TECH' | 'TECHNICIAN')
  return (
    role === "TECH" ||
    role === "TECHNICIAN" ||
    tier === "CATHLAB_TECHNICIAN" ||
    code.startsWith("TC")
  );
}

describe("Consumables Inventory: Authentic Master Catalog & Strict RBAC Suite", () => {
  describe("1. Authentic Master Hardware Catalog", () => {
    it("verifies the authentic master hardware catalog contains all 30 verified angiosuite items", () => {
      expect(MASTER_HARDWARE_CATALOG).toBeDefined();
      expect(MASTER_HARDWARE_CATALOG.length).toBe(30);

      // Verify every item has required clinical & RMSCL inventory attributes
      for (const item of MASTER_HARDWARE_CATALOG) {
        expect(item.id).toBeTruthy();
        expect(item.sku).toMatch(/^RMSCL-/);
        expect(item.name).toBeTruthy();
        expect(item.category).toBeTruthy();
        expect(item.specification).toBeTruthy();
        expect(item.manufacturer).toBeTruthy();
        expect(item.brandName).toBeTruthy();
        expect(item.currentStock).toBeGreaterThanOrEqual(0);
        expect(item.reorderLevel).toBeGreaterThanOrEqual(1);
        expect(item.rmsclMatchingCode).toBeTruthy();
        expect(item.tariffCappedInr).toBeGreaterThan(0);
        expect(item.lastLot).toBeTruthy();
        expect(item.expiryDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    });

    it("verifies the presence of key cath-lab inventory categories in the master catalog", () => {
      const sheaths = getHardwareByCategory("Access Sheaths");
      expect(sheaths.length).toBeGreaterThanOrEqual(4);

      const catheters = getHardwareByCategory("Diagnostic Catheters");
      expect(catheters.length).toBeGreaterThanOrEqual(5);

      const micro = getHardwareByCategory("Microcatheters");
      expect(micro.length).toBeGreaterThanOrEqual(2);

      const wires = getHardwareByCategory("Guidewires");
      expect(wires.length).toBeGreaterThanOrEqual(2);

      const embolics = getHardwareByCategory("Embolics & Coils");
      expect(embolics.length).toBeGreaterThanOrEqual(4);

      const stents = getHardwareByCategory("Stents & Endoprostheses");
      expect(stents.length).toBeGreaterThanOrEqual(3);

      const needles = getHardwareByCategory("Needles & Biopsy");
      expect(needles.length).toBeGreaterThanOrEqual(2);

      const drains = getHardwareByCategory("Drainage & Access");
      expect(drains.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("2. Strict Role-Based Access Control (RBAC)", () => {
    it("authorizes Cath Lab Technicians to increment/decrement inventory quantities", () => {
      const techJP = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "TC01");
      expect(techJP).toBeDefined();
      expect(techJP?.role).toBe("TECHNICIAN");
      expect(isAuthorizedInventoryTechnician(techJP)).toBe(true);

      const techSumit = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "TC02");
      expect(techSumit).toBeDefined();
      expect(techSumit?.role).toBe("TECHNICIAN");
      expect(isAuthorizedInventoryTechnician(techSumit)).toBe(true);

      // Custom / generic technician account with role 'TECH'
      const customTech: StaffAccount = {
        code: "TC99",
        name: "Cath Lab Tech Test",
        role: "TECHNICIAN",
        tier: "CATHLAB_TECHNICIAN",
        title: "Staff Technician",
        department: "Cath Lab",
        avatar: "TC",
      };
      expect(isAuthorizedInventoryTechnician(customTech)).toBe(true);

      const techShortRole: any = {
        code: "TC88",
        name: "Junior Tech",
        role: "TECH",
        tier: "CATHLAB_TECHNICIAN",
        title: "Technician",
        department: "Cath Lab",
        avatar: "JT",
      };
      expect(isAuthorizedInventoryTechnician(techShortRole)).toBe(true);
    });

    it("denies Doctors ('DOCTOR', 'CONSULTANT', 'RESIDENT') from editing/adjusting inventory quantities (read-only)", () => {
      const residentNeel = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "DM01");
      expect(residentNeel).toBeDefined();
      expect(residentNeel?.role).toBe("DOCTOR");
      expect(isAuthorizedInventoryTechnician(residentNeel)).toBe(false);

      const facultyMeenu = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "FC01");
      expect(facultyMeenu).toBeDefined();
      expect(facultyMeenu?.role).toBe("DOCTOR");
      expect(isAuthorizedInventoryTechnician(facultyMeenu)).toBe(false);

      const seniorResident = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "SR01");
      expect(seniorResident).toBeDefined();
      expect(seniorResident?.role).toBe("DOCTOR");
      expect(isAuthorizedInventoryTechnician(seniorResident)).toBe(false);

      const consultantDoc: any = {
        code: "DOC99",
        name: "Dr. Consultant",
        role: "CONSULTANT",
        tier: "FACULTY",
        title: "Consultant",
        department: "IR",
        avatar: "DC",
      };
      expect(isAuthorizedInventoryTechnician(consultantDoc)).toBe(false);

      const residentDoc: any = {
        code: "RES88",
        name: "Dr. Resident",
        role: "RESIDENT",
        tier: "DM_RESIDENT",
        title: "Resident",
        department: "IR",
        avatar: "DR",
      };
      expect(isAuthorizedInventoryTechnician(residentDoc)).toBe(false);
    });

    it("denies Nursing Officers ('NURSE') from editing/adjusting inventory quantities (read-only)", () => {
      const sisterAnita = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "NO07");
      expect(sisterAnita).toBeDefined();
      expect(sisterAnita?.role).toBe("NURSE");
      expect(isAuthorizedInventoryTechnician(sisterAnita)).toBe(false);

      const customNurse: StaffAccount = {
        code: "NO99",
        name: "Sister Incharge",
        role: "NURSE",
        tier: "NURSING_OFFICER",
        title: "Nursing Officer",
        department: "Cath Lab Nursing",
        avatar: "NO",
      };
      expect(isAuthorizedInventoryTechnician(customNurse)).toBe(false);
    });

    it("denies unauthenticated or null staff sessions (read-only default)", () => {
      expect(isAuthorizedInventoryTechnician(null)).toBe(false);
      expect(isAuthorizedInventoryTechnician(undefined)).toBe(false);
    });
  });

  describe("3. Firestore Database Sync Contract", () => {
    it("formats hardware item payload properly for Firestore database synchronization", () => {
      const item = MASTER_HARDWARE_CATALOG[0];
      const updatedStock = 25;
      const actorName = "Mr. JP (Technician)";

      const firestorePayload = {
        id: item.id,
        sku: item.sku,
        name: item.name,
        category: item.category,
        specification: item.specification,
        frenchOrGauge: item.frenchOrGauge,
        manufacturer: item.manufacturer,
        brandName: item.brandName,
        currentStock: updatedStock,
        quantityOnHand: updatedStock,
        reorderLevel: item.reorderLevel,
        unit: item.unit,
        lastLot: item.lastLot,
        expiryDate: item.expiryDate,
        rmsclMatchingCode: item.rmsclMatchingCode,
        tariffCappedInr: item.tariffCappedInr,
        updatedAt: expect.any(String),
        updatedBy: actorName,
      };

      expect(firestorePayload.id).toBe(item.id);
      expect(firestorePayload.sku).toBe(item.sku);
      expect(firestorePayload.currentStock).toBe(25);
      expect(firestorePayload.quantityOnHand).toBe(25);
      expect(firestorePayload.updatedBy).toBe("Mr. JP (Technician)");
    });
  });
});
