"use client";

import React from "react";
import { Card, Input } from "@vascule/ui-kit";
import { Activity } from "lucide-react";
import {
  UseOpClinicDeskReturn,
  URGENCY_OPTIONS,
  HOSPITAL_SOURCES,
} from "./useOpClinicDesk";
import { REFERRING_DEPARTMENTS } from "./referringDepartments";

interface ConsultationDeskDemographicsProps {
  desk: UseOpClinicDeskReturn;
}

export function ConsultationDeskDemographics({ desk }: ConsultationDeskDemographicsProps) {
  return (
    <Card variant="flat" className="border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
      <div className="p-3.5 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
            1. Patient Demographics, Referrals &amp; Identification
          </span>
        </div>
        <span className="text-[11px] text-slate-400 dark:text-slate-400">
          Fields marked with * are required
        </span>
      </div>

      {/* Row 1: Name, Age, Sex, Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
        <div className="md:col-span-4 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Patient Full Name *
          </label>
          <Input
            type="text"
            value={desk.patientName}
            onChange={(e) => desk.setPatientName(e.target.value)}
            placeholder="e.g. Bhanwar Lal Sharma"
            autoComplete="off"
            required
          />
        </div>

        <div className="md:col-span-3 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Age &amp; Sex *
          </label>
          <div className="flex gap-2">
            <Input
              type="number"
              value={desk.age}
              onChange={(e) => desk.setAge(e.target.value ? Number(e.target.value) : "")}
              placeholder="Age"
              className="w-20"
              min={0}
              max={120}
              required
            />
            <select
              value={desk.sex}
              onChange={(e) => desk.setSex(e.target.value as "Male" | "Female")}
              className="flex-1 h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 font-medium focus:border-blue-600 focus:outline-none transition-colors"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-3 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Patient Contact (10-Digit)
          </label>
          <Input
            type="tel"
            maxLength={10}
            value={desk.contactNumber}
            onChange={(e) =>
              desk.setContactNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="10-digit mobile number"
          />
        </div>

        <div className="md:col-span-2 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Resident Contact
          </label>
          <Input
            type="tel"
            maxLength={10}
            value={desk.residentContact}
            onChange={(e) =>
              desk.setResidentContact(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="Resident Mobile"
          />
        </div>
      </div>

      {/* Row 2: Accession, Referring Dept, Urgency & Hospital Center */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
        <div className="md:col-span-3 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Accession / CR No.
          </label>
          <Input
            type="text"
            value={desk.accessionNumber}
            onChange={(e) => desk.setAccessionNumber(e.target.value)}
            placeholder="e.g. 2026-99214"
            className="font-mono text-xs"
          />
        </div>

        <div className="md:col-span-3 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Hospital Center / Source
          </label>
          <select
            value={desk.hospitalSource}
            onChange={(e) => desk.setHospitalSource(e.target.value)}
            className="w-full h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 font-medium focus:border-blue-600 focus:outline-none transition-colors"
          >
            {HOSPITAL_SOURCES.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-3 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Referring Department
          </label>
          <select
            value={
              REFERRING_DEPARTMENTS.includes(desk.referringDepartment)
                ? desk.referringDepartment
                : "Other / Custom Unit"
            }
            onChange={(e) => {
              if (e.target.value !== "Other / Custom Unit") {
                desk.setReferringDepartment(e.target.value);
              } else {
                desk.setReferringDepartment("");
              }
            }}
            className="w-full h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 font-medium focus:border-blue-600 focus:outline-none transition-colors"
          >
            {REFERRING_DEPARTMENTS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {(!REFERRING_DEPARTMENTS.includes(desk.referringDepartment) ||
            desk.referringDepartment === "Other / Custom Unit") && (
            <Input
              type="text"
              value={
                desk.referringDepartment === "Other / Custom Unit"
                  ? ""
                  : desk.referringDepartment
              }
              onChange={(e) => desk.setReferringDepartment(e.target.value)}
              placeholder="Type unit or hospital name..."
              className="mt-2 text-xs"
            />
          )}
        </div>

        <div className="md:col-span-3 p-3.5">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Urgency / Priority Category
          </label>
          <select
            value={desk.urgencyCategory}
            onChange={(e) => desk.setUrgencyCategory(e.target.value)}
            className="w-full h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 font-semibold focus:border-blue-600 focus:outline-none transition-colors"
          >
            {URGENCY_OPTIONS.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
}
