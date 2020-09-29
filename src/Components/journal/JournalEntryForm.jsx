import React, { useState, useEffect } from 'react';

const JournalEntryForm = props => {
    //? beach = {name: null, longitude: null, latitude: null}
    const [entry, setEntry] = useState({ buoy_id: "", beach: "", session_duration: "", entry: "", wave_quality: "", session_start_time: ""})
    // const [entryBeachDD, setEntryBeachDD] = useState(null);


    const handleSubmitHelper = (e) => {
        e.preventDefault();
        if (props.isEditing) {
            props.submitHandler(entry);
        } else {
            props.submitHandler(entry, false);
        }
        props.history.push('/journal');
    }

    const handleNewJournalEntryChange = (e) => {
        console.log("handle update ", e)
        const { name, value } = e.target;
        setEntry(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (props.isEditing) {
            setEntry(props.isEditing)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <h2>Entry Form</h2>
            <form onSubmit={handleSubmitHelper}>

                <div className="form-dropdown">
                    <select onChange={handleNewJournalEntryChange} name="buoy_id" defaultValue="no-val">
                        <option value="no-val" disabled>Select Buoy</option>
                        <option value="buoy_id_1">Buoy 1 (iterate me to generate list)</option>
                        <option value="buoy_id_2">Buoy 2 (iterate me to generate list)</option>
                        <option value="buoy_id_3">Buoy 3 (iterate me to generate list)</option>
                        <option value="buoy_id_4">Buoy 4 (iterate me to generate list)</option>
                    </select>
                </div>
                {/* <input type="text" name="beach_id" placeholder="Beach" value={entry.beach} onChange={handleNewJournalEntryChange} /> */}

                <input type="textbox" name="entry" placeholder="Notes" value={entry.entry} onChange={handleNewJournalEntryChange} />
                <input type="text" name="session_start_time" placeholder="Start Time" value={entry.session_start_time} onChange={handleNewJournalEntryChange} />
                <input type="number" name="session_duration" placeholder="Session Duration" value={entry.session_duration} onChange={handleNewJournalEntryChange} />
                <input type="text" name="wave_quality" placeholder="Wave Quality (1-10)" value={entry.wave_quality} onChange={handleNewJournalEntryChange} />

                <input type="submit" />
            </form>
        </>
    );
}
export default JournalEntryForm;
