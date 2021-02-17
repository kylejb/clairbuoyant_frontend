import { Route } from 'react-router-dom';
import BuoyContainer from '../Containers/BuoyContainer';


const StaticLayout = props => {
  // const currentUser = JSON.parse(localStorage.getItem('loggedIn'));


  return (
    <Route path="/home" component={BuoyContainer} />
  );
};

export default StaticLayout;
