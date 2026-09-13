/**
 * SMS Jaipur - Biopsy Station Registry & Lost-to-Follow-Up Tracker (D9211 / Room 922)
 * Handles Patient Tracking, WhatsApp Reminders, and Departmental Quality Audits
 */

const IR_BIOPSY_TRACKER = {
  biopsies: [],
  activeFilter: "all",

  init: () => {
    IR_BIOPSY_TRACKER.load();
    IR_BIOPSY_TRACKER.setupEvents();
    IR_BIOPSY_TRACKER.render();
  },

  load: () => {
    const saved = localStorage.getItem("sms_ir_biopsies");
    if (saved) {
      try {
        IR_BIOPSY_TRACKER.biopsies = JSON.parse(saved);
      } catch (e) {
        IR_BIOPSY_TRACKER.biopsies = [];
      }
    }
  },

  save: () => {
    localStorage.setItem("sms_ir_biopsies", JSON.stringify(IR_BIOPSY_TRACKER.biopsies));
    IR_BIOPSY_TRACKER.render();
  },

  setupEvents: () => {
    const addBtn = document.getElementById("btn-add-biopsy");
    if (addBtn) addBtn.onclick = IR_BIOPSY_TRACKER.addRecord;

    const allBtn = document.getElementById("btn-filter-all");
    if (allBtn) allBtn.onclick = () => IR_BIOPSY_TRACKER.setFilter("all");

    const pendBtn = document.getElementById("btn-filter-pending");
    if (pendBtn) pendBtn.onclick = () => IR_BIOPSY_TRACKER.setFilter("pending");

    const recBtn = document.getElementById("btn-filter-received");
    if (recBtn) recBtn.onclick = () => IR_BIOPSY_TRACKER.setFilter("received");

    const exportBtn = document.getElementById("btn-export-biopsy-csv");
    if (exportBtn) exportBtn.onclick = IR_BIOPSY_TRACKER.exportCSV;
  },

  addRecord: () => {
    const cr = (document.getElementById("biopsyCR")?.value || "").trim();
    const name = (document.getElementById("biopsyName")?.value || "").trim();
    if (!cr || !name) {
      alert("Please enter Patient CR Number and Name.");
      return;
    }

    const record = {
      id: Date.now().toString(),
      date: document.getElementById("biopsyDate")?.value || new Date().toISOString().split("T")[0],
      station: document.getElementById("biopsyStation")?.value || "D9211 (CT Biopsy)",
      crNo: cr,
      name: name,
      phone: (document.getElementById("biopsyPhone")?.value || "").trim(),
      site: (document.getElementById("biopsySite")?.value || "").trim(),
      needle: (document.getElementById("biopsyNeedle")?.value || "18G Tru-cut").trim(),
      lab: document.getElementById("biopsyLab")?.value || "SMS In-House Pathology",
      status: "Pending Report",
      diagnosis: "",
      complication: "None"
    };

    IR_BIOPSY_TRACKER.biopsies.unshift(record);
    IR_BIOPSY_TRACKER.save();

    // Clear inputs
    if (document.getElementById("biopsyCR")) document.getElementById("biopsyCR").value = "";
    if (document.getElementById("biopsyName")) document.getElementById("biopsyName").value = "";
    if (document.getElementById("biopsyPhone")) document.getElementById("biopsyPhone").value = "";
    if (document.getElementById("biopsySite")) document.getElementById("biopsySite").value = "";
    if (document.getElementById("biopsyNeedle")) document.getElementById("biopsyNeedle").value = "";
  },

  setFilter: (f) => {
    IR_BIOPSY_TRACKER.activeFilter = f;
    IR_BIOPSY_TRACKER.render();
  },

  render: () => {
    const tbody = document.getElementById("biopsy-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    let filtered = IR_BIOPSY_TRACKER.biopsies;
    if (IR_BIOPSY_TRACKER.activeFilter === "pending") {
      filtered = IR_BIOPSY_TRACKER.biopsies.filter(b => b.status === "Pending Report" || b.status === "Lost to Follow-up");
    } else if (IR_BIOPSY_TRACKER.activeFilter === "received") {
      filtered = IR_BIOPSY_TRACKER.biopsies.filter(b => b.status === "Report Received");
    }

    // Update Counter & Quality Metrics
    const total = IR_BIOPSY_TRACKER.biopsies.length;
    const pending = IR_BIOPSY_TRACKER.biopsies.filter(b => b.status === "Pending Report").length;
    const received = IR_BIOPSY_TRACKER.biopsies.filter(b => b.status === "Report Received").length;
    const adequacyRate = total > 0 ? Math.round((received / total) * 100) : 100;

    const countBadge = document.getElementById("biopsy-count-badge");
    if (countBadge) {
      countBadge.innerHTML = `<b>${total} Total</b> (${pending} Pending | ${received} Completed • Diagnostic Yield: ${adequacyRate}%)`;
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: #94a3b8; padding: 18px;">No biopsy records found for this filter.</td></tr>`;
      return;
    }

    filtered.forEach(b => {
      const tr = document.createElement("tr");

      let statusBadge = `<span class="status-badge badge-pending"><span class="badge-dot warning"></span> Pending</span>`;
      if (b.status === "Report Received") statusBadge = `<span class="status-badge badge-received"><span class="badge-dot success"></span> Received</span>`;
      else if (b.status === "Lost to Follow-up") statusBadge = `<span class="status-badge badge-lost"><span class="badge-dot danger"></span> Lost</span>`;

      tr.innerHTML = `
        <td><b>${b.date || "N/A"}</b></td>
        <td><span style="font-size: 11px; font-weight: 600; color: var(--primary);">${b.station}</span></td>
        <td><b>${b.name}</b><br><span style="font-size: 11px; color: var(--text-tertiary);">CR: ${b.crNo}</span></td>
        <td>${b.site || "N/A"}<br><span style="font-size: 10.5px; color: var(--text-tertiary);">${b.needle || ""}</span></td>
        <td>${b.phone ? `<a href="tel:${b.phone}" style="color: var(--primary); text-decoration: underline;">${b.phone}</a>` : "N/A"}</td>
        <td><span style="font-size: 11px;">${b.lab}</span></td>
        <td>${statusBadge}</td>
        <td>
          <input type="text" value="${b.diagnosis || ''}" placeholder="Enter Histopath/IHC..." class="form-control" style="font-size: 11px; width: 140px; padding: 3px 6px;" onchange="IR_BIOPSY_TRACKER.updateDiagnosis('${b.id}', this.value)">
        </td>
        <td>
          <div style="display: flex; gap: 4px;">
            <button class="btn btn-sm btn-outline" style="padding: 2px 6px; font-size: 10px;" title="Send WhatsApp Reminder" onclick="IR_BIOPSY_TRACKER.sendReminder('${b.id}')">Remind</button>
            <button class="btn btn-sm btn-outline" style="padding: 2px 6px; font-size: 10px; color: var(--success);" title="Mark Received" onclick="IR_BIOPSY_TRACKER.toggleStatus('${b.id}')">Received</button>
            <button class="btn btn-sm btn-outline" style="padding: 2px 6px; font-size: 10px; color: var(--danger);" title="Delete" onclick="IR_BIOPSY_TRACKER.deleteRecord('${b.id}')">&times;</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  updateDiagnosis: (id, val) => {
    const b = IR_BIOPSY_TRACKER.biopsies.find(x => x.id === id);
    if (b) {
      b.diagnosis = val;
      if (val.trim()) b.status = "Report Received";
      IR_BIOPSY_TRACKER.save();
    }
  },

  toggleStatus: (id) => {
    const b = IR_BIOPSY_TRACKER.biopsies.find(x => x.id === id);
    if (b) {
      if (b.status === "Pending Report") b.status = "Report Received";
      else if (b.status === "Report Received") b.status = "Lost to Follow-up";
      else b.status = "Pending Report";
      IR_BIOPSY_TRACKER.save();
    }
  },

  deleteRecord: (id) => {
    if (confirm("Delete this biopsy record?")) {
      IR_BIOPSY_TRACKER.biopsies = IR_BIOPSY_TRACKER.biopsies.filter(x => x.id !== id);
      IR_BIOPSY_TRACKER.save();
    }
  },

  sendReminder: (id) => {
    const b = IR_BIOPSY_TRACKER.biopsies.find(x => x.id === id);
    if (!b || !b.phone) {
      alert("No phone number recorded for this patient!");
      return;
    }
    const cleanPhone = b.phone.replace(/\D/g, "");
    const formattedPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
    const msg = encodeURIComponent(`Dear ${b.name},\nThis is a follow-up reminder from the Department of Interventional Radiology, SMS Hospital Jaipur regarding your biopsy (CR No: ${b.crNo}, Date: ${b.date}).\n\nPlease bring your Biopsy / Histopathology / IHC report to the IR OPD / Room 922 (Special Clinic, SMS Hospital) for clinical review and further management.\n\nधन्यवाद - सवाई मानसिंह अस्पताल, जयपुर।`);
    window.open(`https://wa.me/${formattedPhone}?text=${msg}`, "_blank");
  },

  exportCSV: () => {
    if (IR_BIOPSY_TRACKER.biopsies.length === 0) {
      alert("No biopsy records to export.");
      return;
    }
    const headers = ["Date", "Station", "CR_No", "Patient_Name", "Phone", "Target_Organ", "Needle_Hardware", "Pathology_Lab", "Status", "Histopathology_Diagnosis"];
    const rows = IR_BIOPSY_TRACKER.biopsies.map(b => [
      `"${b.date || ''}"`,
      `"${b.station || ''}"`,
      `"${b.crNo || ''}"`,
      `"${b.name || ''}"`,
      `"${b.phone || ''}"`,
      `"${b.site || ''}"`,
      `"${b.needle || ''}"`,
      `"${b.lab || ''}"`,
      `"${b.status || ''}"`,
      `"${(b.diagnosis || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", encodeURI(csvContent));
    downloadAnchor.setAttribute("download", `SMS_IR_Biopsy_Registry_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }
};
