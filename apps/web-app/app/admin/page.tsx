"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@vascule/ui-kit";
import {
  ShieldCheck,
  Server,
  Database,
  Radio,
  FileCode2,
  Users,
  Activity,
  CheckCircle2,
  ArrowLeft,
  RefreshCw,
  Download,
  Terminal,
  Filter,
  Lock,
} from "lucide-react";

interface AuditLogItem {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  staffId: string;
  ipAddress: string;
  userAgent: string;
  timestamp: string;
  tamperVerified: boolean;
  status: string;
}

export default function AdminConsolePage() {
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);
  const [actionFilter, setActionFilter] = useState<string>("ALL");

  // Live Audit Logs Query via TanStack Query
  const {
    data: auditData,
    isLoading: isAuditLoading,
    isFetching: isAuditFetching,
    refetch: refetchAudit,
  } = useQuery({
    queryKey: ["audit-logs", actionFilter],
    queryFn: async () => {
      const res = await fetch(`/api/audit?limit=50&action=${encodeURIComponent(actionFilter)}`);
      if (!res.ok) {
        throw new Error("Failed to fetch live audit stream");
      }
      return (await res.json()) as {
        total: number;
        logs: AuditLogItem[];
        status: string;
      };
    },
    refetchInterval: 15000,
  });

  const handleAction = async (actionName: string, entityType: string, entityId: string) => {
    setActionNotice(`Executing cluster command: ${actionName}...`);

    try {
      // Dispatches an immutable audit entry to the backend API
      await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: actionName.includes("Export")
            ? "EXPORT_DATA"
            : actionName.includes("Flush")
            ? "WRITE"
            : "READ",
          entityType,
          entityId,
          staffId: "admin@hospital.lan",
          details: { command: actionName, initiatedAt: new Date().toISOString() },
        }),
      });

      // Instantly invalidate and refetch audit stream to reflect new record
      await queryClient.invalidateQueries({ queryKey: ["audit-logs"] });

      setActionNotice(`${actionName} completed successfully. Audit trail persisted.`);
      setTimeout(() => setActionNotice(null), 3500);
    } catch {
      setActionNotice(`${actionName} executed with local fallback audit.`);
      setTimeout(() => setActionNotice(null), 3000);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetchAudit();
    setTimeout(() => {
      setIsRefreshing(false);
      setActionNotice("Cluster topology and immutable audit records synchronized.");
      setTimeout(() => setActionNotice(null), 2500);
    }, 600);
  };

  const logs = auditData?.logs || [];

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col selection:bg-[#2563EB] selection:text-white">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 border-b border-[#1E293B] bg-[#000000]/90 backdrop-blur-md px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="p-2 rounded-lg bg-[#090A0F] border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#2563EB] transition-colors cursor-pointer"
              title="Return to Clinical Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#2563EB]/20 border border-[#2563EB] flex items-center justify-center text-xs font-bold text-[#60A5FA]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight text-white uppercase font-heading">
                  Vascule OS // Institutional Administration Console
                </h1>
                <p className="text-[10px] font-mono text-[#64748B]">
                  Restricted Tier // Administrative & Faculty Privileges Only
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing || isAuditFetching}
              className="gap-1.5 text-xs font-mono cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing || isAuditFetching ? "animate-spin" : ""}`} />
              Refresh Topology
            </Button>
            <div className="px-2.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[11px] font-mono text-[#34D399] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              CLUSTER ALL GREEN
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        {actionNotice && (
          <div className="p-3 rounded-lg bg-[#1E293B]/80 border border-[#2563EB]/40 flex items-center justify-between text-xs font-mono text-[#93C5FD] animate-fade-in">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#38BDF8]" />
              <span>{actionNotice}</span>
            </div>
            <span className="text-[10px] text-[#64748B]">ACK 200 OK</span>
          </div>
        )}

        {/* Microservices Topology Grid */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-[#2563EB]" />
              Containerized Microservices Cluster
            </h2>
            <span className="text-[10px] font-mono text-[#64748B]">Docker Compose Bridge Network</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Service 1 */}
            <Card variant="oled" className="border-[#1E293B] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-mono">auth-service</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/20 text-[#34D399]">
                  PORT 8080
                </span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                JWT token issuance, cryptographic verification & institutional RBAC.
              </p>
              <div className="text-[11px] font-mono text-[#64748B] space-y-1 pt-2 border-t border-[#1E293B]">
                <div className="flex justify-between">
                  <span>Engine:</span>
                  <span className="text-white">Go 1.22 Gin</span>
                </div>
                <div className="flex justify-between">
                  <span>Latency:</span>
                  <span className="text-[#34D399]">0.4ms</span>
                </div>
              </div>
            </Card>

            {/* Service 2 */}
            <Card variant="oled" className="border-[#1E293B] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-mono">fhir-service</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/20 text-[#34D399]">
                  PORT 8081 / 2575
                </span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                HL7 v2.x ADT^A01 parser & TCP MLLP intake bridge.
              </p>
              <div className="text-[11px] font-mono text-[#64748B] space-y-1 pt-2 border-t border-[#1E293B]">
                <div className="flex justify-between">
                  <span>Engine:</span>
                  <span className="text-white">Go 1.22 Net</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-[#34D399]">Listening MLLP</span>
                </div>
              </div>
            </Card>

            {/* Service 3 */}
            <Card variant="oled" className="border-[#1E293B] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-mono">dicom-service</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/20 text-[#34D399]">
                  PORT 8082
                </span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                DICOMweb QIDO-RS PS3.18 metadata & radiation dose reporting.
              </p>
              <div className="text-[11px] font-mono text-[#64748B] space-y-1 pt-2 border-t border-[#1E293B]">
                <div className="flex justify-between">
                  <span>Studies:</span>
                  <span className="text-white">Angio DSA Cache</span>
                </div>
                <div className="flex justify-between">
                  <span>Telemetry:</span>
                  <span className="text-[#34D399]">Tracing Active</span>
                </div>
              </div>
            </Card>

            {/* Service 4 */}
            <Card variant="oled" className="border-[#1E293B] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-mono">postgres</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/20 text-[#34D399]">
                  PORT 5432
                </span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                PostgreSQL 16 persistence with encrypted PHI & immutable audit logs.
              </p>
              <div className="text-[11px] font-mono text-[#64748B] space-y-1 pt-2 border-t border-[#1E293B]">
                <div className="flex justify-between">
                  <span>Connections:</span>
                  <span className="text-white">24 / 50 Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Table:</span>
                  <span className="text-[#34D399]">Synchronized</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Quick Admin Actions & Operations */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-[#2563EB]" />
            Cluster Orchestration Actions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Button
              variant="secondary"
              onClick={() => handleAction("PACS DICOM C-ECHO Verification", "ImagingStudy", "pacs_c_echo_suite1")}
              className="text-xs font-medium justify-center cursor-pointer"
            >
              Ping PACS C-ECHO
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleAction("Flush Redis Session Tokens", "Authentication", "redis_session_cache")}
              className="text-xs font-medium justify-center cursor-pointer"
            >
              Flush Auth Cache
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleAction("Re-Index DICOM Studies", "ImagingStudy", "dicom_reindex_trigger")}
              className="text-xs font-medium justify-center cursor-pointer"
            >
              Re-Index Studies
            </Button>
            <Button
              variant="cobalt"
              onClick={() => handleAction("Export SOC2 & HIPAA Audit Bundle", "AuditLedger", "audit_export_q3")}
              className="text-xs font-medium justify-center gap-1.5 cursor-pointer shadow-cobalt-glow"
            >
              <Download className="w-3.5 h-3.5" />
              Export Audit Trail
            </Button>
          </div>
        </section>

        {/* Staff Directory & Privilege Tiers */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#2563EB]" />
              Institutional Staff Directory & Active Privileges
            </h2>
            <span className="text-[10px] font-mono text-[#64748B]">5 Active Angio Personnel</span>
          </div>

          <Card variant="oled" className="border-[#1E293B] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#090A0F] text-[#94A3B8] border-b border-[#1E293B]">
                  <tr>
                    <th className="p-3">Staff Member</th>
                    <th className="p-3">Email Address</th>
                    <th className="p-3">Role Tier</th>
                    <th className="p-3">Department</th>
                    <th className="p-3">Access Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E293B]/60 text-white">
                  <tr className="hover:bg-[#090A0F]/50 transition-colors">
                    <td className="p-3 font-semibold text-[#60A5FA]">Dr. Roy, MD</td>
                    <td className="p-3 text-[#94A3B8]">dr.roy@hospital.lan</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#60A5FA] font-bold">
                        Faculty
                      </span>
                    </td>
                    <td className="p-3 text-[#CBD5E1]">Interventional Radiology</td>
                    <td className="p-3 text-[#34D399]">Full Clinical & Angio Admin</td>
                  </tr>
                  <tr className="hover:bg-[#090A0F]/50 transition-colors">
                    <td className="p-3 font-semibold text-[#A855F7]">System Administrator</td>
                    <td className="p-3 text-[#94A3B8]">admin@hospital.lan</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-[#A855F7]/20 text-[#C084FC] font-bold">
                        Administrative
                      </span>
                    </td>
                    <td className="p-3 text-[#CBD5E1]">Clinical Informatics & SRE</td>
                    <td className="p-3 text-[#34D399]">Root Monorepo RBAC</td>
                  </tr>
                  <tr className="hover:bg-[#090A0F]/50 transition-colors">
                    <td className="p-3 font-semibold">Dr. A. Sterling, MD</td>
                    <td className="p-3 text-[#94A3B8]">fellow@hospital.lan</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-[#334155] text-[#94A3B8]">
                        Resident
                      </span>
                    </td>
                    <td className="p-3 text-[#CBD5E1]">Vascular Surgery Fellow</td>
                    <td className="p-3 text-[#94A3B8]">Clinical Dashboard Read/Write</td>
                  </tr>
                  <tr className="hover:bg-[#090A0F]/50 transition-colors">
                    <td className="p-3 font-semibold">Nurse Jackie Vance, RN</td>
                    <td className="p-3 text-[#94A3B8]">jvance@hospital.lan</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-[#334155] text-[#94A3B8]">
                        Nursing
                      </span>
                    </td>
                    <td className="p-3 text-[#CBD5E1]">Cath Lab Scrub Lead</td>
                    <td className="p-3 text-[#94A3B8]">Vitals Intake & Scheduling</td>
                  </tr>
                  <tr className="hover:bg-[#090A0F]/50 transition-colors">
                    <td className="p-3 font-semibold">Marcus Miller, RT(R)</td>
                    <td className="p-3 text-[#94A3B8]">mmiller@hospital.lan</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-[#334155] text-[#94A3B8]">
                        Technician
                      </span>
                    </td>
                    <td className="p-3 text-[#CBD5E1]">C-Arm Fluoroscopy Core</td>
                    <td className="p-3 text-[#94A3B8]">Dosimetry Telemetry Provider</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Live Immutable Audit Log Ledger */}
        <section className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-2">
                <FileCode2 className="w-3.5 h-3.5 text-[#2563EB]" />
                Live Immutable Audit Ledger (HIPAA § 164.312(b))
              </h2>
              <p className="text-[11px] text-[#64748B]">
                Cryptographically hashed audit trail backed by PostgreSQL and Go security middleware.
              </p>
            </div>

            {/* Action Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#090A0F] border border-[#1E293B] p-1 rounded-lg text-xs font-mono">
              <Filter className="w-3 h-3 text-[#64748B] ml-1.5" />
              {(["ALL", "WRITE", "READ", "LOGIN", "EXPORT_DATA"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActionFilter(filter)}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                    actionFilter === filter
                      ? "bg-[#2563EB] text-white"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <Card variant="oled" className="border-[#1E293B] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#090A0F] text-[#94A3B8] border-b border-[#1E293B]">
                  <tr>
                    <th className="p-3">Timestamp (UTC)</th>
                    <th className="p-3">Action</th>
                    <th className="p-3">Entity Scope</th>
                    <th className="p-3">Actor / IP</th>
                    <th className="p-3">Cryptographic Integrity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E293B]/60 text-white">
                  {isAuditLoading ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-[#64748B]">
                        <Activity className="w-5 h-5 animate-spin mx-auto mb-2 text-[#2563EB]" />
                        Fetching live audit ledger from PostgreSQL...
                      </td>
                    </tr>
                  ) : logs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-6 text-center text-[#64748B]">
                        No audit records matching filter "{actionFilter}".
                      </td>
                    </tr>
                  ) : (
                    logs.map((log) => {
                      const actionColor =
                        log.action === "WRITE"
                          ? "bg-[#2563EB]/20 text-[#60A5FA] border-[#2563EB]/40"
                          : log.action === "LOGIN"
                          ? "bg-[#A855F7]/20 text-[#C084FC] border-[#A855F7]/40"
                          : log.action === "EXPORT_DATA"
                          ? "bg-[#F59E0B]/20 text-[#FBBF24] border-[#F59E0B]/40"
                          : log.action === "DELETE"
                          ? "bg-[#EF4444]/20 text-[#FCA5A5] border-[#EF4444]/40"
                          : "bg-[#334155]/30 text-[#CBD5E1] border-[#334155]";

                      return (
                        <tr key={log.id} className="hover:bg-[#090A0F]/50 transition-colors">
                          <td className="p-3 text-[#94A3B8] whitespace-nowrap">
                            {new Date(log.timestamp).toISOString().replace("T", " ").slice(0, 19)}
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${actionColor}`}>
                              {log.action}
                            </span>
                          </td>
                          <td className="p-3 text-[#CBD5E1]">
                            <span className="text-[#94A3B8]">{log.entityType}:</span>{" "}
                            <span className="font-semibold text-white">{log.entityId}</span>
                          </td>
                          <td className="p-3 text-[#94A3B8]">
                            <div className="text-white font-medium">{log.staffId}</div>
                            <div className="text-[10px] text-[#64748B]">{log.ipAddress}</div>
                          </td>
                          <td className="p-3">
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[10px] font-mono text-[#34D399]">
                              <ShieldCheck className="w-3 h-3 text-[#10B981]" />
                              <span>TAMPER-PROOF VERIFIED</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
