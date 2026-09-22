import { describe, it, expect } from "vitest";
import { validateSchemePreSubmission } from "../schemeValidator";

describe("Rajasthan Government Scheme Pre-Submission Validator Suite", () => {
  it("exempts self-paying and non-government cases automatically", () => {
    const result = validateSchemePreSubmission({
      scheme: "PAID",
      packageCode: "2849-IN014C",
    });
    expect(result.status).toBe("EXEMPT");
    expect(result.isCompliant).toBe(true);
    expect(result.readinessScore).toBe(100);
    expect(result.missingRequirements).toHaveLength(0);
  });

  it("identifies missing pre-auth and missing fluoro for MAAY claims", () => {
    const result = validateSchemePreSubmission({
      scheme: "MAAY",
      packageCode: "2849-IN014C",
      preAuthNumber: "",
      preProcedureImagingTimestamp: "2026-03-12T10:00:00Z",
      postProcedureFluoroRecord: false,
      implantInvoice: true,
    });

    expect(result.isCompliant).toBe(false);
    expect(result.status).toBe("INCOMPLETE");
    expect(result.readinessScore).toBeLessThan(100);
    expect(result.missingRequirements).toContain("Government Scheme Pre-Authorization ID");
    expect(result.missingRequirements).toContain("Post-Procedure Angiosuite Fluoro Archive");
  });

  it("passes 100% compliant RGHS claim package with all prerequisite artifacts", () => {
    const result = validateSchemePreSubmission({
      scheme: "RGHS",
      packageCode: "2849-IN061A",
      preAuthNumber: "RGHS-PREAUTH-2026-94812",
      preProcedureImagingTimestamp: "2026-03-15T09:30:00Z",
      postProcedureFluoroRecord: "PACS-STUDY-UID-XA-9921",
      implantInvoice: "GST-INV-2026-04289",
      requiresImplant: true,
    });

    expect(result.isCompliant).toBe(true);
    expect(result.status).toBe("READY");
    expect(result.readinessScore).toBe(100);
    expect(result.missingRequirements).toHaveLength(0);
  });

  it("safely handles non-implant diagnostic procedures without flagging implant invoice", () => {
    const result = validateSchemePreSubmission({
      scheme: "MAAY",
      packageCode: "2849-IN001A",
      preAuthNumber: "MAAY-2026-004128",
      preProcedureImagingTimestamp: "2026-03-16T11:00:00Z",
      postProcedureFluoroRecord: true,
      requiresImplant: false,
    });

    expect(result.isCompliant).toBe(true);
    expect(result.status).toBe("READY");
    expect(result.readinessScore).toBe(100);
  });
});
