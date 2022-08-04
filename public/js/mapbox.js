const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoibmVzY29kZXkiLCJhIjoiY2w2ZmNpYXVpMGg5NzNkbzNveDZtc3hhNyJ9.I9p7s5magLbWNr40jAAxSQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  scrollZoom: false,
});

const locationsArray = Object.keys(locations).map((key) => locations[key]);

const bounds = new mapboxgl.LngLatBounds();

locationsArray.forEach((location) => {
  const el = document.createElement('div');
  el.className = 'marker';
  new mapboxgl.Marker(el).setLngLat(location).addTo(map);

  new mapboxgl.Popup({
    offset: 25,
  })
    .setLngLat(location)
    .addTo(map);

  bounds.extend(location);
});

map.fitBounds(bounds, {
    padding: { top: 200, bottom: 150, left: 100, right: 100 },
    maxZoom: 15,
    duration: 1000,
    easing: function (t) {
        return t * (2 - t);
    }
});

