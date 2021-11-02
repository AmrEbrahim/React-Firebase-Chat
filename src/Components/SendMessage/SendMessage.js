import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={handleSubmit} className='sendMsg'>
      <input
        type='text'
        placeholder='Type Message'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button type='submit'>SEND</button>
    </form>
  );
}

export default SendMessage;
