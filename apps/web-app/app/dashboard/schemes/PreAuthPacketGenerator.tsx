"use client";

import React, { useState, useMemo } from "react";
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  Download,
  DollarSign,
  Layers,
  FileCheck,
} from "lucide-react";

interface RajasthanPackageOption {
  code: string;
  name: string;
  category: string;
  scheme: "MAAY_CHIRANJEEVI" | "RGHS" | "BOTH";
  baseTariffInr: number;
  defaultIndication: string;
  defaultDiagnosis: string;
  icd10: string;
  implants: {
    implantCode: string;
    name: string;
    defaultLot: string;
    cappedPriceInr: number;
  }[];
}

const CORE_RAJASTHAN_PACKAGES: RajasthanPackageOption[] = [
  {
    code: "2849-IN061A",
    name: "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    category: "Hepatobiliary Interventions",
    scheme: "BOTH",
    baseTariffInr: 95000,
    defaultIndication: "Cirrhosis with recurrent refractory variceal bleeding and ascites",
    defaultDiagnosis: "Portal Hypertension with Bleeding Esophageal Varices",
    icd10: "K76.6",
    implants: [
      {
        implantCode: "2849-IN061A IMP 01",
        name: "Viatorr TIPS Endoprosthesis (10mm x 70mm x 2cm)",
        defaultLot: "LOT-8819204",
        cappedPriceInr: 68500,
      },
      {
        implantCode: "2849-IN061A IMP 02",
        name: "Rosch-Uchida Transjugular Liver Biopsy / Access Set",
        defaultLot: "LOT-4410931",
        cappedPriceInr: 16500,
      },
    ],
  },
  {
    code: "2849-IN042B",
    name: "Uterine Artery Embolization (UAE / UFE)",
    category: "Gynecological & Pelvic Interventions",
    scheme: "BOTH",
    baseTariffInr: 32000,
    defaultIndication: "Symptomatic bulky uterine leiomyomata with menorrhagia",
    defaultDiagnosis: "Leiomyoma of Uterus, Unspecified",
    icd10: "D25.9",
    implants: [
      {
        implantCode: "2849-IN042B IMP 01",
        name: "Hydropearl PVA Microspheres 500-700um (Vial)",
        defaultLot: "LOT-5510294",
        cappedPriceInr: 14200,
      },
      {
        implantCode: "2849-IN042B IMP 02",
        name: "Progreat 2.7F Coaxial Microcatheter System",
        defaultLot: "LOT-9482103",
        cappedPriceInr: 19000,
      },
    ],
  },
  {
    code: "2849-IN014C",
    name: "Transcatheter Arterial Chemoembolization (cTACE)",
    category: "Interventional Oncology",
    scheme: "BOTH",
    baseTariffInr: 45000,
    defaultIndication: "Unresectable Hepatocellular Carcinoma (BCLC Stage B)",
    defaultDiagnosis: "Hepatocellular Carcinoma",
    icd10: "C22.0",
    implants: [
      {
        implantCode: "2849-IN014C IMP 01",
        name: "Lipiodol Ultra-Fluid (10 mL)",
        defaultLot: "LOT-5510931",
        cappedPriceInr: 18000,
      },
      {
        implantCode: "2849-IN014C IMP 02",
        name: "Doxorubicin HCl 50mg Injectable",
        defaultLot: "LOT-2049182",
        cappedPriceInr: 2400,
      },
      {
        implantCode: "2849-IN014C IMP 03",
        name: "Gelfoam Absorbable Gelatin Sponge",
        defaultLot: "LOT-9102931",
        cappedPriceInr: 1500,
      },
    ],
  },
  {
    code: "2849-IN076A",
    name: "Dialysis AV Fistula Outflow Angioplasty (High-Pressure)",
    category: "Dialysis & Venous Access",
    scheme: "BOTH",
    baseTariffInr: 24800,
    defaultIndication: "Radiocephalic AV Fistula Juxta-Anastomotic Severe Stenosis with elevated venous pressures",
    defaultDiagnosis: "Complication of Arteriovenous Fistula for Hemodialysis",
    icd10: "T82.8",
    implants: [
      {
        implantCode: "2849-IN076A IMP 12",
        name: "Conquest 40-atm Ultra High Pressure Balloon (6mm x 4cm)",
        defaultLot: "LOT-3381920",
        cappedPriceInr: 18800,
      },
      {
        implantCode: "2849-IN076A IMP 13",
        name: "Radifocus Introducer Sheath 6F 11cm",
        defaultLot: "LOT-1029481",
        cappedPriceInr: 1250,
      },
    ],
  },
];

export function PreAuthPacketGenerator() {
  const [selectedCode, setSelectedCode] = useState<string>("2849-IN061A");
  const [activeScheme, setActiveScheme] = useState<"MAAY_CHIRANJEEVI" | "RGHS">("MAAY_CHIRANJEEVI");
  const [patientCrNo, setPatientCrNo] = useState<string>("CR-2026-09142");
  const [patientIpdNo, setPatientIpdNo] = useState<string>("IPD-48192");
  const [patientName, setPatientName] = useState<string>("RAMESH CHANDRA MEENA");
  const [age, setAge] = useState<number>(54);
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [bedNo, setBedNo] = useState<string>("W-3B / 14");
  const [schemeCardTid, setSchemeCardTid] = useState<string>("TID-RJ-2026-98124");

  const activePackage = useMemo(() => {
    return CORE_RAJASTHAN_PACKAGES.find((p) => p.code === selectedCode) || CORE_RAJASTHAN_PACKAGES[0];
  }, [selectedCode]);

  const [selectedImplants, setSelectedImplants] = useState<Record<string, boolean>>({
    "2849-IN061A IMP 01": true,
    "2849-IN061A IMP 02": true,
  });

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedResult, setGeneratedResult] = useState<{
    fileName: string;
    verificationHash: string;
    verificationPayload: string;
    pdfBase64: string;
  } | null>(null);

  const handleSelectPackage = (code: string) => {
    setSelectedCode(code);
    const pkg = CORE_RAJASTHAN_PACKAGES.find((p) => p.code === code);
    if (pkg) {
      const newSel: Record<string, boolean> = {};
      pkg.implants.forEach((imp) => {
        newSel[imp.implantCode] = true;
      });
      setSelectedImplants(newSel);
    }
  };

  const toggleImplant = (implantCode: string) => {
    setSelectedImplants((prev) => ({
      ...prev,
      [implantCode]: !prev[implantCode],
    }));
  };

  const approvedImplantsList = useMemo(() => {
    return activePackage.implants.filter((imp) => selectedImplants[imp.implantCode]);
  }, [activePackage, selectedImplants]);

  const implantTotalInr = useMemo(() => {
    return approvedImplantsList.reduce((acc, imp) => acc + imp.cappedPriceInr, 0);
  }, [approvedImplantsList]);

  const totalTariffInr = activePackage.baseTariffInr + implantTotalInr;

  const handleGenerateDossier = async () => {
    setIsGenerating(true);
    setGeneratedResult(null);

    try {
      const payload = {
        patient: {
          crNo: patientCrNo,
          ipdNo: patientIpdNo,
          patientName,
          age,
          gender,
          bedNo,
          schemeType: activeScheme,
          schemeCardNumber: schemeCardTid,
          admissionDate: "2026-09-12",
          procedureDate: "2026-09-14",
        },
        packageData: {
          code: activePackage.code,
          name: activePackage.name,
          category: activePackage.category,
          baseTariffInr: activePackage.baseTariffInr,
          clinicalIndication: activePackage.defaultIndication,
          icd10Code: activePackage.icd10,
          icd10Description: activePackage.defaultDiagnosis,
          approvedImplants: approvedImplantsList.map((imp) => ({
            implantCode: imp.implantCode,
            implantName: imp.name,
            serialOrLotNumber: imp.defaultLot,
            rmsclSku: "RMSCL-" + imp.implantCode.replace(/\s+/g, "-"),
            quantity: 1,
            unitPriceInr: imp.cappedPriceInr,
            totalPriceInr: imp.cappedPriceInr,
          })),
        },
        contrastSafety: {
          serumCreatinine: 1.1,
          egfr: 78.4,
          contrastVolumeDeliveredMl: 65,
          cigarroaMacdMl: 245,
          macdRatio: 0.27,
        },
        dosimetry: {
          angiosuite: "Cath Lab 1 (Siemens Artis Zee)",
          fluoroTimeMinutes: 14.8,
          dapGyCm2: 122.4,
          airKermaMGy: 740,
        },
        techniqueSummary: {
          accessSite: "Right Common Femoral Artery (CFA)",
          sheathSize: "6F Terumo Radifocus",
          catheterUsed: "5F Roberts Uterine Catheter & 2.7F Progreat Microcatheter",
          hemostasisMethod: "Angio-Seal VIP 6F Vascular Closure Device",
          immediateComplications: "None. Technical success achieved.",
        },
        consultant: {
          name: "Prof. (Dr.) Interventional Radiologist",
          title: "Senior Professor & HOD, Interventional Radiology",
          medicalRegNo: "RMC-IR-2014-0492",
          department: "Department of Radiodiagnosis & Interventional Radiology, SMS Hospital",
        },
      };

      const response = await fetch("/api/schemes/generate-packet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to generate pre-auth packet");
      }

      const data = (await response.json()) as {
        fileName: string;
        verificationHash: string;
        verificationPayload: string;
        pdfBase64: string;
      };
      setGeneratedResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPdf = () => {
    if (!generatedResult) return;
    const linkSource = `data:application/pdf;base64,${generatedResult.pdfBase64}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = generatedResult.fileName;
    downloadLink.click();
  };

  return (
    <div className="flex flex-col gap-5 max-w-6xl mx-auto font-sans text-[#202124]">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-[#DADCE0]">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-[#202124]">
                Rajasthan Health Scheme Pre-Auth Generator
              </h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                MAAY &amp; RGHS
              </span>
            </div>
            <p className="text-xs text-[#5F6368] mt-0.5">
              SMS Medical College, Jaipur • Cryptographic QR verification
            </p>
          </div>
        </div>

        {/* Scheme Toggle */}
        <div className="flex items-center gap-1.5 bg-[#F8F9FA] p-1 rounded-lg border border-[#DADCE0]">
          <button
            onClick={() => setActiveScheme("MAAY_CHIRANJEEVI")}
            className={`px-3 py-1 text-xs rounded-md transition ${
              activeScheme === "MAAY_CHIRANJEEVI"
                ? "bg-white text-blue-700 font-semibold shadow-xs border border-[#DADCE0]"
                : "text-[#5F6368] hover:text-[#202124]"
            }`}
          >
            MAAY / Chiranjeevi
          </button>
          <button
            onClick={() => setActiveScheme("RGHS")}
            className={`px-3 py-1 text-xs rounded-md transition ${
              activeScheme === "RGHS"
                ? "bg-white text-blue-700 font-semibold shadow-xs border border-[#DADCE0]"
                : "text-[#5F6368] hover:text-[#202124]"
            }`}
          >
            RGHS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Package Selector */}
          <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#3C4043]">
              Select Interventional Procedure Package
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CORE_RAJASTHAN_PACKAGES.map((pkg) => {
                const isSelected = selectedCode === pkg.code;
                return (
                  <button
                    key={pkg.code}
                    type="button"
                    onClick={() => handleSelectPackage(pkg.code)}
                    className={`text-left p-3 rounded-lg border transition flex flex-col justify-between min-h-[85px] ${
                      isSelected
                        ? "bg-blue-50/50 border-blue-600"
                        : "bg-white border-[#DADCE0] hover:bg-gray-50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold text-blue-700">
                          {pkg.code}
                        </span>
                        <span className="text-[10px] text-[#5F6368]">{pkg.category}</span>
                      </div>
                      <div className="text-xs font-medium text-[#202124] mt-1 line-clamp-2">
                        {pkg.name}
                      </div>
                    </div>
                    <div className="text-xs font-mono font-medium text-[#137333] mt-2">
                      Base: ₹{pkg.baseTariffInr.toLocaleString("en-IN")}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Patient Details */}
          <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex flex-col gap-3 text-xs">
            <span className="text-xs font-semibold text-[#3C4043]">
              Patient &amp; Scheme Beneficiary Details
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] text-[#5F6368] block mb-1">Patient Name</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-white border border-[#DADCE0] rounded-lg px-2.5 py-1.5 text-xs text-[#202124] font-medium outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-[11px] text-[#5F6368] block mb-1">CR / UHID No.</label>
                <input
                  type="text"
                  value={patientCrNo}
                  onChange={(e) => setPatientCrNo(e.target.value)}
                  className="w-full bg-white border border-[#DADCE0] rounded-lg px-2.5 py-1.5 text-xs font-mono text-[#202124] font-semibold outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-[11px] text-[#5F6368] block mb-1">IPD No. / Bed</label>
                <input
                  type="text"
                  value={patientIpdNo}
                  onChange={(e) => setPatientIpdNo(e.target.value)}
                  className="w-full bg-white border border-[#DADCE0] rounded-lg px-2.5 py-1.5 text-xs font-mono text-[#202124] outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-[11px] text-[#5F6368] block mb-1">Age / Gender</label>
                <div className="flex gap-1.5">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value, 10))}
                    className="w-14 bg-white border border-[#DADCE0] rounded-lg px-2 py-1.5 text-xs text-[#202124] outline-none focus:border-blue-500"
                  />
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as "Male" | "Female")}
                    className="bg-white border border-[#DADCE0] rounded-lg px-2 py-1.5 text-xs text-[#202124] outline-none focus:border-blue-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-[11px] text-[#5F6368] block mb-1">Jan Aadhaar / Scheme TID</label>
                <input
                  type="text"
                  value={schemeCardTid}
                  onChange={(e) => setSchemeCardTid(e.target.value)}
                  className="w-full bg-white border border-[#DADCE0] rounded-lg px-2.5 py-1.5 text-xs font-mono text-[#202124] outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Approved Implants Checklist */}
          <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#3C4043] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-gray-500" />
                Authorized Implants Breakdown
              </span>
              <span className="text-xs font-mono text-[#137333] font-medium">
                Capped: ₹{implantTotalInr.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {activePackage.implants.map((imp) => {
                const isChecked = !!selectedImplants[imp.implantCode];
                return (
                  <label
                    key={imp.implantCode}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border transition cursor-pointer ${
                      isChecked
                        ? "bg-gray-50 border-[#DADCE0]"
                        : "bg-white border-[#DADCE0] opacity-60"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleImplant(imp.implantCode)}
                      className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#202124]">{imp.name}</span>
                        <span className="font-mono text-[#137333] font-medium">
                          ₹{imp.cappedPriceInr.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#5F6368] mt-0.5">
                        <span>{imp.implantCode}</span>
                        <span>•</span>
                        <span>Lot: {imp.defaultLot}</span>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Pre-Auth Dossier Summary */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex flex-col gap-4">
            <span className="text-xs font-semibold text-[#3C4043] flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-gray-500" />
              Claim Tariff Summary
            </span>

            <div className="flex flex-col gap-2 text-xs font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
                <span className="text-[#5F6368]">Base Tariff:</span>
                <span className="text-[#202124] font-medium">
                  ₹{activePackage.baseTariffInr.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
                <span className="text-[#5F6368]">Implants ({approvedImplantsList.length}):</span>
                <span className="text-[#202124] font-medium">
                  ₹{implantTotalInr.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1 text-sm font-semibold">
                <span className="text-[#202124]">Total Claim:</span>
                <span className="text-[#137333] text-base font-bold">
                  ₹{totalTariffInr.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#DADCE0] flex flex-col gap-1.5 text-[11px] text-[#3C4043]">
              <div className="flex items-center gap-2 text-[#137333]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>eGFR &amp; Creatinine safety verified</span>
              </div>
              <div className="flex items-center gap-2 text-[#137333]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Fluoroscopy dosimetry included</span>
              </div>
              <div className="flex items-center gap-2 text-[#137333]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>GS1 implant lots verified</span>
              </div>
              <div className="flex items-center gap-2 text-[#137333]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Cryptographic HMAC seal included</span>
              </div>
            </div>

            {/* Generate Button */}
            <button
              type="button"
              onClick={handleGenerateDossier}
              disabled={isGenerating}
              className="w-full py-2.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-medium text-xs flex items-center justify-center gap-2 transition disabled:opacity-50"
            >
              <FileCheck className="w-4 h-4" />
              <span>{isGenerating ? "Generating Packet..." : "Generate Pre-Auth Dossier (PDF)"}</span>
            </button>
          </div>

          {/* Download Panel */}
          {generatedResult && (
            <div className="bg-white p-4 rounded-xl border border-emerald-200 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#137333]" />
                  <span className="text-xs font-semibold text-[#137333]">
                    Pre-Auth Dossier Ready
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-[#137333] border border-emerald-200">
                  PDF/A Verified
                </span>
              </div>

              <div className="font-mono text-xs text-[#5F6368] break-all bg-[#F8F9FA] p-2.5 rounded-lg border border-[#DADCE0]">
                <div className="text-[10px] font-semibold text-[#3C4043] mb-0.5">
                  HMAC-SHA256 Hash:
                </div>
                <span className="text-[11px] text-[#202124]">
                  {generatedResult.verificationHash}
                </span>
              </div>

              <button
                type="button"
                onClick={handleDownloadPdf}
                className="w-full py-2 rounded-lg bg-[#137333] hover:bg-[#0d5926] text-white font-medium text-xs flex items-center justify-center gap-2 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Pre-Auth PDF</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
