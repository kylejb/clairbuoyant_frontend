import { useState } from 'react';
import BuoyCard from '../buoy/BuoyCard';
import {
  MapContainer,
  Popup,
  TileLayer,
  CircleMarker,
  Marker,
  ZoomControl
} from 'react-leaflet';


const L = require('leaflet');
const buoyImg = L.icon({
    iconUrl: require('../buoy/buoyIcon.png'),
    iconSize: [64, 64],
    iconAnchor: [64, 32]
});

const WorldMap = ({
  buoys,
  favBuoys,
  selectedBuoy,
  selectedBuoyMetData,
  setSelectedBuoy,
  setSelectedBuoyMetData,
  handleUserFavorites,
  entrySubmitHandler,
}) => {
  // eslint-disable-next-line
  const [isFav, setIsFav] = useState(null);


  const fetchBuoyShow = async (buoyObj) => {
    const response = await fetch(`http://localhost:8000/buoys/${buoyObj.id}`);
    let buoy = await response.json();
    setSelectedBuoy(buoy);
  };

  const fetchBuoyMetData = async (buoyObj) => {
    const response = await fetch(`http://localhost:8000/buoys/${buoyObj.id}`);
    let buoyData = await response.json();
    setSelectedBuoyMetData(buoyData);
  };

  const isSelectedBuoyUserFav = () => {
    if (favBuoys.find(favBuoy => favBuoy.buoy.id === selectedBuoy.id)) {
      return true;
    };
    return false;
  };

  const renderCircleMarkers = () => {
    const favBuoyIds = favBuoys && favBuoys.map(favBuoy => favBuoy.buoy.id);
    return buoys.map(buoy => {
      if (favBuoys && favBuoyIds.includes(buoy.id)) {
        //* this needs to be colorized differently
        return (
          <Marker
            icon={buoyImg}
            key={buoy.station_id}
            position={[
              buoy.latitude,
              buoy.longitude
            ]}
            onClick={ () => {
              fetchBuoyShow(buoy);
              fetchBuoyMetData(buoy);
              setIsFav(true);
            }}
          />
        );
      } else {
        return (
          <CircleMarker
            key={buoy.station_id}
            center={[
              buoy.latitude,
              buoy.longitude
            ]}
            radius={7}
            onClick={ () => {
              fetchBuoyShow(buoy);
              fetchBuoyMetData(buoy);
              setIsFav(false);
            }}
          />
        );
      };
    });
  };


  return (
    <MapContainer
      center={[40.586723, -73.811501]}
      zoom={4}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        url='https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}'
        maxZoom={13}
        attribution='Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
      />
      <ZoomControl position="bottomright" />

      {renderCircleMarkers()}
      {/* <Search /> */}

      { selectedBuoy && (
        <Popup
            position={[
                selectedBuoy.latitude,
                selectedBuoy.longitude
            ]}
            onClose={() => {
                setSelectedBuoy(null);
            }}
        >

          <BuoyCard
            selectedBuoy={selectedBuoy}
            isFav={isSelectedBuoyUserFav()}
            toggleIsFav={setIsFav}
            selectedBuoyMetData={selectedBuoyMetData}
            handleUserFavorites={handleUserFavorites}
            entrySubmitHandler={entrySubmitHandler}
          />

        </Popup>
      )}
    </MapContainer>
  );
};

export default WorldMap;
