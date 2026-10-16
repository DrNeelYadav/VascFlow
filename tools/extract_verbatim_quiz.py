import os
import zipfile
import xml.etree.ElementTree as ET
import json
import re

SCRATCH = r'C:\Users\NEEL\.gemini\antigravity\brain\9247652d-67f9-4aba-83be-f1deeee90aae\scratch'
DEST_DATA = r'c:\SSO\apps\web-app\app\dashboard\quiz\data'
DEST_IMAGES = r'c:\SSO\apps\web-app\public\quiz\images'

MODULES = {
    'PAEDS': 'paeds_240.docx',
    'MSK': 'msk_342.docx',
    'CHEST': 'chest_299.docx',
    'GUT': 'gut_263.docx',
    'GIT': 'git_300.docx',
    'CNS': 'cns_290.docx',
}

def determine_correct_answer(options, explanation_text, prompt):
    prompt_lower = prompt.lower()
    is_negative = bool(re.search(r'\b(not|least likely|incorrect|except)\b', prompt_lower))

    for idx, opt in enumerate(options):
        opt_clean = opt.strip().rstrip('.')
        if re.search(r'(?:correct answer|answer is|correct option is)\s*(?:is|:)?\s*' + re.escape(opt_clean), explanation_text, re.I):
            return idx

    exp_lines = [l.strip() for l in explanation_text.split('\n') if l.strip()]
    if exp_lines:
        first_line = exp_lines[0].lower()
        for idx, opt in enumerate(options):
            opt_lower = opt.lower()
            if len(opt_lower) > 3 and (opt_lower in first_line or first_line.startswith(opt_lower)):
                return idx

    scores = [0] * len(options)
    for idx, opt in enumerate(options):
        opt_clean = re.sub(r'\(.*?\)', '', opt).strip().lower()
        if not opt_clean:
            continue
        words = [w for w in re.split(r'[^a-zA-Z0-9]+', opt_clean) if len(w) > 3]
        if not words:
            continue

        phrase_count = len(re.findall(r'\b' + re.escape(opt_clean) + r'\b', explanation_text.lower()))
        scores[idx] += phrase_count * 5

        for line in exp_lines[:5]:
            if opt_clean in line.lower():
                scores[idx] += 10

        for m in re.finditer(r'\b' + re.escape(opt_clean) + r'\b', explanation_text.lower()):
            start = max(0, m.start() - 60)
            end = min(len(explanation_text), m.end() + 60)
            context = explanation_text[start:end].lower()
            if not is_negative:
                if any(w in context for w in ['discounted', 'unlikely', 'incorrect', 'not', 'cannot be', 'rules out']):
                    scores[idx] -= 8
                if any(w in context for w in ['most likely', 'classical', 'characteristic', 'diagnostic', 'correct', 'confirms']):
                    scores[idx] += 8
            else:
                if any(w in context for w in ['is not', 'not a', 'does not', 'incorrect', 'unlikely']):
                    scores[idx] += 10

    best_idx = 0
    max_score = scores[0]
    for i in range(1, len(scores)):
        if scores[i] > max_score:
            max_score = scores[i]
            best_idx = i

    return best_idx

def extract_module(mod_key, docx_filename):
    docx_path = os.path.join(SCRATCH, docx_filename)
    with zipfile.ZipFile(docx_path) as z:
        doc_xml = z.read('word/document.xml')
        rels_xml = z.read('word/_rels/document.xml.rels')

    rels_root = ET.fromstring(rels_xml)
    r_map = {}
    for rel in rels_root:
        if 'image' in rel.attrib.get('Type', ''):
            r_map[rel.attrib.get('Id')] = os.path.basename(rel.attrib.get('Target'))

    root = ET.fromstring(doc_xml)
    body = root.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}body')

    blocks = []
    for child in body:
        tag = child.tag.split('}')[-1]
        if tag == 'p':
            drawings = child.findall('.//{http://schemas.openxmlformats.org/drawingml/2006/main}blip')
            txt = ''.join(child.itertext()).strip()
            if drawings:
                for d in drawings:
                    rid = d.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
                    img_name = r_map.get(rid)
                    if img_name:
                        blocks.append({
                            'type': 'image',
                            'src': f'/quiz/images/{mod_key.lower()}/{img_name}',
                            'caption': txt if txt and not txt.startswith('Image') else ''
                        })
            if txt and not drawings:
                blocks.append({'type': 'text', 'content': txt})
            elif txt and drawings and txt != blocks[-1].get('caption', ''):
                blocks.append({'type': 'text', 'content': txt})

        elif tag == 'tbl':
            rows = []
            for tr in child.findall('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr'):
                cells = []
                for tc in tr.findall('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tc'):
                    cell_text = ' '.join(''.join(tc.itertext()).split()).strip()
                    cells.append(cell_text)
                if any(cells):
                    rows.append(cells)
            if rows:
                col_count = max(len(r) for r in rows)
                padded_rows = [r + [''] * (col_count - len(r)) for r in rows]
                tbl_md = []
                tbl_md.append('| ' + ' | '.join(padded_rows[0]) + ' |')
                tbl_md.append('| ' + ' | '.join(['---'] * col_count) + ' |')
                for r in padded_rows[1:]:
                    tbl_md.append('| ' + ' | '.join(r) + ' |')
                blocks.append({'type': 'text', 'content': '\n'.join(tbl_md)})

    # Now identify question anchors
    exp_indices = []
    for i, b in enumerate(blocks):
        if b['type'] == 'text':
            txt = b['content'].strip()
            if txt.lower().startswith('explanation') or txt.lower() == 'explanation:':
                exp_indices.append(i)

    print(f'[{mod_key}] Found {len(exp_indices)} explanation anchors in {len(blocks)} blocks')

    questions = []
    for idx, e_idx in enumerate(exp_indices):
        start_idx = exp_indices[idx-1] + 1 if idx > 0 else 0
        for k in range(e_idx - 1, start_idx - 1, -1):
            if blocks[k].get('content') == 'Next':
                start_idx = k + 1
                break

        before_blocks = blocks[start_idx:e_idx]
        next_exp_idx = exp_indices[idx+1] if idx + 1 < len(exp_indices) else len(blocks)
        end_idx = next_exp_idx
        for k in range(e_idx + 1, next_exp_idx):
            if blocks[k].get('content') == 'Next':
                end_idx = k
                break

        after_blocks = blocks[e_idx+1:end_idx]

        # Filter out 'Next' and decorative markdown image artifacts in before_blocks
        cleaned_before = [
            b['content'] for b in before_blocks 
            if b['type'] == 'text' and b['content'] != 'Next' and not b['content'].startswith('![')
        ]

        if len(cleaned_before) >= 6:
            options = cleaned_before[-5:]
            prompt = cleaned_before[-6]
            stem_parts = cleaned_before[:-6]
            topic = stem_parts[0] if len(stem_parts) > 1 else mod_key
            stem = ' '.join(stem_parts[1:]) if len(stem_parts) > 1 else (stem_parts[0] if stem_parts else '')
        elif len(cleaned_before) == 5:
            options = cleaned_before
            prompt = "Select the best answer"
            stem = ""
            topic = mod_key
        else:
            continue

        # Format explanationBlocks
        explanation_blocks = []
        text_parts = []
        for ab in after_blocks:
            if ab['type'] == 'text':
                content = ab['content'].strip()
                if content and content != 'Next':
                    explanation_blocks.append({'type': 'text', 'content': content})
                    text_parts.append(content)
            elif ab['type'] == 'image':
                explanation_blocks.append(ab)
                if ab.get('caption'):
                    text_parts.append(f"[Image: {ab['caption']}]")

        full_explanation_text = '\n\n'.join(text_parts)
        correct_answer = determine_correct_answer(options, full_explanation_text, prompt)

        questions.append({
            'id': f'{mod_key}-{len(questions)+1:03d}',
            'module': mod_key,
            'topic': topic,
            'stem': stem,
            'prompt': prompt,
            'options': options,
            'explanation': full_explanation_text,
            'explanationBlocks': explanation_blocks,
            'correctAnswer': correct_answer,
        })

    out_file = os.path.join(DEST_DATA, f'{mod_key.lower()}.json')
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    total_images_in_module = sum(
        1 for q in questions for b in q['explanationBlocks'] if b['type'] == 'image'
    )
    print(f'[{mod_key}] Successfully exported {len(questions)} questions with {total_images_in_module} embedded image blocks -> {out_file}')
    return len(questions)

def main():
    total = 0
    for mod_key, docx_fn in MODULES.items():
        total += extract_module(mod_key, docx_fn)
    print(f'\n=== COMPLETE: {total} total questions exported with verbatim Google Docs blocks ===')

if __name__ == '__main__':
    main()
