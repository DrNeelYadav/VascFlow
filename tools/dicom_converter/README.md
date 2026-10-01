# VascFlow — DICOM to Web Cine & Watcher Engine

**Institution:** SMS Medical College & Attached Hospitals, Jaipur  
**Domain:** Interventional Radiology (IR) Angiosuites & Inpatient Wards  
**Vault Sync:** AIIMS IR Vault / Google Drive Archive  

---

## 1. Overview

The **VascFlow DICOM-to-Web-Cine Engine** (`tools/dicom_converter/dicom_to_web_cine.py`) is an automated medical video conversion pipeline and departmental watcher daemon. It bridges angiography acquisition hardware (Siemens Artis Zee, Philips Allura/Azurion, GE Innova) and cross-sectional scanners (CT/MR) with web applications, electronic medical records (EMR), and zero-footprint web viewports (Cornerstone3D, HTML5 `<video>`).

### Key Capabilities

1. **Angiography (XA / Fluoroscopy / DSA)**:
   - Detects multi-frame cine runs (e.g. 10 to 500+ frames).
   - Dynamic frame rate detection: derives acquisition speed from `CineRate`, `RecommendedDisplayFrameRate`, `FrameTime`, or text annotations (2, 4, 7.5, 15 fps).
   - Auto-levels contrast curves with percentile stretching ($0.5\%$ to $99.5\%$) and proper polarity handling (`MONOCHROME1` inverted vs `MONOCHROME2` standard), accentuating guide wires, microcatheters, and embolization coils.
   - Encodes high-efficiency H.264 MP4 (`yuv420p`, `-movflags +faststart`) for instant web streaming and scrubbable mobile playback.

2. **Cross-Sectional Volumes (CT / MR)**:
   - Identifies series composed of individual DICOM slice files.
   - Sorts slices along the scan axis using `ImagePositionPatient[2]`, `SliceLocation`, or `InstanceNumber`.
   - Calibrates true Hounsfield Units: $\text{HU} = \text{Pixel} \times \text{RescaleSlope} + \text{RescaleIntercept}$.
   - Applies standard clinical window presets (`angio`, `soft_tissue`, `bone`, `lung`, `brain`, `abdomen`, or `--preset all` to render all windows simultaneously).
   - Converts axial stacks to 10 fps scrubbable MP4 volumes.

3. **DISHA & PHI De-identification**:
   - Sanitizes patient identifiers and de-identifies patient names according to Indian Digital Information Security in Healthcare Act (DISHA) and HIPAA safeguards (e.g. `LAXMI DEVI` $\rightarrow$ `L*** D***`).
   - Retains procedural case numbers (e.g. `1074` from `1074/18-09-2026`) for clinical audit traceability.

4. **Encoding Engine & Fallbacks**:
   - Primary: Hardware-accelerated FFmpeg CLI with `libx264`, `yuv420p`, and dimension padding for odd pixel sizes.
   - Fallback: Resilient `cv2.VideoWriter` encoder using `avc1` / `mp4v` if FFmpeg is not available.

5. **Departmental Watcher & Cloud Vault Sync**:
   - `--watch`: Polls local incoming folder on the angiosuite PC every $N$ seconds.
   - Detects new patient folders, checks file transfer stabilization, converts all runs, and records state in `.converter_watch_state.json`.
   - `--rclone-dest`: Automatically uploads converted MP4s and manifests to AIIMS Google Drive or cloud PACS (`aiims_gdrive:VascFlow_Imaging_Vault`).

---

## 2. CLI Reference & Options

```bash
python tools/dicom_converter/dicom_to_web_cine.py [OPTIONS]
```

| Flag | Short | Default | Description |
| :--- | :--- | :--- | :--- |
| `--input` | `-i` | *(Required)* | Path to a single DICOM file or patient study folder |
| `--output` | `-o` | `./converted_cine` | Destination directory for web MP4s and `manifest.json` |
| `--fps` | | Auto | Override frame rate (e.g. `15`, `7.5`, `4`, `2`, `10`) |
| `--quality`| `-q` | `18` | H.264 CRF quality level (lower = higher quality; 18–22 recommended) |
| `--preset` | | `angio` | Window preset for CT (`angio`, `soft_tissue`, `bone`, `lung`, `brain`, `abdomen`, `all`) |
| `--watch` | | `False` | Run continuously, polling `--input` folder for new patient acquisitions |
| `--poll-interval` | | `10` | Interval in seconds between checks in watch mode |
| `--rclone-dest` | | `None` | Remote rclone vault destination (e.g. `aiims_gdrive:VascFlow_Imaging_Vault`) |

---

## 3. Usage Examples

### A. Convert a Single Fluoroscopy / DSA Cine Run
```bash
python tools/dicom_converter/dicom_to_web_cine.py \
  --input "E:\1074_18-09-2026_LAXMI DEVI_SPLENIC ARTERY EMBOLIZATION\2026091\1\00480216" \
  --output "C:\VascFlow\web_vault"
```

### B. Convert an Entire Patient Study (All Angio Runs & Snapshots)
```bash
python tools/dicom_converter/dicom_to_web_cine.py \
  --input "E:\1074_18-09-2026_LAXMI DEVI_SPLENIC ARTERY EMBOLIZATION" \
  --output "C:\VascFlow\web_vault" \
  --quality 18
```

### C. Convert a CT Volume with All Window Presets (Angio, Soft Tissue, Bone, Lung)
```bash
python tools/dicom_converter/dicom_to_web_cine.py \
  --input "D:\PACS_Incoming\CT_Abdomen_Arterial_Phase" \
  --output "C:\VascFlow\web_vault" \
  --preset all
```

### D. Run Departmental Watcher with AIIMS Google Drive Cloud Sync
```bash
python tools/dicom_converter/dicom_to_web_cine.py \
  --input "E:\Angiosuite_Export" \
  --output "C:\VascFlow\web_vault" \
  --watch \
  --poll-interval 15 \
  --rclone-dest "aiims_gdrive:VascFlow_Imaging_Vault"
```

---

## 4. Clinical Window Presets (CT)

| Preset Name | Window Center ($C$) | Window Width ($W$) | Clinical Utility in IR |
| :--- | :---: | :---: | :--- |
| `angio` | $+200\text{ HU}$ | $600\text{ HU}$ | Contrast-enhanced CTA, active extravasation, aneurysm detection |
| `soft_tissue` | $+40\text{ HU}$ | $400\text{ HU}$ | Liver parenchyma, spleen, kidney, hematoma, ascites |
| `bone` | $+400\text{ HU}$ | $1800\text{ HU}$ | Vertebroplasty, osseous metastases, cortical fractures |
| `lung` | $-600\text{ HU}$ | $1500\text{ HU}$ | Pulmonary embolization, bronchial artery runs, chest CT |
| `brain` | $+40\text{ HU}$ | $80\text{ HU}$ | Stroke intervention, intracranial hemorrhage |
| `abdomen` | $+50\text{ HU}$ | $350\text{ HU}$ | TACE liver assessment, portal vein thrombosis |

Formula applied per pixel:
$$\text{HU} = \text{Pixel} \cdot \text{RescaleSlope} + \text{RescaleIntercept}$$
$$\text{Lower} = C - 0.5 - \frac{W - 1}{2}, \quad \text{Upper} = C - 0.5 + \frac{W - 1}{2}$$
$$\text{Pixel}_{8\text{-bit}} = \text{clip}\left(\frac{\text{HU} - \text{Lower}}{\text{Upper} - \text{Lower}} \times 255, 0, 255\right)$$

---

## 5. Manifest Specification (`manifest.json`)

Each patient folder generates a master `manifest.json` along with individual `<series_name>.json` files:

```json
{
  "file_name": "series_01_fluoroscopy_-_stored.mp4",
  "file_path": "C:\\VascFlow\\web_vault\\1074\\series_01_fluoroscopy_-_stored.mp4",
  "file_size_mb": 6.46,
  "patient_id": "1074",
  "patient_name": "L*** D***",
  "modality": "XA",
  "study_date": "2026-09-18",
  "series_description": "Fluoroscopy - stored",
  "series_number": 1,
  "num_frames": 216,
  "fps": 15.0,
  "duration_seconds": 14.4,
  "width": 394,
  "height": 512,
  "encoder": "ffmpeg_libx264",
  "window_presets": null,
  "source_uid": "1.3.46.670589.29.1877192777354251343418545221665262",
  "converted_at": "2026-10-01T16:47:33.142516Z"
}
```

---

## 6. Verification & Automated Tests

To run the complete unit and clinical verification test suite:

```bash
python tools/dicom_converter/test_dicom_converter.py -v
```

The test suite validates:
- [x] End-to-end real clinical run on `00480216` (216 frames, 15 fps, splenic artery embolization).
- [x] Multi-slice CT volume sorting, Hounsfield calibration, and window clipping.
- [x] DISHA/HIPAA patient de-identification and ID extraction.
- [x] Auto-leveling contrast curves and `MONOCHROME1` polarity reversal.
- [x] Fallback encoding via OpenCV `VideoWriter`.
- [x] Frame rate heuristic hierarchy (`CineRate` $\rightarrow$ `RecommendedDisplayFrameRate` $\rightarrow$ `FrameTime` $\rightarrow$ Text Hints $\rightarrow$ Default).
