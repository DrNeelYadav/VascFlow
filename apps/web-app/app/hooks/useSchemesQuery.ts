import { useQuery } from "@tanstack/react-query";
import {
  schemesService,
  type SchemeRecord,
} from "../services/schemesService";

/**
 * Custom TanStack Query hook to fetch Rajasthan Government Health Schemes & tariffs.
 * Key: ['schemes']
 */
export function useSchemes() {
  return useQuery({
    queryKey: ["schemes"],
    queryFn: () => schemesService.fetchSchemes<SchemeRecord>(),
    staleTime: 5 * 60 * 1000,
  });
}
