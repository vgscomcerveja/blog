---
layout: null
---

const staticCacheName = 'vgscomcerveja-{{ site.time | date: "%Y-%m-%d-%H-%M" }}';

const filesToCache = [
  {% for page in site.pages_to_cache %}
    '{{ page }}',
  {% endfor %}
  {% for post in site.posts limit: 7 %}
    '{{ post.url }}',
  {% endfor %}
  {% for asset in site.files_to_cache %}
    '{{ asset }}',
  {% endfor %}
];

// cache to install
this.addEventListener("install", event => {
  this.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
  )
});

// clear cache on activate
this.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => (cacheName.startsWith('vgscomcerveja-')))
          .filter(cacheName => (cacheName !== staticCacheName))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// serve from cache
this.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        //console.log('load cached');
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match("/offline/index.html");
      })
  )
});
