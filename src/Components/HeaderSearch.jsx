import React from 'react';
import { withRouter } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';


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