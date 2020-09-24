import React, { Component } from 'react';
import WaveContainer from './WaveContainer';
import ForecastDashboard from '../Components/forecast/ForecastDashboard';

class BeachContainer extends Component {
    state = {
        buoys: []
    };

    getForecast = async () => {
        const beachId = this.props.beach.id
        let response = await fetch(`http://localhost:3000/api/v1/beaches/${beachId}`);
        let data = await response.json();
        this.setState({...this.state, buoys: data.buoys})
    }

    componentDidMount() {
        this.getForecast();
    };

    
    render() {
        return (
            <>
                <h2>{this.props.beach.name}</h2>
                {this.state.buoys ? <ForecastDashboard buoys={this.state.buoys} /> : null}
                {/* <WaveContainer /> */}
            </>
        );
    }
}

export default BeachContainer;