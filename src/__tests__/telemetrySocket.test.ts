import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  resolveTelemetryWsUrl,
  type LiveTelemetryPayload,
} from "@vascule/feature-patient-vitals";

// Mock WebSocket class simulating hospital telemetry stream
class MockWebSocket {
  static instances: MockWebSocket[] = [];
  url: string;
  onopen: (() => void) | null = null;
  onmessage: ((event: { data: string }) => void) | null = null;
  onerror: ((error: Event) => void) | null = null;
  onclose: (() => void) | null = null;
  readyState: number = 0; // CONNECTING
  closed: boolean = false;

  constructor(url: string) {
    this.url = url;
    MockWebSocket.instances.push(this);
  }

  simulateOpen() {
    this.readyState = 1; // OPEN
    this.onopen?.();
  }

  simulateMessage(data: LiveTelemetryPayload) {
    this.onmessage?.({ data: JSON.stringify(data) });
  }

  simulateError(event: Event) {
    this.onerror?.(event);
  }

  close() {
    this.readyState = 3; // CLOSED
    this.closed = true;
    this.onclose?.();
  }
}

describe("Vascule OS Real-Time Telemetry - WebSocket Suite", () => {
  beforeEach(() => {
    MockWebSocket.instances = [];
  });

  it("resolves standard telemetry WebSocket URL with patient identifier", () => {
    const defaultUrl = resolveTelemetryWsUrl("IR-2026-8841");
    expect(defaultUrl).toContain("/ws/vitals/IR-2026-8841");
    expect(defaultUrl).toMatch(/^wss?:\/\//);
  });

  it("respects explicit custom and relative WebSocket URLs", () => {
    const explicitUrl = "wss://angio.sms-hospital.in/ws/vitals/IR-9922";
    const resolved = resolveTelemetryWsUrl("IR-9922", explicitUrl);
    expect(resolved).toBe(explicitUrl);

    const relativeUrl = "/ws/vitals/IR-CUSTOM";
    const resolvedRelative = resolveTelemetryWsUrl("IR-CUSTOM", relativeUrl);
    expect(resolvedRelative).toContain("/ws/vitals/IR-CUSTOM");
    expect(resolvedRelative).toMatch(/^wss?:\/\//);
  });

  it("processes real-time streaming telemetry frames and validates data integrity", () => {
    const socket = new MockWebSocket("ws://127.0.0.1:8081/ws/vitals/IR-2026-8841");
    let receivedPayload: LiveTelemetryPayload | null = null;

    socket.onmessage = (event) => {
      receivedPayload = JSON.parse(event.data);
    };

    socket.simulateOpen();
    expect(socket.readyState).toBe(1);

    const sampleFrame: LiveTelemetryPayload = {
      patientId: "IR-2026-8841",
      timestamp: new Date().toISOString(),
      systolic: 122,
      diastolic: 78,
      map: 93,
      heartRate: 74,
      spo2Percent: 99,
      etco2MmHg: 36,
      respiratoryRate: 14,
      actSeconds: 295,
      rhythmStatus: "Normal Sinus Rhythm",
      airKermaMgy: 345.5,
      dapGyCm2: 18.8,
      fluoroTimeMinutes: 14,
      fluoroTimeSeconds: 45,
      source: "Right Radial A-Line",
    };

    socket.simulateMessage(sampleFrame);

    expect(receivedPayload).not.toBeNull();
    const payload = receivedPayload as unknown as LiveTelemetryPayload;
    expect(payload.patientId).toBe("IR-2026-8841");
    expect(payload.systolic).toBe(122);
    expect(payload.diastolic).toBe(78);
    expect(payload.map).toBe(93);
    expect(payload.heartRate).toBe(74);
    expect(payload.spo2Percent).toBe(99);
    expect(payload.actSeconds).toBe(295);
    expect(payload.airKermaMgy).toBe(345.5);
  });

  it("handles socket closure and clean termination", () => {
    const socket = new MockWebSocket("ws://127.0.0.1:8081/ws/vitals/IR-2026-8841");
    let isClosed = false;

    socket.onclose = () => {
      isClosed = true;
    };

    socket.simulateOpen();
    expect(socket.readyState).toBe(1);

    socket.close();
    expect(socket.readyState).toBe(3);
    expect(socket.closed).toBe(true);
    expect(isClosed).toBe(true);
  });
});
