import urllib.request
import re
import json

url = 'https://docs.google.com/spreadsheets/d/1X1WAp0ydPuy58n3l3g4qp1Fhmt1Z_PJbV3mY62naHR8/edit'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Search for the sheet tabs JSON data
# Google Sheets usually has JSON array like: [gid, "Title", ...]
pattern = r'\[(\d+),\"([A-Za-z0-9\s_\-]+)\",\d+,'
found = re.findall(pattern, html)
print("Found tabs:", found)

# Let's search for "Patient Log" and show surrounding 200 chars
pos = html.find("Patient Log")
while pos != -1:
    start = max(0, pos - 150)
    end = min(len(html), pos + 150)
    print("Context around Patient Log:")
    print(repr(html[start:end]))
    print("-" * 50)
    pos = html.find("Patient Log", pos + len("Patient Log") + 1)
