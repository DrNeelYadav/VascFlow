import { QueryClient } from "@tanstack/react-query";

let defaultQueryClient: QueryClient | null = null;

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute standard cache freshness
        gcTime: 5 * 60 * 1000, // 5 minutes garbage collection window
        retry: 2,
        refetchOnWindowFocus: false, // Critical for surgical workstations to prevent disruptive updates
      },
    },
  });
}

/**
 * Returns the active QueryClient singleton (or instantiates a resilient fallback).
 */
export function getQueryClient(): QueryClient {
  if (!defaultQueryClient) {
    defaultQueryClient = createQueryClient();
  }
  return defaultQueryClient;
}

/**
 * Injects or resets the QueryClient instance (useful for testing and SSR resets).
 */
export function setQueryClient(client: QueryClient | null): void {
  defaultQueryClient = client;
}
