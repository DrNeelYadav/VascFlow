import { describe, it, expect } from 'vitest';
import crypto from 'crypto';
import {
  generateAbdmKeyPair,
  computeSharedSecret,
  deriveAesGcmKey,
  encryptAbdmFhirPayload,
  decryptAbdmFhirPayload,
  verifyAbdmConsentSignature,
} from '../fhir/abdmEncryption';
import { generateDiagnosticReportBundle } from '../fhir/abdmBundleGenerator';

describe('ABDM Curve25519 (X25519) Encryption & Consent Verification Suite', () => {
  describe('1. Key Generation & Diffie-Hellman Key Agreement', () => {
    it('generates valid Curve25519 key pairs with Base64 SPKI and PKCS8 encodings', () => {
      const keys = generateAbdmKeyPair();

      expect(keys.publicKey).toBeDefined();
      expect(keys.privateKey).toBeDefined();
      expect(keys.publicKeyPem).toContain('-----BEGIN PUBLIC KEY-----');
      expect(keys.privateKeyPem).toContain('-----BEGIN PRIVATE KEY-----');
    });

    it('computes identical ECDH shared secrets symmetrically between two parties', () => {
      const alice = generateAbdmKeyPair();
      const bob = generateAbdmKeyPair();

      const secretAliceBob = computeSharedSecret(alice.privateKey, bob.publicKey);
      const secretBobAlice = computeSharedSecret(bob.privateKey, alice.publicKey);

      expect(secretAliceBob).toEqual(secretBobAlice);
      expect(secretAliceBob.length).toBe(32); // 256 bits
    });

    it('derives deterministic 256-bit AES-GCM keys via HKDF-SHA256', () => {
      const alice = generateAbdmKeyPair();
      const bob = generateAbdmKeyPair();
      const secret = computeSharedSecret(alice.privateKey, bob.publicKey);

      const salt = crypto.randomBytes(12);
      const key1 = deriveAesGcmKey(secret, salt, 'ABDM_TEST');
      const key2 = deriveAesGcmKey(secret, salt, 'ABDM_TEST');

      expect(key1).toEqual(key2);
      expect(key1.length).toBe(32);
    });
  });

  describe('2. FHIR DiagnosticReport Encryption & Decryption Roundtrip', () => {
    const mockCase = {
      caseId: 'CASE-2026-ENC-001',
      patientId: 'PT-12345',
      patientName: 'Kailash Meena',
      abhaId: '91-1234-5678-9012',
      uhid: 'SMS-2026-8832',
      age: 52,
      gender: 'male' as const,
      procedureName: 'Transcatheter arterial chemoembolization (TACE)',
      diagnosis: 'Hepatocellular carcinoma',
      operatorName: 'Dr. Neel Yadav',
      dateTime: '2026-09-22T10:00:00.000Z',
      airKermaGy: 1.8,
      fluoroTimeMinutes: 22,
      contrastVolumeMl: 55,
      accessSite: 'Right Femoral Artery',
      sheathSize: '5F',
      findings: 'Single hypervascular nodule Segment VIII.',
      conclusion: 'Complete embolization achieved.',
    };

    it('encrypts and decrypts a FHIR DiagnosticReport document bundle preserving exact fields', () => {
      const bundle = generateDiagnosticReportBundle(mockCase);
      const hipKeys = generateAbdmKeyPair(); // Health Information Provider (SMS Hospital)
      const hiuKeys = generateAbdmKeyPair(); // Health Information User (Requesting clinic)

      // HIP encrypts with HIU's public key
      const envelope = encryptAbdmFhirPayload(bundle, hiuKeys.publicKey, hipKeys);

      expect(envelope.encryptedData).toBeDefined();
      expect(envelope.keyMaterial.cryptoAlg).toBe('ECDH');
      expect(envelope.keyMaterial.curve).toBe('Curve25519');
      expect(envelope.keyMaterial.senderPublicKey).toBe(hipKeys.publicKey);
      expect(envelope.checksum).toBeDefined();

      // HIU decrypts with HIU's private key
      const decryptedBundle = decryptAbdmFhirPayload<typeof bundle>(
        envelope,
        hiuKeys.privateKey
      );

      expect(decryptedBundle).toBeDefined();
      expect(decryptedBundle.resourceType).toBe('Bundle');
      expect(decryptedBundle.id).toBe(bundle.id);
      expect(decryptedBundle.entry.length).toBe(bundle.entry.length);
    });

    it('rejects tampered ciphertext with an authentication tag mismatch', () => {
      const recipient = generateAbdmKeyPair();
      const envelope = encryptAbdmFhirPayload({ secretData: 'Clinical Record' }, recipient.publicKey);

      // Tamper with ciphertext
      const [cipher, tag] = envelope.encryptedData.split(':');
      const tamperedCipher = (cipher[0] === 'A' ? 'B' : 'A') + cipher.substring(1);
      const tamperedEnvelope = {
        ...envelope,
        encryptedData: `${tamperedCipher}:${tag}`,
      };

      expect(() => {
        decryptAbdmFhirPayload(tamperedEnvelope, recipient.privateKey);
      }).toThrow();
    });
  });

  describe('3. ABDM Consent Artifact Signature Verification', () => {
    const consentSecret = 'nha-gateway-test-secret-2026';
    const consentDetail = {
      consentId: 'CONSENT-UUID-9988',
      createdAt: '2026-09-22T08:00:00.000Z',
      patient: { id: '91-9876543210@abdm' },
      permission: {
        accessMode: 'VIEW',
        dateRange: {
          from: '2026-09-01T00:00:00.000Z',
          to: '2026-10-01T00:00:00.000Z',
        },
        dataEraseAt: '2026-10-01T00:00:00.000Z',
      },
    };

    it('verifies valid HMAC-SHA256 signature generated with Gateway secret', () => {
      const canonicalString = JSON.stringify(consentDetail);
      const signature = crypto
        .createHmac('sha256', consentSecret)
        .update(canonicalString)
        .digest('base64');

      const isValid = verifyAbdmConsentSignature(
        canonicalString,
        signature,
        consentSecret
      );
      expect(isValid).toBe(true);
    });

    it('rejects tampered consent details or altered signatures', () => {
      const canonicalString = JSON.stringify(consentDetail);
      const signature = crypto
        .createHmac('sha256', consentSecret)
        .update(canonicalString)
        .digest('base64');

      const tamperedDetails = JSON.stringify({
        ...consentDetail,
        patient: { id: 'imposter@abdm' },
      });

      const isValid = verifyAbdmConsentSignature(
        tamperedDetails,
        signature,
        consentSecret
      );
      expect(isValid).toBe(false);
    });
  });
});
