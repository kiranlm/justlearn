import React, { FC, createContext, useState, useEffect } from 'react';
import { auth } from '../Components/Auth';

export const UserContext = createContext<any>({ user: null });

const UserProvider: FC = props => {
  const [user, setUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setUser({ user: userAuth });
    });
  }, []);

  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
};
export default UserProvider;
