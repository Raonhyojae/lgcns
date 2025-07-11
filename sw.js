const CACHE_NAME = 'lgcns-pwa-v1';
const urlsToCache = [
  '/',
  '/css/main.css',
  '/js/main.js',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

// 설치 이벤트
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 네트워크 요청 처리
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
