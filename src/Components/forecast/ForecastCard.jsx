import { Card } from 'semantic-ui-react';
import WindDirection from '../forecast/wind/WindDirection';
import ForecastCardPart from './ForecastCardPart';

const ForecastCard = props => {


  return (
    <Card>
      <Card.Content>
        <Card.Header>Latest Forecast {WindDirection()} </Card.Header>
      </Card.Content>
      <Card.Content>
        <ForecastCardPart metData={props.selectedBuoyMetData[0]} />
      </Card.Content>
    </Card>
  );
};

export default ForecastCard;
