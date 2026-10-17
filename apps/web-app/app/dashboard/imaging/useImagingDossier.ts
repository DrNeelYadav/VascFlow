"use client";

import { useState, useMemo, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { GOLD_STANDARD_1090_CASES } from "@/app/lib/realData/goldStandard1090Cases";
import type { RealSmsPatientCase } from "@/app/lib/realData/smsCathLabRealData";

export type ImagingTab = "cine" | "opnote" | "discharge" | "horos";

export function useImagingDossier() {
  let searchParams: URLSearchParams | null = null;
  let router: any = null;
  try {
    searchParams = useSearchParams();
    router = useRouter();
  } catch {
    // Non-Next SSR testing environment fallback
  }

  const caseIdParam = searchParams?.get("caseId") || searchParams?.get("case") || null;
  const [activeTab, setActiveTab] = useState<ImagingTab>("cine");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Active Case Lookup
  const activeCase: RealSmsPatientCase = useMemo(() => {
    if (caseIdParam) {
      const found = GOLD_STANDARD_1090_CASES.find(
        (c) => c.dsaNo === caseIdParam || c.crNumber === caseIdParam || c.uhid === caseIdParam
      );
      if (found) return found;
    }
    return GOLD_STANDARD_1090_CASES[GOLD_STANDARD_1090_CASES.length - 1]; // Latest ground truth DSA #1090
  }, [caseIdParam]);

  // Search Results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return GOLD_STANDARD_1090_CASES.filter(
      (c) =>
        c.dsaNo?.toLowerCase().includes(q) ||
        c.patientName?.toLowerCase().includes(q) ||
        c.procedureName?.toLowerCase().includes(q) ||
        c.crNumber?.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [searchQuery]);

  const handleSelectCase = useCallback(
    (dsaNo: string) => {
      setSearchQuery("");
      setIsSearchOpen(false);
      if (router?.push) {
        router.push(`/dashboard/imaging?caseId=${dsaNo}`);
      }
    },
    [router]
  );

  return {
    caseIdParam,
    activeCase,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchOpen,
    setIsSearchOpen,
    handleSelectCase,
  };
}
