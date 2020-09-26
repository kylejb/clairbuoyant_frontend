import React, { useState, useEffect } from 'react';

const EditJournalEntry = props => {
    const [entry, setEntry] = useState({ beach_id: "", session_duration: "", entry: "", wave_quality: "", session_start_time: ""})

    const handleSubmitHelper = (e) => {
        e.preventDefault();
        props.updateHandler(entry);
    }
    const handleNewJournalEntryChange = (e) => {
        const { name, value } = e.target;
        setEntry(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        setEntry(props.entry)
    }, [props.entry])

    return (
        <>
            <form onSubmit={handleSubmitHelper}>
                <input type="number" name="beach_id" placeholder="Beach" value={entry.beach_id || ""} onChange={handleNewJournalEntryChange} />
                <input type="text" name="entry" placeholder="Notes" value={entry.entry || ""} onChange={handleNewJournalEntryChange} />
                <input type="text" name="session_start_time" placeholder="Start Time" value={entry.session_start_time || ""} onChange={handleNewJournalEntryChange} />
                <input type="number" name="session_duration" placeholder="Session Duration" value={entry.session_duration || ""} onChange={handleNewJournalEntryChange} />
                <input type="text" name="wave_quality" placeholder="Wave Quality" value={entry.wave_quality || ""} onChange={handleNewJournalEntryChange} />

                <input type="submit" />
            </form>
        </>
    );
}
export default EditJournalEntry;