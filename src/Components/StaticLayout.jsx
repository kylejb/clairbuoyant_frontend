import React from 'react';
// import { Link } from 'react-router-dom';
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
}
//   <Header as='h3' content='Responsive Steps' style={style.h3} textAlign='center' />

//   <Container style={style.last}>
//     <Step.Group fluid>
//       <Step icon='plane' title='Shipping' description='Choose your shipping options' />
//       <Step active icon='dollar' title='Billing' description='Enter billing information' />
//       <Step
//         disabled
//         icon='info circle'
//         title='Confirm Order'
//         description='Verify order details'
//       />
//     </Step.Group>
//   </Container>

const StaticLayout = () => (
  <div>
    <Header as='h3' content='Doubling Stackable Grid' style={style.h3} textAlign='center' />
    <Grid columns={3} doubling stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>
  </div>
)

export default StaticLayout