import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  patientsService,
  type PatientRecord,
} from "../services/patientsService";

/**
 * Custom TanStack Query hook to fetch patient records.
 * Key: ['patients'] | StaleTime: 1 minute
 */
export function usePatients(limit?: number) {
  return useQuery({
    queryKey: ["patients"],
    queryFn: () => patientsService.fetchPatients<PatientRecord>(limit),
    staleTime: 60 * 1000,
  });
}

/**
 * Custom TanStack Query hook to fetch a single patient record by ID.
 * Key: ['patient', id]
 */
export function usePatient(id: string) {
  return useQuery({
    queryKey: ["patient", id],
    queryFn: () => patientsService.fetchPatientById<PatientRecord>(id),
    enabled: Boolean(id),
  });
}

/**
 * Custom TanStack Query mutation to save / update a patient record.
 * Invalidates ['patients'] query cache on success.
 */
export function useSavePatient() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (patientData: Partial<PatientRecord> & Record<string, unknown>) =>
      patientsService.savePatient(patientData),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["patients"] });
      const id =
        (variables as any)?.id ||
        (variables as any)?.uhid ||
        (_data as any)?.id;
      if (id) {
        queryClient.invalidateQueries({ queryKey: ["patient", id] });
      }
    },
  });
}
