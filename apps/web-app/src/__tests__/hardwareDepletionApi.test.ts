import { describe, it, expect, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("@/auth", () => ({
  auth: vi.fn().mockResolvedValue({ user: { id: "test-user", email: "attending@vascflow.org" } }),
}));

import { POST } from "../../app/api/inventory/use/route";

describe("/api/inventory/use Route Handler", () => {
  it("rejects payload missing caseId or items array", async () => {
    const req = new NextRequest("http://localhost:3000/api/inventory/use", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseId: "" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const data = await res.json();
    expect(data.error).toContain("Invalid payload");
  });

  it("atomically depletes hardware kit items and logs audit usage", async () => {
    const req = new NextRequest("http://localhost:3000/api/inventory/use", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        caseId: "DSA-2026-8821",
        patientCrNo: "CR-904128",
        consultantStaffId: "dr_meenu_bagarhatta",
        items: [
          { sku: "RMSCL-SHEATH-6F", name: "Terumo 6F Sheath", quantity: 1 },
          { sku: "RMSCL-WIRE-035", name: "Terumo 0.035 Glidewire", quantity: 1 },
          { sku: "RMSCL-CATH-5F", name: "Cordis 5F Cobra", quantity: 1 },
        ],
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.caseId).toBe("DSA-2026-8821");
    expect(data.depletedCount).toBe(3);
    expect(data.depletedItems).toHaveLength(3);
    expect(data.depletedItems[0].sku).toBe("RMSCL-SHEATH-6F");
    expect(data.depletedItems[0].quantityUsed).toBe(1);
    expect(data.timestamp).toBeDefined();
  }, 15000);
});
