"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Enterprise Application Providers wrapping Next.js App Router in TanStack Query.
 * Maintains an isolated QueryClient instance per browser session to prevent SSR state leaks.
 */
export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute standard cache freshness
            gcTime: 5 * 60 * 1000, // 5 minutes garbage collection window
            retry: 2,
            refetchOnWindowFocus: false, // Critical for surgical workstations to prevent disruptive updates
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
