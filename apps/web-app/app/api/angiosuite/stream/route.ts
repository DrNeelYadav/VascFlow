import { NextRequest } from "next/server";
import { angiosuiteBus, AngiosuiteLiveEvent } from "@/app/lib/server/angiosuiteEventBus";
import { getVerifiedStaff } from "@/app/lib/auth/clinicalAccess";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/angiosuite/stream
 * Real-Time Server-Sent Events (SSE) feed for live angiosuite monitoring.
 * Pushes status transitions, STAT emergency triggers, and bed occupancy
 * instantly to connected Cath-Lab displays, tablets, and mobile stations.
 */
export async function GET(request: NextRequest) {
  const staff = await getVerifiedStaff();
  if (!staff) {
    return new Response(JSON.stringify({ error: "Unauthorized: Active session required" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      // 1. Initial connection message
      controller.enqueue(
        encoder.encode(`event: connected\ndata: ${JSON.stringify({ time: new Date().toISOString() })}\n\n`)
      );

      // 2. Subscribe to event bus
      const unsubscribe = angiosuiteBus.subscribe((event: AngiosuiteLiveEvent) => {
        try {
          const packet = `event: ${event.type}\ndata: ${JSON.stringify(event.payload)}\n\n`;
          controller.enqueue(encoder.encode(packet));
        } catch {
          unsubscribe();
        }
      });

      // 3. Heartbeat every 25s to keep connection open across firewalls
      const heartbeatInterval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`event: heartbeat\ndata: {}\n\n`));
        } catch {
          clearInterval(heartbeatInterval);
        }
      }, 25000);

      request.signal.addEventListener("abort", () => {
        clearInterval(heartbeatInterval);
        unsubscribe();
        try {
          controller.close();
        } catch {}
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
