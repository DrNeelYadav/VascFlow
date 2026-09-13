# SMS Jaipur - Interventional Radiology Clinical Hub & Automation Suite

Designed for Resident Doctors (MD/DNB/DM) in Interventional Radiology at Sawai Man Singh (SMS) Medical College & Attached Hospitals, Jaipur.

---

## 🌟 Modular Platform Features

### 1. 📑 IHMS Rajasthan 1-Click Discharge Summary & Note OCR
- **Note Intake & OCR**: Drop photos/scans of handwritten clinical sheets or paste rounds notes — automatically extracts demographics, CR No, IPD No, scheme, and pre-op labs (Hb, TLC, Platelets, PT/INR, Urea, Creatinine, Bilirubin, Viral markers).
- **High-Yield IR Presets**: Instant pre-population of operative logs, hardware (sheaths, catheters, microcatheters, wires), embolic agents, stents, and post-op medication kits for **TACE**, **BAE**, **PTBD**, **PCN**, **EVLA**, **UAE**, **DVT**, and **Biopsy**.
- **1-Click IHMS Bookmarklet**: One-click DOM injector for `ihms.health.rajasthan.gov.in` supporting both **Discharge Summary** and **Bed Management (Acceptance / Transfer Out)** notes.
- **Official Print Layout**: Clean A4 print layout formatted with official SMS Medical College letterhead and signature blocks.

### 2. 🔬 Biopsy Registry & Lost-to-Follow-Up Tracker (D9211 / Room 922)
- **Station Logging**: Log CT-guided biopsies in **D9211** and USG-guided biopsies/FNACs in **Room 922**.
- **Follow-up Status Badges**: Tag cases as `🟡 Pending Report`, `🟢 Report Received`, or `⚠️ Lost to Follow-up`.
- **1-Click WhatsApp Reminders**: Direct WhatsApp follow-up link to patient/relative's phone requesting them to bring their histopathology/IHC report to Room 922/IR OPD.
- **Audit & Analytics**: Real-time Diagnostic Yield (adequacy rate) tracking and **1-Click CSV Export** for departmental quality audits.

### 3. 🎓 Morning Academic Rounds & Interactive Case Simulator
- **Interactive Decision-Tree Scenarios**: Step-by-step branching simulations with real-time clinical feedback and rationale for:
  - **Disconnected Pancreatic Duct Syndrome (DPDS)**
  - **Massive Hemoptysis - BAE & Spinal Artery Protection**
  - **Hepatocellular Carcinoma - TACE Strategy & BCLC Staging**
  - **Malignant Biliary Obstruction - PTBD & SEMS Stenting**
- **1-Click Slide Deck Generator**: Copy Markdown-formatted case slides ready for morning class presentations.

### 4. 💳 Complete Ayushman (MAAY/Chiranjeevi) & RGHS Code Directory
- **35+ MAAY Packages with Government Rates & Implants**: Full rate chart from department counter notices (₹7,000 to ₹1,04,300 with approved implant codes).
- **33+ RGHS Codes**: IPD & OPD codes for all IR procedures.
- **Hospital Pharmacy Indenting**: Bleomycin Admitted (DDC-14) & Bleomycin OPD (DDC-2).
- **SMS / WhatsApp Notification Parser**: Instantly extracts TID, Card No, Jan Aadhaar, Package Code, and Approved Amount from portal/TPA text messages.

### 5. 🧮 Clinical Safety & Hepatic Functional Calculators
- **Maximum Allowable Contrast Dose (MACD)**: Cigarroa equation calculation ($5 \times \text{Weight} / \text{Cr}$) with real-time CI-AKI risk alerts on the discharge form.
- **Child-Pugh Score & Class**: Functional liver reserve scoring for TACE/TIPS candidates.
- **ALBI Score**: Objective Albumin-Bilirubin grade calculation.
- **CIRSE Classification**: Standardized 6-grade IR complication reporting.

---

## 🚀 Quick Launch Guide

1. In PowerShell / Terminal:
   ```powershell
   python c:\SSO\server.py
   ```
   *(Or double-click [index.html](file:///c:/SSO/index.html) in Google Chrome, Microsoft Edge, or Brave).*

2. On mobile during rounds: The application runs as an **offline PWA** (`manifest.json` + `sw.js`), allowing you to install it to your phone's home screen and use it in shielded CT/Angio basement suites with zero internet connection.
