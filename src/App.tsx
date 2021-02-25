import React, { FC, useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routes';
import protectedRoutes from './Routes/ProtectedRoutes';
import ProtectedRouteHoc from './Routes/ProtectedRouteHoc';
import './styles/index.css';
import UserProvider from './Providers/UserProvider';

const App: FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default App;
