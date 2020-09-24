import React, { useState } from 'react';
import Header from './Components/Header';
import StaticLayout from './Components/StaticLayout';
// import Footer from './Components/Footer'
import ForecastGlobe from './Components/worldmap/Globe';

const App = () => {
  const [selectedBeach, setSelectedBeach] = useState("")
  
  const selectedBeachHelper = (beachObj) => {
    setSelectedBeach(beachObj)
  }

  return (
    <>
      <Header selectedBeachHelper={selectedBeachHelper} />
      <ForecastGlobe />
      {/* <StaticLayout beach={selectedBeach} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
