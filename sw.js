const CACHE_NAME = 'lgcns-app-v1.0.0';
const BASE_PATH = '/lgcns';

// 캐시할 파일들 (실제 파일 구조에 맞게 수정하세요)
const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/css/style.css`,
  `${BASE_PATH}/css/bootstrap.min.css`,
  `${BASE_PATH}/js/main.js`,
  `${BASE_PATH}/js/bootstrap.min.js`,
  `${BASE_PATH}/images/logo.png`,
  `${BASE_PATH}/icons/icon-192.png`,
  `${BASE_PATH}/icons/icon-512.png`,
  // 추가 리소스들...
];

// 설치 이벤트
self.addEventListener('install', (event) => {
  console.log('[SW] 설치 중...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] 파일 캐싱 중...');
        return cache.addAll(urlsToCache.map(url => new Request(url, {
          cache: 'reload'
        })));
      })
      .catch((error) => {
        console.error('[SW] 캐싱 실패:', error);
      })
  );
  self.skipWaiting();
});

// 활성화 이벤트
self.addEventListener('activate', (event) => {
  console.log('[SW] 활성화 중...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] 오래된 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 페치 이벤트 (네트워크 요청 처리)
self.addEventListener('fetch', (event) => {
  // GitHub Pages의 경우만 캐시 처리
  if (event.request.url.includes('raonhyojae.github.io/lgcns')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // 캐시에 있으면 반환
          if (response) {
            return response;
          }
          
          // 네트워크에서 가져오기
          return fetch(event.request).then((response) => {
            // 유효한 응답인지 확인
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 응답 복사 후 캐시에 저장
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
        })
        .catch(() => {
          // 오프라인일 때 기본 페이지 반환
          if (event.request.destination === 'document') {
            return caches.match(`${BASE_PATH}/index.html`);
          }
        })
    );
  }
});

// 백그라운드 동기화 (선택사항)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('[SW] 백그라운드 동기화 실행');
  }
});

// 푸시 알림 (선택사항)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'LGCNS 앱에서 새로운 소식이 있습니다!',
    icon: `${BASE_PATH}/icons/icon-192.png`,
    badge: `${BASE_PATH}/icons/icon-192.png`,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 'lgcns-notification'
    },
    actions: [
      {
        action: 'explore',
        title: '확인하기',
        icon: `${BASE_PATH}/icons/icon-192.png`
      },
      {
        action: 'close',
        title: '닫기'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('LGCNS 앱', options)
  );
});