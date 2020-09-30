import React, { useState } from 'react';
import Search from './search.component';
import BuoyCard from '../buoy/BuoyCard';
import { Map, Popup, TileLayer, CircleMarker } from 'react-leaflet';
// import { Icon } from 'leaflet';


const WorldMap = ({ buoys, favBuoys, selectedBuoy, selectedBuoyMetData, setSelectedBuoy, setSelectedBuoyMetData, handleUserFavorites, entrySubmitHandler }) => {
    // eslint-disable-next-line
    const [isFav, setIsFav] = useState(null);


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

        if (favBuoys.find(favBuoy => favBuoy.buoy.id === selectedBuoy.id)) {
            return true
        } else {
            return false
        }
    }

    const renderCircleMarkers = () => {
        const favBuoyIds = favBuoys && favBuoys.map(favBuoy => favBuoy.buoy.id)
        return buoys.map(buoy => {
            if (favBuoys && favBuoyIds.includes(buoy.id)) {
                //* this needs to be colorized differently
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
                            fetchBuoyMetData(buoy);
                            setIsFav(true);
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
                            fetchBuoyMetData(buoy);
                            setIsFav(false);
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

                    <BuoyCard 
                        selectedBuoy={selectedBuoy} 
                        isFav={isSelectedBuoyUserFav()} 
                        toggleIsFav={setIsFav}
                        selectedBuoyMetData={selectedBuoyMetData} 
                        handleUserFavorites={handleUserFavorites}
                        entrySubmitHandler={entrySubmitHandler}
                    />
                </Popup>
            )};
        </Map>
    );
}

export default WorldMap;
