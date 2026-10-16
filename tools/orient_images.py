import os
import cv2
import re
from pathlib import Path
from rapidocr_onnxruntime import RapidOCR

ocr = RapidOCR()

SRC_DIR = Path(r"C:\Users\NEEL\Downloads\whatsapp_ir_extracted")
DST_DIR = Path(r"C:\Users\NEEL\Downloads\whatsapp_ir_upright")
DST_DIR.mkdir(parents=True, exist_ok=True)

def score_orientation(img):
    h, w = img.shape[:2]
    scale = 800.0 / max(h, w)
    small = cv2.resize(img, (int(w * scale), int(h * scale)))
    res, _ = ocr(small)
    if not res:
        return 0
    score = 0
    keywords = ["NAME", "DATE", "BILL", "CONTRAST", "UNIT", "ML", "DOSE", "MGY", "RAD", "CR", "NO", "DEVI", "SINGH", "KUMAR", "RAM", "LAL", "SHARMA"]
    for _, text, conf in res:
        txt = text.upper()
        if any(k in txt for k in keywords):
            score += 10
        if re.search(r'\d{1,2}/\d{1,2}/\d{2,4}', txt):
            score += 15
        if re.search(r'\d{10,15}', txt):
            score += 20
        if re.search(r'[06-9]\d{9}', txt):
            score += 15
        if conf > 0.8:
            score += 1
    return score

def get_best_orientation(img):
    best_rot = 0
    best_score = -1
    for rot in [0, 90, 180, 270]:
        if rot == 0:
            rotated = img
        elif rot == 90:
            rotated = cv2.rotate(img, cv2.ROTATE_90_CLOCKWISE)
        elif rot == 180:
            rotated = cv2.rotate(img, cv2.ROTATE_180)
        elif rot == 270:
            rotated = cv2.rotate(img, cv2.ROTATE_90_COUNTERCLOCKWISE)
        score = score_orientation(rotated)
        if score > best_score:
            best_score = score
            best_rot = rot
    return best_rot

files = sorted(os.listdir(SRC_DIR))
print(f"Orienting {len(files)} images...")

for idx, fn in enumerate(files):
    if not fn.lower().endswith((".jpg", ".jpeg", ".png")):
        continue
    out_path = DST_DIR / fn
    if out_path.exists():
        continue
    src_path = SRC_DIR / fn
    img = cv2.imread(str(src_path))
    if img is None:
        continue
    rot = get_best_orientation(img)
    if rot == 90:
        upright = cv2.rotate(img, cv2.ROTATE_90_CLOCKWISE)
    elif rot == 180:
        upright = cv2.rotate(img, cv2.ROTATE_180)
    elif rot == 270:
        upright = cv2.rotate(img, cv2.ROTATE_90_COUNTERCLOCKWISE)
    else:
        upright = img
    cv2.imwrite(str(out_path), upright)
    print(f"[{idx+1}/{len(files)}] {fn} -> Rotated {rot} deg -> Saved upright.")

print("All images are now upright in whatsapp_ir_upright/")
