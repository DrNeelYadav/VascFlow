// ==UserScript==
// @name         SMS Jaipur - IHMS Interventional Radiology Autofill Assistant
// @namespace    http://sms.jaipur.ir/
// @version      2.0
// @description  One-click autofill for IHMS Rajasthan Discharge Summary & IPD notes for SMS Hospital Interventional Radiology.
// @author       Interventional Radiology Resident, SMS Jaipur
// @match        https://ihms.health.rajasthan.gov.in/*
// @grant        GM_setClipboard
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    // Inject Floating Button on IHMS Rajasthan portal
    const btn = document.createElement('button');
    btn.innerHTML = 'Fill IR Discharge Summary';
    btn.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 999999;
        background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
        color: white;
        border: 2px solid #ffffff;
        padding: 12px 18px;
        border-radius: 50px;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        transition: transform 0.2s, background 0.2s;
    `;
    btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseout = () => btn.style.transform = 'scale(1.0)';

    btn.onclick = function() {
        // Load the bookmarklet script logic
        const script = document.createElement('script');
        script.src = 'http://localhost:8899/js/ihms-bookmarklet.js?t=' + Date.now();
        script.onerror = function() {
            // Fallback: prompt for payload
            const input = prompt("Paste your Patient Summary JSON from the IR Dashboard:");
            if (input) {
                try {
                    const data = JSON.parse(input);
                    fillFields(data);
                } catch(e) {
                    alert("Invalid JSON format!");
                }
            }
        };
        document.body.appendChild(script);
    };

    function fillFields(data) {
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

        setValue(findField(["diag", "diagnosis"]), `${data.diagnosis || ""} (ICD-10: ${data.icd10 || ""})`);
        setValue(findField(["history", "complaint"]), `CHIEF COMPLAINTS:\n${data.chiefComplaints || ""}\n\nHISTORY:\n${data.history || ""}\n\nLABS:\n${data.labs || ""}\n\nIMAGING:\n${data.imaging || ""}`);
        setValue(findField(["procedure", "treatment"]), `PROCEDURE: ${data.procedureName || ""}\nDATE: ${data.procedureDate || ""}\nACCESS: ${data.accessSite || ""}\nHARDWARE: ${data.hardware || ""}\nEMBOLICS/STENTS: ${data.embolics || ""}\nFINDINGS: ${data.operativeNotes || ""}\nCOMPLICATIONS: ${data.complications || "Nil"}`);
        setValue(findField(["advice", "medication"]), `DISCHARGE MEDICATIONS:\n${data.medications || ""}\n\nFOLLOW-UP:\n${data.followup || ""}`);

        alert("Auto-fill complete! Please verify fields.");
    }

    document.body.appendChild(btn);
})();
