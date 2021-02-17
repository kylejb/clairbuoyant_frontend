import { Route } from 'react-router-dom';
import UserLoginForm from '../forms/UserLoginForm';

const NavigationBarRouter = () => {
  return (
    <>
      <Route
        path="/login"
        render={ ( routerProps ) => <UserLoginForm {...routerProps} />}
      />
    </>
  );
};

export default NavigationBarRouter;
