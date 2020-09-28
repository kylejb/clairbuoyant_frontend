import React from 'react';
import { Card, Feed } from 'semantic-ui-react';
import ForecastCardPart from './ForecastCard.component';

const ForecastCard = props => {

  const renderForecastCardFeed = () => {
    console.log("renderFeedHere")
  }
  
  console.log("Forecast Card MAIN ", props)
  return (
    <Card>
      <Card.Content>
        <Card.Header>Recent Activity</Card.Header>
      </Card.Content>
      <Card.Content>
        {/* {renderForecastCardFeed()} */}
      </Card.Content>
    </Card>
  );
}

export default ForecastCard;