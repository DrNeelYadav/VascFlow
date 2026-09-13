import urllib.request
import re

url = 'https://docs.google.com/spreadsheets/d/1X1WAp0ydPuy58n3l3g4qp1Fhmt1Z_PJbV3mY62naHR8/edit'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Search for the pattern around topsnapshot: [0,0,"<SHEET_ID>",[{"1":[[0,0,"<TITLE>"]
matches = re.findall(r'\"(\d{8,12})\",\[\{\"1\":\[\[0,0,\"([^\"]+)\"\]', html)
print("Sheet IDs found:", matches)

# Also let's try to export Patient Log CSV using 1146122880
for sheet_id, name in matches:
    export_url = f'https://docs.google.com/spreadsheets/d/1X1WAp0ydPuy58n3l3g4qp1Fhmt1Z_PJbV3mY62naHR8/export?format=csv&gid={sheet_id}'
    print(f"Testing export for {name} ({sheet_id}): {export_url}")
    try:
        data = urllib.request.urlopen(urllib.request.Request(export_url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
        filename = f"sheet_{name.lower().replace(' ', '_')}.csv"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(data)
        print(f"Successfully saved {filename} with {len(data)} bytes ({len(data.splitlines())} lines)")
    except Exception as e:
        print(f"Error exporting {name}: {e}")
