import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';

import WorldMap from '../Components/map/map.component';

import './map.css';


// const buoyIcon = new Icon({
//     iconUrl: '../Assets/buoy.svg',
//     iconSize: [25, 25]
// });


const MapContainer = () => {
    const [buoys, setBuoys] = useState([]),
          [favBuoys, setFavBuoys] = useState([]);
        // [selectedBuoy, setSelectedBuoy] = useState(null);

    const currentUser = JSON.parse(localStorage.getItem('loggedIn'));


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
            }
        };
        const response = await fetch("http://localhost:3000/api/v1/buoys", options);
        let buoys = await response.json();
        parseBuoyData(buoys);
    }

    const fetchUserFavBuoys = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            }
        };
        const response = await fetch("http://localhost:3000/api/v1/favorite_buoys", options);
        let buoys = await response.json();
        setFavBuoys(buoys);
    }

    const handleUserFavorites = async (buoyObj, isFavorited) => {
        console.log("handle user favorites ", buoyObj, isFavorited)

        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Authorization': `Bearer ${currentUser}`
        //     },
        //     body: JSON.stringify(buoyObj)
        // };
        // const response = await fetch("http://localhost:3000/api/v1/favorite_buoys", options);
        // let buoys = await response.json();
        // setFavBuoys(prevState => ({
        //     ...prevState,
        //     buoys
        // }));
    }

    useEffect(() => {
        fetchBuoys();

        if (currentUser) {
            fetchUserFavBuoys()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return ( 
        <Segment padded={false} tertiary fluid='true' style={{marginTop: '72px'}}>
            <WorldMap buoys={buoys} favBuoys={favBuoys} handleUserFavorites={handleUserFavorites} />
        </Segment>
    );
}

export default MapContainer;