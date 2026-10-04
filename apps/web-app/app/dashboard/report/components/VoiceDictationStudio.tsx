"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Mic,
  MicOff,
  Radio,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Copy,
  ArrowRight,
  Sliders,
  Activity,
} from "lucide-react";
import { recordClientTelemetryError } from "@vascule/utils";

export interface VascularExtractedEntities {
  accessSite?: string;
  sheathSize?: string;
  catheter?: string;
  embolicAgent?: string;
  hemostasisMethod?: string;
  rawTranscript?: string;
}

export interface VoiceDictationStudioProps {
  onEntitiesExtracted?: (entities: VascularExtractedEntities) => void;
  onTranscriptChange?: (transcript: string) => void;
  initialTranscript?: string;
  compact?: boolean;
}

/**
 * Acoustic Noise Filter & Angiosuite Phonetic Calibrator
 * 
 * Cleans ambient angiosuite acoustic artifacts (C-arm hydraulic hum, hemodynamics alarms,
 * high-flow laminar airflow HVAC rushing, suction gurgle) before vascular entity extraction.
 */
export function filterAngiosuiteAcousticNoise(rawTranscript: string): string {
  if (!rawTranscript) return "";

  let cleaned = rawTranscript;

  // 1. Strip bracketed / parenthesized speech API annotations e.g. [alarm], [beep], *beep*, (noise)
  cleaned = cleaned.replace(/\[[^\]]*\]|\*[^*]*\*|<[^>]*>/g, " ");
  cleaned = cleaned.replace(/\([^\)]*(?:noise|inaudible|cough|alarm|beep|chatter)[^\)]*\)/gi, " ");

  // 2. Filter hemodynamic monitor alarms & physiological telemetry chatter
  cleaned = cleaned.replace(
    /\b(?:beeps?|alarms?|alarm\s+sounding|alarm\s+beeping|pulse\s+ox(?:imeter)?\s+tone|heart\s+rate\s+\d+|spo2\s+\d+\s*%?|bpm\s+\d+|map\s+\d+|saturation\s+\d+\s*%?|nibp\s+cycling)(?!\w)/gi,
    " "
  );

  // 3. Filter C-arm hydraulic pump & mechanical movement acoustic artifacts
  cleaned = cleaned.replace(
    /\b(?:c-?arm\s+(?:moving|rotating|hum|noise)|hydraulic(?:\s+pump)?\s+(?:whine|hum|noise)|hydraulic\s+pump|table\s+(?:tilt|pan|elevation|movement)|motor\s+hum|fluoroscopy\s+pedal\s+click)\b/gi,
    " "
  );

  // 4. Filter high-flow laminar HVAC & surgical suction acoustic white noise
  cleaned = cleaned.replace(
    /\b(?:laminar\s+(?:flow|hvac|air(?:flow)?)|hvac\s+(?:rush|noise)|ventilation\s+whoosh|suction\s+(?:on|hiss|gurgle)|white\s+noise)\b/gi,
    " "
  );

  // 5. Normalization: collapse multiple spaces and trim
  return cleaned.replace(/\s+/g, " ").trim();
}

/**
 * Robust regex & token rules to extract vascular interventional hardware & parameters
 */
export function extractVascularEntities(transcript: string): VascularExtractedEntities {
  const filtered = filterAngiosuiteAcousticNoise(transcript);
  const result: VascularExtractedEntities = {
    rawTranscript: transcript,
  };

  // 1. Access Site
  const accessMatch = filtered.match(
    /\b((?:right|left|bilateral)\s+)?(common\s+femoral\s+artery|femoral\s+artery|cfa|common\s+femoral\s+vein|femoral\s+vein|cfv|radial\s+artery|distal\s+radial|internal\s+jugular\s+vein|jugular\s+vein|ijv|popliteal\s+artery|popliteal\s+vein|brachial\s+artery|tibial\s+artery|pedal\s+artery)\b/i
  );
  if (accessMatch) {
    const side = accessMatch[1] ? accessMatch[1].trim() : "";
    const site = accessMatch[2].trim();
    result.accessSite = side ? `${capitalize(side)} ${capitalize(site)}` : capitalize(site);
  }

  // 2. Sheath Size (e.g., 4F, 5 French, 6F, 7F, 8F, 10F, 12F)
  const sheathMatch = filtered.match(
    /\b(\d{1,2}(?:\.\d)?)\s*(?:french|fr|f)\b(?:\s+(?:sheath|introducer|pinnacle|radiofocus))?/i
  );
  if (sheathMatch) {
    result.sheathSize = `${sheathMatch[1].toUpperCase()}F`;
  }

  // 3. Catheter (e.g., Cobra, Simmons 1/2/3, Celiac, Vertebral, Pigtail, Microcatheter, Progreat, Fathom)
  const catheterMatch = filtered.match(
    /\b(cobra(?:\s*(?:1|2|c1|c2))?|simmons(?:\s*(?:1|2|3|c1|c2|c3))?|sim\s*[123]|celiac(?!\s*(?:trunk|axis|artery|vessel))|vertebral|pigtail|multipurpose|headhunter|progreat(?:\s*\d+\.\d+f?)?|fathom|cantata|renegade|microcatheter(?:\s+[a-z0-9]+)?)\b/i
  );
  if (catheterMatch) {
    result.catheter = capitalize(catheterMatch[0].trim());
  }

  // 4. Embolic Agent (e.g., Lipiodol, PVA particles, Gelfoam, Coils, Onyx, VenaSeal, Glue)
  const embolicMatch = filtered.match(
    /\b(lipiodol|ethiodol|pva(?:\s*particles)?(?:\s*\d+-\d+)?|gelfoam(?:\s*slurry|\s*torpedoes|\s*sponge)?|microcoils?|coils?|onyx(?:\s*18|\s*34)?|squid|phil|venaseal|cyanoacrylate|histoacryl|glue|doxorubicin|bleomycin)\b/i
  );
  if (embolicMatch) {
    result.embolicAgent = capitalize(embolicMatch[0].trim());
  }

  // 5. Hemostasis Method (e.g., Manual Compression, Angio-Seal, Perclose, Femoseal, TR Band)
  const hemostasisMatch = filtered.match(
    /\b(angio-?seal(?:\s*\d+f)?|perclose(?:\s*proglide)?|proglide|femoseal|manta|manual\s+compression|pressure\s+dressing|radial\s+band|tr\s+band|hemostasis\s+valve)\b/i
  );
  if (hemostasisMatch) {
    result.hemostasisMethod = capitalize(hemostasisMatch[0].trim());
  }

  return result;
}

function capitalize(str: string): string {
  return str
    .split(" ")
    .map((w) => {
      // Handle hyphenated words like Angio-Seal
      if (w.includes("-")) {
        return w
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
          .join("-");
      }
      // Handle French sizes like 6f -> 6F
      if (/^\d{1,2}f$/i.test(w)) {
        return w.toUpperCase();
      }
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ");
}

export function VoiceDictationStudio({
  onEntitiesExtracted,
  onTranscriptChange,
  initialTranscript = "",
  compact = false,
}: VoiceDictationStudioProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState(initialTranscript);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [hasSpeechApi, setHasSpeechApi] = useState(true);
  const [extractedEntities, setExtractedEntities] = useState<VascularExtractedEntities>(() =>
    extractVascularEntities(initialTranscript)
  );
  const [audioLevel, setAudioLevel] = useState(0);

  const recognitionRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize Speech Recognition API
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setHasSpeechApi(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let finalStr = "";
      let interimStr = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalStr += event.results[i][0].transcript + " ";
        } else {
          interimStr += event.results[i][0].transcript;
        }
      }

      if (finalStr) {
        setTranscript((prev) => {
          const updated = (prev + " " + finalStr).trim();
          onTranscriptChange?.(updated);
          const entities = extractVascularEntities(updated);
          setExtractedEntities(entities);
          onEntitiesExtracted?.(entities);
          return updated;
        });
      }
      setInterimTranscript(interimStr);
    };

    recognition.onerror = (event: any) => {
      console.warn("[VoiceDictation] Speech recognition error:", event.error);
      recordClientTelemetryError({
        component: "VoiceDictationStudio",
        errorType: "SPEECH_RECOGNITION_ERROR",
        message: `SpeechRecognition error: ${event.error || "unknown"}`,
        context: { error: event.error, message: event.message },
      });
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        setIsListening(false);
      }
    };

    recognition.onend = () => {
      if (isListening) {
        try {
          recognition.start();
        } catch {
          setIsListening(false);
        }
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
    };
  }, [isListening, onEntitiesExtracted, onTranscriptChange]);

  // Audio waveform animation simulation when listening
  useEffect(() => {
    if (!isListening) {
      setAudioLevel(0);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const pulse = () => {
      setAudioLevel(Math.floor(Math.random() * 85) + 15);
      animationFrameRef.current = requestAnimationFrame(() => {
        setTimeout(pulse, 120);
      });
    };
    pulse();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isListening]);

  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) {
      if (!hasSpeechApi) {
        // Fallback simulation for headless environments
        handleInsertSample("Right common femoral artery access gained under ultrasound. 6F sheath placed. Simmons 2 catheter used. Embolized with Lipiodol and PVA. Angio-Seal 6F closure.");
      }
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error("Failed to start speech recognition:", err);
      }
    }
  }, [isListening, hasSpeechApi]);

  const handleInsertSample = (sample: string) => {
    const updated = transcript ? `${transcript} ${sample}` : sample;
    setTranscript(updated);
    onTranscriptChange?.(updated);
    const entities = extractVascularEntities(updated);
    setExtractedEntities(entities);
    onEntitiesExtracted?.(entities);
  };

  const handleClear = () => {
    setTranscript("");
    setInterimTranscript("");
    setExtractedEntities({});
    onTranscriptChange?.("");
    onEntitiesExtracted?.({});
  };

  const hasAnyEntity =
    extractedEntities.accessSite ||
    extractedEntities.sheathSize ||
    extractedEntities.catheter ||
    extractedEntities.embolicAgent ||
    extractedEntities.hemostasisMethod;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-slate-100 font-sans shadow-lg">
      {/* Top Bar: Controls & Status */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleListening}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium transition-all ${
              isListening
                ? "bg-rose-600 hover:bg-rose-500 text-white animate-pulse"
                : "bg-emerald-600 hover:bg-emerald-500 text-white"
            }`}
          >
            {isListening ? (
              <>
                <MicOff className="w-3.5 h-3.5" />
                <span>Stop Dictation</span>
              </>
            ) : (
              <>
                <Mic className="w-3.5 h-3.5" />
                <span>Voice Dictate</span>
              </>
            )}
          </button>

          {isListening && (
            <div className="flex items-center gap-1.5 px-2 py-1 bg-rose-950/60 border border-rose-800/60 rounded text-xs text-rose-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" />
              <span>LIVE</span>
              <div className="flex items-center gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1 bg-rose-400 rounded-full transition-all"
                    style={{
                      height: `${Math.max(4, (audioLevel * (i + 1)) / 100)}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {!hasSpeechApi && (
            <span className="text-[10px] text-amber-400 font-mono bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
              WebSpeech Unset - Simulated Mode
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              handleInsertSample(
                "Right common femoral artery access. 6F sheath. Simmons 2 catheter used for superselective embolization with Lipiodol and PVA particles. Hemostasis achieved with Angio-Seal 6F."
              )
            }
            className="text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800 px-2 py-1 rounded transition-colors font-mono"
            title="Inject simulated clinical sample"
          >
            Sample IR Run
          </button>
          {transcript && (
            <button
              type="button"
              onClick={handleClear}
              className="text-xs text-slate-400 hover:text-rose-400 px-2 py-1 rounded font-mono"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Live Transcript Display */}
      <div className="relative mb-3">
        <div className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 min-h-16 text-xs font-mono text-slate-200 leading-relaxed overflow-y-auto max-h-36">
          {transcript ? (
            <span>{transcript}</span>
          ) : (
            <span className="text-slate-500 italic">
              {isListening
                ? "Listening... Speak vascular findings and procedural hardware..."
                : "Continuous dictation idle. Click 'Voice Dictate' to stream hardware & access notes."}
            </span>
          )}
          {interimTranscript && (
            <span className="text-slate-400 italic"> {interimTranscript}</span>
          )}
        </div>
      </div>

      {/* Real-Time Extracted Vascular Entities Table */}
      <div className="bg-slate-950/70 border border-slate-800/80 rounded p-2.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Parsed Vascular Entities</span>
          </div>
          {hasAnyEntity && (
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Auto-Synchronized
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono">
          {/* Access Site */}
          <div className="bg-slate-900 border border-slate-800 rounded p-2">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Access Site</div>
            <div
              className={`font-semibold truncate ${
                extractedEntities.accessSite ? "text-emerald-300" : "text-slate-600"
              }`}
            >
              {extractedEntities.accessSite || "None"}
            </div>
          </div>

          {/* Sheath Size */}
          <div className="bg-slate-900 border border-slate-800 rounded p-2">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Sheath</div>
            <div
              className={`font-semibold truncate ${
                extractedEntities.sheathSize ? "text-emerald-300" : "text-slate-600"
              }`}
            >
              {extractedEntities.sheathSize || "None"}
            </div>
          </div>

          {/* Catheter */}
          <div className="bg-slate-900 border border-slate-800 rounded p-2">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Catheter</div>
            <div
              className={`font-semibold truncate ${
                extractedEntities.catheter ? "text-emerald-300" : "text-slate-600"
              }`}
            >
              {extractedEntities.catheter || "None"}
            </div>
          </div>

          {/* Embolic Agent */}
          <div className="bg-slate-900 border border-slate-800 rounded p-2">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Embolic</div>
            <div
              className={`font-semibold truncate ${
                extractedEntities.embolicAgent ? "text-emerald-300" : "text-slate-600"
              }`}
            >
              {extractedEntities.embolicAgent || "None"}
            </div>
          </div>

          {/* Hemostasis Method */}
          <div className="bg-slate-900 border border-slate-800 rounded p-2 col-span-2 sm:col-span-1">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Hemostasis</div>
            <div
              className={`font-semibold truncate ${
                extractedEntities.hemostasisMethod ? "text-emerald-300" : "text-slate-600"
              }`}
            >
              {extractedEntities.hemostasisMethod || "None"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
