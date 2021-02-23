import React, { FC, useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';
import routes from './Routes';
import protectedRoutes from './Routes/ProtectedRoutes';
import firebaseConfig from './Config/firebase.config';
import ProtectedRouteHoc from './Routes/ProtectedRouteHoc';
import './styles/index.css';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext({});

const App: FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function readSession() {
    const user = window.sessionStorage.getItem(`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`);
    if (user) setLoggedIn(true);
  }
  useEffect(() => {
    readSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div>
        <Router>
          <div>
            <div>Header</div>
          </div>
          <div>
            <div>
              <Switch>
                {protectedRoutes.map((route: any) => (
                  <ProtectedRouteHoc
                    key={route.path}
                    isLoggedIn={isLoggedIn}
                    path={route.path}
                    component={route.main}
                    exact={route.exact}
                    public={route.public}
                  />
                ))}
                {routes.map((route: any) => (
                  <Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
                ))}
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
