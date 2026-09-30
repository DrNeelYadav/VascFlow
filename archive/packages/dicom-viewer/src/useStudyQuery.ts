import { useQuery } from "@tanstack/react-query";
import type { StudyDetailResponse } from "./types";

/**
 * Fetches a DICOM study detail from the BFF proxy.
 * Route: GET /api/proxy/dicom/studies/{studyUID}
 * The BFF proxy forwards to the Golang dicom-service at :8082.
 */
async function fetchStudyDetail(
  studyUID: string,
): Promise<StudyDetailResponse> {
  const res = await fetch(`/api/proxy/dicom/studies/${studyUID}`, {
    credentials: "include",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(
      (errorBody as Record<string, string>).message ??
        `Failed to fetch study ${studyUID}: HTTP ${res.status}`,
    );
  }

  return res.json() as Promise<StudyDetailResponse>;
}

/**
 * TanStack React Query hook for fetching DICOM study metadata.
 *
 * @param studyUID - The DICOM Study Instance UID to fetch.
 * @param enabled  - Whether the query should execute (defaults to true when studyUID is truthy).
 */
export function useStudyQuery(studyUID: string, enabled?: boolean) {
  return useQuery<StudyDetailResponse, Error>({
    queryKey: ["dicom-study", studyUID],
    queryFn: () => fetchStudyDetail(studyUID),
    enabled: enabled ?? Boolean(studyUID),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}
