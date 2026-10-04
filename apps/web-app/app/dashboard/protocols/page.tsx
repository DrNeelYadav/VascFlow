"use client";

import React, { useState, useMemo } from "react";
import { DRUG_PROTOCOLS } from "../../lib/data/protocolsData";
import { DrugProtocol } from "../../lib/types/clinical";
import { ProtocolHeader } from "./ProtocolHeader";
import { ProtocolSidebar } from "./ProtocolSidebar";
import { ProtocolPrescriptionTable } from "./ProtocolPrescriptionTable";
import { ProtocolHardwareChecklist } from "./ProtocolHardwareChecklist";
import { PreBookingWorkupModal } from "../../components/PreBookingWorkupModal";

export default function DrugProtocolsPage() {
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>("bcs");
  const [searchQuery, setSearchQuery] = useState<string>("" );
  const [activeSystem, setActiveSystem] = useState<string>("ALL");
  const [workupModalOpen, setWorkupModalOpen] = useState<boolean>(false);

  const filteredProtocols = useMemo(() => {
    return DRUG_PROTOCOLS.filter((p) => {
      if (activeSystem !== "ALL" && p.system !== activeSystem) {
        return false;
      }
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.shortName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.system && p.system.toLowerCase().includes(q)) ||
        p.indication.toLowerCase().includes(q) ||
        p.prescriptions.some((rx) => rx.item.toLowerCase().includes(q)) ||
        (p.yojanaRequirement &&
          (p.yojanaRequirement.packageCode.toLowerCase().includes(q) ||
            p.yojanaRequirement.packageName.toLowerCase().includes(q) ||
            p.yojanaRequirement.icd10Code.toLowerCase().includes(q) ||
            p.yojanaRequirement.primaryScheme.toLowerCase().includes(q) ||
            (p.yojanaRequirement.secondaryPackageCode &&
              p.yojanaRequirement.secondaryPackageCode.toLowerCase().includes(q))))
      );
    });
  }, [activeSystem, searchQuery]);

  const activeProtocol: DrugProtocol = useMemo(() => {
    return DRUG_PROTOCOLS.find((p) => p.id === selectedProtocolId) || DRUG_PROTOCOLS[0];
  }, [selectedProtocolId]);

  return (
    <div className="space-y-6 pb-16">
      <ProtocolHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeSystem={activeSystem}
        setActiveSystem={setActiveSystem}
        totalCount={filteredProtocols.length}
      />

      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <ProtocolSidebar
          protocols={filteredProtocols}
          selectedProtocolId={activeProtocol.id}
          onSelectProtocol={setSelectedProtocolId}
        />

        <div className="flex-1 min-w-0 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded font-mono bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
              {activeProtocol.shortName || activeProtocol.id.toUpperCase()} • {activeProtocol.system}
            </span>
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {activeProtocol.name}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {activeProtocol.indication}
            </p>
          </div>

          <ProtocolHardwareChecklist
            protocol={activeProtocol}
            onOpenWorkupModal={() => setWorkupModalOpen(true)}
          />

          <ProtocolPrescriptionTable protocol={activeProtocol} />
        </div>
      </div>

      <PreBookingWorkupModal
        isOpen={workupModalOpen}
        onClose={() => setWorkupModalOpen(false)}
        patientInfo={{
          patientName: "",
          patientAge: 0,
          patientGender: "",
          crNo: "",
          ipdNo: "",
          bedNo: "",
          patientPhone: "",
          scheme: "",
          targetDate: new Date().toISOString().slice(0, 10),
          protocolId: activeProtocol.id,
          procedureName: activeProtocol.name,
          diagnosis: activeProtocol.indication,
        }}
      />
    </div>
  );
}
