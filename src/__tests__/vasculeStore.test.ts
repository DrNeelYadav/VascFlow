import { describe, it, expect, beforeEach, beforeAll } from "vitest";
import { useVasculeStore } from "@vascule/ui-kit";

const storageMock: Record<string, string> = {};

beforeAll(() => {
  if (typeof globalThis.localStorage === "undefined" || !globalThis.localStorage.clear) {
    (globalThis as any).localStorage = {
      getItem: (key: string) => storageMock[key] ?? null,
      setItem: (key: string, val: string) => {
        storageMock[key] = String(val);
      },
      removeItem: (key: string) => {
        delete storageMock[key];
      },
      clear: () => {
        for (const k of Object.keys(storageMock)) {
          delete storageMock[k];
        }
      },
      key: (i: number) => Object.keys(storageMock)[i] ?? null,
      get length() {
        return Object.keys(storageMock).length;
      },
    };
  }
});

describe("Vascule OS Client State - Zustand Store Suite", () => {
  beforeEach(() => {
    useVasculeStore.getState().resetStore();
    globalThis.localStorage.clear();
  });

  it("initializes with default clinical workstation state", () => {
    const state = useVasculeStore.getState();

    expect(state.activePatientId).toBeNull();
    expect(state.uiTheme).toBe("oled-cobalt");
    expect(state.isSidebarOpen).toBe(true);
  });

  it("updates active patient ID across procedural navigation", () => {
    const { setActivePatientId } = useVasculeStore.getState();

    setActivePatientId("IR-2026-9901");
    expect(useVasculeStore.getState().activePatientId).toBe("IR-2026-9901");

    setActivePatientId(null);
    expect(useVasculeStore.getState().activePatientId).toBeNull();
  });

  it("toggles and explicitly sets UI theme between OLED and Google Workspace light mode", () => {
    const { setUiTheme } = useVasculeStore.getState();

    setUiTheme("google-light");
    expect(useVasculeStore.getState().uiTheme).toBe("google-light");

    setUiTheme("oled-cobalt");
    expect(useVasculeStore.getState().uiTheme).toBe("oled-cobalt");
  });

  it("manages surgical sidebar collapsed state", () => {
    const { toggleSidebar, setSidebarOpen } = useVasculeStore.getState();

    expect(useVasculeStore.getState().isSidebarOpen).toBe(true);

    toggleSidebar();
    expect(useVasculeStore.getState().isSidebarOpen).toBe(false);

    toggleSidebar();
    expect(useVasculeStore.getState().isSidebarOpen).toBe(true);

    setSidebarOpen(false);
    expect(useVasculeStore.getState().isSidebarOpen).toBe(false);
  });

  it("resets store back to pristine initial state", () => {
    const { setActivePatientId, setUiTheme, setSidebarOpen, resetStore } =
      useVasculeStore.getState();

    setActivePatientId("PATIENT-999");
    setUiTheme("google-light");
    setSidebarOpen(false);

    resetStore();

    const state = useVasculeStore.getState();
    expect(state.activePatientId).toBeNull();
    expect(state.uiTheme).toBe("oled-cobalt");
    expect(state.isSidebarOpen).toBe(true);
  });
});
