import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@vascule/db";
import { SCHEME_PACKAGES, type SchemePackage } from "@vascule/feature-scheme-billing";
import { db } from "@/app/lib/firebase";
import {
  collection,
  query as fsQuery,
  where as fsWhere,
  getDocs,
  limit as fsLimit,
} from "firebase/firestore";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = (searchParams.get("q") || searchParams.get("query") || "").trim().toLowerCase();
    const scheme = (searchParams.get("scheme") || "ALL").toUpperCase();
    const specialty = (searchParams.get("specialty") || "ALL").trim();
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "25", 10) || 25));

    let total = 0;
    let packages: SchemePackage[] = [];
    let querySuccess = false;

    // 1. Attempt Firestore Collection Query with prefix matching (Serverless / App Hosting)
    const isTest = process.env.NODE_ENV === "test";
    try {
      const schemesRef = collection(db, "schemes");
      const constraints: any[] = [];

      if (scheme === "MAAY" || scheme === "RGHS") {
        constraints.push(fsWhere("scheme", "==", scheme));
      }
      if (query) {
        // Firestore prefix matching on packageCode
        constraints.push(fsWhere("packageCode", ">=", query.toUpperCase()));
        constraints.push(fsWhere("packageCode", "<=", query.toUpperCase() + "\uf8ff"));
      }
      constraints.push(fsLimit(limit));

      const q = fsQuery(schemesRef, ...constraints);
      const snap = await Promise.race([
        getDocs(q),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Firestore timeout")), isTest ? 300 : 3000)
        ),
      ]);

      if (!snap.empty) {
        packages = snap.docs.map((doc) => doc.data() as SchemePackage);
        total = packages.length;
        querySuccess = true;
      }
    } catch {
      // Fallback to PostgreSQL or static SCHEME_PACKAGES catalog
    }

    // 2. Attempt PostgreSQL Query via Prisma (if DATABASE_URL is configured)
    if (!querySuccess && process.env.DATABASE_URL) {
      try {
        const where: Record<string, unknown> = {};
        if (scheme === "MAAY" || scheme === "RGHS") {
          where.scheme = scheme;
        }
        if (specialty && specialty !== "ALL") {
          where.specialty = { equals: specialty, mode: "insensitive" };
        }
        if (query) {
          where.OR = [
            { packageCode: { contains: query, mode: "insensitive" } },
            { packageName: { contains: query, mode: "insensitive" } },
            { specialty: { contains: query, mode: "insensitive" } },
          ];
        }

        const count = await prisma.schemePackage.count({ where });
        if (count > 0) {
          const rows = await prisma.schemePackage.findMany({
            where,
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { packageCode: "asc" },
          });

          total = count;
          packages = rows.map((r) => ({
            packageCode: r.packageCode,
            packageName: r.packageName,
            scheme: r.scheme as "MAAY" | "RGHS",
            specialty: r.specialty,
            baseTariffINR: r.baseTariffINR,
            nonNabhTariffINR: r.nonNabhTariffINR ?? undefined,
            implantsIncluded: r.implantsIncluded,
            authorizedImplants: (r.authorizedImplants as any) || [],
            preAuthRequired: r.preAuthRequired,
            requiredDocuments: r.requiredDocuments || [],
          }));
          querySuccess = true;
        }
      } catch {
        querySuccess = false;
      }
    }

    // 3. High-Performance In-Memory Fallback
    if (!querySuccess) {
      let filtered = SCHEME_PACKAGES;
      if (scheme === "MAAY" || scheme === "RGHS") {
        filtered = filtered.filter((p) => p.scheme === scheme);
      }
      if (specialty && specialty !== "ALL") {
        filtered = filtered.filter((p) => p.specialty.toLowerCase() === specialty.toLowerCase());
      }
      if (query) {
        filtered = filtered.filter(
          (p) =>
            p.packageCode.toLowerCase().includes(query) ||
            p.packageName.toLowerCase().includes(query) ||
            p.specialty.toLowerCase().includes(query)
        );
      }

      total = filtered.length;
      const start = (page - 1) * limit;
      packages = filtered.slice(start, start + limit);
    }

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json(
      {
        packages,
        pagination: {
          total,
          page,
          limit,
          totalPages,
          hasMore: page < totalPages,
        },
        source: querySuccess ? "firestore_or_postgres" : "in-memory-master",
      },
      {
        headers: {
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to query scheme packages", details: message },
      { status: 500 }
    );
  }
}
