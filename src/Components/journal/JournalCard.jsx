import React from 'react';
import { Card } from 'semantic-ui-react';
import JournalCardPart from './JournalCardPart';

const JournalCard = props => {
  const [patchEntryToOptimisticRerender, setPatchEntryToOptimisticRerender] = React.useState(null),
    [postEntryToOptimisticRerender, setPostEntryToOptimisticRerender] = React.useState(null)

  const journalCardStateWrapper = (patchEntryObj) => {
    setPatchEntryToOptimisticRerender(patchEntryObj)
  }

  const renderJournalCardEntriesFeed = () => {
    return props.selectedBuoy.entries.map(entry => {
      if (patchEntryToOptimisticRerender && patchEntryToOptimisticRerender.id === entry.id) {
        return <JournalCardPart key={patchEntryToOptimisticRerender.id} entry={patchEntryToOptimisticRerender} entrySubmitHandler={props.entrySubmitHandler} entryRerenderHandler={journalCardStateWrapper}/>
      } else {
        return <JournalCardPart key={entry.id} entry={entry} entrySubmitHandler={props.entrySubmitHandler} entryRerenderHandler={journalCardStateWrapper}/>
      }
    });
  }

  React.useEffect(() => {
    setPostEntryToOptimisticRerender(props.newEntry)
  }, [props.newEntry])
  
  return (
    <Card>
      <Card.Content>
        <Card.Header>Your Activity</Card.Header>
        {/* <p>Added {props.selectedBuoy.entries.length} entries</p>*/}
      </Card.Content>
      <Card.Content>
       {renderJournalCardEntriesFeed()}
        {postEntryToOptimisticRerender && (
            <JournalCardPart entry={postEntryToOptimisticRerender} entrySubmitHandler={props.entrySubmitHandler} entryRerenderHandler={journalCardStateWrapper}/>
        )}
      </Card.Content>

    </Card>
  );
}

export default JournalCard;