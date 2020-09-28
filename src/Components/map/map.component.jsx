import React, { useState } from 'react';
import Search from './search.component';
import { Map, Popup, TileLayer, CircleMarker } from 'react-leaflet';
// import { Icon } from 'leaflet';

const WorldMap = props => {
    const [selectedBuoy, setSelectedBuoy] = useState(null);

    const fetchBuoyShow = (buoyObj) => {
        console.log("start of fetch show ", buoyObj)
        fetch(`http://localhost:3000/api/v1/buoys/${buoyObj.id}`)
        .then(res => res.json())
        .then(buoyResObj => setSelectedBuoy(buoyResObj)
        )
    }

    const renderBuoyEntries = () => {
        return selectedBuoy.entries.map(selectedBuoyEntry => <li> {selectedBuoyEntry.entry} </li>)
    }


    return (
        /* 
        Map's center prop can be revised to accept prop its parent (MapContainer), which may originate from user's onClick action to set map's starting location 
            ? e.g., clicking a position on the 3d globe will load a 2d map of that area for more detailed information 
        */
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
                            { selectedBuoy.entries && (
                                <div>
                                    <ul>
                                    {renderBuoyEntries()}
                                    </ul>
                                </div>
                            )}
                            <p>{selectedBuoy.longitude}, {selectedBuoy.latitude}</p>
                        </div>
                    </Popup>
                )}
        </Map>
    );
}

export default WorldMap;