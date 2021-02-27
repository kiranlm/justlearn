import React, { FC, useContext } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { ContentLayout, PublicLayout } from '../Layouts';
import { UserContext } from '../Providers/UserProvider';
import { protectedRoutes, publicRoutes } from '../Routes';
import { IRouteProps } from '../Routes/IRouteProps';
import ProtectedRouteHoc from '../Routes/ProtectedRouteHoc';

const Main: FC = () => {
  const user = useContext(UserContext);
  const { userState } = user;
  const Layout = userState ? ContentLayout : PublicLayout;
  return (
    <div>
      <Router>
        <Switch>
          <Layout>
            {protectedRoutes.map((route: IRouteProps) => (
              <ProtectedRouteHoc
                key={route.path}
                isLoggedIn={userState}
                path={route.path}
                component={route.main}
                exact={route.exact}
                public={route.public}
              />
            ))}
            {publicRoutes.map((route: IRouteProps) => (
              <Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
            ))}
          </Layout>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
