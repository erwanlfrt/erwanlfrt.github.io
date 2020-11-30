  
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        console.log("on build")
        return cache.addAll([
          'https://cors-anywhere.herokuapp.com/https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu',
        ]);
      })
    );
  });

  console.log("hey ")
  
  this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then((response) =>{
          console.log("ok for the answer")
          return response
      }).catch(function() {
        console.log("let's go for the fetch")
        return fetch(event.request);
      })
    );
  });