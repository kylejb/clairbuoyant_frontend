import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import { Icon } from 'leaflet';
// import './map.css';

const WorldMap = props => {
    const [selectedBuoy, setSelectedBuoy] = useState(null);

    const fetchBuoyShow = (buoyObj) => {
        console.log("start of fetch show ", buoyObj)
        fetch(`http://localhost:3000/api/v1/buoys/${buoyObj.id}`)
        .then(res => res.json())
        .then(buoyResObj => setSelectedBuoy(buoyResObj)
        )
    }

    console.log("WorldMap Render ", props)
    return (
        <Map center={[40.586723, -73.811501]} zoom={12}>
            <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                maxZoom={17}
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
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
                            <p>{selectedBuoy.longitude}, {selectedBuoy.latitude}</p>
                        </div>
                    </Popup>
                )}
        </Map>
    );
}

export default WorldMap;