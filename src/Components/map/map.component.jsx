import React, { useState } from 'react';
import Search from './search.component';
import ForecastCard from '../forecast/ForecastCard';
import JournalCard from '../journal/JournalCard';
import { Map, Popup, TileLayer, CircleMarker } from 'react-leaflet';
// import { Icon } from 'leaflet';


const WorldMap = props => {
    const [selectedBuoy, setSelectedBuoy] = useState(null),
          [selectedBuoyMetData, setSelectedBuoyMetData] = useState(null);

    // refactor to async/await - should load data faster
    const fetchBuoyShow = (buoyObj) => {
        fetch(`http://localhost:3000/api/v1/buoys/${buoyObj.id}`)
        .then(res => res.json())
        .then(buoyResObj => {
            setSelectedBuoy(buoyResObj)
        })

        fetch(`http://localhost:3000/api/v1/buoys/${buoyObj.id}/meteorological_data`)
        .then(res => res.json())
        .then(buoyResObj => {
            setSelectedBuoyMetData(buoyResObj)
        })
    }


    return (
        <Map center={[40.586723, -73.811501]} zoom={12}>
            <TileLayer
                url='https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}'
                maxZoom={17}
                attribution='Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
            />

            { props.buoys.map( buoy => (
                <CircleMarker 
                    key={buoy.station_code} 
                    center={[
                        buoy.latitude, 
                        buoy.longitude
                    ]}
                    radius={8}
                    onClick={ () => {
                        fetchBuoyShow(buoy)
                    }} 
                />
            ))}

                <Search />

                { selectedBuoy && (
                    <Popup
                        position={[
                            selectedBuoy.latitude,
                            selectedBuoy.longitude
                        ]}
                        onClose={() => {
                            setSelectedBuoy(null)
                        }}
                    >
                        <div>
                            <h2>{selectedBuoy.station_name}</h2>
                            {/*// TODO - wire up behavior for user to favorite buoy; this should also change color of buoy */}
                            <button onClick={ () => console.log("Toggle FavBuoy Here")}>Favorite</button>
                            { selectedBuoyMetData && (
                                <>
                                    {<ForecastCard selectedBuoyMetData={selectedBuoyMetData} />}
                                </>
                            )}

                            { selectedBuoy.entries && (
                                <>   
                                    {<JournalCard selectedBuoy={selectedBuoy} />}
                                </>
                            )}

                            <p>{selectedBuoy.longitude}, {selectedBuoy.latitude}</p>
                        </div>
                    </Popup>
                )}
        </Map>
    );
}

export default WorldMap;