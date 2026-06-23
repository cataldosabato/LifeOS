const CACHE_NAME = 'lifeos-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Installa il service worker e salva i file in cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Intercetta le richieste: restituisce la cache se presente, altrimenti scarica da internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});