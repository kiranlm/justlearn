import React, { FC, createContext, useState, useEffect } from 'react';
import { Spin } from 'antd';
import { auth } from '../Components/Auth';

export const UserContext = createContext<any>(null);

const UserProvider: FC = (props: any) => {
  const [userState, setUserState] = useState<any>(null);
  const [authPending, setAuthPending] = useState(true);

  const signIn = async (email: string, password: string) => {
    setAuthPending(true);
    const user = await auth.signInWithEmailAndPassword(email, password);
    setAuthPending(false);
    return user;
  };

  const signUp = (email: string, password: string) => auth.createUserWithEmailAndPassword(email, password);

  const signOut = () => auth.signOut();

  useEffect(
    () =>
      auth.onAuthStateChanged(userAuth => {
        setUserState(userAuth);
        setAuthPending(false);
      }),
    []
  );

  return authPending ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Spin />
    </div>
  ) : (
    <UserContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        userState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
