import { describe, it, expect } from "vitest";
import {
  sanitizeCsvCell,
  generateSafeCsv,
  generateSafeTsv,
} from "../sanitizers";

describe("CWE-1236: CSV Formula Injection Mitigation Suite", () => {
  describe("1. sanitizeCsvCell Formula Neutralization", () => {
    it("prefixes equal sign with a single quote to neutralize formula execution", () => {
      const payload = "=cmd|' /C calc'!A0";
      const sanitized = sanitizeCsvCell(payload);
      expect(sanitized.startsWith("\"'=")).toBe(true);
    });

    it("neutralizes plus sign formula injection", () => {
      const payload = "+SUM(1+1)*cmd";
      const sanitized = sanitizeCsvCell(payload);
      expect(sanitized.startsWith("\"'+")).toBe(true);
    });

    it("neutralizes minus sign formula injection", () => {
      const payload = "-2+3+cmd";
      const sanitized = sanitizeCsvCell(payload);
      expect(sanitized.startsWith("\"'-")).toBe(true);
    });

    it("neutralizes at-sign formula injection", () => {
      const payload = "@SUM(A1:A10)";
      const sanitized = sanitizeCsvCell(payload);
      expect(sanitized.startsWith("\"'@")).toBe(true);
    });

    it("neutralizes leading tab character formula injection", () => {
      const payload = "\t=1+1";
      const sanitized = sanitizeCsvCell(payload);
      expect(sanitized.startsWith("\"'\t")).toBe(true);
    });

    it("neutralizes leading carriage return formula injection", () => {
      const payload = "\r=1+1";
      const sanitized = sanitizeCsvCell(payload);
      expect(sanitized.startsWith("\"'\r")).toBe(true);
    });

    it("properly escapes internal double quotes per RFC 4180", () => {
      const payload = 'Patient "VIP" Profile';
      const sanitized = sanitizeCsvCell(payload);
      expect(sanitized).toBe('"Patient ""VIP"" Profile"');
    });

    it("handles null and undefined values safely", () => {
      expect(sanitizeCsvCell(null)).toBe('""');
      expect(sanitizeCsvCell(undefined)).toBe('""');
    });

    it("preserves legitimate numbers and booleans safely", () => {
      expect(sanitizeCsvCell(123.45)).toBe("123.45");
      expect(sanitizeCsvCell(0)).toBe("0");
      expect(sanitizeCsvCell(true)).toBe("true");
      expect(sanitizeCsvCell(false)).toBe("false");
    });
  });

  describe("2. generateSafeCsv Document Engine", () => {
    it("generates safe multi-line RFC 4180 CSV document with neutralized cells", () => {
      const headers = ["UHID", "Name", "Diagnosis", "Notes"];
      const rows = [
        ["SMS-2026-001", "Ramswaroop Meena", "Budd-Chiari", "Normal recovery"],
        ["SMS-2026-002", "=cmd|' /C calc'!A0", "+Malicious Formula", "@DDE_EXEC"],
      ];

      const csv = generateSafeCsv(headers, rows);
      const lines = csv.split("\r\n");

      expect(lines).toHaveLength(3);
      expect(lines[0]).toBe('"UHID","Name","Diagnosis","Notes"');
      expect(lines[1]).toContain('"SMS-2026-001"');
      expect(lines[2]).toContain("\"'=cmd");
      expect(lines[2]).toContain("\"'+Malicious");
      expect(lines[2]).toContain("\"'@DDE_EXEC");
    });
  });

  describe("3. generateSafeTsv TSV Engine", () => {
    it("neutralizes formula cells in TSV format without breaking column separators", () => {
      const headers = ["ID", "Patient", "Status"];
      const rows = [
        ["PT01", "=2+2", "Active"],
        ["PT02", "@SUM(B1)", "Holding"],
      ];

      const tsv = generateSafeTsv(headers, rows);
      const lines = tsv.split("\n");

      expect(lines).toHaveLength(3);
      expect(lines[1].split("\t")[1]).toBe("'=2+2");
      expect(lines[2].split("\t")[1]).toBe("'@SUM(B1)");
    });
  });
});
