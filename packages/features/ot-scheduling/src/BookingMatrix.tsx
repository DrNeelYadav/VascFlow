"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "@vascule/ui-kit";
import {
  Calendar,
  Clock,
  User,
  AlertTriangle,
  CheckCircle2,
  Filter,
  Plus,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  X,
  Layers,
} from "lucide-react";

export type SuiteStatus = "Active" | "Turnover" | "Standby" | "Maintenance";

export interface SuiteOperationalStatus {
  id: string;
  name: string;
  hardware: string;
  status: SuiteStatus;
  statusLabel: string;
  turnoverMinutesRemaining?: number;
  currentCase?: string;
  physician?: string;
}

export type CasePriority = "Elective" | "Urgent" | "STAT";

export interface ProcedureCase {
  id: string;
  caseNumber: string;
  procedureName: string;
  procedureCode: string;
  physician: string;
  status: "In Progress" | "Patient Prepped" | "On Deck" | "Scheduled" | "Completed";
  location: string;
  priority: CasePriority;
  scheduledTime: string;
  estimatedDurationMinutes: number;
  patientDetails?: string;
}

export interface BookingMatrixProps {
  onBookCase?: () => void;
  onAdmitCase?: () => void;
  suites?: SuiteOperationalStatus[];
  cases?: ProcedureCase[];
  className?: string;
}

const defaultSuites: SuiteOperationalStatus[] = [
  {
    id: "suite-1",
    name: "Angio Suite 1",
    hardware: "Siemens Artis Q Bi-Plane",
    status: "Active",
    statusLabel: "Active Intervention",
    currentCase: "TACE - Dr. Roy",
    physician: "Dr. Roy",
  },
  {
    id: "suite-2",
    name: "Angio Suite 2",
    hardware: "Siemens Artis Pheno Single-Plane",
    status: "Turnover",
    statusLabel: "Turnover / Sterilization",
    turnoverMinutesRemaining: 18,
    physician: "Turnover Team B",
  },
  {
    id: "suite-3",
    name: "Hybrid OR 3",
    hardware: "Philips Azurion 7 Robotic Gantry",
    status: "Standby",
    statusLabel: "Standby / Primed",
    physician: "Staff Anesthetist On-Call",
  },
];

const defaultCases: ProcedureCase[] = [
  {
    id: "case-1",
    caseNumber: "Case #1",
    procedureName: "Transarterial Chemoembolization (TACE)",
    procedureCode: "TACE",
    physician: "Dr. Roy",
    status: "In Progress",
    location: "Table 1",
    priority: "Urgent",
    scheduledTime: "11:30",
    estimatedDurationMinutes: 90,
    patientDetails: "Patient: Henderson, Paul • 68M",
  },
  {
    id: "case-2",
    caseNumber: "Case #2",
    procedureName: "Carotid Artery Stenting (CAS)",
    procedureCode: "CAS",
    physician: "Dr. Sarah Chen",
    status: "Patient Prepped",
    location: "Table 2",
    priority: "Elective",
    scheduledTime: "13:15",
    estimatedDurationMinutes: 75,
    patientDetails: "Patient: Gomez, Maria • 71F",
  },
  {
    id: "case-3",
    caseNumber: "Case #3",
    procedureName: "Bronchial Artery Embolization (BAE - STAT)",
    procedureCode: "BAE - STAT",
    physician: "Emergency Team",
    status: "On Deck",
    location: "Angio Suite 1 Backup",
    priority: "STAT",
    scheduledTime: "14:00",
    estimatedDurationMinutes: 60,
    patientDetails: "Patient: Zhao, Wei • 52M • Massive Hemoptysis",
  },
  {
    id: "case-4",
    caseNumber: "Case #4",
    procedureName: "Endovascular Aortic Repair (EVAR)",
    procedureCode: "EVAR",
    physician: "Dr. A. Sterling",
    status: "Scheduled",
    location: "Hybrid OR 3",
    priority: "Elective",
    scheduledTime: "15:30",
    estimatedDurationMinutes: 120,
    patientDetails: "Patient: Valentine, Marcus R. • 64M",
  },
];

export function BookingMatrix({
  onBookCase,
  onAdmitCase,
  suites = defaultSuites,
  cases = defaultCases,
  className = "",
}: BookingMatrixProps) {
  const [filterState, setFilterState] = useState<"ALL" | "ACTIVE" | "TURNOVER" | "STAT">("ALL");
  const [suiteList] = useState<SuiteOperationalStatus[]>(suites);
  const [caseQueue, setCaseQueue] = useState<ProcedureCase[]>(cases);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newCaseProcedure, setNewCaseProcedure] = useState<string>("EVAR");
  const [newCasePhysician, setNewCasePhysician] = useState<string>("Dr. Sarah Chen");
  const [newCaseSuite, setNewCaseSuite] = useState<string>("Angio Suite 1");
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  const filteredCases = caseQueue.filter((c) => {
    if (filterState === "ALL") return true;
    if (filterState === "ACTIVE") return c.status === "In Progress";
    if (filterState === "TURNOVER") return c.status === "Patient Prepped" || c.status === "On Deck";
    if (filterState === "STAT") return c.priority === "STAT";
    return true;
  });

  const handleOpenBooking = () => {
    if (onBookCase) {
      onBookCase();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleConfirmNewCase = (e: React.FormEvent) => {
    e.preventDefault();
    const newCaseItem: ProcedureCase = {
      id: `case-${Date.now()}`,
      caseNumber: `Case #${caseQueue.length + 1}`,
      procedureName: newCaseProcedure,
      procedureCode: newCaseProcedure.split(" ")[0] || "CASE",
      physician: newCasePhysician,
      status: "Scheduled",
      location: newCaseSuite,
      priority: "Urgent",
      scheduledTime: "16:45",
      estimatedDurationMinutes: 90,
      patientDetails: "Elective Admitted Patient",
    };
    setCaseQueue([...caseQueue, newCaseItem]);
    setBookingSuccess(`Case scheduled successfully for ${newCaseSuite}.`);
    setTimeout(() => {
      setIsModalOpen(false);
      setBookingSuccess(null);
    }, 1200);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Top Header & Scheduling Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#090A0F] border border-[#1E293B] rounded-xl p-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#2563EB]" />
            <h3 className="text-base font-bold text-white font-heading tracking-tight">
              Operating Theatre & Suite Scheduling Matrix
            </h3>
          </div>
          <p className="text-xs text-[#94A3B8] font-mono">
            Zero-latency interventional suite orchestration and procedure throughput
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {onAdmitCase && (
            <Button
              variant="secondary"
              size="sm"
              onClick={onAdmitCase}
              className="text-xs font-medium"
            >
              Admit Patient
            </Button>
          )}
          <Button
            variant="cobalt"
            size="sm"
            onClick={handleOpenBooking}
            className="text-xs font-medium gap-1.5 shadow-cobalt-glow"
          >
            <Plus className="w-3.5 h-3.5" />
            Book New Case
          </Button>
        </div>
      </div>

      {/* Operational Suite Status Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suiteList.map((suite) => {
          const isActive = suite.status === "Active";
          const isTurnover = suite.status === "Turnover";
          const isStandby = suite.status === "Standby";

          return (
            <Card
              key={suite.id}
              variant="oled"
              className="bg-[#090A0F] border-[#1E293B] p-4 space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive
                        ? "bg-[#10B981] animate-pulse"
                        : isTurnover
                        ? "bg-[#F59E0B]"
                        : "bg-[#38BDF8]"
                    }`}
                  />
                  <CardTitle className="text-sm font-semibold text-white">
                    {suite.name}
                  </CardTitle>
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                    isActive
                      ? "bg-[#064E3B]/40 text-[#10B981] border-[#10B981]/30"
                      : isTurnover
                      ? "bg-[#78350F]/40 text-[#F59E0B] border-[#F59E0B]/30"
                      : "bg-[#0C4A6E]/40 text-[#38BDF8] border-[#38BDF8]/30"
                  }`}
                >
                  {suite.statusLabel}
                </span>
              </div>

              <div className="space-y-1 text-xs font-mono">
                <div className="text-[#94A3B8]">{suite.hardware}</div>
                {isTurnover && suite.turnoverMinutesRemaining && (
                  <div className="flex items-center gap-1.5 text-[#F59E0B] pt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Est. Turnover: {suite.turnoverMinutesRemaining} min remaining</span>
                  </div>
                )}
                {isActive && suite.currentCase && (
                  <div className="flex items-center gap-1.5 text-[#60A5FA] pt-1">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>{suite.currentCase}</span>
                  </div>
                )}
                {isStandby && (
                  <div className="flex items-center gap-1.5 text-[#10B981] pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Table Ready & Sterilized</span>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Procedure Queue Section */}
      <Card variant="oled" className="bg-[#090A0F] border-[#1E293B] overflow-hidden p-0">
        <CardHeader className="p-5 border-b border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-base font-bold text-white flex items-center gap-2 font-heading">
              <Layers className="w-4 h-4 text-[#2563EB]" />
              Interventional Procedures Queue
            </CardTitle>
            <CardDescription className="text-xs text-[#94A3B8] font-mono mt-0.5">
              Real-time sequence of scheduled endovascular cases
            </CardDescription>
          </div>

          {/* Readiness & Acuity Filter Controls */}
          <div className="flex items-center gap-1.5 bg-[#000000] border border-[#1E293B] rounded-lg p-1 text-xs">
            <span className="text-[#94A3B8] px-2 font-mono flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Filter:
            </span>
            <button
              onClick={() => setFilterState("ALL")}
              className={`px-2.5 py-1 rounded transition-colors ${
                filterState === "ALL"
                  ? "bg-[#2563EB] text-white font-medium"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              All Cases
            </button>
            <button
              onClick={() => setFilterState("ACTIVE")}
              className={`px-2.5 py-1 rounded transition-colors ${
                filterState === "ACTIVE"
                  ? "bg-[#2563EB] text-white font-medium"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilterState("TURNOVER")}
              className={`px-2.5 py-1 rounded transition-colors ${
                filterState === "TURNOVER"
                  ? "bg-[#2563EB] text-white font-medium"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Prepped / On Deck
            </button>
            <button
              onClick={() => setFilterState("STAT")}
              className={`px-2.5 py-1 rounded transition-colors ${
                filterState === "STAT"
                  ? "bg-[#EF4444] text-white font-medium"
                  : "text-[#EF4444]/70 hover:text-[#EF4444]"
              }`}
            >
              STAT Only
            </button>
          </div>
        </CardHeader>

        <CardContent className="p-5 space-y-3">
          {filteredCases.length === 0 ? (
            <div className="text-center py-8 text-xs font-mono text-[#94A3B8]">
              No cases matching current filter criteria.
            </div>
          ) : (
            filteredCases.map((procedure) => {
              const isInProgress = procedure.status === "In Progress";
              const isPrepped = procedure.status === "Patient Prepped";
              const isOnDeck = procedure.status === "On Deck";
              const isSTAT = procedure.priority === "STAT";

              return (
                <div
                  key={procedure.id}
                  className={`p-4 rounded-xl border transition-all duration-150 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isSTAT
                      ? "bg-[#EF4444]/5 border-[#EF4444]/40"
                      : isInProgress
                      ? "bg-[#2563EB]/5 border-[#2563EB]/40"
                      : "bg-[#000000] border-[#1E293B] hover:border-[#334155]"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 ${
                        isSTAT
                          ? "bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/40"
                          : isInProgress
                          ? "bg-[#2563EB]/20 text-[#60A5FA] border border-[#2563EB]/40"
                          : "bg-[#111827] text-white border border-[#1E293B]"
                      }`}
                    >
                      {procedure.caseNumber.replace("Case #", "#")}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          {procedure.caseNumber}: {procedure.procedureName}
                        </span>
                        {isSTAT && (
                          <span className="text-[10px] font-mono font-bold bg-[#EF4444] text-white px-2 py-0.5 rounded uppercase animate-pulse">
                            EMERGENCY STAT
                          </span>
                        )}
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${
                            isInProgress
                              ? "bg-[#064E3B]/40 text-[#10B981] border-[#10B981]/30"
                              : isPrepped
                              ? "bg-[#1E3A8A]/40 text-[#93C5FD] border-[#2563EB]/30"
                              : isOnDeck
                              ? "bg-[#78350F]/40 text-[#F59E0B] border-[#F59E0B]/30"
                              : "bg-[#1E293B] text-[#94A3B8] border-transparent"
                          }`}
                        >
                          {procedure.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94A3B8]">
                        <span className="flex items-center gap-1 text-white">
                          <User className="w-3.5 h-3.5 text-[#60A5FA]" />
                          {procedure.physician}
                        </span>
                        <span>•</span>
                        <span>Location: {procedure.location}</span>
                        <span>•</span>
                        <span>Scheduled: {procedure.scheduledTime}</span>
                        {procedure.patientDetails && (
                          <>
                            <span>•</span>
                            <span className="text-[#94A3B8]">{procedure.patientDetails}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-center">
                    <span className="text-xs font-mono text-[#94A3B8]">
                      Est. {procedure.estimatedDurationMinutes} min
                    </span>
                    <Button
                      variant={isSTAT ? "destructive" : "secondary"}
                      size="sm"
                      className="text-xs font-mono"
                    >
                      View Dossier
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </CardContent>
      </Card>

      {/* Built-in Case Scheduling Modal (when onBookCase is not handled externally) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card
            variant="oled"
            className="w-full max-w-md bg-[#090A0F] border-[#1E293B] shadow-2xl p-6 relative space-y-4"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center text-[#60A5FA]">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Schedule Procedure Case</h3>
                <p className="text-xs text-[#94A3B8]">Add interventional case to suite queue</p>
              </div>
            </div>

            <form onSubmit={handleConfirmNewCase} className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-[#94A3B8] mb-1">Target Angio Suite</label>
                <select
                  value={newCaseSuite}
                  onChange={(e) => setNewCaseSuite(e.target.value)}
                  className="w-full bg-[#000000] border border-[#1E293B] rounded-lg p-2 text-white focus:outline-none focus:border-[#2563EB]"
                >
                  <option>Angio Suite 1</option>
                  <option>Angio Suite 2</option>
                  <option>Hybrid OR 3</option>
                </select>
              </div>

              <div>
                <label className="block text-[#94A3B8] mb-1">Procedure Type</label>
                <select
                  value={newCaseProcedure}
                  onChange={(e) => setNewCaseProcedure(e.target.value)}
                  className="w-full bg-[#000000] border border-[#1E293B] rounded-lg p-2 text-white focus:outline-none focus:border-[#2563EB]"
                >
                  <option>Endovascular Aortic Repair (EVAR)</option>
                  <option>Thoracic EVAR (TEVAR)</option>
                  <option>Transarterial Chemoembolization (TACE)</option>
                  <option>Carotid Artery Stenting (CAS)</option>
                  <option>Bronchial Artery Embolization (BAE)</option>
                </select>
              </div>

              <div>
                <label className="block text-[#94A3B8] mb-1">Operating Attending Physician</label>
                <input
                  type="text"
                  value={newCasePhysician}
                  onChange={(e) => setNewCasePhysician(e.target.value)}
                  className="w-full bg-[#000000] border border-[#1E293B] rounded-lg p-2 text-white focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              {bookingSuccess && (
                <div className="p-2.5 bg-[#064E3B]/40 border border-[#10B981] rounded-lg text-xs font-mono text-[#10B981] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  {bookingSuccess}
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="cobalt" size="sm">
                  Confirm & Reserve
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}

export default BookingMatrix;
