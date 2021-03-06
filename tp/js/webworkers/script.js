this.addEventListener("install", function(event) {
    // Ici on utilise waitUntil qui attends une promesse pour valider l'installation
    event.waitUntil(
      caches.open("mon-site-cache-v1").then(function(cache) {
        // On met en cache une liste d'URLs qui sont la fondation de notre app.
        return cache.addAll([
            "https://cors-anywhere.herokuapp.com/https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu",
        ]);
      })
    );
  });
  



this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache HIT, on retourne la réponse en cache.
          if (response) {
            return response;
          }
          
          // Sinon on effectue la requête réellement et on retourne son contenu.
          return fetch(event.request);
        }
      )
    );
  });