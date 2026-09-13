import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StaffRoleCode } from '../types/clinical';
import { STAFF_PERSONAS, useClinicalStore } from './useClinicalStore';

export interface AuthUser {
  name: string;
  role: string;
  roleCode: StaffRoleCode;
  email: string;
  dept: string;
}

interface AuthState {
  isAuthenticated: boolean;
  currentUser: AuthUser;
  isAuthenticating: boolean;
  login: (roleCode: StaffRoleCode, email?: string) => Promise<AuthUser>;
  logout: () => void;
}

const DEFAULT_USER: AuthUser = {
  name: STAFF_PERSONAS.DM01.name,
  role: STAFF_PERSONAS.DM01.role,
  roleCode: 'DM01',
  email: 'fellow.sharma@smsradiology.ac.in',
  dept: STAFF_PERSONAS.DM01.dept
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: true, // default logged-in session for seamless preview
      currentUser: DEFAULT_USER,
      isAuthenticating: false,

      login: async (roleCode: StaffRoleCode, email?: string) => {
        set({ isAuthenticating: true });
        // Simulate Google Workspace SSO verification
        await new Promise((resolve) => setTimeout(resolve, 600));

        const persona = STAFF_PERSONAS[roleCode] || STAFF_PERSONAS.DM01;
        const user: AuthUser = {
          name: persona.name,
          role: persona.role,
          roleCode,
          email: email || `${persona.name.toLowerCase().replace(/[^a-z]/g, '')}@smsradiology.ac.in`,
          dept: persona.dept
        };

        // Sync with clinical store activeRole
        useClinicalStore.getState().setActiveRole(roleCode);

        set({
          isAuthenticated: true,
          currentUser: user,
          isAuthenticating: false
        });

        return user;
      },

      logout: () => {
        set({
          isAuthenticated: false
        });
      }
    }),
    {
      name: 'sms-ir-auth-storage'
    }
  )
);
