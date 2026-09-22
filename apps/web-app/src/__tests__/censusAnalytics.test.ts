import { describe, it, expect } from "vitest";
import {
  computeBoxPlotStats,
  computeScatterRegression,
  computeKaplanMeierPatency,
  computeLeafTreeNodes,
  PUBLISHABLE_REGISTRY_COHORT,
  DeIdentifiedPatientRecord,
} from "../../app/lib/censusEngine";

describe("Census & Registry Journal Statistical Math Engine", () => {
  describe("computeBoxPlotStats (Tukey 5-Number Summary & Outlier Detection)", () => {
    it("handles empty arrays gracefully with zero-filled statistics", () => {
      const stats = computeBoxPlotStats([]);
      expect(stats.min).toBe(0);
      expect(stats.q1).toBe(0);
      expect(stats.median).toBe(0);
      expect(stats.q3).toBe(0);
      expect(stats.max).toBe(0);
      expect(stats.iqr).toBe(0);
      expect(stats.mean).toBe(0);
      expect(stats.sd).toBe(0);
      expect(stats.outliers).toEqual([]);
    });

    it("calculates accurate quartiles and median for known distribution", () => {
      const testVals = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      const stats = computeBoxPlotStats(testVals);

      expect(stats.min).toBe(10);
      expect(stats.max).toBe(100);
      expect(stats.mean).toBe(55);
      expect(stats.median).toBe(55);
      expect(stats.q1).toBe(32.5);
      expect(stats.q3).toBe(77.5);
      expect(stats.iqr).toBe(45);
      expect(stats.outliers).toEqual([]);
    });

    it("correctly identifies high and low Tukey outliers beyond 1.5x IQR", () => {
      const valsWithOutlier = [12, 13, 14, 15, 16, 17, 18, 100];
      const stats = computeBoxPlotStats(valsWithOutlier);

      expect(stats.outliers).toContain(100);
      expect(stats.max).toBeLessThan(100);
    });
  });

  describe("computeScatterRegression (OLS Bivariate Linear Model & Pearson r)", () => {
    it("computes exact slope, intercept, and r=1 for perfectly collinear data", () => {
      const points = [
        { x: 10, y: 20 },
        { x: 20, y: 40 },
        { x: 30, y: 60 },
        { x: 40, y: 80 },
      ];
      const reg = computeScatterRegression(points);

      expect(reg.slope).toBeCloseTo(2.0, 3);
      expect(reg.intercept).toBeCloseTo(0.0, 2);
      expect(reg.rValue).toBeCloseTo(1.0, 3);
      expect(reg.rSquared).toBeCloseTo(1.0, 3);
      expect(reg.meanX).toBe(25);
      expect(reg.meanY).toBe(50);
    });

    it("computes regression on TIPS Pre vs Post shunt gradients", () => {
      const tipsCases = PUBLISHABLE_REGISTRY_COHORT.filter(
        (r) => r.preShuntGradientMmHg !== undefined && r.postShuntGradientMmHg !== undefined
      );
      expect(tipsCases.length).toBeGreaterThanOrEqual(4);

      const points = tipsCases.map((r) => ({
        x: r.preShuntGradientMmHg as number,
        y: r.postShuntGradientMmHg as number,
      }));

      const reg = computeScatterRegression(points);
      expect(reg.meanX).toBeGreaterThan(12);
      expect(reg.meanY).toBeLessThan(12);
      expect(reg.rSquared).toBeGreaterThanOrEqual(0);
      expect(reg.rSquared).toBeLessThanOrEqual(1.0);
    });
  });

  describe("computeKaplanMeierPatency (Time-to-Event Survival Analysis)", () => {
    it("generates stepwise patency coordinates with non-increasing survival curve", () => {
      const km = computeKaplanMeierPatency(PUBLISHABLE_REGISTRY_COHORT);
      expect(km.length).toBeGreaterThanOrEqual(5);

      expect(km[0].day).toBe(0);
      expect(km[0].survivalRate).toBe(1.0);
      expect(km[0].atRisk).toBe(PUBLISHABLE_REGISTRY_COHORT.length);

      for (let i = 1; i < km.length; i++) {
        expect(km[i].survivalRate).toBeLessThanOrEqual(km[i - 1].survivalRate);
        expect(km[i].survivalRate).toBeGreaterThanOrEqual(0.0);
      }
    });
  });

  describe("computeLeafTreeNodes (Hierarchical Category Treemap Partitions)", () => {
    it("partitions cohort by category and preserves total case count", () => {
      const leaves = computeLeafTreeNodes(PUBLISHABLE_REGISTRY_COHORT);
      expect(leaves.length).toBeGreaterThan(0);

      const totalLeafVolume = leaves.reduce((sum, l) => sum + l.count, 0);
      expect(totalLeafVolume).toBe(PUBLISHABLE_REGISTRY_COHORT.length);

      leaves.forEach((l) => {
        expect(l.count).toBeGreaterThan(0);
        expect(l.successRate).toBeGreaterThanOrEqual(0);
        expect(l.successRate).toBeLessThanOrEqual(100);
      });
    });
  });
});

describe("Publishable Registry Cohort Clinical Parameters Verification", () => {
  it("verifies all cohort records contain required demographic parameters", () => {
    PUBLISHABLE_REGISTRY_COHORT.forEach((record: DeIdentifiedPatientRecord) => {
      expect(record.researchId).toMatch(/^VF-2026-\d{3}$/);
      expect(["Male", "Female"]).toContain(record.gender);
      expect(record.exactAge).toBeDefined();
      expect(record.exactAge).toBeGreaterThanOrEqual(18);
      expect(record.exactAge).toBeLessThanOrEqual(89);
      expect(record.ageGroup).toBeDefined();
      expect(record.technicalSuccess).toBe(true);
      expect(record.clinicalSuccess).toBe(true);
      expect(record.followUpDate).toBeDefined();
      expect(record.followUpInterval).toBeDefined();
      expect(record.followUpStatus).toBeDefined();
      expect(record.followUpPatencyDays).toBeGreaterThan(0);
    });
  });

  it("validates TIPS portal hypertension hemodynamics and shunt failure parameters", () => {
    const tipsRecords = PUBLISHABLE_REGISTRY_COHORT.filter(
      (r) => r.preShuntGradientMmHg !== undefined
    );

    expect(tipsRecords.length).toBeGreaterThanOrEqual(4);

    tipsRecords.forEach((tips) => {
      expect(tips.preShuntGradientMmHg).toBeGreaterThanOrEqual(16);
      expect(tips.postShuntGradientMmHg).toBeLessThanOrEqual(12);
      expect(tips.gradientReductionMmHg).toBe(
        tips.preShuntGradientMmHg! - tips.postShuntGradientMmHg!
      );
      expect(tips.stentGraftType).toBeDefined();
      expect(typeof tips.shuntFailure).toBe("boolean");
      expect(tips.hepaticEncephalopathy).toBeDefined();
    });
  });

  it("validates Interventional Oncology (TACE / TATS) response markers", () => {
    const taceRecords = PUBLISHABLE_REGISTRY_COHORT.filter(
      (r) => r.bclcStage !== undefined
    );

    expect(taceRecords.length).toBeGreaterThanOrEqual(3);

    taceRecords.forEach((tace) => {
      expect(["BCLC-A", "BCLC-B", "BCLC-C"]).toContain(tace.bclcStage);
      expect(tace.targetLesionSizeCm).toBeGreaterThan(0);
      expect(tace.preAfpNgMl).toBeGreaterThan(0);
      expect(tace.postAfpNgMl).toBeLessThan(tace.preAfpNgMl!);
      expect([
        "Complete Response (CR)",
        "Partial Response (PR)",
        "Stable Disease (SD)",
        "Progressive Disease (PD)",
      ]).toContain(tace.mRecistResponse);
      expect(tace.embolicAgent).toBeDefined();
    });
  });

  it("validates Mechanical Thrombectomy recanalization, clot burden & mRS parameters", () => {
    const thrombectomyRecords = PUBLISHABLE_REGISTRY_COHORT.filter(
      (r) => r.targetVessel !== undefined
    );

    expect(thrombectomyRecords.length).toBeGreaterThanOrEqual(3);

    thrombectomyRecords.forEach((mt) => {
      expect(mt.targetVessel).toBeDefined();
      expect(mt.preTiciScore).toBeDefined();
      expect(["TICI 2b", "TICI 3"]).toContain(mt.postTiciScore);
      expect(mt.clotBurdenReductionPct).toBeGreaterThanOrEqual(80);
      expect(mt.ninetyDayMrsScore).toBeLessThanOrEqual(2);
      expect(mt.deviceUsed).toBeDefined();
    });
  });

  it("validates longitudinal follow-up ledger intervals and status", () => {
    const intervals = PUBLISHABLE_REGISTRY_COHORT.map((r) => r.followUpInterval);
    const uniqueIntervals = Array.from(new Set(intervals));

    expect(uniqueIntervals).toContain("30-Day");
    expect(uniqueIntervals).toContain("3-Month");
    expect(uniqueIntervals).toContain("6-Month");
  });
});
