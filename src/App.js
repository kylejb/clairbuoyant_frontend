import { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './Components/Header';
import LoginForm from './Components/forms/UserLoginForm'
import StaticLayout from './Components/StaticLayout';


const App = (props) => {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState(null);


  const handleUserLogin = async (email, password) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user: {email, password}})
    };
    let response = await fetch("http://localhost:3000/api/v1/login", options);
    let userData = await response.json();
    setCurrentUser(userData)
    props.history.push('/home');
    window.localStorage.setItem("loggedIn", JSON.stringify(userData.jwt));
  }

  const handleUserLogout = () => {
    setCurrentUser(false);
    window.localStorage.removeItem("loggedIn");
  };

  return (
    <>
      <Route path="/" render={ ( routerProps ) => <Header {...routerProps} handleUserLogout={handleUserLogout} />} />
      <StaticLayout />
      <Route exact path="/login" render={() => <LoginForm handleUserLogin={handleUserLogin} />} />
    </>
  );
};

export default withRouter(App);
