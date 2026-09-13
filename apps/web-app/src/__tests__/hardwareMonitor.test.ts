import { describe, it, expect } from "vitest";
import {
  classifyDeviceStatus,
  evaluateKermaThreshold,
  accumulateRdsrDose,
  formatCArmAngles,
  classifyPingLatency,
  AccumulatedDose,
} from "../../app/dashboard/hardware/hardwareCalculations";

describe("Apps/Web-App Hardware Monitor & Dosimetry Suite", () => {
  it("transitions device status correctly based on heartbeat and packet throughput", () => {
    const now = 1773480000000;
    expect(classifyDeviceStatus(now - 2000, 30, now)).toBe("ONLINE");
    expect(classifyDeviceStatus(now - 2000, 5, now)).toBe("STANDBY");
    expect(classifyDeviceStatus(now - 25000, 20, now)).toBe("DEGRADED");
    expect(classifyDeviceStatus(now - 65000, 0, now)).toBe("OFFLINE");
  });

  it("evaluates cumulative air kerma against SIR first notification threshold", () => {
    const normal = evaluateKermaThreshold(850);
    expect(normal.tier).toBe("NORMAL");

    const advisory = evaluateKermaThreshold(1200);
    expect(advisory.tier).toBe("ADVISORY");

    const critical = evaluateKermaThreshold(2050);
    expect(critical.tier).toBe("CRITICAL");
  });

  it("accumulates RDSR irradiation increments accurately", () => {
    const baseline: AccumulatedDose = {
      cumulativeAirKermaMGy: 100.0,
      doseAreaProductGyCm2: 10.0,
      totalFluoroscopyTimeSec: 120.0,
      totalAcquisitionTimeSec: 15.0,
      totalIrradiationEvents: 5,
    };

    const next = accumulateRdsrDose(baseline, {
      cumulativeAirKermaMGy: 25.5,
      doseAreaProductGyCm2: 2.5,
      totalFluoroscopyTimeSec: 30.0,
      totalIrradiationEvents: 1,
    });

    expect(next.cumulativeAirKermaMGy).toBe(125.5);
    expect(next.doseAreaProductGyCm2).toBe(12.5);
    expect(next.totalFluoroscopyTimeSec).toBe(150.0);
    expect(next.totalIrradiationEvents).toBe(6);
  });

  it("formats C-Arm angulation into clinical standard representation", () => {
    expect(formatCArmAngles(45.0, 20.0)).toBe("LAO 45.0° / CRA 20.0°");
    expect(formatCArmAngles(-30.0, -15.0)).toBe("RAO 30.0° / CAU 15.0°");
    expect(formatCArmAngles(0.0, 0.0)).toBe("AP 0.0° / 0.0°");
  });

  it("classifies round-trip ping latency into clinical quality tiers", () => {
    expect(classifyPingLatency(0.5).quality).toBe("EXCELLENT");
    expect(classifyPingLatency(2.5).quality).toBe("GOOD");
    expect(classifyPingLatency(15.0).quality).toBe("DEGRADED");
    expect(classifyPingLatency(35.0).quality).toBe("CRITICAL");
  });
});
