import { NextRequest, NextResponse } from "next/server";
import { extractClinicalDataWithGeminiVision } from "../../../lib/services/geminiVisionOcrService";
import {
  AUTHORIZED_CHAT_IDS,
  INGESTED_REVIEWS_VAULT,
  IngestedReviewItem,
} from "./telegramTypes";

export async function POST(req: NextRequest) {
  try {
    // 1. Verify Secret Token Header if configured
    const secretHeader = req.headers.get("x-telegram-bot-api-secret-token");
    const configuredSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (configuredSecret && secretHeader !== configuredSecret) {
      return NextResponse.json({ error: "Unauthorized: Invalid webhook secret token" }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Bad Request: Missing JSON body" }, { status: 400 });
    }

    // 2. Chat Whitelist Validation
    const message = body.message || body.channel_post;
    if (!message) {
      return NextResponse.json({ ok: true, status: "Ignored: No message payload" });
    }

    const chatId = String(message.chat?.id || "");
    const isWhitelisted = AUTHORIZED_CHAT_IDS.has(chatId) || process.env.NODE_ENV === "test";

    if (!isWhitelisted) {
      return NextResponse.json(
        { ok: false, error: "Forbidden: Chat ID is not whitelisted for IR clinical ingestion" },
        { status: 403 }
      );
    }

    // 3. Extract Photo / Caption
    const caption = message.caption || message.text || "";
    const photos = message.photo;
    const photoFileId = Array.isArray(photos) && photos.length > 0 ? photos[photos.length - 1].file_id : null;

    // 4. Run Multimodal Gemini Vision OCR Extraction
    const photoUrlOrId = photoFileId ? `telegram:file_id:${photoFileId}` : "placeholder:text-only";
    const ocrResult = await extractClinicalDataWithGeminiVision(photoUrlOrId, caption);

    // 5. Construct Structured CT Review Queue Record
    const reviewId = `CT-REV-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const reviewItem: IngestedReviewItem = {
      id: reviewId,
      patientName: ocrResult.patientName || "Unlabeled CT Console Intake",
      crNumber: ocrResult.uhidOrCr || `CR-${Date.now().toString().slice(-6)}`,
      age: ocrResult.age,
      gender: ocrResult.gender,
      scanDate: ocrResult.scanDate || new Date().toISOString().slice(0, 10),
      indication: ocrResult.clinicalIndication || "Referred for Interventional Radiology Consultation",
      suggestedProcedure: ocrResult.suggestedProcedure || "IR Consultation & Angiosuite Workup",
      organSystem: ocrResult.targetOrgan || "Others",
      status: "PENDING_REVIEW",
      source: "TELEGRAM_CT_OCR",
      confidence: ocrResult.confidence,
      telegramMessageId: message.message_id,
      chatId,
      createdAt: new Date().toISOString(),
    };

    INGESTED_REVIEWS_VAULT.unshift(reviewItem);

    return NextResponse.json({
      ok: true,
      reviewId: reviewItem.id,
      patientName: reviewItem.patientName,
      crNumber: reviewItem.crNumber,
      suggestedProcedure: reviewItem.suggestedProcedure,
      status: reviewItem.status,
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: "Internal Server Error in Telegram Ingest", details: err?.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    endpoint: "/api/webhooks/telegram-ingest",
    whitelistedChatsCount: AUTHORIZED_CHAT_IDS.size,
    queuedReviewsCount: INGESTED_REVIEWS_VAULT.length,
    reviews: INGESTED_REVIEWS_VAULT.slice(0, 20),
  });
}
