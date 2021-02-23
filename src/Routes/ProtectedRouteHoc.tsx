import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedRouteHoc = ({ component: Component, isLoggedIn, ...rest }: any) =>
  isLoggedIn || rest.public ? <Route {...rest} render={(props: any) => <Component {...props} />} /> : <Redirect to={{ pathname: '/' }} />;

export default withRouter(ProtectedRouteHoc);
