/**
 * ABDM Curve25519 (X25519) Payload Encryption & Key Agreement Engine
 * 
 * Complies with National Health Authority (NHA) ABDM M3 / HIU & HIP specifications:
 * - ECDH Key Exchange over Curve25519 (X25519)
 * - HKDF (RFC 5869) key derivation using SHA-256
 * - Authenticated symmetric encryption using AES-256-GCM
 */

import crypto from "crypto";

export interface AbdmKeyPair {
  publicKey: string; // Base64 SPKI
  privateKey: string; // Base64 PKCS8
  publicKeyPem: string;
  privateKeyPem: string;
}

export interface AbdmKeyMaterial {
  cryptoAlg: "ECDH";
  curve: "Curve25519";
  senderPublicKey: string; // Base64 SPKI
  nonce: string; // Base64 IV / Salt
}

export interface AbdmEncryptedEnvelope {
  encryptedData: string; // Base64 ciphertext:authTag
  keyMaterial: AbdmKeyMaterial;
  checksum: string; // SHA-256 checksum of plaintext
}

const DEFAULT_HKDF_INFO = "ABDM_FHIR_R4_DIAGNOSTIC_REPORT_V3";

/**
 * Generates an X25519 key pair for ABDM data transfer
 */
export function generateAbdmKeyPair(): AbdmKeyPair {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("x25519", {
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });

  const spkiDer = crypto
    .createPublicKey(publicKey)
    .export({ type: "spki", format: "der" });
  const pkcs8Der = crypto
    .createPrivateKey(privateKey)
    .export({ type: "pkcs8", format: "der" });

  return {
    publicKey: spkiDer.toString("base64"),
    privateKey: pkcs8Der.toString("base64"),
    publicKeyPem: publicKey,
    privateKeyPem: privateKey,
  };
}

/**
 * Normalizes a key input (Base64 DER, raw buffer, or PEM) into a KeyObject
 */
function toPrivateKeyObject(key: string | crypto.KeyObject): crypto.KeyObject {
  if (typeof key !== "string") return key;
  if (key.includes("-----BEGIN")) {
    return crypto.createPrivateKey(key);
  }
  return crypto.createPrivateKey({
    key: Buffer.from(key, "base64"),
    format: "der",
    type: "pkcs8",
  });
}

function toPublicKeyObject(key: string | crypto.KeyObject): crypto.KeyObject {
  if (typeof key !== "string") return key;
  if (key.includes("-----BEGIN")) {
    return crypto.createPublicKey(key);
  }
  return crypto.createPublicKey({
    key: Buffer.from(key, "base64"),
    format: "der",
    type: "spki",
  });
}

/**
 * Computes the X25519 ECDH shared secret between sender private key and receiver public key
 */
export function computeSharedSecret(
  privateKey: string | crypto.KeyObject,
  remotePublicKey: string | crypto.KeyObject
): Buffer {
  const privKeyObj = toPrivateKeyObject(privateKey);
  const pubKeyObj = toPublicKeyObject(remotePublicKey);

  return crypto.diffieHellman({
    privateKey: privKeyObj,
    publicKey: pubKeyObj,
  });
}

/**
 * Derives a 256-bit AES key from the ECDH shared secret using HKDF-SHA256
 */
export function deriveAesGcmKey(
  sharedSecret: Buffer,
  salt: Buffer | string,
  info: Buffer | string = DEFAULT_HKDF_INFO
): Buffer {
  const saltBuf = Buffer.isBuffer(salt) ? salt : Buffer.from(salt, "base64");
  const infoBuf = Buffer.isBuffer(info) ? info : Buffer.from(info, "utf8");

  // HKDF derivation (32 bytes = 256 bits)
  return Buffer.from(
    crypto.hkdfSync("sha256", sharedSecret, saltBuf, infoBuf, 32)
  );
}

/**
 * Encrypts a FHIR bundle/resource payload using X25519 ECDH + HKDF + AES-256-GCM
 */
export function encryptAbdmFhirPayload(
  payload: unknown,
  remotePublicKey: string | crypto.KeyObject,
  senderKeyPair?: AbdmKeyPair
): AbdmEncryptedEnvelope {
  const senderKeys = senderKeyPair || generateAbdmKeyPair();
  const plainText = typeof payload === "string" ? payload : JSON.stringify(payload);

  // Calculate SHA-256 checksum of the unencrypted plaintext
  const checksum = crypto.createHash("sha256").update(plainText).digest("hex");

  // Generate 12-byte cryptographic nonce / salt
  const nonce = crypto.randomBytes(12);

  // Compute ECDH shared secret
  const sharedSecret = computeSharedSecret(senderKeys.privateKey, remotePublicKey);

  // Derive AES-256 key via HKDF
  const aesKey = deriveAesGcmKey(sharedSecret, nonce);

  // Encrypt with AES-GCM
  const cipher = crypto.createCipheriv("aes-256-gcm", aesKey, nonce);
  let encrypted = cipher.update(plainText, "utf8", "base64");
  encrypted += cipher.final("base64");
  const authTag = cipher.getAuthTag().toString("base64");

  // Envelope payload: ciphertext:authTag
  const encryptedData = `${encrypted}:${authTag}`;

  return {
    encryptedData,
    keyMaterial: {
      cryptoAlg: "ECDH",
      curve: "Curve25519",
      senderPublicKey: senderKeys.publicKey,
      nonce: nonce.toString("base64"),
    },
    checksum,
  };
}

/**
 * Decrypts an ABDM encrypted envelope using the receiver's X25519 private key
 */
export function decryptAbdmFhirPayload<T = unknown>(
  envelope: AbdmEncryptedEnvelope,
  receiverPrivateKey: string | crypto.KeyObject
): T {
  const { encryptedData, keyMaterial } = envelope;
  const parts = encryptedData.split(":");
  if (parts.length !== 2) {
    throw new Error("Invalid ABDM encrypted payload format; expected ciphertext:authTag");
  }

  const [ciphertextB64, authTagB64] = parts;
  const nonce = Buffer.from(keyMaterial.nonce, "base64");
  const authTag = Buffer.from(authTagB64, "base64");

  // Compute shared secret
  const sharedSecret = computeSharedSecret(receiverPrivateKey, keyMaterial.senderPublicKey);

  // Derive AES-256 key
  const aesKey = deriveAesGcmKey(sharedSecret, nonce);

  // Decrypt with AES-GCM
  const decipher = crypto.createDecipheriv("aes-256-gcm", aesKey, nonce);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(ciphertextB64, "base64", "utf8");
  decrypted += decipher.final("utf8");

  try {
    return JSON.parse(decrypted) as T;
  } catch {
    return decrypted as unknown as T;
  }
}

/**
 * Verifies the digital signature of an ABDM consent artifact.
 * Supports RSA/ECDSA public keys or fallback HMAC secret.
 */
export function verifyAbdmConsentSignature(
  canonicalConsentString: string,
  signature: string,
  verificationKey: string
): boolean {
  try {
    // If public key is in PEM format
    if (verificationKey.includes("-----BEGIN")) {
      const verifier = crypto.createVerify("SHA256");
      verifier.update(canonicalConsentString);
      verifier.end();

      const sigBuffer = Buffer.from(signature, signature.length === 64 ? "hex" : "base64");
      return verifier.verify(verificationKey, sigBuffer);
    }

    // Secret key HMAC fallback
    const expectedHmac = crypto
      .createHmac("sha256", verificationKey)
      .update(canonicalConsentString)
      .digest();

    const sigBuffer = Buffer.from(signature, signature.length === 64 ? "hex" : "base64");
    if (sigBuffer.length !== expectedHmac.length) {
      return false;
    }

    return crypto.timingSafeEqual(sigBuffer, expectedHmac);
  } catch {
    return false;
  }
}
