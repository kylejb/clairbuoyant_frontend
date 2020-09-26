import React from 'react';
import { Route } from 'react-router-dom';
import BeachContainer from '../Containers/BeachContainer';
import JournalContainer from '../Containers/JournalContainer';
import WorldMap from './worldmap/WorldMap';

const StaticLayout = props => {
  // const currentUser = JSON.parse(localStorage.getItem('loggedIn'));

  return (
    <>
      <Route path='/forecast' render={() => <BeachContainer beach={props.beach} />} />
      <Route path='/journal' render={() => <JournalContainer />} />
      {/* <WorldMap /> */}
    </>
  );
}

export default StaticLayout;