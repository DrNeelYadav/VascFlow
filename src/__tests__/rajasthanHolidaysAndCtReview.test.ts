import { describe, it, expect } from "vitest";
import {
  RAJASTHAN_HOLIDAYS_2026,
  getHolidayForDate,
  isDateElectiveBlocked,
} from "../../apps/web-app/app/lib/rajasthanHolidays2026";
import { RAJASTHAN_DISTRICTS } from "../../apps/web-app/app/lib/rajasthanDistricts";
import { useEndoflowStore } from "../../apps/web-app/app/dashboard/useEndoflowStore";

describe("Official 2026 Rajasthan Holiday Calendar Engine", () => {
  it("should contain all extracted Rajasthan official holidays", () => {
    expect(RAJASTHAN_HOLIDAYS_2026.length).toBeGreaterThanOrEqual(30);
  });

  it("identifies Republic Day (2026-01-26) as a Gazetted Holiday", () => {
    const res = getHolidayForDate("2026-01-26");
    expect(res.isHoliday).toBe(true);
    expect(res.type).toBe("Gazetted");
    expect(res.name).toContain("Republic Day");
  });

  it("identifies Maha Shivratri (2026-02-15) and blocks elective cases", () => {
    const res = getHolidayForDate("2026-02-15");
    expect(res.isHoliday).toBe(true);
    expect(res.name).toContain("Maha Shivratri");
    expect(isDateElectiveBlocked("2026-02-15").blocked).toBe(true);
  });

  it("identifies Dhulandi (2026-03-03) as a Gazetted Holiday", () => {
    const res = getHolidayForDate("2026-03-03");
    expect(res.isHoliday).toBe(true);
    expect(res.name).toContain("Dhulandi");
  });

  it("identifies Shri Krishna Janmashtami (2026-09-04) as Gazetted", () => {
    const res = getHolidayForDate("2026-09-04");
    expect(res.isHoliday).toBe(true);
    expect(res.name).toContain("Janmashtami");
  });

  it("identifies Diwali (2026-11-08) as a Gazetted Holiday", () => {
    const res = getHolidayForDate("2026-11-08");
    expect(res.isHoliday).toBe(true);
    expect(res.name).toContain("Diwali");
  });

  it("correctly identifies Sundays as elective blocked", () => {
    // 2026-09-06 is Sunday
    const res = getHolidayForDate("2026-09-06");
    expect(res.isSunday).toBe(true);
    expect(isDateElectiveBlocked("2026-09-06").blocked).toBe(true);
  });

  it("allows normal elective scheduling on regular working weekdays", () => {
    // 2026-09-09 is Wednesday (non-holiday)
    const res = getHolidayForDate("2026-09-09");
    expect(res.isHoliday).toBe(false);
    expect(res.isSunday).toBe(false);
    expect(isDateElectiveBlocked("2026-09-09").blocked).toBe(false);
  });
});

describe("Official 50 Rajasthan Administrative Districts Master", () => {
  it("contains exactly 50 administrative districts of Rajasthan", () => {
    expect(RAJASTHAN_DISTRICTS.length).toBe(50);
  });

  it("contains major healthcare hubs and newly notified districts", () => {
    expect(RAJASTHAN_DISTRICTS).toContain("Jaipur");
    expect(RAJASTHAN_DISTRICTS).toContain("Jaipur Rural");
    expect(RAJASTHAN_DISTRICTS).toContain("Jodhpur");
    expect(RAJASTHAN_DISTRICTS).toContain("Sikar");
    expect(RAJASTHAN_DISTRICTS).toContain("Neem Ka Thana");
    expect(RAJASTHAN_DISTRICTS).toContain("Anupgarh");
    expect(RAJASTHAN_DISTRICTS).toContain("Balotra");
    expect(RAJASTHAN_DISTRICTS).toContain("Kotputli-Behror");
    expect(RAJASTHAN_DISTRICTS).toContain("Salumbar");
  });
});

describe("OPD CT Review & 4-Point Resident Screening Workflow", () => {
  it("initializes with authentic CT review cases from Sonie Hospital and SMS PACS", () => {
    const state = useEndoflowStore.getState();
    expect(state.ctReviews.length).toBeGreaterThanOrEqual(3);
    const sonieCase = state.ctReviews.find((r) => r.hospitalSource === "Sonie Hospital");
    expect(sonieCase).toBeDefined();
    expect(sonieCase?.ctNumber).toContain("SONIE-PACS");
  });

  it("converts a CT review directly into a Cath-Lab booked case", () => {
    const store = useEndoflowStore.getState();
    const targetReview = store.ctReviews[0];
    const initialBookedCount = store.bookedCases.length;

    const res = store.convertCtReviewToBooking(
      targetReview.id,
      "2026-09-18",
      "brto_parto_gastric_varices",
      "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO)",
      "Dr. Neel Yadav (DM01)"
    );

    expect(res.success).toBe(true);
    const updatedState = useEndoflowStore.getState();
    expect(updatedState.bookedCases.length).toBe(initialBookedCount + 1);

    const updatedReview = updatedState.ctReviews.find((r) => r.id === targetReview.id);
    expect(updatedReview?.status).toBe("Booked in Cath-Lab");
  });

  it("updates 4-point screening checklist and marks case kept for tomorrow", () => {
    const store = useEndoflowStore.getState();
    const testCaseId = store.bookedCases[0].id;

    store.screenCaseChecklist(testCaseId, "npo", true, "Dr. Neel Yadav");
    store.screenCaseChecklist(testCaseId, "labs", true, "Dr. Neel Yadav");
    store.screenCaseChecklist(testCaseId, "bloodProducts", true, "Dr. Neel Yadav");
    store.screenCaseChecklist(testCaseId, "hardware", true, "Dr. Neel Yadav");

    const updatedCase = useEndoflowStore.getState().bookedCases.find((c) => c.id === testCaseId);
    expect(updatedCase?.npoVerified).toBe(true);
    expect(updatedCase?.labsVerified).toBe(true);
    expect(updatedCase?.bloodProductsVerified).toBe(true);
    expect(updatedCase?.hardwareVerified).toBe(true);
    expect(updatedCase?.keptForTomorrow).toBe(true);
    expect(updatedCase?.admissionCardUpdated).toBe(true);
    expect(updatedCase?.codeAdditionStatus).toBe("Added");
    expect(updatedCase?.screenedBy).toBe("Dr. Neel Yadav");
  });
});
