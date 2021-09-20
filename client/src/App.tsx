import React, { useState} from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import  RegisterPage  from './pages/Auth/Register';
import AuthRoute from './components/Authentication/AuthRoute';
import routes from './config/routes';
import { Navbar  } from './components/Navbar';
import { AuthProvider } from './contexts/Auth/AuthProvider';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = props => {
  // const [loading, setLoading] = useState<boolean>(true);

  return (
    <AuthProvider>
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
      </AuthProvider>
  );
}

export default App;
