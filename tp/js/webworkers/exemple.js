console.log("holly god");

const cacheName = "webworkers";

const noCorsUrl = "https://cors-anywhere.herokuapp.com/";

let calUrl = "https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu";

let cacheResources = [
    "/tp/js/webworkers/",
    noCorsUrl + calUrl
]


this.addEventListener("install", (event) =>{
    console.log("on build")
    event.waitUntil(
        caches.open(cacheName).then((cache) =>{
            return cache.addAll(cacheResources);
        })
    );
});

fetch( noCorsUrl + calUrl
    ).then(function(response){
        return response.text();
    }).then(function(text){

      //console.log(text);
      var jCalData = ICAL.parse(text);
      let result = []
      let events = jCalData[1][2];
      events.forEach(e => result.push(flattenEvent(e)));
      console.log(events);
      /*
      var vcalendar = new ICAL.Component(jCalData);
      if(Array.isArray(vcalendar)) {
        console.log("         It's an array! ");
      }else{
        console.log(vcalendar);
        console.log(ICAL.stringify(vcalendar));
      }
      var componentArray = vcalendar.getAllSubcomponents();
      componentArray.foreach((item,index,array)=>{console.log(">>>" + index);});
      */


      //var vevent = vcalendar.getFirstSubcomponent('vevent');
      //var summary = vevent.getFirstPropertyValue('summary');
      //console.log('Summary: ' + summary);
    });