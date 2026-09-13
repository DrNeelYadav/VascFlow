import csv
import json

print("=== SETTINGS TAB ===")
with open('sheets_data/settings.csv', 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    headers = next(reader)
    print("Headers:", headers)
    for i, row in enumerate(reader):
        if any(row):
            print(f"Row {i+1}: {row}")

print("\n=== PATIENT LOG TAB ===")
with open('sheets_data/patient_log.csv', 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    headers = next(reader)
    print("Headers count:", len(headers))
    print("Headers:", headers)
    row_count = 0
    for row in reader:
        if any(row):
            row_count += 1
            print(f"Row {row_count}: {row}")
    print("Total populated rows in Patient Log:", row_count)

print("\n=== PATIENT LOOKUP TAB ===")
with open('sheets_data/patient_lookup.csv', 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
