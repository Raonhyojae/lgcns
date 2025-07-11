const CACHE_NAME = 'lgcns-pwa-v1.0';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/main.js',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

// 설치
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Cache failed:', err))
  );
});

// 네트워크 요청 처리
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(err => console.log('Fetch failed:', err))
  );
});
