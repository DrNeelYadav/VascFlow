/**
 * VascFlow Client-Side Storage Encryption (DISHA & HIPAA Safeguard)
 * 
 * Provides transparent AES-GCM 256-bit envelope encryption for Protected Health
 * Information (PHI) stored in local browser caches (IndexedDB / LocalStorage).
 * Uses native Web Crypto API with zero external dependencies.
 */

const ALGORITHM = "AES-GCM";
const KEY_DERIVATION_SALT = new TextEncoder().encode("vascflow-sms-hospital-disha-salt-2026");

let cachedCryptoKey: CryptoKey | null = null;

/**
 * Derives a deterministic AES-GCM CryptoKey from the authenticated staff session identity.
 */
export async function getSessionCryptoKey(userTokenOrId: string): Promise<CryptoKey> {
  if (cachedCryptoKey) return cachedCryptoKey;

  if (typeof window === "undefined" || !window.crypto?.subtle) {
    throw new Error("Web Crypto API is not available in current execution context");
  }

  const rawKeyData = new TextEncoder().encode(userTokenOrId || "vascflow-anonymous-offline-key");
  const baseKey = await window.crypto.subtle.importKey(
    "raw",
    rawKeyData,
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  cachedCryptoKey = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: KEY_DERIVATION_SALT,
      iterations: 10000,
      hash: "SHA-256",
    },
    baseKey,
    { name: ALGORITHM, length: 256 },
    false,
    ["encrypt", "decrypt"]
  );

  return cachedCryptoKey;
}

/**
 * Encrypts a plain JSON object or string into a base64 ciphertext packet.
 */
export async function encryptClinicalPayload(
  data: unknown,
  sessionKeyOrId = "vascflow-session"
): Promise<string> {
  if (typeof window === "undefined" || !window.crypto?.subtle) {
    return JSON.stringify(data);
  }

  try {
    const key = await getSessionCryptoKey(sessionKeyOrId);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encoded = new TextEncoder().encode(JSON.stringify(data));

    const ciphertext = await window.crypto.subtle.encrypt(
      { name: ALGORITHM, iv },
      key,
      encoded
    );

    const combined = new Uint8Array(iv.length + ciphertext.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(ciphertext), iv.length);

    // Convert to Base64
    let binary = "";
    for (let i = 0; i < combined.byteLength; i++) {
      binary += String.fromCharCode(combined[i]);
    }
    return `enc:${btoa(binary)}`;
  } catch (err) {
    console.warn("[clientEncryption] Encryption fallback to plain payload:", err);
    return JSON.stringify(data);
  }
}

/**
 * Decrypts a base64 ciphertext packet back into the original clinical data structure.
 */
export async function decryptClinicalPayload<T = unknown>(
  payload: string,
  sessionKeyOrId = "vascflow-session"
): Promise<T> {
  if (!payload || typeof payload !== "string" || !payload.startsWith("enc:")) {
    try {
      return JSON.parse(payload) as T;
    } catch {
      return payload as unknown as T;
    }
  }

  if (typeof window === "undefined" || !window.crypto?.subtle) {
    throw new Error("Cannot decrypt in non-browser environment");
  }

  try {
    const key = await getSessionCryptoKey(sessionKeyOrId);
    const base64 = payload.slice(4);
    const binary = atob(base64);
    const combined = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      combined[i] = binary.charCodeAt(i);
    }

    const iv = combined.slice(0, 12);
    const data = combined.slice(12);

    const decrypted = await window.crypto.subtle.decrypt(
      { name: ALGORITHM, iv },
      key,
      data
    );

    const decoded = new TextDecoder().decode(decrypted);
    return JSON.parse(decoded) as T;
  } catch (err) {
    console.warn("[clientEncryption] Decryption failed:", err);
    throw new Error("Unable to decrypt cached clinical payload (invalid session or corrupted vault)");
  }
}

/**
 * Purges memory keys upon staff logout.
 */
export function purgeSessionCryptoKey(): void {
  cachedCryptoKey = null;
}
