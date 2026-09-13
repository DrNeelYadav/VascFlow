# RFC-0000: [Feature / Service Title]
- **Author(s)**: [Staff / Senior Engineer Name]
- **Status**: DRAFT | IN_REVIEW | APPROVED | REJECTED
- **Target Microservice / App**: [`apps/web-app`, `services/patient-service`, etc.]
- **Date**: YYYY-MM-DD
- **Target Release**: vX.Y.Z

---

## 1. Problem Statement & Clinical Motivation
*Briefly articulate the clinical problem this change addresses in the Angio Suite / Cath Lab. What friction or safety risk does it resolve?*

---

## 2. Architecture & Design Specification
### A. Component / Service Interactions
*Describe how the edge Next.js frontend, Golang backend microservices, and datastores interact.*

### B. Database Schema Migrations
```sql
-- PostgreSQL / Prisma Schema Migrations
ALTER TABLE "PatientLogEntry" ADD COLUMN "ciAkiRiskScore" FLOAT DEFAULT 0.0;
```

### C. API Contract (Protobuf / OpenAPI 3.1)
```protobuf
syntax = "proto3";
package vascule.patient.v1;

service PatientService {
  rpc IngestHl7Stream (Hl7StreamRequest) returns (Hl7StreamResponse);
  rpc GetSafetyCeiling (SafetyCeilingRequest) returns (SafetyCeilingResponse);
}
```

---

## 3. Shift-Left Security & Compliance (HIPAA / SOC2)
- [ ] **Zero PHI in Logs**: Structured audit logging sanitizes patient names, CR numbers, and phone numbers.
- [ ] **mTLS / Inter-Service Auth**: Golang microservices communicate over encrypted mTLS with short-lived JWTs.
- [ ] **Encryption at Rest & Transit**: TLS 1.3 in transit; AES-256 for PostgreSQL and S3 DICOM buckets.

---

## 4. Observability, Telemetry & Rollout Plan
- **Metrics**: OpenTelemetry trace tags (`service.name`, `hospital.id`, `angio_suite.id`).
- **P99 Latency SLA**: Must execute within `< 120ms` server-side, `< 1.2s` end-to-end TTI.
- **Feature Flag Key**: `enable_vascule_[feature_name]`.
- **Canary Rollout**: 5% of on-call fellows &rarr; 25% Cath Lab staff &rarr; 100% enterprise rollout.
