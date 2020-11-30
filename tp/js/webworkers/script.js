document.body.style.backgroundColor = "red";


this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).catch(function() {
        return fetch(event.request).then(function(response) {
          return caches.open('v1').then(function(cache) {
            cache.put(event.request, response.clone());
            return response;
          });  
        });
      }).catch(function() {
        return caches.match('https://cors-anywhere.herokuapp.com/https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu');
      })
    );
  });