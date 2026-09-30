# IR Bundler — SMS Jaipur DSA registry

Stage 1 of the "IR number → discharge card + operative note + imaging" bundle
requested for Telegram delivery.

## What the source actually contains

Root: `E:\03_Academic_&_Research\DSA SMS jaipur`

| Asset | Content |
|---|---|
| `DSA DATA SHEET.xlsx` | Master registry. Sheets `2022-23-24` (517 rows), `2025` (285), `2026` (257), plus an empty `Sheet4`. **IR numbers 1–1058, no gaps.** One byte-identical duplicate row (IR 758) → 1058 unique. |
| `01_Clinical_Operative_Cases_and_Reports` | 867 `.docx`/`.pdf` operative notes, filed by year → month. |
| `02_Discharge_Cards_and_Summaries` | 1176 `.pdf` discharge cards, filed by year → month → **patient-name folder**. |
| `03_Patient_DICOM_Imaging_Datasets` | 4190 DICOM objects (2.4 GB), extensionless, in `DICOM/S<acc>/S<series>/I<inst>` layout. |

Registry columns: DSA No., year seq, date, name, age, unit, CR no., mobile,
category, procedure, CT/MRI accession, bill amount, diagnosis, dose, follow-up.

## Data traps found and handled

1. **The three sheets do not share a layout.** `2022-23-24` has an extra
   `S.NO.` column, putting DATE at index 3 and NAME at 4; `2025`/`2026` put
   DATE at 2 and NAME at 3. Positional parsing mis-read all 517 patients of the
   first sheet. Columns are now resolved from the header row by name.
2. **Empty `Sheet4`** — skipped rather than crashing.
3. **IR 758 duplicated** byte-identically; collapsed.
4. **Malformed dates** in 6 rows (`27.02,23`, `26.07.023`, `02/02/026`,
   `27/25/26` — an invalid day) are preserved as `date_note`, never guessed.
5. **Repeat patients**: `GUDDI DEVI` ×5, `BINTU DEVI` ×5, `TAK CHAND SONI` ×4.
   Dedup is keyed on IR number only; an earlier content-hash dedup silently
   dropped 20 real IR numbers, so that approach was removed.
6. **~630 registry names are a single token** (`MOHAN`, `MANJU`, `ANCHHI`).
   Name-only matching is genuinely ambiguous for these and is reported as
   ambiguous rather than guessed.
7. **Files with no patient in the registry**: `~$` Office lock files and
   `Config/MEDIAVIE.PRO` are excluded by extension.

## Coverage as indexed (of 1058 IR numbers)

| | IR numbers |
|---|---|
| discharge card linked | 267 |
| operative note linked | 40 |
| both documents | 23 |
| any document | 284 |
| **imaging linked** | **0** |

## Why imaging links to zero IR numbers — this is real, not a bug

The 4190 DICOM objects belong to exactly **4 patients**:

| DICOM PatientName | PatientID | objects |
|---|---|---|
| DINESH KUMAR BHURIA | 070622111873213 | 1225 |
| KHATUN | 110726298006366 | 1660 |
| MOHD SAJID | 110726298085876 | 1259 |
| SASHI 51Y/F | 90038 | 46 |

None of these four names, and none of their three CR numbers, occur anywhere in
the DSA registry. Their study dates are `20260102`; the registry's 2026-01-01
entries are PANKAJ KUMAR (IR 803) and SOURABH (IR 804). **These studies are
therefore not attributable to any IR number from the data present**, and the
bundler refuses to guess. They need a registry cross-reference from you.

## Rendering is proven working

DICOM pixel data decodes correctly on this machine. The three exports are
**Enhanced MR Image Storage**, multi-frame, 2.4 GB total:

- Dinesh — 43 series, frames 768×768, up to 120 frames/series
- Khatun — 528×528
- Mohd Sajid — 432×432

The CT (`Sashi_51YF`) is single-frame 512×512, JPEG Baseline
(`1.2.840.10008.1.2.4.90`). Frames were rendered to PNG and visually verified
as genuine diagnostic anatomy (axial MR pelvis/lumbar — fat, muscle, bowel gas,
CSF in the canal all correct). Roughly 5,700 frames render to PNG.

Environment note: this needs **Python 3.12** at
`C:\Users\NEEL\AppData\Local\Programs\Python\Python312\python.exe` with
`pydicom==3.0.1`, `numpy`, `pillow`, `openpyxl`. `pydicom` 3.0.2 crashes on
import against this Pillow build (`NameError: features` in its JPEG plugin).

## Run

```bash
"C:/Users/NEEL/AppData/Local/Programs/Python/Python312/python.exe" \
    C:/SSO/tools/ir_bundler/index_dsa.py
```

Writes `_index/bundles.json` — one record per IR number, plus an `unlinked[]`
array recording every file that could not be attached **with its reason**, so
gaps are visible rather than silently dropped.

## Not yet built

The Telegram delivery layer. Blocked on: bot token, chat ID, whether patient
names may appear in message text, and the IR cross-reference for the 4 imaging
patients. Note the PHI-egress exposure: pushing named imaging to Telegram is
outside the existing compliance boundary and needs a chat-ID allowlist plus a
per-send audit trail.
