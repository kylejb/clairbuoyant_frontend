import React, { useState } from 'react';
import Search from './search.component';
import BuoyCard from '../buoy/BuoyCard';
// import ForecastCard from '../forecast/ForecastCard';
// import JournalCard from '../journal/JournalCard';
import { Map, Popup, TileLayer, CircleMarker } from 'react-leaflet';
// import { Icon } from 'leaflet';


const WorldMap = props => {
    const [selectedBuoy, setSelectedBuoy] = useState(null),
          [selectedBuoyMetData, setSelectedBuoyMetData] = useState(null),
          [isFavClick, setIsFavClick] = useState(null);

    // refactor to async/await - should load data faster
    const fetchBuoyShow = async (buoyObj) => {
        const response = await fetch(`http://localhost:3000/api/v1/buoys/${buoyObj.id}`)
        let buoy = await response.json();
        setSelectedBuoy(buoy);
    }

    const fetchBuoyMetData = async (buoyObj) => {
        const response = await fetch(`http://localhost:3000/api/v1/buoys/${buoyObj.id}/meteorological_data`)
        let buoyData = await response.json();
        setSelectedBuoyMetData(buoyData);
    }

    const isSelectedBuoyUserFav = () => {

        if (props.favBuoys.find(favBuoy => favBuoy.buoy.id === selectedBuoy.id)) {
            return true
        } else {
            return false
        }
    }

    const renderCircleMarkers = () => {
        console.log("RENDER CIRCLE STUFF prop check  ", props)
        const favBuoyIds = props.favBuoys && props.favBuoys.map(favBuoy => favBuoy.buoy.id)
        return props.buoys.map(buoy => {
            if (props.favBuoys && favBuoyIds.includes(buoy.id)) {
                // this needs to be colorized differently
                return (
                    <CircleMarker 
                        key={buoy.station_code} 
                        center={[
                            buoy.latitude, 
                            buoy.longitude
                        ]}
                        radius={15}
                        onClick={ () => {
                            fetchBuoyShow(buoy);
                            fetchBuoyMetData(buoy)
                        }} 
                    />
                )   
            } else {
                return (
                    <CircleMarker 
                        key={buoy.station_code} 
                        center={[
                            buoy.latitude, 
                            buoy.longitude
                        ]}
                        radius={8}
                        onClick={ () => {
                            fetchBuoyShow(buoy);
                        }} 
                    />
                )   
            }
        });
    }

    
    return (
        <Map center={[40.586723, -73.811501]} zoom={12}>
            <TileLayer
                url='https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}'
                maxZoom={13}
                attribution='Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
            />

            {renderCircleMarkers()}

            <Search />

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
                    {isSelectedBuoyUserFav()}

                    <BuoyCard 
                        selectedBuoy={selectedBuoy} 
                        isFav={isSelectedBuoyUserFav()} 
                        toggleIsFav={setIsFavClick}
                        selectedBuoyMetData={selectedBuoyMetData} 
                        handleUserFavorites={props.handleUserFavorites} 
                    />
                </Popup>
            )};
        </Map>
    );
}

export default WorldMap;
