const CACHE_NAME = 'portal-mitra-v2';

// Hanya cache file penting untuk PWA (icon & manifest)
const urlsToCache = [
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Strategy: Network Only (wajib internet)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        // Jika offline, kembalikan response error
        return new Response(
          '<html><body style="font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;background:#0f2849;color:white;text-align:center;padding:20px;"><div><h1>📡 Tidak Ada Koneksi Internet</h1><p>Aplikasi ini membutuhkan koneksi internet untuk berfungsi.</p><button onclick="location.reload()" style="margin-top:20px;padding:12px 24px;background:#3b82f6;color:white;border:none;border-radius:8px;font-size:16px;cursor:pointer;">Coba Lagi</button></div></body></html>',
          {
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            status: 503,
            statusText: 'Service Unavailable'
          }
        );
      })
  );
});
