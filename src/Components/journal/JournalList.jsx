import { Link } from 'react-router-dom';
import JournalEntry from './JournalEntry';


const JournalList = props => {
  const renderUserEntry = () => {
    return props.entries.map( entryObj => <JournalEntry history={props.history} location={props.location} match={props.match} key={entryObj.id} entry={entryObj} />)
  };


  return (
    <>
      <h1>Journal List</h1>
      {props.entries ? renderUserEntry() : null}
      <br/><br/><Link to='/journal/new'>NEW</Link>
    </>
  );
};

export default JournalList;
