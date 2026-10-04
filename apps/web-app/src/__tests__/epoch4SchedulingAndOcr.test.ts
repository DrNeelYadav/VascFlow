import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { getHolidayForDate } from "../../app/lib/rajasthanHolidays2026";
import { calculateNextAvailableOtDate, CLINICAL_BUMP_REASONS } from "../../app/dashboard/worklist/theatreBumpingLogic";
import { parseDeterministicClinicalText } from "../../app/lib/services/geminiVisionOcrService";
import { POST, GET } from "../../app/api/webhooks/telegram-ingest/route";
import { AUTHORIZED_CHAT_IDS } from "../../app/api/webhooks/telegram-ingest/telegramTypes";

describe("Phase 40: Epoch IV Verification, Webhook Security & OCR Accuracy Certification", () => {
  describe("1. Integer Calendar Engine & Rajasthan Gazetted Holidays", () => {
    it("correctly identifies Rajasthan Gazetted Holidays in 2026", () => {
      const repDay = getHolidayForDate("2026-01-26");
      expect(repDay.isHoliday).toBe(true);
      expect(repDay.name).toContain("Republic");
      expect(repDay.type).toBe("Gazetted");

      const indepDay = getHolidayForDate("2026-08-15");
      expect(indepDay.isHoliday).toBe(true);
      expect(indepDay.name).toContain("Independence");
    });

    it("correctly marks Sundays as off-days", () => {
      // 2026-10-04 is a Sunday
      const sun = getHolidayForDate("2026-10-04");
      expect(sun.isSunday).toBe(true);
    });
  });

  describe("2. Dynamic 1-Click Re-Dating & Theatre Bumping Workflow", () => {
    it("defines high-risk clinical contraindications for bumping", () => {
      const ids = CLINICAL_BUMP_REASONS.map((r) => r.id);
      expect(ids).toContain("coagulopathy");
      expect(ids).toContain("fever_sepsis");
      expect(ids).toContain("stat_displacement");
      expect(ids).toContain("npo_breach");
    });

    it("calculates next available non-Sunday, non-holiday theatre slot", () => {
      // If today is Saturday 2026-10-03, Sunday 2026-10-04 is skipped -> Monday 2026-10-05
      const nextDate = calculateNextAvailableOtDate("2026-10-03");
      expect(nextDate).toBe("2026-10-05");

      const check = getHolidayForDate(nextDate);
      expect(check.isSunday).toBe(false);
      expect(check.isHoliday && check.type === "Gazetted").toBe(false);
    });
  });

  describe("3. Telegram Ingestion Webhook Security & Chat Whitelisting", () => {
    it("provides authorized SMS IR chat IDs whitelist", () => {
      expect(AUTHORIZED_CHAT_IDS.size).toBeGreaterThanOrEqual(3);
      expect(AUTHORIZED_CHAT_IDS.has("-1002345678901")).toBe(true);
    });

    it("rejects request if secret token header is invalid when secret is configured", async () => {
      const originalSecret = process.env.TELEGRAM_WEBHOOK_SECRET;
      process.env.TELEGRAM_WEBHOOK_SECRET = "sms_super_secret_token_123";

      const req = new NextRequest("http://localhost:3000/api/webhooks/telegram-ingest", {
        method: "POST",
        headers: {
          "x-telegram-bot-api-secret-token": "wrong_token",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: { chat: { id: "-1002345678901" }, text: "test" } }),
      });

      const res = await POST(req);
      expect(res.status).toBe(401);

      if (originalSecret === undefined) {
        delete process.env.TELEGRAM_WEBHOOK_SECRET;
      } else {
        process.env.TELEGRAM_WEBHOOK_SECRET = originalSecret;
      }
    });

    it("ingests clinical message from whitelisted chat and parses structured record", async () => {
      const payload = {
        message: {
          message_id: 9981,
          chat: { id: "-1002345678901" },
          text: "Patient Name: Rameshwar Lal Meena\nCR No: CR-90214\nAge: 54/M\nBudd-Chiari syndrome with refractory ascites for DIPS",
        },
      };

      const req = new NextRequest("http://localhost:3000/api/webhooks/telegram-ingest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const res = await POST(req);
      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.ok).toBe(true);
      expect(data.patientName).toBe("Rameshwar Lal Meena");
      expect(data.crNumber).toBe("CR-90214");
      expect(data.suggestedProcedure).toContain("DIPS");
    });
  });

  describe("4. Gemini Vision Multimodal OCR Extraction & Zero-Phantom Guardrails", () => {
    it("extracts patient demographics and mapped IR procedures deterministically", () => {
      const text = "Patient: Sita Devi\nUHID: SMS-2026-7841\n48 Y / Female\nRecurrent hemoptysis post-TB for BAE evaluation";
      const ocr = parseDeterministicClinicalText(text);

      expect(ocr.patientName).toBe("Sita Devi");
      expect(ocr.uhidOrCr).toBe("SMS-2026-7841");
      expect(ocr.age).toBe(48);
      expect(ocr.gender).toBe("Female");
      expect(ocr.suggestedProcedure).toBe("Bronchial Artery Embolization (BAE)");
      expect(ocr.targetOrgan).toBe("Thoracic & Pulmonary");
    });

    it("adheres to zero-phantom rule: leaves missing fields empty instead of fabricating fake data", () => {
      const unreadableText = "Unknown requisition slip, smudge on name";
      const ocr = parseDeterministicClinicalText(unreadableText);

      expect(ocr.patientName).toBe("");
      expect(ocr.uhidOrCr).toBe("");
      expect(ocr.age).toBeNull();
      expect(ocr.gender).toBeNull();
    });
  });
});
