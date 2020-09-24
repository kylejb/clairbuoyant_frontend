import React, {useState, useEffect, useRef} from 'react';
import Globe from 'react-globe.gl';
   
	

    // Convert the XML document to an array of objects.
    // Note that querySelectorAll returns a NodeList, not a proper Array,
    // so we must use map.call to invoke array methods.
//     data = [].map.call(data.querySelectorAll("station"), function(station) {
//         console.log(station)
//         return {
//             station: station.getAttribute("id"),
//             frequency: +station.querySelector("lon").textContent
//         };
//     });
// })


const ForecastGlobe = () => {
    const [buoys, setBuoys] = useState([])
    const globeEl = useRef();
    

    const parseXmlBuoyData = (xmlData) => {
        const parser = new DOMParser(),
              dom = parser.parseFromString(xmlData, "application/xml");
    
        const parsedArr = []
        for (const buoy of dom.all) {
            if (buoy.attributes[2] && buoy.attributes[1]){
                const newBuoyObj = {}, coordinates = [buoy.attributes[2].value, buoy.attributes[1].value];
                newBuoyObj.name = (buoy.attributes[3].value === "0" ? buoy.attributes[4].value : buoy.attributes[3].value); newBuoyObj.coordinates = coordinates;
                parsedArr.push(newBuoyObj)
    
            }
        }
        setBuoys(parsedArr)
    }
    
    const extractXmlBuoys = () => {
        const xhr = new XMLHttpRequest(),
        method = "GET",
        url = "https://raw.githubusercontent.com/mpiannucci/surfpy/master/surfpy/tests/data/activestations.xml";
    
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            // In local files, status is 0 upon success in Mozilla Firefox
            if(xhr.readyState === XMLHttpRequest.DONE) {
                var status = xhr.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                parseXmlBuoyData(xhr.responseText);
                // console.log(xhr.responseText)
                } else {
                // Oh no! There has been an error with the request!
                }
            }
        };
        xhr.send();
    }

    useEffect(() => {
        extractXmlBuoys()
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