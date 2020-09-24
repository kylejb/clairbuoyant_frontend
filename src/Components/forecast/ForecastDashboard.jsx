import React from 'react';
import Temp from './Temp.component';
import Tide from './Tide.component';
import Wind from './wind/Wind.component';
import CompassBase from './compass/CompassBase';

import {
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react';
  
const style = {
    h1: {
    marginTop: '3em',
    },
    h2: {
    margin: '4em 0em 2em',
    },
    h3: {
    marginTop: '2em',
    padding: '2em 0em',
    },
    last: {
    marginBottom: '300px',
    },
};

const ForecastDashboard = props => {

    console.log(props)
    return (
        <>
         <Header as='h3' content='Forecast' style={style.h3} textAlign='center' />
            <Grid columns={3} doubling stackable>
            <Grid.Column>
                <Segment> <Temp /> </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment> <Tide /> </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment> <Wind /> </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>Temp Data</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>Tide Data</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>{props.buoys.meteorologicalData ? props.meteorologicalData[0].wind_speed : "Wind Data"}</Segment>
                <CompassBase />
            </Grid.Column>
            </Grid>
        </>
    );
}

export default ForecastDashboard;