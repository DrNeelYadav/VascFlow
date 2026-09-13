import urllib.request
import re
import json

url = 'https://docs.google.com/spreadsheets/d/1X1WAp0ydPuy58n3l3g4qp1Fhmt1Z_PJbV3mY62naHR8/edit'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Look for sheet names and sheet ids
matches = re.findall(r'(\d{4,12})[^\n]*?(Patient Log|Settings|Patient Lookup|Analytics|Instructions)', html)
print("Matches regex 1:", set(matches))

# Look for sheetId
sheet_ids = re.findall(r'"sheetId":\s*(\d+)[^}]*?"title":\s*"([^"]+)"', html)
print("Sheet IDs:", sheet_ids)

# Look for title followed by id
titles = re.findall(r'"title":\s*"([^"]+)"[^}]*?"sheetId":\s*(\d+)', html)
print("Titles:", titles)

# Look for google sheets wcx
wcx = re.findall(r'\[(\d+),\[\"([^\"]+)\"\]', html)
print("wcx:", wcx[:10])
