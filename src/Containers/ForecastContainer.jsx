import React, { useEffect } from 'react';

const ForecastContainer = props => {

    const getForecast = async () => {
        let response = await fetch("http://localhost:3000/api/v1/buoys");
        let data = await response.json();
        console.log("getForecast ", data)
    }

    useEffect(() => {
        getForecast();
    })

    return (
        <h1>ForecastContainer</h1>
    );
}

export default ForecastContainer;