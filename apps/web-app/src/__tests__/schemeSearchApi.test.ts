import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "../../app/api/schemes/search/route";

describe("/api/schemes/search Route Handler", () => {
  it("returns paginated scheme packages with default limit", async () => {
    const req = new NextRequest("http://localhost:3001/api/schemes/search?limit=10");
    const res = await GET(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.packages).toBeInstanceOf(Array);
    expect(data.packages.length).toBeLessThanOrEqual(10);
    expect(data.pagination.page).toBe(1);
    expect(data.pagination.limit).toBe(10);
    expect(data.pagination.total).toBeGreaterThan(0);
  });

  it("filters packages by scheme query parameter (MAAY)", async () => {
    const req = new NextRequest("http://localhost:3001/api/schemes/search?scheme=MAAY&limit=5");
    const res = await GET(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.packages.length).toBeGreaterThan(0);
    for (const pkg of data.packages) {
      expect(pkg.scheme).toBe("MAAY");
    }
  });

  it("filters packages by search query", async () => {
    const req = new NextRequest("http://localhost:3001/api/schemes/search?q=embolization&limit=5");
    const res = await GET(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.packages.length).toBeGreaterThan(0);
  });
});
