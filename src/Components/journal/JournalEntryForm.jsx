import React, { useState } from 'react';

const JournalEntryForm = props => {
    const [entry, setEntry] = useState({ buoy_id: "", beach: {name: "", longitude: "", latitude: ""}, session_duration: "", entry: "", wave_quality: "", session_start_time: ""})
    // const [entryBeachDD, setEntryBeachDD] = useState(null);

    //! consolidate fetching logic to handle both PATCH (edit) and POST (new) 
    //! touch all values when editing so state is updated, setState if isEditing is true to the props, OR (**prob best solution**) pass only updated values to rails to update
    const handleSubmitHelper = (e) => {
        e.preventDefault();
        props.submitHandler(entry);
        props.history.push('/journal')
    }
    const handleNewJournalEntryChange = (e) => {
        const { name, value } = e.target;
        setEntry(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <>
            <h2>New Entry</h2>
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

                <input type="text" name="entry" placeholder="Notes" value={props.isEditing ? props.isEditing.entry : entry.entry} onChange={handleNewJournalEntryChange} />
                <input type="text" name="session_start_time" placeholder="Start Time" value={props.isEditing ? props.isEditing.session_start_time : entry.session_start_time} onChange={handleNewJournalEntryChange} />
                <input type="text" name="session_duration" placeholder="Session Duration" value={props.isEditing ? props.isEditing.session_duration : entry.session_duration} onChange={handleNewJournalEntryChange} />
                <input type="text" name="wave_quality" placeholder="Wave Quality" value={props.isEditing ? props.isEditing.wave_quality : entry.wave_quality} onChange={handleNewJournalEntryChange} />

                <input type="submit" />
            </form>
        </>
    );
}
export default JournalEntryForm;
