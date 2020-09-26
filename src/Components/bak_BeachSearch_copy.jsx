import React, { useState } from 'react';

const BeachSearch = props => {
    const [beachSearchValue, setBeachSearchValue] = useState("");

    const searchSubmitHelper = (e) => {
        e.preventDefault();
        props.beachSearch(beachSearchValue)
    }

    
    return (
        <form onSubmit={searchSubmitHelper}>
            <input value={beachSearchValue} onChange={(e) => setBeachSearchValue(e.target.value)}></input>
            <input type="submit" value="Search"></input>
        </form>
    )
}

export default BeachSearch;