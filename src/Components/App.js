import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebase";
import "./App.css";
import Chat from "./Chat/Chat";
import SignIn from "./SignIn/SignIn";

function App() {
  const [user] = useAuthState(auth);
  return <Container>{user ? <Chat /> : <SignIn />}</Container>;
}

export default App;
