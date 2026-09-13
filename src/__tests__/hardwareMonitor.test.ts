import { describe, it, expect } from "vitest";
import {
  classifyDeviceStatus,
  evaluateKermaThreshold,
  accumulateRdsrDose,
  formatCArmAngles,
  classifyPingLatency,
  AccumulatedDose,
} from "../utils/hardwareCalculations";

describe("Hardware Telemetry & Dosimetry Calculations", () => {
  describe("classifyDeviceStatus", () => {
    it("classifies active high-throughput stream as ONLINE", () => {
      const now = 1773480000000;
      const lastHeartbeat = now - 5000; // 5s ago
      const ppm = 35;
      expect(classifyDeviceStatus(lastHeartbeat, ppm, now)).toBe("ONLINE");
    });

    it("classifies idle but alive stream as STANDBY", () => {
      const now = 1773480000000;
      const lastHeartbeat = now - 5000; // 5s ago
      const ppm = 4; // < 10 PPM
      expect(classifyDeviceStatus(lastHeartbeat, ppm, now)).toBe("STANDBY");
    });

    it("classifies lagging stream as DEGRADED", () => {
      const now = 1773480000000;
      const lastHeartbeat = now - 25000; // 25s ago (> 20s)
      const ppm = 20;
      expect(classifyDeviceStatus(lastHeartbeat, ppm, now)).toBe("DEGRADED");
    });

    it("classifies disconnected stream as OFFLINE", () => {
      const now = 1773480000000;
      const lastHeartbeat = now - 75000; // 75s ago (> 60s)
      const ppm = 0;
      expect(classifyDeviceStatus(lastHeartbeat, ppm, now)).toBe("OFFLINE");
    });
  });

  describe("evaluateKermaThreshold", () => {
    it("categorizes low dose (< 1000 mGy) as NORMAL", () => {
      const res = evaluateKermaThreshold(485.4);
      expect(res.tier).toBe("NORMAL");
      expect(res.percentageOfLimit).toBe(24);
      expect(res.progressClass).toContain("bg-[#1E8E3E]");
    });

    it("categorizes elevated dose (1000 - 1999 mGy) as ADVISORY", () => {
      const res = evaluateKermaThreshold(1450.0);
      expect(res.tier).toBe("ADVISORY");
      expect(res.percentageOfLimit).toBe(73);
      expect(res.label).toContain("Advisory Threshold");
    });

    it("categorizes hazardous dose (>= 2000 mGy) as CRITICAL", () => {
      const res = evaluateKermaThreshold(2150.0);
      expect(res.tier).toBe("CRITICAL");
      expect(res.percentageOfLimit).toBe(100);
      expect(res.label).toContain("Critical Dose Alert");
    });
  });

  describe("accumulateRdsrDose", () => {
    it("accurately sums dose and fluoroscopy metrics with floating-point stability", () => {
      const current: AccumulatedDose = {
        cumulativeAirKermaMGy: 485.4,
        doseAreaProductGyCm2: 28.6,
        totalFluoroscopyTimeSec: 840.0,
        totalAcquisitionTimeSec: 36.2,
        totalIrradiationEvents: 18,
        dapOriginalUnit: "Gy.cm2",
      };

      const incoming = {
        cumulativeAirKermaMGy: 42.5,
        doseAreaProductGyCm2: 2.4,
        totalFluoroscopyTimeSec: 60.0,
        totalAcquisitionTimeSec: 4.8,
        totalIrradiationEvents: 2,
      };

      const updated = accumulateRdsrDose(current, incoming);
      expect(updated.cumulativeAirKermaMGy).toBe(527.9);
      expect(updated.doseAreaProductGyCm2).toBe(31.0);
      expect(updated.totalFluoroscopyTimeSec).toBe(900.0);
      expect(updated.totalAcquisitionTimeSec).toBe(41.0);
      expect(updated.totalIrradiationEvents).toBe(20);
    });
  });

  describe("formatCArmAngles", () => {
    it("formats LAO / CRA projection", () => {
      expect(formatCArmAngles(30.0, 15.0)).toBe("LAO 30.0° / CRA 15.0°");
    });

    it("formats RAO / CAU projection", () => {
      expect(formatCArmAngles(-25.5, -10.2)).toBe("RAO 25.5° / CAU 10.2°");
    });

    it("formats neutral AP projection", () => {
      expect(formatCArmAngles(0.0, 0.0)).toBe("AP 0.0° / 0.0°");
    });
  });

  describe("classifyPingLatency", () => {
    it("labels sub-millisecond hospital switch latency as EXCELLENT", () => {
      const res = classifyPingLatency(0.42);
      expect(res.quality).toBe("EXCELLENT");
    });

    it("labels standard LAN latency as GOOD", () => {
      const res = classifyPingLatency(3.8);
      expect(res.quality).toBe("GOOD");
    });

    it("labels congested switch latency as DEGRADED", () => {
      const res = classifyPingLatency(14.5);
      expect(res.quality).toBe("DEGRADED");
    });

    it("labels high latency as CRITICAL", () => {
      const res = classifyPingLatency(55.0);
      expect(res.quality).toBe("CRITICAL");
    });
  });
});
