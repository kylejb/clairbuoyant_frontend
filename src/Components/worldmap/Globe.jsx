import React, {useState, useEffect, useRef} from 'react';
import Globe from 'react-globe.gl';


const ForecastGlobe = ({buoys}) => {
    const globeEl = useRef();

    
    return (
        <>
                <Globe 
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    labelsData={buoys}
                    labelLat={d => d.latitude}
                    labelLng={d => d.longitude}
                    labelText={d =>"Buoy"}
                    labelSize={0 * 4e-4}
                    labelDotRadius={300 * 4e-4}
                    labelColor={() => 'rgba(255, 165, 0, 0.75)'}
                    labelResolution={2}
            />
        </>
    );
}

export default ForecastGlobe;