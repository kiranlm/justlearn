import React from 'react';
import LoginForm from '../Components/Auth/LoginForm';
import RegisterForm from '../Components/Auth/RegisterForm';

const routes = [
  { name: 'Login', path: '/', exact: true, main: () => <LoginForm /> },
  { name: 'Register', path: '/register', exact: true, main: () => <RegisterForm /> },
];

export default routes;
