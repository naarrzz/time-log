// Lets the home screen app open with no internet. Firestore keeps the logs; this keeps the app's files.
// Bump CACHE when the Firebase SDK version in index.html changes.
const CACHE = "time-log-0.5";
const FB = "https://www.gstatic.com/firebasejs/10.14.1/";
const LOCAL = ["./", "index.html", "favicon.png", "apple-touch-icon.png"];
const SDK = ["firebase-app-compat.js", "firebase-auth-compat.js", "firebase-firestore-compat.js"].map(f => FB + f);
const CDN_HOSTS = ["www.gstatic.com", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(LOCAL.concat(SDK))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(() => self.clients.claim())
  );
});

// App files: newest from the network, but don't make a weak signal wait more than 3 seconds.
function networkFirst(req) {
  const fromCache = () => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"));
  const net = fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  });
  const slow = new Promise(r => setTimeout(r, 3000)).then(fromCache).then(hit => hit || net);
  return Promise.race([net, slow]).catch(fromCache);
}

// SDK and fonts: versioned or rarely changing, so the cached copy is fine.
function cacheFirst(req) {
  return caches.match(req).then(hit => hit || fetch(req).then(res => {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(req, copy));
    return res;
  }));
}

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin === self.location.origin) e.respondWith(networkFirst(e.request));
  else if (CDN_HOSTS.includes(url.hostname)) e.respondWith(cacheFirst(e.request));
  // Everything else (Firestore, Auth) goes straight to the network.
});
