import { useState } from 'react';
import JournalEntryForm from './JournalEntryForm';


const JournalShow = props => {
  const [isEditing, setIsEditing] = useState(false);

  const entry =  props.entries.find(entryObj=> entryObj.id === parseInt(props.match.params.entryId));

  const handleDelete = () => {
    props.deleteHandler(entry);
    props.history.push('/journal');
  };

  const renderPage = () => {
    if (entry) {
      return (
        <>
          <h1>{entry.session_start_time}</h1>
          <p>{entry.entry}</p>
          <button onClick={ () => setIsEditing(!isEditing)}>EDIT</button>
          {isEditing ? <JournalEntryForm isEditing={entry} submitHandler={props.submitHandler} /> : null}
          <button onClick={handleDelete}>DELETE</button>
        </>
      );
    } else {
      return null;
    };
  };


  return renderPage();
}

export default JournalShow;
