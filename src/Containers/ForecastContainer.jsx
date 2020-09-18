import React from 'react';
import Temp from '../Components/forecast/Temp.component';
import Tide from '../Components/forecast/Tide.component';
import Wind from '../Components/forecast/Wind.component';
import Circle from '../Components/Circle';

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

const ForecastContainer = props => {

    

    return (
        <>
         <Header as='h3' content='Forecast Container' style={style.h3} textAlign='center' />
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
                <Segment>{props.meteorologicalData.length ? props.meteorologicalData[0].wind_speed : "Wind Data"}</Segment>
                <Circle />
            </Grid.Column>
            </Grid>
        </>
    );
}

export default ForecastContainer;