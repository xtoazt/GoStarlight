importScripts('/assets/uv/uv/uv.bundle.js');
importScripts('/assets/uv/uv/uv.config.js');
importScripts('/assets/uv/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
