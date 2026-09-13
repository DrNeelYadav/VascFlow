import { PrismaClient } from "@prisma/client";

/**
 * Standard default institutional tenant: SMS Medical College & Attached Hospitals, Jaipur.
 */
export const DEFAULT_TENANT_ID = "tenant_sms_jaipur";

/**
 * Secondary demonstration institutional tenant: AIIMS Jodhpur.
 */
export const AIIMS_JODHPUR_TENANT_ID = "tenant_aiims_jodhpur";

export const TENANT_SESSION_VARIABLE = "app.current_tenant_id";
export const SYSTEM_ADMIN_SESSION_VARIABLE = "app.is_system_admin";

/**
 * Sanitizes institutional tenant ID strings against SQL injection.
 */
export function sanitizeTenantId(tenantId?: string | null): string {
  if (!tenantId || typeof tenantId !== "string") {
    return DEFAULT_TENANT_ID;
  }
  const clean = tenantId.trim().toLowerCase();
  // Valid tenant IDs must be alphanumeric with underscores or hyphens
  if (!/^[a-z0-9_-]{3,64}$/.test(clean)) {
    return DEFAULT_TENANT_ID;
  }
  return clean;
}

/**
 * Validates cross-tenant access boundaries.
 * Returns true if the user belongs to the target tenant or is a validated system administrator.
 */
export function validateTenantAccess(
  userTenantId: string | undefined | null,
  targetTenantId: string | undefined | null,
  isSystemAdmin = false
): boolean {
  if (isSystemAdmin) return true;
  const sanitizedUser = sanitizeTenantId(userTenantId);
  const sanitizedTarget = sanitizeTenantId(targetTenantId);
  return sanitizedUser === sanitizedTarget;
}

/**
 * Asserts cross-tenant boundaries, throwing an error if a violation occurs.
 */
export function assertTenantAccess(
  userTenantId: string | undefined | null,
  targetTenantId: string | undefined | null,
  isSystemAdmin = false
): void {
  if (!validateTenantAccess(userTenantId, targetTenantId, isSystemAdmin)) {
    throw new Error(
      `[SECURITY ERROR] Cross-tenant data isolation violation: User tenant '${userTenantId}' cannot access target tenant '${targetTenantId}'.`
    );
  }
}

/**
 * Executes a transactional database operation with PostgreSQL Row-Level Security (RLS) context.
 * Injects `SET LOCAL app.current_tenant_id` into the active transaction connection.
 */
export async function executeWithTenantContext<T>(
  prisma: PrismaClient,
  tenantId: string,
  operation: (tx: PrismaClient) => Promise<T>,
  isSystemAdmin = false
): Promise<T> {
  const sanitized = sanitizeTenantId(tenantId);

  return prisma.$transaction(async (tx) => {
    // Inject the active tenant ID into the transaction session parameters
    await tx.$executeRawUnsafe(
      `SET LOCAL ${TENANT_SESSION_VARIABLE} = '${sanitized}';`
    );

    if (isSystemAdmin) {
      await tx.$executeRawUnsafe(
        `SET LOCAL ${SYSTEM_ADMIN_SESSION_VARIABLE} = 'true';`
      );
    } else {
      await tx.$executeRawUnsafe(
        `SET LOCAL ${SYSTEM_ADMIN_SESSION_VARIABLE} = 'false';`
      );
    }

    return operation(tx as unknown as PrismaClient);
  });
}

/**
 * Generates the WHERE clause constraint for tenant-scoped operations.
 */
export function withTenantFilter<T extends object>(
  tenantId?: string | null,
  filter?: T
): T & { tenantId: string } {
  return {
    ...(filter || {}),
    tenantId: sanitizeTenantId(tenantId),
  } as T & { tenantId: string };
}
