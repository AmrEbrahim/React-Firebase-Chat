import React from "react";
import { Button } from "react-bootstrap";
import { auth } from "../../firebase";

function SignIn() {
  return (
    <div className='mt-3'>
      <Button
        className='btn-danger'
        onClick={() => {
          auth.signOut();
        }}>
        Sign Out
      </Button>
    </div>
  );
}

export default SignIn;
