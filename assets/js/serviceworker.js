self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/general/index.html',
          '/general/css/index.css',
          '/general/js/index.js'
        ]);
      })
    );
  });
  