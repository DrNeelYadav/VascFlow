import urllib.request
import urllib.parse
import os

SHEET_ID = "1X1WAp0ydPuy58n3l3g4qp1Fhmt1Z_PJbV3mY62naHR8"
tabs = ["Instructions", "Settings", "Patient Log", "Patient Lookup", "Analytics"]

os.makedirs("sheets_data", exist_ok=True)

for tab in tabs:
    encoded_tab = urllib.parse.quote(tab)
    url = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:csv&sheet={encoded_tab}"
    print(f"Downloading {tab} from {url}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as response:
            content = response.read().decode('utf-8')
            filename = f"sheets_data/{tab.replace(' ', '_').lower()}.csv"
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Saved {tab} to {filename} ({len(content)} bytes)")
    except Exception as e:
        print(f"Failed {tab}: {e}")

# Also try gid=411734814
try:
    url = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid=411734814"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=15) as response:
        content = response.read().decode('utf-8')
        with open("sheets_data/gid_411734814.csv", 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Saved gid_411734814 to sheets_data/gid_411734814.csv ({len(content)} bytes)")
except Exception as e:
    print(f"Failed gid export: {e}")
