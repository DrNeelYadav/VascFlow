import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8899
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(ROOT_DIR, "dist")
DIRECTORY = DIST_DIR if os.path.exists(DIST_DIR) and os.path.exists(os.path.join(DIST_DIR, "index.html")) else ROOT_DIR

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    os.chdir(DIRECTORY)
    http.server.ThreadingHTTPServer.allow_reuse_address = True
    ports_to_try = [8899, 8088, 8008, 8080, 8000]
    httpd = None
    active_port = None
    
    for p in ports_to_try:
        try:
            httpd = http.server.ThreadingHTTPServer(("", p), Handler)
            active_port = p
            break
        except OSError:
            continue
            
    if not httpd:
        httpd = http.server.ThreadingHTTPServer(("", 0), Handler)
        active_port = httpd.server_address[1]

    with httpd:
        url = f"http://localhost:{active_port}/index.html"
        print("="*65)
        print("  SMS JAIPUR - INTERVENTIONAL RADIOLOGY CLINICAL SUMMARY SYSTEM")
        print("="*65)
        print(f"[*] Local Server running at: {url}")
        print("[*] Opening your browser...")
        print("[*] Press Ctrl+C to stop the server anytime.")
        print("="*65)
        try:
            webbrowser.open(url)
        except Exception:
            pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[*] Server stopped.")

if __name__ == "__main__":
    start_server()
