import React from 'react';
import { Card } from 'semantic-ui-react';
import JournalCardPart from './JournalCardPart';

const JournalCard = props => {
  const [patchEntryToOptimisticRerender, setPatchEntryToOptimisticRerender] = React.useState(null);

  const journalCardStateWrapper = (patchEntryObj) => {
    setPatchEntryToOptimisticRerender(patchEntryObj)
  }

  const renderJournalCardEntriesFeed = () => {
    console.log("render thing state ", patchEntryToOptimisticRerender)

    return props.selectedBuoy.entries.map(entry => {
      // PATCH (optimistic re-render)
      if (patchEntryToOptimisticRerender && patchEntryToOptimisticRerender.id === entry.id) {
        console.log("PATCH RENDER", patchEntryToOptimisticRerender)
        return <JournalCardPart key={patchEntryToOptimisticRerender.id} entry={patchEntryToOptimisticRerender} entrySubmitHandler={props.entrySubmitHandler} entryRerenderHandler={journalCardStateWrapper}/>
      } else {
        console.log("ELSE ", !!patchEntryToOptimisticRerender)
        return <JournalCardPart key={entry.id} entry={entry} entrySubmitHandler={props.entrySubmitHandler} entryRerenderHandler={journalCardStateWrapper}/>
       }
        // add Link to for routing
    });
  }
  
  return (
    <Card>
      <Card.Content>
        <Card.Header>Your Activity</Card.Header>
        {/* <p>Added {props.selectedBuoy.entries.length} entries</p>*/}
      </Card.Content>
      <Card.Content>
       {patchEntryToOptimisticRerender ? renderJournalCardEntriesFeed() : renderJournalCardEntriesFeed()}
      </Card.Content>

    </Card>
  );
}

export default JournalCard;