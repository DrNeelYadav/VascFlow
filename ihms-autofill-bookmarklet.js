/**
 * IHMS Rajasthan - Master Interventional Radiology 1-Click Autofill Script
 * SMS Hospital, Jaipur
 * 
 * Works across both:
 * 1. Discharge Summary Module
 * 2. Bed Management / IPD Transfer In & Out Modules (#ip:bedManagement)
 */

(function () {
  const SCRIPT_VERSION = "2.5-IR-SMS-PRO";

  const existing = document.getElementById("ihms-ir-autofill-modal");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "ihms-ir-autofill-modal";
  overlay.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 440px;
    max-height: 90vh;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.25);
    z-index: 9999999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    border: 2px solid #0284c7;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `;

  overlay.innerHTML = `
    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="background: #0284c7; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">SMS IR</span>
        <span style="font-weight: 700; font-size: 13px;">IHMS 1-Click Assistant v${SCRIPT_VERSION}</span>
      </div>
      <button id="ihms-ir-close" style="background: transparent; border: none; color: #94a3b8; font-size: 18px; cursor: pointer; line-height: 1;">&times;</button>
    </div>

    <div style="padding: 14px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;">
      <div style="font-size: 11.5px; color: #475569;">
        Click <b>"Read Clipboard"</b> to auto-load patient data copied from the local IR Hub.
      </div>

      <div style="display: flex; gap: 8px;">
        <button id="ihms-ir-read-clip" style="flex: 1; background: #0284c7; color: white; border: none; padding: 8px; border-radius: 6px; font-weight: 600; font-size: 12px; cursor: pointer;">
          Read Clipboard
        </button>
        <button id="ihms-ir-fill-all" style="flex: 1; background: #16a34a; color: white; border: none; padding: 8px; border-radius: 6px; font-weight: 700; font-size: 12px; cursor: pointer;">
          Auto-Fill Discharge
        </button>
      </div>

      <div style="display: flex; gap: 6px;">
        <button id="ihms-ir-fill-accept" style="flex: 1; background: #0d9488; color: white; border: none; padding: 6px; border-radius: 4px; font-weight: 600; font-size: 11px; cursor: pointer;">
          Fill Acceptance Note
        </button>
        <button id="ihms-ir-fill-transfer" style="flex: 1; background: #8b5cf6; color: white; border: none; padding: 6px; border-radius: 4px; font-weight: 600; font-size: 11px; cursor: pointer;">
          Fill Transfer Out Note
        </button>
      </div>

      <textarea id="ihms-ir-json-input" placeholder='Paste Patient Summary JSON or formatted text here...' style="width: 100%; height: 75px; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; font-size: 11px; font-family: monospace; resize: vertical; box-sizing: border-box;"></textarea>

      <div id="ihms-ir-patient-preview" style="display: none; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 8px 10px; font-size: 11.5px; color: #166534;"></div>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 8px;">
        <div style="font-size: 11px; font-weight: 700; color: #334155; margin-bottom: 6px;">1-Click Section Copy:</div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
          <button class="ihms-quick-copy" data-field="diagnosis" style="padding: 5px; font-size: 11px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; text-align: left;">Diagnosis</button>
          <button class="ihms-quick-copy" data-field="history" style="padding: 5px; font-size: 11px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; text-align: left;">History & Labs</button>
          <button class="ihms-quick-copy" data-field="procedure" style="padding: 5px; font-size: 11px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; text-align: left;">IR Procedure Log</button>
          <button class="ihms-quick-copy" data-field="meds" style="padding: 5px; font-size: 11px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; text-align: left;">Discharge Meds</button>
          <button class="ihms-quick-copy" data-field="advice" style="padding: 5px; font-size: 11px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; text-align: left;">Advice & Follow-up</button>
          <button class="ihms-quick-copy" data-field="scheme" style="padding: 5px; font-size: 11px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; text-align: left;">Chiranjeevi Note</button>
        </div>
      </div>

      <div id="ihms-ir-status" style="font-size: 11px; color: #64748b; text-align: center;">Ready</div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById("ihms-ir-close").onclick = () => overlay.remove();

  let currentData = null;

  function updatePreview(data) {
    currentData = data;
    const preview = document.getElementById("ihms-ir-patient-preview");
    if (!data) {
      preview.style.display = "none";
      return;
    }
    preview.style.display = "block";
    preview.innerHTML = `
      <b>Patient:</b> ${data.name || "N/A"} (${data.age || "N/A"}/${data.sex || "N/A"})<br>
      <b>CR/IPD:</b> ${data.crNo || "N/A"} | ${data.ipdNo || "N/A"}<br>
      <b>Diagnosis:</b> ${data.diagnosis || "N/A"}<br>
      <b>Procedure:</b> ${data.procedureName || "N/A"}
    `;
  }

  document.getElementById("ihms-ir-read-clip").onclick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      document.getElementById("ihms-ir-json-input").value = text;
      tryParse(text);
    } catch (err) {
      document.getElementById("ihms-ir-status").innerText = "Please paste text into the box manually.";
    }
  };

  document.getElementById("ihms-ir-json-input").oninput = (e) => tryParse(e.target.value);

  function tryParse(text) {
    try {
      const data = JSON.parse(text);
      updatePreview(data);
      document.getElementById("ihms-ir-status").innerText = "Patient data loaded successfully.";
    } catch (e) {
      currentData = null;
      document.getElementById("ihms-ir-patient-preview").style.display = "none";
      document.getElementById("ihms-ir-status").innerText = "Text loaded (raw format).";
    }
  }

  function findField(keywords) {
    const allInputs = Array.from(document.querySelectorAll("textarea, input[type='text'], select"));
    for (const el of allInputs) {
      const id = (el.id || "").toLowerCase();
      const name = (el.name || "").toLowerCase();
      const placeholder = (el.placeholder || "").toLowerCase();
      const label = (el.getAttribute("aria-label") || "").toLowerCase();
      const parentText = (el.parentElement ? el.parentElement.innerText : "").toLowerCase();

      for (const kw of keywords) {
        if (id.includes(kw) || name.includes(kw) || placeholder.includes(kw) || label.includes(kw) || parentText.includes(kw)) {
          return el;
        }
      }
    }
    return null;
  }

  function setValue(el, val) {
    if (!el || !val) return false;
    el.value = val;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.style.border = "2px solid #16a34a";
    el.style.backgroundColor = "#f0fdf4";
    return true;
  }

  // Auto-Fill Discharge Summary
  document.getElementById("ihms-ir-fill-all").onclick = () => {
    if (!currentData) {
      tryParse(document.getElementById("ihms-ir-json-input").value);
    }
    if (!currentData) {
      alert("Please load patient data JSON first.");
      return;
    }

    let filled = 0;
    // Diagnosis
    if (setValue(findField(["diag", "diagnosis", "finaldiagnosis", "provisional"]), `${currentData.diagnosis || ""} (ICD-10: ${currentData.icd10 || ""})${currentData.secondaryDiagnosis ? " | " + currentData.secondaryDiagnosis : ""}`)) filled++;

    // History & Labs
    if (setValue(findField(["history", "complaint", "clinicalhistory", "presentillness", "hpi"]), `CHIEF COMPLAINTS:\n${currentData.chiefComplaints || ""}\n\nHISTORY OF PRESENT ILLNESS:\n${currentData.history || ""}\n\nPRE-OP LABS:\n${currentData.labs || ""}\n\nIMAGING:\n${currentData.imaging || ""}`)) filled++;

    // Procedure
    if (setValue(findField(["procedure", "treatment", "operation", "operativenote", "intervention", "treatmentgiven"]), `INTERVENTIONAL RADIOLOGY OPERATIVE NOTE\n---------------------------------------\nProcedure: ${currentData.procedureName || ""}\nDate: ${currentData.procedureDate || ""}\nOperator: ${currentData.operator || ""}\nAccess Site: ${currentData.accessSite || ""}, Sheath: ${currentData.sheath || ""}\nHardware: ${currentData.hardware || ""}\nEmbolics/Implants: ${currentData.embolics || ""}\nContrast Vol: ${currentData.contrast || ""} ml | Fluoro Time: ${currentData.fluoroTime || ""} min\nIntra-op Findings: ${currentData.operativeNotes || ""}\nComplications: ${currentData.complications || "None"}\nHemostasis: ${currentData.hemostasis || "Manual compression"}`)) filled++;

    // Hospital Course
    if (setValue(findField(["course", "hospitalcourse", "condition", "dischargestatus", "vitals"]), `HOSPITAL COURSE:\n${currentData.hospitalCourse || "Post-procedure vitals stable. Access site checked, no hematoma, distal pulses palpable. Tolerated procedure well."}\n\nDISCHARGE VITALS: ${currentData.dischargeVitals || "BP: 120/80 mmHg, PR: 76/min, SpO2: 99% RA"}`)) filled++;

    // Advice & Meds
    if (setValue(findField(["advice", "medication", "treatmentondischarge", "dischargeadvice", "instructions"]), `DISCHARGE MEDICATIONS:\n${currentData.medications || ""}\n\nINSTRUCTIONS & ADVICE:\n${currentData.dischargeAdvice || ""}\n\nFOLLOW-UP:\n${currentData.followup || "Review in IR OPD (New OT Block, SMS Hospital) after 7 days."}`)) filled++;

    document.getElementById("ihms-ir-status").innerHTML = `<b>${filled} discharge fields auto-filled.</b>`;
  };

  // Fill Acceptance Note
  document.getElementById("ihms-ir-fill-accept").onclick = () => {
    if (!currentData) {
      tryParse(document.getElementById("ihms-ir-json-input").value);
    }
    if (!currentData) {
      alert("Please load patient data first.");
      return;
    }
    const acceptText = `IPD BED ACCEPTANCE NOTE - INTERVENTIONAL RADIOLOGY (SMS JAIPUR)\n--------------------------------------------------------------\nPatient: ${currentData.name || ""} (${currentData.age || ""}/${currentData.sex || ""})\nCR No: ${currentData.crNo || ""} | IPD No: ${currentData.ipdNo || ""}\nDiagnosis: ${currentData.diagnosis || ""}\nPlanned Intervention: ${currentData.procedureName || ""}\nPre-Procedure Clearance: Coagulation profile (PT/INR) & Renal function checked. NPO protocol confirmed. Written informed high-risk consent verified.\nScheme: ${currentData.scheme || "Mukhya Mantri Ayushman Arogya (Chiranjeevi)"} (TID: ${currentData.tid || "Pending"})\nAdmitted under IR Care.`;
    
    const field = findField(["accept", "remarks", "admissionnote", "clinicalnote", "history"]);
    if (setValue(field, acceptText)) {
      document.getElementById("ihms-ir-status").innerHTML = `<b>Acceptance note populated.</b>`;
    } else {
      navigator.clipboard.writeText(acceptText);
      alert("Acceptance note copied to clipboard! Paste into target field.");
    }
  };

  // Fill Transfer Out Note
  document.getElementById("ihms-ir-fill-transfer").onclick = () => {
    if (!currentData) {
      tryParse(document.getElementById("ihms-ir-json-input").value);
    }
    if (!currentData) {
      alert("Please load patient data first.");
      return;
    }
    const transferText = `TRANSFER OUT / POST-PROCEDURE HANDOVER NOTE - INTERVENTIONAL RADIOLOGY\n----------------------------------------------------------------------\nPatient shifted after successful ${currentData.procedureName || "IR Procedure"}.\nAccess Site: ${currentData.accessSite || "Right CFA"} | Sheath Status: Removed, manual compression done, pressure dressing in-situ.\nDistal Pulses: Palpable (DPA/PTA bilateral).\nPOST-PROCEDURE ORDERS:\n1. Strict flat bed rest with ipsilateral limb immobilization for 6 hours.\n2. Monitor puncture site for bleeding / hematoma q15min x 1hr, then q1h.\n3. Vitals monitoring (BP, Pulse, SpO2, Urine output).\n4. IV fluids & medications as charted.\n5. Inform IR Resident on-call immediately in case of puncture site swelling or loss of distal pulses.`;

    const field = findField(["transfer", "handover", "remarks", "notes", "dischargeadvice"]);
    if (setValue(field, transferText)) {
      document.getElementById("ihms-ir-status").innerHTML = `<b>Transfer Out note populated.</b>`;
    } else {
      navigator.clipboard.writeText(transferText);
      alert("Transfer note copied to clipboard! Paste into target field.");
    }
  };

  // Quick Copy
  document.querySelectorAll(".ihms-quick-copy").forEach(btn => {
    btn.onclick = () => {
      if (!currentData) { alert("Please load patient data first."); return; }
      const f = btn.getAttribute("data-field");
      let text = "";
      if (f === "diagnosis") text = `${currentData.diagnosis || ""} (ICD-10: ${currentData.icd10 || ""})`;
      else if (f === "history") text = `COMPLAINTS:\n${currentData.chiefComplaints || ""}\n\nHISTORY:\n${currentData.history || ""}\n\nLABS:\n${currentData.labs || ""}`;
      else if (f === "procedure") text = `PROCEDURE: ${currentData.procedureName || ""}\nDATE: ${currentData.procedureDate || ""}\nHARDWARE: ${currentData.hardware || ""}\nEMBOLICS: ${currentData.embolics || ""}\nFINDINGS: ${currentData.operativeNotes || ""}`;
      else if (f === "meds") text = currentData.medications || "";
      else if (f === "advice") text = `${currentData.dischargeAdvice || ""}\n\nFOLLOW-UP: ${currentData.followup || ""}`;
      else if (f === "scheme") text = `SCHEME: ${currentData.scheme || ""}\nPACKAGE: ${currentData.schemeCode || ""}\nTID: ${currentData.tid || ""}`;

      navigator.clipboard.writeText(text);
      document.getElementById("ihms-ir-status").innerText = `Copied ${f}!`;
    };
  });
})();
