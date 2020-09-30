import React, { useState, useEffect } from 'react';
import FormModal from '../forms/FormModal';
import { Button, Container } from 'semantic-ui-react';
import ForecastCard from '../forecast/ForecastCard';
import JournalCard from '../journal/JournalCard';

const BuoyCard = props => {
    const [isFav, setIsFavClicked] = useState(props.isFav);

    
    useEffect(() => {
        props.handleUserFavorites(props.selectedBuoy, isFav)
        // eslint-disable-next-line
    }, [isFav])


    return (
        <Container>
            <h2>{props.selectedBuoy.station_name}</h2>
                <Button onClick={ () => {
                    setIsFavClicked(!isFav)   
                }}>
                   {isFav ? "Unfavorite" : "Favorite"}
                </Button>

                <Button as={()=> <FormModal selectedBuoy={props.selectedBuoy} />} />                 

                { props.selectedBuoyMetData && (
                    <ForecastCard selectedBuoyMetData={props.selectedBuoyMetData} />
                )}

                { props.selectedBuoy && (
                    <JournalCard selectedBuoy={props.selectedBuoy} /> 
                )}
                
                
            <p>{props.selectedBuoy.longitude}, {props.selectedBuoy.latitude}</p>
        </Container>
    );
}

export default BuoyCard;