import React from 'react';
import LoginForm from '../Components/Auth/LoginForm';
import RegisterForm from '../Components/Auth/RegisterForm';
import ClassRoom from '../Components/ClassRoom';
import { CourseList, Course } from '../Components/Course';
import ProfilePage from '../Components/ProfilePage';

const publicRoutes = [
  { name: 'Login', path: '/login', exact: true, main: () => <LoginForm /> },
  { name: 'Register', path: '/register', main: () => <RegisterForm /> },
];

const protectedRoutes = [
  {
    name: 'profile',
    exact: true,
    path: '/profile',
    main: (props: any) => <ProfilePage {...props} />,
    public: false,
  },
  {
    name: 'courses',
    exact: true,
    path: '/courses',
    main: (props: any) => <CourseList {...props} />,
    public: false,
  },
  {
    name: 'course',
    exact: true,
    path: '/course/:id',
    main: (props: any) => <Course {...props} />,
    public: false,
  },
  {
    name: 'classroom',
    exact: true,
    path: '/classroom/:session',
    main: (props: any) => <ClassRoom {...props} />,
    public: false,
  },
];

export { publicRoutes, protectedRoutes };
