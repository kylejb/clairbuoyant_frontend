import React, { Component } from 'react';
import ForecastDashboard from '../Components/forecast/ForecastDashboard';

class BeachContainer extends Component {
    // state = {
    //     buoys: []
    // };

    // getForecast = async () => {
    //     const beachId = this.props.beach.id
    //     let response = await fetch(`http://localhost:3000/api/v1/beaches/${beachId}`);
    //     let data = await response.json();
    //     this.setState({...this.state, buoys: data.buoys})
    // }

    // componentDidMount() {
    //     this.getForecast();
    // };

    
    render() {
        return (
            <>
                <ForecastDashboard beach={this.props.beach} />
            </>
        );
    }
}

export default BeachContainer;