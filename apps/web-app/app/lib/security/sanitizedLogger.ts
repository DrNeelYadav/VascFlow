/**
 * VascFlow Sanitized Clinical Telemetry Logger (DISHA & HIPAA Compliance)
 * 
 * Intercepts diagnostic logs and scrubs Protected Health Information (PHI)
 * such as patient names, contact numbers, and hospital registration IDs
 * before outputting to developer console or error monitoring services.
 */

const SENSITIVE_KEYS = new Set([
  "patientname",
  "name",
  "crno",
  "uhid",
  "phone",
  "contact",
  "email",
  "ipdno",
  "address",
  "aadhaarno",
]);

/**
 * Recursively redacts sensitive patient identifiers from objects or arrays.
 */
export function sanitizeLogPayload(data: unknown, depth = 0): unknown {
  if (depth > 5) return "[Max Depth]";
  if (!data || typeof data !== "object") return data;

  if (Array.isArray(data)) {
    return data.map((item) => sanitizeLogPayload(item, depth + 1));
  }

  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
    const lowerKey = key.toLowerCase();
    if (SENSITIVE_KEYS.has(lowerKey)) {
      if (typeof value === "string" && value.length > 2) {
        sanitized[key] = `${value.slice(0, 1)}***${value.slice(-1)}`;
      } else {
        sanitized[key] = "[REDACTED_PHI]";
      }
    } else if (typeof value === "object" && value !== null) {
      sanitized[key] = sanitizeLogPayload(value, depth + 1);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

export const clinicalLogger = {
  info: (message: string, ...args: unknown[]) => {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[VascFlow INFO] ${message}`, ...args.map((a) => sanitizeLogPayload(a)));
    }
  },
  warn: (message: string, ...args: unknown[]) => {
    console.warn(`[VascFlow WARN] ${message}`, ...args.map((a) => sanitizeLogPayload(a)));
  },
  error: (message: string, error?: unknown, context?: unknown) => {
    console.error(
      `[VascFlow ERROR] ${message}`,
      error instanceof Error ? error.message : error,
      context ? sanitizeLogPayload(context) : ""
    );
  },
};
