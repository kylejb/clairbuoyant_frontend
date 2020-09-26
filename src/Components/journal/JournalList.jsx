import React from 'react';
import { Link } from 'react-router-dom';
import JournalEntry from './JournalEntry';

const JournalList = props => {
    const renderUserEntry = () => {
        return props.entries.map( entryObj => <JournalEntry history={props.history} location={props.location} match={props.match} key={entryObj.id} entry={entryObj} />)
    }

    console.log("JournalList ", props)
    return (
        <>
            <h1>Journal List</h1>
            {props.entries ? renderUserEntry() : null}
        </>
    );
}

export default JournalList;