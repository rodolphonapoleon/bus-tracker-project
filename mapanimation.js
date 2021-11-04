 //Token
 mapboxgl.accessToken = 'pk.eyJ1IjoibmFwbzA1IiwiYSI6ImNrdXdxNWJidTZsNWkydm1uYWlhM2x4NG4ifQ.TjicaJo29WIY_Ot_5fdW-A';
 //Initialize map
 const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-71.104081, 42.365554], // starting position [lng, lat]
  zoom: 13 // starting zoom
});
// Function that run the buses
async function runBustracker(){ 
 const buses = await getBusLocations();
//  console.log(buses);
 buses.forEach( bus => {
 const markerObj = getMarker(bus.id);        
  if(markerObj){
      const marker = Object.values(markerObj)[0];
      moveMarker(marker, bus);
  }else{    
    createMarker(bus, bus.id);
  }    
});     
setTimeout(runBustracker, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
const response = await fetch(url);
const json     = await response.json();
return json.data;
}
// Create marker
let markers = [];
function createMarker(bus, id) {
const marker = new mapboxgl.Marker()
.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
.addTo(map);
const element = {};
element.marker = marker;
element.id = id
markers.push(element);   
}
// Move Marker
function moveMarker(marker, bus) {
marker.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
}
// Get Marker % Bus Id
function getMarker(busId) {
const element = markers.find(item => 
 item.id === busId
);
return element;
}