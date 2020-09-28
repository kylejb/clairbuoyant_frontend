import React from 'react'
import { Feed } from 'semantic-ui-react'

const ForecastCardPart = props => {

    
    console.log("forecastpart render ", props)
    return (
        <>
            <Feed>
                <Feed.Event>
                <Feed.Label image='/images/avatar/small/jenny.jpg' />
                <Feed.Content>
                    <Feed.Date content='1 day ago' />
                    <Feed.Summary>
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>
            </Feed>
        </>

    );
}

export default ForecastCardPart;