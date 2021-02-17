import { Feed } from 'semantic-ui-react';


const ForecastCardPart = ({ metData }) => {
  const date1 = new Date(metData.recorded_data_at),
        date2 = Date.now(),
        timeDiff = Math.abs(date2 - date1.getTime()),
        diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


  return (
    <>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Date content={`${diffDays} day(s) ago`}/>
            <Feed.Summary>
              <p>Wind Direction: {metData.wind_dir}</p>
              <p>Wind Speed: {metData.wind_speed}</p>
              <p>Wind Gust: {metData.wind_gust}</p>
              <p>Wave Height: {metData.wave_height}</p>
              <p>Wave Period: {metData.dom_wave_period}</p>
              <p>Avg Wave Period: {metData.avg_wave_period}</p>
              <p>Wave Direction: {metData.wave_dir}</p>
              <p>Sea Pressure: {metData.sea_pressure}</p>
              <p>Air Temp: {metData.air_temp}</p>
              <p>Sea Temp: {metData.sea_temp}</p>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </>
  );
};

export default ForecastCardPart;
