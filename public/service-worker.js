// MOLES Jardinería - Service Worker
// Permite funcionamiento offline en iPad

const CACHE_NAME = 'moles-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/static/js/main.js',
  '/static/css/main.css',
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('⚙️ Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('💾 Cacheando archivos...');
      return cache.addAll(urlsToCache).catch((err) => {
        console.log('Algunos archivos no pudieron cachearse:', err);
        return cache.addAll(['/']);
      });
    })
  );
  self.skipWaiting();
});

// Activar Service Worker
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker activado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Borrando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de cache: Network first, fallback a cache
self.addEventListener('fetch', (event) => {
  // No cachear requests a API
  if (event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache el response exitoso
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      })
      .catch(() => {
        // Si falla, usar caché
        return caches.match(event.request).then((response) => {
          return response || new Response(
            '<!DOCTYPE html><html><body><h1>Offline</h1><p>MOLES Jardinería está disponible offline. Los cambios se sincronizarán cuando haya conexión.</p></body></html>',
            { headers: { 'Content-Type': 'text/html' } }
          );
        });
      })
  );
});

// Sincronización en background
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Aquí irían las sincronizaciones pendientes
      Promise.resolve()
    );
  }
});

// Push notifications (opcional)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      tag: 'moles-notification',
      requireInteraction: false,
    };
    event.waitUntil(
      self.registration.showNotification('MOLES Jardinería', options)
    );
  }
});

// Click en notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

console.log('🌱 Service Worker de MOLES Jardinería cargado');
