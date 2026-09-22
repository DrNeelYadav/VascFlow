import { NextRequest, NextResponse } from "next/server";
import { verifyAbdmConsentSignature } from "@vascule/utils";

const NHA_GATEWAY_PUBLIC_KEY =
  process.env.ABDM_GATEWAY_PUBLIC_KEY ||
  process.env.NEXTAUTH_SECRET ||
  "nha-abdm-gateway-verification-shared-key-2026";

export interface AbdmConsentVerifyPayload {
  consentId: string;
  consentDetail: {
    schemaVersion?: string;
    consentId: string;
    createdAt: string;
    patient: {
      id: string;
    };
    purpose?: {
      code: string;
      text: string;
    };
    permission: {
      accessMode: "VIEW" | "STORE" | "QUERY" | "STREAM";
      dateRange: {
        from: string;
        to: string;
      };
      dataEraseAt: string;
      frequency?: {
        unit: string;
        value: number;
      };
    };
    requester?: {
      name: string;
      identifier?: { type: string; value: string };
    };
  };
  signature: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AbdmConsentVerifyPayload;

    if (!body || !body.consentId || !body.consentDetail || !body.signature) {
      return NextResponse.json(
        {
          valid: false,
          error: "Invalid request payload. 'consentId', 'consentDetail', and 'signature' are required.",
        },
        { status: 400 }
      );
    }

    const { consentDetail, signature } = body;

    // Check expiration
    const eraseAt = new Date(
      consentDetail.permission?.dataEraseAt || consentDetail.permission?.dateRange?.to
    );
    const now = new Date();
    if (isNaN(eraseAt.getTime()) || eraseAt < now) {
      return NextResponse.json(
        {
          valid: false,
          error: "ABDM consent artifact has expired.",
          expiredAt: eraseAt.toISOString(),
        },
        { status: 401 }
      );
    }

    // Canonical serialization of consentDetail for verification
    const canonicalString = JSON.stringify(consentDetail);

    const isValid = verifyAbdmConsentSignature(
      canonicalString,
      signature,
      NHA_GATEWAY_PUBLIC_KEY
    );

    if (!isValid) {
      return NextResponse.json(
        {
          valid: false,
          error: "Cryptographic signature verification failed against NHA ABDM Gateway credentials.",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        valid: true,
        consentId: body.consentId,
        status: "GRANTED",
        patientId: consentDetail.patient?.id,
        accessMode: consentDetail.permission?.accessMode,
        verifiedAt: now.toISOString(),
        expiresAt: eraseAt.toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        valid: false,
        error: error?.message || "Internal server error during ABDM consent verification.",
      },
      { status: 500 }
    );
  }
}
