const cacheName = "webworkers";

const noCorsUrl = "https://cors-anywhere.herokuapp.com/";

let calUrl = "https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu";

let cacheResources = [
    "/tp/js/webworkers/",
    noCorsUrl + calUrl
]
console.log("holly god");

this.addEventListener("install", (event) =>{
    console.log("on build")
    event.waitUntil(
        caches.open(cacheName).then((cache) =>{
            return cache.addAll(cacheResources);
        })
    );
});


this.addEventListener("fetch", (event) =>{
    console.log("fetched");
    event.respondWith(
        caches.match(event.request).then((response) =>{
            return response.text() || fetch(event.request);
        })
    );
});