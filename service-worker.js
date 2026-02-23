const CACHE_NAME = 'ainario-cache-v2';
const urlsToCacheOnInstall = [
  '/',
  '/index.html',
  '/favicon.svg',
];

// Install event: open cache and add the app shell files
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCacheOnInstall);
      })
  );
});

// Activate event: remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event: serve from cache, fallback to network, then cache the new resource
self.addEventListener('fetch', event => {
  // We only cache GET requests
  if (event.request.method !== 'GET') {
      return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Cache hit - return response
        if (cachedResponse) {
          return cachedResponse;
        }

        // Not in cache - fetch from network
        return fetch(event.request).then(
          networkResponse => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200) {
                return networkResponse;
            }
            
            // We don't cache requests to Google Analytics
            if (event.request.url.includes('googletagmanager')) {
                return networkResponse;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        ).catch(error => {
            console.error('Fetching failed:', error);
            // Here you could return a fallback offline page if you had one.
            // For now, it will fail as if there was no service worker.
            throw error;
        });
      })
  );
});
