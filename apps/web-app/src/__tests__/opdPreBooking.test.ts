import { describe, it, expect } from "vitest";
import { COMMON_PROCEDURES_TARIFFS } from "../../app/dashboard/pre-booking/preBookingTypes";
import { INITIAL_AIIMS_SCLERO_SESSIONS } from "../../app/dashboard/pre-booking/useBleomycinLedger";

describe("OPD Dating & Pre-Booking Studio — Clinical & Statutory Verification", () => {
  it("verifies authoritative ICD-10 and Rajasthan RGHS/MAAY tariff codes for zero billing friction", () => {
    // Sclerotherapy
    expect(COMMON_PROCEDURES_TARIFFS.sclerotherapy.icd).toContain("D18.01");
    expect(COMMON_PROCEDURES_TARIFFS.sclerotherapy.rghsMaay).toContain("IR-SCL-01");

    // TACE
    expect(COMMON_PROCEDURES_TARIFFS.tace.icd).toContain("C22.0");
    expect(COMMON_PROCEDURES_TARIFFS.tace.rghsMaay).toContain("IR-TAC-02");

    // BAE
    expect(COMMON_PROCEDURES_TARIFFS.bae.icd).toContain("R04.2");
    expect(COMMON_PROCEDURES_TARIFFS.bae.rghsMaay).toContain("IR-BAE-01");

    // Bleeder
    expect(COMMON_PROCEDURES_TARIFFS.bleeder.icd).toContain("K92.2");
    expect(COMMON_PROCEDURES_TARIFFS.bleeder.rghsMaay).toContain("IR-EMB-03");
  });

  it("verifies AIIMS Delhi ground-truth sclerotherapy session ledger fidelity from clinical photograph", () => {
    expect(INITIAL_AIIMS_SCLERO_SESSIONS.length).toBeGreaterThanOrEqual(3);

    // Session 1: Bleomycin 5 IU with R. IJV compression
    const s1 = INITIAL_AIIMS_SCLERO_SESSIONS[0];
    expect(s1.sessionNumber).toBe(1);
    expect(s1.sclerosant).toBe("Bleomycin");
    expect(s1.dose).toBe("5 IU");
    expect(s1.compressionApplied).toContain("R. IJV");

    // Session 2: Polidocanol foam (6cc air + 2cc PD) with R. IJV compression
    const s2 = INITIAL_AIIMS_SCLERO_SESSIONS[1];
    expect(s2.sessionNumber).toBe(2);
    expect(s2.sclerosant).toContain("Polidocanol");
    expect(s2.dose).toContain("6+2cc");
    expect(s2.compressionApplied).toContain("R. IJV");

    // Session 3: Polidocanol follow-up
    const s3 = INITIAL_AIIMS_SCLERO_SESSIONS[2];
    expect(s3.sessionNumber).toBe(3);
    expect(s3.sclerosant).toBe("Polidocanol");
    expect(s3.dose).toContain("2cc");
  });

  it("ensures zero phantom values in pre-booking procedure categories", () => {
    const categories = Object.keys(COMMON_PROCEDURES_TARIFFS);
    expect(categories).toContain("sclerotherapy");
    expect(categories).toContain("tace");
    expect(categories).toContain("bae");
    expect(categories).toContain("bleeder");

    categories.forEach((cat) => {
      const tariff = COMMON_PROCEDURES_TARIFFS[cat as keyof typeof COMMON_PROCEDURES_TARIFFS];
      expect(tariff.name.length).toBeGreaterThan(0);
      expect(tariff.icd.length).toBeGreaterThan(0);
      expect(tariff.rghsMaay.length).toBeGreaterThan(0);
    });
  });
});
