import React, { useState, useEffect } from 'react';

const JournalEntryForm = (props) => {


    const handleEntryChange = (e) => {
        console.log("handle update ", e)
        const { name, value } = e.target;
        props.modalEntryHandler(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // useEffect(() => {
    //     if (props.isEditing) {
    //         setEntry(props.isEditing)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    console.log("Entry Form renders ", props)
    return (
        <>
            <h2>Entry Form</h2>
                <div className='form-entries'>
                    <div className="form-entries-dropdown">
                        <select onChange={handleEntryChange} name="buoy_id" defaultValue="no-val">
                            <option value="no-val" disabled>Select Buoy</option>
                            <option value="buoy_id_1">Buoy 1 (iterate me to generate list)</option>
                            <option value="buoy_id_2">Buoy 2 (iterate me to generate list)</option>
                            <option value="buoy_id_3">Buoy 3 (iterate me to generate list)</option>
                            <option value="buoy_id_4">Buoy 4 (iterate me to generate list)</option>
                        </select>
                    </div>
                    {/* <input type="text" name="beach_id" placeholder="Beach" value={entry.beach} onChange={props.handleEntryChange} /> */}

                    <input type="textbox" name="entry" placeholder="Notes" value={props.modalEntry.entry} onChange={handleEntryChange} />
                    <input type="text" name="session_start_time" placeholder="Start Time" value={props.modalEntry.session_start_time} onChange={handleEntryChange} />
                    <input type="number" name="session_duration" placeholder="Session Duration" value={props.modalEntry.session_duration} onChange={handleEntryChange} />
                    <input type="text" name="wave_quality" placeholder="Wave Quality (1-10)" value={props.modalEntry.wave_quality} onChange={handleEntryChange} />         
                </div>
        </>
    );
}
export default JournalEntryForm;
