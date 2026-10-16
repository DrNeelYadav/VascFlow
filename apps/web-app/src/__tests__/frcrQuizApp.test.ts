import { describe, it, expect } from "vitest";
import { isNeelYadavUser } from "@/app/lib/auth-guards";
import { WORKSPACES, getWorkspaceForPath } from "@/app/lib/navigation";
import { FRCR_MODULES, MODULE_QUESTIONS } from "@/app/dashboard/quiz/data";
import type { FrcrModuleKey } from "@/app/dashboard/quiz/types";

describe("FRCR 2A Quiz App & Privacy Access Control", () => {
  describe("Personal Privacy Guard (isNeelYadavUser)", () => {
    it("permits Dr. Neel Yadav by staff code DM01", () => {
      expect(isNeelYadavUser({ code: "DM01", name: "Dr. Neel Yadav" })).toBe(true);
      expect(isNeelYadavUser({ roleCode: "DM01" })).toBe(true);
    });

    it("permits Dr. Neel Yadav by personal or institutional email", () => {
      expect(isNeelYadavUser({ email: "nyadav19988@gmail.com" })).toBe(true);
      expect(isNeelYadavUser({ email: "dr.neel@sms.rajasthan.gov.in" })).toBe(true);
    });

    it("permits Dr. Neel Yadav by full name", () => {
      expect(isNeelYadavUser({ name: "Dr. Neel Yadav" })).toBe(true);
      expect(isNeelYadavUser({ name: "neel yadav" })).toBe(true);
    });

    it("STRICTLY forbids other clinical staff (Faculty, Fellows, Residents, Nurses, Techs)", () => {
      expect(isNeelYadavUser({ code: "FC01", name: "Dr. Meenu Bagarhatta" })).toBe(false);
      expect(isNeelYadavUser({ code: "FC02", name: "Dr. Naresh Mangalhara" })).toBe(false);
      expect(isNeelYadavUser({ code: "DM02", name: "Dr. Nilesh Sinha" })).toBe(false);
      expect(isNeelYadavUser({ code: "SR01", name: "Dr. Pragati" })).toBe(false);
      expect(isNeelYadavUser({ code: "NO01", name: "Sister Sunita" })).toBe(false);
      expect(isNeelYadavUser({ code: "TC01", name: "Mr. JP" })).toBe(false);
      expect(isNeelYadavUser({ code: "ADMIN01", name: "Hospital Admin" })).toBe(false);
      expect(isNeelYadavUser(null)).toBe(false);
      expect(isNeelYadavUser(undefined)).toBe(false);
    });
  });

  describe("Workspace Navigation Registry", () => {
    it("flags the quiz workspace as privateNeelOnly", () => {
      const quizWorkspace = WORKSPACES.find((w) => w.id === "quiz");
      expect(quizWorkspace).toBeDefined();
      expect(quizWorkspace?.privateNeelOnly).toBe(true);
      expect(quizWorkspace?.href).toBe("/dashboard/quiz");
      expect(quizWorkspace?.icon).toBe("quiz");
    });

    it("resolves /dashboard/quiz to the quiz workspace", () => {
      expect(getWorkspaceForPath("/dashboard/quiz")?.id).toBe("quiz");
    });
  });

  describe("FRCR 2A Question Bank Datasets (Drive Modules)", () => {
    const modules: FrcrModuleKey[] = ["PAEDS", "MSK", "CHEST", "GUT", "GIT", "CNS"];

    it("contains all 6 modules with accurate metadata", () => {
      for (const mod of modules) {
        expect(FRCR_MODULES[mod]).toBeDefined();
        expect(FRCR_MODULES[mod].count).toBeGreaterThan(200);
      }
    });

    it("verifies structure, 5 options and valid answers across all modules", () => {
      let totalQuestions = 0;
      for (const mod of modules) {
        const questions = MODULE_QUESTIONS[mod];
        expect(questions.length).toBeGreaterThan(200);
        totalQuestions += questions.length;

        // Spot check first 5 questions of each module
        for (const q of questions.slice(0, 5)) {
          expect(q.id).toMatch(new RegExp(`^${mod}-\\d{3}$`));
          expect(q.prompt).toBeTruthy();
          expect(q.options).toHaveLength(5);
          expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(q.correctAnswer).toBeLessThanOrEqual(4);
          expect(q.explanation).toBeTruthy();
        }
      }

      // Assert total question count across all 6 modules exceeds 1,700 questions
      expect(totalQuestions).toBeGreaterThan(1700);
    });
  });
});
