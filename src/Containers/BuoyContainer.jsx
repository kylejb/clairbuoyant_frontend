import React, { useState } from 'react';
import MapContainer from './MapContainer';
import JournalContainer from './JournalContainer';

const BuoyContainer = props => {
    const [userEntries, setUserEntries] = useState([]);
    
    const currentUser = JSON.parse(localStorage.getItem('loggedIn'));

    const fetchUserEntries = () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            },
        }
        // Refactor this expensive re-rendering; temp for MVP 
        fetch("http://localhost:3000/api/v1/entries", options).then(res=>res.json()).then(data => setUserEntries(data))
    }

    // cleanEmpty() sourced from 'https://stackoverflow.com/a/57625661'
    const cleanEmpty = obj => Object.entries(obj)
        .map(([k,v])=>[k,v && typeof v === "object" ? cleanEmpty(v) : v])
        .reduce((a,[k,v]) => (v == null ? a : (a[k]=v, a)), {});


    const createNewEntry = (entry) => {
        // console.log("createNew ", entry)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            },
            body: JSON.stringify({ entry })
        }
        // Refactor this expensive re-rendering; temp for MVP 
        fetch("http://localhost:3000/api/v1/entries", options).then(res=>res.json()).then(()=>fetchUserEntries())
    
    }

    const updateEntry = (entry) => {
        // console.log("updateEntry ", entry)
        const entryId = entry.id
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            },
            body: JSON.stringify({ entry })
        }
        // Refactor this expensive re-rendering; temp for MVP 
        fetch(`http://localhost:3000/api/v1/entries/${entryId}`, options).then(res=>res.json()).then(() => fetchUserEntries())
    }

    const userActionOnEntryFetchWrapper = (entry, isEditing = true) => {
        switch (isEditing) {
            case true:
                const cleanedEntry = cleanEmpty(entry)
                updateEntry(cleanedEntry)
                break;
            case false:
                createNewEntry(entry)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <h1>Buoy Container</h1>
            <MapContainer entrySubmitHandler={userActionOnEntryFetchWrapper} />
            {/* <JournalContainer entries={userEntries}/> */}
        </>
    );
}

export default BuoyContainer;