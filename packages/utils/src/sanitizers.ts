/**
 * VascFlow OS Enterprise Utility Suite - Tabular Sanitization Engine
 * 
 * Protects against CSV / Excel Formula & Macro Injection (CWE-1236).
 * Standard: Healthcare Information Security & Clinical Data Protection
 */

const FORMULA_TRIGGER_CHARS = ["=", "+", "-", "@", "\t", "\r"];

/**
 * Sanitizes an individual cell for CSV/Excel export.
 * If the string begins with =, +, -, @, \t, or \r, it is prefixed with a single quote (')
 * to force spreadsheet processors (Excel, LibreOffice, Google Sheets) to evaluate it as plain text.
 * All interior quotes are escaped as "" and the result is wrapped in double quotes.
 */
export function sanitizeCsvCell(value: unknown): string {
  if (value === null || value === undefined) {
    return '""';
  }

  // Preserve numbers and booleans safely
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : '""';
  }
  if (typeof value === "boolean") {
    return String(value);
  }

  let str = String(value);

  // Check if string begins with any formula injection trigger character
  const startsWithFormulaChar = FORMULA_TRIGGER_CHARS.some((char) => str.startsWith(char));

  if (startsWithFormulaChar) {
    // Prefix with single quote to neutralize formula evaluation
    str = "'" + str;
  }

  // RFC 4180 double-quote escaping
  const escaped = str.replace(/"/g, '""');
  return '"' + escaped + '"';
}

/**
 * Generates an RFC 4180-compliant, injection-safe CSV document string.
 */
export function generateSafeCsv(headers: string[], rows: unknown[][]): string {
  const sanitizedHeader = headers.map((h) => sanitizeCsvCell(h)).join(",");
  const sanitizedRows = rows.map((row) =>
    row.map((cell) => sanitizeCsvCell(cell)).join(",")
  );

  return [sanitizedHeader, ...sanitizedRows].join("\r\n");
}

/**
 * Generates an injection-safe TSV (Tab-Separated Values) document string.
 */
export function generateSafeTsv(headers: string[], rows: unknown[][]): string {
  const sanitizeTsvCell = (val: unknown): string => {
    if (val === null || val === undefined) return "";
    let str = String(val);
    if (FORMULA_TRIGGER_CHARS.some((char) => str.startsWith(char))) {
      str = "'" + str;
    }
    return str.replace(/\t/g, " ").replace(/\r?\n/g, " ");
  };

  const headerLine = headers.map(sanitizeTsvCell).join("\t");
  const dataLines = rows.map((r) => r.map(sanitizeTsvCell).join("\t"));

  return [headerLine, ...dataLines].join("\n");
}
