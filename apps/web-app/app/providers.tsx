"use client";

import React, { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { getQueryClient } from "./lib/queryClient";

export interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Enterprise Application Providers wrapping Next.js App Router in TanStack Query.
 * Maintains an isolated query cache and provides the verified Auth.js session.
 */
export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  );
}

