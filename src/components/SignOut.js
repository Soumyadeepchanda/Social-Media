//SignOut.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../firebase';

const SignOut = () => {
  return (
    <Button onClick={signOut}>Sign Out</Button>
  );
};

export default SignOut;
