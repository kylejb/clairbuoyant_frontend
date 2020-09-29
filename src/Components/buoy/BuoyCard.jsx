import React, { useState, useEffect } from 'react';
import FormModal from '../forms/FormModal';
import { Button, Container } from 'semantic-ui-react';
import ForecastCard from '../forecast/ForecastCard';
import JournalCard from '../journal/JournalCard';

const BuoyCard = props => {
    const [isFavClicked, setIsFavClicked] = useState(false);

    // eslint-disable-next-line
    const submitFavHandler = (selectedBuoy) => {
        props.handleUserFavorites(selectedBuoy, isFavClicked)
    }

    const renderFavButtonTextonToggle = () => {
        if (isFavClicked) {
            return "Unfavorite";
        } else {
            return "Favorite";
        }
    }

    useEffect(() => {
        submitFavHandler(props.selectedBuoy)
        // eslint-disable-next-line
    }, [isFavClicked])



    return (
        <Container>
            <h2>{props.selectedBuoy.station_name}</h2>
                <Button onClick={ () => {
                    setIsFavClicked(prevState => !prevState);
                }}>
                    {renderFavButtonTextonToggle()}
                </Button>

                <Button as={()=>FormModal(props.selectedBuoy)}>                    
                </Button>

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