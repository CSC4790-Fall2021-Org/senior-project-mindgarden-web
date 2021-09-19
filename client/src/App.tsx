import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import  RegisterPage  from './pages/Auth/Register';
import AuthRoute from './components/Authentication/AuthRoute';
import routes from './config/routes';
import { Navbar  } from './components/Navbar';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = props => {
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
                          return <div className="bg-darkWhite h-screen flex flex-col justify-center items-center w-screen"><route.component  {...routeProps} /></div>
                      }}
                  />)}
          </Switch>
      </div>
  );
}

export default App;
