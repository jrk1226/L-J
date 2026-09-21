// Keeps the POS working with no internet: the app and its pictures are saved on the device.
const CACHE = "lj-pos-v4-4";
const FILES = ["./", "index.html", "manifest.json", "icon.png", "images/aperol-spritz.jpg", "images/blue-point-toasted-lager.png", "images/brownie-sundae.jpg", "images/bud-light.png", "images/cabernet.jpg", "images/caesar-salad.jpg", "images/calamari.jpg", "images/cannoli.jpg", "images/cheesecake.jpg", "images/chicken-sandwich.jpg", "images/coffee.jpg", "images/espresso-martini.jpg", "images/fish-and-chips.jpg", "images/guinness.png", "images/house-red.jpg", "images/house-white.jpg", "images/iced-tea.jpg", "images/margarita.jpg", "images/margherita-pie.jpg", "images/montauk-wave-chaser.png", "images/moscow-mule.jpg", "images/mozzarella-sticks.jpg", "images/nachos.jpg", "images/old-fashioned.jpg", "images/penne-vodka.jpg", "images/pinot-grigio.jpg", "images/prosecco.jpg", "images/smash-burger.jpg", "images/soda.jpg", "images/sparkling-water.jpg", "images/steak-frites.jpg", "images/stella-artois.png", "images/well-drink.jpg", "images/wings.jpg"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES).catch(() => {})).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // the app itself: try the network first so updates arrive, fall back to the saved copy
  if (url.origin === location.origin && (url.pathname.endsWith("/") || url.pathname.endsWith("index.html"))) {
    e.respondWith(fetch(e.request).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then((r) => r || caches.match("index.html"))));
    return;
  }
  // everything else: saved copy first, network if we do not have it yet
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).then((res) => { if (url.origin === location.origin || url.hostname.endsWith("cloudflare.com") || url.hostname.endsWith("gstatic.com") || url.hostname.endsWith("googleapis.com")) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); } return res; }).catch(() => r)));
});
