import React from 'react';
import { Card } from 'semantic-ui-react';
import JournalCardPart from './JournalCardPart';

const JournalCard = props => {

  const renderJournalCardEntriesFeed = () => {
    return props.selectedBuoy.entries.map(entry => (
      // add Link to for routing
      <JournalCardPart key={entry.id} entry={entry} />
    ));
  }
  

  return (
    <Card>
      <Card.Content>
        <Card.Header>Your Activity</Card.Header>
        <p>Added {props.selectedBuoy.entries.length} entries</p>       
      </Card.Content>
      <Card.Content>
        {renderJournalCardEntriesFeed()}
      </Card.Content>

    </Card>
  );
}

export default JournalCard;