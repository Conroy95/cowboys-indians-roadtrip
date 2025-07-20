const CACHE_NAME = 'roadtrip-v1';
const STATIC_ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'dag.html',
  'dag.js',
  'routes.json',
  'manifest.json',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'img/denver.jpg',
  'img/cheyenne.jpg',
  'img/hotsprings.jpg',
  'img/rapidcity.jpg',
  'img/badlands.jpg',
  'img/billings.jpg',
  'img/cody.jpg',
  'img/yellowstone.jpg',
  'img/jacksonhole.jpg',
  'img/saltlakecity.jpg',
  'img/moab.jpg',
  'img/amsterdam.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
