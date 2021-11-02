import React from "react";
import { Button } from "react-bootstrap";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn() {
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div className='mt-3'>
      <Button variant='danger' onClick={signInWithGoogle}>
        Sign in With google
      </Button>
    </div>
  );
}

export default SignIn;
