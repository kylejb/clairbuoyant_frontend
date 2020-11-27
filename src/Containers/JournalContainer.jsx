// import React, { useState, useEffect }from 'react';
// import { Route } from 'react-router-dom';
// import JournalEntryForm from '../Components/journal/JournalEntryForm';
// import JournalShow from '../Components/journal/JournalShow';

// import JournalList from '../Components/journal/JournalList';

// const JournalContainer = props => {

//     const fetchUserEntries = () => {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 'Authorization': `Bearer ${currentUser}`
//             },
//         }
//         // Refactor this expensive re-rendering; temp for MVP 
//         fetch("http://localhost:3000/api/v1/entries", options).then(res=>res.json()).then(data => setUserEntries(data))
//     }

//     const handleDelete = (entry) => {
//         const entryId = entry.id
//         fetch(`http://localhost:3000/api/v1/entries/${entryId}`, {method: 'DELETE', headers: {'Authorization': `Bearer ${currentUser}`}})
//         .then(()=>{
//             // Refactor this expensive re-rendering; temp for MVP 
//             fetchUserEntries()
//         })
//     }

//     useEffect(() => {
//         fetchUserEntries();

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])

    
//     return (
//         <>
//             <Route path={`/journal/:entryId`} render={routerProps => <JournalShow {...routerProps} entries={userEntries} submitHandler={userActionOnEntryFetchWrapper} deleteHandler={handleDelete}/>} />
//             <Route exact path='/journal/new' render={ routerProps => <JournalEntryForm {...routerProps} submitHandler={userActionOnEntryFetchWrapper} />} />
//             <Route exact path='/journal' render={(routerProps) => <JournalList {...routerProps} entries={userEntries} />} />           
//         </>
//     );
// }

// export default JournalContainer;

