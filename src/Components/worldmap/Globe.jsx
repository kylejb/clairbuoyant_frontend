import React, {useState, useEffect, useRef} from 'react';
import Globe from 'react-globe.gl';


const ForecastGlobe = () => {
    const [buoys, setBuoys] = useState([]), 
        globeEl = useRef(),
        currentUser = JSON.parse(localStorage.getItem('loggedIn'));

    

    const parseBuoyData = (buoyObjArr) => {
    
        const parsedBuoyObjArr = []
        for (const buoy of buoyObjArr) {
            if (buoy.longitude && buoy.latitude){
                const newBuoyObj = {}, coordinates = [buoy.longitude, buoy.latitude];
                newBuoyObj.name = buoy.station_name; newBuoyObj.coordinates = coordinates;
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
                'Accept': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            }
        };

        const response = await fetch("http://localhost:3000/api/v1/buoys", options);
        let buoys = await response.json();
        parseBuoyData(buoys);
    }

    useEffect(() => {
        fetchBuoys()
    }, [])

    return (
        <>
            <h1>Globe</h1>
                <Globe 
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    labelsData={buoys}
                    labelLat={d => d.coordinates[1]}
                    labelLng={d => d.coordinates[0]}
                    labelText={d =>"Buoy"}
                    labelSize={500 * 4e-4}
                    labelDotRadius={500 * 4e-4}
                    labelColor={() => 'rgba(255, 165, 0, 0.75)'}
                    labelResolution={2}
            />
        </>
    );
}

export default ForecastGlobe;