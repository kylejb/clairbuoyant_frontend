import React from 'react';
import { Dropdown } from 'semantic-ui-react';

//* add country, state to db
// const beachOptions = [
//   // { key: 'globe', value: 'globe', flag: 'world', text: 'Earth' },
//   { key: 'rbny', value: 'rockaway beach', flag: 'us', text: 'Rockaway Beach, NY' },
//   { key: 'lbny', value: 'long beach', flag: 'us', text: 'Long Beach, NY' },
//   { key: 'tobc', value: 'tofino', flag: 'ca', text: 'Tofino, BC' },
// ]

const renderBeachOption = (beachObj) => {
  return { key: beachObj.id, value: beachObj.name, flag: 'us', text: beachObj.name }
}
const HeaderDropDownSearch = ( { beaches } ) => {
  
  const beachOptions = () => {
    if (beaches){
      return beaches.map(namedBeach => renderBeachOption(namedBeach))
    }
  }
  
  console.log("HDDS ", beaches)
  return (
    <Dropdown
      placeholder='Select Beach'
      search
      selection
      options={beaches ? beachOptions() : null}
    />
  )
}

export default HeaderDropDownSearch;