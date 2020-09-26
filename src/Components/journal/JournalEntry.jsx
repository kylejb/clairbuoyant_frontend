import React from 'react';
import { Link } from 'react-router-dom';

const JournalEntry = ({entry, match}) => {
    
    return (
        <>
            <h1>{entry.session_start_time}</h1>
            <p>{entry.entry}</p>
            <Link to={`${match.url}/${entry.id}`}>Show</Link>
        </>
    );
}

export default JournalEntry;