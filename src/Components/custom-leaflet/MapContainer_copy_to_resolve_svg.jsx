import React, { useState, useEffect } from 'react';
import CanvasMarkersLayer from '../Components/custom-leaflet/CanvasMarkersLayer';
import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import './map.css';
import TestIcon from '../Components/forecast/compass/testIcon.jsx'

const defaultIcon = L.Icon({
    iconUrl: TestIcon,
});


const MapContainer = () => {
    const [buoys, setBuoys] = useState([]),
        [selectedBuoy, setSelectedBuoy] = useState(null);
    // currentUser = JSON.parse(localStorage.getItem('loggedIn'));



    const parseBuoyData = (buoyObjArr) => {

        const parsedBuoyObjArr = []
        for (const buoy of buoyObjArr) {
            if (buoy.longitude && buoy.latitude){
                const newBuoyObj = {}, coordinates = [buoy.latitude, buoy.longitude], stationCode = buoy.station_code;
                newBuoyObj.name = buoy.station_name; newBuoyObj.coordinates = coordinates; newBuoyObj.stationCode = stationCode;
                parsedBuoyObjArr.push(newBuoyObj)
            }
        }
        setBuoys(parsedBuoyObjArr)
    }

    const fetchBuoys = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Authorization': `Bearer ${currentUser}`
            }
        };

        const response = await fetch("http://localhost:3000/api/v1/buoys", options);
        let buoys = await response.json();
        parseBuoyData(buoys);
    }

    useEffect(() => {
        fetchBuoys()
    }, [])

    console.log("MapContainer ", buoys)
    return (
        <Map center={[40.586723, -73.811501]} zoom={12}>
            <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                maxZoom={17}
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            />
            {buoys.map(buoy => (
                <CanvasMarkersLayer>
                    <Marker 
                        key={buoy.stationCode} 
                        position={[
                            buoy.coordinates[0], 
                            buoy.coordinates[1]
                        ]}
                        onClick={ () => {
                            setSelectedBuoy(buoy)
                        }} 
                        icon={<TestIcon/>}
                    >
                {selectedBuoy && (
                    <Popup
                        position={[
                            selectedBuoy.coordinates[0],
                            selectedBuoy.coordinates[1]
                        ]}
                        onClose={() => {
                            setSelectedBuoy(null)
                        }}
                    >
                        <div>
                            <h2>{selectedBuoy.name}</h2>
                            <p>{selectedBuoy.coordinates}</p>
                        </div>
                    </Popup>
                )}
                </Marker>
                </CanvasMarkersLayer>
            ))}

        </Map>
    );
}

export default MapContainer;


// import React, { useState, useEffect } from 'react';
// import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import './map.css';


// const buoyIcon = new Icon({
//     iconUrl: '../Assets/buoy.svg',
//     iconSize: [25, 25]
// });


// const MapContainer = () => {
//     const [buoys, setBuoys] = useState([]),
//         [selectedBuoy, setSelectedBuoy] = useState(null);
//     // currentUser = JSON.parse(localStorage.getItem('loggedIn'));



//     const parseBuoyData = (buoyObjArr) => {

//         const parsedBuoyObjArr = []
//         for (const buoy of buoyObjArr) {
//             if (buoy.longitude && buoy.latitude){
//                 const newBuoyObj = {}, coordinates = [buoy.latitude, buoy.longitude], stationCode = buoy.station_code;
//                 newBuoyObj.name = buoy.station_name; newBuoyObj.coordinates = coordinates; newBuoyObj.stationCode = stationCode;
//                 parsedBuoyObjArr.push(newBuoyObj)
//             }
//         }
//         setBuoys(parsedBuoyObjArr)
//     }

//     const fetchBuoys = async () => {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//                 // 'Authorization': `Bearer ${currentUser}`
//             }
//         };

//         const response = await fetch("http://localhost:3000/api/v1/buoys", options);
//         let buoys = await response.json();
//         parseBuoyData(buoys);
//     }

//     useEffect(() => {
//         fetchBuoys()
//     }, [])

//     return (
//         <Map center={[40.586723, -73.811501]} zoom={12}>
//             <TileLayer
//                 url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
//                 maxZoom={17}
//                 attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//             />
//             {buoys.map(buoy => (
//                 <CircleMarker 
//                     key={buoy.stationCode} 
//                     center={[
//                         buoy.coordinates[0], 
//                         buoy.coordinates[1]
//                     ]}
//                     radius={8}
//                     onClick={ () => {
//                         setSelectedBuoy(buoy)
//                     }} 
//                 />
//             ))}

//                 {selectedBuoy && (
//                     <Popup
//                         position={[
//                             selectedBuoy.coordinates[0],
//                             selectedBuoy.coordinates[1]
//                         ]}
//                         onClose={() => {
//                             setSelectedBuoy(null)
//                         }}
//                     >
//                         <div>
//                             <h2>{selectedBuoy.name}</h2>
//                             <p>{selectedBuoy.coordinates}</p>
//                         </div>
//                     </Popup>
//                 )}
//         </Map>
//     );
// }

// export default MapContainer;