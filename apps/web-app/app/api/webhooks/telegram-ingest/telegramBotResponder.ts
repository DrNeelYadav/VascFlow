import { GOLD_STANDARD_1090_CASES } from "../../../lib/realData/goldStandard1090Cases";
import { IngestedReviewItem, TelegramMediaType } from "./telegramTypes";

export async function sendTelegramMessage(chatId: string, text: string, replyMarkup?: any) {
  const token = process.env.TELEGRAM_BOT_TOKEN || "8873108345:AAGNm2S1H_B6_f375wxQUy2SxK1yyw7SAlQ";
  if (!token || !chatId) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
        reply_markup: replyMarkup,
      }),
    });
  } catch (err) {
    console.error("Failed to send telegram message:", err);
  }
}

export async function handleBotReply(
  chatId: string,
  textQuery: string,
  reviewItem: IngestedReviewItem,
  primaryFileId: string | null,
  mediaType: TelegramMediaType
) {
  if (!chatId) return;

  const caseMatch = textQuery.match(/(?:ir|case|dsa)?\s*#?(\d+)/i);
  const queriedDsaNo = caseMatch ? caseMatch[1] : null;
  const matchedCase = queriedDsaNo ? GOLD_STANDARD_1090_CASES.find((c) => c.dsaNo === queriedDsaNo) : null;

  if (matchedCase) {
    const cardText =
      `🩻 *DSA #${matchedCase.dsaNo} — ${matchedCase.patientName}*\n` +
      `• *Age / Sex:* ${matchedCase.age}Y • ${matchedCase.gender}\n` +
      `• *UHID / CR:* \`${matchedCase.uhid || matchedCase.crNumber || "—"}\`\n` +
      `• *Date:* ${matchedCase.date}\n` +
      `• *Procedure:* ${matchedCase.procedureName}\n` +
      `• *Diagnosis:* ${matchedCase.diagnosis}\n` +
      `• *Fluoro Status:* ${matchedCase.hasFluoro ? "✅ Available" : "⚠️ No Cine"}`;

    const replyMarkup = {
      inline_keyboard: [
        [
          { text: "🎥 View Fluoro Cine", url: `https://vasc-flow-web-app-three.vercel.app/dashboard/imaging?caseId=${matchedCase.dsaNo}` },
          { text: "📄 Op Note", url: `https://vasc-flow-web-app-three.vercel.app/dashboard/operative-notes?caseId=${matchedCase.dsaNo}` },
        ],
        [
          { text: "📋 Discharge Card", url: `https://vasc-flow-web-app-three.vercel.app/dashboard/discharge?caseId=${matchedCase.dsaNo}` },
          { text: "🌐 Full Dossier", url: `https://vasc-flow-web-app-three.vercel.app/dashboard/logbook?search=${matchedCase.dsaNo}` },
        ],
      ],
    };

    await sendTelegramMessage(chatId, cardText, replyMarkup);
  } else if (
    textQuery === "/start" ||
    textQuery === "/menu" ||
    textQuery.toLowerCase() === "menu" ||
    textQuery.toLowerCase() === "help"
  ) {
    const welcomeText =
      `🩺 *SMS Jaipur IR — Clinical Workstation Bot*\n\n` +
      `Welcome Dr. Neel & Team! Shortcuts:\n` +
      `• Type any **Case #** (e.g. \`1090\`, \`431\`, \`999\`) for instant clinical dossier & fluoro links.\n` +
      `• Drop **OPD slips / CT photos** to queue in VascFlow.\n` +
      `• Drop **MP4 video loops** to archive cath-lab runs.\n` +
      `• Drop **.zip** files for DICOM multi-slice studies.`;

    const replyMarkup = {
      inline_keyboard: [
        [
          { text: "📅 Cath-Lab Schedule", url: "https://vasc-flow-web-app-three.vercel.app/dashboard/calendar" },
          { text: "🏥 OP Clinic Queue", url: "https://vasc-flow-web-app-three.vercel.app/dashboard/op-clinic" },
        ],
        [
          { text: "🎥 Fluoro Imaging Suite", url: "https://vasc-flow-web-app-three.vercel.app/dashboard/imaging" },
          { text: "📖 Master Registry", url: "https://vasc-flow-web-app-three.vercel.app/dashboard/logbook" },
        ],
      ],
    };

    await sendTelegramMessage(chatId, welcomeText, replyMarkup);
  } else if (primaryFileId) {
    const confirmText =
      `✅ *Media Ingested into VascFlow Vault*\n\n` +
      `• *Type:* ${mediaType}\n` +
      `• *Patient:* ${reviewItem.patientName}\n` +
      `• *CR / UHID:* \`${reviewItem.crNumber}\`\n` +
      `• *Procedure:* ${reviewItem.suggestedProcedure}`;

    const replyMarkup = {
      inline_keyboard: [
        [{ text: "🔍 Open in Review Queue", url: "https://vasc-flow-web-app-three.vercel.app/dashboard/op-clinic" }],
      ],
    };

    await sendTelegramMessage(chatId, confirmText, replyMarkup);
  }
}
