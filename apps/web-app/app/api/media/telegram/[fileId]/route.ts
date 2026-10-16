import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ fileId: string }> }
) {
  try {
    const { fileId } = await params;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    if (!fileId) {
      return NextResponse.json({ error: "Missing fileId" }, { status: 400 });
    }

    if (!botToken) {
      return NextResponse.json(
        { error: "TELEGRAM_BOT_TOKEN is not configured on server" },
        { status: 503 }
      );
    }

    // 1. Fetch file metadata from Telegram
    const fileMetaRes = await fetch(
      `https://api.telegram.org/bot${botToken}/getFile?file_id=${encodeURIComponent(fileId)}`
    );
    const fileMeta = await fileMetaRes.json().catch(() => null);

    if (!fileMeta?.ok || !fileMeta?.result?.file_path) {
      return NextResponse.json({ error: "File not found on Telegram" }, { status: 404 });
    }

    const filePath = fileMeta.result.file_path;
    const fileDownloadUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`;

    // 2. Fetch the binary data stream
    const mediaRes = await fetch(fileDownloadUrl);
    if (!mediaRes.ok || !mediaRes.body) {
      return NextResponse.json(
        { error: "Failed to fetch media stream from Telegram" },
        { status: mediaRes.status }
      );
    }

    // 3. Determine Content-Type
    const contentType =
      mediaRes.headers.get("content-type") ||
      (filePath.endsWith(".mp4")
        ? "video/mp4"
        : filePath.endsWith(".zip")
        ? "application/zip"
        : filePath.endsWith(".pdf")
        ? "application/pdf"
        : "image/jpeg");

    // 4. Stream bytes back to client with long cache
    return new NextResponse(mediaRes.body as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal Error streaming Telegram media", details: err?.message },
      { status: 500 }
    );
  }
}
