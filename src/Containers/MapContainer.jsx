import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import WorldMap from '../Components/map/map.component';
import './map.css';


// const buoyIcon = new Icon({
//     iconUrl: '../Assets/buoy.svg',
//     iconSize: [25, 25]
// });


const MapContainer = (props) => {
    const [buoys, setBuoys] = useState([]),
          [favBuoys, setFavBuoys] = useState([]),
          [selectedBuoy, setSelectedBuoy] = useState(null),
          [selectedBuoyMetData, setSelectedBuoyMetData] = useState(null);
          

    const currentUser = JSON.parse(localStorage.getItem('loggedIn'));


    //* adding behavior to parent's function and passing this down to MapContainer children
    // review later for race condition issues due to Promises; could be good case study for concept
    const entrySubmitHandlerHelper = (entry, isEditing = true) => {
        props.entrySubmitHandler(entry, isEditing);
        fetchSelectedBuoy(selectedBuoy);
    }

    const fetchSelectedBuoy = async (buoyObj) => {
        const response = await fetch(`http://localhost:3000/api/v1/buoys/${buoyObj.id}`)
        let buoy = await response.json();
        setSelectedBuoy(buoy);
    }


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

    const createUserFavBuoy = async (buoyObj) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            },
            body: JSON.stringify(buoyObj)
        };
        let response = await fetch("http://localhost:3000/api/v1/favorite_buoys", options);
        let newFavBuoy = await response.json();

        const newObj = [...favBuoys, {...newFavBuoy}];
        setFavBuoys(newObj);
    }

    const deleteUserFavBuoy = async (buoyObj) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            }
        };
        const response = await fetch(`http://localhost:3000/api/v1/favorite_buoys/${buoyObj.id}`, options);
        let confirmation = await response.json();
        fetchUserFavBuoys();
        return confirmation
    }

    const handleUserFavorites = (buoyObj, isFavorited) => {
        if (isFavorited) {
            createUserFavBuoy(buoyObj);       
        } else {
            deleteUserFavBuoy(buoyObj);
        }  
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
            <WorldMap 
                buoys={buoys} 
                favBuoys={favBuoys} 
                handleUserFavorites={handleUserFavorites} 
                entrySubmitHandler={entrySubmitHandlerHelper}
                selectedBuoy={selectedBuoy}
                setSelectedBuoy={setSelectedBuoy}
                selectedBuoyMetData={selectedBuoyMetData}
                setSelectedBuoyMetData={setSelectedBuoyMetData}
            />
        </Segment>
    );
}

export default MapContainer;