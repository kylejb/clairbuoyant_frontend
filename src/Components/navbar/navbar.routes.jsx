import React from 'react';
import { Route } from 'react-router-dom';
import UserLoginForm from '../forms/UserLoginForm';

const NavigationBarRouter = props => {
    // handleUserState={props.handleUserState}
    return (
        <>
            <Route path="/login" render={ ( routerProps ) => <UserLoginForm {...routerProps} />} />
            {/* <Route path="/register" render={ ( routerProps ) => <RegistrationForm {...routerProps} />} /> */}
        </>
    );
}

export default NavigationBarRouter;