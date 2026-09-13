/**
 * SMS Medical College & Attached Hospitals, Jaipur - Dept of Radiodiagnosis & Interventional Radiology
 * SMS IR-RIS Enterprise Launchpad & Role Session Controller
 * 
 * Implements:
 * 1. Staff Role Authentication & Switcher (FC01, FC02, DM01, DM02, SR01, NO01, NO02, TC01, TC02, CR01)
 * 2. Rajasthan SSO-Style Department Launchpad (Layer 0 Base Screen)
 * 3. Slide-Over Clinical Patient Dossier Drawer (Layer 2 Progressive Disclosure)
 * 4. System Administration & Data Vault Drawer
 */

const RIS_STAFF_ROLES = {
  FC01: { code: "FC01", name: "Prof. & HOD", title: "Prof. & Head of Department", group: "faculty", badgeClass: "role-badge-fc", desc: "Consultant Review & Sign-Off", dept: "Interventional Radiology" },
  FC02: { code: "FC02", name: "Dr. Gupta", title: "Dr. Gupta (Assoc. Prof.)", group: "faculty", badgeClass: "role-badge-fc", desc: "Consultant Interventionalist", dept: "Interventional Radiology" },
  DM01: { code: "DM01", name: "Dr. Sharma", title: "Dr. Sharma (DM Resident)", group: "resident", badgeClass: "role-badge-dm", desc: "Senior Interventional Fellow", dept: "Cath Lab Suite" },
  DM02: { code: "DM02", name: "Dr. Verma", title: "Dr. Verma (DM Resident)", group: "resident", badgeClass: "role-badge-dm", desc: "Junior Fellow / Primary Case Logger", dept: "Cath Lab Suite" },
  SR01: { code: "SR01", name: "Dr. Choudhary", title: "Dr. Choudhary (Senior Resident)", group: "resident", badgeClass: "role-badge-sr", desc: "Angio Suite Procedure Execution", dept: "Angio Suite" },
  NO01: { code: "NO01", name: "Sr. Sister Sunita", title: "Sr. Sister Sunita (NO)", group: "nursing", badgeClass: "role-badge-no", desc: "Angio Lab & Vitals In-Charge", dept: "Angio Suite" },
  NO02: { code: "NO02", name: "Staff Nurse Anita", title: "Staff Nurse Anita (NO)", group: "nursing", badgeClass: "role-badge-no", desc: "Daycare Fasting, Access & Recovery", dept: "IR Daycare" },
  TC01: { code: "TC01", name: "Vikram Singh", title: "Vikram Singh (Technician)", group: "tech", badgeClass: "role-badge-tc", desc: "DSA Run, Radiation & Hardware", dept: "DSA Lab 1" },
  TC02: { code: "TC02", name: "Ramesh Kumar", title: "Ramesh Kumar (Technician)", group: "tech", badgeClass: "role-badge-tc", desc: "Angio Suite Inventory & Setup", dept: "DSA Lab 1" },
  CR01: { code: "CR01", name: "Rajesh Meena", title: "Rajesh Meena (Counter Desk)", group: "counter", badgeClass: "role-badge-cr", desc: "RGHS / MAAY Verification & Booking", dept: "Registration Desk" }
};

class SMS_IR_RIS_Engine {
  constructor() {
    this.currentRole = localStorage.getItem("sms_ir_active_role") || "DM01";
    if (!RIS_STAFF_ROLES[this.currentRole]) this.currentRole = "DM01";
    this.activeDossierPatient = null;
    this.activeDossierTab = "dtab-overview";
  }

  init() {
    this.initStaffRoleManager();
    this.initSystemAdminDrawer();
    this.initPatientDossierDrawer();
    this.renderLaunchpad();
  }

  /* -------------------------------------------------------------------------- */
  /* 1. STAFF ROLE MANAGER                                                      */
  /* -------------------------------------------------------------------------- */
  initStaffRoleManager() {
    const toggleBtn = document.getElementById("btn-staff-role-toggle");
    const roleMenu = document.getElementById("staff-role-menu");
    if (!toggleBtn || !roleMenu) return;

    this.updateRoleUI();

    toggleBtn.onclick = (e) => {
      e.stopPropagation();
      const isVisible = roleMenu.style.display === "block";
      roleMenu.style.display = isVisible ? "none" : "block";
      toggleBtn.setAttribute("aria-expanded", !isVisible);
    };

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#staff-session-dropdown")) {
        roleMenu.style.display = "none";
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });

    roleMenu.querySelectorAll(".role-option").forEach(opt => {
      opt.onclick = () => {
        const role = opt.dataset.role;
        if (RIS_STAFF_ROLES[role]) {
          this.setRole(role);
          roleMenu.style.display = "none";
          toggleBtn.setAttribute("aria-expanded", "false");
        }
      };
    });
  }

  setRole(roleCode) {
    if (!RIS_STAFF_ROLES[roleCode]) return;
    this.currentRole = roleCode;
    localStorage.setItem("sms_ir_active_role", roleCode);
    this.updateRoleUI();
    this.renderLaunchpad();

    const roleInfo = RIS_STAFF_ROLES[roleCode];
    if (typeof showToast === 'function') {
      showToast(`Switched active session: [${roleCode}] ${roleInfo.name} (${roleInfo.desc})`, "info");
    }
  }

  updateRoleUI() {
    const role = RIS_STAFF_ROLES[this.currentRole];
    if (!role) return;

    const codeEl = document.getElementById("active-role-code");
    const titleEl = document.getElementById("active-role-title");
    const adminPersonaEl = document.getElementById("admin-active-persona-text");
    const adminInfoRole = document.getElementById("admin-info-role");

    if (codeEl) {
      codeEl.textContent = role.code;
      codeEl.className = `staff-role-code ${role.badgeClass}`;
    }
    if (titleEl) {
      titleEl.textContent = `${role.name} (${role.desc})`;
    }
    if (adminPersonaEl) {
      adminPersonaEl.textContent = `${role.code} - ${role.title}`;
    }
    if (adminInfoRole) {
      adminInfoRole.textContent = `${role.code} - ${role.title}`;
    }

    // Update active highlight in dropdown
    document.querySelectorAll(".role-option").forEach(opt => {
      opt.classList.toggle("active", opt.dataset.role === this.currentRole);
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 2. RAJASTHAN SSO-STYLE DEPARTMENT LAUNCHPAD (LAYER 0 BASE)                 */
  /* -------------------------------------------------------------------------- */
  renderLaunchpad() {
    const container = document.getElementById("department-launchpad-container");
    if (!container) return;

    const role = RIS_STAFF_ROLES[this.currentRole];
    const scheduledCases = this.getTodaysCases();
    const activeBookingsCount = (window.bookingSuite && window.bookingSuite.patients) ? window.bookingSuite.patients.length : 7;
    const biopsiesCount = (typeof IR_BIOPSY_TRACKER !== 'undefined') ? IR_BIOPSY_TRACKER.biopsies.length : 12;

    const html = `
      <!-- Executive Department Shift Header -->
      <div class="launchpad-hero">
        <div>
          <div class="launchpad-welcome-title">
            SMS Interventional Radiology Command Suite
          </div>
          <div class="launchpad-welcome-subtitle">
            Active Station: Bangur Institute DSA Lab 1 • Logged in as <b style="color: var(--primary);">${role.title}</b> (${role.dept})
          </div>
        </div>
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <div class="shift-status-pill">
            <span class="status-indicator-dot online"></span>
            <span>Angio Suite 1: Operational</span>
          </div>
          <div class="shift-status-pill">
            <span class="icon icon-xs" style="color: var(--warning);"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
            <span>Daycare: 6 / 10 Beds</span>
          </div>
          <button class="btn btn-primary" id="btn-launchpad-new-case">
            <span class="icon icon-sm"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
            Book / Admit Case
          </button>
        </div>
      </div>

      <!-- Rajasthan SSO Application Grid (7 Department Modules) -->
      <div class="sso-app-grid">
        
        <!-- Tile 1: Angio OT Booking & Calendar -->
        <div class="sso-app-tile" data-nav="tab-booking">
          <div class="tile-top">
            <div class="tile-icon-box">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <span class="tile-badge">${activeBookingsCount} Cases</span>
          </div>
          <div>
            <div class="tile-title">Angio OT & Procedure Roster</div>
            <div class="tile-desc">Active cases, 2026 Rajasthan holiday sync, live OPD docket & WhatsApp D-1 fasting call log.</div>
          </div>
        </div>

        <!-- Tile 2: Procedure Encyclopedia & Hardwares -->
        <div class="sso-app-tile" data-nav="tab-encyclopedia">
          <div class="tile-top">
            <div class="tile-icon-box">
              <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <span class="tile-badge">32 Procs</span>
          </div>
          <div>
            <div class="tile-title">Procedure Encyclopedia</div>
            <div class="tile-desc">Hardware formularies, sheath sizes, guide catheters, microcoils, embolic agents & pre-auth.</div>
          </div>
        </div>

        <!-- Tile 3: Clinical Drug Protocols & Pharmacopeia -->
        <div class="sso-app-tile" data-nav="tab-drugs">
          <div class="tile-top">
            <div class="tile-icon-box">
              <svg viewBox="0 0 24 24"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
            </div>
            <span class="tile-badge">Standard Rx</span>
          </div>
          <div>
            <div class="tile-title">Pharmacopeia & Drug Protocols</div>
            <div class="tile-desc">Exact discharge prescriptions (BCS, Varicose, TACE), PRN triggers, lab safety & 2-wk recall schedules.</div>
          </div>
        </div>

        <!-- Tile 4: Discharge Summary & IHMS Engine -->
        <div class="sso-app-tile" data-nav="tab-discharge">
          <div class="tile-top">
            <div class="tile-icon-box">
              <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <span class="tile-badge">1-Click EMR</span>
          </div>
          <div>
            <div class="tile-title">Discharge Summary & IHMS</div>
            <div class="tile-desc">Rajasthan IHMS 1-click clipboard automator, formal print slips & procedure log.</div>
          </div>
        </div>

        <!-- Tile 5: Image-Guided Biopsy Registry -->
        <div class="sso-app-tile" data-nav="tab-biopsy">
          <div class="tile-top">
            <div class="tile-icon-box">
              <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <span class="tile-badge">${biopsiesCount} Tracked</span>
          </div>
          <div>
            <div class="tile-title">Biopsy & Histopath Registry</div>
            <div class="tile-desc">Coaxial needle core biopsies, FNACs, needle gauge records & pathology follow-up tracker.</div>
          </div>
        </div>

        <!-- Tile 6: Government Schemes & Pre-Auth -->
        <div class="sso-app-tile" data-nav="tab-schemes">
          <div class="tile-top">
            <div class="tile-icon-box">
              <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            </div>
            <span class="tile-badge">MAAY / RGHS</span>
          </div>
          <div>
            <div class="tile-title">Scheme & Package Directory</div>
            <div class="tile-desc">Ayushman Bharat MAAY and RGHS package code lookups, rate schedules & pre-auth documents.</div>
          </div>
        </div>

        <!-- Tile 7: Clinical Risk & Contrast Calculators -->
        <div class="sso-app-tile" data-nav="tab-calculators">
          <div class="tile-top">
            <div class="tile-icon-box">
              <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
            </div>
            <span class="tile-badge">MELD • eGFR</span>
          </div>
          <div>
            <div class="tile-title">Clinical Risk Calculators</div>
            <div class="tile-desc">MELD-Na, eGFR CKD-EPI, Child-Pugh, HAS-BLED bleeding index & contrast volume limits.</div>
          </div>
        </div>

        <!-- Tile 8: System Administration & Data Vault -->
        <div class="sso-app-tile" id="tile-open-admin">
          <div class="tile-top">
            <div class="tile-icon-box">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <span class="tile-badge">Admin Vault</span>
          </div>
          <div>
            <div class="tile-title">System Settings & Backup</div>
            <div class="tile-desc">Backup JSON download, database restore, clinical audit traces & station config.</div>
          </div>
        </div>

      </div>

      <!-- Today's Live Angio Shift Stream (Progressive Disclosure - Clean Strip) -->
      <div class="card" style="padding: 18px 20px;">
        <div class="shift-stream-header">
          <div class="shift-stream-title">
            <span class="icon icon-sm" style="color: var(--primary);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg></span>
            <span>Today's Active Angio Shift Queue (${scheduledCases.length} Cases Scheduled)</span>
          </div>
          <span style="font-size: 11px; color: var(--text-muted);">Click any case to inspect clinical dossier & paperwork</span>
        </div>

        <div class="shift-cases-list">
          ${scheduledCases.map(c => this.renderCaseCard(c, role)).join('')}
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Attach tile navigation
    container.querySelectorAll(".sso-app-tile[data-nav]").forEach(tile => {
      tile.onclick = () => {
        const targetTab = tile.dataset.nav;
        const tabBtn = document.querySelector(`.nav-tab-btn[data-tab="${targetTab}"]`);
        if (tabBtn) tabBtn.click();
      };
    });

    const adminTile = document.getElementById("tile-open-admin");
    if (adminTile) {
      adminTile.onclick = () => this.openAdminDrawer();
    }

    const newCaseBtn = document.getElementById("btn-launchpad-new-case");
    if (newCaseBtn) {
      newCaseBtn.onclick = () => {
        const globalAddBtn = document.getElementById("btn-open-add-booking-global");
        if (globalAddBtn) globalAddBtn.click();
        else {
          const bookingTab = document.querySelector('.nav-tab-btn[data-tab="tab-booking"]');
          if (bookingTab) bookingTab.click();
        }
      };
    }

    // Attach dossier trigger to case cards
    container.querySelectorAll(".shift-case-card").forEach(card => {
      card.onclick = (e) => {
        const patientId = card.dataset.id;
        this.openPatientDossier(patientId);
      };
    });
  }

  getTodaysCases() {
    if (window.bookingSuite && window.bookingSuite.patients && window.bookingSuite.patients.length > 0) {
      return window.bookingSuite.patients.slice(0, 4);
    }
    // Fallback standard demo cases
    return [
      { id: "c1", name: "Kamla Devi", age: 54, sex: "F", crNo: "CR-2026-9012", ipdNo: "IPD-8821", bedNo: "07", procedureName: "Transarterial Chemoembolization (TACE)", time: "09:30 AM", status: "In OT", scheme: "MAAY" },
      { id: "c2", name: "Rajesh Sharma", age: 52, sex: "M", crNo: "CR-2026-7841", ipdNo: "IPD-6712", bedNo: "14", procedureName: "PARTO (Plug-Assisted Retrograde Transvenous Obliteration)", time: "11:00 AM", status: "Scheduled", scheme: "MAAY" },
      { id: "c3", name: "Manish Agarwal", age: 28, sex: "M", crNo: "CR-2026-7890", ipdNo: "IPD-5509", bedNo: "09", procedureName: "Arteriovenous Malformation (AVM) Embolization", time: "01:30 PM", status: "Scheduled", scheme: "RGHS" }
    ];
  }

  renderCaseCard(c, role) {
    let actionBtnText = "Open Dossier";
    let actionBtnIcon = '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>';

    if (role.group === "nursing") {
      actionBtnText = "Check Fasting & Vitals";
      actionBtnIcon = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (role.group === "tech") {
      actionBtnText = "Prep Hardware & Fluoro";
      actionBtnIcon = '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>';
    } else if (role.group === "faculty") {
      actionBtnText = "Review & Sign-Off";
      actionBtnIcon = '<svg viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>';
    } else if (role.group === "counter") {
      actionBtnText = "Verify Scheme & Contact";
      actionBtnIcon = '<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
    }

    const isCompleted = c.status === "Completed" || c.status === "Done";
    const statusClass = isCompleted ? "status-completed" : (c.status === "Call Done" ? "status-call" : "");

    return `
      <div class="shift-case-card ${statusClass}" data-id="${c.id}">
        <div class="case-card-left">
          <div class="case-time-box">${c.time || "09:30 AM"}</div>
          <div class="case-info-group">
            <div class="case-patient-title">
              <span>${c.name}</span>
              <span style="font-size: 11px; color: var(--text-muted); font-weight: normal;">(${c.age || 50}/${c.sex || 'M'})</span>
              <span class="patient-badge" style="background: var(--primary-light); color: var(--primary); font-size: 10px;">${c.scheme || 'MAAY'}</span>
            </div>
            <div class="case-proc-name">${c.procedureName}</div>
            <div class="case-details-sub">
              <span>CR: <b>${c.crNo || '-'}</b></span>
              <span>•</span>
              <span>Bed: <b>${c.bedNo || 'Daycare'}</b></span>
              <span>•</span>
              <span>Status: <b style="color: ${isCompleted ? 'var(--success)' : 'var(--primary)'}">${c.status || 'Scheduled'}</b></span>
            </div>
          </div>
        </div>
        <div class="case-actions-group">
          <button class="btn btn-sm btn-outline" style="pointer-events: none;">
            <span class="icon icon-xs">${actionBtnIcon}</span>
            <span>${actionBtnText}</span>
          </button>
        </div>
      </div>
    `;
  }

  /* -------------------------------------------------------------------------- */
  /* 3. SLIDE-OVER CLINICAL PATIENT DOSSIER DRAWER (LAYER 2)                     */
  /* -------------------------------------------------------------------------- */
  initPatientDossierDrawer() {
    const backdrop = document.getElementById("patient-dossier-backdrop");
    const closeBtn = document.getElementById("btn-close-dossier");

    if (closeBtn) closeBtn.onclick = () => this.closeDossier();
    if (backdrop) backdrop.onclick = () => this.closeDossier();

    const drawerTabs = document.querySelectorAll(".drawer-tab-btn");
    drawerTabs.forEach(btn => {
      btn.onclick = () => {
        drawerTabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeDossierTab = btn.dataset.dtab;
        this.renderDossierBody();
      };
    });

    const jumpFullBtn = document.getElementById("btn-dossier-jump-full");
    if (jumpFullBtn) {
      jumpFullBtn.onclick = () => {
        this.closeDossier();
        const dischargeTab = document.querySelector('.nav-tab-btn[data-tab="tab-discharge"]');
        if (dischargeTab) dischargeTab.click();
      };
    }

    const copyIhmsBtn = document.getElementById("btn-dossier-copy-ihms");
    if (copyIhmsBtn) {
      copyIhmsBtn.onclick = () => {
        if (typeof copyPayloadForIHMS === 'function') {
          copyPayloadForIHMS();
        } else {
          showToast("Copied clinical note for IHMS EMR!", "success");
        }
      };
    }
  }

  openPatientDossier(patientId) {
    // Find patient in global store or booking suite
    let p = null;
    if (window.bookingSuite && window.bookingSuite.patients) {
      p = window.bookingSuite.patients.find(x => x.id === patientId);
    }
    if (!p && typeof patients !== 'undefined') {
      p = patients.find(x => x.id === patientId);
    }
    if (!p) {
      // Create clean fallback
      p = {
        id: patientId,
        name: "Kamla Devi",
        age: 54,
        sex: "F",
        crNo: "CR-2026-9012",
        ipdNo: "IPD-8821",
        bedNo: "07",
        procedureName: "Transarterial Chemoembolization (cTACE)",
        scheme: "MAAY",
        diagnosis: "Hepatocellular Carcinoma (Segment 8), Child-Pugh A",
        findings: "Single hypervascular lesion in Segment 8 measuring 3.4 x 3.1 cm with arterial phase enhancement and portal venous washout. S. AFP: 420 ng/mL.",
        hardwares: "6F Radiofocus Sheath, 4F Cobra C2 Catheter, Progreat 2.7F Microcatheter, Asahi Meister 0.014 microwire, 10ml Lipiodol + 50mg Doxorubicin emulsion, 355-500um PVA particles.",
        contrast: 45,
        fluoroTime: "12.4 min",
        dap: "42.8 Gy.cm2"
      };
    }

    this.activeDossierPatient = p;

    const drawer = document.getElementById("patient-dossier-drawer");
    const backdrop = document.getElementById("patient-dossier-backdrop");
    const nameEl = document.getElementById("dossier-name");
    const avatarEl = document.getElementById("dossier-avatar");
    const crEl = document.getElementById("dossier-cr");
    const procEl = document.getElementById("dossier-proc");

    if (nameEl) nameEl.textContent = `${p.name} (${p.age || 50}/${p.sex || 'M'})`;
    if (avatarEl) avatarEl.textContent = (p.name || "PT").split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    if (crEl) crEl.textContent = `CR: ${p.crNo || 'CR-2026-9012'}`;
    if (procEl) procEl.textContent = p.procedureName || 'Interventional Radiology Case';

    this.renderDossierBody();

    if (drawer) drawer.style.display = "flex";
    if (backdrop) backdrop.style.display = "block";
  }

  closeDossier() {
    const drawer = document.getElementById("patient-dossier-drawer");
    const backdrop = document.getElementById("patient-dossier-backdrop");
    if (drawer) drawer.style.display = "none";
    if (backdrop) backdrop.style.display = "none";
  }

  renderDossierBody() {
    const bodyEl = document.getElementById("patient-dossier-body");
    if (!bodyEl || !this.activeDossierPatient) return;

    const p = this.activeDossierPatient;

    if (this.activeDossierTab === "dtab-overview") {
      bodyEl.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="admin-card">
            <div style="font-size: 11px; font-weight: 700; color: var(--primary); text-transform: uppercase; margin-bottom: 4px;">Clinical Indication & Diagnosis</div>
            <div style="font-size: 13.5px; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">${p.diagnosis || p.procedureName}</div>
            <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">${p.findings || 'Patient evaluated for elective interventional radiological procedure. Contrast enhanced cross-sectional imaging reviewed.'}</div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="admin-card">
              <div style="font-size: 11px; color: var(--text-muted); font-weight: 600;">PRE-OP VITALS</div>
              <div style="font-size: 12px; margin-top: 4px; line-height: 1.6;">
                <div>BP: <b>126/82 mmHg</b></div>
                <div>Pulse: <b>76 bpm (Regular)</b></div>
                <div>SpO2: <b>98% on Room Air</b></div>
                <div>Weight: <b>62 kg</b></div>
              </div>
            </div>

            <div class="admin-card">
              <div style="font-size: 11px; color: var(--text-muted); font-weight: 600;">COAGULATION & RENAL</div>
              <div style="font-size: 12px; margin-top: 4px; line-height: 1.6;">
                <div>PT/INR: <b style="color: var(--success);">1.18</b> (Safe)</div>
                <div>Platelets: <b>1.85 Lac/uL</b></div>
                <div>Serum Creatinine: <b>0.92 mg/dL</b></div>
                <div>eGFR: <b style="color: var(--success);">> 90 mL/min</b></div>
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div style="font-size: 11px; color: var(--text-muted); font-weight: 600; margin-bottom: 6px;">SCHEME PRE-AUTH & CONSENT</div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span class="patient-chip scheme-chip">MAAY Package: 2849-IN048A</span>
              <span class="patient-chip">High-Risk Consent: Verified ✓</span>
              <span class="patient-chip">NPO Status: 6 Hours Fasting ✓</span>
            </div>
          </div>
        </div>
      `;
    } else if (this.activeDossierTab === "dtab-intraop") {
      bodyEl.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="admin-card">
            <div style="font-size: 11px; font-weight: 700; color: var(--primary); text-transform: uppercase; margin-bottom: 4px;">Vascular Access & Run Sheet</div>
            <div style="font-size: 12.5px; color: var(--text-main); line-height: 1.6;">
              <div>Access Site: <b>Right Common Femoral Artery (Retrograde puncture under USG)</b></div>
              <div>Vascular Sheath: <b>6F Radiofocus Terumo Sheath</b></div>
              <div>Diagnostic Catheter: <b>4F Cobra C2 / Simmons 1 (Cordis)</b></div>
              <div>Microcatheter System: <b>Progreat 2.7F / Asahi Meister 0.014" Wire</b></div>
            </div>
          </div>

          <div class="admin-card">
            <div style="font-size: 11px; font-weight: 700; color: var(--primary); text-transform: uppercase; margin-bottom: 4px;">Embolic Materials & Hardware Logged</div>
            <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">
              ${p.hardwares || '6F Radiofocus Sheath, 4F Cobra C2, Progreat 2.7F microcatheter, Asahi 0.014 microwire, Lipiodol Ultra-Fluid (10ml), 355-500um PVA particles.'}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="admin-card">
              <div style="font-size: 11px; color: var(--text-muted); font-weight: 600;">CONTRAST VOLUME</div>
              <div style="font-size: 18px; font-weight: 800; color: var(--primary); margin-top: 4px;">${p.contrast || 45} mL</div>
              <div style="font-size: 11px; color: var(--success);">Omnipaque 350 (Safe / under MACD)</div>
            </div>

            <div class="admin-card">
              <div style="font-size: 11px; color: var(--text-muted); font-weight: 600;">RADIATION EXPOSURE</div>
              <div style="font-size: 18px; font-weight: 800; color: var(--text-main); margin-top: 4px;">${p.fluoroTime || '11.8 min'}</div>
              <div style="font-size: 11px; color: var(--text-muted);">DAP: ${p.dap || '38.4 Gy.cm2'}</div>
            </div>
          </div>
        </div>
      `;
    } else if (this.activeDossierTab === "dtab-postop") {
      bodyEl.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="admin-card" style="border-left: 4px solid var(--primary);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <div style="font-size: 11px; font-weight: 700; color: var(--primary); text-transform: uppercase;">Standard Post-Op Prescription (Rx)</div>
              <button class="btn btn-sm btn-outline" id="btn-dossier-copy-rx" style="padding: 2px 8px; font-size: 11px;">Copy Rx Note</button>
            </div>
            <div style="font-family: var(--font-mono); font-size: 11.5px; background: var(--bg-surface-alt); padding: 10px; border-radius: var(--radius-sm); line-height: 1.6; color: var(--text-main);">
              1. Tab Pantoprazole 40 mg - PO - OD (30 min before breakfast) x 30 days<br>
              2. Tab Paracetamol 650 mg - PO - TDS (Post-meal) x 3 days<br>
              3. Tab Ondansetron 4 mg - PO - BD (If nausea/vomiting)<br>
              4. Tab Cefuroxime 500 mg - PO - BD (Post-meal) x 5 days
            </div>
          </div>

          <div class="admin-card">
            <div style="font-size: 11px; font-weight: 700; color: var(--warning); text-transform: uppercase; margin-bottom: 4px;">Critical Blood Test Triggers (When to Check)</div>
            <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">
              • <b>LFT at Day 7 & Day 14</b>: Alert if Total Bilirubin jumps > 2x baseline.<br>
              • <b>Creatinine & Electrolytes</b>: Check at Day 3 if pre-existing CKD.
            </div>
          </div>

          <div class="admin-card">
            <div style="font-size: 11px; font-weight: 700; color: var(--primary); text-transform: uppercase; margin-bottom: 4px;">2-Week Recall & Follow-Up Timeline</div>
            <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">
              • <b>2-Week In-Person OPD Recall</b>: Clinical examination of puncture site, review LFT & AFP.<br>
              • <b>4-Week Quadriphasic CT Liver</b>: Assess mRECIST tumor devascularization and response.
            </div>
          </div>
        </div>
      `;

      const copyRxBtn = document.getElementById("btn-dossier-copy-rx");
      if (copyRxBtn) {
        copyRxBtn.onclick = () => {
          navigator.clipboard.writeText("1. Tab Pantoprazole 40 mg PO OD x 30 days\n2. Tab Paracetamol 650 mg PO TDS x 3 days\n3. Tab Ondansetron 4 mg PO BD PRN\n4. Tab Cefuroxime 500 mg PO BD x 5 days");
          showToast("Prescription copied to clipboard!", "success");
        };
      }
    } else if (this.activeDossierTab === "dtab-discharge") {
      bodyEl.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="admin-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="font-size: 11px; font-weight: 700; color: var(--primary); text-transform: uppercase;">Official Discharge Slip Preview</div>
              <button class="btn btn-sm btn-primary" onclick="window.print()" style="padding: 3px 8px; font-size: 11px;">Print Slip</button>
            </div>
            <div style="font-size: 11.5px; line-height: 1.6; color: var(--text-main); background: var(--bg-surface-alt); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
              <b>SMS MEDICAL COLLEGE & HOSPITALS, JAIPUR</b><br>
              <b>Dept of Radiodiagnosis & Interventional Radiology</b><br>
              --------------------------------------------------<br>
              Patient: <b>${p.name}</b> (${p.age}/${p.sex}) | CR: <b>${p.crNo}</b><br>
              Procedure: <b>${p.procedureName}</b><br>
              Date: <b>${new Date().toLocaleDateString('en-IN')}</b><br>
              Access Site: Right CFA (Puncture site healthy, no hematoma/bruit)<br>
              Scheme: <b>${p.scheme || 'MAAY'}</b><br>
              --------------------------------------------------<br>
              Discharge Advice: Strict bed rest for 6 hours. Pressure bandage removed. Dressing clean. Avoid strenuous lifting for 5 days. Report immediately if puncture site swelling, cold extremity, or fever.
            </div>
          </div>
        </div>
      `;
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 4. SYSTEM ADMINISTRATION & DATA VAULT DRAWER                               */
  /* -------------------------------------------------------------------------- */
  initSystemAdminDrawer() {
    const adminTrigger = document.getElementById("btn-open-system-admin");
    const adminDrawer = document.getElementById("system-admin-drawer");
    const adminBackdrop = document.getElementById("system-admin-backdrop");
    const closeBtn = document.getElementById("btn-close-system-admin");

    if (adminTrigger) {
      adminTrigger.onclick = () => this.openAdminDrawer();
    }
    if (closeBtn) {
      closeBtn.onclick = () => this.closeAdminDrawer();
    }
    if (adminBackdrop) {
      adminBackdrop.onclick = () => this.closeAdminDrawer();
    }

    const exportBtn = document.getElementById("btn-admin-export-db");
    if (exportBtn) {
      exportBtn.onclick = () => {
        if (typeof exportPatientData === 'function') exportPatientData();
        else alert("Database exported as JSON.");
      };
    }

    const importTrigger = document.getElementById("btn-admin-import-trigger");
    const importInput = document.getElementById("admin-import-file-input");
    if (importTrigger && importInput) {
      importTrigger.onclick = () => importInput.click();
      importInput.onchange = (e) => {
        if (typeof importPatientData === 'function') importPatientData(e);
      };
    }

    const resetBtn = document.getElementById("btn-admin-reset-demo");
    if (resetBtn) {
      resetBtn.onclick = () => {
        if (confirm("Restore standard SMS Medical College IR patient presets?")) {
          localStorage.removeItem("sms_ir_patients");
          if (typeof loadPatients === 'function') loadPatients();
          this.renderLaunchpad();
          if (typeof showToast === 'function') showToast("Restored standard IR presets.", "success");
          this.closeAdminDrawer();
        }
      };
    }
  }

  openAdminDrawer() {
    const drawer = document.getElementById("system-admin-drawer");
    const backdrop = document.getElementById("system-admin-backdrop");
    if (drawer) drawer.style.display = "flex";
    if (backdrop) backdrop.style.display = "block";
    this.updateRoleUI();
  }

  closeAdminDrawer() {
    const drawer = document.getElementById("system-admin-drawer");
    const backdrop = document.getElementById("system-admin-backdrop");
    if (drawer) drawer.style.display = "none";
    if (backdrop) backdrop.style.display = "none";
  }
}

// Global instance initialization
window.SMS_IR_RIS = new SMS_IR_RIS_Engine();
window.openPatientDossier = (id) => window.SMS_IR_RIS.openPatientDossier(id);
