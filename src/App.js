import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import StaticLayout from './Components/StaticLayout';
import MapContainer from './Containers/MapContainer';
// import styled from 'styled-components';
// import Footer from './Components/Footer'
// import ForecastGlobe from './Components/worldmap/Globe';
import LoginForm from './Components/forms/UserLoginForm'



export default class App extends React.Component {
  // const [selectedBeach, setSelectedBeach] = useState(null),
  //       [currentUserToken, setCurrentUserToken] = useState(null);
  
  // const selectedBeachHelper = (beachObj) => {
  //   setSelectedBeach(beachObj)
  // }

  render(){
      return (
        <>
      
            <MapContainer />
       
          {/* <Header selectedBeachHelper={selectedBeachHelper} userToken={currentUserToken} /> */}
          {/* <Route exact path="/home" component={ForecastGlobe} /> */}
          {/* <StaticLayout beach={selectedBeach} userToken={currentUserToken} /> */}
          {/* <Footer /> */}
          {/* <Route exact path="/login" render={() => <LoginForm setToken={setCurrentUserToken}/>} /> */}
        </>
      );
  }
}

