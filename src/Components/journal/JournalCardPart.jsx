import React from 'react'
import { Feed } from 'semantic-ui-react'

const JournalCardPart = ({ entry }) => {
    const date1 = new Date(entry.session_start_time),
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
                         <p>{entry.entry}</p>       
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>
            </Feed>
        </>
    );
}

export default JournalCardPart;