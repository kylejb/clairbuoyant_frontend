const JournalEntryForm = (props) => {
  const handleEntryChange = (e) => {
    const { name, value } = e.target;
    props.modalEntryHandler(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <>
      <h2>Entry Form</h2>
        <div className='form-entries'>
          <input type="textbox" name="entry" placeholder="Notes" value={props.modalEntry.entry} onChange={handleEntryChange} />
          <input type="text" name="session_start_time" placeholder="Start Time" value={props.modalEntry.session_start_time} onChange={handleEntryChange} />
          <input type="number" name="session_duration" placeholder="Session Duration" value={props.modalEntry.session_duration} onChange={handleEntryChange} />
          <input type="text" name="wave_quality" placeholder="Wave Quality (1-10)" value={props.modalEntry.wave_quality} onChange={handleEntryChange} />
        </div>
    </>
  );
}
export default JournalEntryForm;
