import { useState } from 'react';
import FormModal from '../forms/FormModal';
import ForecastCard from '../forecast/ForecastCard';
import JournalCard from '../journal/JournalCard';
import { Button, Container } from 'semantic-ui-react';

const BuoyCard = props => {
  const [favBtnClicked, setFavBtnClicked] = useState(props.isFav),
    [postEntryToOptimisticRerender, setPostEntryToOptimisticRerender] = useState(null);

  const buoyCardStateWrapper = (postEntryObj) => {
    setPostEntryToOptimisticRerender(postEntryObj);
  };


  return (
    <Container>
      <h2>{props.selectedBuoy.station_name}</h2>
        <Button onClick={ () => {
          setFavBtnClicked(!favBtnClicked);
          props.handleUserFavorites(props.selectedBuoy, !favBtnClicked);
          props.toggleIsFav(!favBtnClicked);
        }}> {favBtnClicked ? "Unfavorite" : "Favorite"} </Button>

        <Button as={()=> <FormModal
                            selectedBuoy={props.selectedBuoy}
                            entrySubmitHandler={props.entrySubmitHandler}
                            entryRerenderHandler={buoyCardStateWrapper}/>
                          }
        />

        { props.selectedBuoyMetData && (
          <ForecastCard selectedBuoyMetData={props.selectedBuoyMetData} />
        )}

        { props.selectedBuoy && (
          <JournalCard
            selectedBuoy={props.selectedBuoy}
            entrySubmitHandler={props.entrySubmitHandler}
            newEntry={postEntryToOptimisticRerender}
          />
        )}
      <p>{props.selectedBuoy.longitude}, {props.selectedBuoy.latitude}</p>
    </Container>
  );
};

export default BuoyCard;
