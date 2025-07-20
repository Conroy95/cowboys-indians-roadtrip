const CACHE_NAME = 'roadtrip-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/dag.html',
  '/style.css',
  '/app.js',
  '/dag.js',
  '/manifest.json',
  '/routes.json',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  // alle foto's
  '/img/denver.png',
  '/img/cheyenne.png',
  '/img/hotsprings.png',
  '/img/rapidcity.png',
  '/img/badlands.png',
  '/img/billings.png',
  '/img/cody.png',
  '/img/yellowstone.png',
  '/img/jacksonhole.png',
  '/img/saltlakecity.png',
  '/img/moab.png',
  '/img/amsterdam.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
