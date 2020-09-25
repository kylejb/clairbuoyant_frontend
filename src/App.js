import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import StaticLayout from './Components/StaticLayout';
// import Footer from './Components/Footer'
import ForecastGlobe from './Components/worldmap/Globe';
import LoginForm from './Components/forms/UserLoginForm'

const App = () => {
  const [selectedBeach, setSelectedBeach] = useState(null),
        [currentUserToken, setCurrentUserToken] = useState(null);
  
  const selectedBeachHelper = (beachObj) => {
    setSelectedBeach(beachObj)
  }
  console.log("App render ", currentUserToken)
  return (
    <>
      <Header selectedBeachHelper={selectedBeachHelper} userToken={currentUserToken} />
      {/* <ForecastGlobe /> */}
      <StaticLayout beach={selectedBeach} userToken={currentUserToken} />
      {/* <Footer /> */}
      <Route exact path="/login" render={() => <LoginForm setToken={setCurrentUserToken}/>} />
    </>
  );
}

export default App;
