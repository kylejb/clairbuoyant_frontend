import React from 'react';
import MapContainer from './MapContainer';
import JournalContainer from './JournalContainer';

const BuoyContainer = props => {

    return (
        <>
            <h1>Buoy Container</h1>
            <MapContainer />
            <JournalContainer />
        </>
    );
}

export default BuoyContainer;