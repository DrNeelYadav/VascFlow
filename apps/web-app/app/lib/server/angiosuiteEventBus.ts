import "server-only";

export type AngiosuiteEventType = 
  | "case_status_changed"
  | "stat_emergency_booked"
  | "bed_occupancy_updated"
  | "telemetry_contrast_alert"
  | "heartbeat";

export interface AngiosuiteLiveEvent {
  type: AngiosuiteEventType;
  payload: Record<string, unknown>;
  timestamp: string;
}

type EventListener = (event: AngiosuiteLiveEvent) => void;

class AngiosuiteEventBus {
  private listeners = new Set<EventListener>();

  public subscribe(listener: EventListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  public broadcast(type: AngiosuiteEventType, payload: Record<string, unknown> = {}): void {
    const event: AngiosuiteLiveEvent = {
      type,
      payload,
      timestamp: new Date().toISOString(),
    };
    this.listeners.forEach((listener) => {
      try {
        listener(event);
      } catch (err) {
        console.warn("[AngiosuiteEventBus] Listener invocation error:", err);
      }
    });
  }

  public getListenerCount(): number {
    return this.listeners.size;
  }
}

// Global Singleton in Node runtime
const globalForBus = globalThis as unknown as { angiosuiteBus?: AngiosuiteEventBus };
export const angiosuiteBus = globalForBus.angiosuiteBus ?? new AngiosuiteEventBus();

if (process.env.NODE_ENV !== "production") {
  globalForBus.angiosuiteBus = angiosuiteBus;
}
