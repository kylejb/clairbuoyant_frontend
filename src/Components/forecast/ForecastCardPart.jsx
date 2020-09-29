import React from 'react'
import { Feed } from 'semantic-ui-react'

const ForecastCardPart = ({ metData }) => {
    const date1 = new Date(metData.recorded_data_at),
          date2 = Date.now(),
          timeDiff = Math.abs(date2 - date1.getTime()),
          diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    

    return (
        <>
            <Feed>
                <Feed.Event>
                <Feed.Label image='/images/avatar/small/jenny.jpg' />
                <Feed.Content>
                    <Feed.Date content={`${diffDays} day(s) ago`}/>
                    <Feed.Summary>
                         <p>{metData.wind_dir}</p>       
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>
            </Feed>
        </>

    );
}

export default ForecastCardPart;