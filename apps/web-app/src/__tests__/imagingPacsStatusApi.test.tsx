/**
 * PACS STATUS API CONTRACT.
 *
 * The viewer's entire honesty story runs through one route: /api/pacs/status.
 * It answers "is Orthanc up, and what does it hold", and the viewer renders its
 * empty and offline states straight from that answer. If this route lies, the
 * UI lies with it.
 *
 * The obligation under test is DEGRADE, DON'T THROW. Orthanc is a separate
 * process on the departmental PC and it is routinely stopped. A route that
 * throws there takes down the viewer shell; a route that returns
 * `reachable: false` lets the viewer say so in plain English.
 *
 * The shape asserted here is `PacsStatusResponse` from
 * app/api/pacs/status/route.ts. One field deserves comment: `studyCount` is
 * `number | null`, and `null` means UNMEASURABLE, not zero. The route is
 * explicit about this -- reporting 0 when the query never ran would claim the
 * PACS is empty, which is a different and stronger statement than "we could
 * not ask". These tests pin that distinction.
 *
 * global fetch is mocked per-URL, so the suite is deterministic and never
 * touches the real Orthanc instance on the workstation.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";

vi.mock("@/auth", () => ({
  auth: vi.fn().mockResolvedValue({
    user: { email: "dr.neel@sms.hospital.lan", id: "staff-001" },
  }),
}));

vi.mock("@vascule/db", () => ({
  logAuditTrail: vi.fn().mockResolvedValue({ id: "mock-audit-id" }),
  dispatchAuditTrailAsync: vi.fn(),
}));

type StatusRoute = { GET: (req: NextRequest) => Promise<Response> };

async function loadStatusRoute(): Promise<StatusRoute> {
  try {
    return (await import(
      /* @vite-ignore */ "../../app/api/pacs/status/route"
    )) as StatusRoute;
  } catch (cause) {
    throw new Error(
      `The PACS status route could not be loaded from ` +
        `"app/api/pacs/status/route.ts".\n  Underlying error: ` +
        `${cause instanceof Error ? cause.message : String(cause)}`,
    );
  }
}

/**
 * Named `jsonResponse`, not `json`, on purpose: a `const json = await res.json()`
 * inside a test body would otherwise shadow this helper for every arrow
 * function declared in the same block, and the mock would throw a temporal
 * dead zone ReferenceError instead of returning a response.
 */
function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Orthanc `/system` answering normally. */
const SYSTEM_OK = {
  Version: "1.13.0",
  Name: "SMS-IR-PACS",
  ApiVersion: 40401,
  DicomPort: 104,
};

/** The dicom-web plugin present, which is what makes a study query possible. */
const PLUGINS_OK = ["explorer.js", "dicom-web"];

/** Two studies returned by QIDO, in DICOMweb JSON shape. */
const STUDIES_OK = [
  { "0020000D": { vr: "UI", Value: ["1.2.840.10008.5.1.4.1.1.2.1"] } },
  { "0020000D": { vr: "UI", Value: ["1.2.840.10008.5.1.4.1.1.2.2"] } },
];

/** Routes the mocked fetch by upstream URL so each probe gets its own answer. */
function mockUpstream(routes: {
  system?: () => Response;
  plugins?: () => Response;
  studies?: () => Response;
}): void {
  globalThis.fetch = vi.fn(async (input: unknown) => {
    const url = String(input);
    if (url.includes("/dicom-web/studies")) return routes.studies?.() ?? jsonResponse([], 200);
    if (url.endsWith("/plugins")) return routes.plugins?.() ?? jsonResponse(PLUGINS_OK, 200);
    if (url.endsWith("/system")) return routes.system?.() ?? jsonResponse(SYSTEM_OK, 200);
    return jsonResponse({ error: "unrouted" }, 404);
  }) as unknown as typeof fetch;
}

/** Every probe refuses the connection: Orthanc is stopped. */
function mockPacsDown(): void {
  globalThis.fetch = vi.fn().mockRejectedValue(
    new Error("connect ECONNREFUSED 127.0.0.1:8042"),
  ) as unknown as typeof fetch;
}

function statusRequest(): NextRequest {
  return new NextRequest("http://localhost:3000/api/pacs/status");
}

describe("PACS status API contract", () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env.ORTHANC_URL = "http://127.0.0.1:8042";
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  describe("when Orthanc is reachable", () => {
    it("returns a typed object with a reachable boolean", async () => {
      const { GET } = await loadStatusRoute();
      mockUpstream({});

      const res = await GET(statusRequest());
      const json = await res.json();

      expect(
        typeof json.reachable,
        `Status response must carry a boolean "reachable". Got: ${JSON.stringify(json)}`,
      ).toBe("boolean");
      expect(json.reachable).toBe(true);
    });

    it("reports the version it actually read off /system", async () => {
      const { GET } = await loadStatusRoute();
      mockUpstream({});

      const json = await (await GET(statusRequest())).json();

      expect(
        json.orthancVersion,
        `Version must come from the upstream response. Body: ${JSON.stringify(json)}`,
      ).toBe("1.13.0");
    });

    it("confirms the dicom-web plugin rather than assuming it", async () => {
      const { GET } = await loadStatusRoute();
      mockUpstream({});

      const json = await (await GET(statusRequest())).json();

      expect(
        json.dicomWebAvailable,
        `Plugin availability must be measured. Body: ${JSON.stringify(json)}`,
      ).toBe(true);
    });

    it("reports the study count the QIDO query actually returned", async () => {
      const { GET } = await loadStatusRoute();
      mockUpstream({ studies: () => jsonResponse(STUDIES_OK, 200) });

      const json = await (await GET(statusRequest())).json();

      expect(
        json.studyCount,
        `studyCount must be the length of the QIDO result. Body: ${JSON.stringify(json)}`,
      ).toBe(2);
    });

    it("reports zero for a genuinely empty but reachable PACS", async () => {
      const { GET } = await loadStatusRoute();
      mockUpstream({ studies: () => jsonResponse([], 200) });

      const json = await (await GET(statusRequest())).json();

      // Reachable AND empty is a real, established fact, and it is 0.
      expect(json.reachable).toBe(true);
      expect(
        json.studyCount,
        `An answered-and-empty PACS is a measured zero. Body: ${JSON.stringify(json)}`,
      ).toBe(0);
    });

    it("leaves the study count unmeasured when the plugin is absent", async () => {
      const { GET } = await loadStatusRoute();
      // Orthanc is up but dicom-web is not registered, so no query can run.
      mockUpstream({ plugins: () => jsonResponse(["explorer.js"], 200) });

      const json = await (await GET(statusRequest())).json();

      expect(json.reachable).toBe(true);
      expect(
        json.dicomWebAvailable,
        `An absent plugin must be reported as false. Body: ${JSON.stringify(json)}`,
      ).toBe(false);
      expect(
        json.studyCount,
        `No query ran, so the count must be null (unmeasurable), not 0. ` +
          `Body: ${JSON.stringify(json)}`,
      ).toBeNull();
    });
  });

  describe("when Orthanc is unreachable", () => {
    it("degrades to reachable:false rather than throwing", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const res = await GET(statusRequest());
      const json = await res.json();

      expect(
        json.reachable,
        `A refused connection must report reachable:false, not throw and not ` +
          `claim to be up. Body: ${JSON.stringify(json)}`,
      ).toBe(false);
    });

    it("does not throw out of the route handler", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      // A thrown error here surfaces as a 500 and a broken viewer shell. This
      // is the whole point of the suite.
      await expect(GET(statusRequest())).resolves.toBeDefined();
    });

    it("answers 200 so the viewer renders its offline state rather than an error page", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const res = await GET(statusRequest());

      // A PACS being down is a state the viewer reports, not an HTTP failure.
      // 503 would push the viewer into an error branch instead of its
      // "unreachable" branch.
      expect(
        res.status,
        `Unreachable PACS must still answer 200 with reachable:false so the ` +
          `viewer renders its honest offline state. Got HTTP ${res.status}.`,
      ).toBe(200);
    });

    it("leaves the study count unmeasured instead of claiming the PACS is empty", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const json = await (await GET(statusRequest())).json();

      expect(
        json.studyCount,
        `An unreachable PACS holds no known count. Reporting 0 would claim the ` +
          `PACS was queried and found empty, which never happened. ` +
          `Body: ${JSON.stringify(json)}`,
      ).toBeNull();
    });

    it("leaves every unmeasured field null rather than guessing", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const json = await (await GET(statusRequest())).json();

      // Nothing answered, so nothing is known. A version string here would be
      // invented.
      expect(json.orthancVersion, `Version must stay null. Body: ${JSON.stringify(json)}`).toBeNull();
      expect(json.orthancName, `Name must stay null. Body: ${JSON.stringify(json)}`).toBeNull();
      expect(json.plugins, `Plugins must stay null. Body: ${JSON.stringify(json)}`).toBeNull();
      expect(
        json.dicomWebAvailable,
        `Plugin availability must stay null. Body: ${JSON.stringify(json)}`,
      ).toBeNull();
    });

    it("explains the outage in plain English for the clinician", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const json = await (await GET(statusRequest())).json();

      expect(
        typeof json.message === "string" && json.message.length > 20,
        `The status route must carry a human-readable message the viewer can ` +
          `render verbatim. Body: ${JSON.stringify(json)}`,
      ).toBe(true);
      expect(
        /orthanc|not answering|start/i.test(json.message),
        `The outage message must name what is wrong and what to do. ` +
          `Got: ${json.message}`,
      ).toBe(true);
    });

    it("stamps the probe time so the viewer can show staleness", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const json = await (await GET(statusRequest())).json();

      expect(
        typeof json.checkedAt === "string" && !Number.isNaN(Date.parse(json.checkedAt)),
        `checkedAt must be an ISO timestamp even when the probe failed, so the ` +
          `viewer can show how stale the state is. Body: ${JSON.stringify(json)}`,
      ).toBe(true);
    });

    it("never invents a study or patient record in the degraded response", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const json = await (await GET(statusRequest())).json();
      const serialised = JSON.stringify(json);

      // The failure mode this guards: an unreachable PACS returning a bundled
      // placeholder study so the UI has something to draw.
      for (const token of ["ANON_", "patientName", "studyDescription", "SAMPLE", "DEMO"]) {
        expect(
          serialised,
          `Degraded status response contains "${token}". Body: ${serialised}`,
        ).not.toContain(token);
      }
      expect(
        Array.isArray(json.studies) ? json.studies : [],
        `A degraded response must not carry a study array. Body: ${serialised}`,
      ).toEqual([]);
    });

    it("does not echo the PACS address back to the browser", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const json = await (await GET(statusRequest())).json();
      const serialised = JSON.stringify(json);

      // The route is explicit that the browser is never meant to learn where
      // the PACS lives; the status bar renders the state, not the address.
      expect(
        serialised,
        `Status response leaked the PACS address to the browser. Body: ${serialised}`,
      ).not.toMatch(/127\.0\.0\.1|localhost|:8042/);
    });
  });

  describe("when Orthanc answers with an error status", () => {
    it("treats a 500 from /system as unreachable", async () => {
      const { GET } = await loadStatusRoute();
      mockUpstream({ system: () => jsonResponse({ error: "Internal Server Error" }, 500) });

      const json = await (await GET(statusRequest())).json();

      // A 500 is still an unreachable PACS as far as the viewer is concerned.
      // Reporting reachable:true would render an empty worklist as healthy.
      expect(
        json.reachable,
        `A 500 from Orthanc must not read as reachable. Body: ${JSON.stringify(json)}`,
      ).toBe(false);
    });

    it("treats a timeout as unreachable", async () => {
      const { GET } = await loadStatusRoute();
      globalThis.fetch = vi.fn().mockRejectedValue(
        new DOMException("The operation was aborted due to timeout", "TimeoutError"),
      ) as unknown as typeof fetch;

      const json = await (await GET(statusRequest())).json();

      expect(
        json.reachable,
        `A timeout must read as unreachable. Body: ${JSON.stringify(json)}`,
      ).toBe(false);
    });

    it("stays reachable when only the plugin probe fails, and says so", async () => {
      const { GET } = await loadStatusRoute();
      // /system works, /plugins does not. Orthanc is up; DICOMweb is unconfirmed.
      mockUpstream({ plugins: () => jsonResponse({ error: "nope" }, 500) });

      const json = await (await GET(statusRequest())).json();

      expect(
        json.reachable,
        `Orthanc answered /system, so it is reachable. Body: ${JSON.stringify(json)}`,
      ).toBe(true);
      expect(
        json.dicomWebAvailable,
        `An unreadable plugin list must be null (unconfirmed), not false. ` +
          `Body: ${JSON.stringify(json)}`,
      ).toBeNull();
      expect(
        json.studyCount,
        `No query ran, so the count must be null. Body: ${JSON.stringify(json)}`,
      ).toBeNull();
    });
  });

  describe("response shape", () => {
    it("returns JSON", async () => {
      const { GET } = await loadStatusRoute();
      mockPacsDown();

      const res = await GET(statusRequest());
      expect(res.headers.get("content-type")).toMatch(/application\/json/);
    });

    it("refuses an unauthenticated caller with 401, not an empty status", async () => {
      // An empty-looking status body to a signed-out caller would be
      // indistinguishable from a PACS that holds nothing.
      const { auth } = await import("@/auth");
      vi.mocked(auth).mockResolvedValueOnce(null as never);

      const { GET } = await loadStatusRoute();
      mockUpstream({});

      const res = await GET(statusRequest());
      expect(
        res.status,
        `An unauthenticated caller must get 401 rather than a status object ` +
          `that reads like an empty PACS. Got HTTP ${res.status}.`,
      ).toBe(401);
    });
  });
});