import React from 'react';
import { Card } from 'semantic-ui-react';
import ForecastCardPart from './ForecastCardPart';

const ForecastCard = props => {

  // const renderForecastCardEntriesFeed = () => {
  //   return props.selectedBuoyMetData.map(metData => (
  //     // add Link to for routing
  //     <ForecastCardPart key={metData.id} metData={metData} />
  //   ));
  // }
  

  return (
    <Card>
      <Card.Content>
        <Card.Header>Recent Activity</Card.Header>
      </Card.Content>
      <Card.Content>
        <ForecastCardPart metData={props.selectedBuoyMetData[0]} />
      </Card.Content>

    </Card>
  );
}

export default ForecastCard;