const CACHE_NAME = 'roadtrip-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/dag.html',
  '/style.css',
  '/app.js',
  '/dag.js',
  '/routes.json',
  '/manifest.json',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/img/denver.jpg',
  '/img/cheyenne.jpg',
  '/img/hotsprings.jpg',
  '/img/rapidcity.jpg',
  '/img/badlands.jpg',
  '/img/billings.jpg',
  '/img/cody.jpg',
  '/img/yellowstone.jpg',
  '/img/jacksonhole.jpg',
  '/img/saltlakecity.jpg',
  '/img/moab.jpg',
  '/img/amsterdam.jpg'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then(cachedResponse => {
      return cachedResponse || fetch(evt.request);
    })
  );
});
