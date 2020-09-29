import React from 'react';
import { Route } from 'react-router-dom';
import MapContainer from '../Containers/MapContainer';
import BeachContainer from '../Containers/BeachContainer';
import JournalContainer from '../Containers/JournalContainer';


const StaticLayout = props => {
  // const currentUser = JSON.parse(localStorage.getItem('loggedIn'));


  return (
    <>
      <Route path='/forecast' render={() => <BeachContainer beach={props.beach} />} />
      <Route path='/journal' render={() => <JournalContainer />} />
      <Route exact path="/map" component={MapContainer} />
    </>
  );
}

export default StaticLayout;