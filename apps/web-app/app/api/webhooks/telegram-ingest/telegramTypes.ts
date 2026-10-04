// Default authorized Telegram Chat IDs for SMS Medical College IR department
export const AUTHORIZED_CHAT_IDS = new Set<string>([
  "-1002345678901", // SMS Hospital IR Angiosuite Group
  "-1002345678902", // SMS Hospital IR On-Call Residents Group
  "-1002345678903", // SMS IR Daily CT Console Ingestion Bot
  ...(process.env.ALLOWED_TELEGRAM_CHAT_IDS ? process.env.ALLOWED_TELEGRAM_CHAT_IDS.split(",") : []),
]);

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
  source: "TELEGRAM_CT_OCR";
  confidence: number;
  telegramMessageId?: number;
  chatId?: string;
  createdAt: string;
}

export const INGESTED_REVIEWS_VAULT: IngestedReviewItem[] = [];
