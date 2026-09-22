/**
 * GS1 Barcode & Bluetooth/USB HID Keyboard Wedge Scanner Engine
 * 
 * Complies with GS1 General Specifications for Healthcare:
 * - GS1-128 & GS1 DataMatrix symbologies
 * - Application Identifiers (AI):
 *     (01) GTIN-14
 *     (17) Expiry Date (YYMMDD -> YYYY-MM-DD)
 *     (10) Batch / Lot Number
 *     (21) Serial Number
 * - HID Keyboard Wedge Buffer: differentiates rapid scanner burst streams (<50ms) from manual typing.
 */

export interface ParsedGs1Barcode {
  rawBarcode: string;
  gtin?: string; // AI (01)
  lotNumber?: string; // AI (10)
  expirationDate?: string; // AI (17) -> YYYY-MM-DD
  serialNumber?: string; // AI (21)
  sku?: string;
  catalogName?: string;
  category?: string;
  isExpired?: boolean;
}

export const CATH_LAB_GTIN_CATALOG: Record<
  string,
  { name: string; sku: string; category: string }
> = {
  "00884521098231": {
    name: "Boston Scientific Wallstent Endoprosthesis 10mm x 60mm",
    sku: "RMSCL-SURG-STENT-042",
    category: "SEMS",
  },
  "00384910248102": {
    name: "Terumo Progreat 2.7F 130cm Coaxial Microcatheter",
    sku: "RMSCL-SURG-MICROCATH-018",
    category: "Microcatheters",
  },
  "00761928410294": {
    name: "Guerbet Lipiodol Ultra-Fluid (10 mL Ampoule)",
    sku: "RMSCL-DRUG-LIPIODOL-10ML",
    category: "Embolic Agents",
  },
  "00481920481093": {
    name: "Terumo Radifocus Introducer II 6F 11cm",
    sku: "RMSCL-SURG-SHEATH-6F",
    category: "Access Sheaths",
  },
  "00591029481029": {
    name: "Cordis Vista Brite Tip Guiding Catheter 6F JR4",
    sku: "RMSCL-SURG-GUIDING-6F",
    category: "Guiding Catheters",
  },
  "00918239102948": {
    name: "Cook Medical Tornado Embolization Coil 4mm x 2mm",
    sku: "RMSCL-SURG-COIL-004",
    category: "Embolic Agents",
  },
  "00384910552193": {
    name: "Terumo Radifocus 0.035\" Glidewire 150cm Angled",
    sku: "RMSCL-SURG-WIRE-035",
    category: "Guidewires",
  },
};

/**
 * Parses raw GS1 barcode string (parenthesized or continuous AI format)
 */
export function parseGs1Barcode(rawInput: string): ParsedGs1Barcode | null {
  if (!rawInput) return null;
  const clean = rawInput.trim();
  if (!clean) return null;

  let gtin: string | undefined;
  let lotNumber: string | undefined;
  let expirationDate: string | undefined;
  let serialNumber: string | undefined;

  // Format A: Human-Readable Parenthesized AIs e.g. (01)00884521098231(17)270831(10)LOT8291042(21)SN104928
  if (clean.includes("(") && clean.includes(")")) {
    const gtinMatch = clean.match(/\(01\)(\d{14})/);
    if (gtinMatch) gtin = gtinMatch[1];

    const expMatch = clean.match(/\(17\)(\d{6})/);
    if (expMatch) {
      expirationDate = formatGs1Date(expMatch[1]);
    }

    const lotMatch = clean.match(/\(10\)([^\(\)]+)/);
    if (lotMatch) lotNumber = lotMatch[1].trim();

    const snMatch = clean.match(/\(21\)([^\(\)]+)/);
    if (snMatch) serialNumber = snMatch[1].trim();
  } else {
    // Format B: Continuous String with fixed length AIs (FNC1 / DataMatrix)
    // 01 is 14 chars. 17 is 6 chars.
    let cursor = 0;
    while (cursor < clean.length) {
      // Remove any FNC1 delimiter (ASCII 29)
      if (clean.charCodeAt(cursor) === 29) {
        cursor++;
        continue;
      }

      const ai2 = clean.slice(cursor, cursor + 2);
      if (ai2 === "01" && clean.length >= cursor + 16) {
        gtin = clean.slice(cursor + 2, cursor + 16);
        cursor += 16;
      } else if (ai2 === "17" && clean.length >= cursor + 8) {
        expirationDate = formatGs1Date(clean.slice(cursor + 2, cursor + 8));
        cursor += 8;
      } else if (ai2 === "10") {
        // Variable length up to 20 chars or until FNC1
        const remaining = clean.slice(cursor + 2);
        const fnc1Idx = remaining.indexOf(String.fromCharCode(29));
        if (fnc1Idx !== -1) {
          lotNumber = remaining.slice(0, fnc1Idx);
          cursor += 2 + fnc1Idx + 1;
        } else {
          // If followed by another known AI like 21
          const nextAi21 = remaining.indexOf("21");
          if (nextAi21 !== -1 && nextAi21 > 3) {
            lotNumber = remaining.slice(0, nextAi21);
            cursor += 2 + nextAi21;
          } else {
            lotNumber = remaining;
            cursor = clean.length;
          }
        }
      } else if (ai2 === "21") {
        serialNumber = clean.slice(cursor + 2);
        cursor = clean.length;
      } else {
        cursor++;
      }
    }
  }

  // Fallback: If raw input matches a catalog SKU or raw barcode
  let catalogItem = gtin ? CATH_LAB_GTIN_CATALOG[gtin] : undefined;
  if (!catalogItem) {
    const matchedBySku = Object.values(CATH_LAB_GTIN_CATALOG).find(
      (it) => it.sku.toLowerCase() === clean.toLowerCase()
    );
    if (matchedBySku) {
      catalogItem = matchedBySku;
    }
  }

  let isExpired = false;
  if (expirationDate) {
    const expTime = new Date(expirationDate).getTime();
    if (!isNaN(expTime)) {
      isExpired = expTime < Date.now();
    }
  }

  return {
    rawBarcode: clean,
    gtin,
    lotNumber,
    expirationDate,
    serialNumber,
    sku: catalogItem?.sku,
    catalogName: catalogItem?.name,
    category: catalogItem?.category,
    isExpired,
  };
}

/**
 * Formats GS1 YYMMDD into standard YYYY-MM-DD string
 */
function formatGs1Date(yymmdd: string): string {
  if (yymmdd.length !== 6) return yymmdd;
  const yy = yymmdd.slice(0, 2);
  const mm = yymmdd.slice(2, 4);
  const dd = yymmdd.slice(4, 6);
  // GS1 rule: Year 51-99 is 19xx, 00-50 is 20xx
  const century = parseInt(yy, 10) >= 50 ? "19" : "20";
  return `${century}${yy}-${mm}-${dd}`;
}

/**
 * Handles rapid character bursts from Bluetooth/USB HID keyboard wedge scanners.
 */
export class KeyboardWedgeScannerManager {
  private buffer: string = "";
  private lastCharTimestamp: number = 0;
  private readonly maxInterKeyDelayMs: number;
  private readonly onBarcodeScanned: (parsed: ParsedGs1Barcode) => void;

  constructor(
    onBarcodeScanned: (parsed: ParsedGs1Barcode) => void,
    maxInterKeyDelayMs: number = 50
  ) {
    this.onBarcodeScanned = onBarcodeScanned;
    this.maxInterKeyDelayMs = maxInterKeyDelayMs;
  }

  /**
   * Process a key event. Returns true if character was captured as part of a scanner burst.
   */
  public handleKeyEvent(key: string, timestamp: number = Date.now()): boolean {
    // If Enter key is pressed, evaluate accumulated buffer
    if (key === "Enter" || key === "\r" || key === "\n") {
      if (this.buffer.length >= 8) {
        const parsed = parseGs1Barcode(this.buffer);
        if (parsed) {
          this.onBarcodeScanned(parsed);
          this.buffer = "";
          return true;
        }
      }
      this.buffer = "";
      return false;
    }

    // Single non-control characters
    if (key.length === 1) {
      const delta = timestamp - this.lastCharTimestamp;
      this.lastCharTimestamp = timestamp;

      // If delay between keystrokes exceeds threshold and buffer exists, reset buffer (user typed manually)
      if (delta > this.maxInterKeyDelayMs && this.buffer.length > 0) {
        this.buffer = key;
        return false;
      }

      this.buffer += key;
      return true;
    }

    return false;
  }

  public getBuffer(): string {
    return this.buffer;
  }

  public clear(): void {
    this.buffer = "";
  }
}
