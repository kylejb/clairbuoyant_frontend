import React from 'react';
import Temp from './Temp.component';
import Wave from './Wave.component';
import Wind from './wind/Wind.component';
import CompassBase from './compass/CompassBase';

import {
    Grid,
    Message,
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
    padding: '2em 0em'
    },
    last: {
    marginBottom: '300px',
    },
};

const ForecastDashboard = props => {

    return (
        <>
         <Message as='h3' content={props.beach.name} style={style.h3} textAlign='center' />
            <Grid columns={3} doubling stackable>
            <Grid.Column>
                <Segment> <Temp temp={props.beach ? props.beach.buoys[0].meteorological_data[0].sea_temp : "Loading..."}/> </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment> <Wave wave={props.beach ? props.beach.buoys[0].meteorological_data[0].wave_height : "Loading..."} /> </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment> <Wind wind={props.beach ? props.beach.buoys[0].meteorological_data[0].wind_speed : "Loading..."}/> </Segment>
                <CompassBase />
            </Grid.Column>
            </Grid>
        </>
    );
}

export default ForecastDashboard;