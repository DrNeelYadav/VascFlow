import { NextRequest, NextResponse } from "next/server";
import { GOLD_STANDARD_1090_CASES } from "../../../lib/realData/goldStandard1090Cases";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../../lib/realData/smsMasterAnalysisCases";
import { matchWardFilter } from "../../../dashboard/logbook/wardFilterOptions";
import type { RealSmsPatientCase } from "../../../lib/realData/smsCathLabRealData";

const ALL_MASTER_CASES: RealSmsPatientCase[] =
  GOLD_STANDARD_1090_CASES?.length > 0 ? GOLD_STANDARD_1090_CASES : AUTHENTIC_SMS_MASTER_CASES;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = (searchParams.get("search") || "").trim().toLowerCase();
    const scheme = searchParams.get("scheme") || "ALL";
    const ward = searchParams.get("ward") || "ALL";
    const year = searchParams.get("year") || "ALL";
    const sort = searchParams.get("sort") || "newest";
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(200, Math.max(1, parseInt(searchParams.get("limit") || "50", 10)));
    const exportAll = searchParams.get("all") === "true";

    let filtered = ALL_MASTER_CASES;

    // 1. Text search
    if (search) {
      filtered = filtered.filter(
        (c) =>
          c.patientName.toLowerCase().includes(search) ||
          c.crNumber.toLowerCase().includes(search) ||
          c.diagnosis.toLowerCase().includes(search) ||
          c.procedureName.toLowerCase().includes(search) ||
          (c.dsaNo && c.dsaNo.toLowerCase().includes(search))
      );
    }

    // 2. Scheme filter
    if (scheme !== "ALL") {
      filtered = filtered.filter((c) => (c.schemeType || "").toUpperCase().includes(scheme.toUpperCase()));
    }

    // 3. Ward filter
    if (ward !== "ALL") {
      filtered = filtered.filter((c) => matchWardFilter(c.unit || "", ward));
    }

    // 4. Year filter
    if (year !== "ALL") {
      filtered = filtered.filter((c) => {
        const parts = (c.date || "").split(".");
        const y = parts.length === 3 ? parts[2] : "";
        return y.includes(year);
      });
    }

    // 5. Sort
    if (sort === "oldest") {
      filtered = [...filtered].reverse();
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit) || 1;

    // If exportAll, return complete filtered dataset
    if (exportAll) {
      return NextResponse.json({
        cases: filtered,
        total,
        page: 1,
        totalPages: 1,
      });
    }

    // Pagination slice
    const startIndex = (page - 1) * limit;
    const paginatedCases = filtered.slice(startIndex, startIndex + limit);

    return NextResponse.json(
      {
        cases: paginatedCases,
        total,
        page,
        totalPages,
        limit,
        summary: {
          totalArchive: ALL_MASTER_CASES.length,
          filteredCount: total,
        },
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to query historical cath-lab archive", detail: String(err) },
      { status: 500 }
    );
  }
}
