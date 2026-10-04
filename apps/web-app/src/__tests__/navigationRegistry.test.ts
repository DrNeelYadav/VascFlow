import { describe, it, expect } from "vitest";
import {
  WORKSPACES,
  ADMIN_ENTRY,
  ALL_MEMBER_HREFS,
  getWorkspaceForPath,
  isWorkspaceActive,
} from "@/app/lib/navigation";

describe("navigation registry", () => {
  it("keeps every route reachable from at least one slot", () => {
    // Regression guard: four pages (cath-lab-masters, doppler, hardware,
    // publications) were previously orphaned - built, routed, and linked from
    // nothing. Every dashboard page must now appear in the registry.
    const appRoutes = [
      "calendar",
      "op-clinic",
      "operative-notes",
      "logbook",
      "imaging",
      "schemes-correlation",
      "publications",
    ].map((slug) => `/dashboard/${slug}`);

    const orphans = appRoutes.filter((route) => !ALL_MEMBER_HREFS.includes(route));
    expect(orphans).toEqual([]);
  });

  it("has no duplicate destinations", () => {
    expect(new Set(ALL_MEMBER_HREFS).size).toBe(ALL_MEMBER_HREFS.length);
  });

  it("points each slot at a member it actually contains", () => {
    for (const w of WORKSPACES) {
      expect(w.members.map((m) => m.href)).toContain(w.href);
    }
  });

  it("keeps admin outside the clinical workflow", () => {
    expect(ALL_MEMBER_HREFS).not.toContain(ADMIN_ENTRY.href);
  });

  it("resolves the owning workspace for every member", () => {
    for (const w of WORKSPACES) {
      for (const m of w.members) {
        expect(getWorkspaceForPath(m.href)?.id).toBe(w.id);
      }
    }
  });

  it("resolves nested detail routes to their parent member", () => {
    expect(getWorkspaceForPath("/dashboard/operative-notes/PT01")?.id).toBe("documentation");
  });

  it("prefers the longest matching route over a shorter sibling", () => {
    expect(getWorkspaceForPath("/dashboard/operative-notes")?.id).toBe("documentation");
  });

  it("returns no workspace for the bare dashboard index", () => {
    expect(getWorkspaceForPath("/dashboard")).toBeNull();
  });

  it("marks a slot active for all of its members", () => {
    const today = WORKSPACES.find((w) => w.id === "today")!;
    for (const m of today.members) {
      expect(isWorkspaceActive(today, m.href)).toBe(true);
    }
  });

  it("does not mark a slot active for an unrelated route", () => {
    const today = WORKSPACES.find((w) => w.id === "today")!;
    expect(isWorkspaceActive(today, "/dashboard/logbook")).toBe(false);
  });

  it("orders the workflow the way a clinician moves through a case", () => {
    expect(WORKSPACES.filter((w) => !w.secondary).map((w) => w.id)).toEqual([
      "today",
      "clinic",
      "documentation",
      "logbook",
      "suite",
      "library",
      "research",
    ]);
  });

  it("gives every workspace a short label for the mobile dock", () => {
    for (const w of WORKSPACES) {
      expect(w.shortLabel.length).toBeGreaterThan(0);
      expect(w.shortLabel.length).toBeLessThanOrEqual(8);
    }
  });
});
