/**
 * SMS Jaipur IR Hub - Service Worker for Offline Functionality
 * Enables 100% offline access during rounds in shielded CT/Angio basement suites
 */

const CACHE_NAME = "sms-ir-hub-v3.0";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./css/print.css",
  "./js/app.js",
  "./js/scheme-db.js",
  "./js/procedure-encyclopedia.js",
  "./js/booking-calendar.js",
  "./js/clinical-calculators.js",
  "./js/biopsy-tracker.js",
  "./js/case-simulator.js",
  "./js/ihms-autofill-bookmarklet.js",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching offline assets");
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn("[Service Worker] Pre-cache warning:", err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        return caches.match("./index.html");
      });
    })
  );
});
