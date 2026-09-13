-- ==============================================================================
-- Vascule OS: PostgreSQL Row-Level Security (RLS) Multi-Tenant Policies
-- Standard: Healthcare Data Segregation & HIPAA § 164.312(a)(1)
-- ==============================================================================

-- 1. Ensure Default Tenants Exist for Multi-Hospital Federation
INSERT INTO "Tenant" ("id", "hospitalName", "region", "activeStatus", "createdAt", "updatedAt")
VALUES 
    ('tenant_sms_jaipur', 'SMS Medical College & Attached Hospitals', 'Jaipur, Rajasthan', true, NOW(), NOW()),
    ('tenant_aiims_jodhpur', 'All India Institute of Medical Sciences (AIIMS)', 'Jodhpur, Rajasthan', true, NOW(), NOW())
ON CONFLICT ("id") DO NOTHING;

-- 2. Enable and Force Row-Level Security (RLS)
-- FORCE ROW LEVEL SECURITY ensures table owners and superusers (unless explicitly bypassed) adhere to policies

ALTER TABLE "Patient" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Patient" FORCE ROW LEVEL SECURITY;

ALTER TABLE "Staff" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Staff" FORCE ROW LEVEL SECURITY;

ALTER TABLE "ScheduleSlot" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ScheduleSlot" FORCE ROW LEVEL SECURITY;

ALTER TABLE "AuditLog" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "AuditLog" FORCE ROW LEVEL SECURITY;

-- 3. Drop Existing Policies if re-running migration
DROP POLICY IF EXISTS tenant_isolation_patient_policy ON "Patient";
DROP POLICY IF EXISTS tenant_isolation_staff_policy ON "Staff";
DROP POLICY IF EXISTS tenant_isolation_schedule_policy ON "ScheduleSlot";
DROP POLICY IF EXISTS tenant_isolation_audit_policy ON "AuditLog";

-- 4. Create Tenant Isolation Policies with System Admin Bypass
-- Checks if current_setting('app.is_system_admin', true) = 'true'
-- Otherwise strictly matches "tenantId" to current_setting('app.current_tenant_id', true)

CREATE POLICY tenant_isolation_patient_policy ON "Patient"
    AS RESTRICTIVE
    FOR ALL
    USING (
        current_setting('app.is_system_admin', true) = 'true' OR
        "tenantId" = current_setting('app.current_tenant_id', true)
    )
    WITH CHECK (
        current_setting('app.is_system_admin', true) = 'true' OR
        "tenantId" = current_setting('app.current_tenant_id', true)
    );

CREATE POLICY tenant_isolation_staff_policy ON "Staff"
    AS RESTRICTIVE
    FOR ALL
    USING (
        current_setting('app.is_system_admin', true) = 'true' OR
        "tenantId" = current_setting('app.current_tenant_id', true)
    )
    WITH CHECK (
        current_setting('app.is_system_admin', true) = 'true' OR
        "tenantId" = current_setting('app.current_tenant_id', true)
    );

CREATE POLICY tenant_isolation_schedule_policy ON "ScheduleSlot"
    AS RESTRICTIVE
    FOR ALL
    USING (
        current_setting('app.is_system_admin', true) = 'true' OR
        "tenantId" = current_setting('app.current_tenant_id', true)
    )
    WITH CHECK (
        current_setting('app.is_system_admin', true) = 'true' OR
        "tenantId" = current_setting('app.current_tenant_id', true)
    );

CREATE POLICY tenant_isolation_audit_policy ON "AuditLog"
    AS RESTRICTIVE
    FOR ALL
    USING (
        current_setting('app.is_system_admin', true) = 'true' OR
        "tenantId" = current_setting('app.current_tenant_id', true)
    )
    WITH CHECK (
        current_setting('app.is_system_admin', true) = 'true' OR
        "tenantId" = current_setting('app.current_tenant_id', true)
    );
