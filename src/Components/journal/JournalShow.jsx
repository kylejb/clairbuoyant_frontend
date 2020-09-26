import React, { useState } from 'react';
import EditJournalEntry from './EditJournalEntry';

const JournalShow = props => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const entry =  props.entries.find(entryObj=> entryObj.id === parseInt(props.match.params.entryId));
    
    const handleDelete = () => {
        props.deleteHandler(entry);
        props.history.push('/journal');
    }
    
    const renderPage = () => {
        if (entry) {
            return (
                <>
                    <h1>{entry.session_start_time}</h1>
                    <p>{entry.entry}</p>
                    <button onClick={ () => setIsFormVisible(!isFormVisible)}>EDIT</button>
                    {isFormVisible ? <EditJournalEntry entry={entry} updateHandler={props.updateHandler} /> : null}
                    <button onClick={handleDelete}>DELETE</button>
                </> 
            );
        } else {
            return `the params ItemId is ${props.match.params.entryId}`}
    }
    console.log("JournalShow ", props)
    
    return renderPage();
}

export default JournalShow