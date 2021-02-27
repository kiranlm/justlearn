import React from 'react';
import LoginForm from '../Components/Auth/LoginForm';
import RegisterForm from '../Components/Auth/RegisterForm';
import ProfilePage from '../Components/ProfilePage';

const publicRoutes = [
  { name: 'Login', path: '/', exact: true, main: () => <LoginForm /> },
  { name: 'Register', path: '/register', main: () => <RegisterForm /> },
];

const protectedRoutes = [
  {
    name: 'home',
    exact: true,
    path: '/home',
    main: (props: any) => <ProfilePage {...props} />,
    public: false,
  },
];

export { publicRoutes, protectedRoutes };
