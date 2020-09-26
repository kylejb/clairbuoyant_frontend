import React from 'react';
import { withRouter } from 'react-router-dom';
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
const HeaderDropDownSearch = ( { beaches, selectedBeachHelper, history } ) => {
  
  const beachOptions = () => {
    if (beaches){
      return beaches.map(namedBeach => renderBeachOption(namedBeach))
    }
  }
  
  const onCloseHelper = (e) => {
    if (e) {
      const selectedBeach = beaches.filter(beachObj => beachObj.name === e.target.textContent)
      const urlPrefix = selectedBeach[0].name.replace(/\s+/g, '-').toLowerCase();
      selectedBeachHelper(selectedBeach[0])
      history.push(`/forecast/${urlPrefix}`)
    } else {
      return null
    }
  }
  
  return (
    <Dropdown
      placeholder='Select Beach'
      search
      selection
      options={beaches ? beachOptions() : null}
      onClose={onCloseHelper}
    />
  )
}

export default withRouter(HeaderDropDownSearch);