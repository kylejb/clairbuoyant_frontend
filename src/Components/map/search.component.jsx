import ReactLeafletSearch from 'react-leaflet-search';


const L = require('leaflet');
const greenMarker = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


const Search = () => {
  return <ReactLeafletSearch position="bottomright" zoom={10} markerIcon={greenMarker} />;
};

export default Search;
