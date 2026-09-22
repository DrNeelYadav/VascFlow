import { describe, it, expect, vi } from "vitest";
import {
  parseGs1Barcode,
  KeyboardWedgeScannerManager,
  type ParsedGs1Barcode,
} from "../barcodeScanner";

describe("Peripheral GS1 Barcode & Keyboard Wedge Scanner Engine", () => {
  it("parses parenthesized GS1-128 string and maps to hospital catalog SKU", () => {
    // Boston Scientific Wallstent with Expiry 2027-08-31 and Lot LOT8291042
    const raw = "(01)00884521098231(17)270831(10)LOT8291042(21)SN104928";
    const result = parseGs1Barcode(raw);

    expect(result).not.toBeNull();
    expect(result?.gtin).toBe("00884521098231");
    expect(result?.expirationDate).toBe("2027-08-31");
    expect(result?.lotNumber).toBe("LOT8291042");
    expect(result?.serialNumber).toBe("SN104928");
    expect(result?.sku).toBe("RMSCL-SURG-STENT-042");
    expect(result?.catalogName).toContain("Wallstent Endoprosthesis");
    expect(result?.isExpired).toBe(false);
  });

  it("parses continuous unparenthesized GS1 DataMatrix string", () => {
    // Terumo Progreat Microcatheter
    const raw = "01003849102481021728123110BATCH7710";
    const result = parseGs1Barcode(raw);

    expect(result).not.toBeNull();
    expect(result?.gtin).toBe("00384910248102");
    expect(result?.expirationDate).toBe("2028-12-31");
    expect(result?.lotNumber).toBe("BATCH7710");
    expect(result?.sku).toBe("RMSCL-SURG-MICROCATH-018");
    expect(result?.category).toBe("Microcatheters");
  });

  it("identifies expired consumable kits according to AI (17) date", () => {
    // Expired in 2020: (17)200115
    const raw = "(01)00761928410294(17)200115(10)EXP-LOT-01";
    const result = parseGs1Barcode(raw);

    expect(result).not.toBeNull();
    expect(result?.expirationDate).toBe("2020-01-15");
    expect(result?.isExpired).toBe(true);
  });

  it("captures rapid Bluetooth/USB keyboard wedge keystroke bursts (<50ms) and parses on Enter", () => {
    const onScanned = vi.fn();
    const scanner = new KeyboardWedgeScannerManager(onScanned, 50);

    const barcode = "(01)00481920481093(17)261130(10)LOT-SHEATH-6F";
    let baseTime = 1000;

    // Simulate high-speed hardware scanner burst (e.g. 8ms between keystrokes)
    for (const char of barcode) {
      scanner.handleKeyEvent(char, baseTime);
      baseTime += 8;
    }

    // Terminating Enter keypress from scanner
    const captured = scanner.handleKeyEvent("Enter", baseTime);
    expect(captured).toBe(true);
    expect(onScanned).toHaveBeenCalledTimes(1);

    const scannedItem: ParsedGs1Barcode = onScanned.mock.calls[0][0];
    expect(scannedItem.gtin).toBe("00481920481093");
    expect(scannedItem.sku).toBe("RMSCL-SURG-SHEATH-6F");
    expect(scannedItem.lotNumber).toBe("LOT-SHEATH-6F");
    expect(scannedItem.catalogName).toContain("Terumo Radifocus Introducer");
  });

  it("discards slow manual user typing (>50ms interval) to prevent accidental scanning triggers", () => {
    const onScanned = vi.fn();
    const scanner = new KeyboardWedgeScannerManager(onScanned, 50);

    // Simulate human typing with 200ms pauses between keys
    scanner.handleKeyEvent("0", 1000);
    scanner.handleKeyEvent("1", 1200); // 200ms pause -> resets buffer
    scanner.handleKeyEvent("0", 1400);
    scanner.handleKeyEvent("Enter", 1600);

    expect(onScanned).not.toHaveBeenCalled();
  });
});
