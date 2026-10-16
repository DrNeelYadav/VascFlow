"use client";

import type { OperativeNoteDocumentData } from "./WordPadPaperSheet";

/**
 * Builds HTML representation conforming to Microsoft Word / WordPad schemas
 * and triggers immediate client-side download as an authentic .doc file.
 */
export function exportOperativeNoteAsWordDoc(
  docData: OperativeNoteDocumentData,
  fontFamily: string,
  fontSize: string
) {
  const docHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${docData.procedureTitle}</title>
<style>
body { font-family: ${fontFamily}; font-size: ${fontSize}; margin: 1in; color: #000; }
h1 { font-size: 14pt; text-align: center; margin: 0; text-transform: uppercase; }
h2 { font-size: 12pt; text-align: center; margin: 0 0 10pt 0; }
h3 { font-size: 13pt; text-align: center; margin: 10pt 0; text-decoration: underline; font-weight: bold; }
table { width: 100%; border-collapse: collapse; margin-bottom: 8pt; font-size: 10pt; }
th, td { border: 1px solid black; padding: 4pt; }
p { margin: 6pt 0; line-height: 1.4; }
.bold { font-weight: bold; }
.signatures { width: 100%; border: none; margin-top: 20pt; }
.signatures td { border: none; padding: 6pt 4pt; vertical-align: top; font-size: 9pt; }
</style>
</head>
<body>
<h1>Department of Interventional Radiology</h1>
<h2>S.M.S. Hospital, Jaipur</h2>
<h3>${docData.procedureTitle}</h3>

<table>
<tr><td><span class='bold'>Patient Name : </span>${docData.patientName}</td><td><span class='bold'>Age/ Sex : </span>${docData.ageSex}</td></tr>
<tr><td><span class='bold'>Date : </span>${docData.dateStr}</td><td><span class='bold'>Referred by : </span>${docData.referredBy}</td></tr>
<tr><td><span class='bold'>HID / CR No: </span>${docData.hidCr}</td><td><span class='bold'>IR no. : </span>${docData.irNo}</td></tr>
</table>

<table>
<tr><td><span class='bold'>Allergies: </span>${docData.allergies}</td><td><span class='bold'>Anesthesia: </span>${docData.anesthesia}</td><td><span class='bold'>Medication: </span>${docData.medication}</td></tr>
<tr><td><span class='bold'>Field: </span>${docData.field}</td><td><span class='bold'>Classification: </span>${docData.procedureClassification}</td><td><span class='bold'>Position: </span>${docData.position}</td></tr>
</table>

<p><span class='bold'>Clinical profile : </span>${docData.clinicalProfile}</p>
<p class='bold'>Operative Technique &amp; Findings:</p>
<p>${docData.technique.replace(/\n/g, "<br/>")}</p>
<p class='bold'>Post procedure plan:</p>
<p>${docData.postOpPlan.replace(/\n/g, "<br/>")}</p>

<table class='signatures'>
<tr>
<td><span class='bold'>Dr Meenu Bagarhatta</span><br/>Senior Professor &amp; Head</td>
<td><span class='bold'>Dr Rajkumar Yadav</span><br/>Professor (DM - IR)</td>
<td><span class='bold'>Dr Naresh Mangalhara</span><br/>Associate Professor (PDCC IR)</td>
</tr>
<tr>
<td><span class='bold'>Dr Shashank Sharma</span><br/>Assistant Professor</td>
<td><span class='bold'>Dr. Alok Verma</span><br/>Assistant Professor (PDCC IR)</td>
<td><span class='bold'>Dr Ayush Khandelwal</span><br/>Assistant Professor (PDCC IR)</td>
</tr>
</table>
</body>
</html>`;

  const blob = new Blob(["\ufeff", docHtml], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${docData.patientName.replace(/\s+/g, "_") || "OperativeNote"}_${docData.irNo || "IR"}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Formats plain text for clipboard copying.
 */
export function formatOperativeNotePlainText(docData: OperativeNoteDocumentData): string {
  return `Department of Interventional Radiology
S.M.S. Hospital, Jaipur
${docData.procedureTitle}

Patient Name: ${docData.patientName} | Age/Sex: ${docData.ageSex}
Date: ${docData.dateStr} | Referred by: ${docData.referredBy}
HID / CR No: ${docData.hidCr} | IR No.: ${docData.irNo}

Allergies: ${docData.allergies} | Anesthesia: ${docData.anesthesia} | Medication: ${docData.medication}
Field: ${docData.field} | Classification: ${docData.procedureClassification} | Position: ${docData.position}

Clinical profile:
${docData.clinicalProfile}

Operative Technique & Findings:
${docData.technique}

Post procedure plan:
${docData.postOpPlan}

Faculty Signatures:
Dr Meenu Bagarhatta (Senior Professor & Head) | Dr Rajkumar Yadav (Professor, DM IR) | Dr Naresh Mangalhara (Associate Professor)
Dr Shashank Sharma (Assistant Professor) | Dr. Alok Verma (Assistant Professor) | Dr Ayush Khandelwal (Assistant Professor)`;
}
