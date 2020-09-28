import React, { useState, useEffect }from 'react';
import { Route, Link } from 'react-router-dom';
import NewJournalEntry from '../Components/journal/NewJournalEntry';
import JournalShow from '../Components/journal/JournalShow';

import JournalList from '../Components/journal/JournalList';

const JournalContainer = props => {
    const [userEntries, setUserEntries] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem('loggedIn'));


    const createNewEntry = (entry) => {
        console.log("createNew ", entry)
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
        console.log("updateEntry ", entry)
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

    const handleDelete = (entry) => {
        const entryId = entry.id
        fetch(`http://localhost:3000/api/v1/entries/${entryId}`, {method: 'DELETE', headers: {'Authorization': `Bearer ${currentUser}`}})
        .then(()=>{
            // Refactor this expensive re-rendering; temp for MVP 
            fetchUserEntries()
        })
    }

    useEffect(() => {
        fetchUserEntries();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <>
            <Link to='/journal/new'>NEW</Link>
            <Route path={`/journal/:entryId`} render={routerProps => <JournalShow {...routerProps} entries={userEntries} updateHandler={updateEntry} deleteHandler={handleDelete}/>} />
            <Route exact path='/journal/new' render={ routerProps => <NewJournalEntry {...routerProps} submitHandler={createNewEntry} />} />
            <Route exact path='/journal' render={(routerProps) => <JournalList {...routerProps} entries={userEntries} />} />
        </>
    );
}

export default JournalContainer;

// select dropdown defaulValue + disabled for dropdown form