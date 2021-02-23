import React from 'react';
import App from '../Components/App';

const protectedRoutes = [
  {
    name: 'home',
    exact: true,
    path: '/home',
    main: (props: any) => <App {...props} />,
    public: false,
  },
];

export default protectedRoutes;
