import React, { useState, useEffect } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import AuthRoute from './components/Authentication/AuthRoute';
import routes from './config/routes';
import { Navbar  } from './components/Navbar';
import logging from './config/logging';
import { auth } from './config/firebase';
import Loader from './components/shared/LoadingView';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = props => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
   auth.onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
          logging.info("user detected.");
      } else {
          logging.info("no user detected.")
      }
      setLoading(false)
    });
  }, []);

  if (loading) 
    return <div className="bg-darkWhite h-screen flex flex-col justify-center items-center w-screen"><Loader/></div>
  return (
      <div>
        <Navbar/>
          <Switch>
              {routes.map((route, index) => 
                  <Route
                      key={index}
                      path={route.path} 
                      exact={route.exact} 
                      render={(routeProps: RouteComponentProps<any>) => {
                          if (route.protected)
                              return (         
                              <AuthRoute><route.component  {...routeProps} /></AuthRoute>
                              );
                              console.log(route, "route")
                          return <div className="bg-darkWhite h-screen flex flex-col justify-center items-center w-screen"><route.component  {...routeProps} /></div>
                      }}
                  />)}
          </Switch>
      </div>
  );
}

export default App;
