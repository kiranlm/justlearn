import React, { FC } from 'react';
import './styles/index.css';
import UserProvider from './Providers/UserProvider';
import Main from './Components/Main';

const App: FC = () => (
  <UserProvider>
    <Main />
  </UserProvider>
);

export default App;
