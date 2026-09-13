import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type VasculeUiTheme = "oled-cobalt" | "google-light";

export interface VasculeState {
  activePatientId: string | null;
  uiTheme: VasculeUiTheme;
  isSidebarOpen: boolean;

  // Actions
  setActivePatientId: (id: string | null) => void;
  setUiTheme: (theme: VasculeUiTheme) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  resetStore: () => void;
}

const initialState = {
  activePatientId: null,
  uiTheme: "oled-cobalt" as VasculeUiTheme,
  isSidebarOpen: true,
};

export const useVasculeStore = create<VasculeState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setActivePatientId: (id: string | null) =>
          set(
            { activePatientId: id },
            false,
            "vascule/setActivePatientId"
          ),

        setUiTheme: (theme: VasculeUiTheme) =>
          set(
            { uiTheme: theme },
            false,
            "vascule/setUiTheme"
          ),

        toggleSidebar: () =>
          set(
            (state) => ({ isSidebarOpen: !state.isSidebarOpen }),
            false,
            "vascule/toggleSidebar"
          ),

        setSidebarOpen: (isOpen: boolean) =>
          set(
            { isSidebarOpen: isOpen },
            false,
            "vascule/setSidebarOpen"
          ),

        resetStore: () =>
          set(
            { ...initialState },
            false,
            "vascule/resetStore"
          ),
      }),
      {
        name: "vascule-os-storage",
        partialize: (state) => ({
          activePatientId: state.activePatientId,
          uiTheme: state.uiTheme,
          isSidebarOpen: state.isSidebarOpen,
        }),
      }
    ),
    {
      name: "VasculeOS_GlobalStore",
      enabled: process.env.NODE_ENV !== "production",
    }
  )
);
