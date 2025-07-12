const CACHE_NAME = 'roadtrip-cache-v1';
const FILES_TO_CACHE = [
  '.',
  'index.html',
  'style.css',
  'app.js',
  'route.json',
  'manifest.json',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/wildwest-bg.jpg'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  if (evt.request.mode !== 'navigate') {
    evt.respondWith(
      caches.match(evt.request).then(response => {
        return response || fetch(evt.request);
      })
    );
    return;
  }
  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.match('index.html');
    })
  );
});
