import { describe, it, expect } from "vitest";
import {
  parseTpaNotification,
  findMatchingPackage,
  SCHEME_PACKAGES,
  MASTER_IMPLANTS,
} from "../types";

describe("TPA Portal & SMS Notification Parser Suite", () => {
  it("parses an authentic MAAY approval SMS notification accurately", () => {
    const rawSms = `
      Dear Hospital, Pre-Auth request for Beneficiary: Rajesh Sharma under MAAY scheme.
      TID: TXN8921104
      Jan Aadhaar: 9812-4412-8812
      Package Code: MAAY-IR-001
      Sanctioned Amount: Rs. 35,000/-
      Status: Approved with pre-auth checklist.
    `;

    const parsed = parseTpaNotification(rawSms);

    expect(parsed.schemeDetected).toBe("MAAY");
    expect(parsed.preAuthStatus).toBe("APPROVED");
    expect(parsed.transactionId).toBe("TXN8921104");
    expect(parsed.cardNumber).toBe("9812-4412-8812");
    expect(parsed.packageCode).toBe("MAAY-IR-001");
    expect(parsed.approvedAmountINR).toBe(35000);
    expect(parsed.patientName).toBe("Rajesh Sharma");

    const matchedPkg = findMatchingPackage(parsed.packageCode);
    expect(matchedPkg).toBeDefined();
    expect(matchedPkg?.packageName).toContain("Transcatheter Arterial Chemoembolization");
    expect(matchedPkg?.authorizedImplants.map((i) => i.category)).toContain("Lipiodol");
  });

  it("parses an authentic RGHS approval notification accurately", () => {
    const rawTpaPortal = `
      RGHS Pre-Authorization Portal Notification:
      Beneficiary: MOHAN LAL VERMA
      RGHS ID: RJ-GOV-98765432
      Transaction ID: RGHS-TX-44019
      Package: RGHS-IR-004
      Approved: INR 48,000
      Remarks: Authorized for Uncovered Biliary SEMS. Status: Sanctioned.
    `;

    const parsed = parseTpaNotification(rawTpaPortal);

    expect(parsed.schemeDetected).toBe("RGHS");
    expect(parsed.preAuthStatus).toBe("APPROVED");
    expect(parsed.transactionId).toBe("RGHS-TX-44019");
    expect(parsed.cardNumber).toBe("RJ-GOV-98765432");
    expect(parsed.packageCode).toBe("RGHS-IR-004");
    expect(parsed.approvedAmountINR).toBe(48000);
    expect(parsed.patientName).toBe("MOHAN LAL VERMA");

    const matchedPkg = findMatchingPackage(parsed.packageCode);
    expect(matchedPkg).toBeDefined();
    expect(matchedPkg?.packageName).toContain("Percutaneous Biliary SEMS");
    expect(matchedPkg?.authorizedImplants.some((i) => i.category === "SEMS")).toBe(true);
  });

  it("handles rejection and query pending notifications properly", () => {
    const rejectedSms = `Alert: PreAuth Rejected for Card# 441029193. Txn ID: T-88219. Reason: Triphasic CT missing.`;
    const parsedRejection = parseTpaNotification(rejectedSms);

    expect(parsedRejection.preAuthStatus).toBe("REJECTED");
    expect(parsedRejection.transactionId).toBe("T-88219");
    expect(parsedRejection.cardNumber).toBe("441029193");

    const pendingPortal = `Notice: Status: Under Process / Query Raised for TID: Q-9912. Scheme: MAAY.`;
    const parsedPending = parseTpaNotification(pendingPortal);

    expect(parsedPending.preAuthStatus).toBe("PENDING");
    expect(parsedPending.schemeDetected).toBe("MAAY");
    expect(parsedPending.transactionId).toBe("Q-9912");
  });

  it("handles empty and malformed inputs gracefully without throwing", () => {
    const empty = parseTpaNotification("");
    expect(empty.preAuthStatus).toBe("UNKNOWN");
    expect(empty.transactionId).toBeUndefined();

    const junk = parseTpaNotification("Just a random unrelated message text with numbers 12345.");
    expect(junk.preAuthStatus).toBe("UNKNOWN");
  });
});

describe("Master Scheme Tariff Directory Verification", () => {
  it("contains at least 35 MAAY packages and at least 33 RGHS packages", () => {
    const maayPackages = SCHEME_PACKAGES.filter((p) => p.scheme === "MAAY");
    const rghsPackages = SCHEME_PACKAGES.filter((p) => p.scheme === "RGHS");

    expect(maayPackages.length).toBeGreaterThanOrEqual(35);
    expect(rghsPackages.length).toBeGreaterThanOrEqual(33);
  });

  it("verifies key authorized implants exist and adhere to price caps", () => {
    expect(MASTER_IMPLANTS.LIP_01.category).toBe("Lipiodol");
    expect(MASTER_IMPLANTS.LIP_01.cappedPriceINR).toBe(12500);

    expect(MASTER_IMPLANTS.MIC_01.category).toBe("Microcatheter");
    expect(MASTER_IMPLANTS.COIL_01.category).toBe("Coil");
    expect(MASTER_IMPLANTS.PLUG_01.category).toBe("Vascular Plug");
    expect(MASTER_IMPLANTS.SEMS_01.category).toBe("SEMS");
  });

  it("ensures all pre-auth required packages specify required documents", () => {
    const preAuthPackages = SCHEME_PACKAGES.filter((p) => p.preAuthRequired);
    preAuthPackages.forEach((pkg) => {
      expect(pkg.requiredDocuments.length).toBeGreaterThan(0);
    });
  });
});
