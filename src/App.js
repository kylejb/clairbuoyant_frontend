import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import LoginForm from './Components/forms/UserLoginForm'
import StaticLayout from './Components/StaticLayout';
// import Footer from './Components/Footer'
// import styled from 'styled-components';



const App = () => {
  const [selectedBeach, setSelectedBeach] = useState(null),
        // eslint-disable-next-line
        [currentUserToken, setCurrentUserToken] = useState(null);
  
  const selectedBeachHelper = (beachObj) => {
    setSelectedBeach(beachObj)
  }


  return (
    <> 
      <Route path="/" render={ ( routerProps ) => <Header {...routerProps} selectedBeachHelper={selectedBeachHelper} />} />
      <StaticLayout beach={selectedBeach} />
      <Route exact path="/login" render={() => <LoginForm setToken={setCurrentUserToken}/>} />
      {/* <Footer /> */}
    </>
  );
}

export default App;