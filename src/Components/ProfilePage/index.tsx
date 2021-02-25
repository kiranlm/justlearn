import React, { useContext } from 'react';
import { UserContext } from '../../Providers/UserProvider';

const ProfilePage = () => {
  const auth = useContext(UserContext);
  const { userState, signOut } = auth;
  return (
    <div>
      <div>
        <div
          style={{
            background: `url(${
              userState.photoURL || 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            })  no-repeat center center`,
            backgroundSize: 'cover',
            height: '200px',
            width: '200px',
          }}
        />
        <div>
          <h2>{userState.displayName}</h2>
          <h3>{userState.email}</h3>
        </div>
      </div>
      <button
        type='button'
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};
export default ProfilePage;
