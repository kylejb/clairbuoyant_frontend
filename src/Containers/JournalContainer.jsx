import React, { useState, useEffect }from 'react';
import { Route } from 'react-router-dom';
import JournalEntryForm from '../Components/journal/JournalEntryForm';
import JournalShow from '../Components/journal/JournalShow';

import JournalList from '../Components/journal/JournalList';

const JournalContainer = props => {
    const [userEntries, setUserEntries] = useState([]);
    
    const currentUser = JSON.parse(localStorage.getItem('loggedIn'));


    // cleanEmpty() sourced from 'https://stackoverflow.com/a/57625661'
    const cleanEmpty = obj => Object.entries(obj)
        .map(([k,v])=>[k,v && typeof v === "object" ? cleanEmpty(v) : v])
        .reduce((a,[k,v]) => (v == null ? a : (a[k]=v, a)), {});


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

    //? consider beach creation within entry; no separate route
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
            <Route path={`/journal/:entryId`} render={routerProps => <JournalShow {...routerProps} entries={userEntries} submitHandler={userActionOnEntryFetchWrapper} deleteHandler={handleDelete}/>} />
            <Route exact path='/journal/new' render={ routerProps => <JournalEntryForm {...routerProps} submitHandler={userActionOnEntryFetchWrapper} />} />
            <Route exact path='/journal' render={(routerProps) => <JournalList {...routerProps} entries={userEntries} />} />           
        </>
    );
}

export default JournalContainer;

