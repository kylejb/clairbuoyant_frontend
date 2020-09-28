import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';

import WorldMap from '../Components/map/map.component';
import './map.css';


// const buoyIcon = new Icon({
//     iconUrl: '../Assets/buoy.svg',
//     iconSize: [25, 25]
// });


const MapContainer = () => {
    const [buoys, setBuoys] = useState([]);
        // [selectedBuoy, setSelectedBuoy] = useState(null);
    // currentUser = JSON.parse(localStorage.getItem('loggedIn'));


    const parseBuoyData = (buoyObjArr) => {
        const parsedBuoyObjArr = [];
        for (const buoy of buoyObjArr) {
            const newBuoyObj = {}, [latitude, longitude] = [buoy.latitude, buoy.longitude], stationCode = buoy.station_code;
            newBuoyObj.name = buoy.station_name; newBuoyObj.latitude = latitude; newBuoyObj.longitude = longitude; newBuoyObj.station_code = stationCode; newBuoyObj.id = buoy.id;
            parsedBuoyObjArr.push(newBuoyObj);
        }
        setBuoys(parsedBuoyObjArr);
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
        fetchBuoys();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <Segment fluid='true' style={{marginTop: '72px', maxHeight: '50px'}}>
            <WorldMap buoys={buoys} />
        </Segment>
    );
}

export default MapContainer;