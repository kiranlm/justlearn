import React from 'react';
import Main from '../Components/Main';

const protectedRoutes = [
  {
    name: 'home',
    exact: true,
    path: '/home',
    main: (props: any) => <Main {...props} />,
    public: false,
  },
];

export default protectedRoutes;
