//UserProfile.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      {currentUser ? (
        <p style={{ color: '#fff', textShadow: '0 0 10px #fff',fontWeight: 'bold' }}>Welcome, {currentUser.displayName}</p>
      ) : (
        <p style={{ color: '#fff', textShadow: '0 0 10px #fff',fontWeight: 'bold' }}>Please sign in</p>
      )}
    </div>
  );
};

export default UserProfile;
