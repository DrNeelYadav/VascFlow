"use client";

import React, { useState, useMemo } from "react";
import {
  Film,
  Server,
  Cloud,
  Upload,
  HardDrive,
  Activity,
  Layers,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search,
  ExternalLink,
  Zap,
  Info,
  Radio,
  Sliders,
  ChevronRight,
  Eye,
} from "lucide-react";
import {
  DicomCinePlayer,
  parseGoogleDriveUrl,
  ImagingModality,
} from "../../components/imaging/DicomCinePlayer";

type SourceTab = "samples" | "gdrive" | "tailscale" | "upload";

interface SeriesRun {
  id: string;
  runNumber: number;
  title: string;
  modality: ImagingModality;
  videoSrc: string;
  fps: number;
  totalFrames: number;
  projection: string;
  injection: string;
  matrix: string;
  dapGyCm2?: number;
  airKermaMGy?: number;
}

interface ClinicalCase {
  id: string;
  title: string;
  patientName: string;
  patientId: string;
  diagnosis: string;
  accessRoute: string;
  primaryHardware: string;
  contrastAgent: string;
  modality: ImagingModality;
  runs: SeriesRun[];
}

const SAMPLE_CASES: ClinicalCase[] = [
  {
    id: "splenic-emb",
    title: "Splenic Artery Embolization DSA",
    patientName: "ANON_GOPAL_R",
    patientId: "SMS-IR-2026-985",
    diagnosis: "Post-Pancreatitis Distal Splenic Artery Pseudoaneurysm",
    accessRoute: "Right CFA 5F Sheath",
    primaryHardware: "4F Cobra C2 + 2.7F Progreat Microcatheter + 0.018\" GDC Coils",
    contrastAgent: "Visipaque 320 (Iso-osmolar)",
    modality: "XA",
    runs: [
      {
        id: "run-1",
        runNumber: 1,
        title: "Celiac Axis Diagnostic Run",
        modality: "XA",
        videoSrc: "/samples/splenic_dsa.mp4",
        fps: 15,
        totalFrames: 120,
        projection: "AP 0°, Cranial 0°",
        injection: "Visipaque 15 mL @ 5 mL/s (400 psi)",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 4.8,
        airKermaMGy: 22,
      },
      {
        id: "run-2",
        runNumber: 2,
        title: "Selective Splenic Artery DSA (4F Cobra)",
        modality: "XA",
        videoSrc: "/samples/splenic_dsa.mp4",
        fps: 15,
        totalFrames: 120,
        projection: "LAO 15°, Cranial 10°",
        injection: "Visipaque 12 mL @ 4 mL/s (350 psi)",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 6.2,
        airKermaMGy: 31,
      },
      {
        id: "run-3",
        runNumber: 3,
        title: "Superselective Aneurysm Neck Run (2.7F Micro)",
        modality: "XA",
        videoSrc: "/samples/splenic_dsa.mp4",
        fps: 15,
        totalFrames: 120,
        projection: "LAO 20°, Caudal 5°",
        injection: "Visipaque 4 mL Hand Injection",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 3.1,
        airKermaMGy: 15,
      },
      {
        id: "run-4",
        runNumber: 4,
        title: "Post-Embolization Control (Coil Isolation)",
        modality: "XA",
        videoSrc: "/samples/splenic_dsa.mp4",
        fps: 15,
        totalFrames: 120,
        projection: "AP 0°, Cranial 0°",
        injection: "Visipaque 12 mL @ 4 mL/s (350 psi)",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 5.4,
        airKermaMGy: 26,
      },
    ],
  },
  {
    id: "bronchial-emb",
    title: "Bronchial Artery DSA (Hemoptysis)",
    patientName: "ANON_KESI_D",
    patientId: "SMS-IR-2026-986",
    diagnosis: "Severe Recurrent Hemoptysis Secondary to Post-TB Bronchiectasis",
    accessRoute: "Right CFA 5F Sheath",
    primaryHardware: "5F Mikaelsson Catheter + 2.0F Microcatheter + PVA 355-500 µm",
    contrastAgent: "Visipaque 320",
    modality: "XA",
    runs: [
      {
        id: "run-b1",
        runNumber: 1,
        title: "Thoracic Arch Aortogram & Bronchial Origin Screen",
        modality: "XA",
        videoSrc: "/samples/bronchial_dsa.mp4",
        fps: 15,
        totalFrames: 90,
        projection: "LAO 35°",
        injection: "Visipaque 25 mL @ 12 mL/s (600 psi)",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 8.5,
        airKermaMGy: 44,
      },
      {
        id: "run-b2",
        runNumber: 2,
        title: "Right ICBT Selective Angiogram (Mikaelsson 5F)",
        modality: "XA",
        videoSrc: "/samples/bronchial_dsa.mp4",
        fps: 15,
        totalFrames: 90,
        projection: "AP 0°",
        injection: "Visipaque 6 mL Hand Injection",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 4.1,
        airKermaMGy: 19,
      },
      {
        id: "run-b3",
        runNumber: 3,
        title: "Subselective Right Bronchial Hypervascular Blush",
        modality: "XA",
        videoSrc: "/samples/bronchial_dsa.mp4",
        fps: 15,
        totalFrames: 90,
        projection: "RAO 15°",
        injection: "Visipaque 4 mL Hand Injection",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 3.6,
        airKermaMGy: 16,
      },
      {
        id: "run-b4",
        runNumber: 4,
        title: "Post-PVA Particle Embolization Stasis Control",
        modality: "XA",
        videoSrc: "/samples/bronchial_dsa.mp4",
        fps: 15,
        totalFrames: 90,
        projection: "AP 0°",
        injection: "Visipaque 6 mL Hand Injection",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 3.9,
        airKermaMGy: 18,
      },
    ],
  },
  {
    id: "tace-hcc",
    title: "TACE Hepatic Angiogram",
    patientName: "ANON_RAMESH_K",
    patientId: "SMS-IR-2026-990",
    diagnosis: "Multifocal Hepatocellular Carcinoma (Segment VII 4.2cm)",
    accessRoute: "Right CFA 5F Sheath",
    primaryHardware: "5F RH Catheter + 2.0F Renegade Microcatheter + Lipiodol Emulsion",
    contrastAgent: "Visipaque 320",
    modality: "XA",
    runs: [
      {
        id: "run-t1",
        runNumber: 1,
        title: "Celiac Axis Diagnostic Baseline",
        modality: "XA",
        videoSrc: "/samples/tace_hepatic_dsa.mp4",
        fps: 15,
        totalFrames: 105,
        projection: "AP 0°, Cranial 5°",
        injection: "Visipaque 16 mL @ 5 mL/s",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 5.2,
        airKermaMGy: 25,
      },
      {
        id: "run-t2",
        runNumber: 2,
        title: "Proper Hepatic Artery DSA (Tumor Blush Seg VII)",
        modality: "XA",
        videoSrc: "/samples/tace_hepatic_dsa.mp4",
        fps: 15,
        totalFrames: 105,
        projection: "LAO 20°, Cranial 15°",
        injection: "Visipaque 10 mL @ 3 mL/s",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 4.9,
        airKermaMGy: 23,
      },
      {
        id: "run-t3",
        runNumber: 3,
        title: "Superselective Segment VII Anterior Feeding Run",
        modality: "XA",
        videoSrc: "/samples/tace_hepatic_dsa.mp4",
        fps: 15,
        totalFrames: 105,
        projection: "LAO 25°, Cranial 20°",
        injection: "Visipaque 3 mL Hand Injection",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 3.4,
        airKermaMGy: 14,
      },
      {
        id: "run-t4",
        runNumber: 4,
        title: "Post-Lipiodol & Doxorubicin Tumor Stasis",
        modality: "XA",
        videoSrc: "/samples/tace_hepatic_dsa.mp4",
        fps: 15,
        totalFrames: 105,
        projection: "AP 0°",
        injection: "Visipaque 8 mL Hand Injection",
        matrix: "1024 x 1024 DSA",
        dapGyCm2: 4.1,
        airKermaMGy: 19,
      },
    ],
  },
  {
    id: "aortic-ct",
    title: "Abdominal Aortic CT",
    patientName: "ANON_SHANKAR_L",
    patientId: "SMS-IR-2026-995",
    diagnosis: "Infrarenal Abdominal Aortic Aneurysm (AAA) 54mm EVAR Planning",
    accessRoute: "Peripheral IV 18G Ante-cubital",
    primaryHardware: "Siemens Somatom Force Dual-Source 128-slice CT",
    contrastAgent: "Omnipaque 350 (85 mL @ 4.5 mL/s)",
    modality: "CT",
    runs: [
      {
        id: "run-c1",
        runNumber: 1,
        title: "Axial Arterial Phase (0.625mm Renals to Iliacs)",
        modality: "CT",
        videoSrc: "/samples/aortic_ct.mp4",
        fps: 30,
        totalFrames: 216,
        projection: "Axial Volumetric",
        injection: "Omnipaque 350 (85 mL @ 4.5 mL/s + 40 mL saline flush)",
        matrix: "512 x 512 Helical",
        dapGyCm2: 14.5,
        airKermaMGy: 180,
      },
      {
        id: "run-c2",
        runNumber: 2,
        title: "Coronal Multi-Planar Reformation (MPR)",
        modality: "CT",
        videoSrc: "/samples/aortic_ct.mp4",
        fps: 30,
        totalFrames: 216,
        projection: "Coronal 2mm Slab",
        injection: "Post-reconstruction",
        matrix: "512 x 512 MPR",
        dapGyCm2: 0,
        airKermaMGy: 0,
      },
      {
        id: "run-c3",
        runNumber: 3,
        title: "Sagittal 3D Maximum Intensity Projection (MIP)",
        modality: "CT",
        videoSrc: "/samples/aortic_ct.mp4",
        fps: 30,
        totalFrames: 216,
        projection: "Sagittal 3D MIP",
        injection: "Post-reconstruction",
        matrix: "512 x 512 MIP",
        dapGyCm2: 0,
        airKermaMGy: 0,
      },
      {
        id: "run-c4",
        runNumber: 4,
        title: "Delayed Venous Phase IVC & Renal Vein Check",
        modality: "CT",
        videoSrc: "/samples/aortic_ct.mp4",
        fps: 30,
        totalFrames: 216,
        projection: "Axial 70s Delay",
        injection: "Venous Phase",
        matrix: "512 x 512 Helical",
        dapGyCm2: 9.8,
        airKermaMGy: 110,
      },
    ],
  },
];

export default function ImagingWorkstationPage() {
  const [activeTab, setActiveTab] = useState<SourceTab>("samples");

  // Sample Cases State
  const [selectedCaseId, setSelectedCaseId] = useState<string>("splenic-emb");
  const [selectedRunId, setSelectedRunId] = useState<string>("run-2");

  // Google Drive Stream State
  const [gdriveInput, setGdriveInput] = useState<string>("");
  const [gdriveConnectedSrc, setGdriveConnectedSrc] = useState<string>("");
  const [gdrivePatientId, setGdrivePatientId] = useState<string>("AIIMS-GDRIVE-ARCHIVE");
  const [gdriveModality, setGdriveModality] = useState<ImagingModality>("XA");
  const [gdriveDescription, setGdriveDescription] = useState<string>("Cloud Archive Angiogram");

  // Departmental PC (Tailscale) State
  const [tailscaleIp, setTailscaleIp] = useState<string>("100.85.12.34:8042");
  const [tailscaleSeriesPath, setTailscaleSeriesPath] = useState<string>(
    "/dicom-web/studies/1.2.840.113619/series/1.3.12/instances/1/frame-video.mp4"
  );
  const [tailscaleConnectedSrc, setTailscaleConnectedSrc] = useState<string>("");
  const [tailscaleModality, setTailscaleModality] = useState<ImagingModality>("XA");
  const [tailscaleStatus, setTailscaleStatus] = useState<"idle" | "connected" | "error">("idle");

  // Local Upload State
  const [uploadedSrc, setUploadedSrc] = useState<string>("");
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const [uploadPatientId, setUploadPatientId] = useState<string>("LOCAL-DROP-01");
  const [uploadModality, setUploadModality] = useState<ImagingModality>("XA");

  // Current active case
  const activeCase = useMemo(() => {
    return SAMPLE_CASES.find((c) => c.id === selectedCaseId) || SAMPLE_CASES[0];
  }, [selectedCaseId]);

  // Current active run in sample mode
  const activeRun = useMemo(() => {
    return (
      activeCase.runs.find((r) => r.id === selectedRunId) ||
      activeCase.runs[0]
    );
  }, [activeCase, selectedRunId]);

  // Handle sample case switch
  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    const targetCase = SAMPLE_CASES.find((c) => c.id === caseId) || SAMPLE_CASES[0];
    if (targetCase.runs.length > 0) {
      setSelectedRunId(targetCase.runs[0].id);
    }
  };

  // Google Drive Connect
  const handleConnectGdrive = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!gdriveInput.trim()) return;
    const directStream = parseGoogleDriveUrl(gdriveInput.trim());
    setGdriveConnectedSrc(directStream);
  };

  // Tailscale Connect
  const handleConnectTailscale = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!tailscaleIp.trim()) return;
    const formattedUrl = `http://${tailscaleIp.trim()}${
      tailscaleSeriesPath.startsWith("/") ? "" : "/"
    }${tailscaleSeriesPath.trim()}`;
    setTailscaleConnectedSrc(formattedUrl);
    setTailscaleStatus("connected");
  };

  // Compute active video props based on active tab
  const activePlayerProps = useMemo(() => {
    switch (activeTab) {
      case "samples":
        return {
          src: activeRun.videoSrc,
          patientId: activeCase.patientId,
          patientName: activeCase.patientName,
          modality: activeRun.modality,
          seriesDescription: `${activeRun.title} • ${activeRun.projection}`,
          frameRate: activeRun.fps,
          totalFrames: activeRun.totalFrames,
        };
      case "gdrive":
        return {
          src: gdriveConnectedSrc || "/samples/splenic_dsa.mp4",
          patientId: gdrivePatientId,
          patientName: "ANON_CLOUD_STREAM [DISHA]",
          modality: gdriveModality,
          seriesDescription: gdriveDescription,
          frameRate: 15,
          totalFrames: 120,
        };
      case "tailscale":
        return {
          src: tailscaleConnectedSrc || "/samples/tace_hepatic_dsa.mp4",
          patientId: `TAILSCALE-${tailscaleIp.split(":")[0]}`,
          patientName: "DEPT_PC_LAN_ANGIOSUITE",
          modality: tailscaleModality,
          seriesDescription: `Intranet DICOMweb • ${tailscaleIp}`,
          frameRate: 15,
          totalFrames: 105,
        };
      case "upload":
        return {
          src: uploadedSrc,
          patientId: uploadPatientId,
          patientName: uploadedFileName || "LOCAL_CINE_EXPORT",
          modality: uploadModality,
          seriesDescription: uploadedFileName ? `Local File: ${uploadedFileName}` : "Local Cine Review",
          frameRate: 15,
          totalFrames: 120,
        };
      default:
        return {
          src: activeRun.videoSrc,
          patientId: activeCase.patientId,
          patientName: activeCase.patientName,
          modality: activeRun.modality,
          seriesDescription: activeRun.title,
          frameRate: activeRun.fps,
          totalFrames: activeRun.totalFrames,
        };
    }
  }, [
    activeTab,
    activeCase,
    activeRun,
    gdriveConnectedSrc,
    gdrivePatientId,
    gdriveModality,
    gdriveDescription,
    tailscaleConnectedSrc,
    tailscaleIp,
    tailscaleModality,
    uploadedSrc,
    uploadedFileName,
    uploadPatientId,
    uploadModality,
  ]);

  return (
    <div className="flex-1 flex flex-col gap-4 max-w-[1600px] w-full mx-auto select-none">
      {/* 1. WORKSTATION HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                Imaging & Cine Viewer
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/30">
                  Zero-Lag Workstation
                </span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Zero-lag DSA fluoroscopy cines, pre-op CT/MRI slice scrubbing, and Google Drive / Tailscale streaming.
              </p>
            </div>
          </div>
        </div>

        {/* Clinical reference & security indicator */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[11px] border border-slate-200 dark:border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>DISHA / CIRSE Compliant</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 font-mono text-[11px] border border-sky-200 dark:border-sky-800/40">
            <Activity className="w-3.5 h-3.5 text-sky-500" />
            <span>SMS Angiosuite 1</span>
          </div>
        </div>
      </div>

      {/* 2. SOURCE SWITCHER TABS */}
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-200/70 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-300/60 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab("samples")}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "samples"
                ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4 shrink-0" />
            <span>Sample IR Cines & Scans</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("gdrive")}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "gdrive"
                ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Cloud className="w-4 h-4 shrink-0" />
            <span>Google Drive / Cloud Stream</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("tailscale")}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "tailscale"
                ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Server className="w-4 h-4 shrink-0" />
            <span>Departmental PC (Tailscale)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("upload")}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "upload"
                ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Upload className="w-4 h-4 shrink-0" />
            <span>Upload / Drop Video</span>
          </button>
        </div>

        {/* 3. SOURCE CONFIGURATION DRAWER / PANELS */}
        {activeTab === "samples" && (
          <div className="flex flex-wrap items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 shrink-0">
              Select Procedure:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 flex-1">
              {SAMPLE_CASES.map((item) => {
                const isSelected = item.id === selectedCaseId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectCase(item.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-sky-500 text-white shadow-xs"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-black/20 text-white">
                      {item.modality}
                    </span>
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "gdrive" && (
          <form
            onSubmit={handleConnectGdrive}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-2.5 p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
          >
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
              <Cloud className="w-4 h-4 text-sky-500 shrink-0" />
              <input
                type="text"
                value={gdriveInput}
                onChange={(e) => setGdriveInput(e.target.value)}
                placeholder="Paste AIIMS/SMS Google Drive Share URL or File ID (e.g. 1BxiMVs0XRA5nFM...)"
                className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={gdriveModality}
                onChange={(e) => setGdriveModality(e.target.value)}
                className="px-2.5 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 focus:outline-none"
              >
                <option value="XA">XA (DSA Cine)</option>
                <option value="CT">CT (Axial Stack)</option>
                <option value="MR">MR (Cross-Section)</option>
                <option value="US">US (Doppler)</option>
              </select>

              <button
                type="submit"
                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-xs flex items-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5" />
                Connect Cloud Stream
              </button>
            </div>
          </form>
        )}

        {activeTab === "tailscale" && (
          <form
            onSubmit={handleConnectTailscale}
            className="flex flex-col gap-2.5 p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
          >
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                <Radio className="w-4 h-4 text-emerald-500 shrink-0" />
                <input
                  type="text"
                  value={tailscaleIp}
                  onChange={(e) => setTailscaleIp(e.target.value)}
                  placeholder="Departmental PC Tailscale IP:Port (e.g. 100.85.12.34:8042)"
                  className="w-full bg-transparent text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-[11px] font-mono border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>WireGuard Mesh P2P</span>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-xs"
                >
                  Stream from Dept PC
                </button>
              </div>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-400">Department Presets:</span>
              <button
                type="button"
                onClick={() => setTailscaleIp("100.85.12.34:8042")}
                className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono transition-colors cursor-pointer"
              >
                Angiosuite 1 (100.85.12.34:8042)
              </button>
              <button
                type="button"
                onClick={() => setTailscaleIp("100.85.12.35:8042")}
                className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono transition-colors cursor-pointer"
              >
                Angiosuite 2 Biplane (100.85.12.35:8042)
              </button>
              <button
                type="button"
                onClick={() => setTailscaleIp("100.85.12.40:8042")}
                className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono transition-colors cursor-pointer"
              >
                Reporting Room PACS (100.85.12.40:8042)
              </button>
            </div>
          </form>
        )}

        {activeTab === "upload" && (
          <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">Direct Local File Review: </span>
              Drop any fluoroscopy or CT/MRI video (.mp4 / .webm) directly into the viewer canvas for instant client-side rendering with zero server upload.
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                100% In-Browser Privacy
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 4. WORKSTATION MAIN VIEWPORT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* LEFT / TOP PANE: Case Metadata & Angiography Runs List (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {/* Active Case Summary Card */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-500 text-[10px] font-bold font-mono uppercase tracking-wide">
                  Active Clinical Study
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {activeCase.title}
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                {activeCase.patientId}
              </span>
            </div>

            <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Diagnosis:</span>
                <span className="font-medium text-slate-900 dark:text-slate-200 text-right max-w-[200px] truncate">
                  {activeCase.diagnosis}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Access:</span>
                <span className="font-medium text-slate-900 dark:text-slate-200">
                  {activeCase.accessRoute}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Hardware:</span>
                <span className="font-medium text-slate-900 dark:text-slate-200 text-right max-w-[190px] truncate">
                  {activeCase.primaryHardware}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Contrast:</span>
                <span className="font-medium text-slate-900 dark:text-slate-200">
                  {activeCase.contrastAgent}
                </span>
              </div>
            </div>
          </div>

          {/* Sequential Series Runs Selector */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-500" />
                Angiosuite Runs & Series ({activeCase.runs.length})
              </h3>
              <span className="text-[10px] font-mono text-slate-400">Click to load</span>
            </div>

            <div className="flex flex-col gap-2">
              {activeCase.runs.map((run) => {
                const isSelected = run.id === selectedRunId && activeTab === "samples";
                return (
                  <button
                    key={run.id}
                    type="button"
                    onClick={() => {
                      if (activeTab !== "samples") setActiveTab("samples");
                      setSelectedRunId(run.id);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative group flex items-start gap-2.5 ${
                      isSelected
                        ? "bg-sky-500/10 border-sky-500/60 shadow-xs"
                        : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 ${
                        isSelected
                          ? "bg-sky-500 text-white shadow-xs"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-sky-500/20 group-hover:text-sky-400"
                      }`}
                    >
                      {run.runNumber}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {run.title}
                        </span>
                        <span className="text-[10px] font-mono font-medium text-slate-400 shrink-0">
                          {run.fps} FPS
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="truncate">{run.projection}</span>
                        <span>•</span>
                        <span className="font-mono text-[10px]">{run.totalFrames} f</span>
                      </div>

                      {run.dapGyCm2 && (
                        <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-slate-400">
                          <span>DAP: {run.dapGyCm2} Gy·cm²</span>
                          <span>•</span>
                          <span>AK: {run.airKermaMGy} mGy</span>
                        </div>
                      )}
                    </div>

                    {isSelected && (
                      <ChevronRight className="w-4 h-4 text-sky-500 shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Radiation Dose & Procedural Safety Summary */}
          <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs space-y-1.5 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold text-xs">
              <Zap className="w-3.5 h-3.5" />
              Radiation & Contrast Ceiling
            </div>
            <p className="text-[11px] leading-relaxed">
              Total procedure fluoroscopy dose tracked deterministically. Contrast ceiling guarded against CI-AKI limits (Cigarroa MACD: 5 mL × weight / SCr).
            </p>
          </div>
        </div>

        {/* RIGHT / MAIN PANE: Interactive DicomCinePlayer (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          <DicomCinePlayer
            src={activePlayerProps.src}
            patientId={activePlayerProps.patientId}
            patientName={activePlayerProps.patientName}
            modality={activePlayerProps.modality}
            seriesDescription={activePlayerProps.seriesDescription}
            frameRate={activePlayerProps.frameRate}
            totalFrames={activePlayerProps.totalFrames}
            autoPlay={false}
            loop={true}
            onFileDrop={(file) => {
              setUploadedFileName(file.name);
              setUploadedSrc(URL.createObjectURL(file));
              setActiveTab("upload");
            }}
          />

          {/* Quick Technical Telemetry Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">Matrix Acquired</span>
              <p className="text-xs font-mono font-bold text-slate-900 dark:text-white mt-0.5">
                {activeRun.matrix || "1024 x 1024"}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">Power Injection</span>
              <p className="text-xs font-medium text-slate-900 dark:text-white mt-0.5 truncate">
                {activeRun.injection || "Automated DSA"}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">Playback Engine</span>
              <p className="text-xs font-mono font-bold text-sky-500 mt-0.5">
                HTML5 Canvas / GPU
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">Frame Scrubbing</span>
              <p className="text-xs font-mono font-bold text-emerald-500 mt-0.5">
                Sub-Frame Wheel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
