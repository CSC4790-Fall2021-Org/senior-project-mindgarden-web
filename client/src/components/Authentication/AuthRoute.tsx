import React from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import { Navbar  } from '../Navbar';

export interface IAuthRouteProps { }

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;

    if (!auth.currentUser)
    {
        logging.warn('No user detected, redirecting');
        return (
          <div className="bg-darkWhite h-screen flex flex-col justify-center items-center w-screen">
            <Redirect to="/home" />
          </div>
          );
    }

    return (
        <div className="loco">
          {children}
          </div>
    );

}

export default AuthRoute;