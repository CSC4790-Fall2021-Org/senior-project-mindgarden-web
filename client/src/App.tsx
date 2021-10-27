import React, { useState, useEffect } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import AuthRoute from "./components/Authentication/AuthRoute";
import routes from "./config/routes";
import { Navbar } from "./components/Navbar";
import logging from "./config/logging";
import { auth } from "./config/firebase";
import Loader from "./components/shared/LoadingView";
import { NotFound } from "./pages/NotFound";
import { FirebaseProvider } from "./contexts/FirebaseContext";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        logging.info("user detected.");
        setIsLoggedIn(true);
      } else {
        logging.info("no user detected.");
        setIsLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="bg-darkWhite h-screen flex flex-col justify-center items-center w-screen">
        <Loader />
      </div>
    );
  return (
    <FirebaseProvider>
      <div className="bg-darkWhite">
        <Navbar isLoggedIn={isLoggedIn} />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(routeProps: RouteComponentProps<any>) => {
                if (route.protected)
                  return (
                    <AuthRoute>
                      <route.component {...routeProps} />
                    </AuthRoute>
                  );
                console.log(route, "route");
                return (
                  <div className="bg-darkWhite h-screen flex flex-col justify-center items-center w-screen">
                    <route.component {...routeProps} />
                  </div>
                );
              }}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </div>
    </FirebaseProvider>
  );
};

export default App;
