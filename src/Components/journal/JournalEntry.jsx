import { Link } from 'react-router-dom';


const JournalEntry = ({ entry }) => {
  return (
    <>
      <h1>{entry.session_start_time}</h1>
      <p>{entry.entry}</p>
      <Link to={`journal/${entry.id}`}>Show</Link>
    </>
  );
};

export default JournalEntry;
