import React from 'react';
import LoginForm from '../Components/Login';
// import Register from '../Components/Register';

const routes = [
  //   { name: 'Register', path: '/', exact: true, main: () => <Register /> },
  { name: 'Login', path: '/', exact: true, main: () => <LoginForm /> },
];

export default routes;
