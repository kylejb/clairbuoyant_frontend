import React from 'react';
import WaveModel from '../Components/forecast/WaveModel.component';
import { Container, Header } from 'semantic-ui-react';

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

const WaveContainer = props => {

    return (
        <>
        <Header as='h3' content='Wave Container' style={style.h3} textAlign='center' />
        <Container>
            <WaveModel />
        </Container>
        </>
    );
}

export default WaveContainer;