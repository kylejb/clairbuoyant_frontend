import { useState } from 'react';


const NewJournalEntry = props => {
  const [entry, setEntry] = useState({
    beach_id: "",
    session_duration: "",
    entry: "",
    wave_quality: "",
    session_start_time: ""
  });

  const handleSubmitHelper = (e) => {
    e.preventDefault();
    props.submitHandler(entry);
    props.history.push('/journal')
  };
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
          <input type="text" name="beach_id" placeholder="Beach" value={entry.beach_id} onChange={handleNewJournalEntryChange} />
          <input type="text" name="entry" placeholder="Notes" value={entry.entry} onChange={handleNewJournalEntryChange} />
          <input type="text" name="session_start_time" placeholder="Start Time" value={entry.session_start_time} onChange={handleNewJournalEntryChange} />
          <input type="text" name="session_duration" placeholder="Session Duration" value={entry.session_duration} onChange={handleNewJournalEntryChange} />
          <input type="text" name="wave_quality" placeholder="Wave Quality" value={entry.wave_quality} onChange={handleNewJournalEntryChange} />

          <input type="submit" />
      </form>
    </>
  );
};

export default NewJournalEntry;
