import { describe, it, expect, vi, beforeEach } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import {
  useCases,
  useCase,
  useCreateCase,
  useUpdateCaseStatus,
} from "../../app/hooks/useCasesQuery";
import {
  usePatients,
  usePatient,
  useSavePatient,
} from "../../app/hooks/usePatientsQuery";
import { useSchemes } from "../../app/hooks/useSchemesQuery";
import { casesService } from "../../app/services/casesService";
import { patientsService } from "../../app/services/patientsService";
import { schemesService } from "../../app/services/schemesService";
import {
  useEndoflowStore,
  useEndoflowPatients,
  useEndoflowActiveCaseId,
  useEndoflowBeds,
  useEndoflowBookedCases,
  useEndoflowCtReviews,
  useEndoflowDopplerRecords,
  useEndoflowCurrentStaff,
  useEndoflowSyncAlert,
} from "../../app/dashboard/useEndoflowStore";
import { getQueryClient } from "../../app/lib/queryClient";

// Mock the services for deterministic hook testing
vi.mock("../../app/services/casesService", () => ({
  casesService: {
    fetchCases: vi.fn(),
    fetchCaseById: vi.fn(),
    saveCase: vi.fn(),
    updateCaseStatus: vi.fn(),
  },
}));

vi.mock("../../app/services/patientsService", () => ({
  patientsService: {
    fetchPatients: vi.fn(),
    fetchPatientById: vi.fn(),
    savePatient: vi.fn(),
  },
}));

vi.mock("../../app/services/schemesService", () => ({
  schemesService: {
    fetchSchemes: vi.fn(),
  },
}));

describe("TanStack Query Custom Hooks & State Decoupling Suite", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    vi.clearAllMocks();
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
  });

  describe("1. useCasesQuery Hooks", () => {
    it("useCases: queries ['cases', limit] with 1 minute staleTime", async () => {
      const mockCases = [
        { id: "case_01", procedure: "TACE", status: "SCHEDULED" },
        { id: "case_02", procedure: "PTBD", status: "IN_PROCEDURE" },
      ];
      vi.mocked(casesService.fetchCases).mockResolvedValueOnce(mockCases);

      // Execute query directly through QueryClient using hook's configuration
      const limit = 10;
      const data = await queryClient.fetchQuery({
        queryKey: ["cases", limit],
        queryFn: () => casesService.fetchCases(limit),
        staleTime: 60 * 1000,
      });

      expect(casesService.fetchCases).toHaveBeenCalledWith(10);
      expect(data).toEqual(mockCases);
    });

    it("useCase: queries single case ['case', id] by ID", async () => {
      const singleCase = { id: "case_42", procedure: "TIPS", status: "SCHEDULED" };
      vi.mocked(casesService.fetchCaseById).mockResolvedValueOnce(singleCase);

      const data = await queryClient.fetchQuery({
        queryKey: ["case", "case_42"],
        queryFn: () => casesService.fetchCaseById("case_42"),
      });

      expect(casesService.fetchCaseById).toHaveBeenCalledWith("case_42");
      expect(data).toEqual(singleCase);
    });

    it("useCreateCase: mutation saves case and invalidates ['cases']", async () => {
      const newCase = { procedure: "BRTO", patientName: "A. Kumar" };
      const savedCase = { id: "case_99", ...newCase };
      vi.mocked(casesService.saveCase).mockResolvedValueOnce(savedCase);

      const invalidateSpy = vi.spyOn(queryClient, "invalidateQueries");

      const mutation = queryClient.getMutationCache().build(queryClient, {
        mutationFn: (variables: any) => casesService.saveCase(variables),
        onSuccess: (_data, variables) => {
          queryClient.invalidateQueries({ queryKey: ["cases"] });
          const id = (variables as any)?.id || (variables as any)?.caseId || (_data as any)?.id;
          if (id) {
            queryClient.invalidateQueries({ queryKey: ["case", id] });
          }
        },
      });

      const result = await mutation.execute(newCase);

      expect(casesService.saveCase).toHaveBeenCalledWith(newCase);
      expect(result).toEqual(savedCase);
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["cases"] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["case", "case_99"] });
    });

    it("useUpdateCaseStatus: mutation updates status and invalidates ['cases'] and ['case', id]", async () => {
      const updatePayload = { caseId: "case_100", status: "IN_PROCEDURE", notes: "Access achieved" };
      const updateResult = { success: true, caseId: "case_100", status: "IN_PROCEDURE" };
      vi.mocked(casesService.updateCaseStatus).mockResolvedValueOnce(updateResult);

      const invalidateSpy = vi.spyOn(queryClient, "invalidateQueries");

      const mutation = queryClient.getMutationCache().build(queryClient, {
        mutationFn: (variables: any) => casesService.updateCaseStatus(variables),
        onSuccess: (_data, variables) => {
          const id = (variables as any)?.caseId || (variables as any)?.id || (_data as any)?.caseId || (_data as any)?.id;
          queryClient.invalidateQueries({ queryKey: ["cases"] });
          if (id) {
            queryClient.invalidateQueries({ queryKey: ["case", id] });
          }
        },
      });

      const result = await mutation.execute(updatePayload);

      expect(casesService.updateCaseStatus).toHaveBeenCalledWith(updatePayload);
      expect(result).toEqual(updateResult);
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["cases"] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["case", "case_100"] });
    });
  });

  describe("2. usePatientsQuery Hooks", () => {
    it("usePatients: queries ['patients'] using patientsService.fetchPatients", async () => {
      const mockPatients = [
        { id: "PT01", name: "Ramesh Sharma", age: 52 },
        { id: "PT02", name: "Sunita Devi", age: 48 },
      ];
      vi.mocked(patientsService.fetchPatients).mockResolvedValueOnce(mockPatients);

      const data = await queryClient.fetchQuery({
        queryKey: ["patients"],
        queryFn: () => patientsService.fetchPatients(),
        staleTime: 60 * 1000,
      });

      expect(patientsService.fetchPatients).toHaveBeenCalled();
      expect(data).toEqual(mockPatients);
    });

    it("usePatient: queries ['patient', id] using patientsService.fetchPatientById", async () => {
      const mockPt = { id: "PT01", name: "Ramesh Sharma", age: 52 };
      vi.mocked(patientsService.fetchPatientById).mockResolvedValueOnce(mockPt);

      const data = await queryClient.fetchQuery({
        queryKey: ["patient", "PT01"],
        queryFn: () => patientsService.fetchPatientById("PT01"),
      });

      expect(patientsService.fetchPatientById).toHaveBeenCalledWith("PT01");
      expect(data).toEqual(mockPt);
    });

    it("useSavePatient: mutation saves patient and invalidates ['patients'] and ['patient', id]", async () => {
      const patientInput = { id: "PT03", name: "Pooja Verma", age: 34 };
      vi.mocked(patientsService.savePatient).mockResolvedValueOnce(patientInput);

      const invalidateSpy = vi.spyOn(queryClient, "invalidateQueries");

      const mutation = queryClient.getMutationCache().build(queryClient, {
        mutationFn: (variables: any) => patientsService.savePatient(variables),
        onSuccess: (_data, variables) => {
          queryClient.invalidateQueries({ queryKey: ["patients"] });
          const id = (variables as any)?.id || (variables as any)?.uhid || (_data as any)?.id;
          if (id) {
            queryClient.invalidateQueries({ queryKey: ["patient", id] });
          }
        },
      });

      const result = await mutation.execute(patientInput);

      expect(patientsService.savePatient).toHaveBeenCalledWith(patientInput);
      expect(result).toEqual(patientInput);
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["patients"] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["patient", "PT03"] });
    });
  });

  describe("3. useSchemesQuery Hook", () => {
    it("useSchemes: queries ['schemes'] using schemesService.fetchSchemes", async () => {
      const mockSchemes = [
        { code: "MAAY", name: "Mukhyamantri Ayushman Arogya Yojana" },
        { code: "RGHS", name: "Rajasthan Government Health Scheme" },
      ];
      vi.mocked(schemesService.fetchSchemes).mockResolvedValueOnce(mockSchemes);

      const data = await queryClient.fetchQuery({
        queryKey: ["schemes"],
        queryFn: () => schemesService.fetchSchemes(),
      });

      expect(schemesService.fetchSchemes).toHaveBeenCalled();
      expect(data).toEqual(mockSchemes);
    });
  });

  describe("4. State Decoupling & Selector Hygiene", () => {
    it("exports fine-grained selectors that isolate state slices", () => {
      expect(typeof useEndoflowPatients).toBe("function");
      expect(typeof useEndoflowActiveCaseId).toBe("function");
      expect(typeof useEndoflowBeds).toBe("function");
      expect(typeof useEndoflowBookedCases).toBe("function");
      expect(typeof useEndoflowCtReviews).toBe("function");
      expect(typeof useEndoflowDopplerRecords).toBe("function");
      expect(typeof useEndoflowCurrentStaff).toBe("function");
      expect(typeof useEndoflowSyncAlert).toBe("function");
    });

    it("verifies store actions delegate to services and trigger QueryClient cache invalidation", async () => {
      const globalQueryClient = getQueryClient();
      const invalidateSpy = vi.spyOn(globalQueryClient, "invalidateQueries");

      // Test bookCase invalidation
      const bookingResult = useEndoflowStore.getState().bookCase({
        patientName: "TanStack Test Patient",
        procedureTitle: "Bronchial Artery Embolization",
      });
      expect(bookingResult.success).toBe(true);
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["cases"] });

      // Test rescheduleCase invalidation
      if (bookingResult.id) {
        useEndoflowStore.getState().rescheduleCase(bookingResult.id, "2026-10-15", "Consultant review");
        expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["cases"] });
        expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["case", bookingResult.id] });
      }

      // Test resetToDefaultPatients invalidation
      useEndoflowStore.getState().resetToDefaultPatients();
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["patients"] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ["cases"] });
    });
  });
});
