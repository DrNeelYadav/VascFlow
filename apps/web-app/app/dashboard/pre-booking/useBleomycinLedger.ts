"use client";

import { useState } from "react";
import { SclerotherapyDetails, SclerotherapySession } from "./preBookingTypes";

/**
 * Initial Ground-Truth Session Ledger from AIIMS Delhi Clinical Record
 * (Sourced from verified clinical photograph media_1792114459518_2eb6c677.jpg)
 */
export const INITIAL_AIIMS_SCLERO_SESSIONS: SclerotherapySession[] = [
  {
    id: "sess-1",
    sessionNumber: 1,
    date: "2026-05-26",
    sclerosant: "Bleomycin",
    dose: "5 IU",
    compressionApplied: "(+) R. IJV",
    followUpSize: "Baseline 45x30mm, 20% volume regression",
    followUpMorphology: "Tense spongy -> Compressible cavitary",
    complications: "None. No localized necrosis or facial nerve weakness",
    advice: "Recall in 4 weeks for repeat sclerotherapy",
  },
  {
    id: "sess-2",
    sessionNumber: 2,
    date: "2026-06-06",
    sclerosant: "Polidocanol (6cc air + 2cc PD)",
    dose: "6+2cc (Tessari Foam 1%)",
    compressionApplied: "(+) R. IJV",
    followUpSize: "Further 40% regression, residual cavity 18mm",
    followUpMorphology: "Significantly softened cavity",
    complications: "Transient localized erythema, resolved",
    advice: "Continue gentle manual compression. Next OPD dating in 2 weeks",
  },
  {
    id: "sess-3",
    sessionNumber: 3,
    date: "2026-06-11",
    sclerosant: "Polidocanol",
    dose: "2cc (1% solution)",
    compressionApplied: "(+) Gentle local pressure",
    followUpSize: "Residual slow-filling pocket <10mm",
    followUpMorphology: "Thrombosed cavitary component",
    complications: "None",
    advice: "Clinical review with repeat Doppler at 6 weeks",
  },
];

export const useBleomycinLedger = () => {
  const [details, setDetails] = useState<SclerotherapyDetails>({
    symptomDuration: "3 years",
    painScoreVas: 4,
    facialDisfigurement: true,
    functionalImpairmentNotes: "Intermittent painful swelling over right cheek; cosmetic asymmetry",
    complaints: "Progressive bluish compressible swelling over right parotid-masseteric space with post-exertional aching",
    baselineUsgDimensions: "48 x 32 x 26 mm with low-velocity venous lake signals",
    baselineMriFindings: "Extensive hyperintense lobulated mass on T2/STIR involving right buccal and masseter spaces without high-flow arterial feeders",
    fluidAspirated: "Blood",
    contrastVolInjectedMl: "2.5 ml",
    appearance: "Cavitary",
    drainingVeinStatus: "Not Present",
    drainingVeinPathway: "None",
    compressionStatus: "Present",
    compressionSite: "Right Internal Jugular Vein (R. IJV)",
    sessions: INITIAL_AIIMS_SCLERO_SESSIONS,
  });

  const updateField = <K extends keyof SclerotherapyDetails>(field: K, val: SclerotherapyDetails[K]) => {
    setDetails((prev) => ({ ...prev, [field]: val }));
  };

  const addSession = () => {
    const nextNum = details.sessions.length + 1;
    const newSession: SclerotherapySession = {
      id: `sess-${Date.now()}`,
      sessionNumber: nextNum,
      date: new Date().toISOString().split("T")[0],
      sclerosant: "Bleomycin",
      dose: "5 IU",
      compressionApplied: "(+) R. IJV",
      followUpSize: "To be evaluated at follow-up",
      followUpMorphology: "Under surveillance",
      complications: "None",
      advice: "4-week clinic follow-up",
    };
    setDetails((prev) => ({ ...prev, sessions: [...prev.sessions, newSession] }));
  };

  const removeSession = (id: string) => {
    setDetails((prev) => ({
      ...prev,
      sessions: prev.sessions.filter((s) => s.id !== id),
    }));
  };

  const updateSession = (id: string, field: keyof SclerotherapySession, val: string) => {
    setDetails((prev) => ({
      ...prev,
      sessions: prev.sessions.map((s) => (s.id === id ? { ...s, [field]: val } : s)),
    }));
  };

  return {
    details,
    updateField,
    addSession,
    removeSession,
    updateSession,
    setDetails,
  };
};
