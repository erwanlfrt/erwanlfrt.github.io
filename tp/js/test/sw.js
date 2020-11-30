const noCorsUrl = "https://cors-anywhere.herokuapp.com/";

let calUrl = "https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu";

console.log("j'existe ici")

self.addEventListener('install', function(event) {
    console.log(" on lance installe")
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/tp/js/test/',
          noCorsUrl + calUrl
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
      console.log("on lance fetch")
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        console.log("on passe dans le if")
        return response;
      } else {
        console.log("on passe dans le else")
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          console.log("on passe dans le fetch")
          console.log("response = "+response.text())
          let responseClone = response.clone();
          
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function() {
          return caches.match(noCorsUrl+calUrl);
        });
      }
    }));
  });