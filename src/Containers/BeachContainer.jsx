import React, { Component } from 'react';
import WaveContainer from './WaveContainer';
import ForecastContainer from './ForecastContainer';

class BeachContainer extends Component {
    state = {
        meteorologicalData: []
    };

    getForecast = async () => {
        let response = await fetch("http://localhost:3000/api/v1/buoys/1");
        let data = await response.json();
        console.log(data)
        this.setState({...this.state, meteorologicalData: data.meteorological_data}, () => console.log("Beach Container State ", this.state))
    }

    componentDidMount() {
        this.getForecast();
    };


    render() {
        console.log("Beach Container", this.props)
        return (
            <>
                <h1>Beach Container</h1>
                <ForecastContainer meteorologicalData={this.state.meteorologicalData} />
                <WaveContainer meteorologicalData={this.state.meteorologicalData} />
            </>
        );
    }
}

export default BeachContainer;