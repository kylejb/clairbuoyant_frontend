import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import LoginForm from './Components/forms/UserLoginForm'
import MapContainer from './Containers/MapContainer';
import StaticLayout from './Components/StaticLayout';
// import styled from 'styled-components';
// import Footer from './Components/Footer'
// import ForecastGlobe from './Components/worldmap/Globe';



const App = () => {
  const [selectedBeach, setSelectedBeach] = useState(null),
        [currentUserToken, setCurrentUserToken] = useState(null);
  
  const selectedBeachHelper = (beachObj) => {
    setSelectedBeach(beachObj)
  }


  return (
    <> 
      <Route path="/" render={ ( routerProps ) => <Header {...routerProps} selectedBeachHelper={selectedBeachHelper} userToken={currentUserToken} />} />
      <MapContainer /> 
      {/* <Route exact path="/home" component={ForecastGlobe} /> */}
      {/* <StaticLayout beach={selectedBeach} userToken={currentUserToken} /> */}
      {/* <Footer /> */}
      {/* <Route exact path="/login" render={() => <LoginForm setToken={setCurrentUserToken}/>} /> */}
    </>
  );
}

export default App;