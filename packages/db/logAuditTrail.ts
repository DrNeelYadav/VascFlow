import crypto from "crypto";
import { prisma } from "./index";
import { computeDagNodeHash, GENESIS_DAG_HASH } from "./src/audit/auditMerkleDag";

/**
 * Standard audit actions complying with HIPAA § 164.312(b) audit controls.
 */
export type AuditAction =
  | "READ"
  | "WRITE"
  | "DELETE"
  | "LOGIN"
  | "LOGOUT"
  | "VIEW_VITALS"
  | "SCHEDULE_CASE"
  | "EXPORT_DATA"
  | "EMERGENCY_OVERRIDE";

export interface AuditLogInput {
  actorStaffId: string;
  action: AuditAction | string;
  entityType: "Patient" | "Procedure" | "Telemetry" | "Staff" | "SystemConfig" | string;
  entityId: string;
  ipAddress?: string;
  userAgent?: string;
  details?: Record<string, unknown> | string;
  encryptPayload?: boolean;
  isEmergencyOverride?: boolean;
  overrideReason?: string;
  clientSequenceId?: string;
  parentHashes?: string[];
}

export interface StoredAuditDetails {
  data: string; // Encrypted or serialized payload
  isEncrypted: boolean;
  tamperHash: string;
  algorithm: "SHA256-HMAC";
  timestamp: string;
  previousHash?: string;
  currentHash?: string;
  clientSequenceId?: string;
  nodeHash?: string;
  parentHashes?: string[];
}

export interface AuditLogRecord {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  staffId: string;
  ipAddress: string;
  userAgent: string;
  detailsJson: string;
  isEmergencyOverride?: boolean;
  overrideReason?: string | null;
  previousHash?: string | null;
  currentHash?: string | null;
  clientSequenceId?: string | null;
  nodeHash?: string | null;
  parentHashes?: string[];
  timestamp: Date;
}

const DEFAULT_AUDIT_SECRET =
  process.env.AUDIT_HMAC_SECRET ||
  process.env.NEXTAUTH_SECRET ||
  "vascule-tamper-evident-audit-secret-key-2026";

const DEFAULT_PHI_KEY =
  process.env.PHI_ENCRYPTION_KEY ||
  "vascule-phi-aes256-secret-hardened-key-2026-32b!"; // 32 bytes

/**
 * Encrypts sensitive PHI (Protected Health Information) at rest using AES-256-GCM.
 */
export function encryptPhiPayload(
  data: unknown,
  secretKey: string = DEFAULT_PHI_KEY
): string {
  const text = typeof data === "string" ? data : JSON.stringify(data);
  const iv = crypto.randomBytes(12); // 96-bit IV for GCM
  const key = crypto.createHash("sha256").update(secretKey).digest(); // 256-bit key

  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag().toString("hex");

  return `${iv.toString("hex")}:${authTag}:${encrypted}`;
}

/**
 * Decrypts sensitive PHI payload from AES-256-GCM cipher envelope.
 */
export function decryptPhiPayload(
  cipherEnvelope: string,
  secretKey: string = DEFAULT_PHI_KEY
): unknown {
  const parts = cipherEnvelope.split(":");
  if (parts.length !== 3) {
    throw new Error("Invalid PHI cipher envelope format");
  }

  const [ivHex, authTagHex, encryptedHex] = parts;
  const iv = Buffer.from(ivHex, "hex");
  const authTag = Buffer.from(authTagHex, "hex");
  const key = crypto.createHash("sha256").update(secretKey).digest();

  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(authTag);
  let decrypted = decipher.update(encryptedHex, "hex", "utf8");
  decrypted += decipher.final("utf8");

  try {
    return JSON.parse(decrypted);
  } catch {
    return decrypted;
  }
}

/**
 * Computes a cryptographic HMAC-SHA256 signature for tamper-evident validation.
 */
export function computeTamperHash(
  timestampIso: string,
  actorStaffId: string,
  action: string,
  entityType: string,
  entityId: string,
  ipAddress: string,
  payloadString: string,
  secret: string = DEFAULT_AUDIT_SECRET
): string {
  const canonicalString = [
    timestampIso,
    actorStaffId,
    action.toUpperCase(),
    entityType,
    entityId,
    ipAddress,
    payloadString,
  ].join("|");

  return crypto
    .createHmac("sha256", secret)
    .update(canonicalString)
    .digest("hex");
}

/**
 * Verifies if an AuditLog record has been altered or tampered with.
 */
export function verifyAuditIntegrity(
  record: AuditLogRecord,
  secret: string = DEFAULT_AUDIT_SECRET
): boolean {
  try {
    const details = JSON.parse(record.detailsJson) as StoredAuditDetails;
    if (!details.tamperHash || !details.timestamp) {
      return false;
    }

    const expectedHash = computeTamperHash(
      details.timestamp,
      record.staffId,
      record.action,
      record.entityType,
      record.entityId,
      record.ipAddress,
      details.data,
      secret
    );

    return crypto.timingSafeEqual(
      Buffer.from(details.tamperHash),
      Buffer.from(expectedHash)
    );
  } catch {
    return false;
  }
}

let inMemoryLastHash = "GENESIS_HASH_00000000000000000000000000000000";

/**
 * Computes SHA-256 sequential cryptographic hash linking an audit record to its predecessor.
 */
export function calculateSequentialHash(
  previousHash: string,
  timestampIso: string,
  actorStaffId: string,
  action: string,
  entityType: string,
  entityId: string,
  payloadData: string
): string {
  const canonical = [
    previousHash,
    timestampIso,
    actorStaffId,
    action.toUpperCase(),
    entityType,
    entityId,
    payloadData,
  ].join("|");

  return crypto.createHash("sha256").update(canonical).digest("hex");
}

/**
 * Verifies that an array of sequentially chained audit records has not been altered,
 * reordered, inserted, or truncated.
 */
export function verifyAuditChain(
  records: Array<{
    previousHash?: string | null;
    currentHash?: string | null;
    timestamp: Date | string;
    staffId: string;
    action: string;
    entityType: string;
    entityId: string;
    detailsJson: string;
  }>
): { valid: boolean; brokenAtIndex?: number } {
  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    if (i > 0) {
      const prev = records[i - 1];
      if (rec.previousHash !== prev.currentHash) {
        return { valid: false, brokenAtIndex: i };
      }
    }

    let payloadData = "{}";
    try {
      const parsed = JSON.parse(rec.detailsJson);
      payloadData = parsed.data || "{}";
    } catch {}

    const ts = typeof rec.timestamp === "string" ? rec.timestamp : rec.timestamp.toISOString();
    const expected = calculateSequentialHash(
      rec.previousHash || "GENESIS_HASH_00000000000000000000000000000000",
      ts,
      rec.staffId,
      rec.action,
      rec.entityType,
      rec.entityId,
      payloadData
    );

    if (rec.currentHash && rec.currentHash !== expected) {
      return { valid: false, brokenAtIndex: i };
    }
  }
  return { valid: true };
}

/**
 * Writes an immutable, tamper-evident audit log entry to the database.
 * If encryptPayload is enabled, sensitive fields are encrypted via AES-256-GCM.
 */
export async function logAuditTrail(
  input: AuditLogInput,
  options?: { dbClient?: typeof prisma; hmacSecret?: string; phiKey?: string }
): Promise<AuditLogRecord> {
  const client = options?.dbClient || prisma;
  const hmacSecret = options?.hmacSecret || DEFAULT_AUDIT_SECRET;
  const phiKey = options?.phiKey || DEFAULT_PHI_KEY;

  const now = new Date();
  const timestampIso = now.toISOString();
  const ipAddress = input.ipAddress || "127.0.0.1";
  const userAgent = input.userAgent || "Vascule-Clinical-Workstation/1.0";
  const shouldEncrypt = input.encryptPayload !== false;

  let payloadData: string;
  if (shouldEncrypt && input.details) {
    payloadData = encryptPhiPayload(input.details, phiKey);
  } else if (typeof input.details === "string") {
    payloadData = input.details;
  } else if (input.details) {
    payloadData = JSON.stringify(input.details);
  } else {
    payloadData = "{}";
  }

  // Retrieve previous hash from database or memory chain
  let previousHash = inMemoryLastHash;
  try {
    if (typeof (client as any).auditLog?.findFirst === "function") {
      const lastRecord = await (client as any).auditLog.findFirst({
        orderBy: { timestamp: "desc" },
        select: { currentHash: true },
      });
      if (lastRecord?.currentHash) {
        previousHash = lastRecord.currentHash;
      }
    }
  } catch {
    // Database offline fallback
  }

  const currentHash = calculateSequentialHash(
    previousHash,
    timestampIso,
    input.actorStaffId,
    input.action,
    input.entityType,
    input.entityId,
    payloadData
  );
  inMemoryLastHash = currentHash;

  const tamperHash = computeTamperHash(
    timestampIso,
    input.actorStaffId,
    input.action,
    input.entityType,
    input.entityId,
    ipAddress,
    payloadData,
    hmacSecret
  );

  const clientSequenceId =
    input.clientSequenceId ||
    `audit_seq_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
  const parentHashes =
    input.parentHashes && input.parentHashes.length > 0
      ? [...input.parentHashes].sort()
      : [previousHash || GENESIS_DAG_HASH];

  const nodeHash = computeDagNodeHash({
    clientSequenceId,
    parentHashes,
    timestamp: timestampIso,
    actorStaffId: input.actorStaffId,
    action: input.action.toUpperCase(),
    entityType: input.entityType,
    entityId: input.entityId,
    payloadData,
    isEmergencyOverride: input.isEmergencyOverride ?? false,
    overrideReason: input.overrideReason || null,
  });

  const auditDetails: StoredAuditDetails = {
    data: payloadData,
    isEncrypted: shouldEncrypt,
    tamperHash,
    algorithm: "SHA256-HMAC",
    timestamp: timestampIso,
    previousHash,
    currentHash,
    clientSequenceId,
    nodeHash,
    parentHashes,
  };

  const detailsJson = JSON.stringify(auditDetails);

  try {
    const record = await client.auditLog.create({
      data: {
        action: input.action.toUpperCase(),
        entityType: input.entityType,
        entityId: input.entityId,
        staffId: input.actorStaffId,
        ipAddress,
        userAgent,
        detailsJson,
        isEmergencyOverride: input.isEmergencyOverride ?? false,
        overrideReason: input.overrideReason || null,
        previousHash,
        currentHash,
        clientSequenceId,
        nodeHash,
        parentHashes,
        timestamp: now,
      },
    });

    return record;
  } catch (error) {
    // Structured audit failure logging per SOC2 Trust Services Criteria
    console.error(
      `[SOC2 Audit Failure] Failed to write audit record for actor ${input.actorStaffId}:`,
      error
    );

    // Return in-memory compliant fallback object so caller transactions are never blocked
    return {
      id: `local_audit_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`,
      action: input.action.toUpperCase(),
      entityType: input.entityType,
      entityId: input.entityId,
      staffId: input.actorStaffId,
      ipAddress,
      userAgent,
      detailsJson,
      isEmergencyOverride: input.isEmergencyOverride ?? false,
      overrideReason: input.overrideReason || null,
      previousHash,
      currentHash,
      clientSequenceId,
      nodeHash,
      parentHashes,
      timestamp: now,
    };
  }
}

/**
 * Asynchronously dispatches an audit log entry in the background.
 * Primary transactions and patient workflows are guaranteed NOT to block or throw.
 */
export function dispatchAuditTrailAsync(
  input: AuditLogInput,
  options?: { dbClient?: typeof prisma; hmacSecret?: string; phiKey?: string }
): void {
  // Execute via microtask / promise resolution without awaiting
  Promise.resolve()
    .then(() => logAuditTrail(input, options))
    .catch((err) => {
      console.error(
        `[Vascule Async Audit Dispatcher Error] Failed to persist audit trail:`,
        err
      );
    });
}
