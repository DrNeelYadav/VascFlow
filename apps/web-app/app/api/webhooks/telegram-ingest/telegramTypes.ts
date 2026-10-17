// Default authorized Telegram Chat IDs for SMS Medical College IR department
export const AUTHORIZED_CHAT_IDS = new Set<string>([
  "-1002345678901", // SMS Hospital IR Angiosuite Group
  "-1002345678902", // SMS Hospital IR On-Call Residents Group
  "-1002345678903", // SMS IR Daily CT Console Ingestion Bot
  "-1004304451566", // DSA OPD CASES (Dr. Neel Vault Group)
  "-1003926429428", // DSA SCHEDULE (Dr. Neel Cath-Lab Group)
  "589115008",      // Dr. Neel Yadav Direct / Ingestion Bot
  ...(process.env.ALLOWED_TELEGRAM_CHAT_IDS ? process.env.ALLOWED_TELEGRAM_CHAT_IDS.split(",") : []),
]);

export type TelegramMediaType = "PHOTO" | "VIDEO_CINE" | "DOCUMENT_ZIP" | "TEXT_ONLY";

export interface IngestedReviewItem {
  id: string;
  patientName: string;
  crNumber: string;
  age: number | null;
  gender: string | null;
  scanDate: string;
  indication: string;
  suggestedProcedure: string;
  organSystem: string;
  status: "PENDING_REVIEW" | "ACCEPTED" | "REJECTED";
  source: "TELEGRAM_CT_OCR" | "TELEGRAM_MEDIA_VAULT";
  confidence: number;
  telegramMessageId?: number;
  chatId?: string;
  createdAt: string;
  mediaType?: TelegramMediaType;
  fileId?: string | null;
  fileName?: string | null;
  caption?: string | null;
}

export const INGESTED_REVIEWS_VAULT: IngestedReviewItem[] = [];
