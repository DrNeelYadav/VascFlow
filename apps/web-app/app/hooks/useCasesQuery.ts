import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  casesService,
  type ProcedureCase,
  type UpdateCaseStatusParams,
} from "../services/casesService";

export interface UpdateCaseStatusVariables {
  caseId: string;
  status: string;
  notes?: string;
  isEmergencyOverride?: boolean;
  overrideReason?: string;
}

/**
 * Custom TanStack Query hook to fetch procedure cases list.
 * Key: ['cases', limit] | StaleTime: 1 minute
 */
export function useCases(limit?: number) {
  return useQuery({
    queryKey: ["cases", limit],
    queryFn: () => casesService.fetchCases<ProcedureCase>(limit),
    staleTime: 60 * 1000,
  });
}

/**
 * Custom TanStack Query hook to fetch a single procedure case by ID.
 * Key: ['case', id]
 */
export function useCase(id: string) {
  return useQuery({
    queryKey: ["case", id],
    queryFn: () => casesService.fetchCaseById<ProcedureCase>(id),
    enabled: Boolean(id),
  });
}

/**
 * Custom TanStack Query mutation to save / create a procedure case.
 * Invalidates ['cases'] query cache on success.
 */
export function useCreateCase() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (caseData: Partial<ProcedureCase> & Record<string, unknown>) =>
      casesService.saveCase(caseData),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
      const id = (variables as any)?.id || (variables as any)?.caseId || (_data as any)?.id;
      if (id) {
        queryClient.invalidateQueries({ queryKey: ["case", id] });
      }
    },
  });
}

/**
 * Custom TanStack Query mutation to update case status.
 * Invalidates ['cases'] and ['case', id] query caches on success.
 */
export function useUpdateCaseStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      variables: UpdateCaseStatusVariables | UpdateCaseStatusParams
    ) => casesService.updateCaseStatus(variables),
    onSuccess: (_data, variables) => {
      const id =
        (variables as any)?.caseId ||
        (variables as any)?.id ||
        (_data as any)?.caseId ||
        (_data as any)?.id;

      queryClient.invalidateQueries({ queryKey: ["cases"] });
      if (id) {
        queryClient.invalidateQueries({ queryKey: ["case", id] });
      }
    },
  });
}
