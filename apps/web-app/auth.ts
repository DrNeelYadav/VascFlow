import NextAuth, { type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * Clinical Role Tier derivation mapping clinical roles to governance tiers.
 */
export function deriveRoleTier(roleCode?: string): string {
  if (!roleCode) return "Staff";
  const code = roleCode.toUpperCase().trim();
  if (code === "ADMIN" || code.startsWith("CR")) return "Administrative";
  if (
    code.includes("FACULTY") ||
    code === "INTERVENTIONAL_RADIOLOGIST" ||
    code.startsWith("FC")
  ) {
    return "Faculty";
  }
  if (
    code.includes("RESIDENT") ||
    code.startsWith("DM") ||
    code.startsWith("SR") ||
    code === "DOCTOR"
  ) {
    return "Resident";
  }
  if (code.includes("NURSE") || code.startsWith("NO")) return "Nursing";
  if (code.includes("TECH") || code.startsWith("TC") || code === "RADIOLOGIST") {
    return "Technician";
  }
  return "Clinician";
}

/**
 * Institutional user profile returned by the internal Golang auth-service.
 */
export interface UpstreamUserProfile {
  id: string;
  institutionalEmail: string;
  fullName: string;
  roleCode: string;
  department: string;
  institutionId?: string;
  status?: string;
  permissions: string[];
}

/**
 * Upstream login response structure matching Go auth-service contract.
 */
export interface UpstreamLoginResponse {
  token: string;
  tokenType: string;
  expiresIn: number;
  user: UpstreamUserProfile;
}

// Module augmentation to extend NextAuth and Auth.js types with clinical claims
declare module "next-auth" {
  interface User {
    roleCode?: string;
    roleTier?: string;
    department?: string;
    institutionId?: string;
    permissions?: string[];
    token?: string;
  }

  interface Session {
    user: {
      roleCode?: string;
      roleTier?: string;
      department?: string;
      institutionId?: string;
      permissions?: string[];
    } & DefaultSession["user"];
    accessToken?: string;
  }
}

declare module "@auth/core/types" {
  interface User {
    roleCode?: string;
    roleTier?: string;
    department?: string;
    institutionId?: string;
    permissions?: string[];
    token?: string;
  }

  interface Session {
    user: {
      roleCode?: string;
      roleTier?: string;
      department?: string;
      institutionId?: string;
      permissions?: string[];
    } & DefaultSession["user"];
    accessToken?: string;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id?: string;
    email?: string;
    name?: string;
    roleCode?: string;
    roleTier?: string;
    department?: string;
    institutionId?: string;
    permissions?: string[];
    accessToken?: string;
  }
}

/**
 * Core institutional credential verification against the internal Go auth-service.
 */
export async function authorizeInstitutionalCredentials(
  credentials: Record<string, unknown> | undefined
) {
  if (
    !credentials ||
    typeof credentials.institutionalEmail !== "string" ||
    typeof credentials.securityPin !== "string" ||
    typeof credentials.roleCode !== "string"
  ) {
    return null;
  }

  const institutionalEmail = credentials.institutionalEmail
    .trim()
    .toLowerCase();
  const securityPin = credentials.securityPin.trim();
  const roleCode = credentials.roleCode.trim();

  if (!institutionalEmail || !securityPin || !roleCode) {
    return null;
  }

  const authServiceBase =
    process.env.AUTH_SERVICE_INTERNAL_URL || "http://127.0.0.1:8080";
  const loginUrl = `${authServiceBase.replace(/\/+$/, "")}/api/v1/auth/login`;

  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        institutionalEmail,
        securityPin,
        roleCode,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `[Auth.js] Authorization rejected by auth-service (${response.status}): ${errorBody}`
      );
      return null;
    }

    const payload = (await response.json()) as UpstreamLoginResponse;
    if (!payload?.token || !payload?.user) {
      console.error(
        "[Auth.js] Malformed payload received from upstream auth-service:",
        payload
      );
      return null;
    }

    const { user, token } = payload;
    const roleTier = deriveRoleTier(user.roleCode);

    return {
      id: user.id,
      email: user.institutionalEmail,
      name: user.fullName,
      roleCode: user.roleCode,
      roleTier,
      department: user.department,
      institutionId: user.institutionId,
      permissions: Array.isArray(user.permissions)
        ? user.permissions
        : [],
      token,
    };
  } catch (error) {
    console.error(
      "[Auth.js] Network error during institutional credentials authentication:",
      error
    );
    return null;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret:
    process.env.NEXTAUTH_SECRET ||
    process.env.AUTH_SECRET ||
    "vascule-os-production-grade-institutional-jwt-secret-key-32chars",
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours to match backend token TTL
  },
  pages: {
    signIn: "/",
    error: "/",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Institutional Credentials",
      credentials: {
        institutionalEmail: {
          label: "Institutional Email",
          type: "email",
          placeholder: "ir.specialist@vascule.hospital.org",
        },
        securityPin: {
          label: "Security PIN",
          type: "password",
        },
        roleCode: {
          label: "Clinical Role Code",
          type: "text",
          placeholder: "INTERVENTIONAL_RADIOLOGIST",
        },
      },
      authorize: authorizeInstitutionalCredentials,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email || undefined;
        token.name = user.name || undefined;
        token.roleCode = user.roleCode;
        token.roleTier = user.roleTier;
        token.department = user.department;
        token.institutionId = user.institutionId;
        token.permissions = user.permissions;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        if (token.id) session.user.id = token.id as string;
        if (token.email) session.user.email = token.email as string;
        if (token.name) session.user.name = token.name as string;
        session.user.roleCode = (token.roleCode as string) || "";
        session.user.roleTier = (token.roleTier as string) || "Staff";
        session.user.department = (token.department as string) || "";
        session.user.institutionId = (token.institutionId as string) || "";
        session.user.permissions = (token.permissions as string[]) || [];
      }
      session.accessToken = token.accessToken as string | undefined;
      return session;
    },
  },
});
