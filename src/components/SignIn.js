import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { signInWithGoogle } from '../firebase';

const SignIn = () => {
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError('Error signing in. Please try again later.');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button onClick={handleSignIn}>Sign in with Google</Button>
      <span style={{ marginRight: '10px' }}></span>
    </div>
  );
}

export default SignIn;
