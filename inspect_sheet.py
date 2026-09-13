import urllib.request
import re
import json

url = "https://docs.google.com/spreadsheets/d/1X1WAp0ydPuy58n3l3g4qp1Fhmt1Z_PJbV3mY62naHR8/edit"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Search for bootstrap data or sheet metadata
for m in re.finditer(r'itemProps\s*:\s*\[(.*?)\]', html):
    print("Found itemProps:", m.group(0)[:200])

sheet_names = re.findall(r'\[(\d+),0,"([^"]+)"', html)
print("Sheet names pattern 1:", sheet_names)

sheet_meta = re.findall(r'(\d{5,12})[^\"]*?\"(Instructions|Settings|Patient Log|Patient Lookup|Analytics|[^\"]+)\"', html)
# search for tab names
gids = re.findall(r'gid=(\d+)', html)
print("Unique gids:", list(set(gids)))

# Look for json containing sheet names
for m in re.finditer(r'\"([^\"]+)\",(\d+),\d+,\d+,\[', html):
    print("Possible sheet:", m.groups())
