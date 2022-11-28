
const cacheName = 'cache';
const appShellFiles = [ 

        "icons/favicon.ico",
        "icons/icon-32.png",
        "icons/icon-64.png",
        "icons/icon-96.png",
        "icons/icons-128.png",
        "icons/icons-168.png",
        "icons/icon-180.png",
        "icons/icon-192.png",
        "icons/icon-256.png",
        "icons/icon-512.png",
        "icons/maskable_icon.png",
        "app.js",
        "index.html",
        "style.css"
];


self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');

});



self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) { return r; }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });
  



