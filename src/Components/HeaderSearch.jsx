import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// add country, state to db
const beachOptions = [
  // { key: 'globe', value: 'globe', flag: 'world', text: 'Earth' },
  { key: 'rbny', value: 'rockaway beach', flag: 'us', text: 'Rockaway Beach, NY' },
  { key: 'lbny', value: 'long beach', flag: 'us', text: 'Long Beach, NY' },
  { key: 'tobc', value: 'tofino', flag: 'ca', text: 'Tofino, BC' },
]

const HeaderDropDownSearch = () => (
  <Dropdown
    placeholder='Select Beach'
    search
    selection
    options={beachOptions}
  />
)

export default HeaderDropDownSearch;