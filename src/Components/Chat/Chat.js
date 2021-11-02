import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";
import { Image } from "react-bootstrap";
import { auth, db } from "../../firebase";
import SendMessage from "../SendMessage/SendMessage";
import SignOut from "../SignOut/SignOut";

function Chat() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const messagesRefs = collection(db, "messages");
    const q = query(messagesRefs, orderBy("createdAt"), limit(50));
    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
    });
  }, [setMessages]);
  return (
    <div>
      <SignOut />
      <div className='msgs'>
        {messages.map(({ id, text, photoURL, uid }, index) => (
          <div key={index}>
            <div
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}>
              <Image src={photoURL} alt='' />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
